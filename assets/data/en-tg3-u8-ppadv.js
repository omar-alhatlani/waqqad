/* ============================================================
   درس: Grammar — Present Perfect + adverbs (already/ever/just/never/yet)
   الإنجليزية · السادس الابتدائي · ف١ · Top Goal 3 · Unit 8 (Recent Events)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG3_U8_PPADV'] = {
    id:'EN_TG3_U8_PPADV',
    title:'Grammar — Present Perfect + adverbs',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'المضارع التامّ مع الظروف',
      intro:'مع المضارع التامّ نستعملُ ظروفًا لها مواضعُ ثابتة: <span class="tok-focus">already</span> و<span class="tok-focus">just</span> و<span class="tok-focus">never</span> تأتي <b>بين</b> have/has والتصريفِ الثالث. و<span class="tok-focus">yet</span> تأتي في <b>آخر</b> الجملة في النفي والسؤال. و<span class="tok-focus">ever</span> في السؤال (Have you <span class="tok-focus">ever</span> ...?).',
      formula:'have/has + (<span class="tok-focus">already</span>/<span class="tok-focus">just</span>/<span class="tok-focus">never</span>) + V3 ... <span class="tok-focus">yet</span>?',
      table:[['already/just/never','بين have/has و V3'],['<span class="tok-focus">yet</span>','آخرَ الجملة (نفي/سؤال)'],['<span class="tok-focus">ever</span>','في السؤال: Have you <span class="tok-focus">ever</span>...?'],['مثال','I have <span class="tok-focus">already</span> eaten.']],
      examples:['I have <span class="tok-focus">just</span> finished my exams.','She hasn\'t graduated <span class="tok-focus">yet</span>.'],
      trick:'<span class="tok-focus">already/just/never</span> مكانُها بين have/has و V3، و<span class="tok-focus">yet</span> في آخر الجملة (نفي/سؤال)، و<span class="tok-focus">ever</span> في السؤال.'
    },
    stages:[
      { type:'choice', name:'أين الظرف؟', hint:'already/just/never وسط · yet آخِر', qs:[
        {p:'I have ___ finished my homework.', ask:'اختر (وسط)', o:['already','yet'], a:0, w:'<code>already</code> بين have و V3.', f:'I have <u>already</u> finished ...'},
        {p:'She hasn\'t arrived ___ .', ask:'اختر (آخِر)', o:['yet','already'], a:0, w:'<code>yet</code> آخرَ الجملة في النفي.', f:'... arrived <u>yet</u>.'},
        {p:'Have you ___ visited Riyadh?', ask:'اختر (سؤال)', o:['ever','yet'], a:0, w:'<code>ever</code> في السؤال.', f:'Have you <u>ever</u> visited ...?'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'انتبه لموضع الظرف', qs:[
        {p:'We have ___ seen this movie. (من قبل، أبدًا)', o:['never','yet'], a:0, w:'<code>never</code> بين have و V3.', f:'We have <u>never</u> seen ...'},
        {p:'He has just ___ from school.', o:['graduated','graduate'], a:0, w:'التامّ ← التصريف الثالث.', f:'... just <u>graduated</u>.'},
        {p:'I haven\'t decided ___ .', o:['yet','just'], a:0, w:'<code>yet</code> آخرَ النفي.', f:'... decided <u>yet</u>.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['I','have','finished','already','.'], bad:3, fix:'موضعها بين have و finished', w:'<code>already</code> تأتي بين have والتصريفِ الثالث: I have <b>already</b> finished.', f:'I have <u>already</u> finished.'},
        {words:['She','hasn\'t','yet','arrived','.'], bad:2, fix:'yet آخِر الجملة', w:'<code>yet</code> تأتي في آخر الجملة.', f:'She hasn\'t arrived <u>yet</u>.'},
        {words:['I','have','never','saw','it','.'], bad:3, fix:'seen', w:'المضارعُ التامّ ← التصريف الثالث <code>seen</code>.', f:'I have never <u>seen</u> it.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['I','have','already','eaten','.'], w:'<code>already</code> بين have و V3.', f:'I have already eaten.'},
        {sol:['She','hasn\'t','arrived','yet','.'], w:'<code>yet</code> آخرَ الجملة.', f:'She hasn\'t arrived yet.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'I have ___ finished.', ask:'اختر', o:['already','yet'], a:0, w:'already وسط.', f:'I have <u>already</u> finished.'},
        {p:'She hasn\'t arrived ___ .', ask:'اختر', o:['yet','already'], a:0, w:'yet آخِر.', f:'... <u>yet</u>.'},
        {p:'موضعُ already/just/never:', ask:'اختر', o:['بين have/has و V3','آخر الجملة'], a:0, w:'بين have/has والتصريف الثالث.', f:'← <u>بين have/has و V3</u>'},
        {p:'Have you ___ been there?', ask:'اختر', o:['ever','yet'], a:0, w:'ever في السؤال.', f:'Have you <u>ever</u> ...?'},
        {p:'yet مكانُها:', ask:'اختر', o:['آخر الجملة','أوّلها'], a:0, w:'آخرَ الجملة (نفي/سؤال).', f:'← <u>آخر الجملة</u>'}
      ]}
    ]
  };
})();
