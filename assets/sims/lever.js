/* ============================================================
   محاكاة تفاعلية — الآلات البسيطة: الرافعة
   قوّةٌ صغيرةٌ بعيدةٌ عن المرتكز ترفع حملًا كبيرًا قريبًا منه.
   شرط الاتزان: القوّة × ذراعها = الحمل × ذراعه. والفائدة = ذراع القوّة ÷ ذراع الحمل.
   الاستعمال من المحرّك:  window.SIMS['lever'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['lever'] = (function(){

  var GEAR='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M14 6h7v7"/></svg>';

  var STATES={
    low:{ ar:'الحملُ أثقل', col:'var(--ember-deep)', title:'القوّة غير كافية — لا يرتفع الحمل',
      text:'عزمُ القوّة (القوّة × ذراعها) أقلُّ من عزم الحمل، فيبقى الحملُ في الأسفل. زِد القوّة، أو أبعِدها عن المرتكز لتكبر ذراعُها.' },
    bal:{ ar:'متّزن', col:'var(--subject-deep)', title:'اتّزان — القوّة توازن الحمل',
      text:'عزمُ القوّة يساوي عزمَ الحمل، فالرافعةُ متّزنة. لاحظ أنّ قوّةً صغيرةً بذراعٍ طويلة توازن حملًا كبيرًا بذراعٍ قصيرة.' },
    lift:{ ar:'يرتفع الحمل', col:'var(--s-ar-deep)', title:'القوّة تغلب — يرتفع الحمل',
      text:'عزمُ القوّة أكبرُ من عزم الحمل، فيرتفع الحمل. هذه فائدةُ الرافعة: كلّما زادت ذراعُ القوّة قلّت القوّةُ اللازمة لرفع الحمل نفسه.' }
  };

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="رافعة عليها حمل وقوة">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="رافعة على مرتكز، حمل في جهة وقوة في الأخرى"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">الحالة الآن:</span><span class="wq-val js-state">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>القوّة</span><b><span class="js-fval">٦</span> نيوتن</b></div>'+
            '<input type="range" class="wq-range warm js-f" min="1" max="12" value="6" step="1" aria-label="القوة بالنيوتن"></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>ذراع القوّة (البُعد عن المرتكز)</span><b><span class="js-aval">٣</span> م</b></div>'+
            '<input type="range" class="wq-range cool js-a" min="1" max="6" value="3" step="1" aria-label="ذراع القوة بالمتر"></div>'+
          '<div class="wq-eq"><span class="wq-eqt">شرط الاتزان: القوّة × ذراعها = الحمل × ذراعه</span><div class="wq-eqv"><span class="js-eq">—</span></div></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">عزم القوّة</div><div class="wq-v js-te">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">عزم الحمل</div><div class="wq-v js-tl">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">الفائدة الميكانيكية</div><div class="wq-v js-ma">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">الحمل الثابت</div><div class="wq-v">١٢ ن · ٢ م</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">—</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, PX=150, PY=158, U=17, WL=12, DL=2, HALF=116;
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  function arNum(x){ return toAr(String(Math.round(x*10)/10)).replace(/\./g,'٫'); }

  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var fIn=q('.js-f'), aIn=q('.js-a');
    var elState=q('.js-state'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var reduce=false; try{ reduce=matchMedia('(prefers-reduced-motion:reduce)').matches; }catch(e){}
    var theta=0, curState='';

    var dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var x=getComputedStyle(container).getPropertyValue(n).trim(); return x||fb; }catch(e){ return fb; } }

    function model(){
      var F=+fIn.value, dE=+aIn.value, tE=F*dE, tL=WL*DL;
      var st = Math.abs(tE-tL)<0.5 ? 'bal' : (tE<tL ? 'low' : 'lift');
      var target = Math.max(-0.34,Math.min(0.34,(tE-tL)/70));   // زاوية الميل
      return { F:F, dE:dE, tE:tE, tL:tL, st:st, ma:dE/DL, target:target };
    }
    function rot(x,y){ var c=Math.cos(theta), s=Math.sin(theta); return [PX+(x*c-y*s), PY+(x*s+y*c)]; }

    function draw(M){
      ctx.clearRect(0,0,W,H);
      // القاعدة والمرتكز (مثلّث)
      ctx.fillStyle=css('--ink-soft','#4A5080');
      ctx.beginPath(); ctx.moveTo(PX,PY); ctx.lineTo(PX-16,PY+30); ctx.lineTo(PX+16,PY+30); ctx.closePath(); ctx.fill();
      ctx.fillStyle=css('--line-strong','#D6D9EC'); ctx.fillRect(PX-40,PY+30,80,6);
      // العارضة (تدور حول المرتكز)
      var L=rot(-HALF,0), R=rot(HALF,0);
      ctx.strokeStyle=css('--subject','#0FA3AA'); ctx.lineWidth=8; ctx.lineCap='round';
      ctx.beginPath(); ctx.moveTo(L[0],L[1]); ctx.lineTo(R[0],R[1]); ctx.stroke();
      // الحمل (يسار، على بُعد DL)
      var lp=rot(-DL*U,0);
      ctx.fillStyle=css('--ember','#F2892E');
      roundRect(lp[0]-15,lp[1]-30,30,26,4); ctx.fill();
      ctx.fillStyle='#fff'; ctx.font='800 11px Cairo,sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
      ctx.fillText('١٢ ن', lp[0], lp[1]-17);
      // القوّة (يمين، سهم لأسفل على بُعد dE)
      var rp=rot(M.dE*U,0);
      ctx.strokeStyle=css('--s-ar-deep','#1F7D52'); ctx.fillStyle=css('--s-ar-deep','#1F7D52'); ctx.lineWidth=4; ctx.lineCap='round';
      var ah=14+M.F*2;
      ctx.beginPath(); ctx.moveTo(rp[0],rp[1]-ah); ctx.lineTo(rp[0],rp[1]-6); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(rp[0],rp[1]); ctx.lineTo(rp[0]-6,rp[1]-9); ctx.lineTo(rp[0]+6,rp[1]-9); ctx.closePath(); ctx.fill();
      ctx.font='800 11px Cairo,sans-serif'; ctx.textAlign='center'; ctx.textBaseline='alphabetic';
      ctx.fillText(toAr(M.F)+' ن', rp[0], rp[1]-ah-4);
    }
    function roundRect(x,y,w,h,r){ ctx.beginPath(); ctx.moveTo(x+r,y); ctx.arcTo(x+w,y,x+w,y+h,r); ctx.arcTo(x+w,y+h,x,y+h,r); ctx.arcTo(x,y+h,x,y,r); ctx.arcTo(x,y,x+w,y,r); ctx.closePath(); }

    function refresh(){
      var M=model();
      q('.js-fval').textContent=toAr(M.F);
      q('.js-aval').textContent=toAr(M.dE);
      q('.js-eq').textContent=toAr(M.F)+' × '+toAr(M.dE)+' = '+toAr(M.tE)+'  |  الحمل '+toAr(M.tL);
      q('.js-te').textContent=toAr(M.tE);
      q('.js-tl').textContent=toAr(M.tL);
      q('.js-ma').textContent='×'+arNum(M.ma);
      if(M.st!==curState){
        curState=M.st; var S=STATES[M.st];
        elState.textContent=S.ar; elState.style.color=S.col;
        elIc.style.background=S.col; elIc.innerHTML=GEAR;
        elTit.textContent=S.title; elTit.style.color=S.col; elX.textContent=S.text;
      }
      if(reduce){ theta=M.target; draw(M); }
    }
    function loop(){
      if(!cv.isConnected) return;
      var M=model(); theta+=(M.target-theta)*0.12; draw(M);
      requestAnimationFrame(loop);
    }

    fIn.addEventListener('input', refresh);
    aIn.addEventListener('input', refresh);
    q('.js-reset').onclick=function(){ fIn.value=6; aIn.value=3; refresh(); };

    fit(); theta=model().target; refresh(); draw(model());
    if(!reduce) loop();
    window.addEventListener('resize', fit);
    return { destroy:function(){} };
  }

  return { mount:mount };
})();
