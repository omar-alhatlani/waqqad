/* ============================================================
   Lesson: Vocabulary — Feelings & Events
   English · Super Goal 2 · Unit 7 (What Happened?) · صفحة ٥٦
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U7_VOCAB'] = {
    id:'EN_SG2_U7_VOCAB',
    title:'Vocabulary — Feelings & Events',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'Feelings · Accidents · Witnesses',
      intro:'مفرداتُ المشاعر والأحداث: <code>happy</code> سعيد، <code>worried</code> قلق، <code>nervous</code> متوتّر، <code>relieved</code> مرتاح، <code>surprised</code> متفاجئ، <code>accident</code> حادث، <code>witness</code> شاهد، <code>hurt</code> مُصاب. نصف الشعور بـ <code>I feel… / I’m…</code> ونعلّل بـ <code>because</code>.',
      table:[['happy / worried','سعيد / قلق'],['nervous / relieved','متوتّر / مرتاح'],['accident / witness','حادث / شاهد'],['hurt','مُصاب / متأذٍّ']],
      trick:'اربطِ الشعورَ بسببه: <code>I’m happy because I passed.</code> و<code>relieved</code> = مرتاحٌ بعد قلق، و<code>witness</code> = شخصٌ رأى الحدث.'
    },
    stages:[
      { type:'choice', name:'المعنى بالعربية', hint:'اختر المعنى الصحيح', qs:[
        {p:'worried', ask:'المعنى', o:['قلق','سعيد','غاضب'], a:0, w:'<code>worried</code> = قلق.', f:'worried = قلق.'},
        {p:'relieved', ask:'المعنى', o:['مرتاح','خائف','ممِلّ'], a:0, w:'<code>relieved</code> = مرتاح.', f:'relieved = مرتاح.'},
        {p:'witness', ask:'المعنى', o:['شاهد','سائق','شرطيّ'], a:0, w:'<code>witness</code> = شاهد.', f:'witness = شاهد.'},
        {p:'accident', ask:'المعنى', o:['حادث','رحلة','فعالية'], a:0, w:'<code>accident</code> = حادث.', f:'accident = حادث.'},
        {p:'nervous', ask:'المعنى', o:['متوتّر','مسرور','نائم'], a:0, w:'<code>nervous</code> = متوتّر.', f:'nervous = متوتّر.'}
      ]},
      { type:'choice', name:'الشعور المناسب', hint:'طابِق الموقف بالشعور', qs:[
        {p:'You have an exam tomorrow. You feel:', ask:'اختر', o:['nervous','relieved','bored'], a:0, w:'قبل الاختبار ← <code>nervous</code>.', f:'nervous.'},
        {p:'No one was hurt in the accident. You feel:', ask:'اختر', o:['relieved','angry','sad'], a:0, w:'ارتياحٌ ← <code>relieved</code>.', f:'relieved.'},
        {p:'You passed the test. You are:', ask:'اختر', o:['happy','worried','nervous'], a:0, w:'نجاحٌ ← <code>happy</code>.', f:'happy.'},
        {p:'A person who saw the accident is a:', ask:'اختر', o:['witness','driver','doctor'], a:0, w:'من رأى ← <code>witness</code>.', f:'witness.'}
      ]},
      { type:'gap', name:'الشعور + السبب', hint:'استعمل because', qs:[
        {p:'I’m happy ___ I passed the exam.', o:['because','so','and'], a:0, w:'السبب ← <code>because</code>.', f:'happy <u>because</u>…'},
        {p:'She was ___ before the test. (متوتّرة)', o:['nervous','relieved','happy'], a:0, w:'قبل الاختبار.', f:'She was <u>nervous</u>.'},
        {p:'The witness was ___ no one was hurt. (مرتاح لأنّ)', o:['relieved that','worried that','angry that'], a:0, w:'ارتياحٌ.', f:'<u>relieved that</u>…'},
        {p:'Fortunately, no one was ___. (مُصاب)', o:['hurt','happy','tired'], a:0, w:'<code>hurt</code> = مُصاب.', f:'no one was <u>hurt</u>.'},
        {p:'There was a car ___ at the corner. (حادث)', o:['accident','event','trip'], a:0, w:'<code>accident</code>.', f:'a car <u>accident</u>.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['I’m','happy','so','I','passed','.'], bad:2, fix:'because', w:'السبب ← <code>because</code>.', f:'happy <u>because</u> I passed.'},
        {words:['A','witness','is','a','driver','.'], bad:4, fix:'person who saw it', w:'الشاهدُ من رأى الحدث لا السائق.', f:'a <u>person who saw it</u>.'},
        {words:['She','feels','relief','before','the','test','.'], bad:2, fix:'nervous', w:'قبل الاختبار يكون <code>nervous</code> لا <code>relieved</code>.', f:'feels <u>nervous</u>.'},
        {words:['No','one','were','hurt','.'], bad:2, fix:'was', w:'<code>no one</code> مفرد ← <code>was</code>.', f:'No one <u>was</u> hurt.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['I’m','happy','because','I','passed','.'], w:'الشعور + السبب.', f:'I’m happy because I passed.'},
        {sol:['The','witness','saw','the','accident','.'], w:'الشاهد والحدث.', f:'The witness saw the accident.'},
        {sol:['No','one','was','hurt','.'], w:'لا أحد مُصاب.', f:'No one was hurt.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'worried', ask:'المعنى', o:['قلق','سعيد'], a:0, w:'قلق.', f:'worried = قلق.'},
        {p:'You have an exam. You feel:', ask:'اختر', o:['nervous','relieved'], a:0, w:'متوتّر.', f:'nervous.'},
        {p:'I’m happy ___ I passed.', ask:'اختر', o:['because','so'], a:0, w:'سبب.', f:'<u>because</u>.'},
        {p:'witness', ask:'المعنى', o:['شاهد','سائق'], a:0, w:'شاهد.', f:'witness = شاهد.'},
        {p:'No one was hurt. You feel:', ask:'اختر', o:['relieved','angry'], a:0, w:'مرتاح.', f:'relieved.'},
        {sol:['No','one','was','hurt','.'], w:'لا أحد مُصاب.', f:'No one was hurt.'},
        {p:'accident', ask:'المعنى', o:['حادث','رحلة'], a:0, w:'حادث.', f:'accident = حادث.'},
        {p:'nervous', ask:'المعنى', o:['متوتّر','مرتاح'], a:0, w:'متوتّر.', f:'nervous = متوتّر.'},
        {p:'Fortunately, no one was ___.', ask:'اختر', o:['hurt','happy'], a:0, w:'مُصاب.', f:'<u>hurt</u>.'}
      ]}
    ]
  };
})();
