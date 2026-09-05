/* ============================================================
   محاكاة تفاعلية — النقل النشط بالبروتينات الناقلة
   يدفع البروتينُ الناقلُ الجزيءَ عبر الغشاء عكسَ فرق التركيز (من الأقلّ
   إلى الأعلى) بتغيّر هيئته مستهلكًا طاقةَ ATP. تنقّلْ بين الأطوار.
   الاستعمال من المحرّك:  window.SIMS['pump'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['pump'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v16"/><path d="M8 8l4-4 4 4"/><circle cx="12" cy="19" r="1.6"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  var STEPS=[
    'يقترب الجزيءُ من البروتين الناقل من الجهة الأقلّ تركيزًا.',
    'يرتبط الجزيءُ بالبروتين، ويصل جزيءُ الطاقة ATP.',
    'يتحلّل ATP إلى ADP، فتتغيّر هيئةُ البروتين ويُنقَل الجزيءُ عبر الغشاء.',
    'يُطلَق الجزيءُ في الجهة الأعلى تركيزًا — عكسَ فرق التركيز، بفضل الطاقة.'
  ];

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="بروتين ناقل يضخّ جزيئًا عبر الغشاء">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="أطوار النقل النشط عبر بروتين ناقل"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">الطور:</span><span class="wq-val js-step">١ / ٤</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>طور الضخّ</span><b class="js-idx">١ / ٤</b></div><input type="range" class="wq-range warm js-p" min="0" max="3" value="0" step="1"></div>'+
          '<div class="wq-quick"><button type="button" class="wq-qbtn js-prev">◀ السابق</button><button type="button" class="wq-qbtn js-next">التالي ▶</button></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">الاتّجاه</div><div class="wq-v js-dir" style="font-size:13px">عكس التركيز</div></div>'+
          '<div class="wq-read"><div class="wq-k">الطاقة</div><div class="wq-v js-en" style="font-size:14px">ATP</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">النقل النشط</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, MX=150, MY=118;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var qa=function(s){ return Array.prototype.slice.call(container.querySelectorAll(s)); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var pIn=q('.js-p'), elStep=q('.js-step'), elIc=q('.js-ic'), elX=q('.js-etext');
    var dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function drawAr(x,y,str,col,f){ ctx.fillStyle=col; ctx.save(); ctx.font=f||'700 10px "IBM Plex Sans Arabic",sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='rtl'; ctx.fillText(str,x,y); ctx.restore(); }
    function mol(x,y){ ctx.fillStyle=css('--ember','#F2892E'); ctx.beginPath(); ctx.arc(x,y,9,0,6.2832); ctx.fill(); ctx.strokeStyle=css('--ember-deep','#E4681B'); ctx.lineWidth=1.5; ctx.stroke();
      ctx.fillStyle='rgba(255,255,255,.5)'; ctx.beginPath(); ctx.arc(x-2.6,y-2.8,2.4,0,6.2832); ctx.fill(); }

    function draw(){
      var p=+pIn.value; ctx.clearRect(0,0,W,H);
      // الحجرتان: يسار أقلّ تركيزًا، يمين أعلى
      ctx.fillStyle=css('--surface-2','#FBFBFE'); ctx.fillRect(8,20,W-16,200);
      ctx.fillStyle=css('--s-sci-soft','#E2F5F5'); ctx.fillRect(MX+8,20,W-MX-16,200);
      // جزيئات موجودة (اليمين أكثر تركيزًا)
      ctx.globalAlpha=.9;
      [[210,54],[248,66],[224,150],[262,120],[200,186],[250,176]].forEach(function(d){ mol(d[0],d[1]); });
      [[40,60],[70,180]].forEach(function(d){ mol(d[0],d[1]); });
      ctx.globalAlpha=1;
      // الغشاء (طبقتان من الفوسفوليبيد)
      for(var s=0;s<2;s++){ var mx=MX-9+s*18;
        for(var i=0;i<9;i++){ var yy=26+i*22; ctx.fillStyle=css('--gold','#F4B740'); ctx.beginPath(); ctx.arc(mx,yy,4.5,0,6.2832); ctx.fill();
          ctx.strokeStyle='rgba(180,140,40,.55)'; ctx.lineWidth=1.4; ctx.beginPath(); ctx.moveTo(mx,yy+4); ctx.lineTo(mx+(s?6:-6),yy+12); ctx.stroke(); } }
      // البروتين الناقل (يتغيّر جيبُه حسب الطور)
      var openRight=(p>=2);
      ctx.fillStyle=css('--s-en','#7A5BE8'); ctx.beginPath(); ctx.roundRect(MX-20,58,40,120,14); ctx.fill();
      // الجيب (فجوة نصف دائرية على الجهة المفتوحة)
      ctx.fillStyle=css('--surface','#fff'); ctx.beginPath();
      if(openRight) ctx.arc(MX+20,MY,15,Math.PI*0.5,Math.PI*1.5,true); else ctx.arc(MX-20,MY,15,Math.PI*1.5,Math.PI*0.5,true);
      ctx.fill();
      // الجزيء المنقول حسب الطور
      var mxpos=[108,MX-16,MX+2,192][p], myp=MY;
      mol(mxpos,myp);
      // ATP / ADP
      if(p===1){ drawAr(MX,44,'ATP',css('--gold','#F4B740'),'800 12px Poppins,sans-serif');
        ctx.fillStyle=css('--gold','#F4B740'); ctx.beginPath(); ctx.arc(MX,52,5,0,6.2832); ctx.fill(); }
      if(p>=2){ drawAr(MX-22,44,'ADP',css('--muted','#7C82A8'),'800 11px Poppins,sans-serif'); drawAr(MX+18,44,'+ P',css('--muted','#7C82A8'),'800 11px Poppins,sans-serif');
        if(p===2){ ctx.strokeStyle=css('--gold','#F4B740'); ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(MX-4,54); ctx.lineTo(MX+3,60); ctx.lineTo(MX-3,64); ctx.lineTo(MX+4,70); ctx.stroke(); } }
      // تسميات الجهتين
      drawAr(72,208,'أقلّ تركيزًا',css('--ink-soft','#4A5080'),'700 10px "IBM Plex Sans Arabic",sans-serif');
      drawAr(228,208,'أعلى تركيزًا',css('--subject-deep','#0B7E86'),'700 10px "IBM Plex Sans Arabic",sans-serif');
      // سهم الاتّجاه
      ctx.strokeStyle=css('--ember-deep','#E4681B'); ctx.lineWidth=2; ctx.setLineDash([4,3]); ctx.beginPath(); ctx.moveTo(96,30); ctx.lineTo(204,30); ctx.stroke(); ctx.setLineDash([]);
      ctx.fillStyle=css('--ember-deep','#E4681B'); ctx.beginPath(); ctx.moveTo(208,30); ctx.lineTo(200,26); ctx.lineTo(200,34); ctx.fill();
    }
    function refresh(){
      var p=+pIn.value;
      q('.js-idx').textContent=toAr(p+1)+' / ٤'; elStep.textContent=toAr(p+1)+' / ٤';
      q('.js-en').textContent = (p>=1)?(p>=2?'ATP ← ADP':'ATP'):'—';
      qa('.js-prev,.js-next');
      elIc.style.background=css('--s-en-deep','#5B3FC4'); elIc.innerHTML=ICN;
      elX.innerHTML='<b>الطور '+toAr(p+1)+':</b> '+STEPS[p]+'<br>في <b>النقل النشط</b> يُنقَل الجزيءُ <b>عكسَ</b> فرق التركيز (من الأقلّ إلى الأعلى) عبر بروتينٍ ناقلٍ يغيّر هيئتَه، وهذا يستهلك <b>طاقة (ATP)</b> — بخلاف النقل السلبيّ الذي يسير مع فرق التركيز بلا طاقة.';
      draw();
    }
    pIn.addEventListener('input', refresh);
    q('.js-prev').onclick=function(){ pIn.value=Math.max(0,+pIn.value-1); refresh(); };
    q('.js-next').onclick=function(){ pIn.value=Math.min(3,+pIn.value+1); refresh(); };
    q('.js-reset').onclick=function(){ pIn.value=0; refresh(); };
    q('.js-idx').style.direction='ltr'; q('.js-idx').style.unicodeBidi='isolate';
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
