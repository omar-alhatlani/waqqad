/* ============================================================
   Lesson: Modal — can (ability & possibility)
   English · Super Goal 1 · Unit 12 (What Can You Do There?) · صفحة ١٠٤
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U12_CAN'] = {
    id:'EN_SG1_U12_CAN',
    title:'Modal: can',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'can / can’t',
      intro:'نستعمل <code>can</code> للتعبير عن <b>القدرة</b> أو <b>الإمكانية</b>: <code>I can swim</code>. بعد <code>can</code> يأتي الفعل <b>مجرّدًا</b> (بلا <code>to</code> وبلا <code>-s</code>): <code>She can play</code>. النفي <code>can’t (cannot)</code>، والسؤال بتقديم <code>can</code>: <code>Can you drive?</code> والإجابة <code>Yes, I can / No, I can’t</code>.',
      table:[['Affirmative','I can speak English.'],['Negative','I can’t rollerblade.'],['Question','Can you swim?'],['Short answer','Yes, I can. / No, I can’t.']],
      trick:'<code>can</code> لا تتغيّر مع الفاعل، والفعلُ بعدها مجرّد: <code>He can swim</code> لا <code>He can swims</code> ولا <code>He can to swim</code>.'
    },
    stages:[
      { type:'choice', name:'الفعل بعد can', hint:'مجرّد بلا to وبلا s', qs:[
        {p:'She can ___ English.', o:['speak','speaks','to speak','speaking'], a:0, w:'بعد <code>can</code> ← مجرّد <code>speak</code>.', f:'She can <u>speak</u> English.'},
        {p:'He can ___ a bike.', o:['ride','rides','to ride','riding'], a:0, w:'مجرّد ← <code>ride</code>.', f:'He can <u>ride</u> a bike.'},
        {p:'We can ___ tomorrow.', o:['meet','meets','to meet','meeting'], a:0, w:'مجرّد ← <code>meet</code>.', f:'We can <u>meet</u> tomorrow.'},
        {p:'I can ___ a sandwich.', o:['make','makes','to make','making'], a:0, w:'مجرّد ← <code>make</code>.', f:'I can <u>make</u> a sandwich.'}
      ]},
      { type:'choice', name:'النفي والسؤال', hint:'can’t / Can …?', qs:[
        {p:'I ___ rollerblade. (نفي)', o:['can’t','don’t can','not can','cann’t'], a:0, w:'النفي ← <code>can’t</code>.', f:'I <u>can’t</u> rollerblade.'},
        {p:'___ you drive a car?', o:['Can','Do','Are','Is'], a:0, w:'السؤال بتقديم <code>Can</code>.', f:'<u>Can</u> you drive?'},
        {p:'Can Fred play basketball? — Yes, he ___.', o:['can','cans','does','is'], a:0, w:'الإجابة ← <code>can</code>.', f:'Yes, he <u>can</u>.'},
        {p:'Can she swim? — No, she ___.', o:['can’t','doesn’t','isn’t','not'], a:0, w:'الإجابة السلبية ← <code>can’t</code>.', f:'No, she <u>can’t</u>.'}
      ]},
      { type:'choice', name:'القدرة أو الإمكانية', hint:'ماذا تعبّر can؟', qs:[
        {p:'“I can speak Arabic” expresses:', o:['ability','the past','a plan'], a:0, w:'القدرة.', f:'<u>ability</u>'},
        {p:'“You can play golf at the resort” expresses:', o:['possibility','ability only','a rule'], a:0, w:'الإمكانية.', f:'<u>possibility</u>'},
        {p:'can’t = ', o:['cannot','can not to','do not can'], a:0, w:'<code>can’t = cannot</code>.', f:'<u>cannot</u>'},
        {p:'Does “can” change with he/she?', o:['no','yes','sometimes'], a:0, w:'لا تتغيّر.', f:'<u>no</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['He','can','swims','.'], bad:2, fix:'swim', w:'بعد <code>can</code> ← مجرّد <code>swim</code>.', f:'He can <u>swim</u>.'},
        {words:['She','can','to','drive','.'], bad:2, fix:'تُحذف to', w:'لا <code>to</code> بعد <code>can</code>.', f:'She can <u>drive</u>.'},
        {words:['Do','you','can','swim','?'], bad:0, fix:'تُحذف Do', w:'السؤال بتقديم <code>Can</code> فقط.', f:'<u>Can</u> you swim?'},
        {words:['I','can’t','to','cook','.'], bad:2, fix:'تُحذف to', w:'لا <code>to</code> بعد <code>can’t</code>.', f:'I can’t <u>cook</u>.'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['She','can','speak','English','.'], w:'<code>can + الفعل المجرّد</code>.', f:'She can speak English.'},
        {sol:['Can','you','drive','a','car','?'], w:'السؤال بتقديم <code>Can</code>.', f:'Can you drive a car?'},
        {sol:['I','can’t','rollerblade','.'], w:'النفي ← <code>can’t</code>.', f:'I can’t rollerblade.'},
        {sol:['Yes',',','he','can','.'], w:'إجابة قصيرة.', f:'Yes, he can.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'She can ___ English.', ask:'الفعل', o:['speak','speaks'], a:0, w:'مجرّد.', f:'<u>speak</u>'},
        {p:'I ___ rollerblade. (نفي)', ask:'اختر', o:['can’t','don’t can'], a:0, w:'<code>can’t</code>.', f:'<u>can’t</u>'},
        {p:'___ you drive?', ask:'اختر', o:['Can','Do'], a:0, w:'تقديم <code>Can</code>.', f:'<u>Can</u>'},
        {p:'Yes, he ___.', ask:'اختر', o:['can','cans'], a:0, w:'إجابة.', f:'<u>can</u>'},
        {p:'He can ___ a bike.', ask:'الفعل', o:['ride','rides'], a:0, w:'مجرّد.', f:'<u>ride</u>'},
        {p:'“I can swim” expresses:', ask:'اختر', o:['ability','the past'], a:0, w:'القدرة.', f:'<u>ability</u>'},
        {sol:['Can','you','swim','?'], w:'تقديم <code>Can</code>.', f:'Can you swim?'},
        {p:'can’t =', ask:'اختر', o:['cannot','can not to'], a:0, w:'<code>cannot</code>.', f:'<u>cannot</u>'},
        {p:'No, she ___.', ask:'اختر', o:['can’t','doesn’t'], a:0, w:'إجابة سلبية.', f:'<u>can’t</u>'}
      ]}
    ]
  };
})();
