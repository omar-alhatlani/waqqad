/* ============================================================
   Lesson: Present Perfect with already, yet, just
   English · Super Goal 3 · Unit 10 (Who Used My Toothpaste?) · صفحة ١١٢
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U10_PERFECT'] = {
    id:'EN_SG3_U10_PERFECT',
    title:'Present Perfect: already/yet/just',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'have/has + p.p. + already/yet/just',
      intro:'مع <b>المضارع التامّ</b> نستعمل: <code>already</code> (فعلٌ حدث قبل الآن، غالبًا أبكرَ من المتوقّع) في الجملة المثبتة، و<code>yet</code> في السؤال والنفي (حتى الآن)، و<code>just</code> لفعلٍ حدث قبل قليل. الموضع: <code>already/just</code> بين المساعد والتصريف الثالث، و<code>yet</code> في نهاية الجملة.',
      table:[['already','I’ve already done it.'],['yet (?)','Have you done it yet?'],['yet (–)','I haven’t done it yet.'],['just','I’ve just washed them.']],
      trick:'<code>already</code> للمثبت (وبين المساعد والفعل)، و<code>yet</code> للسؤال والنفي (في النهاية)، و<code>just</code> لِما حدث للتوّ.'
    },
    stages:[
      { type:'choice', name:'already', hint:'في الجملة المثبتة', qs:[
        {p:'Have you done the dishes? — Yes, I’ve ___ done them.', o:['already','yet','never','ago'], a:0, w:'المثبت ← <code>already</code>.', f:"I've <u>already</u> done them."},
        {p:'She has ___ cleaned her room.', o:['already','yet','ago','never'], a:0, w:'<code>already</code>.', f:'has <u>already</u> cleaned'},
        {p:'“already” goes ___ the past participle.', o:['before','after','instead of'], a:0, w:'قبله (بين المساعد والفعل).', f:'<u>before</u>'},
        {p:'Kareem has already ___.', o:['gone','went','go','going'], a:0, w:'التصريف الثالث.', f:'has already <u>gone</u>'}
      ]},
      { type:'choice', name:'yet', hint:'السؤال والنفي', qs:[
        {p:'Have you fed the goldfish ___?', o:['yet','already','just','ago'], a:0, w:'السؤال ← <code>yet</code>.', f:'…fed the goldfish <u>yet</u>?'},
        {p:'No, I haven’t done it ___.', o:['yet','already','just','ever'], a:0, w:'النفي ← <code>yet</code>.', f:"…haven't done it <u>yet</u>."},
        {p:'“yet” usually goes ___ the sentence.', o:['at the end of','at the start of','before the verb'], a:0, w:'في النهاية.', f:'<u>at the end of</u>'},
        {p:'Why haven’t you done the dishes ___?', o:['yet','already','just'], a:0, w:'النفي/السؤال ← <code>yet</code>.', f:'…the dishes <u>yet</u>?'}
      ]},
      { type:'choice', name:'just', hint:'حدث قبل قليل', qs:[
        {p:'I’ve ___ washed them. (قبل قليل)', o:['just','yet','ago','never'], a:0, w:'<code>just</code>.', f:"I've <u>just</u> washed them."},
        {p:'He has just ___ home.', o:['arrived','arrive','arriving','arrives'], a:0, w:'التصريف الثالث.', f:'has just <u>arrived</u>'},
        {p:'“just” means the action happened:', o:['a short time ago','long ago','never'], a:0, w:'قبل قليل.', f:'<u>a short time ago</u>'},
        {p:'She’s just ___ the news.', o:['heard','hear','hearing','hears'], a:0, w:'<code>heard</code>.', f:"She's just <u>heard</u>…"}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['I’ve','done','already','it','.'], bad:2, fix:'الموضع: already done', w:'<code>already</code> قبل التصريف الثالث.', f:"I've <u>already done</u> it."},
        {words:['Have','you','already','finished','?'], bad:2, fix:'yet', w:'في السؤال ← <code>yet</code>.', f:'Have you finished <u>yet</u>?'},
        {words:['I','haven’t','done','it','already','.'], bad:4, fix:'yet', w:'في النفي ← <code>yet</code>.', f:"I haven't done it <u>yet</u>."},
        {words:['He','has','just','arrive','.'], bad:3, fix:'arrived', w:'التصريف الثالث.', f:'has just <u>arrived</u>.'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['I’ve','already','done','them','.'], w:'<code>already + p.p.</code>.', f:"I've already done them."},
        {sol:['Have','you','done','it','yet','?'], w:'<code>yet</code> في النهاية.', f:'Have you done it yet?'},
        {sol:['I','haven’t','done','it','yet','.'], w:'النفي + <code>yet</code>.', f:"I haven't done it yet."},
        {sol:['She','has','just','left','.'], w:'<code>just</code>.', f:'She has just left.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'Yes, I’ve ___ done them.', ask:'اختر', o:['already','yet'], a:0, w:'مثبت.', f:'<u>already</u>'},
        {p:'Have you done it ___?', ask:'اختر', o:['yet','already'], a:0, w:'سؤال.', f:'<u>yet</u>'},
        {p:'No, I haven’t done it ___.', ask:'اختر', o:['yet','already'], a:0, w:'نفي.', f:'<u>yet</u>'},
        {p:'I’ve ___ washed them. (قبل قليل)', ask:'اختر', o:['just','ago'], a:0, w:'<code>just</code>.', f:'<u>just</u>'},
        {p:'He has just ___ home.', ask:'اختر', o:['arrived','arrive'], a:0, w:'التصريف الثالث.', f:'<u>arrived</u>'},
        {p:'“already” goes ___ the p.p.', ask:'اختر', o:['before','after'], a:0, w:'قبله.', f:'<u>before</u>'},
        {sol:['Have','you','done','it','yet','?'], w:'<code>yet</code> في النهاية.', f:'Have you done it yet?'},
        {p:'“just” = ___', ask:'اختر', o:['a short time ago','long ago'], a:0, w:'قبل قليل.', f:'<u>a short time ago</u>'},
        {p:'“yet” goes ___ the sentence.', ask:'اختر', o:['at the end','at the start'], a:0, w:'النهاية.', f:'<u>at the end</u>'}
      ]}
    ]
  };
})();
