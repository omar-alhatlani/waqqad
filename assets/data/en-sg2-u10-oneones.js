/* ============================================================
   Lesson: one/ones + too + Modals (can/may/could/might)
   English · Super Goal 2 · Unit 10 (It's a Bargain!) · صفحة ٨٨
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U10_ONEONES'] = {
    id:'EN_SG2_U10_ONEONES',
    title:'one / ones, too & Modals',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'one / ones · too · can/may/could/might',
      intro:'يحلّ الضميرُ <code>one</code> محلَّ اسمٍ <b>مفرد</b> سبق ذكرُه، و<code>ones</code> محلَّ <b>جمع</b>: <code>the red one / the blue ones</code>. و<code>too</code> تعني «أيضًا» (في نهاية الجملة) أو «أكثرَ من اللازم» قبل الصفة (<code>too small</code>). والأفعالُ الناقصة <code>can/may/could/might</code> تُستعمل للطلب والاحتمال، والفعلُ بعدها مجرّد.',
      table:[['one','I like the green one.'],['ones','I prefer the small ones.'],['too (excess)','This is too small.'],['may/could','May I help you?']],
      trick:'<code>one</code> لمفردٍ مذكور، <code>ones</code> لجمعٍ مذكور. و<code>too + adjective</code> = زائدٌ عن الحدّ (سلبيّ)، بخلاف <code>very</code>.'
    },
    stages:[
      { type:'choice', name:'one / ones', hint:'مفرد أم جمع؟', qs:[
        {p:'I don’t like this shirt. I prefer the blue ___.', o:['one','ones','it','them'], a:0, w:'مفرد ← <code>one</code>.', f:'the blue <u>one</u>'},
        {p:'These shoes are nice, but I like the black ___.', o:['ones','one','them','it'], a:0, w:'جمع ← <code>ones</code>.', f:'the black <u>ones</u>'},
        {p:'Which pair? — The red ___.', o:['ones','one','it','them'], a:0, w:'<code>pair</code>… ← <code>ones</code>.', f:'the red <u>ones</u>'},
        {p:'This bag is old. I want a new ___.', o:['one','ones','it','them'], a:0, w:'مفرد ← <code>one</code>.', f:'a new <u>one</u>'}
      ]},
      { type:'choice', name:'too', hint:'أيضًا / أكثر من اللازم', qs:[
        {p:'The windbreaker is ___ small.', o:['too','so much','very much'], a:0, w:'أكثر من اللازم ← <code>too small</code>.', f:'<u>too</u> small'},
        {p:'I like it, ___. (أيضًا)', o:['too','to','two'], a:0, w:'أيضًا ← <code>too</code> في النهاية.', f:'…, <u>too</u>.'},
        {p:'These jeans are ___ expensive for me.', o:['too','so that','enough'], a:0, w:'زائدٌ عن الحدّ.', f:'<u>too</u> expensive'},
        {p:'“too” + adjective usually means:', o:['more than needed','a little','not at all'], a:0, w:'أكثر من اللازم.', f:'<u>more than needed</u>'}
      ]},
      { type:'choice', name:'can / may / could / might', hint:'طلبٌ واحتمال', qs:[
        {p:'___ I help you? (عرضٌ مؤدَّب)', o:['May','Do','Am','Have'], a:0, w:'<code>May I help you?</code>.', f:'<u>May</u> I help you?'},
        {p:'___ you show me that one? (طلب)', o:['Could','Do','Are','Have'], a:0, w:'طلبٌ مؤدَّب ← <code>Could</code>.', f:'<u>Could</u> you show me…?'},
        {p:'It ___ rain later. (احتمال)', o:['might','musts','are','have'], a:0, w:'احتمال ← <code>might</code>.', f:'It <u>might</u> rain.'},
        {p:'After can/may/could/might, the verb is:', o:['base form','+ -s','+ -ing'], a:0, w:'مجرّد.', f:'<u>base form</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['I','prefer','the','blue','ones','shirt','.'], bad:4, fix:'one', w:'مفرد ← <code>one</code>.', f:'the blue <u>one</u> shirt'},
        {words:['This','shirt','is','too','nice','so','I’ll','buy','it','.'], bad:3, fix:'so/very (إيجابيّ)', w:'<code>too</code> سلبيّة؛ للإيجاب استعمل <code>so/very</code>.', f:'This shirt is <u>so</u> nice…'},
        {words:['May','I','helping','you','?'], bad:2, fix:'help', w:'بعد <code>May</code> ← مجرّد.', f:'May I <u>help</u> you?'},
        {words:['I','like','the','red','one','shoes','.'], bad:4, fix:'ones', w:'جمع ← <code>ones</code>.', f:'the red <u>ones</u>'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['I','prefer','the','blue','one','.'], w:'مفرد ← <code>one</code>.', f:'I prefer the blue one.'},
        {sol:['These','shoes','are','too','small','.'], w:'<code>too + adjective</code>.', f:'These shoes are too small.'},
        {sol:['May','I','help','you','?'], w:'<code>May I + مجرّد</code>.', f:'May I help you?'},
        {sol:['I','like','the','black','ones','.'], w:'جمع ← <code>ones</code>.', f:'I like the black ones.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'I prefer the blue ___.', ask:'اختر', o:['one','ones'], a:0, w:'مفرد.', f:'<u>one</u>'},
        {p:'I like the black ___.', ask:'اختر', o:['ones','one'], a:0, w:'جمع.', f:'<u>ones</u>'},
        {p:'This is ___ small.', ask:'اختر', o:['too','so that'], a:0, w:'زائد.', f:'<u>too</u>'},
        {p:'I like it, ___. (أيضًا)', ask:'اختر', o:['too','to'], a:0, w:'أيضًا.', f:'<u>too</u>'},
        {p:'___ I help you?', ask:'اختر', o:['May','Do'], a:0, w:'عرض.', f:'<u>May</u>'},
        {p:'___ you show me that?', ask:'اختر', o:['Could','Are'], a:0, w:'طلب.', f:'<u>Could</u>'},
        {sol:['May','I','help','you','?'], w:'<code>May I + مجرّد</code>.', f:'May I help you?'},
        {p:'It ___ rain later.', ask:'اختر', o:['might','musts'], a:0, w:'احتمال.', f:'<u>might</u>'},
        {p:'After a modal, the verb is ___.', ask:'اختر', o:['base','+ -ing'], a:0, w:'مجرّد.', f:'<u>base</u>'}
      ]}
    ]
  };
})();
