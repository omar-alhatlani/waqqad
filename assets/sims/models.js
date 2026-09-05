/* ============================================================
   محاكاة تفاعلية — تطوّر نماذج الذرة
   تطوّر فهمُ الذرة: طومسون (اكتشف الإلكترون) ← رذرفورد (النواة والفراغ)
   ← بور (مستويات الطاقة) ← النموذج الحديث (السحابة الإلكترونية).
   الاستعمال من المحرّك:  window.SIMS['models'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['models'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="2.5"/><ellipse cx="12" cy="12" rx="10" ry="4.5"/><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)"/></svg>';
  var MODES={
    thomson:{ name:'نموذج طومسون', sci:'طومسون', give:'الإلكترون', col:'var(--s-en-deep)',
      x:'كرةٌ <b>موجبةُ</b> الشحنة تتخلّلها <b>الإلكتروناتُ</b> السالبة (كالزبيب في الكعكة). اكتشف طومسون الإلكترونَ بأنبوب الأشعة المهبطية.' },
    rutherford:{ name:'نموذج رذرفورد', sci:'رذرفورد', give:'النواة والفراغ', col:'var(--ember-deep)',
      x:'نواةٌ <b>صغيرةٌ موجبة</b> في المركز تحمل معظمَ الكتلة، و<b>معظمُ الذرة فراغ</b> تدور فيه الإلكترونات. أثبتته تجربةُ صفيحة الذهب.' },
    bohr:{ name:'نموذج بور', sci:'بور', give:'مستويات الطاقة', col:'var(--s-math-deep)',
      x:'رتّب بور الإلكتروناتِ في <b>مستوياتِ طاقةٍ</b> محدّدةٍ حول النواة، وينتقل الإلكترونُ بينها بامتصاص طاقةٍ أو إطلاقها.' },
    cloud:{ name:'السحابة الإلكترونية', sci:'النموذج الحديث', give:'سحابة احتمال', col:'var(--subject-deep)',
      x:'النموذجُ الحديث: لا نُحدّد مكانَ الإلكترون بدقّة، بل منطقةً حول النواة <b>يُرجَّح</b> وجودُه فيها تُسمّى <b>السحابةَ الإلكترونية</b>.' }
  };

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="نماذج الذرة عبر الزمن">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="رسم نموذج الذرة المختار"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">النموذج:</span><span class="wq-val js-name">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-quick" style="flex-wrap:wrap">'+
            '<button type="button" class="wq-qbtn js-mode" data-m="thomson" aria-pressed="true">طومسون</button>'+
            '<button type="button" class="wq-qbtn js-mode" data-m="rutherford">رذرفورد</button>'+
            '<button type="button" class="wq-qbtn js-mode" data-m="bohr">بور</button>'+
            '<button type="button" class="wq-qbtn js-mode" data-m="cloud">السحابة</button>'+
          '</div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">العالِم</div><div class="wq-v js-sci">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">الإسهام</div><div class="wq-v js-give" style="font-size:13px">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">—</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, CX=150, CY=115;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var qa=function(s){ return Array.prototype.slice.call(container.querySelectorAll(s)); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var elName=q('.js-name'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var mode='thomson', dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function elec(x,y){ ctx.fillStyle=css('--subject','#0FA3AA'); ctx.beginPath(); ctx.arc(x,y,5,0,6.2832); ctx.fill();
      ctx.strokeStyle='#fff'; ctx.lineWidth=1; ctx.stroke(); ctx.fillStyle='#fff'; ctx.font='800 7px Cairo,sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText('−',x,y-0.5); }
    function nucleus(r){ ctx.fillStyle=css('--ember','#F2892E'); ctx.beginPath(); ctx.arc(CX,CY,r,0,6.2832); ctx.fill();
      ctx.strokeStyle=css('--ember-deep','#E4681B'); ctx.lineWidth=1.5; ctx.stroke();
      ctx.fillStyle='#fff'; ctx.font='800 '+(r*0.9)+'px Cairo,sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText('+',CX,CY); }

    function draw(){
      ctx.clearRect(0,0,W,H);
      if(mode==='thomson'){
        ctx.fillStyle='rgba(231,70,107,.14)'; ctx.strokeStyle=css('--bad','#E7466B'); ctx.lineWidth=2;
        ctx.beginPath(); ctx.arc(CX,CY,74,0,6.2832); ctx.fill(); ctx.stroke();
        ctx.fillStyle=css('--bad','#E7466B'); ctx.font='800 20px Cairo,sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
        for(var a=0;a<6;a++){ var an=a*1.05; ctx.globalAlpha=.5; ctx.fillText('+', CX+Math.cos(an)*40, CY+Math.sin(an)*40); } ctx.globalAlpha=1;
        var ep=[[-40,-18],[28,-34],[46,20],[-16,42],[10,6],[-50,16],[24,44],[-24,-40]];
        ep.forEach(function(p){ elec(CX+p[0],CY+p[1]); });
      }
      else if(mode==='rutherford'){
        ctx.strokeStyle=css('--line-strong','#D6D9EC'); ctx.lineWidth=1; ctx.setLineDash([3,3]);
        [58,74].forEach(function(r){ ctx.beginPath(); ctx.arc(CX,CY,r,0,6.2832); ctx.stroke(); }); ctx.setLineDash([]);
        nucleus(11);
        var rp=[[58,0.6],[74,2.4],[58,3.5],[74,5.0]];
        rp.forEach(function(p){ elec(CX+Math.cos(p[1])*p[0], CY+Math.sin(p[1])*p[0]); });
      }
      else if(mode==='bohr'){
        var lv=[[30,2],[54,8],[78,2]];
        ctx.strokeStyle=css('--s-math','#3B6FE0'); ctx.lineWidth=1.4;
        lv.forEach(function(L){ ctx.beginPath(); ctx.arc(CX,CY,L[0],0,6.2832); ctx.stroke(); });
        nucleus(11);
        lv.forEach(function(L){ for(var i=0;i<L[1];i++){ var an=-1.57+i*6.2832/L[1]; elec(CX+Math.cos(an)*L[0], CY+Math.sin(an)*L[0]); } });
      }
      else {
        // سحابة إلكترونية: نقاطٌ منتشرة أكثفُ قرب النواة (تجزئةٌ غير مرتبطة)
        function hsh(k,s){ var x=Math.sin(k*s+s)*43758.5453; return x-Math.floor(x); }
        for(var k=0;k<170;k++){ var h1=hsh(k,12.9898), h2=hsh(k,78.233);
          var rad=78*Math.pow(h2,0.85), an=h1*6.2832;
          ctx.fillStyle=css('--subject','#0FA3AA'); ctx.globalAlpha=0.12+0.5*(1-rad/78);
          ctx.beginPath(); ctx.arc(CX+Math.cos(an)*rad, CY+Math.sin(an)*rad, 2.4, 0,6.2832); ctx.fill(); }
        ctx.globalAlpha=1; nucleus(9);
      }
    }
    function refresh(){
      var M=MODES[mode], col=M.col.indexOf('var(')===0?css(M.col.slice(4,-1),'#0B7E86'):M.col;
      elName.textContent=M.name; elName.style.color=col;
      q('.js-sci').textContent=M.sci; q('.js-give').textContent=M.give;
      qa('.js-mode').forEach(function(b){ b.setAttribute('aria-pressed', b.getAttribute('data-m')===mode?'true':'false'); });
      elIc.style.background=col; elIc.innerHTML=ICN; elTit.textContent=M.name; elTit.style.color=col; elX.innerHTML=M.x;
      draw();
    }
    qa('.js-mode').forEach(function(b){ b.addEventListener('click', function(){ mode=b.getAttribute('data-m'); refresh(); }); });
    q('.js-reset').onclick=function(){ mode='thomson'; refresh(); };
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
