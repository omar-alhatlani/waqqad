/* ============================================================
   محاكاة تفاعلية — منحنى التسخين (الحرارة وتحوّلات المادة)
   أضِف الحرارة وتتبّع درجةَ الحرارة: ترتفع ثم تثبُت عند الانصهار (٠°)
   وعند الغليان (١٠٠°) لأنّ الطاقةَ تُكسِّرُ الروابطَ بدل رفع الحرارة.
   الاستعمال من المحرّك:  window.SIMS['heat'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['heat'] = (function(){

  var FIRE='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3s5 4 5 9a5 5 0 0 1-10 0c0-1.5.6-2.7 1.3-3.6C9 10 10 11 11 11 12 8 11 6 12 3z"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  function sig(n){ return (n<0?'−':'')+toAr(Math.abs(Math.round(n))); }

  function temp(h){
    if(h<=15) return -20+(h/15)*20;
    if(h<=35) return 0;
    if(h<=60) return (h-35)/25*100;
    if(h<=85) return 100;
    return 100+(h-85)/15*20;
  }
  function phase(h){ return h<15?'ice':(h<35?'melt':(h<60?'water':(h<85?'boil':'steam'))); }
  var PH={
    ice:{ ar:'ثلج (صلب)', col:'var(--s-math-deep)', title:'تسخين الثلج',
      text:'الثلجُ الصلبُ يمتصّ الحرارةَ فترتفع درجتُه تدريجيًّا حتى يبلغ درجةَ الانصهار (٠°).' },
    melt:{ ar:'انصهار', col:'var(--subject-deep)', title:'الانصهار — حرارةٌ ثابتة',
      text:'عند ٠° تبقى درجةُ الحرارة ثابتةً رغم استمرار التسخين؛ الطاقةُ المُضافة تُكسِّرُ روابطَ الثلج فيتحوّل إلى ماء، لا لرفع الحرارة.' },
    water:{ ar:'ماء (سائل)', col:'var(--subject-deep)', title:'تسخين الماء',
      text:'الماءُ السائلُ يمتصّ الحرارةَ فترتفع درجتُه من ٠° نحو ١٠٠° (درجة الغليان).' },
    boil:{ ar:'غليان', col:'var(--ember-deep)', title:'الغليان — حرارةٌ ثابتة',
      text:'عند ١٠٠° تبقى درجةُ الحرارة ثابتةً؛ الطاقةُ تُحوّل الماءَ إلى بخار (تبخّر)، لا لرفع الحرارة.' },
    steam:{ ar:'بخار (غاز)', col:'var(--ember-deep)', title:'تسخين البخار',
      text:'البخارُ يمتصّ الحرارةَ فترتفع درجتُه فوق ١٠٠°.' }
  };

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="منحنى تسخين المادة">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="منحنى درجة الحرارة مع الحرارة المضافة"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">الحالة:</span><span class="wq-val js-state">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>الحرارة المضافة</span><b><span class="js-hv">٠</span>٪</b></div>'+
            '<input type="range" class="wq-range volt js-h" min="0" max="100" value="10" step="1" aria-label="الحرارة المضافة"></div>'+
          '<div class="wq-eq"><span class="wq-eqt">أثناء تغيّر الحالة تثبُت درجةُ الحرارة</span><div class="wq-eqv"><span class="js-eq">—</span></div></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">درجة الحرارة</div><div class="wq-v"><span class="js-temp">—</span><small> °س</small></div></div>'+
          '<div class="wq-read"><div class="wq-k">الحالة الآن</div><div class="wq-v js-ph" style="font-size:15px">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">—</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, GX0=46, GX1=286, GY0=36, GYB=200, TMIN=-20, TMAX=120;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var hIn=q('.js-h');
    var elState=q('.js-state'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var cur='';
    var dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function px(h){ return GX0+(h/100)*(GX1-GX0); }
    function py(t){ return GYB-(t-TMIN)/(TMAX-TMIN)*(GYB-GY0); }
    function drawNum(x,y,str,al){ ctx.save(); ctx.textAlign=al||'center'; ctx.direction='ltr';
      var ch=str.split(''), ws=ch.map(function(c){return ctx.measureText(c).width;}), tot=ws.reduce(function(a,b){return a+b;},0), lx=(al==='right'?x-tot:(al==='left'?x:x-tot/2));
      for(var i=0;i<ch.length;i++){ ctx.fillText(ch[i],lx,y); lx+=ws[i]; } ctx.restore(); }

    function draw(){
      var h=+hIn.value, t=temp(h);
      ctx.clearRect(0,0,W,H);
      // شبكة ومحاور
      ctx.strokeStyle=css('--ink-soft','#4A5080'); ctx.lineWidth=2;
      ctx.beginPath(); ctx.moveTo(GX0,GY0); ctx.lineTo(GX0,GYB); ctx.lineTo(GX1,GYB); ctx.stroke();
      // خطّا الانصهار (٠°) والغليان (١٠٠°)
      ctx.setLineDash([4,3]); ctx.lineWidth=1.4;
      ctx.strokeStyle=css('--subject','#0FA3AA'); ctx.beginPath(); ctx.moveTo(GX0,py(0)); ctx.lineTo(GX1,py(0)); ctx.stroke();
      ctx.strokeStyle=css('--ember','#F2892E'); ctx.beginPath(); ctx.moveTo(GX0,py(100)); ctx.lineTo(GX1,py(100)); ctx.stroke();
      ctx.setLineDash([]);
      ctx.font='600 9px "IBM Plex Sans Arabic",sans-serif'; ctx.fillStyle=css('--muted','#7C82A8'); ctx.textBaseline='middle';
      drawNum(GX0-4,py(0),'٠°','right'); drawNum(GX0-4,py(100),'١٠٠°','right');
      // المنحنى
      ctx.strokeStyle=css('--ink','#1C2143'); ctx.lineWidth=3; ctx.lineJoin='round'; ctx.lineCap='round';
      ctx.beginPath(); ctx.moveTo(px(0),py(temp(0)));
      for(var hh=1;hh<=100;hh++) ctx.lineTo(px(hh),py(temp(hh)));
      ctx.stroke();
      // العلامة الحالية
      ctx.fillStyle=css('--ember-deep','#E4681B'); ctx.beginPath(); ctx.arc(px(h),py(t),5.5,0,6.2832); ctx.fill();
      ctx.fillStyle='#fff'; ctx.beginPath(); ctx.arc(px(h)-1.6,py(t)-1.8,2,0,6.2832); ctx.fill();
      // عناوين المحاور
      ctx.fillStyle=css('--muted','#7C82A8'); ctx.font='600 10px "IBM Plex Sans Arabic",sans-serif'; ctx.textBaseline='alphabetic';
      drawNum((GX0+GX1)/2,GYB+16,'الحرارة المضافة ←');
      ctx.save(); ctx.translate(GX0-22,(GY0+GYB)/2); ctx.rotate(-Math.PI/2); drawNum(0,0,'درجة الحرارة (°س)'); ctx.restore();
    }
    function refresh(){
      var h=+hIn.value, t=temp(h), ph=phase(h), P=PH[ph];
      q('.js-hv').textContent=toAr(h);
      q('.js-temp').textContent=sig(t);
      q('.js-ph').textContent=P.ar; q('.js-ph').style.color=P.col;
      var constT=(ph==='melt'||ph==='boil');
      q('.js-eq').textContent = constT ? ('ثابتة عند '+sig(t)+'° — كسرُ الروابط') : ('ترتفع: '+sig(t)+'°');
      elState.textContent=P.ar; elState.style.color=P.col;
      if(ph!==cur){ cur=ph;
        elIc.style.background=P.col; elIc.innerHTML=FIRE;
        elTit.textContent=P.title; elTit.style.color=P.col; elX.textContent=P.text; }
      draw();
    }
    hIn.addEventListener('input', refresh);
    q('.js-reset').onclick=function(){ hIn.value=10; refresh(); };
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
