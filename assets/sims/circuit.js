/* ============================================================
   محاكاة تفاعلية — الدائرة الكهربائية وقانون أوم (I = V ÷ R)
   بطاريةٌ ومصباحٌ وشحناتٌ متحرّكة: غيّر الجهد والمقاومة فيتغيّر التيار
   وسرعةُ الشحنات وسطوعُ المصباح مباشرةً.
   الاستعمال من المحرّك:  window.SIMS['circuit'].mount(container)
   يعمل بالكامل دون إنترنت، ويستعمل متغيّرات ألوان المنصّة نفسها.
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['circuit'] = (function(){

  var BULB='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 21h4M12 2a6 6 0 0 0-4 10.5c.7.7 1 1.3 1 2.5h6c0-1.2.3-1.8 1-2.5A6 6 0 0 0 12 2z"/></svg>';

  var STATES={
    off:{ ar:'لا تيار', col:'var(--muted)', title:'الدائرة بلا جهد',
      text:'الجهد يساوي صفرًا، فلا قوّةَ تدفع الشحنات: لا يمرّ تيار والمصباح مُطفأ. (التيار = صفر ÷ المقاومة = صفر).' },
    dim:{ ar:'تيار ضعيف', col:'var(--cold-deep)', title:'تيار ضعيف — مصباح خافت',
      text:'التيار صغير؛ إمّا لأنّ الجهد منخفض أو المقاومة عالية. المقاومةُ العالية تُعيق تدفّق الشحنات فيضعف التيار ويخفت الضوء.' },
    bright:{ ar:'تيار قويّ', col:'var(--ember-deep)', title:'تيار قويّ — مصباح مضيء',
      text:'الجهد العالي يدفع الشحنات بقوّة، أو المقاومة منخفضة، فيزداد التيار ويشتدّ ضياء المصباح. كلّما زاد الجهد أو قلّت المقاومة زاد التيار.' }
  };

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="الدائرة الكهربائية">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="دائرة كهربائية فيها بطارية ومصباح وشحنات متحرّكة"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">الحالة الآن:</span><span class="wq-val js-state">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>الجهد (الفولتية)</span><b><span class="js-vval">٦</span> فولت</b></div>'+
            '<input type="range" class="wq-range volt js-v" min="0" max="12" value="6" step="1" aria-label="الجهد بالفولت"></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>المقاومة</span><b><span class="js-rval">٤</span> أوم</b></div>'+
            '<input type="range" class="wq-range res js-r" min="1" max="20" value="4" step="1" aria-label="المقاومة بالأوم"></div>'+
          '<div class="wq-eq"><span class="wq-eqt">قانون أوم — التيار = الجهد ÷ المقاومة</span><div class="wq-eqv"><span class="js-eq">—</span> أمبير</div></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">التيار (I)</div><div class="wq-v"><span class="js-i">—</span><small> أمبير</small></div></div>'+
          '<div class="wq-read"><div class="wq-k">القدرة (P = V×I)</div><div class="wq-v"><span class="js-p">—</span><small> واط</small></div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">—</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240;
  // مسار الدائرة: مستطيلٌ تسير الشحنات على محيطه (باتجاه عقارب الساعة)
  var X0=46, X1=254, Y0=56, Y1=190, WS=X1-X0, HS=Y1-Y0, PERIM=2*(WS+HS);
  var BULB_XY=[(X0+X1)/2, Y0], BAT_XY=[(X0+X1)/2, Y1];
  var NQ=24, GAP=PERIM/NQ;
  var CHARGE=[59,111,224], FIL_OFF=[95,95,120], FIL_ON=[255,208,110];

  function pointAt(d){
    d=((d%PERIM)+PERIM)%PERIM;
    if(d<WS) return [X0+d, Y0];        d-=WS;   // أعلى: يمين
    if(d<HS) return [X1, Y0+d];        d-=HS;   // يمين: أسفل
    if(d<WS) return [X1-d, Y1];        d-=WS;   // أسفل: يسار
    return [X0, Y1-d];                          // يسار: أعلى
  }
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  function arNum(x){ return toAr(String(x)).replace(/\./g,'٫'); }
  function fmt(x){ return arNum(Math.round(x*10)/10); }
  function mix(a,b,t){ return 'rgb('+((a[0]+(b[0]-a[0])*t)|0)+','+((a[1]+(b[1]-a[1])*t)|0)+','+((a[2]+(b[2]-a[2])*t)|0)+')'; }

  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var vIn=q('.js-v'), rIn=q('.js-r');
    var elState=q('.js-state'), elIc=q('.js-ic'), elT=q('.js-etitle'), elX=q('.js-etext');
    var reduce=false; try{ reduce=matchMedia('(prefers-reduced-motion:reduce)').matches; }catch(e){}
    var offset=0, curState='';

    var dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }

    function readCss(name,fallback){
      try{ var v=getComputedStyle(container).getPropertyValue(name).trim(); return v||fallback; }catch(e){ return fallback; }
    }

    function drawWires(){
      ctx.lineWidth=4; ctx.lineJoin='round'; ctx.lineCap='round';
      ctx.strokeStyle=readCss('--ink-soft','#4A5080');
      ctx.beginPath(); ctx.moveTo(X0,Y0); ctx.lineTo(X1,Y0); ctx.lineTo(X1,Y1); ctx.lineTo(X0,Y1); ctx.closePath(); ctx.stroke();
    }
    function drawBattery(){
      var x=BAT_XY[0], y=BAT_XY[1], acc=readCss('--subject-deep','#0B7E86');
      // اطمس الجدار تحت البطارية ثم ارسم الخليّة (لوحان)
      ctx.strokeStyle=acc; ctx.fillStyle=acc; ctx.lineCap='butt';
      ctx.lineWidth=2.5; ctx.beginPath(); ctx.moveTo(x-7,y-13); ctx.lineTo(x-7,y+13); ctx.stroke();   // اللوح الطويل (+)
      ctx.lineWidth=6;   ctx.beginPath(); ctx.moveTo(x+7,y-8);  ctx.lineTo(x+7,y+8);  ctx.stroke();    // اللوح القصير (−)
      ctx.font='700 13px Cairo, sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
      ctx.fillText('+', x-18, y); ctx.fillText('−', x+20, y);
    }
    function drawBulb(bn){
      var x=BULB_XY[0], y=BULB_XY[1];
      if(bn>0.001){                                   // هالة الضوء
        var r=12+bn*30, g=ctx.createRadialGradient(x,y,2,x,y,r);
        g.addColorStop(0,'rgba(244,183,64,'+(0.35+bn*0.55)+')'); g.addColorStop(1,'rgba(244,183,64,0)');
        ctx.fillStyle=g; ctx.beginPath(); ctx.arc(x,y,r,0,6.2832); ctx.fill();
      }
      // زجاجة المصباح؛ تتوهّج قليلًا عند الإضاءة
      ctx.fillStyle = bn>0.02 ? 'rgba(255,244,214,'+(0.5+bn*0.5)+')' : readCss('--surface','#fff');
      ctx.strokeStyle=readCss('--line-strong','#D6D9EC'); ctx.lineWidth=2;
      ctx.beginPath(); ctx.arc(x,y,12,0,6.2832); ctx.fill(); ctx.stroke();
      // رمز المصباح القياسيّ ⊗ (خطّان قطريّان) يتوهّجان مع التيار
      ctx.strokeStyle=mix(FIL_OFF,FIL_ON,bn); ctx.lineWidth=2.2; ctx.lineCap='round';
      var d=8.5;
      ctx.beginPath(); ctx.moveTo(x-d,y-d); ctx.lineTo(x+d,y+d); ctx.moveTo(x+d,y-d); ctx.lineTo(x-d,y+d); ctx.stroke();
    }
    function drawCharges(){
      ctx.fillStyle='rgb('+CHARGE[0]+','+CHARGE[1]+','+CHARGE[2]+')';
      for(var i=0;i<NQ;i++){ var p=pointAt(offset+i*GAP); ctx.beginPath(); ctx.arc(p[0],p[1],3.2,0,6.2832); ctx.fill(); }
    }
    function drawArrow(bn){
      if(bn<0.02) return;
      var p=pointAt(WS+HS*0.5);                       // منتصف الضلع الأيمن (اتجاه للأسفل)
      ctx.fillStyle=readCss('--subject','#0FA3AA');
      ctx.beginPath(); ctx.moveTo(p[0]-5,p[1]-5); ctx.lineTo(p[0]+5,p[1]-5); ctx.lineTo(p[0],p[1]+5); ctx.closePath(); ctx.fill();
    }

    function draw(bn){
      ctx.clearRect(0,0,W,H);
      drawWires(); drawArrow(bn); drawBattery(); drawBulb(bn); drawCharges();
    }

    function values(){
      var V=+vIn.value, R=Math.max(+rIn.value,1), I=V/R, bn=Math.min(I/3,1);
      return { V:V, R:R, I:I, P:V*I, bn:bn };
    }

    function refresh(){
      var v=values();
      q('.js-vval').textContent=toAr(v.V);
      q('.js-rval').textContent=toAr(v.R);
      q('.js-eq').textContent=fmt(v.I)+' = '+toAr(v.V)+' ÷ '+toAr(v.R);
      q('.js-i').textContent=fmt(v.I);
      q('.js-p').textContent=fmt(v.P);
      var st = v.V===0 ? 'off' : (v.I<0.6 ? 'dim' : 'bright'), S=STATES[st];
      if(st!==curState){
        curState=st;
        elState.textContent=S.ar; elState.style.color=S.col;
        elIc.style.background=S.col; elIc.innerHTML=BULB;
        elT.textContent=S.title; elT.style.color=S.col; elX.textContent=S.text;
      }
      if(reduce) draw(v.bn);   // بلا حركة: أعِد الرسم عند كل تغيير
    }

    function loop(){
      if(!cv.isConnected) return;
      var v=values();
      offset=(offset + v.bn*4.4) % PERIM;
      draw(v.bn);
      requestAnimationFrame(loop);
    }

    vIn.addEventListener('input', refresh);
    rIn.addEventListener('input', refresh);
    q('.js-reset').onclick=function(){ vIn.value=6; rIn.value=4; refresh(); };

    fit(); refresh(); draw(values().bn);
    if(!reduce) loop();
    window.addEventListener('resize', fit);

    return { destroy:function(){ } };
  }

  return { mount:mount };
})();
