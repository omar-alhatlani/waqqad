/* ============================================================
   وقّاد — التطبيق: التنقّل، الحالة، الوضع، ربط المحرّك، PWA
   ============================================================ */

/* هوية المنصّة — لتغيير الاسم أو الجهة، عدّل هنا فقط */
window.BRAND = {
  name:'وقّاد',
  tagline:'حيث يتّقد الذهن',
  teacher:'عمر بن عبدالله الهطلاني',
  school:'مجمع ابتدائية عمر بن عبدالعزيز ومتوسطة الأنصار'
};

(function(){
  var I = window.ICONS, C = window.CURRICULUM, B = window.BRAND;
  var $ = function(s){ return document.querySelector(s); };
  var state = { grade:null, sem:null, subject:null, unit:null, unitIdx:0 };

  /* ---------- متغيّرات لون المادة ---------- */
  function setSubjectVars(sub){
    var s=document.body.style;
    if(sub){ s.setProperty('--subject','var('+sub.c+')'); s.setProperty('--subject-deep','var('+sub.cd+')'); s.setProperty('--subject-soft','var('+sub.cs+')'); }
    else{ s.setProperty('--subject','var(--brand)'); s.setProperty('--subject-deep','var(--brand-deep)'); s.setProperty('--subject-soft','var(--brand-soft)'); }
  }

  /* ---------- تنقّل الشاشات ---------- */
  function go(screen){
    document.querySelectorAll('.screen').forEach(function(el){ el.classList.toggle('active', el.dataset.screen===screen); });
    window.scrollTo(0,0);
    renderCrumbs(screen);
  }
  function scrollTop(){ window.scrollTo(0,0); }

  function renderCrumbs(screen){
    var c=$('#crumbs'); c.innerHTML='';
    if(screen==='home') return;
    var parts=[{label:'الرئيسية', go:function(){ setSubjectVars(null); go('home'); }}];
    if(state.grade) parts.push({label:state.grade.name, go:function(){ openGrade(state.grade); }});
    if(state.sem)   parts.push({label:(state.sem.id==='s1'?'ف١':'ف٢'), go:function(){ openGrade(state.grade); }});
    if(state.subject) parts.push({label:state.subject.name, go:function(){ openSubjects(); }});
    if(state.unit)  parts.push({label:state.unit.t, go:function(){ openUnit(state.unit, state.unitIdx); }});
    var last=parts.length-1;
    parts.forEach(function(p,i){
      if(i>0){ var sep=document.createElement('span'); sep.className='sep'; sep.textContent='›'; c.appendChild(sep); }
      if(i===last){ var cur=document.createElement('span'); cur.className='cur'; cur.textContent=p.label; c.appendChild(cur); }
      else{ var b=document.createElement('button'); b.textContent=p.label; b.onclick=p.go; c.appendChild(b); }
    });
  }

  /* ---------- الصفوف ---------- */
  function renderGrades(){
    var w=$('#gradeGrid'); w.innerHTML='';
    C.grades.forEach(function(gr){
      var el=document.createElement('button'); el.className='card';
      el.innerHTML='<div class="top"><div class="badge">'+gr.num+'</div><span class="arrow">'+I.chev+'</span></div><h3>'+gr.name+'</h3><div class="desc">'+gr.desc+'</div>';
      el.onclick=function(){ state.grade=gr; state.sem=null; state.subject=null; state.unit=null; openGrade(gr); };
      w.appendChild(el);
    });
  }
  function openGrade(gr){
    state.grade=gr;
    $('#semTitle').textContent=gr.name+' — اختر الفصل';
    var w=$('#semGrid'); w.innerHTML='';
    C.semesters.forEach(function(sm){
      var el=document.createElement('button'); el.className='card';
      el.innerHTML='<div class="top"><div class="badge">'+(sm.id==='s1'?'١':'٢')+'</div><span class="arrow">'+I.chev+'</span></div><h3>'+sm.name+'</h3><div class="desc">'+sm.desc+'</div>';
      el.onclick=function(){ state.sem=sm; state.subject=null; state.unit=null; openSubjects(); };
      w.appendChild(el);
    });
    go('sem');
  }

  /* ---------- المواد ---------- */
  function openSubjects(){
    $('#subjSub').textContent=state.grade.name+' · '+state.sem.name+' — اختر المادة.';
    var w=$('#subjectGrid'); w.innerHTML='';
    C.subjects.forEach(function(sub){
      var el=document.createElement('button'); el.className='card subject-card';
      el.style.setProperty('--sc','var('+sub.c+')'); el.style.setProperty('--scd','var('+sub.cd+')'); el.style.setProperty('--scs','var('+sub.cs+')');
      el.innerHTML='<div class="top"><div class="badge">'+I[sub.icon]+'</div><span class="arrow">'+I.chev+'</span></div><h3>'+sub.name+'</h3><div class="desc en">'+sub.en+'</div><span class="pill">'+sub.units+' وحدات دراسية</span>';
      el.onclick=function(){ state.subject=sub; state.unit=null; openSubject(sub); };
      w.appendChild(el);
    });
    setSubjectVars(null);
    go('subject');
  }

  function contentKey(){ return state.grade.id+'.'+state.sem.id+'.'+state.subject.id; }
  function getContent(){ return C.content[contentKey()] || null; }

  /* ---------- الوحدات ---------- */
  function openSubject(sub){
    setSubjectVars(sub);
    var data=getContent();
    $('#unitsTitle').textContent=sub.name+' — الوحدات';
    $('#unitsEyebrow').textContent=data?data.eyebrow:sub.name;
    var w=$('#unitsPath'); w.innerHTML='';
    if(!data){
      w.innerHTML='<div class="soon"><div class="si">'+I.book+'</div><b>محتوى هذا الفصل قيد الإعداد</b><span>نبدأ حاليًّا بالأول متوسط — الفصل الأول. تابعنا قريبًا.</span></div>';
      go('units'); return;
    }
    data.units.forEach(function(u,i){
      var hasLessons=(u.lessons&&u.lessons.length>0);
      var prog=unitProgress(u), st = !hasLessons ? 'locked' : (prog.pct>=100 ? 'done' : 'current');
      var el=document.createElement('div'); el.className='unit '+(st==='locked'?'locked':(st==='done'?'done':''));
      var right = st==='locked'
        ? '<div class="prog"><span class="lock-txt">قيد الإعداد</span></div>'
        : '<div class="prog"><span class="stars">'+starStr(prog.stars,3)+'</span><div class="mini-bar"><i style="width:'+prog.pct+'%"></i></div></div>';
      el.innerHTML='<div class="node"><div class="dot">'+(st==='locked'?I.lock:(i+1))+'</div></div>'+
        '<button class="body"><div class="info"><b>الوحدة '+(i+1)+' · '+u.t+'</b><span>'+u.s+'</span></div>'+right+'</button>';
      var body=el.querySelector('.body');
      if(hasLessons){ body.onclick=function(){ openUnit(u,i); }; }
      else{ body.onclick=function(){ toast('هذه الوحدة قيد الإعداد 🔒'); }; }
      w.appendChild(el);
    });
    go('units');
  }
  function unitProgress(u){
    var refs=(u.lessons||[]).filter(function(l){ return l.ref && window.LESSONS[l.ref]; });
    if(!refs.length) return {pct:0,stars:0};
    var complete=0, sSum=0, sMax=0;
    refs.forEach(function(l){ var s=Engine.stats(window.LESSONS[l.ref]); if(s.complete) complete++; sSum+=s.stars; sMax+=s.max; });
    return { pct:Math.round(complete/refs.length*100), stars: sMax? Math.round(sSum/sMax*3):0 };
  }

  /* ---------- الدروس ---------- */
  function openUnit(u, idx){
    state.unit=u; state.unitIdx=(typeof idx==='number'?idx:0);
    $('#lessonsTitle').textContent=u.t;
    $('#lessonsEyebrow').textContent='الوحدة '+(state.unitIdx+1);
    var w=$('#lessonsList'); w.innerHTML='';
    if(!u.lessons||!u.lessons.length){
      w.innerHTML='<div class="soon"><div class="si">'+I.book+'</div><b>دروس هذه الوحدة قيد الإعداد</b><span>سنضيفها قريبًا بإذن الله.</span></div>';
      go('lessons'); return;
    }
    u.lessons.forEach(function(ls){
      var L = ls.ref && window.LESSONS[ls.ref] ? window.LESSONS[ls.ref] : null;
      var s = L ? Engine.stats(L) : null;
      var playable = !!L;
      var doneState = s && s.complete;
      var el=document.createElement('button'); el.className='lesson'+(doneState?' done':'')+(playable?'':' locked');
      var icon = !playable ? I.lock : (doneState ? I.check : I.play);
      var stateTag = !playable ? '<span class="tag state-soon">قريبًا</span>'
                    : (doneState ? '<span class="tag state-done">مكتمل ✓</span>'
                    : (s.started ? '<span class="stars">'+starStr(Math.round(s.stars/s.max*3),3)+'</span>' : '<span class="tag">ابدأ الآن</span>'));
      var tagIc = window.TAG_ICON[ls.tag];
      el.innerHTML='<div class="lic">'+icon+'</div><div class="lmeta"><b>'+ls.t+'</b><div class="tags"><span class="tag">'+ls.tag+'</span>'+stateTag+'</div></div>'+(playable?'<span class="chev">'+I.chev+'</span>':'');
      if(playable){ el.onclick=function(){ openLesson(L); }; }
      else{ el.onclick=function(){ toast('هذا الدرس قيد الإعداد 🔒'); }; }
      w.appendChild(el);
    });
    go('lessons');
  }

  /* ---------- فتح الدرس عبر المحرّك ---------- */
  function openLesson(L){
    go('lesson');
    Engine.open(L, {
      mount: $('#lessonMount'),
      onExit: function(){ openUnit(state.unit, state.unitIdx); },
      onProgress: function(){ refreshTotals(); },
      toast: toast,
      scrollTop: scrollTop
    });
  }

  /* ---------- إجماليّات النجوم ---------- */
  function allRefLessons(){
    var out=[]; var c=C.content;
    for(var k in c){ if(c.hasOwnProperty(k)){ c[k].units.forEach(function(u){ (u.lessons||[]).forEach(function(l){ if(l.ref && window.LESSONS[l.ref]) out.push(window.LESSONS[l.ref]); }); }); } }
    return out;
  }
  function refreshTotals(){ var t=0; allRefLessons().forEach(function(L){ t+=Engine.stats(L).stars; }); $('#starTotal').textContent=t; }

  /* ---------- أدوات ---------- */
  function starStr(n,max){ max=max||3; var s=''; for(var i=0;i<max;i++) s+=(i<n?'★':'<span class="off">★</span>'); return s; }
  var toastT;
  function toast(m){
    var t=$('#toast'); t.textContent=m; t.classList.add('show');
    clearTimeout(toastT); toastT=setTimeout(function(){ t.classList.remove('show'); },2000);
  }

  /* ---------- الوضع الليلي ---------- */
  function isDark(){ var c=document.documentElement.getAttribute('data-theme'); return c==='dark'||(!c&&window.matchMedia('(prefers-color-scheme:dark)').matches); }
  function applyTheme(mode){
    if(mode==='dark') document.documentElement.setAttribute('data-theme','dark');
    else if(mode==='light') document.documentElement.setAttribute('data-theme','light');
    else document.documentElement.removeAttribute('data-theme');
    $('#themeBtn').innerHTML = isDark()?I.sun:I.moon;
  }

  /* ---------- الاسم ---------- */
  function saveName(){ try{ var v=$('#playerName').value.trim(); if(v!==null) localStorage.setItem('waqqad_name', v); }catch(e){} }
  function loadName(){ try{ return localStorage.getItem('waqqad_name')||''; }catch(e){ return ''; } }

  /* ---------- عن المنصّة ---------- */
  function openAbout(){ $('#aboutModal').classList.add('open'); }
  function closeAbout(){ $('#aboutModal').classList.remove('open'); }

  /* ============ الإقلاع ============ */
  /* ---------- عدّاد الزوّار ----------
     رقمٌ إجماليٌّ فقط (بلا بيانات شخصية) عبر خدمة Abacus المجّانية.
     يُحسب مرّةً لكلّ جلسة، ويختفي بهدوءٍ إن تعذّر الاتصال (أوفلاين مثلًا). */
  function toAr(n){ return String(n).replace(/[0-9]/g,function(d){ return '٠١٢٣٤٥٦٧٨٩'[d]; }); }
  function visitorCounter(){
    var box=$('#visitBox'), num=$('#visitCount'); if(!box||!num) return;
    var base='https://abacus.jasoncameron.dev', ns='waqqad-app-1448', key='visitors';
    var counted=false; try{ counted=sessionStorage.getItem('waqqad_visited')==='1'; }catch(e){}
    var url=base+(counted?'/get/':'/hit/')+ns+'/'+key;
    fetch(url).then(function(r){ return r.json(); }).then(function(d){
      if(d && typeof d.value==='number'){
        num.textContent=toAr(d.value); box.hidden=false;
        try{ sessionStorage.setItem('waqqad_visited','1'); }catch(e){}
      }
    }).catch(function(){ /* بلا اتصال: يبقى مخفيًّا */ });
  }

  function boot(){
    // أيقونات الهيرو
    $('#gEn').innerHTML=I.en; $('#gMath').innerHTML=I.math; $('#gSci').innerHTML=I.sci; $('#gAr').innerHTML=I.ar;
    $('#brandMark').innerHTML=I.flame; $('#aboutMark').innerHTML=I.flame;
    // نصوص الهوية
    $('#brandName').textContent=B.name; $('#brandTag').textContent=B.tagline;
    $('#footTeacher').textContent=B.teacher; $('#footSchool').textContent=B.school;
    $('#aboutTeacher').textContent=B.teacher; $('#aboutSchool').textContent=B.school;
    document.title = 'منصّة '+B.name;

    // الاسم
    $('#playerName').value = loadName();

    // الوضع
    var savedTheme=null; try{ savedTheme=localStorage.getItem('waqqad_theme'); }catch(e){}
    applyTheme(savedTheme||'');
    $('#themeBtn').onclick=function(){ var next=isDark()?'light':'dark'; applyTheme(next); try{ localStorage.setItem('waqqad_theme',next); }catch(e){} };

    // الروابط
    $('#brandHome').onclick=function(){ setSubjectVars(null); go('home'); };
    $('#startBtn').onclick=function(){ saveName(); setSubjectVars(null); renderGrades(); go('grade'); };
    $('#resumeBtn').onclick=function(){
      saveName();
      state.grade=C.grades[0]; state.sem=C.semesters[0]; state.subject=C.subjects[3];
      setSubjectVars(state.subject);
      var u=C.content['g1.s1.en'].units[0]; state.unit=u; state.unitIdx=0;
      openLesson(window.LESSONS['EN_SG1_U1_VERBBE']);
    };
    $('#aboutLink').onclick=openAbout;
    $('#aboutClose').onclick=closeAbout;
    $('#aboutModal').onclick=function(e){ if(e.target===$('#aboutModal')) closeAbout(); };

    renderGrades();
    refreshTotals();
    go('home');
    visitorCounter();

    // PWA
    if('serviceWorker' in navigator){ window.addEventListener('load',function(){ navigator.serviceWorker.register('sw.js').catch(function(){}); }); }
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
