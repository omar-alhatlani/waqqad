/* ============================================================
   محاكاة تفاعلية — قوانين نيوتن للحركة (القصور الذاتي + F = m·a)
   صندوقٌ على أرضٍ متحرّكة: غيّر القوة والكتلة فيتغيّر التسارع (a = F ÷ m)
   وتتسارع السرعة. عند رفع القوة (F=0) يستمرّ بسرعته (القصور الذاتي).
   الاستعمال من المحرّك:  window.SIMS['newton'].mount(container)
   يعمل بالكامل دون إنترنت، ويستعمل متغيّرات ألوان المنصّة نفسها.
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['newton'] = (function(){

  var MOVE='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  var STATES={
    rest:{ ar:'ساكن', col:'var(--muted)', title:'ساكن — القانون الأول (القصور الذاتي)',
      text:'لا قوّةَ محصّلة والجسم ساكن، فيبقى ساكنًا. الجسم الساكن يظلّ ساكنًا حتى تؤثّر فيه قوّةٌ محصّلة تُحرّكه.' },
    glide:{ ar:'سرعة ثابتة', col:'var(--cold-deep)', title:'سرعة ثابتة — القانون الأول (القصور الذاتي)',
      text:'رفعتَ القوّة (المحصّلة = صفر) والجسم متحرّك، فيستمرّ بسرعته الثابتة دون أن يتباطأ (في غياب الاحتكاك). هذا هو القصور الذاتي.' },
    accel:{ ar:'يتسارع', col:'var(--ember-deep)', title:'يتسارع — القانون الثاني (F = m·a)',
      text:'قوّةٌ محصّلة تُنتج تسارعًا مقداره: التسارع = القوّة ÷ الكتلة. الكتلةُ الأكبر تتسارع أبطأ تحت القوّة نفسها.' }
  };

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="صندوق يتحرك على أرض">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="صندوق على أرض، تدفعه قوّة فيتسارع"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">الحالة الآن:</span><span class="wq-val js-state">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>القوّة المحصّلة</span><b><span class="js-fval">٦</span> نيوتن</b></div>'+
            '<input type="range" class="wq-range warm js-f" min="0" max="50" value="6" step="1" aria-label="القوة بالنيوتن"></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>الكتلة</span><b><span class="js-mval">٤</span> كجم</b></div>'+
            '<input type="range" class="wq-range cool js-m" min="1" max="20" value="4" step="1" aria-label="الكتلة بالكيلوجرام"></div>'+
          '<div class="wq-eq"><span class="wq-eqt">القانون الثاني — التسارع = القوّة ÷ الكتلة</span><div class="wq-eqv"><span class="js-eq">—</span> م/ث²</div></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">التسارع (a)</div><div class="wq-v"><span class="js-a">—</span><small> م/ث²</small></div></div>'+
          '<div class="wq-read"><div class="wq-k">السرعة (v)</div><div class="wq-v"><span class="js-v">—</span><small> م/ث</small></div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-stop">✋ ارفع القوّة</button><button type="button" class="wq-tool js-reset">↺ إعادة</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">—</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, FLOOR=182, POST=44;
  var DT=0.05, K=1.1, VMAX=26;             // زمن المحاكاة، بكسل/(م/ث)، وسقف السرعة للعرض
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  function arNum(x){ return toAr(String(x)).replace(/\./g,'٫'); }
  function fmt(x){ return arNum(Math.round(x*10)/10); }

  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var fIn=q('.js-f'), mIn=q('.js-m');
    var elState=q('.js-state'), elIc=q('.js-ic'), elT=q('.js-etitle'), elX=q('.js-etext'), elV=q('.js-v');
    var reduce=false; try{ reduce=matchMedia('(prefers-reduced-motion:reduce)').matches; }catch(e){}
    if(reduce) fIn.value=0;                 // احترامًا لتقليل الحركة: يبدأ ساكنًا حتى يدفعه المستخدم
    var v=0, world=0, curState='';

    var dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(name,fb){ try{ var x=getComputedStyle(container).getPropertyValue(name).trim(); return x||fb; }catch(e){ return fb; } }

    function drawFloor(){
      ctx.strokeStyle=css('--line-strong','#D6D9EC'); ctx.lineWidth=2;
      ctx.beginPath(); ctx.moveTo(0,FLOOR); ctx.lineTo(W,FLOOR); ctx.stroke();
      // علاماتُ الأرض تنزلق يسارًا لتُظهر الحركة
      ctx.strokeStyle=css('--line','#E7E9F5'); ctx.lineWidth=2;
      var shift=world%POST;
      for(var x=-shift; x<W; x+=POST){ ctx.beginPath(); ctx.moveTo(x,FLOOR); ctx.lineTo(x-7,FLOOR+9); ctx.stroke(); }
    }
    function drawBox(F,m){
      var side=34+m*1.5, cx=150, bx=cx-side/2, by=FLOOR-side;
      // خطوط الحركة خلف الصندوق
      if(v>0.3){ ctx.strokeStyle=css('--muted','#7C82A8'); ctx.globalAlpha=Math.min(v/VMAX,1)*0.5; ctx.lineWidth=2;
        for(var i=0;i<3;i++){ var ly=by+side*(0.3+i*0.25); ctx.beginPath(); ctx.moveTo(bx-8-i*8,ly); ctx.lineTo(bx-20-i*10,ly); ctx.stroke(); }
        ctx.globalAlpha=1; }
      // الصندوق
      ctx.fillStyle=css('--subject-soft','#E2F5F5'); ctx.strokeStyle=css('--subject-deep','#0B7E86'); ctx.lineWidth=2.5;
      roundRect(bx,by,side,side,8); ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(bx,by+side/2); ctx.lineTo(bx+side,by+side/2); ctx.moveTo(bx+side/2,by); ctx.lineTo(bx+side/2,by+side); ctx.stroke();
      ctx.fillStyle=css('--subject-deep','#0B7E86'); ctx.font='800 13px Cairo, sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
      ctx.fillText(toAr(m)+' كجم', cx, by-9);
      // سهم القوّة (يمينًا) بطولٍ يتناسب مع القوّة
      if(F>0){
        var len=10+F*2.1, ax=bx+side+4, ay=by+side/2, tip=ax+len;
        ctx.strokeStyle=css('--ember','#F2892E'); ctx.fillStyle=css('--ember','#F2892E'); ctx.lineWidth=5; ctx.lineCap='round';
        ctx.beginPath(); ctx.moveTo(ax,ay); ctx.lineTo(tip-6,ay); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(tip,ay); ctx.lineTo(tip-11,ay-7); ctx.lineTo(tip-11,ay+7); ctx.closePath(); ctx.fill();
      }
    }
    function roundRect(x,y,w,h,r){ ctx.beginPath(); ctx.moveTo(x+r,y); ctx.arcTo(x+w,y,x+w,y+h,r); ctx.arcTo(x+w,y+h,x,y+h,r); ctx.arcTo(x,y+h,x,y,r); ctx.arcTo(x,y,x+w,y,r); ctx.closePath(); }

    function values(){ var F=+fIn.value, m=Math.max(+mIn.value,1); return { F:F, m:m, a:F/m }; }

    function draw(){ var val=values(); ctx.clearRect(0,0,W,H); drawFloor(); drawBox(val.F,val.m); }

    function refresh(){
      var val=values();
      q('.js-fval').textContent=toAr(val.F);
      q('.js-mval').textContent=toAr(val.m);
      q('.js-eq').textContent=fmt(val.a)+' = '+toAr(val.F)+' ÷ '+toAr(val.m);
      q('.js-a').textContent=fmt(val.a);
      setState(val);
      if(reduce) draw();
    }
    function setState(val){
      var st = val.F>0 ? 'accel' : (v>0.3 ? 'glide' : 'rest'), S=STATES[st];
      if(st!==curState){
        curState=st;
        elState.textContent=S.ar; elState.style.color=S.col;
        elIc.style.background=S.col; elIc.innerHTML=MOVE;
        elT.textContent=S.title; elT.style.color=S.col; elX.textContent=S.text;
      }
    }

    function loop(){
      if(!cv.isConnected) return;
      var val=values();
      v += val.a*DT; if(v>VMAX) v=VMAX; if(v<0) v=0;
      world += v*K;
      elV.textContent=fmt(v);
      setState(val);
      draw();
      requestAnimationFrame(loop);
    }

    fIn.addEventListener('input', refresh);
    mIn.addEventListener('input', refresh);
    q('.js-stop').onclick=function(){ fIn.value=0; refresh(); };     // ارفع القوّة: يُظهر القصور الذاتي
    q('.js-reset').onclick=function(){ v=0; world=0; fIn.value=(reduce?0:6); mIn.value=4; refresh(); draw(); elV.textContent=fmt(0); };

    fit(); refresh(); draw(); elV.textContent=fmt(0);
    loop();
    window.addEventListener('resize', fit);
    return { destroy:function(){} };
  }

  return { mount:mount };
})();
