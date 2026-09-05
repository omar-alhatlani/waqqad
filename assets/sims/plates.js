/* ============================================================
   محاكاة تفاعلية — صفائح الأرض المتحركة
   اختر نوع الحدّ بين صفيحتين، وشاهد اتجاهَ الحركة والظاهرةَ الناتجة:
   متباعدة (قشرةٌ جديدة)، متقاربة (جبال/خنادق)، منزلقة (صدوعٌ وزلازل).
   الاستعمال من المحرّك:  window.SIMS['plates'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['plates'] = (function(){

  var EARTH='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></svg>';
  var P1=[176,141,87], P2=[150,120,72], MAG=[228,104,27], MAGH=[214,60,40];
  function rgb(c){ return 'rgb('+c[0]+','+c[1]+','+c[2]+')'; }

  var TYPES={
    div:{ ar:'حدٌّ متباعد', feat:'قشرةٌ جديدة · مرتفعٌ وسط محيطيّ', title:'الحدود المتباعدة',
      text:'تتباعدُ الصفيحتان فتصعدُ الصهارةُ من الأسفل وتبردُ مكوّنةً <b>قشرةً جديدة</b>؛ ينشأ في المحيطات <b>مرتفعٌ وسط محيطيّ</b>، وفي القارات <b>وادٍ أخدوديّ</b>.' },
    conv:{ ar:'حدٌّ متقارب', feat:'جبالٌ وخنادق · زلازل وبراكين', title:'الحدود المتقاربة',
      text:'تتصادمُ الصفيحتان؛ فإمّا ترتفعُ القشرةُ مكوّنةً <b>سلاسلَ جبلية</b>، أو تنزلقُ إحداهما تحت الأخرى (<b>خندقٌ محيطيّ</b>) مسبّبةً <b>زلازلَ وبراكين</b>.' },
    trans:{ ar:'حدٌّ منزلق (تحويليّ)', feat:'صدوعٌ وزلازل', title:'الحدود المنزلقة',
      text:'تنزلقُ الصفيحتان جانبيًّا إحداهما بمحاذاة الأخرى في اتجاهين متعاكسين، فتتكوّنُ <b>صدوع</b> وتحدثُ <b>زلازل</b>، دون إنتاجِ قشرةٍ جديدةٍ أو تدميرها.' }
  };

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="صفيحتان أرضيتان عند حدّ">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="صفيحتان أرضيتان والظاهرة الناتجة عند الحدّ بينهما"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">الظاهرة:</span><span class="wq-val js-feat" style="font-size:15px">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sllabel" style="margin-bottom:8px"><span>نوع الحدّ بين الصفيحتين</span></div>'+
          '<div class="wq-quick"><button type="button" class="wq-qbtn" data-t="div" aria-pressed="true">متباعد</button><button type="button" class="wq-qbtn" data-t="conv">متقارب</button><button type="button" class="wq-qbtn" data-t="trans">منزلق</button></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read" style="grid-column:1/-1"><div class="wq-k">نوع الحدّ</div><div class="wq-v js-type">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">—</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, CY=140;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var elFeat=q('.js-feat'), elType=q('.js-type'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var type='div', cur='';
    var dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function arrow(x,y,dir,col){ ctx.strokeStyle=col; ctx.fillStyle=col; ctx.lineWidth=4; ctx.lineCap='round';
      var L=26, ex=x+dir[0]*L, ey=y+dir[1]*L;
      ctx.beginPath(); ctx.moveTo(x,y); ctx.lineTo(ex,ey); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(ex+dir[0]*2,ey+dir[1]*2); ctx.lineTo(ex-dir[0]*9-dir[1]*7, ey-dir[1]*9+dir[0]*7); ctx.lineTo(ex-dir[0]*9+dir[1]*7, ey-dir[1]*9-dir[0]*7); ctx.closePath(); ctx.fill(); }

    function draw(){
      ctx.clearRect(0,0,W,H);
      // الوشاح (صهارة) في الأسفل
      ctx.fillStyle=rgb(MAG); ctx.fillRect(0,CY,W,H-CY);
      ctx.fillStyle='rgba(214,60,40,.5)';
      for(var i=0;i<6;i++){ ctx.beginPath(); ctx.arc(30+i*48,H-14-((i%2)*8),9,0,6.2832); ctx.fill(); }
      var top=70, th=CY-top;
      if(type==='div'){
        // صفيحتان متباعدتان + صهارة صاعدة + مرتفع
        ctx.fillStyle=rgb(P1); ctx.fillRect(0,top,120,th);
        ctx.fillStyle=rgb(P2); ctx.fillRect(180,top,120,th);
        ctx.fillStyle=rgb(MAGH); ctx.beginPath(); ctx.moveTo(120,CY); ctx.lineTo(150,top-14); ctx.lineTo(180,CY); ctx.closePath(); ctx.fill();
        arrow(70,top-18,[-1,0],css('--ink','#1C2143')); arrow(230,top-18,[1,0],css('--ink','#1C2143'));
      } else if(type==='conv'){
        ctx.fillStyle=rgb(P1); ctx.fillRect(0,top,152,th);
        ctx.fillStyle=rgb(P2); ctx.fillRect(148,top,152,th);
        // جبال عند الحدّ
        ctx.fillStyle=rgb(P1); ctx.beginPath(); ctx.moveTo(105,top); ctx.lineTo(150,top-34); ctx.lineTo(195,top); ctx.closePath(); ctx.fill();
        ctx.fillStyle=rgb(P2); ctx.beginPath(); ctx.moveTo(140,top); ctx.lineTo(170,top-20); ctx.lineTo(205,top); ctx.closePath(); ctx.fill();
        arrow(80,top-24,[1,0],css('--ink','#1C2143')); arrow(220,top-24,[-1,0],css('--ink','#1C2143'));
      } else {
        ctx.fillStyle=rgb(P1); ctx.fillRect(0,top,150,th);
        ctx.fillStyle=rgb(P2); ctx.fillRect(150,top,150,th);
        // صدع متعرّج عموديّ
        ctx.strokeStyle=css('--ink','#1C2143'); ctx.lineWidth=2.5; ctx.beginPath();
        var y=top; ctx.moveTo(150,top); while(y<CY){ y+=12; ctx.lineTo(150+(y/12%2?6:-6), y); } ctx.stroke();
        arrow(75,top+th/2,[0,-1],css('--ink','#1C2143')); arrow(225,top+th/2,[0,1],css('--ink','#1C2143'));
      }
    }
    function refresh(){
      var T=TYPES[type];
      elFeat.textContent=T.feat; elFeat.style.color='var(--ember-deep)';
      elType.textContent=T.ar;
      elIc.style.background='var(--ember-deep)'; elIc.innerHTML=EARTH;
      elTit.textContent=T.title; elTit.style.color='var(--ember-deep)'; elX.innerHTML=T.text;
      draw();
    }
    container.querySelectorAll('.wq-qbtn').forEach(function(b){ b.onclick=function(){ type=b.getAttribute('data-t');
      container.querySelectorAll('.wq-qbtn').forEach(function(x){ x.setAttribute('aria-pressed', x===b); }); refresh(); }; });
    q('.js-reset').onclick=function(){ type='div'; container.querySelectorAll('.wq-qbtn').forEach(function(x){ x.setAttribute('aria-pressed', x.getAttribute('data-t')==='div'); }); refresh(); };
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
