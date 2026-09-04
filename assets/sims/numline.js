/* ============================================================
   محاكاة تفاعلية — خط الأعداد (جمع/طرح الأعداد الصحيحة)
   ابدأ من العدد الأول، ثم اقفز بمقدار العدد الثاني (يمينًا للموجب،
   يسارًا للسالب)، فتصلَ إلى الناتج.
   الاستعمال من المحرّك:  window.SIMS['numline'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['numline'] = (function(){

  var HASH='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 12h18M7 8v8M17 8v8"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  function sig(n){ return (n<0?'−':'')+toAr(Math.abs(n)); }
  function par(n){ return n<0 ? '('+sig(n)+')' : sig(n); }

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="خط الأعداد">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit" style="aspect-ratio:300/200"><canvas class="wq-canvas" role="img" aria-label="خط أعداد بقفزتين موجّهتين"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">الناتج:</span><span class="wq-val js-res">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>العدد الأول</span><b class="js-av">٣</b></div>'+
            '<input type="range" class="wq-range warm js-a" min="-9" max="9" value="3" step="1" aria-label="العدد الأول"></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>العدد الثاني</span><b class="js-bv">٥</b></div>'+
            '<input type="range" class="wq-range cool js-b" min="-9" max="9" value="5" step="1" aria-label="العدد الثاني"></div>'+
          '<div class="wq-quick"><button type="button" class="wq-qbtn" data-op="+" aria-pressed="true">جمع +</button><button type="button" class="wq-qbtn" data-op="-">طرح −</button></div>'+
          '<div class="wq-eq"><span class="wq-eqt">العملية</span><div class="wq-eqv"><span class="js-eq">—</span></div></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">مقدار القفزة</div><div class="wq-v js-jump">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">الناتج</div><div class="wq-v js-r">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">—</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=200, RANGE=18, MY=118;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var aIn=q('.js-a'), bIn=q('.js-b');
    var elRes=q('.js-res'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var op='+', cur='';
    var dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function X(n){ return 22+(n+RANGE)/(2*RANGE)*(W-44); }
    function drawNum(x,y,str){ // رسمٌ حرفيّ LTR لمنع قلب الإشارة السالبة
      ctx.save(); ctx.textAlign='left'; ctx.direction='ltr';
      var ch=str.split(''), ws=ch.map(function(c){return ctx.measureText(c).width;}), tot=ws.reduce(function(a,b){return a+b;},0), lx=x-tot/2;
      for(var i=0;i<ch.length;i++){ ctx.fillText(ch[i],lx,y); lx+=ws[i]; } ctx.restore();
    }

    function draw(){
      var a=+aIn.value, jump=(op==='+'? +bIn.value : -(+bIn.value)), res=a+jump;
      ctx.clearRect(0,0,W,H);
      // الخطّ والعلامات
      ctx.strokeStyle=css('--ink-soft','#4A5080'); ctx.lineWidth=2;
      ctx.beginPath(); ctx.moveTo(X(-RANGE),MY); ctx.lineTo(X(RANGE),MY); ctx.stroke();
      ctx.font='600 9px "IBM Plex Sans Arabic",sans-serif'; ctx.textBaseline='top';
      for(var n=-RANGE;n<=RANGE;n++){ var x=X(n); ctx.strokeStyle=css('--line-strong','#D6D9EC'); ctx.lineWidth=n%5===0?1.6:1;
        ctx.beginPath(); ctx.moveTo(x,MY-(n%5===0?7:4)); ctx.lineTo(x,MY+(n%5===0?7:4)); ctx.stroke();
        if(n%3===0){ ctx.fillStyle=css('--muted','#7C82A8'); drawNum(x,MY+10,sig(n)); } }
      // القفزة الأولى: من ٠ إلى a
      arc(0,a,72,css('--ember','#F2892E'),'العدد الأول');
      // القفزة الثانية: من a إلى الناتج
      arc(a,res,92,css('--subject','#0FA3AA'), (jump>=0?'+':'−')+toAr(Math.abs(jump)));
      // نقطة الناتج
      ctx.fillStyle=css('--ink','#1C2143'); ctx.beginPath(); ctx.arc(X(res),MY,5,0,6.2832); ctx.fill();
      ctx.fillStyle=css('--ink','#1C2143'); ctx.font='800 12px Cairo,sans-serif'; ctx.textBaseline='alphabetic'; drawNum(X(res),MY-14,sig(res));
    }
    function arc(from,to,topY,col,label){
      if(from===to) return;
      var x1=X(from), x2=X(to), mid=(x1+x2)/2, dir=to>from?1:-1;
      ctx.strokeStyle=col; ctx.lineWidth=2.5; ctx.beginPath();
      ctx.moveTo(x1,MY-4); ctx.quadraticCurveTo(mid,topY,x2,MY-6); ctx.stroke();
      // رأس السهم
      ctx.fillStyle=col; ctx.beginPath();
      ctx.moveTo(x2,MY-3); ctx.lineTo(x2-dir*7,MY-11); ctx.lineTo(x2-dir*7,MY-1); ctx.closePath(); ctx.fill();
      ctx.fillStyle=col; ctx.font='700 10px "IBM Plex Sans Arabic",sans-serif'; ctx.textAlign='center'; ctx.textBaseline='alphabetic';
      ctx.fillText(label, mid, topY+ (topY<MY? -2: 0) );
    }

    function refresh(){
      var a=+aIn.value, b=+bIn.value, jump=(op==='+'?b:-b), res=a+jump;
      q('.js-av').textContent=sig(a); q('.js-bv').textContent=sig(b);
      q('.js-eq').textContent=sig(a)+' '+(op==='+'?'+':'−')+' '+par(b)+' = '+sig(res);
      q('.js-jump').textContent=(jump>=0?'+':'−')+toAr(Math.abs(jump));
      q('.js-r').textContent=sig(res);
      elRes.textContent=sig(res); elRes.style.color = res>0?'var(--s-ar-deep)':(res<0?'var(--ember-deep)':'var(--muted)');
      var sameSign=(a>0&&jump>0)||(a<0&&jump<0);
      var st = jump===0?'zero':(sameSign?'same':'diff');
      if(st!==cur){ cur=st;
        elIc.style.background='var(--subject-deep)'; elIc.innerHTML=HASH; elTit.style.color='var(--subject-deep)';
        if(st==='same'){ elTit.textContent='نفس الإشارة — اجمع'; elX.textContent='عند جمع عددين لهما الإشارةُ نفسها: اجمع القيمتين واحتفظ بالإشارة. القفزتان في الاتّجاه نفسه فيبتعد الناتج عن الصفر.'; }
        else if(st==='diff'){ elTit.textContent='إشارتان مختلفتان — اطرح'; elX.textContent='عند جمع عددين مختلفَي الإشارة: اطرح القيمةَ الأصغر من الأكبر، وتكون إشارةُ الناتج إشارةَ الأكبر. القفزتان متعاكستان.'; }
        else { elTit.textContent='قفزةٌ صفرية'; elX.textContent='مقدار القفزة صفر، فيبقى الناتجُ عند العدد الأول نفسه.'; }
      }
      draw();
    }
    aIn.addEventListener('input', refresh); bIn.addEventListener('input', refresh);
    container.querySelectorAll('.wq-qbtn').forEach(function(btn){ btn.onclick=function(){ op=btn.getAttribute('data-op');
      container.querySelectorAll('.wq-qbtn').forEach(function(x){ x.setAttribute('aria-pressed', x===btn); }); refresh(); }; });
    q('.js-reset').onclick=function(){ aIn.value=3; bIn.value=5; op='+'; container.querySelectorAll('.wq-qbtn').forEach(function(x){ x.setAttribute('aria-pressed', x.getAttribute('data-op')==='+'); }); refresh(); };
    q('.js-av').style.direction=q('.js-bv').style.direction='ltr';
    q('.js-av').style.unicodeBidi=q('.js-bv').style.unicodeBidi='isolate';
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
