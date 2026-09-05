/* ============================================================
   Lesson: Adjectives (position) + Intensifiers
   English · Super Goal 1 · Unit 10 (What's School Like?) · صفحة ٨٨
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U10_ADJ'] = {
    id:'EN_SG1_U10_ADJ',
    title:'Adjectives & Intensifiers',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'Adjective Position & very/quite/really',
      intro:'تأتي <b>الصفة</b> <b>قبل الاسم</b> (<code>a difficult subject</code>) أو <b>بعد الفعل be</b> (<code>Math is difficult</code>). و<b>المكثّفات</b> <code>very, really, quite, so</code> تأتي قبل الصفة لتقويتها: <code>Math is very difficult</code>. والصفة لا تُجمع في الإنجليزية: <code>tall boys</code> لا <code>talls boys</code>.',
      table:[['before a noun','a difficult subject'],['after be','The subject is difficult.'],['intensifier','very / really / quite + adjective'],['no plural','tall boys (لا talls)']],
      trick:'الصفةُ قبل الاسم أو بعد <code>be</code>، ولا تتغيّر مع الجمع. والمكثّفُ (<code>very/really/quite</code>) يسبق الصفة دائمًا.'
    },
    stages:[
      { type:'choice', name:'موضع الصفة', hint:'قبل الاسم أو بعد be', qs:[
        {p:'Math is a ___ subject.', o:['difficult','difficultly','difficulty'], a:0, w:'صفةٌ قبل الاسم ← <code>difficult</code>.', f:'a <u>difficult</u> subject'},
        {p:'The lesson is ___.', o:['interesting','interest','interestingly'], a:0, w:'صفةٌ بعد <code>be</code>.', f:'is <u>interesting</u>'},
        {p:'She is a ___ student.', o:['smart','smartly','smarts'], a:0, w:'صفةٌ قبل الاسم.', f:'a <u>smart</u> student'},
        {p:'They are ___ boys.', o:['tall','talls','tallly'], a:0, w:'الصفة لا تُجمع.', f:'<u>tall</u> boys'}
      ]},
      { type:'choice', name:'المكثّفات', hint:'very / really / quite قبل الصفة', qs:[
        {p:'Science is ___ interesting.', o:['very','very much','much'], a:0, w:'المكثّف ← <code>very</code>.', f:'<u>very</u> interesting'},
        {p:'The test was ___ easy.', o:['really','real','reality'], a:0, w:'<code>really</code> قبل الصفة.', f:'<u>really</u> easy'},
        {p:'History is ___ difficult for me.', o:['quite','quiet','quietly'], a:0, w:'<code>quite</code> = إلى حدٍّ ما.', f:'<u>quite</u> difficult'},
        {p:'This book is ___ boring!', o:['so','so much','many'], a:0, w:'<code>so</code> قبل الصفة.', f:'<u>so</u> boring'}
      ]},
      { type:'choice', name:'الترتيب الصحيح', hint:'المكثّف + الصفة + الاسم', qs:[
        {p:'It is a ___ subject.', o:['very difficult','difficult very','very difficultly'], a:0, w:'المكثّف ثمّ الصفة قبل الاسم.', f:'a <u>very difficult</u> subject'},
        {p:'She is a ___ student.', o:['really smart','smart really','really smartly'], a:0, w:'المكثّف قبل الصفة.', f:'a <u>really smart</u> student'},
        {p:'The adjective comes ___ a noun.', o:['before','after','under'], a:0, w:'قبل الاسم.', f:'<u>before</u> a noun'},
        {p:'Adjectives in English are ___ in the plural.', o:['the same','different','longer'], a:0, w:'لا تتغيّر.', f:'<u>the same</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['They','are','talls','boys','.'], bad:2, fix:'tall', w:'الصفة لا تُجمع.', f:'They are <u>tall</u> boys.'},
        {words:['Math','is','difficult','very','.'], bad:3, fix:'المكثّف قبل الصفة', w:'<code>very</code> قبل الصفة: very difficult.', f:'Math is <u>very difficult</u>.'},
        {words:['It','is','a','interesting','very','subject','.'], bad:4, fix:'الترتيب: very interesting', w:'المكثّف ثمّ الصفة قبل الاسم.', f:'a <u>very interesting</u> subject'},
        {words:['She','is','smart','student','.'], bad:2, fix:'a smart', w:'نحتاج <code>a</code> قبل الصفة+الاسم.', f:'a <u>smart</u> student'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['Math','is','a','difficult','subject','.'], w:'الصفة قبل الاسم.', f:'Math is a difficult subject.'},
        {sol:['Science','is','very','interesting','.'], w:'المكثّف قبل الصفة بعد <code>be</code>.', f:'Science is very interesting.'},
        {sol:['She','is','a','really','smart','student','.'], w:'المكثّف + الصفة + الاسم.', f:'She is a really smart student.'},
        {sol:['The','test','was','quite','easy','.'], w:'<code>quite</code> قبل الصفة.', f:'The test was quite easy.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'Math is a ___ subject.', ask:'اختر', o:['difficult','difficultly'], a:0, w:'صفة.', f:'<u>difficult</u>'},
        {p:'The lesson is ___.', ask:'اختر', o:['interesting','interest'], a:0, w:'صفة بعد be.', f:'<u>interesting</u>'},
        {p:'Science is ___ interesting.', ask:'اختر', o:['very','much'], a:0, w:'المكثّف.', f:'<u>very</u>'},
        {p:'The test was ___ easy.', ask:'اختر', o:['really','real'], a:0, w:'<code>really</code>.', f:'<u>really</u>'},
        {p:'They are ___ boys.', ask:'اختر', o:['tall','talls'], a:0, w:'لا تُجمع.', f:'<u>tall</u>'},
        {p:'a ___ subject (very + difficult)', ask:'الترتيب', o:['very difficult','difficult very'], a:0, w:'المكثّف أولًا.', f:'<u>very difficult</u>'},
        {sol:['Science','is','very','interesting','.'], w:'المكثّف قبل الصفة.', f:'Science is very interesting.'},
        {p:'The adjective comes ___ a noun.', ask:'اختر', o:['before','after'], a:0, w:'قبل.', f:'<u>before</u>'},
        {p:'History is ___ difficult.', ask:'اختر', o:['quite','quiet'], a:0, w:'<code>quite</code>.', f:'<u>quite</u>'}
      ]}
    ]
  };
})();
