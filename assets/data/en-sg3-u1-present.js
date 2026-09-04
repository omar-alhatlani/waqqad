/* ============================================================
   Lesson: Simple Present Tense — Habitual Activities
   English · Super Goal 3 · Unit 1 (Lifestyles) · صفحة ٤
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en' → محتوى إنجليزيّ، شرح عربيّ.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U1_PRESENT'] = {
    id:'EN_SG3_U1_PRESENT',
    title:'Simple Present — Habits & Routines',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'Simple Present Tense',
      intro:'نستعمل <b>المضارع البسيط</b> للعادات والأفعال المتكرّرة. مع الغائب المفرد <code>he/she/it</code> نضيف <code>-s</code> إلى الفعل: <code>He works</code>. وفي السؤال والنفي نستعمل <code>do/does</code> ويعود الفعل إلى أصله: <code>Does he work? / He doesn’t work</code>.',
      table:[['I / You / We / They','play, work, study'],['He / She / It','plays, works, studies'],['Question','Do you …? / Does he …?'],['Negative','I don’t … / He doesn’t …']],
      trick:'مع <code>he/she/it</code> أضِف <code>-s</code> للفعل في الإثبات فقط. أمّا مع <code>does/doesn’t</code> فالفعل يرجع مجرّدًا: <code>Does he play?</code> لا <code>Does he plays?</code>'
    },
    stages:[
      { type:'choice', name:'أضِف s أم لا؟', hint:'الغائب المفرد يأخذ -s', qs:[
        {p:'Arthur ___ tennis twice a week.', o:['plays','play','is play','playing'], a:0, w:'<code>Arthur</code> مفرد غائب ← <code>plays</code>.', f:'Arthur <u>plays</u> tennis.'},
        {p:'I ___ coffee now and then.', o:['drink','drinks','am drink','drinking'], a:0, w:'<code>I</code> لا تأخذ <code>-s</code>.', f:'I <u>drink</u> coffee.'},
        {p:'She ___ vegetarian meals.', o:['eats','eat','eating','is eat'], a:0, w:'<code>She</code> ← <code>eats</code>.', f:'She <u>eats</u> vegetarian meals.'},
        {p:'They ___ video games every day.', o:['play','plays','playing','is play'], a:0, w:'<code>They</code> جمع ← بلا <code>-s</code>.', f:'They <u>play</u> video games.'},
        {p:'Martin ___ hard at the office.', o:['works','work','working','do work'], a:0, w:'<code>Martin</code> مفرد ← <code>works</code>.', f:'Martin <u>works</u> hard.'}
      ]},
      { type:'choice', name:'do أم does؟', hint:'الغائب المفرد يأخذ does', qs:[
        {p:'___ you exercise regularly?', o:['Do','Does','Are','Is'], a:0, w:'<code>you</code> ← <code>Do</code>.', f:'<u>Do</u> you exercise?'},
        {p:'___ he play tennis?', o:['Does','Do','Is','Are'], a:0, w:'<code>he</code> ← <code>Does</code>.', f:'<u>Does</u> he play tennis?'},
        {p:'She ___ eat meat.', o:['doesn’t','don’t','isn’t','not'], a:0, w:'<code>She</code> ← <code>doesn’t</code>.', f:'She <u>doesn’t</u> eat meat.'},
        {p:'We ___ drink coffee.', o:['don’t','doesn’t','aren’t','not'], a:0, w:'<code>We</code> ← <code>don’t</code>.', f:'We <u>don’t</u> drink coffee.'},
        {p:'___ Refaa like herbal tea?', o:['Does','Do','Is','Are'], a:0, w:'<code>Refaa</code> مفرد ← <code>Does</code>.', f:'<u>Does</u> Refaa like herbal tea?'}
      ]},
      { type:'choice', name:'الفعل بعد does', hint:'بعد does/doesn’t يرجع الفعل مجرّدًا', qs:[
        {p:'Does he ___ to the gym?', o:['go','goes','going','went'], a:0, w:'بعد <code>does</code> الفعل مجرّد ← <code>go</code>.', f:'Does he <u>go</u> to the gym?'},
        {p:'She doesn’t ___ junk food.', o:['eat','eats','eating','ate'], a:0, w:'بعد <code>doesn’t</code> ← <code>eat</code>.', f:'She doesn’t <u>eat</u> junk food.'},
        {p:'John ___ any physical exercise.', o:['hates','hate','hating','is hate'], a:0, w:'<code>John</code> ← <code>hates</code>.', f:'John <u>hates</u> exercise.'},
        {p:'How often does Josh ___ online?', o:['chat','chats','chatting','chatted'], a:0, w:'بعد <code>does</code> ← <code>chat</code>.', f:'…does Josh <u>chat</u> online?'},
        {p:'Noura ___ her homework after school.', o:['does','do','doing','done'], a:0, w:'<code>Noura</code> ← <code>does</code>.', f:'Noura <u>does</u> her homework.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['He','play','tennis','every','day','.'], bad:1, fix:'plays', w:'الغائب المفرد ← <code>plays</code>.', f:'He <u>plays</u> tennis every day.'},
        {words:['Does','she','eats','meat','?'], bad:2, fix:'eat', w:'بعد <code>does</code> يرجع الفعل مجرّدًا.', f:'Does she <u>eat</u> meat?'},
        {words:['They','doesn’t','drink','coffee','.'], bad:1, fix:'don’t', w:'<code>They</code> ← <code>don’t</code>.', f:'They <u>don’t</u> drink coffee.'},
        {words:['Do','he','go','to','the','gym','?'], bad:0, fix:'Does', w:'<code>he</code> ← <code>Does</code>.', f:'<u>Does</u> he go to the gym?'},
        {words:['I','plays','video','games','.'], bad:1, fix:'play', w:'<code>I</code> بلا <code>-s</code>.', f:'I <u>play</u> video games.'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['She','never','drinks','coffee','.'], w:'ظرف التكرار قبل الفعل، والفعل يأخذ <code>-s</code>.', f:'She never drinks coffee.'},
        {sol:['Do','you','exercise','regularly','?'], w:'<code>Do</code> في المقدمة مع <code>you</code>.', f:'Do you exercise regularly?'},
        {sol:['He','doesn’t','like','junk','food','.'], w:'<code>doesn’t</code> ثمّ الفعل مجرّدًا.', f:'He doesn’t like junk food.'},
        {sol:['Does','Martin','take','a','vacation','?'], w:'<code>Does</code> ثمّ الفاعل ثمّ الفعل المجرّد.', f:'Does Martin take a vacation?'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'Arthur ___ tennis twice a week.', ask:'اختر الفعل', o:['plays','play','playing'], a:0, w:'مفرد ← <code>plays</code>.', f:'Arthur <u>plays</u> tennis.'},
        {p:'___ you drink coffee?', ask:'اختر المساعد', o:['Do','Does','Are'], a:0, w:'<code>you</code> ← <code>Do</code>.', f:'<u>Do</u> you drink coffee?'},
        {p:'She ___ eat meat.', ask:'النفي', o:['doesn’t','don’t','isn’t'], a:0, w:'مفرد ← <code>doesn’t</code>.', f:'She <u>doesn’t</u> eat meat.'},
        {p:'Does he ___ to the gym?', ask:'الفعل بعد does', o:['go','goes','going'], a:0, w:'مجرّد ← <code>go</code>.', f:'Does he <u>go</u>?'},
        {p:'They ___ video games.', ask:'اختر الفعل', o:['play','plays','plaies'], a:0, w:'جمع ← <code>play</code>.', f:'They <u>play</u> video games.'},
        {p:'___ Refaa like tea?', ask:'اختر المساعد', o:['Does','Do','Is'], a:0, w:'مفرد ← <code>Does</code>.', f:'<u>Does</u> Refaa like tea?'},
        {sol:['He','never','takes','a','vacation','.'], w:'الظرف قبل الفعل والفعل يأخذ <code>-s</code>.', f:'He never takes a vacation.'},
        {p:'We ___ drink coffee.', ask:'النفي', o:['don’t','doesn’t','aren’t'], a:0, w:'جمع ← <code>don’t</code>.', f:'We <u>don’t</u> drink coffee.'},
        {sol:['Do','you','exercise','regularly','?'], w:'<code>Do</code> في المقدمة.', f:'Do you exercise regularly?'}
      ]}
    ]
  };
})();
