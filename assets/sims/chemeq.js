/* ============================================================
   محاكاة تفاعلية — موازنة المعادلات الكيميائية
   الذراتُ تُرتَّب ولا تُخلَق ولا تُفنى (حفظ الكتلة)، فيجب تساوي عدد ذرات
   كلِّ عنصرٍ في الطرفين. نوازنُ بتغيير المعاملات أمام الصيغ (لا الأرقام السفلية).
   الاستعمال من المحرّك:  window.SIMS['chemeq'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['chemeq'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 8h7M4 8l3-3M4 8l3 3M20 16h-7M20 16l-3-3M20 16l-3 3"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  var RX={
    water:{ ar:'تكوّن الماء', react:[{f:'H₂',at:{H:2}},{f:'O₂',at:{O:2}}], prod:[{f:'H₂O',at:{H:2,O:1}}], sol:[[2,1],[2]] },
    methane:{ ar:'احتراق الميثان', react:[{f:'CH₄',at:{C:1,H:4}},{f:'O₂',at:{O:2}}], prod:[{f:'CO₂',at:{C:1,O:2}},{f:'H₂O',at:{H:2,O:1}}], sol:[[1,2],[1,2]] }
  };

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="معادلة كيميائية وموازنتها">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit js-stage" style="aspect-ratio:auto;min-height:210px;display:flex;flex-direction:column;justify-content:center;gap:12px;padding:14px 10px;text-align:center"></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">الحالة:</span><span class="wq-val js-bal">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sllabel"><span>انقرِ المعامل (الرقم الأزرق) لتغييره</span></div>'+
          '<div class="wq-quick"><button type="button" class="wq-qbtn js-rx" data-r="water" aria-pressed="true">تكوّن الماء</button><button type="button" class="wq-qbtn js-rx" data-r="methane">احتراق الميثان</button></div>'+
          '<div class="wq-quick"><button type="button" class="wq-tool js-solve" style="flex:1">أرِني الموازنة الصحيحة</button></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">جدول الذرّات</div><div class="wq-v js-tally" style="font-size:12px;font-weight:600;line-height:1.7">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">حفظ الكتلة</div><div class="wq-v js-mass" style="font-size:13px">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">موازنة المعادلات</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var qa=function(s){ return Array.prototype.slice.call(container.querySelectorAll(s)); };
    var stage=q('.js-stage'), elBal=q('.js-bal'), elIc=q('.js-ic'), elX=q('.js-etext');
    var rx='water', cR=[1,1], cP=[1];
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function initCoefs(){ var R=RX[rx]; cR=R.react.map(function(){return 1;}); cP=R.prod.map(function(){return 1;}); }
    function tally(){ var R=RX[rx], els={}, L={}, Rr={};
      R.react.forEach(function(t,i){ for(var e in t.at){ els[e]=1; L[e]=(L[e]||0)+cR[i]*t.at[e]; } });
      R.prod.forEach(function(t,i){ for(var e in t.at){ els[e]=1; Rr[e]=(Rr[e]||0)+cP[i]*t.at[e]; } });
      return {els:Object.keys(els), L:L, R:Rr}; }

    function drawEq(){
      var R=RX[rx], ln=css('--line-strong','#D6D9EC'), blue=css('--s-math-deep','#2551B8'), ink=css('--ink','#1C2143');
      function term(f,ci,side){ return '<span class="js-co" data-side="'+side+'" data-i="'+ci+'" style="cursor:pointer;color:'+blue+';font-weight:900;font-size:19px;font-family:Poppins,sans-serif">'+
        toAr((side==='r'?cR:cP)[ci])+'</span><span style="font-size:19px;font-weight:700;font-family:Poppins,sans-serif;color:'+ink+'">'+f+'</span>'; }
      var r=R.react.map(function(t,i){return term(t.f,i,'r');}).join('<span style="color:'+css('--muted','#7C82A8')+'"> + </span>');
      var p=R.prod.map(function(t,i){return term(t.f,i,'p');}).join('<span style="color:'+css('--muted','#7C82A8')+'"> + </span>');
      stage.innerHTML = '<div style="font-size:12px;color:'+css('--muted','#7C82A8')+'">'+R.ar+'</div>'+
        '<div style="direction:ltr;display:flex;align-items:center;justify-content:center;gap:6px;flex-wrap:wrap">'+r+'<span style="font-size:20px;color:'+css('--ember-deep','#E4681B')+'">→</span>'+p+'</div>';
      qa('.js-co').forEach(function(el){ el.addEventListener('click', function(){ var s=el.getAttribute('data-side'), i=+el.getAttribute('data-i');
        if(s==='r') cR[i]=cR[i]%6+1; else cP[i]=cP[i]%6+1; refresh(); }); });
    }
    function refresh(){
      drawEq();
      var t=tally(), balanced=true, tstr=[];
      t.els.forEach(function(e){ var l=t.L[e]||0, r=t.R[e]||0, ok=l===r; if(!ok) balanced=false;
        tstr.push(e+': '+toAr(l)+(ok?' = ':' ≠ ')+toAr(r)); });
      q('.js-tally').innerHTML=tstr.join('<br>');
      q('.js-mass').textContent = balanced?'متساوية ✓':'غير متساوية';
      q('.js-mass').style.color = balanced?css('--s-ar-deep','#1F7D52'):css('--ember-deep','#E4681B');
      elBal.textContent = balanced?'موزونة ✓':'غير موزونة'; elBal.style.color = balanced?css('--s-ar-deep','#1F7D52'):css('--ember-deep','#E4681B');
      qa('.js-rx').forEach(function(b){ b.setAttribute('aria-pressed', b.getAttribute('data-r')===rx?'true':'false'); });
      elIc.style.background = balanced?css('--s-ar-deep','#1F7D52'):css('--s-math-deep','#2551B8'); elIc.innerHTML=ICN;
      elX.innerHTML='في التفاعل الكيميائي <b>لا تُخلَق الذراتُ ولا تُفنى</b>، بل تُعاد ترتيبَها؛ فلا بدّ أن يتساوى عددُ ذرات كلِّ عنصرٍ في الطرفين (<b>حفظ الكتلة</b>). نوازنُ بتغيير <b>المعاملات</b> أمام الصيغ (الأرقام الزرقاء) — ولا نغيّر <b>الأرقام السفلية</b> داخل الصيغة. '+(balanced?'أحسنت، المعادلةُ موزونة! ✓':'حاولْ حتى يتساوى كلُّ عنصر.');
    }
    qa('.js-rx').forEach(function(b){ b.addEventListener('click', function(){ rx=b.getAttribute('data-r'); initCoefs(); refresh(); }); });
    q('.js-solve').onclick=function(){ var R=RX[rx]; cR=R.sol[0].slice(); cP=R.sol[1].slice(); refresh(); };
    q('.js-reset').onclick=function(){ rx='water'; initCoefs(); refresh(); };
    q('.js-tally').style.direction='ltr'; q('.js-tally').style.unicodeBidi='isolate';
    initCoefs(); refresh();
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
