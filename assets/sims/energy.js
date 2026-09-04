/* ============================================================
   محاكاة تفاعلية — تحوّل الطاقة (البندول)
   يتأرجح البندول فتتحوّل الطاقة بين طاقة الوضع (أعلى) وطاقة الحركة (أسفل)،
   ومجموعُهما (الطاقة الكلية) ثابتٌ — مبدأ حفظ الطاقة.
   الاستعمال من المحرّك:  window.SIMS['energy'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['energy'] = (function(){

  var BOLT='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 4 14h6l-1 8 9-12h-6z"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  var PE_C=[228,104,27], KE_C=[15,163,170];
  function rgb(c){ return 'rgb('+c[0]+','+c[1]+','+c[2]+')'; }

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="بندول يتأرجح وأعمدة الطاقة">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="بندول يتأرجح مع عمود يبيّن طاقة الوضع وطاقة الحركة"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">الموضع:</span><span class="wq-val js-pos">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sl"><div class="wq-sllabel"><span>سعة التأرجح (زاوية الإطلاق)</span><b><span class="js-av">٥٠</span>°</b></div>'+
            '<input type="range" class="wq-range cool js-amp" min="15" max="75" value="50" step="5" aria-label="زاوية الإطلاق"></div>'+
          '<div class="wq-eq"><span class="wq-eqt">الطاقة الكلية = طاقة الوضع + طاقة الحركة (ثابتة)</span><div class="wq-eqv"><span class="js-eq">١٠٠٪</span></div></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">طاقة الوضع</div><div class="wq-v"><span class="js-pe">—</span><small>٪</small></div></div>'+
          '<div class="wq-read"><div class="wq-k">طاقة الحركة</div><div class="wq-v"><span class="js-ke">—</span><small>٪</small></div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-play">⏸ إيقاف</button><button type="button" class="wq-tool js-reset">↺ إعادة</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">—</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, PX=150, PY=28, L=104, OMEGA=2.1, DT=0.02;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var ampIn=q('.js-amp');
    var elPos=q('.js-pos'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var reduce=false; try{ reduce=matchMedia('(prefers-reduced-motion:reduce)').matches; }catch(e){}
    var t=0, running=!reduce, cur='';

    var dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }

    function state(){
      var amp=(+ampIn.value)*Math.PI/180, th=amp*Math.cos(OMEGA*t);
      var pe = (1-Math.cos(th))/(1-Math.cos(amp));   // ٠..١
      if(!isFinite(pe)) pe=0;
      pe=Math.max(0,Math.min(1,pe));
      return { amp:amp, th:th, pe:pe*100, ke:100-pe*100 };
    }

    function draw(){
      var s=state();
      ctx.clearRect(0,0,W,H);
      // قوس مدى التأرجح
      ctx.strokeStyle=css('--line-strong','#D6D9EC'); ctx.lineWidth=1.5; ctx.setLineDash([3,3]);
      ctx.beginPath(); ctx.arc(PX,PY,L,Math.PI/2-s.amp,Math.PI/2+s.amp); ctx.stroke(); ctx.setLineDash([]);
      // الخيط والكرة
      var bx=PX+L*Math.sin(s.th), by=PY+L*Math.cos(s.th);
      ctx.strokeStyle=css('--ink-soft','#4A5080'); ctx.lineWidth=2;
      ctx.beginPath(); ctx.moveTo(PX,PY); ctx.lineTo(bx,by); ctx.stroke();
      ctx.fillStyle=css('--ink-soft','#4A5080'); ctx.beginPath(); ctx.arc(PX,PY,4,0,6.2832); ctx.fill();
      // لون الكرة يتدرّج من طاقة الوضع (جمري) عند القمّة إلى الحركة (فيروزي) عند القاع
      var mixC=[ (PE_C[0]*s.pe+KE_C[0]*s.ke)/100|0, (PE_C[1]*s.pe+KE_C[1]*s.ke)/100|0, (PE_C[2]*s.pe+KE_C[2]*s.ke)/100|0 ];
      ctx.fillStyle='rgb('+mixC[0]+','+mixC[1]+','+mixC[2]+')';
      ctx.beginPath(); ctx.arc(bx,by,13,0,6.2832); ctx.fill();
      ctx.fillStyle='rgba(255,255,255,.35)'; ctx.beginPath(); ctx.arc(bx-4,by-4,4,0,6.2832); ctx.fill();
      // عمود الطاقة المكدّس (وضع + حركة = الكلّي الثابت)
      var bx0=30, bx1=270, bw=bx1-bx0, byy=200, bh=20;
      var pw=bw*s.pe/100;
      ctx.fillStyle=rgb(PE_C); ctx.fillRect(bx0,byy,pw,bh);
      ctx.fillStyle=rgb(KE_C); ctx.fillRect(bx0+pw,byy,bw-pw,bh);
      ctx.strokeStyle=css('--gold','#F4B740'); ctx.lineWidth=2; ctx.strokeRect(bx0,byy,bw,bh);
      ctx.font='700 11px "IBM Plex Sans Arabic",sans-serif'; ctx.textBaseline='alphabetic';
      ctx.fillStyle=rgb(PE_C); ctx.textAlign='right'; ctx.fillText('طاقة الوضع', bx1, byy-6);
      ctx.fillStyle=rgb(KE_C); ctx.textAlign='left'; ctx.fillText('طاقة الحركة', bx0, byy-6);
    }

    function refresh(){
      var s=state();
      q('.js-av').textContent=toAr(+ampIn.value);
      q('.js-pe').textContent=toAr(Math.round(s.pe));
      q('.js-ke').textContent=toAr(Math.round(s.ke));
      var pos = s.pe>75?'top':(s.ke>75?'bottom':'mid');
      elPos.textContent = pos==='top'?'عند القمّة':(pos==='bottom'?'عند القاع':'في المنتصف');
      elPos.style.color = pos==='top'?'var(--ember-deep)':(pos==='bottom'?'var(--subject-deep)':'var(--muted)');
      if(pos!==cur){ cur=pos;
        elIc.style.background = pos==='bottom'?'var(--subject-deep)':'var(--ember-deep)'; elIc.innerHTML=BOLT;
        elTit.textContent = pos==='top'?'أقصى طاقة وضع':(pos==='bottom'?'أقصى طاقة حركة':'تحوُّلُ الطاقة');
        elTit.style.color = pos==='bottom'?'var(--subject-deep)':'var(--ember-deep)';
        elX.textContent='عند القمّة تكون السرعةُ صفرًا وطاقةُ الوضع عظمى، وعند القاع تكون السرعةُ عظمى وطاقةُ الحركة عظمى. تتحوّل الطاقةُ بينهما باستمرار ويبقى مجموعُهما (الطاقة الكلية) ثابتًا — حفظُ الطاقة.';
      }
    }
    function loop(){
      if(!cv.isConnected) return;
      if(running) t+=DT;
      refresh(); draw();
      requestAnimationFrame(loop);
    }
    ampIn.addEventListener('input', function(){ t=0; refresh(); draw(); });
    q('.js-play').onclick=function(){ running=!running; this.textContent=running?'⏸ إيقاف':'▶ تشغيل'; };
    q('.js-reset').onclick=function(){ t=0; running=true; q('.js-play').textContent='⏸ إيقاف'; refresh(); draw(); };
    fit(); refresh(); draw();
    if(!reduce) loop();
    window.addEventListener('resize', fit);
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
