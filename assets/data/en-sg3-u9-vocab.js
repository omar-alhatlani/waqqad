/* ============================================================
   Lesson: Vocabulary — Personality & Character
   English · Super Goal 3 · Unit 9 (All Kinds of People) · صفحات ٩٤–٩٥
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U9_VOCAB'] = {
    id:'EN_SG3_U9_VOCAB',
    title:'Vocabulary — Personality',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'Describing People',
      intro:'صفاتُ الشخصية: <code>generous</code> كريم، <code>honest</code> صادق، <code>patient</code> صبور، <code>hardworking</code> مجتهد، <code>ambitious</code> طموح، <code>creative</code> مبدع، <code>selfish</code> أنانيّ، <code>lazy</code> كسول، <code>talkative</code> ثرثار، <code>shy</code> خجول.',
      table:[['generous','كريم'],['honest','صادق'],['patient','صبور'],['ambitious','طموح'],['selfish','أنانيّ']],
      trick:'صفاتٌ إيجابية (<code>generous, honest, patient, creative</code>) وسلبية (<code>selfish, lazy</code>). ونصف الشخصَ بها: <code>He is a generous person</code>.'
    },
    stages:[
      { type:'choice', name:'المعنى', hint:'اختر المعنى الصحيح', qs:[
        {p:'A “generous” person likes to ___.', o:['give to others','keep everything','argue'], a:0, w:'كريم.', f:'<u>give to others</u>'},
        {p:'An “honest” person always tells the ___.', o:['truth','lie','joke'], a:0, w:'صادق.', f:'the <u>truth</u>'},
        {p:'A “patient” person can ___ calmly.', o:['wait','shout','run'], a:0, w:'صبور.', f:'can <u>wait</u>'},
        {p:'An “ambitious” person wants to ___.', o:['succeed','sleep','fail'], a:0, w:'طموح.', f:'wants to <u>succeed</u>'},
        {p:'A “selfish” person thinks only of ___.', o:['himself','others','the poor'], a:0, w:'أنانيّ.', f:'only of <u>himself</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الصفة المناسبة', qs:[
        {p:'He gives money to the poor. He is very ___.', o:['generous','lazy','selfish'], a:0, w:'كريم.', f:'<u>generous</u>'},
        {p:'She works very hard. She is ___.', o:['hardworking','lazy','shy'], a:0, w:'مجتهدة.', f:'<u>hardworking</u>'},
        {p:'He never lies. He is ___.', o:['honest','selfish','lazy'], a:0, w:'صادق.', f:'<u>honest</u>'},
        {p:'She always waits calmly. She is ___.', o:['patient','angry','loud'], a:0, w:'صبورة.', f:'<u>patient</u>'},
        {p:'He has many new ideas. He is ___.', o:['creative','lazy','shy'], a:0, w:'مبدع.', f:'<u>creative</u>'}
      ]},
      { type:'choice', name:'إيجابيّ أم سلبيّ', hint:'صفةٌ حسنة أم سيّئة؟', qs:[
        {p:'“lazy” is a ___ trait.', o:['negative','positive','neutral'], a:0, w:'سلبية.', f:'<u>negative</u>'},
        {p:'“honest” is a ___ trait.', o:['positive','negative','neutral'], a:0, w:'إيجابية.', f:'<u>positive</u>'},
        {p:'A “talkative” person likes to ___.', o:['talk a lot','stay silent','sleep'], a:0, w:'ثرثار.', f:'<u>talk a lot</u>'},
        {p:'A “shy” person is ___ with new people.', o:['quiet','loud','rude'], a:0, w:'خجول.', f:'<u>quiet</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['A','generous','person','keeps','everything','.'], bad:3, fix:'gives', w:'الكريمُ يعطي.', f:'A generous person <u>gives</u>.'},
        {words:['An','honest','person','tells','lies','.'], bad:4, fix:'the truth', w:'الصادقُ يقول الحقّ.', f:'…tells <u>the truth</u>.'},
        {words:['A','lazy','person','works','very','hard','.'], bad:1, fix:'hardworking', w:'المجتهدُ يعمل بجدّ.', f:'A <u>hardworking</u> person…'},
        {words:['A','selfish','person','helps','everyone','.'], bad:1, fix:'generous', w:'الأنانيُّ لا يساعد؛ الكريم يساعد.', f:'A <u>generous</u> person helps everyone.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'gives to others =', ask:'اختر', o:['generous','selfish'], a:0, w:'كريم.', f:'<u>generous</u>'},
        {p:'tells the truth =', ask:'اختر', o:['honest','lazy'], a:0, w:'صادق.', f:'<u>honest</u>'},
        {p:'can wait calmly =', ask:'اختر', o:['patient','angry'], a:0, w:'صبور.', f:'<u>patient</u>'},
        {p:'wants to succeed =', ask:'اختر', o:['ambitious','lazy'], a:0, w:'طموح.', f:'<u>ambitious</u>'},
        {p:'thinks only of himself =', ask:'اختر', o:['selfish','generous'], a:0, w:'أنانيّ.', f:'<u>selfish</u>'},
        {p:'has new ideas =', ask:'اختر', o:['creative','shy'], a:0, w:'مبدع.', f:'<u>creative</u>'},
        {p:'works hard =', ask:'اختر', o:['hardworking','lazy'], a:0, w:'مجتهد.', f:'<u>hardworking</u>'},
        {p:'“lazy” is a ___ trait.', ask:'اختر', o:['negative','positive'], a:0, w:'سلبية.', f:'<u>negative</u>'},
        {p:'talks a lot =', ask:'اختر', o:['talkative','shy'], a:0, w:'ثرثار.', f:'<u>talkative</u>'}
      ]}
    ]
  };
})();
