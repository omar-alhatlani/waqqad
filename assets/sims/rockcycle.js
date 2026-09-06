/* ============================================================
   محاكاة تفاعلية — دورة الصخور
   للصخور ثلاثةُ أنواع: ناريّةٌ (من تبريد الصهارة)، ورسوبيّةٌ (من ترسّب
   الفتات)، ومتحوّلةٌ (بالحرارة والضغط)، تتحوّل من نوعٍ لآخرَ في دورة الصخر.
   الاستعمال من المحرّك:  window.SIMS['rockcycle'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['rockcycle'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 4v5h-5"/></svg>';

  var NODES={
    magma:{n:'الصهارة', x:150, y:198, c:'#E4681B', cl:'#B44E11'},
    ign:  {n:'ناريّة',  x:62,  y:118, c:'#8A6A5A', cl:'#5E463A'},
    sed:  {n:'رسوبيّة', x:150, y:42,  c:'#C6A66A', cl:'#8A7038'},
    met:  {n:'متحوّلة', x:238, y:118, c:'#9070A0', cl:'#5F4470'}
  };
  // الأنواع الثلاثة القابلة للاختيار: من أين ← بأيّ عملية
  var ROCK={
    ign:{key:'ign', from:'magma', proc:'تبريدُ الصهارة وتبلورُها', src:'الصهارة المنصهرة', det:'الناريّةُ سطحيّةٌ (تبرد فوق السطح كاللابة) أو جوفيّةٌ (تبرد ببطءٍ تحت السطح).'},
    sed:{key:'sed', from:'ign',   proc:'تجويةٌ وترسّبٌ وتماسك', src:'فُتاتُ الصخور', det:'الرسوبيّةُ تظهر طبقاتٍ وتحفظ الأحافيرَ (بقايا كائناتٍ قديمة).'},
    met:{key:'met', from:'sed',   proc:'حرارةٌ وضغطٌ عاليان', src:'صخرٌ موجود', det:'المتحوّلةُ نوعان: متورّقةٌ وغيرُ متورّقة.'}
  };

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="دورة الصخر بين الصهارة والأنواع الثلاثة">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="حلقة تربط الصهارة بالصخور النارية والرسوبية والمتحولة بعمليات التبريد والترسّب والحرارة والانصهار"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">النوع:</span><span class="wq-val js-name" style="font-size:14px">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-quick"><button type="button" class="wq-qbtn js-rock" data-k="ign" aria-pressed="true">ناريّة</button><button type="button" class="wq-qbtn js-rock" data-k="sed">رسوبيّة</button><button type="button" class="wq-qbtn js-rock" data-k="met">متحوّلة</button></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">طريقة التكوين</div><div class="wq-v js-proc" style="font-size:12px">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">المصدر</div><div class="wq-v js-src" style="font-size:12px">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">دورة الصخر</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, NR=22;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var qa=function(s){ return Array.prototype.slice.call(container.querySelectorAll(s)); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var elName=q('.js-name'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var sel='ign', dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function drawAr(x,y,str,col,f){ ctx.fillStyle=col; ctx.save(); ctx.font=f||'700 10px "IBM Plex Sans Arabic",sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='rtl'; ctx.fillText(str,x,y); ctx.restore(); }

    // سهمٌ من عقدةٍ إلى عقدة (مُزاحٌ بنصف القطر)، مع تسمية العملية
    function link(fromKey,toKey,label,col,lw){
      var a=NODES[fromKey], b=NODES[toKey];
      var ang=Math.atan2(b.y-a.y,b.x-a.x);
      var x1=a.x+Math.cos(ang)*NR, y1=a.y+Math.sin(ang)*NR, x2=b.x-Math.cos(ang)*NR, y2=b.y-Math.sin(ang)*NR;
      ctx.strokeStyle=col; ctx.lineWidth=lw; ctx.lineCap='round'; ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.stroke();
      ctx.fillStyle=col; ctx.beginPath(); ctx.moveTo(x2,y2); ctx.lineTo(x2-9*Math.cos(ang-0.4),y2-9*Math.sin(ang-0.4)); ctx.lineTo(x2-9*Math.cos(ang+0.4),y2-9*Math.sin(ang+0.4)); ctx.fill();
      if(label){ var mx=(x1+x2)/2, my=(y1+y2)/2; drawAr(mx,my-6,label,col,'700 8px "IBM Plex Sans Arabic",sans-serif'); }
    }
    function node(key){
      var nd=NODES[key], hot=(key===sel);
      ctx.fillStyle=nd.c; ctx.strokeStyle=hot?css('--brand','#4B45C6'):nd.cl; ctx.lineWidth=hot?4.5:2;
      ctx.beginPath(); ctx.arc(nd.x,nd.y,NR,0,6.2832); ctx.fill(); ctx.stroke();
      drawAr(nd.x,nd.y,nd.n,'#fff','800 10px "IBM Plex Sans Arabic",sans-serif');
    }
    function draw(){
      ctx.clearRect(0,0,W,H);
      var mu=css('--line-strong','#D6D9EC'), hot=css('--brand','#4B45C6');
      // حلقة الدورة الأساسية (٤ أسهم)
      link('magma','ign', 'تبريد', (sel==='ign')?hot:mu, (sel==='ign')?3.5:2);
      link('ign','sed',   'تجوية وترسّب', (sel==='sed')?hot:mu, (sel==='sed')?3.5:2);
      link('sed','met',   'حرارة وضغط', (sel==='met')?hot:mu, (sel==='met')?3.5:2);
      link('met','magma', 'انصهار', mu, 2);
      // العُقد
      node('magma'); node('ign'); node('sed'); node('met');
      drawAr(150, H-12, 'الأرضُ في تغيُّرٍ دائم — دورةُ الصخر', css('--muted','#7C82A8'), '600 9px "IBM Plex Sans Arabic",sans-serif');
    }
    function refresh(){
      var r=ROCK[sel], nd=NODES[sel];
      qa('.js-rock').forEach(function(b){ b.setAttribute('aria-pressed', b.getAttribute('data-k')===sel?'true':'false'); });
      elName.textContent=nd.n; elName.style.color=nd.cl;
      q('.js-proc').textContent=r.proc; q('.js-proc').style.color=css('--ink-soft','#4A5080');
      q('.js-src').textContent=r.src; q('.js-src').style.color=css('--ink-soft','#4A5080');
      elIc.style.background=nd.cl; elIc.innerHTML=ICN;
      elTit.textContent='صخورٌ '+nd.n;
      elX.innerHTML='الصخورُ <b>'+nd.n+'</b> تتكوّن بـ<b>'+r.proc+'</b> من '+r.src+'. '+r.det+' وتتحوّل الأنواعُ الثلاثةُ من نوعٍ لآخرَ باستمرارٍ في <b>دورة الصخر</b>، ممّا يدلّ على أنّ الأرضَ في تغيُّرٍ دائم.';
      draw();
    }
    qa('.js-rock').forEach(function(b){ b.addEventListener('click', function(){ sel=b.getAttribute('data-k'); refresh(); }); });
    q('.js-reset').onclick=function(){ sel='ign'; refresh(); };
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
