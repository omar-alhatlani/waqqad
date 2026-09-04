/* ============================================================
   محاكاة تفاعلية — بناء الذرّة (البروتونات والنيوترونات والإلكترونات)
   أضِف/أزِل الجُسيمات وراقب: العنصرَ (يحدّده عددُ البروتونات = العدد الذرّي)،
   والعددَ الكتلي (بروتونات + نيوترونات)، والشحنةَ (بروتونات − إلكترونات).
   الاستعمال من المحرّك:  window.SIMS['atom'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['atom'] = (function(){

  var NAMES=['—','هيدروجين','هيليوم','ليثيوم','بيريليوم','بورون','كربون','نيتروجين','أكسجين','فلور','نيون'];
  var SYM  =['—','H','He','Li','Be','B','C','N','O','F','Ne'];
  var PMAX=10, NMAX=14, EMAX=10;
  var C_P=[228,104,27], C_N=[124,130,168], C_E=[59,111,224];   // بروتون/نيوترون/إلكترون

  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  function rgb(c){ return 'rgb('+c[0]+','+c[1]+','+c[2]+')'; }

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="نموذج الذرّة">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="نواة فيها بروتونات ونيوترونات، وحولها إلكترونات في مدارات"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">العنصر:</span><span class="wq-val js-el">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          step('p','البروتونات','موجبة',C_P)+
          step('n','النيوترونات','متعادلة',C_N)+
          step('e','الإلكترونات','سالبة',C_E)+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">العدد الذرّي</div><div class="wq-v js-z">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">العدد الكتلي</div><div class="wq-v js-a">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">الشحنة</div><div class="wq-v js-q">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">التصنيف</div><div class="wq-v js-cls" style="font-size:15px">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة (كربون)</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">—</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  function step(k,label,sub,c){
    return '<div class="wq-step"><span class="wq-stepdot" style="background:'+rgb(c)+'"></span>'+
      '<span class="wq-steplbl">'+label+' <small>('+sub+')</small></span>'+
      '<div class="wq-stepctl"><button type="button" class="wq-stepbtn js-'+k+'m" aria-label="إنقاص">−</button>'+
      '<b class="js-'+k+'n">٠</b><button type="button" class="wq-stepbtn js-'+k+'p" aria-label="زيادة">+</button></div></div>';
  }

  var W=300, H=240, CX=150, CY=120, R1=54, R2=86;

  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var reduce=false; try{ reduce=matchMedia('(prefers-reduced-motion:reduce)').matches; }catch(e){}
    var p=6, n=6, e=6, rot1=0, rot2=Math.PI, curCls='';

    var dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(name,fb){ try{ var x=getComputedStyle(container).getPropertyValue(name).trim(); return x||fb; }catch(e){ return fb; } }

    // توزيعُ النوى (فيلوتاكسي) مع تداخلٍ ثابتٍ بين البروتونات والنيوترونات
    function drawNucleus(){
      var total=p+n; if(total===0) return;
      var pi=0, ni=0;
      for(var i=0;i<total;i++){
        var a=i*2.399963, r=6.0*Math.sqrt(i);
        var x=CX+Math.cos(a)*r, y=CY+Math.sin(a)*r;
        var isP = (pi<p && (ni>=n || i%2===0));
        if(isP) pi++; else ni++;
        ctx.beginPath(); ctx.fillStyle=isP?rgb(C_P):rgb(C_N); ctx.arc(x,y,5.6,0,6.2832); ctx.fill();
        ctx.beginPath(); ctx.fillStyle='rgba(255,255,255,.35)'; ctx.arc(x-1.7,y-1.9,2,0,6.2832); ctx.fill();
      }
    }
    function drawShell(R,count,rot){
      if(count<=0) return;
      ctx.strokeStyle=css('--line-strong','#D6D9EC'); ctx.lineWidth=1.4;
      ctx.beginPath(); ctx.arc(CX,CY,R,0,6.2832); ctx.stroke();
      for(var i=0;i<count;i++){
        var a=rot+i*6.2832/count, x=CX+Math.cos(a)*R, y=CY+Math.sin(a)*R;
        ctx.beginPath(); ctx.fillStyle=rgb(C_E); ctx.arc(x,y,4.2,0,6.2832); ctx.fill();
        ctx.beginPath(); ctx.fillStyle='rgba(255,255,255,.4)'; ctx.arc(x-1.3,y-1.5,1.6,0,6.2832); ctx.fill();
      }
    }
    function draw(){
      ctx.clearRect(0,0,W,H);
      var s1=Math.min(e,2), s2=Math.min(Math.max(e-2,0),8);
      drawShell(R2,s2,rot2); drawShell(R1,s1,rot1);
      drawNucleus();
    }

    function classify(){ return p===0 ? 'empty' : (p===e ? 'neutral' : (p>e ? 'pos' : 'neg')); }
    function explainOf(){
      var name=NAMES[p], qc=p-e;
      if(p===0) return { t:'ابدأ ببروتون', col:'var(--muted)', x:'لا توجد ذرّةٌ بعد. أضِف بروتونًا واحدًا على الأقلّ لتتكوّن النواةُ ويظهر العنصر.' };
      if(qc===0) return { t:'ذرّة '+name+' متعادلة', col:'var(--subject-deep)', x:'عددُ البروتونات ('+toAr(p)+') يساوي عددَ الإلكترونات، فالشحنةُ صفر. وعددُ البروتونات هو <b>العدد الذرّي</b> الذي يحدّد العنصر: '+name+'.' };
      if(qc>0)  return { t:'أيونٌ موجب ('+name+')', col:'var(--ember-deep)', x:'البروتوناتُ أكثرُ من الإلكترونات بمقدار '+toAr(qc)+'، فالشحنةُ موجبة. تغييرُ الإلكترونات يصنع <b>أيونًا</b> من العنصر نفسه ولا يغيّر العنصر.' };
      return { t:'أيونٌ سالب ('+name+')', col:'var(--cold-deep)', x:'الإلكتروناتُ أكثرُ من البروتونات بمقدار '+toAr(-qc)+'، فالشحنةُ سالبة. وعددُ البروتونات وحدَه هو ما يحدّد العنصر.' };
    }

    function refresh(){
      q('.js-pn').textContent=toAr(p); q('.js-nn').textContent=toAr(n); q('.js-en').textContent=toAr(e);
      q('.js-pm').disabled=(p<=0); q('.js-pp').disabled=(p>=PMAX);
      q('.js-nm').disabled=(n<=0); q('.js-np').disabled=(n>=NMAX);
      q('.js-em').disabled=(e<=0); q('.js-ep').disabled=(e>=EMAX);
      var el=q('.js-el');
      el.textContent = p===0 ? '—' : NAMES[p]+' ('+SYM[p]+')';
      el.style.color = p===0 ? 'var(--muted)' : 'var(--subject-deep)';
      q('.js-z').textContent=toAr(p);
      q('.js-a').textContent=toAr(p+n);
      var qc=p-e;
      q('.js-q').textContent = qc===0 ? '٠' : (qc>0?'+':'−')+toAr(Math.abs(qc));
      var cls=classify();
      q('.js-cls').textContent = cls==='empty'?'—':(cls==='neutral'?'متعادلة':(cls==='pos'?'أيون موجب':'أيون سالب'));
      var ex=explainOf();
      if(cls!==curCls || cls==='pos' || cls==='neg' || cls==='neutral'){
        curCls=cls;
        q('.js-etitle').textContent=ex.t; q('.js-etitle').style.color=ex.col;
        q('.js-ic').style.background=ex.col; q('.js-ic').innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="2.4" fill="currentColor" stroke="none"/><ellipse cx="12" cy="12" rx="10" ry="4.4"/><ellipse cx="12" cy="12" rx="10" ry="4.4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.4" transform="rotate(120 12 12)"/></svg>';
        q('.js-etext').innerHTML=ex.x;
      }
      if(reduce) draw();
    }

    function loop(){
      if(!cv.isConnected) return;
      rot1+=0.013; rot2+=0.009;
      draw();
      requestAnimationFrame(loop);
    }

    function bind(k,getset){
      q('.js-'+k+'p').onclick=function(){ getset(1); refresh(); };
      q('.js-'+k+'m').onclick=function(){ getset(-1); refresh(); };
    }
    bind('p',function(d){ p=Math.max(0,Math.min(PMAX,p+d)); });
    bind('n',function(d){ n=Math.max(0,Math.min(NMAX,n+d)); });
    bind('e',function(d){ e=Math.max(0,Math.min(EMAX,e+d)); });
    q('.js-reset').onclick=function(){ p=6; n=6; e=6; refresh(); };

    fit(); refresh(); draw();
    if(!reduce) loop();
    window.addEventListener('resize', fit);
    return { destroy:function(){} };
  }

  return { mount:mount };
})();
