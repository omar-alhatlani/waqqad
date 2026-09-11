/* ============================================================
   درس: Grammar — have to / must / should
   الإنجليزية · الرابع الابتدائي · ف١ · Top Goal 1 · Unit 6 (House Accidents)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب المحفوظ).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG1_U6_MODAL'] = {
    id:'EN_TG1_U6_MODAL',
    title:'Grammar — have to / must / should',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'واجبٌ ونصحٌ ومنع',
      intro:'نعبّرُ عن <b>الواجب</b> بـ <span class="tok-focus">have to</span> و<span class="tok-focus">must</span> ، وعن <b>المنع</b> بـ <span class="tok-focus">mustn’t</span> (يُمنَع) ، وعن <b>النصح</b> بـ <span class="tok-focus">should</span> (يُستحسَن) و<span class="tok-focus">shouldn’t</span> (يُستحسَنُ تركُه). يتبعُها فعلٌ <b>مجرَّد</b>.',
      formula:'subject + <span class="tok-focus">must / should / have to</span> + verb (base)',
      table:[['must / have to','واجب — You <span class="tok-focus">must</span> wait.'],['mustn’t','منع — You <span class="tok-focus">mustn’t</span> run here.'],['should','نصح — You <span class="tok-focus">should</span> rest.'],['shouldn’t','نصحٌ بالترك — You <span class="tok-focus">shouldn’t</span> play now.']],
      examples:['You <span class="tok-focus">must</span> stay in a safe place.','You <span class="tok-focus">should</span> take this medicine, but you <span class="tok-focus">shouldn’t</span> play outside today.'],
      trick:'واجبٌ قويّ ← <span class="tok-focus">must / have to</span>. منعٌ ← <span class="tok-focus">mustn’t</span>. نصحٌ ← <span class="tok-focus">should / shouldn’t</span>. وبعدَها فعلٌ مجرَّد.'
    },
    stages:[
      { type:'choice', name:'أيُّ معنى؟', hint:'واجب · منع · نصح', qs:[
        {p:'must / have to →', ask:'اختر', o:['واجب','نصح'], a:0, w:'واجبٌ قويّ.', f:'← <u>واجب</u>'},
        {p:'should →', ask:'اختر', o:['نصح','منع'], a:0, w:'<code>should</code> نصحٌ.', f:'← <u>نصح</u>'},
        {p:'mustn’t →', ask:'اختر', o:['منع','واجب'], a:0, w:'<code>mustn’t</code> منعٌ.', f:'← <u>منع</u>'},
        {p:'بعد must/should يأتي الفعلُ:', ask:'اختر', o:['مجرَّدًا','بـ to'], a:0, w:'<code>must wait</code> مجرَّد.', f:'← <u>مجرَّدًا</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختَرِ المعنى المناسب', qs:[
        {p:'You are sick. You ___ see a doctor. (نصح)', o:['should','mustn’t','don’t'], a:0, w:'نصحٌ ← <code>should</code>.', f:'You <u>should</u> see a doctor.'},
        {p:'You ___ touch the hot stove! (منع)', o:['mustn’t','should','have to'], a:0, w:'منعٌ ← <code>mustn’t</code>.', f:'You <u>mustn’t</u> touch it!'},
        {p:'Students ___ wear a uniform. (واجب)', o:['have to','shouldn’t','mustn’t'], a:0, w:'واجبٌ ← <code>have to</code>.', f:'Students <u>have to</u> wear a uniform.'}
      ]},
      { type:'choice', name:'اختر الصواب', hint:'الفعلُ مجرَّدٌ بعدها', qs:[
        {p:'You should ___ some water.', ask:'اختر', o:['drink','drinks'], a:0, w:'مجرَّد بعد should.', f:'You should <u>drink</u> water.'},
        {p:'You have an exam. You ___ study.', ask:'اختر', o:['must','mustn’t'], a:0, w:'واجبٌ ← must.', f:'You <u>must</u> study.'},
        {p:'It’s dangerous. You ___ climb that.', ask:'اختر', o:['shouldn’t','should'], a:0, w:'نصحٌ بالترك ← shouldn’t.', f:'You <u>shouldn’t</u> climb that.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['You','must','to','wait','here','.'], bad:2, fix:'—', w:'لا نضعُ <code>to</code> بعد must.', f:'You must <u>wait</u> here.'},
        {words:['You','should','drinks','water','.'], bad:2, fix:'drink', w:'مجرَّد بعد should ← <code>drink</code>.', f:'You should <u>drink</u> water.'},
        {words:['You','mustn’t','running','inside','.'], bad:2, fix:'run', w:'مجرَّد بعد mustn’t ← <code>run</code>.', f:'You mustn’t <u>run</u> inside.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب', qs:[
        {sol:['You','should','rest','at','home','.'], w:'نصحٌ.', f:'You should rest at home.'},
        {sol:['You','mustn’t','play','with','fire','.'], w:'منعٌ.', f:'You mustn’t play with fire.'},
        {sol:['You','have','to','wear','a','helmet','.'], w:'واجبٌ (have to).', f:'You have to wear a helmet.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'mustn’t →', ask:'اختر', o:['منع','نصح'], a:0, w:'منعٌ.', f:'← <u>منع</u>'},
        {p:'You are tired. You ___ sleep early.', ask:'اختر', o:['should','mustn’t'], a:0, w:'نصحٌ ← should.', f:'You <u>should</u> sleep early.'},
        {p:'You ___ cross the street when it’s red.', ask:'اختر', o:['mustn’t','should'], a:0, w:'منعٌ ← mustn’t.', f:'You <u>mustn’t</u> cross ...'},
        {p:'بعد should الفعلُ:', ask:'اختر', o:['مجرَّد','بـ -ing'], a:0, w:'مجرَّد.', f:'← <u>مجرَّد</u>'},
        {p:'Everyone ___ follow the safety rules. (واجب)', ask:'اختر', o:['must','shouldn’t'], a:0, w:'واجبٌ ← must.', f:'... <u>must</u> follow the rules.'}
      ]}
    ]
  };
})();
