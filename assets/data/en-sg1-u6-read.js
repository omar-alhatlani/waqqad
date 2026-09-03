/* ============================================================
   Lesson: Reading — Unusual Houses
   English · Super Goal 1 · Unit 6 (Is There a View?) · صفحة ٥٣
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1).
   lang:'en' → المحتوى إنجليزيّ LTR، والشرح بالعربية.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U6_READ'] = {
    id:'EN_SG1_U6_READ',
    title:'Reading — Unusual Houses',
    lang:'en',
    rule:{
      tag:'النصّ',
      title:'Unusual Houses',
      intro:'اقرأ عن «بيوتٍ غير عاديّة»: بيوت الكهوف في إسبانيا، والبيوت العائمة في أمستردام، ثم أجب.',
      examples:[
        'There are many cave houses in southern Spain, near Granada.',
        'The cave houses date back to the eighth century.',
        'Inside, the temperature is about 19–20°C all year — dry and comfortable.',
        'There are over 10,000 houseboats in the Netherlands.',
        'Artists and young people like to live on the houseboats.'
      ],
      trick:'قارِن: <b>بيوت الكهوف</b> في إسبانيا (<code>Granada</code>)، و<b>البيوت العائمة</b> في هولندا (<code>Amsterdam</code>).'
    },
    stages:[
      { type:'choice', name:'الفهم', hint:'أجب حسب النصّ', qs:[
        {p:'Where are the cave houses?',            ask:'حسب النصّ', o:['Spain','the Netherlands','Egypt','France'], a:0, w:'<code>cave homes in southern Spain.</code>', f:'in Spain'},
        {p:'The cave houses date back to the:',      ask:'حسب النصّ', o:['eighth century','last year','tenth century','first century'], a:0, w:'<code>date back to the eighth century.</code>', f:'the eighth century'},
        {p:'The temperature inside cave houses is about:', ask:'حسب النصّ', o:['19–20°C','40°C','0°C','5°C'], a:0, w:'<code>about 19 to 20 degrees Celsius.</code>', f:'19–20°C'},
        {p:'How many houseboats are in the Netherlands?', ask:'حسب النصّ', o:['over 10,000','over 100','over 1,000,000','ten'], a:0, w:'<code>over 10,000 houseboats.</code>', f:'over 10,000'},
        {p:"The houseboats are on Amsterdam's:",     ask:'حسب النصّ', o:['canals','streets','mountains','farms'], a:0, w:'<code>on Amsterdam\'s canals.</code>', f:'canals'},
        {p:'Who likes to live on houseboats?',       ask:'حسب النصّ', o:['artists and young people','only old people','no one','farmers'], a:0, w:'<code>artists and young people.</code>', f:'artists and young people'}
      ]},
      { type:'choice', name:'صحيح أم خطأ؟', hint:'Yes / No حسب النصّ', qs:[
        {p:'Cave houses have electricity and water.', ask:'صحيح أم خطأ؟', o:['Yes','No'], a:0, w:'<code>electricity and running water.</code>', f:'Yes.'},
        {p:'Cave houses are natural formations.',      ask:'صحيح أم خطأ؟', o:['No','Yes'], a:0, w:'هي <b>من صنع الناس</b>، لا طبيعيّة.', f:'No — made by people.'},
        {p:'There are over 10,000 houseboats in the Netherlands.', ask:'صحيح أم خطأ؟', o:['Yes','No'], a:0, w:'<code>over 10,000 houseboats.</code>', f:'Yes.'},
        {p:'The houseboats all look the same.',        ask:'صحيح أم خطأ؟', o:['No','Yes'], a:0, w:'<code>they all look different.</code>', f:'No — all different.'},
        {p:'Some cave houses have ten rooms or more.',  ask:'صحيح أم خطأ؟', o:['Yes','No'], a:0, w:'<code>ten rooms or more.</code>', f:'Yes.'}
      ]},
      { type:'gap', name:'أكمل من النصّ', hint:'اختر الكلمة من النصّ', qs:[
        {p:'There are many cave houses in southern ___.', ask:'أكمل الفراغ', o:['Spain','France','Egypt','Italy'], a:0, w:'<code>southern Spain</code>.', f:'southern <u>Spain</u>.'},
        {p:'The houseboats are in the ___.',              ask:'أكمل الفراغ', o:['Netherlands','desert','mountains','forest'], a:0, w:'<code>the Netherlands</code>.', f:'the <u>Netherlands</u>.'},
        {p:'Cave houses are dry and ___.',                ask:'أكمل الفراغ', o:['comfortable','wet','cold','small'], a:0, w:'<code>dry and comfortable</code>.', f:'dry and <u>comfortable</u>.'},
        {p:"The houseboats are on Amsterdam's ___.",      ask:'أكمل الفراغ', o:['canals','roads','farms','hills'], a:0, w:'<code>canals</code>.', f:"Amsterdam's <u>canals</u>."},
        {p:'Cave houses date back to the eighth ___.',    ask:'أكمل الفراغ', o:['century','year','week','day'], a:0, w:'<code>eighth century</code>.', f:'the eighth <u>century</u>.'},
        {p:'There are over 10,000 ___.',                  ask:'أكمل الفراغ', o:['houseboats','cars','trees','people'], a:0, w:'<code>houseboats</code>.', f:'over 10,000 <u>houseboats</u>.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['There','are','cave','houses','in','Spain','.'], w:'بيوت الكهوف.', f:'There are cave houses in Spain.'},
        {sol:['The','houseboats','are','in','Amsterdam','.'],   w:'البيوت العائمة.', f:'The houseboats are in Amsterdam.'},
        {sol:['They','all','look','different','.'],             w:'كلٌّ مختلف.', f:'They all look different.'},
        {sol:['Is','there','a','view','?'],                     w:'سؤالُ الوحدة.', f:'Is there a view?'},
        {sol:['The','houses','are','dry','and','comfortable','.'], w:'وصفُ البيوت.', f:'The houses are dry and comfortable.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما فهمته — مختلطًا', final:true, qs:[
        {p:'Where are the cave houses?', ask:'حسب النصّ', o:['Spain','the Netherlands'], a:0, w:'<code>southern Spain</code>.', f:'in Spain'},
        {p:'How many houseboats are in the Netherlands?', ask:'حسب النصّ', o:['over 10,000','over 100'], a:0, w:'<code>over 10,000</code>.', f:'over 10,000'},
        {p:'Cave houses are natural formations.', ask:'صحيح أم خطأ؟', o:['No','Yes'], a:0, w:'من صنع الناس.', f:'No.'},
        {p:'Cave houses are dry and ___.', ask:'أكمل الفراغ', o:['comfortable','wet','cold','small'], a:0, w:'<code>dry and comfortable</code>.', f:'dry and <u>comfortable</u>.'},
        {p:'Who likes to live on houseboats?', ask:'حسب النصّ', o:['artists and young people','only old people'], a:0, w:'<code>artists and young people</code>.', f:'artists and young people'},
        {sol:['They','all','look','different','.'], w:'كلٌّ مختلف.', f:'They all look different.'},
        {p:'The houseboats all look the same.', ask:'صحيح أم خطأ؟', o:['No','Yes'], a:0, w:'كلٌّ مختلف.', f:'No.'},
        {p:'The cave houses date back to the:', ask:'حسب النصّ', o:['eighth century','tenth century'], a:0, w:'<code>eighth century</code>.', f:'the eighth century'},
        {sol:['Is','there','a','view','?'], w:'سؤالُ الوحدة.', f:'Is there a view?'}
      ]}
    ]
  };
})();
