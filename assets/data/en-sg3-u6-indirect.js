/* ============================================================
   Lesson: Indirect Questions + Definite Article (the)
   English · Super Goal 3 · Unit 6 (Do You Know Where It Is?) · صفحة ٦٠
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U6_INDIRECT'] = {
    id:'EN_SG3_U6_INDIRECT',
    title:'Indirect Questions & the',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'Indirect Questions',
      intro:'<b>الأسئلة غير المباشرة</b> أكثرُ تهذيبًا، وتبدأ بـ <code>Do you know …?</code> أو <code>Could you tell me …?</code>. المهمّ: <b>لا يوجد قلبٌ</b> بين الفاعل والفعل، ويعود الترتيبُ إلى الجملة الخبرية: <code>Where is the bank?</code> ← <code>Do you know where the bank <u>is</u>?</code>. ومع الأفعال العادية نحذف <code>do/does</code>: <code>When does it open?</code> ← <code>Do you know when it <u>opens</u>?</code>',
      table:[['Direct','Where is the bank?'],['Indirect','Do you know where the bank is?'],['Direct','When does it open?'],['Indirect','Could you tell me when it opens?']],
      trick:'في السؤال غير المباشر يعود الفعلُ خلفَ الفاعل (لا قلب)، و<code>do/does/did</code> تختفي وينتقل أثرُها إلى الفعل: <code>… where I can get pizza</code> لا <code>… where can I get pizza</code>.'
    },
    stages:[
      { type:'choice', name:'لا قلب مع be', hint:'الفعل بعد الفاعل', qs:[
        {p:'Direct: Where is the bank? → Do you know where the bank ___?', o:['is','is it','does'], a:0, w:'لا قلب ← <code>the bank is</code>.', f:'…where the bank <u>is</u>?'},
        {p:'Do you know what the name of the street ___?', o:['is','is it','does'], a:0, w:'<code>the name … is</code>.', f:'…the street <u>is</u>?'},
        {p:'Could you tell me where the nearest bank ___?', o:['is','is it','are'], a:0, w:'مفرد ← <code>is</code> بعد الفاعل.', f:'…bank <u>is</u>?'},
        {p:'Do you know how many people ___ here?', o:['live','do live','lives'], a:0, w:'<code>people</code> جمع ← <code>live</code>.', f:'…people <u>live</u> here?'}
      ]},
      { type:'choice', name:'حذف do/does', hint:'ينتقل الأثر إلى الفعل', qs:[
        {p:'Direct: When does the store open? → Do you know when it ___?', o:['opens','open','does open'], a:0, w:'لا <code>does</code> ← <code>opens</code>.', f:'…when it <u>opens</u>?'},
        {p:'Could you tell me where I ___ get good pizza?', o:['can','can I','do'], a:0, w:'لا قلب ← <code>I can</code>.', f:'…where I <u>can</u> get pizza?'},
        {p:'Do you know what time the bus ___?', o:['arrives','does arrive','arrive'], a:0, w:'<code>arrives</code> بلا <code>does</code>.', f:'…the bus <u>arrives</u>?'},
        {p:'Could you tell me who ___ this town?', o:['planned','did plan','plans'], a:0, w:'<code>planned</code> بلا <code>did</code>.', f:'…who <u>planned</u> this town?'}
      ]},
      { type:'choice', name:'أداة التعريف the', hint:'المعرّف والفريد', qs:[
        {p:'It is home to one of ___ oldest universities.', o:['the','a','an'], a:0, w:'التفضيل يأخذ <code>the</code>.', f:'<u>the</u> oldest'},
        {p:'It is the safest city in ___ world.', o:['the','a','no article'], a:0, w:'<code>the world</code>.', f:'in <u>the</u> world'},
        {p:'Where is ___ nearest bank?', o:['the','a','an'], a:0, w:'محدّدٌ معروف ← <code>the</code>.', f:'<u>the</u> nearest bank'},
        {p:'I bought ___ car yesterday. (أول ذكر)', o:['a','the','an'], a:0, w:'أوّلُ ذكرٍ نكرة ← <code>a</code>.', f:'<u>a</u> car'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['Do','you','know','where','is','the','bank','?'], bad:4, fix:'الترتيب: the bank is', w:'لا قلب في غير المباشر.', f:'…where the bank <u>is</u>?'},
        {words:['Could','you','tell','me','when','does','it','open','?'], bad:5, fix:'تُحذف does', w:'<code>does</code> تختفي ← <code>opens</code>.', f:'…when it <u>opens</u>?'},
        {words:['Do','you','know','where','can','I','get','pizza','?'], bad:4, fix:'الترتيب: I can', w:'لا قلب ← <code>I can</code>.', f:'…where I <u>can</u> get pizza?'},
        {words:['It','is','a','oldest','university','.'], bad:2, fix:'the', w:'التفضيل ← <code>the</code>.', f:'<u>the</u> oldest'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['Do','you','know','where','the','bank','is','?'], w:'لا قلب ← <code>the bank is</code>.', f:'Do you know where the bank is?'},
        {sol:['Could','you','tell','me','when','it','opens','?'], w:'<code>opens</code> بلا <code>does</code>.', f:'Could you tell me when it opens?'},
        {sol:['Do','you','know','what','time','the','bus','arrives','?'], w:'لا قلب و<code>arrives</code>.', f:'Do you know what time the bus arrives?'},
        {sol:['Could','you','tell','me','where','I','can','park','?'], w:'<code>I can</code> بلا قلب.', f:'Could you tell me where I can park?'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'Do you know where the bank ___?', ask:'اختر', o:['is','is it'], a:0, w:'لا قلب.', f:'<u>is</u>'},
        {p:'Do you know when it ___?', ask:'اختر', o:['opens','does open'], a:0, w:'بلا <code>does</code>.', f:'<u>opens</u>'},
        {p:'Could you tell me where I ___ get pizza?', ask:'اختر', o:['can','can I'], a:0, w:'لا قلب.', f:'<u>can</u>'},
        {p:'one of ___ oldest universities', ask:'أداة', o:['the','a'], a:0, w:'التفضيل ← <code>the</code>.', f:'<u>the</u>'},
        {p:'the safest city in ___ world', ask:'أداة', o:['the','a'], a:0, w:'<code>the world</code>.', f:'<u>the</u>'},
        {p:'Do you know how many people ___ here?', ask:'اختر', o:['live','do live'], a:0, w:'جمع.', f:'<u>live</u>'},
        {sol:['Do','you','know','where','the','bank','is','?'], w:'لا قلب.', f:'Do you know where the bank is?'},
        {p:'Could you tell me who ___ this town?', ask:'اختر', o:['planned','did plan'], a:0, w:'بلا <code>did</code>.', f:'<u>planned</u>'},
        {p:'I bought ___ car. (أول ذكر)', ask:'أداة', o:['a','the'], a:0, w:'نكرة ← <code>a</code>.', f:'<u>a</u>'}
      ]}
    ]
  };
})();
