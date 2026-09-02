/* ============================================================
   محرّك الأنشطة — وقّاد
   يعرض خريطة مراحل الدرس، ويشغّل الأنشطة بأنواعها، ويحفظ التقدّم.
   الاستعمال: Engine.open(lessonModule, { mount, onExit, subject, onProgress })
   ============================================================ */
window.Engine = (function(){
  var I = window.ICONS;
  var mount, lesson, opts, prog;
  var G = null;               // حالة اللعب الحالية
  var toastFn = function(){};

  /* ---------- تخزين التقدّم ---------- */
  function key(id){ return 'waqqad_prog_' + id; }
  function loadProg(){
    try{ var r = localStorage.getItem(key(lesson.id)); prog = r ? JSON.parse(r) : {}; }
    catch(e){ prog = {}; }
    prog.stars = prog.stars || {}; prog.done = prog.done || {};
  }
  function saveProg(){
    try{ localStorage.setItem(key(lesson.id), JSON.stringify(prog)); }catch(e){}
    if(opts.onProgress) opts.onProgress();
  }
  function stageStars(i){ return prog.stars[i] || 0; }
  function totalStars(){ var t=0; for(var k in prog.stars) if(prog.stars.hasOwnProperty(k)) t+=prog.stars[k]; return t; }
  function maxStars(){ return lesson.stages.length * 3; }
  function unlocked(i){ return i===0 || (prog.stars[i-1]||0) > 0; }
  function lessonComplete(){ for(var i=0;i<lesson.stages.length;i++) if(!(prog.stars[i]>0)) return false; return true; }

  /* إحصاء خارجيّ (لِـ app.js) دون فتح الدرس */
  function stats(lessonModule){
    var p={}; try{ p = JSON.parse(localStorage.getItem(key(lessonModule.id))) || {}; }catch(e){}
    p.stars = p.stars || {};
    var t=0, n=0; for(var k in p.stars){ if(p.stars.hasOwnProperty(k)){ t+=p.stars[k]; n++; } }
    return { stars:t, max:lessonModule.stages.length*3, started:n>0, complete:n>=lessonModule.stages.length };
  }

  /* ---------- أدوات ---------- */
  var $ = function(id){ return mount.querySelector('#'+id); };
  // en: خطّ إنجليزي + LTR (Poppins). ltr (رياضيات): اتجاه LTR مع الخطّ العربي (أرقام عربية-هندية).
  function enCls(){ return lesson.lang==='en' ? ' en' : (lesson.dir==='ltr' ? ' ltr' : ''); }
  function ltrCls(){ return (lesson.lang==='en' || lesson.dir==='ltr') ? ' ltr' : ''; }
  function shuffle(a){ a=a.slice(); for(var i=a.length-1;i>0;i--){ var j=Math.floor(Math.random()*(i+1)); var t=a[i];a[i]=a[j];a[j]=t; } return a; }
  function starStr(n,max){ max=max||3; var s=''; for(var i=0;i<max;i++) s+=(i<n?'★':'<span class="off">★</span>'); return s; }
  var AC=null;
  function beep(ok){
    try{
      if(!AC){ var C=window.AudioContext||window.webkitAudioContext; if(!C) return; AC=new C(); }
      var o=AC.createOscillator(), g=AC.createGain(); o.connect(g); g.connect(AC.destination);
      o.type = ok?'sine':'square'; var t=AC.currentTime;
      if(ok){ o.frequency.setValueAtTime(660,t); o.frequency.setValueAtTime(990,t+0.09); }
      else  { o.frequency.setValueAtTime(190,t); o.frequency.setValueAtTime(130,t+0.11); }
      g.gain.setValueAtTime(0.14,t); g.gain.exponentialRampToValueAtTime(0.001,t+0.26);
      o.start(t); o.stop(t+0.28);
    }catch(e){}
  }
  function speak(text){
    try{
      if(!window.speechSynthesis){ toastFn('النطق غير متاح على هذا الجهاز'); return; }
      var plain = String(text).replace(/<[^>]+>/g,'').replace(/___/g,'');
      speechSynthesis.cancel();
      var u=new SpeechSynthesisUtterance(plain); u.lang='en-US'; u.rate=0.85;
      speechSynthesis.speak(u);
    }catch(e){ toastFn('النطق غير متاح'); }
  }

  /* ---------- الفتح + خريطة المراحل ---------- */
  function open(lessonModule, options){
    lesson = lessonModule; opts = options || {}; mount = opts.mount;
    toastFn = opts.toast || function(){};
    loadProg(); G=null; renderIntro();
  }

  function ruleHTML(){
    if(!lesson.rule) return '';
    var r=lesson.rule;
    var out='<div class="rule open"><div class="rh"><span class="tag">'+(r.tag||'القاعدة')+'</span>'+
      '<span class="rt">'+(r.title||'القاعدة')+'</span></div><div class="rc">';
    if(r.intro) out+='<p class="intro">'+r.intro+'</p>';
    if(r.table && r.table.length){
      var rows='';
      r.table.forEach(function(row){ rows+='<div class="berow"><span class="subj'+enCls()+'">'+row[0]+'</span><span class="arw">◀</span><span class="be'+enCls()+'">'+row[1]+'</span></div>'; });
      out+='<div class="betable">'+rows+'</div>';
    }
    if(r.examples && r.examples.length){
      var ex='';
      r.examples.forEach(function(e){ ex+='<div class="example'+enCls()+'">'+e+'</div>'; });
      out+='<div class="examples">'+ex+'</div>';
    }
    if(r.trick) out+='<div class="trick"><b>🔑 حيلة الحفظ:</b> '+r.trick+'</div>';
    out+='</div></div>';
    return out;
  }

  /* شاشة القاعدة الإجبارية — تُعرض عند فتح الدرس قبل المراحل */
  function renderIntro(){
    G=null;
    mount.innerHTML='<div class="lesson-wrap">'+
      '<div class="section-head"><span class="eyebrow">'+I.book+' القاعدة أوّلًا</span>'+
      '<h2 class="h-title">'+lesson.title+'</h2>'+
      '<p class="h-sub">اقرأ القاعدة والأمثلة جيّدًا، ثم انتقل إلى المراحل.</p></div>'+
      ruleHTML()+
      '<div class="lp-actions" style="justify-content:space-between;margin-top:18px">'+
      '<button class="btn ghost sm" id="engBackIntro">'+I.chev+' عودة إلى الدروس</button>'+
      '<button class="btn" id="engStartStages">فهمتُ — إلى المراحل '+I.chev+'</button></div>'+
      '</div>';
    $('engBackIntro').onclick=function(){ if(opts.onExit) opts.onExit(); };
    $('engStartStages').onclick=function(){ renderMap(); };
    if(opts.scrollTop) opts.scrollTop();
  }

  function renderMap(){
    G=null;
    var done = lessonComplete();
    var finalPerfect = (prog.stars[lesson.stages.length-1]||0) === 3;
    var h = '<div class="lesson-wrap">';
    h += '<div class="section-head"><span class="eyebrow">'+I.target+' درس تفاعليّ</span>'+
         '<h2 class="h-title">'+lesson.title+'</h2>'+
         '<p class="h-sub">أنجِز كلّ مرحلة بنجمة على الأقلّ لتُفتح التي بعدها. صفر أخطاء = ثلاث نجوم ★★★</p></div>';
    h += '<div style="margin-bottom:14px"><button class="btn ghost sm" id="engReviewRule">'+I.book+' راجع القاعدة</button></div>';
    h += '<div class="pbar" style="margin-top:4px"><i style="width:'+Math.round(totalStars()/maxStars()*100)+'%"></i></div>';
    h += '<div class="lessons" id="engStageList"></div>';
    if(done){
      h += '<div class="cert" id="engCertBanner" style="cursor:pointer"><span class="seal2">🎓</span>'+
           '<h3>أتممتَ الدرس!</h3><p>لقد أنهيتَ جميع مراحل هذا الدرس. انقر لعرض شهادة الإتقان.</p></div>';
    }
    h += '<div class="lp-actions" style="justify-content:space-between"><button class="btn ghost sm" id="engBackBtn">'+I.chev+' عودة إلى الدروس</button>'+
         '<button class="btn ghost sm" id="engResetBtn">↺ تصفير تقدّم الدرس</button></div>';
    h += '</div>';
    mount.innerHTML = h;

    // مراجعة القاعدة
    var rev=$('engReviewRule');
    if(rev){ rev.onclick=function(){ renderIntro(); }; }

    // قائمة المراحل
    var list=$('engStageList');
    lesson.stages.forEach(function(st,i){
      var open_ = unlocked(i), stc = stageStars(i);
      var row=document.createElement(open_?'button':'div');
      row.className='lesson'+(open_?'':' locked')+(stc>0?' done':'');
      var icon = !open_ ? I.lock : (stc>0 ? I.check : (st.final?I.trophy:I.play));
      var tags = '<span class="tag">'+(st.final?'تحدٍّ نهائي':('مرحلة '+(i+1)))+'</span>'+
                 (open_ ? '<span class="stars">'+starStr(stc)+'</span>' : '<span class="tag state-soon">مقفلة</span>');
      row.innerHTML='<div class="lic">'+icon+'</div><div class="lmeta"><b>'+st.name+'</b><div class="tags">'+tags+'</div></div>'+
        (open_?'<span class="chev">'+I.chev+'</span>':'');
      if(open_){ row.onclick=function(){ startStage(i); }; }
      else{ row.style.cursor='not-allowed'; row.onclick=function(){ toastFn('أنهِ المرحلة السابقة أولًا 🔒'); }; }
      list.appendChild(row);
    });

    if($('engCertBanner')) $('engCertBanner').onclick=function(){ showCertificate(finalPerfect); };
    $('engBackBtn').onclick=function(){ if(opts.onExit) opts.onExit(); };
    $('engResetBtn').onclick=function(){
      if(confirm('سيُحذف تقدّمك في هذا الدرس فقط. متأكّد؟')){ prog={stars:{},done:{}}; saveProg(); renderMap(); toastFn('تم تصفير الدرس'); }
    };
    if(opts.scrollTop) opts.scrollTop();
  }

  /* ---------- تشغيل مرحلة ---------- */
  function startStage(i){
    var st=lesson.stages[i];
    G={ si:i, qi:0, hearts:3, errs:0, answered:false, built:[], qs:(st.type==='order'?st.qs.slice():shuffle(st.qs)) };
    var h='<div class="lesson-wrap">'+
      '<div class="stage-head"><div class="name">'+st.name+'<small>'+(st.hint||'')+'</small></div>'+
      '<div style="display:flex;align-items:center;gap:10px"><span class="hearts" id="engHearts"></span>'+
      '<button class="iconbtn" id="engExit" title="خريطة الدرس" aria-label="العودة إلى خريطة الدرس">'+I.chev+'</button></div></div>'+
      '<div class="pbar"><i id="engBar"></i></div>'+
      '<div id="engPlay"></div><div id="engFb"></div><div class="lp-actions" id="engActions"></div></div>';
    mount.innerHTML=h;
    $('engExit').onclick=function(){ renderMap(); };
    renderQ();
    if(opts.scrollTop) opts.scrollTop();
  }

  function updateHearts(){ var s=''; for(var i=0;i<3;i++) s+=(i<G.hearts?'❤️':'🤍'); if($('engHearts')) $('engHearts').innerHTML=s; }

  function renderQ(){
    var st=lesson.stages[G.si], q=G.qs[G.qi];
    G.answered=false; G.built=[];
    updateHearts();
    $('engBar').style.width=Math.round(G.qi/G.qs.length*100)+'%';
    $('engFb').innerHTML=''; $('engActions').innerHTML='';
    var A=$('engPlay');

    if(st.type==='error'){
      A.innerHTML='<div class="qcard"><div class="qhint">انقر الكلمة <b>الخاطئة</b> في هذه الجملة</div></div><div class="words'+ltrCls()+'" id="engWordRow"></div>';
      var row=$('engWordRow');
      q.words.forEach(function(wd,idx){ var b=document.createElement('button'); b.className='word'+enCls(); b.innerHTML=wd; b.onclick=function(){ answerError(idx,b); }; row.appendChild(b); });
      return;
    }
    if(st.type==='order'){
      var oAsk = q.ask ? '<div class="qhint ask">'+q.ask+'</div>' : '<div class="qhint">كوّن جملة صحيحة من هذه الكلمات</div>';
      A.innerHTML='<div class="qcard">'+oAsk+'</div><div class="slot'+ltrCls()+'" id="engSlot"></div><div class="words'+ltrCls()+'" id="engBank"></div>';
      var bank=$('engBank');
      var mixed=shuffle(q.sol), guard=0; while(mixed.join(' ')===q.sol.join(' ') && guard++<20) mixed=shuffle(q.sol);
      mixed.forEach(function(wd){ var b=document.createElement('button'); b.className='word'+enCls(); b.innerHTML=wd; b.dataset.w=wd; b.onclick=function(){ pickWord(b); }; bank.appendChild(b); });
      $('engActions').innerHTML='<button class="btn ghost sm" id="engUndo">↶ تراجع</button><button class="btn sm" id="engCheck" disabled>تحقّق ✓</button>';
      $('engUndo').onclick=undoWord; $('engCheck').onclick=function(){ answerOrder(q); };
      return;
    }
    // choice / gap / mixed
    var txt = q.p.indexOf('___')>-1 ? q.p.replace('___','<span class="blank">&nbsp;?&nbsp;</span>') : q.p;
    var longest=Math.max.apply(null,q.o.map(function(x){return x.length;}));
    var isLong=longest>15;
    var askLine = q.ask ? '<div class="qhint ask">'+q.ask+'</div>' : '<div class="qhint">اختر الإجابة الصحيحة</div>';
    A.innerHTML='<div class="qcard">'+askLine+'<div class="qtext'+enCls()+'">'+txt+'</div></div>'+
      '<div class="opts'+(isLong?' stack':'')+'" id="engOpts"></div>';
    var opts_=$('engOpts');
    shuffle(q.o.map(function(v,i){return i;})).forEach(function(oi){
      var b=document.createElement('button'); b.className='opt'+enCls()+(isLong?' long':''); b.innerHTML=q.o[oi]; b.dataset.oi=oi;
      b.onclick=function(){ answerChoice(oi,q,b); }; opts_.appendChild(b);
    });
  }

  /* بناء الجملة */
  function renderSlot(){
    var slot=$('engSlot'); slot.innerHTML='';
    G.built.forEach(function(item,i){ var chip=document.createElement('button'); chip.className='word'+enCls(); chip.innerHTML=item.w; chip.onclick=function(){ removeAt(i); }; slot.appendChild(chip); });
    $('engCheck').disabled=(G.built.length!==G.qs[G.qi].sol.length);
  }
  function pickWord(btn){ if(G.answered) return; btn.classList.add('used'); G.built.push({w:btn.dataset.w,el:btn}); renderSlot(); }
  function removeAt(i){ if(G.answered||i<0||i>=G.built.length) return; G.built[i].el.classList.remove('used'); G.built.splice(i,1); renderSlot(); }
  function undoWord(){ removeAt(G.built.length-1); }

  /* ---------- التغذية الراجعة ---------- */
  function feedback(ok,q,extraWhy){
    var box=document.createElement('div'); box.className='fb '+(ok?'ok':'no');
    box.innerHTML='<div class="ft">'+(ok?'✓ أحسنت! إجابة صحيحة':'✕ ليست صحيحة')+'</div>'+
      '<div class="fw">'+(extraWhy||q.w)+'</div>'+(q.f?'<div class="fix'+enCls()+'">'+q.f+'</div>':'');
    $('engFb').innerHTML=''; $('engFb').appendChild(box);
    beep(ok);
    if(!ok){ G.errs++; G.hearts--; updateHearts(); var w=mount.querySelector('.lesson-wrap'); w.classList.add('shake'); setTimeout(function(){ w.classList.remove('shake'); },360); }

    var act=$('engActions'); act.innerHTML='';
    if(q.f && lesson.lang==='en'){
      var sp=document.createElement('button'); sp.className='btn ghost sm'; sp.innerHTML=I.speaker+' استمع للصحيح'; sp.onclick=function(){ speak(q.f); }; act.appendChild(sp);
    }
    if(G.hearts<=0){
      var r=document.createElement('button'); r.className='btn sm'; r.textContent='انتهت القلوب — أعِد المحاولة ↺'; r.onclick=function(){ startStage(G.si); }; act.appendChild(r); return;
    }
    var n=document.createElement('button'); n.className='btn sm';
    n.innerHTML=(G.qi+1<G.qs.length)?('التالي '+I.chev):'إنهاء المرحلة 🏁'; n.onclick=nextQ; act.appendChild(n);
  }
  function answerChoice(oi,q,btn){
    if(G.answered) return; G.answered=true;
    var ok=(oi===q.a), row=$('engOpts');
    Array.prototype.forEach.call(row.children,function(b){ b.disabled=true; if(+b.dataset.oi===q.a) b.classList.add('right'); });
    if(!ok) btn.classList.add('wrong');
    feedback(ok,q);
  }
  function answerError(idx,btn){
    if(G.answered) return; G.answered=true;
    var q=G.qs[G.qi], ok=(idx===q.bad), row=$('engWordRow');
    Array.prototype.forEach.call(row.children,function(b,i){ b.disabled=true; if(i===q.bad) b.classList.add('right'); });
    if(!ok) btn.classList.add('wrong');
    var isAr=/[؀-ۿ]/.test(q.fix);
    var fixHtml = isAr ? ('<b>'+q.fix+'</b>') : ('<code>'+q.fix+'</code>');
    feedback(ok,q, q.w+'<br><b>الصواب:</b> '+fixHtml);
  }
  function answerOrder(q){
    if(G.answered) return; G.answered=true;
    var made=G.built.map(function(x){return x.w;}).join(' '), want=q.sol.join(' '), ok=(made===want);
    Array.prototype.forEach.call($('engBank').children,function(b){ b.disabled=true; });
    Array.prototype.forEach.call($('engSlot').children,function(b){ b.disabled=true; b.classList.add(ok?'right':'wrong'); });
    feedback(ok,q, ok?q.w:('ترتيبك: <code>'+made+'</code><br>'+q.w));
  }
  function nextQ(){ G.qi++; if(G.qi>=G.qs.length){ finishStage(); return; } renderQ(); }

  /* ---------- نهاية المرحلة ---------- */
  function finishStage(){
    var earned = G.errs===0?3:(G.errs===1?2:1);
    var prev = prog.stars[G.si]||0, improved = earned>prev;
    if(improved) prog.stars[G.si]=earned;
    prog.done[G.si]=true; saveProg();

    var st=lesson.stages[G.si], isFinal=!!st.final, perfect=(earned===3);
    var msg = perfect?'إتقان تامّ — بلا خطأ واحد!':(earned===2?'ممتاز — خطأ واحد فقط.':'أُنجزت — أعِدها لتحصل على ثلاث نجوم.');

    if(isFinal && perfect){ beep(true); showCertificate(true, earned); return; }

    var body='<div class="lesson-wrap"><div class="done-card"><div class="seal">'+(perfect?I.trophy:I.check)+'</div>'+
      '<h2>'+st.name+'</h2><div class="bigstars">'+starStr(earned)+'</div>'+
      '<div class="msg">'+msg+' &nbsp;·&nbsp; الأخطاء: '+G.errs+'</div>'+
      '<div class="lp-actions" style="justify-content:center">'+
      '<button class="btn ghost sm" id="engAgain">↺ أعِد المرحلة</button>'+
      '<button class="btn sm" id="engNext">'+(G.si+1<lesson.stages.length?'المرحلة التالية ←':'إلى خريطة الدرس 🗺️')+'</button>'+
      '</div></div></div>';
    mount.innerHTML=body; beep(true);
    if(improved && prev>0) toastFn('حسّنت نتيجتك ⭐');
    $('engAgain').onclick=function(){ startStage(G.si); };
    $('engNext').onclick=function(){ if(G.si+1<lesson.stages.length && unlocked(G.si+1)) startStage(G.si+1); else renderMap(); };
    if(opts.scrollTop) opts.scrollTop();
  }

  function showCertificate(perfect, earned){
    var B = window.BRAND || {};
    var body='<div class="lesson-wrap"><div class="done-card">'+
      (typeof earned!=='undefined'?'<div class="bigstars">'+starStr(earned)+'</div>':'')+
      '<div class="cert"><span class="seal2">🎓</span>'+
      '<h3>شهادة إتقان</h3><p>تشهد منصّة «'+(B.name||'وقّاد')+'» بأنّ الطالب</p>'+
      '<div class="who">'+(getPlayerName()||'الطالب/ة')+'</div>'+
      '<p>قد أتقن الدرس:<br><b class="en">'+lesson.title+'</b></p>'+
      '<div class="sig">إشراف المعلّم: <b>'+(B.teacher||'')+'</b><br>'+(B.school||'')+'</div>'+
      '</div>'+
      '<div class="lp-actions" style="justify-content:center">'+
      '<button class="btn ghost sm" id="engAgain">↺ أعِد التحدي</button>'+
      '<button class="btn sm" id="engBackMap">إلى خريطة الدرس 🗺️</button></div></div></div>';
    mount.innerHTML=body;
    $('engAgain').onclick=function(){ startStage(lesson.stages.length-1); };
    $('engBackMap').onclick=function(){ renderMap(); };
    if(opts.scrollTop) opts.scrollTop();
  }
  function getPlayerName(){ try{ return localStorage.getItem('waqqad_name')||''; }catch(e){ return ''; } }

  return { open:open, stats:stats };
})();
