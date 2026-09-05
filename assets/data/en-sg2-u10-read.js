/* ============================================================
   Lesson: Reading — The Best Place to Shop—and Be!
   English · Super Goal 2 · Unit 10 (It's a Bargain!) · صفحة ٩١
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U10_READ'] = {
    id:'EN_SG2_U10_READ',
    title:'Reading — The Best Place to Shop',
    lang:'en',
    rule:{
      tag:'Reading',
      title:'The Best Place to Shop—and Be!',
      intro:'اقرأْ عن التسوّق في أسواق الرياض التقليدية والتسوّق الإلكترونيّ، ثمّ أجِب.',
      examples:[
        'Riyadh has some of the world’s most beautiful modern shopping malls, with designer boutiques and brand names.',
        'But for real bargains, you head for the traditional souqs. Haraj is a secondhand market where you can find brand-name items for a fraction of the price.',
        'Visitors go to the souqs for more than shopping: you can see and meet an amazing mixture of people from around the world. Many feel the cultural experience is the main attraction.',
        'Others prefer online shopping. It’s convenient, quick, and easy — you can compare prices in a few minutes.',
        'Many e-stores guarantee the lowest price and make exchanges or refund your money. You should choose well-known, secure websites.'
      ],
      trick:'مقارنة: الأسواق التقليدية (صفقاتٌ وتجربةٌ ثقافية) مقابل التسوّق الإلكترونيّ (سريعٌ ومريح، مع ضمان السعر والاسترداد — اختر مواقع آمنة).'
    },
    stages:[
      { type:'choice', name:'الأسواق التقليدية', hint:'الرياض والأسواق', qs:[
        {p:'For real bargains in Riyadh, you go to the:', o:['traditional souqs','airport','banks'], a:0, w:'الأسواق التقليدية.', f:'traditional <u>souqs</u>'},
        {p:'“Haraj” is a ___ market.', o:['secondhand','fish','car only'], a:0, w:'سوق مستعمل.', f:'a <u>secondhand</u> market'},
        {p:'You can find brand names for a ___ of the price.', o:['fraction','double','triple'], a:0, w:'جزءٌ يسير.', f:'a <u>fraction</u>'},
        {p:'Many feel the main attraction of the souqs is the:', o:['cultural experience','free food','fast cars'], a:0, w:'التجربة الثقافية.', f:'<u>cultural experience</u>'}
      ]},
      { type:'choice', name:'التسوّق الإلكترونيّ', hint:'المزايا', qs:[
        {p:'Online shopping is convenient, quick, and ___.', o:['easy','slow','expensive'], a:0, w:'سهل.', f:'<u>easy</u>'},
        {p:'Online you can quickly compare ___.', o:['prices','people','weather'], a:0, w:'الأسعار.', f:'<u>prices</u>'},
        {p:'Many e-stores guarantee the ___ price.', o:['lowest','highest','wrong'], a:0, w:'الأقلّ.', f:'the <u>lowest</u> price'},
        {p:'To stay safe online, you should choose ___ websites.', o:['secure','random','unknown'], a:0, w:'آمنة.', f:'<u>secure</u> websites'}
      ]},
      { type:'choice', name:'صحّ أم خطأ', hint:'True / False', qs:[
        {p:'T/F: Riyadh has beautiful modern malls.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'T/F: The souqs are only for shopping.', o:['False','True'], a:0, w:'بل تجربةٌ ثقافيةٌ أيضًا.', f:'<u>False</u>'},
        {p:'T/F: Online stores can refund your money.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'T/F: You should use unknown websites online.', o:['False','True'], a:0, w:'بل مواقع آمنة معروفة.', f:'<u>False</u>'}
      ]},
      { type:'gap', name:'أكمل من النصّ', hint:'اختر الكلمة المناسبة', qs:[
        {p:'For bargains, head to the traditional ___.', o:['souqs','malls only','banks'], a:0, w:'الأسواق.', f:'<u>souqs</u>'},
        {p:'Online shopping is quick and ___.', o:['easy','hard','slow'], a:0, w:'سهل.', f:'<u>easy</u>'},
        {p:'E-stores can ___ your money.', o:['refund','keep','lose'], a:0, w:'يستردّون.', f:'<u>refund</u>'},
        {p:'Choose ___ websites to stay safe.', o:['secure','strange','free only'], a:0, w:'آمنة.', f:'<u>secure</u>'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'For bargains, go to the ___.', ask:'اختر', o:['souqs','airport'], a:0, w:'الأسواق.', f:'<u>souqs</u>'},
        {p:'Haraj is a ___ market.', ask:'أكمل', o:['secondhand','fish'], a:0, w:'مستعمل.', f:'<u>secondhand</u>'},
        {p:'Main attraction of souqs =', ask:'اختر', o:['cultural experience','free food'], a:0, w:'التجربة الثقافية.', f:'<u>cultural experience</u>'},
        {p:'Online shopping is quick and ___.', ask:'أكمل', o:['easy','slow'], a:0, w:'سهل.', f:'<u>easy</u>'},
        {p:'You can compare ___ online.', ask:'أكمل', o:['prices','people'], a:0, w:'الأسعار.', f:'<u>prices</u>'},
        {p:'E-stores guarantee the ___ price.', ask:'اختر', o:['lowest','highest'], a:0, w:'الأقلّ.', f:'<u>lowest</u>'},
        {p:'Choose ___ websites.', ask:'أكمل', o:['secure','unknown'], a:0, w:'آمنة.', f:'<u>secure</u>'},
        {p:'T/F: The souqs are only for shopping.', ask:'صحّ/خطأ', o:['False','True'], a:0, w:'لا.', f:'<u>False</u>'},
        {p:'Riyadh has modern ___.', ask:'أكمل', o:['malls','farms'], a:0, w:'مراكز تسوّق.', f:'<u>malls</u>'}
      ]}
    ]
  };
})();
