/* ============================================================
   Lesson: Reading — A New Student!
   English · Super Goal 1 · Unit 1 (Good Morning!) · صفحة ٧
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1).
   lang:'en' → المحتوى إنجليزيّ LTR، والشرح بالعربية.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U1_READ'] = {
    id:'EN_SG1_U1_READ',
    title:'Reading — A New Student!',
    lang:'en',
    rule:{
      tag:'النصّ',
      title:'A New Student!',
      intro:'اقرأ حوار عليّ وأحمد — أحمدُ طالبٌ جديدٌ في الفصل — ثم أجب عن الأسئلة.',
      examples:[
        "Ali: Hi. My name's Ali. What's your name?",
        "Ahmed: Nice to meet you, Ali. My name's Ahmed.",
        'Ali: Are you a new student?',
        'Ahmed: Yes, today is my first day here.',
        'Ali: Welcome to the class. Where are you from?',
        "Ahmed: I'm from Abha.",
        'Ali: Welcome to Riyadh.',
        "Ahmed: Thank you. It's a wonderful place."
      ],
      trick:'راقِب الأسماء <code>Ali</code> و<code>Ahmed</code> والمدينتين <code>Abha</code> و<code>Riyadh</code>؛ فالأسئلة تدور حولها.'
    },
    stages:[
      { type:'choice', name:'الفهم', hint:'أجب حسب النصّ', qs:[
        {p:"What is the new student's name?", ask:'حسب النصّ', o:['Ahmed','Ali','Tom','Omar'], a:0, w:'الطالب الجديد هو <code>Ahmed</code>.', f:'The new student is Ahmed.'},
        {p:'Where is Ahmed from?',            ask:'حسب النصّ', o:['Abha','Riyadh','Jeddah','Dammam'], a:0, w:"قال: <code>I'm from Abha.</code>", f:'Ahmed is from Abha.'},
        {p:'Which city is the school in?',    ask:'حسب النصّ', o:['Riyadh','Abha','Makkah','Tabuk'], a:0, w:'قال عليّ: <code>Welcome to Riyadh.</code>', f:'The school is in Riyadh.'},
        {p:'Who welcomes Ahmed to the class?',ask:'حسب النصّ', o:['Ali','Omar','Tom','Sara'], a:0, w:'<code>Ali</code> رحّب بأحمد.', f:'Ali welcomes Ahmed.'},
        {p:"Is today Ahmed's first day?",     ask:'حسب النصّ', o:['Yes','No'], a:0, w:'<code>today is my first day here.</code>', f:'Yes — his first day.'}
      ]},
      { type:'choice', name:'صحيح أم خطأ؟', hint:'Yes / No حسب النصّ', qs:[
        {p:'Ali is a new student.',        ask:'صحيح أم خطأ؟', o:['No','Yes'], a:0, w:'الطالب الجديد أحمد، لا عليّ.', f:'No — Ahmed is the new student.'},
        {p:'Ahmed is from Abha.',          ask:'صحيح أم خطأ؟', o:['Yes','No'], a:0, w:"<code>I'm from Abha.</code>", f:'Yes.'},
        {p:'Ali and Ahmed are in Riyadh.', ask:'صحيح أم خطأ؟', o:['Yes','No'], a:0, w:'<code>Welcome to Riyadh.</code>', f:'Yes.'},
        {p:'Ahmed is from Riyadh.',        ask:'صحيح أم خطأ؟', o:['No','Yes'], a:0, w:'أحمد من أبها، ورُحِّب به في الرياض.', f:'No — from Abha.'},
        {p:"Today is Ahmed's first day.",  ask:'صحيح أم خطأ؟', o:['Yes','No'], a:0, w:'<code>today is my first day here.</code>', f:'Yes.'}
      ]},
      { type:'gap', name:'أكمل من النصّ', hint:'اختر الكلمة من الحوار', qs:[
        {p:"Hi. My ___'s Ali.",            ask:'أكمل الفراغ', o:['name','city','friend','day'], a:0, w:'<code>My name’s Ali</code>.', f:"My <u>name</u>'s Ali."},
        {p:'Are you a new ___?',            ask:'أكمل الفراغ', o:['student','teacher','friend','name'], a:0, w:'<code>a new student</code> = طالبٌ جديد.', f:'Are you a new <u>student</u>?'},
        {p:'___ are you from?',             ask:'أكمل الفراغ', o:['Where','What','Who','When'], a:0, w:'السؤال عن البلد بـ <code>Where</code>.', f:'<u>Where</u> are you from?'},
        {p:'___ to Riyadh.',                ask:'أكمل الفراغ', o:['Welcome','Nice','Good','See'], a:0, w:'<code>Welcome to Riyadh</code> = أهلًا بك في الرياض.', f:'<u>Welcome</u> to Riyadh.'},
        {p:'Today is my first ___ here.',   ask:'أكمل الفراغ', o:['day','name','city','class'], a:0, w:'<code>first day</code> = أوّل يوم.', f:'my first <u>day</u> here.'},
        {p:"It's a ___ place.",             ask:'أكمل الفراغ', o:['wonderful','new','first','good'], a:0, w:'<code>wonderful</code> = رائع.', f:"It's a <u>wonderful</u> place."}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['My','name','is','Ahmed','.'],       w:'التعريف بالاسم.', f:'My name is Ahmed.'},
        {sol:['I','am','from','Abha','.'],          w:'ذكرُ البلد.', f:'I am from Abha.'},
        {sol:['Are','you','a','new','student','?'], w:'سؤالٌ بالفعل be.', f:'Are you a new student?'},
        {sol:['Welcome','to','the','class','.'],    w:'الترحيب.', f:'Welcome to the class.'},
        {sol:['Where','are','you','from','?'],      w:'السؤال عن البلد.', f:'Where are you from?'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما فهمته — مختلطًا', final:true, qs:[
        {p:"What is the new student's name?", ask:'حسب النصّ', o:['Ahmed','Ali'], a:0, w:'الطالب الجديد <code>Ahmed</code>.', f:'The new student is Ahmed.'},
        {p:'Where is Ahmed from?', ask:'حسب النصّ', o:['Abha','Riyadh'], a:0, w:"<code>I'm from Abha.</code>", f:'Ahmed is from Abha.'},
        {p:'Ali is a new student.', ask:'صحيح أم خطأ؟', o:['No','Yes'], a:0, w:'الطالب الجديد أحمد.', f:'No.'},
        {p:'___ are you from?', ask:'أكمل الفراغ', o:['Where','What','Who','When'], a:0, w:'← <code>Where</code>.', f:'<u>Where</u> are you from?'},
        {p:'Which city is the school in?', ask:'حسب النصّ', o:['Riyadh','Abha'], a:0, w:'<code>Welcome to Riyadh.</code>', f:'The school is in Riyadh.'},
        {p:'___ to Riyadh.', ask:'أكمل الفراغ', o:['Welcome','Nice','Good','See'], a:0, w:'← <code>Welcome</code>.', f:'<u>Welcome</u> to Riyadh.'},
        {p:'Ahmed is from Abha.', ask:'صحيح أم خطأ؟', o:['Yes','No'], a:0, w:"<code>I'm from Abha.</code>", f:'Yes.'},
        {sol:['I','am','from','Abha','.'], w:'ذكرُ البلد.', f:'I am from Abha.'},
        {p:'Are you a new ___?', ask:'أكمل الفراغ', o:['student','teacher','friend','name'], a:0, w:'← <code>student</code>.', f:'Are you a new <u>student</u>?'}
      ]}
    ]
  };
})();
