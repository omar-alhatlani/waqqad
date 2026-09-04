/* ============================================================
   Lesson: Know How To + Gerunds/Infinitives
   English · Super Goal 2 · Unit 4 (Favorite Pastimes) · صفحة ٢٩
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U4_KNOW'] = {
    id:'EN_SG2_U4_KNOW',
    title:'Know How To & Gerunds',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'know how to · like doing / like to do',
      intro:'<code>know how to</code> + الفعل الأصليّ تعني <b>القدرة على فعل شيء</b> (= can): <code>I know how to ski = I can ski.</code> وبعض الأفعال يتبعُها الفعلُ بصيغة <b>الـ ing</b> (gerund) مثل <code>enjoy / like</code>، أو بصيغة <b>to + الفعل</b> (infinitive) مثل <code>want / like to</code>: <code>I enjoy playing / I like to play.</code>',
      table:[['know how to + verb','= can (يعرف كيف)'],['enjoy + verb-ing','enjoy playing'],['want / would like + to','want to play'],['like','like playing = like to play']],
      trick:'<code>know how to</code> يعادل <code>can</code>. بعد <code>enjoy</code> نستعمل <code>-ing</code>، وبعد <code>want</code> نستعمل <code>to</code>، و<code>like</code> يقبل الاثنين.'
    },
    stages:[
      { type:'choice', name:'know how to = can', hint:'يعرف كيف = يستطيع', qs:[
        {p:'I know how to ski. = ', ask:'اختر', o:['I can ski.','I can’t ski.','I ski never.'], a:0, w:'<code>know how to</code> = <code>can</code>.', f:'= I can ski.'},
        {p:'I don’t know how to cook. = ', ask:'اختر', o:['I can’t cook.','I can cook.','I cook well.'], a:0, w:'النفي ← <code>can’t</code>.', f:'= I can’t cook.'},
        {p:'She knows how to swim. = ', ask:'اختر', o:['She can swim.','She swims never.','She can’t swim.'], a:0, w:'= <code>can swim</code>.', f:'= She can swim.'},
        {p:'After “know how”, we use:', ask:'اختر', o:['to + verb','verb-ing','verb-s'], a:0, w:'<code>know how to</code> + الفعل الأصليّ.', f:'to + verb.'}
      ]},
      { type:'gap', name:'ing أم to؟', hint:'enjoy → ing · want → to', qs:[
        {p:'I enjoy ___ football. (play)', o:['playing','to play','play'], a:0, w:'بعد <code>enjoy</code> ← <code>-ing</code>.', f:'enjoy <u>playing</u>.'},
        {p:'I want ___ hockey. (play)', o:['to play','playing','play'], a:0, w:'بعد <code>want</code> ← <code>to</code>.', f:'want <u>to play</u>.'},
        {p:'She likes ___ pictures. (paint)', o:['painting','paint','paints'], a:0, w:'<code>like</code> يقبل <code>-ing</code> (وأيضًا to paint).', f:'likes <u>painting</u>.'},
        {p:'I know how ___ ice-skate. (—)', o:['to','—','ing'], a:0, w:'<code>know how to</code>.', f:'know how <u>to</u> ice-skate.'},
        {p:'They enjoy ___ TV. (watch)', o:['watching','to watch','watch'], a:0, w:'بعد <code>enjoy</code> ← <code>-ing</code>.', f:'enjoy <u>watching</u> TV.'}
      ]},
      { type:'choice', name:'الفعل المناسب', hint:'اختر الصيغة الصحيحة بعد الفعل', qs:[
        {p:'We want ___ climbing this weekend.', ask:'اختر', o:['to go','going','go'], a:0, w:'بعد <code>want</code> ← <code>to go</code>.', f:'want <u>to go</u>.'},
        {p:'He enjoys ___ chess.', ask:'اختر', o:['playing','to play','play'], a:0, w:'بعد <code>enjoy</code> ← <code>-ing</code>.', f:'enjoys <u>playing</u>.'},
        {p:'Do you know how ___ cook?', ask:'اختر', o:['to','—','ing'], a:0, w:'<code>know how to</code>.', f:'know how <u>to</u> cook?'},
        {p:'I would like ___ a book.', ask:'اختر', o:['to read','reading','read'], a:0, w:'بعد <code>would like</code> ← <code>to</code>.', f:'would like <u>to read</u>.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['I','enjoy','to','play','tennis','.'], bad:2, fix:'playing', w:'بعد <code>enjoy</code> نستعمل <code>-ing</code>.', f:'I enjoy <u>playing</u> tennis.'},
        {words:['I','want','playing','hockey','.'], bad:2, fix:'to play', w:'بعد <code>want</code> نستعمل <code>to</code>.', f:'I want <u>to play</u> hockey.'},
        {words:['I','know','how','cook','.'], bad:3, fix:'to cook', w:'<code>know how to</code>.', f:'I know how <u>to cook</u>.'},
        {words:['She','know','how','to','swim','.'], bad:1, fix:'knows', w:'مفرد ← <code>knows</code>.', f:'She <u>knows</u> how to swim.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['I','know','how','to','ski','.'], w:'know how to + الفعل.', f:'I know how to ski.'},
        {sol:['I','enjoy','playing','football','.'], w:'enjoy + ing.', f:'I enjoy playing football.'},
        {sol:['I','want','to','play','hockey','.'], w:'want + to.', f:'I want to play hockey.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'I know how to ski. =', ask:'اختر', o:['I can ski.','I can’t ski.'], a:0, w:'= can.', f:'= I can ski.'},
        {p:'I enjoy ___ football.', ask:'اختر', o:['playing','to play'], a:0, w:'enjoy + ing.', f:'<u>playing</u>.'},
        {p:'I want ___ hockey.', ask:'اختر', o:['to play','playing'], a:0, w:'want + to.', f:'<u>to play</u>.'},
        {p:'know how ___ cook', ask:'اختر', o:['to','ing'], a:0, w:'know how to.', f:'<u>to</u> cook.'},
        {p:'She ___ how to swim.', ask:'اختر', o:['knows','know'], a:0, w:'مفرد.', f:'<u>knows</u>.'},
        {sol:['I','know','how','to','ski','.'], w:'know how to.', f:'I know how to ski.'},
        {p:'They enjoy ___ TV.', ask:'اختر', o:['watching','to watch'], a:0, w:'enjoy + ing.', f:'<u>watching</u>.'},
        {p:'I don’t know how to cook. =', ask:'اختر', o:['I can’t cook.','I can cook.'], a:0, w:'النفي.', f:'= I can’t cook.'},
        {p:'I would like ___ a book.', ask:'اختر', o:['to read','reading'], a:0, w:'would like + to.', f:'<u>to read</u>.'}
      ]}
    ]
  };
})();
