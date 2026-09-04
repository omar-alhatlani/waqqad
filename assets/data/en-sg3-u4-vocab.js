/* ============================================================
   Lesson: Vocabulary — Foods, Meals & Cooking
   English · Super Goal 3 · Unit 4 (What Do I Need to Buy?) · صفحات ٣٨–٤٢
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U4_VOCAB'] = {
    id:'EN_SG3_U4_VOCAB',
    title:'Vocabulary — Foods & Cooking',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'Food Groups & Ways to Cook',
      intro:'مجموعاتُ الطعام: <code>meat</code> (beef, lamb, chicken)، <code>seafood</code> (salmon, shrimp)، <code>dairy products</code> (butter, cheese, milk, yogurt)، <code>grains</code> (rice, bread, cereal)، <code>condiments</code> (salt, pepper, oil). وطرقُ الطهي: <code>roast</code> يشوي بالفرن، <code>fry</code> يقلي، <code>grill</code> يشوي، <code>boil</code> يسلق، <code>bake</code> يخبز، <code>steam</code> يطهو بالبخار.',
      table:[['dairy products','منتجات الألبان'],['grains','الحبوب'],['fry','يقلي'],['boil','يسلق'],['bake','يخبز (كعك/خبز)']],
      trick:'الوجبةُ ثلاثةُ أقسام: <code>appetizer</code> مُقبِّلات، <code>main dish</code> طبقٌ رئيس، <code>dessert</code> حلوى. و<code>ingredients</code> = المكوّنات.'
    },
    stages:[
      { type:'choice', name:'مجموعات الطعام', hint:'صنّف الطعام', qs:[
        {p:'Salmon and shrimp are:', o:['seafood','fruit','grains'], a:0, w:'مأكولاتٌ بحرية.', f:'<u>seafood</u>'},
        {p:'Butter, cheese, and milk are:', o:['dairy products','vegetables','meat'], a:0, w:'منتجات الألبان.', f:'<u>dairy products</u>'},
        {p:'Rice, bread, and cereal are:', o:['grains','dairy','seafood'], a:0, w:'الحبوب.', f:'<u>grains</u>'},
        {p:'Beef, lamb, and chicken are:', o:['meat','fruit','oils'], a:0, w:'لحوم.', f:'<u>meat</u>'},
        {p:'Salt and pepper are:', o:['condiments','fruit','dairy'], a:0, w:'توابل.', f:'<u>condiments</u>'}
      ]},
      { type:'choice', name:'طرق الطهي', hint:'كيف نطهو؟', qs:[
        {p:'To ___ chicken means to cook it in the oven.', o:['roast','boil','freeze'], a:0, w:'يشوي بالفرن.', f:'<u>roast</u>'},
        {p:'To ___ eggs means to cook them in hot oil.', o:['fry','bake','boil'], a:0, w:'يقلي.', f:'<u>fry</u>'},
        {p:'To ___ vegetables means to cook them in hot water.', o:['boil','grill','roast'], a:0, w:'يسلق.', f:'<u>boil</u>'},
        {p:'To ___ a cake means to cook it in the oven.', o:['bake','fry','grill'], a:0, w:'يخبز.', f:'<u>bake</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'For the ___, maybe I’ll make a salad. (البداية)', o:['appetizer','dessert','drink'], a:0, w:'المُقبِّلات.', f:'the <u>appetizer</u>'},
        {p:'For the main ___, I’m making chicken and rice.', o:['dish','road','game'], a:0, w:'الطبق الرئيس.', f:'main <u>dish</u>'},
        {p:'I have nothing for ___. Maybe I’ll bake cakes.', o:['dessert','desert','breakfast'], a:0, w:'الحلوى.', f:'<u>dessert</u>'},
        {p:'I think I have the other ___.', o:['ingredients','instruments','instructions'], a:0, w:'المكوّنات.', f:'<u>ingredients</u>'},
        {p:'Why don’t you ___ the burgers?', o:['grill','freeze','melt'], a:0, w:'يشوي.', f:'<u>grill</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['Milk','and','cheese','are','grains','.'], bad:4, fix:'dairy products', w:'منتجات الألبان.', f:'…are <u>dairy products</u>.'},
        {words:['I','will','bake','the','eggs','in','oil','.'], bad:2, fix:'fry', w:'في الزيت ← <code>fry</code>.', f:'I will <u>fry</u> the eggs'},
        {words:['For','dessert',',','I','make','a','salad','.'], bad:1, fix:'the appetizer', w:'السلطة مُقبِّلات لا حلوى.', f:'For the <u>appetizer</u>…'},
        {words:['Salmon','is','a','kind','of','meat','.'], bad:5, fix:'seafood', w:'السلمون مأكولاتٌ بحرية.', f:'…kind of <u>seafood</u>.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'salmon & shrimp =', ask:'المجموعة', o:['seafood','grains'], a:0, w:'بحرية.', f:'<u>seafood</u>'},
        {p:'butter & cheese =', ask:'المجموعة', o:['dairy products','meat'], a:0, w:'ألبان.', f:'<u>dairy products</u>'},
        {p:'rice & bread =', ask:'المجموعة', o:['grains','dairy'], a:0, w:'حبوب.', f:'<u>grains</u>'},
        {p:'cook in the oven =', ask:'الطريقة', o:['roast','boil'], a:0, w:'يشوي بالفرن.', f:'<u>roast</u>'},
        {p:'cook in hot oil =', ask:'الطريقة', o:['fry','boil'], a:0, w:'يقلي.', f:'<u>fry</u>'},
        {p:'cook in hot water =', ask:'الطريقة', o:['boil','bake'], a:0, w:'يسلق.', f:'<u>boil</u>'},
        {p:'first course =', ask:'اختر', o:['appetizer','dessert'], a:0, w:'مُقبِّلات.', f:'<u>appetizer</u>'},
        {p:'sweet last course =', ask:'اختر', o:['dessert','main dish'], a:0, w:'حلوى.', f:'<u>dessert</u>'},
        {p:'the things you cook with =', ask:'اختر', o:['ingredients','instructions'], a:0, w:'المكوّنات.', f:'<u>ingredients</u>'}
      ]}
    ]
  };
})();
