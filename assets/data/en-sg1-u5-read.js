/* ============================================================
   Lesson: Reading — Family Values and Society
   English · Super Goal 1 · Unit 5 (Families, Families) · صفحة ٤٥
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1) — مقتبسٌ من رؤية ٢٠٣٠.
   lang:'en' → المحتوى إنجليزيّ LTR، والشرح بالعربية.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U5_READ'] = {
    id:'EN_SG1_U5_READ',
    title:'Reading — Family Values and Society',
    lang:'en',
    rule:{
      tag:'النصّ',
      title:'Family Values and Society',
      intro:'اقرأ عن «القيم الأسريّة والمجتمع»: مكانة الأسرة في رؤية السعودية ٢٠٣٠ وكيف تدعمها الدولة، ثم أجب.',
      examples:[
        'Saudi Arabia has a vision for the country with three themes.',
        'One of the themes is a good society. Families are very important.',
        'Families protect society and care for the children.',
        'Islamic values help families stay together.',
        "Saudi Arabia supports children's education and helps families buy homes."
      ],
      trick:'انتبه لما <b>تفعله</b> الأسرة (<code>protect</code>, <code>care for</code>) وما <b>تقدّمه</b> الدولة (<code>education</code> support, help to buy <code>homes</code>).'
    },
    stages:[
      { type:'choice', name:'الفهم', hint:'أجب حسب النصّ', qs:[
        {p:'How many themes does the vision have?', ask:'حسب النصّ', o:['three','two','four','five'], a:0, w:'<code>three themes.</code>', f:'three'},
        {p:'One of the themes is a good:',          ask:'حسب النصّ', o:['society','school','team','city'], a:0, w:'<code>a good society.</code>', f:'a good society'},
        {p:'Families care for the:',                ask:'حسب النصّ', o:['children','cars','homes','schools'], a:0, w:'<code>care for the children.</code>', f:'the children'},
        {p:'What helps families stay together?',    ask:'حسب النصّ', o:['Islamic values','money','sports','travel'], a:0, w:'<code>Islam helps families stay together.</code>', f:'Islamic values'},
        {p:'Saudi Arabia helps families buy:',      ask:'حسب النصّ', o:['homes','cars','phones','books'], a:0, w:'<code>helps its families to buy homes.</code>', f:'homes'},
        {p:'Families are very important in:',       ask:'حسب النصّ', o:['society','school','the market','sport'], a:0, w:'<code>important in society.</code>', f:'society'}
      ]},
      { type:'choice', name:'صحيح أم خطأ؟', hint:'Yes / No حسب النصّ', qs:[
        {p:'Families are important in society.',       ask:'صحيح أم خطأ؟', o:['Yes','No'], a:0, w:'<code>very important in society.</code>', f:'Yes.'},
        {p:'The vision has three themes.',             ask:'صحيح أم خطأ؟', o:['Yes','No'], a:0, w:'<code>three themes.</code>', f:'Yes.'},
        {p:'Families protect society.',                ask:'صحيح أم خطأ؟', o:['Yes','No'], a:0, w:'<code>They protect society.</code>', f:'Yes.'},
        {p:"Saudi Arabia doesn't help families.",       ask:'صحيح أم خطأ؟', o:['No','Yes'], a:0, w:'الدولة <b>تدعم</b> الأسر.', f:'No — it helps them.'},
        {p:'Islamic values help families stay together.', ask:'صحيح أم خطأ؟', o:['Yes','No'], a:0, w:'<code>Islam helps families stay together.</code>', f:'Yes.'}
      ]},
      { type:'gap', name:'أكمل من النصّ', hint:'اختر الكلمة من النصّ', qs:[
        {p:'The vision has three ___.',              ask:'أكمل الفراغ', o:['themes','homes','cars','books'], a:0, w:'<code>three themes</code>.', f:'three <u>themes</u>.'},
        {p:'One theme is a good ___.',                ask:'أكمل الفراغ', o:['society','school','team','city'], a:0, w:'<code>a good society</code>.', f:'a good <u>society</u>.'},
        {p:'Families care for the ___.',              ask:'أكمل الفراغ', o:['children','cars','homes','roads'], a:0, w:'<code>the children</code>.', f:'the <u>children</u>.'},
        {p:'___ values help families stay together.', ask:'أكمل الفراغ', o:['Islamic','Modern','Old','New'], a:0, w:'<code>Islamic values</code>.', f:'<u>Islamic</u> values.'},
        {p:'Saudi Arabia helps families buy ___.',     ask:'أكمل الفراغ', o:['homes','cars','food','phones'], a:0, w:'<code>buy homes</code>.', f:'buy <u>homes</u>.'},
        {p:'Families ___ society.',                    ask:'أكمل الفراغ', o:['protect','buy','open','close'], a:0, w:'<code>protect society</code>.', f:'families <u>protect</u> society.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['Families','are','very','important','.'],        w:'مكانةُ الأسرة.', f:'Families are very important.'},
        {sol:['Families','care','for','children','.'],          w:'دورُ الأسرة.', f:'Families care for children.'},
        {sol:['This','is','my','family','.'],                   w:'تقديمٌ.', f:'This is my family.'},
        {sol:['How','many','children','do','you','have','?'],   w:'سؤالٌ بـ <code>How many</code>.', f:'How many children do you have?'},
        {sol:['Islamic','values','help','families','.'],        w:'القيم الإسلامية.', f:'Islamic values help families.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما فهمته — مختلطًا', final:true, qs:[
        {p:'How many themes does the vision have?', ask:'حسب النصّ', o:['three','two'], a:0, w:'<code>three themes</code>.', f:'three'},
        {p:'One of the themes is a good:', ask:'حسب النصّ', o:['society','school'], a:0, w:'<code>a good society</code>.', f:'a good society'},
        {p:"Saudi Arabia doesn't help families.", ask:'صحيح أم خطأ؟', o:['No','Yes'], a:0, w:'الدولة تدعم الأسر.', f:'No.'},
        {p:'___ values help families stay together.', ask:'أكمل الفراغ', o:['Islamic','Modern','Old','New'], a:0, w:'<code>Islamic values</code>.', f:'<u>Islamic</u> values.'},
        {p:'Saudi Arabia helps families buy:', ask:'حسب النصّ', o:['homes','cars'], a:0, w:'<code>buy homes</code>.', f:'homes'},
        {sol:['Families','are','very','important','.'], w:'مكانةُ الأسرة.', f:'Families are very important.'},
        {p:'Families protect society.', ask:'صحيح أم خطأ؟', o:['Yes','No'], a:0, w:'<code>protect society</code>.', f:'Yes.'},
        {p:'Families care for the ___.', ask:'أكمل الفراغ', o:['children','cars','homes','roads'], a:0, w:'<code>the children</code>.', f:'the <u>children</u>.'},
        {sol:['This','is','my','family','.'], w:'تقديمٌ.', f:'This is my family.'}
      ]}
    ]
  };
})();
