/* ============================================================
   Lesson: Reading — Is Right, Right?
   English · Super Goal 3 · Unit 8 (Drive Slowly!) · صفحة ٩٠
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U8_READ'] = {
    id:'EN_SG3_U8_READ',
    title:'Reading — Is Right, Right?',
    lang:'en',
    rule:{
      tag:'Reading',
      title:'Is Right, Right?',
      intro:'اقرأْ عن سببِ القيادة يمينًا في بعض البلدان ويسارًا في غيرها، ثمّ أجِب.',
      examples:[
        'About a quarter of the world drives on the left, and most of those countries used to be British colonies. In England, people drive on the left.',
        'Some believe driving on the right is a natural tendency because most people are right-handed.',
        'Long ago in Europe, people rode horses on the left so their sword arm (the right) was ready to defend against anyone coming the opposite way.',
        'In the 1700s, drivers of wagons with many horses sat on the left and drove on the right; it was safer to pass on the left.',
        'Napoleon ordered people in France to drive on the right, and the countries France conquered followed. England kept driving on the left. Sweden changed to the right in 1967.'
      ],
      trick:'أسبابٌ للقيادة يمينًا أو يسارًا: عادات، وتاريخ (الفروسية والسيوف)، وعرباتُ الأحصنة، وأوامرُ نابليون. الخلاصة: اتّبعْ عادةَ البلد وقُدْ بحذر.'
    },
    stages:[
      { type:'choice', name:'الفهم العام', hint:'يمين أم يسار؟', qs:[
        {p:'About what fraction of the world drives on the left?', o:['a quarter','a half','all'], a:0, w:'الرُّبع.', f:'<u>a quarter</u>'},
        {p:'Most left-driving countries used to be:', o:['British colonies','French colonies','islands'], a:0, w:'مستعمرات بريطانية.', f:'<u>British colonies</u>'},
        {p:'In England, people drive on the:', o:['left','right','sidewalk'], a:0, w:'اليسار.', f:'the <u>left</u>'},
        {p:'Driving on the right may be natural because most people are:', o:['right-handed','tall','young'], a:0, w:'يمينيّو اليد.', f:'<u>right-handed</u>'}
      ]},
      { type:'choice', name:'التاريخ', hint:'الأحصنة ونابليون', qs:[
        {p:'Long ago, people rode horses on the left to keep their ___ arm ready.', o:['sword (right)','left','both'], a:0, w:'ذراع السيف اليمنى.', f:'their <u>sword (right)</u> arm'},
        {p:'In the 1700s, wagon drivers sat on the ___ and drove on the right.', o:['left','right','back'], a:0, w:'اليسار.', f:'sat on the <u>left</u>'},
        {p:'Who ordered France to drive on the right?', o:['Napoleon','a king','a company'], a:0, w:'نابليون.', f:'<u>Napoleon</u>'},
        {p:'Sweden changed to driving on the right in:', o:['1967','1300','2000'], a:0, w:'١٩٦٧.', f:'<u>1967</u>'}
      ]},
      { type:'choice', name:'صحّ أم خطأ', hint:'True / False', qs:[
        {p:'T/F: In England, people drive on the left.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'T/F: All the world drives on the right.', o:['False','True'], a:0, w:'بل الرُّبعُ يسارًا.', f:'<u>False</u>'},
        {p:'T/F: Napoleon ordered driving on the right in France.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'T/F: France conquered England.', o:['False','True'], a:0, w:'لم يفتحها، فبقيت تقود يسارًا.', f:'<u>False</u>'}
      ]},
      { type:'gap', name:'أكمل من النصّ', hint:'اختر الكلمة المناسبة', qs:[
        {p:'A quarter of the world drives on the ___.', o:['left','sky','sidewalk'], a:0, w:'اليسار.', f:'the <u>left</u>'},
        {p:'Most people are ___-handed.', o:['right','left','both'], a:0, w:'يمينيّون.', f:'<u>right</u>-handed'},
        {p:'___ ordered France to drive on the right.', o:['Napoleon','A student','A driver'], a:0, w:'نابليون.', f:'<u>Napoleon</u>'},
        {p:'The article says: follow the ___ of the country.', o:['customs','weather','prices'], a:0, w:'عادات.', f:'the <u>customs</u>'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'___ of the world drives on the left.', ask:'اختر', o:['A quarter','All'], a:0, w:'الرُّبع.', f:'<u>A quarter</u>'},
        {p:'England drives on the ___.', ask:'اختر', o:['left','right'], a:0, w:'اليسار.', f:'<u>left</u>'},
        {p:'Most people are ___-handed.', ask:'أكمل', o:['right','left'], a:0, w:'يمينيّون.', f:'<u>right</u>'},
        {p:'___ ordered right-driving in France.', ask:'اختر', o:['Napoleon','a king'], a:0, w:'نابليون.', f:'<u>Napoleon</u>'},
        {p:'Sweden changed in ___.', ask:'اختر', o:['1967','1300'], a:0, w:'١٩٦٧.', f:'<u>1967</u>'},
        {p:'Left-driving countries were British ___.', ask:'أكمل', o:['colonies','malls'], a:0, w:'مستعمرات.', f:'<u>colonies</u>'},
        {p:'Horse riders kept the ___ arm ready.', ask:'اختر', o:['right (sword)','left'], a:0, w:'اليمنى.', f:'<u>right (sword)</u>'},
        {p:'T/F: France conquered England.', ask:'صحّ/خطأ', o:['False','True'], a:0, w:'لا.', f:'<u>False</u>'},
        {p:'Advice: follow the ___ of the country.', ask:'أكمل', o:['customs','prices'], a:0, w:'عادات.', f:'<u>customs</u>'}
      ]}
    ]
  };
})();
