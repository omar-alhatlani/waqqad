/* ============================================================
   درس: Vocabulary — Interests (الموسيقى والهوايات)
   الإنجليزية · السادس الابتدائي · ف١ · Top Goal 3 · Unit 3 (Interests)
   مفرداتُ الوحدة (حقائقُ معجميّة)، والجملُ التوضيحيّة مؤلَّفةٌ أصالةً.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG3_U3_VOCAB'] = {
    id:'EN_TG3_U3_VOCAB',
    title:'Vocabulary — Interests',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'كلماتُ الاهتمامات والهوايات',
      intro:'مفرداتٌ عن <b>الموسيقى</b> و<b>الهوايات</b>، تحتاجُها للحديث عمّا تحبّ أن تفعله.',
      table:[['instrument · drum · violin · oud','آلة · طبل · كمان · عود'],['concert · festival · prize','حفلة · مهرجان · جائزة'],['collect · chess · puzzle','يجمع · شطرنج · أُحجية'],['poetry · magazine · stamp','شِعر · مجلّة · طابع']],
      examples:['He plays the <code>oud</code> and won a <code>prize</code>. (يعزفُ العودَ وفازَ بجائزة.)','I <code>collect</code> old <code>stamps</code> as a hobby. (أجمعُ الطوابعَ القديمةَ هوايةً.)'],
      trick:'اربطِ الكلمةَ بمجالها: <span class="en">drum · violin · oud</span> آلاتٌ موسيقيّة، و<span class="en">chess · puzzle · collect</span> هوايات.'
    },
    stages:[
      { type:'choice', name:'الكلمة ← المعنى', hint:'اختر المعنى العربيّ', qs:[
        {p:'instrument', ask:'المعنى؟', o:['آلة (موسيقيّة)','مهرجان'], a:0, w:'<code>instrument</code> = آلة.', f:'instrument ← <u>آلة</u>'},
        {p:'concert', ask:'المعنى؟', o:['حفلة موسيقيّة','جائزة'], a:0, w:'<code>concert</code> = حفلة.', f:'concert ← <u>حفلة</u>'},
        {p:'collect', ask:'المعنى؟', o:['يجمع','يعزف'], a:0, w:'<code>collect</code> = يجمع.', f:'collect ← <u>يجمع</u>'},
        {p:'prize', ask:'المعنى؟', o:['جائزة','لغز'], a:0, w:'<code>prize</code> = جائزة.', f:'prize ← <u>جائزة</u>'}
      ]},
      { type:'choice', name:'المعنى ← الكلمة', hint:'اختر الكلمة الإنجليزية', qs:[
        {p:'كمان', ask:'الكلمة؟', o:['violin','drum'], a:0, w:'كمان = <code>violin</code>.', f:'كمان ← <u>violin</u>'},
        {p:'شطرنج', ask:'الكلمة؟', o:['chess','poetry'], a:0, w:'شطرنج = <code>chess</code>.', f:'شطرنج ← <u>chess</u>'},
        {p:'عود', ask:'الكلمة؟', o:['oud','magazine'], a:0, w:'عود = <code>oud</code>.', f:'عود ← <u>oud</u>'},
        {p:'مهرجان', ask:'الكلمة؟', o:['festival','prize'], a:0, w:'مهرجان = <code>festival</code>.', f:'مهرجان ← <u>festival</u>'}
      ]},
      { type:'choice', name:'آلةٌ أم هواية؟', hint:'صنّف الكلمة', qs:[
        {p:'drum', ask:'اختر', o:['آلة موسيقيّة','هواية جمع'], a:0, w:'<code>drum</code> آلةٌ موسيقيّة.', f:'drum ← <u>آلة موسيقيّة</u>'},
        {p:'chess', ask:'اختر', o:['لعبة/هواية','آلة موسيقيّة'], a:0, w:'<code>chess</code> لعبة.', f:'chess ← <u>لعبة/هواية</u>'},
        {p:'violin', ask:'اختر', o:['آلة موسيقيّة','لعبة'], a:0, w:'<code>violin</code> آلة.', f:'violin ← <u>آلة موسيقيّة</u>'},
        {p:'poetry', ask:'اختر', o:['فنّ أدبيّ','آلة موسيقيّة'], a:0, w:'<code>poetry</code> شِعر.', f:'poetry ← <u>فنّ أدبيّ</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'He plays the ___ beautifully.', o:['oud','prize','festival'], a:0, w:'آلةٌ تُعزَف ← <code>oud</code>.', f:'... the <u>oud</u> ...'},
        {p:'I like to ___ old coins.', o:['collect','win','read'], a:0, w:'أجمع ← <code>collect</code>.', f:'... to <u>collect</u> ...'},
        {p:'She won the first ___ in the competition.', o:['prize','drum','stamp'], a:0, w:'جائزة ← <code>prize</code>.', f:'... the first <u>prize</u> ...'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'concert', ask:'المعنى؟', o:['حفلة موسيقيّة','جائزة'], a:0, w:'حفلة.', f:'concert ← <u>حفلة</u>'},
        {p:'شطرنج', ask:'الكلمة؟', o:['chess','violin'], a:0, w:'chess.', f:'شطرنج ← <u>chess</u>'},
        {p:'drum', ask:'اختر', o:['آلة موسيقيّة','هواية'], a:0, w:'آلة.', f:'drum ← <u>آلة موسيقيّة</u>'},
        {p:'He plays the ___ .', ask:'اختر', o:['oud','prize'], a:0, w:'oud.', f:'... the <u>oud</u>.'},
        {p:'collect', ask:'المعنى؟', o:['يجمع','يفوز'], a:0, w:'يجمع.', f:'collect ← <u>يجمع</u>'}
      ]}
    ]
  };
})();
