/* ============================================================
   وقّاد — دالّةُ النشر الخادميّة (لوحة الإدارة)
   تتحقّق من كلمة المرور خادميًّا، ثمّ تلتزم الملفّاتِ في المستودع عبر GitHub API
   في التزامٍ واحدٍ ذرّيّ (Git Data API). التوكن السرّيّ يبقى في متغيّرات بيئة
   Netlify ولا يصل المتصفّح أبدًا.

   متغيّرات البيئة المطلوبة (تُضبط في Netlify → Site settings → Environment):
     GITHUB_TOKEN    توكن GitHub مُحكم النطاق (Contents: Read and write على مستودع واحد)
     ADMIN_PASSWORD  كلمة مرور المدير
     GITHUB_REPO     "omar-alhatlani/waqqad"
     GITHUB_BRANCH   "main" (اختياريّ، الافتراضيّ main)

   بلا اعتماديّات — fetch مدمجٌ في Node 18+ على Netlify.
   ============================================================ */
const crypto = require('crypto');
const API = 'https://api.github.com';
// المساراتُ المسموحُ الالتزامُ بها فقط (تمنع الكتابةَ خارج بيانات المنهج)
const ALLOWED = /^assets\/data\/[a-z0-9-]+\.js$/;

function json(statusCode, obj){
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    },
    body: JSON.stringify(obj)
  };
}
function safeEqual(a, b){
  var ab = Buffer.from(String(a)), bb = Buffer.from(String(b));
  if(ab.length !== bb.length) return false;
  try { return crypto.timingSafeEqual(ab, bb); } catch(e){ return false; }
}
async function gh(token, method, url, body){
  const res = await fetch(API + url, {
    method,
    headers: {
      'Authorization': 'Bearer ' + token,
      'Accept': 'application/vnd.github+json',
      'User-Agent': 'waqqad-admin',
      'Content-Type': 'application/json'
    },
    body: body ? JSON.stringify(body) : undefined
  });
  const text = await res.text();
  let data; try { data = text ? JSON.parse(text) : {}; } catch(e){ data = { raw: text }; }
  if(!res.ok) throw new Error('GitHub ' + method + ' ' + url + ' → ' + res.status + ' ' + (data.message || ''));
  return data;
}

exports.handler = async function(event){
  if(event.httpMethod === 'OPTIONS') return json(204, {});
  if(event.httpMethod !== 'POST') return json(405, { error: 'method-not-allowed' });

  var body; try { body = JSON.parse(event.body || '{}'); } catch(e){ return json(400, { error: 'bad-json' }); }

  var ADMIN = process.env.ADMIN_PASSWORD || '';
  if(!ADMIN) return json(500, { error: 'server-not-configured', hint: 'ADMIN_PASSWORD غير مضبوط' });
  if(!safeEqual(body.password || '', ADMIN)) return json(401, { error: 'unauthorized' });

  // تحقّقٌ فقط (بوّابةُ دخول اللوحة)
  if(body.action === 'verify') return json(200, { ok: true });

  // تحليلاتُ Cloudflare Web Analytics: أكثرُ الصفحات زيارةً (عبر GraphQL)
  if(body.action === 'analytics'){
    var cfToken = process.env.CF_API_TOKEN, cfAccount = process.env.CF_ACCOUNT_ID;
    var siteTag = process.env.CF_SITE_TAG || '5659bcf9c15a4f9b9f742a16dcbbb34e';
    if(!cfToken || !cfAccount) return json(500, { error: 'cf-not-configured', hint: 'CF_API_TOKEN/CF_ACCOUNT_ID غير مضبوط' });
    var days = Math.min(90, Math.max(1, parseInt(body.days, 10) || 7));
    var end = new Date(), start = new Date(end.getTime() - days*86400000);
    var query = 'query($a:String!,$s:String!,$start:Time!,$end:Time!){viewer{accounts(filter:{accountTag:$a}){'+
      'top:rumPageloadEventsAdaptiveGroups(limit:20,filter:{siteTag:$s,datetime_geq:$start,datetime_leq:$end},orderBy:[count_DESC]){count dimensions{requestPath}}'+
      'total:rumPageloadEventsAdaptiveGroups(limit:1,filter:{siteTag:$s,datetime_geq:$start,datetime_leq:$end}){count}'+
      '}}}';
    try{
      var cfr = await fetch('https://api.cloudflare.com/client/v4/graphql', {
        method: 'POST',
        headers: { 'Authorization': 'Bearer ' + cfToken, 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: query, variables: { a: cfAccount, s: siteTag, start: start.toISOString(), end: end.toISOString() } })
      });
      var cd = await cfr.json();
      if(cd.errors && cd.errors.length) return json(502, { error: 'cf-query', detail: cd.errors.map(function(e){ return e.message; }).join(' | ') });
      var acct = (cd.data && cd.data.viewer && cd.data.viewer.accounts && cd.data.viewer.accounts[0]) || {};
      return json(200, { ok: true, days: days, top: acct.top || [], total: (acct.total && acct.total[0] && acct.total[0].count) || 0 });
    } catch(err){ return json(502, { error: 'cf', detail: String(err && err.message || err) }); }
  }

  if(body.action === 'publish'){
    var files = Array.isArray(body.files) ? body.files : [];
    if(!files.length) return json(400, { error: 'no-files' });
    for(var i=0;i<files.length;i++){
      var fpath = files[i] && files[i].path;
      var isDel = files[i] && (files[i].del === true || files[i].content === null);
      if(typeof fpath !== 'string' || !ALLOWED.test(fpath) || (!isDel && typeof files[i].content !== 'string'))
        return json(400, { error: 'bad-path', path: fpath });
    }
    var token = process.env.GITHUB_TOKEN;
    var repo = process.env.GITHUB_REPO;
    var branch = process.env.GITHUB_BRANCH || 'main';
    if(!token || !repo) return json(500, { error: 'server-not-configured', hint: 'GITHUB_TOKEN/GITHUB_REPO غير مضبوط' });

    var message = (typeof body.message === 'string' && body.message.trim()) ? body.message.trim() : 'لوحة الإدارة: تحديثُ المحتوى';
    try {
      // التزامٌ واحدٌ ذرّيّ لكلّ الملفّات عبر Git Data API
      var ref = await gh(token, 'GET', '/repos/' + repo + '/git/ref/heads/' + branch);
      var baseSha = ref.object.sha;
      var baseCommit = await gh(token, 'GET', '/repos/' + repo + '/git/commits/' + baseSha);
      var treeItems = [];
      for(var j=0;j<files.length;j++){
        if(files[j].del === true || files[j].content === null){
          treeItems.push({ path: files[j].path, mode: '100644', type: 'blob', sha: null }); // sha:null = حذفُ الملفّ
        } else {
          var blob = await gh(token, 'POST', '/repos/' + repo + '/git/blobs', { content: files[j].content, encoding: 'utf-8' });
          treeItems.push({ path: files[j].path, mode: '100644', type: 'blob', sha: blob.sha });
        }
      }
      var tree = await gh(token, 'POST', '/repos/' + repo + '/git/trees', { base_tree: baseCommit.tree.sha, tree: treeItems });
      var commit = await gh(token, 'POST', '/repos/' + repo + '/git/commits', { message: message, tree: tree.sha, parents: [baseSha] });
      await gh(token, 'PATCH', '/repos/' + repo + '/git/refs/heads/' + branch, { sha: commit.sha, force: false });
      return json(200, { ok: true, commit: commit.sha, count: files.length });
    } catch(err){
      return json(502, { error: 'github', detail: String(err && err.message || err) });
    }
  }

  return json(400, { error: 'unknown-action' });
};
