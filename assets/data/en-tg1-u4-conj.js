/* ============================================================
   درس: Grammar — Conjunctions: and, but, because, so, when
   الإنجليزية · الرابع الابتدائي · ف١ · Top Goal 1 · Unit 4 (After-School Fun)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب المحفوظ).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG1_U4_CONJ'] = {
    id:'EN_TG1_U4_CONJ',
    title:'Grammar — and, but, because, so, when',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'أدواتُ الربط',
      intro:'أدواتُ الربطِ تصلُ بين جملتين: <span class="tok-focus">and</span> للإضافة ، <span class="tok-focus">but</span> للتضادّ ، <span class="tok-focus">because</span> للسبب ، <span class="tok-focus">so</span> للنتيجة ، <span class="tok-focus">when</span> للزمن. اختَرِ الأداةَ حسبَ العلاقةِ بين الجملتين.',
      formula:'sentence + <span class="tok-focus">and/but/because/so/when</span> + sentence',
      table:[['<span class="tok-focus">and</span>','إضافة — I read <span class="tok-focus">and</span> I write.'],['<span class="tok-focus">but</span>','تضادّ — I like tea <span class="tok-focus">but</span> not coffee.'],['<span class="tok-focus">because</span>','سبب — I ran <span class="tok-focus">because</span> I was late.'],['<span class="tok-focus">so</span>','نتيجة — It rained, <span class="tok-focus">so</span> I stayed home.'],['<span class="tok-focus">when</span>','زمن — I smile <span class="tok-focus">when</span> I play.']],
      examples:['I went to the mall <span class="tok-focus">because</span> I had to buy clothes.','I want to play the guitar, <span class="tok-focus">so</span> I take lessons.'],
      trick:'سبب؟ <span class="tok-focus">because</span>. نتيجة؟ <span class="tok-focus">so</span>. تضادّ؟ <span class="tok-focus">but</span>. زمن؟ <span class="tok-focus">when</span>. إضافة؟ <span class="tok-focus">and</span>.'
    },
    stages:[
      { type:'choice', name:'الأداة ← المعنى', hint:'اربطِ الأداةَ بوظيفتها', qs:[
        {p:'because →', ask:'اختر', o:['سبب','نتيجة'], a:0, w:'<code>because</code> للسبب.', f:'because ← <u>سبب</u>'},
        {p:'so →', ask:'اختر', o:['نتيجة','تضادّ'], a:0, w:'<code>so</code> للنتيجة.', f:'so ← <u>نتيجة</u>'},
        {p:'but →', ask:'اختر', o:['تضادّ','إضافة'], a:0, w:'<code>but</code> للتضادّ.', f:'but ← <u>تضادّ</u>'},
        {p:'when →', ask:'اختر', o:['زمن','سبب'], a:0, w:'<code>when</code> للزمن.', f:'when ← <u>زمن</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'ما العلاقةُ بين الجملتين؟', qs:[
        {p:'I stayed home ___ I was sick.', o:['because','so','but'], a:0, w:'سببٌ ← <code>because</code>.', f:'... <u>because</u> I was sick.'},
        {p:'It was hot, ___ we drank water.', o:['so','because','but'], a:0, w:'نتيجةٌ ← <code>so</code>.', f:'..., <u>so</u> we drank water.'},
        {p:'I like apples ___ I don’t like onions.', o:['but','so','when'], a:0, w:'تضادٌّ ← <code>but</code>.', f:'... <u>but</u> I don’t like onions.'},
        {p:'I feel happy ___ I see my friends.', o:['when','because','but'], a:0, w:'زمنٌ ← <code>when</code>.', f:'... <u>when</u> I see my friends.'}
      ]},
      { type:'choice', name:'اختر الأداة', hint:'حسبَ المعنى', qs:[
        {p:'I was tired, ___ I went to bed early.', ask:'اختر', o:['so','because'], a:0, w:'نتيجةٌ ← so.', f:'..., <u>so</u> I went to bed early.'},
        {p:'She smiled ___ she was happy.', ask:'اختر', o:['because','but'], a:0, w:'سببٌ ← because.', f:'... <u>because</u> she was happy.'},
        {p:'I read books ___ I write stories.', ask:'اختر', o:['and','but'], a:0, w:'إضافةٌ ← and.', f:'... <u>and</u> I write stories.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الأداة الخاطئة', qs:[
        {words:['I','stayed','home','so','I','was','sick','.'], bad:3, fix:'because', w:'السببُ ← <code>because</code> لا <code>so</code>.', f:'I stayed home <u>because</u> I was sick.'},
        {words:['It','rained',',','because','we','went','inside','.'], bad:3, fix:'so', w:'النتيجةُ ← <code>so</code>.', f:'It rained, <u>so</u> we went inside.'},
        {words:['I','like','tea','and','not','coffee','.'], bad:3, fix:'but', w:'التضادُّ ← <code>but</code>.', f:'I like tea <u>but</u> not coffee.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب', qs:[
        {sol:['I','was','late',',','so','I','ran','.'], w:'نتيجةٌ ← so.', f:'I was late, so I ran.'},
        {sol:['I','smile','when','I','play','.'], w:'زمنٌ ← when.', f:'I smile when I play.'},
        {sol:['I','read','and','write','every','day','.'], w:'إضافةٌ ← and.', f:'I read and write every day.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'because →', ask:'اختر', o:['سبب','نتيجة'], a:0, w:'سبب.', f:'← <u>سبب</u>'},
        {p:'It was cold, ___ I wore a coat.', ask:'اختر', o:['so','because'], a:0, w:'نتيجةٌ ← so.', f:'..., <u>so</u> I wore a coat.'},
        {p:'I play football ___ I don’t play tennis.', ask:'اختر', o:['but','so'], a:0, w:'تضادّ.', f:'... <u>but</u> ...'},
        {p:'so →', ask:'اختر', o:['نتيجة','زمن'], a:0, w:'نتيجة.', f:'← <u>نتيجة</u>'},
        {p:'I was happy ___ I met my cousin.', ask:'اختر', o:['when','so'], a:0, w:'زمنٌ ← when.', f:'... <u>when</u> I met my cousin.'}
      ]}
    ]
  };
})();
