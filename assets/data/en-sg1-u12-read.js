/* ============================================================
   Lesson: Reading — Places to Visit in Saudi Arabia (Vision 2030)
   English · Super Goal 1 · Unit 12 (What Can You Do There?) · صفحة ١٠٦
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U12_READ'] = {
    id:'EN_SG1_U12_READ',
    title:'Reading — Places to Visit in Saudi Arabia',
    lang:'en',
    rule:{
      tag:'Reading',
      title:'Places to Visit in Saudi Arabia',
      intro:'اقرأْ عن رؤية المملكة لجذب الزوّار، ثمّ أجِب عن الأسئلة.',
      examples:[
        'Saudi Arabia’s future: Our country has many assets. To build a good future, we have a vision to share our strong culture and beautiful environment with citizens, residents, and visitors.',
        'We are building hotels, roads, and museums to bring visitors to see our country and history.',
        'Environmental tourism: In the mountains of Al-Baha we protect our forests, parks, and reserves so everyone can enjoy nature without harming it.',
        'Family beach holidays: We are developing Al-Uquair as a beach resort with outdoor activities such as a water park and the Ocean World Center.',
        'Cultural tourism: At Al-Ula, we are making the world’s largest open-air museum, where visitors can see historical sites and traditional art.'
      ],
      trick:'ثلاثةُ أنواع سياحة: البيئية (Al-Baha، حماية الطبيعة) · شاطئية عائلية (Al-Uquair، منتجع) · ثقافية (Al-Ula، أكبر متحف مفتوح).'
    },
    stages:[
      { type:'choice', name:'الفهم العام', hint:'الرؤية والأماكن', qs:[
        {p:'What does Saudi Arabia want to share with visitors?', o:['its culture and environment','only oil','only sports'], a:0, w:'الثقافة والبيئة.', f:'<u>culture and environment</u>'},
        {p:'What are they building to bring visitors?', o:['hotels, roads, and museums','only walls','nothing'], a:0, w:'فنادق وطرق ومتاحف.', f:'<u>hotels, roads, and museums</u>'},
        {p:'Environmental tourism is in the mountains of:', o:['Al-Baha','Al-Ula','Jeddah'], a:0, w:'الباحة.', f:'<u>Al-Baha</u>'},
        {p:'The beach resort is being developed at:', o:['Al-Uquair','Al-Baha','Al-Ula'], a:0, w:'العقير.', f:'<u>Al-Uquair</u>'}
      ]},
      { type:'choice', name:'تفاصيل', hint:'ماذا في كلّ مكان؟', qs:[
        {p:'At Al-Ula, they are making the world’s largest:', o:['open-air museum','shopping mall','airport'], a:0, w:'أكبر متحف مفتوح.', f:'<u>open-air museum</u>'},
        {p:'Al-Uquair will have a water park and the:', o:['Ocean World Center','Space Center','Book Center'], a:0, w:'مركز عالم المحيطات.', f:'<u>Ocean World Center</u>'},
        {p:'In Al-Baha they protect forests, parks, and:', o:['reserves','malls','factories'], a:0, w:'المحميات.', f:'<u>reserves</u>'},
        {p:'Visitors to Al-Ula can see historical sites and traditional:', o:['art','food only','cars'], a:0, w:'الفنّ التقليديّ.', f:'<u>art</u>'}
      ]},
      { type:'choice', name:'صحّ أم خطأ', hint:'True / False', qs:[
        {p:'T/F: They are building museums to bring visitors.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'T/F: Al-Ula is a beach resort.', o:['False','True'], a:0, w:'بل موقعٌ ثقافيّ (متحف مفتوح).', f:'<u>False</u>'},
        {p:'T/F: In Al-Baha they protect nature.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'T/F: The vision is only for citizens, not visitors.', o:['False','True'], a:0, w:'بل للمواطنين والمقيمين والزوّار.', f:'<u>False</u>'}
      ]},
      { type:'gap', name:'أكمل من النصّ', hint:'اختر الكلمة المناسبة', qs:[
        {p:'They are building hotels and ___.', o:['museums','walls','farms'], a:0, w:'متاحف.', f:'<u>museums</u>'},
        {p:'In Al-Baha, they ___ the forests.', o:['protect','sell','cut'], a:0, w:'يحمون.', f:'<u>protect</u>'},
        {p:'Al-Uquair will be a beach ___.', o:['resort','office','clinic'], a:0, w:'منتجع.', f:'<u>resort</u>'},
        {p:'Al-Ula will have the world’s largest open-air ___.', o:['museum','mall','park'], a:0, w:'متحف.', f:'<u>museum</u>'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'They share culture and ___.', ask:'أكمل', o:['environment','oil'], a:0, w:'البيئة.', f:'<u>environment</u>'},
        {p:'They build hotels, roads, and ___.', ask:'أكمل', o:['museums','walls'], a:0, w:'متاحف.', f:'<u>museums</u>'},
        {p:'Environmental tourism →', ask:'المكان', o:['Al-Baha','Al-Ula'], a:0, w:'الباحة.', f:'<u>Al-Baha</u>'},
        {p:'Beach resort →', ask:'المكان', o:['Al-Uquair','Al-Baha'], a:0, w:'العقير.', f:'<u>Al-Uquair</u>'},
        {p:'Largest open-air museum →', ask:'المكان', o:['Al-Ula','Al-Uquair'], a:0, w:'العلا.', f:'<u>Al-Ula</u>'},
        {p:'Al-Uquair has a water park and the ___.', ask:'اختر', o:['Ocean World Center','Space Center'], a:0, w:'عالم المحيطات.', f:'<u>Ocean World Center</u>'},
        {p:'In Al-Baha they ___ nature.', ask:'أكمل', o:['protect','sell'], a:0, w:'يحمون.', f:'<u>protect</u>'},
        {p:'T/F: Al-Ula is a beach resort.', ask:'صحّ/خطأ', o:['False','True'], a:0, w:'ثقافيّ.', f:'<u>False</u>'},
        {p:'Al-Ula visitors see historical sites and ___.', ask:'أكمل', o:['art','cars'], a:0, w:'الفنّ.', f:'<u>art</u>'}
      ]}
    ]
  };
})();
