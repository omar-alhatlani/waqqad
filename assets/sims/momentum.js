/* ============================================================
   محاكاة تفاعلية — الزخم والتصادمات
   الزخم = الكتلة × السرعة. وفي التصادم يبقى مجموعُ الزخم ثابتًا (حفظ
   الزخم): الزخمُ الكلّيُّ قبل التصادم = الزخمُ الكلّيُّ بعده.
   الاستعمال من المحرّك:  window.SIMS['momentum'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['momentum'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="10" width="7" height="7" rx="1"/><rect x="14" y="10" width="7" height="7" rx="1"/><path d="M10.5 13.5h3"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  function sig(n){ return (n<0?'−':'')+toAr(Math.abs(n)); }
  function arNum(x){ var r=Math.round(x*10)/10; return (r<0?'−':'')+toAr(String(Math.abs(r))).replace(/\./g,'٫'); }

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="عربتان تتصادمان">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="عربتان بكتلتين وسرعتين قبل وبعد التصادم"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">الزخم الكلّيّ:</span><span class="wq-val js-total">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>كتلة ١</span><b class="js-m1v">٣</b></div><input type="range" class="wq-range warm js-m1" min="1" max="4" value="3" step="1"></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>سرعة ١</span><b class="js-v1v">٤</b></div><input type="range" class="wq-range warm js-v1" min="0" max="5" value="4" step="1"></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>كتلة ٢</span><b class="js-m2v">٢</b></div><input type="range" class="wq-range cool js-m2" min="1" max="4" value="2" step="1"></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>سرعة ٢</span><b class="js-v2v">٠</b></div><input type="range" class="wq-range cool js-v2" min="-4" max="4" value="0" step="1"></div>'+
          '<div class="wq-quick"><button type="button" class="wq-qbtn js-ph" data-p="before" aria-pressed="true">قبل التصادم</button><button type="button" class="wq-qbtn js-ph" data-p="after">بعد التصادم</button></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">زخم ١ · زخم ٢</div><div class="wq-v js-p12" style="font-size:14px">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">السرعة بعد</div><div class="wq-v js-vafter">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">الزخم وحفظه</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, TY=150;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var qa=function(s){ return Array.prototype.slice.call(container.querySelectorAll(s)); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var m1I=q('.js-m1'),v1I=q('.js-v1'),m2I=q('.js-m2'),v2I=q('.js-v2');
    var elTot=q('.js-total'), elIc=q('.js-ic'), elX=q('.js-etext');
    var phase='before', dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function cart(cx,m,v,col,label){ var w=22+m*11, h=16+m*5;
      ctx.fillStyle=col; ctx.beginPath(); ctx.roundRect(cx-w/2,TY-h,w,h,5); ctx.fill();
      ctx.fillStyle=css('--ink-soft','#4A5080'); ctx.beginPath(); ctx.arc(cx-w/3,TY,4,0,6.2832); ctx.arc(cx+w/3,TY,4,0,6.2832); ctx.fill();
      ctx.fillStyle='#fff'; ctx.font='800 11px Cairo,sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='inherit'; ctx.fillText(label,cx,TY-h/2-1);
      if(v!==0){ var d=v>0?1:-1, ax=cx+d*(w/2+4); ctx.strokeStyle=css('--ink','#1C2143'); ctx.lineWidth=2.4; ctx.beginPath(); ctx.moveTo(ax,TY-h/2); ctx.lineTo(ax+d*(8+Math.abs(v)*5),TY-h/2); ctx.stroke();
        ctx.fillStyle=css('--ink','#1C2143'); var tip=ax+d*(8+Math.abs(v)*5); ctx.beginPath(); ctx.moveTo(tip,TY-h/2); ctx.lineTo(tip-d*7,TY-h/2-4); ctx.lineTo(tip-d*7,TY-h/2+4); ctx.fill(); } }

    function draw(){
      var m1=+m1I.value,v1=+v1I.value,m2=+m2I.value,v2=+v2I.value, V=(m1*v1+m2*v2)/(m1+m2);
      ctx.clearRect(0,0,W,H);
      // مسار
      ctx.strokeStyle=css('--line-strong','#D6D9EC'); ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(14,TY+5); ctx.lineTo(286,TY+5); ctx.stroke();
      if(phase==='before'){ cart(88,m1,v1,css('--ember','#F2892E'),'١'); cart(210,m2,v2,css('--subject','#0FA3AA'),'٢'); }
      else { // ملتصقتان تتحرّكان بسرعة V
        var w=22+m1*11, w2=22+m2*11; cart(150-w2/2,m1,0,css('--ember','#F2892E'),'١'); cart(150+w/2,m2,0,css('--subject','#0FA3AA'),'٢');
        var d=V>0?1:(V<0?-1:0); if(d){ ctx.strokeStyle=css('--brand','#4B45C6'); ctx.lineWidth=3; var ax=150; ctx.beginPath(); ctx.moveTo(ax,TY-52); ctx.lineTo(ax+d*(12+Math.abs(V)*7),TY-52); ctx.stroke();
          ctx.fillStyle=css('--brand','#4B45C6'); var tip=ax+d*(12+Math.abs(V)*7); ctx.beginPath(); ctx.moveTo(tip,TY-52); ctx.lineTo(tip-d*8,TY-57); ctx.lineTo(tip-d*8,TY-47); ctx.fill(); }
        ctx.fillStyle=css('--brand','#4B45C6'); ctx.font='700 11px "IBM Plex Sans Arabic",sans-serif'; ctx.textAlign='center'; ctx.direction='rtl'; ctx.fillText('التصقتا وتحرّكتا بسرعةٍ واحدة',150,TY-66);
      }
    }
    function refresh(){
      var m1=+m1I.value,v1=+v1I.value,m2=+m2I.value,v2=+v2I.value, p=m1*v1+m2*v2, V=p/(m1+m2);
      q('.js-m1v').textContent=toAr(m1); q('.js-v1v').textContent=sig(v1); q('.js-m2v').textContent=toAr(m2); q('.js-v2v').textContent=sig(v2);
      q('.js-p12').textContent=sig(m1*v1)+' · '+sig(m2*v2);
      q('.js-vafter').textContent=arNum(V);
      elTot.textContent=sig(p)+' (محفوظ)'; elTot.style.color=css('--brand-deep','#3833A0');
      qa('.js-ph').forEach(function(b){ b.setAttribute('aria-pressed', b.getAttribute('data-p')===phase?'true':'false'); });
      elIc.style.background=css('--brand-deep','#3833A0'); elIc.innerHTML=ICN;
      elX.innerHTML='<b>الزخم = الكتلة × السرعة</b>، فالأثقلُ أو الأسرعُ زخمُه أكبر. وفي التصادم يبقى <b>مجموعُ الزخم ثابتًا</b> (حفظ الزخم): هنا الزخمُ الكلّيُّ = '+sig(p)+' قبل التصادم وبعده. عند التصادم الالتصاقيّ تتحرّك العربتان معًا بسرعةٍ واحدة = الزخم الكلّيّ ÷ مجموع الكتلتين = <b>'+arNum(V)+'</b>.';
      draw();
    }
    qa('.js-ph').forEach(function(b){ b.addEventListener('click', function(){ phase=b.getAttribute('data-p'); refresh(); }); });
    [m1I,v1I,m2I,v2I].forEach(function(el){ el.addEventListener('input', refresh); });
    q('.js-reset').onclick=function(){ m1I.value=3;v1I.value=4;m2I.value=2;v2I.value=0; phase='before'; refresh(); };
    ['.js-m1v','.js-v1v','.js-m2v','.js-v2v','.js-p12','.js-vafter','.js-total'].forEach(function(s){ var e=q(s); e.style.direction='ltr'; e.style.unicodeBidi='isolate'; });
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
