/* ============================================================
   محاكاة تفاعلية — البراكين: عنف الثوران
   الصهارةُ صخرٌ منصهرٌ في الباطن، وتُسمّى اللابةَ على السطح. كلّما زاد
   محتوى الغازات وزادتِ اللزوجةُ صار الثورانُ أعنفَ (انفجاريّ ورماد)،
   والعكسُ ثورانٌ هادئٌ بلابةٍ سائلة. window.SIMS['volcano'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['volcano'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3l2 4M16 4l-1.5 3"/><path d="M3 21l6-9h6l6 9z"/><path d="M9 12h6"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  var STATES=[['ثورانٌ هادئ','#2E9E6B'],['ثورانٌ متوسط','#F4B740'],['ثورانٌ عنيف','#E4681B']];

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="مقطع بركان وثورانه">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="مقطع جانبي لبركان يبيّن حجرة الصهارة والثوران"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">النوع:</span><span class="wq-val js-type">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>محتوى الغازات</span><b class="js-gv">٣٠٪</b></div><input type="range" class="wq-range warm js-g" min="0" max="100" value="30" step="5"></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>لزوجة الصهارة</span><b class="js-vv">٣٠٪</b></div><input type="range" class="wq-range warm js-v" min="0" max="100" value="30" step="5"></div>'+
          '<div class="wq-eq"><span class="wq-eqt">القاعدة</span><div class="wq-eqv"><span class="js-rule">غازات ولزوجة ↑ ← ثوران أعنف</span></div></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">شدّة الثوران</div><div class="wq-v js-force">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">يُشبه</div><div class="wq-v js-kind" style="font-size:14px">—</div></div>'+
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
    var gIn=q('.js-g'), vIn=q('.js-v'), elType=q('.js-type'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var cur=-1, dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function drawAr(x,y,str,col,f){ ctx.fillStyle=col; ctx.save(); ctx.font=f||'700 10px "IBM Plex Sans Arabic",sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='rtl'; ctx.fillText(str,x,y); ctx.restore(); }
    function hsh(k,s){ var x=Math.sin(k*s+s)*43758.5453; return x-Math.floor(x); }

    function draw(){
      var g=+gIn.value/100, v=+vIn.value/100, force=g*0.6+v*0.4;
      ctx.clearRect(0,0,W,H);
      var groundY=196, apex={x:150,y:96}, cw=104; // نصف عرض القاعدة
      // سماء
      ctx.fillStyle=css('--surface-2','#FBFBFE'); ctx.fillRect(0,0,W,groundY);
      // سحابة رماد (حسب الشدّة)
      if(force>0.35){ ctx.fillStyle='rgba(120,120,134,'+(0.25+force*0.5)+')';
        for(var c=0;c<10;c++){ var cy=apex.y-20-c*7*force, r=8+c*3.2*force+hsh(c,3.1)*6, cx=apex.x+(hsh(c,7.7)-0.5)*70*force;
          ctx.beginPath(); ctx.arc(cx,cy,r,0,6.2832); ctx.fill(); } }
      // الأرض
      ctx.fillStyle=css('--s-ar-soft','#E8F5EE'); ctx.fillRect(0,groundY,W,H-groundY);
      ctx.strokeStyle=css('--line-strong','#D6D9EC'); ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(0,groundY); ctx.lineTo(W,groundY); ctx.stroke();
      // مخروط البركان
      ctx.fillStyle='#6E5140'; ctx.beginPath(); ctx.moveTo(apex.x-cw,groundY); ctx.lineTo(apex.x-12,apex.y); ctx.lineTo(apex.x+12,apex.y); ctx.lineTo(apex.x+cw,groundY); ctx.closePath(); ctx.fill();
      ctx.fillStyle='#5A4133'; ctx.beginPath(); ctx.moveTo(apex.x-12,apex.y); ctx.lineTo(apex.x+12,apex.y); ctx.lineTo(apex.x+7,apex.y+9); ctx.lineTo(apex.x-7,apex.y+9); ctx.closePath(); ctx.fill(); // فوهة
      // القناة (عنق) + حجرة الصهارة
      ctx.strokeStyle='#E4681B'; ctx.lineWidth=7; ctx.lineCap='round'; ctx.beginPath(); ctx.moveTo(apex.x,apex.y+6); ctx.lineTo(apex.x,groundY+30); ctx.stroke();
      ctx.fillStyle='#F24E1E'; ctx.beginPath(); ctx.ellipse(apex.x,groundY+34,40,18,0,0,6.2832); ctx.fill();
      ctx.fillStyle='rgba(244,183,64,.6)'; ctx.beginPath(); ctx.ellipse(apex.x,groundY+34,24,10,0,0,6.2832); ctx.fill();
      // اللابة: هادئة تسيل على الجوانب (كلّما قلّت اللزوجة سالت أكثر)
      var flow=(1-v)*(1-force*0.5);
      if(flow>0.15){ ctx.strokeStyle='#F2892E'; ctx.lineWidth=5; ctx.lineCap='round';
        ctx.beginPath(); ctx.moveTo(apex.x-6,apex.y+8); ctx.quadraticCurveTo(apex.x-40,apex.y+50, apex.x-40-flow*46, groundY-2); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(apex.x+6,apex.y+8); ctx.quadraticCurveTo(apex.x+42,apex.y+46, apex.x+44+flow*40, groundY-2); ctx.stroke(); }
      // مقذوفات متطايرة (حسب الشدّة)
      if(force>0.45){ ctx.fillStyle='#5A4133'; var n=Math.round(force*14);
        for(var i=0;i<n;i++){ var t=hsh(i,5.3), ang=-1.57+(hsh(i,9.1)-0.5)*1.9*force, dist=30+t*70*force;
          var rx=apex.x+Math.cos(ang)*dist, ry=apex.y+6+Math.sin(ang)*dist-force*30;
          ctx.beginPath(); ctx.arc(rx,ry,2+t*2.5,0,6.2832); ctx.fill(); } }
      // تسميات
      drawAr(apex.x,apex.y-6,'الفوهة',css('--ink-soft','#4A5080'),'700 9px "IBM Plex Sans Arabic",sans-serif');
      drawAr(apex.x+70,groundY+34,'حجرة الصهارة','#fff','800 9px "IBM Plex Sans Arabic",sans-serif');
      drawAr(60,groundY+34,'صهارة (باطن)',css('--ember-deep','#E4681B'),'700 9px "IBM Plex Sans Arabic",sans-serif');
      if(flow>0.15) drawAr(apex.x-70,groundY-8,'لابة (سطح)','#D96C12','700 9px "IBM Plex Sans Arabic",sans-serif');
    }
    function refresh(){
      var g=+gIn.value, v=+vIn.value, force=(g*0.6+v*0.4)/100, st=force<0.4?0:(force<0.7?1:2);
      q('.js-gv').textContent=toAr(g)+'٪'; q('.js-vv').textContent=toAr(v)+'٪';
      q('.js-force').textContent=toAr(Math.round(force*100))+'٪';
      q('.js-kind').textContent = (v<35)?'الدرعيّ (سائل)':(st===2?'المركّب (عنيف)':'المخروطيّ');
      elType.textContent=STATES[st][0]; elType.style.color=STATES[st][1];
      if(st!==cur){ cur=st;
        elIc.style.background=STATES[st][1]; elIc.innerHTML=ICN; elTit.textContent=STATES[st][0]; elTit.style.color=STATES[st][1];
        elX.innerHTML = st===0
          ? 'غازاتٌ قليلة ولزوجةٌ منخفضة، فتخرج <b>اللابةُ سائلةً هادئة</b> وتسيل على الجوانب مكوّنةً بركانًا <b>درعيًّا</b> منبسطًا (أو ثورانَ شقوقٍ يكوّن الحِرار).'
          : st===1
          ? 'ازديادُ الغازات واللزوجة يجعل الثورانَ <b>متوسطًا</b>: تُقذَف موادُّ صلبةٌ وبعضُ الرماد، كالبراكين <b>المخروطية</b>.'
          : 'غازاتٌ عالية ولزوجةٌ عالية تحبس الضغطَ حتى ينفجر: ثورانٌ <b>عنيفٌ</b> برمادٍ ومقذوفات، كالبراكين <b>المركّبة</b> حادّة الجوانب. (الصهارةُ في الباطن، واللابةُ اسمُها على السطح.)';
      }
      draw();
    }
    [gIn,vIn].forEach(function(el){ el.addEventListener('input', refresh); });
    q('.js-reset').onclick=function(){ gIn.value=30; vIn.value=30; refresh(); };
    ['.js-gv','.js-vv','.js-force'].forEach(function(s){ var e=q(s); e.style.direction='ltr'; e.style.unicodeBidi='isolate'; });
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
