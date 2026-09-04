/* ============================================================
   Lesson: Reading — Do College Students Have a Healthy Lifestyle?
   English · Super Goal 3 · Unit 1 (Lifestyles) · صفحة ٨
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U1_READ'] = {
    id:'EN_SG3_U1_READ',
    title:'Reading — A Healthy Lifestyle?',
    lang:'en',
    rule:{
      tag:'Reading',
      title:'Do College Students Have a Healthy Lifestyle?',
      intro:'اقرأِ النصَّ ثمّ أجِب عن الأسئلة. يبحث المقالُ في عادات طلاب الجامعة الغذائية والنوم والرياضة.',
      examples:[
        'Most college students seem quite healthy because they are still young. But that doesn’t mean they shouldn’t improve their lifestyle.',
        'The average student diet is mainly rice, noodles, and fried food. Students need to add more fresh fruit and vegetables.',
        'Sleep affects memory and concentration. When students get enough sleep, their exam scores are higher — but most get only about six hours a night.',
        'Most students work out for at least 30 minutes a day. Students who exercise are usually happier, more energetic, and pay attention more easily.',
        'With good time management, healthy habits (enough sleep, good food, exercise) can help students succeed in class.'
      ],
      trick:'الفكرة الرئيسة: عاداتٌ صحّية (نومٌ كافٍ + غذاءٌ جيّد + رياضة) + إدارةٌ جيّدة للوقت = نجاحٌ دراسيّ.'
    },
    stages:[
      { type:'choice', name:'الفهم العام', hint:'الفكرة الرئيسة', qs:[
        {p:'Why do most college students seem healthy?', o:['They are still young','They never eat','They sleep all day'], a:0, w:'لأنهم صغارُ السنّ.', f:'because they are <u>still young</u>'},
        {p:'The average student diet is mainly:', o:['rice, noodles, fried food','fruit and vegetables','fish and salad'], a:0, w:'أرزٌ ومعكرونةٌ وطعامٌ مقليّ.', f:'<u>rice, noodles, fried food</u>'},
        {p:'What do students need to add to their diet?', o:['fresh fruit and vegetables','more rice','more coffee'], a:0, w:'فواكه وخضراوات طازجة.', f:'<u>fresh fruit and vegetables</u>'},
        {p:'Enough sleep has a positive effect on:', o:['memory and concentration','height','money'], a:0, w:'الذاكرة والتركيز.', f:'<u>memory and concentration</u>'}
      ]},
      { type:'choice', name:'تفاصيل', hint:'من النصّ', qs:[
        {p:'On average, most students sleep about ___ a night.', o:['six hours','ten hours','three hours'], a:0, w:'نحو ست ساعات.', f:'about <u>six hours</u>'},
        {p:'Most students work out at least ___ a day.', o:['30 minutes','3 hours','5 minutes'], a:0, w:'نصف ساعة على الأقلّ.', f:'at least <u>30 minutes</u>'},
        {p:'Students who exercise are usually:', o:['happier and more energetic','sadder','sleepier'], a:0, w:'أسعدُ وأكثرُ نشاطًا.', f:'<u>happier and more energetic</u>'},
        {p:'What helps students have a healthier lifestyle?', o:['good time management','more homework','less water'], a:0, w:'إدارةٌ جيّدة للوقت.', f:'<u>good time management</u>'}
      ]},
      { type:'choice', name:'صحّ أم خطأ', hint:'True / False', qs:[
        {p:'T/F: Most students’ diet has enough fruit and vegetables.', o:['False','True'], a:0, w:'النصّ يقول إنها غير كافية.', f:'<u>False</u>'},
        {p:'T/F: Sleeping well before an exam can help scores.', o:['True','False'], a:0, w:'النوم الكافي يرفع الدرجات.', f:'<u>True</u>'},
        {p:'T/F: The writer says students can’t improve their lifestyle.', o:['False','True'], a:0, w:'بل يمكنهم تحسينُه.', f:'<u>False</u>'},
        {p:'T/F: Good habits can help students succeed in class.', o:['True','False'], a:0, w:'نعم، تساعدهم على النجاح.', f:'<u>True</u>'}
      ]},
      { type:'gap', name:'أكمل من النصّ', hint:'اختر الكلمة المناسبة', qs:[
        {p:'Students need to add more fresh ___ to their diet.', o:['vegetables','noodles','oil'], a:0, w:'خضراوات طازجة.', f:'fresh <u>vegetables</u>'},
        {p:'Getting enough ___ improves memory.', o:['sleep','stress','sugar'], a:0, w:'النوم الكافي.', f:'enough <u>sleep</u>'},
        {p:'Exercise makes students more ___.', o:['energetic','tired','hungry'], a:0, w:'أكثرُ نشاطًا.', f:'more <u>energetic</u>'},
        {p:'Healthy habits help students ___ in their classes.', o:['succeed','fail','sleep'], a:0, w:'ينجحون.', f:'<u>succeed</u>'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'Students seem healthy because they are:', ask:'اختر', o:['young','rich'], a:0, w:'صغارُ السنّ.', f:'<u>young</u>'},
        {p:'Average diet = rice, noodles, and ___ food.', ask:'أكمل', o:['fried','fresh'], a:0, w:'مقليّ.', f:'<u>fried</u>'},
        {p:'They should add fresh fruit and ___.', ask:'أكمل', o:['vegetables','sugar'], a:0, w:'خضراوات.', f:'<u>vegetables</u>'},
        {p:'Sleep helps memory and ___.', ask:'اختر', o:['concentration','height'], a:0, w:'التركيز.', f:'<u>concentration</u>'},
        {p:'Most students sleep about ___ hours.', ask:'اختر', o:['six','twelve'], a:0, w:'ست.', f:'<u>six</u>'},
        {p:'They exercise at least ___ minutes a day.', ask:'اختر', o:['30','5'], a:0, w:'٣٠.', f:'<u>30</u>'},
        {p:'T/F: Exercise makes students happier.', ask:'صحّ/خطأ', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'The key to a healthy lifestyle is good ___ management.', ask:'أكمل', o:['time','money'], a:0, w:'الوقت.', f:'<u>time</u>'},
        {p:'T/F: Healthy habits help students succeed.', ask:'صحّ/خطأ', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'}
      ]}
    ]
  };
})();
