/* ============================================================
   Lesson: Reading — Globalization of Foods
   English · Super Goal 2 · Unit 5 (Is There Any Ice Cream?) · صفحة ٤٦
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2). النصّ من الكتاب.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U5_READ'] = {
    id:'EN_SG2_U5_READ',
    title:'Reading — Globalization of Foods',
    lang:'en',
    rule:{
      tag:'النصّ',
      title:'Globalization of Foods',
      intro:'اقرأ عن <b>عولمة الأطعمة</b> — كيف انتشرت المطاعم والأطعمة حول العالم مع تكيّفها لكلّ ثقافة — ثم أجب عن الأسئلة.',
      examples:[
        'International fast-food chains are becoming more popular everywhere. You can find burgers, pizza, ice cream, and coffee in the Americas, Europe, and Asia.',
        'But there are changes according to each country’s taste and culture. In Japan you can get a shrimp burger at McDonald’s, and in KSA the McArabia sandwich with chicken or beef is very popular.',
        'Some brands had difficulty at first. In Peru, the most popular soft drink was and still is Inca Kola, and Coca-Cola could not compete against it.',
        'Ethnic foods are now popular everywhere. Pizza is originally from Italy, but today there are over 78,000 pizzerias in the U.S. And one of the most popular Middle Eastern foods worldwide is shawarma, also called doner.'
      ],
      trick:'الفكرة: عولمةُ الطعام مع تكيّفٍ ثقافيّ (McArabia في السعودية، shrimp burger في اليابان، Inca Kola في بيرو، shawarma عالميًّا).'
    },
    stages:[
      { type:'choice', name:'الفهم', hint:'أجب حسب النصّ', qs:[
        {p:'What is becoming popular everywhere?', ask:'حسب النصّ', o:['International fast-food chains','Home cooking only','Local farms','Tea houses'], a:0, w:'<code>International fast-food chains</code>.', f:'Fast-food chains.'},
        {p:'What popular sandwich is mentioned in KSA?', ask:'حسب النصّ', o:['The McArabia','The shrimp burger','Inca Kola','Pizza'], a:0, w:'<code>the McArabia sandwich</code>.', f:'The McArabia.'},
        {p:'In Peru, which drink did Coca-Cola fail to beat?', ask:'حسب النصّ', o:['Inca Kola','Pepsi','Water','Tea'], a:0, w:'<code>Inca Kola</code>.', f:'Inca Kola.'},
        {p:'Where is pizza originally from?', ask:'حسب النصّ', o:['Italy','Japan','Peru','KSA'], a:0, w:'<code>originally from Italy</code>.', f:'Italy.'},
        {p:'Which Middle Eastern food is popular worldwide?', ask:'حسب النصّ', o:['Shawarma','Sushi','Tacos','Pasta'], a:0, w:'<code>shawarma, also called doner</code>.', f:'Shawarma.'}
      ]},
      { type:'choice', name:'Yes / No', hint:'صحيح أم خطأ حسب النصّ', qs:[
        {p:'Fast food tastes exactly the same in every country.', ask:'Yes / No', o:['No','Yes'], a:0, w:'هناك <code>changes according to culture</code>.', f:'No.'},
        {p:'The McArabia is popular in Saudi Arabia.', ask:'Yes / No', o:['Yes','No'], a:0, w:'<code>very popular</code>.', f:'Yes.'},
        {p:'Coca-Cola easily beat Inca Kola in Peru.', ask:'Yes / No', o:['No','Yes'], a:0, w:'<code>could not compete</code>.', f:'No.'},
        {p:'Pizza comes originally from Italy.', ask:'Yes / No', o:['Yes','No'], a:0, w:'<code>originally from Italy</code>.', f:'Yes.'},
        {p:'Ethnic foods are only local now.', ask:'Yes / No', o:['No','Yes'], a:0, w:'صارت <code>popular everywhere</code>.', f:'No.'}
      ]},
      { type:'gap', name:'أكمل من النصّ', hint:'اختر الكلمة الصحيحة', qs:[
        {p:'Fast-food chains are becoming more ___.', o:['popular','difficult','cheap','local'], a:0, w:'<code>more popular</code>.', f:'more <u>popular</u>.'},
        {p:'In Japan you can get a shrimp ___ at McDonald’s.', o:['burger','pizza','salad','soup'], a:0, w:'<code>shrimp burger</code>.', f:'shrimp <u>burger</u>.'},
        {p:'Pizza is originally from ___.', o:['Italy','Japan','Peru','KSA'], a:0, w:'<code>from Italy</code>.', f:'from <u>Italy</u>.'},
        {p:'Shawarma is also called ___.', o:['doner','pizza','sushi','taco'], a:0, w:'<code>also called doner</code>.', f:'also called <u>doner</u>.'},
        {p:'Foods change according to each country’s taste and ___.', o:['culture','weather','money','size'], a:0, w:'<code>taste and culture</code>.', f:'taste and <u>culture</u>.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['Fast-food','chains','are','popular','everywhere','.'], w:'الفكرة الرئيسة.', f:'Fast-food chains are popular everywhere.'},
        {sol:['Pizza','is','from','Italy','.'], w:'أصلُ البيتزا.', f:'Pizza is from Italy.'},
        {sol:['The','McArabia','is','popular','in','KSA','.'], w:'مثالٌ محلّيّ.', f:'The McArabia is popular in KSA.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما فهمته — مختلطًا', final:true, qs:[
        {p:'What is popular everywhere?', ask:'حسب النصّ', o:['Fast-food chains','Local farms'], a:0, w:'سلاسل الوجبات.', f:'Fast-food chains.'},
        {p:'Popular sandwich in KSA?', ask:'حسب النصّ', o:['The McArabia','The shrimp burger'], a:0, w:'McArabia.', f:'The McArabia.'},
        {p:'Fast food tastes exactly the same everywhere.', ask:'Yes / No', o:['No','Yes'], a:0, w:'يتغيّر بالثقافة.', f:'No.'},
        {p:'Pizza is originally from ___.', ask:'أكمل', o:['Italy','Japan'], a:0, w:'إيطاليا.', f:'<u>Italy</u>.'},
        {p:'Which drink beat Coca-Cola in Peru?', ask:'حسب النصّ', o:['Inca Kola','Pepsi'], a:0, w:'Inca Kola.', f:'Inca Kola.'},
        {p:'Shawarma is also called ___.', ask:'أكمل', o:['doner','sushi'], a:0, w:'doner.', f:'<u>doner</u>.'},
        {sol:['Pizza','is','from','Italy','.'], w:'أصلُ البيتزا.', f:'Pizza is from Italy.'},
        {p:'The McArabia is popular in KSA.', ask:'Yes / No', o:['Yes','No'], a:0, w:'نعم.', f:'Yes.'},
        {p:'Foods change according to ___.', ask:'أكمل', o:['culture','weather'], a:0, w:'الثقافة.', f:'<u>culture</u>.'}
      ]}
    ]
  };
})();
