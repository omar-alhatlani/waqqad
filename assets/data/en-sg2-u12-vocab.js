/* ============================================================
   Lesson: Vocabulary — Vacations & Travel
   English · Super Goal 2 · Unit 12 (It's Going to Be Fun!) · صفحات ١٠٢–١٠٣
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U12_VOCAB'] = {
    id:'EN_SG2_U12_VOCAB',
    title:'Vocabulary — Vacations',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'Vacation Activities',
      intro:'أنشطةُ العطلات: <code>relax</code> يسترخي، <code>travel around</code> يتجوّل، <code>go diving</code> يغوص، <code>go sightseeing</code> يشاهد المعالم، <code>go hiking</code> يمشي في الجبال، <code>coral reef</code> شعابٌ مرجانية، <code>marine life</code> حياةٌ بحرية، <code>tour guide</code> مرشدٌ سياحيّ، <code>resort</code> منتجع.',
      table:[['relax','يسترخي'],['go diving','يغوص'],['coral reef','شعابٌ مرجانية'],['sightseeing','مشاهدة المعالم'],['tour guide','مرشدٌ سياحيّ']],
      trick:'نستعمل <code>go + verb-ing</code> لكثيرٍ من أنشطة العطلة: <code>go diving / hiking / sightseeing / shopping</code>.'
    },
    stages:[
      { type:'choice', name:'المعنى', hint:'اختر المعنى الصحيح', qs:[
        {p:'To “relax” on vacation means to:', o:['rest','work hard','study'], a:0, w:'يسترخي.', f:'<u>rest</u>'},
        {p:'“go diving” means to swim ___ the water.', o:['under','over','around'], a:0, w:'الغوص تحت الماء.', f:'<u>under</u> water'},
        {p:'A “coral reef” is home to:', o:['marine life','camels','birds only'], a:0, w:'الحياة البحرية.', f:'<u>marine life</u>'},
        {p:'A “tour guide” helps you:', o:['see and learn about places','cook','drive only'], a:0, w:'المرشد.', f:'<u>see places</u>'},
        {p:'“sightseeing” means visiting ___.', o:['interesting places','the gym','the office'], a:0, w:'المعالم.', f:'<u>interesting places</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'On my vacation I’m going to ___ in the Red Sea.', o:['go diving','study','do chores'], a:0, w:'أغوص.', f:'<u>go diving</u>'},
        {p:'You’ll see colorful ___ life: turtles and lionfish.', o:['marine','city','desert'], a:0, w:'حياةٌ بحرية.', f:'<u>marine</u> life'},
        {p:'A ___ is going to show us around the site.', o:['tour guide','waiter','pilot'], a:0, w:'مرشدٌ سياحيّ.', f:'<u>tour guide</u>'},
        {p:'We’re going to ___ around the country.', o:['travel','recharge','install'], a:0, w:'نتجوّل.', f:'<u>travel</u>'},
        {p:'Divers explore beautiful ___ reefs.', o:['coral','glass','stone'], a:0, w:'مرجانية.', f:'<u>coral</u>'}
      ]},
      { type:'choice', name:'go + -ing', hint:'أنشطة العطلة', qs:[
        {p:'go ___ in the mountains', o:['hiking','hike','to hike'], a:0, w:'<code>go hiking</code>.', f:'go <u>hiking</u>'},
        {p:'go ___ to see famous places', o:['sightseeing','sightsee','to sightsee'], a:0, w:'<code>go sightseeing</code>.', f:'go <u>sightseeing</u>'},
        {p:'A place for holidays with facilities is a ___.', o:['resort','clinic','bank'], a:0, w:'منتجع.', f:'<u>resort</u>'},
        {p:'Sea turtles and dolphins are examples of ___ life.', o:['marine','plant','desert'], a:0, w:'بحرية.', f:'<u>marine</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['I','am','going','to','go','dive','.'], bad:5, fix:'diving', w:'<code>go diving</code>.', f:'go <u>diving</u>'},
        {words:['We','saw','marine','life','in','the','desert','.'], bad:6, fix:'sea', w:'الحياة البحرية في البحر.', f:'…in the <u>sea</u>.'},
        {words:['A','tour','guide','cooks','our','food','.'], bad:3, fix:'shows us places', w:'المرشد يرينا الأماكن.', f:'…<u>shows us places</u>.'},
        {words:['We','go','hike','in','the','mountains','.'], bad:2, fix:'hiking', w:'<code>go hiking</code>.', f:'go <u>hiking</u>'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'“relax” =', ask:'المعنى', o:['rest','work'], a:0, w:'يسترخي.', f:'<u>rest</u>'},
        {p:'swim under water =', ask:'اختر', o:['go diving','go hiking'], a:0, w:'الغوص.', f:'<u>go diving</u>'},
        {p:'home to marine life =', ask:'اختر', o:['coral reef','desert'], a:0, w:'الشعاب.', f:'<u>coral reef</u>'},
        {p:'shows you places =', ask:'اختر', o:['tour guide','chef'], a:0, w:'مرشد.', f:'<u>tour guide</u>'},
        {p:'visiting famous places =', ask:'اختر', o:['sightseeing','shopping'], a:0, w:'مشاهدة المعالم.', f:'<u>sightseeing</u>'},
        {p:'go ___ in the mountains', ask:'أكمل', o:['hiking','hike'], a:0, w:'<code>go hiking</code>.', f:'<u>hiking</u>'},
        {p:'holidays with facilities =', ask:'اختر', o:['resort','office'], a:0, w:'منتجع.', f:'<u>resort</u>'},
        {p:'travel ___ the country', ask:'أكمل', o:['around','under'], a:0, w:'يتجوّل.', f:'<u>around</u>'},
        {p:'turtles & dolphins = ___ life', ask:'أكمل', o:['marine','plant'], a:0, w:'بحرية.', f:'<u>marine</u>'}
      ]}
    ]
  };
})();
