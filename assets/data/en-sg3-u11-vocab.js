/* ============================================================
   Lesson: Vocabulary — Choices & Decisions
   English · Super Goal 3 · Unit 11 (Making Choices) · صفحات ١٢٠–١٢١
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U11_VOCAB'] = {
    id:'EN_SG3_U11_VOCAB',
    title:'Vocabulary — Making Choices',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'Decisions & Advice',
      intro:'مفرداتُ القرارات: <code>choice</code> اختيار، <code>decision</code> قرار، <code>decide</code> يقرّر، <code>prefer</code> يفضّل، <code>advice</code> نصيحة، <code>advise</code> يَنصح، <code>positive ↔ negative</code> إيجابيّ/سلبيّ، <code>aspect</code> جانب، <code>trust</code> يثق، <code>career</code> مهنة/مسار وظيفيّ.',
      table:[['make a choice','يتّخذ خيارًا'],['make a decision','يتّخذ قرارًا'],['advice','نصيحة (اسم)'],['positive / negative','إيجابيّ/سلبيّ'],['career','مسار مهنيّ']],
      trick:'<code>advice</code> اسمٌ غيرُ معدود (بلا s)، و<code>advise</code> فعلٌ. ونقول <code>make a decision / make a choice</code> (لا <code>do</code>).'
    },
    stages:[
      { type:'choice', name:'المعنى', hint:'اختر المعنى الصحيح', qs:[
        {p:'To “make a decision” means to ___.', o:['decide','forget','sleep'], a:0, w:'يقرّر.', f:'<u>decide</u>'},
        {p:'“advice” is a suggestion about what to ___.', o:['do','buy only','sell'], a:0, w:'نصيحة.', f:'what to <u>do</u>'},
        {p:'A “positive” aspect is a ___ point.', o:['good','bad','wrong'], a:0, w:'إيجابيّ.', f:'a <u>good</u> point'},
        {p:'To “prefer” something means to ___ it more.', o:['like','hate','forget'], a:0, w:'يفضّل.', f:'<u>like</u> it more'},
        {p:'A “career” is a person’s ___ path.', o:['work','food','clothes'], a:0, w:'مهنيّ.', f:'<u>work</u> path'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'It’s hard to ___ which university to attend.', o:['decide','sell','clean'], a:0, w:'يقرّر.', f:'<u>decide</u>'},
        {p:'Ask someone you ___ for advice.', o:['trust','forget','sell'], a:0, w:'تثق به.', f:'<u>trust</u>'},
        {p:'Make a list of positive and ___ aspects.', o:['negative','happy','cheap'], a:0, w:'سلبيّ.', f:'<u>negative</u>'},
        {p:'A teacher can give you good ___.', o:['advice','advices','advise'], a:0, w:'نصيحة (غير معدود).', f:'<u>advice</u>'},
        {p:'I ___ tea to coffee.', o:['prefer','decide','trust'], a:0, w:'أفضّل.', f:'<u>prefer</u>'}
      ]},
      { type:'choice', name:'اسم أم فعل', hint:'advice / advise', qs:[
        {p:'“advice” is a:', o:['noun','verb','adjective'], a:0, w:'اسم.', f:'<u>noun</u>'},
        {p:'“advise” is a:', o:['verb','noun','adjective'], a:0, w:'فعل.', f:'<u>verb</u>'},
        {p:'“a choice” = a ___.', o:['decision','question','game'], a:0, w:'اختيار/قرار.', f:'a <u>decision</u>'},
        {p:'We say “make a decision,” not “___ a decision.”', o:['do','make','have'], a:0, w:'لا نستعمل <code>do</code>.', f:'not <u>do</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['He','gave','me','good','advices','.'], bad:4, fix:'advice', w:'<code>advice</code> غير معدود.', f:'good <u>advice</u>'},
        {words:['I','did','a','decision','.'], bad:1, fix:'made', w:'<code>make a decision</code>.', f:'I <u>made</u> a decision.'},
        {words:['A','positive','aspect','is','a','bad','point','.'], bad:5, fix:'good', w:'الإيجابيّ نقطةٌ جيّدة.', f:'a <u>good</u> point'},
        {words:['Ask','someone','you','forget','for','advice','.'], bad:3, fix:'trust', w:'تسأل من تثق به.', f:'someone you <u>trust</u>'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'make a decision =', ask:'اختر', o:['decide','forget'], a:0, w:'يقرّر.', f:'<u>decide</u>'},
        {p:'a suggestion =', ask:'اختر', o:['advice','career'], a:0, w:'نصيحة.', f:'<u>advice</u>'},
        {p:'a good point =', ask:'اختر', o:['positive','negative'], a:0, w:'إيجابيّ.', f:'<u>positive</u>'},
        {p:'like more =', ask:'اختر', o:['prefer','forget'], a:0, w:'يفضّل.', f:'<u>prefer</u>'},
        {p:'work path =', ask:'اختر', o:['career','choice'], a:0, w:'مهنيّ.', f:'<u>career</u>'},
        {p:'“advice” is a ___.', ask:'اختر', o:['noun','verb'], a:0, w:'اسم.', f:'<u>noun</u>'},
        {p:'ask someone you ___', ask:'أكمل', o:['trust','forget'], a:0, w:'تثق به.', f:'<u>trust</u>'},
        {p:'“make a ___” not “do a…”', ask:'أكمل', o:['decision','game'], a:0, w:'قرار.', f:'<u>decision</u>'},
        {p:'positive and ___ aspects', ask:'اختر', o:['negative','cheap'], a:0, w:'سلبيّ.', f:'<u>negative</u>'}
      ]}
    ]
  };
})();
