/* ============================================================
   Lesson: Partitives & Too/Enough
   English · Super Goal 2 · Unit 5 (Is There Any Ice Cream?) · صفحة ٤٤
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U5_TOOENOUGH'] = {
    id:'EN_SG2_U5_TOOENOUGH',
    title:'Partitives & Too/Enough',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'a cup of… · too / enough',
      intro:'<b>الكمياتُ الجزئية</b> (partitives) تحدّد كميةً من غير المعدود: <code>a bottle of juice, a cup of coffee, a glass of water, a piece of cake</code>. و<code>too</code> (أكثر من اللازم) توضع قبل الصفة: <code>too salty</code>؛ و<code>too much</code> مع غير المعدود و<code>too many</code> مع المعدود. و<code>enough</code> (كافٍ) تأتي بعد الصفة وقبل الاسم: <code>salty enough / enough eggs</code>.',
      table:[['a cup of / a glass of','كوب من / كأس من'],['too + adjective','too salty (مالحٌ جدًّا)'],['too much / too many','مع غير المعدود / المعدود'],['enough','بعد الصفة، قبل الاسم']],
      trick:'<code>too</code> = زائدٌ عن الحدّ (سلبيّ)، و<code>enough</code> = يكفي. <code>too much</code> لغير المعدود و<code>too many</code> للمعدود.'
    },
    stages:[
      { type:'choice', name:'الكمية الجزئية', hint:'اختر الوحدة المناسبة', qs:[
        {p:'a ___ of coffee', ask:'اختر', o:['cup','glass','piece'], a:0, w:'القهوة بالكوب ← <code>cup</code>.', f:'a <u>cup</u> of coffee.'},
        {p:'a ___ of water', ask:'اختر', o:['glass','cup','slice'], a:0, w:'الماء بالكأس ← <code>glass</code>.', f:'a <u>glass</u> of water.'},
        {p:'a ___ of cake', ask:'اختر', o:['piece','cup','bottle'], a:0, w:'الكيك بالقطعة ← <code>piece</code>.', f:'a <u>piece</u> of cake.'},
        {p:'a ___ of juice', ask:'اختر', o:['bottle','piece','slice'], a:0, w:'العصير بالزجاجة ← <code>bottle</code>.', f:'a <u>bottle</u> of juice.'}
      ]},
      { type:'gap', name:'too أم enough؟', hint:'too زائد · enough كافٍ', qs:[
        {p:'I can’t drink this. It’s ___ hot. (زائد)', o:['too','enough'], a:0, w:'زائدٌ عن الحدّ ← <code>too</code>.', f:'It’s <u>too</u> hot.'},
        {p:'Don’t add salt. It’s salty ___. (كافٍ)', o:['enough','too'], a:0, w:'<code>enough</code> بعد الصفة.', f:'salty <u>enough</u>.'},
        {p:'We have ___ eggs to make a cake. (كافٍ)', o:['enough','too'], a:0, w:'<code>enough</code> قبل الاسم.', f:'<u>enough</u> eggs.'},
        {p:'The soup is ___ salty to eat. (زائد)', o:['too','enough'], a:0, w:'<code>too</code> قبل الصفة.', f:'<u>too</u> salty.'},
        {p:'It’s ___ cold outside. (زائد)', o:['too','enough'], a:0, w:'<code>too cold</code>.', f:'<u>too</u> cold.'}
      ]},
      { type:'choice', name:'too much أم too many؟', hint:'much لغير المعدود · many للمعدود', qs:[
        {p:'There is ___ salt in the soup.', ask:'اختر', o:['too much','too many'], a:0, w:'<code>salt</code> غير معدود ← <code>too much</code>.', f:'<u>too much</u> salt.'},
        {p:'There are ___ carrots in the soup.', ask:'اختر', o:['too many','too much'], a:0, w:'<code>carrots</code> معدود ← <code>too many</code>.', f:'<u>too many</u> carrots.'},
        {p:'I ate ___ sugar.', ask:'اختر', o:['too much','too many'], a:0, w:'<code>sugar</code> غير معدود.', f:'<u>too much</u> sugar.'},
        {p:'There are ___ people here.', ask:'اختر', o:['too many','too much'], a:0, w:'<code>people</code> معدود.', f:'<u>too many</u> people.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['The','soup','is','enough','salty','.'], bad:3, fix:'salty enough', w:'<code>enough</code> تأتي بعد الصفة.', f:'The soup is <u>salty enough</u>.'},
        {words:['There','is','too','many','salt','.'], bad:3, fix:'much', w:'<code>salt</code> غير معدود ← <code>too much</code>.', f:'too <u>much</u> salt.'},
        {words:['a','cup','of','water','.'], bad:1, fix:'glass', w:'الماء بالكأس ← <code>glass</code>.', f:'a <u>glass</u> of water.'},
        {words:['It’s','enough','hot','to','drink','.'], bad:1, fix:'too', w:'الحرارةُ الزائدة ← <code>too hot</code>.', f:'It’s <u>too</u> hot to drink.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['I’d','like','a','cup','of','coffee','.'], w:'كمية جزئية.', f:'I’d like a cup of coffee.'},
        {sol:['The','soup','is','too','salty','.'], w:'too + الصفة.', f:'The soup is too salty.'},
        {sol:['We','have','enough','eggs','.'], w:'enough + الاسم.', f:'We have enough eggs.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'a ___ of coffee', ask:'اختر', o:['cup','glass'], a:0, w:'كوب.', f:'a <u>cup</u>.'},
        {p:'It’s ___ hot to drink.', ask:'اختر', o:['too','enough'], a:0, w:'زائد.', f:'<u>too</u> hot.'},
        {p:'It’s salty ___.', ask:'اختر', o:['enough','too'], a:0, w:'كافٍ (بعد الصفة).', f:'salty <u>enough</u>.'},
        {p:'There is ___ salt.', ask:'اختر', o:['too much','too many'], a:0, w:'غير معدود.', f:'<u>too much</u>.'},
        {p:'There are ___ carrots.', ask:'اختر', o:['too many','too much'], a:0, w:'معدود.', f:'<u>too many</u>.'},
        {sol:['We','have','enough','eggs','.'], w:'enough + الاسم.', f:'We have enough eggs.'},
        {p:'a ___ of water', ask:'اختر', o:['glass','piece'], a:0, w:'كأس.', f:'a <u>glass</u>.'},
        {p:'We have ___ eggs to bake. (كافٍ)', ask:'اختر', o:['enough','too'], a:0, w:'enough.', f:'<u>enough</u> eggs.'},
        {p:'a ___ of cake', ask:'اختر', o:['piece','bottle'], a:0, w:'قطعة.', f:'a <u>piece</u>.'}
      ]}
    ]
  };
})();
