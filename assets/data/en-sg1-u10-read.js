/* ============================================================
   Lesson: Reading — School Clubs
   English · Super Goal 1 · Unit 10 (What's School Like?) · صفحة ٩٠
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U10_READ'] = {
    id:'EN_SG1_U10_READ',
    title:'Reading — School Clubs',
    lang:'en',
    rule:{
      tag:'Reading',
      title:'School Clubs',
      intro:'اقرأْ عن الأندية المدرسية، ثمّ أجِب عن الأسئلة.',
      examples:[
        'The Science Club: Students organize their own experiments. Members say: “Science is cool.”',
        'Archaeology Club: Students learn how to excavate findings and organize expeditions in the desert every spring.',
        'Poetry Club: Students learn and recite traditional and modern poetry, and organize poetry readings.',
        'Computer Club: Members learn about and use many computer programs — from spreadsheets to games. Some even design their own programs.',
        'Drama Club: Members learn the basics of acting and act in plays. Football Club: Members practice and compete for the school team.'
      ],
      trick:'كلُّ نادٍ ونشاطُه: العلوم (تجارب) · الآثار (تنقيب) · الشِّعر (إلقاء) · الحاسوب (برامج) · المسرح (تمثيل) · كرة القدم (منافسة).'
    },
    stages:[
      { type:'choice', name:'أيّ نادٍ؟', hint:'اربطِ النشاط بالنادي', qs:[
        {p:'Students organize their own experiments in the:', o:['Science Club','Poetry Club','Drama Club'], a:0, w:'نادي العلوم.', f:'<u>Science Club</u>'},
        {p:'Students learn to excavate findings in the:', o:['Archaeology Club','Computer Club','Football Club'], a:0, w:'نادي الآثار.', f:'<u>Archaeology Club</u>'},
        {p:'Members learn the basics of acting in the:', o:['Drama Club','Science Club','Poetry Club'], a:0, w:'نادي المسرح.', f:'<u>Drama Club</u>'},
        {p:'Members practice and compete for the school team in the:', o:['Football Club','Computer Club','Poetry Club'], a:0, w:'نادي كرة القدم.', f:'<u>Football Club</u>'}
      ]},
      { type:'choice', name:'تفاصيل', hint:'ماذا يفعلون؟', qs:[
        {p:'The Archaeology Club organizes expeditions every:', o:['spring','winter night','morning'], a:0, w:'كلّ ربيع.', f:'every <u>spring</u>'},
        {p:'The Poetry Club members recite ___ poetry.', o:['traditional and modern','English only','no'], a:0, w:'تقليديٌّ وحديث.', f:'<u>traditional and modern</u>'},
        {p:'In the Computer Club, some students design their own:', o:['programs','clothes','food'], a:0, w:'برامج.', f:'<u>programs</u>'},
        {p:'The Science Club members organize their own:', o:['experiments','trips abroad','games'], a:0, w:'تجارب.', f:'<u>experiments</u>'}
      ]},
      { type:'choice', name:'صحّ أم خطأ', hint:'True / False', qs:[
        {p:'T/F: The Drama Club is about acting in plays.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'T/F: The Football Club members recite poetry.', o:['False','True'], a:0, w:'بل يتنافسون في كرة القدم.', f:'<u>False</u>'},
        {p:'T/F: The Computer Club uses many programs.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'T/F: The Archaeology Club digs in the desert.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'}
      ]},
      { type:'gap', name:'أكمل من النصّ', hint:'اختر الكلمة المناسبة', qs:[
        {p:'The Science Club members organize their own ___.', o:['experiments','poems','games'], a:0, w:'تجارب.', f:'<u>experiments</u>'},
        {p:'The Poetry Club members ___ poetry.', o:['recite','sell','drive'], a:0, w:'يلقون.', f:'<u>recite</u>'},
        {p:'The Drama Club members learn ___.', o:['acting','cooking','flying'], a:0, w:'التمثيل.', f:'<u>acting</u>'},
        {p:'The Football Club members ___ for the school team.', o:['compete','cook','write'], a:0, w:'يتنافسون.', f:'<u>compete</u>'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'experiments →', ask:'النادي', o:['Science Club','Poetry Club'], a:0, w:'العلوم.', f:'<u>Science Club</u>'},
        {p:'excavate findings →', ask:'النادي', o:['Archaeology Club','Drama Club'], a:0, w:'الآثار.', f:'<u>Archaeology Club</u>'},
        {p:'acting in plays →', ask:'النادي', o:['Drama Club','Football Club'], a:0, w:'المسرح.', f:'<u>Drama Club</u>'},
        {p:'compete for the team →', ask:'النادي', o:['Football Club','Computer Club'], a:0, w:'كرة القدم.', f:'<u>Football Club</u>'},
        {p:'Archaeology expeditions are every ___.', ask:'اختر', o:['spring','night'], a:0, w:'ربيع.', f:'<u>spring</u>'},
        {p:'Poetry Club recites ___ poetry.', ask:'اختر', o:['traditional and modern','no'], a:0, w:'تقليديٌّ وحديث.', f:'<u>traditional and modern</u>'},
        {p:'Computer Club: some design their own ___.', ask:'أكمل', o:['programs','cars'], a:0, w:'برامج.', f:'<u>programs</u>'},
        {p:'T/F: Drama Club is about acting.', ask:'صحّ/خطأ', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'Poetry Club members ___ poetry.', ask:'أكمل', o:['recite','drive'], a:0, w:'يلقون.', f:'<u>recite</u>'}
      ]}
    ]
  };
})();
