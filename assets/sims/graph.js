/* ============================================================
   محاكاة تفاعلية — التمثيل البياني للدالة الخطية  ص = م س + ب
   حرّك الميل (م) والمقطع الصادي (ب)، وشاهد الخطّ المستقيم يتغيّر.
   الاستعمال من المحرّك:  window.SIMS['graph'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['graph'] = (function(){

  var LINE='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M5 19 19 5"/></svg>';

  var STATES={
    up:{ ar:'خطٌّ صاعد', col:'var(--s-ar-deep)', title:'ميلٌ موجب — علاقةٌ طردية',
      text:'الميلُ موجب، فالخطُّ يصعد من اليسار إلى اليمين: كلّما زادت «س» زادت «ص». وكلّما كبُر الميلُ زاد انحدارُ الصعود.' },
    down:{ ar:'خطٌّ هابط', col:'var(--ember-deep)', title:'ميلٌ سالب — علاقةٌ عكسية',
      text:'الميلُ سالب، فالخطُّ يهبط من اليسار إلى اليمين: كلّما زادت «س» نقصت «ص».' },
    flat:{ ar:'خطٌّ أفقيّ', col:'var(--muted)', title:'ميلٌ صفر — قيمةٌ ثابتة',
      text:'الميلُ صفر، فالخطُّ أفقيّ: قيمةُ «ص» ثابتةٌ لا تتغيّر مهما تغيّرت «س».' }
  };

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="مستوى إحداثي وخطّ الدالة">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="خطّ الدالة الخطية على المستوى الإحداثي"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">الخطّ:</span><span class="wq-val js-state">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>الميل (م)</span><b class="js-mv">٢</b></div>'+
            '<input type="range" class="wq-range warm js-m" min="-5" max="5" value="2" step="1" aria-label="الميل"></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>المقطع الصادي (ب)</span><b class="js-bv">١</b></div>'+
            '<input type="range" class="wq-range cool js-b" min="-6" max="6" value="1" step="1" aria-label="المقطع الصادي"></div>'+
          '<div class="wq-eq"><span class="wq-eqt">معادلة الخطّ</span><div class="wq-eqv js-eq" style="direction:rtl">—</div></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">الميل (م)</div><div class="wq-v js-rm">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">يقطع الصادي عند</div><div class="wq-v js-rb">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">—</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, OX=150, OY=118, C=17, R=6;
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  function sig(n){ return (n<0?'−':'')+toAr(Math.abs(n)); }

  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var mIn=q('.js-m'), bIn=q('.js-b');
    var elState=q('.js-state'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var cur='';
    var dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function sx(x){ return OX+x*C; } function sy(y){ return OY-y*C; }

    function eqText(m,b){
      var mp = m===0 ? '' : (m===1?'س':(m===-1?'−س':sig(m)+'س'));
      var bp = b===0 ? '' : (b>0? ' + '+toAr(b) : ' − '+toAr(-b));
      if(m===0) return 'ص = '+sig(b);
      return 'ص = '+mp+bp;
    }

    function draw(){
      var m=+mIn.value, b=+bIn.value;
      ctx.clearRect(0,0,W,H);
      ctx.strokeStyle=css('--line','#E7E9F5'); ctx.lineWidth=1;
      for(var i=-R;i<=R;i++){ ctx.beginPath(); ctx.moveTo(sx(i),sy(-R)); ctx.lineTo(sx(i),sy(R)); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(sx(-R),sy(i)); ctx.lineTo(sx(R),sy(i)); ctx.stroke(); }
      ctx.strokeStyle=css('--ink-soft','#4A5080'); ctx.lineWidth=2;
      ctx.beginPath(); ctx.moveTo(sx(-R),sy(0)); ctx.lineTo(sx(R),sy(0)); ctx.moveTo(sx(0),sy(-R)); ctx.lineTo(sx(0),sy(R)); ctx.stroke();
      ctx.fillStyle=css('--ink-soft','#4A5080'); ctx.font='700 12px Cairo,sans-serif'; ctx.textAlign='center';
      ctx.fillText('س', sx(R)+2, sy(0)-6); ctx.fillText('ص', sx(0)+10, sy(R));
      // خطّ الدالة (مقصوصٌ داخل الشبكة)
      ctx.save();
      ctx.beginPath(); ctx.rect(sx(-R),sy(R),2*R*C,2*R*C); ctx.clip();
      ctx.strokeStyle=css('--subject','#0FA3AA'); ctx.lineWidth=3; ctx.lineCap='round';
      ctx.beginPath(); ctx.moveTo(sx(-R),sy(m*-R+b)); ctx.lineTo(sx(R),sy(m*R+b)); ctx.stroke();
      ctx.restore();
      // نقطة تقاطع المحور الصادي (٠، ب)
      if(b>=-R&&b<=R){ ctx.fillStyle=css('--ember','#F2892E'); ctx.beginPath(); ctx.arc(sx(0),sy(b),5,0,6.2832); ctx.fill();
        ctx.fillStyle='#fff'; ctx.beginPath(); ctx.arc(sx(0)-1.4,sy(b)-1.6,1.7,0,6.2832); ctx.fill(); }
    }
    function refresh(){
      var m=+mIn.value, b=+bIn.value;
      q('.js-mv').textContent=sig(m); q('.js-bv').textContent=sig(b);
      q('.js-rm').textContent=sig(m); q('.js-rb').textContent=sig(b);
      q('.js-eq').textContent=eqText(m,b);
      var st = m>0?'up':(m<0?'down':'flat');
      if(st!==cur){ cur=st; var S=STATES[st];
        elState.textContent=S.ar; elState.style.color=S.col;
        elIc.style.background=S.col; elIc.innerHTML=LINE;
        elTit.textContent=S.title; elTit.style.color=S.col; elX.textContent=S.text; }
      draw();
    }
    mIn.addEventListener('input', refresh); bIn.addEventListener('input', refresh);
    q('.js-reset').onclick=function(){ mIn.value=2; bIn.value=1; refresh(); };
    q('.js-mv').style.direction=q('.js-bv').style.direction=q('.js-rm').style.direction=q('.js-rb').style.direction='ltr';
    q('.js-mv').style.unicodeBidi=q('.js-bv').style.unicodeBidi=q('.js-rm').style.unicodeBidi=q('.js-rb').style.unicodeBidi='isolate';
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
