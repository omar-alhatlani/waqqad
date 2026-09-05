/* ============================================================
   محاكاة تفاعلية — RNA وتصنيع البروتين (النسخ والترجمة)
   يُنسَخ DNA إلى mRNA (يحلّ U محلّ T)، ثم تُقرأ الشيفرةُ ثلاثيًّا
   (كودون = ٣ قواعد) فيقابلُ كلَّ كودونٍ حمضٌ أمينيّ، فتُبنى سلسلةُ البروتين.
   الاستعمال من المحرّك:  window.SIMS['translation'].mount(container)
   ============================================================ */
window.SIMS = window.SIMS || {};
window.SIMS['translation'] = (function(){

  var ICN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4v16M5 8h6M5 14h6"/><path d="M13 12h3m3 0h1"/><circle cx="20" cy="7" r="1.6"/><circle cx="20" cy="17" r="1.6"/></svg>';
  var ORDER=['A','T','G','C'];
  var AAS='FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG';
  var AB={F:'Phe',L:'Leu',S:'Ser',Y:'Tyr',C:'Cys',W:'Trp',P:'Pro',H:'His',Q:'Gln',R:'Arg',I:'Ile',M:'Met',T:'Thr',N:'Asn',K:'Lys',V:'Val',A:'Ala',D:'Asp',E:'Glu',G:'Gly','*':'إيقاف'};
  var IDX={U:0,C:1,A:2,G:3};
  function mrna(b){ return b==='A'?'U':b==='T'?'A':b==='G'?'C':'G'; }              // DNA قالب ← mRNA
  function aa(c){ return AAS[IDX[c[0]]*16+IDX[c[1]]*4+IDX[c[2]]]; }
  function bcol(b,css){ return (b==='A')?css('--ember','#F2892E'):(b==='T')?css('--subject','#0FA3AA'):(b==='G')?css('--s-math','#3B6FE0'):(b==='C')?css('--s-en','#7A5BE8'):css('--gold','#F4B740'); }

  var HTML =
    '<div class="wq-lab">'+
      '<section class="wq-stage" aria-label="النسخ والترجمة من DNA إلى بروتين">'+
        '<div class="wq-beakerwrap">'+
          '<div class="wq-circuit"><canvas class="wq-canvas" role="img" aria-label="DNA يُنسَخ إلى mRNA ثم يُترجَم إلى أحماض أمينية"></canvas></div>'+
          '<div class="wq-statecap"><span class="wq-lbl">البروتين:</span><span class="wq-val js-prot" style="font-size:15px">—</span></div>'+
        '</div>'+
      '</section>'+
      '<div class="wq-panel">'+
        '<div class="wq-cardin">'+
          '<div class="wq-sllabel"><span>سلسلة DNA القالب (انقرْ لتغيّر)</span></div>'+
          '<div class="wq-quick js-bases" style="margin-bottom:2px"></div>'+
          '<div class="wq-eq"><span class="wq-eqt">الشيفرة الوراثية</span><div class="wq-eqv"><span class="js-rule">كودون (٣ قواعد) ← حمضٌ أمينيّ</span></div></div>'+
        '</div>'+
        '<div class="wq-reads">'+
          '<div class="wq-read"><div class="wq-k">mRNA</div><div class="wq-v js-mrna" style="font-size:14px;letter-spacing:1px">—</div></div>'+
          '<div class="wq-read"><div class="wq-k">الأحماض الأمينية</div><div class="wq-v js-aas" style="font-size:13px">—</div></div>'+
        '</div>'+
        '<div class="wq-tools"><button type="button" class="wq-tool js-reset">↺ إعادة الضبط</button></div>'+
      '</div>'+
      '<section class="wq-explainbox" aria-live="polite"><span class="wq-ic js-ic"></span><span class="wq-tx"><b class="js-etitle">من الجين إلى البروتين</b><p class="js-etext">—</p></span></section>'+
    '</div>';

  var W=300, H=240, N=6, BW=30, GAP=3, CGAP=14;
  function mount(container){
    container.classList.add('wq-sim');
    container.innerHTML=HTML;
    var q=function(s){ return container.querySelector(s); };
    var cv=q('.wq-canvas'), ctx=cv.getContext('2d');
    var elProt=q('.js-prot'), elIc=q('.js-ic'), elX=q('.js-etext');
    var dna=['T','A','C','G','G','A'], dpr=1;
    function fit(){ dpr=Math.min(window.devicePixelRatio||1,2); cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    function css(n,fb){ try{ var v=getComputedStyle(container).getPropertyValue(n).trim(); return v||fb; }catch(e){ return fb; } }
    function bx(i){ return 48 + i*(BW+GAP) + (i>=3?CGAP:0); }
    function box(x,y,ch,col){ ctx.fillStyle=col; ctx.beginPath(); ctx.roundRect(x,y,BW,26,7); ctx.fill();
      ctx.fillStyle='#fff'; ctx.font='800 14px Poppins,sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='ltr'; ctx.fillText(ch,x+BW/2,y+13); }
    function drawAr(x,y,str,col){ ctx.fillStyle=col; ctx.save(); ctx.font='700 10px "IBM Plex Sans Arabic",sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction='rtl'; ctx.fillText(str,x,y); ctx.restore(); }

    function draw(){
      ctx.clearRect(0,0,W,H);
      var m=dna.map(mrna);
      // صفّ DNA
      for(var i=0;i<N;i++) box(bx(i),34,dna[i],bcol(dna[i],css));
      drawAr(30,47,'DNA',css('--muted','#7C82A8'));
      // سهم النسخ
      ctx.strokeStyle=css('--s-ar','#2E9E6B'); ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(150,64); ctx.lineTo(150,84); ctx.stroke();
      ctx.fillStyle=css('--s-ar','#2E9E6B'); ctx.beginPath(); ctx.moveTo(150,88); ctx.lineTo(146,82); ctx.lineTo(154,82); ctx.fill();
      drawAr(196,74,'نسخ',css('--s-ar-deep','#1F7D52'));
      // صفّ mRNA
      for(i=0;i<N;i++) box(bx(i),92,m[i],bcol(m[i],css));
      drawAr(26,105,'mRNA',css('--muted','#7C82A8'));
      // سهم الترجمة
      ctx.strokeStyle=css('--s-en','#7A5BE8'); ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(150,122); ctx.lineTo(150,142); ctx.stroke();
      ctx.fillStyle=css('--s-en','#7A5BE8'); ctx.beginPath(); ctx.moveTo(150,146); ctx.lineTo(146,140); ctx.lineTo(154,140); ctx.fill();
      drawAr(196,132,'ترجمة',css('--s-en-deep','#5B3FC4'));
      // أحماض أمينية (حبّتان تحت كل كودون) — رابطةٌ بيبتيدية بينهما
      var cy=178, cxs=[(bx(0)+bx(2)+BW)/2, (bx(3)+bx(5)+BW)/2];
      ctx.strokeStyle=css('--s-en','#7A5BE8'); ctx.lineWidth=3; ctx.beginPath(); ctx.moveTo(cxs[0]+20,cy); ctx.lineTo(cxs[1]-20,cy); ctx.stroke();
      for(var cI=0;cI<2;cI++){ var a=aa(m.slice(cI*3,cI*3+3).join('')), lab=AB[a]||a, cx=cxs[cI], stop=(a==='*');
        ctx.fillStyle= stop?css('--muted','#7C82A8'):css('--s-en','#7A5BE8'); ctx.beginPath(); ctx.arc(cx,cy,20,0,6.2832); ctx.fill();
        ctx.strokeStyle=css('--surface','#fff'); ctx.lineWidth=2; ctx.stroke();
        ctx.fillStyle='#fff'; ctx.font=(lab.length>3)?'700 9px "IBM Plex Sans Arabic",sans-serif':'800 12px Poppins,sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.direction=(lab.length>3)?'rtl':'ltr'; ctx.fillText(lab,cx,cy);
        drawAr(cx, cy+30, 'كودون '+(cI===0?'١':'٢'), css('--muted','#7C82A8'));
      }
    }
    function renderBases(){ var box2=q('.js-bases'); box2.innerHTML='';
      dna.forEach(function(b,i){ var bt=document.createElement('button'); bt.type='button'; bt.className='wq-qbtn'; bt.textContent=b;
        bt.style.color='#fff'; bt.style.background=bcol(b,css); bt.style.borderColor=bcol(b,css); bt.style.fontWeight='800';
        bt.addEventListener('click', function(){ dna[i]=ORDER[(ORDER.indexOf(dna[i])+1)%4]; refresh(); }); box2.appendChild(bt); }); }
    function refresh(){
      renderBases(); draw();
      var m=dna.map(mrna), prot=[]; for(var c=0;c<2;c++){ var a=aa(m.slice(c*3,c*3+3).join('')); prot.push(AB[a]||a); }
      q('.js-mrna').textContent=m.join(' ');
      q('.js-aas').textContent=prot.join(' — ');
      elProt.textContent=prot.join('-'); elProt.style.color=css('--s-en-deep','#5B3FC4');
      elIc.style.background=css('--s-en-deep','#5B3FC4'); elIc.innerHTML=ICN;
      elX.innerHTML='الجينُ جزءٌ من <b class="en">DNA</b>. أوّلًا <b>النسخ</b>: يُبنى <b class="en">mRNA</b> مكمّلًا للقالب (يحلّ <b class="en">U</b> محلَّ <b class="en">T</b>). ثم <b>الترجمة</b> في الرايبوسوم: تُقرأ الشيفرةُ <b>ثلاثَ قواعدَ (كودون)</b>، فيقابلُ كلَّ كودونٍ <b>حمضٌ أمينيّ</b>، فتتسلسلُ الأحماضُ مكوّنةً <b>البروتين</b>. (كودون <b class="en">AUG</b> = <b class="en">Met</b> بداية، وكودوناتُ الإيقاف تُنهي البناء.)';
    }
    q('.js-reset').onclick=function(){ dna=['T','A','C','G','G','A']; refresh(); };
    ['.js-mrna','.js-aas'].forEach(function(s){ var e=q(s); e.style.direction='ltr'; e.style.unicodeBidi='isolate'; });
    fit(); refresh();
    window.addEventListener('resize', function(){ fit(); refresh(); });
    return { destroy:function(){} };
  }
  return { mount:mount };
})();
