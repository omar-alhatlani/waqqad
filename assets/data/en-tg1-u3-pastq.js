/* ============================================================
   درس: Grammar — Simple Past: questions & short answers
   الإنجليزية · الرابع الابتدائي · ف١ · Top Goal 1 · Unit 3 (Stories)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب المحفوظ).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG1_U3_PASTQ'] = {
    id:'EN_TG1_U3_PASTQ',
    title:'Grammar — Past questions & answers',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'السؤالُ والجوابُ في الماضي',
      intro:'نسألُ في الماضي بـ <span class="tok-focus">Did</span> + الفاعلِ + الفعلِ المجرَّد: <span class="tok-focus">Did</span> you play? والجوابُ القصير: <span class="tok-focus">Yes, I did.</span> أو <span class="tok-focus">No, I didn’t.</span> لاحظْ: بعد <code>Did</code> يكونُ الفعلُ <b>مجرَّدًا</b> بلا <code>-ed</code>.',
      formula:'<span class="tok-focus">Did</span> + subject + verb? — Yes, … <span class="tok-focus">did</span>. / No, … <span class="tok-focus">didn’t</span>.',
      table:[['سؤال','<span class="tok-focus">Did</span> you win the game?'],['جوابٌ مثبت','Yes, I <span class="tok-focus">did</span>.'],['جوابٌ منفي','No, I <span class="tok-focus">didn’t</span>.'],['بعد Did','فعلٌ مجرَّد (بلا -ed)']],
      examples:['<span class="tok-focus">Did</span> the boy<span class="tok-plural">s</span> finish the story? — Yes, they <span class="tok-focus">did</span>.','<span class="tok-focus">Did</span> she read the book? — No, she <span class="tok-focus">didn’t</span>.'],
      trick:'ابدأِ السؤالَ بـ <span class="tok-focus">Did</span> والفعلُ مجرَّد، وأجِبْ بـ <span class="tok-focus">did</span> أو <span class="tok-focus">didn’t</span> بلا تكرارِ الفعل.'
    },
    stages:[
      { type:'choice', name:'كوّنِ السؤال', hint:'Did + فاعل + فعل مجرَّد', qs:[
        {p:'أداةُ سؤالِ الماضي:', ask:'اختر', o:['Did','Does'], a:0, w:'الماضي ← <code>Did</code>.', f:'← <u>Did</u>'},
        {p:'بعد Did يأتي الفعلُ:', ask:'اختر', o:['مجرَّدًا','بـ -ed'], a:0, w:'<code>Did you play?</code> مجرَّد.', f:'← <u>مجرَّدًا</u>'},
        {p:'Did you ___ your friends?', ask:'اختر', o:['visit','visited'], a:0, w:'مجرَّد بعد Did.', f:'Did you <u>visit</u> ...?'},
        {p:'الجوابُ القصيرُ المثبت:', ask:'اختر', o:['Yes, I did.','Yes, I do.'], a:0, w:'الماضي ← <code>did</code>.', f:'← <u>Yes, I did.</u>'}
      ]},
      { type:'gap', name:'أكمل الجواب', hint:'did للمثبت · didn’t للمنفي', qs:[
        {p:'Did you play? — Yes, I ___ .', o:['did','do','was'], a:0, w:'مثبتٌ ← <code>did</code>.', f:'Yes, I <u>did</u>.'},
        {p:'Did she win? — No, she ___ .', o:['didn’t','doesn’t','wasn’t'], a:0, w:'منفيٌّ ← <code>didn’t</code>.', f:'No, she <u>didn’t</u>.'},
        {p:'___ they finish the story?', o:['Did','Do','Are'], a:0, w:'سؤالُ الماضي ← <code>Did</code>.', f:'<u>Did</u> they finish the story?'}
      ]},
      { type:'choice', name:'اختر الصواب', hint:'الفعلُ مجرَّدٌ بعد Did', qs:[
        {p:'Did he ___ the ball?', ask:'اختر', o:['catch','caught'], a:0, w:'مجرَّد بعد Did.', f:'Did he <u>catch</u> the ball?'},
        {p:'Did you visit your aunt? — ', ask:'اختر', o:['Yes, I did.','Yes, I visited.'], a:0, w:'الجوابُ القصيرُ بـ <code>did</code>.', f:'<u>Yes, I did.</u>'},
        {p:'Did they ___ the race?', ask:'اختر', o:['win','won'], a:0, w:'مجرَّد بعد Did.', f:'Did they <u>win</u> the race?'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['Did','you','played','football','?'], bad:2, fix:'play', w:'بعد Did فعلٌ مجرَّد.', f:'Did you <u>play</u> football?'},
        {words:['Does','she','read','yesterday','?'], bad:0, fix:'Did', w:'الماضي (yesterday) ← <code>Did</code>.', f:'<u>Did</u> she read yesterday?'},
        {words:['No',',','I','don’t','.'], bad:3, fix:'didn’t', w:'جوابُ الماضي المنفي ← <code>didn’t</code>.', f:'No, I <u>didn’t</u>.'}
      ]},
      { type:'order', name:'ابنِ السؤال', hint:'انقر الكلمات بالترتيب', qs:[
        {sol:['Did','you','play','with','your','friends','?'], w:'Did + فاعل + فعل مجرَّد.', f:'Did you play with your friends?'},
        {sol:['Yes',',','I','did','.'], w:'جوابٌ قصيرٌ مثبت.', f:'Yes, I did.'},
        {sol:['Did','she','win','?'], w:'سؤالُ ماضٍ.', f:'Did she win?'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'أداةُ سؤالِ الماضي:', ask:'اختر', o:['Did','Does'], a:0, w:'Did.', f:'← <u>Did</u>'},
        {p:'Did you ___ the movie?', ask:'اختر', o:['see','saw'], a:0, w:'مجرَّد بعد Did.', f:'Did you <u>see</u> the movie?'},
        {p:'Did she win? — No, she ___ .', ask:'اختر', o:['didn’t','doesn’t'], a:0, w:'ماضٍ منفيّ.', f:'No, she <u>didn’t</u>.'},
        {p:'بعد Did الفعلُ:', ask:'اختر', o:['مجرَّد','بـ -ed'], a:0, w:'مجرَّد.', f:'← <u>مجرَّد</u>'},
        {p:'Did they play? — Yes, they ___ .', ask:'اختر', o:['did','do'], a:0, w:'مثبتٌ بالماضي.', f:'Yes, they <u>did</u>.'}
      ]}
    ]
  };
})();
