/* ============================================================
   Lesson: Vocabulary — Greetings, Farewells & Introductions
   English · Super Goal 2 · Unit 1 (Are You Here on Vacation?) · صفحة ٢
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U1_VOCAB'] = {
    id:'EN_SG2_U1_VOCAB',
    title:'Vocabulary — Greetings & Introductions',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'Greetings · Farewells · Introducing',
      intro:'في التعارف نستعمل: <b>التحية</b> <code>How are you? / How’s it going? / It’s good to see you</code>، و<b>الوداع</b> <code>Good night / See you tomorrow / Take care / Bye</code>، و<b>التقديم</b> <code>I’d like to introduce you to… / Nice to meet you</code>، و<b>المعلومات الشخصية</b> مثل الاسم واللقب <code>nickname</code> والبلد.',
      table:[['Greeting (تحية)','How are you? / Good to see you'],['Farewell (وداع)','See you tomorrow / Take care'],['Introducing','I’d like to introduce you to Joe.'],['Nickname','اللقب: “everyone calls me Bob.”']],
      trick:'التحيةُ عند اللقاء، والوداعُ عند الفراق. <code>Nice to meet you</code> عند التعارف لأول مرّة، ونردّ بـ <code>Nice to meet you, too</code>.'
    },
    stages:[
      { type:'choice', name:'تحية أم وداع؟', hint:'عند اللقاء أم عند الفراق؟', qs:[
        {p:'How are you?', ask:'اختر', o:['Greeting','Farewell'], a:0, w:'تُقال عند اللقاء ← <b>تحية</b>.', f:'Greeting.'},
        {p:'See you tomorrow.', ask:'اختر', o:['Farewell','Greeting'], a:0, w:'تُقال عند الفراق ← <b>وداع</b>.', f:'Farewell.'},
        {p:'It’s good to see you.', ask:'اختر', o:['Greeting','Farewell'], a:0, w:'تحيةٌ عند اللقاء.', f:'Greeting.'},
        {p:'Take care. Bye.', ask:'اختر', o:['Farewell','Greeting'], a:0, w:'وداع.', f:'Farewell.'},
        {p:'Good night. See you tomorrow.', ask:'اختر', o:['Farewell','Greeting'], a:0, w:'وداعٌ في نهاية اللقاء.', f:'Farewell.'}
      ]},
      { type:'choice', name:'المعنى بالعربية', hint:'اختر المعنى الصحيح', qs:[
        {p:'nickname', ask:'المعنى', o:['اللقب / الكنية','الاسم الأول','اللقب العائلي'], a:0, w:'<code>nickname</code> = اللقب الذي يُنادى به.', f:'nickname = اللقب.'},
        {p:'last name', ask:'المعنى', o:['اسم العائلة','الاسم الأول','اللقب'], a:0, w:'<code>last name</code> = اسم العائلة.', f:'last name = اسم العائلة.'},
        {p:'Nice to meet you.', ask:'المعنى', o:['سُعدت بلقائك','إلى اللقاء','صباح الخير'], a:0, w:'تُقال عند التعارف لأول مرّة.', f:'سُعدت بلقائك.'},
        {p:'Welcome.', ask:'المعنى', o:['أهلًا وسهلًا','مع السلامة','شكرًا'], a:0, w:'<code>Welcome</code> = أهلًا بك.', f:'أهلًا وسهلًا.'},
        {p:'I was born in Makkah.', ask:'المعنى', o:['وُلدت في مكة','أعيش في مكة','زرت مكة'], a:0, w:'<code>was born</code> = وُلد.', f:'وُلدت في مكة.'}
      ]},
      { type:'gap', name:'أكمل الحوار', hint:'اختر العبارة المناسبة', qs:[
        {p:'A: How are you?  B: Fine, thanks. ___ you?', o:['How about','What about you is','How is about','Where about'], a:0, w:'نردّ بالسؤال نفسه: <code>How about you?</code>', f:'<u>How about</u> you?'},
        {p:'I’d like to ___ you to my friend Joe.', o:['introduce','present','know','welcome'], a:0, w:'<code>introduce … to …</code> = يُقدّم.', f:'I’d like to <u>introduce</u> you to Joe.'},
        {p:'Nice to meet you.  —  Nice to meet you, ___.', o:['too','also','so','again'], a:0, w:'نردّ بـ <code>too</code>.', f:'Nice to meet you, <u>too</u>.'},
        {p:'How do you ___ your last name?', o:['spell','say','call','write'], a:0, w:'<code>spell</code> = يتهجّى الحروف.', f:'How do you <u>spell</u> your last name?'},
        {p:'Everyone ___ me Bob.', o:['calls','names','says','tells'], a:0, w:'<code>calls me</code> = يُنادونني.', f:'Everyone <u>calls</u> me Bob.'},
        {p:'___ care. See you tomorrow.', o:['Take','Do','Have','Make'], a:0, w:'<code>Take care</code> = اعتنِ بنفسك (وداع).', f:'<u>Take</u> care.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['Nice','to','meet','you','also','.'], bad:4, fix:'too', w:'الردّ المعتاد <code>Nice to meet you, too</code>.', f:'Nice to meet you, <u>too</u>.'},
        {words:['I’d','like','to','introduce','you','with','Joe','.'], bad:5, fix:'to', w:'<code>introduce you to …</code> بحرف <code>to</code>.', f:'introduce you <u>to</u> Joe.'},
        {words:['How','do','you','say','your','name','?'], bad:3, fix:'spell', w:'لتهجئة الحروف نستعمل <code>spell</code>.', f:'How do you <u>spell</u> your name?'},
        {words:['See','you','yesterday','.'], bad:2, fix:'tomorrow', w:'الوداع للمستقبل: <code>See you tomorrow</code>.', f:'See you <u>tomorrow</u>.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'See you tomorrow.', ask:'تحية أم وداع؟', o:['Farewell','Greeting'], a:0, w:'وداع.', f:'Farewell.'},
        {p:'nickname', ask:'المعنى', o:['اللقب','اسم العائلة'], a:0, w:'اللقب.', f:'اللقب.'},
        {p:'Nice to meet you, ___.', ask:'أكمل', o:['too','also'], a:0, w:'نردّ بـ too.', f:'Nice to meet you, <u>too</u>.'},
        {p:'How are you?', ask:'تحية أم وداع؟', o:['Greeting','Farewell'], a:0, w:'تحية.', f:'Greeting.'},
        {p:'I’d like to ___ you to Joe.', ask:'أكمل', o:['introduce','welcome'], a:0, w:'يُقدّم.', f:'<u>introduce</u>.'},
        {p:'last name', ask:'المعنى', o:['اسم العائلة','اللقب'], a:0, w:'اسم العائلة.', f:'اسم العائلة.'},
        {p:'How do you ___ your last name?', ask:'أكمل', o:['spell','say'], a:0, w:'spell.', f:'<u>spell</u>.'},
        {p:'Take care. Bye.', ask:'تحية أم وداع؟', o:['Farewell','Greeting'], a:0, w:'وداع.', f:'Farewell.'},
        {p:'Welcome.', ask:'المعنى', o:['أهلًا وسهلًا','مع السلامة'], a:0, w:'أهلًا بك.', f:'أهلًا وسهلًا.'}
      ]}
    ]
  };
})();
