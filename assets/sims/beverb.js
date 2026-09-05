/* ============================================================
   محاكاة تفاعلية (إنجليزي) — بناء جملة الفعل be (am / is / are)
   اختر الضمير فيظهر الشكلُ الصحيح للفعل be وتُبنى جملةٌ كاملة، مع
   إبراز القاعدة: I → am، He/She/It → is، You/We/They → are.
   الاستعمال من المحرّك:  window.SIMS['beverb'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['beverb'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M4 12h10M4 17h7"/></svg>';
  var PRON=['I','You','He','She','It','We','They'];
  function be(p){ return p==='I'?'am':(p==='You'||p==='We'||p==='They')?'are':'is'; }
  function grp(p){ return p==='I'?0:(p==='You'||p==='We'||p==='They')?2:1; }
  var ROWS=[['I','am'],['He · She · It','is'],['You · We · They','are']];
  var COMPS=['a student.','from Riyadh.','happy.','ready.','twelve.'];

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="بناء جملة الفعل be">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="جملة إنجليزية بالفعل be وجدول القاعدة"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">الفعل be:</span><span class="wq-val js-be">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sllabel"><span>اختر الضمير (Subject)</span></div>'+
          '<div class="wq-quick js-pron" style="margin-bottom:2px"></div>'+
          '<div class="wq-quick"><button type="button" class="wq-tool js-comp" style="flex:1">🔁 غيّر تتمّة الجملة</button></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">الجملة</div><div class="wq-v js-sent" style="font-size:14px;direction:ltr">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">القاعدة</div><div class="wq-v js-rule" style="font-size:13px;direction:ltr">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">الفعل be</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var qa=function(s){ return Array.prototype.slice.call(container.querySelectorAll(s)); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var elBe=q('.js-be'), elIc=q('.js-ic'), elX=q('.js-etext');
    var pron='She', ci=0, dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function tile(x,y,w,h,txt,bg,fg,f){ ctx.fillStyle=bg; ctx.beginPath(); ctx.roundRect(x,y,w,h,9); ctx.fill();
      ctx.fillStyle=fg; ctx.font=f; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='ltr'; ctx.fillText(txt,x+w/2,y+h/2+0.5); }

    function draw(){
      var pu=css('--s-en','#7A5BE8'), pud=css('--s-en-deep','#5B3FC4'), pus=css('--s-en-soft','#EFEAFD');
      var em=css('--ember','#F2892E'), ln=css('--line-strong','#D6D9EC'), ink=css('--ink','#1C2143'), mu=css('--muted','#7C82A8');
      ctx.clearRect(0,0,W,H);
      // الجملة كبطاقات كلمات
      var words=[pron, be(pron), COMPS[ci].replace(/\.$/,'')], f='800 16px Poppins,Cairo,sans-serif';
      ctx.font=f; var pad=11, gap=6, ws=words.map(function(t){ return ctx.measureText(t).width+pad*2; });
      var tot=ws[0]+ws[1]+ws[2]+gap*2, x=(W-tot)/2, y=26, h=34;
      tile(x,y,ws[0],h,words[0], pus, pud, f); x+=ws[0]+gap;
      tile(x,y,ws[1],h,words[1], em, '#fff', f); x+=ws[1]+gap;
      tile(x,y,ws[2],h,words[2], css('--surface-2','#FBFBFE'), ink, '700 15px Poppins,Cairo,sans-serif');
      // نقطة نهاية
      ctx.fillStyle=ink; ctx.font=f; ctx.textAlign='left'; ctx.fillText('.', x+ws[2]-6, y+h/2+6);
      // جدول القاعدة
      var g=grp(pron), ry=82, rh=32;
      for(var i=0;i<3;i++){ var act=i===g, yy=ry+i*(rh+6);
        ctx.fillStyle = act?pu:css('--surface-2','#FBFBFE'); ctx.strokeStyle= act?pud:ln; ctx.lineWidth=act?2:1;
        ctx.beginPath(); ctx.roundRect(26,yy,248,rh,10); ctx.fill(); ctx.stroke();
        ctx.fillStyle= act?'#fff':ink; ctx.font='700 14px Poppins,Cairo,sans-serif'; ctx.textBaseline='middle'; ctx.direction='ltr';
        ctx.textAlign='left'; ctx.fillText(ROWS[i][0], 38, yy+rh/2);
        ctx.textAlign='center'; ctx.fillStyle= act?'#fff':mu; ctx.fillText('→', 214, yy+rh/2);
        ctx.textAlign='right'; ctx.fillStyle= act?'#fff':pud; ctx.font='800 15px Poppins,Cairo,sans-serif'; ctx.fillText(ROWS[i][1], 262, yy+rh/2);
      }
    }
    function renderPron(){ var box=q('.js-pron'); box.innerHTML='';
      PRON.forEach(function(p){ var b=document.createElement('button'); b.type='button'; b.className='wq-qbtn'; b.textContent=p;
        b.style.direction='ltr'; b.style.fontWeight='700';
        if(p===pron){ b.setAttribute('aria-pressed','true'); b.style.background=css('--s-en','#7A5BE8'); b.style.color='#fff'; b.style.borderColor=css('--s-en','#7A5BE8'); }
        b.addEventListener('click', function(){ pron=p; refresh(); }); box.appendChild(b); }); }
    function refresh(){
      renderPron();
      elBe.textContent=be(pron); elBe.style.color=css('--s-en-deep','#5B3FC4');
      var sentence = pron+' '+be(pron)+' '+COMPS[ci];
      q('.js-sent').textContent=sentence;
      q('.js-rule').textContent = pron+' → '+be(pron);
      elIc.style.background=css('--s-en-deep','#5B3FC4'); elIc.innerHTML=ICN;
      elX.innerHTML='نختارُ شكلَ الفعل <b class="en">be</b> حسب الضمير (الفاعل): <b class="en">I → am</b> ، و<b class="en">He / She / It → is</b> ، و<b class="en">You / We / They → are</b>. الحيلة: «أنا وحدي <b class="en">am</b>، والمفردُ الغائبُ <b class="en">is</b>، وما تبقّى <b class="en">are</b>.»';
      draw();
    }
    q('.js-comp').onclick=function(){ ci=(ci+1)%COMPS.length; refresh(); };
    q('.js-reset').onclick=function(){ pron='She'; ci=0; refresh(); };
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
