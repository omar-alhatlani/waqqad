/* ============================================================
   Lesson: Reading — Teenagers' Favorite Place
   English · Super Goal 1 · Unit 8 (What Are You Doing?) · صفحة ٦٩
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1).
   lang:'en' → المحتوى إنجليزيّ LTR، والشرح بالعربية.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U8_READ'] = {
    id:'EN_SG1_U8_READ',
    title:"Reading — Teenagers' Favorite Place",
    lang:'en',
    rule:{
      tag:'النصّ',
      title:"Teenagers' Favorite Place",
      intro:'اقرأ عن «المكان المفضّل للمراهقين»: المراكز التجاريّة (malls) وما يفعله الشباب فيها، ثم أجب.',
      examples:[
        'In some countries, teenagers are called "the mall generation."',
        'In a mall, teenagers are chatting, talking on cell phones, or sending text messages.',
        'They eat snacks or drink soda in the food court.',
        "Malls are teenagers' favorite place to meet friends and socialize.",
        'Advantages: malls are safe and comfortable in all kinds of weather.'
      ],
      trick:'انتبه لِما يفعله المراهقون في المول (<code>chatting</code>, <code>eating</code>, <code>shopping</code>) ولمزاياه (<code>safe</code>, <code>comfortable</code>).'
    },
    stages:[
      { type:'choice', name:'الفهم', hint:'أجب حسب النصّ', qs:[
        {p:'In some countries, teens are called the:', ask:'حسب النصّ', o:['mall generation','sports team','book club','city group'], a:0, w:'<code>the "mall generation."</code>', f:'the mall generation'},
        {p:"Malls are teens' favorite place to meet:",  ask:'حسب النصّ', o:['friends','teachers','doctors','tourists'], a:0, w:'<code>meet friends and socialize.</code>', f:'friends'},
        {p:'In the food court, teens eat snacks or drink:', ask:'حسب النصّ', o:['soda','tea','milk','juice'], a:0, w:'<code>drinking soda in the food court.</code>', f:'soda'},
        {p:'One advantage of malls is that they are:',   ask:'حسب النصّ', o:['safe','expensive','far','small'], a:0, w:"<code>they're safe.</code>", f:'safe'},
        {p:'Malls are comfortable in all kinds of:',     ask:'حسب النصّ', o:['weather','food','music','cars'], a:0, w:'<code>comfortable in all kinds of weather.</code>', f:'weather'},
        {p:'Teens in malls have stores with the latest:', ask:'حسب النصّ', o:['fashions','phones','books','games'], a:0, w:'<code>stores with the latest fashions.</code>', f:'fashions'}
      ]},
      { type:'choice', name:'صحيح أم خطأ؟', hint:'Yes / No حسب النصّ', qs:[
        {p:"Malls are teens' favorite place.",     ask:'صحيح أم خطأ؟', o:['Yes','No'], a:0, w:'<code>favorite place to meet friends.</code>', f:'Yes.'},
        {p:'Malls are dangerous places.',           ask:'صحيح أم خطأ؟', o:['No','Yes'], a:0, w:'هي <b>آمنة</b> (safe).', f:'No — they are safe.'},
        {p:'Teens eat snacks in the food court.',    ask:'صحيح أم خطأ؟', o:['Yes','No'], a:0, w:'<code>eating snacks ... in the food court.</code>', f:'Yes.'},
        {p:'Malls have stores with the latest fashions.', ask:'صحيح أم خطأ؟', o:['Yes','No'], a:0, w:'<code>latest fashions.</code>', f:'Yes.'},
        {p:'Malls are uncomfortable in bad weather.', ask:'صحيح أم خطأ؟', o:['No','Yes'], a:0, w:'مريحةٌ في كلّ الأحوال.', f:'No — comfortable.'}
      ]},
      { type:'gap', name:'أكمل من النصّ', hint:'اختر الكلمة من النصّ', qs:[
        {p:'Teens are called the mall ___.',      ask:'أكمل الفراغ', o:['generation','team','club','group'], a:0, w:'<code>mall generation</code>.', f:'the mall <u>generation</u>.'},
        {p:'Teens meet friends and ___.',          ask:'أكمل الفراغ', o:['socialize','study','sleep','drive'], a:0, w:'<code>socialize</code>.', f:'meet friends and <u>socialize</u>.'},
        {p:'They drink ___ in the food court.',     ask:'أكمل الفراغ', o:['soda','milk','tea','water'], a:0, w:'<code>soda</code>.', f:'drink <u>soda</u>.'},
        {p:'Malls are ___ and comfortable.',        ask:'أكمل الفراغ', o:['safe','far','small','old'], a:0, w:'<code>safe</code>.', f:'<u>safe</u> and comfortable.'},
        {p:'There are stores with the latest ___.',  ask:'أكمل الفراغ', o:['fashions','books','cars','foods'], a:0, w:'<code>fashions</code>.', f:'the latest <u>fashions</u>.'},
        {p:'Teens are ___ on cell phones.',         ask:'أكمل الفراغ', o:['talking','sleeping','cooking','driving'], a:0, w:'<code>talking on cell phones</code>.', f:'<u>talking</u> on cell phones.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['Teenagers','like','the','mall','.'],            w:'المكان المفضّل.', f:'Teenagers like the mall.'},
        {sol:['They','are','shopping','and','chatting','.'],    w:'أنشطة المول.', f:'They are shopping and chatting.'},
        {sol:['Malls','are','safe','places','.'],               w:'ميزة المول.', f:'Malls are safe places.'},
        {sol:['What','are','you','doing','?'],                  w:'سؤالٌ عن الفعل.', f:'What are you doing?'},
        {sol:['They','are','eating','snacks','.'],              w:'في مطعم المول.', f:'They are eating snacks.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما فهمته — مختلطًا', final:true, qs:[
        {p:'In some countries, teens are called the:', ask:'حسب النصّ', o:['mall generation','sports team'], a:0, w:'<code>mall generation</code>.', f:'the mall generation'},
        {p:"Malls are teens' favorite place to meet:", ask:'حسب النصّ', o:['friends','teachers'], a:0, w:'<code>meet friends</code>.', f:'friends'},
        {p:'Malls are dangerous places.', ask:'صحيح أم خطأ؟', o:['No','Yes'], a:0, w:'آمنة (safe).', f:'No.'},
        {p:'They drink ___ in the food court.', ask:'أكمل الفراغ', o:['soda','milk','tea','water'], a:0, w:'<code>soda</code>.', f:'drink <u>soda</u>.'},
        {p:'One advantage of malls is that they are:', ask:'حسب النصّ', o:['safe','expensive'], a:0, w:'<code>safe</code>.', f:'safe'},
        {sol:['They','are','shopping','and','chatting','.'], w:'أنشطة المول.', f:'They are shopping and chatting.'},
        {p:'Teens eat snacks in the food court.', ask:'صحيح أم خطأ؟', o:['Yes','No'], a:0, w:'<code>food court</code>.', f:'Yes.'},
        {p:'Teens meet friends and ___.', ask:'أكمل الفراغ', o:['socialize','study','sleep','drive'], a:0, w:'<code>socialize</code>.', f:'and <u>socialize</u>.'},
        {sol:['What','are','you','doing','?'], w:'سؤالٌ عن الفعل.', f:'What are you doing?'}
      ]}
    ]
  };
})();
