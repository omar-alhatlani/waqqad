/* ============================================================
   Lesson: Adjectives with -ed and -ing
   English · Super Goal 1 · Unit 10 (What's School Like?) · صفحة ٩٢
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U10_EDING'] = {
    id:'EN_SG1_U10_EDING',
    title:'Adjectives: -ed / -ing',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'-ed feelings vs -ing things',
      intro:'صفاتُ <b>-ing</b> تصف <b>الشيء أو المصدر</b> الذي يسبّب الشعور: <code>The lesson is boring</code>. وصفاتُ <b>-ed</b> تصف <b>شعورَ الشخص</b>: <code>I am bored</code>. مثال: <code>an interesting book</code> ← <code>I am interested</code>.',
      table:[['-ing (السبب)','a boring lesson / interesting'],['-ed (الشعور)','I am bored / interested'],['thing → -ing','The movie is exciting.'],['person → -ed','I am excited.']],
      trick:'اسألْ: أصفُ الشيءَ (سبب الشعور) أم الشخصَ (صاحب الشعور)؟ الشيءُ يأخذ <code>-ing</code>، والشخصُ يأخذ <code>-ed</code>.'
    },
    stages:[
      { type:'choice', name:'الشيء يأخذ -ing', hint:'ما يسبّب الشعور', qs:[
        {p:'The lesson is ___. (يسبّب الملل)', o:['boring','bored','bore'], a:0, w:'الشيء ← <code>-ing</code>.', f:'The lesson is <u>boring</u>.'},
        {p:'This is an ___ book.', o:['interesting','interested','interest'], a:0, w:'الكتاب ← <code>interesting</code>.', f:'an <u>interesting</u> book'},
        {p:'The game was ___.', o:['exciting','excited','excite'], a:0, w:'اللعبة ← <code>exciting</code>.', f:'was <u>exciting</u>'},
        {p:'The news is ___.', o:['surprising','surprised','surprise'], a:0, w:'الخبر ← <code>surprising</code>.', f:'is <u>surprising</u>'}
      ]},
      { type:'choice', name:'الشخص يأخذ -ed', hint:'صاحب الشعور', qs:[
        {p:'I am ___. This lesson is dull. (أشعر بالملل)', o:['bored','boring','bore'], a:0, w:'الشخص ← <code>-ed</code>.', f:'I am <u>bored</u>.'},
        {p:'She is ___ in science.', o:['interested','interesting','interest'], a:0, w:'الشخص ← <code>interested</code>.', f:'is <u>interested</u>'},
        {p:'We were ___ about the trip.', o:['excited','exciting','excite'], a:0, w:'الشخص ← <code>excited</code>.', f:'were <u>excited</u>'},
        {p:'They were ___ by the news.', o:['surprised','surprising','surprise'], a:0, w:'الشخص ← <code>surprised</code>.', f:'were <u>surprised</u>'}
      ]},
      { type:'choice', name:'-ed أم -ing', hint:'شخص أم شيء؟', qs:[
        {p:'The movie was ___.', o:['exciting','excited'], a:0, w:'الفيلم (شيء) ← <code>-ing</code>.', f:'<u>exciting</u>'},
        {p:'I was ___ during the movie.', o:['excited','exciting'], a:0, w:'الشخص ← <code>-ed</code>.', f:'<u>excited</u>'},
        {p:'Grammar is ___ for some students.', o:['confusing','confused'], a:0, w:'القواعد (شيء) ← <code>-ing</code>.', f:'<u>confusing</u>'},
        {p:'The students are ___.', o:['confused','confusing'], a:0, w:'الطلاب (أشخاص) ← <code>-ed</code>.', f:'<u>confused</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['I','am','boring','.'], bad:2, fix:'bored', w:'الشخص ← <code>bored</code> (إلّا إن كنت أنت من يُملّ الآخرين!).', f:'I am <u>bored</u>.'},
        {words:['The','lesson','is','interested','.'], bad:3, fix:'interesting', w:'الشيء ← <code>interesting</code>.', f:'The lesson is <u>interesting</u>.'},
        {words:['We','were','exciting','about','the','trip','.'], bad:2, fix:'excited', w:'الأشخاص ← <code>excited</code>.', f:'We were <u>excited</u>.'},
        {words:['The','news','was','surprised','.'], bad:3, fix:'surprising', w:'الخبر ← <code>surprising</code>.', f:'The news was <u>surprising</u>.'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['The','lesson','is','boring','.'], w:'الشيء ← <code>-ing</code>.', f:'The lesson is boring.'},
        {sol:['I','am','interested','in','science','.'], w:'الشخص ← <code>-ed</code>.', f:'I am interested in science.'},
        {sol:['It','is','an','exciting','game','.'], w:'صفة <code>-ing</code> قبل الاسم.', f:'It is an exciting game.'},
        {sol:['She','was','surprised','.'], w:'الشخص ← <code>-ed</code>.', f:'She was surprised.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'The lesson is ___.', ask:'اختر', o:['boring','bored'], a:0, w:'شيء.', f:'<u>boring</u>'},
        {p:'I am ___.', ask:'اختر', o:['bored','boring'], a:0, w:'شخص.', f:'<u>bored</u>'},
        {p:'an ___ book', ask:'اختر', o:['interesting','interested'], a:0, w:'شيء.', f:'<u>interesting</u>'},
        {p:'She is ___ in science.', ask:'اختر', o:['interested','interesting'], a:0, w:'شخص.', f:'<u>interested</u>'},
        {p:'The game was ___.', ask:'اختر', o:['exciting','excited'], a:0, w:'شيء.', f:'<u>exciting</u>'},
        {p:'We were ___.', ask:'اختر', o:['excited','exciting'], a:0, w:'أشخاص.', f:'<u>excited</u>'},
        {sol:['I','am','interested','in','history','.'], w:'الشخص ← <code>-ed</code>.', f:'I am interested in history.'},
        {p:'Grammar is ___.', ask:'اختر', o:['confusing','confused'], a:0, w:'شيء.', f:'<u>confusing</u>'},
        {p:'The students are ___.', ask:'اختر', o:['confused','confusing'], a:0, w:'أشخاص.', f:'<u>confused</u>'}
      ]}
    ]
  };
})();
