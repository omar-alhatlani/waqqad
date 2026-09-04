/* ============================================================
   محاكاة تفاعلية — المستوى الإحداثي
   حرّك الإحداثيّين (س، ص) وارسم النقطة، وحدّد رُبعَها أو محورَها.
   الاستعمال من المحرّك:  window.SIMS['coord'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['coord'] = (function(){

  var PIN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.4"/></svg>';

  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  function sig(n){ return (n<0?'−':'')+toAr(Math.abs(n)); }

  function region(x,y){
    if(x===0&&y===0) return 'origin';
    if(x===0) return 'yaxis';
    if(y===0) return 'xaxis';
    if(x>0&&y>0) return 'q1'; if(x<0&&y>0) return 'q2'; if(x<0&&y<0) return 'q3'; return 'q4';
  }
  var INFO={
    origin:{ ar:'نقطة الأصل', col:'var(--muted)', text:'الإحداثيّان صفر (٠، ٠)، وهي نقطةُ تقاطع المحورين: نقطةُ الأصل.' },
    xaxis:{ ar:'على المحور السيني', col:'var(--ember-deep)', text:'الإحداثيُّ الصادي = صفر، فالنقطةُ تقع على المحور الأفقيّ (السيني).' },
    yaxis:{ ar:'على المحور الصادي', col:'var(--s-math-deep)', text:'الإحداثيُّ السيني = صفر، فالنقطةُ تقع على المحور الرأسيّ (الصادي).' },
    q1:{ ar:'الرُّبع الأول', col:'var(--subject-deep)', text:'السيني موجب والصادي موجب (+، +) ← الرُّبعُ الأول (أعلى اليمين).' },
    q2:{ ar:'الرُّبع الثاني', col:'var(--subject-deep)', text:'السيني سالب والصادي موجب (−، +) ← الرُّبعُ الثاني (أعلى اليسار).' },
    q3:{ ar:'الرُّبع الثالث', col:'var(--subject-deep)', text:'السيني سالب والصادي سالب (−، −) ← الرُّبعُ الثالث (أسفل اليسار).' },
    q4:{ ar:'الرُّبع الرابع', col:'var(--subject-deep)', text:'السيني موجب والصادي سالب (+، −) ← الرُّبعُ الرابع (أسفل اليمين).' }
  };

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="مستوى إحداثي ونقطة">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="مستوى إحداثي فيه نقطة محدّدة بإحداثيّيها"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">الموقع:</span><span class="wq-val js-reg">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>الإحداثي السيني (س)</span><b class="js-xv">٣</b></div>'+
            '<input type="range" class="wq-range warm js-x" min="-6" max="6" value="3" step="1" aria-label="الإحداثي السيني"></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>الإحداثي الصادي (ص)</span><b class="js-yv">٢</b></div>'+
            '<input type="range" class="wq-range cool js-y" min="-6" max="6" value="2" step="1" aria-label="الإحداثي الصادي"></div>'+
          '<div class="wq-eq"><span class="wq-eqt">النقطة (س، ص)</span><div class="wq-eqv js-pt">—</div></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">السيني (س)</div><div class="wq-v js-rx">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">الصادي (ص)</div><div class="wq-v js-ry">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">—</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, OX=150, OY=118, C=17;   // الأصل ووحدة الشبكة (بكسل)
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var xIn=q('.js-x'), yIn=q('.js-y');
    var elReg=q('.js-reg'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var cur='';
    var dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }

    function draw(){
      var x=+xIn.value, y=+yIn.value, sx=OX+x*C, sy=OY-y*C;
      ctx.clearRect(0,0,W,H);
      // شبكة
      ctx.strokeStyle=css('--line','#E7E9F5'); ctx.lineWidth=1;
      for(var i=-6;i<=6;i++){ ctx.beginPath(); ctx.moveTo(OX+i*C,OY-6*C); ctx.lineTo(OX+i*C,OY+6*C); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(OX-6*C,OY-i*C); ctx.lineTo(OX+6*C,OY-i*C); ctx.stroke(); }
      // المحاور
      ctx.strokeStyle=css('--ink-soft','#4A5080'); ctx.lineWidth=2;
      ctx.beginPath(); ctx.moveTo(OX-6*C,OY); ctx.lineTo(OX+6*C,OY); ctx.moveTo(OX,OY-6*C); ctx.lineTo(OX,OY+6*C); ctx.stroke();
      ctx.fillStyle=css('--ink-soft','#4A5080'); ctx.font='700 12px Cairo,sans-serif'; ctx.textAlign='center';
      ctx.fillText('س', OX+6*C+2, OY-6); ctx.fillText('ص', OX+10, OY-6*C);
      // خطوط الإسقاط المتقطّعة
      if(!(x===0&&y===0)){
        ctx.strokeStyle=css('--muted','#7C82A8'); ctx.lineWidth=1.4; ctx.setLineDash([4,3]);
        ctx.beginPath(); ctx.moveTo(sx,sy); ctx.lineTo(sx,OY); ctx.moveTo(sx,sy); ctx.lineTo(OX,sy); ctx.stroke(); ctx.setLineDash([]);
      }
      // النقطة
      ctx.fillStyle=css('--ember','#F2892E'); ctx.beginPath(); ctx.arc(sx,sy,6,0,6.2832); ctx.fill();
      ctx.fillStyle='#fff'; ctx.beginPath(); ctx.arc(sx-1.6,sy-1.8,2,0,6.2832); ctx.fill();
      // البطاقة: تُرسم حرفًا حرفًا يسارًا→يمينًا لمنع إعادة ترتيب bidi للأرقام العربية
      ctx.save(); ctx.fillStyle=css('--ink','#1C2143'); ctx.font='800 12px Cairo,sans-serif'; ctx.textAlign='left'; ctx.textBaseline='alphabetic';
      var chars=('('+sig(x)+' ، '+sig(y)+')').split('');
      var ws=chars.map(function(ch){ return ctx.measureText(ch).width; });
      var total=ws.reduce(function(a,b){return a+b;},0);
      var lx=sx-total/2, ly=(sy>OY? sy+18 : sy-11);
      for(var ci=0;ci<chars.length;ci++){ ctx.fillText(chars[ci], lx, ly); lx+=ws[ci]; }
      ctx.restore();
    }
    function refresh(){
      var x=+xIn.value, y=+yIn.value;
      q('.js-xv').textContent=sig(x); q('.js-yv').textContent=sig(y);
      q('.js-rx').textContent=sig(x); q('.js-ry').textContent=sig(y);
      q('.js-pt').innerHTML='(<bdi>'+sig(x)+'</bdi>، <bdi>'+sig(y)+'</bdi>)';
      var r=region(x,y), I=INFO[r];
      elReg.textContent=I.ar; elReg.style.color=I.col;
      if(r!==cur){ cur=r;
        elIc.style.background=I.col; elIc.innerHTML=PIN;
        elTit.textContent=I.ar; elTit.style.color=I.col; elX.textContent=I.text; }
      draw();
    }
    xIn.addEventListener('input', refresh); yIn.addEventListener('input', refresh);
    q('.js-reset').onclick=function(){ xIn.value=3; yIn.value=2; refresh(); };
    ['.js-xv','.js-yv','.js-rx','.js-ry','.js-pt'].forEach(function(s){ var e=q(s); if(e){ e.style.direction='ltr'; e.style.unicodeBidi='isolate'; } });
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
