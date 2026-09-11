/* ============================================================
   درس: Grammar — a few / a little (كميات)
   الإنجليزية · السادس الابتدائي · ف١ · Top Goal 3 · Unit 2 (Lifestyles)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG3_U2_QUANT'] = {
    id:'EN_TG3_U2_QUANT',
    title:'Grammar — a few / a little',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'a few / a little',
      intro:'نستعملُ <span class="tok-focus">a few</span> مع الأسماء <b>المعدودة الجمع</b> (التي تنتهي بـ <span class="tok-plural">s</span> مثل apples، books)، ونستعملُ <span class="tok-focus">a little</span> مع الأسماء <b>غير المعدودة</b> (التي لا تُجمَع مثل water، milk، salt). كلاهما يعني «قليلًا / بعضًا».',
      formula:'<span class="tok-focus">a few</span> + [countable + <span class="tok-plural">s</span>]&nbsp;&nbsp;·&nbsp;&nbsp;<span class="tok-focus">a little</span> + [uncountable]',
      table:[['<span class="tok-focus">a few</span>','مع المعدود الجمع: a few apple<span class="tok-plural">s</span>'],['<span class="tok-focus">a little</span>','مع غير المعدود: a little water'],['معدودٌ جمع','book<span class="tok-plural">s</span> · egg<span class="tok-plural">s</span> · friend<span class="tok-plural">s</span>'],['غير معدود','milk · salt · money · time']],
      examples:['I have <span class="tok-focus">a few</span> friend<span class="tok-plural">s</span> at school. (معدودٌ جمع)','Add <span class="tok-focus">a little</span> salt to the food. (غير معدود)'],
      trick:'إن كان الاسمُ ينتهي بـ <span class="tok-plural">s</span> الجمع (معدود) ← <span class="tok-focus">a few</span>. وإن كان لا يُعَدّ (ماءٌ، ملحٌ، وقت) ← <span class="tok-focus">a little</span>.'
    },
    stages:[
      { type:'choice', name:'few أم little؟', hint:'معدودٌ جمع ← few · غير معدود ← little', qs:[
        {p:'I have a ___ books.', ask:'اختر', o:['few','little'], a:0, w:'books معدودٌ جمع ← <code>a few</code>.', f:'a <u>few</u> books'},
        {p:'Add a ___ salt.', ask:'اختر', o:['little','few'], a:0, w:'salt غير معدود ← <code>a little</code>.', f:'a <u>little</u> salt'},
        {p:'There is a ___ water in the glass.', ask:'اختر', o:['little','few'], a:0, w:'water غير معدود ← <code>a little</code>.', f:'a <u>little</u> water'},
        {p:'She has a ___ friends here.', ask:'اختر', o:['few','little'], a:0, w:'friends معدودٌ جمع ← <code>a few</code>.', f:'a <u>few</u> friends'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'انظر: هل الاسمُ معدودٌ جمع أم لا؟', qs:[
        {p:'I need a ___ eggs for the cake.', o:['few','little'], a:0, w:'eggs معدود ← few.', f:'a <u>few</u> eggs'},
        {p:'We have a ___ time before class.', o:['little','few'], a:0, w:'time غير معدود ← little.', f:'a <u>little</u> time'},
        {p:'He bought a ___ apples.', o:['few','little'], a:0, w:'apples معدود ← few.', f:'a <u>few</u> apples'},
        {p:'Put a ___ milk in the tea.', o:['little','few'], a:0, w:'milk غير معدود ← little.', f:'a <u>little</u> milk'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['I','have','a','little','books','.'], bad:3, fix:'few', w:'books معدودٌ جمع ← <code>a few</code>.', f:'I have a <u>few</u> books.'},
        {words:['Add','a','few','salt','.'], bad:2, fix:'little', w:'salt غير معدود ← <code>a little</code>.', f:'Add a <u>little</u> salt.'},
        {words:['There','is','a','few','water','.'], bad:3, fix:'little', w:'water غير معدود ← <code>a little</code>.', f:'There is a <u>little</u> water.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'I have a ___ books.', ask:'اختر', o:['few','little'], a:0, w:'معدود ← few.', f:'a <u>few</u> books'},
        {p:'Add a ___ salt.', ask:'اختر', o:['little','few'], a:0, w:'غير معدود ← little.', f:'a <u>little</u> salt'},
        {p:'a few يُستعمل مع:', ask:'اختر', o:['المعدود الجمع','غير المعدود'], a:0, w:'المعدود الجمع (ينتهي بـ s).', f:'← <u>المعدود الجمع</u>'},
        {p:'He needs a ___ eggs.', ask:'اختر', o:['few','little'], a:0, w:'eggs معدود ← few.', f:'a <u>few</u> eggs'},
        {p:'a little يُستعمل مع:', ask:'اختر', o:['غير المعدود','المعدود الجمع'], a:0, w:'غير المعدود (water/salt).', f:'← <u>غير المعدود</u>'}
      ]}
    ]
  };
})();
