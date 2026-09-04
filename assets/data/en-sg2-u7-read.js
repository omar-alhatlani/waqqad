/* ============================================================
   Lesson: Reading — So You Want to Be Cool
   English · Super Goal 2 · Unit 7 (What Happened?) · صفحة ٦٠
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2). النصّ من الكتاب.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U7_READ'] = {
    id:'EN_SG2_U7_READ',
    title:'Reading — So You Want to Be Cool',
    lang:'en',
    rule:{
      tag:'النصّ',
      title:'So You Want to Be Cool',
      intro:'اقرأ نصائحَ مجلّةٍ للمراهقين حول <b>الثقة بالنفس</b> وكيف تكون «cool»، ثم أجب عن الأسئلة.',
      examples:[
        'Are you worried about your clothes or nervous about speaking in class? Teenage Express magazine offers some ideas on how to be cool.',
        'Think of your good qualities and list them — you have a lot of them! Take care of your appearance; your clothes don’t have to be expensive, they just have to look nice.',
        'Compliment people and smile a lot. Meet new people and be friendly. Don’t be shy — if you want to meet someone, introduce yourself. People usually like an outgoing person.',
        'Be nice to everyone, but if someone bothers you, defend yourself and say what you think. Ignore negative things people say, and be confident in who you are.'
      ],
      trick:'الفكرة: الثقةُ بالنفس. النصائح: اعرفْ صفاتك الحسنة، اعتنِ بمظهرك (بلا غلاء)، ابتسمْ وكنْ ودودًا، دافعْ عن نفسك، وتجاهلِ السلبيّات.'
    },
    stages:[
      { type:'choice', name:'الفهم', hint:'أجب حسب النصّ', qs:[
        {p:'Who offers ideas on how to be cool?', ask:'حسب النصّ', o:['Teenage Express magazine','A teacher','A doctor','A friend'], a:0, w:'<code>Teenage Express magazine</code>.', f:'Teenage Express magazine.'},
        {p:'Do your clothes have to be expensive?', ask:'حسب النصّ', o:['No, just look nice','Yes, very','Yes, always','No clothes'], a:0, w:'<code>don’t have to be expensive … just look nice</code>.', f:'No — just look nice.'},
        {p:'What should you do when you meet new people?', ask:'حسب النصّ', o:['Smile and be friendly','Be shy','Ignore them','Be rude'], a:0, w:'<code>compliment people and smile … be friendly</code>.', f:'Smile and be friendly.'},
        {p:'What if someone bothers you?', ask:'حسب النصّ', o:['Defend yourself','Cry','Run away','Say nothing'], a:0, w:'<code>defend yourself and say what you think</code>.', f:'Defend yourself.'},
        {p:'How should you feel about who you are?', ask:'حسب النصّ', o:['Confident','Worried','Ashamed','Nervous'], a:0, w:'<code>be confident in who you are</code>.', f:'Confident.'}
      ]},
      { type:'choice', name:'Yes / No', hint:'صحيح أم خطأ حسب النصّ', qs:[
        {p:'You should think of your good qualities.', ask:'Yes / No', o:['Yes','No'], a:0, w:'<code>Think of your good qualities</code>.', f:'Yes.'},
        {p:'Clothes must be expensive to be cool.', ask:'Yes / No', o:['No','Yes'], a:0, w:'<code>don’t have to be expensive</code>.', f:'No.'},
        {p:'You should be shy with new people.', ask:'Yes / No', o:['No','Yes'], a:0, w:'<code>Don’t be shy</code>.', f:'No.'},
        {p:'You should ignore negative comments.', ask:'Yes / No', o:['Yes','No'], a:0, w:'<code>Ignore negative things</code>.', f:'Yes.'},
        {p:'You should smile a lot.', ask:'Yes / No', o:['Yes','No'], a:0, w:'<code>smile a lot</code>.', f:'Yes.'}
      ]},
      { type:'gap', name:'أكمل من النصّ', hint:'اختر الكلمة الصحيحة', qs:[
        {p:'Think of your good ___.', o:['qualities','clothes','friends','tests'], a:0, w:'<code>good qualities</code>.', f:'good <u>qualities</u>.'},
        {p:'Your clothes just have to look ___.', o:['nice','expensive','old','big'], a:0, w:'<code>look nice</code>.', f:'look <u>nice</u>.'},
        {p:'Compliment people and ___ a lot.', o:['smile','sleep','shout','run'], a:0, w:'<code>smile a lot</code>.', f:'<u>smile</u> a lot.'},
        {p:'Don’t be ___; introduce yourself.', o:['shy','tall','tired','late'], a:0, w:'<code>Don’t be shy</code>.', f:'Don’t be <u>shy</u>.'},
        {p:'Be ___ in who you are.', o:['confident','afraid','sad','angry'], a:0, w:'<code>be confident</code>.', f:'be <u>confident</u>.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['Think','of','your','good','qualities','.'], w:'نصيحةٌ أولى.', f:'Think of your good qualities.'},
        {sol:['Smile','and','be','friendly','.'], w:'كنْ ودودًا.', f:'Smile and be friendly.'},
        {sol:['Be','confident','in','yourself','.'], w:'الثقةُ بالنفس.', f:'Be confident in yourself.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما فهمته — مختلطًا', final:true, qs:[
        {p:'Who gives the tips?', ask:'حسب النصّ', o:['A teenage magazine','A doctor'], a:0, w:'مجلّة المراهقين.', f:'A teenage magazine.'},
        {p:'Clothes must be expensive.', ask:'Yes / No', o:['No','Yes'], a:0, w:'لا.', f:'No.'},
        {p:'You should smile a lot.', ask:'Yes / No', o:['Yes','No'], a:0, w:'نعم.', f:'Yes.'},
        {p:'Think of your good ___.', ask:'أكمل', o:['qualities','clothes'], a:0, w:'صفاتك.', f:'<u>qualities</u>.'},
        {p:'If someone bothers you:', ask:'حسب النصّ', o:['Defend yourself','Cry'], a:0, w:'دافعْ.', f:'Defend yourself.'},
        {sol:['Smile','and','be','friendly','.'], w:'كنْ ودودًا.', f:'Smile and be friendly.'},
        {p:'You should be shy.', ask:'Yes / No', o:['No','Yes'], a:0, w:'لا.', f:'No.'},
        {p:'Be ___ in who you are.', ask:'أكمل', o:['confident','afraid'], a:0, w:'واثقًا.', f:'<u>confident</u>.'},
        {p:'Your clothes should look ___.', ask:'أكمل', o:['nice','old'], a:0, w:'أنيقة.', f:'<u>nice</u>.'}
      ]}
    ]
  };
})();
