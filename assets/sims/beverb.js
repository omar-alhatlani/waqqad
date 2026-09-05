/* ============================================================
   محاكاة تفاعلية (إنجليزي) — التعارف والفعل be (am / is / are)
   مشهدُ تعارفٍ: اختر مَن يتحدّث فتنطقُ الشخصيةُ جملةَ تعريفٍ في فقاعة
   كلام، ويُبرَز الفعلُ be الصحيح (I→am، He/She→is، They→are).
   الاستعمال من المحرّك:  window.SIMS['beverb'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['beverb'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.3 7.3L4 20l.7-5.7A8 8 0 1 1 21 12z"/></svg>';
  var CHARS={
    me:{ btn:'أنا (I)', pr:'I', be:'am', kind:'cap', name:'Me',
         says:['Hi! I am Salem.','I am twelve.','I am from Riyadh.','I am a student.'] },
    he:{ btn:'علي (He)', pr:'He', be:'is', kind:'boy', name:'Ali',
         says:['This is Ali. He is my friend.','He is twelve.','He is from Jeddah.'] },
    she:{ btn:'سارة (She)', pr:'She', be:'is', kind:'hijab', name:'Sara',
         says:['This is Sara. She is a student.','She is from Makkah.','She is my classmate.'] },
    they:{ btn:'هم (They)', pr:'They', be:'are', kind:'two', name:'Friends',
         says:['They are my friends.','They are students.','They are in class.'] }
  };
  var ORDER=['me','he','she','they'];

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="مشهد تعارف بالفعل be">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="شخصية تنطق جملة تعريف بالفعل be"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">الفعل be:</span><span class="wq-val js-be">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sllabel"><span>مَن يتحدّث؟</span></div>'+
          '<div class="wq-quick js-who" style="flex-wrap:wrap;margin-bottom:2px"></div>'+
          '<div class="wq-quick"><button type="button" class="wq-tool js-next" style="flex:1">🔁 جملة أخرى</button></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">الجملة</div><div class="wq-v js-sent" style="font-size:13px;direction:ltr">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">القاعدة</div><div class="wq-v js-rule" style="font-size:13px;direction:ltr">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">الفعل be في التعارف</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var elBe=q('.js-be'), elIc=q('.js-ic'), elX=q('.js-etext');
    var who='she', si=0, dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }

    // ——— رسم شخصية كرتونية ———
    function face(cx,cy,r,kind){
      var skin='#F2C6A0', hair='#3A2A22', hij='#E86A92', cap=css('--s-en','#7A5BE8');
      // شعر/غطاء خلف الوجه
      if(kind==='hijab'){ ctx.fillStyle=hij; ctx.beginPath(); ctx.arc(cx,cy-2,r+7,0,6.2832); ctx.fill(); }
      if(kind==='boy'||kind==='cap'){ ctx.fillStyle=hair; ctx.beginPath(); ctx.arc(cx,cy-2,r+3,Math.PI,0); ctx.fill(); }
      // الوجه
      ctx.fillStyle=skin; ctx.beginPath(); ctx.arc(cx,cy,r,0,6.2832); ctx.fill();
      if(kind==='hijab'){ // إطار الحجاب حول الوجه
        ctx.strokeStyle=hij; ctx.lineWidth=6; ctx.beginPath(); ctx.arc(cx,cy,r+1,Math.PI*0.78,Math.PI*2.22); ctx.stroke(); }
      if(kind==='cap'){ ctx.fillStyle=cap; ctx.beginPath(); ctx.arc(cx,cy-2,r+2,Math.PI*1.05,Math.PI*1.95); ctx.fill();
        ctx.fillRect(cx+r*0.2,cy-r-2,r*0.9,5); }
      // خدود
      ctx.fillStyle='rgba(233,120,120,.32)'; ctx.beginPath(); ctx.arc(cx-r*0.5,cy+r*0.25,r*0.2,0,6.2832); ctx.arc(cx+r*0.5,cy+r*0.25,r*0.2,0,6.2832); ctx.fill();
      // عينان وابتسامة
      ctx.fillStyle='#2B2430'; ctx.beginPath(); ctx.arc(cx-r*0.34,cy-r*0.1,r*0.11,0,6.2832); ctx.arc(cx+r*0.34,cy-r*0.1,r*0.11,0,6.2832); ctx.fill();
      ctx.strokeStyle='#2B2430'; ctx.lineWidth=2.4; ctx.lineCap='round'; ctx.beginPath(); ctx.arc(cx,cy+r*0.12,r*0.42,0.15*Math.PI,0.85*Math.PI); ctx.stroke();
    }
    function avatar(){
      var C=CHARS[who], cx=150, cy=150, r=34;
      if(C.kind==='two'){ face(120,152,26,'boy'); face(180,148,26,'hijab');
        // أكتاف مزدوجة
        ctx.fillStyle=css('--s-en','#7A5BE8'); ctx.beginPath(); ctx.roundRect(96,186,52,30,14); ctx.fill();
        ctx.fillStyle=css('--ember','#F2892E'); ctx.beginPath(); ctx.roundRect(156,184,52,30,14); ctx.fill();
        face(120,152,26,'boy'); face(180,148,26,'hijab');
      } else {
        // كتف/جسم
        ctx.fillStyle= C.kind==='hijab'?'#E86A92':(C.kind==='cap'?css('--s-en','#7A5BE8'):'#3B6FE0');
        ctx.beginPath(); ctx.roundRect(cx-40,cy+r-2,80,40,20); ctx.fill();
        face(cx,cy,r,C.kind);
        // لافتة الاسم
        ctx.fillStyle=css('--surface','#fff'); ctx.strokeStyle=css('--line-strong','#D6D9EC'); ctx.lineWidth=1.5;
        ctx.beginPath(); ctx.roundRect(cx-32,cy+r+18,64,18,9); ctx.fill(); ctx.stroke();
        ctx.fillStyle=css('--ink-soft','#4A5080'); ctx.font='700 11px Poppins,sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='ltr';
        ctx.fillText(C.name, cx, cy+r+27);
      }
    }
    // ——— فقاعة الكلام مع إبراز الفعل be ———
    function bubble(text, beWord){
      var bx=18, by=14, bw=264, bh=80;
      ctx.fillStyle=css('--surface','#fff'); ctx.strokeStyle=css('--s-en','#7A5BE8'); ctx.lineWidth=2.5;
      ctx.beginPath(); ctx.roundRect(bx,by,bw,bh,16); ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(128,by+bh-1); ctx.lineTo(150,by+bh+16); ctx.lineTo(160,by+bh-1); ctx.closePath();
      ctx.fillStyle=css('--surface','#fff'); ctx.fill(); ctx.strokeStyle=css('--s-en','#7A5BE8'); ctx.beginPath(); ctx.moveTo(128,by+bh-1); ctx.lineTo(150,by+bh+16); ctx.lineTo(160,by+bh-1); ctx.stroke();
      // تقطيع الأسطر
      ctx.textBaseline='middle'; ctx.direction='ltr'; ctx.textAlign='left';
      var words=text.split(' '), maxw=bw-30, base='700 15px Poppins,sans-serif', lines=[], cur=[];
      ctx.font=base;
      words.forEach(function(w){ var t=cur.concat([w]).join(' '); if(ctx.measureText(t).width>maxw && cur.length){ lines.push(cur); cur=[w]; } else cur.push(w); });
      if(cur.length) lines.push(cur);
      var lh=22, ty=by+bh/2-(lines.length-1)*lh/2;
      lines.forEach(function(ln){
        var lw=0; ln.forEach(function(w,i){ ctx.font=(w.replace(/[.!?,]/g,'')===beWord)?'800 16px Poppins,sans-serif':base; lw+=ctx.measureText(w).width+(i<ln.length-1?ctx.measureText(' ').width:0); });
        var lx=150-lw/2;
        ln.forEach(function(w){ var isBe=w.replace(/[.!?,]/g,'')===beWord; ctx.font=isBe?'800 16px Poppins,sans-serif':base;
          ctx.fillStyle=isBe?css('--ember-deep','#E4681B'):css('--ink','#1C2143'); ctx.fillText(w,lx,ty);
          if(isBe){ ctx.strokeStyle=css('--ember','#F2892E'); ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(lx,ty+10); ctx.lineTo(lx+ctx.measureText(w).width,ty+10); ctx.stroke(); }
          lx+=ctx.measureText(w).width+ctx.measureText(' ').width; });
        ty+=lh;
      });
    }
    function draw(){
      var C=CHARS[who]; ctx.clearRect(0,0,W,H);
      // خلفية لطيفة
      ctx.fillStyle=css('--s-en-soft','#EFEAFD'); ctx.beginPath(); ctx.roundRect(6,6,W-12,H-12,18); ctx.fill();
      avatar();
      bubble(C.says[si % C.says.length], C.be);
    }
    function renderWho(){ var box=q('.js-who'); box.innerHTML='';
      ORDER.forEach(function(k){ var C=CHARS[k], b=document.createElement('button'); b.type='button'; b.className='wq-qbtn'; b.textContent=C.btn;
        if(k===who){ b.setAttribute('aria-pressed','true'); b.style.background=css('--s-en','#7A5BE8'); b.style.color='#fff'; b.style.borderColor=css('--s-en','#7A5BE8'); }
        b.addEventListener('click', function(){ who=k; si=0; refresh(); }); box.appendChild(b); }); }
    function refresh(){
      var C=CHARS[who];
      renderWho();
      elBe.textContent=C.be; elBe.style.color=css('--s-en-deep','#5B3FC4');
      q('.js-sent').textContent=C.says[si % C.says.length];
      q('.js-rule').textContent=C.pr+' → '+C.be;
      elIc.style.background=css('--s-en-deep','#5B3FC4'); elIc.innerHTML=ICN;
      elX.innerHTML='في التعارف نستعمل الفعل <b class="en">be</b> حسب الفاعل: <b class="en">I → am</b>، و<b class="en">He / She → is</b>، و<b class="en">They → are</b>. جرّبْ كلَّ شخصيةٍ لتسمعَ جملتَها وترى الفعلَ المناسب. الحيلة: «أنا وحدي <b class="en">am</b>، والمفردُ الغائبُ <b class="en">is</b>، وما تبقّى <b class="en">are</b>.»';
      draw();
    }
    q('.js-next').onclick=function(){ si=(si+1)%CHARS[who].says.length; refresh(); };
    q('.js-reset').onclick=function(){ who='she'; si=0; refresh(); };
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
