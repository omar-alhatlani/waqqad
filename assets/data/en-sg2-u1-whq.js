/* ============================================================
   Lesson: Information Questions — How, What, When, Where, Who, Why
   English · Super Goal 2 · Unit 1 (Are You Here on Vacation?) · صفحة ٤
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U1_WHQ'] = {
    id:'EN_SG2_U1_WHQ',
    title:'Information Questions (Wh-)',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'How · What · When · Where · Who · Why',
      intro:'أسئلة الاستفهام (Wh-) تسأل عن معلومة، وتبدأ بأداة استفهام ثمّ الفعل <code>be</code>: <code>Where are you from?</code>. كلُّ أداةٍ تسأل عن شيء: <code>Where</code> المكان، <code>When</code> الزمان، <code>Who</code> الشخص، <code>What</code> الشيء، <code>Why</code> السبب، <code>How</code> الحال/الكيفية.',
      table:[['Where','المكان — from Jeddah'],['When','الزمان — in February'],['Who','الشخص — my uncle'],['What / Why / How','الشيء / السبب / الحال']],
      trick:'الترتيب: أداة الاستفهام + <code>be</code> + الفاعل. طابِق الأداة مع نوع الجواب: مكان ← <code>Where</code>، زمان ← <code>When</code>، شخص ← <code>Who</code>، سبب ← <code>Why</code>.'
    },
    stages:[
      { type:'choice', name:'اختر الأداة', hint:'ما نوع المعلومة المطلوبة؟', qs:[
        {p:'___ are you from?  (Jeddah)', o:['Where','When','Who','Why'], a:0, w:'الجواب مكان ← <code>Where</code>.', f:'<u>Where</u> are you from?'},
        {p:'___ is the festival?  (in February)', o:['When','Where','What','Who'], a:0, w:'الجواب زمان ← <code>When</code>.', f:'<u>When</u> is the festival?'},
        {p:'___ is that tall man?  (my uncle)', o:['Who','What','Where','Why'], a:0, w:'الجواب شخص ← <code>Who</code>.', f:'<u>Who</u> is that tall man?'},
        {p:'___ are you studying?  (Because we have a test)', o:['Why','When','Where','Who'], a:0, w:'الجواب سبب ← <code>Why</code>.', f:'<u>Why</u> are you studying?'},
        {p:'___ is your name?  (Saud)', o:['What','Who','When','How'], a:0, w:'للاسم نستعمل <code>What</code>.', f:'<u>What</u> is your name?'},
        {p:'___ are you doing?  (Fine, thanks)', o:['How','What','Why','Where'], a:0, w:'السؤال عن الحال ← <code>How</code>.', f:'<u>How</u> are you doing?'}
      ]},
      { type:'gap', name:'أكمل السؤال', hint:'اختر الأداة المناسبة للجواب', qs:[
        {p:'___ old are you?  (I’m thirteen.)', o:['How','What','When','Who'], a:0, w:'العمر بـ <code>How old</code>.', f:'<u>How</u> old are you?'},
        {p:'___ is the restaurant?  (Behind the elevators.)', o:['Where','When','Why','Who'], a:0, w:'مكان ← <code>Where</code>.', f:'<u>Where</u> is the restaurant?'},
        {p:'___ are your names?  (Saud and Ali.)', o:['What','Who','Where','Why'], a:0, w:'للأسماء ← <code>What</code>.', f:'<u>What</u> are your names?'},
        {p:'___ is your birthday?  (In May.)', o:['When','Where','Who','How'], a:0, w:'زمان ← <code>When</code>.', f:'<u>When</u> is your birthday?'},
        {p:'___ is she crying?  (Because she is sad.)', o:['Why','What','When','Who'], a:0, w:'سبب ← <code>Why</code>.', f:'<u>Why</u> is she crying?'},
        {p:'___ is your teacher?  (Mr. Salem.)', o:['Who','What','Where','How'], a:0, w:'شخص ← <code>Who</code>.', f:'<u>Who</u> is your teacher?'}
      ]},
      { type:'choice', name:'طابِق السؤال بالجواب', hint:'أيّ جواب يناسب السؤال؟', qs:[
        {p:'Where are you from?', ask:'الجواب المناسب', o:['I’m from Abha.','In February.','My uncle.','Because I’m tired.'], a:0, w:'<code>Where</code> ← مكان.', f:'I’m from Abha.'},
        {p:'When is the test?', ask:'الجواب المناسب', o:['On Sunday.','In Riyadh.','My friend.','Fine, thanks.'], a:0, w:'<code>When</code> ← زمان.', f:'On Sunday.'},
        {p:'Who is that man?', ask:'الجواب المناسب', o:['He’s my father.','In the box.','Next week.','Because it’s hot.'], a:0, w:'<code>Who</code> ← شخص.', f:'He’s my father.'},
        {p:'How are you?', ask:'الجواب المناسب', o:['Fine, thanks.','In Makkah.','My sister.','At six.'], a:0, w:'<code>How</code> ← الحال.', f:'Fine, thanks.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الأداة الخاطئة', qs:[
        {words:['When','are','you','from','?'], bad:0, fix:'Where', w:'السؤال عن المكان ← <code>Where</code>.', f:'<u>Where</u> are you from?'},
        {words:['Who','is','the','festival','?'], bad:0, fix:'When/Where', w:'المهرجان ليس شخصًا؛ للزمان <code>When</code> وللمكان <code>Where</code>.', f:'<u>When</u> is the festival?'},
        {words:['Where','is','your','name','?'], bad:0, fix:'What', w:'للاسم نستعمل <code>What</code>.', f:'<u>What</u> is your name?'},
        {words:['What','are','you','sad','?'], bad:0, fix:'Why', w:'السؤال عن السبب ← <code>Why</code>.', f:'<u>Why</u> are you sad?'}
      ]},
      { type:'order', name:'ابنِ السؤال', hint:'أداة الاستفهام + be + الفاعل', qs:[
        {sol:['Where','are','you','from','?'], w:'مكان.', f:'Where are you from?'},
        {sol:['When','is','the','festival','?'], w:'زمان.', f:'When is the festival?'},
        {sol:['Who','is','that','man','?'], w:'شخص.', f:'Who is that man?'},
        {sol:['How','old','are','you','?'], w:'العمر بـ How old.', f:'How old are you?'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'___ are you from?', ask:'اختر الأداة', o:['Where','When','Who'], a:0, w:'مكان.', f:'<u>Where</u> are you from?'},
        {p:'___ is the festival?  (February)', ask:'اختر الأداة', o:['When','Where','What'], a:0, w:'زمان.', f:'<u>When</u> is the festival?'},
        {p:'___ is that man?  (my uncle)', ask:'اختر الأداة', o:['Who','What','Why'], a:0, w:'شخص.', f:'<u>Who</u> is that man?'},
        {p:'How are you?', ask:'الجواب المناسب', o:['Fine, thanks.','In Makkah.','My sister.'], a:0, w:'<code>How</code> ← الحال.', f:'Fine, thanks.'},
        {p:'___ is your name?', ask:'اختر الأداة', o:['What','Who','When'], a:0, w:'للاسم <code>What</code>.', f:'<u>What</u> is your name?'},
        {p:'___ are you studying?  (test)', ask:'اختر الأداة', o:['Why','When','Where'], a:0, w:'سبب.', f:'<u>Why</u> are you studying?'},
        {p:'When is the test?', ask:'الجواب المناسب', o:['On Sunday.','In Riyadh.','My friend.'], a:0, w:'<code>When</code> ← زمان.', f:'On Sunday.'},
        {sol:['Where','is','the','restaurant','?'], w:'مكان.', f:'Where is the restaurant?'},
        {p:'___ old are you?', ask:'اختر الأداة', o:['How','What','When'], a:0, w:'العمر بـ How old.', f:'<u>How</u> old are you?'}
      ]}
    ]
  };
})();
