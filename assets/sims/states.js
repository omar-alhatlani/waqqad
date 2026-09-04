/* ============================================================
   محاكاة تفاعلية — حالات المادة (صلب · سائل · غاز)
   نموذج ديناميكا جزيئية مبسّط (تجاذب/تنافر بين الجُسيمات + منظِّم حرارة).
   الاستعمال من المحرّك:  window.SIMS['states'].mount(container)
   يعمل بالكامل دون إنترنت، ويستعمل متغيّرات ألوان المنصّة نفسها.
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['states'] = (function(){

  var MOL='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="6" cy="7" r="2.5"/><circle cx="18" cy="7" r="2.5"/><circle cx="12" cy="17" r="2.5"/><path d="M7.8 8.6 10.2 15M16.2 8.6 13.8 15M8.5 7h7"/></svg>';

  var STATES={
    solid:{ ar:'صلبة', col:'var(--cold-deep)', bulb:'var(--cold)', title:'حالة صلبة',
      text:'الجُسيمات مترابطة بقوّة ومصفوفة بانتظام، فتهتزّ في مكانها دون أن تنتقل. لذلك للجسم الصلب شكلٌ وحجمٌ ثابتان.' },
    liquid:{ ar:'سائلة', col:'var(--subject-deep)', bulb:'var(--subject)', title:'حالة سائلة',
      text:'ازدادت الطاقة فأفلتت الجُسيمات من مواقعها وصارت تنزلق فوق بعضها وهي متقاربة. لذلك يأخذ السائل شكل الإناء ويحافظ على حجمه.' },
    gas:{ ar:'غازية', col:'var(--ember-deep)', bulb:'var(--ember)', title:'حالة غازية',
      text:'تغلّبت الحركة على قوى الترابط فتباعدت الجُسيمات وانطلقت بسرعة في كل الاتجاهات. لذلك يملأ الغاز الإناء كلَّه.' }
  };

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="إناء المحاكاة">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-beaker"><canvas class="wq-canvas" role="img" aria-label="جُسيمات المادة داخل الإناء"></canvas><span class="wq-shine" aria-hidden="true"></span></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">الحالة الآن:</span><span class="wq-val js-state">—</span></div>'+
        '</div>'+
        '<div class="wq-thermo" aria-hidden="true"><span class="wq-cap">🔥</span><div class="wq-tube"><div class="wq-merc js-merc"></div></div><div class="wq-bulb js-bulb"></div><span class="wq-cap">❄️</span></div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-ends"><span class="wq-cold">❄ بارد</span><span class="wq-hot">حارّ 🔥</span></div>'+
          '<input type="range" class="wq-range js-temp" min="0" max="100" value="12" aria-label="درجة الحرارة">'+
          '<div class="wq-marks"><span style="inset-inline-start:30%">الانصهار</span><span style="inset-inline-start:62%">الغليان</span></div>'+
          '<div class="wq-btnrow"><button type="button" class="wq-tbtn cool js-cool">تبريد ▼</button><button type="button" class="wq-tbtn heat js-heat">تسخين ▲</button></div>'+
          '<div class="wq-quick"><button type="button" class="wq-qbtn" data-set="12">صلب</button><button type="button" class="wq-qbtn" data-set="46">سائل</button><button type="button" class="wq-qbtn" data-set="82">غاز</button></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">الحرارة النسبية</div><div class="wq-v"><span class="js-pct">12</span><small>٪</small></div></div>'+
          '<div class="wq-read"><div class="wq-k">طاقة حركة الجُسيمات</div><div class="wq-v js-energy">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-pause">⏸ إيقاف</button><button type="button" class="wq-tool js-reset">↺ إعادة</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">—</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  /* ---------- إعدادات النموذج (وحدات مُخفَّضة: sigma=1، الكتلة=1) ---------- */
  var SCALE=25, CSS_W=300, CSS_H=360;
  var BW=CSS_W/SCALE, BH=CSS_H/SCALE;
  var N=68, RAD=0.5, DT=0.004, SUB=8, RC2=6.25, RMIN2=0.70, FCAP=60, G=0.5, WALL=0.9, TAU=0.15;
  var MELT=0.42, BOIL=1.15;
  var COLD=[59,111,224], WARM=[244,183,64], HOT=[228,104,27];

  function sliderToT(v){
    if(v<=30) return 0.12+(MELT-0.12)*(v/30);
    if(v<=62) return MELT+(BOIL-MELT)*((v-30)/32);
    return BOIL+(2.6-BOIL)*((v-62)/38);
  }
  function stateOf(v){ return v<30?'solid':(v<62?'liquid':'gas'); }
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }

  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var temp=q('.js-temp');
    var elState=q('.js-state'), elPct=q('.js-pct'), elEnergy=q('.js-energy');
    var merc=q('.js-merc'), bulb=q('.js-bulb');
    var elIc=q('.js-ic'), elT=q('.js-etitle'), elX=q('.js-etext');

    var parts=[], curState='';
    var reduce=false; try{ reduce=matchMedia('(prefers-reduced-motion:reduce)').matches; }catch(e){}
    var running=!reduce;
    q('.js-pause').textContent = running?'⏸ إيقاف':'▶ تشغيل';

    var dpr=1;
    function fit(){
      dpr=Math.min(window.devicePixelRatio||1,2);
      cv.width=CSS_W*dpr; cv.height=CSS_H*dpr;
      ctx.setTransform(dpr,0,0,dpr,0,0);
    }

    function seed(){
      parts=[];
      var cols=Math.floor((BW-1.4)/1.12), gap=1.12, x0=(BW-(cols-1)*gap)/2, i=0;
      for(var row=0; i<N; row++){
        for(var c=0; c<cols && i<N; c++){
          parts.push({ x:x0+c*gap+(row%2)*gap*0.5+(Math.random()-0.5)*0.06,
            y:BH-RAD-0.7-row*(gap*0.9), vx:(Math.random()-0.5)*0.6, vy:(Math.random()-0.5)*0.6, ax:0, ay:0 });
          i++;
        }
      }
      forces();
    }

    function forces(){
      var i,j,a,b,dx,dy,r2,inv2,inv6,f,fx,fy;
      for(i=0;i<parts.length;i++){ parts[i].fx=0; parts[i].fy=G; }
      for(i=0;i<parts.length;i++){
        a=parts[i];
        for(j=i+1;j<parts.length;j++){
          b=parts[j]; dx=a.x-b.x; dy=a.y-b.y; r2=dx*dx+dy*dy;
          if(r2>=RC2) continue;
          if(r2<RMIN2) r2=RMIN2;
          inv2=1/r2; inv6=inv2*inv2*inv2;
          f=24*inv2*inv6*(2*inv6-1);
          if(f>FCAP)f=FCAP; else if(f<-FCAP)f=-FCAP;
          fx=f*dx; fy=f*dy;
          a.fx+=fx; a.fy+=fy; b.fx-=fx; b.fy-=fy;
        }
      }
    }

    function step(Ttar){
      var p,i;
      for(i=0;i<parts.length;i++){ p=parts[i];
        p.x+=p.vx*DT+0.5*p.ax*DT*DT; p.y+=p.vy*DT+0.5*p.ay*DT*DT; }
      forces();
      for(i=0;i<parts.length;i++){ p=parts[i];
        p.vx+=0.5*(p.ax+p.fx)*DT; p.vy+=0.5*(p.ay+p.fy)*DT; p.ax=p.fx; p.ay=p.fy; }
      for(i=0;i<parts.length;i++){ p=parts[i];
        if(p.x<RAD){p.x=RAD;p.vx=Math.abs(p.vx)*WALL;} else if(p.x>BW-RAD){p.x=BW-RAD;p.vx=-Math.abs(p.vx)*WALL;}
        if(p.y<RAD){p.y=RAD;p.vy=Math.abs(p.vy)*WALL;} else if(p.y>BH-RAD){p.y=BH-RAD;p.vy=-Math.abs(p.vy)*WALL;} }
      var s2=0,mvx=0;
      for(i=0;i<parts.length;i++){ s2+=parts[i].vx*parts[i].vx+parts[i].vy*parts[i].vy; mvx+=parts[i].vx; }
      mvx/=parts.length;
      var Tcur=s2/(2*parts.length); if(Tcur<1e-5)Tcur=1e-5;
      var lam=Math.sqrt(1+(DT/TAU)*(Ttar/Tcur-1)); if(lam<0.9)lam=0.9; else if(lam>1.1)lam=1.1;
      for(i=0;i<parts.length;i++){ parts[i].vx=(parts[i].vx-mvx)*lam; parts[i].vy*=lam; }
      return Tcur;
    }

    function mix(a,b,t){ return [a[0]+(b[0]-a[0])*t, a[1]+(b[1]-a[1])*t, a[2]+(b[2]-a[2])*t]; }
    function speedColor(s){
      var t=Math.min(s/2.2,1);
      var c = t<0.5 ? mix(COLD,WARM,t/0.5) : mix(WARM,HOT,(t-0.5)/0.5);
      return 'rgb('+(c[0]|0)+','+(c[1]|0)+','+(c[2]|0)+')';
    }
    function draw(){
      ctx.clearRect(0,0,CSS_W,CSS_H);
      var r=RAD*SCALE,i,p,px,py,sp;
      for(i=0;i<parts.length;i++){
        p=parts[i]; px=p.x*SCALE; py=p.y*SCALE; sp=Math.sqrt(p.vx*p.vx+p.vy*p.vy);
        ctx.beginPath(); ctx.fillStyle=speedColor(sp); ctx.arc(px,py,r,0,6.2832); ctx.fill();
        ctx.beginPath(); ctx.fillStyle='rgba(255,255,255,.4)'; ctx.arc(px-r*0.3,py-r*0.32,r*0.34,0,6.2832); ctx.fill();
      }
    }

    function loop(){
      if(!cv.isConnected) return;               // توقّفٌ ذاتيّ عند مغادرة الشاشة
      var v=+temp.value, Tcur=0;
      if(running){ for(var k=0;k<SUB;k++) Tcur=step(sliderToT(v)); elEnergy.textContent=toAr(Tcur.toFixed(2)); }
      draw();
      requestAnimationFrame(loop);
    }

    function refresh(){
      var v=+temp.value, st=stateOf(v), S=STATES[st];
      elPct.textContent=toAr(v);
      merc.style.height=(6+v*0.9)+'%';
      merc.style.background='linear-gradient(180deg,'+S.bulb+','+(st==='gas'?'var(--ember)':st==='liquid'?'var(--cold)':'var(--cold-deep)')+')';
      bulb.style.background=S.bulb;
      var qb=container.querySelectorAll('.wq-qbtn');
      for(var i=0;i<qb.length;i++) qb[i].setAttribute('aria-pressed', stateOf(+qb[i].getAttribute('data-set'))===st);
      if(st!==curState){
        curState=st;
        elState.textContent=S.ar; elState.style.color=S.col;
        elIc.style.background=S.col; elIc.innerHTML=MOL;
        elT.textContent=S.title; elT.style.color=S.col; elX.textContent=S.text;
      }
    }

    temp.addEventListener('input', refresh);
    q('.js-heat').onclick=function(){ temp.value=Math.min(100,+temp.value+7); refresh(); };
    q('.js-cool').onclick=function(){ temp.value=Math.max(0,+temp.value-7); refresh(); };
    var qb=container.querySelectorAll('.wq-qbtn');
    for(var i=0;i<qb.length;i++) qb[i].onclick=(function(b){ return function(){ temp.value=b.getAttribute('data-set'); refresh(); }; })(qb[i]);
    q('.js-pause').onclick=function(){ running=!running; this.textContent=running?'⏸ إيقاف':'▶ تشغيل'; if(running) loop(); };
    q('.js-reset').onclick=function(){ seed(); refresh(); if(!running) draw(); };

    fit(); seed(); refresh(); draw();
    if(running) loop();
    window.addEventListener('resize', fit);

    return { destroy:function(){ running=false; } };
  }

  return { mount:mount };
})();
