/* ============================================================
   محاكاة تفاعلية — الصيغة العلمية (a × ١٠ⁿ)
   العددُ الكبير جدًّا أو الصغير جدًّا يُكتب a × ١٠ⁿ حيث ١ ≤ a < ١٠.
   الأُسُّ موجبٌ للأعداد الكبيرة، سالبٌ للصغيرة (الكسور).
   الاستعمال من المحرّك:  window.SIMS['scinote'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['scinote'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 12h6M20 6l-4 12"/><path d="M13 7h4v4"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  function sig(n){ return (n<0?'−':'')+toAr(Math.abs(n)); }
  function expand(m,n){ var v=m*Math.pow(10,n); var dec=Math.max(0,1-n); var s=v.toFixed(dec); return toAr(s).replace('.','٫'); }

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="تحويل بين الصيغة العلمية والعدد العاديّ">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="الصيغة العلمية a في عشرة أُسّ n وما يقابلها من عددٍ عاديّ"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">الأُسّ n:</span><span class="wq-val js-exp">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>المعامل a (١ ≤ a < ١٠)</span><b class="js-av">٣٫٢</b></div><input type="range" class="wq-range cool js-a" min="10" max="99" value="32" step="1"></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>الأُسّ n</span><b class="js-nv">٣</b></div><input type="range" class="wq-range warm js-n" min="-4" max="7" value="3" step="1"></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">العدد الكامل</div><div class="wq-v js-full" style="font-size:13px">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">نوع العدد</div><div class="wq-v js-kind" style="font-size:12px">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">الصيغة العلمية</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var aIn=q('.js-a'), nIn=q('.js-n'), elExp=q('.js-exp'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function drawAr(x,y,str,col,f){ ctx.fillStyle=col; ctx.save(); ctx.font=f||'700 10px "IBM Plex Sans Arabic",sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='rtl'; ctx.fillText(str,x,y); ctx.restore(); }
    function drawNum(x,y,str,col,f,al){ ctx.fillStyle=col; ctx.save(); ctx.font=f||'800 12px Poppins,sans-serif'; ctx.textAlign=al||'center'; ctx.textBaseline='middle'; ctx.direction='ltr'; ctx.fillText(str,x,y); ctx.restore(); }

    function draw(){
      var a=(+aIn.value)/10, n=+nIn.value, big=n>=0;
      ctx.clearRect(0,0,W,H);
      var aS=toAr(a).replace('.','٫');
      // الصيغة العلمية (وسط أعلى)
      drawAr(150,26,'الصيغة العلمية',css('--muted','#7C82A8'),'700 10px "IBM Plex Sans Arabic",sans-serif');
      // نرسم كلَّ رمزٍ منفصلًا (تفاديًا لقلب bidi في «رقم × رقم») مع قياس العرض
      ctx.save(); ctx.direction='ltr'; ctx.textAlign='left'; ctx.textBaseline='middle';
      var BF='800 26px Poppins,sans-serif', EF='800 16px Poppins,sans-serif', g=7;
      var toks=[aS,'×','١٠']; ctx.font=BF;
      var ws=toks.map(function(t){ return ctx.measureText(t).width; });
      ctx.font=EF; var we=ctx.measureText(sig(n)).width;
      var total=ws[0]+g+ws[1]+g+ws[2]+3+we, sx=150-total/2, cx=sx;
      ctx.fillStyle=css('--brand-deep','#3833A0');
      ctx.font=BF; ctx.fillText(toks[0],cx,62); cx+=ws[0]+g;
      ctx.fillText(toks[1],cx,62); cx+=ws[1]+g;
      ctx.fillText(toks[2],cx,62); cx+=ws[2]+3;
      ctx.font=EF; ctx.fillStyle= big?css('--s-ar-deep','#1F7D52'):css('--ember-deep','#E4681B'); ctx.fillText(sig(n),cx,50);
      ctx.restore();
      // سهم يساوي
      drawNum(150,92,'=',css('--muted','#7C82A8'),'800 18px Poppins');
      // العدد الكامل
      drawNum(150,120, expand(a,n), css('--ink','#1C2143'), '900 '+(expand(a,n).length>9?16:22)+'px Poppins');
      // حركة الفاصلة
      var dirTxt = n===0 ? 'الفاصلةُ في مكانها (n = ٠)'
        : (big ? 'حرّكِ الفاصلةَ '+toAr(n)+' خاناتٍ يمينًا ← عددٌ كبير'
               : 'حرّكِ الفاصلةَ '+toAr(Math.abs(n))+' خاناتٍ يسارًا ← عددٌ صغير');
      drawAr(150,164, dirTxt, css('--muted','#7C82A8'),'600 10px "IBM Plex Sans Arabic",sans-serif');
      // شارة موجب/سالب
      var badge = big?'أُسٌّ موجب':'أُسٌّ سالب', bc= big?css('--s-ar-deep','#1F7D52'):css('--ember-deep','#E4681B');
      ctx.fillStyle=big?css('--s-ar-soft','#E8F5EE'):css('--ember-soft','#FDECD9'); ctx.beginPath(); ctx.roundRect(112,182,76,22,11); ctx.fill();
      drawAr(150,193,badge,bc,'700 10px "IBM Plex Sans Arabic",sans-serif');
    }
    function refresh(){
      var a=(+aIn.value)/10, n=+nIn.value, big=n>=0;
      q('.js-av').textContent=toAr(a).replace('.','٫');
      q('.js-nv').textContent=sig(n);
      elExp.textContent=sig(n)+' ('+(n>0?'موجب':(n<0?'سالب':'صفر'))+')'; elExp.style.color= big?css('--s-ar-deep','#1F7D52'):css('--ember-deep','#E4681B');
      q('.js-full').textContent=expand(a,n);
      q('.js-kind').textContent = n>0?'عددٌ كبير':(n<0?'عددٌ صغير (كسر)':'عددٌ متوسّط');
      q('.js-kind').style.color = big?css('--s-ar-deep','#1F7D52'):css('--ember-deep','#E4681B');
      elIc.style.background=css('--brand-deep','#3833A0'); elIc.innerHTML=ICN;
      elTit.textContent='الصيغة العلمية';
      elX.innerHTML='<b>الصيغةُ العلمية</b> تكتب العددَ على صورة <b>a × ١٠ⁿ</b> حيث <b>١ ≤ a < ١٠</b>. هنا a = <b>'+(toAr(a).replace('.','٫'))+'</b> والأُسّ n = <b>'+sig(n)+'</b>، فالعددُ = <b>'+expand(a,n)+'</b>. '+(big?'الأعدادُ <b>الكبيرة</b> أُسُّها <b>موجب</b> (نحرّك الفاصلةَ يمينًا).':'الأعدادُ <b>الصغيرة</b> (الكسور) أُسُّها <b>سالب</b> (نحرّك الفاصلةَ يسارًا).');
      draw();
    }
    aIn.addEventListener('input', refresh);
    nIn.addEventListener('input', refresh);
    q('.js-reset').onclick=function(){ aIn.value=32; nIn.value=3; refresh(); };
    q('.js-full').style.direction='ltr'; q('.js-full').style.unicodeBidi='isolate';
    ['.js-av','.js-nv'].forEach(function(sl){ q(sl).style.direction='ltr'; q(sl).style.unicodeBidi='isolate'; });
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
