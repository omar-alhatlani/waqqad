/* ============================================================
   Lesson: Future with be going to + Information Questions
   English · Super Goal 2 · Unit 12 (It's Going to Be Fun!) · صفحة ١٠٤
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U12_GOINGTO'] = {
    id:'EN_SG2_U12_GOINGTO',
    title:'Future: be going to',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'am/is/are + going to + verb',
      intro:'نستعمل <code>be going to</code> للخطط المستقبلية: <code>I’m going to travel</code>. التكوين: <code>am/is/are + going to + الفعل المجرّد</code>. وأسئلةُ المعلومات تبدأ بأداة استفهام ثمّ <code>be</code>: <code>What are you going to do? / Where is she going to go?</code>',
      table:[['+','We are going to have fun.'],['–','I’m not going to relax.'],['Wh- question','What are you going to do?'],['answer','I’m going to dive.']],
      trick:'أسئلةُ المعلومات: <b>أداة الاستفهام + be + الفاعل + going to + الفعل</b>: <code>Where are you going to stay?</code> والفعلُ بعد <code>going to</code> مجرّد دائمًا.'
    },
    stages:[
      { type:'choice', name:'التكوين', hint:'am/is/are + going to', qs:[
        {p:'What are you going to ___ on vacation?', o:['do','doing','does','did'], a:0, w:'مجرّد بعد <code>going to</code>.', f:'going to <u>do</u>'},
        {p:'We ___ going to travel around.', o:['are','is','am','be'], a:0, w:'<code>We</code> ← <code>are</code>.', f:'We <u>are</u> going to travel.'},
        {p:'She ___ going to relax on the beach.', o:['is','are','am','be'], a:0, w:'<code>She</code> ← <code>is</code>.', f:'She <u>is</u> going to relax.'},
        {p:'You’re going to ___ the time of your life!', o:['have','has','having','had'], a:0, w:'مجرّد ← <code>have</code>.', f:'going to <u>have</u>'}
      ]},
      { type:'choice', name:'أسئلة المعلومات', hint:'Wh- + be + going to', qs:[
        {p:'___ are you going to do?', o:['What','Do','Are','Is'], a:0, w:'أداة الاستفهام ← <code>What</code>.', f:'<u>What</u> are you going to do?'},
        {p:'Where ___ she going to go?', o:['is','are','do','does'], a:0, w:'<code>she</code> ← <code>is</code>.', f:'Where <u>is</u> she going to go?'},
        {p:'What ___ they going to see?', o:['are','is','do','does'], a:0, w:'<code>they</code> ← <code>are</code>.', f:'What <u>are</u> they going to see?'},
        {p:'When ___ you going to travel?', o:['are','is','do','were'], a:0, w:'<code>you</code> ← <code>are</code>.', f:'When <u>are</u> you going to travel?'}
      ]},
      { type:'choice', name:'النفي والإجابة', hint:"not / I'm going to…", qs:[
        {p:'I ___ going to relax this year. (نفي)', o:['am not',"don't",'isn’t','not'], a:0, w:'<code>I am not going to</code>.', f:'I <u>am not</u> going to relax.'},
        {p:'What are you going to do? — I’m going to ___.', o:['dive','diving','dives','dove'], a:0, w:'مجرّد.', f:'going to <u>dive</u>'},
        {p:'They aren’t going to ___ in a hotel.', o:['stay','stays','staying','stayed'], a:0, w:'مجرّد.', f:'going to <u>stay</u>'},
        {p:'Are you going to travel? — Yes, I ___.', o:['am','do','will','are'], a:0, w:'الإجابة ← <code>am</code>.', f:'Yes, I <u>am</u>.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['We','is','going','to','travel','.'], bad:1, fix:'are', w:'<code>We</code> ← <code>are</code>.', f:'We <u>are</u> going to travel.'},
        {words:['What','you','are','going','to','do','?'], bad:1, fix:'ترتيب: are you', w:'<code>What are you…?</code>.', f:'What <u>are you</u> going to do?'},
        {words:['She','is','going','to','relaxes','.'], bad:4, fix:'relax', w:'مجرّد بعد <code>going to</code>.', f:'…going to <u>relax</u>.'},
        {words:['Where','does','she','going','to','go','?'], bad:1, fix:'is', w:'المستقبل ← <code>is she going to</code>.', f:'Where <u>is</u> she going to go?'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['We','are','going','to','have','fun','.'], w:'<code>are + going to + الفعل</code>.', f:'We are going to have fun.'},
        {sol:['What','are','you','going','to','do','?'], w:'<code>What + are + you + going to</code>.', f:'What are you going to do?'},
        {sol:['I’m','not','going','to','stay','home','.'], w:'النفي.', f:"I'm not going to stay home."},
        {sol:['Where','is','she','going','to','go','?'], w:'<code>Where + is + she + going to</code>.', f:'Where is she going to go?'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'We ___ going to travel.', ask:'be', o:['are','is'], a:0, w:'<code>We</code>.', f:'<u>are</u>'},
        {p:'She ___ going to relax.', ask:'be', o:['is','are'], a:0, w:'<code>She</code>.', f:'<u>is</u>'},
        {p:'going to ___ (do)', ask:'الفعل', o:['do','doing'], a:0, w:'مجرّد.', f:'<u>do</u>'},
        {p:'___ are you going to do?', ask:'اختر', o:['What','Do'], a:0, w:'أداة استفهام.', f:'<u>What</u>'},
        {p:'Where ___ she going to go?', ask:'اختر', o:['is','does'], a:0, w:'<code>is</code>.', f:'<u>is</u>'},
        {p:'I ___ going to relax. (نفي)', ask:'اختر', o:['am not',"don't"], a:0, w:'<code>am not</code>.', f:'<u>am not</u>'},
        {sol:['What','are','you','going','to','do','?'], w:'ترتيب السؤال.', f:'What are you going to do?'},
        {p:'They aren’t going to ___ in a hotel.', ask:'الفعل', o:['stay','stays'], a:0, w:'مجرّد.', f:'<u>stay</u>'},
        {p:'Are you going to travel? — Yes, I ___.', ask:'اختر', o:['am','do'], a:0, w:'<code>am</code>.', f:'<u>am</u>'}
      ]}
    ]
  };
})();
