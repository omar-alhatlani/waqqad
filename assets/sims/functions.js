/* ============================================================
   محاكاة تفاعلية — تمثيل الدوال (مخطّط الربط)
   قاعدةٌ ص = م س + ب تربط كلَّ مدخلٍ (س) بمخرجٍ واحد (ص). يبيّن المخطّط
   السهميّ أنّ لكلِّ مدخلٍ صورةً واحدة — وهذا معنى الدالة.
   الاستعمال من المحرّك:  window.SIMS['functions'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['functions'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="7" r="2"/><circle cx="6" cy="17" r="2"/><circle cx="18" cy="12" r="2"/><path d="M8 7.5 16 11.5M8 16.5 16 12.5"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  function sig(n){ return (n<0?'−':'')+toAr(Math.abs(n)); }
  function ruleTxt(m,b){ var mp=m===1?'س':(m===-1?'−س':sig(m)+'س'), bp=b===0?'':(b>0?' + '+toAr(b):' − '+toAr(-b));
    return 'ص = '+mp+bp; }

  var XS=[-2,-1,0,1,2];
  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="مخطّط ربط المدخلات بالمخرجات">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="مخطّط سهميّ يربط كل مدخل بمخرجه"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">القاعدة:</span><span class="wq-val js-rule">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>معامل س (الميل م)</span><b class="js-mv">٢</b></div><input type="range" class="wq-range warm js-m" min="-3" max="3" value="2" step="1"></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>الثابت (المقطع ب)</span><b class="js-bv">١</b></div><input type="range" class="wq-range cool js-b" min="-6" max="6" value="1" step="1"></div>'+
          '<div class="wq-eq"><span class="wq-eqt">جرّب مدخلًا</span><div class="wq-eqv"><span class="js-try">—</span></div></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">المخرجات (ص)</div><div class="wq-v js-pairs" style="font-size:13px">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">دالة؟</div><div class="wq-v js-isfn">نعم</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">—</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, LX=88, RX=212, ROWS_Y=[70,105,140,175,205];
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var mIn=q('.js-m'), bIn=q('.js-b');
    var elRule=q('.js-rule'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var dpr=1, mounted=false;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function drawNum(x,y,str,col){ ctx.fillStyle=col; ctx.save(); ctx.textBaseline='middle'; ctx.direction='ltr';
      var ch=str.split(''), ws=ch.map(function(c){return ctx.measureText(c).width;}), tot=ws.reduce(function(a,b){return a+b;},0), lx=x-tot/2;
      ctx.textAlign='left'; for(var i=0;i<ch.length;i++){ ctx.fillText(ch[i],lx,y); lx+=ws[i]; } ctx.restore(); }
    function drawAr(x,y,str,col){ ctx.fillStyle=col; ctx.save(); ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='rtl'; ctx.fillText(str,x,y); ctx.restore(); }
    function pill(cx,y,txt,fill,tcol){ ctx.fillStyle=fill; ctx.beginPath(); ctx.roundRect(cx-22,y-13,44,26,13); ctx.fill();
      ctx.font='800 12px Cairo,sans-serif'; drawNum(cx,y,txt,tcol); }

    function draw(){
      var m=+mIn.value, b=+bIn.value;
      ctx.clearRect(0,0,W,H);
      // إطارا المجموعتين
      ctx.strokeStyle=css('--line-strong','#D6D9EC'); ctx.lineWidth=1.5;
      ctx.beginPath(); ctx.roundRect(LX-32,54,64,168,20); ctx.stroke();
      ctx.beginPath(); ctx.roundRect(RX-32,54,64,168,20); ctx.stroke();
      ctx.font='700 11px "IBM Plex Sans Arabic",sans-serif';
      drawAr(LX,44,'المدخلات (س)',css('--ember-deep','#E4681B'));
      drawAr(RX,44,'المخرجات (ص)',css('--subject-deep','#0B7E86'));
      // الأسهم من كل مدخل إلى مخرجه
      for(var i=0;i<XS.length;i++){ var y=ROWS_Y[i], yy=y;
        ctx.strokeStyle=css('--muted','#7C82A8'); ctx.lineWidth=1.6;
        ctx.beginPath(); ctx.moveTo(LX+24,y); ctx.lineTo(RX-26,yy); ctx.stroke();
        ctx.fillStyle=css('--muted','#7C82A8'); ctx.beginPath();
        ctx.moveTo(RX-24,yy); ctx.lineTo(RX-31,yy-4); ctx.lineTo(RX-31,yy+4); ctx.closePath(); ctx.fill(); }
      // الحبيبات (بعد الأسهم لتعلوها)
      for(i=0;i<XS.length;i++){ var yv=ROWS_Y[i], ov=m*XS[i]+b;
        pill(LX,yv,sig(XS[i]),'rgba(242,137,46,.16)', css('--ember-deep','#E4681B'));
        pill(RX,yv,sig(ov),css('--subject-soft','#E2F5F5'), css('--subject-deep','#0B7E86')); }
    }
    function refresh(){
      var m=+mIn.value, b=+bIn.value;
      q('.js-mv').textContent=sig(m); q('.js-bv').textContent=sig(b);
      elRule.textContent=ruleTxt(m,b);
      q('.js-try').textContent = 'س = ١ ← ص = '+sig(m*1+b)+'   ،   س = ٢ ← ص = '+sig(m*2+b);
      q('.js-pairs').textContent = XS.map(function(x){ return sig(m*x+b); }).join('  ،  ');
      q('.js-isfn').textContent='نعم'; q('.js-isfn').style.color=css('--subject-deep','#0B7E86');
      elIc.style.background=css('--subject-deep','#0B7E86'); elIc.innerHTML=ICN;
      elTit.textContent='علاقةٌ دالّة'; elTit.style.color=css('--subject-deep','#0B7E86');
      elX.innerHTML='القاعدةُ <b>ص = م س + ب</b> تُخرِجُ لكلِّ مدخلٍ (س) قيمةً <b>واحدة</b> فقط للمخرج (ص) — وهذا شرطُ الدالة. غيِّرِ الميلَ والمقطعَ فتتغيّرُ المخرجاتُ، ويبقى لكلِّ مدخلٍ سهمٌ واحد.';
      draw();
    }
    [mIn,bIn].forEach(function(el){ el.addEventListener('input', refresh); });
    q('.js-reset').onclick=function(){ mIn.value=2; bIn.value=1; refresh(); };
    ['.js-mv','.js-bv','.js-try','.js-pairs'].forEach(function(s){ var e=q(s); e.style.direction='ltr'; e.style.unicodeBidi='isolate'; });
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
