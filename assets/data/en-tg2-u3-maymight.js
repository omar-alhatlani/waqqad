/* ============================================================
   درس: Grammar — may / might (الاحتمال والتوقّع)
   الإنجليزية · الخامس الابتدائي · ف١ · Top Goal 2 · Unit 3 (Job Paths)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG2_U3_MAYMIGHT'] = {
    id:'EN_TG2_U3_MAYMIGHT',
    title:'Grammar — may / might',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'الاحتمالُ بـ may / might',
      intro:'نستعملُ <span class="tok-focus">may</span> و<span class="tok-focus">might</span> للتعبير عن <b>احتمالٍ</b> في المستقبل (شيءٌ ممكنٌ لكنّه غيرُ مؤكَّد)، ويتبعُهما الفعلُ <b>مجرَّدًا</b> (بلا -s وبلا to). النفيُ: <span class="tok-focus">may not</span> / <span class="tok-focus">might not</span>. مثال: «She <span class="tok-focus">may</span> be a pilot» (رُبّما تصيرُ طيّارة).',
      formula:'<span class="tok-focus">may</span> / <span class="tok-focus">might</span> + base (possibility)',
      table:[['احتمال','She <span class="tok-focus">may</span> be a pilot.'],['احتمال','He <span class="tok-focus">might</span> join us.'],['نفي','He <span class="tok-focus">might not</span> come.'],['بعدهما','فعلٌ مجرَّد (بلا -s / to)']],
      examples:['I <span class="tok-focus">might</span> become an engineer. (احتمال)','She <span class="tok-focus">may not</span> like this job. (نفيُ الاحتمال)'],
      trick:'<span class="tok-focus">may / might</span> = «رُبّما»، ويتبعُهما فعلٌ مجرَّدٌ مهما كان الفاعل. النفيُ بإضافة <span class="tok-focus">not</span>.'
    },
    stages:[
      { type:'choice', name:'الشكلُ الصحيح', hint:'بعد may/might فعلٌ مجرَّد', qs:[
        {p:'She may ___ a pilot.', ask:'اختر', o:['be','is'], a:0, w:'بعد may ← <code>be</code>.', f:'She may <u>be</u> a pilot.'},
        {p:'He might ___ us later.', ask:'اختر', o:['join','joins'], a:0, w:'مجرَّدٌ بلا -s.', f:'He might <u>join</u> us.'},
        {p:'I ___ become a doctor. (احتمال)', ask:'اختر', o:['might','will surely'], a:0, w:'احتمالٌ ← might.', f:'I <u>might</u> become ...'},
        {p:'They may ___ the job. (نفي)', ask:'اختر', o:['not take','takes not'], a:0, w:'النفيُ ← <code>may not take</code>.', f:'... may <u>not take</u> ...'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'may/might + مجرَّد', qs:[
        {p:'It is cloudy; it ___ rain.', o:['might','mights','will surely'], a:0, w:'احتمالٌ ← might.', f:'... it <u>might</u> rain.'},
        {p:'She might ___ an artist.', o:['be','is','being'], a:0, w:'بعد might ← be.', f:'... might <u>be</u> ...'},
        {p:'He may ___ the meeting.', o:['attend','attends','to attend'], a:0, w:'مجرَّدٌ بلا -s/to.', f:'... may <u>attend</u> ...'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['She','might','becomes','a','pilot','.'], bad:2, fix:'become', w:'بعد might مجرَّدٌ بلا -s.', f:'She might <u>become</u> a pilot.'},
        {words:['He','may','to','join','us','.'], bad:2, fix:'تُحذف', w:'بعد may بلا <code>to</code>.', f:'He may <u>join</u> us.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'She may ___ a pilot.', ask:'اختر', o:['be','is'], a:0, w:'be.', f:'← <u>be</u>'},
        {p:'may / might تدلّ على:', ask:'اختر', o:['الاحتمال','التأكيد'], a:0, w:'الاحتمال.', f:'← <u>الاحتمال</u>'},
        {p:'He might ___ us.', ask:'اختر', o:['join','joins'], a:0, w:'مجرَّد.', f:'← <u>join</u>'},
        {p:'بعد might يأتي:', ask:'اختر', o:['فعلٌ مجرَّد','to + فعل'], a:0, w:'مجرَّد.', f:'← <u>فعلٌ مجرَّد</u>'},
        {p:'نفيُ might:', ask:'اختر', o:['might not','don\'t might'], a:0, w:'might not.', f:'← <u>might not</u>'}
      ]}
    ]
  };
})();
