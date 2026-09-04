/* ============================================================
   Lesson: Expressions of Quantity + something/anything/nothing
   English · Super Goal 3 · Unit 4 (What Do I Need to Buy?) · صفحة ٤٠
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U4_QTY'] = {
    id:'EN_SG3_U4_QTY',
    title:'Expressions of Quantity',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'A few / A little / Much / Many / Enough',
      intro:'مع الأسماء <b>المعدودة</b> نستعمل <code>a few</code> و<code>many</code> و<code>How many</code>. ومع <b>غير المعدودة</b> نستعمل <code>a little</code> و<code>much</code> و<code>How much</code>. و<code>a lot of</code> و<code>enough</code> للنوعين معًا. وضمائر: <code>something</code> (مثبت)، <code>anything</code> (نفي/سؤال)، <code>nothing</code> (تعني النفي بلا <code>not</code>).',
      table:[['Count','a few, many, How many'],['Noncount','a little, much, How much'],['Both','a lot of, enough'],['Pronouns','something / anything / nothing']],
      trick:'<code>many/few</code> للمعدود، و<code>much/little</code> لغير المعدود. و<code>nothing</code> نفيٌ في ذاتها فلا نضيف <code>not</code>: <code>I have nothing</code> = <code>I don’t have anything</code>.'
    },
    stages:[
      { type:'choice', name:'معدود أم غير معدود', hint:'few/many أم little/much؟', qs:[
        {p:'I eat a ___ carrots.', o:['few','little','much','any'], a:0, w:'<code>carrots</code> معدود ← <code>a few</code>.', f:'a <u>few</u> carrots'},
        {p:'I eat a ___ seafood.', o:['little','few','many','a lot'], a:0, w:'<code>seafood</code> غير معدود ← <code>a little</code>.', f:'a <u>little</u> seafood'},
        {p:'How ___ bananas do you eat?', o:['many','much','few','little'], a:0, w:'معدود ← <code>How many</code>.', f:'How <u>many</u> bananas?'},
        {p:'How ___ milk do you drink?', o:['much','many','few','a lot'], a:0, w:'غير معدود ← <code>How much</code>.', f:'How <u>much</u> milk?'}
      ]},
      { type:'choice', name:'much / many / enough', hint:'النفي والكفاية', qs:[
        {p:'I don’t eat ___ bread.', o:['much','many','few','a few'], a:0, w:'<code>bread</code> غير معدود ← <code>much</code>.', f:'…<u>much</u> bread'},
        {p:'I don’t eat ___ vegetables.', o:['many','much','a little','a bit'], a:0, w:'<code>vegetables</code> معدود ← <code>many</code>.', f:'…<u>many</u> vegetables'},
        {p:'I don’t eat ___ fruit. (كفاية)', o:['enough','many','few','little'], a:0, w:'<code>enough</code> = كفاية.', f:'…<u>enough</u> fruit'},
        {p:'I eat ___ eggs. (كثير)', o:['a lot of','much','a little','a bit of'], a:0, w:'<code>a lot of</code> للنوعين.', f:'…<u>a lot of</u> eggs'}
      ]},
      { type:'choice', name:'something / anything / nothing', hint:'مثبت/نفي/سؤال', qs:[
        {p:'You’re a good cook. You always have ___ delicious.', o:['something','anything','nothing'], a:0, w:'مثبت ← <code>something</code>.', f:'<u>something</u> delicious'},
        {p:'The fridge is empty. There is ___ to eat.', o:['nothing','something','anywhere'], a:0, w:'خالٍ ← <code>nothing</code>.', f:'<u>nothing</u> to eat'},
        {p:'I haven’t made ___ special for supper.', o:['anything','something','nothing'], a:0, w:'مع النفي ← <code>anything</code>.', f:'…<u>anything</u> special'},
        {p:'Aren’t you having ___ for breakfast?', o:['anything','nothing','someone'], a:0, w:'في السؤال ← <code>anything</code>.', f:'…<u>anything</u> for breakfast?'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['How','much','bananas','do','you','eat','?'], bad:1, fix:'many', w:'<code>bananas</code> معدود ← <code>many</code>.', f:'How <u>many</u> bananas?'},
        {words:['I','don’t','drink','many','milk','.'], bad:3, fix:'much', w:'<code>milk</code> غير معدود ← <code>much</code>.', f:'…<u>much</u> milk'},
        {words:['I','don’t','have','nothing','.'], bad:3, fix:'anything', w:'مع النفي ← <code>anything</code> (لا نفيان).', f:'I don’t have <u>anything</u>.'},
        {words:['I','eat','a','little','carrots','.'], bad:3, fix:'few', w:'<code>carrots</code> معدود ← <code>a few</code>.', f:'a <u>few</u> carrots'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['How','many','eggs','do','you','need','?'], w:'معدود ← <code>How many</code>.', f:'How many eggs do you need?'},
        {sol:['There','is','a','little','milk','left','.'], w:'غير معدود ← <code>a little</code>.', f:'There is a little milk left.'},
        {sol:['I','don’t','have','anything','for','lunch','.'], w:'مع النفي ← <code>anything</code>.', f:'I don’t have anything for lunch.'},
        {sol:['We','don’t','have','enough','bread','.'], w:'<code>enough</code> = كفاية.', f:'We don’t have enough bread.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'a ___ carrots (معدود)', ask:'اختر', o:['few','little'], a:0, w:'<code>a few</code>.', f:'a <u>few</u>'},
        {p:'a ___ milk (غير معدود)', ask:'اختر', o:['little','few'], a:0, w:'<code>a little</code>.', f:'a <u>little</u>'},
        {p:'How ___ bananas?', ask:'اختر', o:['many','much'], a:0, w:'معدود.', f:'<u>many</u>'},
        {p:'How ___ milk?', ask:'اختر', o:['much','many'], a:0, w:'غير معدود.', f:'<u>much</u>'},
        {p:'The fridge is empty; there is ___ to eat.', ask:'اختر', o:['nothing','something'], a:0, w:'<code>nothing</code>.', f:'<u>nothing</u>'},
        {p:'I haven’t made ___ special.', ask:'اختر', o:['anything','something'], a:0, w:'مع النفي.', f:'<u>anything</u>'},
        {p:'I don’t eat ___ fruit. (كفاية)', ask:'اختر', o:['enough','many'], a:0, w:'<code>enough</code>.', f:'<u>enough</u>'},
        {sol:['How','many','eggs','are','there','?'], w:'معدود.', f:'How many eggs are there?'},
        {p:'You always have ___ delicious.', ask:'اختر', o:['something','anything'], a:0, w:'مثبت.', f:'<u>something</u>'}
      ]}
    ]
  };
})();
