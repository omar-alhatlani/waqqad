/* ============================================================
   درس: Vocabulary — After-School Fun
   الإنجليزية · الرابع الابتدائي · ف١ · Top Goal 1 · Unit 4 (After-School Fun)
   مفرداتُ الوحدة (حقائقُ معجميّة)، والجملُ التوضيحيّة مؤلَّفةٌ أصالةً.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG1_U4_VOCAB'] = {
    id:'EN_TG1_U4_VOCAB',
    title:'Vocabulary — After-School Fun',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'أنشطةُ ما بعدَ المدرسة',
      intro:'مفرداتٌ عن <b>أنشطةِ ما بعدَ المدرسة</b> وبعضُ ظروفِ الطريقة (كيف نفعلُ الشيء). أتقِنْها لتصفَ هواياتِك.',
      table:[['go shopping · take photos','يتسوّق · يلتقط صورًا'],['play board games','يلعب ألعابًا لوحيّة'],['play video games','يلعب ألعاب الفيديو'],['make a model','يصنع مُجسَّمًا'],['quickly · slowly','بسرعة · ببطء'],['carefully · quietly','بعناية · بهدوء']],
      examples:['After school, I <code>play board games</code> with my brother. (ألعبُ ألعابًا لوحيّة.)','She draws <code>carefully</code> and <code>quietly</code>. (ترسمُ بعنايةٍ وهدوء.)'],
      trick:'ظروفُ الطريقةِ تنتهي غالبًا بـ <span class="en">-ly</span>: <span class="en">quick → quickly</span> ، <span class="en">slow → slowly</span>.'
    },
    stages:[
      { type:'choice', name:'العبارة ← المعنى', hint:'اختر المعنى العربيّ', qs:[
        {p:'go shopping', ask:'المعنى؟', o:['يتسوّق','يلتقط صورًا'], a:0, w:'<code>go shopping</code> = يتسوّق.', f:'← <u>يتسوّق</u>'},
        {p:'take photos', ask:'المعنى؟', o:['يلتقط صورًا','يصنع مُجسَّمًا'], a:0, w:'<code>take photos</code>.', f:'← <u>يلتقط صورًا</u>'},
        {p:'play board games', ask:'المعنى؟', o:['ألعاب لوحيّة','ألعاب فيديو'], a:0, w:'<code>board games</code> لوحيّة.', f:'← <u>ألعاب لوحيّة</u>'},
        {p:'make a model', ask:'المعنى؟', o:['يصنع مُجسَّمًا','يتسوّق'], a:0, w:'<code>make a model</code>.', f:'← <u>يصنع مُجسَّمًا</u>'},
        {p:'quickly', ask:'المعنى؟', o:['بسرعة','ببطء'], a:0, w:'<code>quickly</code> = بسرعة.', f:'← <u>بسرعة</u>'}
      ]},
      { type:'choice', name:'المعنى ← الكلمة', hint:'اختر الإنجليزية', qs:[
        {p:'ببطء', ask:'الكلمة؟', o:['slowly','quickly'], a:0, w:'ببطء = <code>slowly</code>.', f:'← <u>slowly</u>'},
        {p:'بعناية', ask:'الكلمة؟', o:['carefully','loudly'], a:0, w:'بعناية = <code>carefully</code>.', f:'← <u>carefully</u>'},
        {p:'بهدوء', ask:'الكلمة؟', o:['quietly','happily'], a:0, w:'بهدوء = <code>quietly</code>.', f:'← <u>quietly</u>'},
        {p:'ألعاب الفيديو', ask:'الكلمة؟', o:['video games','board games'], a:0, w:'<code>video games</code>.', f:'← <u>video games</u>'},
        {p:'يلتقط صورًا', ask:'الكلمة؟', o:['take photos','go shopping'], a:0, w:'<code>take photos</code>.', f:'← <u>take photos</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'The rabbit runs very ___ .', o:['quickly','slowly','quietly'], a:0, w:'الأرنبُ سريعٌ ← <code>quickly</code>.', f:'... very <u>quickly</u>.'},
        {p:'Please write ___ so we can read it.', o:['carefully','loudly','badly'], a:0, w:'الكتابةُ الجيّدةُ ← <code>carefully</code>.', f:'... write <u>carefully</u>.'},
        {p:'On weekends we ___ at the mall.', o:['go shopping','make a model','take photos'], a:0, w:'التسوّقُ في المول ← <code>go shopping</code>.', f:'... <u>go shopping</u> ...'},
        {p:'In the library we speak ___ .', o:['quietly','loudly','quickly'], a:0, w:'المكتبةُ تتطلّبُ الهدوء ← <code>quietly</code>.', f:'... speak <u>quietly</u>.'}
      ]},
      { type:'error', name:'الكلمة الغريبة', hint:'انقر ما لا ينتمي', qs:[
        {words:['quickly','slowly','carefully','model'], bad:3, fix:'مثال: quietly', w:'<code>model</code> اسمٌ، والبقيّةُ ظروفُ طريقة.', f:'... · <u>model</u> (اسم)'},
        {words:['go shopping','take photos','play games','happily'], bad:3, fix:'مثال: make a model', w:'<code>happily</code> ظرفٌ، والبقيّةُ أنشطة.', f:'... · <u>happily</u> (ظرف)'},
        {words:['quickly','slowly','loudly','strong'], bad:3, fix:'مثال: quietly', w:'<code>strong</code> صفةٌ لا ظرف.', f:'... · <u>strong</u> (صفة)'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'take photos', ask:'المعنى؟', o:['يلتقط صورًا','يتسوّق'], a:0, w:'يلتقط صورًا.', f:'← <u>يلتقط صورًا</u>'},
        {p:'بسرعة', ask:'الكلمة؟', o:['quickly','slowly'], a:0, w:'quickly.', f:'← <u>quickly</u>'},
        {p:'The turtle moves ___ .', ask:'اختر', o:['slowly','quickly'], a:0, w:'السلحفاةُ بطيئة.', f:'... <u>slowly</u>.'},
        {p:'make a model', ask:'المعنى؟', o:['يصنع مُجسَّمًا','يلعب فيديو'], a:0, w:'يصنع مُجسَّمًا.', f:'← <u>يصنع مُجسَّمًا</u>'},
        {p:'بهدوء', ask:'الكلمة؟', o:['quietly','loudly'], a:0, w:'quietly.', f:'← <u>quietly</u>'}
      ]}
    ]
  };
})();
