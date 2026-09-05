/* ============================================================
   محاكاة تفاعلية — المتباينات على خط الأعداد
   اختر العلاقة (> ≥ < ≤) والقيمة الحدّية: تُظلَّل مجموعةُ الحلّ على
   الخطّ. دائرةٌ مفتوحة للمتباينة الصارمة، ومصمتة إذا شملت المساواة.
   الاستعمال من المحرّك:  window.SIMS['inequality'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['inequality'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 12h18"/><circle cx="9" cy="12" r="3"/><path d="M15 8l4 4-4 4"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  function sig(n){ return (n<0?'−':'')+toAr(Math.abs(n)); }

  var OPS={
    gt:{ sym:'>', word:'أكبر من', dir:1, open:true },
    ge:{ sym:'≥', word:'أكبر من أو يساوي', dir:1, open:false },
    lt:{ sym:'<', word:'أصغر من', dir:-1, open:true },
    le:{ sym:'≤', word:'أصغر من أو يساوي', dir:-1, open:false }
  };

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="مجموعة حل المتباينة على خط الأعداد">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="خط أعداد مع مجموعة حل المتباينة مظللة"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">المتباينة:</span><span class="wq-val js-ineq">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-quick">'+
            '<button type="button" class="wq-qbtn js-op" data-op="gt" aria-pressed="true">س &gt;</button>'+
            '<button type="button" class="wq-qbtn js-op" data-op="ge">س ≥</button>'+
            '<button type="button" class="wq-qbtn js-op" data-op="lt">س &lt;</button>'+
            '<button type="button" class="wq-qbtn js-op" data-op="le">س ≤</button>'+
          '</div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>القيمة الحدّية</span><b class="js-bv">٣</b></div><input type="range" class="wq-range cool js-b" min="-7" max="7" value="3" step="1"></div>'+
          '<div class="wq-eq"><span class="wq-eqt">مجموعة الحلّ</span><div class="wq-eqv"><span class="js-sol">—</span></div></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">نوع الدائرة</div><div class="wq-v js-circ">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">جهة التظليل</div><div class="wq-v js-side">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">—</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, NX0=26, NX1=274, NY=132, MIN=-8, MAX=8;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var qa=function(s){ return Array.prototype.slice.call(container.querySelectorAll(s)); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var bIn=q('.js-b'), elIneq=q('.js-ineq'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var op='gt';
    var dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function xFor(v){ return NX0+(v-MIN)/(MAX-MIN)*(NX1-NX0); }
    function drawNum(x,y,str,col){ ctx.fillStyle=col; ctx.save(); ctx.textBaseline='middle'; ctx.direction='ltr';
      var ch=str.split(''), ws=ch.map(function(c){return ctx.measureText(c).width;}), tot=ws.reduce(function(a,b){return a+b;},0), lx=x-tot/2;
      ctx.textAlign='left'; for(var i=0;i<ch.length;i++){ ctx.fillText(ch[i],lx,y); lx+=ws[i]; } ctx.restore(); }

    function draw(){
      var o=OPS[op], b=+bIn.value, bx=xFor(b);
      ctx.clearRect(0,0,W,H);
      // مجموعة الحلّ (شعاع مظلَّل)
      var endX = o.dir>0 ? NX1 : NX0;
      ctx.strokeStyle=css('--subject','#0FA3AA'); ctx.lineWidth=6; ctx.lineCap='round';
      ctx.beginPath(); ctx.moveTo(bx,NY); ctx.lineTo(endX-o.dir*8,NY); ctx.stroke();
      // رأس السهم
      ctx.fillStyle=css('--subject','#0FA3AA'); ctx.beginPath();
      ctx.moveTo(endX,NY); ctx.lineTo(endX-o.dir*11,NY-6); ctx.lineTo(endX-o.dir*11,NY+6); ctx.closePath(); ctx.fill();
      // الخطّ الأساس والعلامات
      ctx.strokeStyle=css('--ink-soft','#4A5080'); ctx.lineWidth=2;
      ctx.beginPath(); ctx.moveTo(NX0-4,NY); ctx.lineTo(NX1+4,NY); ctx.stroke();
      ctx.font='600 10px "IBM Plex Sans Arabic",sans-serif';
      for(var v=MIN;v<=MAX;v++){ var x=xFor(v), big=(v%2===0);
        ctx.strokeStyle=css('--line-strong','#D6D9EC'); ctx.lineWidth=big?1.6:1;
        ctx.beginPath(); ctx.moveTo(x,NY-(big?6:3)); ctx.lineTo(x,NY+(big?6:3)); ctx.stroke();
        if(big) drawNum(x, NY+18, sig(v), css('--muted','#7C82A8')); }
      // الدائرة الحدّية
      ctx.beginPath(); ctx.arc(bx,NY,6.5,0,6.2832);
      if(o.open){ ctx.fillStyle=css('--surface','#fff'); ctx.fill(); ctx.strokeStyle=css('--ember-deep','#E4681B'); ctx.lineWidth=2.6; ctx.stroke(); }
      else { ctx.fillStyle=css('--ember','#F2892E'); ctx.fill(); ctx.strokeStyle=css('--ember-deep','#E4681B'); ctx.lineWidth=1.5; ctx.stroke(); }
      // عنوان علوي
      ctx.font='700 12px "IBM Plex Sans Arabic",sans-serif';
      drawNum(W/2, 40, 'س '+o.sym+' '+sig(b), css('--ink','#1C2143'));
    }
    function refresh(){
      var o=OPS[op], b=+bIn.value;
      q('.js-bv').textContent=sig(b);
      elIneq.textContent='س '+o.sym+' '+sig(b); elIneq.style.color=css('--subject-deep','#0B7E86');
      q('.js-sol').textContent='كلُّ عددٍ '+o.word+' '+sig(b);
      q('.js-circ').textContent=o.open?'مفتوحة':'مصمتة';
      q('.js-side').textContent=o.dir>0?'يمين':'يسار';
      qa('.js-op').forEach(function(bn){ bn.setAttribute('aria-pressed', bn.getAttribute('data-op')===op?'true':'false'); });
      elIc.style.background=css('--subject-deep','#0B7E86'); elIc.innerHTML=ICN;
      elTit.textContent = o.open?'دائرةٌ مفتوحة — القيمة غير مشمولة':'دائرةٌ مصمتة — القيمة مشمولة';
      elTit.style.color=css('--subject-deep','#0B7E86');
      elX.innerHTML = (o.open
        ? 'العلامةُ صارمة (> أو <)، فالقيمةُ الحدّية <b>لا تُعدّ حلًّا</b>؛ لذلك نرسمُ دائرةً <b>مفتوحة</b>'
        : 'العلامةُ تشمل المساواة (≥ أو ≤)، فالقيمةُ الحدّية <b>حلٌّ أيضًا</b>؛ لذلك نرسمُ دائرةً <b>مصمتة</b>')
        + '، ونظلّلُ جهةَ الأعداد التي تحقّق المتباينة ('+(o.dir>0?'يمينًا نحو الأكبر':'يسارًا نحو الأصغر')+').';
      draw();
    }
    qa('.js-op').forEach(function(bn){ bn.addEventListener('click', function(){ op=bn.getAttribute('data-op'); refresh(); }); });
    bIn.addEventListener('input', refresh);
    q('.js-reset').onclick=function(){ op='gt'; bIn.value=3; refresh(); };
    ['.js-bv','.js-ineq'].forEach(function(s){ var e=q(s); e.style.direction='ltr'; e.style.unicodeBidi='isolate'; });
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
