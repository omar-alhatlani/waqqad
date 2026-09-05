/* ============================================================
   محاكاة تفاعلية — عمر النصف (التحلّل الإشعاعي)
   عمرُ النصف هو الزمنُ اللازم لتحلّل نصف كمية العنصر المشعّ. بعد كلِّ
   عمرِ نصفٍ يتبقّى نصفُ الذرّات، وتتحوّل البقيةُ إلى الناتج.
   الاستعمال من المحرّك:  window.SIMS['halflife'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['halflife'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="3"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  function pct(x){ return toAr(String(Math.round(x*10)/10)).replace(/\./g,'٫'); }

  // إسنادُ «عمرِ التحلّل» لكلِّ ذرّة بحيث يتبقّى ٦٤/٢^h بعد h عمرَ نصف
  var TH=[]; [[1,32],[2,16],[3,8],[4,4],[5,2],[6,1],[7,1]].forEach(function(p){ for(var i=0;i<p[1];i++) TH.push(p[0]); });
  var ATOM=new Array(64); for(var k=0;k<64;k++){ ATOM[(k*37+13)%64]=TH[k]; }

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="شبكة ذرّات تتحلّل مع مرور أعمار النصف">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="ذرّات العنصر المشعّ يتحلّل نصفها كل عمر نصف"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">المتبقّي:</span><span class="wq-val js-pct">١٠٠٪</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>أعمار النصف المنقضية</span><b class="js-hv">٠</b></div><input type="range" class="wq-range volt js-h" min="0" max="6" value="0" step="1"></div>'+
          '<div class="wq-eq"><span class="wq-eqt">القاعدة</span><div class="wq-eqv"><span class="js-rule">المتبقّي = الأصل × (½)^عدد أعمار النصف</span></div></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">ذرّات باقية</div><div class="wq-v js-left">٦٤ / ٦٤</div></div>'+
          '<div class="wq-read"><div class="wq-k">ذرّات متحلّلة</div><div class="wq-v js-dec">٠ / ٦٤</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">عمر النصف</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, COLS=8, ROWS=8, GX=50, GY=18, STEP=25;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var hIn=q('.js-h'), elPct=q('.js-pct'), elIc=q('.js-ic'), elX=q('.js-etext');
    var dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }

    function draw(h){
      ctx.clearRect(0,0,W,H);
      var em=css('--ember','#F2892E'), emd=css('--ember-deep','#E4681B'), mu=css('--line-strong','#D6D9EC'), mud=css('--muted','#7C82A8');
      for(var i=0;i<64;i++){ var r=Math.floor(i/COLS), c=i%COLS, x=GX+c*STEP, y=GY+r*STEP, decayed=ATOM[i]<=h;
        if(decayed){ ctx.fillStyle=css('--surface-2','#FBFBFE'); ctx.beginPath(); ctx.arc(x,y,6,0,6.2832); ctx.fill();
          ctx.strokeStyle=mu; ctx.lineWidth=1.4; ctx.stroke();
          ctx.fillStyle=mud; ctx.beginPath(); ctx.arc(x,y,2,0,6.2832); ctx.fill(); }
        else { ctx.fillStyle=em; ctx.beginPath(); ctx.arc(x,y,8.5,0,6.2832); ctx.fill();
          ctx.strokeStyle=emd; ctx.lineWidth=1.5; ctx.stroke();
          ctx.fillStyle='rgba(255,255,255,.55)'; ctx.beginPath(); ctx.arc(x-2.4,y-2.6,2.4,0,6.2832); ctx.fill(); } }
    }
    function refresh(){
      var h=+hIn.value, left=0; for(var i=0;i<64;i++) if(ATOM[i]>h) left++;
      var p=100/Math.pow(2,h);
      q('.js-hv').textContent=toAr(h);
      elPct.textContent=pct(p)+'٪'; elPct.style.color=css('--ember-deep','#E4681B');
      q('.js-left').textContent=toAr(left)+' / ٦٤';
      q('.js-dec').textContent=toAr(64-left)+' / ٦٤';
      elIc.style.background=css('--ember-deep','#E4681B'); elIc.innerHTML=ICN;
      elX.innerHTML='بعد <b>كلِّ عمرِ نصف</b> يتحلّلُ <b>نصفُ</b> الذرّات الباقية (البرتقالية) ويتحوّلُ إلى الناتج (الرمادية). فالمتبقّي: ١٠٠٪ ← ٥٠٪ ← ٢٥٪ ← ١٢٫٥٪ … مهما كانت الكميةُ الأصلية. هنا بعد <b>'+toAr(h)+'</b> عمرَ نصفٍ بقيت <b>'+toAr(left)+'</b> من ٦٤ ذرّة.';
      draw(h);
    }
    hIn.addEventListener('input', refresh);
    q('.js-reset').onclick=function(){ hIn.value=0; refresh(); };
    q('.js-hv').style.direction='ltr'; q('.js-hv').style.unicodeBidi='isolate';
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
