/* ============================================================
   Lesson: Reading — You Look Just Like Me!
   English · Super Goal 3 · Unit 7 (It's a Good Deal, Isn't It?) · صفحة ٨٠
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U7_READ'] = {
    id:'EN_SG3_U7_READ',
    title:'Reading — You Look Just Like Me!',
    lang:'en',
    rule:{
      tag:'Reading',
      title:'You Look Just Like Me!',
      intro:'اقرأْ عن توائمَ التقوا صدفةً، ثمّ أجِب عن الأسئلة.',
      examples:[
        'Three brothers—triplets—met for the first time at the age of 19. Bobby Shafran started a new semester at a college where his twin Eddy had studied.',
        'Another student confused Bobby with Eddy and realized the boys were probably brothers. The two teens were in fact twins, born at the same time, but grew up in different families.',
        'After the story was in the newspapers, a third boy, David Kellman, realized he was their brother too. So the twins became triplets!',
        'Another famous case: Daphne and Barbara met at age 39. Both wore a beige dress; both liked coffee cold and black; both had ankle problems. They were called the “Giggle” twins.',
        'Scientists study twins to answer the question: What’s more important — heredity or environment?'
      ],
      trick:'الفكرة: توائمُ نشأوا منفصلين لكنّهم متشابهون جدًّا، ما يثير السؤالَ العلميّ: الوراثةُ أهمُّ أم البيئة؟'
    },
    stages:[
      { type:'choice', name:'الفهم العام', hint:'التوائم', qs:[
        {p:'The triplets met for the first time at age:', o:['19','5','39'], a:0, w:'التاسعة عشرة.', f:'<u>19</u>'},
        {p:'How did Bobby and Eddy first meet?', o:['a student confused them','at a party','online'], a:0, w:'طالبٌ خلط بينهما.', f:'<u>a student confused them</u>'},
        {p:'How did the twins become triplets?', o:['a third brother read the news','they adopted one','by mistake'], a:0, w:'أخٌ ثالثٌ عرفهم من الصحف.', f:'<u>a third brother read the news</u>'},
        {p:'The Giggle twins met at age:', o:['39','19','9'], a:0, w:'التاسعة والثلاثين.', f:'<u>39</u>'}
      ]},
      { type:'choice', name:'التشابهات', hint:'Giggle twins', qs:[
        {p:'What did the Giggle twins both wear?', o:['a beige dress','a red hat','blue jeans'], a:0, w:'فستانٌ بيج.', f:'<u>a beige dress</u>'},
        {p:'How did they both like their coffee?', o:['cold and black','hot with milk','with sugar'], a:0, w:'باردةً سوداء.', f:'<u>cold and black</u>'},
        {p:'Why were they called “Giggle” twins?', o:['they laughed a lot','they were quiet','they were sad'], a:0, w:'كثيرتا الضحك.', f:'<u>they laughed a lot</u>'},
        {p:'Scientists study twins to compare heredity and:', o:['environment','money','weather'], a:0, w:'البيئة.', f:'<u>environment</u>'}
      ]},
      { type:'choice', name:'المفردات', hint:'من النصّ', qs:[
        {p:'“triplets” means:', o:['three children born together','two brothers','a coincidence'], a:0, w:'ثلاثةُ أبناءٍ في وقتٍ واحد.', f:'<u>three children born together</u>'},
        {p:'“to confuse” someone means to:', o:['think they are someone else','help them','forget them'], a:0, w:'يخلط بينهم.', f:'<u>think they are someone else</u>'},
        {p:'“heredity” is about traits from your:', o:['parents','friends','school'], a:0, w:'الوراثة من الوالدين.', f:'from your <u>parents</u>'},
        {p:'“coincidence” means things happen:', o:['by chance','on purpose','never'], a:0, w:'بالصدفة.', f:'<u>by chance</u>'}
      ]},
      { type:'gap', name:'أكمل من النصّ', hint:'اختر الكلمة المناسبة', qs:[
        {p:'The brothers grew up in different ___.', o:['families','schools','cities only'], a:0, w:'عائلات.', f:'different <u>families</u>'},
        {p:'A third brother realized it after reading the ___.', o:['newspapers','books','signs'], a:0, w:'الصحف.', f:'the <u>newspapers</u>'},
        {p:'Scientists ask: heredity or ___?', o:['environment','money','sport'], a:0, w:'البيئة.', f:'<u>environment</u>'},
        {p:'The Giggle twins both had ___ problems.', o:['ankle','eye','ear'], a:0, w:'الكاحل.', f:'<u>ankle</u>'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'Triplets met at age ___.', ask:'اختر', o:['19','39'], a:0, w:'١٩.', f:'<u>19</u>'},
        {p:'A student ___ Bobby with Eddy.', ask:'أكمل', o:['confused','helped'], a:0, w:'خلط.', f:'<u>confused</u>'},
        {p:'A third brother read the ___.', ask:'أكمل', o:['newspapers','books'], a:0, w:'الصحف.', f:'<u>newspapers</u>'},
        {p:'Giggle twins met at ___.', ask:'اختر', o:['39','19'], a:0, w:'٣٩.', f:'<u>39</u>'},
        {p:'They liked coffee ___.', ask:'اختر', o:['cold and black','hot'], a:0, w:'باردة سوداء.', f:'<u>cold and black</u>'},
        {p:'“triplets” =', ask:'المعنى', o:['three born together','two'], a:0, w:'ثلاثة.', f:'<u>three born together</u>'},
        {p:'They laughed a lot → “___” twins.', ask:'أكمل', o:['Giggle','Quiet'], a:0, w:'الضاحكتان.', f:'<u>Giggle</u>'},
        {p:'Scientists compare heredity and ___.', ask:'أكمل', o:['environment','weather'], a:0, w:'البيئة.', f:'<u>environment</u>'},
        {p:'The brothers grew up in different ___.', ask:'أكمل', o:['families','years'], a:0, w:'عائلات.', f:'<u>families</u>'}
      ]}
    ]
  };
})();
