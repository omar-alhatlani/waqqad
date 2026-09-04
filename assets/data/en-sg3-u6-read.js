/* ============================================================
   Lesson: Reading — Do You Know Where This Place Is?
   English · Super Goal 3 · Unit 6 (Do You Know Where It Is?) · صفحة ٥٨
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U6_READ'] = {
    id:'EN_SG3_U6_READ',
    title:'Reading — Do You Know Where This Place Is?',
    lang:'en',
    rule:{
      tag:'Reading',
      title:'Do You Know Where This Place Is?',
      intro:'اقرأِ الأوصافَ ثمّ خمّنِ المدينة. النصُّ يقارن جودةَ الحياة في مدنٍ مختلفة.',
      examples:[
        'Place A (Japan): The public transportation system is the most efficient in the world. Bullet trains travel at 300 km/h and are extremely punctual.',
        'Place B (Hong Kong): The city is one of the safest in the world. Its crime rate is roughly the same as Singapore’s, but lower than Tokyo’s and Toronto’s.',
        'Place C (Cambridge): Home to one of the oldest and largest universities. It has many green areas, and a quarter of the population cycles around the town.',
        'Place D (Mexico City): It has the worst traffic in the world — worse than Sao Paulo. The average commuter spends four hours in traffic per day.'
      ],
      trick:'قارِنِ المدن بمؤشّرات جودة الحياة: النقل (اليابان)، الأمان (هونغ كونغ)، المساحات الخضراء (كامبريدج)، الازدحام (مكسيكو سيتي).'
    },
    stages:[
      { type:'choice', name:'أيّ مدينة؟', hint:'اربطِ الوصف بالمدينة', qs:[
        {p:'The most efficient public transportation and bullet trains →', o:['Japan','Mexico City','Hong Kong'], a:0, w:'اليابان.', f:'<u>Japan</u>'},
        {p:'One of the safest cities, low crime rate →', o:['Hong Kong','Mexico City','Cambridge'], a:0, w:'هونغ كونغ.', f:'<u>Hong Kong</u>'},
        {p:'Old university, green areas, people cycle →', o:['Cambridge','Japan','Hong Kong'], a:0, w:'كامبريدج.', f:'<u>Cambridge</u>'},
        {p:'The worst traffic in the world →', o:['Mexico City','Japan','Cambridge'], a:0, w:'مكسيكو سيتي.', f:'<u>Mexico City</u>'}
      ]},
      { type:'choice', name:'تفاصيل', hint:'من النصّ', qs:[
        {p:'The bullet trains in Japan travel at about:', o:['300 km/h','100 km/h','30 km/h'], a:0, w:'٣٠٠ كم/س.', f:'<u>300 km/h</u>'},
        {p:'Hong Kong’s crime rate is similar to:', o:['Singapore’s','Tokyo’s','Mexico City’s'], a:0, w:'سنغافورة.', f:'<u>Singapore’s</u>'},
        {p:'In Cambridge, a quarter of people ___ around town.', o:['cycle','fly','swim'], a:0, w:'يركبون الدراجات.', f:'<u>cycle</u>'},
        {p:'An average Mexico City commuter spends ___ in traffic daily.', o:['four hours','one hour','ten minutes'], a:0, w:'أربع ساعات.', f:'<u>four hours</u>'}
      ]},
      { type:'choice', name:'صحّ أم خطأ', hint:'True / False', qs:[
        {p:'T/F: Japan’s trains are slow and often late.', o:['False','True'], a:0, w:'بل سريعةٌ ودقيقة.', f:'<u>False</u>'},
        {p:'T/F: Hong Kong is one of the safest cities.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'T/F: Cambridge has a very new, small university.', o:['False','True'], a:0, w:'بل قديمةٌ وكبيرة.', f:'<u>False</u>'},
        {p:'T/F: Mexico City has better traffic than Sao Paulo.', o:['False','True'], a:0, w:'بل أسوأ.', f:'<u>False</u>'}
      ]},
      { type:'gap', name:'أكمل من النصّ', hint:'اختر الكلمة المناسبة', qs:[
        {p:'Japan’s trains are extremely ___.', o:['punctual','late','slow'], a:0, w:'دقيقة.', f:'<u>punctual</u>'},
        {p:'Hong Kong has a low ___ rate.', o:['crime','rain','traffic'], a:0, w:'الجريمة.', f:'low <u>crime</u> rate'},
        {p:'Cambridge has many ___ areas.', o:['green','gray','gold'], a:0, w:'خضراء.', f:'<u>green</u> areas'},
        {p:'Mexico City has the ___ traffic in the world.', o:['worst','best','least'], a:0, w:'الأسوأ.', f:'the <u>worst</u> traffic'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'Best public transportation →', ask:'اختر', o:['Japan','Mexico City'], a:0, w:'اليابان.', f:'<u>Japan</u>'},
        {p:'Safest city →', ask:'اختر', o:['Hong Kong','Cambridge'], a:0, w:'هونغ كونغ.', f:'<u>Hong Kong</u>'},
        {p:'Old university & cycling →', ask:'اختر', o:['Cambridge','Japan'], a:0, w:'كامبريدج.', f:'<u>Cambridge</u>'},
        {p:'Worst traffic →', ask:'اختر', o:['Mexico City','Hong Kong'], a:0, w:'مكسيكو سيتي.', f:'<u>Mexico City</u>'},
        {p:'Bullet trains travel at ___.', ask:'اختر', o:['300 km/h','30 km/h'], a:0, w:'٣٠٠.', f:'<u>300 km/h</u>'},
        {p:'Japan’s trains are ___.', ask:'أكمل', o:['punctual','late'], a:0, w:'دقيقة.', f:'<u>punctual</u>'},
        {p:'Cambridge has many ___ areas.', ask:'اختر', o:['green','gray'], a:0, w:'خضراء.', f:'<u>green</u>'},
        {p:'A Mexico City commuter: ___ hours in traffic.', ask:'اختر', o:['four','one'], a:0, w:'أربع.', f:'<u>four</u>'},
        {p:'T/F: Hong Kong is very safe.', ask:'صحّ/خطأ', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'}
      ]}
    ]
  };
})();
