/* ============================================================
   Lesson: Reading — A History of Special Effects
   English · Super Goal 3 · Unit 5 (Since When?) · صفحة ٥٤
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U5_READ'] = {
    id:'EN_SG3_U5_READ',
    title:'Reading — A History of Special Effects',
    lang:'en',
    rule:{
      tag:'Reading',
      title:'A History of Special Effects',
      intro:'اقرأِ النصَّ عن تاريخ المؤثّرات البصرية في الأفلام، ثمّ أجِب عن الأسئلة.',
      examples:[
        'Audiences have been fascinated by moving images ever since the Lumière brothers first showed short films in Paris on December 28, 1895.',
        'One of the first special effects was discovered by accident in 1896, when Georges Méliès’s camera stopped and started again — the “stop trick” made objects seem to change.',
        'One famous early effect was the title character in King Kong (1933). The huge gorilla was actually only 18 inches (45 cm) high — a small-scale model.',
        'Star Wars (1977), by George Lucas, developed a computer-controlled camera to create more realistic motion.',
        'Today, digital technology has given special effects a new dimension in films like Jurassic Park and Pirates of the Caribbean.'
      ],
      trick:'من الحيلة العَرَضية (Méliès 1896) ← النماذج الصغيرة (King Kong) ← الكاميرا المحوسبة (Star Wars) ← الصور الرقمية اليوم.'
    },
    stages:[
      { type:'choice', name:'البدايات', hint:'من أين بدأت؟', qs:[
        {p:'Who first showed short films in 1895?', o:['the Lumière brothers','George Lucas','Méliès'], a:0, w:'الأخوان لوميير.', f:'the <u>Lumière brothers</u>'},
        {p:'The first films were shown in:', o:['Paris','London','Cairo'], a:0, w:'باريس.', f:'<u>Paris</u>'},
        {p:'How was the “stop trick” discovered?', o:['by accident','on purpose','in a lab'], a:0, w:'بالصدفة.', f:'<u>by accident</u>'},
        {p:'Who discovered the “stop trick”?', o:['Georges Méliès','the Lumières','Lucas'], a:0, w:'ميليس.', f:'<u>Georges Méliès</u>'}
      ]},
      { type:'choice', name:'أفلام مشهورة', hint:'King Kong & Star Wars', qs:[
        {p:'The King Kong gorilla was actually only:', o:['18 inches high','18 feet high','real'], a:0, w:'نموذجٌ صغير ١٨ بوصة.', f:'<u>18 inches</u> high'},
        {p:'King Kong was made in:', o:['1933','1977','1895'], a:0, w:'١٩٣٣.', f:'<u>1933</u>'},
        {p:'Star Wars was created by:', o:['George Lucas','Méliès','Lumière'], a:0, w:'جورج لوكاس.', f:'<u>George Lucas</u>'},
        {p:'Star Wars developed a ___ camera for realistic motion.', o:['computer-controlled','broken','film-only'], a:0, w:'كاميرا محوسبة.', f:'<u>computer-controlled</u>'}
      ]},
      { type:'choice', name:'المفردات', hint:'من النصّ', qs:[
        {p:'“technique” means:', o:['a way of doing things','a small model','a new idea'], a:0, w:'أسلوب/طريقة.', f:'<u>a way of doing things</u>'},
        {p:'“miniature” means:', o:['a small model','a stop','an order'], a:0, w:'نموذجٌ صغير.', f:'<u>a small model</u>'},
        {p:'“interrupt” means:', o:['stop in the middle','finish','begin'], a:0, w:'يقاطع/يوقف.', f:'<u>stop in the middle</u>'},
        {p:'Today, ___ technology gives effects a new dimension.', o:['digital','film','paper'], a:0, w:'رقمية.', f:'<u>digital</u>'}
      ]},
      { type:'gap', name:'أكمل من النصّ', hint:'اختر الكلمة المناسبة', qs:[
        {p:'Audiences have been ___ by moving images.', o:['fascinated','bored','tired'], a:0, w:'مبهورين.', f:'<u>fascinated</u>'},
        {p:'The stop trick was discovered by ___.', o:['accident','plan','order'], a:0, w:'بالصدفة.', f:'by <u>accident</u>'},
        {p:'The King Kong gorilla was a small-scale ___.', o:['model','city','film'], a:0, w:'نموذج.', f:'<u>model</u>'},
        {p:'Digital technology gave effects a new ___.', o:['dimension','danger','dinner'], a:0, w:'بُعد.', f:'new <u>dimension</u>'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'First short films (1895) by the ___.', ask:'أكمل', o:['Lumière brothers','Lucas'], a:0, w:'لوميير.', f:'<u>Lumière brothers</u>'},
        {p:'Shown in ___.', ask:'اختر', o:['Paris','London'], a:0, w:'باريس.', f:'<u>Paris</u>'},
        {p:'The “stop trick” was found by ___.', ask:'اختر', o:['accident','plan'], a:0, w:'بالصدفة.', f:'<u>accident</u>'},
        {p:'King Kong gorilla was only ___ high.', ask:'اختر', o:['18 inches','18 feet'], a:0, w:'١٨ بوصة.', f:'<u>18 inches</u>'},
        {p:'King Kong was made in ___.', ask:'اختر', o:['1933','1977'], a:0, w:'١٩٣٣.', f:'<u>1933</u>'},
        {p:'Star Wars by ___.', ask:'اختر', o:['George Lucas','Méliès'], a:0, w:'لوكاس.', f:'<u>George Lucas</u>'},
        {p:'“miniature” =', ask:'المعنى', o:['a small model','a stop'], a:0, w:'نموذجٌ صغير.', f:'<u>a small model</u>'},
        {p:'Today effects use ___ technology.', ask:'اختر', o:['digital','paper'], a:0, w:'رقمية.', f:'<u>digital</u>'},
        {p:'Audiences were ___ by moving images.', ask:'أكمل', o:['fascinated','bored'], a:0, w:'مبهورين.', f:'<u>fascinated</u>'}
      ]}
    ]
  };
})();
