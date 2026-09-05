/* ============================================================
   محاكاة تفاعلية — صيغة الميل والمقطع (ص = م س + ب)
   ابدأ من المقطع الصاديّ (٠، ب)، ثم تحرّك بالميل: أفقيًّا ١ ورأسيًّا م،
   فتُولّد نقاطًا على الخطّ. يبيّن كيف تُرسم الدالة من صيغتها مباشرة.
   الاستعمال من المحرّك:  window.SIMS['slopeint'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['slopeint'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20 20 4"/><path d="M5 15h5v-5" stroke-dasharray="2 2"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  function sig(n){ return (n<0?'−':'')+toAr(Math.abs(n)); }
  function eqTxt(m,b){ var mp=m===1?'س':(m===-1?'−س':sig(m)+'س'), bp=b===0?'':(b>0?' + '+toAr(b):' − '+toAr(-b));
    return 'ص = '+mp+bp; }

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="رسم الخطّ من صيغة الميل والمقطع">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="خطّ ومقطع صاديّ ودرجات الميل"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">المعادلة:</span><span class="wq-val js-eq">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>الميل (م)</span><b class="js-mv">١</b></div><input type="range" class="wq-range warm js-m" min="-3" max="3" value="1" step="1"></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>المقطع الصاديّ (ب)</span><b class="js-bv">−٢</b></div><input type="range" class="wq-range cool js-b" min="-6" max="6" value="-2" step="1"></div>'+
          '<div class="wq-eq"><span class="wq-eqt">ابدأ من المقطع، ثم تحرّك بالميل</span><div class="wq-eqv"><span class="js-step">—</span></div></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">المقطع الصاديّ (٠، ب)</div><div class="wq-v js-int">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">الميل = رأسيّ ÷ أفقيّ</div><div class="wq-v js-slp">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">—</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, OX=150, OY=120, C=17, R=6;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var mIn=q('.js-m'), bIn=q('.js-b');
    var elEq=q('.js-eq'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function sx(x){ return OX+x*C; } function sy(y){ return OY-y*C; }
    function drawNum(x,y,str,col){ ctx.fillStyle=col; ctx.save(); ctx.textBaseline='middle'; ctx.direction='ltr';
      var ch=str.split(''), ws=ch.map(function(c){return ctx.measureText(c).width;}), tot=ws.reduce(function(a,b){return a+b;},0), lx=x-tot/2;
      ctx.textAlign='left'; for(var i=0;i<ch.length;i++){ ctx.fillText(ch[i],lx,y); lx+=ws[i]; } ctx.restore(); }
    function drawAr(x,y,str,col){ ctx.fillStyle=col; ctx.save(); ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='rtl'; ctx.fillText(str,x,y); ctx.restore(); }

    function draw(){
      var m=+mIn.value, b=+bIn.value;
      ctx.clearRect(0,0,W,H);
      ctx.strokeStyle=css('--line','#E7E9F5'); ctx.lineWidth=1;
      for(var i=-R;i<=R;i++){ ctx.beginPath(); ctx.moveTo(sx(i),sy(-R)); ctx.lineTo(sx(i),sy(R)); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(sx(-R),sy(i)); ctx.lineTo(sx(R),sy(i)); ctx.stroke(); }
      ctx.strokeStyle=css('--ink-soft','#4A5080'); ctx.lineWidth=2;
      ctx.beginPath(); ctx.moveTo(sx(-R),sy(0)); ctx.lineTo(sx(R),sy(0)); ctx.moveTo(sx(0),sy(-R)); ctx.lineTo(sx(0),sy(R)); ctx.stroke();
      // الخطّ
      ctx.save(); ctx.beginPath(); ctx.rect(sx(-R),sy(R),2*R*C,2*R*C); ctx.clip();
      ctx.strokeStyle=css('--subject','#0FA3AA'); ctx.lineWidth=2.5;
      ctx.beginPath(); ctx.moveTo(sx(-R),sy(m*-R+b)); ctx.lineTo(sx(R),sy(m*R+b)); ctx.stroke();
      // درجات الميل من المقطع (خطوات أفقيّ ١ ثم رأسيّ م)
      ctx.strokeStyle=css('--gold','#F4B740'); ctx.lineWidth=2; ctx.setLineDash([4,3]);
      var px=0, py=b, steps=0;
      while(steps<R && Math.abs(py+m)<=R && px+1<=R){
        ctx.beginPath(); ctx.moveTo(sx(px),sy(py)); ctx.lineTo(sx(px+1),sy(py)); ctx.lineTo(sx(px+1),sy(py+m)); ctx.stroke();
        px+=1; py+=m; steps++;
      }
      ctx.setLineDash([]);
      // نقاط الدرجات
      for(var k=0;k<=steps;k++){ ctx.fillStyle=css('--subject-deep','#0B7E86'); ctx.beginPath(); ctx.arc(sx(k),sy(b+m*k),3.5,0,6.2832); ctx.fill(); }
      ctx.restore();
      // المقطع الصاديّ (٠، ب)
      ctx.fillStyle=css('--gold','#F4B740'); ctx.beginPath(); ctx.arc(sx(0),sy(b),6,0,6.2832); ctx.fill();
      ctx.strokeStyle=css('--ember-deep','#E4681B'); ctx.lineWidth=2; ctx.stroke();
      // تسمية الخطوة الأولى (إن وُجدت)
      if(steps>0){ ctx.font='700 10px "IBM Plex Sans Arabic",sans-serif';
        drawAr(sx(0.5), sy(b)+(m>=0?12:-12), 'أفقيّ ١', css('--ember-deep','#E4681B'));
        if(m!==0) drawAr(sx(1)+ (m>=0?22:22), sy(b+m/2), 'رأسيّ '+sig(m), css('--subject-deep','#0B7E86')); }
      ctx.font='700 10px "IBM Plex Sans Arabic",sans-serif';
      drawAr(sx(0)-(0>=0?24:24), sy(b)-12, 'المقطع', css('--ember-deep','#E4681B'));
    }
    function refresh(){
      var m=+mIn.value, b=+bIn.value;
      q('.js-mv').textContent=sig(m); q('.js-bv').textContent=sig(b);
      elEq.textContent=eqTxt(m,b);
      q('.js-step').innerHTML = 'أفقيّ <bdi>١</bdi>، ثمّ رأسيّ <bdi>'+sig(m)+'</bdi>';
      q('.js-int').textContent = '('+sig(b)+'، ٠)';
      q('.js-slp').textContent = sig(m)+' ÷ ١';
      elIc.style.background=css('--subject-deep','#0B7E86'); elIc.innerHTML=ICN;
      elTit.textContent='من الصيغة إلى الرسم'; elTit.style.color=css('--subject-deep','#0B7E86');
      elX.innerHTML='في الصيغة <b>ص = م س + ب</b>: النقطةُ <b>(٠، ب)</b> هي المقطعُ الصاديّ (نقطةُ البداية على المحور ص)، والميلُ <b>م</b> يقودك للنقطة التالية: تحرّكْ <b>أفقيًّا ١</b> ثم <b>رأسيًّا م</b>، وكرِّرْ.';
      draw();
    }
    [mIn,bIn].forEach(function(el){ el.addEventListener('input', refresh); });
    q('.js-reset').onclick=function(){ mIn.value=1; bIn.value=-2; refresh(); };
    ['.js-mv','.js-bv','.js-int','.js-slp'].forEach(function(s){ var e=q(s); e.style.direction='ltr'; e.style.unicodeBidi='isolate'; });
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
