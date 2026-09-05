/* ============================================================
   Lesson: Vocabulary — Clothing & Colors
   English · Super Goal 1 · Unit 13 (What Are You Going to Wear There?) · صفحات ١١٨–١١٩
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U13_VOCAB'] = {
    id:'EN_SG1_U13_VOCAB',
    title:'Vocabulary — Clothing & Colors',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'Clothes, Colors & Weather',
      intro:'ملابس: <code>T-shirt</code> قميص، <code>jeans</code> جينز، <code>shorts</code> شورت، <code>sweater</code> كنزة، <code>dress</code> فستان، <code>hat</code> قبعة، <code>coat</code> معطف، <code>socks</code> جوارب. وألوان: <code>red, blue, green, black, white</code>. ونصف الملابس بالطقس: <code>casual</code> غير رسميّ، <code>formal</code> رسميّ، <code>warm</code> دافئ، <code>light</code> خفيف.',
      table:[['casual','غير رسميّ (T-shirt, jeans)'],['formal','رسميّ (a suit, a dress)'],['warm clothes','ملابس دافئة (sweater, coat)'],['light clothes','ملابس خفيفة (T-shirt, shorts)']],
      trick:'حين نصف عدّة صفاتٍ للملبس، يأتي الترتيب: الرأي ثمّ اللون ثمّ الخامة: <code>comfortable blue leather shoes</code>.'
    },
    stages:[
      { type:'choice', name:'الملابس', hint:'اختر القطعة الصحيحة', qs:[
        {p:'You wear ___ on your legs (blue denim).', o:['jeans','a hat','socks'], a:0, w:'الجينز.', f:'<u>jeans</u>'},
        {p:'You wear a warm ___ in winter.', o:['sweater','T-shirt','shorts'], a:0, w:'كنزة.', f:'<u>sweater</u>'},
        {p:'You wear ___ on your head.', o:['a hat','shoes','a coat'], a:0, w:'قبعة.', f:'<u>a hat</u>'},
        {p:'You wear ___ on your feet inside shoes.', o:['socks','a dress','jeans'], a:0, w:'جوارب.', f:'<u>socks</u>'},
        {p:'A formal piece of clothing for men is a ___.', o:['suit','shorts','T-shirt'], a:0, w:'بذلة.', f:'<u>suit</u>'}
      ]},
      { type:'choice', name:'رسميّ أم غير رسميّ', hint:'formal / casual', qs:[
        {p:'T-shirts, jeans, and shorts are ___ clothes.', o:['casual','formal','warm'], a:0, w:'غير رسميّة.', f:'<u>casual</u>'},
        {p:'A suit and a formal dress are ___ clothes.', o:['formal','casual','light'], a:0, w:'رسميّة.', f:'<u>formal</u>'},
        {p:'For hot weather, you wear ___ clothes.', o:['light','warm','heavy'], a:0, w:'خفيفة.', f:'<u>light</u>'},
        {p:'For cold weather, you wear ___ clothes.', o:['warm','light','thin'], a:0, w:'دافئة.', f:'<u>warm</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'It’s hot, so I need ___ clothes: T-shirts and shorts.', o:['casual','warm','formal'], a:0, w:'غير رسميّة/خفيفة.', f:'<u>casual</u>'},
        {p:'I’m going to a wedding, so I need a ___ dress.', o:['formal','casual','sport'], a:0, w:'رسميّ.', f:'<u>formal</u>'},
        {p:'It’s cold in Norway. Pack your ___ and warm socks.', o:['sweaters','shorts','sandals'], a:0, w:'كنزات.', f:'<u>sweaters</u>'},
        {p:'My favorite color for clothes is ___.', o:['blue','tall','loud'], a:0, w:'أزرق (لونٌ).', f:'<u>blue</u>'},
        {p:'She has small round gold ___.', o:['earrings','jeans','socks'], a:0, w:'أقراط.', f:'<u>earrings</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['For','hot','weather',',','wear','warm','clothes','.'], bad:5, fix:'light', w:'الحرّ ← ملابس خفيفة.', f:'…wear <u>light</u> clothes.'},
        {words:['A','suit','is','a','casual','piece','.'], bad:4, fix:'formal', w:'البذلة رسميّة.', f:'…a <u>formal</u> piece.'},
        {words:['I','wear','a','hat','on','my','feet','.'], bad:6, fix:'head', w:'القبعة على الرأس.', f:'…on my <u>head</u>.'},
        {words:['She','has','a','blue','comfortable','leather','shoes','.'], bad:3, fix:'ترتيب: comfortable blue', w:'الرأي قبل اللون.', f:'<u>comfortable blue leather</u> shoes'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'blue denim on legs =', ask:'اختر', o:['jeans','a hat'], a:0, w:'جينز.', f:'<u>jeans</u>'},
        {p:'warm winter clothing =', ask:'اختر', o:['sweater','shorts'], a:0, w:'كنزة.', f:'<u>sweater</u>'},
        {p:'worn on the head =', ask:'اختر', o:['a hat','socks'], a:0, w:'قبعة.', f:'<u>a hat</u>'},
        {p:'T-shirts & jeans =', ask:'اختر', o:['casual','formal'], a:0, w:'غير رسميّة.', f:'<u>casual</u>'},
        {p:'a suit & a dress =', ask:'اختر', o:['formal','casual'], a:0, w:'رسميّة.', f:'<u>formal</u>'},
        {p:'hot weather → ___ clothes', ask:'اختر', o:['light','warm'], a:0, w:'خفيفة.', f:'<u>light</u>'},
        {p:'cold weather → ___ clothes', ask:'اختر', o:['warm','light'], a:0, w:'دافئة.', f:'<u>warm</u>'},
        {p:'a color =', ask:'اختر', o:['blue','tall'], a:0, w:'أزرق.', f:'<u>blue</u>'},
        {p:'worn inside shoes =', ask:'اختر', o:['socks','a hat'], a:0, w:'جوارب.', f:'<u>socks</u>'}
      ]}
    ]
  };
})();
