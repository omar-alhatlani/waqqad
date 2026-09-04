/* ============================================================
   Lesson: Vocabulary — Lifestyles & Pastimes
   English · Super Goal 3 · Unit 1 (Lifestyles) · صفحات ٢–٣
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U1_VOCAB'] = {
    id:'EN_SG3_U1_VOCAB',
    title:'Vocabulary — Lifestyles',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'Lifestyle & Pastime Words',
      intro:'مفرداتٌ عن أنماط الحياة والهوايات: <code>work out</code> يتمرّن، <code>fitness</code> اللياقة، <code>exercise freak</code> مهووسٌ بالرياضة، <code>vegetarian</code> نباتيّ، <code>Internet addict</code> مُدمِن إنترنت، <code>devoted to</code> مُخلِصٌ لِـ، <code>chores</code> الأعمال المنزلية، <code>routine</code> روتين/عادة.',
      table:[['work out','يتمرّن في النادي'],['fitness','اللياقة البدنية'],['vegetarian','نباتيّ (لا يأكل اللحم)'],['devoted to','مُخلِصٌ / مُتفانٍ في'],['chores','الأعمال المنزلية']],
      trick:'<code>work out</code> فعلٌ (يتمرّن)، و<code>a workout</code> اسمٌ (تمرين). و<code>be into something</code> تعني «مهتمٌّ بشدّة بـ».'
    },
    stages:[
      { type:'choice', name:'المعنى', hint:'اختر المعنى الصحيح', qs:[
        {p:'“work out” means:', o:['exercise at the gym','work late','go out'], a:0, w:'<code>work out</code> = يتمرّن.', f:'work out = <u>exercise</u>'},
        {p:'A “vegetarian” doesn’t eat:', o:['meat','vegetables','fruit'], a:0, w:'النباتيّ لا يأكل اللحم.', f:'vegetarian → no <u>meat</u>'},
        {p:'“fitness” is about being:', o:['physically fit','rich','busy'], a:0, w:'اللياقة البدنية.', f:'fitness = <u>physically fit</u>'},
        {p:'“chores” are:', o:['household tasks','sports','games'], a:0, w:'الأعمال المنزلية.', f:'chores = <u>household tasks</u>'},
        {p:'An “Internet addict” spends ___ time online.', o:['too much','no','a little'], a:0, w:'المُدمِن يقضي وقتًا كثيرًا جدًّا.', f:'addict = <u>too much</u> time'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'Arthur runs and plays tennis. He is really into ___.', o:['fitness','cooking','sleeping'], a:0, w:'أرثر مهتمٌّ باللياقة.', f:'into <u>fitness</u>'},
        {p:'Refaa is a health food ___. She eats vegetarian meals.', o:['fanatic','driver','addict'], a:0, w:'<code>health food fanatic</code> مهووسٌ بالطعام الصحّي.', f:'health food <u>fanatic</u>'},
        {p:'Martin is ___ to his job; he always takes work home.', o:['devoted','bored','new'], a:0, w:'<code>devoted to</code> مُتفانٍ في.', f:'<u>devoted</u> to his job'},
        {p:'Noura helps with the ___ after school.', o:['chores','gym','traffic'], a:0, w:'الأعمال المنزلية.', f:'the <u>chores</u>'},
        {p:'Josh spends three hours a day on the computer. He is an Internet ___.', o:['addict','artist','athlete'], a:0, w:'مُدمِن إنترنت.', f:'Internet <u>addict</u>'}
      ]},
      { type:'choice', name:'الكلمة المناسبة', hint:'اختر الأنسب', qs:[
        {p:'I ___ at the gym every morning.', o:['work out','turn off','take off'], a:0, w:'يتمرّن ← <code>work out</code>.', f:'I <u>work out</u> …'},
        {p:'Exercise ___ me ___. I find it boring.', o:['turns / off','works / out','gets / up'], a:0, w:'<code>turn off</code> = لا يثير اهتمامي.', f:'Exercise <u>turns me off</u>.'},
        {p:'A daily ___ is a fixed set of habits.', o:['routine','fitness','chore'], a:0, w:'الروتين اليوميّ.', f:'daily <u>routine</u>'},
        {p:'She ___ eats meat; almost never.', o:['hardly ever','always','usually'], a:0, w:'نادرًا جدًّا ← <code>hardly ever</code>.', f:'<u>hardly ever</u> eats meat'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['A','vegetarian','eats','meat','.'], bad:2, fix:'doesn’t eat', w:'النباتيّ لا يأكل اللحم.', f:'A vegetarian <u>doesn’t eat</u> meat.'},
        {words:['He','works','in','at','the','gym','.'], bad:2, fix:'out (works out)', w:'الصواب <code>works out</code>.', f:'He <u>works out</u> at the gym.'},
        {words:['She','is','devoted','on','her','job','.'], bad:3, fix:'to', w:'<code>devoted to</code>.', f:'devoted <u>to</u> her job'},
        {words:['I','help','with','the','chore','.'], bad:4, fix:'chores', w:'الجمع <code>chores</code>.', f:'the <u>chores</u>'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'“work out” =', ask:'المعنى', o:['exercise','sleep'], a:0, w:'يتمرّن.', f:'<u>exercise</u>'},
        {p:'A vegetarian avoids ___.', ask:'اختر', o:['meat','water'], a:0, w:'اللحم.', f:'<u>meat</u>'},
        {p:'Martin is ___ to his work.', ask:'أكمل', o:['devoted','turned'], a:0, w:'<code>devoted to</code>.', f:'<u>devoted</u>'},
        {p:'household tasks =', ask:'الكلمة', o:['chores','fitness'], a:0, w:'الأعمال المنزلية.', f:'<u>chores</u>'},
        {p:'She ___ eats meat (almost never).', ask:'اختر', o:['hardly ever','always'], a:0, w:'نادرًا جدًّا.', f:'<u>hardly ever</u>'},
        {p:'“be into something” =', ask:'المعنى', o:['very interested in','tired of'], a:0, w:'مهتمٌّ بشدّة.', f:'<u>very interested in</u>'},
        {p:'a daily set of habits =', ask:'الكلمة', o:['routine','addict'], a:0, w:'روتين.', f:'<u>routine</u>'},
        {p:'“fitness” relates to being ___.', ask:'اختر', o:['fit','rich'], a:0, w:'اللياقة.', f:'<u>fit</u>'},
        {p:'Internet ___ spends too much time online.', ask:'أكمل', o:['addict','artist'], a:0, w:'مُدمِن.', f:'<u>addict</u>'}
      ]}
    ]
  };
})();
