/* ============================================================
   Lesson: Let's + verb / must / should
   English · Super Goal 1 · Unit 14 (Let's Celebrate) · صفحة ١٢٨/١٣٢
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U14_MODALS'] = {
    id:'EN_SG1_U14_MODALS',
    title:"Let's, must & should",
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:"Let's + verb · must/mustn't · should/shouldn't",
      intro:'<code>Let’s + الفعل المجرّد</code> للاقتراح: <code>Let’s send cards</code>. و<code>must / mustn’t</code> للواجبات والقواعد: <code>We must follow the rules / You mustn’t talk during the test</code>. و<code>should / shouldn’t</code> للنصيحة: <code>We should donate to the poor / She shouldn’t spend all her money</code>. بعد هذه الأفعال يأتي <b>الفعل مجرّدًا</b>.',
      table:[["Let's + verb","Let’s celebrate."],['must','واجب: We must follow rules.'],['mustn’t','ممنوع: You mustn’t park here.'],['should','نصيحة: You should rest.']],
      trick:'<code>must</code> أقوى من <code>should</code> (إلزام مقابل نصيحة). وكلُّها لا تتغيّر مع الفاعل، والفعلُ بعدها مجرّد: <code>He should go</code> لا <code>He should goes</code>.'
    },
    stages:[
      { type:'choice', name:"Let's + verb", hint:'اقتراح', qs:[
        {p:'___ send greeting cards.', o:['Let’s','Let','Lets to','We let'], a:0, w:'الاقتراح ← <code>Let’s</code>.', f:'<u>Let’s</u> send cards.'},
        {p:'Let’s ___ them for Eid.', o:['invite','invites','to invite','inviting'], a:0, w:'بعد <code>Let’s</code> ← مجرّد.', f:'Let’s <u>invite</u> them.'},
        {p:'A: Let’s celebrate. B: ___ idea!', o:['Good','Well','Nice to'], a:0, w:'موافقة ← <code>Good idea!</code>.', f:'<u>Good</u> idea!'},
        {p:'“Let’s” = a ___.', o:['suggestion','question','order'], a:0, w:'اقتراح.', f:'a <u>suggestion</u>'}
      ]},
      { type:'choice', name:'must / mustn’t', hint:'واجب / ممنوع', qs:[
        {p:'We ___ follow the rules.', o:['must','mustn’t','should not'], a:0, w:'واجب ← <code>must</code>.', f:'We <u>must</u> follow the rules.'},
        {p:'You ___ talk during the test.', o:['mustn’t','must','should'], a:0, w:'ممنوع ← <code>mustn’t</code>.', f:'You <u>mustn’t</u> talk…'},
        {p:'He must ___ at the traffic lights.', o:['stop','stops','to stop','stopping'], a:0, w:'بعد <code>must</code> ← مجرّد.', f:'must <u>stop</u>'},
        {p:'mustn’t =', o:['must not','do not must','not must'], a:0, w:'<code>must not</code>.', f:'<u>must not</u>'}
      ]},
      { type:'choice', name:'should / shouldn’t', hint:'نصيحة', qs:[
        {p:'We ___ donate to the poor. (نصيحة)', o:['should','shouldn’t','must not'], a:0, w:'نصيحة ← <code>should</code>.', f:'We <u>should</u> donate.'},
        {p:'She ___ spend all her money.', o:['shouldn’t','should','must'], a:0, w:'نصيحةٌ بالنفي ← <code>shouldn’t</code>.', f:'She <u>shouldn’t</u> spend…'},
        {p:'They shouldn’t ___ junk food.', o:['eat','eats','to eat','eating'], a:0, w:'مجرّد بعد <code>shouldn’t</code>.', f:'shouldn’t <u>eat</u>'},
        {p:'Which is stronger?', o:['must','should','let’s'], a:0, w:'<code>must</code> أقوى.', f:'<u>must</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['Let’s','to','celebrate','.'], bad:1, fix:'تُحذف to', w:'بعد <code>Let’s</code> ← الفعل مجرّد بلا <code>to</code>.', f:'Let’s <u>celebrate</u>.'},
        {words:['He','should','goes','home','.'], bad:2, fix:'go', w:'بعد <code>should</code> ← مجرّد <code>go</code>.', f:'He should <u>go</u> home.'},
        {words:['You','must','to','stop','.'], bad:2, fix:'تُحذف to', w:'لا <code>to</code> بعد <code>must</code>.', f:'You must <u>stop</u>.'},
        {words:['We','musts','follow','rules','.'], bad:1, fix:'must', w:'<code>must</code> لا تتغيّر.', f:'We <u>must</u> follow rules.'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['Let’s','send','greeting','cards','.'], w:'<code>Let’s + الفعل المجرّد</code>.', f:"Let's send greeting cards."},
        {sol:['We','must','follow','the','rules','.'], w:'<code>must + مجرّد</code>.', f:'We must follow the rules.'},
        {sol:['You','shouldn’t','eat','junk','food','.'], w:'<code>shouldn’t + مجرّد</code>.', f:"You shouldn't eat junk food."},
        {sol:['You','mustn’t','park','here','.'], w:'<code>mustn’t + مجرّد</code>.', f:"You mustn't park here."}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'___ celebrate together.', ask:'اختر', o:['Let’s','Let'], a:0, w:'اقتراح.', f:'<u>Let’s</u>'},
        {p:'Let’s ___ them.', ask:'الفعل', o:['invite','invites'], a:0, w:'مجرّد.', f:'<u>invite</u>'},
        {p:'We ___ follow the rules.', ask:'اختر', o:['must','mustn’t'], a:0, w:'واجب.', f:'<u>must</u>'},
        {p:'You ___ talk during the test.', ask:'اختر', o:['mustn’t','must'], a:0, w:'ممنوع.', f:'<u>mustn’t</u>'},
        {p:'We ___ donate to the poor.', ask:'اختر', o:['should','shouldn’t'], a:0, w:'نصيحة.', f:'<u>should</u>'},
        {p:'She ___ spend all her money.', ask:'اختر', o:['shouldn’t','should'], a:0, w:'نصيحةٌ سلبية.', f:'<u>shouldn’t</u>'},
        {sol:['We','must','follow','the','rules','.'], w:'<code>must + مجرّد</code>.', f:'We must follow the rules.'},
        {p:'He should ___ home.', ask:'الفعل', o:['go','goes'], a:0, w:'مجرّد.', f:'<u>go</u>'},
        {p:'Which is stronger?', ask:'اختر', o:['must','should'], a:0, w:'<code>must</code>.', f:'<u>must</u>'}
      ]}
    ]
  };
})();
