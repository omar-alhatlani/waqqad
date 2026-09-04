/* ============================================================
   Lesson: Vocabulary — Hobbies & Pastimes
   English · Super Goal 2 · Unit 4 (Favorite Pastimes) · صفحة ٢٦
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U4_VOCAB'] = {
    id:'EN_SG2_U4_VOCAB',
    title:'Vocabulary — Hobbies & Pastimes',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'Hobbies · Free-time activities',
      intro:'مفرداتُ الهوايات ووقت الفراغ: <code>hobby / pastime</code> هواية، <code>free time</code> وقت الفراغ، <code>work out</code> يتمرّن، <code>go climbing / swimming</code> يذهب للتسلّق/السباحة، <code>collect</code> يجمع، <code>relaxing</code> مريح. نعبّر عن التفضيل بـ <code>My favorite pastime is…</code>',
      table:[['hobby / pastime','هواية / تسلية'],['free time','وقت الفراغ'],['work out','يتمرّن'],['go swimming/climbing','يذهب للسباحة/التسلّق']],
      trick:'استعمل <code>go + verb-ing</code> لأنشطة الترفيه: <code>go swimming, go shopping, go climbing</code>. و<code>favorite</code> = المفضّل.'
    },
    stages:[
      { type:'choice', name:'المعنى بالعربية', hint:'اختر المعنى الصحيح', qs:[
        {p:'hobby', ask:'المعنى', o:['هواية','عمل','واجب'], a:0, w:'<code>hobby</code> = هواية.', f:'hobby = هواية.'},
        {p:'free time', ask:'المعنى', o:['وقت الفراغ','وقت العمل','وقت النوم'], a:0, w:'<code>free time</code> = وقت الفراغ.', f:'free time = وقت الفراغ.'},
        {p:'work out', ask:'المعنى', o:['يتمرّن','يعمل خارجًا','يستريح'], a:0, w:'<code>work out</code> = يتمرّن.', f:'work out = يتمرّن.'},
        {p:'collect', ask:'المعنى', o:['يجمع','يبيع','يرمي'], a:0, w:'<code>collect</code> = يجمع.', f:'collect = يجمع.'},
        {p:'relaxing', ask:'المعنى', o:['مريح','مُتعِب','ممِلّ'], a:0, w:'<code>relaxing</code> = مريح.', f:'relaxing = مريح.'}
      ]},
      { type:'gap', name:'go + verb-ing', hint:'أنشطة الترفيه بـ go + ing', qs:[
        {p:'On weekends I go ___. (swim)', o:['swimming','to swim','swim'], a:0, w:'<code>go swimming</code>.', f:'go <u>swimming</u>.'},
        {p:'They go ___ in the mountains. (climb)', o:['climbing','to climb','climb'], a:0, w:'<code>go climbing</code>.', f:'go <u>climbing</u>.'},
        {p:'She goes ___ at the mall. (shop)', o:['shopping','to shop','shop'], a:0, w:'<code>go shopping</code>.', f:'go <u>shopping</u>.'},
        {p:'My favorite ___ is reading. (تسلية)', o:['pastime','work','test'], a:0, w:'<code>pastime</code> = تسلية.', f:'My favorite <u>pastime</u>…'},
        {p:'Painting is very ___. (مريح)', o:['relaxing','boring','difficult'], a:0, w:'<code>relaxing</code>.', f:'very <u>relaxing</u>.'}
      ]},
      { type:'choice', name:'الهواية المناسبة', hint:'طابِق النشاط', qs:[
        {p:'You collect stamps. Your hobby is:', ask:'اختر', o:['collecting stamps','cooking','driving'], a:0, w:'جمعُ الطوابع.', f:'collecting stamps.'},
        {p:'You like water. A good activity is:', ask:'اختر', o:['swimming','reading','painting'], a:0, w:'السباحة.', f:'swimming.'},
        {p:'You like heights and mountains:', ask:'اختر', o:['climbing','cooking','shopping'], a:0, w:'التسلّق.', f:'climbing.'},
        {p:'You keep fit at the gym. You:', ask:'اختر', o:['work out','sleep','eat'], a:0, w:'تتمرّن.', f:'work out.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['I','go','swim','on','Fridays','.'], bad:2, fix:'swimming', w:'<code>go swimming</code>.', f:'I go <u>swimming</u>.'},
        {words:['My','favorite','pastime','are','reading','.'], bad:3, fix:'is', w:'المفرد ← <code>is</code>.', f:'My favorite pastime <u>is</u> reading.'},
        {words:['She','go','shopping','.'], bad:1, fix:'goes', w:'مفرد ← <code>goes</code>.', f:'She <u>goes</u> shopping.'},
        {words:['Painting','is','very','boring',' (المقصود: مريح)','.'], bad:3, fix:'relaxing', w:'مريح ← <code>relaxing</code>.', f:'very <u>relaxing</u>.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['I','go','swimming','on','weekends','.'], w:'go + ing.', f:'I go swimming on weekends.'},
        {sol:['My','favorite','pastime','is','reading','.'], w:'التفضيل.', f:'My favorite pastime is reading.'},
        {sol:['They','go','climbing','together','.'], w:'go + ing.', f:'They go climbing together.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'hobby', ask:'المعنى', o:['هواية','واجب'], a:0, w:'هواية.', f:'hobby = هواية.'},
        {p:'I go ___ on Fridays. (swim)', ask:'اختر', o:['swimming','to swim'], a:0, w:'go + ing.', f:'<u>swimming</u>.'},
        {p:'work out', ask:'المعنى', o:['يتمرّن','ينام'], a:0, w:'يتمرّن.', f:'work out = يتمرّن.'},
        {p:'She ___ shopping.', ask:'اختر', o:['goes','go'], a:0, w:'مفرد.', f:'<u>goes</u>.'},
        {p:'free time', ask:'المعنى', o:['وقت الفراغ','وقت العمل'], a:0, w:'وقت الفراغ.', f:'free time = وقت الفراغ.'},
        {sol:['I','go','swimming','on','weekends','.'], w:'go + ing.', f:'I go swimming on weekends.'},
        {p:'Painting is very ___.', ask:'اختر', o:['relaxing','boring'], a:0, w:'مريح.', f:'<u>relaxing</u>.'},
        {p:'collect', ask:'المعنى', o:['يجمع','يبيع'], a:0, w:'يجمع.', f:'collect = يجمع.'},
        {p:'My favorite pastime ___ reading.', ask:'اختر', o:['is','are'], a:0, w:'مفرد.', f:'<u>is</u>.'}
      ]}
    ]
  };
})();
