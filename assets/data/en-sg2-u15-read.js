/* ============================================================
   Lesson: Reading — Age Means Nothing
   English · Super Goal 2 · Unit 15 (Today's News) · صفحة ١٣٧
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U15_READ'] = {
    id:'EN_SG2_U15_READ',
    title:'Reading — Age Means Nothing',
    lang:'en',
    rule:{
      tag:'Reading',
      title:'Age Means Nothing',
      intro:'اقرأِ الخبرَ عن مارتا الشجاعة، ثمّ أجِب عن الأسئلة.',
      examples:[
        'Six-year-old Marta Garcia was sitting with her three-year-old brother in the backseat as her dad prepared to get in the car.',
        'Suddenly a stranger appeared and pushed Marta’s father away. He wanted to steal the car. The father fought back, but the thief overpowered him.',
        'The father held on to the car door and screamed, but he lost his grip and fell onto the road.',
        'But Marta wasn’t going to let the thief get away. She started hitting the carjacker and pulling his hair. Finally he stopped the car and ordered the children out.',
        'Marta took her brother from his car seat and helped him out. The police officer said, “Marta is a brave little girl.”'
      ],
      trick:'مارتا (٦ سنوات) أنقذت نفسها وأخاها من سارقِ سيّارة، فضربته حتى أوقف السيّارة وأخرجهما. الفكرة: السنُّ لا تعني شيئًا أمام الشجاعة.'
    },
    stages:[
      { type:'choice', name:'الفهم العام', hint:'الحدث', qs:[
        {p:'How old is Marta?', o:['six','three','ten'], a:0, w:'ستّ سنوات.', f:'<u>six</u>'},
        {p:'Where was Marta sitting?', o:['in the backseat','on the roof','at home'], a:0, w:'المقعد الخلفيّ.', f:'in the <u>backseat</u>'},
        {p:'What did the stranger want to do?', o:['steal the car','buy the car','wash the car'], a:0, w:'يسرق السيّارة.', f:'<u>steal the car</u>'},
        {p:'What happened to the father?', o:['he fell onto the road','he drove away','he slept'], a:0, w:'سقط على الطريق.', f:'<u>fell onto the road</u>'}
      ]},
      { type:'choice', name:'شجاعة مارتا', hint:'ماذا فعلت؟', qs:[
        {p:'What did Marta do to the thief?', o:['hit him and pulled his hair','helped him','gave him money'], a:0, w:'ضربته وشدّت شعره.', f:'<u>hit him and pulled his hair</u>'},
        {p:'What did the thief finally do?', o:['stopped the car and let them out','drove faster','crashed'], a:0, w:'أوقف السيّارة وأخرجهما.', f:'<u>stopped the car</u>'},
        {p:'Marta helped ___ out of the car.', o:['her brother','the thief','her father'], a:0, w:'أخاها.', f:'<u>her brother</u>'},
        {p:'The police officer said Marta is:', o:['brave','lazy','shy'], a:0, w:'شجاعة.', f:'<u>brave</u>'}
      ]},
      { type:'choice', name:'صحّ أم خطأ', hint:'True / False', qs:[
        {p:'T/F: Marta gave up and did nothing.', o:['False','True'], a:0, w:'بل قاومت اللصّ.', f:'<u>False</u>'},
        {p:'T/F: The thief wanted to steal the car.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'T/F: Marta helped her little brother out.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'T/F: The story shows that age matters most.', o:['False','True'], a:0, w:'بل الشجاعةُ أهمّ من السنّ.', f:'<u>False</u>'}
      ]},
      { type:'gap', name:'أكمل من النصّ', hint:'اختر الكلمة المناسبة', qs:[
        {p:'___, a stranger appeared.', o:['Suddenly','Slowly','Never'], a:0, w:'فجأةً.', f:'<u>Suddenly</u>'},
        {p:'The thief wanted to ___ the car.', o:['steal','wash','sell'], a:0, w:'يسرق.', f:'<u>steal</u>'},
        {p:'Marta ___ the thief and pulled his hair.', o:['hit','helped','thanked'], a:0, w:'ضربت.', f:'<u>hit</u>'},
        {p:'The officer called Marta a ___ girl.', o:['brave','shy','tall'], a:0, w:'شجاعة.', f:'<u>brave</u>'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'Marta is ___ years old.', ask:'اختر', o:['six','ten'], a:0, w:'ستّ.', f:'<u>six</u>'},
        {p:'She was in the ___.', ask:'أكمل', o:['backseat','kitchen'], a:0, w:'المقعد الخلفيّ.', f:'<u>backseat</u>'},
        {p:'The stranger wanted to ___ the car.', ask:'أكمل', o:['steal','wash'], a:0, w:'يسرق.', f:'<u>steal</u>'},
        {p:'The father ___ onto the road.', ask:'اختر', o:['fell','drove'], a:0, w:'سقط.', f:'<u>fell</u>'},
        {p:'Marta ___ the thief.', ask:'أكمل', o:['hit','helped'], a:0, w:'ضربت.', f:'<u>hit</u>'},
        {p:'Finally the thief ___ the car.', ask:'أكمل', o:['stopped','bought'], a:0, w:'أوقف.', f:'<u>stopped</u>'},
        {p:'She helped ___ out.', ask:'اختر', o:['her brother','the thief'], a:0, w:'أخاها.', f:'<u>her brother</u>'},
        {p:'The officer said Marta is ___.', ask:'اختر', o:['brave','shy'], a:0, w:'شجاعة.', f:'<u>brave</u>'},
        {p:'T/F: The thief wanted to steal the car.', ask:'صحّ/خطأ', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'}
      ]}
    ]
  };
})();
