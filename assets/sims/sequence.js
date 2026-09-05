/* ============================================================
   محاكاة تفاعلية — المتتابعات الحسابية كدوال خطية
   حدٌّ أوّلٌ وأساسٌ ثابت: كلُّ حدٍّ = السابق + الأساس. تُرسم الحدود
   نقاطًا تقعُ على خطٍّ مستقيمٍ ميلُه = الأساس (دالة خطية).
   الاستعمال من المحرّك:  window.SIMS['sequence'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['sequence'] = (function(){

  var SEQ='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="19" r="1.6"/><circle cx="11" cy="14" r="1.6"/><circle cx="17" cy="9" r="1.6"/><path d="M5 19 21 5" stroke-dasharray="2 2"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  function sig(n){ return (n<0?'−':'')+toAr(Math.abs(n)); }

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="حدود المتتابعة الحسابية على خط">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="حدود المتتابعة الحسابية نقاطًا على خط مستقيم"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">الحدّ العام:</span><span class="wq-val js-gen" style="font-size:14px">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>الحدّ الأول</span><b class="js-a1v">٣</b></div><input type="range" class="wq-range warm js-a1" min="-8" max="8" value="3" step="1"></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>أساس المتتابعة (الفرق الثابت)</span><b class="js-dv">٢</b></div><input type="range" class="wq-range cool js-d" min="-4" max="4" value="2" step="1"></div>'+
          '<div class="wq-eq"><span class="wq-eqt">الحدّ ن = الحدّ الأول + (ن − ١) × الأساس</span><div class="wq-eqv"><span class="js-eq">—</span></div></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">الحدود الأولى</div><div class="wq-v js-terms" style="font-size:13px">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">الحدّ السادس</div><div class="wq-v js-a6">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">—</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, GX0=44, GX1=286, GY0=34, GYB=198, N=6;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var a1In=q('.js-a1'), dIn=q('.js-d');
    var elGen=q('.js-gen'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var cur='';
    var dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function terms(){ var a1=+a1In.value, d=+dIn.value, t=[]; for(var n=1;n<=N;n++) t.push(a1+(n-1)*d); return t; }
    function drawNum(x,y,str,col,al){ ctx.fillStyle=col; ctx.save(); ctx.textAlign='left'; ctx.textBaseline=al||'alphabetic'; ctx.direction='ltr';
      var ch=str.split(''), ws=ch.map(function(c){return ctx.measureText(c).width;}), tot=ws.reduce(function(a,b){return a+b;},0), lx=x-tot/2;
      for(var i=0;i<ch.length;i++){ ctx.fillText(ch[i],lx,y); lx+=ws[i]; } ctx.restore(); }
    function drawAr(x,y,str,col){ ctx.fillStyle=col; ctx.save(); ctx.textAlign='center'; ctx.textBaseline='alphabetic'; ctx.direction='rtl'; ctx.fillText(str,x,y); ctx.restore(); }

    function draw(){
      var t=terms(), vmax=Math.max.apply(null,t.concat([0])), vmin=Math.min.apply(null,t.concat([0]));
      if(vmax===vmin){ vmax+=1; vmin-=1; } var pad=(vmax-vmin)*0.12; vmax+=pad; vmin-=pad;
      function px(n){ return GX0+(n-0.5)/N*(GX1-GX0); }
      function py(v){ return GYB-(v-vmin)/(vmax-vmin)*(GYB-GY0); }
      ctx.clearRect(0,0,W,H);
      // محاور
      ctx.strokeStyle=css('--ink-soft','#4A5080'); ctx.lineWidth=2;
      ctx.beginPath(); ctx.moveTo(GX0,GY0); ctx.lineTo(GX0,GYB); ctx.lineTo(GX1,GYB); ctx.stroke();
      // خطّ الصفر إن وقع ضمن المجال
      if(0>vmin&&0<vmax){ ctx.strokeStyle=css('--line-strong','#D6D9EC'); ctx.setLineDash([3,3]); ctx.beginPath(); ctx.moveTo(GX0,py(0)); ctx.lineTo(GX1,py(0)); ctx.stroke(); ctx.setLineDash([]); }
      // الخطّ المارّ بالحدود (يبيّن الخطّية)
      ctx.strokeStyle=css('--subject','#0FA3AA'); ctx.lineWidth=2.5; ctx.lineCap='round';
      ctx.beginPath(); ctx.moveTo(px(1),py(t[0])); for(var i=1;i<N;i++) ctx.lineTo(px(i+1),py(t[i])); ctx.stroke();
      // النقاط + القيم + أرقام الحدود
      ctx.font='600 10px "IBM Plex Sans Arabic",sans-serif';
      for(var n=1;n<=N;n++){ var x=px(n), y=py(t[n-1]);
        ctx.fillStyle=css('--ember','#F2892E'); ctx.beginPath(); ctx.arc(x,y,4.5,0,6.2832); ctx.fill();
        drawNum(x, y-9, sig(t[n-1]), css('--ink','#1C2143'));
        drawNum(x, GYB+13, toAr(n), css('--muted','#7C82A8')); }
      drawAr((GX0+GX1)/2, GYB+27, 'رقم الحدّ (ن)', css('--muted','#7C82A8'));
    }
    function refresh(){
      var a1=+a1In.value, d=+dIn.value, t=terms();
      q('.js-a1v').textContent=sig(a1); q('.js-dv').textContent=sig(d);
      q('.js-eq').textContent = sig(a1)+' + (ن − ١) × '+sig(d);
      q('.js-terms').textContent = t.slice(0,5).map(sig).join(' ، ');
      q('.js-a6').textContent = sig(t[5]);
      q('.js-gen').textContent = sig(a1)+' + (ن − ١) × '+sig(d);
      var st = d>0?'up':(d<0?'down':'const');
      if(st!==cur){ cur=st;
        elIc.style.background='var(--subject-deep)'; elIc.innerHTML=SEQ;
        elTit.textContent = d===0?'متتابعةٌ ثابتة':'متتابعةٌ حسابية';
        elTit.style.color='var(--subject-deep)';
        elX.innerHTML='الفرقُ بين كلِّ حدّين متتاليين ثابتٌ ويساوي <b>الأساس ('+sig(d)+')</b>. ولذلك تقعُ الحدودُ على <b>خطٍّ مستقيم</b>: المتتابعةُ الحسابية دالةٌ خطية ميلُها = الأساس، وحدُّها الأولُ يقابلُ نقطةَ البداية.'; }
      draw();
    }
    a1In.addEventListener('input', refresh); dIn.addEventListener('input', refresh);
    q('.js-reset').onclick=function(){ a1In.value=3; dIn.value=2; refresh(); };
    ['.js-a1v','.js-dv','.js-a6','.js-eq','.js-gen'].forEach(function(s){ var e=q(s); e.style.direction='ltr'; e.style.unicodeBidi='isolate'; });
    q('.js-terms').style.direction='rtl';
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
