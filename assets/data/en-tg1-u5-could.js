/* ============================================================
   درس: Grammar — could / couldn't for past ability
   الإنجليزية · الرابع الابتدائي · ف١ · Top Goal 1 · Unit 5 (Outdoor Fun)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب المحفوظ).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG1_U5_COULD'] = {
    id:'EN_TG1_U5_COULD',
    title:'Grammar — could / couldn’t (past ability)',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'القدرةُ في الماضي: could',
      intro:'للتعبيرِ عن قدرةٍ في الماضي نستعملُ <span class="tok-focus">could</span> (استطاعَ) ونفيَها <span class="tok-focus">couldn’t</span> (لم يستطعْ). يتبعُهما فعلٌ <b>مجرَّد</b>. السؤال: <span class="tok-focus">Could</span> you swim? والجواب: Yes, I <span class="tok-focus">could</span>. / No, I <span class="tok-focus">couldn’t</span>.',
      formula:'subject + <span class="tok-focus">could / couldn’t</span> + verb (base)',
      table:[['إثبات','I <span class="tok-focus">could</span> run fast.'],['نفي','I <span class="tok-focus">couldn’t</span> ride a horse.'],['سؤال','<span class="tok-focus">Could</span> you swim?'],['بعد could','فعلٌ مجرَّد']],
      examples:['<span class="tok-focus">Could</span> you run fast when you were five? — Yes, I <span class="tok-focus">could</span>.','I <span class="tok-focus">couldn’t</span> climb the mountain last year.'],
      trick:'<span class="tok-focus">could</span> = استطاعَ (ماضٍ) ، <span class="tok-focus">couldn’t</span> = لم يستطعْ. وبعدَهما فعلٌ مجرَّدٌ دائمًا.'
    },
    stages:[
      { type:'choice', name:'المعنى', hint:'could ماضي can', qs:[
        {p:'could →', ask:'اختر', o:['استطاعَ (ماضٍ)','سيستطيع'], a:0, w:'<code>could</code> ماضي القدرة.', f:'could ← <u>استطاعَ</u>'},
        {p:'couldn’t →', ask:'اختر', o:['لم يستطعْ','يستطيع'], a:0, w:'<code>couldn’t</code> نفيُ القدرة.', f:'couldn’t ← <u>لم يستطعْ</u>'},
        {p:'بعد could يأتي الفعلُ:', ask:'اختر', o:['مجرَّدًا','بـ -ed'], a:0, w:'<code>could swim</code> مجرَّد.', f:'← <u>مجرَّدًا</u>'},
        {p:'أداةُ سؤالِ القدرةِ الماضية:', ask:'اختر', o:['Could','Did'], a:0, w:'<code>Could you...?</code>.', f:'← <u>Could</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'could إثبات · couldn’t نفي', qs:[
        {p:'When I was young, I ___ run very fast.', o:['could','couldn’t','can'], a:0, w:'قدرةٌ ماضية ← <code>could</code>.', f:'... I <u>could</u> run fast.'},
        {p:'She ___ swim last year, but now she can.', o:['couldn’t','could','can’t'], a:0, w:'لم تستطعْ ← <code>couldn’t</code>.', f:'She <u>couldn’t</u> swim last year.'},
        {p:'___ you ride a bike when you were six?', o:['Could','Did','Do'], a:0, w:'سؤالُ القدرةِ الماضية ← <code>Could</code>.', f:'<u>Could</u> you ride a bike?'}
      ]},
      { type:'choice', name:'اختر الصواب', hint:'الفعلُ مجرَّدٌ بعد could', qs:[
        {p:'I could ___ a tree when I was young.', ask:'اختر', o:['climb','climbed'], a:0, w:'مجرَّد بعد could.', f:'I could <u>climb</u> a tree.'},
        {p:'Could you swim? — Yes, I ___ .', ask:'اختر', o:['could','can'], a:0, w:'جوابُ الماضي ← could.', f:'Yes, I <u>could</u>.'},
        {p:'He ___ read when he was three.', ask:'اختر', o:['couldn’t','didn’t could'], a:0, w:'النفيُ ← couldn’t.', f:'He <u>couldn’t</u> read ...'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['I','could','ran','fast','.'], bad:2, fix:'run', w:'بعد could فعلٌ مجرَّد ← <code>run</code>.', f:'I could <u>run</u> fast.'},
        {words:['She','couldn’t','to','swim','.'], bad:2, fix:'—', w:'لا نضعُ <code>to</code> بعد couldn’t.', f:'She couldn’t <u>swim</u>.'},
        {words:['Did','you','could','ride','a','horse','?'], bad:0, fix:'Could', w:'سؤالُ القدرة ← <code>Could you...?</code>.', f:'<u>Could</u> you ride a horse?'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب', qs:[
        {sol:['I','could','swim','when','I','was','five','.'], w:'قدرةٌ ماضية.', f:'I could swim when I was five.'},
        {sol:['She','couldn’t','ride','a','horse','.'], w:'نفيٌ.', f:'She couldn’t ride a horse.'},
        {sol:['Could','you','run','fast','?'], w:'سؤالٌ.', f:'Could you run fast?'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'could →', ask:'اختر', o:['استطاعَ','سيستطيع'], a:0, w:'ماضٍ.', f:'← <u>استطاعَ</u>'},
        {p:'I ___ walk when I was one. (نفي)', ask:'اختر', o:['couldn’t','didn’t'], a:0, w:'نفيُ القدرة ← couldn’t.', f:'I <u>couldn’t</u> walk ...'},
        {p:'Could you jump high? — Yes, I ___ .', ask:'اختر', o:['could','did'], a:0, w:'could.', f:'Yes, I <u>could</u>.'},
        {p:'بعد could الفعلُ:', ask:'اختر', o:['مجرَّد','بـ to'], a:0, w:'مجرَّد.', f:'← <u>مجرَّد</u>'},
        {p:'He could ___ a bike at seven.', ask:'اختر', o:['ride','rode'], a:0, w:'مجرَّد بعد could.', f:'He could <u>ride</u> a bike.'}
      ]}
    ]
  };
})();
