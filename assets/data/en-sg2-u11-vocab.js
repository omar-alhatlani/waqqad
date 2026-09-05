/* ============================================================
   Lesson: Vocabulary — Adjectives, Technology & Facts
   English · Super Goal 2 · Unit 11 (There's No Comparison) · صفحات ٩٤–٩٧
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U11_VOCAB'] = {
    id:'EN_SG2_U11_VOCAB',
    title:'Vocabulary — Adjectives & Tech',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'Comparing & Describing',
      intro:'صفاتٌ للمقارنة والوصف: <code>convenient</code> مريح، <code>useful</code> مفيد، <code>portable</code> محمول، <code>powerful</code> قويّ، <code>hard</code> صلب/صعب، <code>soft</code> ليّن، <code>expensive ↔ cheap</code> غالٍ/رخيص. وأجهزة: <code>laptop</code> حاسوب محمول، <code>desktop</code> حاسوب مكتبيّ، <code>screen</code> شاشة، <code>install</code> يُنصّب، <code>recharge</code> يشحن.',
      table:[['convenient','مريح/عمليّ'],['portable','محمول'],['recharge','يعيد الشحن'],['install','يُنصّب برنامجًا'],['screen','شاشة']],
      trick:'صفاتٌ متضادّة تفيد المقارنة: <code>expensive ↔ cheap</code>, <code>hard ↔ soft</code>, <code>big ↔ small</code>. و<code>convenient</code> = سهلُ الاستعمال أو الوصول.'
    },
    stages:[
      { type:'choice', name:'المعنى', hint:'اختر المعنى الصحيح', qs:[
        {p:'“convenient” means:', o:['easy to use','very hard','far away'], a:0, w:'مريح/عمليّ.', f:'<u>easy to use</u>'},
        {p:'“portable” means:', o:['easy to carry','very heavy','fixed'], a:0, w:'محمول.', f:'<u>easy to carry</u>'},
        {p:'“expensive” is the opposite of:', o:['cheap','big','new'], a:0, w:'ضدّ رخيص.', f:'opposite of <u>cheap</u>'},
        {p:'“hard” (material) is the opposite of:', o:['soft','fast','tall'], a:0, w:'ضدّ ليّن.', f:'opposite of <u>soft</u>'},
        {p:'A “laptop” is a ___ computer.', o:['portable','desktop','broken'], a:0, w:'محمول.', f:'a <u>portable</u> computer'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'A laptop is ___ because you can carry it anywhere.', o:['convenient','heavy','fixed'], a:0, w:'مريح.', f:'<u>convenient</u>'},
        {p:'I have to ___ my laptop every night.', o:['recharge','install','install'], a:0, w:'يعيد الشحن.', f:'<u>recharge</u>'},
        {p:"I'm going to ___ that program next week.", o:['install','recharge','fit'], a:0, w:'يُنصّب.', f:'<u>install</u>'},
        {p:'A laptop’s ___ is smaller than a desktop’s.', o:['screen','price only','wheel'], a:0, w:'الشاشة.', f:'<u>screen</u>'},
        {p:'Diamonds are the ___ natural substance on Earth.', o:['hardest','softest','fastest'], a:0, w:'الأصلب.', f:'the <u>hardest</u>'}
      ]},
      { type:'choice', name:'المتضادّات', hint:'opposites', qs:[
        {p:'opposite of “cheap”:', o:['expensive','soft','small'], a:0, w:'غالٍ.', f:'<u>expensive</u>'},
        {p:'opposite of “big”:', o:['small','hard','fast'], a:0, w:'صغير.', f:'<u>small</u>'},
        {p:'opposite of “heavy”:', o:['light','hard','loud'], a:0, w:'خفيف.', f:'<u>light</u>'},
        {p:'A powerful computer is very ___.', o:['strong','weak','slow'], a:0, w:'قويّ.', f:'<u>strong</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['A','laptop','is','fixed','and','portable','.'], bad:3, fix:'تناقض؛ احذف fixed', w:'المحمول ليس ثابتًا.', f:'A laptop is <u>portable</u>.'},
        {words:['I','have','to','install','my','phone','battery','.'], bad:3, fix:'recharge', w:'البطارية تُشحن ← <code>recharge</code>.', f:'…<u>recharge</u>…'},
        {words:['“Convenient”','means','very','hard','.'], bad:3, fix:'easy to use', w:'مريح = سهل الاستعمال.', f:'means <u>easy to use</u>'},
        {words:['Diamonds','are','the','softest','substance','.'], bad:3, fix:'hardest', w:'الماس الأصلب.', f:'the <u>hardest</u>'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'“convenient” =', ask:'المعنى', o:['easy to use','far'], a:0, w:'مريح.', f:'<u>easy to use</u>'},
        {p:'“portable” =', ask:'المعنى', o:['easy to carry','heavy'], a:0, w:'محمول.', f:'<u>easy to carry</u>'},
        {p:'opposite of “cheap” =', ask:'اختر', o:['expensive','soft'], a:0, w:'غالٍ.', f:'<u>expensive</u>'},
        {p:'opposite of “hard” =', ask:'اختر', o:['soft','fast'], a:0, w:'ليّن.', f:'<u>soft</u>'},
        {p:'carry a laptop → it is ___.', ask:'أكمل', o:['convenient','fixed'], a:0, w:'مريح.', f:'<u>convenient</u>'},
        {p:'battery low → ___ it', ask:'اختر', o:['recharge','install'], a:0, w:'يعيد الشحن.', f:'<u>recharge</u>'},
        {p:'add a program → ___ it', ask:'اختر', o:['install','recharge'], a:0, w:'يُنصّب.', f:'<u>install</u>'},
        {p:'Diamonds are the ___ substance.', ask:'اختر', o:['hardest','softest'], a:0, w:'الأصلب.', f:'<u>hardest</u>'},
        {p:'a strong computer is ___.', ask:'اختر', o:['powerful','weak'], a:0, w:'قويّ.', f:'<u>powerful</u>'}
      ]}
    ]
  };
})();
