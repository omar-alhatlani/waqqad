/* ============================================================
   Lesson: Grammar — Plural Possessive Adjectives (our/your/their)
   English · Super Goal 1 · Unit 2 (What Day Is Today?) · صفحة ١١
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1).
   lang:'en' → المحتوى إنجليزيّ LTR، والشرح بالعربية.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U2_POSS2'] = {
    id:'EN_SG1_U2_POSS2',
    title:'Grammar — صفات الملكية للجمع (our/your/their)',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'Plural Possessive Adjectives',
      intro:'صفاتُ الملكية للجمع تدلّ على مِلكِ مجموعة، وتأتي <b>قبل الاسم</b> مثل صفات المفرد.',
      table:[['we','our'],['you (plural)','your'],['they','their']],
      examples:['We are a team. → Our team is strong.','They are students. → Their class is big.'],
      trick:'<code>we</code>←<code>our</code>، <code>they</code>←<code>their</code>، <code>you</code>←<code>your</code>. وتذكّر صفات المفرد: <code>I→my</code>, <code>he→his</code>, <code>she→her</code>.'
    },
    stages:[
      { type:'choice', name:'الضمير وصفته', hint:'أيّ صفةِ ملكيّةٍ تناسب الضمير؟', qs:[
        {p:'we',   ask:'ما صفةُ الملكية؟', o:['our','your','their','my'], a:0, w:'<code>we</code> ← <code>our</code>.', f:'we → <u>our</u>'},
        {p:'they',  ask:'ما صفةُ الملكية؟', o:['their','our','your','his'], a:0, w:'<code>they</code> ← <code>their</code>.', f:'they → <u>their</u>'},
        {p:'you',  ask:'ما صفةُ الملكية؟', o:['your','our','their','my'], a:0, w:'<code>you</code> ← <code>your</code>.', f:'you → <u>your</u>'},
        {p:'we',   ask:'ما صفةُ الملكية؟', o:['our','their','your','her'], a:0, w:'<code>we</code> ← <code>our</code>.', f:'we → <u>our</u>'},
        {p:'they',  ask:'ما صفةُ الملكية؟', o:['their','your','our','my'], a:0, w:'<code>they</code> ← <code>their</code>.', f:'they → <u>their</u>'},
        {p:'I',    ask:'ما صفةُ الملكية؟', o:['my','our','their','your'], a:0, w:'تذكِرة: <code>I</code> ← <code>my</code>.', f:'I → <u>my</u>'},
        {p:'he',   ask:'ما صفةُ الملكية؟', o:['his','their','our','your'], a:0, w:'تذكِرة: <code>he</code> ← <code>his</code>.', f:'he → <u>his</u>'},
        {p:'you',  ask:'ما صفةُ الملكية؟', o:['your','their','our','his'], a:0, w:'<code>you</code> ← <code>your</code>.', f:'you → <u>your</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر صفة الملكية المناسبة', qs:[
        {p:'We are a team. ___ team is strong.',       ask:'أكمل الفراغ', o:['Our','Their','Your','My'], a:0, w:'<code>We</code> ← <code>Our</code>.', f:'<u>Our</u> team is strong.'},
        {p:'They are students. ___ class is big.',      ask:'أكمل الفراغ', o:['Their','Our','Your','His'], a:0, w:'<code>They</code> ← <code>Their</code>.', f:'<u>Their</u> class is big.'},
        {p:'You and Sami are friends. ___ bags are new.', ask:'أكمل الفراغ', o:['Your','Our','Their','My'], a:0, w:'<code>You</code> (جمع) ← <code>Your</code>.', f:'<u>Your</u> bags are new.'},
        {p:'My family and I travel. ___ trip is in May.', ask:'أكمل الفراغ', o:['Our','Their','Your','His'], a:0, w:'«عائلتي وأنا» = <code>we</code> ← <code>Our</code>.', f:'<u>Our</u> trip is in May.'},
        {p:'Ali and Omar are here. ___ names are nice.', ask:'أكمل الفراغ', o:['Their','Our','Your','Her'], a:0, w:'«علي وعمر» = <code>they</code> ← <code>Their</code>.', f:'<u>Their</u> names are nice.'},
        {p:'She is Mona. ___ name is Mona.',             ask:'أكمل الفراغ', o:['Her','Their','Our','Your'], a:0, w:'تذكِرة مفرد: <code>She</code> ← <code>Her</code>.', f:'<u>Her</u> name is Mona.'}
      ]},
      { type:'choice', name:'مفرد أم جمع؟', hint:'انتبه: مِلكُ فردٍ أم مجموعة؟', qs:[
        {p:'The students → ___ classroom.', ask:'اختر الصحيح', o:['their','his','her','my'], a:0, w:'مجموعة ← <code>their</code>.', f:'the students → <u>their</u> classroom'},
        {p:'My friend and I → ___ project.', ask:'اختر الصحيح', o:['our','their','your','his'], a:0, w:'«صديقي وأنا» ← <code>our</code>.', f:'my friend and I → <u>our</u> project'},
        {p:'The boy → ___ book.',            ask:'اختر الصحيح', o:['his','their','our','your'], a:0, w:'فردٌ مذكّر ← <code>his</code>.', f:'the boy → <u>his</u> book'},
        {p:'The girls → ___ teacher.',       ask:'اختر الصحيح', o:['their','her','our','his'], a:0, w:'مجموعة ← <code>their</code>.', f:'the girls → <u>their</u> teacher'},
        {p:'The girl → ___ pen.',            ask:'اختر الصحيح', o:['her','their','our','his'], a:0, w:'فردٌ مؤنّث ← <code>her</code>.', f:'the girl → <u>her</u> pen'},
        {p:'You (all) → ___ homework.',      ask:'اختر الصحيح', o:['your','their','our','my'], a:0, w:'مخاطَبون ← <code>your</code>.', f:'you (all) → <u>your</u> homework'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['Our','team','is','strong','.'],   w:'<code>Our</code> قبل الاسم.', f:'Our team is strong.'},
        {sol:['Their','class','is','big','.'],    w:'<code>Their</code> قبل الاسم.', f:'Their class is big.'},
        {sol:['Your','bags','are','new','.'],     w:'<code>Your</code> قبل الاسم.', f:'Your bags are new.'},
        {sol:['Our','trip','is','in','May','.'],  w:'<code>Our</code> قبل الاسم.', f:'Our trip is in May.'},
        {sol:['Their','names','are','nice','.'],  w:'<code>Their</code> قبل الاسم.', f:'Their names are nice.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'we',   ask:'ما صفةُ الملكية؟', o:['our','their'], a:0, w:'<code>we</code> ← <code>our</code>.', f:'we → <u>our</u>'},
        {p:'They are students. ___ class is big.', ask:'أكمل الفراغ', o:['Their','Our'], a:0, w:'<code>They</code> ← <code>Their</code>.', f:'<u>Their</u> class is big.'},
        {p:'they',  ask:'ما صفةُ الملكية؟', o:['their','your'], a:0, w:'<code>they</code> ← <code>their</code>.', f:'they → <u>their</u>'},
        {p:'The girls → ___ teacher.', ask:'اختر الصحيح', o:['their','her','our','his'], a:0, w:'مجموعة ← <code>their</code>.', f:'the girls → <u>their</u> teacher'},
        {p:'you',  ask:'ما صفةُ الملكية؟', o:['your','our'], a:0, w:'<code>you</code> ← <code>your</code>.', f:'you → <u>your</u>'},
        {p:'We are a team. ___ team is strong.', ask:'أكمل الفراغ', o:['Our','Their','Your','My'], a:0, w:'<code>We</code> ← <code>Our</code>.', f:'<u>Our</u> team is strong.'},
        {p:'he',   ask:'ما صفةُ الملكية؟', o:['his','their'], a:0, w:'تذكِرة: <code>he</code> ← <code>his</code>.', f:'he → <u>his</u>'},
        {sol:['Their','names','are','nice','.'], w:'<code>Their</code> قبل الاسم.', f:'Their names are nice.'},
        {p:'My friend and I → ___ project.', ask:'اختر الصحيح', o:['our','their','your','his'], a:0, w:'«صديقي وأنا» ← <code>our</code>.', f:'my friend and I → <u>our</u> project'}
      ]}
    ]
  };
})();
