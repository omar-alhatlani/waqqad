/* ============================================================
   درس: Vocabulary — Recent Events (المدرسة والمستقبل)
   الإنجليزية · السادس الابتدائي · ف١ · Top Goal 3 · Unit 8 (Recent Events)
   مفرداتُ الوحدة (حقائقُ معجميّة)، والجملُ التوضيحيّة مؤلَّفةٌ أصالةً.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG3_U8_VOCAB'] = {
    id:'EN_TG3_U8_VOCAB',
    title:'Vocabulary — Recent Events',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'كلماتُ المدرسة والمستقبل',
      intro:'مفرداتٌ عن <b>المدرسة</b> و<b>خطط المستقبل</b>، تحتاجُها للحديث عن الدراسة والطموح.',
      table:[['exams · grades · semester','اختبارات · درجات · فصل دراسيّ'],['graduate · classmate · presentation','يتخرّج · زميل صفّ · عرض تقديميّ'],['apply · application · scholarship','يتقدّم · طلب/استمارة · مِنحة'],['improve · invent · decide','يُحسِّن · يخترع · يقرّر']],
      examples:['She got high <code>grades</code> and won a <code>scholarship</code>. (نالت درجاتٍ عاليةً ومِنحة.)','He will <code>apply</code> to university after he <code>graduates</code>.'],
      trick:'اربطِ الكلمةَ بمجالها: <span class="en">exams · grades · semester</span> للمدرسة، و<span class="en">apply · scholarship · graduate</span> للمستقبل.'
    },
    stages:[
      { type:'choice', name:'الكلمة ← المعنى', hint:'اختر المعنى العربيّ', qs:[
        {p:'exams', ask:'المعنى؟', o:['اختبارات','درجات'], a:0, w:'<code>exams</code> = اختبارات.', f:'exams ← <u>اختبارات</u>'},
        {p:'scholarship', ask:'المعنى؟', o:['مِنحة دراسيّة','فصل دراسيّ'], a:0, w:'<code>scholarship</code> = مِنحة.', f:'scholarship ← <u>مِنحة</u>'},
        {p:'graduate', ask:'المعنى؟', o:['يتخرّج','يقرّر'], a:0, w:'<code>graduate</code> = يتخرّج.', f:'graduate ← <u>يتخرّج</u>'},
        {p:'improve', ask:'المعنى؟', o:['يُحسِّن','يخترع'], a:0, w:'<code>improve</code> = يُحسِّن.', f:'improve ← <u>يُحسِّن</u>'}
      ]},
      { type:'choice', name:'المعنى ← الكلمة', hint:'اختر الكلمة الإنجليزية', qs:[
        {p:'درجات', ask:'الكلمة؟', o:['grades','exams'], a:0, w:'درجات = <code>grades</code>.', f:'درجات ← <u>grades</u>'},
        {p:'زميل صفّ', ask:'الكلمة؟', o:['classmate','semester'], a:0, w:'زميل صفّ = <code>classmate</code>.', f:'زميل صفّ ← <u>classmate</u>'},
        {p:'يخترع', ask:'الكلمة؟', o:['invent','apply'], a:0, w:'يخترع = <code>invent</code>.', f:'يخترع ← <u>invent</u>'},
        {p:'يقرّر', ask:'الكلمة؟', o:['decide','improve'], a:0, w:'يقرّر = <code>decide</code>.', f:'يقرّر ← <u>decide</u>'}
      ]},
      { type:'choice', name:'اسمٌ أم فعل؟', hint:'صنّف الكلمة', qs:[
        {p:'graduate', ask:'اختر', o:['فعل','اسم'], a:0, w:'<code>graduate</code> فعلٌ (يتخرّج).', f:'graduate ← <u>فعل</u>'},
        {p:'scholarship', ask:'اختر', o:['اسم','فعل'], a:0, w:'<code>scholarship</code> اسمٌ (مِنحة).', f:'scholarship ← <u>اسم</u>'},
        {p:'apply', ask:'اختر', o:['فعل','اسم'], a:0, w:'<code>apply</code> فعلٌ (يتقدّم).', f:'apply ← <u>فعل</u>'},
        {p:'application', ask:'اختر', o:['اسم','فعل'], a:0, w:'<code>application</code> اسمٌ (طلب).', f:'application ← <u>اسم</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'He studied hard to get good ___ .', o:['grades','exams','semester'], a:0, w:'درجات ← <code>grades</code>.', f:'... good <u>grades</u>.'},
        {p:'She will ___ to the best university.', o:['apply','improve','decide'], a:0, w:'يتقدّم ← <code>apply</code>.', f:'... will <u>apply</u> ...'},
        {p:'After school, students ___ and start college.', o:['graduate','invent','follow'], a:0, w:'يتخرّجون ← <code>graduate</code>.', f:'... students <u>graduate</u> ...'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'scholarship', ask:'المعنى؟', o:['مِنحة','اختبار'], a:0, w:'مِنحة.', f:'scholarship ← <u>مِنحة</u>'},
        {p:'درجات', ask:'الكلمة؟', o:['grades','exams'], a:0, w:'grades.', f:'درجات ← <u>grades</u>'},
        {p:'graduate', ask:'اختر', o:['فعل','اسم'], a:0, w:'فعل.', f:'graduate ← <u>فعل</u>'},
        {p:'She will ___ to university.', ask:'اختر', o:['apply','improve'], a:0, w:'apply.', f:'... <u>apply</u> ...'},
        {p:'improve', ask:'المعنى؟', o:['يُحسِّن','يقرّر'], a:0, w:'يُحسِّن.', f:'improve ← <u>يُحسِّن</u>'}
      ]}
    ]
  };
})();
