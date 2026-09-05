/* ============================================================
   Lesson: Reading — A School Day
   English · Super Goal 1 · Unit 11 (What Time Do You Get Up?) · صفحة ٩٨
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U11_READ'] = {
    id:'EN_SG1_U11_READ',
    title:'Reading — A School Day',
    lang:'en',
    rule:{
      tag:'Reading',
      title:'A School Day',
      intro:'اقرأْ عن اليوم الدراسيّ، ثمّ أجِب عن الأسئلة.',
      examples:[
        'I usually arrive at school before 7 a.m. Assembly is at 6:45, and we always sing the Saudi national anthem.',
        'After assembly, we go straight to the classroom. We have six classes a day. Each one lasts 45 minutes.',
        'We only leave our classroom for subjects like computer, PE, and art.',
        'School finishes at 1 p.m., but there is an optional seventh period for students who want extra tutoring.',
        'There are after-school clubs. I’m a member of the football club, so I sometimes stay after school and play football.'
      ],
      trick:'اليوم الدراسيّ: الوصول قبل السابعة ← الطابور ٦:٤٥ (النشيد الوطنيّ) ← ستّ حصص ٤٥ دقيقة ← نهاية ١ ظهرًا (وحصّةٌ سابعةٌ اختيارية) ← أندية بعد الدوام.'
    },
    stages:[
      { type:'choice', name:'الفهم العام', hint:'أوقات اليوم', qs:[
        {p:'What time does he usually arrive at school?', o:['before 7 a.m.','at 10 a.m.','at noon'], a:0, w:'قبل السابعة.', f:'<u>before 7 a.m.</u>'},
        {p:'What time is assembly?', o:['6:45','8:00','1:00'], a:0, w:'الطابور ٦:٤٥.', f:'<u>6:45</u>'},
        {p:'What do they sing at assembly?', o:['the national anthem','a poem','nothing'], a:0, w:'النشيد الوطنيّ.', f:'the <u>national anthem</u>'},
        {p:'How many classes are there a day?', o:['six','three','ten'], a:0, w:'ستّ حصص.', f:'<u>six</u>'}
      ]},
      { type:'choice', name:'تفاصيل', hint:'المدّة والنهاية', qs:[
        {p:'How long does each class last?', o:['45 minutes','15 minutes','2 hours'], a:0, w:'٤٥ دقيقة.', f:'<u>45 minutes</u>'},
        {p:'What time does school finish?', o:['1 p.m.','7 a.m.','3 p.m.'], a:0, w:'الواحدة ظهرًا.', f:'<u>1 p.m.</u>'},
        {p:'The seventh period is:', o:['optional','required','cancelled'], a:0, w:'اختيارية.', f:'<u>optional</u>'},
        {p:'For which subjects do they leave the classroom?', o:['computer, PE, and art','math only','none'], a:0, w:'الحاسوب والبدنية والفنّ.', f:'<u>computer, PE, and art</u>'}
      ]},
      { type:'choice', name:'صحّ أم خطأ', hint:'True / False', qs:[
        {p:'T/F: He arrives at school at 10 a.m.', o:['False','True'], a:0, w:'بل قبل السابعة.', f:'<u>False</u>'},
        {p:'T/F: They sing the national anthem at assembly.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'T/F: The seventh period is required for everyone.', o:['False','True'], a:0, w:'بل اختيارية.', f:'<u>False</u>'},
        {p:'T/F: He is a member of the football club.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'}
      ]},
      { type:'gap', name:'أكمل من النصّ', hint:'اختر الكلمة المناسبة', qs:[
        {p:'Assembly is ___ 6:45.', o:['at','in','on'], a:0, w:'الساعات ← <code>at</code>.', f:'<u>at</u> 6:45'},
        {p:'We have six classes a ___.', o:['day','week','month'], a:0, w:'في اليوم.', f:'a <u>day</u>'},
        {p:'Each class ___ 45 minutes.', o:['lasts','eats','drives'], a:0, w:'تستغرق.', f:'<u>lasts</u>'},
        {p:'School ___ at 1 p.m.', o:['finishes','starts early','opens'], a:0, w:'تنتهي.', f:'<u>finishes</u>'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'He arrives ___ 7 a.m.', ask:'أكمل', o:['before','after'], a:0, w:'قبل.', f:'<u>before</u>'},
        {p:'Assembly is at ___.', ask:'اختر', o:['6:45','8:00'], a:0, w:'٦:٤٥.', f:'<u>6:45</u>'},
        {p:'They sing the ___.', ask:'اختر', o:['national anthem','alphabet'], a:0, w:'النشيد.', f:'<u>national anthem</u>'},
        {p:'There are ___ classes a day.', ask:'اختر', o:['six','ten'], a:0, w:'ستّ.', f:'<u>six</u>'},
        {p:'Each class lasts ___ minutes.', ask:'اختر', o:['45','15'], a:0, w:'٤٥.', f:'<u>45</u>'},
        {p:'School finishes at ___.', ask:'اختر', o:['1 p.m.','7 a.m.'], a:0, w:'الواحدة.', f:'<u>1 p.m.</u>'},
        {p:'The seventh period is ___.', ask:'اختر', o:['optional','required'], a:0, w:'اختيارية.', f:'<u>optional</u>'},
        {p:'T/F: He plays football after school.', ask:'صحّ/خطأ', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'Each class ___ 45 minutes.', ask:'أكمل', o:['lasts','sells'], a:0, w:'تستغرق.', f:'<u>lasts</u>'}
      ]}
    ]
  };
})();
