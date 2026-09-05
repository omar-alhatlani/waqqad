/* ============================================================
   Lesson: Vocabulary — Complaints & Household Chores
   English · Super Goal 3 · Unit 10 (Who Used My Toothpaste?) · صفحات ١١٠–١١١
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U10_VOCAB'] = {
    id:'EN_SG3_U10_VOCAB',
    title:'Vocabulary — Complaints',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'Common Complaints at Home',
      intro:'مفرداتُ الشكوى والأعمال المنزلية: <code>complaint</code> شكوى، <code>complain</code> يشتكي، <code>mess</code> فوضى، <code>make a mess</code> يُحدث فوضى، <code>clean up</code> ينظّف، <code>borrow</code> يستعير، <code>share</code> يتشارك، <code>polite ↔ rude</code> مؤدَّب/وقح، <code>annoying</code> مزعج.',
      table:[['complaint','شكوى'],['make a mess','يُحدث فوضى'],['clean up','ينظّف'],['borrow','يستعير'],['annoying','مزعج']],
      trick:'<code>complain about + something</code> (يشتكي من). و<code>borrow</code> (يستعير — يأخذ) عكسُ <code>lend</code> (يُعير — يعطي).'
    },
    stages:[
      { type:'choice', name:'المعنى', hint:'اختر المعنى الصحيح', qs:[
        {p:'A “complaint” is when you say you are ___.', o:['not happy','very happy','tired only'], a:0, w:'شكوى.', f:'you are <u>not happy</u>'},
        {p:'To “make a mess” means to make a place ___.', o:['untidy','clean','empty'], a:0, w:'فوضى.', f:'<u>untidy</u>'},
        {p:'To “borrow” means to ___ something for a while.', o:['take','give','sell'], a:0, w:'يستعير.', f:'<u>take</u>'},
        {p:'“annoying” means it ___ you.', o:['bothers','helps','pays'], a:0, w:'مزعج.', f:'it <u>bothers</u> you'},
        {p:'A “polite” person is the opposite of ___.', o:['rude','tall','busy'], a:0, w:'ضدّ الوقح.', f:'opposite of <u>rude</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'Families often ___ about the same things.', o:['complain','clean','borrow'], a:0, w:'يشتكون.', f:'<u>complain</u>'},
        {p:"Please ___ up your room; it's a mess.", o:['clean','make','borrow'], a:0, w:'نظّف.', f:'<u>clean</u> up'},
        {p:'Don’t ___ my things without asking first.', o:['borrow','clean','share'], a:0, w:'تستعير.', f:'<u>borrow</u>'},
        {p:'Playing music loudly is very ___.', o:['annoying','polite','clean'], a:0, w:'مزعج.', f:'<u>annoying</u>'},
        {p:'It’s good to ___ things with your family.', o:['share','borrow only','mess'], a:0, w:'تتشارك.', f:'<u>share</u>'}
      ]},
      { type:'choice', name:'الشكاوى الشائعة', hint:'من النصّ', qs:[
        {p:'Leaving dirty clothes around the house is a common ___.', o:['complaint','gift','deal'], a:0, w:'شكوى.', f:'a common <u>complaint</u>'},
        {p:'Using someone else’s hairbrush is ___.', o:['annoying','helpful','kind'], a:0, w:'مزعج.', f:'<u>annoying</u>'},
        {p:'A “rude” person is not ___.', o:['polite','tall','fast'], a:0, w:'مؤدَّب.', f:'not <u>polite</u>'},
        {p:'“to complain about” means to express ___.', o:['dissatisfaction','joy','a plan'], a:0, w:'عدم رضا.', f:'<u>dissatisfaction</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['Please','make','up','your','room','.'], bad:1, fix:'clean', w:'ننظّف الغرفة ← <code>clean up</code>.', f:'Please <u>clean</u> up your room.'},
        {words:['Don’t','borrow','my','things','and','give','them','back','!'], bad:5, fix:'not', w:'الشكوى: يستعير ولا يعيد.', f:'…borrow… and <u>not</u> give them back!'},
        {words:['Loud','music','is','very','polite','.'], bad:4, fix:'annoying', w:'الموسيقى العالية مزعجة.', f:'…is very <u>annoying</u>.'},
        {words:['A','rude','person','is','very','polite','.'], bad:5, fix:'not polite', w:'الوقحُ ليس مؤدّبًا.', f:'A rude person is <u>not polite</u>.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'say you are not happy =', ask:'اختر', o:['complaint','gift'], a:0, w:'شكوى.', f:'<u>complaint</u>'},
        {p:'make a place untidy =', ask:'اختر', o:['make a mess','clean up'], a:0, w:'فوضى.', f:'<u>make a mess</u>'},
        {p:'take for a while =', ask:'اختر', o:['borrow','share'], a:0, w:'يستعير.', f:'<u>borrow</u>'},
        {p:'it bothers you =', ask:'اختر', o:['annoying','polite'], a:0, w:'مزعج.', f:'<u>annoying</u>'},
        {p:'opposite of “rude” =', ask:'اختر', o:['polite','lazy'], a:0, w:'مؤدَّب.', f:'<u>polite</u>'},
        {p:'Please ___ up your room.', ask:'أكمل', o:['clean','make'], a:0, w:'نظّف.', f:'<u>clean</u>'},
        {p:'Families ___ about chores.', ask:'أكمل', o:['complain','clean'], a:0, w:'يشتكون.', f:'<u>complain</u>'},
        {p:'good to ___ with family', ask:'اختر', o:['share','mess'], a:0, w:'تتشارك.', f:'<u>share</u>'},
        {p:'complain ___ something', ask:'أكمل', o:['about','with'], a:0, w:'<code>complain about</code>.', f:'<u>about</u>'}
      ]}
    ]
  };
})();
