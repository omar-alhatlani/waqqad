/* ============================================================
   محاكاة تفاعلية — التغيّر الطرديّ (ص = ك س)
   إذا كانت النسبةُ ص÷س ثابتةً فالتغيّرُ طرديّ، والنسبةُ الثابتةُ هي
   ثابتُ التغيّر ك (= الميل). وتمثيلُه خطٌّ مستقيمٌ يمرّ بنقطة الأصل.
   الاستعمال من المحرّك:  window.SIMS['direct'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['direct'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 20L20 4"/><path d="M4 20h16"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="خط ص=كس يمرّ بالأصل وخط أعداد مزدوج">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="تمثيل ص=كس بخطٍّ يمرّ بالأصل، وخطُّ أعداد مزدوج يربط س بـ ص"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">الصيغة:</span><span class="wq-val js-eq">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>ثابت التغيّر ك</span><b class="js-kv">٢</b></div><input type="range" class="wq-range warm js-k" min="1" max="5" value="2" step="1"></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">النسبة ص ÷ س</div><div class="wq-v js-ratio">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">يمرّ بـ</div><div class="wq-v js-origin" style="font-size:12px">نقطة الأصل</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">التغيّر الطرديّ</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240;
  // منطقة الرسم البياني
  var GX=46, GY0=156, GX1=286, GYT=16; // الأصل (GX,GY0) والأعلى GYT
  var XMAX=5, YMAX=15;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var kIn=q('.js-k'), elEq=q('.js-eq'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function drawAr(x,y,str,col,f){ ctx.fillStyle=col; ctx.save(); ctx.font=f||'700 10px "IBM Plex Sans Arabic",sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='rtl'; ctx.fillText(str,x,y); ctx.restore(); }
    function drawNum(x,y,str,col,f){ ctx.fillStyle=col; ctx.save(); ctx.font=f||'700 9px Poppins,sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='ltr'; ctx.fillText(str,x,y); ctx.restore(); }
    function gx(x){ return GX + x/XMAX*(GX1-GX); }
    function gy(y){ return GY0 - y/YMAX*(GY0-GYT); }

    function draw(){
      var k=+kIn.value;
      ctx.clearRect(0,0,W,H);
      // شبكة
      ctx.strokeStyle=css('--line','#E7E9F5'); ctx.lineWidth=1;
      for(var xi=0;xi<=XMAX;xi++){ ctx.beginPath(); ctx.moveTo(gx(xi),GYT); ctx.lineTo(gx(xi),GY0); ctx.stroke(); }
      for(var yi=0;yi<=YMAX;yi+=3){ ctx.beginPath(); ctx.moveTo(GX,gy(yi)); ctx.lineTo(GX1,gy(yi)); ctx.stroke(); }
      // محاور
      ctx.strokeStyle=css('--ink-soft','#4A5080'); ctx.lineWidth=1.6;
      ctx.beginPath(); ctx.moveTo(GX,GYT); ctx.lineTo(GX,GY0); ctx.lineTo(GX1,GY0); ctx.stroke();
      drawAr(GX-10, GYT+6,'ص',css('--ink-soft','#4A5080'),'800 11px "IBM Plex Sans Arabic",sans-serif');
      drawAr(GX1-6, GY0+12,'س',css('--ink-soft','#4A5080'),'800 11px "IBM Plex Sans Arabic",sans-serif');
      for(var xt=1;xt<=XMAX;xt++) drawNum(gx(xt),GY0+11,toAr(xt),css('--muted','#7C82A8'));
      // خطُّ ص = كس (من الأصل)
      var xend=Math.min(XMAX, YMAX/k);
      ctx.strokeStyle=css('--brand','#4B45C6'); ctx.lineWidth=3; ctx.lineCap='round';
      ctx.beginPath(); ctx.moveTo(gx(0),gy(0)); ctx.lineTo(gx(xend),gy(k*xend)); ctx.stroke();
      // نقاطٌ عند س=١،٢،٣
      for(var s=1;s<=3;s++){ if(k*s<=YMAX){ var X=gx(s),Y=gy(k*s);
        ctx.fillStyle=css('--ember','#F2892E'); ctx.beginPath(); ctx.arc(X,Y,4,0,6.2832); ctx.fill(); } }
      // خطُّ الأعداد المزدوج (أسفل)
      var LY1=196, LY2=222, LX0=54, LX1=250;
      function lx(s){ return LX0 + s/5*(LX1-LX0); }
      ctx.strokeStyle=css('--s-math','#3B6FE0'); ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(LX0,LY1); ctx.lineTo(LX1,LY1); ctx.stroke();
      ctx.strokeStyle=css('--s-ar','#2E9E6B'); ctx.beginPath(); ctx.moveTo(LX0,LY2); ctx.lineTo(LX1,LY2); ctx.stroke();
      drawAr(LX1+16,LY1,'س',css('--s-math-deep','#2551B8'),'800 11px "IBM Plex Sans Arabic",sans-serif');
      drawAr(LX1+16,LY2,'ص',css('--s-ar-deep','#1F7D52'),'800 11px "IBM Plex Sans Arabic",sans-serif');
      for(var t=0;t<=5;t++){ var xx=lx(t);
        ctx.strokeStyle=css('--s-math','#3B6FE0'); ctx.beginPath(); ctx.moveTo(xx,LY1-4); ctx.lineTo(xx,LY1+4); ctx.stroke();
        ctx.strokeStyle=css('--s-ar','#2E9E6B'); ctx.beginPath(); ctx.moveTo(xx,LY2-4); ctx.lineTo(xx,LY2+4); ctx.stroke();
        drawNum(xx,LY1-11,toAr(t),css('--s-math-deep','#2551B8'));
        drawNum(xx,LY2+11,toAr(t*k),css('--s-ar-deep','#1F7D52'));
        if(t>0 && t<=3){ ctx.strokeStyle=css('--line-strong','#D6D9EC'); ctx.setLineDash([2,2]); ctx.beginPath(); ctx.moveTo(xx,LY1+4); ctx.lineTo(xx,LY2-4); ctx.stroke(); ctx.setLineDash([]); }
      }
    }
    function refresh(){
      var k=+kIn.value;
      q('.js-kv').textContent=toAr(k);
      elEq.textContent='ص = '+toAr(k)+' س'; elEq.style.color=css('--brand-deep','#3833A0'); elEq.style.direction='rtl';
      q('.js-ratio').textContent=toAr(k)+' (ثابتة)';
      elIc.style.background=css('--brand-deep','#3833A0'); elIc.innerHTML=ICN;
      elTit.textContent='التغيّر الطرديّ';
      elX.innerHTML='في التغيّرِ الطرديّ النسبةُ <b>ص ÷ س</b> ثابتةٌ وتساوي <b>ثابتَ التغيّر ك = '+toAr(k)+'</b>، فالصيغةُ <b>ص = '+toAr(k)+' س</b>. لاحظْ على خطِّ الأعداد المزدوج أنّ كلَّ خطوةٍ في <b>س</b> تقابلُها '+toAr(k)+' خطواتٍ في <b>ص</b>، وأنّ التمثيلَ البيانيَّ <b>خطٌّ مستقيمٌ يمرّ بنقطة الأصل</b>. وثابتُ التغيّرِ هو أيضًا <b>ميلُ الخطّ</b>.';
      draw();
    }
    kIn.addEventListener('input', refresh);
    q('.js-reset').onclick=function(){ kIn.value=2; refresh(); };
    q('.js-ratio').style.direction='ltr'; q('.js-ratio').style.unicodeBidi='isolate';
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
