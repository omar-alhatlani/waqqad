/* ============================================================
   درس: Grammar — Question Tags (الأسئلة الذيليّة)
   الإنجليزية · الخامس الابتدائي · ف١ · Top Goal 2 · Unit 3 (Job Paths)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG2_U3_TAGS'] = {
    id:'EN_TG2_U3_TAGS',
    title:'Grammar — Question Tags',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'السؤالُ الذيليّ',
      intro:'<b>السؤالُ الذيليّ</b> سؤالٌ قصيرٌ نضيفُه في آخر الجملة للتأكيد. القاعدة: إذا كانتِ الجملةُ <b>مثبتة</b> فالذيلُ <b>منفيّ</b>، وإذا كانت <b>منفية</b> فالذيلُ <b>مثبت</b>، ونستعملُ الفعلَ المساعدَ نفسَه. مثال: «You are a pilot, <span class="tok-focus">aren\'t you</span>?» و«You can\'t swim, <span class="tok-focus">can you</span>?».',
      formula:'positive , <span class="tok-focus">negative tag</span>? &nbsp;·&nbsp; negative , <span class="tok-focus">positive tag</span>?',
      table:[['مثبتة ← ذيلٌ منفيّ','She is a nurse, <span class="tok-focus">isn\'t she</span>?'],['منفية ← ذيلٌ مثبت','He isn\'t here, <span class="tok-focus">is he</span>?'],['can','You can drive, <span class="tok-focus">can\'t you</span>?'],['المساعد','نكرّرُ المساعدَ نفسَه']],
      examples:['This is a theater, <span class="tok-focus">isn\'t it</span>? (مثبتة ← ذيلٌ منفيّ)','You don\'t like fish, <span class="tok-focus">do you</span>? (منفية ← ذيلٌ مثبت)'],
      trick:'الجملةُ المثبتةُ ← ذيلٌ <b>منفيّ</b>، والمنفيةُ ← ذيلٌ <b>مثبت</b>. وكرّرِ الفعلَ المساعدَ (is/are/can/do...).'
    },
    stages:[
      { type:'choice', name:'اختر الذيل', hint:'مثبتة ← منفيّ · منفية ← مثبت', qs:[
        {p:'She is a nurse, ___ ?', ask:'اختر', o:["isn't she","is she"], a:0, w:'مثبتة ← ذيلٌ منفيّ.', f:'... <u>isn\'t she</u>?'},
        {p:'He isn\'t here, ___ ?', ask:'اختر', o:["is he","isn't he"], a:0, w:'منفية ← ذيلٌ مثبت.', f:'... <u>is he</u>?'},
        {p:'You can drive, ___ ?', ask:'اختر', o:["can't you","can you"], a:0, w:'مثبتة ← ذيلٌ منفيّ.', f:'... <u>can\'t you</u>?'},
        {p:'They are ready, ___ ?', ask:'اختر', o:["aren't they","are they"], a:0, w:'مثبتة ← منفيّ.', f:'... <u>aren\'t they</u>?'}
      ]},
      { type:'gap', name:'أكمل الذيل', hint:'كرّرِ المساعدَ واعكسِ الإثبات', qs:[
        {p:'This is a gallery, ___ it?', o:["isn't","is"], a:0, w:'مثبتة ← isn\'t.', f:'... <u>isn\'t</u> it?'},
        {p:'You don\'t like it, ___ you?', o:['do',"don't"], a:0, w:'منفية ← do (مثبت).', f:'... <u>do</u> you?'},
        {p:'She can cook, ___ she?', o:["can't",'can'], a:0, w:'مثبتة ← can\'t.', f:'... <u>can\'t</u> she?'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['She','is','a','pilot',',','is','she','?'], bad:5, fix:"isn't", w:'الجملةُ مثبتةٌ ← الذيلُ منفيّ <code>isn\'t she</code>.', f:'..., <u>isn\'t</u> she?'},
        {words:['You','can\'t','swim',',','can\'t','you','?'], bad:4, fix:'can', w:'الجملةُ منفيةٌ ← الذيلُ مثبت <code>can you</code>.', f:'..., <u>can</u> you?'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'She is a nurse, ___ ?', ask:'اختر', o:["isn't she","is she"], a:0, w:'مثبتة ← منفيّ.', f:'← <u>isn\'t she</u>'},
        {p:'He isn\'t here, ___ ?', ask:'اختر', o:["is he","isn't he"], a:0, w:'منفية ← مثبت.', f:'← <u>is he</u>'},
        {p:'الجملةُ المثبتةُ ذيلُها:', ask:'اختر', o:['منفيّ','مثبت'], a:0, w:'منفيّ.', f:'← <u>منفيّ</u>'},
        {p:'You can drive, ___ ?', ask:'اختر', o:["can't you","can you"], a:0, w:'مثبتة ← منفيّ.', f:'← <u>can\'t you</u>'},
        {p:'في السؤال الذيليّ نكرّر:', ask:'اختر', o:['الفعل المساعد','الفاعل فقط'], a:0, w:'الفعل المساعد.', f:'← <u>الفعل المساعد</u>'}
      ]}
    ]
  };
})();
