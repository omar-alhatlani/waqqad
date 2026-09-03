/* ============================================================
   Lesson: Grammar — Verb be: negatives, questions, Where, from/in/on
   English · Super Goal 1 · Unit 4 (Around the World) · صفحة ٢٨
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1).
   lang:'en' → المحتوى إنجليزيّ LTR، والشرح بالعربية.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U4_BE'] = {
    id:'EN_SG1_U4_BE',
    title:'Grammar — be: النفي والسؤال + Where',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'be: Negatives & Questions',
      intro:"ننفي be بإضافة <code>not</code>: I'm not · he isn't · we aren't. ونسأل بتقديم be: <code>Are you...? / Is he...?</code> ونجيب بإجابةٍ قصيرة. ونسأل عن المكان بـ <code>Where</code>.",
      table:[['نفي',"I'm not · he isn't · we aren't"],['سؤال','Are you...? · Is he...?'],['جواب قصير',"Yes, I am. · No, he isn't."],['المكان','Where are you from?']],
      examples:["She is from Egypt. → She isn't from Egypt.",'Are you from Saudi Arabia? → Yes, I am.',"Where is he from? → He's from Oman.",'Rome is in Italy. He is on business.'],
      trick:"<code>from</code> للأصل (from England)، <code>in</code> للمكان (in Italy)، <code>on</code> مع <code>business/vacation</code>."
    },
    stages:[
      { type:'choice', name:'Are أم Is؟', hint:'كوّن السؤال الصحيح', qs:[
        {p:'___ you from Saudi Arabia?', ask:'Are أم Is؟', o:['Are','Is'], a:0, w:'<code>you</code> ← <code>Are</code>.', f:'<u>Are</u> you from Saudi Arabia?'},
        {p:'___ he from Oman?',           ask:'Are أم Is؟', o:['Is','Are'], a:0, w:'<code>he</code> ← <code>Is</code>.', f:'<u>Is</u> he from Oman?'},
        {p:'___ they Russian?',            ask:'Are أم Is؟', o:['Are','Is'], a:0, w:'<code>they</code> ← <code>Are</code>.', f:'<u>Are</u> they Russian?'},
        {p:'___ she Egyptian?',            ask:'Are أم Is؟', o:['Is','Are'], a:0, w:'<code>she</code> ← <code>Is</code>.', f:'<u>Is</u> she Egyptian?'},
        {p:'___ we late?',                 ask:'Are أم Is؟', o:['Are','Is'], a:0, w:'<code>we</code> ← <code>Are</code>.', f:'<u>Are</u> we late?'},
        {p:'___ it hot there?',            ask:'Are أم Is؟', o:['Is','Are'], a:0, w:'<code>it</code> ← <code>Is</code>.', f:'<u>Is</u> it hot there?'}
      ]},
      { type:'gap', name:'النفي', hint:"اختر أداة النفي الصحيحة", qs:[
        {p:'She ___ from Egypt.',   ask:'أكمل النفي', o:["isn't","aren't","am not"], a:0, w:'<code>She</code> ← <code>isn\'t</code>.', f:"She <u>isn't</u> from Egypt."},
        {p:'They ___ from Spain.',   ask:'أكمل النفي', o:["aren't","isn't","am not"], a:0, w:'<code>They</code> ← <code>aren\'t</code>.', f:"They <u>aren't</u> from Spain."},
        {p:'He ___ Russian.',        ask:'أكمل النفي', o:["isn't","aren't","am not"], a:0, w:'<code>He</code> ← <code>isn\'t</code>.', f:"He <u>isn't</u> Russian."},
        {p:'We ___ on vacation.',     ask:'أكمل النفي', o:["aren't","isn't","am not"], a:0, w:'<code>We</code> ← <code>aren\'t</code>.', f:"We <u>aren't</u> on vacation."},
        {p:'I ___ from the U.S.',     ask:'أكمل النفي', o:["am not","isn't","aren't"], a:0, w:'<code>I</code> ← <code>am not</code> (I\'m not).', f:"I'm not from the U.S."},
        {p:'It ___ hot today.',       ask:'أكمل النفي', o:["isn't","aren't","am not"], a:0, w:'<code>It</code> ← <code>isn\'t</code>.', f:"It <u>isn't</u> hot today."}
      ]},
      { type:'choice', name:'الجواب القصير', hint:'أجب إجابةً قصيرة', qs:[
        {p:'Are you from Jordan?  → Yes, ___', ask:'اختر الجواب', o:['I am.',"he isn't.",'we are.'], a:0, w:'<code>you</code> ← <code>I am</code>.', f:'Yes, I am.'},
        {p:'Is he Chinese?  → No, ___',         ask:'اختر الجواب', o:["he isn't.",'I am not.',"they aren't."], a:0, w:'<code>he</code> ← <code>he isn\'t</code>.', f:"No, he isn't."},
        {p:'Are they tourists?  → Yes, ___',     ask:'اختر الجواب', o:['they are.','I am.',"she isn't."], a:0, w:'<code>they</code> ← <code>they are</code>.', f:'Yes, they are.'},
        {p:'Is she Saudi?  → No, ___',           ask:'اختر الجواب', o:["she isn't.","they aren't.",'I am not.'], a:0, w:'<code>she</code> ← <code>she isn\'t</code>.', f:"No, she isn't."},
        {p:'Are we ready?  → Yes, ___',          ask:'اختر الجواب', o:['we are.','I am.','it is.'], a:0, w:'<code>we</code> ← <code>we are</code>.', f:'Yes, we are.'},
        {p:'Is it cold?  → No, ___',             ask:'اختر الجواب', o:["it isn't.","he isn't.","we aren't."], a:0, w:'<code>it</code> ← <code>it isn\'t</code>.', f:"No, it isn't."}
      ]},
      { type:'gap', name:'from / in / on', hint:'اختر حرف الجرّ الصحيح', qs:[
        {p:'Sally is ___ England.',       ask:'أكمل الفراغ', o:['from','in','on'], a:0, w:'الأصل ← <code>from</code>.', f:'Sally is <u>from</u> England.'},
        {p:'Rome is ___ Italy.',           ask:'أكمل الفراغ', o:['in','from','on'], a:0, w:'المكان ← <code>in</code>.', f:'Rome is <u>in</u> Italy.'},
        {p:'Mr. Omar is here ___ business.', ask:'أكمل الفراغ', o:['on','in','from'], a:0, w:'<code>on business</code>.', f:'... <u>on</u> business.'},
        {p:'Pat is ___ vacation.',          ask:'أكمل الفراغ', o:['on','in','from'], a:0, w:'<code>on vacation</code>.', f:'Pat is <u>on</u> vacation.'},
        {p:'She is ___ China.',             ask:'أكمل الفراغ', o:['from','in','on'], a:0, w:'الأصل ← <code>from</code>.', f:'She is <u>from</u> China.'},
        {p:'Cairo is ___ Egypt.',           ask:'أكمل الفراغ', o:['in','from','on'], a:0, w:'المكان ← <code>in</code>.', f:'Cairo is <u>in</u> Egypt.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'___ he from Oman?', ask:'Are أم Is؟', o:['Is','Are'], a:0, w:'<code>he</code> ← <code>Is</code>.', f:'<u>Is</u> he from Oman?'},
        {p:'She ___ from Egypt.', ask:'أكمل النفي', o:["isn't","aren't","am not"], a:0, w:'<code>She</code> ← <code>isn\'t</code>.', f:"She <u>isn't</u> from Egypt."},
        {p:'Are you from Jordan?  → Yes, ___', ask:'اختر الجواب', o:['I am.',"he isn't."], a:0, w:'<code>you</code> ← <code>I am</code>.', f:'Yes, I am.'},
        {p:'Sally is ___ England.', ask:'أكمل الفراغ', o:['from','in','on'], a:0, w:'الأصل ← <code>from</code>.', f:'Sally is <u>from</u> England.'},
        {sol:['Where','are','you','from','?'], w:'سؤالٌ عن الأصل بـ <code>Where</code>.', f:'Where are you from?'},
        {p:'They ___ from Spain.', ask:'أكمل النفي', o:["aren't","isn't","am not"], a:0, w:'<code>They</code> ← <code>aren\'t</code>.', f:"They <u>aren't</u> from Spain."},
        {p:'Pat is ___ vacation.', ask:'أكمل الفراغ', o:['on','in','from'], a:0, w:'<code>on vacation</code>.', f:'Pat is <u>on</u> vacation.'},
        {p:'Is he Chinese?  → No, ___', ask:'اختر الجواب', o:["he isn't.",'I am not.'], a:0, w:'<code>he</code> ← <code>he isn\'t</code>.', f:"No, he isn't."},
        {sol:['She',"isn't",'from','Egypt','.'], w:'النفي ← <code>isn\'t</code>.', f:"She isn't from Egypt."}
      ]}
    ]
  };
})();
