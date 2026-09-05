/* ============================================================
   Lesson: Reading — Eid Celebrations
   English · Super Goal 1 · Unit 14 (Let's Celebrate) · صفحة ١٣١
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U14_READ'] = {
    id:'EN_SG1_U14_READ',
    title:'Reading — Eid Celebrations',
    lang:'en',
    rule:{
      tag:'Reading',
      title:'Eid Celebrations',
      intro:'اقرأْ عن احتفالات العيد، ثمّ أجِب عن الأسئلة.',
      examples:[
        'Eid Al-Fitr is a Muslim holiday that marks the end of Ramadan. It is the most widely celebrated holiday in the Islamic calendar.',
        'The day begins with a light snack, usually dates, and the Eid prayer. People often decorate their homes and cook festive meals for family and friends.',
        'Older members of the family offer money to children. Everyone does their best to be kind and generous, especially to those in need.',
        'At the end of Ramadan, Muslims donate food (such as dates and rice) to the poor. This is called Zakat Al-Fitr.',
        'To celebrate Eid Al-Adha, Muslims sacrifice an animal — a lamb, a goat, a camel, or a cow — and share the meal with friends and donate some to the poor.'
      ],
      trick:'عيدان: الفطر (نهاية رمضان — تمرٌ وصلاة، زكاة الفطر) والأضحى (ذبح الأضحية والمشاركة مع المحتاجين). القيمة: الكرم واللطف.'
    },
    stages:[
      { type:'choice', name:'الفهم العام', hint:'العيدان', qs:[
        {p:'Eid Al-Fitr marks the end of:', o:['Ramadan','the year','summer'], a:0, w:'نهاية رمضان.', f:'end of <u>Ramadan</u>'},
        {p:'The day begins with a light snack, usually:', o:['dates','rice only','meat'], a:0, w:'التمر.', f:'<u>dates</u>'},
        {p:'To celebrate Eid Al-Adha, Muslims:', o:['sacrifice an animal','travel abroad','buy cars'], a:0, w:'يذبحون أضحية.', f:'<u>sacrifice an animal</u>'},
        {p:'Donating food to the poor at the end of Ramadan is called:', o:['Zakat Al-Fitr','a gift','a party'], a:0, w:'زكاة الفطر.', f:'<u>Zakat Al-Fitr</u>'}
      ]},
      { type:'choice', name:'تفاصيل', hint:'ماذا يفعل الناس؟', qs:[
        {p:'People decorate their homes and cook ___ meals.', o:['festive','fast','frozen'], a:0, w:'وجبات احتفالية.', f:'<u>festive</u> meals'},
        {p:'Who offers money to children?', o:['older family members','children','strangers'], a:0, w:'كبار العائلة.', f:'<u>older family members</u>'},
        {p:'Everyone tries to be kind and ___.', o:['generous','lazy','angry'], a:0, w:'كريم.', f:'<u>generous</u>'},
        {p:'For Eid Al-Adha, they sacrifice a lamb, a goat, a camel, or a ___.', o:['cow','fish','bird'], a:0, w:'بقرة.', f:'a <u>cow</u>'}
      ]},
      { type:'choice', name:'صحّ أم خطأ', hint:'True / False', qs:[
        {p:'T/F: Eid Al-Fitr is at the end of Ramadan.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'T/F: Children offer money to adults.', o:['False','True'], a:0, w:'بل الكبار يعطون الأطفال.', f:'<u>False</u>'},
        {p:'T/F: People show generosity to those in need.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'T/F: In Eid Al-Adha, families give some meat to the poor.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'}
      ]},
      { type:'gap', name:'أكمل من النصّ', hint:'اختر الكلمة المناسبة', qs:[
        {p:'Eid Al-Fitr marks the end of ___.', o:['Ramadan','the week','school'], a:0, w:'رمضان.', f:'<u>Ramadan</u>'},
        {p:'People often ___ their homes.', o:['decorate','sell','clean out'], a:0, w:'يزيّنون.', f:'<u>decorate</u>'},
        {p:'Older members ___ money to children.', o:['offer','borrow','take'], a:0, w:'يقدّمون.', f:'<u>offer</u>'},
        {p:'Muslims ___ food to the poor.', o:['donate','sell','waste'], a:0, w:'يتصدّقون.', f:'<u>donate</u>'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'Eid Al-Fitr = end of ___.', ask:'أكمل', o:['Ramadan','summer'], a:0, w:'رمضان.', f:'<u>Ramadan</u>'},
        {p:'The day begins with ___.', ask:'اختر', o:['dates','meat'], a:0, w:'التمر.', f:'<u>dates</u>'},
        {p:'Eid Al-Adha: they ___ an animal.', ask:'اختر', o:['sacrifice','sell'], a:0, w:'يذبحون.', f:'<u>sacrifice</u>'},
        {p:'End-of-Ramadan food donation =', ask:'اختر', o:['Zakat Al-Fitr','a gift'], a:0, w:'زكاة الفطر.', f:'<u>Zakat Al-Fitr</u>'},
        {p:'People cook ___ meals.', ask:'أكمل', o:['festive','frozen'], a:0, w:'احتفالية.', f:'<u>festive</u>'},
        {p:'Everyone is kind and ___.', ask:'أكمل', o:['generous','angry'], a:0, w:'كريم.', f:'<u>generous</u>'},
        {p:'People ___ their homes.', ask:'أكمل', o:['decorate','sell'], a:0, w:'يزيّنون.', f:'<u>decorate</u>'},
        {p:'T/F: Adults give money to children.', ask:'صحّ/خطأ', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'Muslims ___ food to the poor.', ask:'أكمل', o:['donate','waste'], a:0, w:'يتصدّقون.', f:'<u>donate</u>'}
      ]}
    ]
  };
})();
