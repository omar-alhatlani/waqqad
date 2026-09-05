/* ============================================================
   محاكاة تفاعلية — التغيّرات الكيميائية ودلائلها
   اختر تغيُّرًا وشاهد دلائلَ التفاعل الكيميائي: تصاعدُ غاز، تغيّرُ لون،
   إنتاجُ حرارةٍ/ضوء، تكوّنُ مادةٍ جديدة. وما لا دلائلَ له فتغيُّرٌ فيزيائيّ.
   الاستعمال من المحرّك:  window.SIMS['chemical'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['chemical'] = (function(){

  var FLASK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3"/><path d="M7 16h10"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }

  // كل تغيّر: هل كيميائيّ؟ ودلائله [غاز، لون، طاقة، مادة جديدة]
  var CASES={
    burn:{ ar:'احتراق الخشب', chem:true, s:[1,1,1,1], note:'ينتج رمادٌ وغازاتٌ وحرارةٌ وضوء — موادُّ جديدة.' },
    rust:{ ar:'صدأ الحديد', chem:true, s:[0,1,0,1], note:'يتّحد الحديدُ مع الأكسجين مكوّنًا أكسيدَ الحديد (مادة جديدة، لونٌ بنيّ).' },
    fizz:{ ar:'صودا الخبز + الخلّ', chem:true, s:[1,0,0,1], note:'يتصاعدُ غازُ ثاني أكسيد الكربون (فقاعات) — تفاعلٌ كيميائيّ.' },
    sugar:{ ar:'ذوبان السكر', chem:false, s:[0,0,0,0], note:'السكرُ يذوبُ في الماء لكنه يبقى سكرًا؛ لا مادةَ جديدة ← تغيُّرٌ فيزيائيّ.' },
    cut:{ ar:'تقطيع الورق', chem:false, s:[0,0,0,0], note:'يتغيّرُ الشكلُ فقط والورقُ يبقى ورقًا ← تغيُّرٌ فيزيائيّ.' }
  };
  var SIGNS=[['تصاعد غاز',[15,163,170]],['تغيّر لون',[122,91,232]],['حرارة/ضوء',[228,104,27]],['مادة جديدة',[244,183,64]]];

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="دلائل التفاعل الكيميائي">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="دلائل التفاعل الكيميائي الأربعة"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">التصنيف:</span><span class="wq-val js-cls">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sllabel" style="margin-bottom:8px"><span>اختر التغيُّر</span></div>'+
          '<div class="wq-quick" style="flex-wrap:wrap;gap:8px">'+
            '<button type="button" class="wq-qbtn" data-c="burn" aria-pressed="true">احتراق</button>'+
            '<button type="button" class="wq-qbtn" data-c="rust">صدأ</button>'+
            '<button type="button" class="wq-qbtn" data-c="fizz">صودا+خلّ</button>'+
            '<button type="button" class="wq-qbtn" data-c="sugar">ذوبان سكر</button>'+
            '<button type="button" class="wq-qbtn" data-c="cut">تقطيع ورق</button></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read" style="grid-column:1/-1"><div class="wq-k">عدد الدلائل الظاهرة</div><div class="wq-v js-count">—</div></div>'+
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
    var elCls=q('.js-cls'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var cs='burn';
    var dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function icon(kind,x,y,on){
      var c=on?SIGNS[kind][1]:[140,140,160], col='rgb('+c[0]+','+c[1]+','+c[2]+')';
      ctx.strokeStyle=col; ctx.fillStyle=col; ctx.lineWidth=2.4; ctx.globalAlpha=on?1:0.45;
      if(kind===0){ [[-7,4],[0,-2],[7,5]].forEach(function(o,i){ ctx.beginPath(); ctx.arc(x+o[0],y+o[1],4-i*0.4,0,6.2832); ctx.stroke(); }); }
      else if(kind===1){ ctx.beginPath(); ctx.arc(x,y,9,-1.57,1.57); ctx.fill(); ctx.beginPath(); ctx.arc(x,y,9,1.57,4.71); ctx.stroke(); }
      else if(kind===2){ ctx.beginPath(); ctx.moveTo(x+2,y-9); ctx.quadraticCurveTo(x-6,y-2,x-3,y+4); ctx.quadraticCurveTo(x,y+9,x+4,y+5); ctx.quadraticCurveTo(x+8,y,x+2,y-9); ctx.closePath(); ctx.fill(); }
      else { for(var a=0;a<8;a++){ var r=(a%2?3:9); ctx.lineTo(x+Math.cos(a*0.785)*r, y+Math.sin(a*0.785)*r); } ctx.closePath(); ctx.fill(); ctx.beginPath(); }
      ctx.globalAlpha=1;
    }
    function draw(){
      var d=CASES[cs];
      ctx.clearRect(0,0,W,H);
      ctx.font='700 11px "IBM Plex Sans Arabic",sans-serif'; ctx.textAlign='center'; ctx.textBaseline='top';
      var cols=[[88,64],[212,64],[88,148],[212,148]];
      for(var i=0;i<4;i++){ var cx=cols[i][0], cy=cols[i][1], on=d.s[i]===1;
        ctx.fillStyle=on?css('--surface-2','#FBFBFE'):css('--surface','#fff');
        ctx.strokeStyle=on?'rgb('+SIGNS[i][1].join(',')+')':css('--line','#E7E9F5'); ctx.lineWidth=on?2.5:1.5;
        ctx.beginPath(); ctx.roundRect(cx-58,cy-38,116,72,12); ctx.fill(); ctx.stroke();
        ctx.beginPath(); icon(i,cx,cy-6,on);
        ctx.fillStyle=on?css('--ink','#1C2143'):css('--muted','#7C82A8'); ctx.font='700 11px "IBM Plex Sans Arabic",sans-serif';
        ctx.fillText(SIGNS[i][0], cx, cy+16);
        if(on){ ctx.fillStyle='rgb('+SIGNS[i][1].join(',')+')'; ctx.font='800 12px Cairo,sans-serif'; ctx.fillText('✓', cx+44, cy-32); }
      }
    }
    function refresh(){
      var d=CASES[cs], count=d.s.reduce(function(a,b){return a+b;},0);
      elCls.textContent = d.chem?'تغيُّرٌ كيميائيّ':'تغيُّرٌ فيزيائيّ';
      elCls.style.color = d.chem?'var(--ember-deep)':'var(--subject-deep)';
      q('.js-count').textContent = toAr(count)+' من ٤';
      elIc.style.background = d.chem?'var(--ember-deep)':'var(--subject-deep)'; elIc.innerHTML=FLASK;
      elTit.textContent = d.ar+' — '+(d.chem?'تفاعلٌ كيميائيّ':'تغيُّرٌ فيزيائيّ'); elTit.style.color = d.chem?'var(--ember-deep)':'var(--subject-deep)';
      elX.textContent = d.note + (d.chem?' كلّما ظهر دليلٌ أو أكثر رجّح ذلك حدوثَ تفاعلٍ كيميائيّ.':'');
      draw();
    }
    container.querySelectorAll('.wq-qbtn').forEach(function(b){ b.onclick=function(){ cs=b.getAttribute('data-c');
      container.querySelectorAll('.wq-qbtn').forEach(function(x){ x.setAttribute('aria-pressed', x===b); }); refresh(); }; });
    q('.js-reset').onclick=function(){ cs='burn'; container.querySelectorAll('.wq-qbtn').forEach(function(x){ x.setAttribute('aria-pressed', x.getAttribute('data-c')==='burn'); }); refresh(); };
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
