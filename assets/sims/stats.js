/* ============================================================
   محاكاة تفاعلية — الإحصاء: خطّ النقاط ومقاييس النزعة المركزية
   انقرْ فوق قيمةٍ لإضافة نقطة (أو انقرْ نقطةً لحذفها)، وتابعْ تغيّر
   المتوسط والوسيط والمنوال والمدى مباشرةً على البيانات.
   الاستعمال من المحرّك:  window.SIMS['stats'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['stats'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 20h16"/><circle cx="8" cy="8" r="1.6"/><circle cx="8" cy="13" r="1.6"/><circle cx="13" cy="13" r="1.6"/><circle cx="17" cy="10" r="1.6"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  function arNum(x){ var r=Math.round(x*10)/10; return toAr(String(r)).replace(/\./g,'٫'); }

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="خطّ نقاط للبيانات">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="خطّ نقاط مع المتوسط والوسيط"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">المتوسط:</span><span class="wq-val js-mean">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sllabel"><span>انقرِ الرسمَ لإضافة/حذف نقطة</span></div>'+
          '<div class="wq-quick"><button type="button" class="wq-qbtn js-p" data-p="a" aria-pressed="true">بيانات ١</button><button type="button" class="wq-qbtn js-p" data-p="b">بيانات ٢</button><button type="button" class="wq-tool js-clear" style="flex:1">مسح</button></div>'+
          '<div class="wq-eq"><span class="wq-eqt">المدى = الأكبر − الأصغر</span><div class="wq-eqv"><span class="js-range">—</span></div></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">الوسيط</div><div class="wq-v js-median">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">المنوال</div><div class="wq-v js-mode">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">مقاييس النزعة المركزية</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, LO=1, HI=10, X0=42, X1=286, BASE=182, DY=15, RAD=6.5;
  var PRESETS={ a:[3,5,5,6,7,8,9], b:[2,4,4,4,6,7,9,10] };
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var qa=function(s){ return Array.prototype.slice.call(container.querySelectorAll(s)); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var elMean=q('.js-mean'), elIc=q('.js-ic'), elX=q('.js-etext');
    var data=PRESETS.a.slice(), preset='a', dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function X(v){ return X0+(v-LO)/(HI-LO)*(X1-X0); }
    function drawNum(x,y,str,col){ ctx.fillStyle=col; ctx.save(); ctx.textBaseline='middle'; ctx.textAlign='center'; ctx.direction='ltr'; ctx.fillText(str,x,y); ctx.restore(); }
    function stat(){ if(!data.length) return {mean:0,median:0,mode:'—',range:0};
      var s=data.slice().sort(function(a,b){return a-b;}), sum=s.reduce(function(a,b){return a+b;},0);
      var mean=sum/s.length, n=s.length, median=n%2?s[(n-1)/2]:(s[n/2-1]+s[n/2])/2, range=s[n-1]-s[0];
      var cnt={},best=0,modes=[]; s.forEach(function(v){ cnt[v]=(cnt[v]||0)+1; if(cnt[v]>best) best=cnt[v]; });
      for(var k in cnt) if(cnt[k]===best) modes.push(+k);
      var mode = best<=1 ? 'لا منوال' : modes.map(toAr).join('، ');
      return {mean:mean,median:median,mode:mode,range:range}; }

    function draw(){
      ctx.clearRect(0,0,W,H);
      // خطّ الأعداد
      ctx.strokeStyle=css('--ink-soft','#4A5080'); ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(X0-6,BASE); ctx.lineTo(X1+6,BASE); ctx.stroke();
      ctx.font='600 10px "IBM Plex Sans Arabic",sans-serif';
      for(var v=LO;v<=HI;v++){ ctx.strokeStyle=css('--line-strong','#D6D9EC'); ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(X(v),BASE-3); ctx.lineTo(X(v),BASE+3); ctx.stroke();
        drawNum(X(v),BASE+14,toAr(v),css('--muted','#7C82A8')); }
      // النقاط مكدّسة
      var cnt={}; data.forEach(function(v){ cnt[v]=(cnt[v]||0); var k=cnt[v]++; ctx.fillStyle=css('--subject','#0FA3AA');
        ctx.beginPath(); ctx.arc(X(v),BASE-12-k*DY,RAD,0,6.2832); ctx.fill(); ctx.strokeStyle='#fff'; ctx.lineWidth=1.4; ctx.stroke(); });
      // المتوسط (مثلّث) والوسيط (خطّ)
      var S=stat();
      if(data.length){ ctx.fillStyle=css('--ember','#F2892E'); var mx=X(S.mean);
        ctx.beginPath(); ctx.moveTo(mx,BASE+2); ctx.lineTo(mx-6,BASE+13); ctx.lineTo(mx+6,BASE+13); ctx.closePath(); ctx.fill();
        ctx.strokeStyle=css('--ember','#F2892E'); ctx.lineWidth=1.6; ctx.setLineDash([3,3]); ctx.beginPath(); ctx.moveTo(mx,30); ctx.lineTo(mx,BASE); ctx.stroke(); ctx.setLineDash([]);
        var vx=X(S.median); ctx.strokeStyle=css('--brand','#4B45C6'); ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(vx,34); ctx.lineTo(vx,BASE); ctx.stroke();
        ctx.font='700 9px "IBM Plex Sans Arabic",sans-serif'; drawNum(mx,24,'متوسط',css('--ember-deep','#E4681B')); drawNum(vx,44,'وسيط',css('--brand','#4B45C6'));
      }
    }
    function refresh(){
      var S=stat();
      elMean.textContent=arNum(S.mean); elMean.style.color=css('--ember-deep','#E4681B');
      q('.js-median').textContent=arNum(S.median); q('.js-mode').textContent=S.mode; q('.js-range').textContent=toAr(S.range);
      qa('.js-p').forEach(function(b){ b.setAttribute('aria-pressed', b.getAttribute('data-p')===preset?'true':'false'); });
      elIc.style.background=css('--subject-deep','#0B7E86'); elIc.innerHTML=ICN;
      elX.innerHTML='<b>المتوسط</b> = مجموعُ القيم ÷ عددها (المثلّث البرتقاليّ). <b>الوسيط</b> = القيمةُ الوسطى بعد الترتيب (الخطّ البنفسجيّ). <b>المنوال</b> = الأكثرُ تكرارًا. <b>المدى</b> = الأكبر − الأصغر. أضِفْ نقطةً متطرّفة وشاهدْ كيف يتأثّر المتوسطُ أكثرَ من الوسيط.';
      draw();
    }
    cv.addEventListener('click', function(e){
      var r=cv.getBoundingClientRect(), cx=(e.clientX-r.left)*(W/r.width), cy=(e.clientY-r.top)*(H/r.height);
      var v=Math.round((cx-X0)/(X1-X0)*(HI-LO))+LO; if(v<LO||v>HI) return;
      // حذف إن نُقِرت نقطة موجودة لتلك القيمة
      var k=data.filter(function(d){return d===v;}).length;
      for(var i=0;i<k;i++){ if(Math.abs(cy-(BASE-12-i*DY))<RAD+3){ var idx=data.indexOf(v); if(idx>=0) data.splice(idx,1); refresh(); return; } }
      if(k<9){ data.push(v); refresh(); }
    });
    qa('.js-p').forEach(function(b){ b.addEventListener('click', function(){ preset=b.getAttribute('data-p'); data=PRESETS[preset].slice(); refresh(); }); });
    q('.js-clear').onclick=function(){ data=[]; refresh(); };
    q('.js-reset').onclick=function(){ preset='a'; data=PRESETS.a.slice(); refresh(); };
    ['.js-median','.js-mode','.js-range'].forEach(function(s){ var e=q(s); e.style.direction='ltr'; e.style.unicodeBidi='isolate'; });
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
