/* ============================================================
   محاكاة تفاعلية — بلاط الجبر (نموذج المساحة لضرب ذاتَي حدّين)
   (س + a)(س + b) = مساحةُ مستطيلٍ بعداه (س+a) و(س+b)، فتنقسم إلى
   بلاطة س²، و(a+b) بلاطاتِ س، و(a×b) بلاطاتِ الوحدة.
   الاستعمال من المحرّك:  window.SIMS['algetiles'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['algetiles'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="12" height="12" rx="1"/><rect x="15" y="3" width="6" height="12" rx="1"/><rect x="3" y="15" width="12" height="6" rx="1"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="نموذج مساحة لضرب ذاتَي حدّين">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="مستطيل مقسَّم إلى بلاطة س² وبلاطات س وبلاطات وحدة يمثّل ناتج الضرب"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">الناتج:</span><span class="wq-val js-out" style="font-size:13px">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>a في (س + a)</span><b class="js-av">٢</b></div><input type="range" class="wq-range cool js-a" min="1" max="5" value="2" step="1"></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>b في (س + b)</span><b class="js-bv">٣</b></div><input type="range" class="wq-range warm js-b" min="1" max="5" value="3" step="1"></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">الحدّ الأوسط (a+b)س</div><div class="wq-v js-mid">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">الحدّ الأخير a×b</div><div class="wq-v js-last">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">ضرب كثيرات الحدود</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, XPX=60, UPX=17;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var aIn=q('.js-a'), bIn=q('.js-b'), elOut=q('.js-out'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    // نصٌّ رياضيّ LTR (يطابق عرض المنصّة .mx) بخطٍّ يدعم العربية والأرقام
    function m(x,y,str,col,f){ ctx.fillStyle=col; ctx.save(); ctx.font=f||'800 12px "IBM Plex Sans Arabic",sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='ltr'; ctx.fillText(str,x,y); ctx.restore(); }
    function ar(x,y,str,col,f){ ctx.fillStyle=col; ctx.save(); ctx.font=f||'700 10px "IBM Plex Sans Arabic",sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='rtl'; ctx.fillText(str,x,y); ctx.restore(); }

    function draw(){
      var a=+aIn.value, b=+bIn.value;
      ctx.clearRect(0,0,W,H);
      var totalW=XPX+a*UPX, totalH=XPX+b*UPX, ox=Math.round(150-totalW/2)+8, oy=Math.round(110-totalH/2)+6;
      var BL=css('--s-math','#3B6FE0'), BLd=css('--s-math-deep','#2551B8'), BLs=css('--s-math-soft','#E9F0FD');
      var OR=css('--ember','#F2892E'), ORd=css('--ember-deep','#E4681B'), ORs=css('--ember-soft','#FDECD9');
      var GR=css('--s-ar','#2E9E6B'), GRd=css('--s-ar-deep','#1F7D52'), GRs=css('--s-ar-soft','#E8F5EE');
      // س² (أعلى-يسار)
      ctx.fillStyle=BLs; ctx.fillRect(ox,oy,XPX,XPX); ctx.strokeStyle=BLd; ctx.lineWidth=2; ctx.strokeRect(ox,oy,XPX,XPX);
      m(ox+XPX/2, oy+XPX/2, 'س²', BLd, '800 18px "IBM Plex Sans Arabic",sans-serif');
      // a·س (يمين س²)
      ctx.fillStyle=ORs; ctx.fillRect(ox+XPX,oy,a*UPX,XPX); ctx.strokeStyle=ORd; ctx.lineWidth=1;
      for(var i=0;i<a;i++) ctx.strokeRect(ox+XPX+i*UPX,oy,UPX,XPX);
      m(ox+XPX+a*UPX/2, oy+XPX/2, toAr(a)+'س', ORd, '800 13px "IBM Plex Sans Arabic",sans-serif');
      // b·س (أسفل س²)
      ctx.fillStyle=css('--gold','#F4B740'); ctx.globalAlpha=0.25; ctx.fillRect(ox,oy+XPX,XPX,b*UPX); ctx.globalAlpha=1;
      ctx.strokeStyle='#C9962B'; ctx.lineWidth=1; for(var j=0;j<b;j++) ctx.strokeRect(ox,oy+XPX+j*UPX,XPX,UPX);
      m(ox+XPX/2, oy+XPX+b*UPX/2, toAr(b)+'س', '#9A7420', '800 13px "IBM Plex Sans Arabic",sans-serif');
      // a·b وحدات (أسفل-يمين)
      ctx.fillStyle=GRs; ctx.fillRect(ox+XPX,oy+XPX,a*UPX,b*UPX); ctx.strokeStyle=GRd; ctx.lineWidth=1;
      for(var ii=0;ii<a;ii++) for(var jj=0;jj<b;jj++) ctx.strokeRect(ox+XPX+ii*UPX,oy+XPX+jj*UPX,UPX,UPX);
      m(ox+XPX+a*UPX/2, oy+XPX+b*UPX/2, toAr(a*b), GRd, '800 12px "IBM Plex Sans Arabic",sans-serif');
      // أبعاد: العرض (س + a) أعلى، الطول (س + b) يسار
      m(ox+totalW/2, oy-12, '(س + '+toAr(a)+')', BLd, '800 12px "IBM Plex Sans Arabic",sans-serif');
      ctx.save(); ctx.translate(ox-14, oy+totalH/2); ctx.rotate(-Math.PI/2);
      m(0,0,'(س + '+toAr(b)+')', '#9A7420', '800 12px "IBM Plex Sans Arabic",sans-serif'); ctx.restore();
      // الناتج أسفل
      m(150, H-18, 'س² + '+toAr(a+b)+'س + '+toAr(a*b), css('--ink','#1C2143'), '900 15px "IBM Plex Sans Arabic",sans-serif');
    }
    function refresh(){
      var a=+aIn.value, b=+bIn.value;
      q('.js-av').textContent=toAr(a); q('.js-bv').textContent=toAr(b);
      q('.js-mid').textContent=toAr(a+b)+'س';
      q('.js-last').textContent=toAr(a*b);
      elOut.textContent='س² + '+toAr(a+b)+'س + '+toAr(a*b); elOut.style.color=css('--ink','#1C2143'); elOut.style.direction='ltr'; elOut.style.unicodeBidi='isolate';
      elIc.style.background=css('--brand-deep','#3833A0'); elIc.innerHTML=ICN;
      elTit.textContent='ضرب ذاتَي الحدّين';
      elX.innerHTML='مساحةُ مستطيلٍ بعداه <b>(س + '+toAr(a)+')</b> و<b>(س + '+toAr(b)+')</b> تنقسم إلى: بلاطةِ <b>س²</b>، و<b>'+toAr(a+b)+'</b> بلاطاتِ <b>س</b> (المجموع '+toAr(a)+'+'+toAr(b)+')، و<b>'+toAr(a*b)+'</b> بلاطةَ وحدة (الحاصل '+toAr(a)+'×'+toAr(b)+'). فالناتج: <b>س² + '+toAr(a+b)+'س + '+toAr(a*b)+'</b>. (الأوسط = مجموعُ العددين، والأخير = حاصلُ ضربهما.)';
      draw();
    }
    aIn.addEventListener('input', refresh);
    bIn.addEventListener('input', refresh);
    q('.js-reset').onclick=function(){ aIn.value=2; bIn.value=3; refresh(); };
    ['.js-mid','.js-last'].forEach(function(s){ q(s).style.direction='ltr'; q(s).style.unicodeBidi='isolate'; });
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
