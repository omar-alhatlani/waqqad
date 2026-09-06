/* ============================================================
   محاكاة تفاعلية — الموجات: خصائصها
   الموجةُ تنقل الطاقةَ لا المادة. مستعرضةٌ (اهتزاز عموديّ) أو طولية
   (اهتزاز موازٍ). التردّدُ والطولُ الموجيّ متعاكسان عند ثبات السرعة.
   الاستعمال من المحرّك:  window.SIMS['waves'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['waves'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M2 12c2-6 4-6 6 0s4 6 6 0 4-6 6 0 2 0 2 0"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="رسم موجة بخصائصها">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="موجة مستعرضة أو طولية مع طولها الموجي وسعتها"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">العلاقة:</span><span class="wq-val js-rel" style="font-size:14px">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-quick"><button type="button" class="wq-qbtn js-mode" data-m="trans" aria-pressed="true">مستعرضة</button><button type="button" class="wq-qbtn js-mode" data-m="long">طولية</button></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>التردّد</span><b class="js-fv">٣</b></div><input type="range" class="wq-range warm js-f" min="1" max="6" value="3" step="1"></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>السعة</span><b class="js-av">٣</b></div><input type="range" class="wq-range cool js-a" min="1" max="5" value="3" step="1"></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">التردّد</div><div class="wq-v js-freq">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">الطول الموجيّ</div><div class="wq-v js-wl">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">الموجات</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, X0=26, X1=284, CY=112;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var qa=function(s){ return Array.prototype.slice.call(container.querySelectorAll(s)); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var fIn=q('.js-f'), aIn=q('.js-a'), elRel=q('.js-rel'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var mode='trans', dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function drawAr(x,y,str,col){ ctx.fillStyle=col; ctx.save(); ctx.font='700 10px "IBM Plex Sans Arabic",sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='rtl'; ctx.fillText(str,x,y); ctx.restore(); }

    function draw(){
      var f=+fIn.value, a=+aIn.value, amp=a*11, span=X1-X0, wl=span/f;
      ctx.clearRect(0,0,W,H);
      if(mode==='trans'){
        // محور
        ctx.strokeStyle=css('--line-strong','#D6D9EC'); ctx.setLineDash([3,3]); ctx.beginPath(); ctx.moveTo(X0,CY); ctx.lineTo(X1,CY); ctx.stroke(); ctx.setLineDash([]);
        ctx.strokeStyle=css('--subject','#0FA3AA'); ctx.lineWidth=3; ctx.lineCap='round'; ctx.beginPath();
        for(var x=X0;x<=X1;x++){ var y=CY-amp*Math.sin((x-X0)/wl*2*Math.PI); if(x===X0) ctx.moveTo(x,y); else ctx.lineTo(x,y); } ctx.stroke();
        // الطول الموجي (بين قمّتين): القمّة الأولى عند ربع الطول
        var c1=X0+wl*0.25, c2=X0+wl*1.25;
        if(c2<=X1){ ctx.strokeStyle=css('--ember','#F2892E'); ctx.lineWidth=1.6; ctx.beginPath(); ctx.moveTo(c1,CY-amp-10); ctx.lineTo(c2,CY-amp-10); ctx.stroke();
          [c1,c2].forEach(function(cx){ ctx.beginPath(); ctx.moveTo(cx,CY-amp-14); ctx.lineTo(cx,CY-amp-6); ctx.stroke(); });
          drawAr((c1+c2)/2, CY-amp-19, 'طول موجيّ', css('--ember-deep','#E4681B')); }
        // السعة
        ctx.strokeStyle=css('--brand','#4B45C6'); ctx.lineWidth=1.6; var ax=X0+wl*0.25; ctx.beginPath(); ctx.moveTo(ax,CY); ctx.lineTo(ax,CY-amp); ctx.stroke();
        drawAr(ax+24, CY-amp/2, 'سعة', css('--brand','#4B45C6'));
      } else {
        // طولية: نقاط بكثافة متغيّرة (تضاغط وتخلخل)
        for(var i=0;i<70;i++){ var base=X0+i/69*span, off=amp*0.9*Math.sin((base-X0)/wl*2*Math.PI), px=base+off;
          ctx.fillStyle=css('--subject','#0FA3AA'); ctx.beginPath(); ctx.arc(px,CY,3.4,0,6.2832); ctx.fill(); }
        drawAr(X0+wl*0.5, CY-40, 'تضاغط', css('--ember-deep','#E4681B')); drawAr(X0+wl, CY+40, 'تخلخل', css('--muted','#7C82A8'));
      }
      drawAr(W/2, H-16, 'اتجاه انتقال الطاقة ←', css('--muted','#7C82A8'));
    }
    function refresh(){
      var f=+fIn.value, a=+aIn.value;
      q('.js-fv').textContent=toAr(f); q('.js-av').textContent=toAr(a);
      q('.js-freq').textContent=toAr(f)+' ×'; q('.js-wl').textContent=toAr(Math.round(60/f))+' نسبيّ';
      elRel.textContent='تردّد ↑ ← طول ↓'; elRel.style.color=css('--subject-deep','#0B7E86');
      qa('.js-mode').forEach(function(b){ b.setAttribute('aria-pressed', b.getAttribute('data-m')===mode?'true':'false'); });
      elIc.style.background=css('--subject-deep','#0B7E86'); elIc.innerHTML=ICN;
      elTit.textContent = mode==='trans'?'موجة مستعرضة':'موجة طولية';
      elX.innerHTML = (mode==='trans'
        ? 'في <b>المستعرضة</b> يهتزّ الوسطُ <b>عموديًّا</b> على اتجاه الانتشار (كموجة الحبل). '
        : 'في <b>الطولية</b> يهتزّ الوسطُ <b>موازيًا</b> لاتجاه الانتشار مكوّنًا <b>تضاغطاتٍ وتخلخلات</b> (كموجة الصوت). ')
        + 'الموجةُ تنقل <b>الطاقة</b> لا المادة. و<b>الطولُ الموجيّ</b> يقصُر كلّما زاد <b>التردّد</b> (عند ثبات السرعة)، و<b>السعةُ</b> ترتبط بطاقة الموجة.';
      draw();
    }
    qa('.js-mode').forEach(function(b){ b.addEventListener('click', function(){ mode=b.getAttribute('data-m'); refresh(); }); });
    [fIn,aIn].forEach(function(el){ el.addEventListener('input', refresh); });
    q('.js-reset').onclick=function(){ mode='trans'; fIn.value=3; aIn.value=3; refresh(); };
    ['.js-fv','.js-av','.js-freq','.js-wl'].forEach(function(s){ var e=q(s); e.style.direction='ltr'; e.style.unicodeBidi='isolate'; });
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
