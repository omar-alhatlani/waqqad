/* ============================================================
   محاكاة تفاعلية — العناصر والمركبات والمخاليط
   اختر النوع وشاهد مخطّطَ الجسيمات: العنصرُ نوعٌ واحدٌ من الذرّات،
   والمركّبُ ذرّاتٌ مختلفةٌ مرتبطةٌ بنسبةٍ ثابتة، والمخلوطُ مزيجٌ فيزيائيّ.
   الاستعمال من المحرّك:  window.SIMS['matter'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['matter'] = (function(){

  var ATOM='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="2.4" fill="currentColor" stroke="none"/><ellipse cx="12" cy="12" rx="10" ry="4.4"/><ellipse cx="12" cy="12" rx="10" ry="4.4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.4" transform="rotate(120 12 12)"/></svg>';
  var A=[228,104,27], B=[15,163,170], Cc=[59,111,224];
  function rgb(c){ return 'rgb('+c[0]+','+c[1]+','+c[2]+')'; }

  var TYPES={
    element:{ ar:'عنصر', title:'العنصر — نوعٌ واحدٌ من الذرّات',
      text:'العنصرُ مادةٌ نقيّةٌ مكوّنةٌ من <b>نوعٍ واحدٍ فقط من الذرّات</b>، ولا يمكن تحليلُه إلى موادَّ أبسطَ بالطرق الكيميائية. أمثلة: الأكسجين، الذهب، الحديد.' },
    compound:{ ar:'مركّب', title:'المركّب — ذرّاتٌ مرتبطة بنسبةٍ ثابتة',
      text:'المركّبُ مادةٌ نقيّةٌ من <b>نوعين أو أكثر من الذرّات مرتبطةٍ كيميائيًّا بنسبةٍ ثابتة</b>، وله خواصُّ تختلف عن عناصره. أمثلة: الماء (H₂O)، ملح الطعام، ثاني أكسيد الكربون.' },
    mixture:{ ar:'مخلوط', title:'المخلوط — مزيجٌ فيزيائيّ',
      text:'المخلوطُ <b>مزيجٌ فيزيائيّ</b> من مادّتين أو أكثر دون ارتباطٍ كيميائيّ، تحتفظُ كلُّ مادةٍ بخواصّها ويمكن فصلُها بطرقٍ فيزيائية. أمثلة: ماء وملح، الهواء، السلطة.' }
  };

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="مخطط جسيمات المادة">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="مخطط جسيمات: عنصر أو مركّب أو مخلوط"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">النوع:</span><span class="wq-val js-t">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sllabel" style="margin-bottom:8px"><span>اختر نوع المادة</span></div>'+
          '<div class="wq-quick"><button type="button" class="wq-qbtn" data-t="element" aria-pressed="true">عنصر</button><button type="button" class="wq-qbtn" data-t="compound">مركّب</button><button type="button" class="wq-qbtn" data-t="mixture">مخلوط</button></div>'+
          '<div class="wq-eq" style="margin-top:12px"><span class="wq-eqt">دليل الجسيمات</span><div class="wq-eqv js-key" style="font-size:12px;direction:rtl">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">—</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var elT=q('.js-t'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var type='element';
    var dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function atom(x,y,col,r){ r=r||9; ctx.fillStyle=rgb(col); ctx.beginPath(); ctx.arc(x,y,r,0,6.2832); ctx.fill();
      ctx.fillStyle='rgba(255,255,255,.35)'; ctx.beginPath(); ctx.arc(x-r*0.3,y-r*0.32,r*0.32,0,6.2832); ctx.fill(); }
    function bond(x1,y1,x2,y2){ ctx.strokeStyle=css('--line-strong','#D6D9EC'); ctx.lineWidth=3; ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.stroke(); }
    function molecule(cx,cy){ // مركّب شبيهٌ بالماء: مركزٌ (B) وذرّتان (A)
      bond(cx,cy,cx-11,cy+9); bond(cx,cy,cx+11,cy+9);
      atom(cx,cy,B,9); atom(cx-11,cy+9,A,6); atom(cx+11,cy+9,A,6); }

    function draw(){
      ctx.clearRect(0,0,W,H);
      var x0=44,x1=256,y0=30,y1=200;
      if(type==='element'){
        for(var r=0;r<3;r++) for(var c=0;c<4;c++) atom(x0+c*((x1-x0)/3), y0+r*((y1-y0)/2), A, 11);
      } else if(type==='compound'){
        for(var r=0;r<2;r++) for(var c=0;c<3;c++) molecule(x0+18+c*((x1-x0)/2.6), y0+18+r*((y1-y0)/1.7));
      } else {
        // مخلوط: ذرّاتٌ مفردةٌ وجزيئاتٌ مختلفةٌ غير مرتبطة
        var items=[['a',60,60],['m',150,55],['b',235,70],['b',70,130],['m',175,140],['a',110,180],['b',210,180],['a',255,140],['m',60,190]];
        items.forEach(function(it){ if(it[0]==='a') atom(it[1],it[2],A,10); else if(it[0]==='b') atom(it[1],it[2],Cc,10);
          else { bond(it[1]-8,it[2],it[1]+8,it[2]); atom(it[1]-8,it[2],A,8); atom(it[1]+8,it[2],B,8); } });
      }
    }
    function refresh(){
      var T=TYPES[type];
      elT.textContent=T.ar; elT.style.color='var(--subject-deep)';
      q('.js-key').textContent = type==='element' ? 'كلُّها ذرّاتٌ من نوعٍ واحد (🟠)' : (type==='compound' ? 'جزيئاتٌ متطابقة: ذرّتان (🟠) مرتبطتان بذرّة (🟢)' : 'ذرّاتٌ وجزيئاتٌ مختلفةٌ غير مرتبطة');
      elIc.style.background='var(--subject-deep)'; elIc.innerHTML=ATOM;
      elTit.textContent=T.title; elTit.style.color='var(--subject-deep)'; elX.innerHTML=T.text;
      draw();
    }
    container.querySelectorAll('.wq-qbtn').forEach(function(b){ b.onclick=function(){ type=b.getAttribute('data-t');
      container.querySelectorAll('.wq-qbtn').forEach(function(x){ x.setAttribute('aria-pressed', x===b); }); refresh(); }; });
    q('.js-reset').onclick=function(){ type='element'; container.querySelectorAll('.wq-qbtn').forEach(function(x){ x.setAttribute('aria-pressed', x.getAttribute('data-t')==='element'); }); refresh(); };
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
