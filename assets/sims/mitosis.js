/* ============================================================
   محاكاة تفاعلية — الانقسام المتساوي (أطوار انقسام الخلية)
   يمرّ الانقسامُ المتساوي بأطوار: البيني (تتضاعف الكروموسومات) ←
   التمهيدي ← الاستوائي ← الانفصالي ← النهائي (خليّتان مطابقتان للأصل).
   الاستعمال من المحرّك:  window.SIMS['mitosis'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['mitosis'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="8" cy="12" r="5"/><circle cx="16" cy="12" r="5"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }

  var PH=[
    {ar:'الطور البيني', t:'الطور البيني', x:'تنمو الخليةُ وتنسخُ مادّتها الوراثية: تتضاعفُ الكروموساتُ فيصير لكلٍّ منها <b>كروماتيدتان</b> شقيقتان متّصلتان، والنواةُ ما زالت سليمة.'},
    {ar:'التمهيدي', t:'الطور التمهيدي', x:'تتكثّفُ الكروموساتُ فتُصبح مرئيةً (شكلُ X)، ويتلاشى الغلافُ النوويّ، وتبدأُ خيوطُ المغزل بالتكوّن.'},
    {ar:'الاستوائي', t:'الطور الاستوائي', x:'تصطفُّ الكروموساتُ في <b>منتصف</b> الخلية (خطُّ الاستواء)، وترتبطُ بها خيوطُ المغزل من القطبين.'},
    {ar:'الانفصالي', t:'الطور الانفصالي', x:'تنفصلُ الكروماتيدتان الشقيقتان لكلِّ كروموسوم، وتُسحبان إلى <b>قطبين متقابلين</b> من الخلية.'},
    {ar:'النهائي', t:'الطور النهائي', x:'يتكوّنُ غلافان نوويّان، وتنقسمُ الخليةُ إلى <b>خليّتين جديدتين مطابقتين</b> للأصل (لكلٍّ العددُ الكاملُ من الكروموسومات).'}
  ];

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="أطوار انقسام الخلية المتساوي">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="خلية تمرّ بأطوار الانقسام المتساوي"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">الطور:</span><span class="wq-val js-ph">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>الطور</span><b class="js-idx">١ / ٥</b></div><input type="range" class="wq-range warm js-p" min="0" max="4" value="0" step="1"></div>'+
          '<div class="wq-quick"><button type="button" class="wq-qbtn js-prev">◀ السابق</button><button type="button" class="wq-qbtn js-next">التالي ▶</button></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">عدد الخلايا</div><div class="wq-v js-cells">١</div></div>'+
          '<div class="wq-read"><div class="wq-k">النتيجة</div><div class="wq-v js-out" style="font-size:13px">خليّة أصل</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">—</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, CX=150, CY=118;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var qa=function(s){ return Array.prototype.slice.call(container.querySelectorAll(s)); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var pIn=q('.js-p'), elPh=q('.js-ph'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    var EM=function(){return css('--ember','#F2892E');}, TL=function(){return css('--subject','#0FA3AA');};

    function bar(x1,y1,x2,y2,col){ ctx.strokeStyle=col; ctx.lineWidth=6; ctx.lineCap='round'; ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.stroke(); }
    function xchrom(x,y,col){ bar(x-7,y-9,x+7,y+9,col); bar(x+7,y-9,x-7,y+9,col); } // كروموسوم مضاعف (X)
    function ichrom(x,y,col){ bar(x-4,y-9,x+4,y+9,col); } // كروماتيدة مفردة
    function membrane(cx,rx,ry){ ctx.strokeStyle=css('--ink-soft','#4A5080'); ctx.lineWidth=2.5;
      ctx.beginPath(); ctx.ellipse(cx,CY,rx,ry,0,0,6.2832); ctx.fillStyle=css('--surface-2','#FBFBFE'); ctx.fill(); ctx.stroke(); }
    function nucleus(cx,r){ ctx.strokeStyle=css('--brand','#4B45C6'); ctx.setLineDash([4,3]); ctx.lineWidth=1.8;
      ctx.beginPath(); ctx.arc(cx,CY,r,0,6.2832); ctx.stroke(); ctx.setLineDash([]); }
    function spindle(){ ctx.strokeStyle=css('--muted','#7C82A8'); ctx.lineWidth=1;
      for(var k=-1;k<=1;k++){ ctx.beginPath(); ctx.moveTo(CX-92,CY); ctx.lineTo(CX,CY+k*26); ctx.moveTo(CX+92,CY); ctx.lineTo(CX,CY+k*26); ctx.stroke(); } }

    function draw(p){
      ctx.clearRect(0,0,W,H);
      if(p<=3) membrane(CX,96,80);
      if(p===0){ nucleus(CX,56);
        // كروماتين متضاعف (خيطان لكل كروموسوم)
        ctx.strokeStyle=EM(); ctx.lineWidth=3; ctx.lineCap='round';
        ctx.beginPath(); ctx.moveTo(CX-30,CY-20); ctx.quadraticCurveTo(CX-10,CY-30,CX+2,CY-8); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(CX-26,CY-16); ctx.quadraticCurveTo(CX-6,CY-26,CX+6,CY-4); ctx.stroke();
        ctx.strokeStyle=TL();
        ctx.beginPath(); ctx.moveTo(CX-8,CY+8); ctx.quadraticCurveTo(CX+12,CY+22,CX+30,CY+6); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(CX-4,CY+12); ctx.quadraticCurveTo(CX+16,CY+26,CX+34,CY+10); ctx.stroke();
      }
      else if(p===1){ xchrom(CX-34,CY-14,EM()); xchrom(CX+30,CY-22,TL()); xchrom(CX-18,CY+26,TL()); xchrom(CX+40,CY+18,EM()); }
      else if(p===2){ spindle(); xchrom(CX,CY-30,EM()); xchrom(CX,CY-8,TL()); xchrom(CX,CY+14,EM()); xchrom(CX,CY+34,TL()); }
      else if(p===3){ spindle();
        ichrom(CX-52,CY-24,EM()); ichrom(CX-52,CY+6,TL()); ichrom(CX-52,CY+30,EM());
        ichrom(CX+52,CY-24,EM()); ichrom(CX+52,CY+6,TL()); ichrom(CX+52,CY+30,EM());
        ichrom(CX-40,CY+16,TL()); ichrom(CX+40,CY-6,TL()); }
      else { // نهائي: خليّتان
        membrane(CX-52,50,72); membrane(CX+52,50,72);
        nucleus(CX-52,34); nucleus(CX+52,34);
        ichrom(CX-58,CY-6,EM()); ichrom(CX-46,CY+8,TL());
        ichrom(CX+46,CY-6,EM()); ichrom(CX+58,CY+8,TL());
      }
    }
    function refresh(){
      var p=+pIn.value, P=PH[p];
      q('.js-idx').textContent=toAr(p+1)+' / ٥';
      elPh.textContent=P.ar; elPh.style.color=css('--subject-deep','#0B7E86');
      q('.js-cells').textContent = p===4?'٢':'١';
      q('.js-out').textContent = p===4?'خليّتان مطابقتان':(p===0?'خليّة أصل':'قيد الانقسام');
      elIc.style.background=css('--subject-deep','#0B7E86'); elIc.innerHTML=ICN;
      elTit.textContent=P.t; elTit.style.color=css('--subject-deep','#0B7E86'); elX.innerHTML=P.x;
      draw(p);
    }
    pIn.addEventListener('input', refresh);
    q('.js-prev').onclick=function(){ pIn.value=Math.max(0,+pIn.value-1); refresh(); };
    q('.js-next').onclick=function(){ pIn.value=Math.min(4,+pIn.value+1); refresh(); };
    q('.js-reset').onclick=function(){ pIn.value=0; refresh(); };
    q('.js-idx').style.direction='ltr'; q('.js-idx').style.unicodeBidi='isolate';
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
