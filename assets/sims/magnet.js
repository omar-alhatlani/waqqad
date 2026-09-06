/* ============================================================
   محاكاة تفاعلية — المغناطيسية
   لكلّ مغناطيسٍ قطبان (لا قطبَ مفرد). الأقطابُ المتشابهة تتنافر
   والمختلفةُ تتجاذب، ويحيط به مجالٌ مغناطيسي. والتيارُ يولّد مغناطيسية.
   الاستعمال من المحرّك:  window.SIMS['magnet'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['magnet'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 4v7a6 6 0 0 0 12 0V4"/><path d="M6 4h4M14 4h4"/></svg>';
  var N='#E7466B', S='#3B6FE0';

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="مغناطيس ومجاله أو تجاذب وتنافر">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="مغناطيس بقطبيه ومجاله أو مغناطيسان يتجاذبان أو يتنافران"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">الحالة:</span><span class="wq-val js-name">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-quick"><button type="button" class="wq-qbtn js-mode" data-m="single" aria-pressed="true">مغناطيس</button><button type="button" class="wq-qbtn js-mode" data-m="attract">تجاذب</button><button type="button" class="wq-qbtn js-mode" data-m="repel">تنافر</button></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">الأقطاب المتقابلة</div><div class="wq-v js-poles" style="font-size:14px">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">القوّة</div><div class="wq-v js-force" style="font-size:14px">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">—</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, CY=110;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var qa=function(s){ return Array.prototype.slice.call(container.querySelectorAll(s)); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var elName=q('.js-name'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var mode='single', dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function bar(cx,w,leftPole){ var h=34, x=cx-w/2;
      ctx.fillStyle = leftPole==='N'?N:S; ctx.beginPath(); ctx.roundRect(x,CY-h/2,w/2,h,[8,0,0,8]); ctx.fill();
      ctx.fillStyle = leftPole==='N'?S:N; ctx.beginPath(); ctx.roundRect(x+w/2,CY-h/2,w/2,h,[0,8,8,0]); ctx.fill();
      ctx.fillStyle='#fff'; ctx.font='800 16px Poppins,sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='ltr';
      ctx.fillText(leftPole, x+w/4, CY); ctx.fillText(leftPole==='N'?'S':'N', x+3*w/4, CY); }
    function arrow(x1,x2,y,col){ ctx.strokeStyle=col; ctx.lineWidth=3; ctx.lineCap='round'; ctx.beginPath(); ctx.moveTo(x1,y); ctx.lineTo(x2,y); ctx.stroke();
      var d=x2>x1?1:-1; ctx.fillStyle=col; ctx.beginPath(); ctx.moveTo(x2,y); ctx.lineTo(x2-d*9,y-5); ctx.lineTo(x2-d*9,y+5); ctx.fill(); }

    function draw(){
      ctx.clearRect(0,0,W,H);
      if(mode==='single'){
        // خطوط المجال (تخرج من N يمينًا... هنا N يسار) — حلقات علوية وسفلية
        ctx.strokeStyle=css('--muted','#7C82A8'); ctx.lineWidth=1.5;
        [30,52,74].forEach(function(off,k){ ctx.beginPath(); ctx.moveTo(88,CY); ctx.bezierCurveTo(88,CY-off,212,CY-off,212,CY); ctx.stroke();
          ctx.beginPath(); ctx.moveTo(88,CY); ctx.bezierCurveTo(88,CY+off,212,CY+off,212,CY); ctx.stroke();
          // أسهم اتجاه (N ← S خارجًا من N)
          ctx.fillStyle=css('--muted','#7C82A8'); ctx.beginPath(); ctx.moveTo(150,CY-off+ (k? -0:0)); ctx.lineTo(144,CY-off-4); ctx.lineTo(144,CY-off+4); ctx.fill();
          ctx.beginPath(); ctx.moveTo(150,CY+off); ctx.lineTo(156,CY+off-4); ctx.lineTo(156,CY+off+4); ctx.fill(); });
        bar(150,124,'N');
        ctx.fillStyle=css('--muted','#7C82A8'); ctx.font='700 10px "IBM Plex Sans Arabic",sans-serif'; ctx.textAlign='center'; ctx.direction='rtl';
        ctx.fillText('المجال المغناطيسي', 150, CY-88);
      } else {
        var attract = mode==='attract';
        // الأيسر: N|S (يواجه بـ S). الأيمن: للتجاذب N|S (يواجه بـ N=مختلف)، للتنافر S|N (يواجه بـ S=متشابه)
        bar(78,90,'N'); bar(222,90, attract?'N':'S');
        // أسهم القوّة
        var col = attract?css('--s-ar-deep','#1F7D52'):css('--ember-deep','#E4681B');
        if(attract){ arrow(128,150,CY-52,col); arrow(172,150,CY-52,col); }
        else { arrow(150,120,CY-52,col); arrow(150,180,CY-52,col); }
        ctx.fillStyle=col; ctx.font='800 12px "IBM Plex Sans Arabic",sans-serif'; ctx.textAlign='center'; ctx.direction='rtl';
        ctx.fillText(attract?'قطبان مختلفان ← تجاذب':'قطبان متشابهان ← تنافر', 150, CY+70);
      }
    }
    function refresh(){
      elName.textContent = mode==='single'?'قطبان ومجال':(mode==='attract'?'تجاذب':'تنافر');
      elName.style.color = mode==='repel'?css('--ember-deep','#E4681B'):(mode==='attract'?css('--s-ar-deep','#1F7D52'):css('--brand','#4B45C6'));
      q('.js-poles').textContent = mode==='single'?'—':(mode==='attract'?'مختلفة (N–S)':'متشابهة (S–S)');
      q('.js-force').textContent = mode==='single'?'—':(mode==='attract'?'تجاذب':'تنافر');
      qa('.js-mode').forEach(function(b){ b.setAttribute('aria-pressed', b.getAttribute('data-m')===mode?'true':'false'); });
      var col = mode==='repel'?css('--ember-deep','#E4681B'):(mode==='attract'?css('--s-ar-deep','#1F7D52'):css('--brand-deep','#3833A0'));
      elIc.style.background=col; elIc.innerHTML=ICN;
      elTit.textContent = mode==='single'?'القطبان والمجال':(mode==='attract'?'تتجاذب':'تتنافر'); elTit.style.color=col;
      elX.innerHTML = mode==='single'
        ? 'لكلِّ مغناطيسٍ <b>قطبان</b>: شماليٌّ (N) وجنوبيّ (S)، ولا يوجد <b>قطبٌ مفرد</b> (لو قسمتَه لصار مغناطيسَين لكلٍّ قطبان). ويحيط به <b>مجالٌ مغناطيسي</b> تمثّله الخطوطُ الخارجةُ من N الداخلةُ إلى S. ومهمّ: <b>الشحناتُ المتحركة (التيار) تولّد مغناطيسية</b> (المغناطيس الكهربائي).'
        : mode==='attract'
        ? 'الأقطابُ <b>المختلفة</b> (N قربَ S) <b>تتجاذب</b> — كما تتجاذب الشحناتُ المختلفة.'
        : 'الأقطابُ <b>المتشابهة</b> (S قربَ S) <b>تتنافر</b> — كما تتنافر الشحناتُ المتشابهة.';
      draw();
    }
    qa('.js-mode').forEach(function(b){ b.addEventListener('click', function(){ mode=b.getAttribute('data-m'); refresh(); }); });
    q('.js-reset').onclick=function(){ mode='single'; refresh(); };
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
