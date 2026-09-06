/* ============================================================
   محاكاة تفاعلية — النسب المثلثية في المثلث القائم
   جا الزاوية = المقابل ÷ الوتر، جتا = المجاور ÷ الوتر، ظا = المقابل
   ÷ المجاور. غيّرِ الزاوية واختر النسبة لإبراز ضلعيها وقيمتها.
   الاستعمال من المحرّك:  window.SIMS['trig'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['trig'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h16L4 6z"/><path d="M17 20v-3h-3"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  function arNum(x){ var r=Math.round(x*100)/100; return toAr(String(r)).replace(/\./g,'٫'); }
  var RAT={ sin:{ar:'جا',parts:['o','h'],num:'المقابل',den:'الوتر'}, cos:{ar:'جتا',parts:['a','h'],num:'المجاور',den:'الوتر'}, tan:{ar:'ظا',parts:['o','a'],num:'المقابل',den:'المجاور'} };

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="مثلث قائم والنسب المثلثية">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="مثلث قائم بأضلاعه الثلاثة وزاويته"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">القيمة:</span><span class="wq-val js-val">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-quick"><button type="button" class="wq-qbtn js-r" data-r="sin" aria-pressed="true">جا (sin)</button><button type="button" class="wq-qbtn js-r" data-r="cos">جتا (cos)</button><button type="button" class="wq-qbtn js-r" data-r="tan">ظا (tan)</button></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>الزاوية θ</span><b class="js-th">٤٠°</b></div><input type="range" class="wq-range cool js-t" min="15" max="75" value="40" step="5"></div>'+
          '<div class="wq-eq"><span class="wq-eqt">النسبة</span><div class="wq-eqv"><span class="js-formula">—</span></div></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">جا · جتا</div><div class="wq-v js-sc" style="font-size:13px">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">ظا</div><div class="wq-v js-tn">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">النسب المثلثية</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, L=150, AX=54, AY=196;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var qa=function(s){ return Array.prototype.slice.call(container.querySelectorAll(s)); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var tIn=q('.js-t'), elVal=q('.js-val'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var rat='sin', dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function drawAr(x,y,str,col,f){ ctx.fillStyle=col; ctx.save(); ctx.font=f||'700 11px "IBM Plex Sans Arabic",sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='rtl'; ctx.fillText(str,x,y); ctx.restore(); }
    function drawNum(x,y,str,col){ ctx.fillStyle=col; ctx.save(); ctx.font='700 12px Cairo,sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='ltr'; ctx.fillText(str,x,y); ctx.restore(); }

    function draw(){
      var th=+tIn.value*Math.PI/180, R=RAT[rat];
      var adj=L*Math.cos(th), opp=L*Math.sin(th);
      var A={x:AX,y:AY}, B={x:AX+adj,y:AY}, Cc={x:AX+adj,y:AY-opp};
      var em=css('--ember','#F2892E'), tl=css('--subject','#0FA3AA'), pu=css('--s-en','#7A5BE8'), mu=css('--muted','#7C82A8');
      ctx.clearRect(0,0,W,H);
      function side(p1,p2,col,on){ ctx.strokeStyle=col; ctx.lineWidth=on?5:2.6; ctx.globalAlpha=on?1:0.55; ctx.beginPath(); ctx.moveTo(p1.x,p1.y); ctx.lineTo(p2.x,p2.y); ctx.stroke(); ctx.globalAlpha=1; }
      var useO=R.parts.indexOf('o')>=0, useA=R.parts.indexOf('a')>=0, useH=R.parts.indexOf('h')>=0;
      side(B,Cc,em,useO);   // المقابل
      side(A,B,tl,useA);    // المجاور
      side(A,Cc,pu,useH);   // الوتر
      // الزاوية القائمة
      ctx.strokeStyle=mu; ctx.lineWidth=1.5; ctx.strokeRect(B.x-12,B.y-12,12,12);
      // قوس الزاوية θ
      ctx.strokeStyle=css('--ink-soft','#4A5080'); ctx.lineWidth=1.6; ctx.beginPath(); ctx.arc(A.x,A.y,22,-th,0); ctx.stroke();
      drawNum(A.x+30, A.y-12, toAr(+tIn.value)+'°', css('--ink','#1C2143'));
      // تسميات الأضلاع
      drawAr((B.x+Cc.x)/2+16, (B.y+Cc.y)/2, 'المقابل', em, '800 10px "IBM Plex Sans Arabic",sans-serif');
      drawAr((A.x+B.x)/2, A.y+14, 'المجاور', tl, '800 10px "IBM Plex Sans Arabic",sans-serif');
      drawAr((A.x+Cc.x)/2-16, (A.y+Cc.y)/2-8, 'الوتر', pu, '800 10px "IBM Plex Sans Arabic",sans-serif');
    }
    function refresh(){
      var t=+tIn.value, th=t*Math.PI/180, R=RAT[rat];
      var val = rat==='sin'?Math.sin(th):rat==='cos'?Math.cos(th):Math.tan(th);
      q('.js-th').textContent=toAr(t)+'°';
      q('.js-sc').textContent=arNum(Math.sin(th))+' · '+arNum(Math.cos(th));
      q('.js-tn').textContent=arNum(Math.tan(th));
      q('.js-formula').textContent = R.ar+' '+toAr(t)+'° = '+R.num+' ÷ '+R.den+' = '+arNum(val);
      elVal.textContent=R.ar+' θ = '+arNum(val); elVal.style.color=css('--subject-deep','#0B7E86');
      qa('.js-r').forEach(function(b){ b.setAttribute('aria-pressed', b.getAttribute('data-r')===rat?'true':'false'); });
      elIc.style.background=css('--subject-deep','#0B7E86'); elIc.innerHTML=ICN;
      elX.innerHTML='في المثلث القائم بالنسبة للزاوية θ: <b class="en">SOH-CAH-TOA</b> — <b>جا</b> = المقابل ÷ الوتر، <b>جتا</b> = المجاور ÷ الوتر، <b>ظا</b> = المقابل ÷ المجاور. الضلعان المُبرَزان هما المستعمَلان في النسبة المختارة. غيّرِ الزاوية وتابعْ تغيّرَ النِّسَب.';
      draw();
    }
    qa('.js-r').forEach(function(b){ b.addEventListener('click', function(){ rat=b.getAttribute('data-r'); refresh(); }); });
    tIn.addEventListener('input', refresh);
    q('.js-reset').onclick=function(){ rat='sin'; tIn.value=40; refresh(); };
    ['.js-th','.js-sc','.js-tn','.js-formula'].forEach(function(s){ var e=q(s); e.style.direction='ltr'; e.style.unicodeBidi='isolate'; });
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
