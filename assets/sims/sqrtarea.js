/* ============================================================
   محاكاة تفاعلية — الجذر التربيعيّ كمساحة مربّع
   مساحةُ المربّع = الضلع²، فالضلعُ = جذرُ المساحة. والمربّعُ الكاملُ
   عددٌ جذرُه صحيح (مساحةُ مربّعٍ ضلعُه عددٌ صحيح).
   الاستعمال من المحرّك:  window.SIMS['sqrtarea'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['sqrtarea'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="1"/><path d="M4 15l3 3 5-8"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="مربّع من وحدات مساحته العدد وضلعه جذره">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="مربّعٌ مقسَّم إلى وحدات، مساحتُه العدد وطولُ ضلعه جذرُه التربيعيّ"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">الجذر:</span><span class="wq-val js-root">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>طول ضلع المربّع</span><b class="js-sv">٥</b></div><input type="range" class="wq-range warm js-s" min="1" max="11" value="5" step="1"></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">المساحة = الضلع²</div><div class="wq-v js-area">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">الضلع = √المساحة</div><div class="wq-v js-side">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">الجذر التربيعيّ</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, CX=150, CY=112, MAXPX=176;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var sIn=q('.js-s'), elRoot=q('.js-root'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function drawAr(x,y,str,col,f){ ctx.fillStyle=col; ctx.save(); ctx.font=f||'700 10px "IBM Plex Sans Arabic",sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='rtl'; ctx.fillText(str,x,y); ctx.restore(); }
    function drawNum(x,y,str,col,f){ ctx.fillStyle=col; ctx.save(); ctx.font=f||'800 12px Poppins,sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='ltr'; ctx.fillText(str,x,y); ctx.restore(); }

    function draw(){
      var s=+sIn.value, area=s*s;
      ctx.clearRect(0,0,W,H);
      var cell=MAXPX/s, side=cell*s, x0=CX-side/2, y0=CY-side/2;
      // ملء المربّع
      ctx.fillStyle=css('--s-math-soft','#E9F0FD'); ctx.fillRect(x0,y0,side,side);
      // شبكة الوحدات
      ctx.strokeStyle=css('--s-math','#3B6FE0'); ctx.lineWidth=1;
      for(var i=0;i<=s;i++){ ctx.beginPath(); ctx.moveTo(x0+i*cell,y0); ctx.lineTo(x0+i*cell,y0+side); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(x0,y0+i*cell); ctx.lineTo(x0+side,y0+i*cell); ctx.stroke(); }
      // إطار
      ctx.strokeStyle=css('--s-math-deep','#2551B8'); ctx.lineWidth=2.5; ctx.strokeRect(x0,y0,side,side);
      // المساحة في المنتصف
      drawNum(CX,CY,toAr(area), css('--s-math-deep','#2551B8'), '900 '+(s>7?16:22)+'px Poppins,sans-serif');
      drawAr(CX,CY+(s>7?14:20),'وحدة²', css('--s-math-deep','#2551B8'), '600 9px "IBM Plex Sans Arabic",sans-serif');
      // طول الضلع (أسفل)
      ctx.strokeStyle=css('--ember','#F2892E'); ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(x0,y0+side+9); ctx.lineTo(x0+side,y0+side+9); ctx.stroke();
      [x0,x0+side].forEach(function(cx){ ctx.beginPath(); ctx.moveTo(cx,y0+side+5); ctx.lineTo(cx,y0+side+13); ctx.stroke(); });
      drawNum(CX, y0+side+22, '√'+toAr(area)+' = '+toAr(s), css('--ember-deep','#E4681B'), '800 12px Poppins,sans-serif');
    }
    function refresh(){
      var s=+sIn.value, area=s*s;
      q('.js-sv').textContent=toAr(s);
      q('.js-area').textContent=toAr(s)+'² = '+toAr(area);
      q('.js-side').textContent='√'+toAr(area)+' = '+toAr(s);
      elRoot.textContent='√'+toAr(area)+' = '+toAr(s); elRoot.style.color=css('--ember-deep','#E4681B'); elRoot.style.direction='ltr'; elRoot.style.unicodeBidi='isolate';
      elIc.style.background=css('--s-math-deep','#2551B8'); elIc.innerHTML=ICN;
      elTit.textContent='الجذر التربيعيّ';
      elX.innerHTML='مربّعٌ طولُ ضلعه <b>'+toAr(s)+'</b> مساحتُه <b>'+toAr(s)+' × '+toAr(s)+' = '+toAr(area)+'</b> وحدة. فالعددُ <b>'+toAr(area)+'</b> <b>مربّعٌ كامل</b> لأنّ جذرَه عددٌ صحيح: <b>√'+toAr(area)+' = '+toAr(s)+'</b>. إذنِ التربيعُ وإيجادُ الجذرِ عمليتان متعاكستان، والجذرُ هو <b>طولُ ضلع المربّع الذي مساحتُه ذلك العدد</b>.';
      draw();
    }
    sIn.addEventListener('input', refresh);
    q('.js-reset').onclick=function(){ sIn.value=5; refresh(); };
    ['.js-area','.js-side'].forEach(function(sl){ var e=q(sl); e.style.direction='ltr'; e.style.unicodeBidi='isolate'; });
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
