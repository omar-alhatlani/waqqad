/* ============================================================
   درس: Vocabulary — Chores
   الإنجليزية · الرابع الابتدائي · ف١ · Top Goal 1 · Unit 2 (Chores)
   مفرداتُ الوحدة (حقائقُ معجميّة)، والجملُ التوضيحيّة مؤلَّفةٌ أصالةً.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG1_U2_VOCAB'] = {
    id:'EN_TG1_U2_VOCAB',
    title:'Vocabulary — Chores',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'الأعمالُ المنزليّة',
      intro:'مفرداتٌ عن <b>الأعمالِ المنزليّة</b> التي نتعاونُ عليها في البيت. أتقِنْها لتتحدّثَ عن مساعدتِك لأهلك.',
      table:[['make the bed','يُرتّبُ السرير'],['set the table · clear the table','يُجهّزُ المائدة · يرفعُ المائدة'],['wash the dishes','يغسلُ الأطباق'],['sweep the floor','يكنُسُ الأرض'],['take out the trash','يُخرِجُ القمامة'],['feed the animals · cut the grass','يُطعِمُ الحيوانات · يجزُّ العشب']],
      examples:['I <code>make the bed</code> before school. (أُرتّبُ سريري قبلَ المدرسة.)','My brother <code>takes out the trash</code> every evening. (يُخرِجُ القمامةَ كلَّ مساء.)'],
      trick:'اربطِ الفعلَ بالمكان: <span class="en">sweep the floor</span> للأرض، و<span class="en">wash the dishes</span> للمطبخ، و<span class="en">make the bed</span> لغرفةِ النوم.'
    },
    stages:[
      { type:'choice', name:'العبارة ← المعنى', hint:'اختر المعنى العربيّ', qs:[
        {p:'make the bed', ask:'المعنى؟', o:['يُرتّبُ السرير','يغسلُ الأطباق'], a:0, w:'<code>make the bed</code> = يُرتّبُ السرير.', f:'← <u>يُرتّبُ السرير</u>'},
        {p:'wash the dishes', ask:'المعنى؟', o:['يغسلُ الأطباق','يكنُسُ الأرض'], a:0, w:'<code>wash the dishes</code>.', f:'← <u>يغسلُ الأطباق</u>'},
        {p:'take out the trash', ask:'المعنى؟', o:['يُخرِجُ القمامة','يُجهّزُ المائدة'], a:0, w:'<code>take out the trash</code>.', f:'← <u>يُخرِجُ القمامة</u>'},
        {p:'sweep the floor', ask:'المعنى؟', o:['يكنُسُ الأرض','يجزُّ العشب'], a:0, w:'<code>sweep the floor</code>.', f:'← <u>يكنُسُ الأرض</u>'},
        {p:'feed the animals', ask:'المعنى؟', o:['يُطعِمُ الحيوانات','يرفعُ المائدة'], a:0, w:'<code>feed the animals</code>.', f:'← <u>يُطعِمُ الحيوانات</u>'}
      ]},
      { type:'choice', name:'المعنى ← العبارة', hint:'اختر العبارة الإنجليزية', qs:[
        {p:'يُجهّزُ المائدة', ask:'العبارة؟', o:['set the table','clear the table'], a:0, w:'التجهيزُ ← <code>set the table</code>.', f:'← <u>set the table</u>'},
        {p:'يجزُّ العشب', ask:'العبارة؟', o:['cut the grass','sweep the floor'], a:0, w:'<code>cut the grass</code>.', f:'← <u>cut the grass</u>'},
        {p:'يكنُسُ الأرض', ask:'العبارة؟', o:['sweep the floor','wash the dishes'], a:0, w:'<code>sweep the floor</code>.', f:'← <u>sweep the floor</u>'},
        {p:'يرفعُ المائدة (بعد الأكل)', ask:'العبارة؟', o:['clear the table','set the table'], a:0, w:'الرفعُ ← <code>clear the table</code>.', f:'← <u>clear the table</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر العبارة المناسبة', qs:[
        {p:'After dinner, I ___ the dishes in the kitchen.', o:['wash','make','sweep'], a:0, w:'الأطباقُ تُغسَل ← <code>wash</code>.', f:'I <u>wash</u> the dishes ...'},
        {p:'The floor is dusty. Please ___ it.', o:['sweep','feed','set'], a:0, w:'الأرضُ تُكنَس ← <code>sweep</code>.', f:'Please <u>sweep</u> it.'},
        {p:'The trash can is full. ___ it out.', o:['take','make','cut'], a:0, w:'نُخرِجُ القمامة ← <code>take out</code>.', f:'<u>Take</u> it out.'},
        {p:'I ___ my bed every morning.', o:['make','wash','cut'], a:0, w:'ترتيبُ السرير ← <code>make the bed</code>.', f:'I <u>make</u> my bed ...'}
      ]},
      { type:'error', name:'الكلمة الغريبة', hint:'انقر ما لا ينتمي', qs:[
        {words:['wash','sweep','feed','table'], bad:3, fix:'مثال: cut', w:'<code>table</code> اسمٌ، والبقيّةُ أفعالُ أعمالٍ منزليّة.', f:'wash · sweep · feed · <u>table</u> (اسم)'},
        {words:['the bed','the dishes','the floor','celebrate'], bad:3, fix:'مثال: the trash', w:'<code>celebrate</code> ليس عملًا منزليًّا.', f:'... · <u>celebrate</u> (ليست عملًا منزليًّا)'},
        {words:['make','set','clear','strong'], bad:3, fix:'مثال: sweep', w:'<code>strong</code> صفةٌ، والبقيّةُ أفعال.', f:'make · set · clear · <u>strong</u> (صفة)'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'wash the dishes', ask:'المعنى؟', o:['يغسلُ الأطباق','يكنُسُ الأرض'], a:0, w:'يغسلُ الأطباق.', f:'← <u>يغسلُ الأطباق</u>'},
        {p:'يُرتّبُ السرير', ask:'العبارة؟', o:['make the bed','set the table'], a:0, w:'make the bed.', f:'← <u>make the bed</u>'},
        {p:'The grass is long. We must ___ it.', ask:'اختر', o:['cut','wash'], a:0, w:'نجزُّ العشب ← cut.', f:'... <u>cut</u> it.'},
        {p:'take out the trash', ask:'المعنى؟', o:['يُخرِجُ القمامة','يُطعِمُ الحيوانات'], a:0, w:'يُخرِجُ القمامة.', f:'← <u>يُخرِجُ القمامة</u>'},
        {p:'يُطعِمُ الحيوانات', ask:'العبارة؟', o:['feed the animals','cut the grass'], a:0, w:'feed the animals.', f:'← <u>feed the animals</u>'}
      ]}
    ]
  };
})();
