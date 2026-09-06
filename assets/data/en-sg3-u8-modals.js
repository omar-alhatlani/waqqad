/* ============================================================
   Lesson: Modals — must/mustn’t & should/shouldn’t (obligation)
   English · Super Goal 3 · Unit 8 (Drive Slowly!) · صفحة ٨٦
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U8_MODALS'] = {
    id:'EN_SG3_U8_MODALS',
    title:"must / mustn’t / should",
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'obligation & advice',
      intro:'نستعمل <code>must</code> للواجب القويّ والقواعد (<code>You must stop at a red light</code>)، و<code>mustn’t</code> للمنع (<code>You mustn’t drive fast</code>). و<code>should/shouldn’t</code> للنصيحة (<code>You should slow down</code>). بعدها الفعل مجرّدٌ ولا تتغيّر مع الفاعل. و<code>have to</code> واجبٌ أيضًا، لكن <code>don’t have to</code> = لا لزوم.',
      table:[['must','واجب: You must wear a seatbelt.'],["mustn’t","منع: You mustn’t speed."],['should','نصيحة: You should drive slowly.'],["don’t have to","لا لزوم: You don’t have to hurry."]],
      trick:'الفرق المهمّ: <code>mustn’t</code> = ممنوع تمامًا، أمّا <code>don’t have to</code> = غيرُ ضروريّ (اختياريّ). و<code>must</code> أقوى من <code>should</code>.'
    },
    stages:[
      { type:'choice', name:'must / mustn’t', hint:'واجب أم منع؟', qs:[
        {p:'You ___ stop at a red light.', o:['must',"mustn’t","don’t have to"], a:0, w:'قاعدة إلزامية ← <code>must</code>.', f:'You <u>must</u> stop.'},
        {p:'You ___ use your phone while driving.', o:["mustn’t",'must',"don’t have to"], a:0, w:'ممنوع ← <code>mustn’t</code>.', f:"You <u>mustn’t</u> use…"},
        {p:'Drivers ___ wear a seatbelt.', o:['must',"mustn’t",'should not'], a:0, w:'واجب ← <code>must</code>.', f:'must <u>wear</u> a seatbelt'},
        {p:'You mustn’t ___ over the speed limit.', o:['drive','drives','driving','to drive'], a:0, w:'مجرّد.', f:'mustn’t <u>drive</u>'}
      ]},
      { type:'choice', name:'should / shouldn’t', hint:'نصيحة', qs:[
        {p:'You ___ slow down near a school.', o:['should','shouldn’t','must not'], a:0, w:'نصيحة ← <code>should</code>.', f:'You <u>should</u> slow down.'},
        {p:'You ___ text and drive.', o:['shouldn’t','should','have to'], a:0, w:'نصيحةٌ بالنفي ← <code>shouldn’t</code>.', f:"You <u>shouldn’t</u> text and drive."},
        {p:'He should ___ more carefully.', o:['drive','drives','driving','to drive'], a:0, w:'مجرّد.', f:'should <u>drive</u>'},
        {p:'Which is stronger, must or should?', o:['must','should','same'], a:0, w:'<code>must</code> أقوى.', f:'<u>must</u>'}
      ]},
      { type:'choice', name:"mustn’t أم don’t have to", hint:'ممنوع أم لا لزوم؟', qs:[
        {p:"It’s a highway. You ___ drive slowly here.", o:["don’t have to","mustn’t",'must'], a:0, w:'ليس ضروريًّا ← <code>don’t have to</code>.', f:"You <u>don’t have to</u> drive slowly."},
        {p:'You ___ park on the sidewalk. It’s illegal.', o:["mustn’t","don’t have to",'should'], a:0, w:'ممنوع ← <code>mustn’t</code>.', f:"You <u>mustn’t</u> park…"},
        {p:'“mustn’t” means:', o:['prohibited','not necessary','a plan'], a:0, w:'ممنوع.', f:'<u>prohibited</u>'},
        {p:'“don’t have to” means:', o:['not necessary','forbidden','required'], a:0, w:'غيرُ ضروريّ.', f:'<u>not necessary</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['You','must','to','stop','.'], bad:2, fix:'تُحذف to', w:'لا <code>to</code> بعد <code>must</code>.', f:'You must <u>stop</u>.'},
        {words:['He','should','drives','slowly','.'], bad:2, fix:'drive', w:'مجرّد بعد <code>should</code>.', f:'He should <u>drive</u> slowly.'},
        {words:['You','mustn’t','park','here',',','it’s','okay','.'], bad:6, fix:"don’t have to (تناقض)", w:'<code>mustn’t</code> = ممنوع، يناقض «مسموح».', f:"You <u>don’t have to</u> park here."},
        {words:['Drivers','musts','wear','a','seatbelt','.'], bad:1, fix:'must', w:'<code>must</code> لا تتغيّر.', f:'Drivers <u>must</u> wear…'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['You','must','stop','at','the','light','.'], w:'<code>must + مجرّد</code>.', f:'You must stop at the light.'},
        {sol:['You','mustn’t','use','your','phone','.'], w:'منع.', f:"You mustn’t use your phone."},
        {sol:['You','should','drive','slowly','.'], w:'نصيحة.', f:'You should drive slowly.'},
        {sol:['You','don’t','have','to','hurry','.'], w:'لا لزوم.', f:"You don’t have to hurry."}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'You ___ stop at a red light.', ask:'اختر', o:['must',"mustn’t"], a:0, w:'واجب.', f:'<u>must</u>'},
        {p:'You ___ use your phone driving.', ask:'اختر', o:["mustn’t",'must'], a:0, w:'ممنوع.', f:"<u>mustn’t</u>"},
        {p:'You ___ slow down near a school.', ask:'اختر', o:['should','shouldn’t'], a:0, w:'نصيحة.', f:'<u>should</u>'},
        {p:"It’s a highway; you ___ drive slowly.", ask:'اختر', o:["don’t have to","mustn’t"], a:0, w:'لا لزوم.', f:"<u>don’t have to</u>"},
        {p:'He should ___ carefully.', ask:'الفعل', o:['drive','drives'], a:0, w:'مجرّد.', f:'<u>drive</u>'},
        {p:'“mustn’t” =', ask:'اختر', o:['prohibited','not necessary'], a:0, w:'ممنوع.', f:'<u>prohibited</u>'},
        {sol:['You','must','wear','a','seatbelt','.'], w:'<code>must + مجرّد</code>.', f:'You must wear a seatbelt.'},
        {p:'“don’t have to” =', ask:'اختر', o:['not necessary','forbidden'], a:0, w:'غيرُ ضروريّ.', f:'<u>not necessary</u>'},
        {p:'stronger:', ask:'اختر', o:['must','should'], a:0, w:'<code>must</code>.', f:'<u>must</u>'}
      ]}
    ]
  };
})();
