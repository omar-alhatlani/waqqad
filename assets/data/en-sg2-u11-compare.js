/* ============================================================
   Lesson: Comparative & Superlative Forms of Adjectives
   English · Super Goal 2 · Unit 11 (There's No Comparison) · صفحة ٩٦
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U11_COMPARE'] = {
    id:'EN_SG2_U11_COMPARE',
    title:'Comparative & Superlative',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'-er / more … & the -est / the most …',
      intro:'للمقارنة بين شيئين: الصفةُ القصيرة تأخذ <code>-er … than</code> (<code>cheaper than</code>)، والطويلة <code>more … than</code> (<code>more convenient than</code>). وللأفضل من ثلاثة فأكثر: <code>the -est</code> أو <code>the most</code>. وشاذّة: <code>good/better/the best</code>، <code>bad/worse/the worst</code>.',
      table:[['comparative','cheaper than, more useful than'],['superlative','the cheapest, the most useful'],['irregular','good/better/best'],['irregular','bad/worse/worst']],
      trick:'مقطعٌ واحد ← <code>-er/-est</code>. أمّا الصفةُ الطويلة (مقطعان+) ← <code>more/most</code>. وتنتهي الصفةُ بحرفٍ ساكن + <code>y</code> ← نحوّلها <code>-ier/-iest</code> (<code>friendly → friendlier</code>).'
    },
    stages:[
      { type:'choice', name:'المقارنة', hint:'-er أم more؟', qs:[
        {p:'Laptops are ___ than desktops. (expensive)', o:['more expensive','expensiver','most expensive'], a:0, w:'طويلة ← <code>more … than</code>.', f:'<u>more expensive</u> than'},
        {p:'This computer is ___ than that one. (cheap)', o:['cheaper','more cheap','cheapest'], a:0, w:'قصيرة ← <code>cheaper</code>.', f:'<u>cheaper</u> than'},
        {p:'Desktops are ___ than laptops. (good)', o:['better','gooder','best'], a:0, w:'شاذّ ← <code>better</code>.', f:'<u>better</u> than'},
        {p:'Laptops are ___ to use. (friendly)', o:['friendlier','more friendly','friendliest'], a:0, w:'ساكن + y ← <code>friendlier</code>.', f:'<u>friendlier</u>'}
      ]},
      { type:'choice', name:'التفضيل', hint:'the -est أم the most؟', qs:[
        {p:'This is ___ laptop in the store. (light)', o:['the lightest','the most light','lighter'], a:0, w:'قصيرة ← <code>the lightest</code>.', f:'<u>the lightest</u>'},
        {p:'It is ___ phone here. (expensive)', o:['the most expensive','the expensivest','more expensive'], a:0, w:'طويلة ← <code>the most</code>.', f:'<u>the most expensive</u>'},
        {p:'That was ___ film I’ve ever seen. (bad)', o:['the worst','the baddest','worse'], a:0, w:'شاذّ ← <code>the worst</code>.', f:'<u>the worst</u>'},
        {p:'She is ___ student in class. (good)', o:['the best','the goodest','better'], a:0, w:'شاذّ ← <code>the best</code>.', f:'<u>the best</u>'}
      ]},
      { type:'choice', name:'than / the', hint:'مقارنة أم تفضيل؟', qs:[
        {p:'Trains are faster ___ buses.', o:['than','then','that'], a:0, w:'المقارنة ← <code>than</code>.', f:'faster <u>than</u> buses'},
        {p:'This is ___ fastest train.', o:['the','a','more'], a:0, w:'التفضيل يأخذ <code>the</code>.', f:'<u>the</u> fastest'},
        {p:'A comparison of two things uses:', o:['comparative','superlative','no adjective'], a:0, w:'المقارنة.', f:'<u>comparative</u>'},
        {p:'The best of three or more uses:', o:['superlative','comparative','plural'], a:0, w:'التفضيل.', f:'<u>superlative</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['Laptops','are','more','cheap','than','desktops','.'], bad:2, fix:'cheaper (بلا more)', w:'قصيرة ← <code>cheaper</code>.', f:'Laptops are <u>cheaper</u> than…'},
        {words:['This','is','the','most','fast','one','.'], bad:3, fix:'the fastest', w:'قصيرة ← <code>the fastest</code>.', f:'the <u>fastest</u> one'},
        {words:['She','is','gooder','than','him','.'], bad:2, fix:'better', w:'شاذّ ← <code>better</code>.', f:'She is <u>better</u> than him.'},
        {words:['It','is','faster','then','a','car','.'], bad:3, fix:'than', w:'المقارنة ← <code>than</code>.', f:'faster <u>than</u> a car'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['Laptops','are','cheaper','than','desktops','.'], w:'<code>-er + than</code>.', f:'Laptops are cheaper than desktops.'},
        {sol:['This','is','the','best','computer','.'], w:'التفضيل ← <code>the best</code>.', f:'This is the best computer.'},
        {sol:['Desktops','are','more','convenient','than','laptops','.'], w:'طويلة ← <code>more … than</code>.', f:'Desktops are more convenient than laptops.'},
        {sol:['It','is','the','most','expensive','one','.'], w:'<code>the most</code>.', f:'It is the most expensive one.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'cheaper / more cheap? (cheap)', ask:'اختر', o:['cheaper','more cheap'], a:0, w:'قصيرة.', f:'<u>cheaper</u>'},
        {p:'___ than desktops (expensive)', ask:'اختر', o:['more expensive','expensiver'], a:0, w:'طويلة.', f:'<u>more expensive</u>'},
        {p:'the lightest / the most light? (light)', ask:'اختر', o:['the lightest','the most light'], a:0, w:'قصيرة.', f:'<u>the lightest</u>'},
        {p:'the best / the goodest? (good)', ask:'اختر', o:['the best','the goodest'], a:0, w:'شاذّ.', f:'<u>the best</u>'},
        {p:'That was ___ film. (bad, superlative)', ask:'اختر', o:['the worst','the baddest'], a:0, w:'شاذّ.', f:'<u>the worst</u>'},
        {p:'faster ___ buses', ask:'اختر', o:['than','then'], a:0, w:'مقارنة.', f:'<u>than</u>'},
        {sol:['This','is','the','best','one','.'], w:'التفضيل.', f:'This is the best one.'},
        {p:'comparison of two →', ask:'اختر', o:['comparative','superlative'], a:0, w:'المقارنة.', f:'<u>comparative</u>'},
        {p:'friendlier / more friendly? (friendly)', ask:'اختر', o:['friendlier','more friendly'], a:0, w:'ساكن + y.', f:'<u>friendlier</u>'}
      ]}
    ]
  };
})();
