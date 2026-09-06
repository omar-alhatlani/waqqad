/* ============================================================
   محاكاة تفاعلية — جهاز الدوران
   الشرايينُ تحملُ الدمَ من القلب، والأوردةُ تُعيدُه إليه. الدورةُ
   الصغرى (الرئوية) بين القلب والرئتين، والكبرى (الجسمية) بين القلب والجسم.
   الاستعمال من المحرّك:  window.SIMS['circulation'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['circulation'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  var RED='#D64550', BLUE='#3A6FD5';

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="القلب والرئتان والجسم ومسار الدم">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="مسار الدم في الدورة الرئوية الصغرى أو الجسمية الكبرى، بلونٍ أحمرَ للمؤكسَج وأزرقَ لغيره"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">الدورة:</span><span class="wq-val js-name" style="font-size:14px">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-quick"><button type="button" class="wq-qbtn js-mode" data-m="pul" aria-pressed="true">الصغرى (رئوية)</button><button type="button" class="wq-qbtn js-mode" data-m="sys">الكبرى (جسمية)</button></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>تدفّق الدم (نبض)</span><b class="js-pv">٠</b></div><input type="range" class="wq-range warm js-p" min="0" max="100" value="0" step="2"></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">الشرايين</div><div class="wq-v js-art" style="font-size:12px">من القلب</div></div>'+
          '<div class="wq-read"><div class="wq-k">الأوردة</div><div class="wq-v js-vein" style="font-size:12px">إلى القلب</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">جهاز الدوران</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, HX=150, HY=120;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var qa=function(s){ return Array.prototype.slice.call(container.querySelectorAll(s)); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var pIn=q('.js-p'), elName=q('.js-name'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var mode='pul', dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function drawAr(x,y,str,col,f){ ctx.fillStyle=col; ctx.save(); ctx.font=f||'700 10px "IBM Plex Sans Arabic",sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='rtl'; ctx.fillText(str,x,y); ctx.restore(); }

    // مسار الحلقة: ٣ أرجلٍ متساوية (خروجٌ ← عبورُ العضو ← عودة)
    function waypoints(){
      return mode==='pul'
        ? [[138,102],[138,58],[162,58],[162,102]]   // القلب ← الرئتان ← القلب (أعلى)
        : [[162,138],[162,196],[138,196],[138,138]]; // القلب ← الجسم ← القلب (أسفل)
    }
    function pathPt(t){ var wp=waypoints(); var seg=Math.min(2,Math.floor(t*3)); var lt=t*3-seg; var a=wp[seg], b=wp[seg+1]; return [a[0]+(b[0]-a[0])*lt, a[1]+(b[1]-a[1])*lt]; }

    function heart(){
      ctx.fillStyle='#C63B46'; ctx.strokeStyle='#8A2731'; ctx.lineWidth=2;
      ctx.beginPath();
      ctx.moveTo(HX,HY+18); ctx.bezierCurveTo(HX-22,HY+2,HX-18,HY-18,HX-6,HY-10); ctx.bezierCurveTo(HX-2,HY-7,HX,HY-4,HX,HY-2);
      ctx.bezierCurveTo(HX,HY-4,HX+2,HY-7,HX+6,HY-10); ctx.bezierCurveTo(HX+18,HY-18,HX+22,HY+2,HX,HY+18);
      ctx.closePath(); ctx.fill(); ctx.stroke();
      drawAr(HX,HY+3,'القلب','#fff','800 9px "IBM Plex Sans Arabic",sans-serif');
    }
    function lungs(active){ ctx.save(); ctx.globalAlpha=active?1:0.32;
      [[128,50],[172,50]].forEach(function(p){ ctx.fillStyle='#F2B8C4'; ctx.strokeStyle='#C97C8C'; ctx.lineWidth=2; ctx.beginPath(); ctx.ellipse(p[0],p[1],17,22,0,0,6.2832); ctx.fill(); ctx.stroke(); });
      ctx.restore(); if(active) drawAr(HX,18,'الرئتان (تبادلُ الغازات)','#C97C8C','700 9px "IBM Plex Sans Arabic",sans-serif'); }
    function body(active){ ctx.save(); ctx.globalAlpha=active?1:0.32;
      ctx.fillStyle='#D9C7A6'; ctx.strokeStyle='#A88C5F'; ctx.lineWidth=2; ctx.beginPath(); ctx.roundRect(112,196,76,26,7); ctx.fill(); ctx.stroke();
      ctx.restore(); if(active) drawAr(HX,209,'أعضاء الجسم','#7A6234','700 9px "IBM Plex Sans Arabic",sans-serif'); }
    function draw(){
      var ph=+pIn.value/100, pul=mode==='pul';
      ctx.clearRect(0,0,W,H);
      // كِلا العضوين ظاهران، والنشطُ منهما بلونٍ كامل
      lungs(pul); body(!pul);
      // الأوعية (رِجْلا الخروج والعودة) بلونيهما
      var wp=waypoints();
      // خروج (شريان من القلب)
      ctx.strokeStyle= pul?BLUE:RED; ctx.lineWidth=5; ctx.lineCap='round'; ctx.beginPath(); ctx.moveTo(wp[0][0],wp[0][1]); ctx.lineTo(wp[1][0],wp[1][1]); ctx.stroke();
      // عودة (وريد إلى القلب)
      ctx.strokeStyle= pul?RED:BLUE; ctx.beginPath(); ctx.moveTo(wp[2][0],wp[2][1]); ctx.lineTo(wp[3][0],wp[3][1]); ctx.stroke();
      heart();
      // كريات الدم تتحرّك على المسار
      for(var d=0;d<6;d++){ var t=(ph+d/6)%1; var pt=pathPt(t);
        var col = pul ? (t<0.5?BLUE:RED) : (t<0.5?RED:BLUE);
        ctx.fillStyle=col; ctx.beginPath(); ctx.arc(pt[0],pt[1],3.4,0,6.2832); ctx.fill(); }
      // تسميات الاتجاه
      drawAr(pul?120:180, pul?80:158, 'شريان', pul?BLUE:RED, '700 8px "IBM Plex Sans Arabic",sans-serif');
      drawAr(pul?180:120, pul?80:158, 'وريد', pul?RED:BLUE, '700 8px "IBM Plex Sans Arabic",sans-serif');
    }
    function refresh(){
      q('.js-pv').textContent=toAr(+pIn.value);
      qa('.js-mode').forEach(function(b){ b.setAttribute('aria-pressed', b.getAttribute('data-m')===mode?'true':'false'); });
      elName.textContent = mode==='pul'?'الرئوية (الصغرى)':'الجسمية (الكبرى)';
      elName.style.color=css('--brand-deep','#3833A0');
      elIc.style.background='#C63B46'; elIc.innerHTML=ICN;
      elTit.textContent = mode==='pul'?'الدورة الرئوية (الصغرى)':'الدورة الجسمية (الكبرى)';
      elX.innerHTML = mode==='pul'
        ? 'الدورةُ <b>الصغرى (الرئوية)</b>: يضخّ القلبُ الدمَ قليلَ الأكسجين (<span style="color:'+BLUE+'">أزرق</span>) إلى <b>الرئتين</b>، فيأخذ الأكسجينَ ويعود غنيًّا به (<span style="color:'+RED+'">أحمر</span>) إلى القلب. و<b>الشرايينُ</b> تحملُ الدمَ <b>من القلب</b>، و<b>الأوردةُ</b> تُعيدُه <b>إليه</b>.'
        : 'الدورةُ <b>الكبرى (الجسمية)</b> أكبرُ الدورات: يضخّ القلبُ الدمَ الغنيَّ بالأكسجين (<span style="color:'+RED+'">أحمر</span>) إلى <b>أعضاء الجسم</b>، فيسلّمها الأكسجينَ ويعود قليلَه (<span style="color:'+BLUE+'">أزرق</span>) إلى القلب. و<b>الشعيراتُ الدموية</b> يتمّ فيها تبادلُ المواد.';
      draw();
    }
    qa('.js-mode').forEach(function(b){ b.addEventListener('click', function(){ mode=b.getAttribute('data-m'); refresh(); }); });
    pIn.addEventListener('input', refresh);
    q('.js-reset').onclick=function(){ mode='pul'; pIn.value=0; refresh(); };
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
