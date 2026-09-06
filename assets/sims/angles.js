/* ============================================================
   محاكاة تفاعلية — علاقات الزوايا ومجموع زوايا المضلّع
   المتتامّتان مجموعُهما ٩٠°، والمتكاملتان ١٨٠°. ومجموعُ زوايا مضلّعٍ
   عددُ أضلاعِه ن هو (ن − ٢) × ١٨٠°.
   الاستعمال من المحرّك:  window.SIMS['angles'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['angles'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h16M4 20L18 6"/><path d="M4 20a10 10 0 0 0 6-3"/></svg>';
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  function deg(n){ return toAr(n)+'°'; }
  var D=Math.PI/180;

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="زاويتان متتامّتان أو متكاملتان أو مضلّع منتظم">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="زاويتان مجموعهما ٩٠° أو ١٨٠°، أو مضلّع منتظم ومجموع زواياه"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">العلاقة:</span><span class="wq-val js-rel" style="font-size:13px">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-quick"><button type="button" class="wq-qbtn js-mode" data-m="comp" aria-pressed="true">متتامّة</button><button type="button" class="wq-qbtn js-mode" data-m="supp">متكاملة</button><button type="button" class="wq-qbtn js-mode" data-m="poly">مضلّع</button></div>'+
          '<div class="wq-sl"><div class="wq-sllabel"><span class="js-sllabel">الزاوية الأولى</span><b class="js-val">٣٠</b></div><input type="range" class="wq-range warm js-a" min="10" max="80" value="30" step="5"></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k js-k1">الزاوية الثانية</div><div class="wq-v js-r1">—</div></div>'+
          '<div class="wq-read"><div class="wq-k js-k2">المجموع</div><div class="wq-v js-r2">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">الزوايا</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var qa=function(s){ return Array.prototype.slice.call(container.querySelectorAll(s)); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var aIn=q('.js-a'), elRel=q('.js-rel'), elIc=q('.js-ic'), elTit=q('.js-etitle'), elX=q('.js-etext');
    var mode='comp', dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function drawAr(x,y,str,col,f){ ctx.fillStyle=col; ctx.save(); ctx.font=f||'700 10px "IBM Plex Sans Arabic",sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='rtl'; ctx.fillText(str,x,y); ctx.restore(); }
    function drawNum(x,y,str,col,f){ ctx.fillStyle=col; ctx.save(); ctx.font=f||'800 12px Poppins,sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='ltr'; ctx.fillText('‭'+str+'‬',x,y); ctx.restore(); }
    function ray(vx,vy,ang,len,col,lw){ ctx.strokeStyle=col; ctx.lineWidth=lw||3; ctx.lineCap='round'; ctx.beginPath(); ctx.moveTo(vx,vy); ctx.lineTo(vx+len*Math.cos(ang*D),vy-len*Math.sin(ang*D)); ctx.stroke(); }
    function arc(vx,vy,r,d1,d2,col){ ctx.strokeStyle=col; ctx.lineWidth=2; ctx.beginPath();
      for(var t=d1;t<=d2;t+=2){ var x=vx+r*Math.cos(t*D), y=vy-r*Math.sin(t*D); if(t===d1) ctx.moveTo(x,y); else ctx.lineTo(x,y); } ctx.stroke();
      var mid=(d1+d2)/2; return [vx+(r+14)*Math.cos(mid*D), vy-(r+14)*Math.sin(mid*D)]; }

    function draw(){
      ctx.clearRect(0,0,W,H);
      var C1=css('--ember','#F2892E'), C1d=css('--ember-deep','#E4681B'), C2=css('--s-math','#3B6FE0'), C2d=css('--s-math-deep','#2551B8');
      if(mode==='poly'){
        var n=+aIn.value, cx=150, cy=104, R=64, sum=(n-2)*180, each=sum/n;
        var pts=[]; for(var i=0;i<n;i++){ var ang=90+i*360/n; pts.push([cx+R*Math.cos(ang*D), cy-R*Math.sin(ang*D)]); }
        ctx.fillStyle=css('--brand-soft','#ECEBFA'); ctx.strokeStyle=css('--brand','#4B45C6'); ctx.lineWidth=2.5;
        ctx.beginPath(); pts.forEach(function(p,i){ i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]); }); ctx.closePath(); ctx.fill(); ctx.stroke();
        // علاماتُ الزوايا الداخلية
        ctx.fillStyle=css('--brand','#4B45C6'); pts.forEach(function(p){ ctx.beginPath(); ctx.arc(p[0],p[1],3,0,6.2832); ctx.fill(); });
        drawNum(cx,cy-6, deg(sum), css('--brand-deep','#3833A0'),'900 20px Poppins');
        drawAr(cx,cy+16, 'مجموع الزوايا', css('--brand-deep','#3833A0'),'700 10px "IBM Plex Sans Arabic",sans-serif');
        drawNum(cx, H-30, '('+toAr(n)+' − ٢) × ١٨٠° = '+deg(sum), css('--muted','#7C82A8'),'700 12px Poppins');
        drawAr(cx, H-14, 'كلُّ زاوية = '+deg(Math.round(each)), css('--muted','#7C82A8'),'600 10px "IBM Plex Sans Arabic",sans-serif');
      } else {
        var a=+aIn.value, tot=mode==='comp'?90:180, b=tot-a;
        var vx=64, vy=170, L=150;
        // الشعاعان الحدّيّان
        if(mode==='comp'){ ray(vx,vy,0,L,css('--ink-soft','#4A5080'),2); ray(vx,vy,90,L-20,css('--ink-soft','#4A5080'),2);
          // زاوية قائمة صغيرة عند الرأس
          ctx.strokeStyle=css('--line-strong','#D6D9EC'); ctx.lineWidth=1.2; ctx.strokeRect(vx,vy-14,14,14);
        } else { ray(vx,vy,0,L,css('--ink-soft','#4A5080'),2); ray(vx,vy,180,vx-6,css('--ink-soft','#4A5080'),2); }
        // الشعاع الفاصل
        ray(vx,vy,a,L-16,css('--brand','#4B45C6'),3);
        // القوسان والقيم
        var p1=arc(vx,vy,34,0,a,C1d); drawNum(p1[0],p1[1],deg(a),C1d,'800 12px Poppins');
        var p2=arc(vx,vy,52,a,tot,C2d); drawNum(p2[0],p2[1],deg(b),C2d,'800 12px Poppins');
        drawNum(150, 30, deg(a)+' + '+deg(b)+' = '+deg(tot), css('--ink','#1C2143'),'800 13px Poppins');
        drawAr(150, 48, mode==='comp'?'زاويتان متتامّتان':'زاويتان متكاملتان', css('--muted','#7C82A8'),'700 10px "IBM Plex Sans Arabic",sans-serif');
      }
    }
    function refresh(){
      qa('.js-mode').forEach(function(b){ b.setAttribute('aria-pressed', b.getAttribute('data-m')===mode?'true':'false'); });
      if(mode==='poly'){
        var n=+aIn.value, sum=(n-2)*180, each=Math.round(sum/n);
        q('.js-sllabel').textContent='عدد الأضلاع ن';
        q('.js-val').textContent=toAr(n);
        q('.js-k1').textContent='مجموع الزوايا'; q('.js-r1').textContent=deg(sum);
        q('.js-k2').textContent='كلُّ زاوية'; q('.js-r2').textContent=deg(each);
        elRel.textContent='(ن − ٢) × ١٨٠°'; elRel.style.color=css('--brand-deep','#3833A0');
        elIc.style.background=css('--brand-deep','#3833A0'); elIc.innerHTML=ICN;
        elTit.textContent='مجموع زوايا المضلّع';
        var nm={3:'مثلث',4:'رباعي',5:'خماسي',6:'سداسي',7:'سباعي',8:'ثماني'}[n];
        elX.innerHTML='مجموعُ الزوايا الداخلية لمضلّعٍ عددُ أضلاعه <b>'+toAr(n)+'</b> ('+nm+') = <b>('+toAr(n)+' − ٢) × ١٨٠° = '+deg(sum)+'</b>. وإذا كان منتظمًا فكلُّ زاويةٍ = '+deg(sum)+' ÷ '+toAr(n)+' = <b>'+deg(each)+'</b>.';
      } else {
        var a=+aIn.value, tot=mode==='comp'?90:180, b=tot-a;
        q('.js-sllabel').textContent='الزاوية الأولى';
        q('.js-val').textContent=toAr(a);
        q('.js-k1').textContent=mode==='comp'?'المتمّم (٩٠° − الأولى)':'المكمّل (١٨٠° − الأولى)';
        q('.js-r1').textContent=deg(b);
        q('.js-k2').textContent='المجموع'; q('.js-r2').textContent=deg(tot);
        elRel.textContent=deg(a)+' + '+deg(b)+' = '+deg(tot); elRel.style.color=css('--ink','#1C2143');
        elIc.style.background=css('--brand-deep','#3833A0'); elIc.innerHTML=ICN;
        elTit.textContent=mode==='comp'?'زاويتان متتامّتان':'زاويتان متكاملتان';
        elX.innerHTML='الزاويتان <b>'+(mode==='comp'?'المتتامّتان':'المتكاملتان')+'</b> مجموعُهما <b>'+deg(tot)+'</b>. فإذا كانت الأولى <b>'+deg(a)+'</b> فالأخرى = '+deg(tot)+' − '+deg(a)+' = <b>'+deg(b)+'</b>. '+(mode==='comp'?'(المتتامّةُ أصغرُ لأنّ ٩٠° أصغرُ من ١٨٠°.)':'');
      }
      draw();
    }
    qa('.js-mode').forEach(function(b){ b.addEventListener('click', function(){
      mode=b.getAttribute('data-m');
      if(mode==='poly'){ aIn.min=3; aIn.max=8; aIn.step=1; aIn.value=5; }
      else { aIn.min=10; aIn.max=80; aIn.step=5; if(+aIn.value<10||+aIn.value>80) aIn.value=30; }
      refresh();
    }); });
    aIn.addEventListener('input', refresh);
    q('.js-reset').onclick=function(){ mode='comp'; aIn.min=10; aIn.max=80; aIn.step=5; aIn.value=30; refresh(); };
    ['.js-r1','.js-r2','.js-val'].forEach(function(s){ q(s).style.direction='ltr'; q(s).style.unicodeBidi='isolate'; });
    elRel.style.direction='ltr'; elRel.style.unicodeBidi='isolate';
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
