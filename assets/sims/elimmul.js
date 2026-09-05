/* ============================================================
   محاكاة تفاعلية — حلّ نظام معادلتين بالحذف (بالضرب)
   معاملا ص غيرُ متساويين، فنضربُ كلَّ معادلةٍ لتوحيدهما إلى المضاعف
   المشترك الأصغر، ثم نطرحُ لنحذفَ ص. خطواتٌ حيّة.
   الاستعمال من المحرّك:  window.SIMS['elimmul'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['elimmul'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12M18 6 6 18"/><circle cx="12" cy="12" r="9" opacity=".35"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  function sig(n){ return (n<0?'−':'')+toAr(Math.abs(n)); }
  function arNum(x){ var r=Math.round(x*100)/100; return toAr(String(r)).replace(/\./g,'٫'); }
  function gcd(a,b){ a=Math.abs(a); b=Math.abs(b); while(b){ var t=b; b=a%b; a=t; } return a||1; }
  function T(c,v){ return c===1?v:(c===-1?'−'+v:sig(c)+v); }
  function mx(s){ return '<span style="unicode-bidi:isolate;direction:ltr;font-weight:800">'+s+'</span>'; }

  var A1=2, A2=3;
  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="خطوات الحذف بالضرب">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit js-stage" style="aspect-ratio:auto;min-height:210px;display:flex;flex-direction:column;justify-content:center;gap:6px;padding:13px 12px;text-align:center;font-size:13px;line-height:1.45;color:var(--ink)"></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">الحلّ:</span><span class="wq-val js-sol">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>معامل ص في (١)</span><b class="js-b1v">٣</b></div><input type="range" class="wq-range warm js-b1" min="1" max="4" value="3" step="1"></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>معامل ص في (٢)</span><b class="js-b2v">٢</b></div><input type="range" class="wq-range warm js-b2" min="1" max="4" value="2" step="1"></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>ثابت المعادلة (١)</span><b class="js-c1v">٥</b></div><input type="range" class="wq-range cool js-c1" min="-9" max="9" value="5" step="1"></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>ثابت المعادلة (٢)</span><b class="js-c2v">٥</b></div><input type="range" class="wq-range cool js-c2" min="-9" max="9" value="5" step="1"></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">قيمة س</div><div class="wq-v js-x">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">قيمة ص</div><div class="wq-v js-y">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">الحذف بالضرب</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var b1=q('.js-b1'),b2=q('.js-b2'),c1=q('.js-c1'),c2=q('.js-c2');
    var stage=q('.js-stage'), elSol=q('.js-sol'), elIc=q('.js-ic'), elX=q('.js-etext');
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }

    function refresh(){
      var B1=+b1.value,B2=+b2.value,C1=+c1.value,C2=+c2.value;
      q('.js-b1v').textContent=sig(B1); q('.js-b2v').textContent=sig(B2);
      q('.js-c1v').textContent=sig(C1); q('.js-c2v').textContent=sig(C2);
      var em=css('--ember-deep','#E4681B'), tl=css('--subject-deep','#0B7E86'), mu=css('--muted','#7C82A8'), bad=css('--bad','#E7466B');
      var L=B1*B2/gcd(B1,B2), k1=L/B1, k2=L/B2;
      var denom=A1*k1 - A2*k2, num=C1*k1 - C2*k2;
      var rows=[
        '<div>'+'<span style="color:'+mu+'">(١)</span>  '+mx(T(A1,'س')+' + '+T(B1,'ص')+' = '+sig(C1))+'</div>',
        '<div>'+'<span style="color:'+mu+'">(٢)</span>  '+mx(T(A2,'س')+' + '+T(B2,'ص')+' = '+sig(C2))+'</div>',
        '<div style="border-top:1.5px dashed '+css('--line-strong','#D6D9EC')+';padding-top:6px;color:'+em+';font-weight:700;font-size:11.5px">وحّدْ معاملَي ص إلى المضاعف المشترك '+mx('L = '+toAr(L))+' ← اضربْ (١)×'+toAr(k1)+' و(٢)×'+toAr(k2)+'</div>',
        '<div>'+mx(T(A1*k1,'س')+' + '+T(L,'ص')+' = '+sig(C1*k1))+'</div>',
        '<div>'+mx(T(A2*k2,'س')+' + '+T(L,'ص')+' = '+sig(C2*k2))+'</div>'
      ];
      if(denom===0){
        rows.push('<div style="color:'+bad+';font-weight:700;font-size:12px">اطرحْ ← يُحذف س وص معًا: لا حلَّ وحيد (متوازيان أو منطبقان)</div>');
        elSol.textContent='لا حلَّ وحيد'; elSol.style.color=bad;
        q('.js-x').textContent='—'; q('.js-y').textContent='—';
      } else {
        var X=num/denom, Y=(C1 - A1*X)/B1;
        rows.push('<div style="color:'+em+';font-weight:700;font-size:11.5px">اطرحِ المعادلتين ← يُحذف ص:</div>');
        rows.push('<div style="color:'+tl+'">'+mx(T(denom,'س')+' = '+sig(num)+'  ←  س = '+arNum(X))+'</div>');
        rows.push('<div style="color:'+tl+'">'+mx('بالتعويض: ص = '+arNum(Y))+'</div>');
        elSol.innerHTML='<span style="unicode-bidi:isolate;direction:ltr">('+arNum(Y)+'، '+arNum(X)+')</span>'; elSol.style.color=tl;
        q('.js-x').textContent=arNum(X); q('.js-y').textContent=arNum(Y);
      }
      stage.innerHTML=rows.join('');
      elIc.style.background=tl; elIc.innerHTML=ICN;
      elX.innerHTML='حين لا يتساوى معاملا المتغيّر (هنا <b>ص</b>)، لا يكفي الجمعُ أو الطرح مباشرةً. نضربُ كلَّ معادلةٍ في عددٍ يجعلُ معاملَي ص متساويين (<b>المضاعف المشترك الأصغر</b>)، ثم <b>نطرح</b> فيُحذف ص. الحلُّ نفسُه هو نقطةُ تقاطع الخطّين.';
    }
    [b1,b2,c1,c2].forEach(function(el){ el.addEventListener('input', refresh); });
    q('.js-reset').onclick=function(){ b1.value=3;b2.value=2;c1.value=5;c2.value=5; refresh(); };
    ['.js-b1v','.js-b2v','.js-c1v','.js-c2v','.js-x','.js-y'].forEach(function(s){ var e=q(s); e.style.direction='ltr'; e.style.unicodeBidi='isolate'; });
    refresh();
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
