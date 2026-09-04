/* ============================================================
   Lesson: Simple Past — Regular & Irregular Verbs
   English · Super Goal 2 · Unit 6 (What Was It Like?) · صفحة ٥٠
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U6_PAST'] = {
    id:'EN_SG2_U6_PAST',
    title:'Simple Past — Regular & Irregular',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'-ed · irregular verbs · did',
      intro:'الأفعال <b>المنتظمة</b> تُصاغ في الماضي بإضافة <code>-ed</code>: <code>stay → stayed</code>. و<b>غير المنتظمة</b> لها صيغٌ خاصّة: <code>go → went, buy → bought, do → did, eat → ate</code>. وفي <b>السؤال والنفي</b> نستعمل <code>did / didn’t</code> + الفعل الأصليّ: <code>Where did you go?</code> / <code>I didn’t go.</code>',
      table:[['Regular','stay → stayed (+ed)'],['Irregular','go → went · buy → bought'],['Question','Did you go?'],['Negative','didn’t + الفعل الأصلي']],
      trick:'المنتظمُ يأخذ <code>-ed</code>، وغيرُ المنتظم يُحفَظ. بعد <code>did/didn’t</code> يعود الفعلُ أصليًّا بلا <code>-ed</code>: <code>didn’t go</code> لا <code>didn’t went</code>.'
    },
    stages:[
      { type:'choice', name:'ماضي الفعل', hint:'منتظم +ed · شاذّ يُحفَظ', qs:[
        {p:'go →', o:['went','goed','gone'], a:0, w:'شاذّ: <code>go → went</code>.', f:'go → <u>went</u>.'},
        {p:'stay →', o:['stayed','staid','stay'], a:0, w:'منتظم: <code>stayed</code>.', f:'stay → <u>stayed</u>.'},
        {p:'buy →', o:['bought','buyed','buys'], a:0, w:'شاذّ: <code>buy → bought</code>.', f:'buy → <u>bought</u>.'},
        {p:'eat →', o:['ate','eated','eat'], a:0, w:'شاذّ: <code>eat → ate</code>.', f:'eat → <u>ate</u>.'},
        {p:'play →', o:['played','plaid','plays'], a:0, w:'منتظم: <code>played</code>.', f:'play → <u>played</u>.'}
      ]},
      { type:'gap', name:'أكمل بالماضي', hint:'اختر الصيغة الماضية', qs:[
        {p:'Last weekend I ___ to the beach. (go)', o:['went','goed','go'], a:0, w:'<code>went</code>.', f:'I <u>went</u> to the beach.'},
        {p:'They ___ at home yesterday. (stay)', o:['stayed','stay','staid'], a:0, w:'<code>stayed</code>.', f:'They <u>stayed</u>…'},
        {p:'She ___ a new book. (buy)', o:['bought','buyed','buys'], a:0, w:'<code>bought</code>.', f:'She <u>bought</u>…'},
        {p:'We ___ pizza for dinner. (eat)', o:['ate','eated','eat'], a:0, w:'<code>ate</code>.', f:'We <u>ate</u> pizza.'},
        {p:'He ___ football on Friday. (play)', o:['played','play','plaid'], a:0, w:'<code>played</code>.', f:'He <u>played</u>…'}
      ]},
      { type:'choice', name:'did في السؤال والنفي', hint:'بعد did الفعلُ أصليّ', qs:[
        {p:'___ you go last weekend?', ask:'اختر', o:['Did','Do','Was'], a:0, w:'الماضي ← <code>Did</code>.', f:'<u>Did</u> you go…?'},
        {p:'Where did they ___?', ask:'اختر', o:['go','went','gone'], a:0, w:'بعد <code>did</code> الفعلُ أصليّ.', f:'did they <u>go</u>?'},
        {p:'I ___ go to the party.', ask:'النفي', o:['didn’t','wasn’t','don’t'], a:0, w:'النفي في الماضي ← <code>didn’t</code>.', f:'I <u>didn’t</u> go.'},
        {p:'She didn’t ___ the museum.', ask:'اختر', o:['visit','visited','visits'], a:0, w:'بعد <code>didn’t</code> الفعلُ أصليّ.', f:'didn’t <u>visit</u>.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['I','goed','home','.'], bad:1, fix:'went', w:'شاذّ: <code>went</code>.', f:'I <u>went</u> home.'},
        {words:['She','didn’t','went','.'], bad:2, fix:'go', w:'بعد <code>didn’t</code> الفعلُ أصليّ.', f:'She didn’t <u>go</u>.'},
        {words:['Where','you','went','?'], bad:1, fix:'did you go', w:'السؤال الماضي ← <code>Where did you go?</code>', f:'Where <u>did you go</u>?'},
        {words:['They','buyed','a','car','.'], bad:1, fix:'bought', w:'شاذّ: <code>bought</code>.', f:'They <u>bought</u> a car.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['I','went','to','the','museum','.'], w:'شاذّ went.', f:'I went to the museum.'},
        {sol:['Where','did','you','go','?'], w:'did + الفعل الأصلي.', f:'Where did you go?'},
        {sol:['She','didn’t','stay','home','.'], w:'didn’t + الفعل الأصلي.', f:'She didn’t stay home.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'go →', ask:'الماضي', o:['went','goed'], a:0, w:'شاذّ.', f:'<u>went</u>.'},
        {p:'stay →', ask:'الماضي', o:['stayed','staid'], a:0, w:'منتظم.', f:'<u>stayed</u>.'},
        {p:'___ you go last weekend?', ask:'اختر', o:['Did','Do'], a:0, w:'ماضٍ.', f:'<u>Did</u>.'},
        {p:'I ___ go. (نفي)', ask:'اختر', o:['didn’t','wasn’t'], a:0, w:'didn’t.', f:'<u>didn’t</u>.'},
        {p:'buy →', ask:'الماضي', o:['bought','buyed'], a:0, w:'شاذّ.', f:'<u>bought</u>.'},
        {sol:['I','went','to','the','museum','.'], w:'went.', f:'I went to the museum.'},
        {p:'Where did they ___?', ask:'اختر', o:['go','went'], a:0, w:'بعد did أصليّ.', f:'<u>go</u>.'},
        {p:'We ___ pizza. (eat)', ask:'اختر', o:['ate','eated'], a:0, w:'شاذّ.', f:'<u>ate</u>.'},
        {p:'She didn’t ___ it.', ask:'اختر', o:['visit','visited'], a:0, w:'بعد didn’t أصليّ.', f:'<u>visit</u>.'}
      ]}
    ]
  };
})();
