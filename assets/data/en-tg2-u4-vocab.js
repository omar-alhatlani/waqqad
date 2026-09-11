/* ============================================================
   درس: Vocabulary — Glorious Food (الطعام والطبخ)
   الإنجليزية · الخامس الابتدائي · ف١ · Top Goal 2 · Unit 4 (Glorious Food)
   مفرداتُ الوحدة (حقائقُ معجميّة)، والجملُ التوضيحيّة مؤلَّفةٌ أصالةً.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG2_U4_VOCAB'] = {
    id:'EN_TG2_U4_VOCAB',
    title:'Vocabulary — Glorious Food',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'كلماتُ الطعام والطبخ',
      intro:'مفرداتٌ عن <b>الطعام</b> و<b>الطبخ</b> وأفعالِه، تحتاجُها لوصف الوصفات وعادات الأكل.',
      table:[['flour · sugar · butter · honey','دقيق · سكّر · زبدة · عسل'],['recipe · ingredients','وصفة · مكوّنات'],['cookies · snack · yogurt','بسكويت · وجبة خفيفة · زبادي'],['mix · pour · stir · taste','يخلط · يسكب · يقلّب · يتذوّق']],
      examples:['Follow the <code>recipe</code> and mix the <code>ingredients</code>. (اتبعِ الوصفةَ واخلطِ المكوّنات.)','<code>Pour</code> the milk and <code>stir</code> it. (اسكبِ الحليبَ وقلّبْه.)'],
      trick:'اربطِ الفعلَ بالمطبخ: <span class="en">mix</span> يخلط، و<span class="en">pour</span> يسكب، و<span class="en">stir</span> يقلّب، و<span class="en">taste</span> يتذوّق.'
    },
    stages:[
      { type:'choice', name:'الكلمة ← المعنى', hint:'اختر المعنى العربيّ', qs:[
        {p:'flour', ask:'المعنى؟', o:['دقيق','سكّر'], a:0, w:'<code>flour</code> = دقيق.', f:'flour ← <u>دقيق</u>'},
        {p:'recipe', ask:'المعنى؟', o:['وصفة','مكوّن'], a:0, w:'<code>recipe</code> = وصفة.', f:'recipe ← <u>وصفة</u>'},
        {p:'stir', ask:'المعنى؟', o:['يقلّب','يقطع'], a:0, w:'<code>stir</code> = يقلّب.', f:'stir ← <u>يقلّب</u>'},
        {p:'honey', ask:'المعنى؟', o:['عسل','زبدة'], a:0, w:'<code>honey</code> = عسل.', f:'honey ← <u>عسل</u>'}
      ]},
      { type:'choice', name:'المعنى ← الكلمة', hint:'اختر الكلمة الإنجليزية', qs:[
        {p:'مكوّنات', ask:'الكلمة؟', o:['ingredients','recipe'], a:0, w:'مكوّنات = <code>ingredients</code>.', f:'← <u>ingredients</u>'},
        {p:'يخلط', ask:'الكلمة؟', o:['mix','pour'], a:0, w:'يخلط = <code>mix</code>.', f:'← <u>mix</u>'},
        {p:'سكّر', ask:'الكلمة؟', o:['sugar','flour'], a:0, w:'سكّر = <code>sugar</code>.', f:'← <u>sugar</u>'},
        {p:'يتذوّق', ask:'الكلمة؟', o:['taste','stir'], a:0, w:'يتذوّق = <code>taste</code>.', f:'← <u>taste</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'First, ___ the flour and sugar.', o:['mix','taste','pour'], a:0, w:'اخلطْ ← <code>mix</code>.', f:'... <u>mix</u> the flour ...'},
        {p:'Follow the ___ to make a cake.', o:['recipe','ingredient','snack'], a:0, w:'الوصفة ← <code>recipe</code>.', f:'... the <u>recipe</u> ...'},
        {p:'___ the milk into the bowl.', o:['Pour','Taste','Mix'], a:0, w:'اسكبْ ← <code>Pour</code>.', f:'<u>Pour</u> the milk ...'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'flour', ask:'المعنى؟', o:['دقيق','عسل'], a:0, w:'دقيق.', f:'← <u>دقيق</u>'},
        {p:'مكوّنات', ask:'الكلمة؟', o:['ingredients','recipe'], a:0, w:'ingredients.', f:'← <u>ingredients</u>'},
        {p:'First, ___ the flour and sugar.', ask:'اختر', o:['mix','taste'], a:0, w:'mix.', f:'← <u>mix</u>'},
        {p:'stir', ask:'المعنى؟', o:['يقلّب','يسكب'], a:0, w:'يقلّب.', f:'← <u>يقلّب</u>'},
        {p:'وصفة', ask:'الكلمة؟', o:['recipe','snack'], a:0, w:'recipe.', f:'← <u>recipe</u>'}
      ]}
    ]
  };
})();
