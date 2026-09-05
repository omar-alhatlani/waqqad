/* ============================================================
   Lesson: Vocabulary — News & Narrative
   English · Super Goal 2 · Unit 15 (Today's News) · صفحات ١٣٢–١٣٣
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U15_VOCAB'] = {
    id:'EN_SG2_U15_VOCAB',
    title:'Vocabulary — News',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'News & Telling a Story',
      intro:'مفرداتُ الأخبار والقصص: <code>news</code> أخبار، <code>headline</code> عنوان رئيس، <code>article</code> مقال، <code>reporter</code> مراسِل، <code>thief</code> لصّ، <code>steal</code> يسرق، <code>rescue</code> ينقذ، <code>brave</code> شجاع، <code>suddenly</code> فجأةً، <code>finally</code> أخيرًا، <code>appear</code> يظهر.',
      table:[['headline','العنوان الرئيس'],['thief','لصّ (jj: steal)'],['rescue','ينقذ'],['brave','شجاع'],['suddenly','فجأةً']],
      trick:'كلماتُ ترتيبِ القصّة تساعد على السرد: <code>first, suddenly, then, finally</code>. و<code>steal</code> شاذّة في الماضي: <code>steal → stole</code>.'
    },
    stages:[
      { type:'choice', name:'المعنى', hint:'اختر المعنى الصحيح', qs:[
        {p:'A “headline” is the ___ of a news story.', o:['title','end','price'], a:0, w:'العنوان الرئيس.', f:'the <u>title</u>'},
        {p:'A “thief” is a person who ___.', o:['steals','helps','cooks'], a:0, w:'لصّ يسرق.', f:'<u>steals</u>'},
        {p:'To “rescue” someone is to ___ them.', o:['save','sell','forget'], a:0, w:'ينقذ.', f:'<u>save</u>'},
        {p:'A “brave” person is ___.', o:['not afraid','very shy','lazy'], a:0, w:'شجاع.', f:'<u>not afraid</u>'},
        {p:'“suddenly” means:', o:['quickly and unexpectedly','slowly','never'], a:0, w:'فجأةً.', f:'<u>quickly and unexpectedly</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'A ___ wanted to steal the car.', o:['thief','reporter','guide'], a:0, w:'لصّ.', f:'a <u>thief</u>'},
        {p:'The brave girl ___ her little brother.', o:['rescued','sold','drove'], a:0, w:'أنقذت.', f:'<u>rescued</u>'},
        {p:'___, a strange man appeared.', o:['Suddenly','Slowly','Never'], a:0, w:'فجأةً.', f:'<u>Suddenly</u>'},
        {p:'The ___ wrote an article about it.', o:['reporter','chef','driver'], a:0, w:'المراسِل.', f:'the <u>reporter</u>'},
        {p:'___, the thief stopped the car.', o:['Finally','First of never','No'], a:0, w:'أخيرًا.', f:'<u>Finally</u>'}
      ]},
      { type:'choice', name:'السرد', hint:'كلمات ترتيب القصّة', qs:[
        {p:'The past of “steal” is:', o:['stole','stealed','steals'], a:0, w:'شاذّ ← <code>stole</code>.', f:'<u>stole</u>'},
        {p:'A word to start a story:', o:['First','Finally','Suddenly (mid)'], a:0, w:'<code>First</code>.', f:'<u>First</u>'},
        {p:'A word for the end of a story:', o:['Finally','First','Suddenly'], a:0, w:'أخيرًا.', f:'<u>Finally</u>'},
        {p:'To “appear” means to:', o:['become visible','disappear','sleep'], a:0, w:'يظهر.', f:'<u>become visible</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['A','thief','helps','people','.'], bad:2, fix:'steals', w:'اللصّ يسرق.', f:'A thief <u>steals</u>.'},
        {words:['The','brave','girl','was','very','afraid','.'], bad:5, fix:'not afraid', w:'الشجاعُ ليس خائفًا.', f:'…was <u>not afraid</u>.'},
        {words:['The','thief','stealed','the','car','.'], bad:2, fix:'stole', w:'الماضي الشاذّ ← <code>stole</code>.', f:'The thief <u>stole</u> the car.'},
        {words:['A','headline','is','the','end','.'], bad:4, fix:'title', w:'العنوان الرئيس.', f:'…is the <u>title</u>.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'title of a news story =', ask:'اختر', o:['headline','article end'], a:0, w:'العنوان.', f:'<u>headline</u>'},
        {p:'person who steals =', ask:'اختر', o:['thief','reporter'], a:0, w:'لصّ.', f:'<u>thief</u>'},
        {p:'“rescue” =', ask:'المعنى', o:['save','sell'], a:0, w:'ينقذ.', f:'<u>save</u>'},
        {p:'“brave” =', ask:'المعنى', o:['not afraid','shy'], a:0, w:'شجاع.', f:'<u>not afraid</u>'},
        {p:'“suddenly” =', ask:'المعنى', o:['unexpectedly','slowly'], a:0, w:'فجأةً.', f:'<u>unexpectedly</u>'},
        {p:'past of “steal” =', ask:'اختر', o:['stole','stealed'], a:0, w:'شاذّ.', f:'<u>stole</u>'},
        {p:'writes news articles =', ask:'اختر', o:['reporter','chef'], a:0, w:'مراسِل.', f:'<u>reporter</u>'},
        {p:'end of a story word =', ask:'اختر', o:['Finally','First'], a:0, w:'أخيرًا.', f:'<u>Finally</u>'},
        {p:'“appear” =', ask:'المعنى', o:['become visible','disappear'], a:0, w:'يظهر.', f:'<u>become visible</u>'}
      ]}
    ]
  };
})();
