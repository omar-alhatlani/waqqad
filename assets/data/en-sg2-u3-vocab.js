/* ============================================================
   Lesson: Vocabulary — Jobs & Professions
   English · Super Goal 2 · Unit 3 (Who’s Who) · صفحة ١٨
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U3_VOCAB'] = {
    id:'EN_SG2_U3_VOCAB',
    title:'Vocabulary — Jobs & Professions',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'Jobs & Professional Goals',
      intro:'مفرداتُ المهن: <code>engineer</code> مهندس، <code>pilot</code> طيّار، <code>writer</code> كاتب، <code>journalist</code> صحفيّ، <code>translator</code> مترجم، <code>scientist</code> عالِم، <code>salesperson</code> بائع. ونعبّر عن الطموح بـ <code>want to be</code>: <code>I want to be a pilot.</code>',
      table:[['engineer / pilot','مهندس / طيّار'],['writer / journalist','كاتب / صحفيّ'],['translator / scientist','مترجم / عالِم'],['want to be','أريد أن أصير']],
      trick:'اربطِ المهنةَ بالمكان أو العمل: الطبيبُ في المستشفى، والمترجمُ يتقنُ لغات. وللطموح: <code>I want to be a(n) …</code>'
    },
    stages:[
      { type:'choice', name:'المعنى بالعربية', hint:'اختر المعنى الصحيح', qs:[
        {p:'engineer', ask:'المعنى', o:['مهندس','طيّار','طبيب'], a:0, w:'<code>engineer</code> = مهندس.', f:'engineer = مهندس.'},
        {p:'pilot', ask:'المعنى', o:['طيّار','بائع','كاتب'], a:0, w:'<code>pilot</code> = طيّار.', f:'pilot = طيّار.'},
        {p:'journalist', ask:'المعنى', o:['صحفيّ','مترجم','عالِم'], a:0, w:'<code>journalist</code> = صحفيّ.', f:'journalist = صحفيّ.'},
        {p:'translator', ask:'المعنى', o:['مترجم','مهندس','طبيب'], a:0, w:'<code>translator</code> = مترجم.', f:'translator = مترجم.'},
        {p:'scientist', ask:'المعنى', o:['عالِم','بائع','طيّار'], a:0, w:'<code>scientist</code> = عالِم.', f:'scientist = عالِم.'}
      ]},
      { type:'choice', name:'من يعمل هذا؟', hint:'طابِق المهنة بالعمل', qs:[
        {p:'flies a plane', ask:'المهنة', o:['pilot','writer','doctor'], a:0, w:'يقود الطائرة ← <code>pilot</code>.', f:'pilot.'},
        {p:'writes for a newspaper', ask:'المهنة', o:['journalist','engineer','pilot'], a:0, w:'يكتب للصحيفة ← <code>journalist</code>.', f:'journalist.'},
        {p:'works in a laboratory', ask:'المهنة', o:['scientist','salesperson','driver'], a:0, w:'في المختبر ← <code>scientist</code>.', f:'scientist.'},
        {p:'translates languages', ask:'المهنة', o:['translator','teacher','pilot'], a:0, w:'يترجم ← <code>translator</code>.', f:'translator.'},
        {p:'sells things in a store', ask:'المهنة', o:['salesperson','writer','pilot'], a:0, w:'يبيع ← <code>salesperson</code>.', f:'salesperson.'}
      ]},
      { type:'gap', name:'want to be', hint:'عبّر عن الطموح', qs:[
        {p:'I want to be ___ engineer.', o:['an','a','the'], a:0, w:'<code>engineer</code> يبدأ بحرف علّة ← <code>an</code>.', f:'I want to be <u>an</u> engineer.'},
        {p:'She wants to be ___ pilot.', o:['a','an','the'], a:0, w:'<code>pilot</code> يبدأ بحرف ساكن ← <code>a</code>.', f:'a pilot.'},
        {p:'What do you want to ___?', o:['be','being','are'], a:0, w:'<code>want to be</code>.', f:'want to <u>be</u>?'},
        {p:'He wants to be ___ doctor.', o:['a','an','the'], a:0, w:'<code>doctor</code> ساكن ← <code>a</code>.', f:'a doctor.'},
        {p:'They want to be ___ scientists.', o:['—','a','an'], a:0, w:'الجمع بلا <code>a/an</code>.', f:'be scientists.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['I','want','be','a','pilot','.'], bad:2, fix:'to be', w:'<code>want to be</code>.', f:'I want <u>to be</u> a pilot.'},
        {words:['She','want','to','be','a','doctor','.'], bad:1, fix:'wants', w:'مفرد ← <code>wants</code>.', f:'She <u>wants</u> to be a doctor.'},
        {words:['I','want','to','be','a','engineer','.'], bad:4, fix:'an', w:'قبل حرف العلّة ← <code>an</code>.', f:'to be <u>an</u> engineer.'},
        {words:['A','pilot','fly','a','plane','.'], bad:2, fix:'flies', w:'مفرد ← <code>flies</code>.', f:'A pilot <u>flies</u> a plane.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['I','want','to','be','a','pilot','.'], w:'want to be.', f:'I want to be a pilot.'},
        {sol:['A','journalist','writes','for','a','newspaper','.'], w:'المهنة والعمل.', f:'A journalist writes for a newspaper.'},
        {sol:['She','wants','to','be','a','scientist','.'], w:'مفرد ← wants.', f:'She wants to be a scientist.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'pilot', ask:'المعنى', o:['طيّار','كاتب'], a:0, w:'طيّار.', f:'pilot = طيّار.'},
        {p:'writes for a newspaper', ask:'المهنة', o:['journalist','pilot'], a:0, w:'صحفيّ.', f:'journalist.'},
        {p:'I want to be ___ engineer.', ask:'اختر', o:['an','a'], a:0, w:'حرف علّة ← an.', f:'<u>an</u> engineer.'},
        {p:'translator', ask:'المعنى', o:['مترجم','عالِم'], a:0, w:'مترجم.', f:'translator = مترجم.'},
        {p:'works in a laboratory', ask:'المهنة', o:['scientist','driver'], a:0, w:'عالِم.', f:'scientist.'},
        {p:'She ___ to be a doctor.', ask:'اختر', o:['wants','want'], a:0, w:'مفرد.', f:'<u>wants</u>.'},
        {sol:['I','want','to','be','a','pilot','.'], w:'want to be.', f:'I want to be a pilot.'},
        {p:'engineer', ask:'المعنى', o:['مهندس','طبيب'], a:0, w:'مهندس.', f:'engineer = مهندس.'},
        {p:'sells things', ask:'المهنة', o:['salesperson','writer'], a:0, w:'بائع.', f:'salesperson.'}
      ]}
    ]
  };
})();
