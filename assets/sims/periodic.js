/* ============================================================
   محاكاة تفاعلية — الجدول الدوري (أول ٢٠ عنصرًا)
   العناصرُ مرتّبةٌ بأعدادها الذرية: الأعمدةُ مجموعاتٌ (خواصُّ متشابهة)،
   والصفوفُ دوراتٌ (يزداد فيها العددُ الذري). انقرْ عنصرًا لبطاقته.
   الاستعمال من المحرّك:  window.SIMS['periodic'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['periodic'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="7" height="7" rx="1"/><rect x="14" y="4" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  // [العدد, الرمز, الاسم, الكتلة, الصنف, الدورة, المجموعة]  الصنف: m فلز · n لافلز · ml شبه فلز
  var ELS=[
    [1,'H','الهيدروجين',1,'n',1,1],[2,'He','الهيليوم',4,'n',1,18],
    [3,'Li','الليثيوم',7,'m',2,1],[4,'Be','البيريليوم',9,'m',2,2],[5,'B','البورون',11,'ml',2,13],[6,'C','الكربون',12,'n',2,14],[7,'N','النيتروجين',14,'n',2,15],[8,'O','الأكسجين',16,'n',2,16],[9,'F','الفلور',19,'n',2,17],[10,'Ne','النيون',20,'n',2,18],
    [11,'Na','الصوديوم',23,'m',3,1],[12,'Mg','المغنيسيوم',24,'m',3,2],[13,'Al','الألمنيوم',27,'m',3,13],[14,'Si','السيليكون',28,'ml',3,14],[15,'P','الفوسفور',31,'n',3,15],[16,'S','الكبريت',32,'n',3,16],[17,'Cl','الكلور',35,'n',3,17],[18,'Ar','الأرجون',40,'n',3,18],
    [19,'K','البوتاسيوم',39,'m',4,1],[20,'Ca','الكالسيوم',40,'m',4,2]
  ];
  var CATN={m:'فلز',n:'لافلز',ml:'شبه فلز'};

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="الجدول الدوري لأول عشرين عنصرًا">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit" style="aspect-ratio:auto;min-height:200px;display:flex;flex-direction:column;justify-content:center;gap:8px;padding:12px 10px">'+
            '<div class="js-grid" style="display:grid;grid-template-columns:repeat(18,1fr);gap:2px;direction:ltr"></div>'+
            '<div style="display:flex;gap:10px;justify-content:center;font-size:10.5px;flex-wrap:wrap">'+
              '<span><span style="display:inline-block;width:9px;height:9px;border-radius:2px;background:var(--s-math-soft);border:1px solid var(--s-math)"></span> فلز</span>'+
              '<span><span style="display:inline-block;width:9px;height:9px;border-radius:2px;background:var(--s-ar-soft);border:1px solid var(--s-ar)"></span> لافلز</span>'+
              '<span><span style="display:inline-block;width:9px;height:9px;border-radius:2px;background:rgba(244,183,64,.25);border:1px solid var(--gold)"></span> شبه فلز</span>'+
            '</div>'+
          '</div>'+
          '<div class="wq-statecap"><span class="wq-lbl">العنصر:</span><span class="wq-val js-name">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-eq"><span class="wq-eqt">بطاقة العنصر</span><div class="wq-eqv" style="display:flex;align-items:center;gap:12px;justify-content:center">'+
            '<div class="js-tile" style="width:56px;height:56px;border-radius:10px;display:flex;flex-direction:column;align-items:center;justify-content:center;border:2px solid var(--line-strong)">'+
              '<small class="js-z" style="font-size:11px;font-weight:700">—</small><b class="js-sym" style="font-size:22px;font-weight:900;line-height:1">—</b></div>'+
            '<div style="text-align:right;font-size:13px"><div class="js-eln" style="font-weight:800">—</div><div class="js-cat" style="color:var(--muted);font-size:12px">—</div></div>'+
          '</div></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">الكتلة الذرية</div><div class="wq-v js-mass">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">المجموعة · الدورة</div><div class="wq-v js-gp">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">الجدول الدوري</b><p class="js-etext">انقرْ أيَّ عنصرٍ لعرض بطاقته: رمزُه وعددُه الذري وكتلتُه وصنفُه. الأعمدةُ الرأسية <b>مجموعات</b> (خواصُّ متشابهة)، والصفوفُ الأفقية <b>دورات</b> يزداد فيها العددُ الذري.</p></span></section>'+
    '</div>';

  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var grid=q('.js-grid'), elName=q('.js-name'), elIc=q('.js-ic');
    var sel=6, tiles={};
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function catBg(c){ return c==='m'?css('--s-math-soft','#E9F0FD'):c==='n'?css('--s-ar-soft','#E8F5EE'):'rgba(244,183,64,.25)'; }
    function catBd(c){ return c==='m'?css('--s-math','#3B6FE0'):c==='n'?css('--s-ar','#2E9E6B'):css('--gold','#F4B740'); }

    ELS.forEach(function(e){
      var t=document.createElement('div'); t.className='js-el';
      t.style.cssText='grid-column:'+e[6]+';grid-row:'+e[5]+';aspect-ratio:1;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:800;border-radius:3px;cursor:pointer;background:'+catBg(e[4])+';border:1px solid '+catBd(e[4])+';color:'+css('--ink','#1C2143');
      t.textContent=e[1]; t.setAttribute('data-z',e[0]);
      t.addEventListener('click', function(){ sel=e[0]; refresh(); });
      grid.appendChild(t); tiles[e[0]]=t;
    });

    function refresh(){
      var e=ELS[sel-1];
      ELS.forEach(function(x){ var t=tiles[x[0]]; t.style.outline='none'; t.style.transform='none'; t.style.boxShadow='none'; });
      var t=tiles[sel]; t.style.outline='2.5px solid '+css('--ink','#1C2143'); t.style.transform='scale(1.18)'; t.style.boxShadow=css('--shadow','0 6px 14px rgba(0,0,0,.15)'); t.style.zIndex='2'; t.style.position='relative';
      elName.textContent=e[2]+' ('+e[1]+')';
      var tile=q('.js-tile'); tile.style.background=catBg(e[4]); tile.style.borderColor=catBd(e[4]);
      q('.js-z').textContent=toAr(e[0]); q('.js-sym').textContent=e[1];
      q('.js-eln').textContent=e[2]; q('.js-cat').textContent=CATN[e[4]];
      q('.js-mass').textContent=toAr(e[3]);
      q('.js-gp').textContent='المجموعة '+toAr(e[6])+' · الدورة '+toAr(e[5]);
      elIc.style.background=catBd(e[4]); elIc.innerHTML=ICN;
    }
    q('.js-reset').onclick=function(){ sel=6; refresh(); };
    ['.js-z','.js-sym','.js-mass'].forEach(function(s){ var el=q(s); el.style.direction='ltr'; el.style.unicodeBidi='isolate'; });
    refresh();
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
