/* ============================================================
   Lesson: Subject/Object Pronouns & Possessives
   English · Super Goal 2 · Unit 8 (What’s Wrong?) · صفحة ٦٧
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U8_PRON'] = {
    id:'EN_SG2_U8_PRON',
    title:'Pronouns & Possessives',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'Subject / Object · Possessive adjective / pronoun',
      intro:'<b>ضمير الفاعل</b> يقعُ فاعلًا: <code>I, you, he, she, it, we, they</code>. و<b>ضمير المفعول</b> يقعُ مفعولًا (بعد الفعل أو حرف الجرّ): <code>me, you, him, her, it, us, them</code>. و<b>صفةُ الملكية</b> تسبقُ الاسم: <code>my, your, his, her, our, their</code>. و<b>ضمير الملكية</b> يحلُّ محلَّ الاسم: <code>mine, yours, his, hers, ours, theirs</code>.',
      table:[['Subject','I / he / she / they'],['Object','me / him / her / them'],['Possessive adj.','my / his / her / their + اسم'],['Possessive pron.','mine / his / hers / theirs']],
      trick:'الفاعلُ قبل الفعل، والمفعولُ بعده أو بعد حرف الجرّ (<code>Give it to me</code>). صفةُ الملكية <b>تسبق اسمًا</b> (<code>my book</code>)، وضميرُ الملكية <b>يقفُ وحده</b> (<code>This book is mine</code>).'
    },
    stages:[
      { type:'choice', name:'فاعل أم مفعول؟', hint:'الفاعل قبل الفعل · المفعول بعده', qs:[
        {p:'___ am sick. (فاعل)', o:['I','Me','My'], a:0, w:'فاعل ← <code>I</code>.', f:'<u>I</u> am sick.'},
        {p:'The doctor helped ___. (مفعول)', o:['me','I','my'], a:0, w:'مفعول ← <code>me</code>.', f:'helped <u>me</u>.'},
        {p:'Give the medicine to ___. (بعد حرف جرّ)', o:['him','he','his'], a:0, w:'بعد <code>to</code> ← ضمير مفعول <code>him</code>.', f:'to <u>him</u>.'},
        {p:'___ are friends. (فاعل)', o:['We','Us','Our'], a:0, w:'فاعل ← <code>We</code>.', f:'<u>We</u> are friends.'},
        {p:'She called ___. (مفعول)', o:['them','they','their'], a:0, w:'مفعول ← <code>them</code>.', f:'called <u>them</u>.'}
      ]},
      { type:'gap', name:'صفة الملكية', hint:'my/your/his/her… + اسم', qs:[
        {p:'This is ___ book. (خاصّتي)', o:['my','mine','me'], a:0, w:'صفةٌ قبل الاسم ← <code>my</code>.', f:'<u>my</u> book.'},
        {p:'What’s ___ name? (خاصّتك)', o:['your','yours','you'], a:0, w:'<code>your</code> + اسم.', f:'<u>your</u> name.'},
        {p:'He hurt ___ arm. (خاصّته)', o:['his','him','he'], a:0, w:'<code>his</code> + اسم.', f:'<u>his</u> arm.'},
        {p:'She lost ___ keys. (خاصّتها)', o:['her','hers','she'], a:0, w:'<code>her</code> + اسم.', f:'<u>her</u> keys.'},
        {p:'They cleaned ___ room. (خاصّتهم)', o:['their','theirs','them'], a:0, w:'<code>their</code> + اسم.', f:'<u>their</u> room.'}
      ]},
      { type:'choice', name:'ضمير الملكية', hint:'يقف وحده بلا اسم', qs:[
        {p:'This book is ___. (لي)', ask:'اختر', o:['mine','my','me'], a:0, w:'يقفُ وحده ← <code>mine</code>.', f:'is <u>mine</u>.'},
        {p:'That pen is ___. (لك)', ask:'اختر', o:['yours','your','you'], a:0, w:'<code>yours</code>.', f:'is <u>yours</u>.'},
        {p:'The bag is ___. (لها)', ask:'اختر', o:['hers','her','she'], a:0, w:'<code>hers</code>.', f:'is <u>hers</u>.'},
        {p:'The house is ___. (لهم)', ask:'اختر', o:['theirs','their','them'], a:0, w:'<code>theirs</code>.', f:'is <u>theirs</u>.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['Me','am','sick','.'], bad:0, fix:'I', w:'الفاعلُ ← <code>I</code>.', f:'<u>I</u> am sick.'},
        {words:['The','doctor','helped','I','.'], bad:3, fix:'me', w:'المفعولُ ← <code>me</code>.', f:'helped <u>me</u>.'},
        {words:['This','is','mine','book','.'], bad:2, fix:'my', w:'قبل الاسم نستعمل صفةً ← <code>my</code>.', f:'This is <u>my</u> book.'},
        {words:['This','book','is','my','.'], bad:3, fix:'mine', w:'وحده نستعمل ضميرًا ← <code>mine</code>.', f:'is <u>mine</u>.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['She','helped','me','.'], w:'مفعول ← me.', f:'She helped me.'},
        {sol:['This','is','my','book','.'], w:'صفة + اسم.', f:'This is my book.'},
        {sol:['This','book','is','mine','.'], w:'ضميرُ ملكية وحده.', f:'This book is mine.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'___ am sick.', ask:'اختر', o:['I','Me'], a:0, w:'فاعل.', f:'<u>I</u>.'},
        {p:'The doctor helped ___.', ask:'اختر', o:['me','I'], a:0, w:'مفعول.', f:'<u>me</u>.'},
        {p:'This is ___ book.', ask:'اختر', o:['my','mine'], a:0, w:'صفة + اسم.', f:'<u>my</u> book.'},
        {p:'This book is ___.', ask:'اختر', o:['mine','my'], a:0, w:'ضميرُ ملكية وحده.', f:'<u>mine</u>.'},
        {p:'He hurt ___ arm.', ask:'اختر', o:['his','him'], a:0, w:'صفة + اسم.', f:'<u>his</u> arm.'},
        {sol:['She','helped','me','.'], w:'مفعول ← me.', f:'She helped me.'},
        {p:'Give it to ___.', ask:'اختر', o:['him','he'], a:0, w:'بعد to ← مفعول.', f:'to <u>him</u>.'},
        {p:'The bag is ___. (لها)', ask:'اختر', o:['hers','her'], a:0, w:'ضميرُ ملكية.', f:'<u>hers</u>.'},
        {p:'They cleaned ___ room.', ask:'اختر', o:['their','theirs'], a:0, w:'صفة + اسم.', f:'<u>their</u> room.'}
      ]}
    ]
  };
})();
