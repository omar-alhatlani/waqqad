/* ============================================================
   Lesson: Grammar — Present Progressive Tense
   English · Super Goal 1 · Unit 8 (What Are You Doing?) · صفحة ٦٦
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1).
   lang:'en' → المحتوى إنجليزيّ LTR، والشرح بالعربية.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U8_PRESPROG'] = {
    id:'EN_SG1_U8_PRESPROG',
    title:'Grammar — المضارع المستمر (Present Progressive)',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'Present Progressive',
      intro:'المضارع المستمر يعبّر عن فعلٍ يحدث <b>الآن</b>. تركيبه: <code>be (am/is/are) + الفعل + ing</code>. النفي بإضافة <code>not</code>، والسؤال بتقديم be. ونسأل عن الفعل بـ <code>What ... doing?</code>',
      table:[['+','I am studying · He is studying'],['−',"I'm not · He isn't studying"],['?','Are you studying? · Is he...?'],['What','What are you doing?']],
      examples:['He is watching TV.','They are eating sandwiches.','What is Ryan doing? — He is drinking coffee.',"I'm not studying now."],
      trick:'الصيغة = <code>am/is/are</code> + الفعل + <code>-ing</code>. مع <code>I</code> ← am، مع <code>he/she/it</code> ← is، مع <code>you/we/they</code> ← are.'
    },
    stages:[
      { type:'choice', name:'am / is / are', hint:'اختر فعل الكون المناسب', qs:[
        {p:'I ___ studying now.',   ask:'am / is / are؟', o:['am','is','are'], a:0, w:'<code>I</code> ← <code>am</code>.', f:'I <u>am</u> studying.'},
        {p:'He ___ watching TV.',    ask:'am / is / are؟', o:['is','am','are'], a:0, w:'<code>He</code> ← <code>is</code>.', f:'He <u>is</u> watching TV.'},
        {p:'They ___ eating.',       ask:'am / is / are؟', o:['are','am','is'], a:0, w:'<code>They</code> ← <code>are</code>.', f:'They <u>are</u> eating.'},
        {p:'She ___ reading.',       ask:'am / is / are؟', o:['is','am','are'], a:0, w:'<code>She</code> ← <code>is</code>.', f:'She <u>is</u> reading.'},
        {p:'We ___ playing.',        ask:'am / is / are؟', o:['are','am','is'], a:0, w:'<code>We</code> ← <code>are</code>.', f:'We <u>are</u> playing.'},
        {p:'You ___ working.',       ask:'am / is / are؟', o:['are','am','is'], a:0, w:'<code>You</code> ← <code>are</code>.', f:'You <u>are</u> working.'}
      ]},
      { type:'gap', name:'الفعل + ing', hint:'اختر صيغة الفعل الصحيحة', qs:[
        {p:'He is ___ TV.  (watch)',           ask:'أكمل', o:['watching','watchs','watched','watch'], a:0, w:'<code>watch → watching</code>.', f:'He is <u>watching</u> TV.'},
        {p:'They are ___ sandwiches.  (eat)',   ask:'أكمل', o:['eating','eats','eaten','eat'], a:0, w:'<code>eat → eating</code>.', f:'... <u>eating</u> sandwiches.'},
        {p:'I am ___ now.  (study)',            ask:'أكمل', o:['studying','studys','studied','study'], a:0, w:'<code>study → studying</code>.', f:'I am <u>studying</u>.'},
        {p:'She is ___ coffee.  (drink)',        ask:'أكمل', o:['drinking','drinks','drank','drink'], a:0, w:'<code>drink → drinking</code>.', f:'She is <u>drinking</u> coffee.'},
        {p:'We are ___ in the garden.  (play)',  ask:'أكمل', o:['playing','plays','played','play'], a:0, w:'<code>play → playing</code>.', f:'... <u>playing</u> in the garden.'},
        {p:'He is ___ an email.  (write)',       ask:'أكمل', o:['writing','writeing','writes','wrote'], a:0, w:'حذف e ← <code>writing</code>.', f:'He is <u>writing</u> an email.'}
      ]},
      { type:'choice', name:'السؤال والجواب', hint:'كوّن السؤال أو الجواب', qs:[
        {p:'___ you studying?',                 ask:'اختر', o:['Are','Is','Am'], a:0, w:'<code>you</code> ← <code>Are</code>.', f:'<u>Are</u> you studying?'},
        {p:'___ he watching TV?',                ask:'اختر', o:['Is','Are','Am'], a:0, w:'<code>he</code> ← <code>Is</code>.', f:'<u>Is</u> he watching TV?'},
        {p:'Are you working?  — Yes, I ___.',    ask:'اختر الجواب', o:['am','is','are'], a:0, w:'<code>I</code> ← <code>am</code>.', f:'Yes, I <u>am</u>.'},
        {p:'Is she reading?  — No, she ___.',    ask:'اختر الجواب', o:["isn't","aren't","am not"], a:0, w:'<code>she</code> ← <code>isn\'t</code>.', f:"No, she <u>isn't</u>."},
        {p:'What ___ they doing?',               ask:'اختر', o:['are','is','am'], a:0, w:'<code>they</code> ← <code>are</code>.', f:'What <u>are</u> they doing?'},
        {p:'What ___ he doing?',                 ask:'اختر', o:['is','are','am'], a:0, w:'<code>he</code> ← <code>is</code>.', f:'What <u>is</u> he doing?'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['He','is','watching','TV','.'],            w:'مضارع مستمر.', f:'He is watching TV.'},
        {sol:['They','are','eating','sandwiches','.'],    w:'مضارع مستمر.', f:'They are eating sandwiches.'},
        {sol:['What','are','you','doing','?'],            w:'سؤالٌ عن الفعل.', f:'What are you doing?'},
        {sol:['I','am','not','studying','now','.'],        w:'النفي.', f:'I am not studying now.'},
        {sol:['She','is','drinking','coffee','.'],         w:'مضارع مستمر.', f:'She is drinking coffee.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'He ___ watching TV.', ask:'am / is / are؟', o:['is','am','are'], a:0, w:'<code>He</code> ← <code>is</code>.', f:'He <u>is</u> watching TV.'},
        {p:'They are ___ sandwiches.  (eat)', ask:'أكمل', o:['eating','eats','eaten','eat'], a:0, w:'<code>eat → eating</code>.', f:'<u>eating</u> sandwiches.'},
        {p:'___ you studying?', ask:'اختر', o:['Are','Is','Am'], a:0, w:'<code>you</code> ← <code>Are</code>.', f:'<u>Are</u> you studying?'},
        {p:'He is ___ an email.  (write)', ask:'أكمل', o:['writing','writeing','writes','wrote'], a:0, w:'حذف e ← <code>writing</code>.', f:'<u>writing</u> an email.'},
        {p:'What ___ they doing?', ask:'اختر', o:['are','is','am'], a:0, w:'<code>they</code> ← <code>are</code>.', f:'What <u>are</u> they doing?'},
        {sol:['He','is','watching','TV','.'], w:'مضارع مستمر.', f:'He is watching TV.'},
        {p:'Is she reading?  — No, she ___.', ask:'اختر الجواب', o:["isn't","aren't","am not"], a:0, w:'<code>she</code> ← <code>isn\'t</code>.', f:"No, she <u>isn't</u>."},
        {p:'She ___ coffee.  (drink now)', ask:'am / is / are؟', o:['is','am','are'], a:0, w:'<code>She</code> ← <code>is</code>.', f:'She <u>is</u> drinking coffee.'},
        {sol:['What','are','you','doing','?'], w:'سؤالٌ عن الفعل.', f:'What are you doing?'}
      ]}
    ]
  };
})();
