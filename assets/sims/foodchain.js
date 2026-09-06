/* ============================================================
   محاكاة تفاعلية — السلسلة الغذائية وهرم الطاقة
   تنتقل الطاقةُ من المنتِج (النبات) إلى المستهلكات في سلسلةٍ غذائية،
   وتقلّ الطاقةُ كلّما صعدنا في هرم الطاقة (نحو ١٠٪ لكلِّ مستوى).
   الاستعمال من المحرّك:  window.SIMS['foodchain'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['foodchain'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 12h6M14 12h6"/><path d="M10 9l4 3-4 3"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }

  var LV=[
    {n:'النبات', role:'منتِج', pct:'١٠٠٪', c:'#4FA85E', cl:'#2E7D46', d:'يصنع غذاءَه بنفسه بالبناء الضوئي — أساسُ السلسلة.'},
    {n:'الجراد', role:'مستهلِك (آكل أعشاب)', pct:'١٠٪', c:'#7BB661', cl:'#4E7A34', d:'يتغذّى على النبات — أوّلُ المستهلكات.'},
    {n:'الضفدع', role:'مستهلِك (آكل لحوم)', pct:'١٪', c:'#C89A6A', cl:'#8A6231', d:'يتغذّى على الجراد.'},
    {n:'الثعبان', role:'مستهلِك (آكل لحوم)', pct:'٠٫١٪', c:'#C1502E', cl:'#8A2E17', d:'يتغذّى على الضفدع — قمّةُ هذه السلسلة.'}
  ];

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="سلسلة غذائية أو هرم طاقة">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="سلسلة نبات ثم جراد ثم ضفدع ثم ثعبان، أو هرم طاقة يقلّ صعودًا"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">المستوى:</span><span class="wq-val js-name" style="font-size:14px">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-quick"><button type="button" class="wq-qbtn js-mode" data-m="chain" aria-pressed="true">سلسلة</button><button type="button" class="wq-qbtn js-mode" data-m="pyr">هرم الطاقة</button></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>اختر المستوى</span><b class="js-lv">١</b></div><input type="range" class="wq-range warm js-l" min="1" max="4" value="1" step="1"></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">الدور</div><div class="wq-v js-role" style="font-size:12px">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">الطاقة المتاحة</div><div class="wq-v js-pct">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">السلسلة الغذائية</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var qa=function(s){ return Array.prototype.slice.call(container.querySelectorAll(s)); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var lIn=q('.js-l'), elName=q('.js-name'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var mode='chain', dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function drawAr(x,y,str,col,f){ ctx.fillStyle=col; ctx.save(); ctx.font=f||'700 10px "IBM Plex Sans Arabic",sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='rtl'; ctx.fillText(str,x,y); ctx.restore(); }
    function arrow(x1,y,x2,col){ ctx.strokeStyle=col; ctx.lineWidth=2.5; ctx.lineCap='round'; ctx.beginPath(); ctx.moveTo(x1,y); ctx.lineTo(x2,y); ctx.stroke();
      ctx.fillStyle=col; ctx.beginPath(); ctx.moveTo(x2,y); ctx.lineTo(x2-8,y-5); ctx.lineTo(x2-8,y+5); ctx.fill(); }

    function draw(sel){
      ctx.clearRect(0,0,W,H);
      if(mode==='chain'){
        // الشمس مصدرُ الطاقة
        var g=ctx.createRadialGradient(24,26,1,24,26,12); g.addColorStop(0,'#FFE7A0'); g.addColorStop(1,'#F4A522');
        ctx.fillStyle=g; ctx.beginPath(); ctx.arc(24,26,10,0,6.2832); ctx.fill(); drawAr(24,44,'الشمس','#E4681B','700 8px "IBM Plex Sans Arabic",sans-serif');
        // صفّان: نبات، جراد / ضفدع، ثعبان (لضيق العرض)
        var pos=[[76,78],[224,78],[224,158],[76,158]]; // مسار متعرّج
        LV.forEach(function(o,i){
          var x=pos[i][0], y=pos[i][1];
          ctx.fillStyle=o.c; ctx.strokeStyle=(i===sel)?css('--brand','#4B45C6'):o.cl; ctx.lineWidth=(i===sel)?4:2;
          ctx.beginPath(); ctx.roundRect(x-52,y-20,104,40,9); ctx.fill(); ctx.stroke();
          drawAr(x,y-6,o.n,'#fff','800 12px "IBM Plex Sans Arabic",sans-serif');
          drawAr(x,y+9,i===0?'منتِج':'مستهلِك','#fff','600 8px "IBM Plex Sans Arabic",sans-serif');
        });
        // أسهم انتقال الطاقة على المسار المتعرّج
        arrow(128,78,172,css('--ember','#F2892E'));           // نبات ← جراد
        ctx.strokeStyle=css('--ember','#F2892E'); ctx.lineWidth=2.5; ctx.beginPath(); ctx.moveTo(224,98); ctx.lineTo(224,138); ctx.stroke(); ctx.fillStyle=css('--ember','#F2892E'); ctx.beginPath(); ctx.moveTo(224,138); ctx.lineTo(219,130); ctx.lineTo(229,130); ctx.fill(); // جراد ← ضفدع
        arrow(172,158,128,css('--ember','#F2892E'));           // ضفدع ← ثعبان (يسارًا)
        drawAr(150,H-12,'اتجاه انتقال الطاقة',css('--muted','#7C82A8'),'600 8px "IBM Plex Sans Arabic",sans-serif');
      } else {
        // هرم الطاقة: ٤ شرائح تقلّ عرضًا صعودًا
        var widths=[220,160,104,54], yb=196, hh=38;
        for(var i=0;i<4;i++){
          var wtop=widths[i], wbot=(i<3?widths[i+1]:wtop*0.5); // شبه منحرف
          var yTop=yb-(i+1)*hh, yBot=yb-i*hh;
          ctx.fillStyle=LV[i].c; ctx.strokeStyle=(i===sel)?css('--brand','#4B45C6'):LV[i].cl; ctx.lineWidth=(i===sel)?4:2;
          ctx.beginPath(); ctx.moveTo(150-wbot/2,yBot); ctx.lineTo(150+wbot/2,yBot); ctx.lineTo(150+wtop/2,yTop); ctx.lineTo(150-wtop/2,yTop); ctx.closePath(); ctx.fill(); ctx.stroke();
          drawAr(150,(yTop+yBot)/2-4,LV[i].n,'#fff','800 11px "IBM Plex Sans Arabic",sans-serif');
          drawAr(150,(yTop+yBot)/2+9,LV[i].pct,'#fff','800 9px Poppins,sans-serif');
        }
        drawAr(150,20,'تقلّ الطاقةُ كلّما صعدنا (≈١٠٪ لكلِّ مستوى)',css('--muted','#7C82A8'),'600 9px "IBM Plex Sans Arabic",sans-serif');
      }
    }
    function refresh(){
      var sel=(+lIn.value)-1, o=LV[sel];
      q('.js-lv').textContent=toAr(sel+1);
      qa('.js-mode').forEach(function(b){ b.setAttribute('aria-pressed', b.getAttribute('data-m')===mode?'true':'false'); });
      elName.textContent=o.n; elName.style.color=css('--ink','#1C2143');
      q('.js-role').textContent=o.role; q('.js-role').style.color = sel===0?css('--s-ar-deep','#1F7D52'):css('--ember-deep','#E4681B');
      q('.js-pct').textContent=o.pct;
      elIc.style.background=css('--subject-deep','#0B7E86'); elIc.innerHTML=ICN;
      elTit.textContent=o.n;
      elX.innerHTML='<b>'+o.n+'</b> ('+o.role+'): '+o.d+' والطاقةُ تنتقل من <b>المنتِج</b> إلى <b>المستهلكات</b>، وتقلُّ كلّما صعدنا في <b>هرم الطاقة</b> (نحو ١٠٪ لكلِّ مستوى)، والمصدرُ الأصليُّ لها هو <b>الشمس</b>. وتحلّل <b>المحللاتُ</b> (كالفطريات والبكتيريا) البقايا فتُعيد العناصرَ إلى التربة.';
      draw(sel);
    }
    qa('.js-mode').forEach(function(b){ b.addEventListener('click', function(){ mode=b.getAttribute('data-m'); refresh(); }); });
    lIn.addEventListener('input', refresh);
    q('.js-reset').onclick=function(){ mode='chain'; lIn.value=1; refresh(); };
    q('.js-pct').style.direction='ltr'; q('.js-pct').style.unicodeBidi='isolate';
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
