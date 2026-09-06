/* ============================================================
   محاكاة تفاعلية — انتقال الحرارة
   تنتقل الحرارةُ من الأعلى حرارةً إلى الأقلّ بثلاث طرائق: التوصيل
   (بالتلامس)، والحمل (في الموائع)، والإشعاع (بلا وسطٍ مادّي).
   الاستعمال من المحرّك:  window.SIMS['heattransfer'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['heattransfer'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M8 3c1 2-1 3 0 5M12 3c1 2-1 3 0 5M16 3c1 2-1 3 0 5"/><path d="M5 12h14v4a5 5 0 0 1-5 5h-4a5 5 0 0 1-5-5z"/></svg>';
  var MODES={
    cond:{ ar:'التوصيل', col:'#E4681B', x:'تنتقل الحرارةُ بـ<b>التلامس المباشر</b> بين الجسيمات دون انتقالها: الجسيماتُ الساخنة تهتزّ فتصدم جاراتِها فتنتقل الطاقةُ عبر المادة. <b>الفلزّاتُ</b> أفضلُ الموصّلات.' },
    conv:{ ar:'الحمل', col:'#3B6FE0', x:'يحدث في <b>الموائع</b> (السوائل والغازات): الجزءُ الساخنُ يقلّ كثافةً فـ<b>يرتفع</b>، والباردُ الأكثفُ <b>ينزل</b>، فتتكوّن <b>تياراتُ حملٍ</b> دائرية تنقل الحرارة.' },
    rad:{ ar:'الإشعاع', col:'#F4B740', x:'انتقالُ الحرارة بموجاتٍ كهرومغناطيسية <b>دون حاجةٍ إلى وسطٍ مادّي</b>؛ لذلك تصلنا حرارةُ الشمس عبر <b>فراغ</b> الفضاء.' }
  };

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="طرائق انتقال الحرارة">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="توضيح التوصيل أو الحمل أو الإشعاع"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">الطريقة:</span><span class="wq-val js-name">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-quick"><button type="button" class="wq-qbtn js-mode" data-m="cond" aria-pressed="true">توصيل</button><button type="button" class="wq-qbtn js-mode" data-m="conv">حمل</button><button type="button" class="wq-qbtn js-mode" data-m="rad">إشعاع</button></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">يحتاج وسطًا؟</div><div class="wq-v js-need" style="font-size:14px">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">مثال</div><div class="wq-v js-ex" style="font-size:13px">—</div></div>'+
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
    var qa=function(s){ return Array.prototype.slice.call(container.querySelectorAll(s)); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var elName=q('.js-name'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var mode='cond', dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function drawAr(x,y,str,col,f){ ctx.fillStyle=col; ctx.save(); ctx.font=f||'700 10px "IBM Plex Sans Arabic",sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='rtl'; ctx.fillText(str,x,y); ctx.restore(); }
    function flame(x,y){ ctx.fillStyle='#F2892E'; ctx.beginPath(); ctx.moveTo(x,y); ctx.quadraticCurveTo(x-7,y-10,x,y-20); ctx.quadraticCurveTo(x+7,y-10,x,y); ctx.fill();
      ctx.fillStyle='#F4B740'; ctx.beginPath(); ctx.moveTo(x,y); ctx.quadraticCurveTo(x-4,y-7,x,y-13); ctx.quadraticCurveTo(x+4,y-7,x,y); ctx.fill(); }

    function draw(){
      ctx.clearRect(0,0,W,H);
      if(mode==='cond'){
        // قضيب معدنيّ بتدرّج حراريّ
        var y=110, x0=50, x1=250;
        var g=ctx.createLinearGradient(x0,0,x1,0); g.addColorStop(0,'#E4681B'); g.addColorStop(0.5,'#F4B740'); g.addColorStop(1,'#3B6FE0');
        ctx.fillStyle=g; ctx.beginPath(); ctx.roundRect(x0,y-16,x1-x0,32,8); ctx.fill();
        ctx.strokeStyle=css('--ink-soft','#4A5080'); ctx.lineWidth=1.5; ctx.stroke();
        // جسيمات
        ctx.fillStyle='rgba(255,255,255,.7)'; for(var i=0;i<10;i++){ ctx.beginPath(); ctx.arc(x0+14+i*22,y+(i%2?4:-4),3,0,6.2832); ctx.fill(); }
        flame(x0-2,y+30); flame(x0+12,y+30);
        ctx.strokeStyle=css('--ember-deep','#E4681B'); ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(x0+20,y-30); ctx.lineTo(x1-20,y-30); ctx.stroke();
        ctx.fillStyle=css('--ember-deep','#E4681B'); ctx.beginPath(); ctx.moveTo(x1-20,y-30); ctx.lineTo(x1-28,y-34); ctx.lineTo(x1-28,y-26); ctx.fill();
        drawAr(x0+16,y-42,'ساخن',css('--ember-deep','#E4681B')); drawAr(x1-20,y-42,'بارد',css('--s-math-deep','#2551B8'));
        drawAr(W/2,y+52,'انتقالُ الحرارة عبر الفلزّ بالتلامس',css('--muted','#7C82A8'));
      } else if(mode==='conv'){
        // إناء ماء + تيارات حمل
        ctx.fillStyle=css('--s-math-soft','#E9F0FD'); ctx.beginPath(); ctx.moveTo(80,70); ctx.lineTo(220,70); ctx.lineTo(210,160); ctx.lineTo(90,160); ctx.closePath(); ctx.fill();
        ctx.strokeStyle=css('--ink-soft','#4A5080'); ctx.lineWidth=2.5; ctx.beginPath(); ctx.moveTo(78,68); ctx.lineTo(88,162); ctx.lineTo(212,162); ctx.lineTo(222,68); ctx.stroke();
        // أسهم دائرية: صعود بالوسط، نزول بالجانبين
        ctx.strokeStyle='#E4681B'; ctx.lineWidth=2.4; ctx.beginPath(); ctx.moveTo(150,150); ctx.lineTo(150,90); ctx.stroke();
        ctx.fillStyle='#E4681B'; ctx.beginPath(); ctx.moveTo(150,86); ctx.lineTo(145,96); ctx.lineTo(155,96); ctx.fill();
        ctx.strokeStyle='#3B6FE0'; ctx.lineWidth=2.4;
        [110,190].forEach(function(sx2){ ctx.beginPath(); ctx.moveTo(sx2,92); ctx.lineTo(sx2,150); ctx.stroke(); ctx.fillStyle='#3B6FE0'; ctx.beginPath(); ctx.moveTo(sx2,152); ctx.lineTo(sx2-5,142); ctx.lineTo(sx2+5,142); ctx.fill(); });
        ctx.strokeStyle=css('--muted','#7C82A8'); ctx.lineWidth=1.5; ctx.beginPath(); ctx.arc(150,90,42,Math.PI,Math.PI*1.5); ctx.arc(150,90,42,Math.PI*1.5,0); ctx.stroke();
        flame(135,178); flame(150,178); flame(165,178);
        drawAr(150,80,'ساخن يصعد',css('--ember-deep','#E4681B')); drawAr(110,140,'بارد ينزل',css('--s-math-deep','#2551B8'));
      } else {
        // شمس ← فراغ ← جسم
        ctx.fillStyle='#F4B740'; ctx.beginPath(); ctx.arc(58,80,26,0,6.2832); ctx.fill();
        ctx.strokeStyle='#F4B740'; ctx.lineWidth=2.5; for(var a=0;a<12;a++){ var an=a*Math.PI/6; ctx.beginPath(); ctx.moveTo(58+Math.cos(an)*30,80+Math.sin(an)*30); ctx.lineTo(58+Math.cos(an)*38,80+Math.sin(an)*38); ctx.stroke(); }
        // موجات إشعاع نحو الجسم
        ctx.strokeStyle='#E4681B'; ctx.lineWidth=2;
        for(var w=0;w<3;w++){ var yy=95+w*22; ctx.beginPath(); for(var x=90;x<=220;x+=4){ ctx.lineTo(x, yy+5*Math.sin((x-90)/9)); } ctx.stroke();
          ctx.fillStyle='#E4681B'; ctx.beginPath(); ctx.moveTo(224,yy); ctx.lineTo(216,yy-4); ctx.lineTo(216,yy+4); ctx.fill(); }
        // الجسم
        ctx.fillStyle=css('--ink-soft','#4A5080'); ctx.beginPath(); ctx.roundRect(232,90,22,60,6); ctx.fill();
        drawAr(150,160,'فراغ — بلا وسطٍ مادّي',css('--muted','#7C82A8'));
        drawAr(58,120,'الشمس',css('--ember-deep','#E4681B'));
      }
    }
    function refresh(){
      var M=MODES[mode];
      elName.textContent=M.ar; elName.style.color=M.col;
      q('.js-need').textContent = mode==='rad'?'لا يحتاج':'يحتاج وسطًا';
      q('.js-need').style.color = mode==='rad'?css('--ember-deep','#E4681B'):css('--s-ar-deep','#1F7D52');
      q('.js-ex').textContent = mode==='cond'?'ملعقةٌ في شاي':(mode==='conv'?'غليان الماء':'دفءُ الشمس');
      qa('.js-mode').forEach(function(b){ b.setAttribute('aria-pressed', b.getAttribute('data-m')===mode?'true':'false'); });
      elIc.style.background=M.col; elIc.innerHTML=ICN; elTit.textContent=M.ar; elTit.style.color=M.col; elX.innerHTML=M.x;
      draw();
    }
    qa('.js-mode').forEach(function(b){ b.addEventListener('click', function(){ mode=b.getAttribute('data-m'); refresh(); }); });
    q('.js-reset').onclick=function(){ mode='cond'; refresh(); };
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
