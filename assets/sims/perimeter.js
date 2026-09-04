/* ============================================================
   محاكاة تفاعلية — المحيط والمساحة (مستطيل)
   غيّر الطول والعرض: المحيط = ٢×(الطول+العرض)، والمساحة = الطول×العرض.
   الاستعمال من المحرّك:  window.SIMS['perimeter'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['perimeter'] = (function(){

  var GRID='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="4" y="4" width="16" height="16" rx="1"/><path d="M4 10h16M4 15h16M10 4v16M15 4v16"/></svg>';

  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="مستطيل قابل لتغيير أبعاده">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="مستطيل مقسّم إلى مربعات وحدة"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">الشكل:</span><span class="wq-val js-state">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>الطول</span><b><span class="js-lv">٦</span> وحدة</b></div>'+
            '<input type="range" class="wq-range warm js-l" min="1" max="10" value="6" step="1" aria-label="الطول"></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>العرض</span><b><span class="js-wv">٤</span> وحدة</b></div>'+
            '<input type="range" class="wq-range cool js-w" min="1" max="8" value="4" step="1" aria-label="العرض"></div>'+
          '<div class="wq-eq"><span class="wq-eqt">المحيط = ٢ × (الطول + العرض)</span><div class="wq-eqv"><span class="js-peq">—</span></div></div>'+
          '<div class="wq-eq" style="margin-top:8px"><span class="wq-eqt">المساحة = الطول × العرض</span><div class="wq-eqv"><span class="js-aeq">—</span></div></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">المحيط</div><div class="wq-v"><span class="js-per">—</span><small> وحدة</small></div></div>'+
          '<div class="wq-read"><div class="wq-k">المساحة</div><div class="wq-v"><span class="js-area">—</span><small> وحدة²</small></div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">—</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, CELL=20;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var lIn=q('.js-l'), wIn=q('.js-w');
    var elState=q('.js-state'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var cur='';
    var dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }

    function draw(){
      var l=+lIn.value, w=+wIn.value, pw=l*CELL, ph=w*CELL;
      ctx.clearRect(0,0,W,H);
      var rx=(W-pw)/2, ry=(H-ph)/2-4;
      // المستطيل + مربعات الوحدة
      ctx.fillStyle=css('--subject-soft','#E2F5F5'); ctx.fillRect(rx,ry,pw,ph);
      ctx.strokeStyle=color(css('--subject','#0FA3AA'),0.35); ctx.lineWidth=1;
      for(var i=1;i<l;i++){ ctx.beginPath(); ctx.moveTo(rx+i*CELL,ry); ctx.lineTo(rx+i*CELL,ry+ph); ctx.stroke(); }
      for(var j=1;j<w;j++){ ctx.beginPath(); ctx.moveTo(rx,ry+j*CELL); ctx.lineTo(rx+pw,ry+j*CELL); ctx.stroke(); }
      ctx.strokeStyle=css('--subject-deep','#0B7E86'); ctx.lineWidth=2.5; ctx.strokeRect(rx,ry,pw,ph);
      // عناوين الأبعاد
      ctx.fillStyle=css('--ink','#1C2143'); ctx.font='800 13px Cairo,sans-serif'; ctx.textAlign='center'; ctx.textBaseline='alphabetic';
      ctx.fillText(toAr(l)+' وحدة', rx+pw/2, ry-8);
      ctx.save(); ctx.translate(rx+pw+14, ry+ph/2); ctx.rotate(Math.PI/2); ctx.fillText(toAr(w)+' وحدة',0,0); ctx.restore();
    }
    function color(v,a){ // تحويل var(...) غير ممكن؛ نُرجِع اللون كما هو مع ألفا عبر globalAlpha بديلًا — نستعمل اللون مباشرة
      return v; }

    function refresh(){
      var l=+lIn.value, w=+wIn.value, per=2*(l+w), area=l*w;
      q('.js-lv').textContent=toAr(l); q('.js-wv').textContent=toAr(w);
      q('.js-peq').textContent='٢ × ('+toAr(l)+' + '+toAr(w)+') = '+toAr(per);
      q('.js-aeq').textContent=toAr(l)+' × '+toAr(w)+' = '+toAr(area);
      q('.js-per').textContent=toAr(per); q('.js-area').textContent=toAr(area);
      var isSq=(l===w);
      var st=isSq?'sq':'rect';
      if(st!==cur){ cur=st;
        elState.textContent=isSq?'مربّع':'مستطيل'; elState.style.color='var(--subject-deep)';
        elIc.style.background='var(--subject-deep)'; elIc.innerHTML=GRID;
        elTit.textContent=isSq?'مربّع (الطول = العرض)':'مستطيل';
        elTit.style.color='var(--subject-deep)';
        elX.textContent='المحيطُ هو مجموعُ أطوال الحدود (الأطراف الأربعة)، ويُقاس بالوحدة. والمساحةُ هي عددُ مربّعات الوحدة التي تملأ الشكل، وتُقاس بالوحدة المربّعة.';
      }
      draw();
    }
    lIn.addEventListener('input', refresh); wIn.addEventListener('input', refresh);
    q('.js-reset').onclick=function(){ lIn.value=6; wIn.value=4; refresh(); };
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
