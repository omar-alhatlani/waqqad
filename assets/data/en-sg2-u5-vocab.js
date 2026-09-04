/* ============================================================
   Lesson: Vocabulary — Food & Ordering
   English · Super Goal 2 · Unit 5 (Is There Any Ice Cream?) · صفحة ٤٠
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U5_VOCAB'] = {
    id:'EN_SG2_U5_VOCAB',
    title:'Vocabulary — Food & Ordering',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'Food · Ordering from a menu',
      intro:'مفرداتُ الطعام: <code>meat</code> لحم، <code>seafood</code> مأكولات بحرية، <code>vegetables</code> خضار، <code>fruit</code> فاكهة، <code>dessert</code> حلوى، <code>menu</code> قائمة الطعام. وعند الطلب نقول: <code>I’d like…</code> أو <code>I would like…</code>، ونعرض بـ <code>Would you like…?</code> ونجيب <code>Yes, please. / No, thank you.</code>',
      table:[['meat / seafood','لحم / مأكولات بحرية'],['vegetables / fruit','خضار / فاكهة'],['dessert / menu','حلوى / قائمة'],['I’d like…','أريد (طلبٌ مؤدّب)']],
      trick:'<code>I’d like</code> صيغةٌ مؤدّبة لـ <code>I want</code>. ونعرض بـ <code>Would you like some…?</code> ونردّ <code>Yes, please</code> أو <code>No, thank you</code>.'
    },
    stages:[
      { type:'choice', name:'المعنى بالعربية', hint:'اختر المعنى الصحيح', qs:[
        {p:'seafood', ask:'المعنى', o:['مأكولات بحرية','لحوم','حلوى'], a:0, w:'<code>seafood</code> = مأكولات بحرية.', f:'seafood = مأكولات بحرية.'},
        {p:'dessert', ask:'المعنى', o:['حلوى','خضار','مشروب'], a:0, w:'<code>dessert</code> = حلوى.', f:'dessert = حلوى.'},
        {p:'vegetables', ask:'المعنى', o:['خضار','فاكهة','لحم'], a:0, w:'<code>vegetables</code> = خضار.', f:'vegetables = خضار.'},
        {p:'menu', ask:'المعنى', o:['قائمة الطعام','الحساب','النادل'], a:0, w:'<code>menu</code> = قائمة الطعام.', f:'menu = قائمة الطعام.'},
        {p:'meat', ask:'المعنى', o:['لحم','خبز','ماء'], a:0, w:'<code>meat</code> = لحم.', f:'meat = لحم.'}
      ]},
      { type:'choice', name:'صنّف الطعام', hint:'إلى أيّ مجموعة ينتمي؟', qs:[
        {p:'shrimp', ask:'المجموعة', o:['seafood','fruit','dessert'], a:0, w:'الروبيان ← <code>seafood</code>.', f:'seafood.'},
        {p:'apple', ask:'المجموعة', o:['fruit','meat','seafood'], a:0, w:'التفاح ← <code>fruit</code>.', f:'fruit.'},
        {p:'ice cream', ask:'المجموعة', o:['dessert','vegetables','meat'], a:0, w:'الآيس كريم ← <code>dessert</code>.', f:'dessert.'},
        {p:'carrot', ask:'المجموعة', o:['vegetables','fruit','dessert'], a:0, w:'الجزر ← <code>vegetables</code>.', f:'vegetables.'},
        {p:'chicken', ask:'المجموعة', o:['meat','seafood','fruit'], a:0, w:'الدجاج ← <code>meat</code>.', f:'meat.'}
      ]},
      { type:'gap', name:'الطلب والعرض', hint:'عبارات المطعم', qs:[
        {p:'A: ___ you like some dessert?  B: Yes, please.', o:['Would','Do','Are','Is'], a:0, w:'العرضُ المؤدّب ← <code>Would you like…?</code>', f:'<u>Would</u> you like…?'},
        {p:'I’d ___ a salad, please.', o:['like','want','need to'], a:0, w:'<code>I’d like</code> = أريد (مؤدّب).', f:'I’d <u>like</u> a salad.'},
        {p:'B: No, ___ you.', o:['thank','please','yes'], a:0, w:'الرفضُ المؤدّب ← <code>No, thank you</code>.', f:'No, <u>thank</u> you.'},
        {p:'Can I see the ___, please?', o:['menu','meat','fruit'], a:0, w:'قائمة الطعام ← <code>menu</code>.', f:'the <u>menu</u>.'},
        {p:'Would you like some coffee?  Yes, ___.', o:['please','thank','sorry'], a:0, w:'القبولُ ← <code>Yes, please</code>.', f:'Yes, <u>please</u>.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['I','want','a','salad',' (المؤدّب)','.'], bad:1, fix:'’d like', w:'الأدبُ في المطعم ← <code>I’d like</code>.', f:'I’<u>d like</u> a salad.'},
        {words:['Shrimp','is','a','fruit','.'], bad:3, fix:'seafood', w:'الروبيان مأكولاتٌ بحرية.', f:'Shrimp is <u>seafood</u>.'},
        {words:['Do','you','like','some','coffee','?',' (عرض مؤدّب)'], bad:0, fix:'Would', w:'العرضُ المؤدّب ← <code>Would</code>.', f:'<u>Would</u> you like some coffee?'},
        {words:['Ice','cream','is','a','vegetable','.'], bad:4, fix:'dessert', w:'الآيس كريم حلوى.', f:'Ice cream is a <u>dessert</u>.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['I’d','like','a','salad','.'], w:'طلبٌ مؤدّب.', f:'I’d like a salad.'},
        {sol:['Would','you','like','some','dessert','?'], w:'عرضٌ مؤدّب.', f:'Would you like some dessert?'},
        {sol:['No',',','thank','you','.'], w:'رفضٌ مؤدّب.', f:'No, thank you.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'seafood', ask:'المعنى', o:['مأكولات بحرية','حلوى'], a:0, w:'مأكولات بحرية.', f:'seafood.'},
        {p:'apple', ask:'المجموعة', o:['fruit','meat'], a:0, w:'فاكهة.', f:'fruit.'},
        {p:'___ you like some dessert?', ask:'اختر', o:['Would','Do'], a:0, w:'عرضٌ مؤدّب.', f:'<u>Would</u>.'},
        {p:'I’d ___ a salad.', ask:'اختر', o:['like','want'], a:0, w:'مؤدّب.', f:'<u>like</u>.'},
        {p:'ice cream', ask:'المجموعة', o:['dessert','vegetables'], a:0, w:'حلوى.', f:'dessert.'},
        {sol:['I’d','like','a','salad','.'], w:'طلبٌ مؤدّب.', f:'I’d like a salad.'},
        {p:'menu', ask:'المعنى', o:['قائمة الطعام','الحساب'], a:0, w:'قائمة.', f:'menu = قائمة.'},
        {p:'No, ___ you.', ask:'اختر', o:['thank','please'], a:0, w:'رفضٌ مؤدّب.', f:'<u>thank</u> you.'},
        {p:'chicken', ask:'المجموعة', o:['meat','fruit'], a:0, w:'لحم.', f:'meat.'}
      ]}
    ]
  };
})();
