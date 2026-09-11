/* ============================================================
   درس: Grammar — Present Progressive
   الإنجليزية · الثالث الابتدائي · ف١ · We Can! 3 · Unit 4 (Chores)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب المحفوظ).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_WC3_U4_PROG'] = {
    id:'EN_WC3_U4_PROG',
    title:'Grammar — Present Progressive',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'ماذا يحدثُ الآن؟',
      intro:'نتحدّثُ عمّا يحدثُ <b>الآن</b> بالمضارعِ المستمرّ: <span class="tok-focus">am/is/are</span> + الفعلُ + <span class="tok-focus">-ing</span>. السؤال: <code>What <span class="tok-focus">are</span> you doing?</code> والجواب: <code>I <span class="tok-focus">am</span> washing the dishes.</code>',
      formula:'subject + <span class="tok-focus">am/is/are</span> + verb<span class="tok-focus">-ing</span>',
      table:[['I','I <span class="tok-focus">am</span> cooking.'],['he/she','She <span class="tok-focus">is</span> reading.'],['you/they','They <span class="tok-focus">are</span> playing.'],['السؤال','What <span class="tok-focus">are</span> you doing?']],
      examples:['My mother <span class="tok-focus">is</span> setting the table now.','The kid<span class="tok-plural">s</span> <span class="tok-focus">are</span> cleaning their room<span class="tok-plural">s</span>.'],
      trick:'الآن ← <span class="tok-focus">be + verb-ing</span>: I am، he/she is، you/we/they are.'
    },
    stages:[
      { type:'choice', name:'am / is / are؟', hint:'حسبَ الفاعل', qs:[
        {p:'I ___ washing the dishes.', o:['am','is'], a:0, w:'مع I ← am.', f:'I <u>am</u> washing ...'},
        {p:'She ___ reading a book.', o:['is','are'], a:0, w:'مع she ← is.', f:'She <u>is</u> reading ...'},
        {p:'They ___ playing football.', o:['are','am'], a:0, w:'مع they ← are.', f:'They <u>are</u> playing ...'},
        {p:'What ___ you doing?', o:['are','is'], a:0, w:'مع you ← are.', f:'What <u>are</u> you doing?'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'الفعلُ يأخذ -ing', qs:[
        {p:'He is ___ the floor.', o:['vacuuming','vacuum','vacuums'], a:0, w:'المستمرُّ ← <code>-ing</code>.', f:'He is <u>vacuuming</u> ...'},
        {p:'We ___ setting the table.', o:['are','is','am'], a:0, w:'مع we ← are.', f:'We <u>are</u> setting ...'},
        {p:'My sister is ___ her bed.', o:['making','make','makes'], a:0, w:'المستمرُّ ← <code>making</code>.', f:'... is <u>making</u> her bed.'}
      ]},
      { type:'choice', name:'اختر الصواب', hint:'be + verb-ing', qs:[
        {p:'Look! The baby ___ sleeping.', ask:'اختر', o:['is','are'], a:0, w:'مفردٌ ← is.', f:'The baby <u>is</u> sleeping.'},
        {p:'I am ___ out the trash.', ask:'اختر', o:['taking','take'], a:0, w:'المستمرُّ ← -ing.', f:'I am <u>taking</u> out the trash.'},
        {p:'They are ___ the laundry.', ask:'اختر', o:['folding','fold'], a:0, w:'المستمرُّ ← -ing.', f:'They are <u>folding</u> ...'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['I','washing','the','dishes','.'], bad:1, fix:'am washing', w:'المستمرُّ يحتاجُ <code>am</code>.', f:'I <u>am washing</u> the dishes.'},
        {words:['She','is','cook','now','.'], bad:2, fix:'cooking', w:'المستمرُّ ← <code>cooking</code>.', f:'She is <u>cooking</u> now.'},
        {words:['They','is','playing','.'], bad:1, fix:'are', w:'مع they ← are.', f:'They <u>are</u> playing.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب', qs:[
        {sol:['I','am','washing','the','dishes','.'], w:'I am + -ing.', f:'I am washing the dishes.'},
        {sol:['What','are','you','doing','?'], w:'سؤالُ الحاضر.', f:'What are you doing?'},
        {sol:['She','is','setting','the','table','.'], w:'she is + -ing.', f:'She is setting the table.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'I ___ cleaning my room.', ask:'اختر', o:['am','is'], a:0, w:'I ← am.', f:'I <u>am</u> cleaning ...'},
        {p:'He is ___ the fish.', ask:'اختر', o:['feeding','feed'], a:0, w:'المستمرُّ ← -ing.', f:'He is <u>feeding</u> the fish.'},
        {p:'They ___ helping their mother.', ask:'اختر', o:['are','is'], a:0, w:'they ← are.', f:'They <u>are</u> helping ...'},
        {p:'تركيبُ المستمرّ:', ask:'اختر', o:['be + verb-ing','do + verb'], a:0, w:'be + -ing.', f:'← <u>be + verb-ing</u>'},
        {p:'What ___ she doing?', ask:'اختر', o:['is','are'], a:0, w:'she ← is.', f:'What <u>is</u> she doing?'}
      ]}
    ]
  };
})();
