/* ============================================================
   Lesson: Vocabulary — School Subjects & Describing People
   English · Super Goal 1 · Unit 10 (What's School Like?) · صفحات ٨٦–٨٩
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U10_VOCAB'] = {
    id:'EN_SG1_U10_VOCAB',
    title:'Vocabulary — School & People',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'Subjects, Traits & Personality',
      intro:'موادُّ المدرسة: <code>math</code> رياضيات، <code>science</code> علوم، <code>history</code> تاريخ، <code>geography</code> جغرافيا، <code>art</code> فنّ، <code>PE</code> تربية بدنية. وصفاتٌ للشكل: <code>tall</code> طويل، <code>short</code> قصير. وصفاتٌ للشخصية: <code>friendly</code> ودود، <code>funny</code> مرِح، <code>shy</code> خجول، <code>smart</code> ذكيّ.',
      table:[['subjects','math, science, history, art'],['physical','tall, short, young'],['personality','friendly, funny, shy'],['likes','I like / I don’t like']],
      trick:'الشكلُ (<code>physical traits</code>): tall/short. والشخصيةُ (<code>personality</code>): friendly/funny/shy. ونعبّر عن الميل بـ <code>like / don’t like</code>.'
    },
    stages:[
      { type:'choice', name:'المواد', hint:'اختر المادّة', qs:[
        {p:'Numbers and equations are in:', o:['math','art','history'], a:0, w:'الرياضيات.', f:'<u>math</u>'},
        {p:'Experiments and nature are in:', o:['science','geography','PE'], a:0, w:'العلوم.', f:'<u>science</u>'},
        {p:'The past and famous events are in:', o:['history','math','art'], a:0, w:'التاريخ.', f:'<u>history</u>'},
        {p:'Drawing and painting are in:', o:['art','science','PE'], a:0, w:'الفنّ.', f:'<u>art</u>'},
        {p:'Sports and exercise are in:', o:['PE','history','math'], a:0, w:'التربية البدنية.', f:'<u>PE</u>'}
      ]},
      { type:'choice', name:'الشكل والشخصية', hint:'trait أم personality؟', qs:[
        {p:'A ___ person makes you laugh.', o:['funny','tall','short'], a:0, w:'المرِح.', f:'<u>funny</u>'},
        {p:'A ___ person is nice and easy to talk to.', o:['friendly','shy','tall'], a:0, w:'الودود.', f:'<u>friendly</u>'},
        {p:'A ___ person doesn’t like to talk to strangers.', o:['shy','funny','smart'], a:0, w:'الخجول.', f:'<u>shy</u>'},
        {p:'A ___ person learns quickly.', o:['smart','short','tall'], a:0, w:'الذكيّ.', f:'<u>smart</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'My favorite subject is ___ because I like numbers.', o:['math','art','PE'], a:0, w:'الرياضيات.', f:'<u>math</u>'},
        {p:'Our teacher is very ___; she always smiles.', o:['friendly','shy','short'], a:0, w:'ودودة.', f:'<u>friendly</u>'},
        {p:'He is ___, so he plays basketball well.', o:['tall','shy','funny'], a:0, w:'طويل.', f:'<u>tall</u>'},
        {p:'I ___ history. It’s interesting.', o:['like','likes','liking'], a:0, w:'<code>I like</code>.', f:'I <u>like</u> history'},
        {p:'She ___ like PE. She prefers art.', o:['doesn’t','don’t','isn’t'], a:0, w:'<code>doesn’t like</code>.', f:'She <u>doesn’t</u> like PE'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['A','funny','person','is','tall','.'], bad:4, fix:'makes you laugh', w:'المرِح يُضحكك، لا علاقة بالطول.', f:'A funny person <u>makes you laugh</u>.'},
        {words:['I','likes','science','.'], bad:1, fix:'like', w:'<code>I like</code> بلا <code>-s</code>.', f:'I <u>like</u> science.'},
        {words:['Math','is','a','history','subject','.'], bad:3, fix:'difficult/easy', w:'الرياضيات مادّةٌ لا نوعٌ من التاريخ.', f:'Math is a <u>difficult</u> subject.'},
        {words:['He','don’t','like','art','.'], bad:1, fix:'doesn’t', w:'<code>He doesn’t like</code>.', f:'He <u>doesn’t</u> like art.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'numbers & equations =', ask:'المادّة', o:['math','art'], a:0, w:'رياضيات.', f:'<u>math</u>'},
        {p:'experiments & nature =', ask:'المادّة', o:['science','history'], a:0, w:'علوم.', f:'<u>science</u>'},
        {p:'drawing & painting =', ask:'المادّة', o:['art','PE'], a:0, w:'فنّ.', f:'<u>art</u>'},
        {p:'makes you laugh =', ask:'الصفة', o:['funny','shy'], a:0, w:'مرِح.', f:'<u>funny</u>'},
        {p:'nice, easy to talk to =', ask:'الصفة', o:['friendly','short'], a:0, w:'ودود.', f:'<u>friendly</u>'},
        {p:'doesn’t talk to strangers =', ask:'الصفة', o:['shy','smart'], a:0, w:'خجول.', f:'<u>shy</u>'},
        {p:'I ___ history.', ask:'أكمل', o:['like','likes'], a:0, w:'<code>I like</code>.', f:'<u>like</u>'},
        {p:'She ___ like PE.', ask:'أكمل', o:['doesn’t','don’t'], a:0, w:'<code>doesn’t</code>.', f:'<u>doesn’t</u>'},
        {p:'sports & exercise =', ask:'المادّة', o:['PE','math'], a:0, w:'تربية بدنية.', f:'<u>PE</u>'}
      ]}
    ]
  };
})();
