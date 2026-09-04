/* ============================================================
   Lesson: Reading — Jobs and Employment in Saudi Arabia
   English · Super Goal 2 · Unit 3 (Who’s Who) · صفحة ٢٤
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2). النصّ من الكتاب (رؤية ٢٠٣٠).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U3_READ'] = {
    id:'EN_SG2_U3_READ',
    title:'Reading — Jobs and Employment in Saudi Arabia',
    lang:'en',
    rule:{
      tag:'النصّ',
      title:'Jobs and Employment in Saudi Arabia',
      intro:'اقرأ عن <b>رؤية المملكة ٢٠٣٠</b> وأهدافها في التوظيف، ثم أجب عن الأسئلة.',
      examples:[
        'Saudi Arabia has many assets: our place, our society, our economy, and our people. We will use these to build the best future for our country.',
        'A vision for the future: we build and support a culture of determination and achieving goals.',
        'Employment goals for 2030: to lower the rate of unemployment from 11.6% to 7%, and to increase women’s participation in the workforce from 22% to 30%.',
        'Our vision is built around three themes: a good society, a strong economy, and a determined nation.'
      ],
      trick:'ركّز على الأرقام: البطالة من <code>11.6%</code> إلى <code>7%</code>، ومشاركة المرأة من <code>22%</code> إلى <code>30%</code>، والمحاور الثلاثة للرؤية.'
    },
    stages:[
      { type:'choice', name:'الفهم', hint:'أجب حسب النصّ', qs:[
        {p:'What is one of Saudi Arabia’s assets?', ask:'حسب النصّ', o:['Its people','Its snow','Its rivers','Its forests'], a:0, w:'<code>our place, society, economy, and people</code>.', f:'Its people.'},
        {p:'By 2030, unemployment should go down to:', ask:'حسب النصّ', o:['7%','11.6%','22%','30%'], a:0, w:'<code>from 11.6% to 7%</code>.', f:'7%.'},
        {p:'Women’s participation in the workforce should rise to:', ask:'حسب النصّ', o:['30%','22%','7%','50%'], a:0, w:'<code>from 22% to 30%</code>.', f:'30%.'},
        {p:'How many themes is the vision built around?', ask:'حسب النصّ', o:['Three','Two','Four','Five'], a:0, w:'<code>three themes</code>.', f:'Three.'},
        {p:'Which is NOT one of the three themes?', ask:'حسب النصّ', o:['A big army','A good society','A strong economy','A determined nation'], a:0, w:'المحاور: مجتمع حيويّ، اقتصاد مزدهر، وطن طموح.', f:'A big army — not a theme.'}
      ]},
      { type:'choice', name:'Yes / No', hint:'صحيح أم خطأ حسب النصّ', qs:[
        {p:'Saudi Arabia has many assets.', ask:'Yes / No', o:['Yes','No'], a:0, w:'<code>many assets</code>.', f:'Yes.'},
        {p:'The goal is to raise unemployment.', ask:'Yes / No', o:['No','Yes'], a:0, w:'بل <code>lower</code> البطالة.', f:'No — to lower it.'},
        {p:'The vision wants more women in the workforce.', ask:'Yes / No', o:['Yes','No'], a:0, w:'<code>from 22% to 30%</code>.', f:'Yes.'},
        {p:'The vision has three main themes.', ask:'Yes / No', o:['Yes','No'], a:0, w:'<code>three themes</code>.', f:'Yes.'},
        {p:'The vision is about the past.', ask:'Yes / No', o:['No','Yes'], a:0, w:'<code>a vision for the future</code>.', f:'No — the future.'}
      ]},
      { type:'gap', name:'أكمل من النصّ', hint:'اختر الكلمة الصحيحة', qs:[
        {p:'Saudi Arabia has many ___.', o:['assets','problems','deserts','rivers'], a:0, w:'<code>assets</code> = مقوّمات.', f:'many <u>assets</u>.'},
        {p:'We build a culture of ___ and achieving goals.', o:['determination','laziness','fear','waiting'], a:0, w:'<code>determination</code> = عزيمة.', f:'a culture of <u>determination</u>.'},
        {p:'Lower unemployment from 11.6% to ___.', o:['7%','22%','30%','70%'], a:0, w:'<code>to 7%</code>.', f:'to <u>7%</u>.'},
        {p:'Increase women’s participation to ___.', o:['30%','7%','11.6%','3%'], a:0, w:'<code>to 30%</code>.', f:'to <u>30%</u>.'},
        {p:'The vision is for the ___.', o:['future','past','week','holiday'], a:0, w:'<code>a vision for the future</code>.', f:'for the <u>future</u>.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['Saudi','Arabia','has','many','assets','.'], w:'الفكرة الرئيسة.', f:'Saudi Arabia has many assets.'},
        {sol:['The','vision','is','for','the','future','.'], w:'رؤيةٌ للمستقبل.', f:'The vision is for the future.'},
        {sol:['We','want','a','strong','economy','.'], w:'أحد المحاور.', f:'We want a strong economy.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما فهمته — مختلطًا', final:true, qs:[
        {p:'Unemployment should go down to:', ask:'حسب النصّ', o:['7%','22%'], a:0, w:'إلى 7%.', f:'7%.'},
        {p:'Women’s participation should rise to:', ask:'حسب النصّ', o:['30%','7%'], a:0, w:'إلى 30%.', f:'30%.'},
        {p:'The goal is to raise unemployment.', ask:'Yes / No', o:['No','Yes'], a:0, w:'بل خفضها.', f:'No.'},
        {p:'How many themes?', ask:'حسب النصّ', o:['Three','Five'], a:0, w:'ثلاثة.', f:'Three.'},
        {p:'Saudi Arabia has many ___.', ask:'أكمل', o:['assets','deserts'], a:0, w:'مقوّمات.', f:'<u>assets</u>.'},
        {p:'The vision is about the ___.', ask:'أكمل', o:['future','past'], a:0, w:'المستقبل.', f:'<u>future</u>.'},
        {sol:['Saudi','Arabia','has','many','assets','.'], w:'الفكرة الرئيسة.', f:'Saudi Arabia has many assets.'},
        {p:'A culture of ___.', ask:'أكمل', o:['determination','fear'], a:0, w:'عزيمة.', f:'<u>determination</u>.'},
        {p:'The vision wants more women in the workforce.', ask:'Yes / No', o:['Yes','No'], a:0, w:'نعم.', f:'Yes.'}
      ]}
    ]
  };
})();
