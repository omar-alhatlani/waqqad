/* ============================================================
   محاكاة تفاعلية — الروابط الكيميائية
   الرابطةُ الأيونية: انتقالُ إلكتروناتٍ (فلزّ + لافلزّ) فتتكوّن أيونات.
   الرابطةُ التساهمية: مشاركةُ إلكتروناتٍ (لافلزّان) فيتكوّن جزيء.
   الاستعمال من المحرّك:  window.SIMS['bonds'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['bonds'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="7" cy="12" r="4"/><circle cx="17" cy="12" r="4"/><path d="M11 12h2" stroke-linecap="round"/></svg>';

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="تكوّن الرابطة بين ذرّتين">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="ذرّتان تكوّنان رابطة أيونية أو تساهمية"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">الرابطة:</span><span class="wq-val js-name">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-quick"><button type="button" class="wq-qbtn js-mode" data-m="ionic" aria-pressed="true">أيونية</button><button type="button" class="wq-qbtn js-mode" data-m="cov">تساهمية</button></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">الآلية</div><div class="wq-v js-mech" style="font-size:14px">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">الناتج</div><div class="wq-v js-prod" style="font-size:14px">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">—</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, LX=95, RX=205, CY=108, AR=40;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var qa=function(s){ return Array.prototype.slice.call(container.querySelectorAll(s)); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var elName=q('.js-name'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var mode='ionic', dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function drawAr(x,y,str,col,f){ ctx.fillStyle=col; ctx.save(); ctx.font=f||'700 10px "IBM Plex Sans Arabic",sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='rtl'; ctx.fillText(str,x,y); ctx.restore(); }
    function atom(cx,sym,col,label){ ctx.fillStyle=col; ctx.globalAlpha=.18; ctx.beginPath(); ctx.arc(cx,CY,AR,0,6.2832); ctx.fill(); ctx.globalAlpha=1;
      ctx.strokeStyle=col; ctx.lineWidth=2; ctx.beginPath(); ctx.arc(cx,CY,AR,0,6.2832); ctx.stroke();
      ctx.fillStyle=col; ctx.font='800 16px Poppins,sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='ltr'; ctx.fillText(sym,cx,CY);
      if(label) drawAr(cx,CY+AR+14,label,css('--muted','#7C82A8')); }
    function elec(cx,cy,col){ ctx.fillStyle=col||css('--ink','#1C2143'); ctx.beginPath(); ctx.arc(cx,cy,4,0,6.2832); ctx.fill(); ctx.strokeStyle='#fff'; ctx.lineWidth=1; ctx.stroke(); }
    function ring(cx,n,r,col,skip){ for(var i=0;i<n;i++){ if(skip&&skip.indexOf(i)>=0) continue; var a=-Math.PI/2+i*2*Math.PI/8; elec(cx+Math.cos(a)*r, CY+Math.sin(a)*r, col); } }

    function draw(){
      ctx.clearRect(0,0,W,H);
      var em=css('--ember','#F2892E'), emd=css('--ember-deep','#E4681B'), tl=css('--subject','#0FA3AA'), tld=css('--subject-deep','#0B7E86');
      if(mode==='ionic'){
        atom(LX,'Na',em,'فلزّ'); atom(RX,'Cl',tl,'لافلزّ');
        // Na فقد إلكترونه (فارغ) ← +، Cl اكتسب (٨) ← −
        ring(RX,8,AR-8,tld);
        // سهم انتقال الإلكترون
        elec(LX+AR-6,CY-6,emd);
        ctx.strokeStyle=emd; ctx.lineWidth=2; ctx.setLineDash([4,3]); ctx.beginPath(); ctx.moveTo(LX+AR-2,CY-6); ctx.quadraticCurveTo(150,CY-34,RX-AR+2,CY-6); ctx.stroke(); ctx.setLineDash([]);
        ctx.fillStyle=emd; ctx.beginPath(); ctx.moveTo(RX-AR+2,CY-6); ctx.lineTo(RX-AR-6,CY-11); ctx.lineTo(RX-AR-5,CY-1); ctx.fill();
        // الشحنات
        drawAr(LX,CY-AR-12,'Na⁺',emd,'800 14px Poppins,sans-serif'); drawAr(RX,CY-AR-12,'Cl⁻',tld,'800 14px Poppins,sans-serif');
        drawAr(150,H-26,'انتقالُ إلكترونٍ ← تجاذبٌ بين أيونين',css('--muted','#7C82A8'));
      } else {
        atom(LX,'Cl',tl,'لافلزّ'); atom(RX,'Cl',tl,'لافلزّ');
        ring(LX,8,AR-8,tld,[2,3]); ring(RX,8,AR-8,tld,[6,7]);
        // زوجٌ مشترك في المنتصف
        elec(150,CY-6,emd); elec(150,CY+6,emd);
        ctx.strokeStyle=css('--ember','#F2892E'); ctx.lineWidth=1.5; ctx.beginPath(); ctx.arc(150,CY,16,0,6.2832); ctx.stroke();
        drawAr(150,CY-30,'زوجٌ مشترك',emd);
        drawAr(150,H-26,'مشاركةُ إلكتروناتٍ ← جزيء (Cl₂)',css('--muted','#7C82A8'));
      }
    }
    function refresh(){
      elName.textContent = mode==='ionic'?'أيونية':'تساهمية'; elName.style.color = mode==='ionic'?css('--ember-deep','#E4681B'):css('--subject-deep','#0B7E86');
      q('.js-mech').textContent = mode==='ionic'?'انتقال إلكترونات':'مشاركة إلكترونات';
      q('.js-prod').textContent = mode==='ionic'?'أيونات (Na⁺ Cl⁻)':'جزيء (Cl₂)';
      qa('.js-mode').forEach(function(b){ b.setAttribute('aria-pressed', b.getAttribute('data-m')===mode?'true':'false'); });
      var col = mode==='ionic'?css('--ember-deep','#E4681B'):css('--subject-deep','#0B7E86');
      elIc.style.background=col; elIc.innerHTML=ICN; elTit.textContent = mode==='ionic'?'الرابطة الأيونية':'الرابطة التساهمية'; elTit.style.color=col;
      elX.innerHTML = mode==='ionic'
        ? 'بين <b>فلزّ ولافلزّ</b>: يفقد الفلزُّ (Na) إلكترونًا فيصبح <b>أيونًا موجبًا (Na⁺)</b>، ويكتسبه اللافلزُّ (Cl) فيصبح <b>أيونًا سالبًا (Cl⁻)</b>، فيتجاذب الأيونان برابطةٍ <b>أيونية</b>.'
        : 'بين <b>لافلزّين</b>: تتشارك الذرّتان زوجًا من الإلكترونات (لا انتقال)، فتُكمل كلٌّ منهما مستواها الأخير، وتتكوّن رابطةٌ <b>تساهمية</b> ناتجُها <b>جزيء</b>. تذكّرْ: التساهمية = <b>تشارُك</b>.';
      draw();
    }
    qa('.js-mode').forEach(function(b){ b.addEventListener('click', function(){ mode=b.getAttribute('data-m'); refresh(); }); });
    q('.js-reset').onclick=function(){ mode='ionic'; refresh(); };
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
