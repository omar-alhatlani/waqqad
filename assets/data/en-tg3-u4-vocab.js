/* ============================================================
   درس: Vocabulary — Professions (المهن والفضاء والطوارئ)
   الإنجليزية · السادس الابتدائي · ف١ · Top Goal 3 · Unit 4 (Professions)
   مفرداتُ الوحدة (حقائقُ معجميّة)، والجملُ التوضيحيّة مؤلَّفةٌ أصالةً.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG3_U4_VOCAB'] = {
    id:'EN_TG3_U4_VOCAB',
    title:'Vocabulary — Professions',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'كلماتُ المهن والفضاء والطوارئ',
      intro:'مفرداتٌ عن <b>المهن الحديثة</b> و<b>الفضاء</b> و<b>الطوارئ</b>، تحتاجُها للحديث عن الوظائف.',
      table:[['astronaut · rocket · satellite','رائد فضاء · صاروخ · قمر صناعيّ'],['planet · space · Earth','كوكب · فضاء · الأرض'],['firefighter · fire truck · ambulance','رجل إطفاء · شاحنة إطفاء · إسعاف'],['police officer · fire station','ضابط شرطة · محطّة إطفاء']],
      examples:['The <code>astronaut</code> traveled to another <code>planet</code>. (سافرَ رائدُ الفضاء إلى كوكبٍ آخر.)','The <code>firefighter</code> came in the <code>fire truck</code>. (جاءَ رجلُ الإطفاء بشاحنة الإطفاء.)'],
      trick:'اربطِ الكلمةَ بمجالها: <span class="en">astronaut · rocket · planet</span> للفضاء، و<span class="en">firefighter · ambulance</span> للطوارئ.'
    },
    stages:[
      { type:'choice', name:'الكلمة ← المعنى', hint:'اختر المعنى العربيّ', qs:[
        {p:'astronaut', ask:'المعنى؟', o:['رائد فضاء','ضابط شرطة'], a:0, w:'<code>astronaut</code> = رائد فضاء.', f:'astronaut ← <u>رائد فضاء</u>'},
        {p:'satellite', ask:'المعنى؟', o:['قمر صناعيّ','صاروخ'], a:0, w:'<code>satellite</code> = قمر صناعيّ.', f:'satellite ← <u>قمر صناعيّ</u>'},
        {p:'ambulance', ask:'المعنى؟', o:['سيّارة إسعاف','شاحنة إطفاء'], a:0, w:'<code>ambulance</code> = إسعاف.', f:'ambulance ← <u>إسعاف</u>'},
        {p:'planet', ask:'المعنى؟', o:['كوكب','قمر'], a:0, w:'<code>planet</code> = كوكب.', f:'planet ← <u>كوكب</u>'}
      ]},
      { type:'choice', name:'المعنى ← الكلمة', hint:'اختر الكلمة الإنجليزية', qs:[
        {p:'صاروخ', ask:'الكلمة؟', o:['rocket','planet'], a:0, w:'صاروخ = <code>rocket</code>.', f:'صاروخ ← <u>rocket</u>'},
        {p:'رجل إطفاء', ask:'الكلمة؟', o:['firefighter','astronaut'], a:0, w:'رجل إطفاء = <code>firefighter</code>.', f:'رجل إطفاء ← <u>firefighter</u>'},
        {p:'الأرض', ask:'الكلمة؟', o:['Earth','space'], a:0, w:'الأرض = <code>Earth</code>.', f:'الأرض ← <u>Earth</u>'},
        {p:'ضابط شرطة', ask:'الكلمة؟', o:['police officer','firefighter'], a:0, w:'ضابط شرطة = <code>police officer</code>.', f:'ضابط شرطة ← <u>police officer</u>'}
      ]},
      { type:'choice', name:'فضاءٌ أم طوارئ؟', hint:'صنّف الكلمة', qs:[
        {p:'rocket', ask:'اختر', o:['الفضاء','الطوارئ'], a:0, w:'<code>rocket</code> صاروخُ فضاء.', f:'rocket ← <u>الفضاء</u>'},
        {p:'ambulance', ask:'اختر', o:['الطوارئ','الفضاء'], a:0, w:'<code>ambulance</code> للطوارئ.', f:'ambulance ← <u>الطوارئ</u>'},
        {p:'satellite', ask:'اختر', o:['الفضاء','الطوارئ'], a:0, w:'<code>satellite</code> قمرٌ صناعيّ.', f:'satellite ← <u>الفضاء</u>'},
        {p:'fire truck', ask:'اختر', o:['الطوارئ','الفضاء'], a:0, w:'<code>fire truck</code> للطوارئ.', f:'fire truck ← <u>الطوارئ</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'The ___ flew to the moon.', o:['astronaut','firefighter','officer'], a:0, w:'رائدُ الفضاء ← <code>astronaut</code>.', f:'The <u>astronaut</u> ...'},
        {p:'Call the ___ if there is a fire.', o:['firefighter','astronaut','satellite'], a:0, w:'رجلُ الإطفاء ← <code>firefighter</code>.', f:'... the <u>firefighter</u> ...'},
        {p:'A ___ moves around the Earth in space.', o:['satellite','ambulance','stadium'], a:0, w:'قمرٌ صناعيّ ← <code>satellite</code>.', f:'A <u>satellite</u> ...'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'satellite', ask:'المعنى؟', o:['قمر صناعيّ','كوكب'], a:0, w:'قمر صناعيّ.', f:'satellite ← <u>قمر صناعيّ</u>'},
        {p:'رجل إطفاء', ask:'الكلمة؟', o:['firefighter','astronaut'], a:0, w:'firefighter.', f:'← <u>firefighter</u>'},
        {p:'rocket', ask:'اختر', o:['الفضاء','الطوارئ'], a:0, w:'الفضاء.', f:'rocket ← <u>الفضاء</u>'},
        {p:'The ___ flew to the moon.', ask:'اختر', o:['astronaut','officer'], a:0, w:'astronaut.', f:'The <u>astronaut</u> ...'},
        {p:'ambulance', ask:'اختر', o:['الطوارئ','الفضاء'], a:0, w:'الطوارئ.', f:'ambulance ← <u>الطوارئ</u>'}
      ]}
    ]
  };
})();
