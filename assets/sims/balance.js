/* ============================================================
   محاكاة تفاعلية — ميزان المعادلات (حلّ المعادلة الخطية)
   المعادلةُ ميزانٌ متّزن: ما تفعله بطرفٍ افعلْه بالآخر ليبقى متّزنًا.
   اطرحِ الثابتَ من الطرفين، ثم اقسمْ على المعامل، فتُعزَل س.
   الاستعمال من المحرّك:  window.SIMS['balance'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['balance'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M5 21h14M6 7h12"/><path d="M6 7 3 13h6zM18 7l-3 6h6z"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  function T(a){ return a===1?'س':(toAr(a)+'س'); }

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="ميزان يمثّل طرفي المعادلة">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="ميزان طرفاه متّزنان يمثّلان المعادلة"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">المعادلة:</span><span class="wq-val js-eq">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>معامل س</span><b class="js-av">٢</b></div><input type="range" class="wq-range warm js-a" min="1" max="3" value="2" step="1"></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>الحدّ الثابت</span><b class="js-bv">٣</b></div><input type="range" class="wq-range warm js-b" min="0" max="6" value="3" step="1"></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>قيمة س (لتوليد المعادلة)</span><b class="js-xv">٤</b></div><input type="range" class="wq-range cool js-x" min="1" max="5" value="4" step="1"></div>'+
          '<div class="wq-quick"><button type="button" class="wq-qbtn js-step" data-s="do">نفّذِ الخطوة ▶</button><button type="button" class="wq-tool js-back" style="flex:1">◀ رجوع</button></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">الخطوة</div><div class="wq-v js-stepname" style="font-size:13px">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">قيمة س</div><div class="wq-v js-sol">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">المعادلة ميزان</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, FX=150, BY=70, ARM=104;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var aIn=q('.js-a'), bIn=q('.js-b'), xIn=q('.js-x');
    var elEq=q('.js-eq'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var step=0, dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function state(){ var a=+aIn.value,b=+bIn.value,x=+xIn.value,c=a*x+b;
      // step0: aس + b = c ; step1: aس = c-b ; step2: س = x
      if(step===0) return {L:{x:a,u:b}, R:{x:0,u:c}, eq:T(a)+' + '+toAr(b)+' = '+toAr(c)};
      if(step===1) return {L:{x:a,u:0}, R:{x:0,u:c-b}, eq:T(a)+' = '+toAr(c-b)};
      return {L:{x:1,u:0}, R:{x:0,u:x}, eq:'س = '+toAr(x)}; }

    function pan(cx,contents){
      // حبل + كفّة
      ctx.strokeStyle=css('--muted','#7C82A8'); ctx.lineWidth=1.5; ctx.beginPath(); ctx.moveTo(cx,BY+2); ctx.lineTo(cx,BY+30); ctx.stroke();
      ctx.fillStyle=css('--surface-2','#FBFBFE'); ctx.strokeStyle=css('--line-strong','#D6D9EC'); ctx.lineWidth=2;
      ctx.beginPath(); ctx.ellipse(cx,BY+34,42,9,0,0,6.2832); ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx-42,BY+34); ctx.lineTo(cx-34,BY+64); ctx.lineTo(cx+34,BY+64); ctx.lineTo(cx+42,BY+34); ctx.stroke();
      // محتوى: كتل س ثم وحدات
      var bx=cx-30, by=BY+52;
      for(var i=0;i<contents.x;i++){ ctx.fillStyle=css('--s-en','#7A5BE8'); ctx.beginPath(); ctx.roundRect(bx,by-14,20,20,5); ctx.fill();
        ctx.fillStyle='#fff'; ctx.font='800 12px Cairo,sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='ltr'; ctx.fillText('س',bx+10,by-4); bx+=23; if(bx>cx+24){bx=cx-30;by-=22;} }
      var ux=cx-30, uy=by+2;
      for(var u=0;u<contents.u;u++){ ctx.fillStyle=css('--ember','#F2892E'); ctx.beginPath(); ctx.arc(ux,uy,5,0,6.2832); ctx.fill();
        ctx.strokeStyle='#fff'; ctx.lineWidth=1; ctx.stroke(); ux+=13; if(ux>cx+30){ux=cx-30;uy-=12;} }
    }
    function draw(){
      var S=state(); ctx.clearRect(0,0,W,H);
      // قاعدة وعمود
      ctx.strokeStyle=css('--ink-soft','#4A5080'); ctx.lineWidth=3; ctx.beginPath(); ctx.moveTo(FX,BY); ctx.lineTo(FX,180); ctx.stroke();
      ctx.fillStyle=css('--ink-soft','#4A5080'); ctx.beginPath(); ctx.moveTo(FX-24,190); ctx.lineTo(FX+24,190); ctx.lineTo(FX+14,180); ctx.lineTo(FX-14,180); ctx.closePath(); ctx.fill();
      // الذراع (متّزن دائمًا)
      ctx.strokeStyle=css('--ember-deep','#E4681B'); ctx.lineWidth=4; ctx.lineCap='round'; ctx.beginPath(); ctx.moveTo(FX-ARM,BY); ctx.lineTo(FX+ARM,BY); ctx.stroke();
      ctx.fillStyle=css('--ember-deep','#E4681B'); ctx.beginPath(); ctx.arc(FX,BY,5,0,6.2832); ctx.fill();
      pan(FX-ARM, S.L); pan(FX+ARM, S.R);
    }
    function refresh(){
      var S=state(), x=+xIn.value;
      q('.js-av').textContent=toAr(+aIn.value); q('.js-bv').textContent=toAr(+bIn.value); q('.js-xv').textContent=toAr(x);
      elEq.textContent=S.eq; elEq.style.color=css('--brand','#4B45C6');
      q('.js-stepname').textContent = step===0?'المعادلة الأصلية':(step===1?'طرحنا الثابت':'قسمنا على المعامل');
      q('.js-sol').textContent = step===2?toAr(x):'؟';
      elIc.style.background=css('--brand-deep','#3833A0'); elIc.innerHTML=ICN; elTit.textContent='المعادلة ميزان';
      elX.innerHTML = step===0
        ? 'الطرفان <b>متّزنان</b>. الكتلةُ البنفسجية = <b>س</b> (مجهول)، والدائرةُ البرتقالية = <b>وحدة (١)</b>. لعزلِ س: تخلّصْ أوّلًا من الثابت.'
        : step===1
        ? 'طرحنا <b>الثابتَ من الطرفين معًا</b> فبقي الميزانُ متّزنًا: <b>'+T(+aIn.value)+' = '+toAr(+aIn.value*x)+'</b>. الآن اقسمْ على المعامل.'
        : 'قسمنا <b>الطرفين على المعامل</b> فعُزِلت س: <b>س = '+toAr(x)+'</b>. القاعدة: ما تفعله بطرفٍ افعلْه بالآخر ليبقى الميزانُ متّزنًا.';
      draw();
    }
    q('.js-step').onclick=function(){ if(step<2){ step++; refresh(); } };
    q('.js-back').onclick=function(){ if(step>0){ step--; refresh(); } };
    [aIn,bIn,xIn].forEach(function(el){ el.addEventListener('input', function(){ step=0; refresh(); }); });
    q('.js-reset').onclick=function(){ aIn.value=2;bIn.value=3;xIn.value=4; step=0; refresh(); };
    ['.js-av','.js-bv','.js-xv','.js-eq','.js-sol'].forEach(function(s){ var e=q(s); e.style.direction='ltr'; e.style.unicodeBidi='isolate'; });
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
