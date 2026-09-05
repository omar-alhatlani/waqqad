/* ============================================================
   محاكاة تفاعلية — حلّ نظام معادلتين خطيتين بيانيًّا
   خطّان على المستوى: نقطةُ تقاطعهما هي حلُّ النظام. متوازيان ← لا حلّ،
   منطبقان ← ما لا نهاية من الحلول.
   الاستعمال من المحرّك:  window.SIMS['system'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['system'] = (function(){

  var CROSS='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 20 20 4M4 8l16 10"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  function sig(n){ return (n<0?'−':'')+toAr(Math.abs(n)); }
  function arNum(x){ return toAr(String(Math.round(x*100)/100)).replace(/\./g,'٫'); }
  function eqText(m,b){ var mp=m===0?'':(m===1?'س':(m===-1?'−س':sig(m)+'س')), bp=b===0?'':(b>0?' + '+toAr(b):' − '+toAr(-b));
    return m===0?('ص = '+sig(b)):('ص = '+mp+bp); }

  var STATES={
    one:{ ar:'حلٌّ واحد', col:'var(--subject-deep)', title:'حلٌّ واحد — نقطةُ تقاطع',
      text:'يتقاطعُ الخطّان في نقطةٍ واحدة، وهي <b>حلُّ النظام</b>: القيمُ التي تحقّق المعادلتين معًا (ميلاهما مختلفان).' },
    none:{ ar:'لا حلّ', col:'var(--ember-deep)', title:'لا حلّ — خطّان متوازيان',
      text:'للخطّين الميلُ نفسُه والمقطعان مختلفان، فهما <b>متوازيان</b> لا يتقاطعان أبدًا؛ فالنظامُ <b>بلا حلّ</b>.' },
    inf:{ ar:'ما لا نهاية', col:'var(--s-ar-deep)', title:'ما لا نهاية — خطّان منطبقان',
      text:'المعادلتان تمثّلان <b>الخطَّ نفسَه</b> (الميلُ والمقطعُ متطابقان)، فكلُّ نقطةٍ عليه حلٌّ؛ للنظام <b>ما لا نهاية من الحلول</b>.' }
  };

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="خطان على المستوى ونقطة تقاطعهما">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="خطان ونقطة تقاطعهما (حل النظام)"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">النظام:</span><span class="wq-val js-sol">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>ميل الخطّ الأول (م₁)</span><b class="js-m1v">٢</b></div><input type="range" class="wq-range warm js-m1" min="-4" max="4" value="2" step="1"></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>مقطع الخطّ الأول (ب₁)</span><b class="js-b1v">١</b></div><input type="range" class="wq-range warm js-b1" min="-6" max="6" value="1" step="1"></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>ميل الخطّ الثاني (م₂)</span><b class="js-m2v">−١</b></div><input type="range" class="wq-range cool js-m2" min="-4" max="4" value="-1" step="1"></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>مقطع الخطّ الثاني (ب₂)</span><b class="js-b2v">٤</b></div><input type="range" class="wq-range cool js-b2" min="-6" max="6" value="4" step="1"></div>'+
          '<div class="wq-eq"><span class="wq-eqt">معادلتا النظام</span><div class="wq-eqv js-eq" style="direction:rtl;font-size:14px">—</div></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">قيمة س عند الحلّ</div><div class="wq-v js-sx">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">قيمة ص عند الحلّ</div><div class="wq-v js-sy">—</div></div>'+
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
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var m1=q('.js-m1'),b1=q('.js-b1'),m2=q('.js-m2'),b2=q('.js-b2');
    var elSol=q('.js-sol'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var cur='';
    var dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function sx(x){ return OX+x*C; } function sy(y){ return OY-y*C; }
    function solve(){ var M1=+m1.value,B1=+b1.value,M2=+m2.value,B2=+b2.value;
      if(M1===M2) return { kind:(B1===B2?'inf':'none') };
      var x=(B2-B1)/(M1-M2), y=M1*x+B1; return { kind:'one', x:x, y:y }; }
    function line(m,b,col){ ctx.strokeStyle=col; ctx.lineWidth=2.6; ctx.beginPath();
      ctx.moveTo(sx(-R),sy(m*-R+b)); ctx.lineTo(sx(R),sy(m*R+b)); ctx.stroke(); }

    function draw(){
      var M1=+m1.value,B1=+b1.value,M2=+m2.value,B2=+b2.value, s=solve();
      ctx.clearRect(0,0,W,H);
      ctx.strokeStyle=css('--line','#E7E9F5'); ctx.lineWidth=1;
      for(var i=-R;i<=R;i++){ ctx.beginPath(); ctx.moveTo(sx(i),sy(-R)); ctx.lineTo(sx(i),sy(R)); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(sx(-R),sy(i)); ctx.lineTo(sx(R),sy(i)); ctx.stroke(); }
      ctx.strokeStyle=css('--ink-soft','#4A5080'); ctx.lineWidth=2;
      ctx.beginPath(); ctx.moveTo(sx(-R),sy(0)); ctx.lineTo(sx(R),sy(0)); ctx.moveTo(sx(0),sy(-R)); ctx.lineTo(sx(0),sy(R)); ctx.stroke();
      ctx.save(); ctx.beginPath(); ctx.rect(sx(-R),sy(R),2*R*C,2*R*C); ctx.clip();
      line(M1,B1,css('--ember','#F2892E')); if(s.kind!=='inf') line(M2,B2,css('--subject','#0FA3AA'));
      if(s.kind==='one' && Math.abs(s.x)<=R && Math.abs(s.y)<=R){
        ctx.strokeStyle=css('--muted','#7C82A8'); ctx.lineWidth=1.4; ctx.setLineDash([4,3]);
        ctx.beginPath(); ctx.moveTo(sx(s.x),sy(s.y)); ctx.lineTo(sx(s.x),sy(0)); ctx.moveTo(sx(s.x),sy(s.y)); ctx.lineTo(sx(0),sy(s.y)); ctx.stroke(); ctx.setLineDash([]);
        ctx.fillStyle=css('--gold','#F4B740'); ctx.beginPath(); ctx.arc(sx(s.x),sy(s.y),6,0,6.2832); ctx.fill();
        ctx.strokeStyle=css('--ember-deep','#E4681B'); ctx.lineWidth=2; ctx.stroke();
      }
      ctx.restore();
    }
    function refresh(){
      var s=solve();
      q('.js-m1v').textContent=sig(+m1.value); q('.js-b1v').textContent=sig(+b1.value);
      q('.js-m2v').textContent=sig(+m2.value); q('.js-b2v').textContent=sig(+b2.value);
      q('.js-eq').innerHTML = eqText(+m1.value,+b1.value)+'<br>'+eqText(+m2.value,+b2.value);
      q('.js-sx').textContent = s.kind==='one'? arNum(s.x) : '—';
      q('.js-sy').textContent = s.kind==='one'? arNum(s.y) : '—';
      elSol.textContent=STATES[s.kind].ar; elSol.style.color=STATES[s.kind].col;
      if(s.kind!==cur){ cur=s.kind; var S=STATES[s.kind];
        elIc.style.background=S.col; elIc.innerHTML=CROSS;
        elTit.textContent=S.title; elTit.style.color=S.col; elX.innerHTML=S.text; }
      draw();
    }
    [m1,b1,m2,b2].forEach(function(el){ el.addEventListener('input', refresh); });
    q('.js-reset').onclick=function(){ m1.value=2;b1.value=1;m2.value=-1;b2.value=4; refresh(); };
    ['.js-m1v','.js-b1v','.js-m2v','.js-b2v','.js-sx','.js-sy'].forEach(function(sl){ var e=q(sl); e.style.direction='ltr'; e.style.unicodeBidi='isolate'; });
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
