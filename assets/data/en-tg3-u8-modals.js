/* ============================================================
   درس: Grammar — Modal Verbs (can/could/must/have to/should)
   الإنجليزية · السادس الابتدائي · ف١ · Top Goal 3 · Unit 8 (Recent Events)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG3_U8_MODALS'] = {
    id:'EN_TG3_U8_MODALS',
    title:'Grammar — Modal Verbs',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'الأفعال الناقصة (Modals)',
      intro:'الأفعالُ الناقصةُ تُضيفُ معنًى ويتبعُها الفعلُ <b>مجرَّدًا</b> (بلا -s وبلا to): <span class="tok-focus">can</span>/<span class="tok-focus">could</span> للقدرة، <span class="tok-focus">must</span> و<span class="tok-focus">have to</span> للوجوب، <span class="tok-focus">should</span> للنصيحة. مثال: «You <span class="tok-focus">should</span> study» (نصيحة)، «I <span class="tok-focus">can</span> swim» (قدرة).',
      formula:'<span class="tok-focus">can</span>/<span class="tok-focus">could</span>/<span class="tok-focus">must</span>/<span class="tok-focus">should</span> + base',
      table:[['<span class="tok-focus">can</span>/<span class="tok-focus">could</span>','قدرة: I <span class="tok-focus">can</span> swim.'],['<span class="tok-focus">must</span>/have to','وجوب: You <span class="tok-focus">must</span> stop.'],['<span class="tok-focus">should</span>','نصيحة: You <span class="tok-focus">should</span> rest.'],['بعدها','الفعلُ مجرَّدٌ (بلا -s / to)']],
      examples:['You <span class="tok-focus">should</span> apply for the scholarship.','Students <span class="tok-focus">must</span> follow the rules.'],
      trick:'بعد أيّ فعلٍ ناقص (<span class="tok-focus">can/must/should</span>...) يأتي الفعلُ <b>مجرَّدًا</b>: بلا <span class="en">-s</span> وبلا <span class="en">to</span>.'
    },
    stages:[
      { type:'choice', name:'المعنى المناسب', hint:'قدرة/وجوب/نصيحة', qs:[
        {p:'You are tired. You ___ rest. (نصيحة)', ask:'اختر', o:['should','must'], a:0, w:'نصيحةٌ ← <code>should</code>.', f:'You <u>should</u> rest.'},
        {p:'I ___ swim very well. (قدرة)', ask:'اختر', o:['can','must'], a:0, w:'قدرةٌ ← <code>can</code>.', f:'I <u>can</u> swim.'},
        {p:'Drivers ___ stop at a red light. (وجوب)', ask:'اختر', o:['must','could'], a:0, w:'وجوبٌ ← <code>must</code>.', f:'... <u>must</u> stop ...'}
      ]},
      { type:'gap', name:'الفعلُ بعد الناقص', hint:'مجرَّدٌ بلا -s / to', qs:[
        {p:'She can ___ three languages.', o:['speak','speaks','to speak'], a:0, w:'بعد <code>can</code> فعلٌ مجرَّد.', f:'She can <u>speak</u> ...'},
        {p:'You should ___ for the exam.', o:['study','studies','to study'], a:0, w:'بعد <code>should</code> مجرَّد.', f:'You should <u>study</u> ...'},
        {p:'We must ___ on time.', o:['arrive','arrives','to arrive'], a:0, w:'بعد <code>must</code> مجرَّد.', f:'We must <u>arrive</u> ...'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['She','can','speaks','English','.'], bad:2, fix:'speak', w:'بعد <code>can</code> مجرَّدٌ بلا -s.', f:'She can <u>speak</u> English.'},
        {words:['You','should','to','rest','.'], bad:2, fix:'تُحذف', w:'بعد <code>should</code> بلا <code>to</code>.', f:'You should <u>rest</u>.'},
        {words:['We','must','arrives','early','.'], bad:2, fix:'arrive', w:'بعد <code>must</code> مجرَّد.', f:'We must <u>arrive</u> early.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['You','should','study','hard','.'], w:'<code>should + مجرَّد</code>.', f:'You should study hard.'},
        {sol:['I','can','swim','well','.'], w:'<code>can + مجرَّد</code>.', f:'I can swim well.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'You are tired. You ___ rest.', ask:'اختر', o:['should','can'], a:0, w:'نصيحة ← should.', f:'You <u>should</u> rest.'},
        {p:'I ___ swim well.', ask:'اختر', o:['can','must'], a:0, w:'قدرة ← can.', f:'I <u>can</u> swim.'},
        {p:'بعد الفعل الناقص يأتي:', ask:'اختر', o:['فعلٌ مجرَّد','to + فعل'], a:0, w:'مجرَّدٌ بلا to/-s.', f:'← <u>فعلٌ مجرَّد</u>'},
        {p:'She can ___ three languages.', ask:'اختر', o:['speak','speaks'], a:0, w:'مجرَّد.', f:'... <u>speak</u> ...'},
        {p:'Drivers ___ stop at a red light.', ask:'اختر', o:['must','should'], a:0, w:'وجوب ← must.', f:'... <u>must</u> stop ...'}
      ]}
    ]
  };
})();
