/* ============================================================
   Lesson: Reading — Follow Your Dream
   English · Super Goal 1 · Unit 9 (What Do You Do?) · صفحة ٨٢
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U9_READ'] = {
    id:'EN_SG1_U9_READ',
    title:'Reading — Follow Your Dream',
    lang:'en',
    rule:{
      tag:'Reading',
      title:'Follow Your Dream',
      intro:'اقرأِ النصَّ عن عمر وحلمِه في كرة القدم، ثمّ أجِب عن الأسئلة.',
      examples:[
        'Omar wants to be a professional football player. The coach thinks he has potential.',
        'Omar is an Al-Watani fan, and his dream is to play for Al-Watani one day.',
        'This summer he is going to the Al-Watani Football School.',
        'There, boys learn the techniques of football and how to work as a team.',
        'They also have a chance to meet their favorite star players.'
      ],
      trick:'الفكرة: عمر يحلم بأن يصبح لاعبَ كرةٍ محترفًا، وسيلتحق بمدرسة الوطني لكرة القدم هذا الصيف ليتعلّم المهارات والعملَ الجماعيّ.'
    },
    stages:[
      { type:'choice', name:'الفهم العام', hint:'ماذا يريد عمر؟', qs:[
        {p:'What does Omar want to be?', o:['a professional football player','a doctor','a teacher'], a:0, w:'لاعبَ كرةٍ محترفًا.', f:'a <u>professional football player</u>'},
        {p:'What does the coach think about Omar?', o:['He has potential','He is lazy','He is old'], a:0, w:'لديه إمكانات.', f:'He has <u>potential</u>'},
        {p:'Which team is Omar a fan of?', o:['Al-Watani','Al-Nasr','Al-Ittihad'], a:0, w:'الوطني.', f:'<u>Al-Watani</u>'},
        {p:'When is he going to the football school?', o:['this summer','next year','last week'], a:0, w:'هذا الصيف.', f:'<u>this summer</u>'}
      ]},
      { type:'choice', name:'تفاصيل', hint:'ماذا يتعلّم هناك؟', qs:[
        {p:'At the school, boys learn the ___ of football.', o:['techniques','history','prices'], a:0, w:'المهارات/التقنيات.', f:'the <u>techniques</u>'},
        {p:'They also learn how to work as a ___.', o:['team','family','class'], a:0, w:'فريق.', f:'a <u>team</u>'},
        {p:'They have a chance to meet their favorite ___.', o:['star players','teachers','doctors'], a:0, w:'نجوم اللاعبين.', f:'<u>star players</u>'},
        {p:'Omar’s dream is to play for ___.', o:['Al-Watani','a bank','a school'], a:0, w:'الوطني.', f:'<u>Al-Watani</u>'}
      ]},
      { type:'choice', name:'صحّ أم خطأ', hint:'True / False', qs:[
        {p:'T/F: Omar wants to be a doctor.', o:['False','True'], a:0, w:'بل لاعبَ كرة.', f:'<u>False</u>'},
        {p:'T/F: The coach thinks Omar has potential.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'T/F: At the school, boys learn to work as a team.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'T/F: Omar is going to the school next year.', o:['False','True'], a:0, w:'بل هذا الصيف.', f:'<u>False</u>'}
      ]},
      { type:'gap', name:'أكمل من النصّ', hint:'اختر الكلمة المناسبة', qs:[
        {p:'Omar wants to be a professional football ___.', o:['player','fan','coach'], a:0, w:'لاعب.', f:'<u>player</u>'},
        {p:'His ___ is to play for Al-Watani.', o:['dream','school','team'], a:0, w:'حلمه.', f:'his <u>dream</u>'},
        {p:'Boys learn the ___ of football.', o:['techniques','prices','names'], a:0, w:'المهارات.', f:'<u>techniques</u>'},
        {p:'They learn to work as a ___.', o:['team','store','farm'], a:0, w:'فريق.', f:'a <u>team</u>'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'Omar wants to be a football ___.', ask:'أكمل', o:['player','fan'], a:0, w:'لاعب.', f:'<u>player</u>'},
        {p:'The coach thinks he has ___.', ask:'اختر', o:['potential','money'], a:0, w:'إمكانات.', f:'<u>potential</u>'},
        {p:'Omar is a fan of ___.', ask:'اختر', o:['Al-Watani','Al-Nasr'], a:0, w:'الوطني.', f:'<u>Al-Watani</u>'},
        {p:'He is going to the school ___.', ask:'اختر', o:['this summer','next year'], a:0, w:'هذا الصيف.', f:'<u>this summer</u>'},
        {p:'Boys learn the ___ of football.', ask:'أكمل', o:['techniques','history'], a:0, w:'المهارات.', f:'<u>techniques</u>'},
        {p:'They learn to work as a ___.', ask:'اختر', o:['team','class'], a:0, w:'فريق.', f:'<u>team</u>'},
        {p:'They can meet their favorite ___.', ask:'أكمل', o:['star players','teachers'], a:0, w:'النجوم.', f:'<u>star players</u>'},
        {p:'T/F: Omar has potential.', ask:'صحّ/خطأ', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'Omar’s ___ is to play for Al-Watani.', ask:'أكمل', o:['dream','team'], a:0, w:'حلمه.', f:'<u>dream</u>'}
      ]}
    ]
  };
})();
