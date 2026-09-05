/* ============================================================
   محاكاة تفاعلية — المحاليل والذائبية
   أضِف المذابَ إلى الماء وارفعِ الحرارة: يذوب حتى حدّ الذائبية،
   فإن زدتَ ترسّب الفائض (محلولٌ مشبع). والذائبيةُ تزيد بالحرارة.
   الاستعمال من المحرّك:  window.SIMS['solutions'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['solutions'] = (function(){

  var DROP='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3s6 6.4 6 11a6 6 0 0 1-12 0c0-4.6 6-11 6-11z"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }

  var STATES={
    water:{ ar:'ماءٌ نقيّ', col:'var(--muted)', title:'ماءٌ نقيّ (مذيب)',
      text:'الماءُ هو المذيبُ. أضِف المذابَ ليبدأ الذوبان.' },
    unsat:{ ar:'محلولٌ غير مشبع', col:'var(--subject-deep)', title:'محلولٌ غير مشبع',
      text:'كلُّ المذابِ ذاب في الماء ولم يبلغ حدَّ الذائبية بعد، فيمكن إذابةُ المزيد. تتوزّع جسيماتُ المذاب بين جسيمات الماء.' },
    sat:{ ar:'محلولٌ مشبع', col:'var(--ember-deep)', title:'محلولٌ مشبع — ترسّبَ الفائض',
      text:'بلغ المحلولُ حدَّ الذائبية عند هذه الحرارة، فلم يعد يقبل المزيد؛ والفائضُ يترسّبُ في القاع. ارفعِ الحرارةَ لتزيدَ الذائبيةَ فيذوبَ أكثر.' }
  };

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="كأس ماء يذوب فيه مذاب">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="كأس ماء فيه مذاب ذائب وراسب"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">الحالة:</span><span class="wq-val js-state">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>كمية المذاب المضاف</span><b><span class="js-sv">١٥</span> جم</b></div>'+
            '<input type="range" class="wq-range cool js-solute" min="0" max="60" value="15" step="1" aria-label="كمية المذاب"></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>درجة الحرارة</span><b><span class="js-tv">٢٠</span> °س</b></div>'+
            '<input type="range" class="wq-range volt js-temp" min="0" max="100" value="20" step="5" aria-label="درجة الحرارة"></div>'+
          '<div class="wq-eq"><span class="wq-eqt">حدّ الذائبية عند هذه الحرارة</span><div class="wq-eqv"><span class="js-lim">—</span> جم</div></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">الذائب</div><div class="wq-v"><span class="js-dis">—</span><small> جم</small></div></div>'+
          '<div class="wq-read"><div class="wq-k">الراسب (فائض)</div><div class="wq-v"><span class="js-exc">—</span><small> جم</small></div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">—</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var sIn=q('.js-solute'), tIn=q('.js-temp');
    var elState=q('.js-state'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var cur='', dots=[];
    for(var i=0;i<40;i++) dots.push([Math.random(),Math.random()]);
    var dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }

    function model(){ var added=+sIn.value, lim=Math.round(20+(+tIn.value)*0.3), dis=Math.min(added,lim), exc=added-dis;
      return { added:added, lim:lim, dis:dis, exc:exc }; }

    function draw(){
      var m=model();
      ctx.clearRect(0,0,W,H);
      var bx0=100,bx1=200,by0=26,by1=200,ly=64;
      // الماء + تلوّن حسب التركيز
      ctx.fillStyle='rgba(15,163,170,'+(0.10+0.5*Math.min(m.dis/60,1))+')'; ctx.fillRect(bx0,ly,bx1-bx0,by1-ly);
      // جسيمات المذاب الذائبة (منتشرة)
      var nd=Math.round(Math.min(m.dis,40)); ctx.fillStyle=css('--subject-deep','#0B7E86');
      for(var i=0;i<nd;i++){ var p=dots[i]; ctx.beginPath(); ctx.arc(bx0+6+p[0]*(bx1-bx0-12), ly+6+p[1]*(by1-ly-16), 2.4, 0,6.2832); ctx.fill(); }
      // الراسب في القاع (كومة)
      if(m.exc>0){ var ph=Math.min(m.exc*1.6,40); ctx.fillStyle=css('--ink-soft','#4A5080');
        ctx.beginPath(); ctx.moveTo(bx0+8,by1); ctx.quadraticCurveTo(150,by1-ph,bx1-8,by1); ctx.closePath(); ctx.fill(); }
      // الكأس
      ctx.strokeStyle=css('--line-strong','#D6D9EC'); ctx.lineWidth=3; ctx.lineCap='round';
      ctx.beginPath(); ctx.moveTo(bx0,by0); ctx.lineTo(bx0,by1); ctx.lineTo(bx1,by1); ctx.lineTo(bx1,by0); ctx.stroke();
      // مقياس حرارة مبسّط
      var tf=(+tIn.value)/100; ctx.fillStyle=css('--surface-2','#FBFBFE'); ctx.strokeStyle=css('--line-strong','#D6D9EC'); ctx.lineWidth=1.5;
      ctx.beginPath(); ctx.roundRect(232,40,12,150,6); ctx.fill(); ctx.stroke();
      ctx.fillStyle='rgb('+(244*tf+59*(1-tf)|0)+','+(137*tf+111*(1-tf)|0)+','+(46*tf+224*(1-tf)|0)+')';
      ctx.beginPath(); ctx.roundRect(234,190-140*tf,8,140*tf+6,4); ctx.fill();
      ctx.font='700 10px "IBM Plex Sans Arabic",sans-serif'; ctx.fillStyle=css('--muted','#7C82A8'); ctx.textAlign='center'; ctx.textBaseline='top';
      ctx.fillText('🌡', 238, 22);
    }
    function refresh(){
      var m=model();
      q('.js-sv').textContent=toAr(m.added); q('.js-tv').textContent=toAr(+tIn.value);
      q('.js-lim').textContent=toAr(m.lim); q('.js-dis').textContent=toAr(m.dis); q('.js-exc').textContent=toAr(m.exc);
      var st = m.added===0?'water':(m.exc>0?'sat':'unsat');
      if(st!==cur){ cur=st; var S=STATES[st];
        elState.textContent=S.ar; elState.style.color=S.col;
        elIc.style.background=S.col; elIc.innerHTML=DROP;
        elTit.textContent=S.title; elTit.style.color=S.col; elX.textContent=S.text; }
      draw();
    }
    sIn.addEventListener('input', refresh); tIn.addEventListener('input', refresh);
    q('.js-reset').onclick=function(){ sIn.value=15; tIn.value=20; refresh(); };
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
