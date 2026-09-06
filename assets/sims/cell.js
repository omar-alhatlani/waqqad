/* ============================================================
   محاكاة تفاعلية — عالم الخلايا (نبات مقابل حيوان)
   الخليةُ وحدةُ بناء الحياة. تنفردُ خليةُ النبات بالجدار الخلوي
   والبلاستيدات الخضراء والفجوة الكبيرة عن خلية الحيوان.
   الاستعمال من المحرّك:  window.SIMS['cell'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['cell'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.2"/></svg>';

  // العُضيّات ووظائفها. plant:true = تنفرد بها خلية النبات.
  var ORG={
    membrane:{n:'الغشاء البلازمي', fn:'بوّابةُ الخلية — يتحكّم في مرور المواد من الخلية وإليها.', plant:false},
    nucleus:{n:'النواة', fn:'مركزُ التحكّم — تحوي المعلوماتِ الوراثية (الكروموسومات).', plant:false},
    mito:{n:'الميتوكندريا', fn:'مصنعُ الطاقة — تحوّل الغذاءَ إلى طاقةٍ بالتنفّس الخلوي.', plant:false},
    cyto:{n:'السيتوبلازم', fn:'سائلٌ هلاميّ يحوي الماءَ والموادَّ وتحدث فيه معظمُ العمليات.', plant:false},
    vacuole:{n:'الفجوة', fn:'تخزّن الماءَ والموادّ — وهي كبيرةٌ في خلية النبات.', plant:false},
    wall:{n:'الجدار الخلوي', fn:'يوفّر الحمايةَ والتماسك — ينفردُ به النبات (خارج الغشاء).', plant:true},
    chloro:{n:'البلاستيدات الخضراء', fn:'تصنع الغذاءَ بالبناء الضوئي — تنفردُ بها خلية النبات.', plant:true}
  };
  var ORDER=['membrane','nucleus','mito','cyto','vacuole','wall','chloro'];

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="مخطّط خلية نبات أو حيوان وعُضيّاتها">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="خلية بعُضيّاتها: نواة وغشاء وميتوكندريا وفجوة، والنبات يزيد جدارًا وبلاستيدات"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">العُضيّة:</span><span class="wq-val js-name" style="font-size:14px">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-quick"><button type="button" class="wq-qbtn js-mode" data-m="plant" aria-pressed="true">نبات</button><button type="button" class="wq-qbtn js-mode" data-m="animal">حيوان</button></div>'+
          '<div class="wq-quick js-orgs"></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">نوع الخلية</div><div class="wq-v js-cell" style="font-size:13px">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">تنفردُ بها؟</div><div class="wq-v js-only" style="font-size:13px">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">الخلية</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, CX=150, CY=112;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var qa=function(s){ return Array.prototype.slice.call(container.querySelectorAll(s)); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var elName=q('.js-name'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext'), elOrgs=q('.js-orgs');
    var mode='plant', sel='nucleus', dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function drawAr(x,y,str,col,f){ ctx.fillStyle=col; ctx.save(); ctx.font=f||'700 10px "IBM Plex Sans Arabic",sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='rtl'; ctx.fillText(str,x,y); ctx.restore(); }

    function hi(k){ return sel===k; }
    function draw(){
      ctx.clearRect(0,0,W,H);
      var plant=mode==='plant';
      var L=plant?54:64, R=plant?246:236, T=plant?36:44, B=plant?188:180; // حدود الخلية
      // الجدار الخلوي (نبات فقط) — مستطيل خارجيّ
      if(plant){
        ctx.strokeStyle=hi('wall')?css('--brand','#4B45C6'):'#7BA05B'; ctx.lineWidth=hi('wall')?5:4;
        ctx.beginPath(); ctx.roundRect(L-8,T-8,(R-L)+16,(B-T)+16,10); ctx.stroke();
      }
      // الغشاء البلازمي + السيتوبلازم
      ctx.fillStyle=css('--s-sci-soft','#E2F5F5');
      ctx.strokeStyle=hi('membrane')?css('--brand','#4B45C6'):'#5FA8AE'; ctx.lineWidth=hi('membrane')?4:2.5;
      ctx.beginPath();
      if(plant) ctx.roundRect(L,T,R-L,B-T,10); else ctx.ellipse(CX,CY,(R-L)/2,(B-T)/2,0,0,6.2832);
      ctx.fill(); ctx.stroke();
      if(hi('cyto')){ ctx.fillStyle='rgba(75,69,198,0.10)'; ctx.beginPath(); if(plant) ctx.roundRect(L,T,R-L,B-T,10); else ctx.ellipse(CX,CY,(R-L)/2,(B-T)/2,0,0,6.2832); ctx.fill(); }
      // النواة
      ctx.fillStyle='#B58BD4'; ctx.strokeStyle=hi('nucleus')?css('--brand','#4B45C6'):'#8E5FB0'; ctx.lineWidth=hi('nucleus')?4:2;
      ctx.beginPath(); ctx.arc(CX,CY,24,0,6.2832); ctx.fill(); ctx.stroke();
      ctx.fillStyle='#7A4B9E'; ctx.beginPath(); ctx.arc(CX+6,CY-4,7,0,6.2832); ctx.fill();
      // الميتوكندريا
      var mx=plant?96:104, my=plant?150:138;
      ctx.save(); ctx.translate(mx,my); ctx.rotate(-0.5);
      ctx.fillStyle='#E58A6B'; ctx.strokeStyle=hi('mito')?css('--brand','#4B45C6'):'#C1502E'; ctx.lineWidth=hi('mito')?4:2;
      ctx.beginPath(); ctx.ellipse(0,0,20,10,0,0,6.2832); ctx.fill(); ctx.stroke();
      ctx.strokeStyle='#C1502E'; ctx.lineWidth=1.4; ctx.beginPath(); for(var w=-14;w<=14;w+=6){ ctx.moveTo(w,-6); ctx.lineTo(w+3,6); } ctx.stroke(); ctx.restore();
      // الفجوة
      var vx=plant?196:112, vy=plant?150:80, vr=plant?26:9;
      ctx.fillStyle='#BFE3F2'; ctx.strokeStyle=hi('vacuole')?css('--brand','#4B45C6'):'#6FB3D6'; ctx.lineWidth=hi('vacuole')?4:2;
      ctx.beginPath(); ctx.arc(vx,vy,vr,0,6.2832); ctx.fill(); ctx.stroke();
      // البلاستيدات الخضراء (نبات فقط)
      if(plant){
        [[210,84],[96,96]].forEach(function(pt){
          ctx.save(); ctx.translate(pt[0],pt[1]); ctx.rotate(0.4);
          ctx.fillStyle='#4FA85E'; ctx.strokeStyle=hi('chloro')?css('--brand','#4B45C6'):'#2E7D46'; ctx.lineWidth=hi('chloro')?4:2;
          ctx.beginPath(); ctx.ellipse(0,0,15,8,0,0,6.2832); ctx.fill(); ctx.stroke(); ctx.restore();
        });
      }
      // تسمية العُضيّة المحدّدة
      var o=ORG[sel]; if(o && !(o.plant && !plant)) drawAr(CX, H-16, o.n, css('--ink','#1C2143'), '800 11px "IBM Plex Sans Arabic",sans-serif');
    }
    function buildOrgs(){
      var plant=mode==='plant';
      elOrgs.innerHTML = ORDER.filter(function(k){ return plant || !ORG[k].plant; })
        .map(function(k){ return '<button type="button" class="wq-qbtn js-org" data-k="'+k+'" aria-pressed="'+(sel===k)+'">'+ORG[k].n+'</button>'; }).join('');
      qa('.js-org').forEach(function(b){ b.addEventListener('click', function(){ sel=b.getAttribute('data-k'); refresh(); }); });
    }
    function refresh(){
      var plant=mode==='plant';
      if(ORG[sel].plant && !plant) sel='nucleus'; // عُضيّةٌ نباتيةٌ اختِفت ← ارجعْ للنواة
      var o=ORG[sel];
      buildOrgs();
      qa('.js-mode').forEach(function(b){ b.setAttribute('aria-pressed', b.getAttribute('data-m')===mode?'true':'false'); });
      elName.textContent=o.n; elName.style.color=css('--ink','#1C2143');
      q('.js-cell').textContent = plant?'خلية نبات':'خلية حيوان';
      q('.js-cell').style.color = plant?css('--s-ar-deep','#1F7D52'):css('--ember-deep','#E4681B');
      q('.js-only').textContent = o.plant?'النبات فقط':'الاثنتان';
      q('.js-only').style.color = o.plant?css('--s-ar-deep','#1F7D52'):css('--muted','#7C82A8');
      elIc.style.background=css('--subject-deep','#0B7E86'); elIc.innerHTML=ICN;
      elTit.textContent=o.n;
      elX.innerHTML='<b>'+o.n+'</b>: '+o.fn+' '+(plant
        ? 'وخليةُ <b>النبات</b> تنفردُ بالجدار الخلوي والبلاستيدات الخضراء والفجوة الكبيرة.'
        : 'وخليةُ <b>الحيوان</b> ليس لها جدارٌ خلويّ ولا بلاستيداتٌ خضراء.');
      draw();
    }
    qa('.js-mode').forEach(function(b){ b.addEventListener('click', function(){ mode=b.getAttribute('data-m'); refresh(); }); });
    q('.js-reset').onclick=function(){ mode='plant'; sel='nucleus'; refresh(); };
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
