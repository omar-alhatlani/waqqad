/* ============================================================
   درس: Grammar — Present Perfect with already, just, yet
   الإنجليزية · الخامس الابتدائي · ف١ · Top Goal 2 · Unit 7 (Trips)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG2_U7_ALREADYYET'] = {
    id:'EN_TG2_U7_ALREADYYET',
    title:'Grammar — Present Perfect: already, just, yet',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'already · just · yet',
      intro:'مع المضارع التامّ نستعملُ ظروفًا لها مواضعُ ثابتة: <span class="tok-focus">already</span> (وقعَ قبلَ الآن) و<span class="tok-focus">just</span> (قبلَ قليل) تأتيان <b>بين</b> have/has والتصريفِ الثالث. و<span class="tok-focus">yet</span> (حتى الآن) تأتي في <b>آخر</b> الجملة في النفي والسؤال.',
      formula:'have/has + (<span class="tok-focus">already</span>/<span class="tok-focus">just</span>) + V3 ... <span class="tok-focus">yet</span>?',
      table:[['already/just','بين have/has و V3'],['<span class="tok-focus">yet</span>','آخِرَ الجملة (نفي/سؤال)'],['already','I have <span class="tok-focus">already</span> packed.'],['yet','She hasn\'t arrived <span class="tok-focus">yet</span>.']],
      examples:['We have <span class="tok-focus">just</span> arrived at the airport.','Have you booked the hotel <span class="tok-focus">yet</span>?'],
      trick:'<span class="tok-focus">already</span>/<span class="tok-focus">just</span> مكانُهما بين have/has و V3، و<span class="tok-focus">yet</span> في آخر الجملة (نفي/سؤال).'
    },
    stages:[
      { type:'choice', name:'أين الظرف؟', hint:'already/just وسط · yet آخِر', qs:[
        {p:'I have ___ packed my bag. (قبل قليل)', ask:'اختر', o:['just','yet'], a:0, w:'<code>just</code> بين have و V3.', f:'I have <u>just</u> packed ...'},
        {p:'She hasn\'t left ___ .', ask:'اختر', o:['yet','already'], a:0, w:'<code>yet</code> آخرَ النفي.', f:'... left <u>yet</u>.'},
        {p:'We have ___ seen the city.', ask:'اختر', o:['already','yet'], a:0, w:'<code>already</code> وسط.', f:'... have <u>already</u> seen ...'},
        {p:'Have you arrived ___ ?', ask:'اختر', o:['yet','just'], a:0, w:'<code>yet</code> آخرَ السؤال.', f:'... arrived <u>yet</u>?'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'انتبه لموضع الظرف', qs:[
        {p:'They have ___ boarded the plane. (قبل قليل)', o:['just','yet'], a:0, w:'just وسط.', f:'... have <u>just</u> boarded ...'},
        {p:'He has ___ finished packing. (تمّ فعلًا)', o:['already','yet'], a:0, w:'already وسط.', f:'... has <u>already</u> finished ...'},
        {p:'I haven\'t bought a ticket ___ .', o:['yet','just'], a:0, w:'yet آخِر النفي.', f:'... ticket <u>yet</u>.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['I','have','packed','already','.'], bad:3, fix:'موضعها بين have و packed', w:'<code>already</code> بين have والتصريفِ الثالث.', f:'I have <u>already</u> packed.'},
        {words:['She','hasn\'t','yet','arrived','.'], bad:2, fix:'yet آخِر الجملة', w:'<code>yet</code> تأتي في آخر الجملة.', f:'She hasn\'t arrived <u>yet</u>.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'I have ___ packed. (قبل قليل)', ask:'اختر', o:['just','yet'], a:0, w:'just وسط.', f:'← <u>just</u>'},
        {p:'She hasn\'t arrived ___ .', ask:'اختر', o:['yet','already'], a:0, w:'yet آخِر.', f:'← <u>yet</u>'},
        {p:'موضعُ already/just:', ask:'اختر', o:['بين have/has و V3','آخر الجملة'], a:0, w:'بين have/has والتصريف الثالث.', f:'← <u>بين have/has و V3</u>'},
        {p:'yet مكانُها:', ask:'اختر', o:['آخر الجملة','أوّلها'], a:0, w:'آخر الجملة.', f:'← <u>آخر الجملة</u>'}
      ]}
    ]
  };
})();
