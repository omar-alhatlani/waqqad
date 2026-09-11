/* ============================================================
   درس: Grammar — Simple Past: affirmative & negative
   الإنجليزية · الرابع الابتدائي · ف١ · Top Goal 1 · Unit 3 (Stories)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب المحفوظ).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG1_U3_PAST'] = {
    id:'EN_TG1_U3_PAST',
    title:'Grammar — Simple Past: + and −',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'الماضي البسيط: إثباتٌ ونفي',
      intro:'للحديثِ عن حدثٍ <b>انتهى في الماضي</b> نستعملُ الماضيَ البسيط. الإثبات: نضيفُ <span class="tok-focus">-ed</span> للفعلِ المنتظم (play → play<span class="tok-focus">ed</span>). النفي: <span class="tok-focus">didn’t</span> + الفعلُ المجرَّد (didn’t play). لاحظْ: بعد <code>didn’t</code> يعودُ الفعلُ مجرَّدًا بلا <span class="tok-focus">-ed</span>.',
      formula:'+ : verb<span class="tok-focus">-ed</span>   /   − : <span class="tok-focus">didn’t</span> + verb',
      table:[['إثبات','He jump<span class="tok-focus">ed</span> and shout<span class="tok-focus">ed</span>.'],['نفي','He <span class="tok-focus">didn’t</span> laugh.'],['بعد didn’t','فعلٌ مجرَّد (بلا -ed)'],['دليلٌ زمنيّ','yesterday · last week']],
      examples:['The children play<span class="tok-focus">ed</span> in the garden yesterday.','She <span class="tok-focus">didn’t</span> watch TV last night.'],
      trick:'الإثباتُ يأخذُ <span class="tok-focus">-ed</span>، والنفيُ يأخذُ <span class="tok-focus">didn’t</span> ثمّ الفعلَ المجرَّد. لا تجمعْ بينهما.'
    },
    stages:[
      { type:'choice', name:'إثباتٌ أم نفي؟', hint:'-ed إثبات · didn’t نفي', qs:[
        {p:'He walked home. →', ask:'اختر', o:['إثبات','نفي'], a:0, w:'<code>-ed</code> ← إثبات.', f:'walked ← <u>إثبات</u>'},
        {p:'She didn’t play. →', ask:'اختر', o:['نفي','إثبات'], a:0, w:'<code>didn’t</code> ← نفي.', f:'didn’t play ← <u>نفي</u>'},
        {p:'بعد didn’t يأتي الفعلُ:', ask:'اختر', o:['مجرَّدًا','بـ -ed'], a:0, w:'<code>didn’t + verb</code> مجرَّد.', f:'← <u>مجرَّدًا</u>'},
        {p:'نهايةُ الفعلِ المنتظمِ في الماضي:', ask:'اختر', o:['-ed','-ing'], a:0, w:'الماضي المنتظم ← <code>-ed</code>.', f:'← <u>-ed</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'إثبات -ed · نفي didn’t + مجرَّد', qs:[
        {p:'Yesterday, they ___ football. (إثبات)', o:['played','play','didn’t play'], a:0, w:'إثباتٌ ← <code>played</code>.', f:'... <u>played</u> football.'},
        {p:'He ___ his homework last night. (نفي)', o:['didn’t do','did','doesn’t'], a:0, w:'نفيٌ ← <code>didn’t do</code>.', f:'He <u>didn’t do</u> his homework.'},
        {p:'She ___ in the park this morning. (إثبات)', o:['walked','walk','didn’t walk'], a:0, w:'إثباتٌ ← <code>walked</code>.', f:'She <u>walked</u> ...'}
      ]},
      { type:'choice', name:'اختر الصواب', hint:'لا تجمعْ didn’t مع -ed', qs:[
        {p:'He didn’t ___ at the joke.', ask:'اختر', o:['laugh','laughed'], a:0, w:'بعد didn’t فعلٌ مجرَّد.', f:'He didn’t <u>laugh</u>.'},
        {p:'We ___ a great story yesterday.', ask:'اختر', o:['wrote','didn’t wrote'], a:0, w:'إثباتٌ بالماضي (wrote شاذّ).', f:'We <u>wrote</u> a great story.'},
        {p:'She ___ to the party last week.', ask:'اختر', o:['didn’t come','didn’t came'], a:0, w:'بعد didn’t الفعلُ مجرَّد.', f:'She <u>didn’t come</u>.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['He','didn’t','played','football','.'], bad:2, fix:'play', w:'بعد didn’t فعلٌ مجرَّد: <code>play</code>.', f:'He didn’t <u>play</u> football.'},
        {words:['They','jumps','and','shouted','yesterday','.'], bad:1, fix:'jumped', w:'الماضي ← <code>jumped</code>.', f:'They <u>jumped</u> and shouted yesterday.'},
        {words:['She','not','watched','TV','.'], bad:1, fix:'didn’t', w:'النفيُ في الماضي ← <code>didn’t</code>.', f:'She <u>didn’t</u> watch TV.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب', qs:[
        {sol:['He','jumped','and','shouted','.'], w:'إثباتٌ بالماضي.', f:'He jumped and shouted.'},
        {sol:['She','didn’t','laugh','.'], w:'نفيٌ ← didn’t + مجرَّد.', f:'She didn’t laugh.'},
        {sol:['We','played','in','the','park','yesterday','.'], w:'إثباتٌ + دليلٌ زمنيّ.', f:'We played in the park yesterday.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'He didn’t play. →', ask:'اختر', o:['نفي','إثبات'], a:0, w:'نفيٌ.', f:'← <u>نفي</u>'},
        {p:'They ___ in the garden yesterday.', ask:'اختر', o:['played','play'], a:0, w:'الماضي ← played.', f:'They <u>played</u> ...'},
        {p:'She didn’t ___ TV.', ask:'اختر', o:['watch','watched'], a:0, w:'مجرَّد بعد didn’t.', f:'... didn’t <u>watch</u> TV.'},
        {p:'نهايةُ الماضي المنتظم:', ask:'اختر', o:['-ed','-s'], a:0, w:'-ed.', f:'← <u>-ed</u>'},
        {p:'He ___ his friend last week. (نفي)', ask:'اختر', o:['didn’t call','didn’t called'], a:0, w:'مجرَّد بعد didn’t.', f:'He <u>didn’t call</u> ...'}
      ]}
    ]
  };
})();
