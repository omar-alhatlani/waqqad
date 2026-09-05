/* ============================================================
   محاكاة تفاعلية — العلاقات: المجال والمدى واختبار الخطّ الرأسيّ
   علاقةٌ = مجموعةُ أزواجٍ مرتّبة. المجالُ قيمُ س، والمدى قيمُ ص.
   وهي دالةٌ إذا لم يتكرّر مدخلٌ (س) بمخرجين — يكشفه الخطُّ الرأسيّ.
   الاستعمال من المحرّك:  window.SIMS['relations'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['relations'] = (function(){

  var PIN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><circle cx="7" cy="8" r="1.6"/><circle cx="17" cy="8" r="1.6"/><circle cx="7" cy="16" r="1.6"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  function sig(n){ return (n<0?'−':'')+toAr(Math.abs(n)); }
  function uniqSorted(a){ var s=a.slice().sort(function(x,y){return x-y;}), r=[]; for(var i=0;i<s.length;i++) if(i===0||s[i]!==s[i-1]) r.push(s[i]); return r; }
  function setTxt(a){ return '{ '+a.map(sig).join('، ')+' }'; }

  var SETS={
    a:{ name:'علاقة أ', pts:[[-2,-1],[0,1],[1,2],[3,3]] },
    b:{ name:'علاقة ب', pts:[[1,-1],[1,3],[2,2],[-2,0]] },   // س=١ مكرّرة → ليست دالة
    c:{ name:'علاقة جـ', pts:[[-3,2],[-1,2],[1,2],[3,2]] }    // مدىً واحد (ثابت) لكنّها دالة
  };

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="أزواج العلاقة على المستوى واختبار الخطّ الرأسيّ">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="نقاط العلاقة وخطّ رأسيّ متحرّك للاختبار"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">دالة؟</span><span class="wq-val js-isfn">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-quick">'+
            '<button type="button" class="wq-qbtn js-set" data-s="a" aria-pressed="true">علاقة أ</button>'+
            '<button type="button" class="wq-qbtn js-set" data-s="b">علاقة ب</button>'+
            '<button type="button" class="wq-qbtn js-set" data-s="c">علاقة جـ</button>'+
          '</div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>الخطّ الرأسيّ (عند س)</span><b class="js-lv">−٦</b></div><input type="range" class="wq-range warm js-l" min="-6" max="6" value="-6" step="1"></div>'+
          '<div class="wq-eq"><span class="wq-eqt">اختبار الخطّ الرأسيّ</span><div class="wq-eqv"><span class="js-test">—</span></div></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">المجال (س)</div><div class="wq-v js-dom" style="font-size:13px">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">المدى (ص)</div><div class="wq-v js-ran" style="font-size:13px">—</div></div>'+
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
    var qa=function(s){ return Array.prototype.slice.call(container.querySelectorAll(s)); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var lIn=q('.js-l'), elFn=q('.js-isfn'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var key='a', dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function sx(x){ return OX+x*C; } function sy(y){ return OY-y*C; }
    function isFn(pts){ for(var i=0;i<pts.length;i++) for(var j=i+1;j<pts.length;j++) if(pts[i][0]===pts[j][0] && pts[i][1]!==pts[j][1]) return false; return true; }

    function draw(){
      var pts=SETS[key].pts, lx=+lIn.value;
      ctx.clearRect(0,0,W,H);
      ctx.strokeStyle=css('--line','#E7E9F5'); ctx.lineWidth=1;
      for(var i=-R;i<=R;i++){ ctx.beginPath(); ctx.moveTo(sx(i),sy(-R)); ctx.lineTo(sx(i),sy(R)); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(sx(-R),sy(i)); ctx.lineTo(sx(R),sy(i)); ctx.stroke(); }
      ctx.strokeStyle=css('--ink-soft','#4A5080'); ctx.lineWidth=2;
      ctx.beginPath(); ctx.moveTo(sx(-R),sy(0)); ctx.lineTo(sx(R),sy(0)); ctx.moveTo(sx(0),sy(-R)); ctx.lineTo(sx(0),sy(R)); ctx.stroke();
      // الخطّ الرأسيّ المتحرّك
      var hits=pts.filter(function(p){ return p[0]===lx; });
      ctx.strokeStyle= hits.length>1 ? css('--bad','#E7466B') : css('--gold','#F4B740');
      ctx.lineWidth=2; ctx.setLineDash([5,4]); ctx.beginPath(); ctx.moveTo(sx(lx),sy(-R)); ctx.lineTo(sx(lx),sy(R)); ctx.stroke(); ctx.setLineDash([]);
      // النقاط
      for(i=0;i<pts.length;i++){ var p=pts[i], on=(p[0]===lx);
        ctx.fillStyle= on ? (hits.length>1?css('--bad','#E7466B'):css('--ember','#F2892E')) : css('--subject','#0FA3AA');
        ctx.beginPath(); ctx.arc(sx(p[0]),sy(p[1]), on?6.5:5, 0,6.2832); ctx.fill();
        if(on){ ctx.strokeStyle='#fff'; ctx.lineWidth=1.6; ctx.stroke(); } }
    }
    function refresh(){
      var pts=SETS[key].pts, lx=+lIn.value, fn=isFn(pts), hits=pts.filter(function(p){ return p[0]===lx; });
      q('.js-lv').textContent=sig(lx);
      q('.js-dom').textContent=setTxt(uniqSorted(pts.map(function(p){return p[0];})));
      q('.js-ran').textContent=setTxt(uniqSorted(pts.map(function(p){return p[1];})));
      q('.js-test').textContent = 'عند س = '+sig(lx)+' ← '+(hits.length===0?'لا نقطة':(hits.length===1?'نقطةٌ واحدة':toAr(hits.length)+' نقاط!'));
      elFn.textContent = fn?'نعم — دالة':'لا — ليست دالة'; elFn.style.color = fn?css('--subject-deep','#0B7E86'):css('--bad','#E7466B');
      qa('.js-set').forEach(function(b){ b.setAttribute('aria-pressed', b.getAttribute('data-s')===key?'true':'false'); });
      var col = fn?css('--subject-deep','#0B7E86'):css('--bad','#E7466B');
      elIc.style.background=col; elIc.innerHTML=PIN;
      elTit.textContent = fn?'علاقةٌ دالّة':'ليست دالة'; elTit.style.color=col;
      elX.innerHTML = fn
        ? 'حرّكِ الخطَّ الرأسيَّ فوق كلِّ قيمة: لا يمرُّ إلا بنقطةٍ <b>واحدة</b> على الأكثر، فلكلِّ مدخلٍ (س) مخرجٌ واحد ← <b>دالة</b>. <b>المجال</b> مجموعةُ قيم س، و<b>المدى</b> مجموعةُ قيم ص.'
        : 'حرّكِ الخطَّ الرأسيَّ حتى يمرَّ بنقطتين معًا: مدخلٌ واحد (س) له مخرجان (ص) ← <b>ليست دالة</b>. تكرارُ قيمة المجال بمخرجين مختلفين يُبطِل كونَها دالّة.';
      draw();
    }
    qa('.js-set').forEach(function(b){ b.addEventListener('click', function(){ key=b.getAttribute('data-s'); refresh(); }); });
    lIn.addEventListener('input', refresh);
    q('.js-reset').onclick=function(){ key='a'; lIn.value=-6; refresh(); };
    ['.js-lv','.js-dom','.js-ran'].forEach(function(s){ var e=q(s); e.style.direction='ltr'; e.style.unicodeBidi='isolate'; });
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
