/* ============================================================
   درس: Grammar — There is / There are
   الإنجليزية · الثالث الابتدائي · ف١ · We Can! 3 · Unit 2 (Sea Animals)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب المحفوظ).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_WC3_U2_THERE'] = {
    id:'EN_WC3_U2_THERE',
    title:'Grammar — There is / There are',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'يوجدُ واحدٌ أم أكثر؟',
      intro:'نُخبِرُ عن وجودِ شيءٍ بـ <span class="tok-focus">There is</span> للمفرد (شيءٌ واحد)، و<span class="tok-focus">There are</span> للجمع (أكثرَ من واحد). ومع الجمعِ نضيفُ <span class="tok-plural">s</span> إلى الاسم. مثال: <code>There <span class="tok-focus">is</span> a fish</code> ، <code>There <span class="tok-focus">are</span> three fish</code>.',
      formula:'<span class="tok-focus">There is</span> + مفرد · <span class="tok-focus">There are</span> + جمع',
      table:[['مفرد','There <span class="tok-focus">is</span> a seal.'],['جمع','There <span class="tok-focus">are</span> two turtle<span class="tok-plural">s</span>.'],['سؤال','Is there a shark?'],['جواب','Yes, there is. / No, there isn’t.']],
      examples:['There <span class="tok-focus">is</span> a dolphin in the sea.','There <span class="tok-focus">are</span> many seahorse<span class="tok-plural">s</span> here.'],
      trick:'واحدٌ ← <span class="tok-focus">There is</span>. أكثرُ من واحدٍ ← <span class="tok-focus">There are</span> مع <span class="tok-plural">s</span> الجمع.'
    },
    stages:[
      { type:'choice', name:'is أم are؟', hint:'مفردٌ أم جمع؟', qs:[
        {p:'There ___ a fish.', o:['is','are'], a:0, w:'مفردٌ ← is.', f:'There <u>is</u> a fish.'},
        {p:'There ___ two seals.', o:['are','is'], a:0, w:'جمعٌ ← are.', f:'There <u>are</u> two seals.'},
        {p:'There ___ a turtle.', o:['is','are'], a:0, w:'مفردٌ ← is.', f:'There <u>is</u> a turtle.'},
        {p:'There ___ many dolphins.', o:['are','is'], a:0, w:'جمعٌ ← are.', f:'There <u>are</u> many dolphins.'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'الجمعُ يأخذ s', qs:[
        {p:'There are three ___ .', o:['sharks','shark','a shark'], a:0, w:'جمعٌ ← <code>sharks</code>.', f:'There are three <u>sharks</u>.'},
        {p:'There is ___ seahorse.', o:['a','two','many'], a:0, w:'مفردٌ ← <code>a</code>.', f:'There is <u>a</u> seahorse.'},
        {p:'There ___ a whale in the sea.', o:['is','are'], a:0, w:'مفردٌ ← is.', f:'There <u>is</u> a whale.'}
      ]},
      { type:'choice', name:'اختر الصواب', hint:'انظرِ العدد', qs:[
        {p:'There are five ___ .', ask:'اختر', o:['fish','a fish'], a:0, w:'جمعٌ بعد five.', f:'There are five <u>fish</u>.'},
        {p:'___ a crab on the sand.', ask:'اختر', o:['There is','There are'], a:0, w:'مفردٌ ← There is.', f:'<u>There is</u> a crab.'},
        {p:'There are two ___ .', ask:'اختر', o:['turtles','turtle'], a:0, w:'جمعٌ ← turtles.', f:'There are two <u>turtles</u>.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['There','are','a','fish','.'], bad:1, fix:'is', w:'مفردٌ (a fish) ← is.', f:'There <u>is</u> a fish.'},
        {words:['There','is','two','seals','.'], bad:1, fix:'are', w:'جمعٌ (two seals) ← are.', f:'There <u>are</u> two seals.'},
        {words:['There','are','three','turtle','.'], bad:3, fix:'turtles', w:'الجمعُ يأخذ <span class="tok-plural">s</span>.', f:'There are three <u>turtles</u>.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب', qs:[
        {sol:['There','is','a','dolphin','.'], w:'مفردٌ ← There is.', f:'There is a dolphin.'},
        {sol:['There','are','two','seals','.'], w:'جمعٌ ← There are.', f:'There are two seals.'},
        {sol:['Is','there','a','shark','?'], w:'سؤالٌ.', f:'Is there a shark?'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'There ___ a seal.', ask:'اختر', o:['is','are'], a:0, w:'مفردٌ ← is.', f:'There <u>is</u> a seal.'},
        {p:'There ___ four fish.', ask:'اختر', o:['are','is'], a:0, w:'جمعٌ ← are.', f:'There <u>are</u> four fish.'},
        {p:'There are two ___ .', ask:'اختر', o:['whales','whale'], a:0, w:'جمعٌ ← whales.', f:'There are two <u>whales</u>.'},
        {p:'للجمعِ نستعمل:', ask:'اختر', o:['There are','There is'], a:0, w:'There are.', f:'← <u>There are</u>'},
        {p:'___ a turtle here.', ask:'اختر', o:['There is','There are'], a:0, w:'مفردٌ ← There is.', f:'<u>There is</u> a turtle.'}
      ]}
    ]
  };
})();
