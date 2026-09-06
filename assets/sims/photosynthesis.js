/* ============================================================
   محاكاة تفاعلية — البناء الضوئي والتنفّس الخلوي
   البناءُ الضوئي في البلاستيدات الخضراء: ماءٌ + ثاني أكسيد الكربون +
   ضوء ← غذاءٌ + أكسجين. والتنفّسُ الخلوي عكسُه في الميتوكندريا.
   الاستعمال من المحرّك:  window.SIMS['photosynthesis'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['photosynthesis'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 21V9"/><path d="M12 9c-4 0-7-3-7-6 4 0 7 3 7 6zM12 11c4 0 7-3 7-6-4 0-7 3-7 6z"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="البناء الضوئي أو التنفّس الخلوي: مدخلات ومخرجات">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="عُضيّة تحوّل المدخلات إلى مخرجات، مع فقاعات الأكسجين حسب شدّة الضوء"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">العملية:</span><span class="wq-val js-name" style="font-size:14px">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-quick"><button type="button" class="wq-qbtn js-mode" data-m="photo" aria-pressed="true">بناء ضوئي</button><button type="button" class="wq-qbtn js-mode" data-m="resp">تنفّس خلوي</button></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span class="js-sllabel">شدّة الضوء</span><b class="js-rv">٣</b></div><input type="range" class="wq-range warm js-r" min="1" max="5" value="3" step="1"></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">المكان</div><div class="wq-v js-place" style="font-size:12px">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">معدّل الإنتاج</div><div class="wq-v js-rate" style="font-size:13px">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">البناء الضوئي</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, OX=150, OY=112;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var qa=function(s){ return Array.prototype.slice.call(container.querySelectorAll(s)); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var rIn=q('.js-r'), elName=q('.js-name'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var mode='photo', dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function drawAr(x,y,str,col,f){ ctx.fillStyle=col; ctx.save(); ctx.font=f||'700 10px "IBM Plex Sans Arabic",sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='rtl'; ctx.fillText(str,x,y); ctx.restore(); }
    function drawLtr(x,y,str,col,f){ ctx.fillStyle=col; ctx.save(); ctx.font=f||'800 11px Poppins,sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='ltr'; ctx.fillText(str,x,y); ctx.restore(); }
    function chip(x,y,w,label,formula,fill,line){
      ctx.fillStyle=fill; ctx.strokeStyle=line; ctx.lineWidth=1.6; ctx.beginPath(); ctx.roundRect(x-w/2,y-16,w,32,7); ctx.fill(); ctx.stroke();
      drawAr(x,y-6,label,line,'700 9px "IBM Plex Sans Arabic",sans-serif'); if(formula) drawLtr(x,y+7,formula,line,'800 10px Poppins,sans-serif');
    }
    function arrow(x1,y1,x2,y2,col){ ctx.strokeStyle=col; ctx.lineWidth=2.5; ctx.lineCap='round'; ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.stroke();
      var a=Math.atan2(y2-y1,x2-x1); ctx.fillStyle=col; ctx.beginPath(); ctx.moveTo(x2,y2); ctx.lineTo(x2-9*Math.cos(a-0.4),y2-9*Math.sin(a-0.4)); ctx.lineTo(x2-9*Math.cos(a+0.4),y2-9*Math.sin(a+0.4)); ctx.fill(); }

    function draw(){
      var rate=+rIn.value, photo=mode==='photo';
      ctx.clearRect(0,0,W,H);
      // العُضيّة في الوسط
      var oc = photo?'#4FA85E':'#E58A6B', ocl=photo?'#2E7D46':'#C1502E';
      ctx.fillStyle=oc; ctx.strokeStyle=ocl; ctx.lineWidth=2.5;
      ctx.beginPath(); ctx.ellipse(OX,OY,34,24,0,0,6.2832); ctx.fill(); ctx.stroke();
      drawAr(OX,OY, photo?'بلاستيدة':'ميتوكندريا', '#fff', '800 10px "IBM Plex Sans Arabic",sans-serif');
      // ضوء الشمس (بناء ضوئي فقط) — أشعّة من الأعلى
      if(photo){ ctx.strokeStyle='#F4B740'; ctx.lineWidth=2; for(var k=0;k<rate;k++){ var lx=OX-40+k*20; ctx.beginPath(); ctx.moveTo(lx,10); ctx.lineTo(lx+8,42); ctx.stroke(); } drawAr(OX,H-14,'شدّةُ الضوء ترفع معدّلَ البناء الضوئي',css('--muted','#7C82A8'),'600 9px "IBM Plex Sans Arabic",sans-serif'); }
      else { drawAr(OX,H-14,'الغذاءُ + الأكسجين ← طاقةٌ + CO₂ + ماء',css('--muted','#7C82A8'),'600 9px "IBM Plex Sans Arabic",sans-serif'); }
      // المدخلات (يسار) والمخرجات (يمين)
      if(photo){
        chip(52,64,86,'ماء','H₂O','#E9F0FD','#2551B8');
        chip(52,120,120,'ثاني أكسيد الكربون','CO₂','#E9F0FD','#2551B8');
        arrow(96,72,OX-30,OY-8,'#2551B8'); arrow(104,120,OX-32,OY,'#2551B8');
        chip(250,64,80,'غذاء','C₆H₁₂O₆','#E8F5EE','#1F7D52');
        chip(250,120,80,'أكسجين','O₂','#E8F5EE','#1F7D52');
        arrow(OX+30,OY-8,214,72,'#1F7D52'); arrow(OX+32,OY,214,120,'#1F7D52');
        // فقاعات أكسجين ترتفع (عددُها = المعدّل)
        ctx.fillStyle='rgba(31,125,82,0.85)'; for(var b=0;b<rate;b++){ var bx=246+((b*13)%30)-6, by=48-(b*6)%34; ctx.beginPath(); ctx.arc(bx,by,3.2,0,6.2832); ctx.fill(); }
      } else {
        chip(52,64,80,'غذاء','C₆H₁₂O₆','#E8F5EE','#1F7D52');
        chip(52,120,80,'أكسجين','O₂','#E8F5EE','#1F7D52');
        arrow(96,72,OX-30,OY-8,'#1F7D52'); arrow(96,120,OX-32,OY,'#1F7D52');
        chip(250,52,68,'طاقة','ATP','#FDECD9','#E4681B');
        chip(250,104,110,'ثاني أكسيد الكربون','CO₂','#E9F0FD','#2551B8');
        chip(250,150,70,'ماء','H₂O','#E9F0FD','#2551B8');
        arrow(OX+30,OY-10,208,58,'#E4681B'); arrow(OX+32,OY,196,104,'#2551B8'); arrow(OX+30,OY+12,208,146,'#2551B8');
      }
    }
    function refresh(){
      var rate=+rIn.value, photo=mode==='photo';
      q('.js-rv').textContent=toAr(rate);
      q('.js-sllabel').textContent = photo?'شدّة الضوء':'كمية الغذاء';
      qa('.js-mode').forEach(function(b){ b.setAttribute('aria-pressed', b.getAttribute('data-m')===mode?'true':'false'); });
      elName.textContent = photo?'البناء الضوئي':'التنفّس الخلوي';
      elName.style.color = photo?css('--s-ar-deep','#1F7D52'):css('--ember-deep','#E4681B');
      q('.js-place').textContent = photo?'البلاستيدة الخضراء':'الميتوكندريا';
      q('.js-place').style.color = photo?css('--s-ar-deep','#1F7D52'):css('--ember-deep','#E4681B');
      q('.js-rate').textContent = photo?(toAr(rate)+' × أكسجين'):(toAr(rate)+' × طاقة');
      elIc.style.background = photo?css('--s-ar-deep','#1F7D52'):css('--ember-deep','#E4681B'); elIc.innerHTML=ICN;
      elTit.textContent = photo?'البناء الضوئي':'التنفّس الخلوي';
      elX.innerHTML = photo
        ? 'في <b>البلاستيدات الخضراء</b> يحوّل النباتُ طاقةَ <b>الضوء</b> إلى غذاء: <span style="unicode-bidi:isolate;direction:ltr">CO₂ + H₂O + ضوء → C₆H₁₂O₆ + O₂</span>. وكلّما زادت <b>شدّةُ الضوء</b> زاد معدّلُ إنتاج الغذاء والأكسجين.'
        : 'في <b>الميتوكندريا</b> يحرّر <b>التنفّسُ الخلوي</b> الطاقةَ من الغذاء (عكسُ البناء الضوئي): <span style="unicode-bidi:isolate;direction:ltr">C₆H₁₂O₆ + O₂ → طاقة + CO₂ + H₂O</span>.';
      draw();
    }
    qa('.js-mode').forEach(function(b){ b.addEventListener('click', function(){ mode=b.getAttribute('data-m'); refresh(); }); });
    rIn.addEventListener('input', refresh);
    q('.js-reset').onclick=function(){ mode='photo'; rIn.value=3; refresh(); };
    q('.js-rate').style.direction='ltr'; q('.js-rate').style.unicodeBidi='isolate';
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
