/* ============================================================
   محاكاة تفاعلية — الضوء: الانعكاس والانكسار
   عند الانعكاس يرتدّ الشعاعُ بزاويةٍ تساوي زاويةَ السقوط. وعند الانكسار
   يتغيّر مسارُه عند العبور إلى وسطٍ أكثفَ فيقترب من العمود المُقام.
   الاستعمال من المحرّك:  window.SIMS['light'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['light'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="شعاع ضوئي ينعكس أو ينكسر">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="شعاع ضوء وعمود مقام وزوايا الانعكاس أو الانكسار"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">القاعدة:</span><span class="wq-val js-rule" style="font-size:14px">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-quick"><button type="button" class="wq-qbtn js-mode" data-m="refl" aria-pressed="true">انعكاس</button><button type="button" class="wq-qbtn js-mode" data-m="refr">انكسار</button></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>زاوية السقوط</span><b class="js-tv">٤٠°</b></div><input type="range" class="wq-range warm js-t" min="10" max="70" value="40" step="5"></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">زاوية السقوط</div><div class="wq-v js-inc">—</div></div>'+
          '<div class="wq-read"><div class="wq-k js-olbl">زاوية الانعكاس</div><div class="wq-v js-out">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">—</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, PX=150, PY=118, L=104;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var qa=function(s){ return Array.prototype.slice.call(container.querySelectorAll(s)); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var tIn=q('.js-t'), elRule=q('.js-rule'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var mode='refl', dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function drawAr(x,y,str,col){ ctx.fillStyle=col; ctx.save(); ctx.font='700 9px "IBM Plex Sans Arabic",sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='rtl'; ctx.fillText(str,x,y); ctx.restore(); }
    function ray(x1,y1,x2,y2,col){ ctx.strokeStyle=col; ctx.lineWidth=2.6; ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.stroke();
      var mx=(x1+x2)/2, my=(y1+y2)/2, ang=Math.atan2(y2-y1,x2-x1); ctx.fillStyle=col; ctx.beginPath();
      ctx.moveTo(mx,my); ctx.lineTo(mx-8*Math.cos(ang-0.4),my-8*Math.sin(ang-0.4)); ctx.lineTo(mx-8*Math.cos(ang+0.4),my-8*Math.sin(ang+0.4)); ctx.fill(); }

    function draw(){
      var th=+tIn.value*Math.PI/180;
      ctx.clearRect(0,0,W,H);
      // الوسطان / السطح
      if(mode==='refr'){ ctx.fillStyle=css('--s-sci-soft','#E2F5F5'); ctx.fillRect(0,PY,W,H-PY); drawAr(40,PY+16,'وسطٌ أكثف',css('--subject-deep','#0B7E86')); drawAr(40,PY-14,'هواء',css('--muted','#7C82A8')); }
      else { ctx.fillStyle=css('--line-strong','#D6D9EC'); ctx.fillRect(0,PY,W,10);
        ctx.strokeStyle=css('--muted','#7C82A8'); ctx.lineWidth=1; for(var hx=10;hx<W;hx+=12){ ctx.beginPath(); ctx.moveTo(hx,PY+10); ctx.lineTo(hx-8,PY+18); ctx.stroke(); } drawAr(40,PY-14,'مرآة',css('--muted','#7C82A8')); }
      ctx.strokeStyle=css('--ink-soft','#4A5080'); ctx.lineWidth=1.5; ctx.beginPath(); ctx.moveTo(0,PY); ctx.lineTo(W,PY); ctx.stroke();
      // العمود المقام
      ctx.strokeStyle=css('--muted','#7C82A8'); ctx.setLineDash([5,4]); ctx.beginPath(); ctx.moveTo(PX,PY-96); ctx.lineTo(PX,PY+96); ctx.stroke(); ctx.setLineDash([]);
      drawAr(PX,PY-100,'العمود المقام',css('--muted','#7C82A8'));
      // الشعاع الساقط
      ray(PX-L*Math.sin(th), PY-L*Math.cos(th), PX, PY, css('--ember','#F2892E'));
      // المنعكس/المنكسر
      if(mode==='refl'){ ray(PX, PY, PX+L*Math.sin(th), PY-L*Math.cos(th), css('--subject','#0FA3AA')); }
      else { var phi=Math.asin(Math.sin(th)/1.4); ray(PX, PY, PX+L*Math.sin(phi), PY+L*Math.cos(phi), css('--subject','#0FA3AA')); }
      // نقطة السقوط
      ctx.fillStyle=css('--ink','#1C2143'); ctx.beginPath(); ctx.arc(PX,PY,3,0,6.2832); ctx.fill();
    }
    function refresh(){
      var t=+tIn.value, out = mode==='refl'? t : Math.round(Math.asin(Math.sin(t*Math.PI/180)/1.4)*180/Math.PI);
      q('.js-tv').textContent=toAr(t)+'°'; q('.js-inc').textContent=toAr(t)+'°'; q('.js-out').textContent=toAr(out)+'°';
      q('.js-olbl').textContent = mode==='refl'?'زاوية الانعكاس':'زاوية الانكسار';
      qa('.js-mode').forEach(function(b){ b.setAttribute('aria-pressed', b.getAttribute('data-m')===mode?'true':'false'); });
      elRule.textContent = mode==='refl'?'زاوية السقوط = زاوية الانعكاس':'يقترب من العمود';
      elRule.style.color=css('--subject-deep','#0B7E86');
      elIc.style.background=css('--subject-deep','#0B7E86'); elIc.innerHTML=ICN;
      elTit.textContent = mode==='refl'?'الانعكاس':'الانكسار';
      elX.innerHTML = mode==='refl'
        ? 'حين يرتدُّ الضوءُ عن سطحٍ عاكس (مرآة) تكون <b>زاويةُ الانعكاس = زاويةُ السقوط</b>، وكلتاهما تُقاسان من <b>العمود المقام</b> على السطح.'
        : 'عند عبور الضوء إلى وسطٍ <b>أكثف</b> (كالماء) تقلّ سرعتُه فيتغيّر مسارُه <b>مقتربًا من العمود المقام</b> (زاويةُ الانكسار أصغرُ من زاوية السقوط). ولهذا تبدو الأشياءُ في الماء منكسرة.';
      draw();
    }
    qa('.js-mode').forEach(function(b){ b.addEventListener('click', function(){ mode=b.getAttribute('data-m'); refresh(); }); });
    tIn.addEventListener('input', refresh);
    q('.js-reset').onclick=function(){ mode='refl'; tIn.value=40; refresh(); };
    ['.js-tv','.js-inc','.js-out'].forEach(function(s){ var e=q(s); e.style.direction='ltr'; e.style.unicodeBidi='isolate'; });
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
