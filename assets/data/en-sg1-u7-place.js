/* ============================================================
   Lesson: Grammar — live + Prepositions of place & Directions
   English · Super Goal 1 · Unit 7 (Where Do You Live?) · صفحة ٥٨
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1).
   lang:'en' → المحتوى إنجليزيّ LTR، والشرح بالعربية.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U7_PLACE'] = {
    id:'EN_SG1_U7_PLACE',
    title:'Grammar — حروف المكان و live',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'Prepositions of Place',
      intro:'نقول أين نعيش: <code>live in</code> (المدينة)، <code>live on</code> (الطابق/الشارع). وحروف المكان: <code>across from</code> مقابل، <code>between</code> بين، <code>next to</code> بجانب، <code>near</code> قرب، <code>far from</code> بعيد عن. والاتجاهات: <code>Turn left/right</code>, <code>Go straight</code>.',
      table:[['live in / on','I live in Jeddah · on the 3rd floor'],['across from · next to','مقابل · بجانب'],['between · near · far from','بين · قرب · بعيد عن'],['directions','Turn left/right · Go straight']],
      examples:['I live in Jeddah. I live on First Avenue.','The park is across from the school.','The bank is between the post office and the restaurant.','Turn left. Go straight.'],
      trick:'<code>across from</code> = في الجهة المقابلة، <code>next to</code> = ملاصق، <code>between</code> = بين شيئين، و<code>near</code> ≠ <code>far from</code>.'
    },
    stages:[
      { type:'choice', name:'حرف المكان', hint:'أين يقع المكان؟', qs:[
        {p:'The park is ___ the school.  (مقابل)',          ask:'اختر الحرف', o:['across from','next to','between','near'], a:0, w:'مقابل ← <code>across from</code>.', f:'across from the school'},
        {p:'The pharmacy is ___ the bookstore.  (بجانب)',    ask:'اختر الحرف', o:['next to','across from','far from','on'], a:0, w:'بجانب ← <code>next to</code>.', f:'next to the bookstore'},
        {p:'The bank is ___ the post office and the restaurant.', ask:'اختر الحرف (بين)', o:['between','next to','near','on'], a:0, w:'بين شيئين ← <code>between</code>.', f:'between the post office and the restaurant'},
        {p:'The museum is ___ the hotel.  (قريب)',           ask:'اختر الحرف', o:['near','far from','between','across from'], a:0, w:'قريب ← <code>near</code>.', f:'near the hotel'},
        {p:'The airport is ___ town.  (بعيد)',               ask:'اختر الحرف', o:['far from','near','next to','between'], a:0, w:'بعيد عن ← <code>far from</code>.', f:'far from town'},
        {p:'The bus stop is ___ the corner.',                ask:'اختر الحرف', o:['on','in','between','near'], a:0, w:'على الناصية ← <code>on the corner</code>.', f:'on the corner'}
      ]},
      { type:'gap', name:'live in / on', hint:'in للمدينة · on للطابق/الشارع', qs:[
        {p:'I live ___ Jeddah.',           ask:'أكمل (مدينة)', o:['in','on','at','to'], a:0, w:'المدينة ← <code>in</code>.', f:'I live <u>in</u> Jeddah.'},
        {p:'I live ___ the third floor.',   ask:'أكمل (طابق)', o:['on','in','at','to'], a:0, w:'الطابق ← <code>on</code>.', f:'I live <u>on</u> the third floor.'},
        {p:'I live ___ First Avenue.',      ask:'أكمل (شارع)', o:['on','in','at','to'], a:0, w:'الشارع ← <code>on</code>.', f:'I live <u>on</u> First Avenue.'},
        {p:'She lives ___ Riyadh.',         ask:'أكمل (مدينة)', o:['in','on','at','to'], a:0, w:'المدينة ← <code>in</code>.', f:'She lives <u>in</u> Riyadh.'},
        {p:'They live ___ the second floor.', ask:'أكمل (طابق)', o:['on','in','at','to'], a:0, w:'الطابق ← <code>on</code>.', f:'They live <u>on</u> the second floor.'},
        {p:'Where ___ you live?',            ask:'أكمل السؤال', o:['do','are','is','does'], a:0, w:'السؤال بـ <code>do</code>.', f:'Where <u>do</u> you live?'}
      ]},
      { type:'choice', name:'الاتجاهات', hint:'اختر الأمر الصحيح', qs:[
        {p:'The park is on your left. →',           ask:'الاتجاه', o:['Turn left','Turn right','Go up'], a:0, w:'يسار ← <code>Turn left</code>.', f:'Turn left.'},
        {p:'Keep going forward, no turning. →',      ask:'الاتجاه', o:['Go straight','Turn left','Go down'], a:0, w:'مستقيمًا ← <code>Go straight</code>.', f:'Go straight.'},
        {p:'The exit is on your right. →',           ask:'الاتجاه', o:['Turn right','Turn left','Go up'], a:0, w:'يمين ← <code>Turn right</code>.', f:'Turn right.'},
        {p:'The office is on a higher floor. →',      ask:'الاتجاه', o:['Go up','Go down','Turn left'], a:0, w:'اصعد ← <code>Go up</code>.', f:'Go up.'},
        {p:'The garage is on a lower floor. →',       ask:'الاتجاه', o:['Go down','Go up','Turn right'], a:0, w:'انزل ← <code>Go down</code>.', f:'Go down.'},
        {p:'Do not turn; continue ahead. →',          ask:'الاتجاه', o:['Go straight','Turn right','Go down'], a:0, w:'مستقيمًا ← <code>Go straight</code>.', f:'Go straight.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['I','live','in','Jeddah','.'],                    w:'المدينة بـ <code>in</code>.', f:'I live in Jeddah.'},
        {sol:['The','park','is','across','from','the','school','.'], w:'حرف المكان <code>across from</code>.', f:'The park is across from the school.'},
        {sol:['Turn','left','and','go','straight','.'],         w:'الاتجاهات.', f:'Turn left and go straight.'},
        {sol:['Where','do','you','live','?'],                   w:'السؤال عن السكن.', f:'Where do you live?'},
        {sol:['The','bank','is','next','to','the','hotel','.'], w:'حرف المكان <code>next to</code>.', f:'The bank is next to the hotel.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'The pharmacy is ___ the bookstore.  (بجانب)', ask:'اختر الحرف', o:['next to','across from'], a:0, w:'بجانب ← <code>next to</code>.', f:'next to the bookstore'},
        {p:'I live ___ the third floor.', ask:'أكمل (طابق)', o:['on','in','at','to'], a:0, w:'الطابق ← <code>on</code>.', f:'<u>on</u> the third floor.'},
        {p:'The park is on your left. →', ask:'الاتجاه', o:['Turn left','Go straight'], a:0, w:'يسار ← <code>Turn left</code>.', f:'Turn left.'},
        {p:'The airport is ___ town.  (بعيد)', ask:'اختر الحرف', o:['far from','near','next to','between'], a:0, w:'بعيد عن ← <code>far from</code>.', f:'far from town'},
        {p:'Where ___ you live?', ask:'أكمل السؤال', o:['do','are','is','does'], a:0, w:'بـ <code>do</code>.', f:'Where <u>do</u> you live?'},
        {sol:['I','live','in','Jeddah','.'], w:'المدينة بـ <code>in</code>.', f:'I live in Jeddah.'},
        {p:'The bank is ___ the post office and the restaurant.', ask:'اختر الحرف (بين)', o:['between','next to','near','on'], a:0, w:'بين شيئين ← <code>between</code>.', f:'between ... and ...'},
        {p:'Keep going forward, no turning. →', ask:'الاتجاه', o:['Go straight','Turn right'], a:0, w:'مستقيمًا ← <code>Go straight</code>.', f:'Go straight.'},
        {sol:['Where','do','you','live','?'], w:'السؤال عن السكن.', f:'Where do you live?'}
      ]}
    ]
  };
})();
