/* ============================================================
   Lesson: Have to / Had to + Must / Mustn't (obligation)
   English · Super Goal 2 · Unit 9 (Let's Go Out) · صفحة ٨٠
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U9_HAVETO'] = {
    id:'EN_SG2_U9_HAVETO',
    title:'Have to / Must (Obligation)',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:"have to / must / mustn't",
      intro:'نعبّر عن <b>الواجب</b> بـ <code>have to</code> (ومع he/she ← <code>has to</code>)، وفي الماضي <code>had to</code>. النفي <code>don’t/doesn’t have to</code> يعني <b>لا لزوم</b>. و<code>must</code> واجبٌ قويّ، و<code>mustn’t</code> <b>ممنوع</b>. بعدها الفعل مجرّد.',
      table:[['have to','I have to do homework.'],['has to','She has to study.'],["don't have to","لا لزوم: You don’t have to come."],["mustn't","ممنوع: You mustn’t be late."]],
      trick:'انتبهْ للفرق: <code>don’t have to</code> = لا لزوم (اختياريّ)، أمّا <code>mustn’t</code> = ممنوع. ومع الماضي: <code>had to</code> للجميع.'
    },
    stages:[
      { type:'choice', name:'have to / has to', hint:'حسب الفاعل', qs:[
        {p:'I ___ do my homework.', o:['have to','has to','having to','to have'], a:0, w:'<code>I</code> ← <code>have to</code>.', f:'I <u>have to</u> do homework.'},
        {p:'She ___ clean her room.', o:['has to','have to','haves to','had'], a:0, w:'<code>She</code> ← <code>has to</code>.', f:'She <u>has to</u> clean…'},
        {p:'They ___ babysit tonight.', o:['have to','has to','having','to have'], a:0, w:'<code>They</code> ← <code>have to</code>.', f:'They <u>have to</u> babysit.'},
        {p:'He has to ___ the laundry.', o:['do','does','doing','to do'], a:0, w:'مجرّد بعد <code>has to</code>.', f:'has to <u>do</u>'}
      ]},
      { type:'choice', name:'had to (الماضي)', hint:'الماضي للجميع', qs:[
        {p:'Yesterday I ___ study English.', o:['had to','have to','has to','must'], a:0, w:'الماضي ← <code>had to</code>.', f:'I <u>had to</u> study.'},
        {p:'She ___ take care of her brother last night.', o:['had to','has to','have to','must'], a:0, w:'الماضي ← <code>had to</code>.', f:'She <u>had to</u> take care…'},
        {p:'Did you ___ to stay home?', o:['have','has','had','having'], a:0, w:'بعد <code>Did</code> ← <code>have to</code>.', f:'Did you <u>have</u> to stay home?'},
        {p:'“had to” is the ___ of “have to”.', o:['past','future','plural'], a:0, w:'الماضي.', f:'the <u>past</u>'}
      ]},
      { type:'choice', name:"must / mustn't / don't have to", hint:'ممنوع أم لا لزوم؟', qs:[
        {p:'You ___ talk during the test.', o:["mustn't","don't have to",'have to'], a:0, w:'ممنوع ← <code>mustn’t</code>.', f:"You <u>mustn't</u> talk…"},
        {p:"It's Friday. You ___ go to school.", o:["don't have to","mustn't",'have to'], a:0, w:'لا لزوم ← <code>don’t have to</code>.', f:"You <u>don't have to</u> go."},
        {p:'We ___ follow the rules.', o:['must',"mustn't","don't have to"], a:0, w:'واجب ← <code>must</code>.', f:'We <u>must</u> follow the rules.'},
        {p:'“mustn’t” means:', o:['prohibited',"not necessary",'possible'], a:0, w:'ممنوع.', f:'<u>prohibited</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['She','have','to','study','.'], bad:1, fix:'has', w:'<code>She</code> ← <code>has to</code>.', f:'She <u>has to</u> study.'},
        {words:['I','must','to','go','.'], bad:2, fix:'تُحذف to', w:'لا <code>to</code> بعد <code>must</code>.', f:'I must <u>go</u>.'},
        {words:['Yesterday','I','have','to','work','.'], bad:2, fix:'had', w:'الماضي ← <code>had to</code>.', f:'…I <u>had to</u> work.'},
        {words:['You','mustn’t','to','be','late','.'], bad:2, fix:'تُحذف to', w:'لا <code>to</code> بعد <code>mustn’t</code>.', f:'You mustn’t <u>be</u> late.'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['I','have','to','do','my','homework','.'], w:'<code>have to + مجرّد</code>.', f:'I have to do my homework.'},
        {sol:['She','has','to','clean','her','room','.'], w:'<code>has to</code>.', f:'She has to clean her room.'},
        {sol:['You','mustn’t','be','late','.'], w:'<code>mustn’t + مجرّد</code>.', f:"You mustn't be late."},
        {sol:['We','had','to','stay','home','.'], w:'الماضي ← <code>had to</code>.', f:'We had to stay home.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'I ___ do homework.', ask:'اختر', o:['have to','has to'], a:0, w:'<code>I</code>.', f:'<u>have to</u>'},
        {p:'She ___ study.', ask:'اختر', o:['has to','have to'], a:0, w:'<code>She</code>.', f:'<u>has to</u>'},
        {p:'Yesterday I ___ work.', ask:'اختر', o:['had to','have to'], a:0, w:'الماضي.', f:'<u>had to</u>'},
        {p:'You ___ talk in the test.', ask:'اختر', o:["mustn't","don't have to"], a:0, w:'ممنوع.', f:"<u>mustn't</u>"},
        {p:"It's Friday; you ___ go to school.", ask:'اختر', o:["don't have to","mustn't"], a:0, w:'لا لزوم.', f:"<u>don't have to</u>"},
        {p:'We ___ follow the rules.', ask:'اختر', o:['must',"don't have to"], a:0, w:'واجب.', f:'<u>must</u>'},
        {sol:['She','has','to','study','.'], w:'<code>has to</code>.', f:'She has to study.'},
        {p:'He has to ___ the laundry.', ask:'الفعل', o:['do','does'], a:0, w:'مجرّد.', f:'<u>do</u>'},
        {p:'“mustn’t” =', ask:'اختر', o:['prohibited','not necessary'], a:0, w:'ممنوع.', f:'<u>prohibited</u>'}
      ]}
    ]
  };
})();
