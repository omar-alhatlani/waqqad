/* ============================================================
   محاكاة تفاعلية — معدّل التغيّر والميل (بين نقطتين)
   حرّك النقطتين وشاهد المثلث: الميل = التغيّر في ص ÷ التغيّر في س.
   الاستعمال من المحرّك:  window.SIMS['slope'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['slope'] = (function(){

  var LINE='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20 20 4"/><path d="M4 20h8M12 12v8" stroke-dasharray="2 2"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  function sig(n){ return (n<0?'−':'')+toAr(Math.abs(n)); }
  function arNum(x){ return toAr(String(Math.round(x*100)/100)).replace(/\./g,'٫'); }

  var STATES={
    pos:{ ar:'ميلٌ موجب', col:'var(--s-ar-deep)', title:'ميلٌ موجب — خطٌّ صاعد',
      text:'التغيّرُ في ص والتغيّرُ في س لهما الإشارةُ نفسها، فالميلُ موجبٌ والخطُّ يصعد من اليسار إلى اليمين.' },
    neg:{ ar:'ميلٌ سالب', col:'var(--ember-deep)', title:'ميلٌ سالب — خطٌّ هابط',
      text:'إشارتا التغيّر مختلفتان، فالميلُ سالبٌ والخطُّ يهبط من اليسار إلى اليمين.' },
    zero:{ ar:'ميلٌ صفر', col:'var(--muted)', title:'ميلٌ صفر — خطٌّ أفقيّ',
      text:'التغيّرُ في ص صفر (النقطتان على الارتفاع نفسه)، فالميلُ صفرٌ والخطُّ أفقيّ.' },
    undef:{ ar:'ميلٌ غير معرّف', col:'var(--brand)', title:'ميلٌ غير معرّف — خطٌّ رأسيّ',
      text:'التغيّرُ في س صفر (النقطتان على الاستقامة الرأسية نفسها)، والقسمةُ على صفرٍ غيرُ معرّفة، فميلُ الخطّ الرأسيّ غيرُ معرّف.' }
  };

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="نقطتان وخطّ الميل على المستوى">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="نقطتان وخطّ ومثلث الميل"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">الميل:</span><span class="wq-val js-m">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>النقطة أ — السيني</span><b class="js-x1v">١</b></div><input type="range" class="wq-range warm js-x1" min="-6" max="6" value="1" step="1"></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>النقطة أ — الصادي</span><b class="js-y1v">١</b></div><input type="range" class="wq-range warm js-y1" min="-6" max="6" value="1" step="1"></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>النقطة ب — السيني</span><b class="js-x2v">٤</b></div><input type="range" class="wq-range cool js-x2" min="-6" max="6" value="4" step="1"></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>النقطة ب — الصادي</span><b class="js-y2v">٣</b></div><input type="range" class="wq-range cool js-y2" min="-6" max="6" value="3" step="1"></div>'+
          '<div class="wq-eq"><span class="wq-eqt">الميل = التغيّر في ص ÷ التغيّر في س</span><div class="wq-eqv"><span class="js-eq">—</span></div></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">التغيّر في ص</div><div class="wq-v js-dy">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">التغيّر في س</div><div class="wq-v js-dx">—</div></div>'+
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
    var x1=q('.js-x1'),y1=q('.js-y1'),x2=q('.js-x2'),y2=q('.js-y2');
    var elM=q('.js-m'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var cur='';
    var dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function sx(x){ return OX+x*C; } function sy(y){ return OY-y*C; }
    function drawNum(x,y,str,col){ ctx.fillStyle=col; ctx.save(); ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='ltr';
      var ch=str.split(''), ws=ch.map(function(c){return ctx.measureText(c).width;}), tot=ws.reduce(function(a,b){return a+b;},0), lx=x-tot/2;
      ctx.textAlign='left'; for(var i=0;i<ch.length;i++){ ctx.fillText(ch[i],lx,y); lx+=ws[i]; } ctx.restore(); }
    function drawAr(x,y,str,col){ ctx.fillStyle=col; ctx.save(); ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='rtl'; ctx.fillText(str,x,y); ctx.restore(); }

    function draw(){
      var ax=+x1.value,ay=+y1.value,bx=+x2.value,by=+y2.value,dx=bx-ax,dy=by-ay;
      ctx.clearRect(0,0,W,H);
      ctx.strokeStyle=css('--line','#E7E9F5'); ctx.lineWidth=1;
      for(var i=-R;i<=R;i++){ ctx.beginPath(); ctx.moveTo(sx(i),sy(-R)); ctx.lineTo(sx(i),sy(R)); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(sx(-R),sy(i)); ctx.lineTo(sx(R),sy(i)); ctx.stroke(); }
      ctx.strokeStyle=css('--ink-soft','#4A5080'); ctx.lineWidth=2;
      ctx.beginPath(); ctx.moveTo(sx(-R),sy(0)); ctx.lineTo(sx(R),sy(0)); ctx.moveTo(sx(0),sy(-R)); ctx.lineTo(sx(0),sy(R)); ctx.stroke();
      // الخطّ المارّ بالنقطتين
      ctx.save(); ctx.beginPath(); ctx.rect(sx(-R),sy(R),2*R*C,2*R*C); ctx.clip();
      ctx.strokeStyle=css('--subject','#0FA3AA'); ctx.lineWidth=2.5;
      if(dx===0){ ctx.beginPath(); ctx.moveTo(sx(ax),sy(-R)); ctx.lineTo(sx(ax),sy(R)); ctx.stroke(); }
      else { var m=dy/dx; ctx.beginPath(); ctx.moveTo(sx(-R),sy(ay+m*(-R-ax))); ctx.lineTo(sx(R),sy(ay+m*(R-ax))); ctx.stroke(); }
      ctx.restore();
      // مثلث التغيّر (run ثم rise) متقطّع
      if(dx!==0||dy!==0){ ctx.strokeStyle=css('--gold','#F4B740'); ctx.lineWidth=2; ctx.setLineDash([4,3]);
        ctx.beginPath(); ctx.moveTo(sx(ax),sy(ay)); ctx.lineTo(sx(bx),sy(ay)); ctx.lineTo(sx(bx),sy(by)); ctx.stroke(); ctx.setLineDash([]);
        ctx.font='700 10px "IBM Plex Sans Arabic",sans-serif';
        if(dx!==0) drawAr((sx(ax)+sx(bx))/2, sy(ay)+(dy>0?14:-13), 'الأفقيّ = '+sig(dx), css('--ember-deep','#E4681B'));
        if(dy!==0) drawAr(sx(bx)+(bx>=2?-32:34), (sy(ay)+sy(by))/2, 'الرأسيّ = '+sig(dy), css('--subject-deep','#0B7E86')); }
      // النقطتان
      pt(ax,ay,css('--ember','#F2892E'),'أ'); pt(bx,by,css('--subject','#0FA3AA'),'ب');
    }
    function pt(x,y,col,lbl){ ctx.fillStyle=col; ctx.beginPath(); ctx.arc(sx(x),sy(y),6,0,6.2832); ctx.fill();
      ctx.fillStyle='#fff'; ctx.font='800 9px Cairo,sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='inherit'; ctx.fillText(lbl,sx(x),sy(y)); }

    function refresh(){
      var ax=+x1.value,ay=+y1.value,bx=+x2.value,by=+y2.value,dx=bx-ax,dy=by-ay;
      q('.js-x1v').textContent=sig(ax); q('.js-y1v').textContent=sig(ay); q('.js-x2v').textContent=sig(bx); q('.js-y2v').textContent=sig(by);
      q('.js-dy').textContent=sig(dy); q('.js-dx').textContent=sig(dx);
      var st, mtxt;
      if(dx===0){ st='undef'; mtxt='غير معرّف'; }
      else { var m=dy/dx; st = m>0?'pos':(m<0?'neg':'zero'); mtxt=arNum(m); }
      q('.js-eq').textContent = dx===0 ? (sig(dy)+' ÷ ٠ = غير معرّف') : (sig(dy)+' ÷ '+sig(dx)+' = '+mtxt);
      elM.textContent=mtxt; elM.style.color=STATES[st].col;
      if(st!==cur){ cur=st; var S=STATES[st];
        elIc.style.background=S.col; elIc.innerHTML=LINE;
        elTit.textContent=S.title; elTit.style.color=S.col; elX.textContent=S.text; }
      draw();
    }
    [x1,y1,x2,y2].forEach(function(el){ el.addEventListener('input', refresh); });
    q('.js-reset').onclick=function(){ x1.value=1; y1.value=1; x2.value=4; y2.value=3; refresh(); };
    ['.js-x1v','.js-y1v','.js-x2v','.js-y2v','.js-dy','.js-dx','.js-eq'].forEach(function(s){ var e=q(s); e.style.direction='ltr'; e.style.unicodeBidi='isolate'; });
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
