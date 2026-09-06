/* ============================================================
   Lesson: Reading — The Right Choice
   English · Super Goal 3 · Unit 11 (Making Choices) · صفحة ١٢٦
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U11_READ'] = {
    id:'EN_SG3_U11_READ',
    title:'Reading — The Right Choice',
    lang:'en',
    rule:{
      tag:'Reading',
      title:'The Right Choice',
      intro:'اقرأِ القصّةَ المُلهِمة عن الأخوين دورر، ثمّ أجِب. (قصّةٌ مؤثّرةٌ نُسِبت إلى الفنّان دورر.)',
      examples:[
        'A family near Nuremberg, Germany, had 18 children. The father, a goldsmith, worked almost 18 hours a day to feed them.',
        'Two of the sons, Albrecht and Albert, both wanted to study art, but the father could not afford to send both to the academy.',
        'So they made a pact: Albert would work in the mines to pay for Albrecht’s studies for four years. Then Albrecht would support Albert.',
        'Albrecht became a great artist. But after four years in the mines, Albert’s hands were ruined by the hard work and arthritis; he could no longer make art.',
        'To thank his brother, Albrecht drew Albert’s worn hands. The drawing, called “Hands,” became a famous masterpiece.'
      ],
      trick:'قصّةُ التضحية: أخٌ (ألبرت) عمل في المناجم ليدعم أخاه (ألبرشت) في دراسة الفنّ، فأتلفت المناجمُ يديه؛ فرسم ألبرشت يديه في لوحةٍ شهيرة اسمها «Hands».'
    },
    stages:[
      { type:'choice', name:'الفهم العام', hint:'العائلة والاتّفاق', qs:[
        {p:'How many children did the family have?', o:['18','2','8'], a:0, w:'ثمانية عشر.', f:'<u>18</u>'},
        {p:'What was the father’s job?', o:['a goldsmith','a doctor','a teacher'], a:0, w:'صائغُ ذهب.', f:'a <u>goldsmith</u>'},
        {p:'What did the two sons both want to study?', o:['art','medicine','law'], a:0, w:'الفنّ.', f:'<u>art</u>'},
        {p:'Why couldn’t both sons study at first?', o:['the father couldn’t afford it','they were lazy','they were sick'], a:0, w:'لم يستطع الأبُ تحمّل النفقات.', f:'<u>the father couldn’t afford it</u>'}
      ]},
      { type:'choice', name:'التضحية', hint:'الاتّفاق ونتيجتُه', qs:[
        {p:'Who worked in the mines to pay for the studies?', o:['Albert','Albrecht','the father'], a:0, w:'ألبرت.', f:'<u>Albert</u>'},
        {p:'What happened to Albert’s hands after four years?', o:['they were ruined','they got stronger','nothing'], a:0, w:'أُتلِفت.', f:'they were <u>ruined</u>'},
        {p:'What did Albrecht become?', o:['a great artist','a miner','a doctor'], a:0, w:'فنّانًا عظيمًا.', f:'a <u>great artist</u>'},
        {p:'What did Albrecht draw to thank his brother?', o:['his brother’s hands','a house','a horse'], a:0, w:'يدَي أخيه.', f:"his brother’s <u>hands</u>"}
      ]},
      { type:'choice', name:'صحّ أم خطأ', hint:'True / False', qs:[
        {p:'T/F: The father was rich.', o:['False','True'], a:0, w:'بل عمل ١٨ ساعة ليطعمهم.', f:'<u>False</u>'},
        {p:'T/F: Albert sacrificed for his brother.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'T/F: Albrecht became a great artist.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'T/F: Albert could make art after the mines.', o:['False','True'], a:0, w:'بل تلفت يداه.', f:'<u>False</u>'}
      ]},
      { type:'gap', name:'أكمل من النصّ', hint:'اختر الكلمة المناسبة', qs:[
        {p:'The family had ___ children.', o:['18','2','5'], a:0, w:'١٨.', f:'<u>18</u>'},
        {p:'Albert worked in the ___.', o:['mines','office','school'], a:0, w:'المناجم.', f:'the <u>mines</u>'},
        {p:'Albrecht became a great ___.', o:['artist','doctor','driver'], a:0, w:'فنّان.', f:'<u>artist</u>'},
        {p:'The famous drawing is called ___.', o:['“Hands”','“Feet”','“Eyes”'], a:0, w:'«Hands».', f:'“<u>Hands</u>”'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'The family had ___ children.', ask:'اختر', o:['18','8'], a:0, w:'١٨.', f:'<u>18</u>'},
        {p:'Father was a ___.', ask:'اختر', o:['goldsmith','doctor'], a:0, w:'صائغ.', f:'<u>goldsmith</u>'},
        {p:'Both sons wanted to study ___.', ask:'اختر', o:['art','law'], a:0, w:'الفنّ.', f:'<u>art</u>'},
        {p:'___ worked in the mines.', ask:'اختر', o:['Albert','Albrecht'], a:0, w:'ألبرت.', f:'<u>Albert</u>'},
        {p:'His hands were ___.', ask:'أكمل', o:['ruined','stronger'], a:0, w:'أُتلِفت.', f:'<u>ruined</u>'},
        {p:'___ became a great artist.', ask:'اختر', o:['Albrecht','Albert'], a:0, w:'ألبرشت.', f:'<u>Albrecht</u>'},
        {p:'He drew his brother’s ___.', ask:'اختر', o:['hands','feet'], a:0, w:'يديه.', f:'<u>hands</u>'},
        {p:'The drawing is called ___.', ask:'اختر', o:['“Hands”','“Eyes”'], a:0, w:'«Hands».', f:'“<u>Hands</u>”'},
        {p:'T/F: Albert sacrificed for his brother.', ask:'صحّ/خطأ', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'}
      ]}
    ]
  };
})();
