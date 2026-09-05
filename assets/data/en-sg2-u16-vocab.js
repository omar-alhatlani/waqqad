/* ============================================================
   Lesson: Vocabulary — Experiences
   English · Super Goal 2 · Unit 16 (Have You Ever…?) · صفحات ١٤٠–١٤١
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U16_VOCAB'] = {
    id:'EN_SG2_U16_VOCAB',
    title:'Vocabulary — Experiences',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'Talking About Experiences',
      intro:'مفرداتُ التجارب: <code>experience</code> تجربة، <code>try</code> يجرّب، <code>ride a camel</code> يركب جملًا، <code>travel abroad</code> يسافر للخارج، <code>uncomfortable</code> غير مريح، <code>incredible</code> مذهل، <code>unforgettable</code> لا يُنسى، <code>brave</code> شجاع، <code>climate</code> مناخ.',
      table:[['experience','تجربة'],['try','يجرّب'],['uncomfortable','غير مريح'],['incredible','مذهل'],['unforgettable','لا يُنسى']],
      trick:'صفاتٌ للتجربة: إيجابية (<code>incredible, amazing, unforgettable</code>) وسلبية (<code>uncomfortable, boring</code>). و<code>abroad</code> ظرفٌ بلا <code>to</code>: <code>travel abroad</code>.'
    },
    stages:[
      { type:'choice', name:'المعنى', hint:'اختر المعنى الصحيح', qs:[
        {p:'An “experience” is something you:', o:['do or feel','buy','sell'], a:0, w:'تجربة.', f:'something you <u>do or feel</u>'},
        {p:'“to try” something means to:', o:['do it for the first time','avoid it','forget it'], a:0, w:'يجرّب.', f:'<u>do it for the first time</u>'},
        {p:'“uncomfortable” means:', o:['not comfortable','very fun','cheap'], a:0, w:'غير مريح.', f:'<u>not comfortable</u>'},
        {p:'“incredible” means:', o:['amazing','boring','ordinary'], a:0, w:'مذهل.', f:'<u>amazing</u>'},
        {p:'“unforgettable” means you will ___ forget it.', o:['never','always','soon'], a:0, w:'لن تنساه.', f:'<u>never</u> forget'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'Riding a camel was an ___ experience!', o:['incredible','ordinary','boring'], a:0, w:'مذهلة.', f:'an <u>incredible</u> experience'},
        {p:'It was the most ___ ride, but so much fun.', o:['uncomfortable','comfortable','cheap'], a:0, w:'غير مريح.', f:'<u>uncomfortable</u>'},
        {p:'Have you ever ___ a camel?', o:['ridden','driven','flown'], a:0, w:'ركبت.', f:'<u>ridden</u>'},
        {p:"I'll never forget it. It was ___.", o:['unforgettable','normal','sad only'], a:0, w:'لا يُنسى.', f:'<u>unforgettable</u>'},
        {p:'Camels can withstand the hot desert ___.', o:['climate','city','office'], a:0, w:'المناخ.', f:'<u>climate</u>'}
      ]},
      { type:'choice', name:'الكلمة المناسبة', hint:'اختر الأنسب', qs:[
        {p:'I want to ___ new food when I travel.', o:['try','sell','iron'], a:0, w:'يجرّب.', f:'<u>try</u>'},
        {p:'Camels are “___ of the desert”.', o:['ships','cars','planes'], a:0, w:'سفن الصحراء.', f:'<u>ships</u>'},
        {p:'To travel to another country is to go ___.', o:['abroad','home','back'], a:0, w:'للخارج.', f:'<u>abroad</u>'},
        {p:'A “brave” person is not ___.', o:['afraid','tall','busy'], a:0, w:'غير خائف.', f:'not <u>afraid</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['Riding','a','camel','was','boring','and','incredible','.'], bad:4, fix:'تناقض؛ احذف boring', w:'<code>incredible</code> = مذهل، يناقض <code>boring</code>.', f:'…was <u>incredible</u>.'},
        {words:['I','want','to','travel','to','abroad','.'], bad:4, fix:'حذف to', w:'<code>abroad</code> ظرفٌ بلا <code>to</code>.', f:'travel <u>abroad</u>'},
        {words:['It','was','the','most','comfortable','ride','—','so','painful','!'], bad:4, fix:'uncomfortable', w:'مؤلمٌ ← غير مريح.', f:'the most <u>uncomfortable</u> ride'},
        {words:['“Unforgettable”','means','you','will','soon','forget','.'], bad:4, fix:'never', w:'لا يُنسى.', f:'you will <u>never</u> forget'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'“experience” =', ask:'المعنى', o:['something you do/feel','a price'], a:0, w:'تجربة.', f:'<u>something you do/feel</u>'},
        {p:'“try” =', ask:'المعنى', o:['do for the first time','avoid'], a:0, w:'يجرّب.', f:'<u>do for the first time</u>'},
        {p:'“uncomfortable” =', ask:'المعنى', o:['not comfortable','very fun'], a:0, w:'غير مريح.', f:'<u>not comfortable</u>'},
        {p:'“incredible” =', ask:'المعنى', o:['amazing','boring'], a:0, w:'مذهل.', f:'<u>amazing</u>'},
        {p:'“unforgettable” → you ___ forget.', ask:'اختر', o:['never','soon'], a:0, w:'لن تنسى.', f:'<u>never</u>'},
        {p:'ride a ___ in the desert', ask:'اختر', o:['camel','plane'], a:0, w:'جمل.', f:'<u>camel</u>'},
        {p:'travel to another country = go ___', ask:'أكمل', o:['abroad','home'], a:0, w:'للخارج.', f:'<u>abroad</u>'},
        {p:'camels = “___ of the desert”', ask:'أكمل', o:['ships','cars'], a:0, w:'سفن.', f:'<u>ships</u>'},
        {p:'desert ___ is hot', ask:'اختر', o:['climate','office'], a:0, w:'المناخ.', f:'<u>climate</u>'}
      ]}
    ]
  };
})();
