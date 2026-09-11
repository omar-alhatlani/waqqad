/* ============================================================
   درس: Vocabulary — Job Paths (المهن وأماكن العمل)
   الإنجليزية · الخامس الابتدائي · ف١ · Top Goal 2 · Unit 3 (Job Paths)
   مفرداتُ الوحدة (حقائقُ معجميّة)، والجملُ التوضيحيّة مؤلَّفةٌ أصالةً.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG2_U3_VOCAB'] = {
    id:'EN_TG2_U3_VOCAB',
    title:'Vocabulary — Job Paths',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'المهنُ وأماكنُ العمل',
      intro:'مفرداتٌ عن <b>المهن</b> و<b>أماكن العمل</b>، تحتاجُها للحديث عن الوظائف والمستقبل المهنيّ.',
      table:[['pilot · engineer · doctor','طيّار · مهندس · طبيب'],['journalist · photographer','صحفيّ · مصوّر'],['mechanic · waiter · singer','ميكانيكيّ · نادل · مغنٍّ'],['airport · factory · office','مطار · مصنع · مكتب']],
      examples:['The <code>pilot</code> works at the <code>airport</code>. (يعملُ الطيّارُ في المطار.)','A <code>mechanic</code> repairs cars. (يصلحُ الميكانيكيُّ السيّارات.)'],
      trick:'اربطِ المهنةَ بمكانها: <span class="en">pilot → airport</span>، و<span class="en">waiter → restaurant</span>، و<span class="en">journalist → news</span>.'
    },
    stages:[
      { type:'choice', name:'الكلمة ← المعنى', hint:'اختر المعنى العربيّ', qs:[
        {p:'pilot', ask:'المعنى؟', o:['طيّار','طبيب'], a:0, w:'<code>pilot</code> = طيّار.', f:'pilot ← <u>طيّار</u>'},
        {p:'journalist', ask:'المعنى؟', o:['صحفيّ','نادل'], a:0, w:'<code>journalist</code> = صحفيّ.', f:'journalist ← <u>صحفيّ</u>'},
        {p:'mechanic', ask:'المعنى؟', o:['ميكانيكيّ','مغنٍّ'], a:0, w:'<code>mechanic</code> = ميكانيكيّ.', f:'mechanic ← <u>ميكانيكيّ</u>'},
        {p:'factory', ask:'المعنى؟', o:['مصنع','مطار'], a:0, w:'<code>factory</code> = مصنع.', f:'factory ← <u>مصنع</u>'}
      ]},
      { type:'choice', name:'المعنى ← الكلمة', hint:'اختر الكلمة الإنجليزية', qs:[
        {p:'مهندس', ask:'الكلمة؟', o:['engineer','waiter'], a:0, w:'مهندس = <code>engineer</code>.', f:'← <u>engineer</u>'},
        {p:'مصوّر', ask:'الكلمة؟', o:['photographer','pilot'], a:0, w:'مصوّر = <code>photographer</code>.', f:'← <u>photographer</u>'},
        {p:'مطار', ask:'الكلمة؟', o:['airport','office'], a:0, w:'مطار = <code>airport</code>.', f:'← <u>airport</u>'},
        {p:'نادل', ask:'الكلمة؟', o:['waiter','singer'], a:0, w:'نادل = <code>waiter</code>.', f:'← <u>waiter</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'المهنةُ ومكانُها', qs:[
        {p:'The ___ flies the plane.', o:['pilot','mechanic','singer'], a:0, w:'الطيّار ← <code>pilot</code>.', f:'The <u>pilot</u> ...'},
        {p:'A ___ takes photos.', o:['photographer','waiter','driver'], a:0, w:'المصوّر ← <code>photographer</code>.', f:'A <u>photographer</u> ...'},
        {p:'People work in an ___ .', o:['office','airport','oven'], a:0, w:'المكتب ← <code>office</code>.', f:'... an <u>office</u>.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'pilot', ask:'المعنى؟', o:['طيّار','طبيب'], a:0, w:'طيّار.', f:'← <u>طيّار</u>'},
        {p:'مهندس', ask:'الكلمة؟', o:['engineer','waiter'], a:0, w:'engineer.', f:'← <u>engineer</u>'},
        {p:'The ___ flies the plane.', ask:'اختر', o:['pilot','mechanic'], a:0, w:'pilot.', f:'← <u>pilot</u>'},
        {p:'factory', ask:'المعنى؟', o:['مصنع','مكتب'], a:0, w:'مصنع.', f:'← <u>مصنع</u>'},
        {p:'مصوّر', ask:'الكلمة؟', o:['photographer','journalist'], a:0, w:'photographer.', f:'← <u>photographer</u>'}
      ]}
    ]
  };
})();
