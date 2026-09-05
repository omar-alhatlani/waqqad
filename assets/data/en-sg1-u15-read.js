/* ============================================================
   Lesson: Reading — Yao Ming
   English · Super Goal 1 · Unit 15 (Then and Now) · صفحة ١٣٨
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U15_READ'] = {
    id:'EN_SG1_U15_READ',
    title:'Reading — Yao Ming',
    lang:'en',
    rule:{
      tag:'Reading',
      title:'Yao Ming',
      intro:'اقرأْ عن لاعب كرة السلّة ياو مينغ، ثمّ أجِب عن الأسئلة.',
      examples:[
        'In China, his nickname is “Little Giant.” In the West, they call him the “Great Wall.”',
        'Yao Ming is 7 feet 6 inches (2.29 meters) tall. He was born on September 12, 1980, in Shanghai, China.',
        'His parents were both basketball players, and they were both very tall.',
        'Yao became a professional player in China, and then he played in the NBA in the United States.',
        'He was a flag-bearer for China at the 2008 Olympic Games in Beijing, and he has many fans around the world.'
      ],
      trick:'ياو مينغ: لاعبُ كرة سلّةٍ صينيّ طويلٌ جدًّا (٢٫٢٩م)، وُلِد ١٩٨٠ في شنغهاي، لعب في الـNBA، وحمل عَلَم الصين في أولمبياد بكين ٢٠٠٨.'
    },
    stages:[
      { type:'choice', name:'الفهم العام', hint:'من هو؟', qs:[
        {p:'Where was Yao Ming born?', o:['Shanghai, China','Tokyo','New York'], a:0, w:'شنغهاي.', f:'<u>Shanghai, China</u>'},
        {p:'When was he born?', o:['1980','1990','1970'], a:0, w:'١٩٨٠.', f:'<u>1980</u>'},
        {p:'What sport does he play?', o:['basketball','football','tennis'], a:0, w:'كرة السلّة.', f:'<u>basketball</u>'},
        {p:'His nickname in China is:', o:['“Little Giant”','“The Rocket”','“The Fox”'], a:0, w:'العملاق الصغير.', f:'“<u>Little Giant</u>”'}
      ]},
      { type:'choice', name:'تفاصيل', hint:'الطول والعائلة', qs:[
        {p:'How tall is Yao Ming?', o:['2.29 meters','1.60 meters','3.0 meters'], a:0, w:'٢٫٢٩م.', f:'<u>2.29 meters</u>'},
        {p:'Were his parents short?', o:['No, they were tall','Yes','We don’t know'], a:0, w:'كانا طويلين.', f:'<u>No, they were tall</u>'},
        {p:'His parents were both:', o:['basketball players','teachers','doctors'], a:0, w:'لاعبَي كرة سلّة.', f:'<u>basketball players</u>'},
        {p:'He later played in the ___ in the United States.', o:['NBA','FIFA','Olympics only'], a:0, w:'دوري الـNBA.', f:'<u>NBA</u>'}
      ]},
      { type:'choice', name:'صحّ أم خطأ', hint:'True / False', qs:[
        {p:'T/F: Yao Ming is very short.', o:['False','True'], a:0, w:'بل طويلٌ جدًّا.', f:'<u>False</u>'},
        {p:'T/F: His parents were basketball players.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'T/F: He was born in the United States.', o:['False','True'], a:0, w:'بل في شنغهاي.', f:'<u>False</u>'},
        {p:'T/F: He has fans around the world.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'}
      ]},
      { type:'gap', name:'أكمل من النصّ', hint:'اختر الكلمة المناسبة', qs:[
        {p:'Yao Ming was ___ in 1980.', o:['born','made','sold'], a:0, w:'وُلِد.', f:'was <u>born</u>'},
        {p:'His parents ___ both tall.', o:['were','was','are'], a:0, w:'كانا (جمع).', f:'<u>were</u> both tall'},
        {p:'His nickname in the West is the “Great ___.”', o:['Wall','Car','Book'], a:0, w:'السور العظيم.', f:'Great <u>Wall</u>'},
        {p:'He played ___ in China and the U.S.', o:['basketball','football','chess'], a:0, w:'كرة السلّة.', f:'<u>basketball</u>'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'Born in ___.', ask:'اختر', o:['Shanghai','Tokyo'], a:0, w:'شنغهاي.', f:'<u>Shanghai</u>'},
        {p:'Born in ___.', ask:'اختر', o:['1980','1970'], a:0, w:'١٩٨٠.', f:'<u>1980</u>'},
        {p:'He plays ___.', ask:'اختر', o:['basketball','tennis'], a:0, w:'كرة السلّة.', f:'<u>basketball</u>'},
        {p:'Chinese nickname: “___ Giant.”', ask:'أكمل', o:['Little','Big'], a:0, w:'العملاق الصغير.', f:'<u>Little</u>'},
        {p:'He is ___ meters tall.', ask:'اختر', o:['2.29','1.60'], a:0, w:'٢٫٢٩.', f:'<u>2.29</u>'},
        {p:'His parents were ___.', ask:'اختر', o:['tall','short'], a:0, w:'طويلين.', f:'<u>tall</u>'},
        {p:'He played in the ___.', ask:'اختر', o:['NBA','FIFA'], a:0, w:'الـNBA.', f:'<u>NBA</u>'},
        {p:'T/F: His parents were basketball players.', ask:'صحّ/خطأ', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'Yao Ming was ___ in 1980.', ask:'أكمل', o:['born','sold'], a:0, w:'وُلِد.', f:'<u>born</u>'}
      ]}
    ]
  };
})();
