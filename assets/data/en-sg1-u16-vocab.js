/* ============================================================
   Lesson: Vocabulary — Past Activities & Free Time
   English · Super Goal 1 · Unit 16 (What Did You Do Last Week?) · صفحات ١٤٢–١٤٣
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U16_VOCAB'] = {
    id:'EN_SG1_U16_VOCAB',
    title:'Vocabulary — Past Activities',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'Weekend & Free-time Activities',
      intro:'أنشطةٌ في وقت الفراغ: <code>play video games</code> يلعب ألعاب الفيديو، <code>watch a race</code> يشاهد سباقًا، <code>visit a museum</code> يزور متحفًا، <code>play beach volleyball</code> كرة طائرة شاطئية، <code>study for a test</code> يذاكر لاختبار، <code>clean out</code> يرتّب/ينظّف، <code>search for information</code> يبحث عن معلومات.',
      table:[['video games','console = جهاز الألعاب'],['car race','سباق سيّارات'],['smartphone','هاتف ذكيّ'],['museum','متحف'],['assignment','واجب/مهمّة']],
      trick:'كثيرٌ من هذه الأنشطة أفعالٌ مركّبة: <code>play video games</code>, <code>clean out (my closet)</code>, <code>search for (information)</code>.'
    },
    stages:[
      { type:'choice', name:'المعنى', hint:'اختر المعنى الصحيح', qs:[
        {p:'A “console” is equipment for:', o:['video games','cooking','driving'], a:0, w:'جهاز الألعاب.', f:'<u>video games</u>'},
        {p:'A “car race” is a competition with:', o:['cars','books','food'], a:0, w:'سباق سيّارات.', f:'<u>cars</u>'},
        {p:'A “smartphone” is a high-tech:', o:['phone','car','oven'], a:0, w:'هاتف ذكيّ.', f:'<u>phone</u>'},
        {p:'“to search for” means to:', o:['look for','throw away','cook'], a:0, w:'يبحث عن.', f:'<u>look for</u>'},
        {p:'A place to see art and history is a:', o:['museum','mall','clinic'], a:0, w:'متحف.', f:'<u>museum</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'We played video games on his ___.', o:['console','oven','bus'], a:0, w:'جهاز الألعاب.', f:'<u>console</u>'},
        {p:'On Thursday I went to the art ___.', o:['museum','airport','bank'], a:0, w:'المتحف.', f:'<u>museum</u>'},
        {p:'I studied for the science ___.', o:['test','race','party'], a:0, w:'اختبار.', f:'<u>test</u>'},
        {p:'I needed to finish my ___ for today.', o:['assignment','breakfast','sleep'], a:0, w:'الواجب.', f:'<u>assignment</u>'},
        {p:'We drove to the beach to play beach ___.', o:['volleyball','chess','cards'], a:0, w:'كرة طائرة.', f:'<u>volleyball</u>'}
      ]},
      { type:'choice', name:'الفعل المناسب', hint:'ماذا فعلوا؟', qs:[
        {p:'On Saturday I ___ a car race.', o:['watched','ate','drove'], a:0, w:'شاهدت.', f:'<u>watched</u>'},
        {p:'I ___ out my closet.', o:['cleaned','cooked','flew'], a:0, w:'رتّبت/نظّفت.', f:'<u>cleaned</u>'},
        {p:'I ___ some time searching on the Internet.', o:['spent','sold','drove'], a:0, w:'قضيت.', f:'<u>spent</u>'},
        {p:'Ahmed ___ his project in class.', o:['presented','ate','drove'], a:0, w:'قدّم.', f:'<u>presented</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['A','console','is','for','cooking','.'], bad:4, fix:'video games', w:'الكونسول لألعاب الفيديو.', f:'…for <u>video games</u>.'},
        {words:['I','studied','for','the','race','.'], bad:4, fix:'test', w:'نذاكر لاختبار.', f:'…for the <u>test</u>.'},
        {words:['We','went','to','the','museum','to','swim','.'], bad:6, fix:'see art', w:'المتحف لرؤية الفنّ لا السباحة.', f:'…to <u>see art</u>.'},
        {words:['I','cleaned','out','my','breakfast','.'], bad:4, fix:'closet', w:'رتّبت خزانتي.', f:'…my <u>closet</u>.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'equipment for video games =', ask:'اختر', o:['console','oven'], a:0, w:'كونسول.', f:'<u>console</u>'},
        {p:'a competition with cars =', ask:'اختر', o:['car race','museum'], a:0, w:'سباق.', f:'<u>car race</u>'},
        {p:'a high-tech phone =', ask:'اختر', o:['smartphone','console'], a:0, w:'هاتف ذكيّ.', f:'<u>smartphone</u>'},
        {p:'“search for” =', ask:'المعنى', o:['look for','throw away'], a:0, w:'يبحث عن.', f:'<u>look for</u>'},
        {p:'see art and history =', ask:'اختر', o:['museum','mall'], a:0, w:'متحف.', f:'<u>museum</u>'},
        {p:'I ___ a car race.', ask:'أكمل', o:['watched','ate'], a:0, w:'شاهدت.', f:'<u>watched</u>'},
        {p:'I studied for the ___.', ask:'أكمل', o:['test','race'], a:0, w:'اختبار.', f:'<u>test</u>'},
        {p:'Ahmed ___ his project.', ask:'أكمل', o:['presented','drove'], a:0, w:'قدّم.', f:'<u>presented</u>'},
        {p:'beach ___', ask:'أكمل', o:['volleyball','chess'], a:0, w:'كرة طائرة.', f:'<u>volleyball</u>'}
      ]}
    ]
  };
})();
