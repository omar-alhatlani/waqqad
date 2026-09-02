/* ============================================================
   Lesson: Vocabulary — Greetings & Introductions
   English · Super Goal 1 · Unit 1 (Good Morning!) · صفحات ٢–٣
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1).
   lang:'en' → المحتوى إنجليزيّ LTR، والشرح بالعربية.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U1_GREET'] = {
    id:'EN_SG1_U1_GREET',
    title:'Vocabulary — Greetings & Introductions',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'Greetings & Introductions',
      intro:'نُحيّي الناسَ بحسب وقت اليوم، ونودّعهم بعباراتٍ خاصّة، ونعرّف بأنفسنا وبأصدقائنا.',
      table:[['Good morning','صباحًا ☀️'],['Good afternoon','بعد الظهر'],['Good evening','مساءً 🌆'],['Good night','عند النوم / الوداع ليلًا 🌙']],
      examples:['Hi. / Hello. → تحيّةٌ ودّية','Goodbye. / See you later. / Take care. → وداع','This is my friend, Hanan. → تقديم صديق','Nice to meet you. → سُررتُ بلقائك'],
      trick:'<code>Good morning/afternoon/evening</code> للتحيّة بحسب الوقت، و<code>Good night</code> للوداع ليلًا. وعند اللقاء الأول نقول <code>Nice to meet you.</code>'
    },
    stages:[
      { type:'choice', name:'التحية والوقت', hint:'أيّ تحيّةٍ تناسب الوقت؟', qs:[
        {p:'7:00 am  ☀️',      ask:'اختر التحيّة المناسبة', o:['Good morning','Good afternoon','Good evening','Good night'], a:0, w:'الصباح ← <code>Good morning</code>.', f:'☀️ → Good morning'},
        {p:'1:00 pm',          ask:'اختر التحيّة المناسبة', o:['Good afternoon','Good morning','Good evening','Good night'], a:0, w:'بعد الظهر ← <code>Good afternoon</code>.', f:'1:00 pm → Good afternoon'},
        {p:'7:00 pm  🌆',      ask:'اختر التحيّة المناسبة', o:['Good evening','Good morning','Good afternoon','Good night'], a:0, w:'المساء ← <code>Good evening</code>.', f:'🌆 → Good evening'},
        {p:'Before sleep  🌙', ask:'اختر التحيّة المناسبة', o:['Good night','Good morning','Good evening','Good afternoon'], a:0, w:'عند النوم ← <code>Good night</code>.', f:'🌙 → Good night'},
        {p:'9:00 am',          ask:'اختر التحيّة المناسبة', o:['Good morning','Good evening','Good afternoon','Good night'], a:0, w:'الصباح ← <code>Good morning</code>.', f:'9:00 am → Good morning'},
        {p:'4:00 pm',          ask:'اختر التحيّة المناسبة', o:['Good afternoon','Good night','Good morning','Good evening'], a:0, w:'بعد الظهر ← <code>Good afternoon</code>.', f:'4:00 pm → Good afternoon'}
      ]},
      { type:'choice', name:'الردّ المناسب', hint:'اختر الردّ الصحيح', qs:[
        {p:'How are you?',              ask:'اختر الردّ المناسب', o:['Fine, thanks.','My name is Ali.','I am from Abha.','See you later.'], a:0, w:'للسؤال عن الحال ← <code>Fine, thanks.</code>', f:'How are you? → Fine, thanks.'},
        {p:"What's your name?",         ask:'اختر الردّ المناسب', o:['My name is Ali.','Fine, thanks.','Nice to meet you.','Goodbye.'], a:0, w:'للسؤال عن الاسم ← <code>My name is Ali.</code>', f:"What's your name? → My name is Ali."},
        {p:'Where are you from?',        ask:'اختر الردّ المناسب', o:['I am from Abha.','Good morning.','My friends call me Bob.','Take care.'], a:0, w:'للسؤال عن البلد ← <code>I am from Abha.</code>', f:'Where are you from? → I am from Abha.'},
        {p:'Nice to meet you.',          ask:'اختر الردّ المناسب', o:['Nice to meet you, too.','Fine, thanks.','I am from Abha.','Good night.'], a:0, w:'نردّ ← <code>Nice to meet you, too.</code>', f:'Nice to meet you. → Nice to meet you, too.'},
        {p:'Goodbye.',                   ask:'اختر الردّ المناسب', o:['See you later.','My name is Sara.','Fine, thanks.','Good morning.'], a:0, w:'للوداع ← <code>See you later.</code>', f:'Goodbye. → See you later.'},
        {p:'This is my friend, Sara.',   ask:'اختر الردّ المناسب', o:['Nice to meet you.','I am fine.','Good afternoon.','My name is Tom.'], a:0, w:'عند التقديم ← <code>Nice to meet you.</code>', f:'This is my friend, Sara. → Nice to meet you.'}
      ]},
      { type:'gap', name:'أكمل الحوار', hint:'اختر الكلمة المناسبة', qs:[
        {p:"Hi. My ___'s Tom.",           ask:'أكمل الفراغ', o:['name','friend','meet','call'], a:0, w:'<code>My name’s Tom</code> = اسمي توم.', f:"My <u>name</u>'s Tom."},
        {p:'___ to meet you.',             ask:'أكمل الفراغ', o:['Nice','Good','See','Take'], a:0, w:'<code>Nice to meet you</code> = سُررتُ بلقائك.', f:'<u>Nice</u> to meet you.'},
        {p:'Good ___, Mr. Lang. (7:00 pm)',ask:'أكمل الفراغ', o:['evening','morning','afternoon','night'], a:0, w:'٧ مساءً ← <code>evening</code>.', f:'Good <u>evening</u>, Mr. Lang.'},
        {p:'See you ___.',                 ask:'أكمل الفراغ', o:['later','name','from','fine'], a:0, w:'<code>See you later</code> = أراك لاحقًا.', f:'See you <u>later</u>.'},
        {p:'This ___ my friend, Hanan.',    ask:'أكمل الفراغ', o:['is','are','am','be'], a:0, w:'المفرد الغائب ← <code>is</code>.', f:'This <u>is</u> my friend, Hanan.'},
        {p:'My friends ___ me Bob.',        ask:'أكمل الفراغ', o:['call','name','meet','see'], a:0, w:'<code>call me Bob</code> = يُنادونني بوب.', f:'My friends <u>call</u> me Bob.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['Good','morning','!'],          w:'تحيّةُ الصباح.', f:'Good morning!'},
        {sol:['My','name','is','Tom','.'],     w:'التعريف بالاسم.', f:'My name is Tom.'},
        {sol:['Nice','to','meet','you','.'],   w:'عند اللقاء الأول.', f:'Nice to meet you.'},
        {sol:['See','you','later','.'],        w:'عند الوداع.', f:'See you later.'},
        {sol:['This','is','my','friend','.'],  w:'تقديمُ صديق.', f:'This is my friend.'},
        {sol:['What','is','your','name','?'],  w:'سؤالٌ عن الاسم.', f:'What is your name?'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'7:00 pm  🌆', ask:'اختر التحيّة المناسبة', o:['Good evening','Good morning'], a:0, w:'المساء ← <code>Good evening</code>.', f:'🌆 → Good evening'},
        {p:'How are you?', ask:'اختر الردّ المناسب', o:['Fine, thanks.','My name is Ali.'], a:0, w:'← <code>Fine, thanks.</code>', f:'How are you? → Fine, thanks.'},
        {p:'___ to meet you.', ask:'أكمل الفراغ', o:['Nice','Good','See','Take'], a:0, w:'<code>Nice to meet you</code>.', f:'<u>Nice</u> to meet you.'},
        {p:'Goodbye.', ask:'اختر الردّ المناسب', o:['See you later.','Good morning.'], a:0, w:'للوداع ← <code>See you later.</code>', f:'Goodbye. → See you later.'},
        {p:'7:00 am  ☀️', ask:'اختر التحيّة المناسبة', o:['Good morning','Good night'], a:0, w:'الصباح ← <code>Good morning</code>.', f:'☀️ → Good morning'},
        {p:'My friends ___ me Bob.', ask:'أكمل الفراغ', o:['call','name','meet','see'], a:0, w:'<code>call me Bob</code>.', f:'My friends <u>call</u> me Bob.'},
        {p:'Nice to meet you.', ask:'اختر الردّ المناسب', o:['Nice to meet you, too.','Fine, thanks.'], a:0, w:'← <code>Nice to meet you, too.</code>', f:'→ Nice to meet you, too.'},
        {sol:['My','name','is','Tom','.'], w:'التعريف بالاسم.', f:'My name is Tom.'},
        {p:'Where are you from?', ask:'اختر الردّ المناسب', o:['I am from Abha.','Fine, thanks.'], a:0, w:'← <code>I am from Abha.</code>', f:'Where are you from? → I am from Abha.'}
      ]}
    ]
  };
})();
