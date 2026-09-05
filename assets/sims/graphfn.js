/* ============================================================
   محاكاة تفاعلية — تمثيل المعادلة الخطية بيانيًّا (جدول القيم)
   نختار قيمًا لـ س ونحسب ص من ص = م س + ب، فنحصل على أزواج (س، ص)
   نرسمها نقاطًا ونصلها بمستقيم. نقطتان تكفيان، والثالثة للتحقّق.
   الاستعمال من المحرّك:  window.SIMS['graphfn'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['graphfn'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19 20 5"/><circle cx="7" cy="16.25" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="17" cy="7.75" r="1.6"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  function sig(n){ return (n<0?'−':'')+toAr(Math.abs(n)); }
  function eqTxt(m,b){ var mp=m===1?'س':(m===-1?'−س':sig(m)+'س'), bp=b===0?'':(b>0?' + '+toAr(b):' − '+toAr(-b));
    return m===0?('ص = '+sig(b)):('ص = '+mp+bp); }

  var XS=[-2,-1,0,1,2];
  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="تمثيل المعادلة الخطية نقاطًا ومستقيمًا">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="نقاط جدول القيم على مستقيم"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">المعادلة:</span><span class="wq-val js-eq">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>الميل (م)</span><b class="js-mv">١</b></div><input type="range" class="wq-range warm js-m" min="-3" max="3" value="1" step="1"></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>المقطع الصاديّ (ب)</span><b class="js-bv">١</b></div><input type="range" class="wq-range cool js-b" min="-6" max="6" value="1" step="1"></div>'+
          '<div class="wq-eq"><span class="wq-eqt">جدول القيم</span><div class="wq-eqv"><div class="js-tbl" style="direction:ltr"></div></div></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">نوع التمثيل</div><div class="wq-v js-kind">خطٌّ مستقيم</div></div>'+
          '<div class="wq-read"><div class="wq-k">يكفي لرسمه</div><div class="wq-v js-need">نقطتان</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">من الجدول إلى الرسم</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, OX=150, OY=120, C=17, R=6;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var mIn=q('.js-m'), bIn=q('.js-b');
    var elEq=q('.js-eq'), elIc=q('.js-ic'), elX=q('.js-etext');
    var dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function sx(x){ return OX+x*C; } function sy(y){ return OY-y*C; }

    function draw(){
      var m=+mIn.value, b=+bIn.value;
      ctx.clearRect(0,0,W,H);
      ctx.strokeStyle=css('--line','#E7E9F5'); ctx.lineWidth=1;
      for(var i=-R;i<=R;i++){ ctx.beginPath(); ctx.moveTo(sx(i),sy(-R)); ctx.lineTo(sx(i),sy(R)); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(sx(-R),sy(i)); ctx.lineTo(sx(R),sy(i)); ctx.stroke(); }
      ctx.strokeStyle=css('--ink-soft','#4A5080'); ctx.lineWidth=2;
      ctx.beginPath(); ctx.moveTo(sx(-R),sy(0)); ctx.lineTo(sx(R),sy(0)); ctx.moveTo(sx(0),sy(-R)); ctx.lineTo(sx(0),sy(R)); ctx.stroke();
      // المستقيم
      ctx.save(); ctx.beginPath(); ctx.rect(sx(-R),sy(R),2*R*C,2*R*C); ctx.clip();
      ctx.strokeStyle=css('--subject','#0FA3AA'); ctx.lineWidth=2.5;
      ctx.beginPath(); ctx.moveTo(sx(-R),sy(m*-R+b)); ctx.lineTo(sx(R),sy(m*R+b)); ctx.stroke();
      // نقاط جدول القيم
      for(var k=0;k<XS.length;k++){ var x=XS[k], y=m*x+b; if(Math.abs(y)>R) continue;
        ctx.fillStyle=css('--ember','#F2892E'); ctx.beginPath(); ctx.arc(sx(x),sy(y),4.5,0,6.2832); ctx.fill();
        ctx.strokeStyle='#fff'; ctx.lineWidth=1.4; ctx.stroke(); }
      ctx.restore();
    }
    function table(m,b){
      var cell='style="border:1px solid '+css('--line-strong','#D6D9EC')+';padding:3px 7px;text-align:center;min-width:26px"';
      var hd='style="border:1px solid '+css('--line-strong','#D6D9EC')+';padding:3px 7px;text-align:center;font-weight:800;background:'+css('--surface-2','#FBFBFE')+'"';
      var r1='<tr><td '+hd+'>س</td>', r2='<tr><td '+hd+'>ص</td>';
      XS.forEach(function(x){ r1+='<td '+cell+'>'+sig(x)+'</td>'; r2+='<td '+cell+'>'+sig(m*x+b)+'</td>'; });
      return '<table style="border-collapse:collapse;margin:2px auto;font-size:13px;font-weight:600">'+r1+'</tr>'+r2+'</tr></table>';
    }
    function refresh(){
      var m=+mIn.value, b=+bIn.value;
      q('.js-mv').textContent=sig(m); q('.js-bv').textContent=sig(b);
      elEq.textContent=eqTxt(m,b);
      q('.js-tbl').innerHTML=table(m,b);
      elIc.style.background=css('--subject-deep','#0B7E86'); elIc.innerHTML=ICN;
      elX.innerHTML='نختارُ قيمًا لـ <b>س</b> (جدول القيم) ونحسبُ <b>ص = م س + ب</b>، فنحصلُ على أزواج <b>(س، ص)</b> نرسمُها نقاطًا (البرتقالية). المعادلةُ خطّية، فالنقاطُ تقعُ على <b>خطٍّ مستقيم</b>؛ و<b>نقطتان</b> تكفيان لرسمه والثالثةُ للتحقّق.';
      draw();
    }
    [mIn,bIn].forEach(function(el){ el.addEventListener('input', refresh); });
    q('.js-reset').onclick=function(){ mIn.value=1; bIn.value=1; refresh(); };
    ['.js-mv','.js-bv','.js-eq'].forEach(function(s){ var e=q(s); e.style.direction='ltr'; e.style.unicodeBidi='isolate'; });
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
