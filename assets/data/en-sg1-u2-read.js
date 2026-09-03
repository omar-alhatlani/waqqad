/* ============================================================
   Lesson: Reading — How Old Are They?
   English · Super Goal 1 · Unit 2 (What Day Is Today?) · صفحة ١٥
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1).
   lang:'en' → المحتوى إنجليزيّ LTR، والشرح بالعربية.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U2_READ'] = {
    id:'EN_SG1_U2_READ',
    title:'Reading — How Old Are They?',
    lang:'en',
    rule:{
      tag:'النصّ',
      title:'How Old Are They?',
      intro:'اقرأ عن أعمار الحيوانات — بعضها يبدو كبيرًا وهو صغير في سنوات البشر! ثم أجب.',
      examples:[
        'Flipper is a dolphin. He is 5 years old — young for a dolphin.',
        'In human years, Flipper is like an 18-year-old teen.',
        'Cleo the cat is 1 year old = a 15-year-old person.',
        'Ollie the elephant is 4 — only a baby. His father, Samson, is 30.',
        'Marla is a turtle. She is 95 — old, even for a turtle.'
      ],
      trick:'انتبه لكلّ حيوانٍ وعمره: <code>Flipper</code> دولفين، <code>Cleo</code> قطّة، <code>Ollie</code> فيل، <code>Marla</code> سلحفاة.'
    },
    stages:[
      { type:'choice', name:'الفهم', hint:'أجب حسب النصّ', qs:[
        {p:'How old is Flipper?',           ask:'حسب النصّ', o:['5','18','1','95'], a:0, w:'<code>Flipper is 5 years old.</code>', f:'Flipper is 5.'},
        {p:'What animal is Flipper?',        ask:'حسب النصّ', o:['a dolphin','a cat','an elephant','a turtle'], a:0, w:'<code>Flipper is a dolphin.</code>', f:'Flipper is a dolphin.'},
        {p:'How old is Cleo the cat?',       ask:'حسب النصّ', o:['1','15','4','30'], a:0, w:'<code>Cleo is one year old.</code>', f:'Cleo is 1 year old.'},
        {p:'Cleo in human years is:',        ask:'حسب النصّ', o:['15','1','5','95'], a:0, w:'<code>= a 15-year-old person.</code>', f:'15 in human years.'},
        {p:'Who is Samson?',                 ask:'حسب النصّ', o:["Ollie's father","the dolphin","the cat","the turtle"], a:0, w:'<code>Samson, his father, is 30.</code>', f:"Samson is Ollie's father."},
        {p:'How old is Marla the turtle?',   ask:'حسب النصّ', o:['95','9','30','5'], a:0, w:'<code>She is 95.</code>', f:'Marla is 95.'}
      ]},
      { type:'choice', name:'صحيح أم خطأ؟', hint:'Yes / No حسب النصّ', qs:[
        {p:'Flipper is old for a dolphin.', ask:'صحيح أم خطأ؟', o:['No','Yes'], a:0, w:'هو <b>صغير</b> (young) للدولفين.', f:'No — he is young.'},
        {p:'Ollie is a baby elephant.',     ask:'صحيح أم خطأ؟', o:['Yes','No'], a:0, w:'<code>Ollie is 4 — only a baby.</code>', f:'Yes.'},
        {p:'Marla is young for a turtle.',  ask:'صحيح أم خطأ؟', o:['No','Yes'], a:0, w:'هي <b>كبيرة</b> (old) — ٩٥.', f:'No — she is old.'},
        {p:'Cleo is a cat.',                ask:'صحيح أم خطأ؟', o:['Yes','No'], a:0, w:'<code>Cleo the cat.</code>', f:'Yes.'},
        {p:'Samson is 30 years old.',       ask:'صحيح أم خطأ؟', o:['Yes','No'], a:0, w:'<code>his father, is 30.</code>', f:'Yes.'}
      ]},
      { type:'gap', name:'أكمل من النصّ', hint:'اختر الكلمة من النصّ', qs:[
        {p:'Flipper is a ___.',        ask:'أكمل الفراغ', o:['dolphin','cat','turtle','elephant'], a:0, w:'<code>a dolphin</code>.', f:'Flipper is a <u>dolphin</u>.'},
        {p:'Cleo is one ___ old.',      ask:'أكمل الفراغ', o:['year','month','day','week'], a:0, w:'<code>one year old</code>.', f:'Cleo is one <u>year</u> old.'},
        {p:'Ollie is only a ___.',      ask:'أكمل الفراغ', o:['baby','teen','father','person'], a:0, w:'<code>only a baby</code>.', f:'Ollie is only a <u>baby</u>.'},
        {p:'Marla is a ___.',           ask:'أكمل الفراغ', o:['turtle','cat','dolphin','horse'], a:0, w:'<code>a turtle</code>.', f:'Marla is a <u>turtle</u>.'},
        {p:'Samson is Ollie\'s ___.',   ask:'أكمل الفراغ', o:['father','mother','friend','son'], a:0, w:'<code>his father</code>.', f:"Samson is Ollie's <u>father</u>."},
        {p:'Flipper is 5 years ___.',   ask:'أكمل الفراغ', o:['old','young','new','big'], a:0, w:'<code>5 years old</code>.', f:'... 5 years <u>old</u>.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['Flipper','is','a','dolphin','.'],   w:'تعريفُ الحيوان.', f:'Flipper is a dolphin.'},
        {sol:['Cleo','is','one','year','old','.'],  w:'العمر.', f:'Cleo is one year old.'},
        {sol:['Marla','is','a','turtle','.'],       w:'تعريفُ الحيوان.', f:'Marla is a turtle.'},
        {sol:['How','old','are','you','?'],         w:'سؤالٌ عن العمر.', f:'How old are you?'},
        {sol:['Ollie','is','only','a','baby','.'],  w:'صغيرٌ جدًّا.', f:'Ollie is only a baby.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما فهمته — مختلطًا', final:true, qs:[
        {p:'How old is Flipper?', ask:'حسب النصّ', o:['5','95'], a:0, w:'<code>5 years old.</code>', f:'Flipper is 5.'},
        {p:'What animal is Flipper?', ask:'حسب النصّ', o:['a dolphin','a turtle'], a:0, w:'<code>a dolphin</code>.', f:'a dolphin.'},
        {p:'Marla is young for a turtle.', ask:'صحيح أم خطأ؟', o:['No','Yes'], a:0, w:'هي كبيرة (٩٥).', f:'No — she is old.'},
        {p:'Cleo is one ___ old.', ask:'أكمل الفراغ', o:['year','month','day','week'], a:0, w:'<code>one year old</code>.', f:'one <u>year</u> old.'},
        {p:'How old is Marla the turtle?', ask:'حسب النصّ', o:['95','9'], a:0, w:'<code>She is 95.</code>', f:'Marla is 95.'},
        {sol:['Flipper','is','a','dolphin','.'], w:'تعريفُ الحيوان.', f:'Flipper is a dolphin.'},
        {p:'Ollie is a baby elephant.', ask:'صحيح أم خطأ؟', o:['Yes','No'], a:0, w:'<code>only a baby</code>.', f:'Yes.'},
        {p:'Samson is Ollie\'s ___.', ask:'أكمل الفراغ', o:['father','mother','friend','son'], a:0, w:'<code>his father</code>.', f:"Ollie's <u>father</u>."},
        {p:'How old is Cleo the cat?', ask:'حسب النصّ', o:['1','15'], a:0, w:'<code>one year old</code>.', f:'Cleo is 1.'}
      ]}
    ]
  };
})();
