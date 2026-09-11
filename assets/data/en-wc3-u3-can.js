/* ============================================================
   درس: Grammar — can / can't (ability)
   الإنجليزية · الثالث الابتدائي · ف١ · We Can! 3 · Unit 3 (Sports and Activities)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب المحفوظ).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_WC3_U3_CAN'] = {
    id:'EN_WC3_U3_CAN',
    title:'Grammar — can / can’t',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'أستطيعُ ولا أستطيع',
      intro:'نُعبّرُ عن <b>القدرة</b> بـ <span class="tok-focus">can</span> (أستطيع)، وعن <b>عدمِها</b> بـ <span class="tok-focus">can’t</span> (لا أستطيع). يتبعُهما فعلٌ <b>مجرَّد</b>. السؤال: <span class="tok-focus">Can</span> you swim? والجواب: Yes, I <span class="tok-focus">can</span>. / No, I <span class="tok-focus">can’t</span>.',
      formula:'subject + <span class="tok-focus">can / can’t</span> + verb (base)',
      table:[['إثبات','I <span class="tok-focus">can</span> swim.'],['نفي','I <span class="tok-focus">can’t</span> fly.'],['سؤال','<span class="tok-focus">Can</span> you run fast?'],['جواب','Yes, I <span class="tok-focus">can</span>. / No, I <span class="tok-focus">can’t</span>.']],
      examples:['I <span class="tok-focus">can</span> play football very well.','A fish <span class="tok-focus">can</span> swim, but it <span class="tok-focus">can’t</span> walk.'],
      trick:'<span class="tok-focus">can</span> = أستطيع، <span class="tok-focus">can’t</span> = لا أستطيع. وبعدَهما فعلٌ مجرَّدٌ دائمًا.'
    },
    stages:[
      { type:'choice', name:'المعنى', hint:'can أستطيع · can’t لا أستطيع', qs:[
        {p:'can →', ask:'اختر', o:['أستطيع','لا أستطيع'], a:0, w:'<code>can</code> = أستطيع.', f:'← <u>أستطيع</u>'},
        {p:'can’t →', ask:'اختر', o:['لا أستطيع','أستطيع'], a:0, w:'<code>can’t</code> = لا أستطيع.', f:'← <u>لا أستطيع</u>'},
        {p:'بعد can يأتي الفعلُ:', ask:'اختر', o:['مجرَّدًا','بـ -ing'], a:0, w:'فعلٌ مجرَّد.', f:'← <u>مجرَّدًا</u>'},
        {p:'أداةُ سؤالِ القدرة:', ask:'اختر', o:['Can','Do'], a:0, w:'<code>Can you...?</code>.', f:'← <u>Can</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'can / can’t + فعل مجرَّد', qs:[
        {p:'I ___ swim in the sea.', o:['can','am','do'], a:0, w:'القدرة ← <code>can</code>.', f:'I <u>can</u> swim.'},
        {p:'A bird can fly, but a fish ___ .', o:['can’t','can','don’t'], a:0, w:'السمكةُ لا تطير ← <code>can’t</code>.', f:'... a fish <u>can’t</u>.'},
        {p:'Can you ___ fast?', o:['run','runs','running'], a:0, w:'مجرَّد بعد can.', f:'Can you <u>run</u> fast?'}
      ]},
      { type:'choice', name:'اختر الصواب', hint:'الفعلُ مجرَّدٌ بعد can', qs:[
        {p:'I can ___ a bike.', ask:'اختر', o:['ride','rides'], a:0, w:'مجرَّد بعد can.', f:'I can <u>ride</u> a bike.'},
        {p:'Can you play football? —', ask:'اختر', o:['Yes, I can.','Yes, I play.'], a:0, w:'الجوابُ بـ can.', f:'<u>Yes, I can.</u>'},
        {p:'A baby ___ walk yet.', ask:'اختر', o:['can’t','can'], a:0, w:'الرضيعُ لا يمشي بعد.', f:'A baby <u>can’t</u> walk yet.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['I','can','to','swim','.'], bad:2, fix:'—', w:'لا نضعُ <code>to</code> بعد can.', f:'I can <u>swim</u>.'},
        {words:['She','can','runs','fast','.'], bad:2, fix:'run', w:'مجرَّد بعد can ← <code>run</code>.', f:'She can <u>run</u> fast.'},
        {words:['A','fish','can','fly','.'], bad:3, fix:'swim', w:'السمكةُ تسبحُ ولا تطير.', f:'A fish can <u>swim</u>.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب', qs:[
        {sol:['I','can','play','football','.'], w:'القدرة ← can.', f:'I can play football.'},
        {sol:['Can','you','swim','?'], w:'سؤالُ القدرة.', f:'Can you swim?'},
        {sol:['She','can’t','ride','a','horse','.'], w:'نفيُ القدرة.', f:'She can’t ride a horse.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'can’t →', ask:'اختر', o:['لا أستطيع','أستطيع'], a:0, w:'لا أستطيع.', f:'← <u>لا أستطيع</u>'},
        {p:'I ___ jump high.', ask:'اختر', o:['can','am'], a:0, w:'القدرة ← can.', f:'I <u>can</u> jump high.'},
        {p:'Can you swim? — No, I ___ .', ask:'اختر', o:['can’t','don’t'], a:0, w:'نفيُ القدرة.', f:'No, I <u>can’t</u>.'},
        {p:'بعد can الفعلُ:', ask:'اختر', o:['مجرَّد','بـ to'], a:0, w:'مجرَّد.', f:'← <u>مجرَّد</u>'},
        {p:'She can ___ a bike.', ask:'اختر', o:['ride','rides'], a:0, w:'مجرَّد بعد can.', f:'She can <u>ride</u> a bike.'}
      ]}
    ]
  };
})();
