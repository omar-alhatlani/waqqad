/* ============================================================
   درس: Vocabulary — Lifestyles (الجسم والإصابات والطعام)
   الإنجليزية · السادس الابتدائي · ف١ · Top Goal 3 · Unit 2 (Lifestyles)
   مفرداتُ الوحدة (حقائقُ معجميّة)، والجملُ التوضيحيّة مؤلَّفةٌ أصالةً.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG3_U2_VOCAB'] = {
    id:'EN_TG3_U2_VOCAB',
    title:'Vocabulary — Lifestyles',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'كلماتُ نمط الحياة',
      intro:'مفرداتٌ عن <b>الجسم والإصابات</b> و<b>الطعام</b>، تحتاجُها للحديث عن الصحّة والوجبات.',
      table:[['knee · elbow · toe · finger','رُكبة · مِرفق · إصبع القدم · إصبع'],['break · burn · sore','كسْر · حرْق · مُتقرِّح/مؤلِم'],['medicine · pharmacy · bandage','دواء · صيدليّة · ضِمادة'],['bread · egg · olive · salt','خبز · بيضة · زيتون · ملح']],
      examples:['I hurt my <code>knee</code>, so I went to the <code>pharmacy</code>. (أصبتُ رُكبتي فذهبتُ للصيدليّة.)','Put a little <code>salt</code> on the <code>bread</code>. (ضعْ قليلًا من الملح على الخبز.)'],
      trick:'اربطِ الكلمةَ بموقفها: <span class="en">bandage</span> للجُرح، و<span class="en">pharmacy</span> للدواء، و<span class="en">sore</span> لما يؤلمك.'
    },
    stages:[
      { type:'choice', name:'الكلمة ← المعنى', hint:'اختر المعنى العربيّ', qs:[
        {p:'knee', ask:'المعنى؟', o:['رُكبة','مِرفق'], a:0, w:'<code>knee</code> = رُكبة.', f:'knee ← <u>رُكبة</u>'},
        {p:'pharmacy', ask:'المعنى؟', o:['صيدليّة','مستشفى'], a:0, w:'<code>pharmacy</code> = صيدليّة.', f:'pharmacy ← <u>صيدليّة</u>'},
        {p:'bandage', ask:'المعنى؟', o:['ضِمادة','دواء'], a:0, w:'<code>bandage</code> = ضِمادة.', f:'bandage ← <u>ضِمادة</u>'},
        {p:'sore', ask:'المعنى؟', o:['مؤلِم/مُتقرِّح','سليم'], a:0, w:'<code>sore</code> = مؤلِم.', f:'sore ← <u>مؤلِم</u>'}
      ]},
      { type:'choice', name:'المعنى ← الكلمة', hint:'اختر الكلمة الإنجليزية', qs:[
        {p:'مِرفق', ask:'الكلمة؟', o:['elbow','knee'], a:0, w:'مِرفق = <code>elbow</code>.', f:'مِرفق ← <u>elbow</u>'},
        {p:'دواء', ask:'الكلمة؟', o:['medicine','bandage'], a:0, w:'دواء = <code>medicine</code>.', f:'دواء ← <u>medicine</u>'},
        {p:'ملح', ask:'الكلمة؟', o:['salt','pepper'], a:0, w:'ملح = <code>salt</code>.', f:'ملح ← <u>salt</u>'},
        {p:'كسْر', ask:'الكلمة؟', o:['break','burn'], a:0, w:'كسْر = <code>break</code>.', f:'كسْر ← <u>break</u>'}
      ]},
      { type:'choice', name:'جسمٌ أم طعام؟', hint:'صنّف الكلمة', qs:[
        {p:'toe', ask:'اختر', o:['جزءٌ من الجسم','طعام'], a:0, w:'<code>toe</code> إصبعُ القدم.', f:'toe ← <u>جزءٌ من الجسم</u>'},
        {p:'olive', ask:'اختر', o:['طعام','جزءٌ من الجسم'], a:0, w:'<code>olive</code> زيتون.', f:'olive ← <u>طعام</u>'},
        {p:'finger', ask:'اختر', o:['جزءٌ من الجسم','طعام'], a:0, w:'<code>finger</code> إصبع.', f:'finger ← <u>جزءٌ من الجسم</u>'},
        {p:'cereal', ask:'اختر', o:['طعام','جزءٌ من الجسم'], a:0, w:'<code>cereal</code> حبوبُ إفطار.', f:'cereal ← <u>طعام</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'I hurt my ___ when I fell. (part of the leg)', o:['knee','bread','salt'], a:0, w:'الرُّكبة ← <code>knee</code>.', f:'... my <u>knee</u> ...'},
        {p:'The nurse put a ___ on the cut.', o:['bandage','pizza','fork'], a:0, w:'ضِمادة ← <code>bandage</code>.', f:'... a <u>bandage</u> ...'},
        {p:'We buy medicine from the ___ .', o:['pharmacy','stadium','pond'], a:0, w:'صيدليّة ← <code>pharmacy</code>.', f:'... the <u>pharmacy</u>.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'pharmacy', ask:'المعنى؟', o:['صيدليّة','رُكبة'], a:0, w:'صيدليّة.', f:'pharmacy ← <u>صيدليّة</u>'},
        {p:'مِرفق', ask:'الكلمة؟', o:['elbow','toe'], a:0, w:'elbow.', f:'مِرفق ← <u>elbow</u>'},
        {p:'olive', ask:'اختر', o:['طعام','جزءٌ من الجسم'], a:0, w:'طعام.', f:'olive ← <u>طعام</u>'},
        {p:'I hurt my ___ when I fell.', ask:'اختر', o:['knee','salt'], a:0, w:'knee.', f:'... my <u>knee</u> ...'},
        {p:'bandage', ask:'المعنى؟', o:['ضِمادة','خبز'], a:0, w:'ضِمادة.', f:'bandage ← <u>ضِمادة</u>'}
      ]}
    ]
  };
})();
