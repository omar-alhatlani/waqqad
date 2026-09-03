/* ============================================================
   Lesson: Reading — Famous Neighborhoods
   English · Super Goal 1 · Unit 7 (Where Do You Live?) · صفحة ٦١
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1).
   lang:'en' → المحتوى إنجليزيّ LTR، والشرح بالعربية.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U7_READ'] = {
    id:'EN_SG1_U7_READ',
    title:'Reading — Famous Neighborhoods',
    lang:'en',
    rule:{
      tag:'النصّ',
      title:'Famous Neighborhoods',
      intro:'اقرأ عن حَيَّين مشهورين: <code>Coyoacan</code> في مكسيكو سيتي، و<code>Brooklyn</code> في نيويورك، ثم أجب.',
      examples:[
        'Francisco lives in Coyoacan, a historic neighborhood of Mexico City.',
        'The Blue House — the home of the painter Frida Kahlo — is now a museum.',
        'John is from Brooklyn, New York; Manhattan is only ten minutes away by subway.',
        'Brooklyn has the famous Brooklyn Bridge and Prospect Park.',
        'Both neighborhoods have museums, parks, and restaurants from all over the world.'
      ],
      trick:'قارِن: <b>Coyoacan</b> (مكسيكو، البيت الأزرق لفريدا كالو)، و<b>Brooklyn</b> (نيويورك، جسر بروكلين).'
    },
    stages:[
      { type:'choice', name:'الفهم', hint:'أجب حسب النصّ', qs:[
        {p:'Where does Francisco live?',            ask:'حسب النصّ', o:['Coyoacan','Brooklyn','Manhattan','Jeddah'], a:0, w:'<code>I live in Coyoacan.</code>', f:'Coyoacan'},
        {p:'Coyoacan is a neighborhood of:',         ask:'حسب النصّ', o:['Mexico City','New York','London','Cairo'], a:0, w:'<code>a historic neighborhood of Mexico City.</code>', f:'Mexico City'},
        {p:'The Blue House was the home of:',         ask:'حسب النصّ', o:['Frida Kahlo','Francisco','John','Picasso'], a:0, w:'<code>Frida Kahlo\'s house ... the Blue House.</code>', f:'Frida Kahlo'},
        {p:'Where is John from?',                    ask:'حسب النصّ', o:['Brooklyn','Coyoacan','Mexico City','Madrid'], a:0, w:"<code>I'm from Brooklyn, New York.</code>", f:'Brooklyn'},
        {p:'Manhattan is ten minutes away by:',       ask:'حسب النصّ', o:['subway','plane','car','ship'], a:0, w:'<code>ten minutes away by subway.</code>', f:'subway'},
        {p:'What famous bridge is in Brooklyn?',      ask:'حسب النصّ', o:['the Brooklyn Bridge','the Golden Gate','Tower Bridge','the Blue Bridge'], a:0, w:'<code>the famous Brooklyn Bridge.</code>', f:'the Brooklyn Bridge'}
      ]},
      { type:'choice', name:'صحيح أم خطأ؟', hint:'Yes / No حسب النصّ', qs:[
        {p:'Coyoacan is a historic neighborhood.', ask:'صحيح أم خطأ؟', o:['Yes','No'], a:0, w:'<code>a historic neighborhood.</code>', f:'Yes.'},
        {p:'The Blue House is now a museum.',       ask:'صحيح أم خطأ؟', o:['Yes','No'], a:0, w:"<code>It's now a museum.</code>", f:'Yes.'},
        {p:'Brooklyn is in Mexico.',                ask:'صحيح أم خطأ؟', o:['No','Yes'], a:0, w:'Brooklyn في <b>New York</b>، لا Mexico.', f:'No — in New York.'},
        {p:'Prospect Park has two lakes.',          ask:'صحيح أم خطأ؟', o:['Yes','No'], a:0, w:'<code>two lakes.</code>', f:'Yes.'},
        {p:'Both neighborhoods have restaurants.',   ask:'صحيح أم خطأ؟', o:['Yes','No'], a:0, w:'<code>restaurants from all over the world.</code>', f:'Yes.'}
      ]},
      { type:'gap', name:'أكمل من النصّ', hint:'اختر الكلمة من النصّ', qs:[
        {p:'Coyoacan is a ___ neighborhood.',           ask:'أكمل الفراغ', o:['historic','new','small','far'], a:0, w:'<code>historic</code>.', f:'a <u>historic</u> neighborhood.'},
        {p:'The Blue House is now a ___.',               ask:'أكمل الفراغ', o:['museum','school','park','store'], a:0, w:'<code>a museum</code>.', f:'now a <u>museum</u>.'},
        {p:'Manhattan is ten minutes away by ___.',      ask:'أكمل الفراغ', o:['subway','bus','plane','bike'], a:0, w:'<code>by subway</code>.', f:'by <u>subway</u>.'},
        {p:'Brooklyn has the famous Brooklyn ___.',      ask:'أكمل الفراغ', o:['Bridge','Park','Museum','Street'], a:0, w:'<code>Brooklyn Bridge</code>.', f:'the Brooklyn <u>Bridge</u>.'},
        {p:'Frida Kahlo was a ___.',                     ask:'أكمل الفراغ', o:['painter','singer','doctor','writer'], a:0, w:'<code>the famous Mexican painter</code>.', f:'a <u>painter</u>.'},
        {p:'Both have restaurants from all over the ___.', ask:'أكمل الفراغ', o:['world','city','park','street'], a:0, w:'<code>all over the world</code>.', f:'all over the <u>world</u>.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['Francisco','lives','in','Coyoacan','.'],   w:'أين يعيش.', f:'Francisco lives in Coyoacan.'},
        {sol:['John','is','from','Brooklyn','.'],          w:'من أين.', f:'John is from Brooklyn.'},
        {sol:['The','Blue','House','is','a','museum','.'], w:'وصفُ البيت.', f:'The Blue House is a museum.'},
        {sol:['Where','do','you','live','?'],              w:'سؤالُ الوحدة.', f:'Where do you live?'},
        {sol:['Both','have','parks','and','museums','.'],  w:'المشترك.', f:'Both have parks and museums.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما فهمته — مختلطًا', final:true, qs:[
        {p:'Where does Francisco live?', ask:'حسب النصّ', o:['Coyoacan','Brooklyn'], a:0, w:'<code>Coyoacan</code>.', f:'Coyoacan'},
        {p:'Where is John from?', ask:'حسب النصّ', o:['Brooklyn','Mexico City'], a:0, w:'<code>Brooklyn, New York</code>.', f:'Brooklyn'},
        {p:'Brooklyn is in Mexico.', ask:'صحيح أم خطأ؟', o:['No','Yes'], a:0, w:'في New York.', f:'No.'},
        {p:'The Blue House is now a ___.', ask:'أكمل الفراغ', o:['museum','school','park','store'], a:0, w:'<code>a museum</code>.', f:'a <u>museum</u>.'},
        {p:'Manhattan is ten minutes away by:', ask:'حسب النصّ', o:['subway','plane'], a:0, w:'<code>by subway</code>.', f:'subway'},
        {sol:['Francisco','lives','in','Coyoacan','.'], w:'أين يعيش.', f:'Francisco lives in Coyoacan.'},
        {p:'Both neighborhoods have restaurants.', ask:'صحيح أم خطأ؟', o:['Yes','No'], a:0, w:'<code>restaurants</code>.', f:'Yes.'},
        {p:'Frida Kahlo was a ___.', ask:'أكمل الفراغ', o:['painter','singer','doctor','writer'], a:0, w:'<code>painter</code>.', f:'a <u>painter</u>.'},
        {sol:['Where','do','you','live','?'], w:'سؤالُ الوحدة.', f:'Where do you live?'}
      ]}
    ]
  };
})();
