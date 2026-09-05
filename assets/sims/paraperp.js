/* ============================================================
   محاكاة تفاعلية — ميل المستقيمات المتوازية والمتعامدة
   المتوازيان لهما الميلُ نفسُه. المتعامدان حاصلُ ضرب ميليهما = −١
   (ميلُ أحدهما مقلوبُ الآخر بإشارةٍ معاكسة). غيّرِ الميل والعلاقة.
   الاستعمال من المحرّك:  window.SIMS['paraperp'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['paraperp'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 8h16M4 16h16" opacity=".5"/><path d="M7 20 17 4"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  function sig(n){ return (n<0?'−':'')+toAr(Math.abs(n)); }
  function recipTxt(m){ if(m===0) return 'غير معرّف'; if(Math.abs(m)===1) return sig(-m); return (m>0?'−':'')+'١/'+toAr(Math.abs(m)); }

  var MODES={
    par:{ ar:'متوازيان', col:'var(--subject-deep)', title:'مستقيمان متوازيان',
      text:'المستقيمان المتوازيان لهما <b>الميلُ نفسُه</b> ولا يتقاطعان. غيِّرِ الميلَ فيبقيان متوازيين ما دام الميلان متساويين.' },
    perp:{ ar:'متعامدان', col:'var(--ember-deep)', title:'مستقيمان متعامدان',
      text:'المستقيمان المتعامدان يتقاطعان بزاوية <b>٩٠°</b>، وحاصلُ ضرب ميليهما <b>= −١</b>؛ أي ميلُ أحدهما هو <b>المقلوبُ الضربيّ بإشارةٍ معاكسة</b> لميل الآخر.' }
  };

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="مستقيمان وعلاقة ميليهما">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="مستقيمان متوازيان أو متعامدان على الشبكة"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">العلاقة:</span><span class="wq-val js-rel">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-quick">'+
            '<button type="button" class="wq-qbtn js-mode" data-m="par">متوازيان</button>'+
            '<button type="button" class="wq-qbtn js-mode" data-m="perp" aria-pressed="true">متعامدان</button>'+
          '</div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>ميل الخطّ الأول (م₁)</span><b class="js-m1v">٢</b></div><input type="range" class="wq-range warm js-m1" min="-3" max="3" value="2" step="1"></div>'+
          '<div class="wq-eq"><span class="wq-eqt">علاقة الميلين</span><div class="wq-eqv"><span class="js-rule">—</span></div></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">ميل الخطّ الأول (م₁)</div><div class="wq-v js-r1">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">ميل الخطّ الثاني (م₂)</div><div class="wq-v js-m2">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">—</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, OX=150, OY=120, C=17, R=6;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var qa=function(s){ return Array.prototype.slice.call(container.querySelectorAll(s)); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var m1In=q('.js-m1'), elRel=q('.js-rel'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var mode='perp', dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function sx(x){ return OX+x*C; } function sy(y){ return OY-y*C; }
    function drawNum(x,y,str,col){ ctx.fillStyle=col; ctx.save(); ctx.textBaseline='middle'; ctx.direction='ltr';
      var ch=str.split(''), ws=ch.map(function(c){return ctx.measureText(c).width;}), tot=ws.reduce(function(a,b){return a+b;},0), lx=x-tot/2;
      ctx.textAlign='left'; for(var i=0;i<ch.length;i++){ ctx.fillText(ch[i],lx,y); lx+=ws[i]; } ctx.restore(); }
    function line(m,b,col,vert){ ctx.strokeStyle=col; ctx.lineWidth=2.6;
      ctx.beginPath();
      if(vert){ ctx.moveTo(sx(1),sy(-R)); ctx.lineTo(sx(1),sy(R)); }
      else { ctx.moveTo(sx(-R),sy(m*-R+b)); ctx.lineTo(sx(R),sy(m*R+b)); }
      ctx.stroke(); }

    function draw(){
      var m1=+m1In.value;
      ctx.clearRect(0,0,W,H);
      ctx.strokeStyle=css('--line','#E7E9F5'); ctx.lineWidth=1;
      for(var i=-R;i<=R;i++){ ctx.beginPath(); ctx.moveTo(sx(i),sy(-R)); ctx.lineTo(sx(i),sy(R)); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(sx(-R),sy(i)); ctx.lineTo(sx(R),sy(i)); ctx.stroke(); }
      ctx.strokeStyle=css('--ink-soft','#4A5080'); ctx.lineWidth=2;
      ctx.beginPath(); ctx.moveTo(sx(-R),sy(0)); ctx.lineTo(sx(R),sy(0)); ctx.moveTo(sx(0),sy(-R)); ctx.lineTo(sx(0),sy(R)); ctx.stroke();
      ctx.save(); ctx.beginPath(); ctx.rect(sx(-R),sy(R),2*R*C,2*R*C); ctx.clip();
      // الخطّ الأول (م₁، مقطع +١)
      line(m1, 1, css('--ember','#F2892E'), false);
      // الخطّ الثاني حسب العلاقة
      if(mode==='par'){ line(m1, -2, css('--subject','#0FA3AA'), false); }
      else { if(m1===0) line(0, 0, css('--subject','#0FA3AA'), true); else line(-1/m1, -1, css('--subject','#0FA3AA'), false); }
      ctx.restore();
    }
    function refresh(){
      var m1=+m1In.value, M=MODES[mode];
      q('.js-m1v').textContent=sig(m1);
      q('.js-r1').textContent=sig(m1);
      q('.js-m2').textContent = mode==='par'? sig(m1) : recipTxt(m1);
      q('.js-rule').textContent = mode==='par'
        ? ('م₁ = م₂ = '+sig(m1))
        : (m1===0? 'أفقيّ ⟂ رأسيّ' : 'م₁ × م₂ = '+sig(m1)+' × '+recipTxt(m1)+' = −١');
      elRel.textContent=M.ar; elRel.style.color=M.col;
      qa('.js-mode').forEach(function(b){ b.setAttribute('aria-pressed', b.getAttribute('data-m')===mode?'true':'false'); });
      elIc.style.background=M.col; elIc.innerHTML=ICN;
      elTit.textContent=M.title; elTit.style.color=M.col; elX.innerHTML=M.text;
      draw();
    }
    qa('.js-mode').forEach(function(b){ b.addEventListener('click', function(){ mode=b.getAttribute('data-m'); refresh(); }); });
    m1In.addEventListener('input', refresh);
    q('.js-reset').onclick=function(){ mode='perp'; m1In.value=2; refresh(); };
    ['.js-m1v','.js-r1','.js-m2','.js-rule'].forEach(function(s){ var e=q(s); e.style.direction='ltr'; e.style.unicodeBidi='isolate'; });
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
