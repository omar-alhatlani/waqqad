/* ============================================================
   Lesson: Reading — What Did You Do Last Week?
   English · Super Goal 1 · Unit 16 (What Did You Do Last Week?) · صفحة ١٤٢
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U16_READ'] = {
    id:'EN_SG1_U16_READ',
    title:'Reading — What Did You Do Last Week?',
    lang:'en',
    rule:{
      tag:'Reading',
      title:'What Did You Do Last Week?',
      intro:'اقرأْ ما فعله الطلابُ الأسبوعَ الماضي، ثمّ أجِب عن الأسئلة.',
      examples:[
        'Omar: We had a great time on Saturday. We went to a friend’s house, played video games, and watched a car race. Then we went to the zoo.',
        'Ahmed: This was a good week. I presented my project in class, and everyone liked it. On Thursday I played football, and I bought a new smartphone.',
        'Saeed: On Thursday afternoon I went to the art museum, and on Saturday my brothers and I drove to the beach to play beach volleyball. Then we ate lunch at a restaurant.',
        'Imad: No, I stayed home, studied for the science test, and cleaned out my closet. I also spent time searching for information on the Internet.',
        'Imad needed to finish his assignment for today.'
      ],
      trick:'كلٌّ فعل شيئًا: عمر (ألعاب وسباق وحديقة حيوان) · أحمد (عرض مشروع وكرة قدم وهاتف) · سعيد (متحف وكرة طائرة شاطئية) · عماد (بقي في البيت وذاكر ورتّب).'
    },
    stages:[
      { type:'choice', name:'من فعل ماذا؟', hint:'اربطِ الطالبَ بنشاطه', qs:[
        {p:'Who went to the zoo?', o:['Omar','Imad','Ahmed'], a:0, w:'عمر.', f:'<u>Omar</u>'},
        {p:'Who presented a project in class?', o:['Ahmed','Saeed','Omar'], a:0, w:'أحمد.', f:'<u>Ahmed</u>'},
        {p:'Who went to the art museum?', o:['Saeed','Omar','Imad'], a:0, w:'سعيد.', f:'<u>Saeed</u>'},
        {p:'Who stayed home and studied?', o:['Imad','Ahmed','Saeed'], a:0, w:'عماد.', f:'<u>Imad</u>'}
      ]},
      { type:'choice', name:'تفاصيل', hint:'ماذا فعلوا؟', qs:[
        {p:'Ahmed bought a new ___.', o:['smartphone','bike','car'], a:0, w:'هاتف ذكيّ.', f:'<u>smartphone</u>'},
        {p:'Saeed and his brothers played beach ___.', o:['volleyball','chess','football'], a:0, w:'كرة طائرة.', f:'<u>volleyball</u>'},
        {p:'Imad studied for the ___ test.', o:['science','history','math'], a:0, w:'العلوم.', f:'<u>science</u>'},
        {p:'Omar watched a ___ race.', o:['car','horse','boat'], a:0, w:'سيّارات.', f:'<u>car</u>'}
      ]},
      { type:'choice', name:'صحّ أم خطأ', hint:'True / False', qs:[
        {p:'T/F: Omar stayed at home on Saturday.', o:['False','True'], a:0, w:'بل خرج ولعب وذهب للحديقة.', f:'<u>False</u>'},
        {p:'T/F: Ahmed was pleased with his presentation.', o:['True','False'], a:0, w:'نعم، أعجب الجميع.', f:'<u>True</u>'},
        {p:'T/F: Imad needed to finish an assignment.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'T/F: Saeed drove to the beach.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'}
      ]},
      { type:'gap', name:'أكمل من النصّ', hint:'اختر الفعل الماضي المناسب', qs:[
        {p:'Omar ___ to the zoo.', o:['went','goes','go'], a:0, w:'ماضٍ شاذّ.', f:'<u>went</u>'},
        {p:'Ahmed ___ a new smartphone.', o:['bought','buys','buy'], a:0, w:'ماضٍ شاذّ.', f:'<u>bought</u>'},
        {p:'Imad ___ home and studied.', o:['stayed','stays','stay'], a:0, w:'ماضٍ منتظم.', f:'<u>stayed</u>'},
        {p:'They ___ lunch at a restaurant.', o:['ate','eat','eats'], a:0, w:'ماضٍ شاذّ.', f:'<u>ate</u>'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'Went to the zoo →', ask:'من؟', o:['Omar','Imad'], a:0, w:'عمر.', f:'<u>Omar</u>'},
        {p:'Presented a project →', ask:'من؟', o:['Ahmed','Saeed'], a:0, w:'أحمد.', f:'<u>Ahmed</u>'},
        {p:'Went to the museum →', ask:'من؟', o:['Saeed','Omar'], a:0, w:'سعيد.', f:'<u>Saeed</u>'},
        {p:'Stayed home and studied →', ask:'من؟', o:['Imad','Ahmed'], a:0, w:'عماد.', f:'<u>Imad</u>'},
        {p:'Ahmed bought a ___.', ask:'اختر', o:['smartphone','bike'], a:0, w:'هاتف.', f:'<u>smartphone</u>'},
        {p:'Saeed played beach ___.', ask:'اختر', o:['volleyball','chess'], a:0, w:'كرة طائرة.', f:'<u>volleyball</u>'},
        {p:'Omar ___ to the zoo.', ask:'أكمل', o:['went','goes'], a:0, w:'ماضٍ.', f:'<u>went</u>'},
        {p:'T/F: Ahmed was pleased with his project.', ask:'صحّ/خطأ', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'Imad studied for the ___ test.', ask:'اختر', o:['science','math'], a:0, w:'العلوم.', f:'<u>science</u>'}
      ]}
    ]
  };
})();
