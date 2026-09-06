/* ============================================================
   محاكاة تفاعلية — حجوم المجسّمات
   حجمُ المنشور/الأسطوانة = مساحة القاعدة × الارتفاع. أمّا الهرم/المخروط
   فحجمُه = ثلثُ ذلك. غيّرِ الأبعادَ واختر المجسّم لترى الصيغة والقيمة.
   الاستعمال من المحرّك:  window.SIMS['solids'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['solids'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8l8-4 8 4v8l-8 4-8-4z"/><path d="M4 8l8 4 8-4M12 12v8"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  function arNum(x){ var r=Math.round(x*10)/10; return toAr(String(r)).replace(/\./g,'٫'); }
  var PI='٣٫١٤';

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="مجسّم ثلاثيّ الأبعاد">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="رسم مجسّم مع أبعاده"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">الحجم:</span><span class="wq-val js-vol">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-quick" style="flex-wrap:wrap"><button type="button" class="wq-qbtn js-sh" data-s="prism" aria-pressed="true">منشور</button><button type="button" class="wq-qbtn js-sh" data-s="cyl">أسطوانة</button><button type="button" class="wq-qbtn js-sh" data-s="pyr">هرم</button><button type="button" class="wq-qbtn js-sh" data-s="cone">مخروط</button></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span class="js-rlbl">نصف القطر / الضلع</span><b class="js-rv">٣</b></div><input type="range" class="wq-range warm js-r" min="1" max="5" value="3" step="1"></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>الارتفاع</span><b class="js-hv">٤</b></div><input type="range" class="wq-range cool js-h" min="1" max="6" value="4" step="1"></div>'+
          '<div class="wq-eq"><span class="wq-eqt">الصيغة</span><div class="wq-eqv"><span class="js-formula">—</span></div></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">مساحة القاعدة</div><div class="wq-v js-base">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">النوع</div><div class="wq-v js-kind" style="font-size:14px">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">—</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, CX=150, BY=170;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var qa=function(s){ return Array.prototype.slice.call(container.querySelectorAll(s)); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var rIn=q('.js-r'), hIn=q('.js-h'), elVol=q('.js-vol'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var shape='prism', dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function drawAr(x,y,str,col){ ctx.fillStyle=col; ctx.save(); ctx.font='700 10px "IBM Plex Sans Arabic",sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='rtl'; ctx.fillText(str,x,y); ctx.restore(); }
    function drawNum(x,y,str,col){ ctx.fillStyle=col; ctx.save(); ctx.font='800 11px Cairo,sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='ltr'; ctx.fillText(str,x,y); ctx.restore(); }

    function draw(){
      var r=+rIn.value, h=+hIn.value, w=r*10, hp=h*17, dep=w*0.42;
      var fill=css('--subject-soft','#E2F5F5'), line=css('--subject-deep','#0B7E86'), top=css('--subject','#0FA3AA');
      ctx.clearRect(0,0,W,H);
      ctx.strokeStyle=line; ctx.lineWidth=2; ctx.lineJoin='round';
      if(shape==='prism'){
        ctx.fillStyle=fill; ctx.fillRect(CX-w,BY-hp,2*w,hp); ctx.strokeRect(CX-w,BY-hp,2*w,hp);
        ctx.fillStyle=top; ctx.globalAlpha=.85; ctx.beginPath(); ctx.moveTo(CX-w,BY-hp); ctx.lineTo(CX-w+dep,BY-hp-dep*0.7); ctx.lineTo(CX+w+dep,BY-hp-dep*0.7); ctx.lineTo(CX+w,BY-hp); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.globalAlpha=1;
        ctx.fillStyle=css('--subject','#0FA3AA'); ctx.globalAlpha=.55; ctx.beginPath(); ctx.moveTo(CX+w,BY-hp); ctx.lineTo(CX+w+dep,BY-hp-dep*0.7); ctx.lineTo(CX+w+dep,BY-dep*0.7); ctx.lineTo(CX+w,BY); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.globalAlpha=1;
      } else if(shape==='cyl'){
        var ry=w*0.32;
        ctx.fillStyle=fill; ctx.fillRect(CX-w,BY-hp,2*w,hp);
        ctx.beginPath(); ctx.moveTo(CX-w,BY-hp); ctx.lineTo(CX-w,BY); ctx.moveTo(CX+w,BY-hp); ctx.lineTo(CX+w,BY); ctx.stroke();
        ctx.beginPath(); ctx.ellipse(CX,BY,w,ry,0,0,6.2832); ctx.fill(); ctx.stroke();
        ctx.fillStyle=top; ctx.beginPath(); ctx.ellipse(CX,BY-hp,w,ry,0,0,6.2832); ctx.fill(); ctx.stroke();
      } else if(shape==='cone'){
        var ry2=w*0.32;
        ctx.fillStyle=fill; ctx.beginPath(); ctx.moveTo(CX-w,BY); ctx.lineTo(CX,BY-hp); ctx.lineTo(CX+w,BY); ctx.closePath(); ctx.fill();
        ctx.beginPath(); ctx.ellipse(CX,BY,w,ry2,0,0,6.2832); ctx.fill(); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(CX-w,BY); ctx.lineTo(CX,BY-hp); ctx.lineTo(CX+w,BY); ctx.stroke();
      } else { // هرم
        var d=w*0.5;
        ctx.fillStyle=fill; ctx.beginPath(); ctx.moveTo(CX-w,BY); ctx.lineTo(CX+w-d,BY-d*0.6); ctx.lineTo(CX+w,BY); ctx.lineTo(CX-w+d,BY+d*0.6); ctx.closePath(); ctx.fill(); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(CX,BY-hp); ctx.lineTo(CX-w,BY); ctx.moveTo(CX,BY-hp); ctx.lineTo(CX+w,BY); ctx.moveTo(CX,BY-hp); ctx.lineTo(CX+w-d,BY-d*0.6); ctx.moveTo(CX,BY-hp); ctx.lineTo(CX-w+d,BY+d*0.6); ctx.stroke();
      }
      // أبعاد
      ctx.strokeStyle=css('--ember','#F2892E'); ctx.lineWidth=1.6; ctx.beginPath(); ctx.moveTo(CX+w+dep+8,BY-hp-dep*0.7); ctx.lineTo(CX+w+dep+8,BY); ctx.stroke();
      drawNum(CX+w+dep+16, BY-hp/2, toAr(h), css('--ember-deep','#E4681B'));
      drawAr(CX, BY+ (shape==='pyr'? w*0.5+14: (shape==='prism'?16:18)), (shape==='cyl'||shape==='cone')?'نق '+toAr(r):'ض '+toAr(r), css('--subject-deep','#0B7E86'));
    }
    function vol(){ var r=+rIn.value, h=+hIn.value;
      if(shape==='prism') return {v:r*r*h, base:r*r, f:'الحجم = ('+toAr(r)+'×'+toAr(r)+') × '+toAr(h)};
      if(shape==='cyl') return {v:Math.PI*r*r*h, base:Math.PI*r*r, f:'الحجم = π×'+toAr(r)+'²×'+toAr(h)};
      if(shape==='pyr') return {v:r*r*h/3, base:r*r, f:'الحجم = ⅓ × ('+toAr(r)+'×'+toAr(r)+') × '+toAr(h)};
      return {v:Math.PI*r*r*h/3, base:Math.PI*r*r, f:'الحجم = ⅓ × π×'+toAr(r)+'²×'+toAr(h)}; }
    function refresh(){
      var r=+rIn.value, h=+hIn.value, V=vol();
      q('.js-rv').textContent=toAr(r); q('.js-hv').textContent=toAr(h);
      q('.js-rlbl').textContent = (shape==='cyl'||shape==='cone')?'نصف القطر':'طول الضلع';
      elVol.textContent=arNum(V.v)+' و³'; elVol.style.color=css('--subject-deep','#0B7E86');
      q('.js-base').textContent=arNum(V.base)+' و²';
      q('.js-kind').textContent = (shape==='pyr'||shape==='cone')?'ثلثُ القائم':'قائم';
      q('.js-formula').textContent=V.f+' = '+arNum(V.v);
      qa('.js-sh').forEach(function(b){ b.setAttribute('aria-pressed', b.getAttribute('data-s')===shape?'true':'false'); });
      var names={prism:'المنشور',cyl:'الأسطوانة',pyr:'الهرم',cone:'المخروط'};
      elIc.style.background=css('--subject-deep','#0B7E86'); elIc.innerHTML=ICN; elTit.textContent='حجم '+names[shape];
      elX.innerHTML = (shape==='pyr'||shape==='cone')
        ? 'حجمُ '+names[shape]+' = <b>ثلث</b> (مساحة القاعدة × الارتفاع) — أي ثلثُ المنشور/الأسطوانة بالقاعدة والارتفاع نفسيهما. لاحظِ العاملَ <b>⅓</b>.'
        : 'حجمُ '+names[shape]+' = <b>مساحة القاعدة × الارتفاع</b>. '+(shape==='cyl'?'ومساحةُ قاعدة الأسطوانة دائرة = π نق².':'ومساحةُ قاعدة المنشور هنا مربّع = الضلع².');
      draw();
    }
    qa('.js-sh').forEach(function(b){ b.addEventListener('click', function(){ shape=b.getAttribute('data-s'); refresh(); }); });
    [rIn,hIn].forEach(function(el){ el.addEventListener('input', refresh); });
    q('.js-reset').onclick=function(){ shape='prism'; rIn.value=3; hIn.value=4; refresh(); };
    ['.js-rv','.js-hv','.js-vol','.js-base','.js-formula'].forEach(function(s){ var e=q(s); e.style.direction='ltr'; e.style.unicodeBidi='isolate'; });
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
