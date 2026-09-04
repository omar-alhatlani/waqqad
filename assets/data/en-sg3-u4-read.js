/* ============================================================
   Lesson: Reading — Foods from the Americas
   English · Super Goal 3 · Unit 4 (What Do I Need to Buy?) · صفحة ٤٤
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U4_READ'] = {
    id:'EN_SG3_U4_READ',
    title:'Reading — Foods from the Americas',
    lang:'en',
    rule:{
      tag:'Reading',
      title:'Foods from the Americas',
      intro:'اقرأِ النصَّ عن أطعمةٍ أصلُها الأمريكتان: الطماطم والأفوكادو والشوكولاتة، ثمّ أجِب.',
      examples:[
        'Tomatoes are native to Mexico and Central America, and the Aztecs grew them in the eighth century. Spanish explorers introduced them to Spain in the sixteenth century.',
        'The British at first thought tomatoes were poisonous. Later, a British diplomat introduced them to the Middle East, and now Egypt is a top tomato producer.',
        'The Aztecs also cultivated the avocado. It is an oily fruit, rich in vitamins A, B, and C. Sailors called avocados “seaman’s butter” because they last a long time.',
        'Chocolate was the treasured drink of the Aztecs. When Hernán Cortés arrived in Mexico in 1519, they gave him chocolate. The Spanish introduced it to Europe.',
        'In the nineteenth century, Henri Nestlé in Switzerland created the first bar of chocolate.'
      ],
      trick:'الطماطم والأفوكادو والشوكولاتة أصلُها الأمريكتان، ونقلها الإسبان إلى أوروبا. أوّلُ لوحِ شوكولاتة صنعه نستله في القرن التاسع عشر.'
    },
    stages:[
      { type:'choice', name:'أصل الأطعمة', hint:'من أين جاءت؟', qs:[
        {p:'Tomatoes are native to Mexico and:', o:['Central America','Europe','Egypt'], a:0, w:'أمريكا الوسطى.', f:'<u>Central America</u>'},
        {p:'Who grew tomatoes in the eighth century?', o:['the Aztecs','the British','the French'], a:0, w:'الأزتيك.', f:'the <u>Aztecs</u>'},
        {p:'Who introduced tomatoes to Spain?', o:['Spanish explorers','sailors','the Aztecs'], a:0, w:'المستكشفون الإسبان.', f:'<u>Spanish explorers</u>'},
        {p:'The avocado is rich in:', o:['vitamins','salt','sugar'], a:0, w:'الفيتامينات.', f:'rich in <u>vitamins</u>'}
      ]},
      { type:'choice', name:'تفاصيل', hint:'من النصّ', qs:[
        {p:'The British first thought tomatoes were:', o:['poisonous','delicious','cheap'], a:0, w:'سامّة.', f:'<u>poisonous</u>'},
        {p:'Sailors called avocados:', o:['“seaman’s butter”','“green gold”','“sea fruit”'], a:0, w:'زبدة البحّار.', f:'“<u>seaman’s butter</u>”'},
        {p:'Chocolate was the treasured drink of the:', o:['Aztecs','British','Italians'], a:0, w:'الأزتيك.', f:'the <u>Aztecs</u>'},
        {p:'Who created the first bar of chocolate?', o:['Henri Nestlé','Hernán Cortés','George Eastman'], a:0, w:'نستله.', f:'<u>Henri Nestlé</u>'}
      ]},
      { type:'choice', name:'صحّ أم خطأ', hint:'True / False', qs:[
        {p:'T/F: The Spanish introduced tomatoes to Europe.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'T/F: Tomatoes are not grown in the Middle East.', o:['False','True'], a:0, w:'مصرُ من كبار المنتجين.', f:'<u>False</u>'},
        {p:'T/F: The main ingredient of guacamole is avocado.', o:['True','False'], a:0, w:'نعم، الأفوكادو.', f:'<u>True</u>'},
        {p:'T/F: The first chocolate bar was made in the 20th century.', o:['False','True'], a:0, w:'بل في القرن التاسع عشر.', f:'<u>False</u>'}
      ]},
      { type:'gap', name:'أكمل من النصّ', hint:'اختر الكلمة المناسبة', qs:[
        {p:'Tomatoes are ___ to Mexico.', o:['native','strange','new'], a:0, w:'أصلُها من.', f:'<u>native</u> to Mexico'},
        {p:'The avocado is an oily ___.', o:['fruit','fish','grain'], a:0, w:'فاكهة.', f:'oily <u>fruit</u>'},
        {p:'Cortés arrived in Mexico in ___.', o:['1519','1888','1933'], a:0, w:'١٥١٩.', f:'in <u>1519</u>'},
        {p:'The Spanish ___ chocolate to Europe.', o:['introduced','sold back','hid'], a:0, w:'أدخلوها.', f:'<u>introduced</u>'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'Tomatoes are native to Mexico and ___.', ask:'أكمل', o:['Central America','Egypt'], a:0, w:'أمريكا الوسطى.', f:'<u>Central America</u>'},
        {p:'The ___ grew tomatoes long ago.', ask:'أكمل', o:['Aztecs','British'], a:0, w:'الأزتيك.', f:'<u>Aztecs</u>'},
        {p:'The British first thought tomatoes were ___.', ask:'اختر', o:['poisonous','tasty'], a:0, w:'سامّة.', f:'<u>poisonous</u>'},
        {p:'The avocado is rich in ___.', ask:'اختر', o:['vitamins','salt'], a:0, w:'فيتامينات.', f:'<u>vitamins</u>'},
        {p:'Chocolate was the drink of the ___.', ask:'أكمل', o:['Aztecs','French'], a:0, w:'الأزتيك.', f:'<u>Aztecs</u>'},
        {p:'___ created the first chocolate bar.', ask:'اختر', o:['Nestlé','Cortés'], a:0, w:'نستله.', f:'<u>Nestlé</u>'},
        {p:'Cortés arrived in ___.', ask:'اختر', o:['1519','1975'], a:0, w:'١٥١٩.', f:'<u>1519</u>'},
        {p:'T/F: Spanish introduced tomatoes to Europe.', ask:'صحّ/خطأ', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'Guacamole’s main ingredient is ___.', ask:'اختر', o:['avocado','tomato'], a:0, w:'الأفوكادو.', f:'<u>avocado</u>'}
      ]}
    ]
  };
})();
