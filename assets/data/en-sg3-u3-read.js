/* ============================================================
   Lesson: Reading — Study Arabic in Saudi Arabia
   English · Super Goal 3 · Unit 3 (When Are You Traveling?) · صفحة ٢٨
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U3_READ'] = {
    id:'EN_SG3_U3_READ',
    title:'Reading — Study Arabic in Saudi Arabia',
    lang:'en',
    rule:{
      tag:'Reading',
      title:'Study Arabic in Saudi Arabia',
      intro:'اقرأِ النصَّ عن دراسة اللغة العربية في السعودية، ثمّ أجِب عن الأسئلة.',
      examples:[
        'Saudi Arabia is the perfect destination if you want to learn the Arabic language and Islamic culture. It is unique, with many traditions, historic places, and contrasts in scenery.',
        'Why learn Arabic? Arabic is the language of the Holy Qur’an. It is spoken by more than 400 million people around the world, mainly in the Middle East and North Africa.',
        'Like English, Arabic has many different dialects, but speakers in Saudi Arabia and neighboring countries understand each other.',
        'At the Arabic Language School you study the language and Islamic culture: you recite the Holy Qur’an, practice conversation, listen, and learn to read and write Arabic.',
        'Accommodations: you live with a family, share their food and experiences, and learn about everyday life in Saudi Arabia.'
      ],
      trick:'الفكرة: السعودية وجهةٌ مثالية لتعلّم العربية (لغة القرآن) وثقافة الإسلام، مع السكن لدى أسرةٍ لعيش الحياة اليومية.'
    },
    stages:[
      { type:'choice', name:'الفهم العام', hint:'لماذا العربية والسعودية', qs:[
        {p:'Saudi Arabia is a perfect place to learn Arabic and:', o:['Islamic culture','French','cooking only'], a:0, w:'الثقافة الإسلامية.', f:'<u>Islamic culture</u>'},
        {p:'Arabic is the language of:', o:['the Holy Qur’an','the computer','the airport'], a:0, w:'لغة القرآن الكريم.', f:'the <u>Holy Qur’an</u>'},
        {p:'Arabic is spoken by more than ___ people.', o:['400 million','4 thousand','40'], a:0, w:'أكثر من ٤٠٠ مليون.', f:'<u>400 million</u>'},
        {p:'Arabic is spoken mainly in the Middle East and:', o:['North Africa','South America','Antarctica'], a:0, w:'شمال إفريقيا.', f:'<u>North Africa</u>'}
      ]},
      { type:'choice', name:'المدرسة والسكن', hint:'الدراسة والإقامة', qs:[
        {p:'At the school, students recite the Holy Qur’an and practice:', o:['conversation','driving','cooking'], a:0, w:'المحادثة.', f:'<u>conversation</u>'},
        {p:'During their stay, students live with:', o:['a family','a hotel manager','no one'], a:0, w:'أسرةٍ مضيفة.', f:'a <u>family</u>'},
        {p:'Living with a family helps students learn about:', o:['everyday life','only grammar','only history'], a:0, w:'الحياة اليومية.', f:'<u>everyday life</u>'},
        {p:'“dialects” means:', o:['local varieties of a language','spelling errors','new words only'], a:0, w:'لهجاتٌ محلّية.', f:'<u>local varieties of a language</u>'}
      ]},
      { type:'choice', name:'صحّ أم خطأ', hint:'True / False', qs:[
        {p:'T/F: Arabic has only one dialect.', o:['False','True'], a:0, w:'له لهجاتٌ كثيرة.', f:'<u>False</u>'},
        {p:'T/F: Students live with a family during their stay.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'T/F: Arabic is spoken only in Saudi Arabia.', o:['False','True'], a:0, w:'بل في مناطق كثيرة.', f:'<u>False</u>'},
        {p:'T/F: Arabic is the language of the Holy Qur’an.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'}
      ]},
      { type:'gap', name:'أكمل من النصّ', hint:'اختر الكلمة المناسبة', qs:[
        {p:'Arabic is the language of the Holy ___.', o:['Qur’an','book','song'], a:0, w:'القرآن.', f:'the Holy <u>Qur’an</u>'},
        {p:'Students learn to read and ___ Arabic.', o:['write','fly','drive'], a:0, w:'يكتبون.', f:'read and <u>write</u>'},
        {p:'Saudi Arabia has many historic ___.', o:['places','planes','prices'], a:0, w:'أماكن تاريخية.', f:'historic <u>places</u>'},
        {p:'You live with a ___ to learn everyday life.', o:['family','company','team'], a:0, w:'أسرة.', f:'a <u>family</u>'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'Learn Arabic and ___ culture.', ask:'أكمل', o:['Islamic','French'], a:0, w:'الإسلامية.', f:'<u>Islamic</u>'},
        {p:'Arabic = the language of the ___.', ask:'أكمل', o:['Qur’an','airport'], a:0, w:'القرآن.', f:'<u>Qur’an</u>'},
        {p:'Spoken by more than ___ people.', ask:'اختر', o:['400 million','40'], a:0, w:'٤٠٠ مليون.', f:'<u>400 million</u>'},
        {p:'Mainly in the Middle East and ___.', ask:'أكمل', o:['North Africa','Europe'], a:0, w:'شمال إفريقيا.', f:'<u>North Africa</u>'},
        {p:'Students ___ the Holy Qur’an.', ask:'اختر', o:['recite','sell'], a:0, w:'يتلون.', f:'<u>recite</u>'},
        {p:'They live with a ___.', ask:'اختر', o:['family','stranger'], a:0, w:'أسرة.', f:'<u>family</u>'},
        {p:'“dialects” =', ask:'المعنى', o:['local varieties','spelling'], a:0, w:'لهجات.', f:'<u>local varieties</u>'},
        {p:'T/F: Arabic has many dialects.', ask:'صحّ/خطأ', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'Living with a family teaches ___ life.', ask:'أكمل', o:['everyday','night'], a:0, w:'الحياة اليومية.', f:'<u>everyday</u>'}
      ]}
    ]
  };
})();
