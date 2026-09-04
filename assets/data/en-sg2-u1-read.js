/* ============================================================
   Lesson: Reading — The Place to Stay
   English · Super Goal 2 · Unit 1 (Are You Here on Vacation?) · صفحة ٧
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2). النصّ من الكتاب.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U1_READ'] = {
    id:'EN_SG2_U1_READ',
    title:'Reading — The Place to Stay',
    lang:'en',
    rule:{
      tag:'النصّ',
      title:'The Place to Stay',
      intro:'اقرأ عن <b>بيوت الشباب</b> (youth hostels) — خيارُ إقامةٍ رخيصٌ للمسافرين الشباب — ثم أجب عن الأسئلة.',
      examples:[
        'Many young travelers are backpackers or students on a low budget. They want to see the world, but they can’t afford regular hotels.',
        'So youth hostels are the perfect solution. Today there are more than 4000 hostels in over 80 countries. The Saudi Youth Hostels Association (S.A.Y.H.A.) offers accommodations in 21 cities.',
        'Hostels are inexpensive because guests usually share rooms and bathrooms. Most have a laundry room, telephones, Internet, and a restaurant. Some are inside old historic buildings and castles.',
        'Hostels are a great place for socializing. Guests from different countries meet and share experiences. Many hostels organize tours, sports, and painting competitions. So youth hostels are the best place to stay and make new friends.'
      ],
      trick:'ركّز على الأرقام (<code>4000</code> بيت، <code>80</code> دولة، <code>21</code> مدينة) وسبب رُخصها (<code>share rooms</code>) وميزتها (<code>make new friends</code>).'
    },
    stages:[
      { type:'choice', name:'الفهم', hint:'أجب حسب النصّ', qs:[
        {p:'Who usually stays in youth hostels?', ask:'حسب النصّ', o:['Young travelers on a low budget','Rich businessmen','Old tourists','Pilots'], a:0, w:'<code>backpackers or students on a low budget</code>.', f:'Young travelers on a low budget.'},
        {p:'Why are hostels inexpensive?', ask:'حسب النصّ', o:['Guests share rooms and bathrooms','They are far away','They are dirty','They are small'], a:0, w:'<code>guests usually share rooms and bathrooms</code>.', f:'Because guests share rooms.'},
        {p:'In how many cities does S.A.Y.H.A. offer accommodations?', ask:'حسب النصّ', o:['21','80','4000','40'], a:0, w:'<code>in 21 cities</code>.', f:'21 cities.'},
        {p:'What can guests do at hostels besides sleep?', ask:'حسب النصّ', o:['Meet people and join activities','Only study','Only cook','Nothing'], a:0, w:'<code>meet other young people</code> وأنشطة وتنافُس.', f:'Meet people and join activities.'},
        {p:'Where are some hostels located?', ask:'حسب النصّ', o:['Inside old historic buildings and castles','Under the sea','In airports','In deserts only'], a:0, w:'<code>inside old historic buildings, castles</code>.', f:'In historic buildings and castles.'}
      ]},
      { type:'choice', name:'Yes / No', hint:'صحيح أم خطأ حسب النصّ', qs:[
        {p:'Young tourists are usually rich.', ask:'Yes / No', o:['No','Yes'], a:0, w:'هم <code>on a low budget</code> ← لا.', f:'No.'},
        {p:'The rooms in youth hostels are usually cheap.', ask:'Yes / No', o:['Yes','No'], a:0, w:'<code>inexpensive</code> ← نعم.', f:'Yes.'},
        {p:'You can cook in all youth hostels.', ask:'Yes / No', o:['No','Yes'], a:0, w:'<code>some hostels</code> فقط توفّر مطبخًا.', f:'No — only some.'},
        {p:'Hostels are good places for meeting people.', ask:'Yes / No', o:['Yes','No'], a:0, w:'<code>the place for socializing</code> ← نعم.', f:'Yes.'},
        {p:'There are hostels in more than 80 countries.', ask:'Yes / No', o:['Yes','No'], a:0, w:'<code>over 80 countries</code>.', f:'Yes.'}
      ]},
      { type:'gap', name:'أكمل من النصّ', hint:'اختر الكلمة من النصّ', qs:[
        {p:'Youth hostels are the perfect ___ for travelers without much money.', o:['solution','problem','hotel','city'], a:0, w:'<code>the perfect solution</code>.', f:'the perfect <u>solution</u>.'},
        {p:'Guests usually ___ rooms and bathrooms.', o:['share','clean','buy','build'], a:0, w:'<code>share</code> = يتشاركون.', f:'guests <u>share</u> rooms.'},
        {p:'Hostels are a great place for ___.', o:['socializing','sleeping only','driving','shopping'], a:0, w:'<code>socializing</code> = التعارف والاختلاط.', f:'a great place for <u>socializing</u>.'},
        {p:'Many young travelers are ___ on a low budget.', o:['students','pilots','doctors','farmers'], a:0, w:'<code>students on a low budget</code>.', f:'<u>students</u> on a low budget.'},
        {p:'Youth hostels are the best place to stay and make new ___.', o:['friends','money','rooms','hotels'], a:0, w:'<code>make new friends</code>.', f:'make new <u>friends</u>.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['Youth','hostels','are','inexpensive','.'], w:'الفكرة الرئيسة: بيوت الشباب رخيصة.', f:'Youth hostels are inexpensive.'},
        {sol:['Guests','share','rooms','and','bathrooms','.'], w:'سبب الرُّخص.', f:'Guests share rooms and bathrooms.'},
        {sol:['Hostels','are','good','for','socializing','.'], w:'ميزة الاختلاط.', f:'Hostels are good for socializing.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما فهمته — مختلطًا', final:true, qs:[
        {p:'Who stays in youth hostels?', ask:'حسب النصّ', o:['Young travelers on a low budget','Rich tourists'], a:0, w:'ميزانية محدودة.', f:'Young travelers on a low budget.'},
        {p:'Why are hostels cheap?', ask:'حسب النصّ', o:['Guests share rooms','They are far'], a:0, w:'<code>share rooms</code>.', f:'Guests share rooms.'},
        {p:'Young tourists are usually rich.', ask:'Yes / No', o:['No','Yes'], a:0, w:'<code>low budget</code>.', f:'No.'},
        {p:'How many cities does S.A.Y.H.A. serve?', ask:'حسب النصّ', o:['21','80'], a:0, w:'<code>21 cities</code>.', f:'21.'},
        {p:'Guests usually ___ rooms.', ask:'أكمل', o:['share','buy'], a:0, w:'يتشاركون.', f:'<u>share</u>.'},
        {p:'Hostels are good places for meeting people.', ask:'Yes / No', o:['Yes','No'], a:0, w:'<code>socializing</code>.', f:'Yes.'},
        {p:'You can cook in all hostels.', ask:'Yes / No', o:['No','Yes'], a:0, w:'بعضها فقط.', f:'No.'},
        {sol:['Youth','hostels','are','inexpensive','.'], w:'الفكرة الرئيسة.', f:'Youth hostels are inexpensive.'},
        {p:'Hostels are the best place to make new ___.', ask:'أكمل', o:['friends','money'], a:0, w:'<code>friends</code>.', f:'<u>friends</u>.'}
      ]}
    ]
  };
})();
