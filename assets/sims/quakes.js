/* ============================================================
   محاكاة تفاعلية — الموجات الزلزالية ومقياس رختر
   يسجّل السيزموجرافُ ثلاثَ موجات: الأولية P (أسرع)، ثم الثانوية S،
   ثم السطحية (أبطؤها وأشدّها). ومقياسُ رختر لوغاريتميّ: كلُّ درجةٍ
   تعني سعةً أكبر ١٠ مرّات. الاستعمال:  window.SIMS['quakes'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['quakes'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h4l2-6 3 14 3-11 2 5 2-2h4"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  function grp(n){ return toAr(String(n).replace(/\B(?=(\d{3})+(?!\d))/g,'٬')); }
  var DESC=[['طفيف','var(--s-ar-deep)'],['خفيف','var(--s-ar-deep)'],['متوسط','var(--gold)'],['قويّ','var(--ember-deep)'],['كبير — مدمّر','var(--ember-deep)'],['هائل','var(--brand)']];

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="تسجيل سيزموجراف لموجات زلزالية">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="تخطيط سيزموجراف يبيّن الموجات P وS والسطحية"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">رختر:</span><span class="wq-val js-mag">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>القوّة على مقياس رختر</span><b class="js-mv">٥</b></div><input type="range" class="wq-range volt js-m" min="3" max="8" value="5" step="1"></div>'+
          '<div class="wq-eq"><span class="wq-eqt">القاعدة</span><div class="wq-eqv"><span class="js-rule">كلُّ درجةٍ = سعةٌ ×١٠ ، طاقةٌ ×٣٢ تقريبًا</span></div></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">السعة النسبية</div><div class="wq-v js-amp">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">الطاقة النسبية</div><div class="wq-v js-en" style="font-size:12px">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">الموجات الزلزالية</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, CY=118;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var mIn=q('.js-m'), elMag=q('.js-mag'), elIc=q('.js-ic'), elX=q('.js-etext');
    var dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function drawNum(x,y,str,col){ ctx.fillStyle=col; ctx.save(); ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='ltr'; ctx.fillText(str,x,y); ctx.restore(); }
    function drawAr(x,y,str,col){ ctx.fillStyle=col; ctx.save(); ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='rtl'; ctx.fillText(str,x,y); ctx.restore(); }

    function draw(){
      var mag=+mIn.value, A=7+(mag-3)*6.4;  // سعةُ العرض تكبر مع القوّة
      ctx.clearRect(0,0,W,H);
      // إطار وخطّ الأساس
      ctx.strokeStyle=css('--line-strong','#D6D9EC'); ctx.lineWidth=1; ctx.strokeRect(16,40,W-32,150);
      ctx.strokeStyle=css('--line','#E7E9F5'); ctx.setLineDash([3,3]); ctx.beginPath(); ctx.moveTo(20,CY); ctx.lineTo(W-16,CY); ctx.stroke(); ctx.setLineDash([]);
      // مناطق الموجات: P (٤٠..١١٠) هدوء (..١٣٠) S (..٢٠٠) سطحية (..٢٨٠)
      function seg(x0,x1,amp,freq,col){ ctx.strokeStyle=col; ctx.lineWidth=1.8; ctx.beginPath();
        for(var x=x0;x<=x1;x++){ var env=Math.min(1,(x-x0)/8)*Math.min(1,(x1-x)/8+0.3);
          var y=CY - amp*env*Math.sin((x-x0)*freq); if(x===x0) ctx.moveTo(x,y); else ctx.lineTo(x,y); } ctx.stroke(); }
      ctx.strokeStyle=css('--ink-soft','#4A5080'); ctx.lineWidth=1.4;
      ctx.beginPath(); ctx.moveTo(20,CY); ctx.lineTo(46,CY); ctx.stroke(); // هدوء أوّليّ
      seg(46,112, A*0.35, 0.9, css('--s-math','#3B6FE0'));   // P
      ctx.beginPath(); ctx.moveTo(112,CY); ctx.lineTo(128,CY); ctx.stroke();
      seg(128,200, A*0.7, 0.55, css('--gold','#F4B740'));     // S
      seg(200,280, A*1.0, 0.32, css('--ember','#F2892E'));    // سطحية
      // تسميات الموجات
      ctx.font='800 11px Cairo,sans-serif';
      drawNum(79, 52, 'P', css('--s-math-deep','#2551B8'));
      drawNum(164, 52, 'S', css('--gold','#F4B740'));
      ctx.font='700 10px "IBM Plex Sans Arabic",sans-serif';
      drawAr(240, 52, 'سطحية', css('--ember-deep','#E4681B'));
      ctx.font='600 9px "IBM Plex Sans Arabic",sans-serif';
      drawAr(W/2, 182, 'الزمن ←', css('--muted','#7C82A8'));
    }
    function refresh(){
      var mag=+mIn.value, d=DESC[mag-3];
      var amp=Math.pow(10,mag-3), en=Math.round(Math.pow(31.6,mag-3));
      q('.js-mv').textContent=toAr(mag);
      elMag.textContent='رختر '+toAr(mag)+' — '+d[0];
      elMag.style.color = d[1].indexOf('var(')===0?css(d[1].slice(4,-1),'#E4681B'):d[1];
      q('.js-amp').textContent='×'+grp(amp);
      q('.js-en').textContent='×'+grp(en)+' تقريبًا';
      elIc.style.background=css('--ember-deep','#E4681B'); elIc.innerHTML=ICN;
      elX.innerHTML='يطلق الزلزالُ موجاتٍ يسجّلها السيزموجراف: <b>الأولية P</b> (أسرعُ، تصل أوّلًا)، ثم <b>الثانوية S</b> (أبطأ)، ثم <b>السطحية</b> (أبطؤها وأكبرُها سعةً، وهي الأشدُّ تدميرًا). ومقياسُ <b>رختر لوغاريتميّ</b>: كلُّ درجةٍ تعني سعةً أكبرَ <b>١٠ مرّات</b> وطاقةً أكبرَ نحو <b>٣٢ مرّة</b>.';
      draw();
    }
    mIn.addEventListener('input', refresh);
    q('.js-reset').onclick=function(){ mIn.value=5; refresh(); };
    ['.js-mv','.js-amp','.js-en'].forEach(function(s){ var e=q(s); e.style.direction='ltr'; e.style.unicodeBidi='isolate'; });
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
