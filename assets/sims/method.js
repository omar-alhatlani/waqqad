/* ============================================================
   محاكاة تفاعلية — الطريقة العلمية
   يتّبع العلماء خطواتٍ منظّمة: تحديد المشكلة ← فرضية ← اختبار ← تحليل
   ← نتائج ← تواصل. تنقّلْ بين الخطوات وتابعْ مثالًا (بحث تجريبيّ أو وصفيّ).
   الاستعمال من المحرّك:  window.SIMS['method'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['method'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6M10 3v5l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3"/><path d="M7.5 15h9"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  var STEPS=[
    {n:'تحديد المشكلة', tj:'هل يؤثّر ضوءُ الشمس في نموّ النبات؟', ws:'ما أنواعُ الصخور في منطقتنا؟'},
    {n:'تكوين فرضية', tj:'إذا زاد الضوءُ زاد نموُّ النبات.', ws:'الوصفيُّ يعتمد الملاحظةَ الدقيقة أكثرَ من الفرضية.'},
    {n:'اختبار الفرضية', tj:'نبتتان متماثلتان: واحدةٌ في الضوء وأخرى في الظلام، وبقيّةُ الظروف ثابتة (عيّنة ضابطة).', ws:'نلاحظ الصخورَ ونصوّرها ونسجّل خصائصها.'},
    {n:'تحليل البيانات', tj:'نقيس الطولَ يوميًّا ونرتّبه في جدولٍ ورسمٍ بيانيّ.', ws:'نصنّف الصخورَ حسب الخصائص المسجّلة.'},
    {n:'استخلاص النتائج', tj:'نبتةُ الضوء أطول ← الفرضيةُ صحيحة.', ws:'نستنتج أنواعَ الصخور السائدة.'},
    {n:'التواصل بالنتائج', tj:'نكتب تقريرًا ونعرض النتائجَ للآخرين.', ws:'ننشر الوصفَ والتصنيفَ في تقرير.'}
  ];

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="خطوات الطريقة العلمية">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="مخطّط خطوات الطريقة العلمية الست"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">الخطوة:</span><span class="wq-val js-step" style="font-size:16px">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>الخطوة</span><b class="js-idx">١ / ٦</b></div><input type="range" class="wq-range warm js-s" min="0" max="5" value="0" step="1"></div>'+
          '<div class="wq-quick">'+
            '<button type="button" class="wq-qbtn js-mode" data-m="tj" aria-pressed="true">بحث تجريبيّ</button>'+
            '<button type="button" class="wq-qbtn js-mode" data-m="ws">بحث وصفيّ</button>'+
          '</div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">مثال (الخطوة)</div><div class="wq-v js-ex" style="font-size:12.5px;font-weight:600;line-height:1.6">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">نوع البحث</div><div class="wq-v js-kind" style="font-size:14px">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-prev">◀ السابق</button><button type="button" class="wq-tool js-next">التالي ▶</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">—</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var qa=function(s){ return Array.prototype.slice.call(container.querySelectorAll(s)); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var sIn=q('.js-s'), elStep=q('.js-step'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var mode='tj', dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }

    function draw(){
      var curr=+sIn.value; ctx.clearRect(0,0,W,H);
      var x=22, w=256, h=29, gap=5, y0=12;
      for(var i=0;i<6;i++){ var y=y0+i*(h+gap), act=i===cur(), done=i<cur();
        ctx.fillStyle= act?css('--s-ar','#2E9E6B'):(done?css('--s-ar-soft','#E8F5EE'):css('--surface-2','#FBFBFE'));
        ctx.strokeStyle= act?css('--s-ar-deep','#1F7D52'):css('--line-strong','#D6D9EC'); ctx.lineWidth= act?2:1;
        ctx.beginPath(); ctx.roundRect(x,y,w,h,9); ctx.fill(); ctx.stroke();
        // دائرة الرقم
        ctx.fillStyle= act?'#fff':(done?css('--s-ar','#2E9E6B'):css('--line-strong','#D6D9EC'));
        ctx.beginPath(); ctx.arc(x+w-18,y+h/2,10,0,6.2832); ctx.fill();
        ctx.fillStyle= act?css('--s-ar-deep','#1F7D52'):'#fff'; ctx.font='800 12px Cairo,sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='ltr';
        ctx.fillText(done&&!act?'✓':toAr(i+1), x+w-18, y+h/2+0.5);
        // اسم الخطوة
        ctx.fillStyle= act?'#fff':css('--ink','#1C2143'); ctx.font=(act?'800':'600')+' 13px "IBM Plex Sans Arabic",sans-serif'; ctx.textAlign='right'; ctx.textBaseline='middle'; ctx.direction='rtl';
        ctx.fillText(STEPS[i].n, x+w-34, y+h/2);
        // سهم
        if(i<5){ ctx.strokeStyle=css('--line-strong','#D6D9EC'); ctx.lineWidth=1.5; var ay=y+h+gap/2; ctx.beginPath(); ctx.moveTo(x+w-18,y+h); ctx.lineTo(x+w-18,ay); ctx.stroke(); }
      }
    }
    function cur(){ return +sIn.value; }
    function refresh(){
      var i=cur(), S=STEPS[i];
      q('.js-idx').textContent=toAr(i+1)+' / ٦';
      elStep.textContent=S.n; elStep.style.color=css('--s-ar-deep','#1F7D52');
      q('.js-ex').textContent = S[mode];
      q('.js-kind').textContent = mode==='tj'?'تجريبيّ (ظروف مضبوطة)':'وصفيّ (ملاحظة ووصف)';
      qa('.js-mode').forEach(function(b){ b.setAttribute('aria-pressed', b.getAttribute('data-m')===mode?'true':'false'); });
      elIc.style.background=css('--s-ar-deep','#1F7D52'); elIc.innerHTML=ICN;
      elTit.textContent=S.n; elTit.style.color=css('--s-ar-deep','#1F7D52');
      elX.innerHTML='<b>'+S[mode]+'</b><br>الطريقةُ العلمية سلسلةٌ منظّمة لحلّ المشكلات، وكلُّ بحثٍ يبدأ بـ<b>جمع المعلومات السابقة</b>. والبحثُ نوعان: <b>تجريبيّ</b> يضبط الظروفَ ويجرّب (بعيّنةٍ ضابطة ومتغيّرٍ واحد)، و<b>وصفيّ</b> يلاحظ ويصف الظواهر.';
      draw();
    }
    sIn.addEventListener('input', refresh);
    qa('.js-mode').forEach(function(b){ b.addEventListener('click', function(){ mode=b.getAttribute('data-m'); refresh(); }); });
    q('.js-prev').onclick=function(){ sIn.value=Math.max(0,cur()-1); refresh(); };
    q('.js-next').onclick=function(){ sIn.value=Math.min(5,cur()+1); refresh(); };
    q('.js-idx').style.direction='ltr'; q('.js-idx').style.unicodeBidi='isolate';
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
