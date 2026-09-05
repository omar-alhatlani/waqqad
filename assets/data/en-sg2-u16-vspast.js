/* ============================================================
   Lesson: Present Perfect versus Simple Past
   English · Super Goal 2 · Unit 16 (Have You Ever…?) · صفحة ١٤٥
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U16_VSPAST'] = {
    id:'EN_SG2_U16_VSPAST',
    title:'Present Perfect vs Simple Past',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'unknown time vs specific time',
      intro:'نستعمل <b>المضارع التامّ</b> حين يكون <b>وقتُ الحدث غيرَ محدّد</b> أو غيرَ مهمّ (مع <code>ever, never, so far, yet, already</code>): <code>I have visited Al-Ula</code>. ونستعمل <b>الماضي البسيط</b> حين يُذكَر <b>زمنٌ محدّدٌ منتهٍ</b> (<code>yesterday, last week, in 2010, ago</code>): <code>I visited Al-Ula last year</code>.',
      table:[['present perfect','I have seen it. (وقتٌ غير محدّد)'],['simple past','I saw it yesterday.'],['perfect clues','ever, never, yet, so far'],['past clues','yesterday, last week, ago']],
      trick:'اسألْ: هل ذُكِر زمنٌ محدّدٌ منتهٍ؟ نعم ← ماضٍ بسيط. لا (أو تجربةٌ عامّة) ← مضارعٌ تامّ.'
    },
    stages:[
      { type:'choice', name:'تامّ أم ماضٍ', hint:'حسب كلمة الزمن', qs:[
        {p:'I ___ Al-Ula last year.', o:['visited','have visited','visit','visits'], a:0, w:'<code>last year</code> ← ماضٍ.', f:'I <u>visited</u> Al-Ula last year.'},
        {p:'I ___ Al-Ula. (وقتٌ غير محدّد)', o:['have visited','visited','visit','visits'], a:0, w:'غير محدّد ← تامّ.', f:'I <u>have visited</u> Al-Ula.'},
        {p:'She ___ a camel yesterday.', o:['rode','has ridden','ride','rides'], a:0, w:'<code>yesterday</code> ← ماضٍ.', f:'She <u>rode</u> a camel yesterday.'},
        {p:'Have you ever ___ a camel?', o:['ridden','rode','ride','rides'], a:0, w:'التامّ ← <code>ridden</code>.', f:'…ever <u>ridden</u> a camel?'}
      ]},
      { type:'choice', name:'كلمات الزمن', hint:'أيّ زمنٍ يصحبها؟', qs:[
        {p:'“yesterday” goes with the:', o:['simple past','present perfect','future'], a:0, w:'الماضي البسيط.', f:'<u>simple past</u>'},
        {p:'“ever / never” usually go with the:', o:['present perfect','simple past','future'], a:0, w:'المضارع التامّ.', f:'<u>present perfect</u>'},
        {p:'“ago” goes with the:', o:['simple past','present perfect','present'], a:0, w:'الماضي البسيط.', f:'<u>simple past</u>'},
        {p:'“so far / yet” go with the:', o:['present perfect','simple past','past progressive'], a:0, w:'المضارع التامّ.', f:'<u>present perfect</u>'}
      ]},
      { type:'choice', name:'اختر الصيغة', hint:'انظر للزمن', qs:[
        {p:'We ___ this film. (بلا زمنٍ محدّد)', o:['have seen','saw','see','seeing'], a:0, w:'تامّ.', f:'We <u>have seen</u> this film.'},
        {p:'We ___ this film in 2019.', o:['saw','have seen','see','seen'], a:0, w:'<code>in 2019</code> ← ماضٍ.', f:'We <u>saw</u> it in 2019.'},
        {p:'He ___ his homework already.', o:['has finished','finished','finish','finishes'], a:0, w:'<code>already</code> ← تامّ.', f:'He <u>has finished</u> already.'},
        {p:'They ___ to Makkah two days ago.', o:['went','have gone','go','goes'], a:0, w:'<code>ago</code> ← ماضٍ.', f:'They <u>went</u>…two days ago.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['I','have','visited','Al-Ula','last','year','.'], bad:1, fix:'حذف have (visited)', w:'<code>last year</code> ← ماضٍ بسيط.', f:'I <u>visited</u> Al-Ula last year.'},
        {words:['She','rode','a','camel','many','times','.'], bad:1, fix:'has ridden', w:'وقتٌ غير محدّد ← تامّ.', f:'She <u>has ridden</u> a camel many times.'},
        {words:['Have','you','saw','the','film','?'], bad:2, fix:'seen', w:'التامّ ← <code>seen</code>.', f:'Have you <u>seen</u> the film?'},
        {words:['We','have','gone','there','yesterday','.'], bad:1, fix:'حذف have (went)', w:'<code>yesterday</code> ← ماضٍ.', f:'We <u>went</u> there yesterday.'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['I','visited','Al-Ula','last','year','.'], w:'<code>last year</code> ← ماضٍ.', f:'I visited Al-Ula last year.'},
        {sol:['I','have','never','ridden','a','camel','.'], w:'تامّ + <code>never</code>.', f:'I have never ridden a camel.'},
        {sol:['She','rode','a','camel','yesterday','.'], w:'<code>yesterday</code> ← ماضٍ.', f:'She rode a camel yesterday.'},
        {sol:['Have','you','ever','been','to','Paris','?'], w:'<code>ever</code> ← تامّ.', f:'Have you ever been to Paris?'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'I ___ Al-Ula last year.', ask:'اختر', o:['visited','have visited'], a:0, w:'زمنٌ محدّد.', f:'<u>visited</u>'},
        {p:'I ___ Al-Ula. (غير محدّد)', ask:'اختر', o:['have visited','visited'], a:0, w:'تامّ.', f:'<u>have visited</u>'},
        {p:'“yesterday” →', ask:'اختر', o:['simple past','present perfect'], a:0, w:'ماضٍ.', f:'<u>simple past</u>'},
        {p:'“ever/never” →', ask:'اختر', o:['present perfect','simple past'], a:0, w:'تامّ.', f:'<u>present perfect</u>'},
        {p:'We ___ it in 2019.', ask:'اختر', o:['saw','have seen'], a:0, w:'زمنٌ محدّد.', f:'<u>saw</u>'},
        {p:'He ___ already.', ask:'اختر', o:['has finished','finished'], a:0, w:'<code>already</code>.', f:'<u>has finished</u>'},
        {sol:['I','have','never','ridden','a','camel','.'], w:'تامّ + <code>never</code>.', f:'I have never ridden a camel.'},
        {p:'“ago” →', ask:'اختر', o:['simple past','present perfect'], a:0, w:'ماضٍ.', f:'<u>simple past</u>'},
        {p:'Have you ever ___ it?', ask:'اختر', o:['seen','saw'], a:0, w:'تامّ.', f:'<u>seen</u>'}
      ]}
    ]
  };
})();
