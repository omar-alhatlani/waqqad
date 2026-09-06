/* ============================================================
   محاكاة تفاعلية — الشريط المئويّ (ن٪ من عدد)
   ن٪ من العدد = (ن ÷ ١٠٠) × العدد. الشريطُ المزدوج يوائم النسبةَ
   المئوية (٠–١٠٠٪) مع المقدار (٠–العدد) فتظهر القيمةُ المقابلة.
   الاستعمال من المحرّك:  window.SIMS['percentbar'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['percentbar'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M19 5L5 19"/><circle cx="7" cy="7" r="2.5"/><circle cx="17" cy="17" r="2.5"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  function fmt(n){ return toAr(Number.isInteger(n)?n:(Math.round(n*10)/10)).replace('.','٫'); }

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="شريط مئويّ مزدوج">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="شريطان متوائمان: النسبة المئوية والمقدار، والجزء المظلَّل يساوي ن٪ من العدد"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">الناتج:</span><span class="wq-val js-out">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-quick"><span class="wq-lbl" style="align-self:center">العدد:</span><button type="button" class="wq-qbtn js-whole" data-w="50">٥٠</button><button type="button" class="wq-qbtn js-whole" data-w="80">٨٠</button><button type="button" class="wq-qbtn js-whole" data-w="200" aria-pressed="true">٢٠٠</button></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>النسبة المئوية</span><b class="js-pv">٢٥٪</b></div><input type="range" class="wq-range warm js-p" min="0" max="100" value="25" step="5"></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">العملية</div><div class="wq-v js-calc" style="font-size:12px">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">الناتج</div><div class="wq-v js-res">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">النسبة المئوية</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, BX=30, BX1=270;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var qa=function(s){ return Array.prototype.slice.call(container.querySelectorAll(s)); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var pIn=q('.js-p'), elOut=q('.js-out'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var whole=200, dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function drawAr(x,y,str,col,f){ ctx.fillStyle=col; ctx.save(); ctx.font=f||'700 10px "IBM Plex Sans Arabic",sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='rtl'; ctx.fillText(str,x,y); ctx.restore(); }
    function drawNum(x,y,str,col,f,al){ ctx.fillStyle=col; ctx.save(); ctx.font=f||'700 10px Poppins,sans-serif'; ctx.textAlign=al||'center'; ctx.textBaseline='middle'; ctx.direction='ltr'; ctx.fillText(str,x,y); ctx.restore(); }
    function bar(y,frac,fill,line,lbl0,lbl1){
      var w=BX1-BX, fx=BX+frac*w;
      ctx.fillStyle=css('--surface-2','#FBFBFE'); ctx.strokeStyle=line; ctx.lineWidth=1.5; ctx.beginPath(); ctx.roundRect(BX,y,w,26,6); ctx.fill(); ctx.stroke();
      ctx.save(); ctx.beginPath(); ctx.roundRect(BX,y,w,26,6); ctx.clip(); ctx.fillStyle=fill; ctx.fillRect(BX,y,frac*w,26); ctx.restore();
      // خطُّ المؤشّر
      ctx.strokeStyle=line; ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(fx,y-4); ctx.lineTo(fx,y+30); ctx.stroke();
      drawNum(BX,y+38,lbl0,css('--muted','#7C82A8'),'600 9px Poppins',  'left');
      drawNum(BX1,y+38,lbl1,css('--muted','#7C82A8'),'600 9px Poppins', 'right');
      return fx;
    }
    function draw(){
      var p=+pIn.value, frac=p/100, val=frac*whole;
      ctx.clearRect(0,0,W,H);
      drawAr(150,24,'النسبة المئوية (٪)',css('--ember-deep','#E4681B'),'700 10px "IBM Plex Sans Arabic",sans-serif');
      var fx1=bar(34,frac,css('--ember','#F2892E'),css('--ember-deep','#E4681B'),'٠٪','١٠٠٪');
      drawNum(fx1, 30, toAr(p)+'٪', css('--ember-deep','#E4681B'), '800 11px Poppins');
      drawAr(150,118,'المقدار (العدد = '+toAr(whole)+')',css('--s-ar-deep','#1F7D52'),'700 10px "IBM Plex Sans Arabic",sans-serif');
      var fx2=bar(128,frac,css('--s-ar','#2E9E6B'),css('--s-ar-deep','#1F7D52'),'٠',toAr(whole));
      drawNum(fx2, 124, fmt(val), css('--s-ar-deep','#1F7D52'), '800 12px Poppins');
      // روابط رأسية بين المؤشّرين
      ctx.strokeStyle=css('--line-strong','#D6D9EC'); ctx.setLineDash([3,3]); ctx.beginPath(); ctx.moveTo(fx1,64); ctx.lineTo(fx2,128); ctx.stroke(); ctx.setLineDash([]);
    }
    function refresh(){
      var p=+pIn.value, val=p/100*whole;
      q('.js-pv').textContent=toAr(p)+'٪';
      qa('.js-whole').forEach(function(b){ b.setAttribute('aria-pressed', +b.getAttribute('data-w')===whole?'true':'false'); });
      q('.js-calc').textContent=toAr(p)+'٪ × '+toAr(whole)+' = '+fmt(val);
      q('.js-res').textContent=fmt(val);
      elOut.textContent=toAr(p)+'٪ من '+toAr(whole)+' = '+fmt(val); elOut.style.color=css('--s-ar-deep','#1F7D52'); elOut.style.direction='rtl';
      elIc.style.background=css('--ember-deep','#E4681B'); elIc.innerHTML=ICN;
      elTit.textContent='ن٪ من عدد';
      elX.innerHTML='لإيجادِ <b>'+toAr(p)+'٪ من '+toAr(whole)+'</b> نحوّلُ النسبةَ إلى عشريّ ونضربُ: <b>('+toAr(p)+' ÷ ١٠٠) × '+toAr(whole)+' = '+fmt(val)+'</b>. لاحظْ أنّ الشريطين متوائمان: موضعُ <b>'+toAr(p)+'٪</b> على الشريط الأعلى يقابلُ القيمةَ <b>'+fmt(val)+'</b> على شريط المقدار.';
      draw();
    }
    qa('.js-whole').forEach(function(b){ b.addEventListener('click', function(){ whole=+b.getAttribute('data-w'); refresh(); }); });
    pIn.addEventListener('input', refresh);
    q('.js-reset').onclick=function(){ whole=200; pIn.value=25; refresh(); };
    q('.js-res').style.direction='ltr'; q('.js-res').style.unicodeBidi='isolate';
    q('.js-calc').style.direction='rtl';
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
