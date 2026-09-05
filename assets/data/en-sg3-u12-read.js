/* ============================================================
   Lesson: Reading — A Fish Out of Water
   English · Super Goal 3 · Unit 12 (Culture Shock) · صفحة ١٣٦
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U12_READ'] = {
    id:'EN_SG3_U12_READ',
    title:'Reading — A Fish Out of Water',
    lang:'en',
    rule:{
      tag:'Reading',
      title:'A Fish Out of Water',
      intro:'اقرأْ عن الصدمة الحضارية ومراحلها، ثمّ أجِب.',
      examples:[
        'Almost everyone who studies, lives, or works abroad experiences some culture shock — adjusting to the food, language, and daily life.',
        'No matter how patient and flexible you are, adjusting to a new culture can be difficult. Some people get depressed and homesick — these are normal reactions.',
        'The term “culture shock” was first used by writer Kalervo Oberg in 1954. He identified five stages.',
        'The stages include: the adjustment (excitement) phase, the rejection phase (problems with daily life), the conformist phase (understanding differences), and complete adjustment.',
        'The last stage is reverse culture shock: when the person returns home and finds that things have changed.'
      ],
      trick:'الصدمةُ الحضارية طبيعية عند العيش في ثقافةٍ جديدة. صاغ المصطلحَ أوبرغ (١٩٥٤)، وهي خمسُ مراحل تنتهي بالتأقلم ثمّ صدمةِ العودة.'
    },
    stages:[
      { type:'choice', name:'الفهم العام', hint:'ما الصدمة الحضارية؟', qs:[
        {p:'Who usually experiences culture shock?', o:['people who live abroad','only children','no one'], a:0, w:'من يعيش في الخارج.', f:'<u>people who live abroad</u>'},
        {p:'Adjusting to a new culture involves the food, language, and:', o:['daily life','sports only','money only'], a:0, w:'الحياة اليومية.', f:'<u>daily life</u>'},
        {p:'Getting depressed and homesick is a ___ reaction.', o:['normal','strange','wrong'], a:0, w:'طبيعيّ.', f:'a <u>normal</u> reaction'},
        {p:'Who first used the term “culture shock”?', o:['Kalervo Oberg','a doctor','a king'], a:0, w:'أوبرغ.', f:'<u>Kalervo Oberg</u>'}
      ]},
      { type:'choice', name:'المراحل', hint:'خمس مراحل', qs:[
        {p:'In what year was the term first used?', o:['1954','1854','2004'], a:0, w:'١٩٥٤.', f:'<u>1954</u>'},
        {p:'How many stages of culture shock are there?', o:['five','two','ten'], a:0, w:'خمس.', f:'<u>five</u>'},
        {p:'The first phase is full of ___ about the new place.', o:['excitement','anger','boredom'], a:0, w:'الحماس.', f:'<u>excitement</u>'},
        {p:'The last phase is ___ culture shock (returning home).', o:['reverse','first','no'], a:0, w:'صدمةُ العودة.', f:'<u>reverse</u> culture shock'}
      ]},
      { type:'choice', name:'صحّ أم خطأ', hint:'True / False', qs:[
        {p:'T/F: Only lazy people get culture shock.', o:['False','True'], a:0, w:'بل الجميعُ تقريبًا.', f:'<u>False</u>'},
        {p:'T/F: Feeling homesick is a normal reaction.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'T/F: The term was created by Kalervo Oberg.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'T/F: Reverse culture shock happens when you go home.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'}
      ]},
      { type:'gap', name:'أكمل من النصّ', hint:'اختر الكلمة المناسبة', qs:[
        {p:'People who live ___ often get culture shock.', o:['abroad','at home','asleep'], a:0, w:'في الخارج.', f:'live <u>abroad</u>'},
        {p:'The term was first used in ___.', o:['1954','1854','1994'], a:0, w:'١٩٥٤.', f:'<u>1954</u>'},
        {p:'There are ___ stages of culture shock.', o:['five','two','nine'], a:0, w:'خمس.', f:'<u>five</u>'},
        {p:'The last stage is ___ culture shock.', o:['reverse','first','no'], a:0, w:'العودة.', f:'<u>reverse</u>'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'People who live ___ get culture shock.', ask:'أكمل', o:['abroad','at home'], a:0, w:'في الخارج.', f:'<u>abroad</u>'},
        {p:'Homesickness is a ___ reaction.', ask:'اختر', o:['normal','strange'], a:0, w:'طبيعيّ.', f:'<u>normal</u>'},
        {p:'The term was used by ___.', ask:'اختر', o:['Oberg','a king'], a:0, w:'أوبرغ.', f:'<u>Oberg</u>'},
        {p:'First used in ___.', ask:'اختر', o:['1954','1854'], a:0, w:'١٩٥٤.', f:'<u>1954</u>'},
        {p:'There are ___ stages.', ask:'اختر', o:['five','ten'], a:0, w:'خمس.', f:'<u>five</u>'},
        {p:'First phase = ___.', ask:'اختر', o:['excitement','anger'], a:0, w:'الحماس.', f:'<u>excitement</u>'},
        {p:'Last phase = ___ culture shock.', ask:'أكمل', o:['reverse','first'], a:0, w:'العودة.', f:'<u>reverse</u>'},
        {p:'T/F: Homesickness is normal.', ask:'صحّ/خطأ', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'Adjusting involves food, language, and ___.', ask:'اختر', o:['daily life','sports'], a:0, w:'الحياة اليومية.', f:'<u>daily life</u>'}
      ]}
    ]
  };
})();
