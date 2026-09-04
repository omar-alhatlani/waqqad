/* ============================================================
   Lesson: Reading — The King of Saudi Arabia
   English · Super Goal 3 · Unit 2 (Life Stories) · صفحة ١٨
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U2_READ'] = {
    id:'EN_SG3_U2_READ',
    title:'Reading — The King of Saudi Arabia',
    lang:'en',
    rule:{
      tag:'Reading',
      title:'The King of Saudi Arabia',
      intro:'اقرأِ النصَّ عن خادم الحرمين الشريفين الملك سلمان بن عبدالعزيز آل سعود، ثمّ أجِب عن الأسئلة.',
      examples:[
        'The Custodian of the Two Holy Mosques King Salman bin Abdulaziz Al Saud was born in Riyadh on December 31, 1935.',
        'He was educated at the Princes’ School in Riyadh, where he studied sciences, religion, and the Holy Qur’an.',
        'He was appointed Emir of Riyadh in 1954 when he was just 19, and later served as Governor of Riyadh for many years, helping it grow into a major metropolis.',
        'He became Crown Prince in 2012 and King and Custodian of the Two Holy Mosques on January 23, 2015.',
        'He founded the King Salman Humanitarian Aid and Relief Centre. Al-Ahsa Oasis and the Hima Cultural Area became UNESCO World Heritage Sites during his reign.'
      ],
      trick:'ركّزْ على التواريخ والمناصب: وُلِد ١٩٣٥ ← أمير الرياض ١٩٥٤ ← وليّ العهد ٢٠١٢ ← ملكًا ٢٠١٥.'
    },
    stages:[
      { type:'choice', name:'الفهم العام', hint:'الحقائق الأساسية', qs:[
        {p:'Where was King Salman born?', o:['Riyadh','Jeddah','Makkah'], a:0, w:'وُلِد في الرياض.', f:'in <u>Riyadh</u>'},
        {p:'Where was he educated?', o:['the Princes’ School','a school abroad','at home'], a:0, w:'مدرسة الأمراء بالرياض.', f:'the <u>Princes’ School</u>'},
        {p:'What did he study there?', o:['sciences, religion, the Qur’an','only sports','only art'], a:0, w:'العلوم والدين والقرآن.', f:'<u>sciences, religion, the Qur’an</u>'},
        {p:'He helped Riyadh grow into a:', o:['major metropolis','small town','farm'], a:0, w:'مدينةٌ كبرى.', f:'a <u>major metropolis</u>'}
      ]},
      { type:'choice', name:'التواريخ والمناصب', hint:'رتّب زمنيًّا', qs:[
        {p:'He was appointed Emir of Riyadh in ___.', o:['1954','2015','2012'], a:0, w:'أميرًا للرياض عام ١٩٥٤.', f:'in <u>1954</u>'},
        {p:'He became Crown Prince in ___.', o:['2012','1954','1935'], a:0, w:'وليَّ العهد ٢٠١٢.', f:'in <u>2012</u>'},
        {p:'He became King in ___.', o:['2015','2005','1995'], a:0, w:'ملكًا ٢٠١٥.', f:'in <u>2015</u>'},
        {p:'How old was he when he became Emir of Riyadh?', o:['19','30','40'], a:0, w:'كان في التاسعة عشرة.', f:'<u>19</u> years old'}
      ]},
      { type:'choice', name:'إنجازاته', hint:'العمل الإنسانيّ والتراث', qs:[
        {p:'He founded a center for global:', o:['humanitarian relief','tourism only','sports'], a:0, w:'الإغاثة الإنسانية.', f:'humanitarian <u>relief</u>'},
        {p:'Al-Ahsa Oasis became a ___ site during his reign.', o:['UNESCO World Heritage','military','shopping'], a:0, w:'موقعُ تراثٍ عالميّ لليونسكو.', f:'<u>UNESCO World Heritage</u>'},
        {p:'His title is the Custodian of the ___.', o:['Two Holy Mosques','Red Sea','Desert'], a:0, w:'خادم الحرمين الشريفين.', f:'the <u>Two Holy Mosques</u>'},
        {p:'He received an honorary doctorate from the Islamic University of:', o:['Madinah','Cairo','London'], a:0, w:'الجامعة الإسلامية بالمدينة.', f:'<u>Madinah</u>'}
      ]},
      { type:'gap', name:'أكمل من النصّ', hint:'اختر الكلمة المناسبة', qs:[
        {p:'King Salman was ___ in Riyadh in 1935.', o:['born','made','grown'], a:0, w:'وُلِد ← <code>was born</code>.', f:'was <u>born</u>'},
        {p:'He was ___ Crown Prince in 2012.', o:['appointed','donated','gathered'], a:0, w:'عُيّن.', f:'was <u>appointed</u>'},
        {p:'He was ___ at the Princes’ School.', o:['educated','built','sold'], a:0, w:'دُرِّس.', f:'was <u>educated</u>'},
        {p:'He ___ the King Salman Humanitarian Aid Centre.', o:['founded','forgot','followed'], a:0, w:'أسّس.', f:'<u>founded</u>'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'Born in:', ask:'اختر', o:['Riyadh','Makkah'], a:0, w:'الرياض.', f:'<u>Riyadh</u>'},
        {p:'Born in the year:', ask:'اختر', o:['1935','1954'], a:0, w:'١٩٣٥.', f:'<u>1935</u>'},
        {p:'Educated at the ___ School.', ask:'أكمل', o:['Princes’','Public'], a:0, w:'مدرسة الأمراء.', f:'<u>Princes’</u>'},
        {p:'Emir of Riyadh at age:', ask:'اختر', o:['19','25'], a:0, w:'١٩.', f:'<u>19</u>'},
        {p:'Crown Prince in:', ask:'اختر', o:['2012','2015'], a:0, w:'٢٠١٢.', f:'<u>2012</u>'},
        {p:'King in:', ask:'اختر', o:['2015','2012'], a:0, w:'٢٠١٥.', f:'<u>2015</u>'},
        {p:'He founded a center for ___ relief.', ask:'أكمل', o:['humanitarian','sports'], a:0, w:'الإغاثة الإنسانية.', f:'<u>humanitarian</u>'},
        {p:'Custodian of the ___.', ask:'أكمل', o:['Two Holy Mosques','Two Rivers'], a:0, w:'الحرمين الشريفين.', f:'<u>Two Holy Mosques</u>'},
        {p:'Al-Ahsa Oasis is a ___ site.', ask:'اختر', o:['UNESCO Heritage','private'], a:0, w:'تراثٌ عالميّ.', f:'<u>UNESCO Heritage</u>'}
      ]}
    ]
  };
})();
