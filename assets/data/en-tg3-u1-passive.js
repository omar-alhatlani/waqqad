/* ============================================================
   درس: Grammar — Present Passive (المبنيّ للمجهول)
   الإنجليزية · السادس الابتدائي · ف١ · Top Goal 3 · Unit 1 (Living Things)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب).
   ============================================================ */
(function(){
  var WHY_IS  = 'الفاعلُ مفردٌ ← نستعمل <code>is</code> مع التصريف الثالث للفعل (V3).';
  var WHY_ARE = 'الفاعلُ جمعٌ ← نستعمل <code>are</code> مع التصريف الثالث للفعل (V3).';

  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG3_U1_PASSIVE'] = {
    id:'EN_TG3_U1_PASSIVE',
    title:'Grammar — Present Passive',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'المبنيّ للمجهول في المضارع',
      intro:'نستعملُ <b>المبنيَّ للمجهول</b> (Present Passive) حين نهتمُّ بمَن <b>وقعَ عليه</b> الفعلُ لا بمَن قام به. ويمكنُ ذكرُ الفاعل بعد <code>by</code>. القاعدة: الفاعلُ <b>المفرد</b> يأخذ <span class="tok-focus">is</span>، وإذا انتهى الفاعلُ بـ <span class="tok-plural">s</span> الجمع فهو <b>جمعٌ</b> ويأخذ <span class="tok-focus">are</span> — ثم التصريفُ الثالث للفعل (V3).',
      formula:'object + <span class="tok-focus">is</span> / <span class="tok-focus">are</span> + V3&nbsp;&nbsp;( + by + doer )',
      table:[['المفرد','Honey <span class="tok-focus">is</span> made.'],['الجمع','Nest<span class="tok-plural">s</span> <span class="tok-focus">are</span> built.'],['الفاعل (اختياري)','made <code>by</code> bee<span class="tok-plural">s</span>'],['المعلوم ← المجهول','Bee<span class="tok-plural">s</span> make honey → Honey <span class="tok-focus">is</span> made by bee<span class="tok-plural">s</span>.']],
      examples:['Active: Bees make honey.  →  Passive: Honey <span class="tok-focus">is</span> made by bee<span class="tok-plural">s</span>.','Active: Eagles build nests.  →  Passive: Nest<span class="tok-plural">s</span> <span class="tok-focus">are</span> built by eagle<span class="tok-plural">s</span>.'],
      trick:'اسألْ: على مَن وقعَ الفعل؟ اجعلْه أوّلَ الجملة، ثم <span class="tok-focus">is</span>/<span class="tok-focus">are</span> + V3، ثم <span class="en">by</span> + الفاعل. فاعلٌ مفردٌ ← <span class="tok-focus">is</span> ، وفاعلٌ ينتهي بـ <span class="tok-plural">s</span> ← <span class="tok-focus">are</span>.'
    },
    stages:[
      { type:'choice', name:'is أم are؟', hint:'انظر إلى الفاعل: مفردٌ أم جمع؟', qs:[
        {p:'Honey ___ made by bees.', o:['is','are'], a:0, w:WHY_IS, f:'Honey <u>is</u> made by bees.'},
        {p:'Nests ___ built by birds.', o:['are','is'], a:0, w:WHY_ARE, f:'Nests <u>are</u> built by birds.'},
        {p:'Milk ___ produced by camels.', o:['is','are'], a:0, w:WHY_IS, f:'Milk <u>is</u> produced by camels.'},
        {p:'Insects ___ eaten by frogs.', o:['are','is'], a:0, w:WHY_ARE, f:'Insects <u>are</u> eaten by frogs.'},
        {p:'The pond ___ cleaned every week.', o:['is','are'], a:0, w:WHY_IS, f:'The pond <u>is</u> cleaned every week.'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'is/are + التصريف الثالث', qs:[
        {p:'Wheat ___ grown by farmers.', o:['is','are','am'], a:0, w:WHY_IS, f:'Wheat <u>is</u> grown by farmers.'},
        {p:'Eggs ___ laid by the swan.', o:['are','is','am'], a:0, w:WHY_ARE, f:'Eggs <u>are</u> laid by the swan.'},
        {p:'The dinosaur ___ seen only in books.', o:['is','are','am'], a:0, w:WHY_IS, f:'The dinosaur <u>is</u> seen only in books.'},
        {p:'Butterflies ___ not seen in winter.', o:['are','is','am'], a:0, w:WHY_ARE, f:'Butterflies <u>are</u> not seen in winter.'},
        {p:'The garden ___ watered every morning.', o:['is','are','am'], a:0, w:WHY_IS, f:'The garden <u>is</u> watered every morning.'}
      ]},
      { type:'choice', name:'من المعلوم إلى المجهول', hint:'اجعل ما وقع عليه الفعل أوّلَ الجملة', qs:[
        {p:'Active: Bees make honey.', ask:'اختر الجملة المبنيّة للمجهول', o:['Honey is made by bees.','Honey are made by bees.'], a:0, w:'مفردٌ (Honey) ← <code>is made</code>.', f:'<u>Honey is made by bees.</u>'},
        {p:'Active: Eagles build nests.', ask:'اختر الصواب', o:['Nests are built by eagles.','Nests is built by eagles.'], a:0, w:'جمعٌ (Nests) ← <code>are built</code>.', f:'<u>Nests are built by eagles.</u>'},
        {p:'Active: The farmer feeds the camel.', ask:'اختر الصواب', o:['The camel is fed by the farmer.','The camel are fed by the farmer.'], a:0, w:'مفردٌ (The camel) ← <code>is fed</code>.', f:'<u>The camel is fed by the farmer.</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['Honey','are','made','by','bees','.'], bad:1, fix:'is', w:'<code>Honey</code> مفرد ← <code>is</code>.', f:'Honey <u>is</u> made by bees.'},
        {words:['Nests','is','built','by','birds','.'], bad:1, fix:'are', w:'<code>Nests</code> جمع ← <code>are</code>.', f:'Nests <u>are</u> built by birds.'},
        {words:['The','pond','is','clean','every','week','.'], bad:3, fix:'cleaned', w:'المبنيّ للمجهول يحتاج التصريفَ الثالث ← <code>cleaned</code>.', f:'The pond is <u>cleaned</u> every week.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['Honey','is','made','by','bees','.'], w:'مفعولٌ + <code>is</code> + V3 + <code>by</code> + فاعل.', f:'Honey is made by bees.'},
        {sol:['Nests','are','built','by','eagles','.'], w:'جمعٌ ← <code>are built</code>.', f:'Nests are built by eagles.'},
        {sol:['Milk','is','produced','by','camels','.'], w:'مفردٌ ← <code>is produced</code>.', f:'Milk is produced by camels.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'Honey ___ made by bees.', ask:'اختر الصواب', o:['is','are'], a:0, w:WHY_IS, f:'Honey <u>is</u> made by bees.'},
        {p:'Nests ___ built by birds.', ask:'اختر الصواب', o:['are','is'], a:0, w:WHY_ARE, f:'Nests <u>are</u> built by birds.'},
        {p:'Active: Eagles build nests.', ask:'اختر المبنيّ للمجهول', o:['Nests are built by eagles.','Nests is built by eagles.'], a:0, w:'جمعٌ ← <code>are built</code>.', f:'<u>Nests are built by eagles.</u>'},
        {p:'The pond ___ cleaned every week.', ask:'اختر الصواب', o:['is','are'], a:0, w:WHY_IS, f:'The pond <u>is</u> cleaned every week.'},
        {p:'المبنيّ للمجهول يتكوّن من:', ask:'اختر', o:['is/are + V3','do/does + V1'], a:0, w:'<code>is/are + التصريف الثالث</code>.', f:'← <u>is/are + V3</u>'},
        {p:'Butterflies ___ not seen in winter.', ask:'اختر الصواب', o:['are','is'], a:0, w:WHY_ARE, f:'Butterflies <u>are</u> not seen in winter.'},
        {p:'الفاعلُ في المبنيّ للمجهول يُذكَر بعد:', ask:'اختر', o:['by','to'], a:0, w:'نذكرُ الفاعلَ بعد <code>by</code>.', f:'← <u>by</u>'}
      ]}
    ]
  };
})();
