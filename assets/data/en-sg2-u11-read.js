/* ============================================================
   Lesson: Reading — Vision 2030: Building a Brighter Future
   English · Super Goal 2 · Unit 11 (There's No Comparison) · صفحة ٩٩
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U11_READ'] = {
    id:'EN_SG2_U11_READ',
    title:'Reading — Vision 2030',
    lang:'en',
    rule:{
      tag:'Reading',
      title:'Vision 2030: A Brighter Future for All',
      intro:'اقرأْ عن رؤية المملكة ٢٠٣٠ وما تحمله من تطوّر، ثمّ أجِب.',
      examples:[
        'The Kingdom of Saudi Arabia has a great amount of natural resources, such as oil, gold, phosphate, and uranium. But most importantly, it is blessed with the strength and ambition of its people.',
        'Telecommunications and information technology will be developed, making it easier for people to communicate and access information.',
        'Families will receive support to raise their children according to Islamic values. There will be more libraries, galleries, and museums.',
        'Health care and education will be available to all citizens, making their lives happier and more secure.',
        'The Kingdom’s strategic position will make it an international trade and transportation center connecting Africa, Asia, and Europe.'
      ],
      trick:'رؤية ٢٠٣٠: بناءُ مستقبلٍ أفضل عبر التقنية والتعليم والصحّة والثقافة، والاستفادةِ من موارد المملكة وموقعِها الاستراتيجيّ وطاقةِ شبابها.'
    },
    stages:[
      { type:'choice', name:'الفهم العام', hint:'الموارد والناس', qs:[
        {p:'Some natural resources of the Kingdom are oil, gold, and:', o:['phosphate','coffee','rice'], a:0, w:'الفوسفات.', f:'<u>phosphate</u>'},
        {p:'Most importantly, the Kingdom is blessed with:', o:['its people','its cars','the weather'], a:0, w:'شعبُها.', f:'<u>its people</u>'},
        {p:'What will be developed to help communication?', o:['technology','only roads','nothing'], a:0, w:'التقنية.', f:'<u>technology</u>'},
        {p:'Families will raise their children according to:', o:['Islamic values','no rules','other countries'], a:0, w:'القيم الإسلامية.', f:'<u>Islamic values</u>'}
      ]},
      { type:'choice', name:'الخدمات', hint:'الصحّة والتعليم والثقافة', qs:[
        {p:'Health care and education will be available to:', o:['all citizens','a few people','no one'], a:0, w:'كلّ المواطنين.', f:'<u>all citizens</u>'},
        {p:'There will be more libraries, galleries, and:', o:['museums','deserts','factories only'], a:0, w:'متاحف.', f:'<u>museums</u>'},
        {p:'The Kingdom will connect Africa, Asia, and:', o:['Europe','Antarctica','the moon'], a:0, w:'أوروبا.', f:'<u>Europe</u>'},
        {p:'A healthy economy will attract:', o:['investors','tourists only','no one'], a:0, w:'المستثمرين.', f:'<u>investors</u>'}
      ]},
      { type:'choice', name:'صحّ أم خطأ', hint:'True / False', qs:[
        {p:'T/F: The Kingdom has many natural resources.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'T/F: Education will only be for a few people.', o:['False','True'], a:0, w:'بل لكلّ المواطنين.', f:'<u>False</u>'},
        {p:'T/F: The Kingdom’s position is strategic for trade.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'T/F: The vision ignores Islamic values.', o:['False','True'], a:0, w:'بل تُبنى عليها.', f:'<u>False</u>'}
      ]},
      { type:'gap', name:'أكمل من النصّ', hint:'اختر الكلمة المناسبة', qs:[
        {p:'The Kingdom is blessed with the ambition of its ___.', o:['people','oil','cars'], a:0, w:'شعبها.', f:'its <u>people</u>'},
        {p:'___ will be available to all citizens.', o:['Health care','Traffic','Noise'], a:0, w:'الرعاية الصحّية.', f:'<u>Health care</u>'},
        {p:'The Kingdom will be a trade and ___ center.', o:['transportation','sports','music'], a:0, w:'النقل.', f:'<u>transportation</u>'},
        {p:'Families raise children by Islamic ___.', o:['values','games','prices'], a:0, w:'القيم.', f:'<u>values</u>'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'A resource: oil, gold, ___.', ask:'أكمل', o:['phosphate','rice'], a:0, w:'الفوسفات.', f:'<u>phosphate</u>'},
        {p:'Most important blessing: its ___.', ask:'اختر', o:['people','cars'], a:0, w:'شعبها.', f:'<u>people</u>'},
        {p:'___ will be developed for communication.', ask:'أكمل', o:['Technology','Deserts'], a:0, w:'التقنية.', f:'<u>Technology</u>'},
        {p:'Children raised by Islamic ___.', ask:'أكمل', o:['values','prices'], a:0, w:'القيم.', f:'<u>values</u>'},
        {p:'Health care for ___ citizens.', ask:'اختر', o:['all','few'], a:0, w:'الجميع.', f:'<u>all</u>'},
        {p:'More libraries, galleries, and ___.', ask:'أكمل', o:['museums','farms'], a:0, w:'متاحف.', f:'<u>museums</u>'},
        {p:'Connects Africa, Asia, and ___.', ask:'أكمل', o:['Europe','the moon'], a:0, w:'أوروبا.', f:'<u>Europe</u>'},
        {p:'A healthy economy attracts ___.', ask:'اختر', o:['investors','no one'], a:0, w:'المستثمرين.', f:'<u>investors</u>'},
        {p:'T/F: The Kingdom’s position is strategic.', ask:'صحّ/خطأ', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'}
      ]}
    ]
  };
})();
