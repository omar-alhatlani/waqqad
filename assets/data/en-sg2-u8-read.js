/* ============================================================
   Lesson: Reading — Atchoo! Is It a Cold or the Flu?
   English · Super Goal 2 · Unit 8 (What’s Wrong?) · صفحة ٦٨
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2). النصّ من الكتاب.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U8_READ'] = {
    id:'EN_SG2_U8_READ',
    title:'Reading — Cold or the Flu?',
    lang:'en',
    rule:{
      tag:'النصّ',
      title:'Atchoo! Is It a Cold or the Flu?',
      intro:'اقرأ عن الفرق بين <b>الزُّكام</b> و<b>الإنفلونزا</b> وكيف تنتقلان، ثم أجب عن الأسئلة.',
      examples:[
        'A blocked nose, watery eyes, a sore throat, coughing and sneezing, and shivering — that could be the flu, or just a common cold. Their symptoms are very similar, so the two illnesses are often confused.',
        'People catch both in the same way: a person coughing or sneezing spreads the infection through the air. People also touch objects like a doorknob, telephone, or keyboard and pick up the viruses.',
        'Colds last five to seven days and are caused by viruses. There are more than 80 mutating rhinoviruses, so vaccination against colds is impossible. Medicines give temporary relief but cannot cure a cold.',
        'The flu has the same symptoms plus a high fever and severe muscle aches. It can be far more serious and even cause pneumonia. In 1919, a flu epidemic killed 20 million people. There are flu vaccines now, but new viruses keep appearing.'
      ],
      trick:'الفرق: الزكامُ أخفّ، والإنفلونزا فيها <b>حمّى عالية وآلامٌ عضلية شديدة</b> وقد تكون خطيرة. ولا لقاحَ للزكام (أكثر من ٨٠ فيروسًا)، بينما توجد لقاحاتٌ للإنفلونزا.'
    },
    stages:[
      { type:'choice', name:'الفهم', hint:'أجب حسب النصّ', qs:[
        {p:'Why are colds and the flu often confused?', ask:'حسب النصّ', o:['Their symptoms are similar','They are rare','They are painless','They last one day'], a:0, w:'<code>symptoms … very similar</code>.', f:'Similar symptoms.'},
        {p:'How do people catch both illnesses?', ask:'حسب النصّ', o:['Through the air and touching objects','By eating fruit','By drinking water','By sleeping'], a:0, w:'<code>through the air … touch objects</code>.', f:'Air and touching objects.'},
        {p:'How long do colds usually last?', ask:'حسب النصّ', o:['Five to seven days','One month','One day','A year'], a:0, w:'<code>five to seven days</code>.', f:'5–7 days.'},
        {p:'Why is there no vaccine for the common cold?', ask:'حسب النصّ', o:['There are 80+ mutating viruses','Colds are not real','Nobody gets colds','It is illegal'], a:0, w:'<code>more than 80 … mutating rhinoviruses</code>.', f:'80+ mutating viruses.'},
        {p:'Which is usually more serious?', ask:'حسب النصّ', o:['The flu','A cold','Neither','Both are harmless'], a:0, w:'الإنفلونزا أخطر (<code>can cause pneumonia</code>).', f:'The flu.'}
      ]},
      { type:'choice', name:'Yes / No', hint:'صحيح أم خطأ حسب النصّ', qs:[
        {p:'Colds and the flu have similar symptoms.', ask:'Yes / No', o:['Yes','No'], a:0, w:'<code>very similar</code>.', f:'Yes.'},
        {p:'There is a vaccine for the common cold.', ask:'Yes / No', o:['No','Yes'], a:0, w:'<code>vaccination … is impossible</code>.', f:'No.'},
        {p:'The flu can cause a high fever.', ask:'Yes / No', o:['Yes','No'], a:0, w:'<code>a high fever</code>.', f:'Yes.'},
        {p:'Medicines can cure a cold completely.', ask:'Yes / No', o:['No','Yes'], a:0, w:'<code>cannot cure</code>.', f:'No — only relief.'},
        {p:'The flu can be spread through the air.', ask:'Yes / No', o:['Yes','No'], a:0, w:'<code>through the air</code>.', f:'Yes.'}
      ]},
      { type:'gap', name:'أكمل من النصّ', hint:'اختر الكلمة الصحيحة', qs:[
        {p:'Colds are caused by ___.', o:['viruses','food','weather','noise'], a:0, w:'<code>caused by viruses</code>.', f:'caused by <u>viruses</u>.'},
        {p:'Colds usually last five to ___ days.', o:['seven','seventy','two','ten'], a:0, w:'<code>five to seven days</code>.', f:'five to <u>seven</u> days.'},
        {p:'Vaccination against colds is ___.', o:['impossible','easy','cheap','new'], a:0, w:'<code>impossible</code>.', f:'is <u>impossible</u>.'},
        {p:'The flu can cause a high ___.', o:['fever','score','price','wall'], a:0, w:'<code>a high fever</code>.', f:'high <u>fever</u>.'},
        {p:'Medicines give temporary ___ from symptoms.', o:['relief','pain','cure','fever'], a:0, w:'<code>temporary relief</code>.', f:'temporary <u>relief</u>.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['Colds','are','caused','by','viruses','.'], w:'سببُ الزكام.', f:'Colds are caused by viruses.'},
        {sol:['The','flu','can','be','serious','.'], w:'خطورةُ الإنفلونزا.', f:'The flu can be serious.'},
        {sol:['There','is','no','vaccine','for','colds','.'], w:'لا لقاحَ للزكام.', f:'There is no vaccine for colds.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما فهمته — مختلطًا', final:true, qs:[
        {p:'Why are they confused?', ask:'حسب النصّ', o:['Similar symptoms','Rare'], a:0, w:'أعراضٌ متشابهة.', f:'Similar symptoms.'},
        {p:'Colds are caused by ___.', ask:'أكمل', o:['viruses','food'], a:0, w:'فيروسات.', f:'<u>viruses</u>.'},
        {p:'There is a vaccine for the common cold.', ask:'Yes / No', o:['No','Yes'], a:0, w:'لا.', f:'No.'},
        {p:'Which is more serious?', ask:'حسب النصّ', o:['The flu','A cold'], a:0, w:'الإنفلونزا.', f:'The flu.'},
        {p:'Colds last five to ___ days.', ask:'أكمل', o:['seven','seventy'], a:0, w:'سبعة.', f:'<u>seven</u>.'},
        {sol:['Colds','are','caused','by','viruses','.'], w:'سببُ الزكام.', f:'Colds are caused by viruses.'},
        {p:'The flu can cause a high ___.', ask:'أكمل', o:['fever','price'], a:0, w:'حمّى.', f:'<u>fever</u>.'},
        {p:'Medicines can cure a cold completely.', ask:'Yes / No', o:['No','Yes'], a:0, w:'لا.', f:'No.'},
        {p:'How do people catch both?', ask:'حسب النصّ', o:['Air & touching objects','Eating fruit'], a:0, w:'الهواء واللمس.', f:'Air & touching objects.'}
      ]}
    ]
  };
})();
