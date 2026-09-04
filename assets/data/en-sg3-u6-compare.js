/* ============================================================
   Lesson: Comparative & Superlative + as...as
   English · Super Goal 3 · Unit 6 (Do You Know Where It Is?) · صفحة ٦٠
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U6_COMPARE'] = {
    id:'EN_SG3_U6_COMPARE',
    title:'Comparative & Superlative',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'-er / more … & -est / most …',
      intro:'للمقارنة بين شيئين نستعمل <b>صيغة المقارنة</b>: الصفةُ القصيرة تأخذ <code>-er … than</code> (<code>faster than</code>)، والطويلة <code>more … than</code> (<code>more expensive than</code>). وللأفضل بين ثلاثة فأكثر <b>صيغة التفضيل</b>: <code>the -est</code> أو <code>the most</code>. وبعضُها شاذّ: <code>good/better/best</code>، <code>bad/worse/worst</code>. ولتساوي شيئين: <code>as … as</code>.',
      table:[['Comparative','faster than, more expensive than'],['Superlative','the fastest, the most expensive'],['Irregular','good/better/best · bad/worse/worst'],['Equal','as fast as, just as good as']],
      trick:'الصفةُ القصيرة (مقطع واحد) ← <code>-er/-est</code>، والطويلة ← <code>more/most</code>. و<code>as…as</code> للتساوي، ومع النفي: <code>not as … as</code>.'
    },
    stages:[
      { type:'choice', name:'المقارنة', hint:'-er أم more؟', qs:[
        {p:'Trains are ___ buses. (fast)', o:['faster than','more fast than','fastest','as fast'], a:0, w:'قصيرة ← <code>faster than</code>.', f:'<u>faster than</u> buses'},
        {p:'Train tickets are ___ bus tickets. (expensive)', o:['more expensive than','expensiver than','most expensive'], a:0, w:'طويلة ← <code>more … than</code>.', f:'<u>more expensive than</u>'},
        {p:'The subway is ___ than taxis. (less)', o:['less expensive','more expensive than','expensiver'], a:0, w:'<code>less … than</code> للأقلّ.', f:'<u>less expensive</u> than taxis'},
        {p:'This car is ___ than that one. (good)', o:['better','gooder','best','more good'], a:0, w:'شاذّ ← <code>better</code>.', f:'<u>better</u> than'}
      ]},
      { type:'choice', name:'التفضيل', hint:'the -est أم the most؟', qs:[
        {p:'Planes are ___. (fast)', o:['the fastest','the most fast','faster'], a:0, w:'قصيرة ← <code>the fastest</code>.', f:'<u>the fastest</u>'},
        {p:'Plane tickets are ___. (expensive)', o:['the most expensive','the expensivest','more expensive'], a:0, w:'طويلة ← <code>the most</code>.', f:'<u>the most expensive</u>'},
        {p:'Sao Paulo has ___ traffic in the world. (bad)', o:['the worst','the baddest','worse'], a:0, w:'شاذّ ← <code>the worst</code>.', f:'<u>the worst</u> traffic'},
        {p:'The subway is ___ way to travel. (cheap)', o:['the cheapest','the most cheap','cheaper'], a:0, w:'قصيرة ← <code>the cheapest</code>.', f:'<u>the cheapest</u>'}
      ]},
      { type:'choice', name:'as … as', hint:'التساوي', qs:[
        {p:'In Japan, trains are ___ planes. (expensive, equal)', o:['as expensive as','more expensive as','expensiver than'], a:0, w:'تساوٍ ← <code>as … as</code>.', f:'<u>as expensive as</u>'},
        {p:'Our neighborhood isn’t ___ our old one. (noisy)', o:['as noisy as','noisier as','as noisy than'], a:0, w:'النفي ← <code>not as … as</code>.', f:'isn’t <u>as noisy as</u>'},
        {p:'This hostel is just ___ the hotel. (comfortable)', o:['as comfortable as','more comfortable','comfortabler'], a:0, w:'<code>just as … as</code> للتأكيد.', f:'just <u>as comfortable as</u>'},
        {p:'Sao Paulo is just ___ Mexico City. (polluted)', o:['as polluted as','more polluted','polluteder'], a:0, w:'تساوٍ.', f:'<u>as polluted as</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['Trains','are','more','fast','than','buses','.'], bad:2, fix:'faster (بلا more)', w:'قصيرة ← <code>faster</code>.', f:'Trains are <u>faster</u> than buses.'},
        {words:['This','is','the','baddest','traffic','.'], bad:3, fix:'the worst', w:'شاذّ ← <code>the worst</code>.', f:'the <u>worst</u> traffic'},
        {words:['It','is','as','noisy','than','before','.'], bad:4, fix:'as', w:'<code>as … as</code> لا <code>as … than</code>.', f:'as noisy <u>as</u> before'},
        {words:['Gino’s','has','gooder','pasta','.'], bad:2, fix:'better', w:'شاذّ ← <code>better</code>.', f:'<u>better</u> pasta'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['Trains','are','faster','than','buses','.'], w:'<code>-er + than</code>.', f:'Trains are faster than buses.'},
        {sol:['Planes','are','the','fastest','.'], w:'التفضيل <code>the fastest</code>.', f:'Planes are the fastest.'},
        {sol:['This','hostel','is','as','comfortable','as','the','hotel','.'], w:'<code>as … as</code>.', f:'This hostel is as comfortable as the hotel.'},
        {sol:['Sao','Paulo','has','the','worst','traffic','.'], w:'شاذّ ← <code>the worst</code>.', f:'Sao Paulo has the worst traffic.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'Trains are ___ buses. (fast)', ask:'اختر', o:['faster than','more fast than'], a:0, w:'قصيرة.', f:'<u>faster than</u>'},
        {p:'Tickets are ___ . (expensive, comparative)', ask:'اختر', o:['more expensive','expensiver'], a:0, w:'طويلة.', f:'<u>more expensive</u>'},
        {p:'Planes are ___. (fast, superlative)', ask:'اختر', o:['the fastest','the most fast'], a:0, w:'قصيرة.', f:'<u>the fastest</u>'},
        {p:'Sao Paulo has ___ traffic. (bad)', ask:'اختر', o:['the worst','the baddest'], a:0, w:'شاذّ.', f:'<u>the worst</u>'},
        {p:'trains are ___ planes. (equal, expensive)', ask:'اختر', o:['as expensive as','more expensive as'], a:0, w:'تساوٍ.', f:'<u>as expensive as</u>'},
        {p:'This car is ___ than that. (good)', ask:'اختر', o:['better','gooder'], a:0, w:'شاذّ.', f:'<u>better</u>'},
        {sol:['Planes','are','the','fastest','.'], w:'التفضيل.', f:'Planes are the fastest.'},
        {p:'It isn’t ___ our old one. (noisy)', ask:'اختر', o:['as noisy as','noisier as'], a:0, w:'النفي.', f:'<u>as noisy as</u>'},
        {p:'the cheapest / the most cheap? (cheap)', ask:'اختر', o:['the cheapest','the most cheap'], a:0, w:'قصيرة.', f:'<u>the cheapest</u>'}
      ]}
    ]
  };
})();
