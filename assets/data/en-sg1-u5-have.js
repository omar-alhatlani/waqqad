/* ============================================================
   Lesson: Grammar — Verb have (+ any / a lot of)
   English · Super Goal 1 · Unit 5 (Families, Families) · صفحة ٤٢
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1).
   lang:'en' → المحتوى إنجليزيّ LTR، والشرح بالعربية.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U5_HAVE'] = {
    id:'EN_SG1_U5_HAVE',
    title:'Grammar — الفعل have والكمّية',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'Verb have',
      intro:"الفعل <code>have</code> يعني «عنده/يملك». مع <code>he/she/it</code> يصير <code>has</code>. والسؤال بـ <code>Do/Does</code>، والنفي بـ <code>don't/doesn't</code>. والكمّية: <code>any</code> في النفي والسؤال، و<code>a lot of / lots of</code> للكثير.",
      table:[['I/you/we/they','have'],['he/she/it','has'],['سؤال','Do you have? · Does he have?'],['نفي',"don't have · doesn't have"]],
      examples:['I have a sister.','She has two brothers.','Do you have any cousins? — Yes, I have a lot of cousins.',"He doesn't have any brothers."],
      trick:"<code>he/she/it</code> ← <code>has</code>، والباقي <code>have</code>. وفي السؤال/النفي يعود الفعل <code>have</code>: <code>Does he have?</code> (لا has)."
    },
    stages:[
      { type:'choice', name:'have أم has؟', hint:'he/she/it ← has', qs:[
        {p:'I ___ a sister.',           ask:'have أم has؟', o:['have','has'], a:0, w:'<code>I</code> ← <code>have</code>.', f:'I <u>have</u> a sister.'},
        {p:'She ___ two brothers.',       ask:'have أم has؟', o:['has','have'], a:0, w:'<code>She</code> ← <code>has</code>.', f:'She <u>has</u> two brothers.'},
        {p:'They ___ many cousins.',      ask:'have أم has؟', o:['have','has'], a:0, w:'<code>They</code> ← <code>have</code>.', f:'They <u>have</u> many cousins.'},
        {p:'He ___ a big family.',        ask:'have أم has؟', o:['has','have'], a:0, w:'<code>He</code> ← <code>has</code>.', f:'He <u>has</u> a big family.'},
        {p:'We ___ a cat.',              ask:'have أم has؟', o:['have','has'], a:0, w:'<code>We</code> ← <code>have</code>.', f:'We <u>have</u> a cat.'},
        {p:'My father ___ three sisters.', ask:'have أم has؟', o:['has','have'], a:0, w:'<code>My father</code> = he ← <code>has</code>.', f:'My father <u>has</u> three sisters.'}
      ]},
      { type:'choice', name:'Do أم Does؟', hint:'he/she/it ← Does', qs:[
        {p:'___ you have any brothers?',     ask:'Do أم Does؟', o:['Do','Does'], a:0, w:'<code>you</code> ← <code>Do</code>.', f:'<u>Do</u> you have any brothers?'},
        {p:'___ he have a sister?',           ask:'Do أم Does؟', o:['Does','Do'], a:0, w:'<code>he</code> ← <code>Does</code>.', f:'<u>Does</u> he have a sister?'},
        {p:'___ they have cousins?',          ask:'Do أم Does؟', o:['Do','Does'], a:0, w:'<code>they</code> ← <code>Do</code>.', f:'<u>Do</u> they have cousins?'},
        {p:'___ she have children?',          ask:'Do أم Does؟', o:['Does','Do'], a:0, w:'<code>she</code> ← <code>Does</code>.', f:'<u>Does</u> she have children?'},
        {p:'___ we have time?',               ask:'Do أم Does؟', o:['Do','Does'], a:0, w:'<code>we</code> ← <code>Do</code>.', f:'<u>Do</u> we have time?'},
        {p:'___ your father have brothers?',   ask:'Do أم Does؟', o:['Does','Do'], a:0, w:'<code>your father</code> = he ← <code>Does</code>.', f:'<u>Does</u> your father have brothers?'}
      ]},
      { type:'gap', name:'النفي والجواب', hint:"don't / doesn't / do / does", qs:[
        {p:'I ___ have a brother.',                 ask:'أكمل (نفي)', o:["don't","doesn't","do","does"], a:0, w:'<code>I</code> ← <code>don\'t</code>.', f:"I <u>don't</u> have a brother."},
        {p:'He ___ have a sister.',                  ask:'أكمل (نفي)', o:["doesn't","don't","do","does"], a:0, w:'<code>He</code> ← <code>doesn\'t</code>.', f:"He <u>doesn't</u> have a sister."},
        {p:'Do you have cousins?  — Yes, I ___.',    ask:'أكمل (جواب)', o:['do',"don't",'does',"doesn't"], a:0, w:'<code>you</code> ← <code>do</code>.', f:'Yes, I <u>do</u>.'},
        {p:'Does she have a car?  — No, she ___.',   ask:'أكمل (جواب)', o:["doesn't","don't",'do','does'], a:0, w:'<code>she</code> ← <code>doesn\'t</code>.', f:"No, she <u>doesn't</u>."},
        {p:'They ___ have any pets.',                ask:'أكمل (نفي)', o:["don't","doesn't",'do','does'], a:0, w:'<code>They</code> ← <code>don\'t</code>.', f:"They <u>don't</u> have any pets."},
        {p:'Does he have brothers?  — Yes, he ___.', ask:'أكمل (جواب)', o:['does','do',"doesn't","don't"], a:0, w:'<code>he</code> ← <code>does</code>.', f:'Yes, he <u>does</u>.'}
      ]},
      { type:'gap', name:'الكمّية', hint:'any في النفي/السؤال · a lot of للكثير', qs:[
        {p:"I don't have ___ brothers.",   ask:'أكمل', o:['any','a lot of','lots of'], a:0, w:'في النفي ← <code>any</code>.', f:"... don't have <u>any</u> brothers."},
        {p:'Do you have ___ cousins?',      ask:'أكمل', o:['any','a lot of','lots of'], a:0, w:'في السؤال ← <code>any</code>.', f:'Do you have <u>any</u> cousins?'},
        {p:'Yes, I have ___ cousins.',       ask:'أكمل (كثير)', o:['a lot of','any','one'], a:0, w:'للكثرة ← <code>a lot of</code>.', f:'I have <u>a lot of</u> cousins.'},
        {p:"She doesn't have ___ sisters.",  ask:'أكمل', o:['any','a lot of','lots of'], a:0, w:'في النفي ← <code>any</code>.', f:"... doesn't have <u>any</u> sisters."},
        {p:'He has ___ friends.',            ask:'أكمل (كثير)', o:['lots of','any','a'], a:0, w:'للكثرة ← <code>lots of</code>.', f:'He has <u>lots of</u> friends.'},
        {p:'Do they have ___ children?',     ask:'أكمل', o:['any','a lot of','lots of'], a:0, w:'في السؤال ← <code>any</code>.', f:'Do they have <u>any</u> children?'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'She ___ two brothers.', ask:'have أم has؟', o:['has','have'], a:0, w:'<code>She</code> ← <code>has</code>.', f:'She <u>has</u> two brothers.'},
        {p:'___ he have a sister?', ask:'Do أم Does؟', o:['Does','Do'], a:0, w:'<code>he</code> ← <code>Does</code>.', f:'<u>Does</u> he have a sister?'},
        {p:'He ___ have a sister.', ask:'أكمل (نفي)', o:["doesn't","don't","do","does"], a:0, w:'<code>He</code> ← <code>doesn\'t</code>.', f:"He <u>doesn't</u> have a sister."},
        {p:"I don't have ___ brothers.", ask:'أكمل', o:['any','a lot of','lots of'], a:0, w:'في النفي ← <code>any</code>.', f:"... <u>any</u> brothers."},
        {sol:['I','have','a','sister','.'], w:'<code>I</code> ← <code>have</code>.', f:'I have a sister.'},
        {p:'They ___ many cousins.', ask:'have أم has؟', o:['have','has'], a:0, w:'<code>They</code> ← <code>have</code>.', f:'They <u>have</u> many cousins.'},
        {p:'Yes, I have ___ cousins.', ask:'أكمل (كثير)', o:['a lot of','any','one'], a:0, w:'للكثرة ← <code>a lot of</code>.', f:'<u>a lot of</u> cousins.'},
        {p:'Do you have cousins?  — Yes, I ___.', ask:'أكمل (جواب)', o:['do',"don't",'does',"doesn't"], a:0, w:'<code>you</code> ← <code>do</code>.', f:'Yes, I <u>do</u>.'},
        {sol:['Do','you','have','any','cousins','?'], w:'سؤالٌ بـ <code>Do</code> والكمّية <code>any</code>.', f:'Do you have any cousins?'}
      ]}
    ]
  };
})();
