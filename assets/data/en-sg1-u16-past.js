/* ============================================================
   Lesson: Simple Past Tense — Regular & Irregular
   English · Super Goal 1 · Unit 16 (What Did You Do Last Week?) · صفحة ١٤٤
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U16_PAST'] = {
    id:'EN_SG1_U16_PAST',
    title:'Simple Past — Regular & Irregular',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'worked / went — did / didn’t',
      intro:'نستعمل <b>الماضي البسيط</b> لأفعالٍ انتهت. الأفعالُ <b>المنتظمة</b> تأخذ <code>-ed</code>: <code>work → worked</code> (وإن انتهت بـ <code>e</code> نضيف <code>-d</code>: <code>live → lived</code>، وإن كانت ساكن + <code>y</code> نستعمل <code>-ied</code>: <code>study → studied</code>). و<b>الشاذّة</b> تتغيّر: <code>go → went</code>, <code>have → had</code>. في السؤال والنفي نستعمل <code>did / didn’t</code> ويعود الفعل مجرّدًا.',
      table:[['regular','worked, lived, studied'],['irregular','went, had, bought, ate'],['question','Did you go?'],['negative','I didn’t go.']],
      trick:'بعد <code>did / didn’t</code> يعود الفعل مجرّدًا: <code>Did you go?</code> لا <code>Did you went?</code>. والإثباتُ فقط يحمل صيغة الماضي.'
    },
    stages:[
      { type:'choice', name:'الماضي المنتظم', hint:'-ed / -d / -ied', qs:[
        {p:'I ___ hard yesterday. (work)', o:['worked','work','working','works'], a:0, w:'منتظم ← <code>worked</code>.', f:'I <u>worked</u> yesterday.'},
        {p:'They ___ in Riyadh. (live)', o:['lived','lifed','live','lives'], a:0, w:'ينتهي بـ e ← <code>lived</code>.', f:'They <u>lived</u> in Riyadh.'},
        {p:'She ___ for the test. (study)', o:['studied','studyed','study','studies'], a:0, w:'ساكن + y ← <code>studied</code>.', f:'She <u>studied</u>.'},
        {p:'We ___ football. (play)', o:['played','plaied','play','plays'], a:0, w:'حرف علّة + y ← <code>played</code>.', f:'We <u>played</u> football.'}
      ]},
      { type:'choice', name:'الماضي الشاذّ', hint:'يتغيّر الفعل', qs:[
        {p:'I ___ to the zoo. (go)', o:['went','goed','go','gone'], a:0, w:'شاذّ ← <code>went</code>.', f:'I <u>went</u> to the zoo.'},
        {p:'We ___ a great time. (have)', o:['had','haved','have','has'], a:0, w:'شاذّ ← <code>had</code>.', f:'We <u>had</u> a great time.'},
        {p:'He ___ a new phone. (buy)', o:['bought','buyed','buy','buys'], a:0, w:'شاذّ ← <code>bought</code>.', f:'He <u>bought</u> a phone.'},
        {p:'They ___ lunch at a restaurant. (eat)', o:['ate','eated','eat','eats'], a:0, w:'شاذّ ← <code>ate</code>.', f:'They <u>ate</u> lunch.'}
      ]},
      { type:'choice', name:'did / didn’t', hint:'الفعل يرجع مجرّدًا', qs:[
        {p:'___ you go out yesterday?', o:['Did','Do','Was','Were'], a:0, w:'الماضي ← <code>Did</code>.', f:'<u>Did</u> you go out?'},
        {p:'I ___ stay home. (نفي)', o:['didn’t','don’t','wasn’t','not'], a:0, w:'<code>didn’t</code>.', f:'I <u>didn’t</u> stay home.'},
        {p:'Did Saeed ___ to school?', o:['go','went','goes','going'], a:0, w:'بعد <code>did</code> ← مجرّد <code>go</code>.', f:'Did Saeed <u>go</u>…?'},
        {p:'Did you have a test? — Yes, I ___.', o:['did','was','had','do'], a:0, w:'الإجابة ← <code>did</code>.', f:'Yes, I <u>did</u>.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['Did','you','went','out','?'], bad:2, fix:'go', w:'بعد <code>did</code> ← مجرّد.', f:'Did you <u>go</u> out?'},
        {words:['I','goed','to','the','zoo','.'], bad:1, fix:'went', w:'شاذّ ← <code>went</code>.', f:'I <u>went</u> to the zoo.'},
        {words:['They','didn’t','played','.'], bad:2, fix:'play', w:'بعد <code>didn’t</code> ← مجرّد.', f:'They didn’t <u>play</u>.'},
        {words:['She','studyed','hard','.'], bad:1, fix:'studied', w:'ساكن + y ← <code>studied</code>.', f:'She <u>studied</u> hard.'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['We','went','to','the','zoo','.'], w:'شاذّ ← <code>went</code>.', f:'We went to the zoo.'},
        {sol:['I','didn’t','stay','home','.'], w:'<code>didn’t + مجرّد</code>.', f:"I didn't stay home."},
        {sol:['Did','you','have','a','test','?'], w:'<code>Did + مجرّد</code>.', f:'Did you have a test?'},
        {sol:['She','studied','for','the','test','.'], w:'منتظم ← <code>studied</code>.', f:'She studied for the test.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'I ___ hard. (work)', ask:'الماضي', o:['worked','work'], a:0, w:'منتظم.', f:'<u>worked</u>'},
        {p:'I ___ to the zoo. (go)', ask:'الماضي', o:['went','goed'], a:0, w:'شاذّ.', f:'<u>went</u>'},
        {p:'He ___ a phone. (buy)', ask:'الماضي', o:['bought','buyed'], a:0, w:'شاذّ.', f:'<u>bought</u>'},
        {p:'She ___ for the test. (study)', ask:'الماضي', o:['studied','studyed'], a:0, w:'ساكن + y.', f:'<u>studied</u>'},
        {p:'___ you go out?', ask:'اختر', o:['Did','Do'], a:0, w:'الماضي.', f:'<u>Did</u>'},
        {p:'I ___ stay home. (نفي)', ask:'اختر', o:['didn’t','don’t'], a:0, w:'<code>didn’t</code>.', f:'<u>didn’t</u>'},
        {sol:['Did','Saeed','go','to','school','?'], w:'<code>Did + مجرّد</code>.', f:'Did Saeed go to school?'},
        {p:'They ___ lunch. (eat)', ask:'الماضي', o:['ate','eated'], a:0, w:'شاذّ.', f:'<u>ate</u>'},
        {p:'Yes, I ___. (Did you have a test?)', ask:'اختر', o:['did','was'], a:0, w:'<code>did</code>.', f:'<u>did</u>'}
      ]}
    ]
  };
})();
