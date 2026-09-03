/* ============================================================
   Lesson: Vocabulary — Days, Months, Numbers & Age
   English · Super Goal 1 · Unit 2 (What Day Is Today?) · صفحة ١٠
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1).
   lang:'en' → المحتوى إنجليزيّ LTR، والشرح بالعربية.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U2_VOCAB'] = {
    id:'EN_SG1_U2_VOCAB',
    title:'Vocabulary — الأيّام والأشهر والأعداد',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'Days, Months & Numbers',
      intro:'أيّامُ الأسبوع سبعة، وأشهرُ السنة اثنا عشر. والأعداد نوعان: <b>أصليّة</b> (one, two) و<b>ترتيبيّة</b> (first, second) للتواريخ والترتيب.',
      table:[['Days','Sunday … Saturday'],['Months','January … December'],['Cardinal','one, two, three …'],['Ordinal','first, second, third …']],
      examples:['Today is Sunday.','It is January.','I am twelve. (cardinal)','May 4th = May the fourth (ordinal)'],
      trick:'الترتيبيّة غالبًا بإضافة <code>-th</code> (four→fourth)، وشواذّ مهمّة: <code>first, second, third, fifth, ninth, twelfth</code>.'
    },
    stages:[
      { type:'choice', name:'الأيّام والأشهر', hint:'ما التالي في الترتيب؟', qs:[
        {p:'What comes after Monday?',       ask:'اختر الصحيح', o:['Tuesday','Sunday','Friday','March'], a:0, w:'بعد <code>Monday</code> ← <code>Tuesday</code>.', f:'Monday → Tuesday'},
        {p:'What comes after Friday?',        ask:'اختر الصحيح', o:['Saturday','Thursday','Sunday','June'], a:0, w:'بعد <code>Friday</code> ← <code>Saturday</code>.', f:'Friday → Saturday'},
        {p:'What comes before Wednesday?',    ask:'اختر الصحيح', o:['Tuesday','Thursday','Monday','Sunday'], a:0, w:'قبل <code>Wednesday</code> ← <code>Tuesday</code>.', f:'Tuesday → Wednesday'},
        {p:'The month after March is:',       ask:'اختر الصحيح', o:['April','May','February','June'], a:0, w:'بعد <code>March</code> ← <code>April</code>.', f:'March → April'},
        {p:'The month after December is:',    ask:'اختر الصحيح', o:['January','November','October','August'], a:0, w:'بعد <code>December</code> ← <code>January</code>.', f:'December → January'},
        {p:'The month before September is:',  ask:'اختر الصحيح', o:['August','October','July','May'], a:0, w:'قبل <code>September</code> ← <code>August</code>.', f:'August → September'}
      ]},
      { type:'choice', name:'أصليّ وترتيبيّ', hint:'الرقم بالكلمات / الترتيب', qs:[
        {p:'3 = ?',      ask:'بالكلمات', o:['three','third','thirteen','thirty'], a:0, w:'<code>3 = three</code>.', f:'3 = three'},
        {p:'3rd = ?',    ask:'الترتيبيّ', o:['third','three','thirteen','thirty'], a:0, w:'<code>3rd = third</code>.', f:'3rd = third'},
        {p:'12 = ?',     ask:'بالكلمات', o:['twelve','twelfth','twenty','two'], a:0, w:'<code>12 = twelve</code>.', f:'12 = twelve'},
        {p:'1st = ?',    ask:'الترتيبيّ', o:['first','one','fourth','fifth'], a:0, w:'<code>1st = first</code>.', f:'1st = first'},
        {p:'5th = ?',    ask:'الترتيبيّ', o:['fifth','five','fourth','fifteenth'], a:0, w:'شاذّ: <code>5th = fifth</code>.', f:'5th = fifth'},
        {p:'20 = ?',     ask:'بالكلمات', o:['twenty','twelve','twentieth','two'], a:0, w:'<code>20 = twenty</code>.', f:'20 = twenty'}
      ]},
      { type:'gap', name:'العمر والتواريخ', hint:'أكمل الكلمة الناقصة', qs:[
        {p:"How ___ are you?  I'm 12.",       ask:'أكمل الفراغ', o:['old','year','many','age'], a:0, w:'<code>How old</code> للسؤال عن العمر.', f:'How <u>old</u> are you?'},
        {p:'I am ___ years old.  (12)',        ask:'أكمل الفراغ', o:['twelve','twelfth','twenty','two'], a:0, w:'<code>12 = twelve</code>.', f:'I am <u>twelve</u> years old.'},
        {p:'Today is the ___ of June.  (1st)', ask:'أكمل الفراغ', o:['first','one','fourth','fifth'], a:0, w:'<code>1st = first</code>.', f:'... the <u>first</u> of June.'},
        {p:'December is the ___ month.  (12th)', ask:'أكمل الفراغ', o:['twelfth','twelve','twentieth','tenth'], a:0, w:'شاذّ: <code>12th = twelfth</code>.', f:'... the <u>twelfth</u> month.'},
        {p:'The baby is six ___ old.',         ask:'أكمل الفراغ', o:['months','years','days','old'], a:0, w:'رضيع ← <code>months</code>.', f:'... six <u>months</u> old.'},
        {p:'May ___  (the 4th)',               ask:'أكمل الفراغ', o:['fourth','four','fortieth','fifth'], a:0, w:'<code>4th = fourth</code>.', f:'May <u>fourth</u>'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['Today','is','Sunday','.'],            w:'اليوم.', f:'Today is Sunday.'},
        {sol:['It','is','January','.'],               w:'الشهر.', f:'It is January.'},
        {sol:['I','am','twelve','years','old','.'],   w:'العمر بعددٍ أصليّ.', f:'I am twelve years old.'},
        {sol:['My','birthday','is','in','May','.'],   w:'<code>in</code> مع الشهر.', f:'My birthday is in May.'},
        {sol:['The','test','is','on','the','first','.'], w:'<code>on</code> + ترتيبيّ.', f:'The test is on the first.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'What comes after Monday?', ask:'اختر الصحيح', o:['Tuesday','Sunday'], a:0, w:'بعد <code>Monday</code> ← <code>Tuesday</code>.', f:'Monday → Tuesday'},
        {p:'3rd = ?', ask:'الترتيبيّ', o:['third','three','thirteen','thirty'], a:0, w:'<code>3rd = third</code>.', f:'3rd = third'},
        {p:"How ___ are you?  I'm 12.", ask:'أكمل الفراغ', o:['old','year','many','age'], a:0, w:'<code>How old</code>.', f:'How <u>old</u> are you?'},
        {p:'The month after December is:', ask:'اختر الصحيح', o:['January','November'], a:0, w:'بعد <code>December</code> ← <code>January</code>.', f:'December → January'},
        {p:'12 = ?', ask:'بالكلمات', o:['twelve','twelfth','twenty','two'], a:0, w:'<code>12 = twelve</code>.', f:'12 = twelve'},
        {sol:['Today','is','Sunday','.'], w:'اليوم.', f:'Today is Sunday.'},
        {p:'December is the ___ month.  (12th)', ask:'أكمل الفراغ', o:['twelfth','twelve','twentieth','tenth'], a:0, w:'<code>12th = twelfth</code>.', f:'... the <u>twelfth</u> month.'},
        {p:'5th = ?', ask:'الترتيبيّ', o:['fifth','five','fourth','fifteenth'], a:0, w:'<code>5th = fifth</code>.', f:'5th = fifth'},
        {p:'The baby is six ___ old.', ask:'أكمل الفراغ', o:['months','years','days','old'], a:0, w:'رضيع ← <code>months</code>.', f:'... six <u>months</u> old.'}
      ]}
    ]
  };
})();
