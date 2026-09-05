/* ============================================================
   محاكاة تفاعلية — كتابة معادلة المستقيم من نقطتين
   من نقطتين نحسبُ الميل م = التغيّر في ص ÷ التغيّر في س، ثم نستعملُ
   صيغةَ النقطة والميل ص − ص١ = م(س − س١)، ونبسّطُها إلى ص = م س + ب.
   الاستعمال من المحرّك:  window.SIMS['writeeq'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['writeeq'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20 20 4"/><circle cx="7" cy="17" r="1.7"/><circle cx="17" cy="7" r="1.7"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  function sig(n){ return (n<0?'−':'')+toAr(Math.abs(n)); }
  function arNum(x){ var r=Math.round(x*100)/100; return (r<0?'−':'')+toAr(String(Math.abs(r))).replace(/\./g,'٫'); }
  function term(m){ if(m===1) return 'س'; if(m===-1) return '−س'; return arNum(m)+'س'; }
  function eqTxt(m,b){ if(m===0) return 'ص = '+arNum(b);
    var bp = b===0?'':(b>0?' + '+arNum(b):' − '+arNum(-b)); return 'ص = '+term(m)+bp; }

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="نقطتان والمستقيم المارّ بهما">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="مستقيم يمرّ بنقطتين معلومتين"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">المعادلة:</span><span class="wq-val js-eq">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>النقطة أ — السيني</span><b class="js-x1v">−٢</b></div><input type="range" class="wq-range warm js-x1" min="-6" max="6" value="-2" step="1"></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>النقطة أ — الصادي</span><b class="js-y1v">−١</b></div><input type="range" class="wq-range warm js-y1" min="-6" max="6" value="-1" step="1"></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>النقطة ب — السيني</span><b class="js-x2v">٢</b></div><input type="range" class="wq-range cool js-x2" min="-6" max="6" value="2" step="1"></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>النقطة ب — الصادي</span><b class="js-y2v">٣</b></div><input type="range" class="wq-range cool js-y2" min="-6" max="6" value="3" step="1"></div>'+
          '<div class="wq-eq"><span class="wq-eqt">صيغة النقطة والميل</span><div class="wq-eqv"><span class="js-ps">—</span></div></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">الميل (م)</div><div class="wq-v js-m">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">المقطع الصاديّ (ب)</div><div class="wq-v js-b">—</div></div>'+
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
    var elEq=q('.js-eq'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var cur='', dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function sx(x){ return OX+x*C; } function sy(y){ return OY-y*C; }
    function pt(x,y,col,lbl){ ctx.fillStyle=col; ctx.beginPath(); ctx.arc(sx(x),sy(y),6,0,6.2832); ctx.fill();
      ctx.fillStyle='#fff'; ctx.font='800 9px Cairo,sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='inherit'; ctx.fillText(lbl,sx(x),sy(y)); }

    function draw(){
      var ax=+x1.value,ay=+y1.value,bx=+x2.value,by=+y2.value,dx=bx-ax,dy=by-ay;
      ctx.clearRect(0,0,W,H);
      ctx.strokeStyle=css('--line','#E7E9F5'); ctx.lineWidth=1;
      for(var i=-R;i<=R;i++){ ctx.beginPath(); ctx.moveTo(sx(i),sy(-R)); ctx.lineTo(sx(i),sy(R)); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(sx(-R),sy(i)); ctx.lineTo(sx(R),sy(i)); ctx.stroke(); }
      ctx.strokeStyle=css('--ink-soft','#4A5080'); ctx.lineWidth=2;
      ctx.beginPath(); ctx.moveTo(sx(-R),sy(0)); ctx.lineTo(sx(R),sy(0)); ctx.moveTo(sx(0),sy(-R)); ctx.lineTo(sx(0),sy(R)); ctx.stroke();
      ctx.save(); ctx.beginPath(); ctx.rect(sx(-R),sy(R),2*R*C,2*R*C); ctx.clip();
      ctx.strokeStyle=css('--subject','#0FA3AA'); ctx.lineWidth=2.5;
      if(dx===0 && dy===0){}
      else if(dx===0){ ctx.beginPath(); ctx.moveTo(sx(ax),sy(-R)); ctx.lineTo(sx(ax),sy(R)); ctx.stroke(); }
      else { var m=dy/dx; ctx.beginPath(); ctx.moveTo(sx(-R),sy(ay+m*(-R-ax))); ctx.lineTo(sx(R),sy(ay+m*(R-ax))); ctx.stroke(); }
      ctx.restore();
      pt(ax,ay,css('--ember','#F2892E'),'أ'); pt(bx,by,css('--subject','#0FA3AA'),'ب');
    }
    function refresh(){
      var ax=+x1.value,ay=+y1.value,bx=+x2.value,by=+y2.value,dx=bx-ax,dy=by-ay;
      q('.js-x1v').textContent=sig(ax); q('.js-y1v').textContent=sig(ay); q('.js-x2v').textContent=sig(bx); q('.js-y2v').textContent=sig(by);
      var st, eqs, ps, mtxt, btxt;
      if(dx===0 && dy===0){ st='same'; eqs='النقطتان منطبقتان'; ps='—'; mtxt='—'; btxt='—'; }
      else if(dx===0){ st='vert'; eqs='س = '+sig(ax); ps='مستقيمٌ رأسيّ'; mtxt='غير معرّف'; btxt='لا يوجد'; }
      else { var m=dy/dx, b=ay-m*ax; st='ok';
        eqs=eqTxt(m,b); mtxt=arNum(m); btxt=arNum(b);
        var yp = ay<0 ? ('ص + '+toAr(-ay)) : (ay===0?'ص':('ص − '+toAr(ay)));
        var xp = ax<0 ? ('(س + '+toAr(-ax)+')') : (ax===0?'س':('(س − '+toAr(ax)+')'));
        var mp = m===1?'':(m===-1?'−':arNum(m));
        ps = yp+' = '+mp+xp; }
      elEq.textContent=eqs;
      q('.js-ps').textContent=ps; q('.js-m').textContent=mtxt; q('.js-b').textContent=btxt;
      if(st!==cur){ cur=st;
        var col = st==='ok'?css('--subject-deep','#0B7E86'):(st==='vert'?css('--brand','#4B45C6'):css('--muted','#7C82A8'));
        elIc.style.background=col; elIc.innerHTML=ICN; elTit.style.color=col;
        if(st==='ok'){ elTit.textContent='من نقطتين إلى معادلة';
          elX.innerHTML='<b>١)</b> الميل م = التغيّر في ص ÷ التغيّر في س. <b>٢)</b> استعملْ صيغةَ النقطة والميل <b>ص − ص١ = م(س − س١)</b> بنقطةٍ منهما. <b>٣)</b> بسّطْ إلى <b>ص = م س + ب</b> (والمقطعُ ب = ص − م س).'; }
        else if(st==='vert'){ elTit.textContent='مستقيمٌ رأسيّ';
          elX.innerHTML='النقطتان لهما السينيُّ نفسُه، فالتغيّرُ في س صفر والميلُ <b>غير معرّف</b>؛ ومعادلةُ المستقيم الرأسيّ هي <b>س = ثابت</b>، ولا يمكن كتابتُها بصيغة ص = م س + ب.'; }
        else { elTit.textContent='حرّكِ النقطتين';
          elX.innerHTML='النقطتان منطبقتان — حرّكْ إحداهما لتحديد مستقيمٍ واحد يمرُّ بهما.'; }
      }
      draw();
    }
    [x1,y1,x2,y2].forEach(function(el){ el.addEventListener('input', refresh); });
    q('.js-reset').onclick=function(){ x1.value=-2;y1.value=-1;x2.value=2;y2.value=3; refresh(); };
    ['.js-x1v','.js-y1v','.js-x2v','.js-y2v','.js-eq','.js-ps','.js-m','.js-b'].forEach(function(s){ var e=q(s); e.style.direction='ltr'; e.style.unicodeBidi='isolate'; });
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
