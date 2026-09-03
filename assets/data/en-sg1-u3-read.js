/* ============================================================
   Lesson: Reading — Museum of Science
   English · Super Goal 1 · Unit 3 (What's That?) · صفحة ٢٣
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1).
   lang:'en' → المحتوى إنجليزيّ LTR، والشرح بالعربية.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U3_READ'] = {
    id:'EN_SG1_U3_READ',
    title:'Reading — Museum of Science',
    lang:'en',
    rule:{
      tag:'النصّ',
      title:'Museum of Science',
      intro:'اقرأ عن «متحف العلوم»: معروضاتُه ووحداتُه التفاعليّة ومعارضُه الخاصّة، ثم أجب.',
      examples:[
        'The Museum of Science has over 800 exhibits and 2,000 interactive units.',
        'Special: the Leonardo da Vinci exhibit — inventions of the famous painter.',
        'Walk through a six-meter model of a human heart.',
        'See the first spacecraft to go around the moon.',
        'The Omnimax 3-D Theater shows a film about Greece.'
      ],
      trick:'انتبه للأرقام (<code>800</code>, <code>2,000</code>) والأسماء (<code>Leonardo da Vinci</code>) والمعروضات (<code>human heart</code>, <code>spacecraft</code>, <code>Greece</code>).'
    },
    stages:[
      { type:'choice', name:'الفهم', hint:'أجب حسب النصّ', qs:[
        {p:'The museum has things from the world of:', ask:'حسب النصّ', o:['science','sports','music','cooking'], a:0, w:'<code>the world of science and technology.</code>', f:'science and technology'},
        {p:'The six-meter model is of a:',              ask:'حسب النصّ', o:['human heart','spacecraft','submarine','painting'], a:0, w:'<code>a six-meter model of a human heart.</code>', f:'a human heart'},
        {p:'The inventions are by:',                    ask:'حسب النصّ', o:['Leonardo da Vinci','Newton','Edison','Picasso'], a:0, w:'<code>the Leonardo da Vinci exhibit.</code>', f:'Leonardo da Vinci'},
        {p:'The 3-D film is about:',                    ask:'حسب النصّ', o:['Greece','Egypt','China','Rome'], a:0, w:'<code>a journey ... to Greece.</code>', f:'Greece'},
        {p:'How many exhibits are there?',              ask:'حسب النصّ', o:['over 800','over 80','over 8,000','over 200'], a:0, w:'<code>over 800 exhibits.</code>', f:'over 800'},
        {p:'The first spacecraft went around the:',     ask:'حسب النصّ', o:['moon','sun','Earth','sea'], a:0, w:'<code>go around the moon.</code>', f:'the moon'}
      ]},
      { type:'choice', name:'صحيح أم خطأ؟', hint:'Yes / No حسب النصّ', qs:[
        {p:'The museum has over 800 exhibits.',     ask:'صحيح أم خطأ؟', o:['Yes','No'], a:0, w:'<code>over 800 exhibits.</code>', f:'Yes.'},
        {p:'The model of the heart is six meters.', ask:'صحيح أم خطأ؟', o:['Yes','No'], a:0, w:'<code>six-meter model of a human heart.</code>', f:'Yes.'},
        {p:'Leonardo da Vinci was a painter.',      ask:'صحيح أم خطأ؟', o:['Yes','No'], a:0, w:'<code>the famous painter.</code>', f:'Yes.'},
        {p:'The film is about Egypt.',              ask:'صحيح أم خطأ؟', o:['No','Yes'], a:0, w:'الفيلم عن <b>Greece</b>، لا Egypt.', f:'No — about Greece.'},
        {p:'There is a submarine from World War II.', ask:'صحيح أم خطأ؟', o:['Yes','No'], a:0, w:'<code>a German submarine from World War II.</code>', f:'Yes.'}
      ]},
      { type:'gap', name:'أكمل من النصّ', hint:'اختر الكلمة من النصّ', qs:[
        {p:'The museum has 800 ___.',            ask:'أكمل الفراغ', o:['exhibits','tickets','books','rooms'], a:0, w:'<code>800 exhibits</code>.', f:'800 <u>exhibits</u>.'},
        {p:'Walk through a model of a human ___.', ask:'أكمل الفراغ', o:['heart','hand','head','house'], a:0, w:'<code>human heart</code>.', f:'a human <u>heart</u>.'},
        {p:'The inventions are by Leonardo da ___.', ask:'أكمل الفراغ', o:['Vinci','Roma','Volta','Vista'], a:0, w:'<code>Leonardo da Vinci</code>.', f:'Leonardo da <u>Vinci</u>.'},
        {p:'The film is about ___.',              ask:'أكمل الفراغ', o:['Greece','Egypt','China','Spain'], a:0, w:'<code>a journey ... to Greece</code>.', f:'about <u>Greece</u>.'},
        {p:'See the first ___ to go around the moon.', ask:'أكمل الفراغ', o:['spacecraft','airplane','car','ship'], a:0, w:'<code>the first spacecraft</code>.', f:'the first <u>spacecraft</u>.'},
        {p:'There are over 2,000 ___ units.',     ask:'أكمل الفراغ', o:['interactive','science','small','old'], a:0, w:'<code>interactive units</code>.', f:'2,000 <u>interactive</u> units.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['The','museum','has','many','exhibits','.'], w:'كثرةُ المعروضات.', f:'The museum has many exhibits.'},
        {sol:['This','is','a','human','heart','.'],        w:'وصفُ المعروض.', f:'This is a human heart.'},
        {sol:['The','film','is','about','Greece','.'],      w:'موضوعُ الفيلم.', f:'The film is about Greece.'},
        {sol:['What','is','this','?'],                     w:'سؤالُ الزائر.', f:'What is this?'},
        {sol:["Don't",'touch','the','exhibits','.'],        w:'تعليماتُ المتحف.', f:"Don't touch the exhibits."}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما فهمته — مختلطًا', final:true, qs:[
        {p:'The six-meter model is of a:', ask:'حسب النصّ', o:['human heart','spacecraft'], a:0, w:'<code>a human heart</code>.', f:'a human heart'},
        {p:'The 3-D film is about:', ask:'حسب النصّ', o:['Greece','Egypt'], a:0, w:'<code>Greece</code>.', f:'Greece'},
        {p:'The film is about Egypt.', ask:'صحيح أم خطأ؟', o:['No','Yes'], a:0, w:'عن Greece لا Egypt.', f:'No.'},
        {p:'The inventions are by Leonardo da ___.', ask:'أكمل الفراغ', o:['Vinci','Roma','Volta','Vista'], a:0, w:'<code>Leonardo da Vinci</code>.', f:'da <u>Vinci</u>.'},
        {p:'How many exhibits are there?', ask:'حسب النصّ', o:['over 800','over 80'], a:0, w:'<code>over 800</code>.', f:'over 800'},
        {sol:['The','film','is','about','Greece','.'], w:'موضوعُ الفيلم.', f:'The film is about Greece.'},
        {p:'The museum has over 800 exhibits.', ask:'صحيح أم خطأ؟', o:['Yes','No'], a:0, w:'<code>over 800 exhibits</code>.', f:'Yes.'},
        {p:'Walk through a model of a human ___.', ask:'أكمل الفراغ', o:['heart','hand','head','house'], a:0, w:'<code>human heart</code>.', f:'human <u>heart</u>.'},
        {p:'The first spacecraft went around the:', ask:'حسب النصّ', o:['moon','sun'], a:0, w:'<code>around the moon</code>.', f:'the moon'}
      ]}
    ]
  };
})();
