/* ============================================================
   محاكاة تفاعلية — الكثافة والطفو (ρ = m ÷ V + مبدأ أرخميدس)
   مكعّبٌ في حوضِ مائع: غيّر الكتلة والحجم فتتغيّر الكثافة، ويطفو الجسم
   إن كانت كثافتُه أقلَّ من المائع أو ينغمر إن كانت أكبر. عمقُ الانغمار
   عند الطفو = ρ الجسم ÷ ρ المائع (أرخميدس). وتُبدَّل المائع (ماء/زيت/مالح).
   الاستعمال من المحرّك:  window.SIMS['density'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['density'] = (function(){

  var DROP='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3s6 6.4 6 11a6 6 0 0 1-12 0c0-4.6 6-11 6-11z"/></svg>';

  var FLUIDS=[
    { key:'water', name:'ماء', rho:1.0, fill:'rgba(15,163,170,0.22)', line:'rgba(15,163,170,0.55)' },
    { key:'oil',   name:'زيت', rho:0.9, fill:'rgba(244,183,64,0.30)', line:'rgba(228,104,27,0.5)' },
    { key:'salt',  name:'ماء مالح', rho:1.2, fill:'rgba(59,111,224,0.20)', line:'rgba(59,111,224,0.5)' }
  ];

  var STATES={
    float:{ ar:'يطفو', col:'var(--subject-deep)', title:'يطفو — الكثافة أقلّ من المائع',
      text:'كثافةُ الجسم أقلُّ من كثافة المائع، فينغمر جزءٌ منه فقط يُزيح وزنًا من المائع يساوي وزنَ الجسم كلِّه (مبدأ أرخميدس)، فيتّزن ويطفو.' },
    sink:{ ar:'ينغمر', col:'var(--ember-deep)', title:'ينغمر — الكثافة أكبر من المائع',
      text:'كثافةُ الجسم أكبرُ من كثافة المائع، فوزنُه يفوق أقصى قوّةِ طفوٍ يمكن أن يوفّرها المائع، فيهبط إلى القاع.' },
    suspend:{ ar:'معلّق', col:'var(--cold-deep)', title:'معلّق — الكثافتان متساويتان',
      text:'كثافةُ الجسم تساوي كثافةَ المائع، فقوّةُ الطفو توازن وزنَه تمامًا، فيبقى معلّقًا داخل المائع لا يطفو ولا يهبط.' }
  };

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="حوض مائع وجسم يطفو أو ينغمر">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="مكعّب في حوض مائع يطفو أو ينغمر حسب كثافته"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">الحالة الآن:</span><span class="wq-val js-state">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>كتلة الجسم</span><b><span class="js-mval">٤</span> كجم</b></div>'+
            '<input type="range" class="wq-range warm js-m" min="1" max="24" value="4" step="1" aria-label="كتلة الجسم بالكيلوجرام"></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>حجم الجسم</span><b><span class="js-vval">٨</span> لتر</b></div>'+
            '<input type="range" class="wq-range cool js-v" min="1" max="24" value="8" step="1" aria-label="حجم الجسم باللتر"></div>'+
          '<div class="wq-quick js-fluids"></div>'+
          '<div class="wq-eq"><span class="wq-eqt">الكثافة = الكتلة ÷ الحجم</span><div class="wq-eqv"><span class="js-eq">—</span> كجم/لتر</div></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">كثافة الجسم</div><div class="wq-v"><span class="js-rho">—</span><small> كجم/لتر</small></div></div>'+
          '<div class="wq-read"><div class="wq-k">كثافة المائع</div><div class="wq-v"><span class="js-rhof">—</span><small> كجم/لتر</small></div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">—</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240;
  var TX0=64, TX1=236, TTOP=34, TBOT=214, WL=94;     // الحوض وخطّ الماء
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  function arNum(x){ return toAr(String(x)).replace(/\./g,'٫'); }
  function fmt(x){ return arNum(Math.round(x*100)/100); }

  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var mIn=q('.js-m'), vIn=q('.js-v');
    var elState=q('.js-state'), elIc=q('.js-ic'), elT=q('.js-etitle'), elX=q('.js-etext');
    var reduce=false; try{ reduce=matchMedia('(prefers-reduced-motion:reduce)').matches; }catch(e){}
    var fluidIdx=0, cubeTop=WL, curState='';

    // أزرار المائع
    var fbox=q('.js-fluids');
    FLUIDS.forEach(function(fl,i){
      var b=document.createElement('button'); b.type='button'; b.className='wq-qbtn'; b.textContent=fl.name;
      b.setAttribute('aria-pressed', i===0);
      b.onclick=function(){ fluidIdx=i; refresh(); };
      fbox.appendChild(b);
    });

    var dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(name,fb){ try{ var x=getComputedStyle(container).getPropertyValue(name).trim(); return x||fb; }catch(e){ return fb; } }

    function model(){
      var m=+mIn.value, V=Math.max(+vIn.value,1), rho=m/V, fl=FLUIDS[fluidIdx];
      var st = Math.abs(rho-fl.rho)<0.03 ? 'suspend' : (rho<fl.rho ? 'float' : 'sink');
      var side=30+V*1.5;
      var f = st==='float' ? Math.max(0.06,Math.min(rho/fl.rho,0.97)) : 1;   // نسبة الغمر
      var target;
      if(st==='float') target = WL - side*(1-f);
      else if(st==='suspend') target = WL + (TBOT-WL-side)/2;
      else target = TBOT - side;
      return { m:m, V:V, rho:rho, fl:fl, st:st, side:side, target:target };
    }

    function draw(M){
      ctx.clearRect(0,0,W,H);
      // ماء المائع
      ctx.fillStyle=M.fl.fill; ctx.fillRect(TX0,WL,TX1-TX0,TBOT-WL);
      ctx.strokeStyle=M.fl.line; ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(TX0,WL); ctx.lineTo(TX1,WL); ctx.stroke();
      // المكعّب
      var side=M.side, cx=150, bx=cx-side/2, top=cubeTop;
      ctx.fillStyle=css('--subject-soft','#E2F5F5'); ctx.strokeStyle=css('--subject-deep','#0B7E86'); ctx.lineWidth=2.5;
      roundRect(bx,top,side,side,7); ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(bx,top+side/2); ctx.lineTo(bx+side,top+side/2); ctx.moveTo(cx,top); ctx.lineTo(cx,top+side); ctx.stroke();
      // تظليل الجزء المغمور بلون المائع
      var subTop=Math.max(top,WL), subBot=Math.min(top+side,TBOT);
      if(subBot>subTop){ ctx.save(); roundRect(bx,top,side,side,7); ctx.clip(); ctx.fillStyle=M.fl.fill; ctx.fillRect(bx,subTop,side,subBot-subTop); ctx.restore(); }
      // كتلة الجسم على المكعّب
      ctx.fillStyle=css('--subject-deep','#0B7E86'); ctx.font='800 12px Cairo, sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
      ctx.fillText(toAr(M.m)+' كجم', cx, top+side/2);
      // جدران الحوض (يسار/يمين/قاع)
      ctx.strokeStyle=css('--line-strong','#D6D9EC'); ctx.lineWidth=3; ctx.lineCap='round';
      ctx.beginPath(); ctx.moveTo(TX0,TTOP); ctx.lineTo(TX0,TBOT); ctx.lineTo(TX1,TBOT); ctx.lineTo(TX1,TTOP); ctx.stroke();
    }
    function roundRect(x,y,w,h,r){ ctx.beginPath(); ctx.moveTo(x+r,y); ctx.arcTo(x+w,y,x+w,y+h,r); ctx.arcTo(x+w,y+h,x,y+h,r); ctx.arcTo(x,y+h,x,y,r); ctx.arcTo(x,y,x+w,y,r); ctx.closePath(); }

    function refresh(){
      var M=model();
      q('.js-mval').textContent=toAr(M.m);
      q('.js-vval').textContent=toAr(M.V);
      q('.js-eq').textContent=fmt(M.rho)+' = '+toAr(M.m)+' ÷ '+toAr(M.V);
      q('.js-rho').textContent=fmt(M.rho);
      q('.js-rhof').textContent=arNum(M.fl.rho);
      var qb=container.querySelectorAll('.js-fluids .wq-qbtn');
      for(var i=0;i<qb.length;i++) qb[i].setAttribute('aria-pressed', i===fluidIdx);
      if(M.st!==curState){
        curState=M.st; var S=STATES[M.st];
        elState.textContent=S.ar; elState.style.color=S.col;
        elIc.style.background=S.col; elIc.innerHTML=DROP;
        elT.textContent=S.title; elT.style.color=S.col; elX.textContent=S.text;
      }
      if(reduce){ cubeTop=M.target; draw(M); }
    }

    function loop(){
      if(!cv.isConnected) return;
      var M=model();
      cubeTop += (M.target-cubeTop)*0.12;                 // استقرارٌ سلس نحو موضع الاتّزان
      draw(M);
      requestAnimationFrame(loop);
    }

    mIn.addEventListener('input', refresh);
    vIn.addEventListener('input', refresh);
    q('.js-reset').onclick=function(){ mIn.value=4; vIn.value=8; fluidIdx=0; refresh(); };

    fit();
    cubeTop=model().target;                                // ابدأ من موضع الاتّزان
    refresh();
    if(reduce) draw(model()); else loop();
    window.addEventListener('resize', fit);
    return { destroy:function(){} };
  }

  return { mount:mount };
})();
