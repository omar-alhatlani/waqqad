/* ============================================================
   Lesson: Count/Noncount Nouns & Some/Any
   English · Super Goal 2 · Unit 5 (Is There Any Ice Cream?) · صفحة ٤٢
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U5_QTY'] = {
    id:'EN_SG2_U5_QTY',
    title:'Count/Noncount & Some/Any',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'Count / Noncount · some / any',
      intro:'الأسماءُ <b>المعدودة</b> (count) يمكن عدُّها ولها مفردٌ وجمع: <code>one carrot / two carrots</code>. و<b>غير المعدودة</b> (noncount) لا تُعدُّ ولا تُجمَع ولا تأخذ <code>a/an</code>: <code>rice, tea, water</code>. نستعمل <code>some</code> في <b>الإثبات</b> و<code>any</code> في <b>النفي والسؤال</b> (مع الجمع وغير المعدود).',
      table:[['Count','a burger / two burgers'],['Noncount','rice, water (بلا a/an ولا جمع)'],['some','في الإثبات: There is some juice.'],['any','في النفي/السؤال: Is there any juice?']],
      trick:'إن استطعتَ عدَّ الاسم فهو <b>count</b>. استعمل <code>some</code> مع الإثبات و<code>any</code> مع النفي والسؤال (إلّا في العرض المؤدّب: <code>Would you like some…?</code>).'
    },
    stages:[
      { type:'choice', name:'معدود أم غير معدود؟', hint:'أيمكن عدُّه؟', qs:[
        {p:'egg', ask:'اختر', o:['Count','Noncount'], a:0, w:'<code>one egg, two eggs</code> ← معدود.', f:'Count.'},
        {p:'rice', ask:'اختر', o:['Noncount','Count'], a:0, w:'لا يُعدّ ← غير معدود.', f:'Noncount.'},
        {p:'water', ask:'اختر', o:['Noncount','Count'], a:0, w:'لا يُعدّ ← غير معدود.', f:'Noncount.'},
        {p:'sandwich', ask:'اختر', o:['Count','Noncount'], a:0, w:'<code>two sandwiches</code> ← معدود.', f:'Count.'},
        {p:'cheese', ask:'اختر', o:['Noncount','Count'], a:0, w:'لا يُجمَع ← غير معدود.', f:'Noncount.'}
      ]},
      { type:'gap', name:'some أم any؟', hint:'some إثبات · any نفي وسؤال', qs:[
        {p:'There is ___ juice in the glass.', o:['some','any'], a:0, w:'إثبات ← <code>some</code>.', f:'There is <u>some</u> juice.'},
        {p:'There isn’t ___ juice left.', o:['any','some'], a:0, w:'نفي ← <code>any</code>.', f:'isn’t <u>any</u> juice.'},
        {p:'Is there ___ cheesecake?', o:['any','some'], a:0, w:'سؤال ← <code>any</code>.', f:'Is there <u>any</u> cheesecake?'},
        {p:'We have ___ fries.', o:['some','any'], a:0, w:'إثبات + جمع ← <code>some</code>.', f:'some fries.'},
        {p:'There aren’t ___ cookies.', o:['any','some'], a:0, w:'نفي ← <code>any</code>.', f:'aren’t <u>any</u> cookies.'}
      ]},
      { type:'choice', name:'a/an أم بلا؟', hint:'المعدود المفرد يأخذ a/an · غير المعدود لا', qs:[
        {p:'I’d like ___ burger.', ask:'اختر', o:['a','some','—'], a:0, w:'معدود مفرد ← <code>a</code>.', f:'<u>a</u> burger.'},
        {p:'I’d like ___ rice.', ask:'اختر', o:['some','a','an'], a:0, w:'غير معدود ← <code>some</code> لا <code>a</code>.', f:'<u>some</u> rice.'},
        {p:'I’d like ___ egg.', ask:'اختر', o:['an','a','some'], a:0, w:'يبدأ بحرف علّة ← <code>an</code>.', f:'<u>an</u> egg.'},
        {p:'Would you like ___ water?', ask:'اختر', o:['some','a','an'], a:0, w:'عرضٌ مؤدّب + غير معدود ← <code>some</code>.', f:'<u>some</u> water.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['There','is','any','juice','.'], bad:2, fix:'some', w:'الإثبات ← <code>some</code>.', f:'There is <u>some</u> juice.'},
        {words:['Is','there','some','cheesecake','?'], bad:2, fix:'any', w:'السؤال ← <code>any</code>.', f:'Is there <u>any</u> cheesecake?'},
        {words:['I’d','like','a','rice','.'], bad:2, fix:'some', w:'<code>rice</code> غير معدود ← <code>some</code>.', f:'I’d like <u>some</u> rice.'},
        {words:['We','have','two','rices','.'], bad:3, fix:'rice', w:'غير المعدود لا يُجمَع.', f:'two portions of <u>rice</u>.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['There','is','some','juice','.'], w:'إثبات ← some.', f:'There is some juice.'},
        {sol:['Is','there','any','pie','?'], w:'سؤال ← any.', f:'Is there any pie?'},
        {sol:['There','aren’t','any','cookies','.'], w:'نفي ← any.', f:'There aren’t any cookies.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'egg', ask:'اختر', o:['Count','Noncount'], a:0, w:'معدود.', f:'Count.'},
        {p:'water', ask:'اختر', o:['Noncount','Count'], a:0, w:'غير معدود.', f:'Noncount.'},
        {p:'There is ___ juice.', ask:'اختر', o:['some','any'], a:0, w:'إثبات.', f:'<u>some</u>.'},
        {p:'Is there ___ pie?', ask:'اختر', o:['any','some'], a:0, w:'سؤال.', f:'<u>any</u>.'},
        {p:'I’d like ___ rice.', ask:'اختر', o:['some','a'], a:0, w:'غير معدود.', f:'<u>some</u> rice.'},
        {sol:['There','is','some','juice','.'], w:'إثبات ← some.', f:'There is some juice.'},
        {p:'There isn’t ___ juice.', ask:'اختر', o:['any','some'], a:0, w:'نفي.', f:'<u>any</u>.'},
        {p:'rice', ask:'اختر', o:['Noncount','Count'], a:0, w:'غير معدود.', f:'Noncount.'},
        {p:'I’d like ___ egg.', ask:'اختر', o:['an','a'], a:0, w:'حرف علّة.', f:'<u>an</u> egg.'}
      ]}
    ]
  };
})();
