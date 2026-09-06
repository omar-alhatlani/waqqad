/* ============================================================
   محاكاة تفاعلية — القيمة المطلقة على خط الأعداد
   |س| = بُعدُ العدد عن الصفر، وهي دائمًا موجبةٌ أو صفر. والعددان
   المتعاكسان (+ن و−ن) لهما القيمةُ المطلقةُ نفسُها.
   الاستعمال من المحرّك:  window.SIMS['absline'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['absline'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 4v16M18 4v16M10 9l4 6M14 9l-4 6"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  function sig(n){ return (n<0?'−':'')+toAr(Math.abs(n)); }

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="خط أعداد يوضّح القيمة المطلقة">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="خط أعداد، نقطةٌ عند العدد وبُعدُها عن الصفر يساوي قيمتها المطلقة"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">القيمة المطلقة:</span><span class="wq-val js-abs">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>العدد س</span><b class="js-vv">−٦</b></div><input type="range" class="wq-range warm js-v" min="-9" max="9" value="-6" step="1"></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">العدد</div><div class="wq-v js-num">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">|س| = البُعد عن ٠</div><div class="wq-v js-d">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">القيمة المطلقة</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, X0=28, X1=272, AY=118;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var vIn=q('.js-v'), elAbs=q('.js-abs'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function drawAr(x,y,str,col,f){ ctx.fillStyle=col; ctx.save(); ctx.font=f||'700 10px "IBM Plex Sans Arabic",sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='rtl'; ctx.fillText(str,x,y); ctx.restore(); }
    function drawNum(x,y,str,col,f){ ctx.fillStyle=col; ctx.save(); ctx.font=f||'700 10px Poppins,sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='ltr'; ctx.fillText(str,x,y); ctx.restore(); }
    function px(v){ return X0 + (v+9)/18*(X1-X0); }

    function draw(){
      var v=+vIn.value, x0=px(0), xv=px(v), xn=px(-v);
      ctx.clearRect(0,0,W,H);
      // المحور
      ctx.strokeStyle=css('--line-strong','#D6D9EC'); ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(X0,AY); ctx.lineTo(X1,AY); ctx.stroke();
      // علامات وأرقام
      for(var i=-9;i<=9;i++){ var x=px(i); var big=(i%3===0);
        ctx.strokeStyle=css(i===0?'--ink':'--muted', i===0?'#1C2143':'#7C82A8'); ctx.lineWidth=i===0?2:1;
        ctx.beginPath(); ctx.moveTo(x,AY-(big?7:4)); ctx.lineTo(x,AY+(big?7:4)); ctx.stroke();
        if(big) drawNum(x, AY+18, sig(i), css('--muted','#7C82A8'), '600 9px Poppins,sans-serif');
      }
      // العدد المعاكس (باهت)
      if(v!==0){ ctx.fillStyle=css('--line-strong','#D6D9EC'); ctx.beginPath(); ctx.arc(xn,AY,5,0,6.2832); ctx.fill();
        drawNum(xn, AY-16, sig(-v), css('--muted','#7C82A8'), '700 10px Poppins,sans-serif'); }
      // قوس البُعد من ٠ إلى العدد
      ctx.strokeStyle=css('--ember','#F2892E'); ctx.lineWidth=3.5; ctx.lineCap='round'; ctx.beginPath(); ctx.moveTo(x0,AY-24); ctx.lineTo(xv,AY-24); ctx.stroke();
      [x0,xv].forEach(function(cx){ ctx.beginPath(); ctx.moveTo(cx,AY-28); ctx.lineTo(cx,AY-20); ctx.stroke(); });
      drawNum((x0+xv)/2, AY-38, '|'+sig(v)+'| = '+toAr(Math.abs(v)), css('--ember-deep','#E4681B'), '800 12px Poppins,sans-serif');
      // النقطة عند العدد
      ctx.fillStyle=css('--brand','#4B45C6'); ctx.beginPath(); ctx.arc(xv,AY,7,0,6.2832); ctx.fill();
      drawNum(xv, AY+34, 'س = '+sig(v), css('--brand-deep','#3833A0'), '800 12px Poppins,sans-serif');
    }
    function refresh(){
      var v=+vIn.value;
      q('.js-vv').textContent=sig(v); q('.js-vv').style.direction='ltr';
      q('.js-num').textContent=sig(v);
      q('.js-d').textContent=toAr(Math.abs(v));
      elAbs.textContent='|'+sig(v)+'| = '+toAr(Math.abs(v)); elAbs.style.color=css('--ember-deep','#E4681B'); elAbs.style.direction='ltr'; elAbs.style.unicodeBidi='isolate';
      elIc.style.background=css('--brand-deep','#3833A0'); elIc.innerHTML=ICN;
      elTit.textContent='القيمة المطلقة';
      elX.innerHTML = v===0
        ? 'القيمةُ المطلقة <b>|٠| = ٠</b>. و<b>|س|</b> هي بُعدُ العدد عن الصفر على خطِّ الأعداد، وهي دائمًا <b>موجبةٌ أو صفر</b>.'
        : 'العددُ <b>'+sig(v)+'</b> يبعد <b>'+toAr(Math.abs(v))+'</b> وحداتٍ عن الصفر، فـ<b>|'+sig(v)+'| = '+toAr(Math.abs(v))+'</b>. ولاحظ أنّ <b>'+sig(-v)+'</b> يبعد المسافةَ نفسَها، فـ|'+sig(v)+'| = |'+sig(-v)+'|. والقيمةُ المطلقةُ دائمًا موجبةٌ أو صفر.';
      draw();
    }
    vIn.addEventListener('input', refresh);
    q('.js-reset').onclick=function(){ vIn.value=-6; refresh(); };
    ['.js-num','.js-d'].forEach(function(s){ var e=q(s); e.style.direction='ltr'; e.style.unicodeBidi='isolate'; });
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
