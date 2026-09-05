/* ============================================================
   Lesson: Reading — Dear Daughter
   English · Super Goal 2 · Unit 14 (Could You Do Me a Favor?) · صفحة ١٢٩
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U14_READ'] = {
    id:'EN_SG2_U14_READ',
    title:'Reading — Dear Daughter',
    lang:'en',
    rule:{
      tag:'Reading',
      title:'Dear Daughter',
      intro:'اقرأْ رسالةَ الأمّ إلى ابنتها فرح تطلب منها المساعدة، ثمّ أجِب.',
      examples:[
        'Dear Farah, I need you to do me a big favor. There’s been an emergency, and I have to go to the hospital. Your grandmother fell down the stairs.',
        'Your brother is going to drive me there. I didn’t have time to finish preparing the meal, so please make dinner: the chicken is in the fridge — cook it with some rice. Will you also make a salad?',
        'Your father will be home at about 7 o’clock; he’s going to be late because he has a meeting.',
        'Could you also wash Hameed’s football uniform? His team has a big game tomorrow. Please iron your father’s clothes, too.',
        'Tell Mona and Imad to help you wash up, and make sure they do all their homework. Love, Mom.'
      ],
      trick:'الأمُّ ذهبت للمستشفى (طارئ: الجدّة سقطت)، وتركت لفرح قائمةَ مهامّ: العشاء، السلطة، غسل زيّ حمد، كي ملابس الأب، ومساعدة الإخوة على واجباتهم.'
    },
    stages:[
      { type:'choice', name:'الفهم العام', hint:'الطارئ', qs:[
        {p:'What is the emergency?', o:['grandmother fell down the stairs','a fire','a lost cat'], a:0, w:'الجدّة سقطت.', f:'<u>grandmother fell</u>'},
        {p:'Where does the mother have to go?', o:['the hospital','the mall','work'], a:0, w:'المستشفى.', f:'the <u>hospital</u>'},
        {p:'Who is going to drive the mother there?', o:['her son (Farah’s brother)','the father','a taxi'], a:0, w:'أخو فرح.', f:'<u>her son</u>'},
        {p:'What is Farah asked to cook?', o:['chicken and rice','pizza','soup only'], a:0, w:'دجاجٌ وأرزّ.', f:'<u>chicken and rice</u>'}
      ]},
      { type:'choice', name:'المهامّ', hint:'ماذا طلبت الأمّ؟', qs:[
        {p:'What should Farah also make?', o:['a salad','a cake','bread'], a:0, w:'سلطة.', f:'a <u>salad</u>'},
        {p:'Whose football uniform should Farah wash?', o:["Hameed's",'her own','the father’s'], a:0, w:'زيُّ حمد.', f:"<u>Hameed's</u>"},
        {p:'What should Farah iron?', o:['her father’s clothes','the chicken','the car'], a:0, w:'ملابس الأب.', f:"her <u>father's clothes</u>"},
        {p:'What time will the father be home?', o:['about 7','about 10','at noon'], a:0, w:'نحو السابعة.', f:'about <u>7</u>'}
      ]},
      { type:'choice', name:'صحّ أم خطأ', hint:'True / False', qs:[
        {p:'T/F: The grandmother is fine and healthy.', o:['False','True'], a:0, w:'بل سقطت وربما كُسِر وركها.', f:'<u>False</u>'},
        {p:'T/F: The father will be late because of a meeting.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'T/F: Mona and Imad should help wash up.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'T/F: Farah has to do all the work with no help.', o:['False','True'], a:0, w:'بل يساعدها الإخوة.', f:'<u>False</u>'}
      ]},
      { type:'gap', name:'أكمل من النصّ', hint:'اختر الكلمة المناسبة', qs:[
        {p:'The mother needs Farah to do her a ___.', o:['favor','game','call'], a:0, w:'معروف.', f:'a <u>favor</u>'},
        {p:'There’s been an ___.', o:['emergency','offer','iron'], a:0, w:'طارئة.', f:'an <u>emergency</u>'},
        {p:'Please ___ dinner for the family.', o:['make','sell','drive'], a:0, w:'حضّري.', f:'<u>make</u> dinner'},
        {p:'Please ___ your father’s clothes.', o:['iron','cook','wash the car with'], a:0, w:'اكوي.', f:'<u>iron</u>'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'The emergency: grandmother ___.', ask:'اختر', o:['fell','traveled'], a:0, w:'سقطت.', f:'<u>fell</u>'},
        {p:'Mother goes to the ___.', ask:'اختر', o:['hospital','mall'], a:0, w:'المستشفى.', f:'<u>hospital</u>'},
        {p:'Cook ___ and rice.', ask:'أكمل', o:['chicken','fish'], a:0, w:'دجاج.', f:'<u>chicken</u>'},
        {p:'Also make a ___.', ask:'أكمل', o:['salad','cake'], a:0, w:'سلطة.', f:'<u>salad</u>'},
        {p:"Wash ___ football uniform.", ask:'اختر', o:["Hameed's","her own"], a:0, w:'زيّ حمد.', f:"<u>Hameed's</u>"},
        {p:'Iron the ___ clothes.', ask:'اختر', o:["father's","brother's"], a:0, w:'الأب.', f:"<u>father's</u>"},
        {p:'Father home at about ___.', ask:'اختر', o:['7','10'], a:0, w:'السابعة.', f:'<u>7</u>'},
        {p:'T/F: Mona and Imad help.', ask:'صحّ/خطأ', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'There’s been an ___.', ask:'أكمل', o:['emergency','offer'], a:0, w:'طارئة.', f:'<u>emergency</u>'}
      ]}
    ]
  };
})();
