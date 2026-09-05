/* ============================================================
   Lesson: Reading — Complaints
   English · Super Goal 3 · Unit 10 (Who Used My Toothpaste?) · صفحة ١١٦
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U10_READ'] = {
    id:'EN_SG3_U10_READ',
    title:'Reading — Common Complaints',
    lang:'en',
    rule:{
      tag:'Reading',
      title:'Common Complaints in Families',
      intro:'اقرأْ عن الشكاوى الشائعة في البيوت، ثمّ أجِب.',
      examples:[
        'Many families list the same complaints. Here are some common ones:',
        'Leaving dirty clothes and shoes all around the house, and using someone else’s hairbrush.',
        'Splashing toothpaste all over the bathroom mirror, and spending a lot of time in the bathroom.',
        'Borrowing things and not asking first, and not cleaning your room.',
        'Playing the TV or video games very loudly. The solution is for family members to talk, respect each other, and reach an agreement.'
      ],
      trick:'شكاوى البيوت المتكرّرة: الفوضى، استعمالُ أغراض الغير، الاستعارةُ دون إذن، عدمُ التنظيف، والضجيج — والحلُّ الاحترامُ والاتّفاق.'
    },
    stages:[
      { type:'choice', name:'الفهم العام', hint:'الشكاوى', qs:[
        {p:'What do many families list?', o:['the same complaints','their money','their trips'], a:0, w:'الشكاوى نفسها.', f:'the same <u>complaints</u>'},
        {p:'One complaint is leaving dirty clothes ___.', o:['around the house','in the car','at school'], a:0, w:'في أنحاء البيت.', f:'<u>around the house</u>'},
        {p:'Another is splashing ___ on the mirror.', o:['toothpaste','water only','paint'], a:0, w:'معجون الأسنان.', f:'<u>toothpaste</u>'},
        {p:'Borrowing things and not ___ first is a complaint.', o:['asking','buying','cleaning'], a:0, w:'دون استئذان.', f:'not <u>asking</u>'}
      ]},
      { type:'choice', name:'تفاصيل', hint:'المزيد من الشكاوى', qs:[
        {p:'Using someone else’s ___ is annoying.', o:['hairbrush','book only','shoes only'], a:0, w:'فرشاة الشعر.', f:'<u>hairbrush</u>'},
        {p:'Playing the TV or video games very ___ bothers others.', o:['loudly','quietly','slowly'], a:0, w:'بصوتٍ عالٍ.', f:'<u>loudly</u>'},
        {p:'Spending a lot of time in the ___ is a complaint.', o:['bathroom','garden','car'], a:0, w:'الحمّام.', f:'the <u>bathroom</u>'},
        {p:'A common complaint is not ___ your room.', o:['cleaning','painting','building'], a:0, w:'تنظيف.', f:'not <u>cleaning</u>'}
      ]},
      { type:'choice', name:'صحّ أم خطأ', hint:'True / False', qs:[
        {p:'T/F: Many families have similar complaints.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'T/F: Borrowing without asking is a complaint.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'T/F: Playing games quietly is a complaint.', o:['False','True'], a:0, w:'بل بصوتٍ عالٍ.', f:'<u>False</u>'},
        {p:'T/F: Not cleaning your room is a common complaint.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'}
      ]},
      { type:'gap', name:'أكمل من النصّ', hint:'اختر الكلمة المناسبة', qs:[
        {p:'Leaving dirty clothes ___ the house.', o:['around','under only','above'], a:0, w:'في أنحاء.', f:'<u>around</u>'},
        {p:'Splashing ___ on the mirror.', o:['toothpaste','tea','oil'], a:0, w:'معجون.', f:'<u>toothpaste</u>'},
        {p:'___ things and not asking first.', o:['Borrowing','Selling','Cleaning'], a:0, w:'الاستعارة.', f:'<u>Borrowing</u>'},
        {p:'Playing games very ___.', o:['loudly','softly','slowly'], a:0, w:'بصوتٍ عالٍ.', f:'<u>loudly</u>'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'Families list the same ___.', ask:'أكمل', o:['complaints','trips'], a:0, w:'الشكاوى.', f:'<u>complaints</u>'},
        {p:'dirty clothes ___ the house', ask:'أكمل', o:['around','under'], a:0, w:'في أنحاء.', f:'<u>around</u>'},
        {p:'splashing ___ on the mirror', ask:'اختر', o:['toothpaste','tea'], a:0, w:'معجون.', f:'<u>toothpaste</u>'},
        {p:'using someone’s ___', ask:'اختر', o:['hairbrush','car'], a:0, w:'فرشاة.', f:'<u>hairbrush</u>'},
        {p:'borrowing without ___', ask:'أكمل', o:['asking','buying'], a:0, w:'استئذان.', f:'<u>asking</u>'},
        {p:'not ___ your room', ask:'أكمل', o:['cleaning','painting'], a:0, w:'تنظيف.', f:'<u>cleaning</u>'},
        {p:'playing games very ___', ask:'اختر', o:['loudly','quietly'], a:0, w:'عالٍ.', f:'<u>loudly</u>'},
        {p:'T/F: Families have similar complaints.', ask:'صحّ/خطأ', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'spending time in the ___', ask:'اختر', o:['bathroom','garden'], a:0, w:'الحمّام.', f:'<u>bathroom</u>'}
      ]}
    ]
  };
})();
