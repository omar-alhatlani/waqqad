/* ============================================================
   درس: Grammar — Predictions: may / might / could (التوقّع والاحتمال)
   الإنجليزية · السادس الابتدائي · ف١ · Top Goal 3 · Unit 6 (Environments)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG3_U6_MODALS'] = {
    id:'EN_TG3_U6_MODALS',
    title:'Grammar — Predictions: may / might / could',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'التوقّع والاحتمال: may / might / could',
      intro:'للتعبير عن <b>احتمالٍ</b> أو <b>توقّعٍ غير مؤكَّد</b> نستعملُ <span class="tok-focus">may</span> أو <span class="tok-focus">might</span> أو <span class="tok-focus">could</span> ثم الفعلَ <b>مجرَّدًا</b> (بلا -s وبلا to): «It <span class="tok-focus">might</span> rain». وكلُّها تدلّ على «رُبّما»، والفعلُ بعدها لا يتغيّر مع أيّ فاعل.',
      formula:'<span class="tok-focus">may</span> / <span class="tok-focus">might</span> / <span class="tok-focus">could</span> + base',
      table:[['may','It <span class="tok-focus">may</span> be cold.'],['might','We <span class="tok-focus">might</span> get lost.'],['could','It <span class="tok-focus">could</span> rain.'],['بعدها','الفعلُ مجرَّدٌ (بلا -s / to)']],
      examples:['The path is dark; we <span class="tok-focus">might</span> need a map.','It <span class="tok-focus">could</span> be foggy near the ocean.'],
      trick:'<span class="tok-focus">may / might / could</span> = «رُبّما»، ويتبعُها الفعلُ مجرَّدًا مهما كان الفاعل (بلا -s وبلا to).'
    },
    stages:[
      { type:'choice', name:'الشكلُ الصحيح', hint:'بعد may/might/could فعلٌ مجرَّد', qs:[
        {p:'It might ___ tomorrow.', ask:'اختر', o:['rain','rains'], a:0, w:'بعد <code>might</code> فعلٌ مجرَّدٌ ← <code>rain</code>.', f:'It might <u>rain</u>.'},
        {p:'We may ___ the castle today.', ask:'اختر', o:['visit','to visit'], a:0, w:'بعد <code>may</code> بلا <code>to</code>.', f:'We may <u>visit</u> ...'},
        {p:'It could ___ cold tonight.', ask:'اختر', o:['be','is'], a:0, w:'بعد <code>could</code> ← <code>be</code>.', f:'It could <u>be</u> cold.'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'may/might/could + مجرّد', qs:[
        {p:'The sky is grey; it ___ rain soon.', o:['might','mights','to might'], a:0, w:'<code>might + rain</code>.', f:'... it <u>might</u> rain ...'},
        {p:'We might ___ lost in the fog.', o:['get','gets','to get'], a:0, w:'بعد might فعلٌ مجرَّد.', f:'... might <u>get</u> lost.'},
        {p:'She may ___ late.', o:['be','is','being'], a:0, w:'<code>may be</code>.', f:'She may <u>be</u> late.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['It','might','rains','.'], bad:2, fix:'rain', w:'بعد <code>might</code> فعلٌ مجرَّدٌ بلا -s.', f:'It might <u>rain</u>.'},
        {words:['We','may','to','go','.'], bad:2, fix:'تُحذف', w:'بعد <code>may</code> بلا <code>to</code>.', f:'We may <u>go</u>.'},
        {words:['It','could','is','cold','.'], bad:2, fix:'be', w:'بعد <code>could</code> ← <code>be</code>.', f:'It could <u>be</u> cold.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['It','might','rain','tomorrow','.'], w:'<code>might + مجرَّد</code>.', f:'It might rain tomorrow.'},
        {sol:['We','could','get','lost','.'], w:'<code>could + مجرَّد</code>.', f:'We could get lost.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'It might ___ tomorrow.', ask:'اختر', o:['rain','rains'], a:0, w:'مجرَّد.', f:'It might <u>rain</u>.'},
        {p:'We may ___ the castle.', ask:'اختر', o:['visit','to visit'], a:0, w:'بلا to.', f:'We may <u>visit</u> ...'},
        {p:'may / might / could تدلّ على:', ask:'اختر', o:['الاحتمال','التأكيد القاطع'], a:0, w:'احتمالٌ (رُبّما).', f:'← <u>الاحتمال</u>'},
        {p:'بعد could يأتي:', ask:'اختر', o:['فعلٌ مجرَّد','to + فعل'], a:0, w:'فعلٌ مجرَّد.', f:'← <u>فعلٌ مجرَّد</u>'},
        {p:'It could ___ cold.', ask:'اختر', o:['be','is'], a:0, w:'be.', f:'It could <u>be</u> cold.'}
      ]}
    ]
  };
})();
