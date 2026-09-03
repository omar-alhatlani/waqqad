/* ============================================================
   Lesson: Grammar — Would like
   English · Super Goal 1 · Unit 8 (What Are You Doing?) · صفحة ٧١
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1).
   lang:'en' → المحتوى إنجليزيّ LTR، والشرح بالعربية.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U8_WOULDLIKE'] = {
    id:'EN_SG1_U8_WOULDLIKE',
    title:'Grammar — الرغبة المؤدَّبة (would like)',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'Would like',
      intro:"نستعمل <code>would like</code> للتعبير عن الرغبة بأدب. <code>would like + اسم</code> لشيءٍ نريده، و<code>would like to + فعل</code> لنشاطٍ نريد فعله. و<code>I'd = I would</code>.",
      table:[['would like + اسم','I would like a sandwich.'],['would like to + فعل','I would like to watch TV.'],['سؤال','What would you like?'],['مختصر',"I'd · She'd · He'd"]],
      examples:["What would you like? — I'd like a sandwich.","Would you like to watch TV? — No, I'd like to read.","She'd like coffee.",'Where would he like to go?'],
      trick:"<code>would like + اسم</code> (a sandwich)، و<code>would like to + فعل</code> (to watch). و<code>I'd</code> اختصارٌ لـ <code>I would</code>."
    },
    stages:[
      { type:'choice', name:'اسم أم to + فعل؟', hint:'شيء ← اسم · نشاط ← to + فعل', qs:[
        {p:'I want a drink. →',              ask:'اختر الصحيح', o:["I'd like a coffee.","I'd like to coffee."], a:0, w:'اسمٌ بعد <code>would like</code> مباشرةً.', f:"I'd like a coffee."},
        {p:'I want to watch TV. →',           ask:'اختر الصحيح', o:["I'd like to watch TV.","I'd like watch TV."], a:0, w:'فعلٌ بعد <code>would like to</code>.', f:"I'd like to watch TV."},
        {p:'She wants a salad. →',            ask:'اختر الصحيح', o:["She'd like a salad.","She'd like to salad."], a:0, w:'اسمٌ ← بلا <code>to</code>.', f:"She'd like a salad."},
        {p:'He wants to go to the mall. →',    ask:'اختر الصحيح', o:["He'd like to go to the mall.","He'd like go to the mall."], a:0, w:'فعلٌ ← <code>to</code> قبله.', f:"He'd like to go to the mall."},
        {p:'I want a sandwich. →',            ask:'اختر الصحيح', o:["I'd like a sandwich.","I'd like to a sandwich."], a:0, w:'اسمٌ ← بلا <code>to</code>.', f:"I'd like a sandwich."},
        {p:'They want to eat. →',             ask:'اختر الصحيح', o:["They'd like to eat.","They'd like eat."], a:0, w:'فعلٌ ← <code>to</code> قبله.', f:"They'd like to eat."}
      ]},
      { type:'choice', name:'الردّ المناسب', hint:'اختر الردّ الصحيح', qs:[
        {p:'What would you like?',                ask:'اختر الردّ', o:["I'd like a sandwich.",'Yes, I am.','On Sunday.'], a:0, w:'رغبةٌ باسم ← <code>a sandwich</code>.', f:"I'd like a sandwich."},
        {p:'Would you like fries?',               ask:'اختر الردّ', o:["No, I'd like a salad.",'Yes, I do.','In May.'], a:0, w:'بديلٌ باسم ← <code>a salad</code>.', f:"No, I'd like a salad."},
        {p:'What would she like to watch?',        ask:'اختر الردّ', o:["She'd like to watch a comedy.","She'd like a comedy to.",'She watch a comedy.'], a:0, w:'نشاطٌ ← <code>to watch</code>.', f:"She'd like to watch a comedy."},
        {p:'Where would he like to go?',           ask:'اختر الردّ', o:["He'd like to go to the mall.",'He is going now.','Yes, he is.'], a:0, w:'مكانٌ ← <code>to go to...</code>.', f:"He'd like to go to the mall."},
        {p:'When would you like to eat?',          ask:'اختر الردّ', o:["I'd like to eat at 6.",'I like sandwiches.','In the kitchen.'], a:0, w:'وقتٌ ← <code>at 6</code>.', f:"I'd like to eat at 6."},
        {p:'Would you like to watch TV?',          ask:'اختر الردّ', o:["No, I'd like to read.",'Yes, I have.','On the sofa.'], a:0, w:'نشاطٌ بديل ← <code>to read</code>.', f:"No, I'd like to read."}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة الناقصة', qs:[
        {p:'I would like ___ watch TV.',      ask:'أكمل (نشاط)', o:['to','a','the','at'], a:0, w:'فعلٌ ← <code>to</code>.', f:'... like <u>to</u> watch TV.'},
        {p:'I would like ___ sandwich.',       ask:'أكمل (اسم)', o:['a','to','the','at'], a:0, w:'اسمٌ ← <code>a</code>.', f:'... like <u>a</u> sandwich.'},
        {p:'Would you like ___ read a book?',  ask:'أكمل (نشاط)', o:['to','a','the','of'], a:0, w:'فعلٌ ← <code>to</code>.', f:'... like <u>to</u> read.'},
        {p:'What ___ you like to do?',         ask:'أكمل', o:['would','are','do','is'], a:0, w:'<code>would</code> للرغبة.', f:'What <u>would</u> you like to do?'},
        {p:'He would like ___ go to the mall.', ask:'أكمل (نشاط)', o:['to','a','the','at'], a:0, w:'فعلٌ ← <code>to</code>.', f:'... like <u>to</u> go.'},
        {p:"___ like coffee.  (She would)",     ask:'أكمل (مختصر)', o:["She'd","She's","Shes","She"], a:0, w:'<code>She would = She\'d</code>.', f:"<u>She'd</u> like coffee."}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['I','would','like','a','sandwich','.'],            w:'رغبةٌ باسم.', f:'I would like a sandwich.'},
        {sol:['Would','you','like','to','watch','TV','?'],       w:'رغبةٌ بنشاط.', f:'Would you like to watch TV?'},
        {sol:['What','would','you','like','to','eat','?'],       w:'سؤالٌ عن الرغبة.', f:'What would you like to eat?'},
        {sol:['She','would','like','to','go','home','.'],        w:'رغبةٌ بنشاط.', f:'She would like to go home.'},
        {sol:['I','would','like','some','coffee','.'],           w:'رغبةٌ باسم.', f:'I would like some coffee.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'I want to watch TV. →', ask:'اختر الصحيح', o:["I'd like to watch TV.","I'd like watch TV."], a:0, w:'فعلٌ ← <code>to</code>.', f:"I'd like to watch TV."},
        {p:'What would you like?', ask:'اختر الردّ', o:["I'd like a sandwich.",'Yes, I am.'], a:0, w:'رغبةٌ باسم.', f:"I'd like a sandwich."},
        {p:'I would like ___ watch TV.', ask:'أكمل (نشاط)', o:['to','a','the','at'], a:0, w:'فعلٌ ← <code>to</code>.', f:'like <u>to</u> watch.'},
        {p:'She wants a salad. →', ask:'اختر الصحيح', o:["She'd like a salad.","She'd like to salad."], a:0, w:'اسمٌ ← بلا <code>to</code>.', f:"She'd like a salad."},
        {p:'Would you like to watch TV?', ask:'اختر الردّ', o:["No, I'd like to read.",'Yes, I have.'], a:0, w:'نشاطٌ بديل.', f:"No, I'd like to read."},
        {sol:['I','would','like','a','sandwich','.'], w:'رغبةٌ باسم.', f:'I would like a sandwich.'},
        {p:'What ___ you like to do?', ask:'أكمل', o:['would','are','do','is'], a:0, w:'<code>would</code> للرغبة.', f:'What <u>would</u> you like to do?'},
        {p:'They want to eat. →', ask:'اختر الصحيح', o:["They'd like to eat.","They'd like eat."], a:0, w:'فعلٌ ← <code>to</code>.', f:"They'd like to eat."},
        {sol:['Would','you','like','to','watch','TV','?'], w:'رغبةٌ بنشاط.', f:'Would you like to watch TV?'}
      ]}
    ]
  };
})();
