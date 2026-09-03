/* ============================================================
   Lesson: Vocabulary — Rooms & Furniture
   English · Super Goal 1 · Unit 6 (Is There a View?) · صفحات ٤٨–٤٩
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1).
   lang:'en' → المحتوى إنجليزيّ LTR، والشرح بالعربية.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U6_VOCAB'] = {
    id:'EN_SG1_U6_VOCAB',
    title:'Vocabulary — غرف البيت والأثاث',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'Rooms & Furniture',
      intro:'غرفُ البيت وأثاثُها: غرفة المعيشة (Living Room)، وغرفة النوم (Bedroom)، والمطبخ (Kitchen)، والحمّام (Bathroom).',
      table:[['Living Room','sofa · TV · shelf'],['Bedroom','bed · closet · lamp'],['Kitchen','stove · sink · refrigerator'],['Bathroom','mirror · shower · toilet']],
      examples:['sofa, armchair, TV = غرفة المعيشة','bed, closet, lamp = غرفة النوم','stove, sink, refrigerator = المطبخ','mirror, shower, bathtub = الحمّام'],
      trick:'<code>refrigerator</code> = الثلّاجة، <code>closet</code> = خزانة الملابس، <code>sink</code> = المغسلة/الحوض، <code>garage</code> = المرآب.'
    },
    stages:[
      { type:'choice', name:'ما هذا الأثاث؟', hint:'اختر الكلمة الإنجليزية', qs:[
        {p:'You sleep on it.',              ask:'اختر الكلمة', o:['bed','sofa','desk','shelf'], a:0, w:'السرير ← <code>bed</code>.', f:'a bed'},
        {p:'You keep your clothes in it.',   ask:'اختر الكلمة', o:['closet','fridge','oven','sink'], a:0, w:'خزانة الملابس ← <code>closet</code>.', f:'a closet'},
        {p:'You cook on it.',                ask:'اختر الكلمة', o:['stove','bed','mirror','sofa'], a:0, w:'الموقد ← <code>stove</code>.', f:'a stove'},
        {p:'You keep food cold in it.',      ask:'اختر الكلمة', o:['refrigerator','closet','shelf','lamp'], a:0, w:'الثلّاجة ← <code>refrigerator</code>.', f:'a refrigerator'},
        {p:'You see yourself in it.',        ask:'اختر الكلمة', o:['mirror','window','TV','lamp'], a:0, w:'المرآة ← <code>mirror</code>.', f:'a mirror'},
        {p:'A long seat for many people.',   ask:'اختر الكلمة', o:['sofa','chair','bed','desk'], a:0, w:'الأريكة ← <code>sofa</code>.', f:'a sofa'}
      ]},
      { type:'choice', name:'أيّ غرفة؟', hint:'أين نجد هذا الشيء؟', qs:[
        {p:'bed →',          ask:'أيّ غرفة؟', o:['Bedroom','Kitchen','Bathroom','Living Room'], a:0, w:'السرير في <code>Bedroom</code>.', f:'Bedroom'},
        {p:'stove →',        ask:'أيّ غرفة؟', o:['Kitchen','Bedroom','Bathroom','Living Room'], a:0, w:'الموقد في <code>Kitchen</code>.', f:'Kitchen'},
        {p:'bathtub →',      ask:'أيّ غرفة؟', o:['Bathroom','Kitchen','Bedroom','Living Room'], a:0, w:'حوض الاستحمام في <code>Bathroom</code>.', f:'Bathroom'},
        {p:'sofa →',         ask:'أيّ غرفة؟', o:['Living Room','Kitchen','Bathroom','Bedroom'], a:0, w:'الأريكة في <code>Living Room</code>.', f:'Living Room'},
        {p:'refrigerator →', ask:'أيّ غرفة؟', o:['Kitchen','Bedroom','Bathroom','Living Room'], a:0, w:'الثلّاجة في <code>Kitchen</code>.', f:'Kitchen'},
        {p:'shower →',       ask:'أيّ غرفة؟', o:['Bathroom','Kitchen','Bedroom','Living Room'], a:0, w:'الدُّش في <code>Bathroom</code>.', f:'Bathroom'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'I sleep in my ___.',             ask:'أكمل', o:['bed','sofa','desk','sink'], a:0, w:'<code>bed</code>.', f:'in my <u>bed</u>.'},
        {p:'The ___ keeps food cold.',        ask:'أكمل', o:['refrigerator','closet','mirror','lamp'], a:0, w:'<code>refrigerator</code>.', f:'the <u>refrigerator</u>.'},
        {p:'There is a car in the ___.',      ask:'أكمل', o:['garage','garden','kitchen','closet'], a:0, w:'المرآب ← <code>garage</code>.', f:'in the <u>garage</u>.'},
        {p:'I cook on the ___.',              ask:'أكمل', o:['stove','bed','mirror','sofa'], a:0, w:'<code>stove</code>.', f:'on the <u>stove</u>.'},
        {p:'There are flowers in the ___.',    ask:'أكمل (خارج البيت)', o:['garden','bathroom','closet','fridge'], a:0, w:'الحديقة ← <code>garden</code>.', f:'in the <u>garden</u>.'},
        {p:'I keep my clothes in the ___.',    ask:'أكمل', o:['closet','stove','sink','shelf'], a:0, w:'<code>closet</code>.', f:'in the <u>closet</u>.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['There','is','a','sofa','.'],                 w:'غرفة المعيشة.', f:'There is a sofa.'},
        {sol:['I','sleep','in','my','bed','.'],              w:'غرفة النوم.', f:'I sleep in my bed.'},
        {sol:['The','stove','is','in','the','kitchen','.'],  w:'المطبخ.', f:'The stove is in the kitchen.'},
        {sol:['What','is','in','your','bedroom','?'],        w:'سؤالٌ عن الغرفة.', f:'What is in your bedroom?'},
        {sol:['There','are','flowers','in','the','garden','.'], w:'الحديقة.', f:'There are flowers in the garden.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'You sleep on it.', ask:'اختر الكلمة', o:['bed','sofa'], a:0, w:'<code>bed</code>.', f:'a bed'},
        {p:'stove →', ask:'أيّ غرفة؟', o:['Kitchen','Bedroom','Bathroom','Living Room'], a:0, w:'في <code>Kitchen</code>.', f:'Kitchen'},
        {p:'The ___ keeps food cold.', ask:'أكمل', o:['refrigerator','closet','mirror','lamp'], a:0, w:'<code>refrigerator</code>.', f:'the <u>refrigerator</u>.'},
        {p:'sofa →', ask:'أيّ غرفة؟', o:['Living Room','Kitchen'], a:0, w:'في <code>Living Room</code>.', f:'Living Room'},
        {p:'You see yourself in it.', ask:'اختر الكلمة', o:['mirror','window','TV','lamp'], a:0, w:'<code>mirror</code>.', f:'a mirror'},
        {sol:['There','is','a','sofa','.'], w:'غرفة المعيشة.', f:'There is a sofa.'},
        {p:'There is a car in the ___.', ask:'أكمل', o:['garage','garden','kitchen','closet'], a:0, w:'<code>garage</code>.', f:'in the <u>garage</u>.'},
        {p:'bathtub →', ask:'أيّ غرفة؟', o:['Bathroom','Kitchen'], a:0, w:'في <code>Bathroom</code>.', f:'Bathroom'},
        {sol:['I','sleep','in','my','bed','.'], w:'غرفة النوم.', f:'I sleep in my bed.'}
      ]}
    ]
  };
})();
