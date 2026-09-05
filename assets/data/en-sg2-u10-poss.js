/* ============================================================
   Lesson: Possessive Pronouns + Question Word: Whose
   English · Super Goal 2 · Unit 10 (It's a Bargain!) · صفحة ٨٨
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U10_POSS'] = {
    id:'EN_SG2_U10_POSS',
    title:'Possessive Pronouns & Whose',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'mine, yours, his, hers, ours, theirs',
      intro:'<b>صفةُ الملكية</b> تسبق الاسم (<code>my book</code>)، أمّا <b>ضميرُ الملكية</b> فيحلّ محلّ الاسم: <code>mine, yours, his, hers, ours, theirs</code> (<code>This is my book → This is mine</code>). ونسأل عن المالك بـ <code>Whose…?</code>: <code>Whose backpack is this? — It’s mine</code>.',
      table:[['my → mine','This bag is mine.'],['your → yours','Is this yours?'],['her → hers','They’re hers.'],['Whose…?','Whose glasses are these?']],
      trick:'صفةُ الملكية + اسم (<code>my bag</code>)، وضميرُ الملكية بلا اسم (<code>It’s mine</code>). ولا نستعمل <code>the</code> مع ضمائر الملكية.'
    },
    stages:[
      { type:'choice', name:'صفة أم ضمير', hint:'قبل الاسم أم بدله؟', qs:[
        {p:'This is ___ book. (قبل الاسم)', o:['my','mine','me','I'], a:0, w:'صفةٌ قبل الاسم ← <code>my</code>.', f:'<u>my</u> book'},
        {p:'This book is ___. (بدل الاسم)', o:['mine','my','me','I'], a:0, w:'ضميرٌ ← <code>mine</code>.', f:'is <u>mine</u>'},
        {p:'Is this bag ___? (بدل الاسم)', o:['yours','your','you','yours'], a:0, w:'ضميرٌ ← <code>yours</code>.', f:'is <u>yours</u>?'},
        {p:'These are ___ glasses. (قبل الاسم)', o:['her','hers','she','him'], a:0, w:'صفةٌ ← <code>her</code>.', f:'<u>her</u> glasses'}
      ]},
      { type:'choice', name:'ضمائر الملكية', hint:'mine/yours/his/hers/ours/theirs', qs:[
        {p:'The glasses are ___. (they)', o:['theirs','their','them','theirs’'], a:0, w:'<code>their → theirs</code>.', f:'are <u>theirs</u>'},
        {p:"It's not my bag. It's ___. (he)", o:['his','him','he','his’'], a:0, w:'<code>his</code>.', f:"It's <u>his</u>."},
        {p:'This house is ___. (we)', o:['ours','our','us','ours’'], a:0, w:'<code>our → ours</code>.', f:'is <u>ours</u>'},
        {p:'Those earrings are ___. (she)', o:['hers','her','she','hers’'], a:0, w:'<code>her → hers</code>.', f:'are <u>hers</u>'}
      ]},
      { type:'choice', name:'Whose…?', hint:'السؤال عن المالك', qs:[
        {p:'___ backpack is this? — It’s mine.', o:['Whose',"Who's",'Which','What'], a:0, w:'المالك ← <code>Whose</code>.', f:'<u>Whose</u> backpack…?'},
        {p:'Whose glasses ___ these?', o:['are','is','do','does'], a:0, w:'الجمع ← <code>are</code>.', f:'Whose glasses <u>are</u> these?'},
        {p:'Whose bag is on the floor? — It ___ Ali’s.', o:["'s (is)",'are','have','do'], a:0, w:'مفرد ← <code>is</code>.', f:"It <u>'s</u> Ali's."},
        {p:'“Whose” asks about the:', o:['owner','place','time'], a:0, w:'المالك.', f:'the <u>owner</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['This','book','is','my','.'], bad:3, fix:'mine', w:'بلا اسم ← <code>mine</code>.', f:'This book is <u>mine</u>.'},
        {words:['These','are','the','mine','.'], bad:2, fix:'تُحذف the', w:'لا <code>the</code> مع ضمائر الملكية.', f:'These are <u>mine</u>.'},
        {words:['Who’s','bag','is','this','?'], bad:0, fix:'Whose', w:'المالك ← <code>Whose</code>.', f:'<u>Whose</u> bag is this?'},
        {words:['It’s','not','mine','.','It’s','him','.'], bad:5, fix:'his', w:'ضميرٌ ← <code>his</code>.', f:"It's <u>his</u>."}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['This','bag','is','mine','.'], w:'ضميرٌ ← <code>mine</code>.', f:'This bag is mine.'},
        {sol:['Whose','backpack','is','this','?'], w:'<code>Whose</code> للمالك.', f:'Whose backpack is this?'},
        {sol:['The','glasses','are','hers','.'], w:'<code>her → hers</code>.', f:'The glasses are hers.'},
        {sol:['Is','this','yours','?'], w:'ضميرٌ ← <code>yours</code>.', f:'Is this yours?'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'This is ___ book.', ask:'اختر', o:['my','mine'], a:0, w:'قبل الاسم.', f:'<u>my</u>'},
        {p:'This book is ___.', ask:'اختر', o:['mine','my'], a:0, w:'بدل الاسم.', f:'<u>mine</u>'},
        {p:'Is this bag ___?', ask:'اختر', o:['yours','your'], a:0, w:'ضمير.', f:'<u>yours</u>'},
        {p:'The glasses are ___. (they)', ask:'اختر', o:['theirs','their'], a:0, w:'ضمير.', f:'<u>theirs</u>'},
        {p:"It's ___. (he)", ask:'اختر', o:['his','him'], a:0, w:'ضمير.', f:'<u>his</u>'},
        {p:'___ backpack is this?', ask:'اختر', o:['Whose',"Who's"], a:0, w:'المالك.', f:'<u>Whose</u>'},
        {sol:['This','bag','is','mine','.'], w:'ضمير.', f:'This bag is mine.'},
        {p:'Whose glasses ___ these?', ask:'اختر', o:['are','is'], a:0, w:'جمع.', f:'<u>are</u>'},
        {p:'“Whose” asks about the ___.', ask:'اختر', o:['owner','place'], a:0, w:'المالك.', f:'<u>owner</u>'}
      ]}
    ]
  };
})();
