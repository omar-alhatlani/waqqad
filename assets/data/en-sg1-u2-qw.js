/* ============================================================
   Lesson: Grammar — Question Words (What/When/How old) + In/On
   English · Super Goal 1 · Unit 2 (What Day Is Today?) · صفحة ١٢
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1).
   lang:'en' → المحتوى إنجليزيّ LTR، والشرح بالعربية.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U2_QW'] = {
    id:'EN_SG1_U2_QW',
    title:'Grammar — أدوات السؤال (What/When/How old) و in/on',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'What / When / How old',
      intro:'نسأل بـ <code>What</code> عن الأيام والتواريخ والأوقات، وبـ <code>When</code> عن الأشهر والفصول والمواعيد، وبـ <code>How old</code> عن العمر.',
      table:[['What','يوم · تاريخ · وقت'],['When','شهر · فصل · موعد'],['How old','العمر']],
      examples:["What is the date? → It's January 20th.",'When is your vacation? → In May.',"How old are you? → I'm fifteen."],
      trick:'حرفا الجرّ: <code>in</code> مع الأشهر والفصول والسنوات (in May, in winter)، و<code>on</code> مع الأيام والتواريخ (on Sunday, on May 4th).'
    },
    stages:[
      { type:'choice', name:'أداة السؤال', hint:'What / When / How old؟', qs:[
        {p:'___ is your vacation?  → In May.',       ask:'اختر الأداة', o:['When','What','How old'], a:0, w:'شهر ← <code>When</code>.', f:'<u>When</u> is your vacation?'},
        {p:"___ are you?  → I'm fifteen.",            ask:'اختر الأداة', o:['How old','When','What'], a:0, w:'عُمر ← <code>How old</code>.', f:'<u>How old</u> are you?'},
        {p:"___ is the date today?  → It's May 4th.", ask:'اختر الأداة', o:['What','When','How old'], a:0, w:'تاريخ ← <code>What</code>.', f:'<u>What</u> is the date today?'},
        {p:'___ is the building?  → 150 years old.',  ask:'اختر الأداة', o:['How old','What','When'], a:0, w:'عُمر ← <code>How old</code>.', f:'<u>How old</u> is the building?'},
        {p:'___ day is today?  → Saturday.',          ask:'اختر الأداة', o:['What','When','How old'], a:0, w:'يوم ← <code>What</code>.', f:'<u>What</u> day is today?'},
        {p:'___ are their matches?  → In winter.',    ask:'اختر الأداة', o:['When','What','How old'], a:0, w:'فصل ← <code>When</code>.', f:'<u>When</u> are their matches?'}
      ]},
      { type:'gap', name:'in أم on؟', hint:'اختر حرف الجرّ الصحيح', qs:[
        {p:'Our vacation is ___ May.',          ask:'أكمل الفراغ', o:['in','on','at','to'], a:0, w:'مع الأشهر ← <code>in</code>.', f:'Our vacation is <u>in</u> May.'},
        {p:'The test is ___ Sunday.',            ask:'أكمل الفراغ', o:['on','in','at','to'], a:0, w:'مع الأيام ← <code>on</code>.', f:'The test is <u>on</u> Sunday.'},
        {p:'My birthday is ___ July.',           ask:'أكمل الفراغ', o:['in','on','at','to'], a:0, w:'مع الأشهر ← <code>in</code>.', f:'My birthday is <u>in</u> July.'},
        {p:'We play football ___ Mondays.',      ask:'أكمل الفراغ', o:['on','in','at','to'], a:0, w:'مع الأيام ← <code>on</code>.', f:'We play football <u>on</u> Mondays.'},
        {p:'The final test is ___ September 21st.', ask:'أكمل الفراغ', o:['on','in','at','to'], a:0, w:'مع التواريخ ← <code>on</code>.', f:'... <u>on</u> September 21st.'},
        {p:'It is cold ___ winter.',             ask:'أكمل الفراغ', o:['in','on','at','to'], a:0, w:'مع الفصول ← <code>in</code>.', f:'It is cold <u>in</u> winter.'}
      ]},
      { type:'choice', name:'What أم When؟', hint:'تاريخ/يوم ← What · شهر/فصل ← When', qs:[
        {p:'___ is the date tomorrow?', ask:'What أم When؟', o:['What','When'], a:0, w:'تاريخ ← <code>What</code>.', f:'<u>What</u> is the date tomorrow?'},
        {p:'___ is your vacation?',      ask:'What أم When؟', o:['What','When'], a:1, w:'إجازة/شهر ← <code>When</code>.', f:'<u>When</u> is your vacation?'},
        {p:'___ day is your visit?',     ask:'What أم When؟', o:['What','When'], a:0, w:'يوم ← <code>What</code>.', f:'<u>What</u> day is your visit?'},
        {p:'___ are their football matches?', ask:'What أم When؟', o:['What','When'], a:1, w:'فصل ← <code>When</code>.', f:'<u>When</u> are their matches?'},
        {p:'___ time is it?',            ask:'What أم When؟', o:['What','When'], a:0, w:'وقت ← <code>What</code>.', f:'<u>What</u> time is it?'},
        {p:'___ is your birthday?',      ask:'What أم When؟', o:['What','When'], a:1, w:'شهر/موعد ← <code>When</code>.', f:'<u>When</u> is your birthday?'}
      ]},
      { type:'order', name:'ابنِ السؤال', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['What','is','the','date','?'],      w:'سؤالٌ عن التاريخ.', f:'What is the date?'},
        {sol:['When','is','your','vacation','?'],  w:'سؤالٌ عن الموعد.', f:'When is your vacation?'},
        {sol:['How','old','are','you','?'],        w:'سؤالٌ عن العمر.', f:'How old are you?'},
        {sol:['What','day','is','today','?'],      w:'سؤالٌ عن اليوم.', f:'What day is today?'},
        {sol:['The','test','is','on','Sunday','.'], w:'<code>on</code> مع اليوم.', f:'The test is on Sunday.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:"___ are you?  → I'm fifteen.", ask:'اختر الأداة', o:['How old','When','What'], a:0, w:'عُمر ← <code>How old</code>.', f:'<u>How old</u> are you?'},
        {p:'Our vacation is ___ May.', ask:'in أم on؟', o:['in','on'], a:0, w:'مع الأشهر ← <code>in</code>.', f:'... <u>in</u> May.'},
        {p:'___ is your vacation?', ask:'What أم When؟', o:['When','What'], a:0, w:'شهر ← <code>When</code>.', f:'<u>When</u> is your vacation?'},
        {p:'The test is ___ Sunday.', ask:'in أم on؟', o:['on','in'], a:0, w:'مع الأيام ← <code>on</code>.', f:'... <u>on</u> Sunday.'},
        {p:'___ day is today?  → Saturday.', ask:'اختر الأداة', o:['What','When','How old'], a:0, w:'يوم ← <code>What</code>.', f:'<u>What</u> day is today?'},
        {sol:['How','old','are','you','?'], w:'سؤالٌ عن العمر.', f:'How old are you?'},
        {p:'It is cold ___ winter.', ask:'in أم on؟', o:['in','on'], a:0, w:'مع الفصول ← <code>in</code>.', f:'... <u>in</u> winter.'},
        {p:'___ is the building?  → 150 years old.', ask:'اختر الأداة', o:['How old','What','When'], a:0, w:'عُمر ← <code>How old</code>.', f:'<u>How old</u> is the building?'},
        {sol:['What','is','the','date','?'], w:'سؤالٌ عن التاريخ.', f:'What is the date?'}
      ]}
    ]
  };
})();
