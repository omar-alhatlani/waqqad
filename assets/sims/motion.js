/* ============================================================
   محاكاة تفاعلية — الحركة (السرعة = المسافة ÷ الزمن)
   متحرّكٌ يسير بسرعةٍ ثابتة، مع تمثيلٍ بيانيّ حيّ للمسافة/الزمن:
   الميلُ = السرعة، والخطُّ المستقيمُ يعني سرعةً ثابتة.
   الاستعمال من المحرّك:  window.SIMS['motion'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['motion'] = (function(){

  var RUN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  var STATES={
    rest:{ ar:'ساكن', col:'var(--muted)', title:'ساكن — لا يتحرّك',
      text:'السرعةُ صفر، فلا يتغيّر موقعُ الجسم مع الزمن. الخطُّ البيانيّ أفقيٌّ (ميلُه صفر): لا مسافةَ مقطوعة.' },
    move:{ ar:'يتحرّك بسرعةٍ ثابتة', col:'var(--subject-deep)', title:'حركةٌ منتظمة — سرعةٌ ثابتة',
      text:'المسافةُ تزداد بانتظامٍ مع الزمن (المسافة = السرعة × الزمن)، فالخطُّ البيانيّ مستقيمٌ ميلُه يساوي السرعة. كلّما زادت السرعة زاد ميلُ الخطّ.' }
  };

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="متحرّك وتمثيل بياني للمسافة والزمن">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="متحرّك يسير على مضمار مع تمثيل بياني للمسافة مع الزمن"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">الحالة الآن:</span><span class="wq-val js-state">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>السرعة</span><b><span class="js-sval">٥</span> م/ث</b></div>'+
            '<input type="range" class="wq-range cool js-s" min="0" max="10" value="5" step="1" aria-label="السرعة بالمتر لكل ثانية"></div>'+
          '<div class="wq-eq"><span class="wq-eqt">المسافة = السرعة × الزمن</span><div class="wq-eqv"><span class="js-eq">—</span> م</div></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">الزمن</div><div class="wq-v"><span class="js-t">—</span><small> ث</small></div></div>'+
          '<div class="wq-read"><div class="wq-k">المسافة</div><div class="wq-v"><span class="js-d">—</span><small> م</small></div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-play">⏸ إيقاف</button><button type="button" class="wq-tool js-reset">↺ إعادة</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">—</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, TMAX=12, DMAX=120, DT=0.02;
  var TKY=34, TKX0=38, TKX1=286;
  var GX0=46, GX1=286, GY0=64, GYB=216;
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  function arNum(x){ return toAr(String(Math.round(x*10)/10)).replace(/\./g,'٫'); }

  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var sIn=q('.js-s'), elT=q('.js-t'), elD=q('.js-d'), elState=q('.js-state');
    var elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var reduce=false; try{ reduce=matchMedia('(prefers-reduced-motion:reduce)').matches; }catch(e){}
    var t=0, running=!reduce, curState='';

    var dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var x=getComputedStyle(container).getPropertyValue(n).trim(); return x||fb; }catch(e){ return fb; } }
    function px(tt){ return GX0+(tt/TMAX)*(GX1-GX0); }
    function py(dd){ return GYB-(Math.min(dd,DMAX)/DMAX)*(GYB-GY0); }
    function vals(){ var sp=+sIn.value, td=Math.round(t*10)/10; return { sp:sp, t:td, d:sp*td }; }

    function drawTrack(d){
      ctx.strokeStyle=css('--line-strong','#D6D9EC'); ctx.lineWidth=2;
      ctx.beginPath(); ctx.moveTo(TKX0,TKY+12); ctx.lineTo(TKX1,TKY+12); ctx.stroke();
      ctx.strokeStyle=css('--line','#E7E9F5'); ctx.lineWidth=2;
      for(var i=0;i<=6;i++){ var x=TKX0+(TKX1-TKX0)*i/6; ctx.beginPath(); ctx.moveTo(x,TKY+12); ctx.lineTo(x,TKY+17); ctx.stroke(); }
      var cxp=TKX0+(Math.min(d,DMAX)/DMAX)*(TKX1-TKX0-24)+2, body=TKY-2;
      ctx.fillStyle=css('--subject','#0FA3AA'); roundRect(cxp,body,22,10,3); ctx.fill();
      ctx.fillStyle=css('--subject-deep','#0B7E86'); roundRect(cxp+3,body-5,11,6,2); ctx.fill();
      ctx.fillStyle=css('--ink','#1C2143');
      ctx.beginPath(); ctx.arc(cxp+5,body+11,2.6,0,6.2832); ctx.arc(cxp+17,body+11,2.6,0,6.2832); ctx.fill();
    }
    function drawGraph(v){
      ctx.strokeStyle=css('--line','#E7E9F5'); ctx.lineWidth=1;
      for(var i=0;i<=6;i++){ var gx=GX0+(GX1-GX0)*i/6; ctx.beginPath(); ctx.moveTo(gx,GY0); ctx.lineTo(gx,GYB); ctx.stroke(); }
      for(var j=0;j<=4;j++){ var gy=GY0+(GYB-GY0)*j/4; ctx.beginPath(); ctx.moveTo(GX0,gy); ctx.lineTo(GX1,gy); ctx.stroke(); }
      ctx.strokeStyle=css('--ink-soft','#4A5080'); ctx.lineWidth=2;
      ctx.beginPath(); ctx.moveTo(GX0,GY0); ctx.lineTo(GX0,GYB); ctx.lineTo(GX1,GYB); ctx.stroke();
      ctx.fillStyle=css('--muted','#7C82A8'); ctx.font='600 10px "IBM Plex Sans Arabic",sans-serif'; ctx.textAlign='center';
      ctx.fillText('الزمن (ث)', (GX0+GX1)/2, GYB+14);
      ctx.save(); ctx.translate(GX0-13,(GY0+GYB)/2); ctx.rotate(-Math.PI/2); ctx.fillText('المسافة (م)',0,0); ctx.restore();
      // خطّ المسافة/الزمن (مستقيمٌ من الأصل، ميلُه السرعة)
      ctx.strokeStyle=css('--subject','#0FA3AA'); ctx.lineWidth=3; ctx.lineCap='round';
      ctx.beginPath(); ctx.moveTo(px(0),py(0)); ctx.lineTo(px(v.t),py(v.d)); ctx.stroke();
      ctx.fillStyle=css('--ember','#F2892E'); ctx.beginPath(); ctx.arc(px(v.t),py(v.d),4.5,0,6.2832); ctx.fill();
    }
    function roundRect(x,y,w,h,r){ ctx.beginPath(); ctx.moveTo(x+r,y); ctx.arcTo(x+w,y,x+w,y+h,r); ctx.arcTo(x+w,y+h,x,y+h,r); ctx.arcTo(x,y+h,x,y,r); ctx.arcTo(x,y,x+w,y,r); ctx.closePath(); }
    function draw(){ var v=vals(); ctx.clearRect(0,0,W,H); drawGraph(v); drawTrack(v.d); }

    function refresh(){
      var v=vals();
      q('.js-sval').textContent=toAr(v.sp);
      q('.js-eq').textContent=arNum(v.d)+' = '+toAr(v.sp)+' × '+arNum(v.t);
      elT.textContent=arNum(v.t); elD.textContent=arNum(v.d);
      var st = v.sp===0 ? 'rest' : 'move';
      if(st!==curState){ curState=st; var S=STATES[st];
        elState.textContent=S.ar; elState.style.color=S.col;
        elIc.style.background=S.col; elIc.innerHTML=RUN;
        elTit.textContent=S.title; elTit.style.color=S.col; elX.textContent=S.text; }
    }
    function loop(){
      if(!cv.isConnected) return;
      if(running && t<TMAX){ t+=DT; if(t>TMAX)t=TMAX; }
      if(t>=TMAX && running){ running=false; q('.js-play').textContent='▶ تشغيل'; }
      refresh(); draw();
      requestAnimationFrame(loop);
    }
    sIn.addEventListener('input', refresh);
    q('.js-play').onclick=function(){ if(t>=TMAX) t=0; running=!running; if(t>=TMAX){t=0;running=true;} this.textContent=running?'⏸ إيقاف':'▶ تشغيل'; };
    q('.js-reset').onclick=function(){ t=0; running=true; q('.js-play').textContent='⏸ إيقاف'; refresh(); draw(); };

    fit(); refresh(); draw();
    if(!reduce) loop();
    window.addEventListener('resize', fit);
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
