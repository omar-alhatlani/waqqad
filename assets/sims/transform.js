/* ============================================================
   محاكاة تفاعلية — التحويلات الهندسية (انعكاس · انسحاب · دوران)
   شكلٌ على الشبكة: اختر التحويل وشاهد الأصلَ (متقطّعًا) والصورةَ (صلبة).
   الاستعمال من المحرّك:  window.SIMS['transform'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['transform'] = (function(){

  var MOVE='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M3 12h18M7 7l10 10M17 7 7 17"/></svg>';
  var SHAPE=[[1,1],[4,1],[4,2],[2,2],[2,4],[1,4]];   // شكل حرف L في الرُّبع الأول
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  function sig(n){ return (n<0?'−':'')+toAr(Math.abs(n)); }

  var INFO={
    reflect:{ ar:'انعكاس', title:'الانعكاس — صورةٌ مرآتية',
      text:'ينقلب الشكلُ كصورةٍ في مرآةٍ حول محور الانعكاس؛ يتغيّر الاتّجاهُ ويبقى الحجمُ والشكلُ نفسَه. كلُّ نقطةٍ تبعد عن المحور بمقدار بُعد صورتها.' },
    translate:{ ar:'انسحاب', title:'الانسحاب — انزلاقٌ دون دوران',
      text:'ينزلق الشكلُ كلُّه المسافةَ نفسها في الاتّجاه نفسه، دون دورانٍ أو قلب. تُضاف مركّبةُ الأفقي (س) والرأسي (ص) إلى كلّ نقطة.' },
    rotate:{ ar:'دوران', title:'الدوران — لفٌّ حول نقطة',
      text:'يدور الشكلُ حول نقطة الأصل بزاويةٍ معيّنة، فيتغيّر اتّجاهُه ويبقى حجمُه وشكلُه. زاويةُ الدوران هنا عكسَ عقارب الساعة.' }
  };

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="شكل هندسي على الشبكة قبل التحويل وبعده">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="شكل أصليّ متقطّع وصورته بعد التحويل"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">التحويل:</span><span class="wq-val js-mode">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-quick"><button type="button" class="wq-qbtn" data-m="reflect" aria-pressed="true">انعكاس</button><button type="button" class="wq-qbtn" data-m="translate">انسحاب</button><button type="button" class="wq-qbtn" data-m="rotate">دوران</button></div>'+
          '<div class="js-cReflect" style="margin-top:12px"><div class="wq-sllabel" style="margin-bottom:7px"><span>محور الانعكاس</span></div>'+
            '<div class="wq-quick"><button type="button" class="wq-qbtn js-ax" data-ax="y" aria-pressed="true">المحور الصادي (ص)</button><button type="button" class="wq-qbtn js-ax" data-ax="x">المحور السيني (س)</button></div></div>'+
          '<div class="js-cTranslate" hidden style="margin-top:12px">'+
            '<div class="wq-sl"><div class="wq-sllabel"><span>الإزاحة الأفقية (س)</span><b class="js-txv">٤</b></div><input type="range" class="wq-range warm js-tx" min="-4" max="4" value="4" step="1"></div>'+
            '<div class="wq-sl"><div class="wq-sllabel"><span>الإزاحة الرأسية (ص)</span><b class="js-tyv">−٢</b></div><input type="range" class="wq-range cool js-ty" min="-4" max="4" value="-2" step="1"></div></div>'+
          '<div class="js-cRotate" hidden style="margin-top:12px"><div class="wq-sllabel" style="margin-bottom:7px"><span>زاوية الدوران (عكس الساعة)</span></div>'+
            '<div class="wq-quick"><button type="button" class="wq-qbtn js-rot" data-r="90" aria-pressed="true">٩٠°</button><button type="button" class="wq-qbtn js-rot" data-r="180">١٨٠°</button><button type="button" class="wq-qbtn js-rot" data-r="270">٢٧٠°</button></div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">—</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, OX=150, OY=120, C=14, R=8;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var elMode=q('.js-mode'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var mode='reflect', axis='y', rot=90;
    var dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function sx(x){ return OX+x*C; } function sy(y){ return OY-y*C; }

    function tf(p){
      var x=p[0], y=p[1];
      if(mode==='reflect') return axis==='y'? [-x,y] : [x,-y];
      if(mode==='translate') return [x+(+q('.js-tx').value), y+(+q('.js-ty').value)];
      if(rot===90) return [-y,x]; if(rot===180) return [-x,-y]; return [y,-x];
    }
    function drawPoly(pts,fill,stroke,dash){
      ctx.beginPath(); ctx.moveTo(sx(pts[0][0]),sy(pts[0][1]));
      for(var i=1;i<pts.length;i++) ctx.lineTo(sx(pts[i][0]),sy(pts[i][1]));
      ctx.closePath(); if(fill){ ctx.fillStyle=fill; ctx.fill(); }
      ctx.setLineDash(dash||[]); ctx.strokeStyle=stroke; ctx.lineWidth=2.2; ctx.lineJoin='round'; ctx.stroke(); ctx.setLineDash([]);
    }
    function draw(){
      ctx.clearRect(0,0,W,H);
      ctx.strokeStyle=css('--line','#E7E9F5'); ctx.lineWidth=1;
      for(var i=-R;i<=R;i++){ ctx.beginPath(); ctx.moveTo(sx(i),sy(-R)); ctx.lineTo(sx(i),sy(R)); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(sx(-R),sy(i)); ctx.lineTo(sx(R),sy(i)); ctx.stroke(); }
      // إبراز محور الانعكاس
      ctx.lineWidth=2;
      if(mode==='reflect'){ ctx.strokeStyle=css('--gold','#F4B740'); ctx.lineWidth=3;
        if(axis==='y'){ ctx.beginPath(); ctx.moveTo(sx(0),sy(-R)); ctx.lineTo(sx(0),sy(R)); ctx.stroke(); }
        else { ctx.beginPath(); ctx.moveTo(sx(-R),sy(0)); ctx.lineTo(sx(R),sy(0)); ctx.stroke(); } }
      ctx.strokeStyle=css('--ink-soft','#4A5080'); ctx.lineWidth=1.6;
      ctx.beginPath(); ctx.moveTo(sx(-R),sy(0)); ctx.lineTo(sx(R),sy(0)); ctx.moveTo(sx(0),sy(-R)); ctx.lineTo(sx(0),sy(R)); ctx.stroke();
      // الأصل (متقطّع) والصورة (صلبة)
      drawPoly(SHAPE, null, css('--muted','#7C82A8'), [4,3]);
      var img=SHAPE.map(tf);
      drawPoly(img, css('--subject-soft','#E2F5F5'), css('--subject-deep','#0B7E86'));
    }
    function show(){
      q('.js-cReflect').hidden = mode!=='reflect';
      q('.js-cTranslate').hidden = mode!=='translate';
      q('.js-cRotate').hidden = mode!=='rotate';
    }
    function refresh(){
      q('.js-txv').textContent=sig(+q('.js-tx').value); q('.js-tyv').textContent=sig(+q('.js-ty').value);
      var I=INFO[mode]; elMode.textContent=I.ar; elMode.style.color='var(--subject-deep)';
      elIc.style.background='var(--subject-deep)'; elIc.innerHTML=MOVE;
      elTit.textContent=I.title; elTit.style.color='var(--subject-deep)'; elX.textContent=I.text;
      show(); draw();
    }
    container.querySelectorAll('.wq-quick .wq-qbtn[data-m]').forEach(function(b){ b.onclick=function(){ mode=b.getAttribute('data-m');
      container.querySelectorAll('.wq-qbtn[data-m]').forEach(function(x){ x.setAttribute('aria-pressed', x===b); }); refresh(); }; });
    container.querySelectorAll('.js-ax').forEach(function(b){ b.onclick=function(){ axis=b.getAttribute('data-ax');
      container.querySelectorAll('.js-ax').forEach(function(x){ x.setAttribute('aria-pressed', x===b); }); draw(); }; });
    container.querySelectorAll('.js-rot').forEach(function(b){ b.onclick=function(){ rot=+b.getAttribute('data-r');
      container.querySelectorAll('.js-rot').forEach(function(x){ x.setAttribute('aria-pressed', x===b); }); draw(); }; });
    q('.js-tx').addEventListener('input', refresh); q('.js-ty').addEventListener('input', refresh);
    q('.js-reset').onclick=function(){ mode='reflect'; axis='y'; rot=90; q('.js-tx').value=4; q('.js-ty').value=-2;
      container.querySelectorAll('.wq-qbtn[data-m]').forEach(function(x){ x.setAttribute('aria-pressed', x.getAttribute('data-m')==='reflect'); });
      container.querySelectorAll('.js-ax').forEach(function(x){ x.setAttribute('aria-pressed', x.getAttribute('data-ax')==='y'); });
      container.querySelectorAll('.js-rot').forEach(function(x){ x.setAttribute('aria-pressed', x.getAttribute('data-r')==='90'); });
      refresh(); };
    q('.js-txv').style.direction=q('.js-tyv').style.direction='ltr';
    q('.js-txv').style.unicodeBidi=q('.js-tyv').style.unicodeBidi='isolate';
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
