/* ============================================================
   درس: Grammar — Comparatives & Superlatives (المقارنة والتفضيل)
   الإنجليزية · السادس الابتدائي · ف١ · Top Goal 3 · Unit 5 (World Sports)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG3_U5_COMPARE'] = {
    id:'EN_TG3_U5_COMPARE',
    title:'Grammar — Comparatives & Superlatives',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'المقارنة والتفضيل',
      intro:'للمقارنة بين شيئين: الصفةُ <b>القصيرة</b> نضيفُ لها <span class="tok-focus">-er</span> ونتبعُها بـ <span class="tok-focus">than</span> (fast<span class="tok-focus">er</span> <span class="tok-focus">than</span>)، والصفةُ <b>الطويلة</b> نضعُ قبلها <span class="tok-focus">more</span> (<span class="tok-focus">more</span> expensive <span class="tok-focus">than</span>). وللتفضيل بين أكثرَ من اثنين: القصيرةُ <span class="tok-focus">the</span> + <span class="tok-focus">-est</span> (<span class="tok-focus">the</span> fast<span class="tok-focus">est</span>)، والطويلةُ <span class="tok-focus">the most</span> (<span class="tok-focus">the most</span> expensive).',
      formula:'-<span class="tok-focus">er</span> + <span class="tok-focus">than</span>&nbsp;&nbsp;·&nbsp;&nbsp;<span class="tok-focus">the</span> + -<span class="tok-focus">est</span>&nbsp;&nbsp;(long: <span class="tok-focus">more</span> / <span class="tok-focus">the most</span>)',
      table:[['قصيرة — مقارنة','fast<span class="tok-focus">er</span> <span class="tok-focus">than</span>'],['قصيرة — تفضيل','<span class="tok-focus">the</span> fast<span class="tok-focus">est</span>'],['طويلة — مقارنة','<span class="tok-focus">more</span> expensive <span class="tok-focus">than</span>'],['طويلة — تفضيل','<span class="tok-focus">the most</span> expensive']],
      examples:['Volleyball is fast<span class="tok-focus">er</span> <span class="tok-focus">than</span> chess.','Football is <span class="tok-focus">the most</span> popular sport here.'],
      trick:'صفةٌ قصيرة ← <span class="tok-focus">-er / -est</span>. صفةٌ طويلة ← <span class="tok-focus">more / the most</span>. والمقارنةُ تتبعُها <span class="tok-focus">than</span>، والتفضيلُ يسبقُه <span class="tok-focus">the</span>.'
    },
    stages:[
      { type:'choice', name:'مقارنةٌ أم تفضيل؟', hint:'مقارنةٌ (اثنان) ← than · تفضيلٌ (أكثر) ← the', qs:[
        {p:'A cheetah is ___ than a horse.', ask:'اختر', o:['faster','the fastest'], a:0, w:'مقارنةٌ بين اثنين ← <code>faster than</code>.', f:'... <u>faster</u> than ...'},
        {p:'This is ___ team in the league.', ask:'اختر', o:['the best','better'], a:0, w:'تفضيلٌ بين كثيرين ← <code>the best</code>.', f:'... <u>the best</u> team ...'},
        {p:'Tennis is ___ than golf. (long adj)', ask:'اختر', o:['more exciting','excitinger'], a:0, w:'صفةٌ طويلة ← <code>more exciting</code>.', f:'... <u>more exciting</u> ...'},
        {p:'He is ___ player on the team.', ask:'اختر', o:['the tallest','taller'], a:0, w:'تفضيل ← <code>the tallest</code>.', f:'... <u>the tallest</u> ...'}
      ]},
      { type:'gap', name:'أكمل المقارنة', hint:'قصيرة: -er/-est · طويلة: more/most', qs:[
        {p:'A car is ___ than a bike. (fast)', o:['faster','more fast'], a:0, w:'قصيرةٌ ← <code>faster</code>.', f:'... <u>faster</u> than ...'},
        {p:'This is the ___ game of all. (exciting)', o:['most exciting','excitingest'], a:0, w:'طويلةٌ ← <code>the most exciting</code>.', f:'... the <u>most exciting</u> ...'},
        {p:'Volleyball is ___ than running. (easy → short)', o:['easier','more easy'], a:0, w:'قصيرةٌ ← <code>easier</code>.', f:'... <u>easier</u> than ...'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['A','cheetah','is','more','fast','than','a','horse','.'], bad:3, fix:'faster (تُدمج)', w:'صفةٌ قصيرة ← <code>faster</code> لا more fast.', f:'... is <u>faster</u> than ...'},
        {words:['This','is','the','most','fast','car','.'], bad:3, fix:'the fastest', w:'قصيرةٌ ← <code>the fastest</code>.', f:'... <u>the fastest</u> car.'},
        {words:['Tennis','is','excitinger','than','golf','.'], bad:2, fix:'more exciting', w:'صفةٌ طويلة ← <code>more exciting</code>.', f:'... <u>more exciting</u> than ...'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['A','cheetah','is','faster','than','a','horse','.'], w:'<code>faster + than</code>.', f:'A cheetah is faster than a horse.'},
        {sol:['This','is','the','fastest','car','.'], w:'<code>the + fastest</code>.', f:'This is the fastest car.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'A cheetah is ___ than a horse.', ask:'اختر', o:['faster','the fastest'], a:0, w:'مقارنة ← faster than.', f:'... <u>faster</u> than ...'},
        {p:'This is ___ team.', ask:'اختر', o:['the best','better'], a:0, w:'تفضيل ← the best.', f:'... <u>the best</u> ...'},
        {p:'صفةٌ قصيرةٌ في المقارنة تأخذ:', ask:'اختر', o:['-er + than','more + than فقط'], a:0, w:'<code>-er + than</code>.', f:'← <u>-er + than</u>'},
        {p:'Tennis is ___ than golf.', ask:'اختر', o:['more exciting','excitinger'], a:0, w:'طويلة ← more exciting.', f:'... <u>more exciting</u> ...'},
        {p:'التفضيلُ يسبقُه:', ask:'اختر', o:['the','than'], a:0, w:'<code>the</code> (the fastest / the most).', f:'← <u>the</u>'}
      ]}
    ]
  };
})();
