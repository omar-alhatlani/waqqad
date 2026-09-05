/* ============================================================
   محاكاة تفاعلية — DNA وتزاوج القواعد
   قواعدُ DNA أربع: A T G C، وتتزاوج دائمًا A مع T، وG مع C. من سلسلةٍ
   قالبٍ تُبنى السلسلةُ المكمّلة. وفي RNA يحلّ اليوراسيل U محلَّ الثايمين.
   الاستعمال من المحرّك:  window.SIMS['dna'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['dna'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M7 3c0 6 10 6 10 12M7 21c0-6 10-6 10-12"/><path d="M8 7h8M8 17h8M9 12h6"/></svg>';
  var ORDER=['A','T','G','C'];
  function comp(b,rna){ return b==='A'?(rna?'U':'T'):b==='T'?'A':b==='G'?'C':'G'; }
  function bcol(b,css){ return b==='A'?css('--ember','#F2892E'):b==='T'?css('--subject','#0FA3AA'):b==='G'?css('--s-math','#3B6FE0'):b==='C'?css('--s-en','#7A5BE8'):css('--gold','#F4B740'); }

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="سلّم DNA وتزاوج القواعد">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="سلّم DNA بقواعد متزاوجة"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">التزاوج:</span><span class="wq-val js-rule">A ↔ T · G ↔ C</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sllabel"><span>السلسلة القالب (انقرْ لتغيير القاعدة)</span></div>'+
          '<div class="wq-quick js-bases" style="margin-bottom:2px"></div>'+
          '<div class="wq-quick"><button type="button" class="wq-qbtn js-mode" data-m="dna" aria-pressed="true">DNA مكمّلة</button><button type="button" class="wq-qbtn js-mode" data-m="rna">RNA (يوراسيل U)</button></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">القالب</div><div class="wq-v js-tpl" style="font-size:14px;letter-spacing:2px">—</div></div>'+
          '<div class="wq-read"><div class="wq-k js-clbl">المكمّلة</div><div class="wq-v js-cmp" style="font-size:14px;letter-spacing:2px">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">تزاوج القواعد</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, N=6;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var qa=function(s){ return Array.prototype.slice.call(container.querySelectorAll(s)); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var elRule=q('.js-rule'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var tpl=['A','T','G','C','A','G'], mode='dna', dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }

    function baseBox(x,y,b,col){ ctx.fillStyle=col; ctx.beginPath(); ctx.roundRect(x,y-13,34,26,7); ctx.fill();
      ctx.fillStyle='#fff'; ctx.font='800 15px Cairo,sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='ltr'; ctx.fillText(b,x+17,y); }
    function draw(){
      var rna=mode==='rna';
      ctx.clearRect(0,0,W,H);
      var LX=64, RX=202, y0=32, dy=(H-56)/(N-1);
      // العمودان (الهيكل السكّري الفوسفاتي)
      ctx.strokeStyle=css('--ink-soft','#4A5080'); ctx.lineWidth=5; ctx.lineCap='round';
      ctx.beginPath(); ctx.moveTo(LX,y0-8); ctx.lineTo(LX,y0+dy*(N-1)+8); ctx.stroke();
      if(!rna){ ctx.beginPath(); ctx.moveTo(RX+34,y0-8); ctx.lineTo(RX+34,y0+dy*(N-1)+8); ctx.stroke(); }
      for(var i=0;i<N;i++){ var y=y0+dy*i, b=tpl[i], c=comp(b,rna);
        ctx.strokeStyle=css('--line-strong','#D6D9EC'); ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(LX,y); ctx.lineTo(RX+34,y); ctx.stroke();
        baseBox(LX,y,b,bcol(b,css));
        baseBox(RX,y,c,bcol(c,css));
      }
      // عناوين
      ctx.fillStyle=css('--muted','#7C82A8'); ctx.font='700 10px "IBM Plex Sans Arabic",sans-serif'; ctx.textAlign='center'; ctx.direction='rtl';
      ctx.fillText('قالب', LX+17, y0-20); ctx.fillText(rna?'RNA':'مكمّلة', RX+17, y0-20);
    }
    function renderBtns(){
      var box=q('.js-bases'); box.innerHTML='';
      tpl.forEach(function(b,i){ var bt=document.createElement('button'); bt.type='button'; bt.className='wq-qbtn';
        bt.textContent=b; bt.style.color='#fff'; bt.style.background=bcol(b,css); bt.style.borderColor=bcol(b,css); bt.style.fontWeight='800';
        bt.addEventListener('click', function(){ tpl[i]=ORDER[(ORDER.indexOf(tpl[i])+1)%4]; refresh(); }); box.appendChild(bt); });
    }
    function refresh(){
      var rna=mode==='rna';
      renderBtns(); draw();
      q('.js-tpl').textContent=tpl.join(' ');
      q('.js-cmp').textContent=tpl.map(function(b){ return comp(b,rna); }).join(' ');
      q('.js-clbl').textContent = rna?'RNA':'المكمّلة';
      elRule.textContent = rna? 'A ↔ U · G ↔ C' : 'A ↔ T · G ↔ C';
      qa('.js-mode').forEach(function(b){ b.setAttribute('aria-pressed', b.getAttribute('data-m')===mode?'true':'false'); });
      elIc.style.background=css('--s-ar-deep','#1F7D52'); elIc.innerHTML=ICN;
      elTit.textContent = rna? 'النسخ إلى RNA' : 'تزاوج القواعد في DNA';
      elX.innerHTML = rna
        ? 'عند بناء <b>RNA</b> (سلسلةٌ واحدة) من قالب DNA، يتزاوجُ كلٌّ من القواعد كالمعتاد إلا أنّ <b>اليوراسيل U</b> يحلّ محلَّ الثايمين مقابلَ الأدنين A. فالقاعدة A في القالب تقابلها <b>U</b>.'
        : 'قواعدُ DNA أربع: <b>A، T، G، C</b>. وتتزاوجُ دائمًا <b>A مع T</b> و<b>G مع C</b> (المتمّمة). فإذا عرفتَ سلسلةً استطعتَ بناءَ <b>مكمّلتها</b> بقلب كلِّ قاعدةٍ إلى متمّمتها — وهذا أساسُ <b>تضاعف</b> DNA.';
    }
    qa('.js-mode').forEach(function(b){ b.addEventListener('click', function(){ mode=b.getAttribute('data-m'); refresh(); }); });
    q('.js-reset').onclick=function(){ tpl=['A','T','G','C','A','G']; mode='dna'; refresh(); };
    ['.js-tpl','.js-cmp','.js-rule'].forEach(function(s){ var e=q(s); e.style.direction='ltr'; e.style.unicodeBidi='isolate'; });
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
