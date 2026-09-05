/* ============================================================
   محاكاة تفاعلية — حلّ نظام معادلتين بالحذف (بالجمع)
   معاملا ص متعاكسان (+ص و −ص)، فجمعُ المعادلتين يحذفُ ص ويترك
   معادلةً في س واحدة. حلَّ س ثم عوّضْ لإيجاد ص. خطواتٌ حيّة.
   الاستعمال من المحرّك:  window.SIMS['elim'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['elim'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 9h14M5 15h14"/><path d="M8 4 6 20M18 4l-2 16" opacity=".5"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  function sig(n){ return (n<0?'−':'')+toAr(Math.abs(n)); }
  function arNum(x){ var r=Math.round(x*100)/100; return toAr(String(r)).replace(/\./g,'٫'); }
  function T(c,v){ return c===1?v:(c===-1?'−'+v:sig(c)+v); }
  function mx(s){ return '<span style="unicode-bidi:isolate;direction:ltr;font-weight:800">'+s+'</span>'; }

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="خطوات حلّ النظام بالحذف">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit js-stage" style="aspect-ratio:auto;min-height:210px;display:flex;flex-direction:column;justify-content:center;gap:7px;padding:14px 12px;text-align:center;font-size:13.5px;line-height:1.5;color:var(--ink)"></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">الحلّ:</span><span class="wq-val js-sol">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>معامل س في (١)</span><b class="js-a1v">٢</b></div><input type="range" class="wq-range warm js-a1" min="1" max="5" value="2" step="1"></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>معامل س في (٢)</span><b class="js-a2v">١</b></div><input type="range" class="wq-range warm js-a2" min="1" max="5" value="1" step="1"></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>ثابت المعادلة (١)</span><b class="js-c1v">٥</b></div><input type="range" class="wq-range cool js-c1" min="-9" max="9" value="5" step="1"></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>ثابت المعادلة (٢)</span><b class="js-c2v">١</b></div><input type="range" class="wq-range cool js-c2" min="-9" max="9" value="1" step="1"></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">قيمة س</div><div class="wq-v js-x">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">قيمة ص</div><div class="wq-v js-y">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">الحذف بالجمع</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var a1=q('.js-a1'),a2=q('.js-a2'),c1=q('.js-c1'),c2=q('.js-c2');
    var stage=q('.js-stage'), elSol=q('.js-sol'), elIc=q('.js-ic'), elX=q('.js-etext');
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }

    function refresh(){
      var A1=+a1.value,A2=+a2.value,C1=+c1.value,C2=+c2.value;
      q('.js-a1v').textContent=sig(A1); q('.js-a2v').textContent=sig(A2);
      q('.js-c1v').textContent=sig(C1); q('.js-c2v').textContent=sig(C2);
      var sumA=A1+A2, sumC=C1+C2, X=sumC/sumA, Y=C1-A1*X;
      var em=css('--ember-deep','#E4681B'), tl=css('--subject-deep','#0B7E86'), mu=css('--muted','#7C82A8');
      var eq1 = T(A1,'س')+' + ص = '+sig(C1);
      var eq2 = T(A2,'س')+' − ص = '+sig(C2);
      var hi = function(t,c){ return '<span style="color:'+c+'">'+t+'</span>'; };
      stage.innerHTML =
        '<div>'+hi('(١)',mu)+'  '+mx(eq1)+'</div>'+
        '<div>'+hi('(٢)',mu)+'  '+mx(eq2)+'</div>'+
        '<div style="border-top:1.5px dashed '+css('--line-strong','#D6D9EC')+';padding-top:7px;color:'+em+';font-weight:700;font-size:12px">اجمعِ المعادلتين ← يُحذف ص ('+mx('+ص − ص = ٠')+')</div>'+
        '<div>'+mx(sig(sumA)+'س = '+sig(sumC))+'</div>'+
        '<div style="color:'+tl+'">'+mx('س = '+sig(sumC)+' ÷ '+sig(sumA)+' = '+arNum(X))+'</div>'+
        '<div style="color:'+mu+';font-size:12px">بالتعويض في (١):</div>'+
        '<div style="color:'+tl+'">'+mx('ص = '+arNum(Y))+'</div>';
      q('.js-x').textContent=arNum(X); q('.js-y').textContent=arNum(Y);
      elSol.innerHTML = '<span style="unicode-bidi:isolate;direction:ltr">('+arNum(Y)+'، '+arNum(X)+')</span>';
      elIc.style.background=tl; elIc.innerHTML=ICN;
      elX.innerHTML='لأنّ معاملَي ص متعاكسان (<b>+ص</b> و<b>−ص</b>)، فجمعُ المعادلتين يجعلهما <b>يتلاشيان</b>، فتبقى معادلةٌ في <b>س</b> وحدها تُحَلّ مباشرة؛ ثم نعوّضُ قيمةَ س في إحدى المعادلتين لإيجاد <b>ص</b>. هذا الحلُّ نفسُه هو نقطةُ تقاطع الخطّين.';
    }
    [a1,a2,c1,c2].forEach(function(el){ el.addEventListener('input', refresh); });
    q('.js-reset').onclick=function(){ a1.value=2;a2.value=1;c1.value=5;c2.value=1; refresh(); };
    ['.js-a1v','.js-a2v','.js-c1v','.js-c2v','.js-x','.js-y'].forEach(function(s){ var e=q(s); e.style.direction='ltr'; e.style.unicodeBidi='isolate'; });
    refresh();
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
