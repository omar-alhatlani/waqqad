/* ============================================================
   محاكاة تفاعلية — الدالة التربيعية (القطع المكافئ)
   ص = أ س² + ب س + جـ. إشارةُ أ تحدّد فتحةَ المنحنى (أعلى/أسفل)،
   والرأسُ عند س = −ب/٢أ، والجذورُ هي نقاط تقاطعِ المحور السينيّ.
   الاستعمال من المحرّك:  window.SIMS['parabola'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['parabola'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5c3 0 3 14 8 14s5-14 8-14"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  function sig(n){ return (n<0?'−':'')+toAr(Math.abs(n)); }
  function arNum(x){ var r=Math.round(x*100)/100; return (r<0?'−':'')+toAr(String(Math.abs(r))).replace(/\./g,'٫'); }
  function eqTxt(a,b,c){ if(a===0) return 'ص = '+(b===0?'':(b===1?'س':b===-1?'−س':sig(b)+'س'))+(c===0?(b===0?'٠':''):(c>0?(b?' + ':'')+toAr(c):' − '+toAr(-c)));
    var ap=a===1?'س²':a===-1?'−س²':sig(a)+'س²', bp=b===0?'':(b>0?' + '+(b===1?'س':toAr(b)+'س'):' − '+(b===-1?'س':toAr(-b)+'س')), cp=c===0?'':(c>0?' + '+toAr(c):' − '+toAr(-c));
    return 'ص = '+ap+bp+cp; }

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="القطع المكافئ على المستوى">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="منحنى القطع المكافئ ورأسه ومحوره"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">المعادلة:</span><span class="wq-val js-eq" style="font-size:15px">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>أ (المعامل التربيعيّ)</span><b class="js-av">١</b></div><input type="range" class="wq-range warm js-a" min="-3" max="3" value="1" step="1"></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>ب</span><b class="js-bv">٠</b></div><input type="range" class="wq-range warm js-b" min="-6" max="6" value="0" step="1"></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>جـ (المقطع الصاديّ)</span><b class="js-cv">−٣</b></div><input type="range" class="wq-range cool js-c" min="-6" max="6" value="-3" step="1"></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">الرأس (س، ص)</div><div class="wq-v js-vertex" style="font-size:14px">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">عدد الجذور</div><div class="wq-v js-roots">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">القطع المكافئ</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, OX=150, OY=120, C=17, R=6;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var aIn=q('.js-a'), bIn=q('.js-b'), cIn=q('.js-c');
    var elEq=q('.js-eq'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function sx(x){ return OX+x*C; } function sy(y){ return OY-y*C; }

    function draw(){
      var a=+aIn.value,b=+bIn.value,c=+cIn.value;
      ctx.clearRect(0,0,W,H);
      ctx.strokeStyle=css('--line','#E7E9F5'); ctx.lineWidth=1;
      for(var i=-R;i<=R;i++){ ctx.beginPath(); ctx.moveTo(sx(i),sy(-R)); ctx.lineTo(sx(i),sy(R)); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(sx(-R),sy(i)); ctx.lineTo(sx(R),sy(i)); ctx.stroke(); }
      ctx.strokeStyle=css('--ink-soft','#4A5080'); ctx.lineWidth=2;
      ctx.beginPath(); ctx.moveTo(sx(-R),sy(0)); ctx.lineTo(sx(R),sy(0)); ctx.moveTo(sx(0),sy(-R)); ctx.lineTo(sx(0),sy(R)); ctx.stroke();
      ctx.save(); ctx.beginPath(); ctx.rect(sx(-R),sy(R),2*R*C,2*R*C); ctx.clip();
      // المنحنى/الخطّ
      ctx.strokeStyle=css('--subject','#0FA3AA'); ctx.lineWidth=2.6; ctx.beginPath();
      var first=true; for(var px=-R;px<=R;px+=0.1){ var py=a*px*px+b*px+c, X=sx(px), Y=sy(py); if(first){ctx.moveTo(X,Y);first=false;} else ctx.lineTo(X,Y); } ctx.stroke();
      if(a!==0){
        var vx=-b/(2*a), vy=a*vx*vx+b*vx+c;
        // محور التماثل
        ctx.strokeStyle=css('--muted','#7C82A8'); ctx.lineWidth=1.4; ctx.setLineDash([4,3]); ctx.beginPath(); ctx.moveTo(sx(vx),sy(-R)); ctx.lineTo(sx(vx),sy(R)); ctx.stroke(); ctx.setLineDash([]);
        // الرأس
        ctx.fillStyle=css('--gold','#F4B740'); ctx.beginPath(); ctx.arc(sx(vx),sy(vy),6,0,6.2832); ctx.fill(); ctx.strokeStyle=css('--ember-deep','#E4681B'); ctx.lineWidth=2; ctx.stroke();
        // الجذور
        var disc=b*b-4*a*c; if(disc>=0){ var r1=(-b-Math.sqrt(disc))/(2*a), r2=(-b+Math.sqrt(disc))/(2*a);
          [r1,r2].forEach(function(r){ if(Math.abs(r)<=R){ ctx.fillStyle=css('--brand','#4B45C6'); ctx.beginPath(); ctx.arc(sx(r),sy(0),4.5,0,6.2832); ctx.fill(); ctx.strokeStyle='#fff'; ctx.lineWidth=1.4; ctx.stroke(); } }); }
      }
      ctx.restore();
    }
    function refresh(){
      var a=+aIn.value,b=+bIn.value,c=+cIn.value;
      q('.js-av').textContent=sig(a); q('.js-bv').textContent=sig(b); q('.js-cv').textContent=sig(c);
      elEq.textContent=eqTxt(a,b,c); elEq.style.color=css('--subject-deep','#0B7E86');
      if(a===0){ q('.js-vertex').textContent='—'; q('.js-roots').textContent='خطّ مستقيم';
        elTit.textContent='ليست تربيعية (أ = ٠)'; elX.innerHTML='حين <b>أ = ٠</b> يختفي الحدُّ التربيعيّ فتصبح <b>دالةً خطية</b> (خطّ مستقيم) لا قطعًا مكافئًا. اجعلْ أ ≠ ٠ لترى المنحنى.';
      } else {
        var vx=-b/(2*a), vy=a*vx*vx+b*vx+c, disc=b*b-4*a*c, nr=disc>0?2:(disc===0?1:0);
        q('.js-vertex').innerHTML='<span style="unicode-bidi:isolate;direction:ltr">('+arNum(vy)+'، '+arNum(vx)+')</span>';
        q('.js-roots').textContent = nr===2?'جذران':(nr===1?'جذرٌ واحد':'لا جذور حقيقية');
        elTit.textContent = a>0?'فتحةٌ للأعلى (أصغرُ قيمة)':'فتحةٌ للأسفل (أكبرُ قيمة)';
        elX.innerHTML='<b>ص = أ س² + ب س + جـ</b>. إشارةُ <b>أ</b>: موجبٌ ← الفتحةُ للأعلى، سالبٌ ← للأسفل. <b>الرأسُ</b> عند س = −ب ÷ ٢أ (النقطة الذهبية) وعليه <b>محورُ التماثل</b> (الخطّ المتقطّع). <b>جـ</b> هو المقطعُ الصاديّ، و<b>الجذورُ</b> (النقاط البنفسجية) هي حلولُ أ س²+ب س+جـ=٠ أي تقاطعاتُ المحور السينيّ ('+(nr===2?'جذران':nr===1?'جذرٌ واحد':'لا جذور هنا')+').';
      }
      draw();
    }
    [aIn,bIn,cIn].forEach(function(el){ el.addEventListener('input', refresh); });
    q('.js-reset').onclick=function(){ aIn.value=1;bIn.value=0;cIn.value=-3; refresh(); };
    ['.js-av','.js-bv','.js-cv','.js-eq','.js-roots'].forEach(function(s){ var e=q(s); e.style.direction='ltr'; e.style.unicodeBidi='isolate'; });
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
