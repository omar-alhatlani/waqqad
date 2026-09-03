/* ============================================================
   Lesson: Grammar — Comparative & Superlative Adjectives
   English · Super Goal 1 · Unit 7 (Where Do You Live?) · صفحة ٦٣
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1).
   lang:'en' → المحتوى إنجليزيّ LTR، والشرح بالعربية.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U7_COMPARE'] = {
    id:'EN_SG1_U7_COMPARE',
    title:'Grammar — المقارنة والتفضيل',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'Comparative & Superlative',
      intro:'المقارنة (Comparative): للصفة القصيرة نضيف <code>-er</code> ونتبعها بـ <code>than</code>، وللطويلة نستعمل <code>more</code>. والتفضيل (Superlative): للقصيرة <code>the ... -est</code>، وللطويلة <code>the most</code>.',
      table:[['قصيرة','tall → taller → the tallest'],['طويلة','modern → more modern → the most modern'],['شاذّ (good)','good → better → the best'],['شاذّ (bad)','bad → worse → the worst']],
      examples:['The hotel is taller than the office.','The subway is more convenient than the bus.','The hotel is the tallest building.','good → better → the best'],
      trick:'القصيرة (مقطع واحد وما ينتهي بـ y): <code>-er/-est</code> (big→bigger→biggest). والطويلة: <code>more/most</code>. وشواذّ: <code>good→better→best</code>, <code>bad→worse→worst</code>.'
    },
    stages:[
      { type:'choice', name:'المقارنة', hint:'أضف -er أو more', qs:[
        {p:'tall →',    ask:'المقارنة', o:['taller','more tall','tallest','taler'], a:0, w:'قصيرة ← <code>taller</code>.', f:'taller'},
        {p:'big →',     ask:'المقارنة', o:['bigger','more big','biger','biggest'], a:0, w:'مضاعفة ← <code>bigger</code>.', f:'bigger'},
        {p:'easy →',    ask:'المقارنة', o:['easier','more easy','easyer','easiest'], a:0, w:'y→i ← <code>easier</code>.', f:'easier'},
        {p:'modern →',  ask:'المقارنة', o:['more modern','moderner','modernest','most modern'], a:0, w:'طويلة ← <code>more modern</code>.', f:'more modern'},
        {p:'good →',    ask:'المقارنة', o:['better','gooder','more good','best'], a:0, w:'شاذّ ← <code>better</code>.', f:'better'},
        {p:'hot →',     ask:'المقارنة', o:['hotter','more hot','hoter','hottest'], a:0, w:'مضاعفة ← <code>hotter</code>.', f:'hotter'}
      ]},
      { type:'choice', name:'التفضيل', hint:'the ... -est أو the most', qs:[
        {p:'tall →',    ask:'التفضيل', o:['the tallest','the most tall','the taller','tallest'], a:0, w:'قصيرة ← <code>the tallest</code>.', f:'the tallest'},
        {p:'big →',     ask:'التفضيل', o:['the biggest','the most big','the bigger','biggest'], a:0, w:'مضاعفة ← <code>the biggest</code>.', f:'the biggest'},
        {p:'modern →',  ask:'التفضيل', o:['the most modern','the modernest','the more modern','most modern'], a:0, w:'طويلة ← <code>the most modern</code>.', f:'the most modern'},
        {p:'good →',    ask:'التفضيل', o:['the best','the goodest','the most good','the better'], a:0, w:'شاذّ ← <code>the best</code>.', f:'the best'},
        {p:'bad →',     ask:'التفضيل', o:['the worst','the baddest','the most bad','the worse'], a:0, w:'شاذّ ← <code>the worst</code>.', f:'the worst'},
        {p:'nice →',    ask:'التفضيل', o:['the nicest','the most nice','the nicer','nicest'], a:0, w:'تنتهي بـ e ← <code>the nicest</code>.', f:'the nicest'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الصيغة الصحيحة', qs:[
        {p:'The hotel is ___ than the office.  (tall)', ask:'أكمل (مقارنة)', o:['taller','tallest','more tall','the tallest'], a:0, w:'مقارنة ← <code>taller</code>.', f:'<u>taller</u> than the office.'},
        {p:'The subway is ___ convenient than the bus.', ask:'أكمل (مقارنة)', o:['more','most','the most','the more'], a:0, w:'طويلة ← <code>more</code>.', f:'<u>more</u> convenient.'},
        {p:'The hotel is the ___ building.  (tall)',     ask:'أكمل (تفضيل)', o:['tallest','taller','most tall','more tall'], a:0, w:'تفضيل ← <code>tallest</code>.', f:'the <u>tallest</u> building.'},
        {p:"Gino's has the ___ pizza in town.  (good)",  ask:'أكمل (تفضيل)', o:['best','better','goodest','most good'], a:0, w:'شاذّ ← <code>best</code>.', f:'the <u>best</u> pizza.'},
        {p:'That restaurant has the ___ food.  (bad)',    ask:'أكمل (تفضيل)', o:['worst','worse','baddest','most bad'], a:0, w:'شاذّ ← <code>worst</code>.', f:'the <u>worst</u> food.'},
        {p:'The supermarket is ___ than the store.  (big)', ask:'أكمل (مقارنة)', o:['bigger','biggest','more big','the biggest'], a:0, w:'مقارنة ← <code>bigger</code>.', f:'<u>bigger</u> than the store.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['The','hotel','is','taller','than','the','office','.'], w:'مقارنة مع <code>than</code>.', f:'The hotel is taller than the office.'},
        {sol:['This','is','the','biggest','room','.'],               w:'تفضيل.', f:'This is the biggest room.'},
        {sol:['Summer','is','hotter','than','winter','.'],            w:'مقارنة.', f:'Summer is hotter than winter.'},
        {sol:['My','room','is','the','quietest','.'],                w:'تفضيل.', f:'My room is the quietest.'},
        {sol:['The','city','is','bigger','than','the','town','.'],    w:'مقارنة.', f:'The city is bigger than the town.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'big →', ask:'المقارنة', o:['bigger','more big','biger','biggest'], a:0, w:'مضاعفة ← <code>bigger</code>.', f:'bigger'},
        {p:'good →', ask:'التفضيل', o:['the best','the goodest','the most good','the better'], a:0, w:'شاذّ ← <code>the best</code>.', f:'the best'},
        {p:'The subway is ___ convenient than the bus.', ask:'أكمل (مقارنة)', o:['more','most','the most','the more'], a:0, w:'طويلة ← <code>more</code>.', f:'<u>more</u> convenient.'},
        {p:'modern →', ask:'التفضيل', o:['the most modern','the modernest','the more modern','most modern'], a:0, w:'طويلة ← <code>the most modern</code>.', f:'the most modern'},
        {p:'That restaurant has the ___ food.  (bad)', ask:'أكمل (تفضيل)', o:['worst','worse','baddest','most bad'], a:0, w:'شاذّ ← <code>worst</code>.', f:'the <u>worst</u> food.'},
        {sol:['This','is','the','biggest','room','.'], w:'تفضيل.', f:'This is the biggest room.'},
        {p:'easy →', ask:'المقارنة', o:['easier','more easy','easyer','easiest'], a:0, w:'y→i ← <code>easier</code>.', f:'easier'},
        {p:'The hotel is the ___ building.  (tall)', ask:'أكمل (تفضيل)', o:['tallest','taller','most tall','more tall'], a:0, w:'تفضيل ← <code>tallest</code>.', f:'the <u>tallest</u>.'},
        {sol:['Summer','is','hotter','than','winter','.'], w:'مقارنة.', f:'Summer is hotter than winter.'}
      ]}
    ]
  };
})();
