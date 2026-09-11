/* ============================================================
   درس: Grammar — "Can" for offers and requests
   الإنجليزية · الرابع الابتدائي · ف١ · Top Goal 1 · Unit 2 (Chores)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب المحفوظ).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG1_U2_CAN'] = {
    id:'EN_TG1_U2_CAN',
    title:'Grammar — Can: offers & requests',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'العرضُ والطلبُ بـ can',
      intro:'نستعملُ <span class="tok-focus">Can</span> للطلبِ والعرض. <b>الطلب</b> (نطلبُ من غيرِنا): <span class="tok-focus">Can you</span> help me? <b>العرض</b> (نعرضُ المساعدة): <span class="tok-focus">Can I</span> help you? يأتي بعدَ <code>can</code> فعلٌ <b>مجرَّدٌ</b> بلا <code>to</code> وبلا <code>s</code>.',
      formula:'<span class="tok-focus">Can</span> + you/I + verb (base)?',
      table:[['طلب','<span class="tok-focus">Can you</span> open the door?'],['عرض','<span class="tok-focus">Can I</span> carry this for you?'],['بعد can','فعلٌ مجرَّد (help · open · carry)'],['جوابٌ لطيف','Sure. / Of course.']],
      examples:['<span class="tok-focus">Can you</span> feed the cat<span class="tok-plural">s</span>, please?','<span class="tok-focus">Can I</span> wash the dish<span class="tok-plural">es</span> for you?'],
      trick:'<span class="tok-focus">Can you...?</span> = أطلبُ منك. <span class="tok-focus">Can I...?</span> = أعرضُ عليك. وبعدَ can فعلٌ مجرَّدٌ دائمًا.'
    },
    stages:[
      { type:'choice', name:'عرضٌ أم طلب؟', hint:'Can you = طلب · Can I = عرض', qs:[
        {p:'Can you help me? →', ask:'اختر', o:['طلب','عرض'], a:0, w:'أطلبُ منك المساعدة.', f:'Can you...? ← <u>طلب</u>'},
        {p:'Can I carry this for you? →', ask:'اختر', o:['عرض','طلب'], a:0, w:'أعرضُ مساعدتي.', f:'Can I...? ← <u>عرض</u>'},
        {p:'بعد can يأتي فعلٌ:', ask:'اختر', o:['مجرَّد بلا to','بـ to'], a:0, w:'<code>can</code> يتبعُه الفعلُ المجرَّد.', f:'← <u>مجرَّد بلا to</u>'},
        {p:'Can you close the window? →', ask:'اختر', o:['طلب','عرض'], a:0, w:'أطلبُ منك.', f:'← <u>طلب</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'you للطلب · I للعرض', qs:[
        {p:'Can ___ help me set the table? (أطلبُ منك)', o:['you','I','he'], a:0, w:'طلبٌ ← <code>Can you</code>.', f:'Can <u>you</u> help me?'},
        {p:'Can ___ take out the trash for you? (أعرضُ)', o:['I','you','they'], a:0, w:'عرضٌ ← <code>Can I</code>.', f:'Can <u>I</u> ... for you?'},
        {p:'Can you ___ the floor, please?', o:['sweep','sweeps','swept'], a:0, w:'بعد can فعلٌ مجرَّد ← <code>sweep</code>.', f:'Can you <u>sweep</u> the floor?'}
      ]},
      { type:'choice', name:'اختر الصواب', hint:'الفعلُ مجرَّدٌ بعد can', qs:[
        {p:'Can I ___ the dishes for you?', ask:'اختر', o:['wash','washing'], a:0, w:'فعلٌ مجرَّد بعد can.', f:'Can I <u>wash</u> the dishes?'},
        {p:'Someone knocks. You offer help:', ask:'اختر', o:['Can I open the door?','Can you open?'], a:0, w:'العرضُ ← <code>Can I</code>.', f:'<u>Can I open the door?</u>'},
        {p:'Can you ___ the animals, please?', ask:'اختر', o:['feed','feeds'], a:0, w:'مجرَّد بعد can.', f:'Can you <u>feed</u> the animals?'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['Can','you','to','help','me','?'], bad:2, fix:'—', w:'لا نضعُ <code>to</code> بعد can.', f:'Can you <u>help</u> me?'},
        {words:['Can','I','carries','this','?'], bad:2, fix:'carry', w:'الفعلُ مجرَّدٌ بلا <code>s</code>: <code>carry</code>.', f:'Can I <u>carry</u> this?'},
        {words:['Can','me','clean','the','room','?'], bad:1, fix:'I', w:'الفاعلُ <code>I</code> لا <code>me</code>.', f:'Can <u>I</u> clean the room?'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب', qs:[
        {sol:['Can','you','help','me','?'], w:'طلبٌ ← Can you.', f:'Can you help me?'},
        {sol:['Can','I','set','the','table','?'], w:'عرضٌ ← Can I.', f:'Can I set the table?'},
        {sol:['Can','you','open','the','door','?'], w:'طلبٌ.', f:'Can you open the door?'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'Can I carry this for you? →', ask:'اختر', o:['عرض','طلب'], a:0, w:'عرضٌ.', f:'← <u>عرض</u>'},
        {p:'Can you ___ the bed?', ask:'اختر', o:['make','makes'], a:0, w:'مجرَّد بعد can.', f:'Can you <u>make</u> the bed?'},
        {p:'لأطلبَ مساعدةً أقول:', ask:'اختر', o:['Can you...?','Can I...?'], a:0, w:'الطلبُ ← Can you.', f:'← <u>Can you...?</u>'},
        {p:'بعد can الفعلُ يكونُ:', ask:'اختر', o:['مجرَّدًا','بـ to'], a:0, w:'مجرَّد.', f:'← <u>مجرَّدًا</u>'},
        {p:'Can I ___ you with the dishes?', ask:'اختر', o:['help','helps'], a:0, w:'مجرَّد بعد can.', f:'Can I <u>help</u> you?'}
      ]}
    ]
  };
})();
