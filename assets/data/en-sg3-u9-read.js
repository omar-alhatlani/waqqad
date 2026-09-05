/* ============================================================
   Lesson: Reading — Simple Ideas, Big Results
   English · Super Goal 3 · Unit 9 (All Kinds of People) · صفحة ١٠٠
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U9_READ'] = {
    id:'EN_SG3_U9_READ',
    title:'Reading — Simple Ideas, Big Results',
    lang:'en',
    rule:{
      tag:'Reading',
      title:'Simple Ideas, Big Results',
      intro:'اقرأْ عن شخصين حاربا الفقر بأفكارٍ بسيطة، ثمّ أجِب.',
      examples:[
        'Muhammad Yunus, often called “the world’s banker to the poor,” received the Nobel Peace Prize in 2006 for his work against poverty.',
        'Yunus founded the Grameen Bank in 1976 with just $27 of his own money. He lent poor people small amounts to start their own small businesses.',
        'Today the Grameen Bank model has been copied in more than 100 countries, with millions of borrowers and a very high repayment rate.',
        'Mohammed Abdul Latif Jameel received awards for his humanitarian work. In 2012 he was named “Saudi Volunteer of the Year” for creating jobs in Saudi Arabia and the Middle East.',
        'Jameel believes unemployment is the main cause of poverty. His program Bab Rizq Jameel created hundreds of thousands of jobs.'
      ],
      trick:'فكرتان بسيطتان أحدثتا أثرًا كبيرًا: يونس (قروضٌ صغيرة للفقراء — بنك جرامين)، والجميل (خلقُ فرص العمل — باب رزق جميل).'
    },
    stages:[
      { type:'choice', name:'محمد يونس', hint:'بنك جرامين', qs:[
        {p:'What prize did Muhammad Yunus receive in 2006?', o:['the Nobel Peace Prize','an Olympic medal','a car'], a:0, w:'جائزة نوبل للسلام.', f:'the <u>Nobel Peace Prize</u>'},
        {p:'How much money did Yunus start the bank with?', o:['$27','$1 million','$0'], a:0, w:'٢٧ دولارًا.', f:'<u>$27</u>'},
        {p:'What did the bank do for poor people?', o:['lent them small amounts','gave them cars','sold them food'], a:0, w:'أقرضهم مبالغَ صغيرة.', f:'<u>lent them small amounts</u>'},
        {p:'The Grameen model has been copied in more than:', o:['100 countries','2 countries','10 cities'], a:0, w:'أكثرَ من ١٠٠ دولة.', f:'<u>100 countries</u>'}
      ]},
      { type:'choice', name:'عبد اللطيف جميل', hint:'خلق الوظائف', qs:[
        {p:'In 2012, Jameel was named:', o:['“Saudi Volunteer of the Year”','a football star','a pilot'], a:0, w:'متطوّع السعودية للعام.', f:'“<u>Saudi Volunteer of the Year</u>”'},
        {p:'Jameel believes the main cause of poverty is:', o:['unemployment','weather','sport'], a:0, w:'البطالة.', f:'<u>unemployment</u>'},
        {p:'His program Bab Rizq Jameel focuses on creating:', o:['jobs','malls','cars'], a:0, w:'فرص العمل.', f:'<u>jobs</u>'},
        {p:'Both men used simple ideas to fight:', o:['poverty','traffic','pollution'], a:0, w:'الفقر.', f:'<u>poverty</u>'}
      ]},
      { type:'choice', name:'صحّ أم خطأ', hint:'True / False', qs:[
        {p:'T/F: Yunus started the bank with a lot of money.', o:['False','True'], a:0, w:'بل بـ٢٧ دولارًا فقط.', f:'<u>False</u>'},
        {p:'T/F: The Grameen Bank helps poor people.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'T/F: Jameel works to create jobs.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'T/F: Both men ignored the problem of poverty.', o:['False','True'], a:0, w:'بل حاربوه.', f:'<u>False</u>'}
      ]},
      { type:'gap', name:'أكمل من النصّ', hint:'اختر الكلمة المناسبة', qs:[
        {p:'Yunus received the ___ Peace Prize.', o:['Nobel','Olympic','school'], a:0, w:'نوبل.', f:'<u>Nobel</u>'},
        {p:'He founded the Grameen ___ in 1976.', o:['Bank','School','Mall'], a:0, w:'بنك.', f:'<u>Bank</u>'},
        {p:'Jameel fights poverty by creating ___.', o:['jobs','cars','malls'], a:0, w:'وظائف.', f:'<u>jobs</u>'},
        {p:'The main cause of poverty is ___.', o:['unemployment','weather','sport'], a:0, w:'البطالة.', f:'<u>unemployment</u>'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'Yunus received the ___ Prize.', ask:'أكمل', o:['Nobel Peace','Olympic'], a:0, w:'نوبل للسلام.', f:'<u>Nobel Peace</u>'},
        {p:'He started the bank with ___.', ask:'اختر', o:['$27','$1 million'], a:0, w:'٢٧ دولارًا.', f:'<u>$27</u>'},
        {p:'The bank ___ money to the poor.', ask:'أكمل', o:['lent','sold'], a:0, w:'أقرض.', f:'<u>lent</u>'},
        {p:'Copied in more than ___ countries.', ask:'اختر', o:['100','2'], a:0, w:'١٠٠.', f:'<u>100</u>'},
        {p:'Jameel = 2012 Saudi ___ of the Year.', ask:'أكمل', o:['Volunteer','Driver'], a:0, w:'المتطوّع.', f:'<u>Volunteer</u>'},
        {p:'Main cause of poverty =', ask:'اختر', o:['unemployment','weather'], a:0, w:'البطالة.', f:'<u>unemployment</u>'},
        {p:'Bab Rizq Jameel creates ___.', ask:'أكمل', o:['jobs','cars'], a:0, w:'وظائف.', f:'<u>jobs</u>'},
        {p:'Both fought ___.', ask:'اختر', o:['poverty','traffic'], a:0, w:'الفقر.', f:'<u>poverty</u>'},
        {p:'T/F: The bank helps poor people.', ask:'صحّ/خطأ', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'}
      ]}
    ]
  };
})();
