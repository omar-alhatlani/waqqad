/* ============================================================
   Lesson: Grammar — Possessive Adjectives (my/your/his/her)
   English · Super Goal 1 · Unit 1 (Good Morning!) · صفحة ٤
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1).
   lang:'en' → المحتوى إنجليزيّ LTR، والشرح بالعربية.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U1_POSS'] = {
    id:'EN_SG1_U1_POSS',
    title:'Grammar — صفات الملكية (my/your/his/her)',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'Possessive Adjectives',
      intro:'صفاتُ الملكية تدلّ على مَن يملك الشيء، وتأتي <b>قبل الاسم</b>. لكلّ ضميرٍ صفةُ ملكيّةٍ تخصّه.',
      table:[['I','my'],['you','your'],['he','his'],['she','her']],
      examples:['I am Fatima. → My name is Fatima.','He is a teacher. → His name is Mr. Farhat.'],
      trick:'<code>he</code> ← <code>his</code> (بحرف h)، و<code>she</code> ← <code>her</code>. و<code>my</code> للمتكلّم <code>I</code>، و<code>your</code> للمخاطَب <code>you</code>. وتأتي دائمًا قبل الاسم.'
    },
    stages:[
      { type:'choice', name:'الضمير وصفته', hint:'أيّ صفةِ ملكيّةٍ تناسب الضمير؟', qs:[
        {p:'I',   ask:'ما صفةُ الملكية؟', o:['my','your','his','her'], a:0, w:'الضمير <code>I</code> صفتُه <code>my</code>.', f:'I → <u>my</u>'},
        {p:'you', ask:'ما صفةُ الملكية؟', o:['your','my','his','her'], a:0, w:'الضمير <code>you</code> صفتُه <code>your</code>.', f:'you → <u>your</u>'},
        {p:'he',  ask:'ما صفةُ الملكية؟', o:['his','her','my','your'], a:0, w:'الضمير <code>he</code> صفتُه <code>his</code>.', f:'he → <u>his</u>'},
        {p:'she', ask:'ما صفةُ الملكية؟', o:['her','his','my','your'], a:0, w:'الضمير <code>she</code> صفتُه <code>her</code>.', f:'she → <u>her</u>'},
        {p:'I',   ask:'ما صفةُ الملكية؟', o:['my','his','her','your'], a:0, w:'<code>I</code> ← <code>my</code>.', f:'I → <u>my</u>'},
        {p:'he',  ask:'ما صفةُ الملكية؟', o:['his','my','her','your'], a:0, w:'<code>he</code> ← <code>his</code>.', f:'he → <u>his</u>'},
        {p:'she', ask:'ما صفةُ الملكية؟', o:['her','your','his','my'], a:0, w:'<code>she</code> ← <code>her</code>.', f:'she → <u>her</u>'},
        {p:'you', ask:'ما صفةُ الملكية؟', o:['your','her','his','my'], a:0, w:'<code>you</code> ← <code>your</code>.', f:'you → <u>your</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر صفة الملكية المناسبة', qs:[
        {p:'He is a teacher. ___ name is Mr. Farhat.', ask:'أكمل الفراغ', o:['His','My','Her','Your'], a:0, w:'<code>He</code> ← <code>His</code>.', f:'<u>His</u> name is Mr. Farhat.'},
        {p:'I am a student. ___ name is Aisha.',       ask:'أكمل الفراغ', o:['My','His','Her','Your'], a:0, w:'<code>I</code> ← <code>My</code>.', f:'<u>My</u> name is Aisha.'},
        {p:'She is my sister. ___ name is Sara.',      ask:'أكمل الفراغ', o:['Her','His','My','Your'], a:0, w:'<code>She</code> ← <code>Her</code>.', f:'<u>Her</u> name is Sara.'},
        {p:'You have a bag. ___ bag is blue.',          ask:'أكمل الفراغ', o:['Your','My','His','Her'], a:0, w:'<code>You</code> ← <code>Your</code>.', f:'<u>Your</u> bag is blue.'},
        {p:'He is George. ___ last name is Parker.',    ask:'أكمل الفراغ', o:['His','Her','My','Your'], a:0, w:'<code>He</code> ← <code>His</code>.', f:'<u>His</u> last name is Parker.'},
        {p:'She is Mona. ___ friend is here.',          ask:'أكمل الفراغ', o:['Her','His','My','Your'], a:0, w:'<code>She</code> ← <code>Her</code>.', f:'<u>Her</u> friend is here.'},
        {p:'I have a cat. ___ cat is white.',           ask:'أكمل الفراغ', o:['My','His','Her','Your'], a:0, w:'<code>I</code> ← <code>My</code>.', f:'<u>My</u> cat is white.'},
        {p:'You are my friend. What is ___ name?',      ask:'أكمل الفراغ', o:['your','my','his','her'], a:0, w:'<code>you</code> ← <code>your</code>.', f:'What is <u>your</u> name?'}
      ]},
      { type:'choice', name:'his أم her؟', hint:'انتبه للضمير he / she', qs:[
        {p:'He is a teacher. ___ name is Sami.', ask:'His أم Her؟', o:['His','Her'], a:0, w:'<code>He</code> مذكّر ← <code>His</code>.', f:'<u>His</u> name is Sami.'},
        {p:'She is a doctor. ___ name is Lina.', ask:'His أم Her؟', o:['His','Her'], a:1, w:'<code>She</code> مؤنّث ← <code>Her</code>.', f:'<u>Her</u> name is Lina.'},
        {p:'He is my brother. ___ car is new.',  ask:'His أم Her؟', o:['His','Her'], a:0, w:'<code>He</code> ← <code>His</code>.', f:'<u>His</u> car is new.'},
        {p:'She is my friend. ___ bag is red.',  ask:'His أم Her؟', o:['His','Her'], a:1, w:'<code>She</code> ← <code>Her</code>.', f:'<u>Her</u> bag is red.'},
        {p:'He is a student. ___ book is here.', ask:'His أم Her؟', o:['His','Her'], a:0, w:'<code>He</code> ← <code>His</code>.', f:'<u>His</u> book is here.'},
        {p:'She is a nurse. ___ office is big.', ask:'His أم Her؟', o:['His','Her'], a:1, w:'<code>She</code> ← <code>Her</code>.', f:'<u>Her</u> office is big.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['My','name','is','Ahmed','.'],   w:'صفةُ الملكية <code>My</code> قبل الاسم.', f:'My name is Ahmed.'},
        {sol:['His','name','is','Ali','.'],     w:'<code>His</code> للمذكّر قبل الاسم.', f:'His name is Ali.'},
        {sol:['Her','name','is','Sara','.'],    w:'<code>Her</code> للمؤنّث قبل الاسم.', f:'Her name is Sara.'},
        {sol:['This','is','your','book','.'],   w:'<code>your</code> قبل الاسم <code>book</code>.', f:'This is your book.'},
        {sol:['My','friend','is','here','.'],   w:'<code>My</code> قبل الاسم <code>friend</code>.', f:'My friend is here.'},
        {sol:['Is','this','your','pen','?'],    w:'في السؤال، <code>your</code> قبل الاسم.', f:'Is this your pen?'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'he',  ask:'ما صفةُ الملكية؟', o:['his','her'], a:0, w:'<code>he</code> ← <code>his</code>.', f:'he → <u>his</u>'},
        {p:'She is Mona. ___ name is Mona.', ask:'أكمل الفراغ', o:['Her','His'], a:0, w:'<code>She</code> ← <code>Her</code>.', f:'<u>Her</u> name is Mona.'},
        {p:'I',   ask:'ما صفةُ الملكية؟', o:['my','your'], a:0, w:'<code>I</code> ← <code>my</code>.', f:'I → <u>my</u>'},
        {p:'He is a teacher. ___ name is Sami.', ask:'His أم Her؟', o:['His','Her'], a:0, w:'<code>He</code> ← <code>His</code>.', f:'<u>His</u> name is Sami.'},
        {p:'you', ask:'ما صفةُ الملكية؟', o:['your','his'], a:0, w:'<code>you</code> ← <code>your</code>.', f:'you → <u>your</u>'},
        {p:'She is a doctor. ___ name is Lina.', ask:'His أم Her؟', o:['Her','His'], a:0, w:'<code>She</code> ← <code>Her</code>.', f:'<u>Her</u> name is Lina.'},
        {p:'I am a student. ___ name is Aisha.', ask:'أكمل الفراغ', o:['My','His','Her','Your'], a:0, w:'<code>I</code> ← <code>My</code>.', f:'<u>My</u> name is Aisha.'},
        {p:'she', ask:'ما صفةُ الملكية؟', o:['her','his'], a:0, w:'<code>she</code> ← <code>her</code>.', f:'she → <u>her</u>'},
        {p:'You have a bag. ___ bag is blue.', ask:'أكمل الفراغ', o:['Your','My','His','Her'], a:0, w:'<code>You</code> ← <code>Your</code>.', f:'<u>Your</u> bag is blue.'}
      ]}
    ]
  };
})();
