/* ============================================================
   Lesson: Simple Present & Wh- Questions
   English · Super Goal 2 · Unit 3 (Who’s Who) · صفحة ٢٠
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U3_PRESENT'] = {
    id:'EN_SG2_U3_PRESENT',
    title:'Simple Present & Wh- Questions',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'Simple Present — he works / they work',
      intro:'نستعمل <b>المضارع البسيط</b> للحقائق العامة والأمور المتكرّرة. مع <code>he/she/it</code> نضيف <b>s</b> للفعل: <code>He works</code>. ومع <code>I/you/we/they</code> يبقى الفعل أصليًّا: <code>They work</code>. وفي السؤال نستعمل <code>do/does</code>: <code>Where does he work?</code> / <code>What do you do?</code>',
      table:[['I / You / We / They','work'],['He / She / It','works (+s)'],['Question','Do you…? / Does he…?']],
      trick:'أضِف <code>s</code> مع المفرد الغائب فقط (he/she/it). في السؤال: <code>Does</code> مع المفرد الغائب و<code>Do</code> مع الباقي، والفعلُ بعدها أصليّ بلا <code>s</code>.'
    },
    stages:[
      { type:'choice', name:'work أم works؟', hint:'أضِف s مع he/she/it فقط', qs:[
        {p:'He ___ in a hospital.', o:['works','work'], a:0, w:'<code>he</code> ← <code>works</code>.', f:'He <u>works</u>.'},
        {p:'They ___ for a company.', o:['work','works'], a:0, w:'<code>they</code> ← <code>work</code>.', f:'They <u>work</u>.'},
        {p:'She ___ history books.', o:['writes','write'], a:0, w:'<code>she</code> ← <code>writes</code>.', f:'She <u>writes</u>.'},
        {p:'I ___ computers.', o:['sell','sells'], a:0, w:'<code>I</code> ← <code>sell</code>.', f:'I <u>sell</u>.'},
        {p:'My uncle ___ five languages.', o:['speaks','speak'], a:0, w:'<code>my uncle</code> مفرد ← <code>speaks</code>.', f:'My uncle <u>speaks</u>…'}
      ]},
      { type:'gap', name:'do أم does؟', hint:'Does مع المفرد الغائب', qs:[
        {p:'Where ___ he work?', o:['does','do'], a:0, w:'<code>he</code> ← <code>does</code>.', f:'Where <u>does</u> he work?'},
        {p:'What ___ you do?', o:['do','does'], a:0, w:'<code>you</code> ← <code>do</code>.', f:'What <u>do</u> you do?'},
        {p:'Where ___ they live?', o:['do','does'], a:0, w:'<code>they</code> ← <code>do</code>.', f:'Where <u>do</u> they live?'},
        {p:'What ___ your brother do?', o:['does','do'], a:0, w:'مفرد ← <code>does</code>.', f:'What <u>does</u> your brother do?'},
        {p:'___ you want to be a teacher?', o:['Do','Does'], a:0, w:'<code>you</code> ← <code>Do</code>.', f:'<u>Do</u> you want…?'}
      ]},
      { type:'choice', name:'want + infinitive', hint:'want + to + الفعل الأصلي', qs:[
        {p:'I want ___ a pilot.', ask:'اختر', o:['to be','be','being'], a:0, w:'<code>want to be</code>.', f:'I want <u>to be</u> a pilot.'},
        {p:'She wants ___ children.', ask:'اختر', o:['to help','help','helps'], a:0, w:'<code>wants to help</code>.', f:'She wants <u>to help</u> children.'},
        {p:'What do you want ___?', ask:'اختر', o:['to be','be','being'], a:0, w:'<code>want to be</code>.', f:'What do you want <u>to be</u>?'},
        {p:'He ___ to be a doctor.', ask:'اختر', o:['wants','want','wanting'], a:0, w:'مفرد ← <code>wants</code>.', f:'He <u>wants</u> to be a doctor.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['He','work','in','a','bank','.'], bad:1, fix:'works', w:'<code>he</code> يحتاج <code>s</code>.', f:'He <u>works</u> in a bank.'},
        {words:['They','works','together','.'], bad:1, fix:'work', w:'<code>they</code> بلا <code>s</code>.', f:'They <u>work</u> together.'},
        {words:['Where','do','he','work','?'], bad:1, fix:'does', w:'مفرد ← <code>does</code>.', f:'Where <u>does</u> he work?'},
        {words:['What','does','he','works','?'], bad:3, fix:'work', w:'بعد <code>does</code> الفعلُ أصليّ.', f:'What does he <u>work</u>?'},
        {words:['I','want','be','a','pilot','.'], bad:2, fix:'to be', w:'<code>want to be</code>.', f:'I want <u>to be</u> a pilot.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['He','works','in','a','hospital','.'], w:'مفرد + works.', f:'He works in a hospital.'},
        {sol:['Where','does','she','work','?'], w:'does + الفاعل + الفعل الأصلي.', f:'Where does she work?'},
        {sol:['I','want','to','be','an','engineer','.'], w:'want to + الفعل.', f:'I want to be an engineer.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'He ___ in a hospital.', ask:'اختر', o:['works','work'], a:0, w:'he ← works.', f:'He <u>works</u>.'},
        {p:'They ___ for a company.', ask:'اختر', o:['work','works'], a:0, w:'they ← work.', f:'They <u>work</u>.'},
        {p:'Where ___ he work?', ask:'اختر', o:['does','do'], a:0, w:'مفرد ← does.', f:'Where <u>does</u> he work?'},
        {p:'I want ___ a pilot.', ask:'اختر', o:['to be','be'], a:0, w:'want to be.', f:'I want <u>to be</u>…'},
        {p:'What ___ you do?', ask:'اختر', o:['do','does'], a:0, w:'you ← do.', f:'What <u>do</u> you do?'},
        {sol:['He','works','in','a','hospital','.'], w:'مفرد + works.', f:'He works in a hospital.'},
        {p:'She ___ history books.', ask:'اختر', o:['writes','write'], a:0, w:'she ← writes.', f:'She <u>writes</u>.'},
        {p:'He ___ to be a doctor.', ask:'اختر', o:['wants','want'], a:0, w:'مفرد ← wants.', f:'He <u>wants</u>…'},
        {p:'What ___ your brother do?', ask:'اختر', o:['does','do'], a:0, w:'مفرد ← does.', f:'What <u>does</u> your brother do?'}
      ]}
    ]
  };
})();
