/* ============================================================
   محاكاة تفاعلية — نظرية فيثاغورس  أ² + ب² = جـ²
   مثلثٌ قائمٌ بضلعين (أ، ب) ووتر (جـ)، ومربّعٌ على كلّ ضلعٍ يبيّن مساحته.
   الاستعمال من المحرّك:  window.SIMS['pythagoras'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['pythagoras'] = (function(){

  var TRI='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h16L4 6z"/><path d="M4 16h4v4"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  function arNum(x){ return toAr(String(Math.round(x*100)/100)).replace(/\./g,'٫'); }

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="مثلث قائم ومربعات على أضلاعه">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="مثلث قائم الزاوية مع مربع على كل ضلع"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">الوتر (جـ):</span><span class="wq-val js-c">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>الضلع (أ)</span><b><span class="js-av">٣</span> وحدة</b></div>'+
            '<input type="range" class="wq-range warm js-a" min="2" max="6" value="3" step="1" aria-label="الضلع أ"></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>الضلع (ب)</span><b><span class="js-bv">٤</span> وحدة</b></div>'+
            '<input type="range" class="wq-range cool js-b" min="2" max="6" value="4" step="1" aria-label="الضلع ب"></div>'+
          '<div class="wq-eq"><span class="wq-eqt">النظرية: أ² + ب² = جـ²</span><div class="wq-eqv"><span class="js-eq">—</span></div></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">أ² + ب²</div><div class="wq-v js-sum">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">الوتر جـ = √(أ²+ب²)</div><div class="wq-v js-hyp">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة (٣، ٤)</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">—</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240;
  var CA=[228,104,27], CB=[15,163,170], CC=[244,183,64];   // ألوان مربّعات أ/ب/جـ
  function rgba(c,a){ return 'rgba('+c[0]+','+c[1]+','+c[2]+','+a+')'; }
  function rgb(c){ return 'rgb('+c[0]+','+c[1]+','+c[2]+')'; }

  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var aIn=q('.js-a'), bIn=q('.js-b');
    var elC=q('.js-c'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var cur='';
    var dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }

    function draw(){
      var a=+aIn.value, b=+bIn.value;
      // إحداثيات الشكل (y لأعلى): الزاوية القائمة في الأصل، أ أفقيّ، ب رأسيّ
      var fw=a+2*b, fh=2*a+b, cx=a/2, cy=b/2;
      var sc=Math.min((W-34)/fw,(H-38)/fh);
      function S(px,py){ return [W/2+(px-cx)*sc, H/2-(py-cy)*sc]; }
      ctx.clearRect(0,0,W,H);
      // مربّع الضلع أ (أسفل)
      poly([[0,0],[a,0],[a,-a],[0,-a]], S, rgba(CA,0.22), rgb(CA));
      // مربّع الضلع ب (يسار)
      poly([[0,0],[0,b],[-b,b],[-b,0]], S, rgba(CB,0.22), rgb(CB));
      // مربّع الوتر جـ (خارج المثلث)
      poly([[a,0],[0,b],[b,a+b],[a+b,a]], S, rgba(CC,0.28), rgb(CC));
      // المثلث
      poly([[0,0],[a,0],[0,b]], S, css('--surface','#fff'), css('--ink-soft','#4A5080'), 2.5);
      // علامة الزاوية القائمة
      var r1=S(0,0), rr=S(0.7,0), ru=S(0,0.7), rc=S(0.7,0.7);
      ctx.strokeStyle=css('--ink-soft','#4A5080'); ctx.lineWidth=1.4;
      ctx.beginPath(); ctx.moveTo(rr[0],rr[1]); ctx.lineTo(rc[0],rc[1]); ctx.lineTo(ru[0],ru[1]); ctx.stroke();
      // نصوص المساحات
      ctx.font='800 12px Cairo,sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
      label(S(a/2,-a/2), toAr(a*a), rgb(CA));
      label(S(-b/2,b/2), toAr(b*b), rgb(CB));
      label(S((a+b)/2,(a+b)/2), toAr(a*a+b*b), rgb(CC));
    }
    function poly(pts,S,fill,stroke,lw){
      ctx.beginPath(); var p0=S(pts[0][0],pts[0][1]); ctx.moveTo(p0[0],p0[1]);
      for(var i=1;i<pts.length;i++){ var p=S(pts[i][0],pts[i][1]); ctx.lineTo(p[0],p[1]); }
      ctx.closePath(); ctx.fillStyle=fill; ctx.fill(); ctx.strokeStyle=stroke; ctx.lineWidth=lw||1.6; ctx.lineJoin='round'; ctx.stroke();
    }
    function label(p,t,col){ ctx.fillStyle=col; ctx.fillText(t, p[0], p[1]); }

    function refresh(){
      var a=+aIn.value, b=+bIn.value, c=Math.sqrt(a*a+b*b);
      q('.js-av').textContent=toAr(a); q('.js-bv').textContent=toAr(b);
      q('.js-eq').textContent=toAr(a*a)+' + '+toAr(b*b)+' = '+toAr(a*a+b*b);
      q('.js-sum').textContent=toAr(a*a+b*b);
      q('.js-hyp').textContent=arNum(c);
      elC.textContent=arNum(c)+' وحدة'; elC.style.color='var(--gold)';
      var perfect=(c===Math.round(c));
      var st=perfect?'p':'n';
      if(st!==cur){ cur=st;
        elIc.style.background='var(--gold)'; elIc.innerHTML=TRI;
        elTit.textContent=perfect?'ثلاثيةٌ فيثاغورية!':'مثلثٌ قائم الزاوية';
        elTit.style.color='var(--ember-deep)';
        elX.textContent='في المثلث القائم الزاوية: مجموعُ مربّعَي الضلعين القائمين (أ² + ب²) يساوي مربّعَ الوتر (جـ²). '+(perfect?'وهنا الوترُ عددٌ صحيح — ثلاثيةٌ فيثاغورية.':'ويكون الوترُ = الجذرَ التربيعيّ لمجموعهما.');
      }
      draw();
    }
    aIn.addEventListener('input', refresh); bIn.addEventListener('input', refresh);
    q('.js-reset').onclick=function(){ aIn.value=3; bIn.value=4; refresh(); };
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
