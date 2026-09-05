/* ============================================================
   Lesson: Vocabulary — Chores & Free-time Activities
   English · Super Goal 2 · Unit 9 (Let's Go Out) · صفحات ٧٨–٧٩
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U9_VOCAB'] = {
    id:'EN_SG2_U9_VOCAB',
    title:'Vocabulary — Chores & Free Time',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'Chores & Going Out',
      intro:'أعمالُ المنزل (chores): <code>do the laundry</code> يغسل الملابس، <code>do the dishes</code> يغسل الصحون، <code>clean my room</code> ينظّف غرفته، <code>take out the trash</code> يخرج القمامة، <code>babysit</code> يجالس الأطفال. وأنشطةُ الخروج: <code>hang out</code> يتسكّع/يقضي وقتًا، <code>go for a drive</code> جولة بالسيّارة، <code>go out</code> يخرج.',
      table:[['do the laundry','يغسل الملابس'],['do the dishes','يغسل الصحون'],['take out the trash','يخرج القمامة'],['babysit','يجالس الأطفال'],['hang out','يقضي وقتًا مع الأصدقاء']],
      trick:'نستعمل <code>do</code> مع كثيرٍ من الأعمال: <code>do the laundry / dishes / homework</code>. و<code>hang out</code> فعلٌ مركّبٌ يعني قضاءَ الوقت مع الأصدقاء.'
    },
    stages:[
      { type:'choice', name:'الأعمال المنزلية', hint:'اختر العمل الصحيح', qs:[
        {p:'To wash clothes is to ___.', o:['do the laundry','do the dishes','babysit'], a:0, w:'يغسل الملابس.', f:'<u>do the laundry</u>'},
        {p:'To wash plates and cups is to ___.', o:['do the dishes','take out the trash','hang out'], a:0, w:'يغسل الصحون.', f:'<u>do the dishes</u>'},
        {p:'To empty the garbage is to ___.', o:['take out the trash','do the laundry','go for a drive'], a:0, w:'يخرج القمامة.', f:'<u>take out the trash</u>'},
        {p:'To look after a small child is to ___.', o:['babysit','clean','shop'], a:0, w:'يجالس الأطفال.', f:'<u>babysit</u>'},
        {p:'To make your room tidy is to ___.', o:['clean your room','do the dishes','hang out'], a:0, w:'ينظّف غرفته.', f:'<u>clean your room</u>'}
      ]},
      { type:'choice', name:'الخروج والأنشطة', hint:'go out / hang out', qs:[
        {p:'To spend time with friends is to ___.', o:['hang out','do chores','study'], a:0, w:'يقضي وقتًا معهم.', f:'<u>hang out</u>'},
        {p:'A trip in the car for fun is to ___.', o:['go for a drive','do the laundry','babysit'], a:0, w:'جولة بالسيّارة.', f:'<u>go for a drive</u>'},
        {p:'“chores” are:', o:['jobs around the house','games','meals'], a:0, w:'أعمال المنزل.', f:'<u>jobs around the house</u>'},
        {p:'To leave home to have fun is to ___.', o:['go out','stay in','clean'], a:0, w:'يخرج.', f:'<u>go out</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'I can’t go out. I have to ___ my room.', o:['clean','drive','hang'], a:0, w:'ينظّف.', f:'<u>clean</u>'},
        {p:'Let’s ___ at the mall this evening.', o:['hang out','do the dishes','babysit'], a:0, w:'نقضي وقتًا.', f:'<u>hang out</u>'},
        {p:'I have to ___ the trash before I leave.', o:['take out','clean up','go for'], a:0, w:'يخرج القمامة.', f:'<u>take out</u>'},
        {p:'She has to ___ her little brother tonight.', o:['babysit','drive','shop'], a:0, w:'يجالس.', f:'<u>babysit</u>'},
        {p:'On weekends I ___ the laundry.', o:['do','make','go'], a:0, w:'<code>do the laundry</code>.', f:'<u>do</u> the laundry'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['I','make','the','laundry','.'], bad:1, fix:'do', w:'<code>do the laundry</code>.', f:'I <u>do</u> the laundry.'},
        {words:['Let’s','hang','in','at','the','mall','.'], bad:2, fix:'out (hang out)', w:'الصواب <code>hang out</code>.', f:'Let’s <u>hang out</u>…'},
        {words:['I','have','to','baby','my','brother','.'], bad:3, fix:'babysit', w:'الفعل <code>babysit</code>.', f:'I have to <u>babysit</u>…'},
        {words:['Chores','are','fun','games','.'], bad:3, fix:'jobs at home', w:'الأعمال المنزلية.', f:'Chores are <u>jobs at home</u>.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'wash clothes =', ask:'اختر', o:['do the laundry','do the dishes'], a:0, w:'الملابس.', f:'<u>do the laundry</u>'},
        {p:'wash plates =', ask:'اختر', o:['do the dishes','babysit'], a:0, w:'الصحون.', f:'<u>do the dishes</u>'},
        {p:'empty the garbage =', ask:'اختر', o:['take out the trash','hang out'], a:0, w:'القمامة.', f:'<u>take out the trash</u>'},
        {p:'look after a child =', ask:'اختر', o:['babysit','clean'], a:0, w:'يجالس.', f:'<u>babysit</u>'},
        {p:'spend time with friends =', ask:'اختر', o:['hang out','do chores'], a:0, w:'يقضي وقتًا.', f:'<u>hang out</u>'},
        {p:'a car trip for fun =', ask:'اختر', o:['go for a drive','do the dishes'], a:0, w:'جولة.', f:'<u>go for a drive</u>'},
        {p:'“chores” =', ask:'اختر', o:['house jobs','games'], a:0, w:'أعمال المنزل.', f:'<u>house jobs</u>'},
        {p:'I ___ the laundry.', ask:'أكمل', o:['do','make'], a:0, w:'<code>do</code>.', f:'<u>do</u>'},
        {p:'make your room tidy =', ask:'اختر', o:['clean your room','hang out'], a:0, w:'ينظّف.', f:'<u>clean your room</u>'}
      ]}
    ]
  };
})();
