/* ============================================================
   محاكاة تفاعلية — النقل عبر الغشاء البلازمي
   في النقل السلبي (الانتشار) تنتقل الجزيئاتُ من الأعلى تركيزًا إلى
   الأقلّ بلا طاقةٍ حتى الاتّزان. أمّا النقل النشط فيدفعها عكسَ التركيز
   مستهلكًا طاقة. الاستعمال من المحرّك:  window.SIMS['transport'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['transport'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="M5 9h4M15 9h4M5 15h4M15 15h4"/><path d="M9 8 15 12 9 16" opacity=".6"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }

  // مواضع ثابتة (٤ أعمدة × ٥ صفوف) لكلّ جانب
  var LT=[], RT=[];
  for(var r=0;r<5;r++) for(var c=0;c<4;c++){ LT.push([40+c*30, 48+r*38]); RT.push([170+c*30, 48+r*38]); }

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="جزيئات تنتقل عبر غشاء بين حجرتين">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="غشاء يفصل حجرتين وجزيئات تنتقل عبره"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">الاتّجاه:</span><span class="wq-val js-dir">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-quick"><button type="button" class="wq-qbtn js-mode" data-m="pass" aria-pressed="true">نقل سلبيّ (انتشار)</button><button type="button" class="wq-qbtn js-mode" data-m="act">نقل نشط</button></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>تقدُّم العملية</span><b class="js-pv">٠٪</b></div><input type="range" class="wq-range warm js-p" min="0" max="100" value="0" step="5"></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">التركيز (يسار : يمين)</div><div class="wq-v js-conc">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">استهلاك الطاقة</div><div class="wq-v js-energy">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">—</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, MX=152;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var qa=function(s){ return Array.prototype.slice.call(container.querySelectorAll(s)); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var pIn=q('.js-p'), elDir=q('.js-dir'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var mode='pass', dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }

    function dot(x,y){ ctx.fillStyle=css('--ember','#F2892E'); ctx.beginPath(); ctx.arc(x,y,8,0,6.2832); ctx.fill();
      ctx.strokeStyle=css('--ember-deep','#E4681B'); ctx.lineWidth=1.4; ctx.stroke();
      ctx.fillStyle='rgba(255,255,255,.5)'; ctx.beginPath(); ctx.arc(x-2.4,y-2.6,2.2,0,6.2832); ctx.fill(); }
    function counts(p){ var frac=Math.round(10*p/100);
      if(mode==='pass') return {l:20-frac, r:frac};      // يبدأ ٢٠ يسار ← ١٠:١٠
      return {l:10+frac, r:10-frac};                     // نشط: يبدأ ١٠:١٠ ← ٢٠ يسار (عكس التركيز)
    }
    function draw(){
      var p=+pIn.value, cc=counts(p);
      ctx.clearRect(0,0,W,H);
      // حجرتان
      ctx.fillStyle=css('--s-sci-soft','#E2F5F5'); ctx.fillRect(14,26,MX-20,190);
      ctx.fillStyle=css('--surface-2','#FBFBFE'); ctx.fillRect(MX+6,26,W-MX-20,190);
      ctx.strokeStyle=css('--line-strong','#D6D9EC'); ctx.lineWidth=1.5; ctx.strokeRect(14,26,W-28,190);
      // الغشاء بمسامّ
      ctx.strokeStyle=css('--ink-soft','#4A5080'); ctx.lineWidth=5; ctx.lineCap='round';
      for(var g=0;g<6;g++){ if(g%2===0){ ctx.beginPath(); ctx.moveTo(MX,30+g*32); ctx.lineTo(MX,30+g*32+22); ctx.stroke(); } }
      // طاقة (نقل نشط)
      if(mode==='act' && p>0){ ctx.strokeStyle=css('--gold','#F4B740'); ctx.lineWidth=2;
        for(var e=0;e<3;e++){ var yy=60+e*55; ctx.beginPath(); ctx.moveTo(MX-3,yy); ctx.lineTo(MX+5,yy+6); ctx.lineTo(MX-2,yy+9); ctx.lineTo(MX+4,yy+16); ctx.stroke(); } }
      for(var i=0;i<cc.l;i++) dot(LT[i][0],LT[i][1]);
      for(var j=0;j<cc.r;j++) dot(RT[j][0],RT[j][1]);
    }
    function refresh(){
      var p=+pIn.value, cc=counts(p);
      q('.js-pv').textContent=toAr(p)+'٪';
      q('.js-conc').textContent=toAr(cc.l)+' : '+toAr(cc.r);
      q('.js-energy').textContent = mode==='act'?'يستهلك طاقة':'لا يستهلك';
      q('.js-energy').style.color = mode==='act'?css('--ember-deep','#E4681B'):css('--s-ar-deep','#1F7D52');
      elDir.textContent = mode==='act'?'عكس التركيز (نحو الأعلى)':'من الأعلى إلى الأقلّ تركيزًا';
      elDir.style.color = css('--subject-deep','#0B7E86');
      qa('.js-mode').forEach(function(b){ b.setAttribute('aria-pressed', b.getAttribute('data-m')===mode?'true':'false'); });
      var col = mode==='act'?css('--ember-deep','#E4681B'):css('--s-ar-deep','#1F7D52');
      elIc.style.background=col; elIc.innerHTML=ICN; elTit.style.color=col;
      if(mode==='pass'){ elTit.textContent='النقل السلبيّ — الانتشار';
        elX.innerHTML='تتحرّكُ الجزيئاتُ تلقائيًّا من الحجرة <b>الأعلى تركيزًا</b> إلى <b>الأقلّ</b> عبر الغشاء، <b>بلا طاقة</b>، حتى يتساوى التركيزُ (الاتّزان). وانتشارُ <b>الماء</b> خاصّةً يُسمّى <b>الخاصية الأسموزية</b>.'; }
      else { elTit.textContent='النقل النشط';
        elX.innerHTML='تُدفَع الجزيئاتُ <b>عكسَ</b> فرق التركيز (من الأقلّ إلى الأعلى) عبر بروتيناتٍ ناقلة، وهذا <b>يستهلك طاقة</b> (⚡). به تحافظ الخليةُ على تراكيزَ تخالف محيطَها.'; }
      draw();
    }
    qa('.js-mode').forEach(function(b){ b.addEventListener('click', function(){ mode=b.getAttribute('data-m'); pIn.value=0; refresh(); }); });
    pIn.addEventListener('input', refresh);
    q('.js-reset').onclick=function(){ mode='pass'; pIn.value=0; refresh(); };
    q('.js-pv').style.direction='ltr'; q('.js-pv').style.unicodeBidi='isolate';
    q('.js-conc').style.direction='ltr'; q('.js-conc').style.unicodeBidi='isolate';
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
