/* ============================================================
   Lesson: Reading — Lapland: The Land of the Midnight Sun
   English · Super Goal 1 · Unit 4 (Around the World) · صفحة ٣١
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1).
   lang:'en' → المحتوى إنجليزيّ LTR، والشرح بالعربية.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U4_READ'] = {
    id:'EN_SG1_U4_READ',
    title:'Reading — Lapland: The Land of the Midnight Sun',
    lang:'en',
    rule:{
      tag:'النصّ',
      title:'Lapland — The Midnight Sun',
      intro:'اقرأ عن «لابلاند: أرض شمس منتصف الليل» — منطقةٌ باردةٌ في فنلندا قرب الدائرة القطبية، ثم أجب.',
      examples:[
        'Hannun is from Lapland, a region in Finland near the Arctic Circle.',
        'It is very cold. From December to January, it is dark most of the time.',
        'Hannun lives there with family and reindeer.',
        'The main city is Rovaniemi, in the north of Finland.',
        'In summer, the Arctic has light all day — the midnight sun.'
      ],
      trick:'انتبه للاسم <code>Hannun</code>، والمنطقة <code>Lapland</code>، والدولة <code>Finland</code>، والمدينة <code>Rovaniemi</code>.'
    },
    stages:[
      { type:'choice', name:'الفهم', hint:'أجب حسب النصّ', qs:[
        {p:'Where is Hannun from?',        ask:'حسب النصّ', o:['Lapland','Egypt','Spain','Italy'], a:0, w:'<code>I\'m from Lapland.</code>', f:'from Lapland'},
        {p:'Lapland is a region in:',       ask:'حسب النصّ', o:['Finland','France','China','Oman'], a:0, w:'<code>a region in Finland.</code>', f:'in Finland'},
        {p:'The main city of Lapland is:',  ask:'حسب النصّ', o:['Rovaniemi','Riyadh','London','Cairo'], a:0, w:'<code>The main city ... is Rovaniemi.</code>', f:'Rovaniemi'},
        {p:'Lapland is near the:',          ask:'حسب النصّ', o:['Arctic Circle','Red Sea','Alps','desert'], a:0, w:'<code>near the Arctic Circle.</code>', f:'the Arctic Circle'},
        {p:'Hannun lives with family and:', ask:'حسب النصّ', o:['reindeer','camels','horses','cats'], a:0, w:'<code>my family and my reindeer.</code>', f:'reindeer'},
        {p:'The "midnight sun" means light:', ask:'حسب النصّ', o:['all day in summer','at noon','never','only in winter'], a:0, w:'<code>light all day for the whole summer.</code>', f:'all day in summer'}
      ]},
      { type:'choice', name:'صحيح أم خطأ؟', hint:'Yes / No حسب النصّ', qs:[
        {p:'Lapland is very cold.',                 ask:'صحيح أم خطأ؟', o:['Yes','No'], a:0, w:'<code>It\'s very cold.</code>', f:'Yes.'},
        {p:'Lapland is in Egypt.',                  ask:'صحيح أم خطأ؟', o:['No','Yes'], a:0, w:'هي في <b>Finland</b>، لا Egypt.', f:'No — in Finland.'},
        {p:'Hannun lives with reindeer.',           ask:'صحيح أم خطأ؟', o:['Yes','No'], a:0, w:'<code>my family and my reindeer.</code>', f:'Yes.'},
        {p:'Rovaniemi is in the south of Finland.', ask:'صحيح أم خطأ؟', o:['No','Yes'], a:0, w:'هي في <b>north</b> فنلندا.', f:'No — in the north.'},
        {p:'In summer, the Arctic has light all day.', ask:'صحيح أم خطأ؟', o:['Yes','No'], a:0, w:'<code>light all day ... summer.</code>', f:'Yes.'}
      ]},
      { type:'gap', name:'أكمل من النصّ', hint:'اختر الكلمة من النصّ', qs:[
        {p:'Hannun is from ___.',          ask:'أكمل الفراغ', o:['Lapland','Finland','Egypt','Oman'], a:0, w:'<code>from Lapland</code>.', f:'from <u>Lapland</u>.'},
        {p:'Lapland is in ___.',            ask:'أكمل الفراغ', o:['Finland','France','China','Spain'], a:0, w:'<code>in Finland</code>.', f:'in <u>Finland</u>.'},
        {p:'The main city is ___.',          ask:'أكمل الفراغ', o:['Rovaniemi','Riyadh','Rome','Paris'], a:0, w:'<code>Rovaniemi</code>.', f:'the main city is <u>Rovaniemi</u>.'},
        {p:'It is very ___.',                ask:'أكمل الفراغ', o:['cold','hot','big','new'], a:0, w:'<code>very cold</code>.', f:'It is very <u>cold</u>.'},
        {p:'Hannun lives with ___.',         ask:'أكمل الفراغ', o:['reindeer','camels','birds','fish'], a:0, w:'<code>my reindeer</code>.', f:'lives with <u>reindeer</u>.'},
        {p:'Lapland is near the Arctic ___.', ask:'أكمل الفراغ', o:['Circle','Sea','Ocean','Desert'], a:0, w:'<code>the Arctic Circle</code>.', f:'the Arctic <u>Circle</u>.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['Hannun','is','from','Lapland','.'],   w:'الأصل.', f:'Hannun is from Lapland.'},
        {sol:['Lapland','is','in','Finland','.'],     w:'المكان.', f:'Lapland is in Finland.'},
        {sol:['It','is','very','cold','.'],           w:'الطقس.', f:'It is very cold.'},
        {sol:['Where','are','you','from','?'],        w:'سؤالٌ عن الأصل.', f:'Where are you from?'},
        {sol:['The','main','city','is','Rovaniemi','.'], w:'المدينة الرئيسة.', f:'The main city is Rovaniemi.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما فهمته — مختلطًا', final:true, qs:[
        {p:'Where is Hannun from?', ask:'حسب النصّ', o:['Lapland','Egypt'], a:0, w:'<code>from Lapland</code>.', f:'from Lapland'},
        {p:'Lapland is a region in:', ask:'حسب النصّ', o:['Finland','France'], a:0, w:'<code>in Finland</code>.', f:'in Finland'},
        {p:'Lapland is in Egypt.', ask:'صحيح أم خطأ؟', o:['No','Yes'], a:0, w:'هي في Finland.', f:'No.'},
        {p:'The main city is ___.', ask:'أكمل الفراغ', o:['Rovaniemi','Riyadh','Rome','Paris'], a:0, w:'<code>Rovaniemi</code>.', f:'<u>Rovaniemi</u>.'},
        {p:'Hannun lives with family and:', ask:'حسب النصّ', o:['reindeer','camels'], a:0, w:'<code>my reindeer</code>.', f:'reindeer'},
        {sol:['Lapland','is','in','Finland','.'], w:'المكان.', f:'Lapland is in Finland.'},
        {p:'In summer, the Arctic has light all day.', ask:'صحيح أم خطأ؟', o:['Yes','No'], a:0, w:'<code>the midnight sun.</code>', f:'Yes.'},
        {p:'It is very ___.', ask:'أكمل الفراغ', o:['cold','hot','big','new'], a:0, w:'<code>very cold</code>.', f:'very <u>cold</u>.'},
        {p:'Lapland is near the:', ask:'حسب النصّ', o:['Arctic Circle','Red Sea'], a:0, w:'<code>the Arctic Circle</code>.', f:'the Arctic Circle'}
      ]}
    ]
  };
})();
