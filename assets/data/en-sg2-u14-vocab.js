/* ============================================================
   Lesson: Vocabulary — Favors & Phone Messages
   English · Super Goal 2 · Unit 14 (Could You Do Me a Favor?) · صفحات ١٢٤–١٢٥
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U14_VOCAB'] = {
    id:'EN_SG2_U14_VOCAB',
    title:'Vocabulary — Favors & Phone',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'Favors, Offers & Phone Calls',
      intro:'مفرداتُ الطلبات والهاتف: <code>a favor</code> معروف/خدمة، <code>emergency</code> حالة طارئة، <code>message</code> رسالة، <code>call back</code> يعاود الاتصال، <code>leave a message</code> يترك رسالة، <code>take a message</code> يأخذ رسالة، <code>hold on</code> ينتظر على الخطّ، <code>iron</code> يكوي، <code>prepare</code> يُحضّر.',
      table:[['do a favor','يسدي معروفًا'],['emergency','حالة طارئة'],['leave a message','يترك رسالة'],['call back','يعاود الاتصال'],['hold on','ينتظر على الخطّ']],
      trick:'على الهاتف: <code>Can I take a message?</code> (آخذ رسالة؟)، <code>Can I leave a message?</code> (أترك رسالة؟)، و<code>hold on</code> = انتظرْ لحظة على الخطّ.'
    },
    stages:[
      { type:'choice', name:'المعنى', hint:'اختر المعنى الصحيح', qs:[
        {p:'A “favor” is:', o:['a helpful act','a payment','a game'], a:0, w:'معروف/خدمة.', f:'a <u>helpful act</u>'},
        {p:'An “emergency” is a ___ situation.', o:['sudden serious','funny','normal'], a:0, w:'حالة طارئة.', f:'a <u>sudden serious</u> situation'},
        {p:'To “iron” clothes means to make them:', o:['smooth','dirty','wet'], a:0, w:'يكوي.', f:'make them <u>smooth</u>'},
        {p:'To “call back” means to:', o:['phone again','hang up','forget'], a:0, w:'يعاود الاتصال.', f:'<u>phone again</u>'},
        {p:'To “prepare” a meal means to:', o:['get it ready','eat it','sell it'], a:0, w:'يُحضّر.', f:'<u>get it ready</u>'}
      ]},
      { type:'gap', name:'المكالمة الهاتفية', hint:'اختر الكلمة المناسبة', qs:[
        {p:'He’s not here. Can I take a ___?', o:['message','favor','call'], a:0, w:'رسالة.', f:'a <u>message</u>'},
        {p:'Please ___ on. I’ll get him.', o:['hold','take','leave'], a:0, w:'انتظرْ على الخطّ.', f:'<u>hold</u> on'},
        {p:'Can you ask her to ___ me back?', o:['call','iron','prepare'], a:0, w:'يعاود.', f:'<u>call</u> me back'},
        {p:'Could you do me a big ___?', o:['favor','message','hold'], a:0, w:'معروف.', f:'a big <u>favor</u>'},
        {p:'There’s been an ___. I have to go to the hospital.', o:['emergency','offer','iron'], a:0, w:'طارئة.', f:'an <u>emergency</u>'}
      ]},
      { type:'choice', name:'المهامّ', hint:'الطلبات المنزلية', qs:[
        {p:'Please ___ the dinner for the family.', o:['prepare','call','hold'], a:0, w:'يُحضّر.', f:'<u>prepare</u>'},
        {p:'Could you ___ your father’s shirt?', o:['iron','call','leave'], a:0, w:'يكوي.', f:'<u>iron</u>'},
        {p:'She wants to leave a ___ for the doctor.', o:['message','favor','iron'], a:0, w:'رسالة.', f:'a <u>message</u>'},
        {p:'In an ___, you need help quickly.', o:['emergency','offer','iron'], a:0, w:'طارئة.', f:'an <u>emergency</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['Can','I','take','a','favor','?'], bad:4, fix:'message', w:'على الهاتف ← <code>take a message</code>.', f:'take a <u>message</u>'},
        {words:['Please','iron','the','dinner','.'], bad:1, fix:'prepare', w:'العشاء يُحضَّر لا يُكوى.', f:'Please <u>prepare</u> the dinner.'},
        {words:['Ask','her','to','call','forward','.'], bad:4, fix:'back', w:'الصواب <code>call back</code>.', f:'call <u>back</u>'},
        {words:['There’s','been','an','offer','—','go','to','hospital','!'], bad:3, fix:'emergency', w:'حالة طارئة.', f:'an <u>emergency</u>'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'a helpful act =', ask:'اختر', o:['favor','emergency'], a:0, w:'معروف.', f:'<u>favor</u>'},
        {p:'sudden serious situation =', ask:'اختر', o:['emergency','favor'], a:0, w:'طارئة.', f:'<u>emergency</u>'},
        {p:'make clothes smooth =', ask:'اختر', o:['iron','prepare'], a:0, w:'يكوي.', f:'<u>iron</u>'},
        {p:'phone again =', ask:'اختر', o:['call back','hold on'], a:0, w:'يعاود.', f:'<u>call back</u>'},
        {p:'wait on the line =', ask:'اختر', o:['hold on','call back'], a:0, w:'ينتظر.', f:'<u>hold on</u>'},
        {p:'Can I take a ___?', ask:'أكمل', o:['message','favor'], a:0, w:'رسالة.', f:'<u>message</u>'},
        {p:'Please ___ dinner.', ask:'أكمل', o:['prepare','iron'], a:0, w:'يُحضّر.', f:'<u>prepare</u>'},
        {p:'do me a big ___', ask:'أكمل', o:['favor','call'], a:0, w:'معروف.', f:'<u>favor</u>'},
        {p:'leave a ___ for him', ask:'أكمل', o:['message','favor'], a:0, w:'رسالة.', f:'<u>message</u>'}
      ]}
    ]
  };
})();
