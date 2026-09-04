/* ============================================================
   محاكاة تفاعلية — مقياس الأس الهيدروجيني (pH) للأحماض والقواعد
   غيّر pH فيتغيّر لونُ الكاشف والتصنيف: حمض (H⁺) < ٧ < قاعدة (OH⁻).
   الاستعمال من المحرّك:  window.SIMS['ph'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['ph'] = (function(){

  var DROP='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3s6 6.4 6 11a6 6 0 0 1-12 0c0-4.6 6-11 6-11z"/></svg>';
  // ألوان الكاشف العامّ حسب pH (٠..١٤)
  var STOPS=[[0,[214,40,40]],[2,[228,66,40]],[4,[240,140,40]],[6,[233,205,66]],[7,[64,178,92]],[8,[40,172,158]],[10,[52,110,212]],[12,[108,72,190]],[14,[150,52,172]]];
  var EX=['حمض المعدة','عصير الليمون','عصير الليمون','الخلّ','عصير البرتقال','القهوة','الحليب','الماء النقي','ماء البحر','صودا الخبز','مطهّر منزلي','النشادر (أمونيا)','ماء الجير','منظّف أفران','هيدروكسيد الصوديوم'];
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  function phColor(p){
    for(var i=1;i<STOPS.length;i++){ if(p<=STOPS[i][0]){ var a=STOPS[i-1],b=STOPS[i],t=(p-a[0])/(b[0]-a[0]);
      return 'rgb('+[0,1,2].map(function(k){return (a[1][k]+(b[1][k]-a[1][k])*t)|0;}).join(',')+')'; } }
    return 'rgb(150,52,172)';
  }
  function cls(p){ return p<=3?'حمض قويّ':p<7?'حمض ضعيف':p===7?'متعادل':p<=10?'قاعدة ضعيفة':'قاعدة قويّة'; }
  function stateOf(p){ return p<7?'acid':(p===7?'neutral':'base'); }
  var STATES={
    acid:{ ar:'حمضيّ', col:'var(--ember-deep)', title:'محلولٌ حمضيّ',
      text:'يحتوي أيوناتِ هيدروجين (H⁺) أكثر. كلّما صغُر رقمُ pH زادت الحموضة. من أمثلته: عصيرُ الليمون والخلّ.' },
    neutral:{ ar:'متعادل', col:'var(--s-ar-deep)', title:'محلولٌ متعادل',
      text:'تتساوى أيوناتُ الهيدروجين (H⁺) مع أيونات الهيدروكسيد (OH⁻)، فالرقمُ ٧. مثالُه الماءُ النقيّ.' },
    base:{ ar:'قاعديّ (قِلْويّ)', col:'var(--s-en-deep)', title:'محلولٌ قاعديّ',
      text:'يحتوي أيوناتِ هيدروكسيد (OH⁻) أكثر. كلّما كبُر رقمُ pH زادت القاعدية. من أمثلته: صودا الخبز والصابون.' }
  };

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="كأسٌ فيه كاشف يتلوّن حسب الأس الهيدروجيني">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="كأس محلول يتغيّر لونه حسب pH ومقياس ألوان"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">التصنيف:</span><span class="wq-val js-cls">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>الأس الهيدروجيني (pH)</span><b><span class="js-pv">٧</span></b></div>'+
            '<input type="range" class="wq-range ph js-p" min="0" max="14" value="7" step="1" aria-label="الأس الهيدروجيني"></div>'+
          '<div class="wq-phscale"><span>٠ حمض</span><span>٧</span><span>قاعدة ١٤</span></div>'+
          '<div class="wq-btnrow"><button type="button" class="wq-tbtn heat js-acid">أضف حمضًا ▼</button><button type="button" class="wq-tbtn" style="background:linear-gradient(140deg,var(--s-en),var(--s-en-deep))" data-b="1">أضف قاعدة ▲</button></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">قيمة pH</div><div class="wq-v js-pval">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">مثالٌ عليه</div><div class="wq-v js-ex" style="font-size:14px">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ ماء نقيّ (٧)</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">—</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var pIn=q('.js-p');
    var elCls=q('.js-cls'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var curState='';
    var dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var x=getComputedStyle(container).getPropertyValue(n).trim(); return x||fb; }catch(e){ return fb; } }

    function draw(){
      var p=+pIn.value, col=phColor(p);
      ctx.clearRect(0,0,W,H);
      // الكأس
      var bx0=96,bx1=204,by0=26,by1=176,ly=70;
      ctx.fillStyle=col; ctx.fillRect(bx0,ly,bx1-bx0,by1-ly);
      ctx.fillStyle='rgba(255,255,255,.18)'; ctx.fillRect(bx0,ly,20,by1-ly);
      ctx.strokeStyle=css('--line-strong','#D6D9EC'); ctx.lineWidth=3; ctx.lineCap='round';
      ctx.beginPath(); ctx.moveTo(bx0,by0); ctx.lineTo(bx0,by1); ctx.lineTo(bx1,by1); ctx.lineTo(bx1,by0); ctx.stroke();
      // شريحة كاشف مغموسة
      ctx.fillStyle=css('--surface','#fff'); ctx.fillRect(150,by0-4,14,ly-by0+6);
      ctx.fillStyle=col; ctx.fillRect(150,ly,14,40);
      ctx.strokeStyle=css('--line-strong','#D6D9EC'); ctx.lineWidth=1; ctx.strokeRect(150,by0-4,14,by1-by0+4>150?150:by1-(by0-4));
      // مقياس ألوان أفقيّ (٠..١٤) مع مؤشّر
      var sx0=24,sx1=284,sy=200,sh=16;
      for(var i=0;i<14;i++){ ctx.fillStyle=phColor(i+0.5); ctx.fillRect(sx0+(sx1-sx0)*i/14, sy, (sx1-sx0)/14+1, sh); }
      var mx=sx0+(sx1-sx0)*p/14;
      ctx.fillStyle=css('--ink','#1C2143');
      ctx.beginPath(); ctx.moveTo(mx,sy-3); ctx.lineTo(mx-5,sy-11); ctx.lineTo(mx+5,sy-11); ctx.closePath(); ctx.fill();
      ctx.font='800 12px Cairo,sans-serif'; ctx.textAlign='center'; ctx.fillText(toAr(p), mx, sy-14);
    }
    function refresh(){
      var p=+pIn.value;
      q('.js-pv').textContent=toAr(p);
      q('.js-pval').textContent=toAr(p);
      q('.js-ex').textContent=EX[p];
      elCls.textContent=cls(p); elCls.style.color=STATES[stateOf(p)].col;
      var st=stateOf(p);
      if(st!==curState || true){
        curState=st; var S=STATES[st];
        elIc.style.background=S.col; elIc.innerHTML=DROP;
        elTit.textContent=S.title; elTit.style.color=S.col; elX.textContent=S.text;
      }
      draw();
    }
    pIn.addEventListener('input', refresh);
    q('.js-acid').onclick=function(){ pIn.value=Math.max(0,+pIn.value-1); refresh(); };
    q('[data-b="1"]').onclick=function(){ pIn.value=Math.min(14,+pIn.value+1); refresh(); };
    q('.js-reset').onclick=function(){ pIn.value=7; refresh(); };

    fit(); refresh();
    window.addEventListener('resize', fit);
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
