/* ============================================================
   درس: Grammar — Comparatives & superlatives
   الإنجليزية · الرابع الابتدائي · ف١ · Top Goal 1 · Unit 7 (Wildlife)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب المحفوظ).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG1_U7_COMP'] = {
    id:'EN_TG1_U7_COMP',
    title:'Grammar — Comparatives & superlatives',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'المقارنةُ والتفضيل',
      intro:'للمقارنةِ بين اثنين نستعملُ <span class="tok-focus">-er … than</span> للصفةِ القصيرة (tall → tall<span class="tok-focus">er</span> than) أو <span class="tok-focus">more … than</span> للطويلة (more careful than). وللتفضيلِ بين ثلاثةٍ فأكثرَ نستعملُ <span class="tok-focus">the -est</span> أو <span class="tok-focus">the most</span> (the tall<span class="tok-focus">est</span> / the most careful).',
      formula:'مقارنة: adj<span class="tok-focus">-er</span> / <span class="tok-focus">more</span> + than   |   تفضيل: the adj<span class="tok-focus">-est</span> / the <span class="tok-focus">most</span>',
      table:[['مقارنة (قصيرة)','A cheetah is fast<span class="tok-focus">er than</span> a cat.'],['مقارنة (طويلة)','more careful than'],['تفضيل (قصيرة)','the tall<span class="tok-focus">est</span> animal'],['تفضيل (طويلة)','the <span class="tok-focus">most</span> friendly']],
      examples:['An elephant is bigg<span class="tok-focus">er than</span> a lion.','The cheetah is <span class="tok-focus">the</span> fast<span class="tok-focus">est</span> land animal.'],
      trick:'مقارنةٌ بين اثنين ← <span class="tok-focus">-er/more + than</span>. الأفضلُ بين الجميع ← <span class="tok-focus">the -est / the most</span>.'
    },
    stages:[
      { type:'choice', name:'مقارنةٌ أم تفضيل؟', hint:'than مقارنة · the -est تفضيل', qs:[
        {p:'taller than →', ask:'اختر', o:['مقارنة','تفضيل'], a:0, w:'<code>-er than</code> مقارنة.', f:'← <u>مقارنة</u>'},
        {p:'the tallest →', ask:'اختر', o:['تفضيل','مقارنة'], a:0, w:'<code>the -est</code> تفضيل.', f:'← <u>تفضيل</u>'},
        {p:'الصفةُ الطويلةُ في المقارنةِ تأخذُ:', ask:'اختر', o:['more','-er'], a:0, w:'<code>more careful than</code>.', f:'← <u>more</u>'},
        {p:'التفضيلُ يسبقُه:', ask:'اختر', o:['the','than'], a:0, w:'<code>the tallest</code>.', f:'← <u>the</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'مقارنةٌ أم تفضيل؟', qs:[
        {p:'A lion is ___ than a cat. (strong)', o:['stronger','strongest','more strong'], a:0, w:'مقارنةٌ قصيرة ← <code>stronger than</code>.', f:'... <u>stronger</u> than a cat.'},
        {p:'The cheetah is the ___ land animal. (fast)', o:['fastest','faster','most fast'], a:0, w:'تفضيلٌ قصير ← <code>the fastest</code>.', f:'... the <u>fastest</u> animal.'},
        {p:'A rabbit is ___ than a turtle.', o:['faster','fastest','more fast'], a:0, w:'مقارنة ← <code>faster than</code>.', f:'... <u>faster</u> than a turtle.'}
      ]},
      { type:'choice', name:'اختر الصواب', hint:'اثنان ← than · الكلّ ← the -est', qs:[
        {p:'An elephant is ___ than a dog.', ask:'اختر', o:['bigger','biggest'], a:0, w:'مقارنة ← bigger than.', f:'... <u>bigger</u> than a dog.'},
        {p:'The blue whale is the ___ animal.', ask:'اختر', o:['biggest','bigger'], a:0, w:'تفضيلٌ ← the biggest.', f:'... the <u>biggest</u> animal.'},
        {p:'Cats are ___ than dogs. (careful)', ask:'اختر', o:['more careful','carefuler'], a:0, w:'صفةٌ طويلةٌ ← more careful.', f:'... <u>more careful</u> than dogs.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['A','lion','is','more','strong','than','a','cat','.'], bad:3, fix:'stronger', w:'الصفةُ القصيرةُ ← <code>stronger</code>.', f:'A lion is <u>stronger</u> than a cat.'},
        {words:['The','cheetah','is','fastest','animal','.'], bad:3, fix:'the fastest', w:'التفضيلُ يسبقُه <code>the</code>.', f:'The cheetah is <u>the fastest</u> animal.'},
        {words:['A','dog','is','bigger','then','a','cat','.'], bad:4, fix:'than', w:'أداةُ المقارنةِ <code>than</code> لا <code>then</code>.', f:'A dog is bigger <u>than</u> a cat.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب', qs:[
        {sol:['A','lion','is','stronger','than','a','cat','.'], w:'مقارنة.', f:'A lion is stronger than a cat.'},
        {sol:['The','elephant','is','the','biggest','animal','.'], w:'تفضيلٌ.', f:'The elephant is the biggest animal.'},
        {sol:['A','cheetah','runs','faster','than','a','dog','.'], w:'مقارنةٌ بظرف.', f:'A cheetah runs faster than a dog.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'taller than →', ask:'اختر', o:['مقارنة','تفضيل'], a:0, w:'مقارنة.', f:'← <u>مقارنة</u>'},
        {p:'A tiger is ___ than a rabbit. (big)', ask:'اختر', o:['bigger','biggest'], a:0, w:'مقارنة.', f:'... <u>bigger</u> than a rabbit.'},
        {p:'The giraffe is the ___ animal. (tall)', ask:'اختر', o:['tallest','taller'], a:0, w:'تفضيل.', f:'... the <u>tallest</u> animal.'},
        {p:'الصفةُ الطويلةُ في التفضيلِ تأخذُ:', ask:'اختر', o:['the most','the -est'], a:0, w:'the most careful.', f:'← <u>the most</u>'},
        {p:'A cat is ___ than a mouse. (fast)', ask:'اختر', o:['faster','fastest'], a:0, w:'مقارنة.', f:'... <u>faster</u> than a mouse.'}
      ]}
    ]
  };
})();
