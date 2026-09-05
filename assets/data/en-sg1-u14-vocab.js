/* ============================================================
   Lesson: Vocabulary — Celebrations
   English · Super Goal 1 · Unit 14 (Let's Celebrate) · صفحات ١٢٦–١٢٧
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U14_VOCAB'] = {
    id:'EN_SG1_U14_VOCAB',
    title:'Vocabulary — Celebrations',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'Holidays & Celebrations',
      intro:'مفرداتُ الاحتفالات: <code>celebrate</code> يحتفل، <code>holiday</code> عطلة/عيد، <code>National Day</code> اليوم الوطنيّ، <code>gift / present</code> هدية، <code>greeting card</code> بطاقة تهنئة، <code>decorate</code> يزيّن، <code>invite</code> يدعو، <code>guest</code> ضيف، <code>generous</code> كريم.',
      table:[['celebrate','يحتفل'],['greeting card','بطاقة تهنئة'],['decorate','يزيّن'],['invite','يدعو'],['generous','كريم']],
      trick:'<code>celebrate</code> فعلٌ، و<code>celebration</code> اسمٌ. ونستعمل <code>Let’s</code> للدعوة: <code>Let’s celebrate the National Day!</code>'
    },
    stages:[
      { type:'choice', name:'المعنى', hint:'اختر المعنى الصحيح', qs:[
        {p:'“celebrate” means:', o:['have a special event','forget','work'], a:0, w:'يحتفل.', f:'<u>have a special event</u>'},
        {p:'A “greeting card” is used to:', o:['send good wishes','buy food','drive'], a:0, w:'بطاقة تهنئة.', f:'<u>send good wishes</u>'},
        {p:'To “decorate” a home means to:', o:['make it look nice','clean the car','cook'], a:0, w:'يزيّن.', f:'<u>make it look nice</u>'},
        {p:'A “guest” is a person you:', o:['invite','sell to','teach'], a:0, w:'ضيف.', f:'a person you <u>invite</u>'},
        {p:'A “generous” person likes to:', o:['give to others','keep everything','argue'], a:0, w:'كريم.', f:'<u>give to others</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:"Let's ___ the National Day together.", o:['celebrate','sell','drive'], a:0, w:'نحتفل.', f:'<u>celebrate</u>'},
        {p:"Let's get some ___ cards for Eid.", o:['greeting','driving','cooking'], a:0, w:'تهنئة.', f:'<u>greeting</u> cards'},
        {p:'We ___ our homes for the celebration.', o:['decorate','drive','sell'], a:0, w:'نزيّن.', f:'<u>decorate</u>'},
        {p:'We should ___ our cousins for Eid.', o:['invite','forget','sell'], a:0, w:'ندعو.', f:'<u>invite</u>'},
        {p:'People give a ___ to children on Eid.', o:['gift','test','job'], a:0, w:'هدية.', f:'a <u>gift</u>'}
      ]},
      { type:'choice', name:'الكلمة المناسبة', hint:'اختر الأنسب', qs:[
        {p:'The National ___ is a special holiday.', o:['Day','Night','Week'], a:0, w:'اليوم الوطنيّ.', f:'National <u>Day</u>'},
        {p:'Older family members ___ money to children.', o:['offer','sell','buy'], a:0, w:'يقدّمون.', f:'<u>offer</u> money'},
        {p:'On Eid, we visit friends and ___ gifts.', o:['exchange','drive','cook'], a:0, w:'نتبادل.', f:'<u>exchange</u> gifts'},
        {p:'A ___ person is kind and gives to others.', o:['generous','lazy','shy'], a:0, w:'كريم.', f:'<u>generous</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['We','decorate','the','car','for','Eid','.'], bad:3, fix:'home', w:'نزيّن البيت عادةً للعيد.', f:'…decorate the <u>home</u>…'},
        {words:['A','guest','is','a','person','you','sell','.'], bad:6, fix:'invite', w:'الضيفُ من تدعوه.', f:'…a person you <u>invite</u>.'},
        {words:['Let’s','celebrates','the','National','Day','.'], bad:1, fix:'celebrate', w:'بعد <code>Let’s</code> ← مجرّد.', f:'Let’s <u>celebrate</u>…'},
        {words:['A','generous','person','keeps','everything','.'], bad:3, fix:'gives', w:'الكريمُ يعطي.', f:'A generous person <u>gives</u>.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'“celebrate” =', ask:'المعنى', o:['have a special event','work'], a:0, w:'يحتفل.', f:'<u>have a special event</u>'},
        {p:'send good wishes =', ask:'اختر', o:['greeting card','test'], a:0, w:'بطاقة تهنئة.', f:'<u>greeting card</u>'},
        {p:'make a home look nice =', ask:'الفعل', o:['decorate','drive'], a:0, w:'يزيّن.', f:'<u>decorate</u>'},
        {p:'a person you invite =', ask:'اختر', o:['guest','driver'], a:0, w:'ضيف.', f:'<u>guest</u>'},
        {p:'kind, gives to others =', ask:'اختر', o:['generous','lazy'], a:0, w:'كريم.', f:'<u>generous</u>'},
        {p:'the National ___', ask:'أكمل', o:['Day','Night'], a:0, w:'اليوم الوطنيّ.', f:'<u>Day</u>'},
        {p:'On Eid we ___ gifts.', ask:'أكمل', o:['exchange','cook'], a:0, w:'نتبادل.', f:'<u>exchange</u>'},
        {p:'We should ___ our cousins.', ask:'أكمل', o:['invite','forget'], a:0, w:'ندعو.', f:'<u>invite</u>'},
        {p:"Let's ___ the National Day.", ask:'أكمل', o:['celebrate','celebrates'], a:0, w:'مجرّد.', f:'<u>celebrate</u>'}
      ]}
    ]
  };
})();
