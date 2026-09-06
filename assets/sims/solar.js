/* ============================================================
   محاكاة تفاعلية — الأرض والنظام الشمسي
   ثمانيةُ كواكبَ تدور حول الشمس: الداخليةُ الأربعُ صخريّة، والخارجيةُ
   الأربعُ غازيّة، وبينها حزامُ الكويكبات (بين المريخ والمشتري).
   الاستعمال من المحرّك:  window.SIMS['solar'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['solar'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="3"/><ellipse cx="12" cy="12" rx="10" ry="4.5"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }

  // 1..8 من الأقرب للشمس. صخريّ=داخليّ، غازيّ=خارجيّ.
  var P=[
    {n:'عطارد', t:'r', c:'#9A8F86', r:5,  fact:'أقربُ الكواكب للشمس وأصغرُها، صخريّ بلا غلافٍ جويٍّ يُذكر.'},
    {n:'الزهرة', t:'r', c:'#D8B87A', r:7,  fact:'ألمعُ الكواكب، صخريّ حارٌّ جدًّا لغلافه الجويِّ الكثيف.'},
    {n:'الأرض', t:'r', c:'#3A7BD5', r:7,  fact:'كوكبُنا: صخريّ فيه ماءٌ وبحارٌ وغلافٌ جويٌّ يدعم الحياة.'},
    {n:'المريخ', t:'r', c:'#C1502E', r:6,  fact:'الكوكبُ الأحمر (لأكاسيد الحديد)، صخريّ داخليّ.'},
    {n:'المشتري', t:'g', c:'#C89A6A', r:13, fact:'أكبرُ الكواكب، غازيٌّ عملاقٌ ذو بقعةٍ حمراءَ عظيمة.'},
    {n:'زحل', t:'g', c:'#D9B96E', r:11, fact:'غازيٌّ عملاقٌ مشهورٌ بحلقاته الجليدية والصخرية.'},
    {n:'أورانوس', t:'g', c:'#7FC6C9', r:9,  fact:'غازيٌّ (جليديّ) يميل محورُه ميلًا شديدًا.'},
    {n:'نبتون', t:'g', c:'#3E63C0', r:9,  fact:'أبعدُ الكواكب، غازيٌّ (جليديّ) أزرقُ شديدُ البرودة.'}
  ];

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="ترتيب الكواكب حول الشمس">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="الشمس وثمانية كواكب مرتّبة، صخرية داخلية وغازية خارجية وبينها حزام الكويكبات"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">الكوكب:</span><span class="wq-val js-name" style="font-size:14px">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>اختر الكوكب (من الأقرب للشمس)</span><b class="js-iv">٣</b></div><input type="range" class="wq-range warm js-i" min="1" max="8" value="3" step="1"></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">النوع</div><div class="wq-v js-type" style="font-size:13px">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">الترتيب من الشمس</div><div class="wq-v js-order">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">النظام الشمسي</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, CY=118;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var iIn=q('.js-i'), elName=q('.js-name'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function drawAr(x,y,str,col,f){ ctx.fillStyle=col; ctx.save(); ctx.font=f||'700 10px "IBM Plex Sans Arabic",sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='rtl'; ctx.fillText(str,x,y); ctx.restore(); }

    // مواضع: الشمس ثم ٤ صخرية، فحزام، فـ٤ غازية. ٩ خانات.
    function slotX(planetIdx){ // planetIdx 0..7 ; الحزام خانة رقم 4
      var slot = planetIdx<4 ? planetIdx : planetIdx+1; // إزاحة لإفساح الحزام
      return 46 + slot*27;
    }
    var BELTX = 46 + 4*27;

    function draw(sel){
      ctx.clearRect(0,0,W,H);
      // الشمس
      var sx=20, sy=CY;
      var g=ctx.createRadialGradient(sx,sy,2,sx,sy,18); g.addColorStop(0,'#FFE7A0'); g.addColorStop(1,'#F4A522');
      ctx.fillStyle=g; ctx.beginPath(); ctx.arc(sx,sy,15,0,6.2832); ctx.fill();
      drawAr(sx, sy+26, 'الشمس', '#E4681B', '800 9px "IBM Plex Sans Arabic",sans-serif');
      // حزام الكويكبات
      ctx.fillStyle=css('--muted','#7C82A8');
      for(var b=0;b<14;b++){ var bx=BELTX-6+Math.random()*12, by=CY-22+Math.random()*44; ctx.beginPath(); ctx.arc(bx,by,1.1,0,6.2832); ctx.fill(); }
      drawAr(BELTX, CY+34, 'حزام الكويكبات', css('--muted','#7C82A8'), '600 8px "IBM Plex Sans Arabic",sans-serif');
      // خطُّ فاصلٌ بين الداخلية والخارجية
      ctx.strokeStyle=css('--line-strong','#D6D9EC'); ctx.setLineDash([3,3]); ctx.beginPath(); ctx.moveTo(BELTX,20); ctx.lineTo(BELTX,H-40); ctx.stroke(); ctx.setLineDash([]);
      drawAr(46+2*27, 24, 'داخلية صخرية', css('--s-math-deep','#2551B8'), '700 9px "IBM Plex Sans Arabic",sans-serif');
      drawAr(46+6.5*27, 24, 'خارجية غازية', css('--ember-deep','#E4681B'), '700 9px "IBM Plex Sans Arabic",sans-serif');
      // الكواكب
      P.forEach(function(p,i){
        var x=slotX(i);
        if(i===sel){ ctx.strokeStyle=css('--brand','#4B45C6'); ctx.lineWidth=2.5; ctx.beginPath(); ctx.arc(x,CY,p.r+5,0,6.2832); ctx.stroke(); }
        ctx.fillStyle=p.c; ctx.beginPath(); ctx.arc(x,CY,p.r,0,6.2832); ctx.fill();
        if(p.n==='زحل'){ ctx.strokeStyle='#C9A94E'; ctx.lineWidth=1.6; ctx.save(); ctx.translate(x,CY); ctx.scale(1,0.4); ctx.beginPath(); ctx.arc(0,0,p.r+4,0,6.2832); ctx.stroke(); ctx.restore(); }
        if(i===sel){ drawAr(x, CY-p.r-13, p.n, css('--ink','#1C2143'), '800 10px "IBM Plex Sans Arabic",sans-serif'); }
      });
    }
    function refresh(){
      var sel=(+iIn.value)-1; var p=P[sel];
      q('.js-iv').textContent=toAr(sel+1);
      elName.textContent=p.n; elName.style.color=css('--ink','#1C2143');
      q('.js-type').textContent = p.t==='r'?'صخريّ · داخليّ':'غازيّ · خارجيّ';
      q('.js-type').style.color = p.t==='r'?css('--s-math-deep','#2551B8'):css('--ember-deep','#E4681B');
      q('.js-order').textContent=toAr(sel+1)+' / ٨';
      elIc.style.background=css('--subject-deep','#0B7E86'); elIc.innerHTML=ICN;
      elTit.textContent=p.n;
      elX.innerHTML='<b>'+p.n+'</b> — '+p.fact+' والنظامُ الشمسيُّ ثمانيةُ كواكبَ تدور حول <b>الشمس</b>: الأربعةُ الداخليةُ <b>صخريّة</b> (عطارد، الزهرة، الأرض، المريخ)، والأربعةُ الخارجيةُ <b>غازيّة</b> (المشتري، زحل، أورانوس، نبتون)، وبينها <b>حزامُ الكويكبات</b>.';
      draw(sel);
    }
    iIn.addEventListener('input', refresh);
    q('.js-reset').onclick=function(){ iIn.value=3; refresh(); };
    q('.js-order').style.direction='ltr'; q('.js-order').style.unicodeBidi='isolate';
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
