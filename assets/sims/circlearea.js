/* ============================================================
   محاكاة تفاعلية — الدائرة: المحيط والمساحة
   المحيط = ٢ × π × نصف القطر (= π × القطر)، والمساحة = π × نصف القطر².
   غيّرْ نصفَ القطر واختر المحيطَ أو المساحة لإبرازه ورؤية الحساب.
   الاستعمال من المحرّك:  window.SIMS['circlearea'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['circlearea'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 12h9" stroke-linecap="round"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  function arNum(x){ var r=Math.round(x*100)/100; return toAr(String(r)).replace(/\./g,'٫'); }

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="دائرة بنصف قطر متغيّر">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="دائرة يظهر نصف قطرها ومحيطها ومساحتها"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">المساحة:</span><span class="wq-val js-area">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-quick"><button type="button" class="wq-qbtn js-m" data-m="area" aria-pressed="true">المساحة</button><button type="button" class="wq-qbtn js-m" data-m="circ">المحيط</button></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>نصف القطر (نق)</span><b class="js-rv">٤</b></div><input type="range" class="wq-range warm js-r" min="1" max="6" value="4" step="1"></div>'+
          '<div class="wq-eq"><span class="wq-eqt">الحساب (π ≈ ٣٫١٤)</span><div class="wq-eqv"><span class="js-formula">—</span></div></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">المحيط</div><div class="wq-v js-circ">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">القطر</div><div class="wq-v js-diam">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">الدائرة</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, CX=140, CY=112;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var qa=function(s){ return Array.prototype.slice.call(container.querySelectorAll(s)); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var rIn=q('.js-r'), elArea=q('.js-area'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var mode='area', dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function drawAr(x,y,str,col){ ctx.fillStyle=col; ctx.save(); ctx.font='700 11px "IBM Plex Sans Arabic",sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='rtl'; ctx.fillText(str,x,y); ctx.restore(); }
    function drawNum(x,y,str,col){ ctx.fillStyle=col; ctx.save(); ctx.font='800 12px Cairo,sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='ltr'; ctx.fillText(str,x,y); ctx.restore(); }

    function draw(){
      var r=+rIn.value, R=r*15;
      ctx.clearRect(0,0,W,H);
      // شبكة خفيفة (وحدات المساحة)
      if(mode==='area'){ ctx.save(); ctx.beginPath(); ctx.arc(CX,CY,R,0,6.2832); ctx.clip();
        ctx.strokeStyle=css('--line-strong','#D6D9EC'); ctx.lineWidth=1;
        for(var gx=CX-R;gx<=CX+R;gx+=15){ ctx.beginPath(); ctx.moveTo(gx,CY-R); ctx.lineTo(gx,CY+R); ctx.stroke(); }
        for(var gy=CY-R;gy<=CY+R;gy+=15){ ctx.beginPath(); ctx.moveTo(CX-R,gy); ctx.lineTo(CX+R,gy); ctx.stroke(); } ctx.restore(); }
      // الدائرة
      ctx.fillStyle=css('--subject-soft','#E2F5F5'); ctx.globalAlpha= mode==='area'?0.7:0.35; ctx.beginPath(); ctx.arc(CX,CY,R,0,6.2832); ctx.fill(); ctx.globalAlpha=1;
      ctx.strokeStyle= mode==='circ'?css('--ember','#F2892E'):css('--subject-deep','#0B7E86'); ctx.lineWidth= mode==='circ'?5:2.4; ctx.beginPath(); ctx.arc(CX,CY,R,0,6.2832); ctx.stroke();
      // نصف القطر
      ctx.strokeStyle=css('--brand','#4B45C6'); ctx.lineWidth=2.4; ctx.beginPath(); ctx.moveTo(CX,CY); ctx.lineTo(CX+R,CY); ctx.stroke();
      ctx.fillStyle=css('--brand','#4B45C6'); ctx.beginPath(); ctx.arc(CX,CY,3,0,6.2832); ctx.fill();
      drawNum(CX+R/2, CY-11, 'نق='+toAr(r), css('--brand','#4B45C6'));
    }
    function refresh(){
      var r=+rIn.value, circ=2*Math.PI*r, area=Math.PI*r*r;
      q('.js-rv').textContent=toAr(r); q('.js-diam').textContent=toAr(2*r);
      q('.js-circ').textContent=arNum(circ)+' و';
      q('.js-area').textContent=arNum(area)+' و²'; elArea.style.color=css('--subject-deep','#0B7E86');
      q('.js-formula').textContent = mode==='area'
        ? 'π × '+toAr(r)+'² = '+arNum(area)+' و²'
        : '٢ × π × '+toAr(r)+' = '+arNum(circ)+' و';
      qa('.js-m').forEach(function(b){ b.setAttribute('aria-pressed', b.getAttribute('data-m')===mode?'true':'false'); });
      elIc.style.background=css('--subject-deep','#0B7E86'); elIc.innerHTML=ICN;
      elTit.textContent = mode==='area'?'مساحة الدائرة':'محيط الدائرة';
      elX.innerHTML = mode==='area'
        ? '<b>مساحةُ الدائرة = π × نصف القطر²</b>. المربّعاتُ داخل الدائرة تقرّب عددَ وحدات المساحة. كبّرْ نصفَ القطر فتزداد المساحةُ بمربّعه (تضاعفُ نق يُربّع المساحةَ ٤ مرّات).'
        : '<b>محيطُ الدائرة = ٢ × π × نصف القطر = π × القطر</b> (الحدُّ البرتقاليّ). النسبةُ بين المحيط والقطر ثابتةٌ دائمًا وتساوي <b>π ≈ ٣٫١٤</b> لأيّ دائرة.';
      draw();
    }
    qa('.js-m').forEach(function(b){ b.addEventListener('click', function(){ mode=b.getAttribute('data-m'); refresh(); }); });
    rIn.addEventListener('input', refresh);
    q('.js-reset').onclick=function(){ mode='area'; rIn.value=4; refresh(); };
    ['.js-rv','.js-circ','.js-diam','.js-area','.js-formula'].forEach(function(s){ var e=q(s); e.style.direction='ltr'; e.style.unicodeBidi='isolate'; });
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
