/* ============================================================
   درس: Grammar — Possessive pronouns with "whose"
   الإنجليزية · الرابع الابتدائي · ف١ · Top Goal 1 · Unit 1 (Family Events)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب المحفوظ).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG1_U1_POSS'] = {
    id:'EN_TG1_U1_POSS',
    title:'Grammar — Possessives with whose',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'لِمَن هذا؟ whose والضمائرُ الملكيّة',
      intro:'نسألُ عن المالكِ بـ <span class="tok-focus">whose</span> (لِمَن؟) ، ونُجيبُ بضميرٍ ملكيّ يقومُ مقامَ الاسم: <span class="tok-focus">mine</span> (لي) ، <span class="tok-focus">yours</span> (لك) ، <span class="tok-focus">his</span> ، <span class="tok-focus">hers</span> ، <span class="tok-focus">ours</span> ، <span class="tok-focus">theirs</span>. هذه الضمائرُ <b>لا يتبعُها اسمٌ</b> لأنّها تُغني عنه.',
      formula:'<span class="tok-focus">Whose</span> + noun + is this? — It’s <span class="tok-focus">mine</span>.',
      table:[['السؤال','<span class="tok-focus">Whose</span> bag is this?'],['الجواب','It’s <span class="tok-focus">mine</span>. (لي)'],['للمخاطب','It’s <span class="tok-focus">yours</span>. (لك)'],['للجمع','They are <span class="tok-focus">theirs</span>. (لهم)']],
      examples:['<span class="tok-focus">Whose</span> book<span class="tok-plural">s</span> are these? — They are <span class="tok-focus">ours</span>.','This pen isn’t <span class="tok-focus">hers</span>; it’s <span class="tok-focus">his</span>.'],
      trick:'الضميرُ الملكيُّ (<span class="tok-focus">mine, yours, his, hers, ours, theirs</span>) يقفُ وحدَه بلا اسمٍ بعده.'
    },
    stages:[
      { type:'choice', name:'الضمير ← المعنى', hint:'اربطِ الضميرَ بمعناه', qs:[
        {p:'mine', ask:'المعنى؟', o:['لي','لك'], a:0, w:'<code>mine</code> = لي.', f:'mine ← <u>لي</u>'},
        {p:'yours', ask:'المعنى؟', o:['لك','لهم'], a:0, w:'<code>yours</code> = لك.', f:'yours ← <u>لك</u>'},
        {p:'theirs', ask:'المعنى؟', o:['لهم','لنا'], a:0, w:'<code>theirs</code> = لهم.', f:'theirs ← <u>لهم</u>'},
        {p:'whose', ask:'المعنى؟', o:['لِمَن؟','أين؟'], a:0, w:'<code>whose</code> سؤالٌ عن المالك.', f:'whose ← <u>لِمَن؟</u>'}
      ]},
      { type:'gap', name:'أكمل الجواب', hint:'الضميرُ يقومُ مقامَ الاسم', qs:[
        {p:'This bag is my bag. It’s ___ .', o:['mine','my','me'], a:0, w:'يقومُ مقامَ الاسم ← <code>mine</code>.', f:'It’s <u>mine</u>.'},
        {p:'That car belongs to them. It’s ___ .', o:['theirs','their','them'], a:0, w:'ملكُهم ← <code>theirs</code>.', f:'It’s <u>theirs</u>.'},
        {p:'___ pen is this? — It’s hers.', o:['Whose','Who','Where'], a:0, w:'نسألُ عن المالك ← <code>Whose</code>.', f:'<u>Whose</u> pen is this?'}
      ]},
      { type:'choice', name:'اختر الصواب', hint:'الملكيُّ وحدَه بلا اسم', qs:[
        {p:'Is this your book? Yes, it’s ___ .', ask:'اختر', o:['mine','my'], a:0, w:'بلا اسمٍ بعده ← <code>mine</code>.', f:'... it’s <u>mine</u>.'},
        {p:'The house is theirs. = It belongs to ___ .', ask:'اختر', o:['them','us'], a:0, w:'<code>theirs</code> = يخصُّهم.', f:'... belongs to <u>them</u>.'},
        {p:'___ shoes are these?', ask:'اختر', o:['Whose','What'], a:0, w:'السؤالُ عن المالك.', f:'<u>Whose</u> shoes are these?'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['This','ball','is','mine','ball','.'], bad:4, fix:'—', w:'<code>mine</code> يقومُ مقامَ الاسم؛ لا نُكرّرُ <code>ball</code>.', f:'This ball is <u>mine</u>.'},
        {words:['Who','bag','is','this','?'], bad:0, fix:'Whose', w:'للسؤالِ عن المالك نستعملُ <code>Whose</code>.', f:'<u>Whose</u> bag is this?'},
        {words:['These','books','are','their','.'], bad:3, fix:'theirs', w:'الضميرُ الملكيُّ المنفصلُ <code>theirs</code>.', f:'These books are <u>theirs</u>.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب', qs:[
        {sol:['Whose','pen','is','this','?'], w:'سؤالُ المالك.', f:'Whose pen is this?'},
        {sol:['It','is','mine','.'], w:'الجوابُ بالضميرِ الملكيّ.', f:'It is mine.'},
        {sol:['These','books','are','ours','.'], w:'ملكُنا ← <code>ours</code>.', f:'These books are ours.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'hers', ask:'المعنى؟', o:['لها','له'], a:0, w:'<code>hers</code> = لها.', f:'hers ← <u>لها</u>'},
        {p:'This is my book. It’s ___ .', ask:'اختر', o:['mine','my'], a:0, w:'بلا اسمٍ بعده.', f:'It’s <u>mine</u>.'},
        {p:'___ car is this?', ask:'اختر', o:['Whose','Who'], a:0, w:'المالك ← Whose.', f:'<u>Whose</u> car is this?'},
        {p:'الضميرُ الملكيُّ يتبعُه:', ask:'اختر', o:['لا شيء (بلا اسم)','اسمٌ دائمًا'], a:0, w:'يقومُ مقامَ الاسم.', f:'← <u>لا شيء</u>'},
        {p:'The toys belong to us. They are ___ .', ask:'اختر', o:['ours','our'], a:0, w:'ملكُنا ← <code>ours</code>.', f:'They are <u>ours</u>.'}
      ]}
    ]
  };
})();
