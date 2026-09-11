/* ============================================================
   درس: Vocabulary — Storylines (القصص والأفلام)
   الإنجليزية · الخامس الابتدائي · ف١ · Top Goal 2 · Unit 5 (Storylines)
   مفرداتُ الوحدة (حقائقُ معجميّة)، والجملُ التوضيحيّة مؤلَّفةٌ أصالةً.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG2_U5_VOCAB'] = {
    id:'EN_TG2_U5_VOCAB',
    title:'Vocabulary — Storylines',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'أنواعُ القصص والأفلام',
      intro:'مفرداتٌ عن <b>أنواع الأفلام والقصص</b> وعناصرها، تحتاجُها للحديث عمّا تشاهدُ وتقرأ.',
      table:[['comedy · drama · mystery','كوميديا · دراما · غموض'],['cartoon · documentary','رسوم متحرّكة · وثائقيّ'],['fairy tale · musical','حكاية خرافيّة · غنائيّ'],['plot · character','حبكة · شخصيّة']],
      examples:['This <code>cartoon</code> has a funny <code>character</code>. (لهذه الرسوم شخصيّةٌ مضحكة.)','A <code>mystery</code> has an exciting <code>plot</code>. (للغموض حبكةٌ مشوّقة.)'],
      trick:'اربطِ النوعَ بمعناه: <span class="en">comedy</span> يُضحك، و<span class="en">documentary</span> واقعيّ، و<span class="en">mystery</span> فيه لغز.'
    },
    stages:[
      { type:'choice', name:'الكلمة ← المعنى', hint:'اختر المعنى العربيّ', qs:[
        {p:'comedy', ask:'المعنى؟', o:['كوميديا','دراما'], a:0, w:'<code>comedy</code> = كوميديا.', f:'comedy ← <u>كوميديا</u>'},
        {p:'cartoon', ask:'المعنى؟', o:['رسوم متحرّكة','وثائقيّ'], a:0, w:'<code>cartoon</code> = رسوم متحرّكة.', f:'cartoon ← <u>رسوم متحرّكة</u>'},
        {p:'plot', ask:'المعنى؟', o:['حبكة','شخصيّة'], a:0, w:'<code>plot</code> = حبكة.', f:'plot ← <u>حبكة</u>'},
        {p:'mystery', ask:'المعنى؟', o:['غموض/لغز','غنائيّ'], a:0, w:'<code>mystery</code> = غموض.', f:'mystery ← <u>غموض</u>'}
      ]},
      { type:'choice', name:'المعنى ← الكلمة', hint:'اختر الكلمة الإنجليزية', qs:[
        {p:'وثائقيّ', ask:'الكلمة؟', o:['documentary','comedy'], a:0, w:'وثائقيّ = <code>documentary</code>.', f:'← <u>documentary</u>'},
        {p:'شخصيّة', ask:'الكلمة؟', o:['character','plot'], a:0, w:'شخصيّة = <code>character</code>.', f:'← <u>character</u>'},
        {p:'حكاية خرافيّة', ask:'الكلمة؟', o:['fairy tale','drama'], a:0, w:'<code>fairy tale</code>.', f:'← <u>fairy tale</u>'},
        {p:'دراما', ask:'الكلمة؟', o:['drama','musical'], a:0, w:'دراما = <code>drama</code>.', f:'← <u>drama</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'A ___ makes you laugh.', o:['comedy','mystery','drama'], a:0, w:'الكوميديا تُضحك ← <code>comedy</code>.', f:'A <u>comedy</u> ...'},
        {p:'The main ___ in the story is brave.', o:['character','plot','cartoon'], a:0, w:'الشخصيّة ← <code>character</code>.', f:'The main <u>character</u> ...'},
        {p:'A ___ film shows real facts.', o:['documentary','comedy','musical'], a:0, w:'الوثائقيّ واقعيّ ← <code>documentary</code>.', f:'A <u>documentary</u> ...'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'comedy', ask:'المعنى؟', o:['كوميديا','دراما'], a:0, w:'كوميديا.', f:'← <u>كوميديا</u>'},
        {p:'وثائقيّ', ask:'الكلمة؟', o:['documentary','comedy'], a:0, w:'documentary.', f:'← <u>documentary</u>'},
        {p:'A ___ makes you laugh.', ask:'اختر', o:['comedy','mystery'], a:0, w:'comedy.', f:'← <u>comedy</u>'},
        {p:'plot', ask:'المعنى؟', o:['حبكة','شخصيّة'], a:0, w:'حبكة.', f:'← <u>حبكة</u>'},
        {p:'شخصيّة', ask:'الكلمة؟', o:['character','plot'], a:0, w:'character.', f:'← <u>character</u>'}
      ]}
    ]
  };
})();
