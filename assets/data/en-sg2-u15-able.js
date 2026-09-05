/* ============================================================
   Lesson: Could and Was/Were Able To + Adverbs of Degree
   English · Super Goal 2 · Unit 15 (Today's News) · صفحة ١٣٨
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U15_ABLE'] = {
    id:'EN_SG2_U15_ABLE',
    title:'Could / Was Able To',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'could · was/were able to · adverbs of degree',
      intro:'نستعمل <code>could</code> و<code>was/were able to</code> للقدرة العامّة في الماضي: <code>She could swim when she was five</code>. لكن لفعلٍ <b>محدّدٍ نُجِح فيه</b> نستعمل <code>was/were able to</code> فقط (لا could): <code>He was able to rescue his grandson</code>. و<b>ظروفُ الدرجة</b> (<code>very, quite, really, extremely, just, almost, hardly</code>) تقوّي المعنى أو تضعّفه.',
      table:[['general ability','I could read at four.'],['specific success','She was able to escape.'],['adverbs','very, really, extremely, hardly'],['almost/just','He almost fell.']],
      trick:'للقدرة العامّة: <code>could = was able to</code>. لكن لنجاحٍ في موقفٍ واحدٍ محدّد نستعمل <code>was/were able to</code> فقط.'
    },
    stages:[
      { type:'choice', name:'القدرة العامّة', hint:'could / was able to', qs:[
        {p:'When she was five, she ___ swim.', o:['could','was able','is able','can'], a:0, w:'قدرةٌ عامّة ← <code>could</code>.', f:'she <u>could</u> swim'},
        {p:'He ___ speak three languages as a child.', o:['could','was','is','can'], a:0, w:'<code>could</code>.', f:'He <u>could</u> speak…'},
        {p:'“could” here shows ability in the:', o:['past','future','present'], a:0, w:'الماضي.', f:'the <u>past</u>'},
        {p:'After “could”, the verb is:', o:['base form','+ -ing','+ -ed'], a:0, w:'مجرّد.', f:'<u>base form</u>'}
      ]},
      { type:'choice', name:'النجاح المحدّد', hint:'was/were able to فقط', qs:[
        {p:'The situation was hard, but he ___ rescue his grandson.', o:['was able to','could','can','is able to'], a:0, w:'نجاحٌ محدّد ← <code>was able to</code>.', f:'he <u>was able to</u> rescue'},
        {p:'Marta ___ help her brother out of the car.', o:['was able to','could not','can','could'], a:0, w:'نجاحٌ محدّد.', f:'<u>was able to</u> help'},
        {p:'They ___ finish the project on time.', o:['were able to','could','can','are able'], a:0, w:'نجاحٌ محدّد ← <code>were able to</code>.', f:'<u>were able to</u> finish'},
        {p:'For one specific past success, use:', o:['was/were able to','could only','can'], a:0, w:'<code>was/were able to</code>.', f:'<u>was/were able to</u>'}
      ]},
      { type:'choice', name:'ظروف الدرجة', hint:'very / hardly / almost', qs:[
        {p:'The man was ___ strong.', o:['very','a','the'], a:0, w:'<code>very</code> يقوّي.', f:'<u>very</u> strong'},
        {p:'She was ___ upset that she cried.', o:['really','a','the'], a:0, w:'<code>really</code>.', f:'<u>really</u> upset'},
        {p:'He ___ noticed the children at first.', o:['hardly','very','extremely'], a:0, w:'<code>hardly</code> = بالكاد.', f:'<u>hardly</u> noticed'},
        {p:'The car ___ hit the wall (but didn’t).', o:['almost','very','really'], a:0, w:'<code>almost</code> = كاد.', f:'<u>almost</u> hit'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['He','could','rescue','his','son','yesterday','.'], bad:1, fix:'was able to', w:'نجاحٌ محدّدٌ ← <code>was able to</code>.', f:'He <u>was able to</u> rescue…'},
        {words:['She','could','to','swim','.'], bad:2, fix:'تُحذف to', w:'لا <code>to</code> بعد <code>could</code>.', f:'She could <u>swim</u>.'},
        {words:['He','was','able','swim','.'], bad:3, fix:'to swim', w:'<code>was able to + الفعل</code>.', f:'was able <u>to swim</u>'},
        {words:['The','man','was','a','strong','.'], bad:3, fix:'very (بلا a)', w:'ظرفُ درجة ← <code>very strong</code>.', f:'was <u>very</u> strong'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['She','could','swim','at','five','.'], w:'قدرةٌ عامّة ← <code>could</code>.', f:'She could swim at five.'},
        {sol:['He','was','able','to','rescue','his','son','.'], w:'نجاحٌ محدّد.', f:'He was able to rescue his son.'},
        {sol:['The','man','was','very','strong','.'], w:'ظرف درجة.', f:'The man was very strong.'},
        {sol:['She','hardly','noticed','them','.'], w:'<code>hardly</code> = بالكاد.', f:'She hardly noticed them.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'When she was five, she ___ swim.', ask:'اختر', o:['could','was able'], a:0, w:'قدرةٌ عامّة.', f:'<u>could</u>'},
        {p:'He ___ rescue his son (one time).', ask:'اختر', o:['was able to','could'], a:0, w:'نجاحٌ محدّد.', f:'<u>was able to</u>'},
        {p:'“could” shows ability in the ___.', ask:'اختر', o:['past','future'], a:0, w:'الماضي.', f:'<u>past</u>'},
        {p:'The man was ___ strong.', ask:'اختر', o:['very','a'], a:0, w:'ظرف درجة.', f:'<u>very</u>'},
        {p:'She was ___ upset.', ask:'اختر', o:['really','a'], a:0, w:'<code>really</code>.', f:'<u>really</u>'},
        {p:'He ___ noticed them (بالكاد).', ask:'اختر', o:['hardly','very'], a:0, w:'بالكاد.', f:'<u>hardly</u>'},
        {sol:['He','was','able','to','escape','.'], w:'نجاحٌ محدّد.', f:'He was able to escape.'},
        {p:'The car ___ hit the wall.', ask:'اختر', o:['almost','really'], a:0, w:'كاد.', f:'<u>almost</u>'},
        {p:'one specific success →', ask:'اختر', o:['was able to','could'], a:0, w:'<code>was able to</code>.', f:'<u>was able to</u>'}
      ]}
    ]
  };
})();
