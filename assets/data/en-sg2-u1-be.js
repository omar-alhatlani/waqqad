/* ============================================================
   Lesson: The verb be — Yes/No Questions & Short Answers
   English · Super Goal 2 · Unit 1 (Are You Here on Vacation?) · صفحة ٤
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2). lang:'en' → محتوى إنجليزيّ، شرح عربيّ.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U1_BE'] = {
    id:'EN_SG2_U1_BE',
    title:'The Verb Be — Questions & Short Answers',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'be — Yes/No Questions & Short Answers',
      intro:'لتكوين سؤال <code>Yes/No</code> بالفعل <code>be</code> نُقدّم الفعل على الفاعل: <code>Are you here?</code>. وفي الإجابة القصيرة نُعيد الضمير مع الفعل: بالإثبات <code>Yes, I am</code> (بلا اختصار)، وبالنفي <code>No, I’m not / he isn’t / they aren’t</code>.',
      table:[['Are you …?','Yes, I am. / No, I’m not.'],['Is he/she/it …?','Yes, he is. / No, he isn’t.'],['Are they/we …?','Yes, they are. / No, they aren’t.']],
      trick:'في السؤال يتقدّم <code>be</code> على الفاعل، ولا نستعمل <code>do</code> معه أبدًا. والإثبات لا يُختصر: <code>Yes, I am</code> لا <code>Yes, I’m</code>.'
    },
    stages:[
      { type:'choice', name:'كوّن السؤال', hint:'أيّ شكل من be يبدأ السؤال؟', qs:[
        {p:'___ you here on vacation?', o:['Are','Is','Am','Do'], a:0, w:'<code>you</code> يأخذ <code>are</code>، ويتقدّم في السؤال.', f:'<u>Are</u> you here on vacation?'},
        {p:'___ Ahmed happy in his new job?', o:['Is','Are','Am','Does'], a:0, w:'<code>Ahmed</code> مفرد غائب ← <code>is</code>.', f:'<u>Is</u> Ahmed happy?'},
        {p:'___ they from Egypt?', o:['Are','Is','Am','Do'], a:0, w:'<code>they</code> جمع ← <code>are</code>.', f:'<u>Are</u> they from Egypt?'},
        {p:'___ it very cold today?', o:['Is','Are','Am','Does'], a:0, w:'<code>it</code> ← <code>is</code>.', f:'<u>Is</u> it very cold?'},
        {p:'___ I late for the festival?', o:['Am','Is','Are','Do'], a:0, w:'<code>I</code> ← <code>am</code>.', f:'<u>Am</u> I late?'}
      ]},
      { type:'choice', name:'الإجابة القصيرة (+)', hint:'أعد الضمير مع الفعل — بلا اختصار في الإثبات', qs:[
        {p:'Are you a student?  →  Yes, ___.', o:['I am','I’m','I are','am I'], a:0, w:'الإثبات لا يُختصر: <code>Yes, I am</code>.', f:'Yes, <u>I am</u>.'},
        {p:'Is she your sister?  →  Yes, ___.', o:['she is','she’s','she are','is she'], a:0, w:'<code>Yes, she is</code> — بلا اختصار.', f:'Yes, <u>she is</u>.'},
        {p:'Are they ready?  →  Yes, ___.', o:['they are','they’re','they is','are they'], a:0, w:'<code>Yes, they are</code>.', f:'Yes, <u>they are</u>.'},
        {p:'Is it open?  →  Yes, ___.', o:['it is','it’s','its','is it'], a:0, w:'<code>Yes, it is</code>.', f:'Yes, <u>it is</u>.'},
        {p:'Am I right?  →  Yes, ___.', o:['you are','I am','you’re','am you'], a:0, w:'سؤالٌ عن <code>I</code> يُجاب عنه بـ <code>you</code>: <code>Yes, you are</code>.', f:'Yes, <u>you are</u>.'}
      ]},
      { type:'choice', name:'الإجابة القصيرة (–)', hint:'في النفي نستعمل الاختصار', qs:[
        {p:'Is he a teacher?  →  No, ___.', o:['he isn’t','he not is','he aren’t','isn’t he'], a:0, w:'مع <code>is</code> النفي <code>isn’t</code>.', f:'No, <u>he isn’t</u>.'},
        {p:'Are you tired?  →  No, ___.', o:['I’m not','I amn’t','I aren’t','I not am'], a:0, w:'⚠️ لا وجود لـ <code>amn’t</code>؛ الصواب <code>I’m not</code>.', f:'No, <u>I’m not</u>.'},
        {p:'Are they at home?  →  No, ___.', o:['they aren’t','they isn’t','they not are','aren’t they'], a:0, w:'مع <code>are</code> النفي <code>aren’t</code>.', f:'No, <u>they aren’t</u>.'},
        {p:'Is it Friday?  →  No, ___.', o:['it isn’t','its not','it aren’t','it not is'], a:0, w:'<code>it isn’t</code>.', f:'No, <u>it isn’t</u>.'},
        {p:'Is the museum open?  →  No, ___.', o:['it isn’t','they aren’t','he isn’t','I’m not'], a:0, w:'<code>the museum</code> مفرد ← <code>it isn’t</code>.', f:'No, <u>it isn’t</u>.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['Do','you','are','a','tourist','?'], bad:0, fix:'تُحذف', w:'لا نستعمل <code>do</code> مع <code>be</code>؛ الفعل نفسه يتقدّم.', f:'<u>Are</u> you a tourist?'},
        {words:['Is','they','from','Riyadh','?'], bad:0, fix:'Are', w:'<code>they</code> جمع ← <code>Are</code>.', f:'<u>Are</u> they from Riyadh?'},
        {words:['Yes',',','I’m','.'], bad:2, fix:'I am', w:'الإثبات لا يُختصر: <code>Yes, I am</code>.', f:'Yes, <u>I am</u>.'},
        {words:['No',',','he','not','is','.'], bad:3, fix:'isn’t (بعد he)', w:'الترتيب: <code>he isn’t</code>.', f:'No, <u>he isn’t</u>.'},
        {words:['Are','she','your','sister','?'], bad:0, fix:'Is', w:'<code>she</code> مفرد ← <code>Is</code>.', f:'<u>Is</u> she your sister?'}
      ]},
      { type:'order', name:'ابنِ السؤال', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['Are','you','here','on','vacation','?'], w:'يتقدّم <code>Are</code> على الفاعل.', f:'Are you here on vacation?'},
        {sol:['Is','the','museum','open','?'], w:'مفرد ← <code>Is</code> في المقدمة.', f:'Is the museum open?'},
        {sol:['Are','they','from','Egypt','?'], w:'جمع ← <code>Are</code>.', f:'Are they from Egypt?'},
        {sol:['Yes',',','I','am','.'], w:'الإجابة القصيرة بالإثبات بلا اختصار.', f:'Yes, I am.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'___ you here for the festival?', ask:'اختر بداية السؤال', o:['Are','Is','Am','Do'], a:0, w:'<code>you</code> ← <code>Are</code>.', f:'<u>Are</u> you here for the festival?'},
        {p:'Are you a student?  →  Yes, ___.', ask:'الإجابة القصيرة', o:['I am','I’m','I are'], a:0, w:'بلا اختصار.', f:'Yes, <u>I am</u>.'},
        {p:'Is he a teacher?  →  No, ___.', ask:'الإجابة القصيرة', o:['he isn’t','he amn’t','he aren’t'], a:0, w:'<code>isn’t</code> مع <code>is</code>.', f:'No, <u>he isn’t</u>.'},
        {p:'Do you are a tourist?', ask:'صحّح الجملة', o:['Are you a tourist?','You are a tourist?','Are you a tourist.'], a:0, w:'لا <code>do</code> مع <code>be</code>.', f:'<u>Are you a tourist?</u>'},
        {p:'___ Ahmed happy?', ask:'اختر بداية السؤال', o:['Is','Are','Am','Does'], a:0, w:'مفرد غائب ← <code>Is</code>.', f:'<u>Is</u> Ahmed happy?'},
        {p:'Are they at home?  →  No, ___.', ask:'الإجابة القصيرة', o:['they aren’t','they isn’t','they not are'], a:0, w:'<code>aren’t</code> مع <code>are</code>.', f:'No, <u>they aren’t</u>.'},
        {p:'Are you tired?  →  No, ___.', ask:'الإجابة القصيرة', o:['I’m not','I amn’t','I aren’t'], a:0, w:'لا <code>amn’t</code>.', f:'No, <u>I’m not</u>.'},
        {sol:['Are','you','here','on','vacation','?'], w:'يتقدّم الفعل.', f:'Are you here on vacation?'},
        {p:'___ it very cold?', ask:'اختر بداية السؤال', o:['Is','Are','Am','Does'], a:0, w:'<code>it</code> ← <code>Is</code>.', f:'<u>Is</u> it very cold?'}
      ]}
    ]
  };
})();
