/* ============================================================
   مولّد صفحات السيو (المرحلة ٢) — وقّاد
   يُنشئ صفحةً ثابتةً مفهرَسةً لكل درسٍ منشور (الفصل الأول فقط)، وصفحاتِ فهرسٍ
   لكل صف/مادة، وخريطةَ موقعٍ شاملة — كي تفهرسها محركاتُ البحث وتوصل الزوّار.
   يعيد استعمال منطق M/isoRun/fracHTML من engine.js حرفيًّا كي يطابق العرضُ التطبيق.
   التشغيل:  node tools/gen-pages.js
   ============================================================ */
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const DATA = path.join(ROOT, 'assets', 'data');
const OUT = path.join(ROOT, 'lessons');
const SITE = 'https://waqqad.netlify.app';
const BEACON = '<script type="module" src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon=\'{"token": "5659bcf9c15a4f9b9f742a16dcbbb34e"}\'></script>';
const withBeacon = html => html.replace('</body>', BEACON+'\n</body>');

// ---------- تحميل المنهج والدروس ----------
global.window = {};
window.LESSONS = {}; window.SIMS = {};
require(path.join(DATA, 'curriculum.js'));
require(path.join(DATA, 'lesson-manifest.js'));
for (const f of fs.readdirSync(DATA)) {
  if (/^ar-(math|sci)-.*\.js$/.test(f) || /^en-.*\.js$/.test(f) || /^ar-.*\.js$/.test(f)) {
    try { require(path.join(DATA, f)); } catch (e) {}
  }
}
const C = window.CURRICULUM;
const LMAN = window.LMAN || window.LESSON_MANIFEST || {};
const LESSONS = window.LESSONS;

// ---------- منطق العرض المنقول من engine.js ----------
function fracHTML(sign, num, den){
  return '<span class="frac">'+(sign?'<span class="fsg">'+sign+'</span>':'')+
    '<span class="fb"><span class="fn">'+num+'</span><span class="fd">'+den+'</span></span></span>';
}
function isoRun(m){
  var lead=''; var lm=m.match(/^[\s=×÷≈]+/); if(lm){ lead=lm[0]; m=m.slice(lead.length); }
  var trail=''; var tm=m.match(/\s+$/); if(tm){ trail=tm[0]; m=m.slice(0,m.length-trail.length); }
  var stack=[], loose={}, i, ch;
  for(i=0;i<m.length;i++){ ch=m.charAt(i); if(ch==='(') stack.push(i); else if(ch===')'){ if(stack.length) stack.pop(); else loose[i]=1; } }
  while(stack.length) loose[stack.pop()]=1;
  var out='', seg='';
  function flush(){ if(seg){ out += (/[٠-٩]/.test(seg) ? '<span class="mx">'+seg+'</span>' : seg); seg=''; } }
  for(i=0;i<m.length;i++){ if(loose[i]){ flush(); out+=m.charAt(i); } else seg+=m.charAt(i); }
  flush(); return lead+out+trail;
}
function M(s, mathdir){
  if(!mathdir || typeof s!=='string' || s.indexOf('class="mx"')>-1 || s.indexOf('class="frac"')>-1) return s;
  var C2='(?:[+\\-−()|×÷=≈.,،٫…√٪°:/٠-٩\\s]|س(?![ء-ي]))';
  var CL='(?:[+\\-−()|×÷=≈٫√٪°/٠-٩\\s]|س(?![ء-ي]))';
  var RE=new RegExp(CL+'*[٠-٩]'+C2+'*','g');
  var T='(?:[٠-٩]+(?:٫[٠-٩]+)?|[ء-ي]ـ?)(?:<sup>[^<]*<\\/sup>)?';
  var FRAC=new RegExp('(^|[^ء-ي٠-٩])([-−]?'+T+')\\/('+T+')(?=$|[^ء-ي٠-٩])','g');
  var PP0=String.fromCharCode(0xE010), PP1=String.fromCharCode(0xE011), FR0=String.fromCharCode(0xE000), FR1=String.fromCharCode(0xE001);
  var prot=[];
  s=s.replace(/(?:[٠-٩]+(?:٫[٠-٩]+)?|[ء-ي]ـ?)(?:\/(?:[٠-٩]+(?:٫[٠-٩]+)?|[ء-ي]ـ?)){2,}/g,function(m){ prot.push(m); return PP0+(prot.length-1)+PP1; });
  var frs=[];
  s=s.replace(FRAC,function(_m,b,nu,de){ var sg='', c=nu.charAt(0); if(c==='-'||c==='−'){ sg='−'; nu=nu.slice(1); } frs.push(fracHTML(sg,nu,de)); return b+FR0+(frs.length-1)+FR1; });
  s=s.replace(new RegExp(PP0+'(\\d+)'+PP1,'g'),function(_m,i){ return prot[+i]; });
  var PE0=String.fromCharCode(0xE020), PE1=String.fromCharCode(0xE021), exps=[];
  s=s.replace(/([٠-٩]+(?:٫[٠-٩]+)?|[ء-ي])(<sup>[^<]*<\/sup>)/g,function(_m,base,sup){ exps.push(sup); return base+PE0+(exps.length-1)+PE1; });
  s=s.replace(/(<[^>]+>)|([^<]+)/g, function(_x,tag,text){ if(tag) return tag; return text.replace(RE, function(m){ return isoRun(m); }); });
  s=s.replace(new RegExp(PE0+'(\\d+)'+PE1,'g'),function(_m,i){ return exps[+i]; });
  s=s.replace(new RegExp(FR0+'(\\d+)'+FR1,'g'),function(_m,i){ return frs[+i]; });
  return s;
}

// ---------- أدوات ----------
function esc(s){ return String(s==null?'':s).replace(/[&<>"']/g,function(c){ return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]; }); }
function stripToText(s){ return String(s||'').replace(/<[^>]+>/g,'').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&').replace(/&#39;/g,"'").replace(/\s+/g,' ').trim(); }
function slug(ref){ return ref.toLowerCase().replace(/_/g,'-'); }
function byId(arr,id){ return (arr||[]).filter(function(x){return x.id===id;})[0]; }
function clip(s,n){ s=stripToText(s); return s.length>n ? s.slice(0,n-1).trim()+'…' : s; }

// اجمع كل الدروس المنشورة (s1) مع سياقها
var pages = []; // {ref, L, mathdir, grade, subject, semKey, unitTitle, unitSem, siblings:[{t,ref}]}
for (var ck in C.content) {
  var parts = ck.split('.'); // grade.sem.subject
  if (parts[1] !== 's1') continue;                 // الفصل الأول فقط
  var sem = byId(C.semesters, parts[1]); if (sem && sem.locked) continue;
  var grade = byId(C.grades, parts[0]);
  var subject = byId(C.subjects, parts[2]);
  if (!grade || !subject) continue;
  var content = C.content[ck];
  (content.units || []).forEach(function(u){
    var sibs = (u.lessons||[]).filter(function(ls){ return ls.ref && LESSONS[ls.ref]; })
                              .map(function(ls){ return {t:ls.t, ref:ls.ref}; });
    (u.lessons || []).forEach(function(ls){
      if (!ls.ref || !LESSONS[ls.ref]) return;      // بلا درسٍ مبنيٍّ ← «قريبًا»، نتخطّاه
      var L = LESSONS[ls.ref];
      pages.push({ ref:ls.ref, L:L, mathdir:!!L.mathdir, grade:grade, subject:subject,
        unitTitle:u.t, unitSem:u.s||'', title:ls.t||L.title||ls.ref,
        siblings:sibs.filter(function(x){return x.ref!==ls.ref;}) });
    });
  });
}

// ---------- قوالب ----------
function head(o){
  return '<!doctype html>\n<html lang="ar" dir="rtl">\n<head>\n'+
  '<meta charset="utf-8">\n'+
  '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'+
  '<meta http-equiv="Content-Security-Policy" content="default-src \'self\'; script-src \'self\' https://static.cloudflareinsights.com; connect-src \'self\' https://cloudflareinsights.com; style-src \'self\' \'unsafe-inline\' https://fonts.googleapis.com; font-src \'self\' https://fonts.gstatic.com data:; img-src \'self\' data:; base-uri \'self\'; object-src \'none\'">\n'+
  '<title>'+esc(o.title)+'</title>\n'+
  '<meta name="description" content="'+esc(o.desc)+'">\n'+
  '<meta name="robots" content="index, follow, max-image-preview:large">\n'+
  '<link rel="canonical" href="'+o.url+'">\n'+
  '<meta name="theme-color" content="#4B45C6">\n'+
  '<link rel="icon" href="/icons/icon.svg" type="image/svg+xml">\n'+
  '<meta property="og:type" content="article">\n'+
  '<meta property="og:site_name" content="وقّاد">\n'+
  '<meta property="og:locale" content="ar_SA">\n'+
  '<meta property="og:url" content="'+o.url+'">\n'+
  '<meta property="og:title" content="'+esc(o.title)+'">\n'+
  '<meta property="og:description" content="'+esc(o.desc)+'">\n'+
  '<meta property="og:image" content="'+SITE+'/icons/og.png">\n'+
  '<meta name="twitter:card" content="summary_large_image">\n'+
  '<meta name="twitter:title" content="'+esc(o.title)+'">\n'+
  '<meta name="twitter:description" content="'+esc(o.desc)+'">\n'+
  '<meta name="twitter:image" content="'+SITE+'/icons/og.png">\n'+
  (o.jsonld ? '<script type="application/ld+json">\n'+o.jsonld+'\n</script>\n' : '')+
  '<link rel="preconnect" href="https://fonts.googleapis.com">\n'+
  '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n'+
  '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cairo:wght@600;700;800;900&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap">\n'+
  '<link rel="stylesheet" href="/assets/styles.css">\n'+
  '<style>'+PAGECSS+'</style>\n</head>\n';
}
var PAGECSS = [
 'body{margin:0;font-family:"IBM Plex Sans Arabic",system-ui,sans-serif;background:#F5F6FB;color:#1a1c2b;line-height:1.85}',
 '.lp{max-width:820px;margin:0 auto;padding:0 18px 60px}',
 '.lpbar{display:flex;align-items:center;justify-content:space-between;padding:16px 18px;max-width:820px;margin:0 auto}',
 '.lpbrand{font-family:"Cairo",sans-serif;font-weight:900;font-size:26px;color:#4B45C6;text-decoration:none}',
 '.lpbrand small{display:block;font-size:12px;font-weight:600;color:#6b6f8a}',
 '.lpnav a{color:#4B45C6;text-decoration:none;font-weight:700;font-size:15px}',
 '.crumbs2{font-size:13.5px;color:#6b6f8a;margin:6px 0 18px;flex-wrap:wrap;display:flex;gap:6px}',
 '.crumbs2 a{color:#4B45C6;text-decoration:none}',
 '.lphero{background:linear-gradient(135deg,#5b54e0,#4B45C6);color:#fff;border-radius:22px;padding:34px 30px;box-shadow:0 18px 40px -22px rgba(75,69,198,.7)}',
 '.lphero .eyebrow{display:inline-block;background:rgba(255,255,255,.16);border:1px solid rgba(255,255,255,.28);padding:6px 15px;border-radius:999px;font-size:13.5px;font-weight:700;margin-bottom:14px}',
 '.lphero h1{margin:0 0 8px;font-family:"Cairo",sans-serif;font-size:34px;line-height:1.3;font-weight:900}',
 '.lphero p{margin:0;color:#e5e3ff;font-size:16px}',
 '.cta{display:inline-flex;align-items:center;gap:10px;margin-top:22px;background:#FF7A00;color:#fff;font-weight:800;font-size:18px;padding:14px 28px;border-radius:14px;text-decoration:none;box-shadow:0 12px 26px -12px rgba(255,122,0,.8)}',
 '.sec{background:#fff;border:1px solid #e7e8f2;border-radius:18px;padding:24px 26px;margin-top:22px}',
 '.sec h2{font-family:"Cairo",sans-serif;font-size:22px;margin:0 0 14px;color:#2a2c45}',
 '.lp-intro{font-size:17px}',
 '.lp-trick{background:#fff7ed;border:1px solid #ffd9a8;border-radius:12px;padding:14px 18px;margin-top:14px;font-size:16px}',
 '.rel{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px;margin-top:6px}',
 '.rel a{display:block;background:#f3f3fb;border:1px solid #e7e8f2;border-radius:12px;padding:12px 16px;text-decoration:none;color:#2a2c45;font-weight:600}',
 '.rel a:hover{border-color:#4B45C6}',
 '.lpfoot{max-width:820px;margin:34px auto 0;padding:20px 18px;color:#6b6f8a;font-size:13.5px;text-align:center;border-top:1px solid #e7e8f2}',
 '@media(max-width:560px){.lphero h1{font-size:26px}.lphero{padding:26px 20px}}'
].join('');

function ruleHTML(L){
  var r = L.rule; if (!r) return '';
  var md = !!L.mathdir, h = '';
  if (r.intro) h += '<div class="lp-intro'+(L.lang==='en'?' ltr':'')+'">'+M(r.intro, md)+'</div>';
  if (r.formula) h += '<div class="wq-formula'+(L.lang==='en'?' en':'')+'" style="margin-top:14px">'+M(r.formula, md)+'</div>';
  if (r.table && r.table.length){
    h += '<div style="margin-top:16px">';
    r.table.forEach(function(row){ h += '<div class="berow"><span class="subj'+(L.lang==='en'?' en':'')+'">'+M(row[0],md)+'</span><span class="arw">◀</span><span class="be'+(L.lang==='en'?' en':'')+'">'+M(row[1],md)+'</span></div>'; });
    h += '</div>';
  }
  if (r.examples && r.examples.length){
    h += '<div style="margin-top:14px">';
    r.examples.forEach(function(e){ h += '<div class="example'+(L.lang==='en'?' en':'')+'">'+M(e,md)+'</div>'; });
    h += '</div>';
  }
  if (r.trick) h += '<div class="lp-trick">💡 '+M(r.trick, md)+'</div>';
  return h;
}

function lessonPage(p){
  var url = SITE + '/lessons/' + slug(p.ref) + '.html';
  var subjG = p.subject.name + ' · ' + p.grade.name;
  var title = p.title + ' — ' + subjG + ' | وقّاد';
  var descBase = 'شرحٌ مبسّط وتمارينُ تفاعلية لدرس «' + p.title + '» في ' + p.subject.name + ' لـ' + p.grade.name + '. ';
  var intro = p.L.rule && p.L.rule.intro ? clip(p.L.rule.intro, 110) : '';
  var desc = clip(descBase + intro, 158);
  var jsonld = JSON.stringify({
    "@context":"https://schema.org","@type":"LearningResource","name":p.title,
    "description":stripToText(descBase+intro),"url":url,"inLanguage":p.L.lang==='en'?'en':'ar',
    "educationalLevel":p.grade.name,"learningResourceType":"درس تفاعلي","about":p.subject.name,
    "isAccessibleForFree":true,"isPartOf":{"@type":"Course","name":p.subject.name+' — '+p.grade.name},
    "provider":{"@type":"EducationalOrganization","name":"منصّة وقّاد","url":SITE+'/'}
  });
  var crumbs = '<nav class="crumbs2"><a href="/">الرئيسية</a> ›<a href="/lessons/">الدروس</a> ›'+
    '<a href="/lessons/'+p.grade.id+'-'+p.subject.id+'.html">'+esc(p.subject.name+' · '+p.grade.name)+'</a> ›'+
    '<span>'+esc(p.unitTitle)+'</span> ›<span>'+esc(p.title)+'</span></nav>';
  var rel = p.siblings.length ? ('<div class="sec"><h2>دروسٌ ذاتُ صلة</h2><div class="rel">'+
    p.siblings.map(function(s){ return '<a href="/lessons/'+slug(s.ref)+'.html">'+esc(s.t)+'</a>'; }).join('')+'</div></div>') : '';
  var body = '<body>\n'+
  '<div class="lpbar"><a class="lpbrand" href="/">وقّاد<small>حيث يتّقد الذهن</small></a><nav class="lpnav"><a href="/lessons/">كل الدروس</a></nav></div>\n'+
  '<div class="lp">\n'+ crumbs +
  '<div class="lphero"><span class="eyebrow">'+esc(p.subject.name+' · '+p.grade.name+' · '+p.unitTitle)+'</span>'+
    '<h1>'+esc(p.title)+'</h1>'+
    '<p>شرحٌ مبسّطٌ وتمارينُ تفاعلية مجانية — بلا تسجيل.</p>'+
    '<a class="cta" href="/?lesson='+encodeURIComponent(p.ref)+'">▶ ابدأ الدرس التفاعلي</a></div>\n'+
  (ruleHTML(p.L) ? '<div class="sec"><h2>القاعدة</h2>'+ruleHTML(p.L)+'</div>\n' : '')+
  '<div class="sec" style="text-align:center"><h2>هل أنت مستعدّ؟</h2><p style="color:#5a5d78;margin:0 0 8px">جرّبِ المراحلَ التفاعلية واكسبِ النجوم.</p><a class="cta" href="/?lesson='+encodeURIComponent(p.ref)+'">▶ ابدأ الدرس التفاعلي</a></div>\n'+
  rel +
  '</div>\n'+
  '<footer class="lpfoot">منصّة «وقّاد» التعليمية · تصميم وإشراف المعلّم عمر بن عبدالله الهطلاني · <a href="/" style="color:#4B45C6">الصفحة الرئيسية</a></footer>\n'+
  '</body>\n</html>\n';
  return head({title:title, desc:desc, url:url, jsonld:jsonld}) + body;
}

// صفحة فهرس لكل صف/مادة
function indexPage(gradeId, subId, list){
  var grade=byId(C.grades,gradeId), subject=byId(C.subjects,subId);
  var url = SITE+'/lessons/'+gradeId+'-'+subId+'.html';
  var title = subject.name+' — '+grade.name+' · شرحٌ وتمارين تفاعلية | وقّاد';
  var desc = clip('كل دروس '+subject.name+' لـ'+grade.name+' في منصّة وقّاد: شرحٌ مبسّط وتمارينُ تفاعلية مجانية بلا تسجيل — '+list.map(function(p){return p.title;}).slice(0,8).join('، ')+'.',158);
  var byUnit={};
  list.forEach(function(p){ (byUnit[p.unitTitle]=byUnit[p.unitTitle]||[]).push(p); });
  var secs=Object.keys(byUnit).map(function(ut){
    return '<div class="sec"><h2>'+esc(ut)+'</h2><div class="rel">'+
      byUnit[ut].map(function(p){ return '<a href="/lessons/'+slug(p.ref)+'.html">'+esc(p.title)+'</a>'; }).join('')+'</div></div>';
  }).join('\n');
  var body='<body>\n<div class="lpbar"><a class="lpbrand" href="/">وقّاد<small>حيث يتّقد الذهن</small></a><nav class="lpnav"><a href="/lessons/">كل الدروس</a></nav></div>\n'+
    '<div class="lp"><nav class="crumbs2"><a href="/">الرئيسية</a> ›<a href="/lessons/">الدروس</a> ›<span>'+esc(subject.name+' · '+grade.name)+'</span></nav>'+
    '<div class="lphero"><span class="eyebrow">'+esc(grade.stage)+'</span><h1>'+esc(subject.name+' — '+grade.name)+'</h1><p>كل الدروس: شرحٌ مبسّط وتمارينُ تفاعلية مجانية.</p></div>\n'+
    secs+'</div>\n<footer class="lpfoot">منصّة «وقّاد» التعليمية · <a href="/" style="color:#4B45C6">الرئيسية</a></footer>\n</body>\n</html>\n';
  var jsonld=JSON.stringify({"@context":"https://schema.org","@type":"Course","name":subject.name+' — '+grade.name,"description":stripToText(desc),"url":url,"inLanguage":"ar","provider":{"@type":"EducationalOrganization","name":"منصّة وقّاد","url":SITE+'/'},"isAccessibleForFree":true});
  return head({title:title,desc:desc,url:url,jsonld:jsonld})+body;
}

// الفهرس الرئيسي
function mainIndex(groups){
  var url=SITE+'/lessons/';
  var title='كل الدروس — رياضيات وعلوم ولغتي وإنجليزي (ابتدائي ومتوسط) | وقّاد';
  var desc='فهرس دروس منصّة وقّاد التعليمية: شرحٌ مبسّط وتمارينُ تفاعلية مجانية لكل المواد والصفوف في المرحلتين الابتدائية والمتوسطة — بلا تسجيل.';
  var stages={};
  Object.keys(groups).forEach(function(key){
    var g=groups[key]; var st=g.grade.stage; (stages[st]=stages[st]||[]).push(g);
  });
  var body='<body>\n<div class="lpbar"><a class="lpbrand" href="/">وقّاد<small>حيث يتّقد الذهن</small></a><nav class="lpnav"><a href="/">التطبيق التفاعلي</a></nav></div>\n'+
    '<div class="lp"><nav class="crumbs2"><a href="/">الرئيسية</a> ›<span>كل الدروس</span></nav>'+
    '<div class="lphero"><span class="eyebrow">فهرس الدروس</span><h1>كل الدروس التفاعلية</h1><p>رياضيات وعلوم ولغتي وإنجليزي — للمرحلتين الابتدائية والمتوسطة، مجانًا وبلا تسجيل.</p></div>\n'+
    Object.keys(stages).map(function(st){
      return '<div class="sec"><h2>'+esc(st)+'</h2><div class="rel">'+
        stages[st].map(function(g){ return '<a href="/lessons/'+g.grade.id+'-'+g.subject.id+'.html">'+esc(g.subject.name+' · '+g.grade.name)+' ('+g.list.length+')</a>'; }).join('')+
        '</div></div>';
    }).join('\n')+'</div>\n<footer class="lpfoot">منصّة «وقّاد» التعليمية · <a href="/" style="color:#4B45C6">الرئيسية</a></footer>\n</body>\n</html>\n';
  var jsonld=JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage","name":"كل الدروس","url":url,"inLanguage":"ar","isPartOf":{"@type":"WebSite","name":"وقّاد","url":SITE+'/'}});
  return head({title:title,desc:desc,url:url,jsonld:jsonld})+body;
}

// ---------- الكتابة ----------
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, {recursive:true});
var written = 0, urls = [SITE + '/', SITE + '/lessons/'];
pages.forEach(function(p){
  fs.writeFileSync(path.join(OUT, slug(p.ref) + '.html'), withBeacon(lessonPage(p)));
  urls.push(SITE + '/lessons/' + slug(p.ref) + '.html');
  written++;
});
// فهارس الصف/المادة
var groups = {};
pages.forEach(function(p){ var k=p.grade.id+'-'+p.subject.id; (groups[k]=groups[k]||{grade:p.grade,subject:p.subject,list:[]}).list.push(p); });
Object.keys(groups).forEach(function(k){
  var g=groups[k];
  fs.writeFileSync(path.join(OUT, k + '.html'), withBeacon(indexPage(g.grade.id, g.subject.id, g.list)));
  urls.push(SITE + '/lessons/' + k + '.html');
});
// الفهرس الرئيسي
fs.writeFileSync(path.join(OUT, 'index.html'), withBeacon(mainIndex(groups)));

// خريطة الموقع
var sm = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+
  urls.map(function(u){ return '  <url><loc>'+u+'</loc><changefreq>weekly</changefreq><priority>'+(u===SITE+'/'?'1.0':'0.7')+'</priority></url>'; }).join('\n')+
  '\n</urlset>\n';
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sm);

console.log('صفحات الدروس:', written);
console.log('فهارس الصف/المادة:', Object.keys(groups).length);
console.log('روابط في خريطة الموقع:', urls.length);
