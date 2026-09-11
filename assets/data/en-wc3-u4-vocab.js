/* ============================================================
   درس: Vocabulary — Chores
   الإنجليزية · الثالث الابتدائي · ف١ · We Can! 3 · Unit 4 (Chores)
   مفرداتُ الوحدة (حقائقُ معجميّة)، والجملُ التوضيحيّة مؤلَّفةٌ أصالةً.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_WC3_U4_VOCAB'] = {
    id:'EN_WC3_U4_VOCAB',
    title:'Vocabulary — Chores',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'الأعمالُ المنزليّة',
      intro:'مفرداتٌ عن <b>الأعمالِ المنزليّة</b> التي نساعدُ بها في البيت. أتقِنْها لتتحدّثَ عن مساعدتِك لأهلك.',
      table:[['wash the dishes','يغسلُ الأطباق'],['set the table','يُجهّزُ المائدة'],['make the bed','يُرتّبُ السرير'],['take out the trash','يُخرِجُ القمامة'],['vacuum the floor','يكنُسُ بالمكنسة'],['feed the fish','يُطعِمُ السمك']],
      examples:['I <code>wash the dishes</code> after dinner. (أغسلُ الأطباقَ بعدَ العشاء.)','My brother <code>takes out the trash</code>. (يُخرِجُ القمامة.)'],
      trick:'اربطِ العملَ بمكانِه: <span class="en">wash the dishes</span> في المطبخ، و<span class="en">make the bed</span> في غرفةِ النوم.'
    },
    stages:[
      { type:'choice', name:'العبارة ← المعنى', hint:'اختر المعنى العربيّ', qs:[
        {p:'wash the dishes', ask:'المعنى؟', o:['يغسلُ الأطباق','يُرتّبُ السرير'], a:0, w:'<code>wash the dishes</code>.', f:'← <u>يغسلُ الأطباق</u>'},
        {p:'make the bed', ask:'المعنى؟', o:['يُرتّبُ السرير','يكنُسُ'], a:0, w:'<code>make the bed</code>.', f:'← <u>يُرتّبُ السرير</u>'},
        {p:'take out the trash', ask:'المعنى؟', o:['يُخرِجُ القمامة','يُجهّزُ المائدة'], a:0, w:'<code>take out the trash</code>.', f:'← <u>يُخرِجُ القمامة</u>'},
        {p:'feed the fish', ask:'المعنى؟', o:['يُطعِمُ السمك','يغسلُ الأطباق'], a:0, w:'<code>feed the fish</code>.', f:'← <u>يُطعِمُ السمك</u>'},
        {p:'vacuum the floor', ask:'المعنى؟', o:['يكنُسُ بالمكنسة','يُرتّبُ السرير'], a:0, w:'<code>vacuum the floor</code>.', f:'← <u>يكنُسُ بالمكنسة</u>'}
      ]},
      { type:'choice', name:'المعنى ← العبارة', hint:'اختر العبارة الإنجليزية', qs:[
        {p:'يُجهّزُ المائدة', ask:'العبارة؟', o:['set the table','wash the dishes'], a:0, w:'<code>set the table</code>.', f:'← <u>set the table</u>'},
        {p:'يُخرِجُ القمامة', ask:'العبارة؟', o:['take out the trash','make the bed'], a:0, w:'<code>take out the trash</code>.', f:'← <u>take out the trash</u>'},
        {p:'يُطعِمُ السمك', ask:'العبارة؟', o:['feed the fish','set the table'], a:0, w:'<code>feed the fish</code>.', f:'← <u>feed the fish</u>'},
        {p:'يغسلُ الأطباق', ask:'العبارة؟', o:['wash the dishes','vacuum the floor'], a:0, w:'<code>wash the dishes</code>.', f:'← <u>wash the dishes</u>'},
        {p:'يُرتّبُ غرفتَه', ask:'العبارة؟', o:['clean up the room','feed the fish'], a:0, w:'<code>clean up the room</code>.', f:'← <u>clean up the room</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر العبارة المناسبة', qs:[
        {p:'After eating, I ___ the dishes.', o:['wash','make','feed'], a:0, w:'الأطباقُ تُغسَل ← <code>wash</code>.', f:'I <u>wash</u> the dishes.'},
        {p:'Every morning I ___ my bed.', o:['make','wash','vacuum'], a:0, w:'ترتيبُ السرير ← <code>make the bed</code>.', f:'I <u>make</u> my bed.'},
        {p:'The trash is full. Please ___ it out.', o:['take','set','feed'], a:0, w:'نُخرِجُ القمامة ← <code>take out</code>.', f:'Please <u>take</u> it out.'},
        {p:'I ___ the fish once a day.', o:['feed','wash','make'], a:0, w:'نُطعِمُ السمك ← <code>feed</code>.', f:'I <u>feed</u> the fish ...'}
      ]},
      { type:'error', name:'الكلمة الغريبة', hint:'انقر ما لا ينتمي', qs:[
        {words:['wash','set','feed','table'], bad:3, fix:'مثال: vacuum', w:'<code>table</code> اسمٌ، والبقيّةُ أفعالٌ منزليّة.', f:'... · <u>table</u> (اسم)'},
        {words:['the dishes','the bed','the trash','football'], bad:3, fix:'مثال: the floor', w:'<code>football</code> رياضةٌ لا عملٌ منزليّ.', f:'... · <u>football</u>'},
        {words:['wash','make','take out','dolphin'], bad:3, fix:'مثال: feed', w:'<code>dolphin</code> حيوانٌ، والبقيّةُ أفعال.', f:'... · <u>dolphin</u> (اسم)'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'set the table', ask:'المعنى؟', o:['يُجهّزُ المائدة','يغسلُ الأطباق'], a:0, w:'يُجهّزُ المائدة.', f:'← <u>يُجهّزُ المائدة</u>'},
        {p:'يُخرِجُ القمامة', ask:'العبارة؟', o:['take out the trash','make the bed'], a:0, w:'take out the trash.', f:'← <u>take out the trash</u>'},
        {p:'I ___ the dishes.', ask:'اختر', o:['wash','make'], a:0, w:'الأطباقُ تُغسَل.', f:'I <u>wash</u> the dishes.'},
        {p:'feed the fish', ask:'المعنى؟', o:['يُطعِمُ السمك','يكنُس'], a:0, w:'يُطعِمُ السمك.', f:'← <u>يُطعِمُ السمك</u>'},
        {p:'يُرتّبُ السرير', ask:'العبارة؟', o:['make the bed','wash the dishes'], a:0, w:'make the bed.', f:'← <u>make the bed</u>'}
      ]}
    ]
  };
})();
