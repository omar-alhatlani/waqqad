/* ============================================================
   Lesson: Conjunctions — so / because (why)
   English · Super Goal 1 · Unit 9 (What Do You Do?) · صفحة ٨٤
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U9_CONJ'] = {
    id:'EN_SG1_U9_CONJ',
    title:'Conjunctions: so & because',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'why? — because / so',
      intro:'نسأل عن السبب بـ <code>Why …?</code> ونجيب بـ <code>because</code>. رابطُ <b>because</b> يأتي قبل <b>السبب</b> (لماذا)، ورابطُ <b>so</b> يأتي قبل <b>النتيجة</b>. مثال: <code>He is a doctor because he likes to help people</code> / <code>He likes to help people, so he became a doctor</code>.',
      table:[['Why …?','لماذا؟'],['because','+ السبب (a reason)'],['so','+ النتيجة (a result)'],['answer','Because I like it.']],
      trick:'اسألْ نفسك: بعد الرابط سببٌ أم نتيجة؟ <code>because</code> يتبعه السبب، و<code>so</code> تتبعها النتيجة.'
    },
    stages:[
      { type:'choice', name:'because للسبب', hint:'الجواب عن Why', qs:[
        {p:'Why do you like this job? — ___ it’s interesting.', o:['Because','So','What','Why'], a:0, w:'الجواب عن السبب ← <code>Because</code>.', f:'<u>Because</u> it’s interesting.'},
        {p:'He’s a pilot ___ he loves flying.', o:['because','so','and','but'], a:0, w:'السبب ← <code>because</code>.', f:'…<u>because</u> he loves flying'},
        {p:'I want to be a chef ___ I like to cook.', o:['because','so','or','then'], a:0, w:'السبب ← <code>because</code>.', f:'…<u>because</u> I like to cook'},
        {p:'We ask about reasons with:', o:['Why?','What?','Where?'], a:0, w:'عن السبب ← <code>Why?</code>.', f:'<u>Why?</u>'}
      ]},
      { type:'choice', name:'so للنتيجة', hint:'ماذا حدث نتيجةً؟', qs:[
        {p:'He likes helping people, ___ he became a doctor.', o:['so','because','but','or'], a:0, w:'النتيجة ← <code>so</code>.', f:'…<u>so</u> he became a doctor'},
        {p:'She loves children, ___ she is a teacher.', o:['so','because','and','then'], a:0, w:'النتيجة ← <code>so</code>.', f:'…<u>so</u> she is a teacher'},
        {p:'It was late, ___ we went home.', o:['so','because','or','but'], a:0, w:'النتيجة ← <code>so</code>.', f:'…<u>so</u> we went home'},
        {p:'“so” introduces a:', o:['result','reason','question'], a:0, w:'النتيجة.', f:'a <u>result</u>'}
      ]},
      { type:'choice', name:'because أم so', hint:'سبب أم نتيجة؟', qs:[
        {p:'I stayed home ___ I was tired.', o:['because','so'], a:0, w:'السبب ← <code>because</code>.', f:'…<u>because</u> I was tired'},
        {p:'I was tired, ___ I stayed home.', o:['so','because'], a:0, w:'النتيجة ← <code>so</code>.', f:'…<u>so</u> I stayed home'},
        {p:'He’s a carpenter ___ he likes to make furniture.', o:['because','so'], a:0, w:'السبب.', f:'…<u>because</u>…'},
        {p:'The store was closed, ___ we went to another one.', o:['so','because'], a:0, w:'النتيجة.', f:'…<u>so</u>…'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['I','stayed','home','so','I','was','tired','.'], bad:3, fix:'because', w:'«كنت متعبًا» سببٌ ← <code>because</code>.', f:'…<u>because</u> I was tired.'},
        {words:['I','was','tired',',','because','I','slept','.'], bad:4, fix:'so', w:'«نمت» نتيجةٌ ← <code>so</code>.', f:'…<u>so</u> I slept.'},
        {words:['So','do','you','like','this','job','?'], bad:0, fix:'Why', w:'السؤال عن السبب ← <code>Why</code>.', f:'<u>Why</u> do you like this job?'},
        {words:['He','is','a','pilot','so','he','loves','flying','.'], bad:4, fix:'because', w:'«يحبّ الطيران» سبب ← <code>because</code>.', f:'…<u>because</u> he loves flying.'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['He','is','a','doctor','because','he','helps','people','.'], w:'<code>because</code> + السبب.', f:'He is a doctor because he helps people.'},
        {sol:['I','was','tired',',','so','I','went','home','.'], w:'<code>so</code> + النتيجة.', f:'I was tired, so I went home.'},
        {sol:['Why','do','you','like','it','?'], w:'السؤال عن السبب.', f:'Why do you like it?'},
        {sol:['Because','it','is','interesting','.'], w:'الجواب بـ <code>Because</code>.', f:'Because it is interesting.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'We ask about reasons with:', ask:'اختر', o:['Why?','What?'], a:0, w:'<code>Why?</code>.', f:'<u>Why?</u>'},
        {p:'…___ it’s interesting. (جواب Why)', ask:'اختر', o:['Because','So'], a:0, w:'<code>Because</code>.', f:'<u>Because</u>'},
        {p:'He’s a pilot ___ he loves flying.', ask:'اختر', o:['because','so'], a:0, w:'السبب.', f:'<u>because</u>'},
        {p:'I was tired, ___ I stayed home.', ask:'اختر', o:['so','because'], a:0, w:'النتيجة.', f:'<u>so</u>'},
        {p:'She loves children, ___ she teaches.', ask:'اختر', o:['so','because'], a:0, w:'النتيجة.', f:'<u>so</u>'},
        {p:'I stayed home ___ I was tired.', ask:'اختر', o:['because','so'], a:0, w:'السبب.', f:'<u>because</u>'},
        {sol:['He','is','a','doctor','because','he','helps','people','.'], w:'<code>because</code> + السبب.', f:'He is a doctor because he helps people.'},
        {p:'“so” introduces a ___.', ask:'اختر', o:['result','reason'], a:0, w:'النتيجة.', f:'<u>result</u>'},
        {p:'“because” introduces a ___.', ask:'اختر', o:['reason','result'], a:0, w:'السبب.', f:'<u>reason</u>'}
      ]}
    ]
  };
})();
