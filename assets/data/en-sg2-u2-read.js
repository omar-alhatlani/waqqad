/* ============================================================
   Lesson: Reading — E-Learning Is Easy!
   English · Super Goal 2 · Unit 2 (What Are They Making?) · صفحة ١٥
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2). النصّ من الكتاب.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U2_READ'] = {
    id:'EN_SG2_U2_READ',
    title:'Reading — E-Learning Is Easy!',
    lang:'en',
    rule:{
      tag:'النصّ',
      title:'E-Learning Is Easy!',
      intro:'اقرأ عن <b>التعلّم الإلكترونيّ</b> (e-learning) وكيف تجعله مقاطعُ الفيديو والإنترنت سهلًا، ثم أجب عن الأسئلة.',
      examples:[
        'The Internet makes it easy to communicate. Lots of people share photos and videos with family and friends. Webcams make it possible for others to see you when you are talking online.',
        'But web videos and webcams are more than that — they are popular tools for e-learning. Many teachers show web videos in class to help students understand geography or science.',
        'There are thousands of video clips: active volcanoes, new technology, or global warming. More and more students take online lessons — some learn languages on their own from websites, others connect with a teacher using a webcam.',
        'There are online schools like the Khan Academy with over 3,000 free video lessons in math, science, economics, and history. Do you want to make a cheesecake or play golf? Free how-to videos can teach you. Anyone can e-learn, and it’s easy!'
      ],
      trick:'انتبه للأفكار: الإنترنت للتواصل، ومقاطع الفيديو والكاميرات أدواتٌ للتعلّم، و<code>Khan Academy</code> مجانيّة (<code>3,000</code> درس).'
    },
    stages:[
      { type:'choice', name:'الفهم', hint:'أجب حسب النصّ', qs:[
        {p:'What makes it easy to communicate?', ask:'حسب النصّ', o:['The Internet','The television','The newspaper','The radio'], a:0, w:'<code>The Internet makes it easy to communicate</code>.', f:'The Internet.'},
        {p:'What are web videos becoming popular tools for?', ask:'حسب النصّ', o:['E-learning','Shopping','Cooking only','Sleeping'], a:0, w:'<code>popular tools for e-learning</code>.', f:'E-learning.'},
        {p:'How many video lessons does the Khan Academy have?', ask:'حسب النصّ', o:['Over 3,000','Only 30','About 300','Over 30,000'], a:0, w:'<code>over 3,000 video lessons</code>.', f:'Over 3,000.'},
        {p:'How much do Khan Academy lessons cost?', ask:'حسب النصّ', o:['They are free','$3,000','A little','A lot'], a:0, w:'<code>it’s absolutely free</code>.', f:'Free.'},
        {p:'What lets others see you when talking online?', ask:'حسب النصّ', o:['A webcam','A book','A pen','A map'], a:0, w:'<code>Webcams make it possible…</code>', f:'A webcam.'}
      ]},
      { type:'choice', name:'Yes / No', hint:'صحيح أم خطأ حسب النصّ', qs:[
        {p:'The Internet makes communication difficult.', ask:'Yes / No', o:['No','Yes'], a:0, w:'بل <code>easy</code>.', f:'No — easy.'},
        {p:'Some teachers use web videos in class.', ask:'Yes / No', o:['Yes','No'], a:0, w:'<code>Many teachers show web videos</code>.', f:'Yes.'},
        {p:'Khan Academy lessons are expensive.', ask:'Yes / No', o:['No','Yes'], a:0, w:'<code>absolutely free</code>.', f:'No — free.'},
        {p:'You can learn a language online.', ask:'Yes / No', o:['Yes','No'], a:0, w:'<code>learn on their own from websites</code>.', f:'Yes.'},
        {p:'How-to videos can teach you skills like cooking.', ask:'Yes / No', o:['Yes','No'], a:0, w:'<code>how to make a cheesecake</code>.', f:'Yes.'}
      ]},
      { type:'gap', name:'أكمل من النصّ', hint:'اختر الكلمة الصحيحة', qs:[
        {p:'Webcams and web videos are tools for ___.', o:['e-learning','shopping','cooking','driving'], a:0, w:'<code>tools for e-learning</code>.', f:'tools for <u>e-learning</u>.'},
        {p:'Many teachers show web ___ in their classrooms.', o:['videos','books','maps','pens'], a:0, w:'<code>web videos</code>.', f:'web <u>videos</u>.'},
        {p:'The Khan Academy is absolutely ___.', o:['free','expensive','small','closed'], a:0, w:'<code>absolutely free</code>.', f:'absolutely <u>free</u>.'},
        {p:'The Internet makes it easy to ___.', o:['communicate','sleep','drive','cook'], a:0, w:'<code>easy to communicate</code>.', f:'easy to <u>communicate</u>.'},
        {p:'Anyone can ___, and it’s easy!', o:['e-learn','fly','swim','drive'], a:0, w:'<code>Anyone can e-learn</code>.', f:'Anyone can <u>e-learn</u>.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['The','Internet','makes','communication','easy','.'], w:'الفكرة الرئيسة.', f:'The Internet makes communication easy.'},
        {sol:['Web','videos','are','tools','for','e-learning','.'], w:'أدوات التعلّم.', f:'Web videos are tools for e-learning.'},
        {sol:['Khan','Academy','is','free','.'], w:'مجانية.', f:'Khan Academy is free.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما فهمته — مختلطًا', final:true, qs:[
        {p:'What makes communication easy?', ask:'حسب النصّ', o:['The Internet','The radio'], a:0, w:'الإنترنت.', f:'The Internet.'},
        {p:'Web videos are tools for ___.', ask:'أكمل', o:['e-learning','shopping'], a:0, w:'التعلّم الإلكترونيّ.', f:'<u>e-learning</u>.'},
        {p:'Khan Academy lessons are expensive.', ask:'Yes / No', o:['No','Yes'], a:0, w:'مجانية.', f:'No.'},
        {p:'How many lessons on Khan Academy?', ask:'حسب النصّ', o:['Over 3,000','Only 30'], a:0, w:'أكثر من ٣٠٠٠.', f:'Over 3,000.'},
        {p:'You can learn a language online.', ask:'Yes / No', o:['Yes','No'], a:0, w:'نعم.', f:'Yes.'},
        {p:'A ___ lets others see you online.', ask:'أكمل', o:['webcam','book'], a:0, w:'الكاميرا.', f:'A <u>webcam</u>.'},
        {sol:['Khan','Academy','is','free','.'], w:'مجانية.', f:'Khan Academy is free.'},
        {p:'Some teachers use web videos in class.', ask:'Yes / No', o:['Yes','No'], a:0, w:'نعم.', f:'Yes.'},
        {p:'Anyone can ___.', ask:'أكمل', o:['e-learn','fly'], a:0, w:'يتعلّم إلكترونيًّا.', f:'<u>e-learn</u>.'}
      ]}
    ]
  };
})();
