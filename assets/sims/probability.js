/* ============================================================
   محاكاة تفاعلية — الاحتمال: النظريّ مقابل التجريبيّ
   الاحتمالُ النظريّ = النواتج المناسبة ÷ الكلّية. وبتكرار التجربة
   (محاولات) يقترب التكرارُ النسبيّ التجريبيّ من النظريّ كلّما زادت.
   الاستعمال من المحرّك:  window.SIMS['probability'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['probability'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="3"/><circle cx="9" cy="9" r="1.3" fill="currentColor"/><circle cx="15" cy="15" r="1.3" fill="currentColor"/><circle cx="15" cy="9" r="1.3" fill="currentColor"/><circle cx="9" cy="15" r="1.3" fill="currentColor"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  function pct(x){ return toAr((Math.round(x*10)/10).toString()).replace(/\./g,'٫'); }
  function rnd(i){ var x=Math.sin(i*12.9898+7.13)*43758.5453; return x-Math.floor(x); }
  var DEV={ die:{n:6,ar:'نرد',labels:['١','٢','٣','٤','٥','٦']}, coin:{n:2,ar:'قطعة نقود',labels:['صورة','كتابة']} };

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="أعمدة نتائج التجربة مقابل الاحتمال النظري">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="مقارنة التكرار التجريبي بالاحتمال النظري"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">الاحتمال النظريّ:</span><span class="wq-val js-theo">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-quick"><button type="button" class="wq-qbtn js-dev" data-d="die" aria-pressed="true">نرد (٦)</button><button type="button" class="wq-qbtn js-dev" data-d="coin">قطعة نقود (٢)</button></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>عدد المحاولات</span><b class="js-nv">٦٠</b></div><input type="range" class="wq-range warm js-n" min="10" max="600" value="60" step="10"></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">أبعد فرق (تجريبيّ−نظريّ)</div><div class="wq-v js-gap">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">المحاولات</div><div class="wq-v js-nn">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">النظريّ والتجريبيّ</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, GX0=40, GX1=286, GYB=196, GY0=30;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var qa=function(s){ return Array.prototype.slice.call(container.querySelectorAll(s)); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var nIn=q('.js-n'), elTheo=q('.js-theo'), elIc=q('.js-ic'), elX=q('.js-etext');
    var dev='die', dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function drawNum(x,y,str,col){ ctx.fillStyle=col; ctx.save(); ctx.textBaseline='middle'; ctx.direction='ltr';
      var ch=str.split(''), ws=ch.map(function(c){return ctx.measureText(c).width;}), tot=ws.reduce(function(a,b){return a+b;},0), lx=x-tot/2;
      ctx.textAlign='left'; for(var i=0;i<ch.length;i++){ ctx.fillText(ch[i],lx,y); lx+=ws[i]; } ctx.restore(); }
    function drawAr(x,y,str,col){ ctx.fillStyle=col; ctx.save(); ctx.font='700 10px "IBM Plex Sans Arabic",sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='rtl'; ctx.fillText(str,x,y); ctx.restore(); }
    function counts(){ var D=DEV[dev], N=+nIn.value, c=new Array(D.n).fill(0); for(var i=0;i<N;i++) c[Math.floor(rnd(i)*D.n)]++; return c; }

    function draw(){
      var D=DEV[dev], N=+nIn.value, c=counts(), theo=100/D.n;
      ctx.clearRect(0,0,W,H);
      // محور
      ctx.strokeStyle=css('--ink-soft','#4A5080'); ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(GX0,GY0); ctx.lineTo(GX0,GYB); ctx.lineTo(GX1,GYB); ctx.stroke();
      // خطّ النظريّ
      var ty=GYB-(theo/100)*(GYB-GY0);
      ctx.strokeStyle=css('--s-ar','#2E9E6B'); ctx.lineWidth=2; ctx.setLineDash([5,4]); ctx.beginPath(); ctx.moveTo(GX0,ty); ctx.lineTo(GX1,ty); ctx.stroke(); ctx.setLineDash([]);
      drawAr(GX1-30, ty-9, 'النظريّ '+pct(theo)+'٪', css('--s-ar-deep','#1F7D52'));
      // أعمدة تجريبية
      var bw=(GX1-GX0-16)/D.n, gap=bw*0.22;
      for(var k=0;k<D.n;k++){ var expp=N?c[k]/N*100:0, x=GX0+8+k*bw, bh=(expp/100)*(GYB-GY0), y=GYB-bh;
        ctx.fillStyle=css('--ember','#F2892E'); ctx.beginPath(); ctx.roundRect(x+gap/2,y,bw-gap,bh,4); ctx.fill();
        ctx.font='700 9px "IBM Plex Sans Arabic",sans-serif'; drawNum(x+bw/2, y-8, pct(expp), css('--ember-deep','#E4681B'));
        ctx.font='700 10px Cairo,sans-serif';
        if(D.n>2) drawNum(x+bw/2, GYB+12, D.labels[k], css('--muted','#7C82A8')); else drawAr(x+bw/2, GYB+13, D.labels[k], css('--muted','#7C82A8'));
      }
    }
    function refresh(){
      var D=DEV[dev], N=+nIn.value, c=counts(), theo=100/D.n, maxgap=0;
      for(var k=0;k<D.n;k++){ var g=Math.abs((N?c[k]/N*100:0)-theo); if(g>maxgap) maxgap=g; }
      q('.js-nv').textContent=toAr(N); q('.js-nn').textContent=toAr(N);
      q('.js-gap').textContent='±'+pct(maxgap)+'٪';
      elTheo.textContent='١ من '+toAr(D.n)+' ('+pct(theo)+'٪)'; elTheo.style.color=css('--s-ar-deep','#1F7D52');
      qa('.js-dev').forEach(function(b){ b.setAttribute('aria-pressed', b.getAttribute('data-d')===dev?'true':'false'); });
      elIc.style.background=css('--ember-deep','#E4681B'); elIc.innerHTML=ICN;
      elX.innerHTML='الاحتمالُ <b>النظريّ</b> = النواتجُ المناسبة ÷ النواتجُ الكلّية (لكلِّ وجهٍ '+(dev==='die'?'١ من ٦':'١ من ٢')+'). والخطُّ الأخضر يمثّله. الأعمدةُ البرتقالية هي التكرارُ <b>التجريبيّ</b> من المحاولات — كلّما <b>زاد عددُ المحاولات</b> اقتربتِ الأعمدةُ من الخطّ النظريّ (قانون الأعداد الكبيرة). جرّبْ رفعَ المحاولات إلى ٦٠٠.';
      draw();
    }
    qa('.js-dev').forEach(function(b){ b.addEventListener('click', function(){ dev=b.getAttribute('data-d'); refresh(); }); });
    nIn.addEventListener('input', refresh);
    q('.js-reset').onclick=function(){ dev='die'; nIn.value=60; refresh(); };
    ['.js-nv','.js-nn','.js-gap'].forEach(function(s){ var e=q(s); e.style.direction='ltr'; e.style.unicodeBidi='isolate'; });
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
