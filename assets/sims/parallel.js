/* ============================================================
   محاكاة تفاعلية — الزوايا والمستقيمات المتوازية
   مستقيمان متوازيان يقطعهما قاطع. غيّر الزاوية واختر العلاقة:
   المتناظرة والمتبادلة متساويتان، والمتحالفة مجموعُهما ١٨٠°.
   الاستعمال من المحرّك:  window.SIMS['parallel'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['parallel'] = (function(){

  var ANG='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h16M4 20 18 6"/><path d="M9 20a5 5 0 0 1 1.5-3.5"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }

  var REL={
    corr:{ ar:'المتناظرة', pairs:[[0,0],[1,0]], verdict:'متساويتان', kind:'eq',
      text:'الزاويتان المتناظرتان تقعان في الموضع نفسه عند التقاطعين (إحداهما فوق والأخرى فوق على الجهة نفسها). وعند توازي المستقيمين تكونان <b>متساويتين</b>.' },
    alt:{ ar:'المتبادلة الداخلية', pairs:[[0,0],[1,2]], verdict:'متساويتان', kind:'eq',
      text:'الزاويتان المتبادلتان داخليًّا تقعان بين المستقيمين على جهتين متقابلتين من القاطع. وعند التوازي تكونان <b>متساويتين</b>.' },
    cons:{ ar:'المتحالفة الداخلية', pairs:[[0,0],[1,3]], verdict:'مجموعهما ١٨٠°', kind:'sum',
      text:'الزاويتان المتحالفتان داخليًّا تقعان بين المستقيمين على الجهة نفسها من القاطع. وعند التوازي يكون <b>مجموعُهما ١٨٠°</b> (متكاملتان).' }
  };

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="مستقيمان متوازيان وقاطع">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="مستقيمان متوازيان يقطعهما قاطع مع الزوايا الثماني"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">العلاقة:</span><span class="wq-val js-rel">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>زاوية القاطع (الحادّة)</span><b><span class="js-tv">٦٠</span>°</b></div>'+
            '<input type="range" class="wq-range cool js-t" min="35" max="75" value="60" step="5" aria-label="الزاوية"></div>'+
          '<div class="wq-quick"><button type="button" class="wq-qbtn" data-r="corr" aria-pressed="true">متناظرة</button><button type="button" class="wq-qbtn" data-r="alt">متبادلة</button><button type="button" class="wq-qbtn" data-r="cons">متحالفة</button></div>'+
          '<div class="wq-eq"><span class="wq-eqt">الزاويتان المختارتان</span><div class="wq-eqv"><span class="js-eq">—</span></div></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">الزاوية الحادّة</div><div class="wq-v"><span class="js-acute">—</span><small>°</small></div></div>'+
          '<div class="wq-read"><div class="wq-k">الزاوية المنفرجة</div><div class="wq-v"><span class="js-obt">—</span><small>°</small></div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">—</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, Y1=74, Y2=182, R=24;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var tIn=q('.js-t');
    var elRel=q('.js-rel'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var rel='corr';
    var dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }

    function geom(){
      var th=+tIn.value, tr=th*Math.PI/180, cy=(Y1+Y2)/2;
      var dx=(cy-Y1)/Math.tan(tr);
      var P=[[150-dx,Y1],[150+dx,Y2]];
      return { th:th, tr:tr, P:P };
    }
    function labelPos(P,slot,tr){ var bis=slot*Math.PI/2 + tr/2; return [P[0]+R*Math.cos(bis), P[1]+R*Math.sin(bis)]; }
    function slotVal(slot,th){ return (slot%2===0)? th : 180-th; }
    function drawNum(x,y,str,col){ ctx.fillStyle=col; ctx.save(); ctx.textAlign='left'; ctx.direction='ltr';
      var ch=str.split(''), ws=ch.map(function(c){return ctx.measureText(c).width;}), tot=ws.reduce(function(a,b){return a+b;},0), lx=x-tot/2;
      for(var i=0;i<ch.length;i++){ ctx.fillText(ch[i],lx,y); lx+=ws[i]; } ctx.restore(); }

    function draw(){
      var g=geom(), th=g.th;
      ctx.clearRect(0,0,W,H);
      // المستقيمان المتوازيان
      ctx.strokeStyle=css('--ink-soft','#4A5080'); ctx.lineWidth=2.5; ctx.lineCap='round';
      ctx.beginPath(); ctx.moveTo(20,Y1); ctx.lineTo(280,Y1); ctx.moveTo(20,Y2); ctx.lineTo(280,Y2); ctx.stroke();
      // سهما التوازي
      ctx.strokeStyle=css('--subject','#0FA3AA'); ctx.lineWidth=2;
      [Y1,Y2].forEach(function(y){ ctx.beginPath(); ctx.moveTo(244,y-4); ctx.lineTo(250,y); ctx.lineTo(244,y+4); ctx.stroke(); });
      // القاطع
      ctx.strokeStyle=css('--gold','#F4B740'); ctx.lineWidth=2.5;
      var ext=60, d=[Math.cos(g.tr),Math.sin(g.tr)];
      ctx.beginPath(); ctx.moveTo(g.P[0][0]-d[0]*ext, g.P[0][1]-d[1]*ext); ctx.lineTo(g.P[1][0]+d[0]*ext, g.P[1][1]+d[1]*ext); ctx.stroke();
      // إبراز الزاويتين المختارتين
      var hp=REL[rel].pairs;
      ctx.font='800 12px Cairo,sans-serif'; ctx.textBaseline='middle';
      for(var v=0;v<2;v++){ for(var slot=0;slot<4;slot++){
        var lp=labelPos(g.P[v],slot,g.tr), val=slotVal(slot,th);
        var hl=hp.some(function(p){ return p[0]===v&&p[1]===slot; });
        if(hl){ ctx.fillStyle=css('--subject-soft','#E2F5F5'); ctx.strokeStyle=css('--subject','#0FA3AA'); ctx.lineWidth=2;
          ctx.beginPath(); ctx.arc(lp[0],lp[1],12,0,6.2832); ctx.fill(); ctx.stroke(); }
        drawNum(lp[0],lp[1],toAr(val)+'°', hl?css('--subject-deep','#0B7E86'):css('--muted','#7C82A8'));
      } }
      // نقطتا التقاطع
      ctx.fillStyle=css('--ink','#1C2143');
      ctx.beginPath(); ctx.arc(g.P[0][0],g.P[0][1],3,0,6.2832); ctx.arc(g.P[1][0],g.P[1][1],3,0,6.2832); ctx.fill();
    }
    function refresh(){
      var th=+tIn.value, R2=REL[rel];
      q('.js-tv').textContent=toAr(th);
      q('.js-acute').textContent=toAr(th); q('.js-obt').textContent=toAr(180-th);
      var v1=slotVal(R2.pairs[0][1],th), v2=slotVal(R2.pairs[1][1],th);
      q('.js-eq').textContent = R2.kind==='eq' ? (toAr(v1)+'° = '+toAr(v2)+'°') : (toAr(v1)+'° + '+toAr(v2)+'° = '+toAr(v1+v2)+'°');
      elRel.textContent=R2.ar+' — '+R2.verdict; elRel.style.color='var(--subject-deep)';
      elIc.style.background='var(--subject-deep)'; elIc.innerHTML=ANG;
      elTit.textContent=R2.ar+' ('+R2.verdict+')'; elTit.style.color='var(--subject-deep)'; elX.innerHTML=R2.text;
      draw();
    }
    tIn.addEventListener('input', refresh);
    container.querySelectorAll('.wq-qbtn').forEach(function(b){ b.onclick=function(){ rel=b.getAttribute('data-r');
      container.querySelectorAll('.wq-qbtn').forEach(function(x){ x.setAttribute('aria-pressed', x===b); }); refresh(); }; });
    q('.js-reset').onclick=function(){ tIn.value=60; rel='corr'; container.querySelectorAll('.wq-qbtn').forEach(function(x){ x.setAttribute('aria-pressed', x.getAttribute('data-r')==='corr'); }); refresh(); };
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
