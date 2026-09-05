/* ============================================================
   Lesson: Reading — The Stones of Al-Ula
   English · Super Goal 2 · Unit 12 (It's Going to Be Fun!) · صفحة ١٠٨
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U12_READ'] = {
    id:'EN_SG2_U12_READ',
    title:'Reading — The Stones of Al-Ula',
    lang:'en',
    rule:{
      tag:'Reading',
      title:'The Stones of Al-Ula',
      intro:'اقرأِ الرسالةَ الإلكترونية عن رحلة مدرسية إلى العُلا، ثمّ أجِب.',
      examples:[
        'I’m writing this email from our hotel in Al-Ula. We arrived this evening after a long bus journey from Madinah.',
        'It’s really too bad you couldn’t join us on our school trip. We’re going to learn so much about the historical sites.',
        'It’s quite busy here, with tourists from all over the world who have come to visit Mada’in Saleh. Tomorrow a guide is going to show us around the site.',
        'We’re also going to visit the museum, Al-Ula oasis, and the old abandoned city.',
        'The site is also known as Al-Hijr. It was settled by the Nabataeans in the first century, and there are over 100 rock-carved monuments.'
      ],
      trick:'رحلةٌ مدرسيةٌ إلى العُلا (مدائن صالح/الحِجر): مستوطنةُ الأنباط في القرن الأول، أكثرُ من ١٠٠ نصبٍ منحوتٍ في الصخر، مع زيارة المتحف والواحة.'
    },
    stages:[
      { type:'choice', name:'الفهم العام', hint:'الرحلة', qs:[
        {p:'Where is the writer writing from?', o:['a hotel in Al-Ula','home','the airport'], a:0, w:'فندقٌ في العُلا.', f:'a hotel in <u>Al-Ula</u>'},
        {p:'How did they travel from Madinah?', o:['by bus','by plane','by boat'], a:0, w:'بالحافلة.', f:'by <u>bus</u>'},
        {p:'What are they going to learn about?', o:['historical sites','cooking','sports'], a:0, w:'المواقع التاريخية.', f:'<u>historical sites</u>'},
        {p:'The famous site they visit is:', o:["Mada'in Saleh",'a mall','a beach'], a:0, w:'مدائن صالح.', f:"<u>Mada'in Saleh</u>"}
      ]},
      { type:'choice', name:'تفاصيل', hint:'الموقع والتاريخ', qs:[
        {p:'Al-Ula is also known as:', o:['Al-Hijr','Al-Baha','Al-Uquair'], a:0, w:'الحِجر.', f:'<u>Al-Hijr</u>'},
        {p:'Who settled the site in the first century?', o:['the Nabataeans','the Romans','the Greeks'], a:0, w:'الأنباط.', f:'the <u>Nabataeans</u>'},
        {p:'How many rock-carved monuments are there?', o:['over 100','only 2','1,000'], a:0, w:'أكثر من ١٠٠.', f:'<u>over 100</u>'},
        {p:'Tomorrow a ___ is going to show them around.', o:['guide','chef','pilot'], a:0, w:'مرشد.', f:'a <u>guide</u>'}
      ]},
      { type:'choice', name:'صحّ أم خطأ', hint:'True / False', qs:[
        {p:'T/F: They traveled to Al-Ula by plane.', o:['False','True'], a:0, w:'بل بالحافلة.', f:'<u>False</u>'},
        {p:'T/F: The site has over 100 rock-carved monuments.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'T/F: Tourists come from all over the world.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'T/F: They are going to visit a shopping mall.', o:['False','True'], a:0, w:'بل المتحف والواحة والمدينة القديمة.', f:'<u>False</u>'}
      ]},
      { type:'gap', name:'أكمل من النصّ', hint:'اختر الكلمة المناسبة', qs:[
        {p:'They arrived after a long bus ___.', o:['journey','game','meal'], a:0, w:'رحلة.', f:'bus <u>journey</u>'},
        {p:'A guide is going to show them around the ___.', o:['site','store','office'], a:0, w:'الموقع.', f:'the <u>site</u>'},
        {p:'They’re going to visit the museum and Al-Ula ___.', o:['oasis','airport','bank'], a:0, w:'الواحة.', f:'<u>oasis</u>'},
        {p:'The Nabataeans ___ the site in the first century.', o:['settled','sold','built malls in'], a:0, w:'استوطنوا.', f:'<u>settled</u>'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'Writing from a hotel in ___.', ask:'أكمل', o:['Al-Ula','Jeddah'], a:0, w:'العُلا.', f:'<u>Al-Ula</u>'},
        {p:'Traveled by ___.', ask:'اختر', o:['bus','plane'], a:0, w:'الحافلة.', f:'<u>bus</u>'},
        {p:'Famous site: ___.', ask:'اختر', o:["Mada'in Saleh",'a mall'], a:0, w:'مدائن صالح.', f:"<u>Mada'in Saleh</u>"},
        {p:'Also known as ___.', ask:'اختر', o:['Al-Hijr','Al-Baha'], a:0, w:'الحِجر.', f:'<u>Al-Hijr</u>'},
        {p:'Settled by the ___.', ask:'أكمل', o:['Nabataeans','Romans'], a:0, w:'الأنباط.', f:'<u>Nabataeans</u>'},
        {p:'___ rock-carved monuments.', ask:'اختر', o:['Over 100','Only 2'], a:0, w:'أكثر من ١٠٠.', f:'<u>Over 100</u>'},
        {p:'A ___ is going to show them around.', ask:'أكمل', o:['guide','chef'], a:0, w:'مرشد.', f:'<u>guide</u>'},
        {p:'T/F: They traveled by bus.', ask:'صحّ/خطأ', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'They will visit the museum and the ___.', ask:'أكمل', o:['oasis','mall'], a:0, w:'الواحة.', f:'<u>oasis</u>'}
      ]}
    ]
  };
})();
