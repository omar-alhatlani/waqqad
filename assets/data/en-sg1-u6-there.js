/* ============================================================
   Lesson: Grammar — There is / There are
   English · Super Goal 1 · Unit 6 (Is There a View?) · صفحة ٥٠
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1).
   lang:'en' → المحتوى إنجليزيّ LTR، والشرح بالعربية.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U6_THERE'] = {
    id:'EN_SG1_U6_THERE',
    title:'Grammar — There is / There are',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'There is / There are',
      intro:"نستعمل <code>There is</code> (There's) للمفرد و<code>There are</code> للجمع للإخبار بوجود شيء. النفي: <code>There isn't / There aren't</code>. والسؤال: <code>Is there...? / Are there...?</code>",
      table:[['مفرد +','There is a table.'],['مفرد −',"There isn't a bathroom."],['جمع +','There are trees.'],['سؤال','Is there...? / Are there...?']],
      examples:["There's a table in the kitchen.",'There are four people at the table.',"Is there a TV? — No, there isn't.",'Are there flowers? — Yes, there are.'],
      trick:'المفرد ← <code>There is</code>، والجمع ← <code>There are</code>. والسؤال بتقديمها: <code>Is there? / Are there?</code>'
    },
    stages:[
      { type:'choice', name:'is أم are؟', hint:'مفرد ← There is · جمع ← There are', qs:[
        {p:'___ a table in the kitchen.', ask:'اختر الصحيح', o:['There is','There are'], a:0, w:'مفرد ← <code>There is</code>.', f:'There is a table.'},
        {p:'___ four people at the table.', ask:'اختر الصحيح', o:['There are','There is'], a:0, w:'جمع ← <code>There are</code>.', f:'There are four people.'},
        {p:'___ trees behind the house.',  ask:'اختر الصحيح', o:['There are','There is'], a:0, w:'جمع ← <code>There are</code>.', f:'There are trees.'},
        {p:'___ a garden in front.',        ask:'اختر الصحيح', o:['There is','There are'], a:0, w:'مفرد ← <code>There is</code>.', f:'There is a garden.'},
        {p:'___ two bathrooms upstairs.',   ask:'اختر الصحيح', o:['There are','There is'], a:0, w:'جمع ← <code>There are</code>.', f:'There are two bathrooms.'},
        {p:'___ a sofa in the living room.', ask:'اختر الصحيح', o:['There is','There are'], a:0, w:'مفرد ← <code>There is</code>.', f:'There is a sofa.'}
      ]},
      { type:'choice', name:'السؤال', hint:'Is there أم Are there؟', qs:[
        {p:'___ a TV in the bedroom?',      ask:'اختر السؤال', o:['Is there','Are there'], a:0, w:'مفرد ← <code>Is there</code>.', f:'Is there a TV?'},
        {p:'___ curtains in the kitchen?',   ask:'اختر السؤال', o:['Are there','Is there'], a:0, w:'جمع ← <code>Are there</code>.', f:'Are there curtains?'},
        {p:'___ a garden in front?',         ask:'اختر السؤال', o:['Is there','Are there'], a:0, w:'مفرد ← <code>Is there</code>.', f:'Is there a garden?'},
        {p:'___ flowers on the table?',       ask:'اختر السؤال', o:['Are there','Is there'], a:0, w:'جمع ← <code>Are there</code>.', f:'Are there flowers?'},
        {p:'___ a bathroom downstairs?',      ask:'اختر السؤال', o:['Is there','Are there'], a:0, w:'مفرد ← <code>Is there</code>.', f:'Is there a bathroom?'},
        {p:'___ trees in the yard?',          ask:'اختر السؤال', o:['Are there','Is there'], a:0, w:'جمع ← <code>Are there</code>.', f:'Are there trees?'}
      ]},
      { type:'gap', name:'النفي والجواب', hint:"isn't / aren't / is / are", qs:[
        {p:'There ___ a bathroom downstairs.', ask:'أكمل (نفي مفرد)', o:["isn't","aren't","is","are"], a:0, w:'نفي مفرد ← <code>isn\'t</code>.', f:"There <u>isn't</u> a bathroom."},
        {p:'There ___ trees in front.',         ask:'أكمل (نفي جمع)', o:["aren't","isn't","is","are"], a:0, w:'نفي جمع ← <code>aren\'t</code>.', f:"There <u>aren't</u> trees."},
        {p:'Is there a TV?  — No, there ___.',   ask:'أكمل الجواب', o:["isn't","aren't","is","are"], a:0, w:'مفرد ← <code>isn\'t</code>.', f:"No, there <u>isn't</u>."},
        {p:'Are there curtains?  — Yes, there ___.', ask:'أكمل الجواب', o:['are','is',"isn't","aren't"], a:0, w:'جمع ← <code>are</code>.', f:'Yes, there <u>are</u>.'},
        {p:'Is there a garden?  — Yes, there ___.', ask:'أكمل الجواب', o:['is','are',"isn't","aren't"], a:0, w:'مفرد ← <code>is</code>.', f:'Yes, there <u>is</u>.'},
        {p:'Are there flowers?  — No, there ___.',  ask:'أكمل الجواب', o:["aren't","isn't","is","are"], a:0, w:'جمع ← <code>aren\'t</code>.', f:"No, there <u>aren't</u>."}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['There','is','a','table','.'],       w:'مفرد.', f:'There is a table.'},
        {sol:['There','are','trees','.'],           w:'جمع.', f:'There are trees.'},
        {sol:['Is','there','a','TV','?'],           w:'سؤالٌ مفرد.', f:'Is there a TV?'},
        {sol:['Are','there','flowers','?'],         w:'سؤالٌ جمع.', f:'Are there flowers?'},
        {sol:['There',"isn't",'a','yard','.'],       w:'نفي مفرد.', f:"There isn't a yard."}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'___ four people at the table.', ask:'اختر الصحيح', o:['There are','There is'], a:0, w:'جمع ← <code>There are</code>.', f:'There are four people.'},
        {p:'___ a TV in the bedroom?', ask:'اختر السؤال', o:['Is there','Are there'], a:0, w:'مفرد ← <code>Is there</code>.', f:'Is there a TV?'},
        {p:'There ___ trees in front.', ask:'أكمل (نفي جمع)', o:["aren't","isn't","is","are"], a:0, w:'نفي جمع ← <code>aren\'t</code>.', f:"There <u>aren't</u> trees."},
        {p:'___ curtains in the kitchen?', ask:'اختر السؤال', o:['Are there','Is there'], a:0, w:'جمع ← <code>Are there</code>.', f:'Are there curtains?'},
        {p:'___ a sofa in the living room.', ask:'اختر الصحيح', o:['There is','There are'], a:0, w:'مفرد ← <code>There is</code>.', f:'There is a sofa.'},
        {sol:['There','are','trees','.'], w:'جمع.', f:'There are trees.'},
        {p:'Are there curtains?  — Yes, there ___.', ask:'أكمل الجواب', o:['are','is',"isn't","aren't"], a:0, w:'جمع ← <code>are</code>.', f:'Yes, there <u>are</u>.'},
        {p:'Is there a bathroom downstairs?', ask:'اختر السؤال', o:['Is there','Are there'], a:0, w:'مفرد ← <code>Is there</code>.', f:'Is there a bathroom?'},
        {sol:['Is','there','a','TV','?'], w:'سؤالٌ مفرد.', f:'Is there a TV?'}
      ]}
    ]
  };
})();
