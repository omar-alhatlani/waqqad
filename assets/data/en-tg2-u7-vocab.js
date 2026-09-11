/* ============================================================
   درس: Vocabulary — Trips (السفر والتنقّل)
   الإنجليزية · الخامس الابتدائي · ف١ · Top Goal 2 · Unit 7 (Trips)
   مفرداتُ الوحدة (حقائقُ معجميّة)، والجملُ التوضيحيّة مؤلَّفةٌ أصالةً.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG2_U7_VOCAB'] = {
    id:'EN_TG2_U7_VOCAB',
    title:'Vocabulary — Trips',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'كلماتُ السفر والتنقّل',
      intro:'مفرداتٌ عن <b>السفر</b> ووسائله وأفعاله، تحتاجُها للحديث عن الرحلات والمطار.',
      table:[['suitcase · passport · ticket','حقيبة سفر · جواز · تذكرة'],['passenger · platform · station','مسافر · رصيف · محطّة'],['subway · terminal · taxi','مترو · صالة · سيّارة أجرة'],['arrive · depart · land','يصل · يغادر · يهبط']],
      examples:['The <code>passenger</code> showed his <code>passport</code>. (أظهرَ المسافرُ جوازَه.)','The plane will <code>land</code> soon. (ستهبطُ الطائرةُ قريبًا.)'],
      trick:'اربطِ الكلمةَ بالسفر: <span class="en">depart</span> يغادر، و<span class="en">arrive</span> يصل، و<span class="en">land</span> تهبطُ الطائرة.'
    },
    stages:[
      { type:'choice', name:'الكلمة ← المعنى', hint:'اختر المعنى العربيّ', qs:[
        {p:'suitcase', ask:'المعنى؟', o:['حقيبة سفر','تذكرة'], a:0, w:'<code>suitcase</code> = حقيبة سفر.', f:'suitcase ← <u>حقيبة سفر</u>'},
        {p:'passenger', ask:'المعنى؟', o:['مسافر','سائق'], a:0, w:'<code>passenger</code> = مسافر.', f:'passenger ← <u>مسافر</u>'},
        {p:'depart', ask:'المعنى؟', o:['يغادر','يصل'], a:0, w:'<code>depart</code> = يغادر.', f:'depart ← <u>يغادر</u>'},
        {p:'station', ask:'المعنى؟', o:['محطّة','جواز'], a:0, w:'<code>station</code> = محطّة.', f:'station ← <u>محطّة</u>'}
      ]},
      { type:'choice', name:'المعنى ← الكلمة', hint:'اختر الكلمة الإنجليزية', qs:[
        {p:'جواز سفر', ask:'الكلمة؟', o:['passport','ticket'], a:0, w:'<code>passport</code>.', f:'← <u>passport</u>'},
        {p:'يصل', ask:'الكلمة؟', o:['arrive','depart'], a:0, w:'يصل = <code>arrive</code>.', f:'← <u>arrive</u>'},
        {p:'تهبط', ask:'الكلمة؟', o:['land','arrive'], a:0, w:'تهبط = <code>land</code>.', f:'← <u>land</u>'},
        {p:'رصيف المحطّة', ask:'الكلمة؟', o:['platform','terminal'], a:0, w:'<code>platform</code>.', f:'← <u>platform</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'The ___ showed her passport.', o:['passenger','suitcase','platform'], a:0, w:'المسافر ← <code>passenger</code>.', f:'The <u>passenger</u> ...'},
        {p:'The plane will ___ in ten minutes.', o:['land','arrive','depart'], a:0, w:'تهبط ← <code>land</code>.', f:'... will <u>land</u> ...'},
        {p:'I packed my clothes in a ___ .', o:['suitcase','ticket','station'], a:0, w:'حقيبة سفر ← <code>suitcase</code>.', f:'... a <u>suitcase</u>.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'passenger', ask:'المعنى؟', o:['مسافر','سائق'], a:0, w:'مسافر.', f:'← <u>مسافر</u>'},
        {p:'جواز سفر', ask:'الكلمة؟', o:['passport','ticket'], a:0, w:'passport.', f:'← <u>passport</u>'},
        {p:'The plane will ___ soon.', ask:'اختر', o:['land','arrive'], a:0, w:'land.', f:'← <u>land</u>'},
        {p:'depart', ask:'المعنى؟', o:['يغادر','يصل'], a:0, w:'يغادر.', f:'← <u>يغادر</u>'},
        {p:'محطّة', ask:'الكلمة؟', o:['station','terminal'], a:0, w:'station.', f:'← <u>station</u>'}
      ]}
    ]
  };
})();
