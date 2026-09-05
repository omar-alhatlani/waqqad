/* ============================================================
   Lesson: Reading — Someone Has to Do It!
   English · Super Goal 2 · Unit 9 (Let's Go Out) · صفحة ٨٣
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U9_READ'] = {
    id:'EN_SG2_U9_READ',
    title:'Reading — Someone Has to Do It!',
    lang:'en',
    rule:{
      tag:'Reading',
      title:'Someone Has to Do It!',
      intro:'اقرأْ عن الخلاف بين الآباء والمراهقين حول الأعمال المنزلية، ثمّ أجِب.',
      examples:[
        'Parents often complain that they always have to tell their teenage children to do their chores. Parents think their kids are irresponsible.',
        'On the other hand, teens feel their parents are always nagging and complaining.',
        'A major problem is timing: parents want the chores done on their schedule, while teens think, “Why do I have to do it now, when I can do it later?”',
        'One parent gives his son pocket money only after he has done all his chores: “No chores, no money.” This makes teens responsible for earning their money.',
        'The solution: teens and parents have to reach a compromise. There has to be common sense on both sides.'
      ],
      trick:'الفكرة: خلافٌ بين الآباء والمراهقين حول توقيت الأعمال المنزلية، والحلُّ هو التوافق (compromise) والحسّ السليم من الطرفين.'
    },
    stages:[
      { type:'choice', name:'الفهم العام', hint:'الخلاف', qs:[
        {p:'What do parents often complain about?', o:['telling teens to do chores','the weather','money only'], a:0, w:'تذكير المراهقين بالأعمال.', f:'<u>telling teens to do chores</u>'},
        {p:'How do teens feel about their parents?', o:['they are always nagging','they are lazy','they are quiet'], a:0, w:'يشعرون أنهم يُلحّون.', f:'<u>always nagging</u>'},
        {p:'A major problem is about:', o:['timing / schedule','food','clothes'], a:0, w:'التوقيت.', f:'<u>timing</u>'},
        {p:'One parent gives money only after the son:', o:['does all his chores','sleeps','plays'], a:0, w:'ينهي أعماله.', f:'<u>does all his chores</u>'}
      ]},
      { type:'choice', name:'تفاصيل', hint:'الحلول والأسئلة', qs:[
        {p:'“No chores, no ___,” the parent says.', o:['money','school','food'], a:0, w:'لا أعمال، لا مال.', f:'no <u>money</u>'},
        {p:'This approach makes teens ___ for earning money.', o:['responsible','free','tired'], a:0, w:'مسؤولين.', f:'<u>responsible</u>'},
        {p:'The solution is to reach a ___.', o:['compromise','fight','decision alone'], a:0, w:'توافق.', f:'a <u>compromise</u>'},
        {p:'There has to be ___ on both sides.', o:['common sense','anger','silence'], a:0, w:'حسٌّ سليم.', f:'<u>common sense</u>'}
      ]},
      { type:'choice', name:'صحّ أم خطأ', hint:'True / False', qs:[
        {p:'T/F: Parents think teens are always responsible.', o:['False','True'], a:0, w:'بل غيرَ مسؤولين أحيانًا.', f:'<u>False</u>'},
        {p:'T/F: The main problem is about when to do chores.', o:['True','False'], a:0, w:'نعم، التوقيت.', f:'<u>True</u>'},
        {p:'T/F: The writer suggests a compromise.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'T/F: One parent gives money before chores.', o:['False','True'], a:0, w:'بل بعد إنهائها.', f:'<u>False</u>'}
      ]},
      { type:'gap', name:'أكمل من النصّ', hint:'اختر الكلمة المناسبة', qs:[
        {p:'Parents have to ___ teens to do chores.', o:['tell','sell','drive'], a:0, w:'يذكّرون/يخبرون.', f:'<u>tell</u>'},
        {p:'Teens feel parents are always ___.', o:['nagging','sleeping','cooking'], a:0, w:'يُلحّون.', f:'<u>nagging</u>'},
        {p:'“No chores, no ___.”', o:['money','time','school'], a:0, w:'مال.', f:'<u>money</u>'},
        {p:'Both sides need to reach a ___.', o:['compromise','game','holiday'], a:0, w:'توافق.', f:'<u>compromise</u>'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'Parents complain about ___.', ask:'اختر', o:['chores','weather'], a:0, w:'الأعمال المنزلية.', f:'<u>chores</u>'},
        {p:'Teens feel parents are ___.', ask:'أكمل', o:['nagging','quiet'], a:0, w:'يُلحّون.', f:'<u>nagging</u>'},
        {p:'The main problem is about ___.', ask:'اختر', o:['timing','food'], a:0, w:'التوقيت.', f:'<u>timing</u>'},
        {p:'“No chores, no ___.”', ask:'أكمل', o:['money','sleep'], a:0, w:'مال.', f:'<u>money</u>'},
        {p:'This makes teens ___.', ask:'أكمل', o:['responsible','tired'], a:0, w:'مسؤولين.', f:'<u>responsible</u>'},
        {p:'The solution is a ___.', ask:'اختر', o:['compromise','fight'], a:0, w:'توافق.', f:'<u>compromise</u>'},
        {p:'Need ___ on both sides.', ask:'أكمل', o:['common sense','anger'], a:0, w:'حسٌّ سليم.', f:'<u>common sense</u>'},
        {p:'T/F: The problem is about timing.', ask:'صحّ/خطأ', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'Parents have to ___ teens.', ask:'أكمل', o:['tell','sell'], a:0, w:'يخبرون.', f:'<u>tell</u>'}
      ]}
    ]
  };
})();
