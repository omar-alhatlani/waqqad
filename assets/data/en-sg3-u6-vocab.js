/* ============================================================
   Lesson: Vocabulary — Quality of Life & Places
   English · Super Goal 3 · Unit 6 (Do You Know Where It Is?) · صفحات ٥٨–٥٩
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U6_VOCAB'] = {
    id:'EN_SG3_U6_VOCAB',
    title:'Vocabulary — Quality of Life',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'Describing Places',
      intro:'مفرداتٌ لوصف جودة الحياة في المدن: <code>public transportation</code> النقل العامّ، <code>crime rate</code> معدّل الجريمة، <code>cost of living</code> تكلفة المعيشة، <code>green areas</code> المساحات الخضراء، <code>punctual</code> دقيقٌ في المواعيد، <code>efficient</code> فعّال، <code>commuter</code> المسافر يوميًّا للعمل، <code>crowded</code> مزدحم.',
      table:[['public transportation','النقل العامّ'],['crime rate','معدّل الجريمة'],['cost of living','تكلفة المعيشة'],['punctual','دقيقٌ في المواعيد'],['efficient','فعّال / كفء']],
      trick:'المدينةُ ذاتُ «جودة حياةٍ» عالية: نقلٌ عامٌّ فعّال، معدّلُ جريمةٍ منخفض، مساحاتٌ خضراء، وتكلفةُ معيشةٍ معقولة.'
    },
    stages:[
      { type:'choice', name:'المعنى', hint:'اختر المعنى الصحيح', qs:[
        {p:'“public transportation” is:', o:['buses, trains, etc.','private cars only','walking'], a:0, w:'النقل العامّ.', f:'<u>buses, trains</u>'},
        {p:'“crime rate” is about the level of:', o:['crime','traffic','rain'], a:0, w:'معدّل الجريمة.', f:'level of <u>crime</u>'},
        {p:'“punctual” means:', o:['on time','late','fast'], a:0, w:'دقيقٌ في المواعيد.', f:'punctual = <u>on time</u>'},
        {p:'“efficient” means:', o:['works well with no waste','slow','broken'], a:0, w:'فعّال.', f:'efficient = <u>works well</u>'},
        {p:'“crowded” means:', o:['full of people','empty','clean'], a:0, w:'مزدحم.', f:'crowded = <u>full of people</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'The ___ transportation system is very efficient.', o:['public','private','personal'], a:0, w:'النقل العامّ.', f:'<u>public</u> transportation'},
        {p:'The city has a low ___ rate; it is very safe.', o:['crime','rain','traffic'], a:0, w:'معدّل الجريمة.', f:'low <u>crime</u> rate'},
        {p:'There are lots of ___ areas and parks.', o:['green','gray','gold'], a:0, w:'مساحاتٌ خضراء.', f:'<u>green</u> areas'},
        {p:'The bullet trains are extremely ___; they are never late.', o:['punctual','poor','private'], a:0, w:'دقيقةٌ في المواعيد.', f:'extremely <u>punctual</u>'},
        {p:'An average ___ spends four hours in traffic a day.', o:['commuter','camera','captain'], a:0, w:'المسافر اليوميّ.', f:'average <u>commuter</u>'}
      ]},
      { type:'choice', name:'جودة الحياة', hint:'مؤشّرات المدينة', qs:[
        {p:'The ___ of living is how much money you need to live.', o:['cost','crime','cost of crime'], a:0, w:'تكلفة المعيشة.', f:'<u>cost</u> of living'},
        {p:'A city with bad traffic is very ___.', o:['crowded','quiet','empty'], a:0, w:'مزدحم.', f:'very <u>crowded</u>'},
        {p:'A safe city has a ___ crime rate.', o:['low','high','fast'], a:0, w:'منخفض.', f:'<u>low</u> crime rate'},
        {p:'Clean air is part of good ___.', o:['air quality','traffic','noise'], a:0, w:'جودة الهواء.', f:'<u>air quality</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['The','trains','are','very','punctual','late','.'], bad:5, fix:'تُحذف (تناقض)', w:'<code>punctual</code> = في الوقت، تناقض <code>late</code>.', f:'The trains are very <u>punctual</u>.'},
        {words:['A','safe','city','has','a','high','crime','rate','.'], bad:5, fix:'low', w:'الآمنةُ ← معدّلٌ منخفض.', f:'a <u>low</u> crime rate'},
        {words:['The','cost','of','live','is','high','.'], bad:3, fix:'living', w:'الصواب <code>cost of living</code>.', f:'cost of <u>living</u>'},
        {words:['There','are','many','gray','areas','and','parks','.'], bad:3, fix:'green', w:'مساحاتٌ خضراء.', f:'<u>green</u> areas'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'buses & trains =', ask:'الكلمة', o:['public transportation','green areas'], a:0, w:'النقل العامّ.', f:'<u>public transportation</u>'},
        {p:'“punctual” =', ask:'المعنى', o:['on time','late'], a:0, w:'دقيق.', f:'<u>on time</u>'},
        {p:'“efficient” =', ask:'المعنى', o:['works well','broken'], a:0, w:'فعّال.', f:'<u>works well</u>'},
        {p:'“crowded” =', ask:'المعنى', o:['full of people','empty'], a:0, w:'مزدحم.', f:'<u>full of people</u>'},
        {p:'A safe city has a ___ crime rate.', ask:'اختر', o:['low','high'], a:0, w:'منخفض.', f:'<u>low</u>'},
        {p:'the money you need to live =', ask:'اختر', o:['cost of living','crime rate'], a:0, w:'تكلفة المعيشة.', f:'<u>cost of living</u>'},
        {p:'parks and ___ areas', ask:'أكمل', o:['green','gray'], a:0, w:'خضراء.', f:'<u>green</u>'},
        {p:'a daily traveler to work =', ask:'اختر', o:['commuter','camera'], a:0, w:'المسافر اليوميّ.', f:'<u>commuter</u>'},
        {p:'clean air = good ___.', ask:'اختر', o:['air quality','traffic'], a:0, w:'جودة الهواء.', f:'<u>air quality</u>'}
      ]}
    ]
  };
})();
