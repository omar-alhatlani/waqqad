/* ============================================================
   درس: Vocabulary — Jobs
   الإنجليزية · الثالث الابتدائي · ف١ · We Can! 3 · Unit 6 (Jobs)
   مفرداتُ الوحدة (حقائقُ معجميّة)، والجملُ التوضيحيّة مؤلَّفةٌ أصالةً.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_WC3_U6_VOCAB'] = {
    id:'EN_WC3_U6_VOCAB',
    title:'Vocabulary — Jobs',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'المِهَن',
      intro:'مفرداتٌ عن <b>المِهَن</b> والأعمال. أتقِنْها لتتحدّثَ عمّا يعملُه الناسُ وعمّا تريدُ أن تكونَه.',
      table:[['doctor · nurse','طبيب · ممرّض'],['pilot · engineer','طيّار · مهندس'],['teacher · cook','معلّم · طبّاخ'],['architect','مهندس معماريّ'],['astronaut · reporter','رائد فضاء · مراسِل']],
      examples:['A <code>doctor</code> helps sick people. (الطبيبُ يساعدُ المرضى.)','A <code>pilot</code> flies a plane. (الطيّارُ يقودُ الطائرة.)'],
      trick:'اربطِ المهنةَ بعملها: <span class="en">pilot</span> يقودُ طائرة، <span class="en">cook</span> يطبخُ الطعام، <span class="en">astronaut</span> يذهبُ للفضاء.'
    },
    stages:[
      { type:'choice', name:'الكلمة ← المعنى', hint:'اختر المعنى العربيّ', qs:[
        {p:'doctor', ask:'المعنى؟', o:['طبيب','طيّار'], a:0, w:'<code>doctor</code> = طبيب.', f:'← <u>طبيب</u>'},
        {p:'pilot', ask:'المعنى؟', o:['طيّار','طبّاخ'], a:0, w:'<code>pilot</code> = طيّار.', f:'← <u>طيّار</u>'},
        {p:'engineer', ask:'المعنى؟', o:['مهندس','ممرّض'], a:0, w:'<code>engineer</code> = مهندس.', f:'← <u>مهندس</u>'},
        {p:'cook', ask:'المعنى؟', o:['طبّاخ','معلّم'], a:0, w:'<code>cook</code> = طبّاخ.', f:'← <u>طبّاخ</u>'},
        {p:'astronaut', ask:'المعنى؟', o:['رائد فضاء','مراسِل'], a:0, w:'<code>astronaut</code> = رائد فضاء.', f:'← <u>رائد فضاء</u>'}
      ]},
      { type:'choice', name:'المعنى ← الكلمة', hint:'اختر الإنجليزية', qs:[
        {p:'ممرّض', ask:'الكلمة؟', o:['nurse','doctor'], a:0, w:'ممرّض = <code>nurse</code>.', f:'← <u>nurse</u>'},
        {p:'معلّم', ask:'الكلمة؟', o:['teacher','cook'], a:0, w:'معلّم = <code>teacher</code>.', f:'← <u>teacher</u>'},
        {p:'مهندس معماريّ', ask:'الكلمة؟', o:['architect','engineer'], a:0, w:'<code>architect</code>.', f:'← <u>architect</u>'},
        {p:'مراسِل', ask:'الكلمة؟', o:['reporter','pilot'], a:0, w:'مراسِل = <code>reporter</code>.', f:'← <u>reporter</u>'},
        {p:'طبيب', ask:'الكلمة؟', o:['doctor','nurse'], a:0, w:'طبيب = <code>doctor</code>.', f:'← <u>doctor</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اربطِ المهنةَ بعملها', qs:[
        {p:'A ___ flies a plane.', o:['pilot','cook','nurse'], a:0, w:'الطيّارُ يقودُ الطائرة ← <code>pilot</code>.', f:'A <u>pilot</u> flies a plane.'},
        {p:'A ___ helps sick people.', o:['doctor','teacher','reporter'], a:0, w:'الطبيبُ يساعدُ المرضى ← <code>doctor</code>.', f:'A <u>doctor</u> ...'},
        {p:'A ___ cooks food.', o:['cook','pilot','engineer'], a:0, w:'الطبّاخُ يطبخ ← <code>cook</code>.', f:'A <u>cook</u> ...'},
        {p:'An ___ goes to space.', o:['astronaut','architect','doctor'], a:0, w:'رائدُ الفضاء ← <code>astronaut</code>.', f:'An <u>astronaut</u> ...'}
      ]},
      { type:'error', name:'الكلمة الغريبة', hint:'انقر ما لا ينتمي', qs:[
        {words:['doctor','nurse','pilot','football'], bad:3, fix:'مثال: cook', w:'<code>football</code> رياضةٌ، والبقيّةُ مِهَن.', f:'... · <u>football</u> (رياضة)'},
        {words:['teacher','engineer','cook','morning'], bad:3, fix:'مثال: reporter', w:'<code>morning</code> وقتٌ، والبقيّةُ مِهَن.', f:'... · <u>morning</u> (وقت)'},
        {words:['pilot','astronaut','architect','dolphin'], bad:3, fix:'مثال: nurse', w:'<code>dolphin</code> حيوانٌ، والبقيّةُ مِهَن.', f:'... · <u>dolphin</u> (حيوان)'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'nurse', ask:'المعنى؟', o:['ممرّض','طبيب'], a:0, w:'ممرّض.', f:'← <u>ممرّض</u>'},
        {p:'مهندس', ask:'الكلمة؟', o:['engineer','architect'], a:0, w:'engineer.', f:'← <u>engineer</u>'},
        {p:'A ___ flies a plane.', ask:'اختر', o:['pilot','cook'], a:0, w:'الطيّار.', f:'A <u>pilot</u> ...'},
        {p:'astronaut', ask:'المعنى؟', o:['رائد فضاء','معلّم'], a:0, w:'رائد فضاء.', f:'← <u>رائد فضاء</u>'},
        {p:'طبّاخ', ask:'الكلمة؟', o:['cook','pilot'], a:0, w:'cook.', f:'← <u>cook</u>'}
      ]}
    ]
  };
})();
