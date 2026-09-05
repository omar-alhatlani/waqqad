/* ============================================================
   Lesson: Future — be + going to
   English · Super Goal 1 · Unit 13 (What Are You Going to Wear There?) · صفحة ١٢٠
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U13_GOINGTO'] = {
    id:'EN_SG1_U13_GOINGTO',
    title:'Future: be + going to',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'am/is/are + going to + verb',
      intro:'نستعمل <code>be going to</code> للحديث عن <b>الخطط المستقبلية</b>: <code>I am going to travel</code>. التكوين: <code>am/is/are + going to + الفعل المجرّد</code>. النفي بإضافة <code>not</code>: <code>I’m not going to…</code>. والسؤال بتقديم <code>be</code>: <code>Are you going to…?</code> وتعابيرُ المستقبل: <code>tomorrow, next week, next month</code>.',
      table:[['+','I am going to wear jeans.'],['–','He isn’t going to need a coat.'],['?','Are you going to travel?'],['future words','tomorrow, next week']],
      trick:'بعد <code>going to</code> يأتي الفعل <b>مجرّدًا</b>: <code>going to wear</code> لا <code>going to wears</code>. واستعملِ <code>am/is/are</code> الصحيحة حسب الفاعل.'
    },
    stages:[
      { type:'choice', name:'am / is / are', hint:'حسب الفاعل', qs:[
        {p:'I ___ going to travel.', o:['am','is','are','be'], a:0, w:'<code>I</code> ← <code>am</code>.', f:'I <u>am</u> going to travel.'},
        {p:'She ___ going to wear a dress.', o:['is','am','are','be'], a:0, w:'<code>She</code> ← <code>is</code>.', f:'She <u>is</u> going to…'},
        {p:'They ___ going to go shopping.', o:['are','is','am','be'], a:0, w:'<code>They</code> ← <code>are</code>.', f:'They <u>are</u> going to…'},
        {p:'What ___ you going to do?', o:['are','is','am','do'], a:0, w:'<code>you</code> ← <code>are</code>.', f:'What <u>are</u> you going to do?'}
      ]},
      { type:'choice', name:'الفعل بعد going to', hint:'مجرّد', qs:[
        {p:'I’m going to ___ jeans.', o:['wear','wears','wearing','wore'], a:0, w:'مجرّد ← <code>wear</code>.', f:'going to <u>wear</u>'},
        {p:'He’s going to ___ light clothes.', o:['take','takes','taking','took'], a:0, w:'مجرّد ← <code>take</code>.', f:'going to <u>take</u>'},
        {p:'We’re going to ___ to Jeddah.', o:['travel','travels','traveling','traveled'], a:0, w:'مجرّد ← <code>travel</code>.', f:'going to <u>travel</u>'},
        {p:'She’s going to ___ shopping.', o:['go','goes','going','went'], a:0, w:'مجرّد ← <code>go</code>.', f:'going to <u>go</u>'}
      ]},
      { type:'choice', name:'النفي والسؤال', hint:'not / تقديم be', qs:[
        {p:'He ___ going to need sunglasses. (نفي)', o:['isn’t','doesn’t','not','don’t'], a:0, w:'النفي ← <code>isn’t going to</code>.', f:'He <u>isn’t</u> going to…'},
        {p:'___ she going to buy a dress?', o:['Is','Does','Do','Are'], a:0, w:'<code>she</code> ← <code>Is</code>.', f:'<u>Is</u> she going to…?'},
        {p:'Is she going to go shopping? — Yes, she ___.', o:['is','does','can','are'], a:0, w:'الإجابة ← <code>is</code>.', f:'Yes, she <u>is</u>.'},
        {p:'I ___ going to travel this year. (نفي)', o:['am not','don’t','isn’t','not'], a:0, w:'<code>I am not</code>.', f:'I <u>am not</u> going to…'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['I','am','going','to','wears','jeans','.'], bad:4, fix:'wear', w:'مجرّد بعد <code>going to</code>.', f:'…going to <u>wear</u> jeans.'},
        {words:['She','going','to','travel','.'], bad:1, fix:'is going', w:'نحتاج <code>is</code>.', f:'She <u>is going</u> to travel.'},
        {words:['They','is','going','to','shop','.'], bad:1, fix:'are', w:'<code>They</code> ← <code>are</code>.', f:'They <u>are</u> going to shop.'},
        {words:['Does','she','going','to','buy','it','?'], bad:0, fix:'Is', w:'المستقبل ← <code>Is she going to…?</code>.', f:'<u>Is</u> she going to buy it?'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['I','am','going','to','wear','jeans','.'], w:'<code>am + going to + الفعل</code>.', f:'I am going to wear jeans.'},
        {sol:['What','are','you','going','to','do','?'], w:'<code>What + are + going to</code>.', f:'What are you going to do?'},
        {sol:['He','isn’t','going','to','need','a','coat','.'], w:'النفي ← <code>isn’t going to</code>.', f:'He isn’t going to need a coat.'},
        {sol:['Are','they','going','to','travel','?'], w:'تقديم <code>Are</code>.', f:'Are they going to travel?'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'I ___ going to travel.', ask:'be', o:['am','is'], a:0, w:'<code>I</code>.', f:'<u>am</u>'},
        {p:'She ___ going to wear a dress.', ask:'be', o:['is','are'], a:0, w:'<code>She</code>.', f:'<u>is</u>'},
        {p:'They ___ going to shop.', ask:'be', o:['are','is'], a:0, w:'<code>They</code>.', f:'<u>are</u>'},
        {p:'I’m going to ___ jeans.', ask:'الفعل', o:['wear','wears'], a:0, w:'مجرّد.', f:'<u>wear</u>'},
        {p:'He ___ going to need a coat. (نفي)', ask:'اختر', o:['isn’t','doesn’t'], a:0, w:'<code>isn’t</code>.', f:'<u>isn’t</u>'},
        {p:'___ she going to buy it?', ask:'اختر', o:['Is','Does'], a:0, w:'<code>Is</code>.', f:'<u>Is</u>'},
        {sol:['What','are','you','going','to','wear','?'], w:'ترتيب السؤال.', f:'What are you going to wear?'},
        {p:'We’re going to ___ to Jeddah.', ask:'الفعل', o:['travel','travels'], a:0, w:'مجرّد.', f:'<u>travel</u>'},
        {p:'Yes, she ___. (Is she going…?)', ask:'اختر', o:['is','does'], a:0, w:'<code>is</code>.', f:'<u>is</u>'}
      ]}
    ]
  };
})();
