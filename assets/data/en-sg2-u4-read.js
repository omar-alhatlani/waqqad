/* ============================================================
   Lesson: Reading — Sky High!
   English · Super Goal 2 · Unit 4 (Favorite Pastimes) · صفحة ٣٢
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2). النصّ من الكتاب.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U4_READ'] = {
    id:'EN_SG2_U4_READ',
    title:'Reading — Sky High!',
    lang:'en',
    rule:{
      tag:'النصّ',
      title:'Sky High!',
      intro:'اقرأ عن هواية <b>نماذج الطائرات</b> (aeromodelling) — الطائرات الصغيرة التي يتحكّم بها الإنسان لاسلكيًّا — ثم أجب عن الأسئلة.',
      examples:[
        'Aeromodelling is an exciting hobby. It attracts people of all ages who share one interest: the love of flying small-sized airplanes.',
        'Today, the big thing is radio-controlled airplanes. People control the movement of the planes through radio signals, and the models can even perform aerobatics in the sky.',
        'Radio-controlled airplanes come in all sizes, from a Mini Flyer with a 23-centimeter wingspan to huge jet models. Jet-powered models can travel at 380 kilometers per hour — faster than a Formula 1 race car.',
        'Aeromodelling is popular all over the world. In the United States, the Academy of Model Aeronautics has more than 170,000 members in 250 clubs.'
      ],
      trick:'ركّز على: الهواية = طيران نماذج طائرات، والتحكّم <code>radio-controlled</code>، والسرعة <code>380 km/h</code>، وعدد الأعضاء <code>170,000</code>.'
    },
    stages:[
      { type:'choice', name:'الفهم', hint:'أجب حسب النصّ', qs:[
        {p:'What is aeromodelling?', ask:'حسب النصّ', o:['Flying small model airplanes','Racing cars','Painting planes','Building ships'], a:0, w:'<code>the love of flying small-sized airplanes</code>.', f:'Flying small model airplanes.'},
        {p:'How do people control the planes today?', ask:'حسب النصّ', o:['Through radio signals','With long cables','By hand only','With magnets'], a:0, w:'<code>radio-controlled … radio signals</code>.', f:'Through radio signals.'},
        {p:'How fast can jet models travel?', ask:'حسب النصّ', o:['380 km/h','38 km/h','170 km/h','23 km/h'], a:0, w:'<code>380 kilometers per hour</code>.', f:'380 km/h.'},
        {p:'How many members does the Academy have?', ask:'حسب النصّ', o:['More than 170,000','250','23','380'], a:0, w:'<code>more than 170,000 members</code>.', f:'More than 170,000.'},
        {p:'Who does aeromodelling attract?', ask:'حسب النصّ', o:['People of all ages','Only children','Only pilots','Only adults'], a:0, w:'<code>people of all ages</code>.', f:'People of all ages.'}
      ]},
      { type:'choice', name:'Yes / No', hint:'صحيح أم خطأ حسب النصّ', qs:[
        {p:'Aeromodelling is a boring hobby.', ask:'Yes / No', o:['No','Yes'], a:0, w:'بل <code>exciting</code>.', f:'No — exciting.'},
        {p:'Model planes come in different sizes.', ask:'Yes / No', o:['Yes','No'], a:0, w:'<code>all shapes and sizes</code>.', f:'Yes.'},
        {p:'Jet models are slower than a Formula 1 car.', ask:'Yes / No', o:['No','Yes'], a:0, w:'بل أسرع (<code>more than the top speed</code>).', f:'No — faster.'},
        {p:'Aeromodelling is popular around the world.', ask:'Yes / No', o:['Yes','No'], a:0, w:'<code>popular all over the world</code>.', f:'Yes.'},
        {p:'People control the models with radio signals.', ask:'Yes / No', o:['Yes','No'], a:0, w:'<code>through radio signals</code>.', f:'Yes.'}
      ]},
      { type:'gap', name:'أكمل من النصّ', hint:'اختر الكلمة الصحيحة', qs:[
        {p:'Aeromodelling is an exciting ___.', o:['hobby','job','test','school'], a:0, w:'<code>an exciting hobby</code>.', f:'an exciting <u>hobby</u>.'},
        {p:'Today, the big thing is ___-controlled airplanes.', o:['radio','hand','water','solar'], a:0, w:'<code>radio-controlled</code>.', f:'<u>radio</u>-controlled.'},
        {p:'Models can perform ___ in the sky.', o:['aerobatics','cooking','reading','driving'], a:0, w:'<code>aerobatics</code> = مناورات جوية.', f:'perform <u>aerobatics</u>.'},
        {p:'Jet models travel at 380 kilometers per ___.', o:['hour','day','week','minute'], a:0, w:'<code>per hour</code>.', f:'per <u>hour</u>.'},
        {p:'Aeromodelling is popular all over the ___.', o:['world','city','school','house'], a:0, w:'<code>all over the world</code>.', f:'all over the <u>world</u>.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['Aeromodelling','is','an','exciting','hobby','.'], w:'الفكرة الرئيسة.', f:'Aeromodelling is an exciting hobby.'},
        {sol:['The','planes','are','radio-controlled','.'], w:'طريقةُ التحكّم.', f:'The planes are radio-controlled.'},
        {sol:['It','is','popular','all','over','the','world','.'], w:'شهرةُ الهواية.', f:'It is popular all over the world.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما فهمته — مختلطًا', final:true, qs:[
        {p:'What is aeromodelling?', ask:'حسب النصّ', o:['Flying model airplanes','Racing cars'], a:0, w:'طيران النماذج.', f:'Flying model airplanes.'},
        {p:'How are planes controlled today?', ask:'حسب النصّ', o:['Radio signals','Long cables'], a:0, w:'لاسلكيًّا.', f:'Radio signals.'},
        {p:'Aeromodelling is boring.', ask:'Yes / No', o:['No','Yes'], a:0, w:'exciting.', f:'No.'},
        {p:'How fast can jet models go?', ask:'حسب النصّ', o:['380 km/h','38 km/h'], a:0, w:'٣٨٠.', f:'380 km/h.'},
        {p:'Models can perform ___ in the sky.', ask:'أكمل', o:['aerobatics','cooking'], a:0, w:'مناورات.', f:'<u>aerobatics</u>.'},
        {p:'It is popular around the world.', ask:'Yes / No', o:['Yes','No'], a:0, w:'نعم.', f:'Yes.'},
        {sol:['Aeromodelling','is','an','exciting','hobby','.'], w:'الفكرة الرئيسة.', f:'Aeromodelling is an exciting hobby.'},
        {p:'How many members in the Academy?', ask:'حسب النصّ', o:['More than 170,000','250'], a:0, w:'أكثر من ١٧٠٠٠٠.', f:'More than 170,000.'},
        {p:'Aeromodelling is an exciting ___.', ask:'أكمل', o:['hobby','job'], a:0, w:'هواية.', f:'<u>hobby</u>.'}
      ]}
    ]
  };
})();
