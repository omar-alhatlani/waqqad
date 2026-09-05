/* ============================================================
   محاكاة تفاعلية — متباينات القيمة المطلقة (متباينات مركّبة)
   |س| هو بُعدُ س عن الصفر. |س| < ن ← متباينةٌ مركّبة بـ«و»: −ن < س < ن
   (داخل). |س| > ن ← بـ«أو»: س < −ن أو س > ن (خارج). |س| = ن ← ±ن.
   الاستعمال من المحرّك:  window.SIMS['absineq'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['absineq'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 4v16M18 4v16"/><path d="M9 12h6" opacity=".5"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  function sig(n){ return (n<0?'−':'')+toAr(Math.abs(n)); }

  var OPS={
    lt:{ sym:'<', join:'«و» (داخل)', col:'var(--subject-deep)', title:'|س| < ن ← متباينةٌ بـ«و»',
      text:'«أصغر من» يعني البُعدَ عن الصفر <b>أقلّ من ن</b>، فالحلُّ كلُّ ما بين <b>−ن</b> و<b>ن</b>: متباينةٌ مركبةٌ بـ<b>«و»</b> (قطعةٌ داخلية بدائرتين مفتوحتين).' },
    eq:{ sym:'=', join:'قيمتان', col:'var(--ember-deep)', title:'|س| = ن ← قيمتان',
      text:'البُعدُ عن الصفر يساوي ن تمامًا، فهناك عددان بُعدُهما ن: <b>ن</b> و<b>−ن</b> (نقطتان مصمتتان).' },
    gt:{ sym:'>', join:'«أو» (خارج)', col:'var(--brand)', title:'|س| > ن ← متباينةٌ بـ«أو»',
      text:'«أكبر من» يعني البُعدَ عن الصفر <b>أكبر من ن</b>، فالحلُّ كلُّ ما هو <b>خارج</b> [−ن، ن]: متباينةٌ مركبةٌ بـ<b>«أو»</b> (شعاعان بدائرتين مفتوحتين).' }
  };

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="حل متباينة القيمة المطلقة على خط الأعداد">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="خط أعداد يبيّن حل متباينة القيمة المطلقة"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">تُكافئ:</span><span class="wq-val js-cmp">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-quick">'+
            '<button type="button" class="wq-qbtn js-op" data-op="lt" aria-pressed="true">|س| &lt; ن</button>'+
            '<button type="button" class="wq-qbtn js-op" data-op="eq">|س| = ن</button>'+
            '<button type="button" class="wq-qbtn js-op" data-op="gt">|س| &gt; ن</button>'+
          '</div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>القيمة ن</span><b class="js-nv">٣</b></div><input type="range" class="wq-range cool js-n" min="1" max="7" value="3" step="1"></div>'+
          '<div class="wq-eq"><span class="wq-eqt">المتباينة المركّبة المكافئة</span><div class="wq-eqv"><span class="js-sol">—</span></div></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">نوع الدمج</div><div class="wq-v js-join">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">القيمة المطلقة</div><div class="wq-v js-abs">البُعد عن ٠</div></div>'+
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
    var nIn=q('.js-n'), elCmp=q('.js-cmp'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var op='lt', dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function xFor(v){ return NX0+(v-MIN)/(MAX-MIN)*(NX1-NX0); }
    function drawNum(x,y,str,col){ ctx.fillStyle=col; ctx.save(); ctx.textBaseline='middle'; ctx.direction='ltr';
      var ch=str.split(''), ws=ch.map(function(c){return ctx.measureText(c).width;}), tot=ws.reduce(function(a,b){return a+b;},0), lx=x-tot/2;
      ctx.textAlign='left'; for(var i=0;i<ch.length;i++){ ctx.fillText(ch[i],lx,y); lx+=ws[i]; } ctx.restore(); }
    function circle(v,open,col){ var x=xFor(v); ctx.beginPath(); ctx.arc(x,NY,6.5,0,6.2832);
      if(open){ ctx.fillStyle=css('--surface','#fff'); ctx.fill(); ctx.strokeStyle=col; ctx.lineWidth=2.6; ctx.stroke(); }
      else { ctx.fillStyle=col; ctx.fill(); ctx.strokeStyle=css('--surface','#fff'); ctx.lineWidth=1.4; ctx.stroke(); } }
    function ray(fromV,dir,col){ var x0=xFor(fromV), xe=dir>0?NX1:NX0;
      ctx.strokeStyle=col; ctx.lineWidth=6; ctx.lineCap='round'; ctx.beginPath(); ctx.moveTo(x0,NY); ctx.lineTo(xe-dir*8,NY); ctx.stroke();
      ctx.fillStyle=col; ctx.beginPath(); ctx.moveTo(xe,NY); ctx.lineTo(xe-dir*11,NY-6); ctx.lineTo(xe-dir*11,NY+6); ctx.closePath(); ctx.fill(); }

    function draw(){
      var n=+nIn.value, O=OPS[op], col=O.col.indexOf('var(')===0?css(O.col.slice(4,-1),'#0B7E86'):O.col;
      ctx.clearRect(0,0,W,H);
      // حلّ
      if(op==='lt'){ ctx.strokeStyle=col; ctx.lineWidth=6; ctx.lineCap='round'; ctx.beginPath(); ctx.moveTo(xFor(-n),NY); ctx.lineTo(xFor(n),NY); ctx.stroke(); }
      else if(op==='gt'){ ray(-n,-1,col); ray(n,1,col); }
      // الخطّ والعلامات
      ctx.strokeStyle=css('--ink-soft','#4A5080'); ctx.lineWidth=2;
      ctx.beginPath(); ctx.moveTo(NX0-4,NY); ctx.lineTo(NX1+4,NY); ctx.stroke();
      ctx.font='600 10px "IBM Plex Sans Arabic",sans-serif';
      for(var v=MIN;v<=MAX;v++){ var x=xFor(v), big=(v%2===0);
        ctx.strokeStyle=css('--line-strong','#D6D9EC'); ctx.lineWidth=big?1.6:1;
        ctx.beginPath(); ctx.moveTo(x,NY-(big?6:3)); ctx.lineTo(x,NY+(big?6:3)); ctx.stroke();
        if(big) drawNum(x, NY+18, sig(v), css('--muted','#7C82A8')); }
      // الدائرتان الحدّيتان
      var open = (op!=='eq');
      circle(-n, open, op==='eq'?css('--ember','#F2892E'):col);
      circle(n, open, op==='eq'?css('--ember','#F2892E'):col);
      // عنوان علوي
      ctx.font='700 12px "IBM Plex Sans Arabic",sans-serif';
      drawNum(W/2, 40, '|س| '+O.sym+' '+sig(n), css('--ink','#1C2143'));
    }
    function refresh(){
      var n=+nIn.value, O=OPS[op];
      q('.js-nv').textContent=sig(n);
      elCmp.textContent = op==='lt' ? (sig(-n)+' < س < '+sig(n))
        : op==='gt' ? ('س < '+sig(-n)+' أو س > '+sig(n))
        : ('س = '+sig(n)+' أو س = '+sig(-n));
      q('.js-sol').textContent = elCmp.textContent;
      q('.js-join').textContent = O.join;
      qa('.js-op').forEach(function(b){ b.setAttribute('aria-pressed', b.getAttribute('data-op')===op?'true':'false'); });
      var col = O.col.indexOf('var(')===0?css(O.col.slice(4,-1),'#0B7E86'):O.col;
      elCmp.style.color=col;
      elIc.style.background=col; elIc.innerHTML=ICN; elTit.textContent=O.title; elTit.style.color=col; elX.innerHTML=O.text;
      draw();
    }
    qa('.js-op').forEach(function(b){ b.addEventListener('click', function(){ op=b.getAttribute('data-op'); refresh(); }); });
    nIn.addEventListener('input', refresh);
    q('.js-reset').onclick=function(){ op='lt'; nIn.value=3; refresh(); };
    ['.js-nv','.js-cmp','.js-sol'].forEach(function(s){ var e=q(s); e.style.direction='ltr'; e.style.unicodeBidi='isolate'; });
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
