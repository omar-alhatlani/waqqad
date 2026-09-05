/* ============================================================
   Lesson: Reading — Ships of the Desert
   English · Super Goal 2 · Unit 16 (Have You Ever…?) · صفحة ١٤٥
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U16_READ'] = {
    id:'EN_SG2_U16_READ',
    title:'Reading — Ships of the Desert',
    lang:'en',
    rule:{
      tag:'Reading',
      title:'Ships of the Desert',
      intro:'اقرأْ عن ركوب الجمال ونصائحه، ثمّ أجِب.',
      examples:[
        'Camels, also known as “ships of the desert,” have been a favorite means of transport for millennia because they can withstand the hot, dry desert climate.',
        'Riding a camel is not the same as riding a horse. The rider sits about two meters above the ground on the camel’s hump.',
        'A camel walks differently: it moves the two right legs together, then the two left legs. This makes the rider swing from side to side.',
        'Tips: wear sunscreen and a hat; get on when the camel is sitting; when the camel stands, hold on tight and lean back.',
        'Camels are intelligent and can sense if you are nervous, so sit and hold the reins confidently.'
      ],
      trick:'الجمال «سفن الصحراء» — تتحمّل مناخ الصحراء الحارّ الجافّ. ركوبُها يختلف عن الخيل (يتمايل الراكب)، ونصائحُه: الحماية من الشمس، والركوب حين يجلس الجمل، والاتّزان بثقة.'
    },
    stages:[
      { type:'choice', name:'الفهم العام', hint:'الجمال', qs:[
        {p:'Camels are also known as:', o:['“ships of the desert”','“cars of the sand”','“birds of the sky”'], a:0, w:'سفن الصحراء.', f:'“<u>ships of the desert</u>”'},
        {p:'Why are camels good for the desert?', o:['they withstand hot, dry climate','they are small','they are fast only'], a:0, w:'تتحمّل المناخ.', f:'<u>withstand hot, dry climate</u>'},
        {p:'The rider sits on the camel’s:', o:['hump','tail','head'], a:0, w:'السنام.', f:'the <u>hump</u>'},
        {p:'A camel moves the two ___ legs together.', o:['right','front','back only'], a:0, w:'اليمنى معًا.', f:'the two <u>right</u> legs'}
      ]},
      { type:'choice', name:'النصائح', hint:'كيف تركب؟', qs:[
        {p:'Get on the camel when it is:', o:['sitting','running','standing'], a:0, w:'حين يجلس.', f:'when it is <u>sitting</u>'},
        {p:'When the camel stands up, you should:', o:['hold on tight and lean back','jump off','close your eyes'], a:0, w:'تمسّك وتميل للخلف.', f:'<u>hold on tight and lean back</u>'},
        {p:'You should wear a hat for protection from the:', o:['sun','rain','snow'], a:0, w:'الشمس.', f:'the <u>sun</u>'},
        {p:'Camels can sense if you are ___.', o:['nervous','happy only','asleep'], a:0, w:'متوتّر.', f:'<u>nervous</u>'}
      ]},
      { type:'choice', name:'صحّ أم خطأ', hint:'True / False', qs:[
        {p:'T/F: Riding a camel is the same as riding a horse.', o:['False','True'], a:0, w:'بل يختلف.', f:'<u>False</u>'},
        {p:'T/F: Camels can withstand a hot, dry climate.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'T/F: You should get on when the camel is running.', o:['False','True'], a:0, w:'بل حين يجلس.', f:'<u>False</u>'},
        {p:'T/F: Camels are intelligent animals.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'}
      ]},
      { type:'gap', name:'أكمل من النصّ', hint:'اختر الكلمة المناسبة', qs:[
        {p:'Camels are “ships of the ___.”', o:['desert','sea','city'], a:0, w:'الصحراء.', f:'<u>desert</u>'},
        {p:'The rider sits on the camel’s ___.', o:['hump','wheel','wing'], a:0, w:'السنام.', f:'<u>hump</u>'},
        {p:'Get on when the camel is ___.', o:['sitting','flying','eating'], a:0, w:'جالسًا.', f:'<u>sitting</u>'},
        {p:'Camels can ___ the hot climate.', o:['withstand','sell','cook'], a:0, w:'تتحمّل.', f:'<u>withstand</u>'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'Camels = “ships of the ___.”', ask:'أكمل', o:['desert','sea'], a:0, w:'الصحراء.', f:'<u>desert</u>'},
        {p:'They ___ the hot climate.', ask:'اختر', o:['withstand','sell'], a:0, w:'تتحمّل.', f:'<u>withstand</u>'},
        {p:'The rider sits on the ___.', ask:'اختر', o:['hump','tail'], a:0, w:'السنام.', f:'<u>hump</u>'},
        {p:'It moves the two ___ legs together.', ask:'اختر', o:['right','back'], a:0, w:'اليمنى.', f:'<u>right</u>'},
        {p:'Get on when it is ___.', ask:'اختر', o:['sitting','running'], a:0, w:'جالسًا.', f:'<u>sitting</u>'},
        {p:'When it stands, ___ back.', ask:'أكمل', o:['lean','jump'], a:0, w:'مِلْ.', f:'<u>lean</u>'},
        {p:'Wear a hat for the ___.', ask:'اختر', o:['sun','snow'], a:0, w:'الشمس.', f:'<u>sun</u>'},
        {p:'Camels can sense if you are ___.', ask:'اختر', o:['nervous','asleep'], a:0, w:'متوتّر.', f:'<u>nervous</u>'},
        {p:'T/F: Camels are intelligent.', ask:'صحّ/خطأ', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'}
      ]}
    ]
  };
})();
