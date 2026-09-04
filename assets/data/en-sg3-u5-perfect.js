/* ============================================================
   Lesson: Present Perfect vs Simple Past + for/since + How long
   English · Super Goal 3 · Unit 5 (Since When?) · صفحة ٥٠
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U5_PERFECT'] = {
    id:'EN_SG3_U5_PERFECT',
    title:'Present Perfect vs Simple Past',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'have/has + p.p. — for / since',
      intro:'نستعمل <b>المضارع التامّ</b> (<code>have/has + التصريف الثالث</code>) لفعلٍ وقع في الماضي دون زمنٍ محدّد، أو بدأ في الماضي ويستمرّ إلى الآن. نستعمل <b>الماضي البسيط</b> حين يُذكَر الزمن المحدّد. مع التامّ: <code>for</code> للمدّة (<code>for two years</code>)، و<code>since</code> لنقطة البداية (<code>since 2018</code>). ونسأل بـ <code>How long …?</code>',
      table:[['Present Perfect','I have lived here since 2018.'],['Simple Past','I lived there in 2010.'],['for','مدّة: for two years'],['since','بداية: since Tuesday']],
      trick:'إذا ذُكِر زمنٌ محدّدٌ منتهٍ (<code>yesterday, in 2010</code>) ← ماضٍ بسيط. وإن كان الفعلُ مستمرًّا للآن ← مضارعٌ تامّ مع <code>for/since</code>.'
    },
    stages:[
      { type:'choice', name:'تامّ أم ماضٍ', hint:'زمنٌ محدّد أم لا؟', qs:[
        {p:'A: ___ you ever been to France? B: Yes, I have.', o:['Have','Did','Do','Are'], a:0, w:'التامّ ← <code>Have</code>.', f:'<u>Have</u> you ever been…?'},
        {p:'I ___ there two years ago.', o:['was','have been','am','been'], a:0, w:'زمنٌ محدّد ← ماضٍ بسيط.', f:'I <u>was</u> there two years ago.'},
        {p:'She ___ English since third grade.', o:['has studied','studied','studies','study'], a:0, w:'مستمرٌّ للآن ← تامّ.', f:'She <u>has studied</u> …'},
        {p:'We ___ this car in 2019.', o:['bought','have bought','buy','buys'], a:0, w:'<code>in 2019</code> ← ماضٍ.', f:'We <u>bought</u> … in 2019.'}
      ]},
      { type:'choice', name:'for أم since', hint:'مدّة أم نقطة بداية؟', qs:[
        {p:'Hameed has had this TV ___ 15 years.', o:['for','since','ago','from'], a:0, w:'مدّة ← <code>for</code>.', f:'<u>for</u> 15 years'},
        {p:'I’ve had my laptop ___ last June.', o:['since','for','ago','in'], a:0, w:'نقطة بداية ← <code>since</code>.', f:'<u>since</u> last June'},
        {p:'We’ve worked on this project ___ a month.', o:['for','since','ago','at'], a:0, w:'مدّة ← <code>for</code>.', f:'<u>for</u> a month'},
        {p:'Tariq has worn glasses ___ the age of seven.', o:['since','for','ago','from'], a:0, w:'نقطة بداية ← <code>since</code>.', f:'<u>since</u> the age of seven'}
      ]},
      { type:'choice', name:'التصريف الثالث', hint:'have/has + p.p.', qs:[
        {p:'I have ___ English for five years. (study)', o:['studied','study','studying','studies'], a:0, w:'التصريف الثالث ← <code>studied</code>.', f:'have <u>studied</u>'},
        {p:'He has ___ here since 2018. (live)', o:['lived','live','living','lives'], a:0, w:'<code>lived</code>.', f:'has <u>lived</u>'},
        {p:'They have ___ to Makkah. (be)', o:['been','was','were','being'], a:0, w:'التصريف الثالث لـ <code>be</code> ← <code>been</code>.', f:'have <u>been</u>'},
        {p:'How long ___ you played football?', o:['have','did','do','are'], a:0, w:'التامّ ← <code>have</code>.', f:'How long <u>have</u> you played…?'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['I','have','lived','here','since','five','years','.'], bad:4, fix:'for', w:'المدّة ← <code>for</code>.', f:'…<u>for</u> five years'},
        {words:['She','has','study','English','for','years','.'], bad:2, fix:'studied', w:'التصريف الثالث ← <code>studied</code>.', f:'has <u>studied</u>'},
        {words:['I','have','been','there','two','years','ago','.'], bad:2, fix:'was (ماضٍ)', w:'<code>ago</code> ← ماضٍ بسيط.', f:'I <u>was</u> there two years ago.'},
        {words:['He','has','had','it','since','a','month','.'], bad:4, fix:'for', w:'المدّة ← <code>for</code>.', f:'…<u>for</u> a month'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['I','have','lived','here','since','2018','.'], w:'<code>since</code> للبداية.', f:'I have lived here since 2018.'},
        {sol:['How','long','have','you','studied','English','?'], w:'<code>How long + have</code>.', f:'How long have you studied English?'},
        {sol:['She','has','worn','glasses','for','years','.'], w:'<code>for</code> للمدّة.', f:'She has worn glasses for years.'},
        {sol:['I','was','there','two','years','ago','.'], w:'<code>ago</code> ← ماضٍ بسيط.', f:'I was there two years ago.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'___ you ever been to France?', ask:'اختر', o:['Have','Did'], a:0, w:'التامّ.', f:'<u>Have</u>'},
        {p:'I ___ there in 2010.', ask:'الزمن', o:['was','have been'], a:0, w:'زمنٌ محدّد ← ماضٍ.', f:'<u>was</u>'},
        {p:'She has ___ here since 2018.', ask:'التصريف', o:['lived','live'], a:0, w:'الثالث.', f:'<u>lived</u>'},
        {p:'for/since 15 years:', ask:'اختر', o:['for','since'], a:0, w:'مدّة ← <code>for</code>.', f:'<u>for</u>'},
        {p:'for/since last June:', ask:'اختر', o:['since','for'], a:0, w:'بداية ← <code>since</code>.', f:'<u>since</u>'},
        {p:'They have ___ to Makkah.', ask:'التصريف', o:['been','was'], a:0, w:'<code>been</code>.', f:'<u>been</u>'},
        {sol:['I','have','lived','here','since','2018','.'], w:'<code>since</code>.', f:'I have lived here since 2018.'},
        {p:'How long ___ you played?', ask:'اختر', o:['have','did'], a:0, w:'التامّ.', f:'<u>have</u>'},
        {p:'We ___ the car in 2019.', ask:'الزمن', o:['bought','have bought'], a:0, w:'زمنٌ محدّد.', f:'<u>bought</u>'}
      ]}
    ]
  };
})();
