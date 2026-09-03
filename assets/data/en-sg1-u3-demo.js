/* ============================================================
   Lesson: Grammar — Demonstrative Pronouns (this/that/these/those)
   English · Super Goal 1 · Unit 3 (What's That?) · صفحة ٢٠
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1).
   lang:'en' → المحتوى إنجليزيّ LTR، والشرح بالعربية.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U3_DEMO'] = {
    id:'EN_SG1_U3_DEMO',
    title:'Grammar — أسماء الإشارة (this/that/these/those)',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'this / that / these / those',
      intro:'نشير إلى الأشياء بأسماء الإشارة: القريب <code>this</code> (مفرد) و<code>these</code> (جمع)، والبعيد <code>that</code> (مفرد) و<code>those</code> (جمع).',
      table:[['قريب · مفرد','this'],['قريب · جمع','these'],['بعيد · مفرد','that'],['بعيد · جمع','those']],
      examples:['This is a book. (قريب · مفرد)','These are books. (قريب · جمع)','That is a bird. (بعيد · مفرد)','Those are trees. (بعيد · جمع)'],
      trick:'القريب <code>this/these</code>، والبعيد <code>that/those</code>. والجمع دائمًا ينتهي بحرف e: thes<b>e</b> / thos<b>e</b>.'
    },
    stages:[
      { type:'choice', name:'قريب أم بعيد؟', hint:'انتبه: قريب/بعيد · مفرد/جمع', qs:[
        {p:'one book — near me',    ask:'اختر اسم الإشارة', o:['this','these','that','those'], a:0, w:'قريبٌ مفرد ← <code>this</code>.', f:'near, one → this'},
        {p:'many books — near me',  ask:'اختر اسم الإشارة', o:['these','this','that','those'], a:0, w:'قريبٌ جمع ← <code>these</code>.', f:'near, many → these'},
        {p:'one bird — far away',   ask:'اختر اسم الإشارة', o:['that','this','these','those'], a:0, w:'بعيدٌ مفرد ← <code>that</code>.', f:'far, one → that'},
        {p:'many trees — far away', ask:'اختر اسم الإشارة', o:['those','this','these','that'], a:0, w:'بعيدٌ جمع ← <code>those</code>.', f:'far, many → those'},
        {p:'one pencil — near me',  ask:'اختر اسم الإشارة', o:['this','that','these','those'], a:0, w:'قريبٌ مفرد ← <code>this</code>.', f:'near, one → this'},
        {p:'many keys — far away',  ask:'اختر اسم الإشارة', o:['those','these','that','this'], a:0, w:'بعيدٌ جمع ← <code>those</code>.', f:'far, many → those'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر اسم الإشارة المناسب', qs:[
        {p:'___ book near me is new.',        ask:'أكمل (قريب · مفرد)', o:['This','These','That','Those'], a:0, w:'قريبٌ مفرد ← <code>This</code>.', f:'<u>This</u> book is new.'},
        {p:'___ chairs here are red.',         ask:'أكمل (قريب · جمع)', o:['These','This','That','Those'], a:0, w:'قريبٌ جمع ← <code>These</code>.', f:'<u>These</u> chairs are red.'},
        {p:'___ park far away is big.',        ask:'أكمل (بعيد · مفرد)', o:['That','This','These','Those'], a:0, w:'بعيدٌ مفرد ← <code>That</code>.', f:'<u>That</u> park is big.'},
        {p:'Look at ___ birds in the sky.',    ask:'أكمل (بعيد · جمع)', o:['those','this','these','that'], a:0, w:'بعيدٌ جمع ← <code>those</code>.', f:'Look at <u>those</u> birds.'},
        {p:'I want ___ goldfish here.',        ask:'أكمل (قريب · مفرد)', o:['this','these','that','those'], a:0, w:'قريبٌ مفرد ← <code>this</code>.', f:'I want <u>this</u> goldfish.'},
        {p:'I like ___ trees in the park.',    ask:'أكمل (بعيد · جمع)', o:['those','this','these','that'], a:0, w:'بعيدٌ جمع ← <code>those</code>.', f:'I like <u>those</u> trees.'}
      ]},
      { type:'choice', name:'أيّها الصحيح؟', hint:'اختر اسم الإشارة الأنسب', qs:[
        {p:'The cup in my hand:',      ask:'اختر الصحيح', o:['this','that','these','those'], a:0, w:'قريبٌ مفرد ← <code>this</code>.', f:'this cup'},
        {p:'The mountain over there:',  ask:'اختر الصحيح', o:['that','this','these','those'], a:0, w:'بعيدٌ مفرد ← <code>that</code>.', f:'that mountain'},
        {p:'The shoes on my feet:',     ask:'اختر الصحيح', o:['these','those','this','that'], a:0, w:'قريبٌ جمع ← <code>these</code>.', f:'these shoes'},
        {p:'The stars in the sky:',     ask:'اختر الصحيح', o:['those','these','this','that'], a:0, w:'بعيدٌ جمع ← <code>those</code>.', f:'those stars'},
        {p:'The pen I am holding:',     ask:'اختر الصحيح', o:['this','that','these','those'], a:0, w:'قريبٌ مفرد ← <code>this</code>.', f:'this pen'},
        {p:'The clouds far up:',        ask:'اختر الصحيح', o:['those','these','this','that'], a:0, w:'بعيدٌ جمع ← <code>those</code>.', f:'those clouds'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['This','is','a','book','.'],     w:'قريبٌ مفرد.', f:'This is a book.'},
        {sol:['These','are','books','.'],       w:'قريبٌ جمع.', f:'These are books.'},
        {sol:['That','is','a','bird','.'],      w:'بعيدٌ مفرد.', f:'That is a bird.'},
        {sol:['Those','are','trees','.'],       w:'بعيدٌ جمع.', f:'Those are trees.'},
        {sol:['What','is','this','?'],          w:'سؤالٌ عن القريب المفرد.', f:'What is this?'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'one book — near me', ask:'اختر اسم الإشارة', o:['this','that'], a:0, w:'قريبٌ مفرد ← <code>this</code>.', f:'near, one → this'},
        {p:'Look at ___ birds in the sky.', ask:'أكمل (بعيد · جمع)', o:['those','these','this','that'], a:0, w:'بعيدٌ جمع ← <code>those</code>.', f:'<u>those</u> birds'},
        {p:'many trees — far away', ask:'اختر اسم الإشارة', o:['those','these'], a:0, w:'بعيدٌ جمع ← <code>those</code>.', f:'far, many → those'},
        {p:'The shoes on my feet:', ask:'اختر الصحيح', o:['these','those','this','that'], a:0, w:'قريبٌ جمع ← <code>these</code>.', f:'these shoes'},
        {p:'one bird — far away', ask:'اختر اسم الإشارة', o:['that','this'], a:0, w:'بعيدٌ مفرد ← <code>that</code>.', f:'far, one → that'},
        {sol:['These','are','books','.'], w:'قريبٌ جمع.', f:'These are books.'},
        {p:'___ chairs here are red.', ask:'أكمل (قريب · جمع)', o:['These','This','That','Those'], a:0, w:'قريبٌ جمع ← <code>These</code>.', f:'<u>These</u> chairs'},
        {p:'The mountain over there:', ask:'اختر الصحيح', o:['that','this','these','those'], a:0, w:'بعيدٌ مفرد ← <code>that</code>.', f:'that mountain'},
        {sol:['What','is','this','?'], w:'سؤالٌ عن القريب.', f:'What is this?'}
      ]}
    ]
  };
})();
