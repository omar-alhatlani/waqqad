/* ============================================================
   Lesson: Reading — Art of the Pen: Arabic Calligraphy
   English · Super Goal 2 · Unit 6 (What Was It Like?) · صفحة ٥٤
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2). النصّ من الكتاب.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U6_READ'] = {
    id:'EN_SG2_U6_READ',
    title:'Reading — Art of the Pen: Arabic Calligraphy',
    lang:'en',
    rule:{
      tag:'النصّ',
      title:'Art of the Pen: Arabic Calligraphy',
      intro:'اقرأ عن <b>فنّ الخطّ العربيّ</b> وارتباطه بالقرآن الكريم وأنماطه الستّة، ثم أجب عن الأسئلة.',
      examples:[
        'The word calligraphy means “beautiful writing.” The true beauty of Arabic calligraphy is that it is used to write the holy words of the Qur’an. That is how and why this art started.',
        'The first Arabic script was very simple. With the spread of Islam, there was a need for a clearer, more expressive script so that all people could read Allah’s words in the Holy Qur’an.',
        'Today there are six main styles. Kufic is one of the oldest — straight, geometric letters, easy to cut into wood or stone; it was used for the first copies of the Qur’an.',
        'Thuluth is long and elegant, used for surah headings and on the Saudi Arabian flag. Naskh and Ruq’ah are common in printing and handwriting. Farsi (Ta’liq) means “hanging” and is used in literature. Diwani is very decorative and often seen on greeting cards.'
      ],
      trick:'ركّز على: معنى <code>calligraphy</code> (الكتابة الجميلة)، وارتباطه بالقرآن، والأنماط: <b>الكوفي</b> أقدمها، و<b>الثلث</b> على العَلَم السعوديّ.'
    },
    stages:[
      { type:'choice', name:'الفهم', hint:'أجب حسب النصّ', qs:[
        {p:'What does the word “calligraphy” mean?', ask:'حسب النصّ', o:['Beautiful writing','Fast reading','Old painting','Loud music'], a:0, w:'<code>“beautiful writing”</code>.', f:'Beautiful writing.'},
        {p:'Why did Arabic calligraphy start?', ask:'حسب النصّ', o:['To write the Holy Qur’an','To draw maps','To sell cards','To build houses'], a:0, w:'<code>used to write the holy words of the Qur’an</code>.', f:'To write the Qur’an.'},
        {p:'How many main styles are there today?', ask:'حسب النصّ', o:['Six','Three','Ten','Two'], a:0, w:'<code>six main styles</code>.', f:'Six.'},
        {p:'Which is one of the oldest styles?', ask:'حسب النصّ', o:['Kufic','Diwani','Naskh','Farsi'], a:0, w:'<code>Kufic … one of the oldest</code>.', f:'Kufic.'},
        {p:'Which style is on the Saudi Arabian flag?', ask:'حسب النصّ', o:['Thuluth','Kufic','Ruq’ah','Diwani'], a:0, w:'<code>the script of the Saudi Arabian flag</code>.', f:'Thuluth.'}
      ]},
      { type:'choice', name:'Yes / No', hint:'صحيح أم خطأ حسب النصّ', qs:[
        {p:'Calligraphy means “beautiful writing.”', ask:'Yes / No', o:['Yes','No'], a:0, w:'صحيح.', f:'Yes.'},
        {p:'Kufic letters are straight and geometric.', ask:'Yes / No', o:['Yes','No'], a:0, w:'<code>straight, geometric letters</code>.', f:'Yes.'},
        {p:'There are only two styles of Arabic calligraphy.', ask:'Yes / No', o:['No','Yes'], a:0, w:'بل <code>six</code>.', f:'No — six.'},
        {p:'Diwani is a very decorative style.', ask:'Yes / No', o:['Yes','No'], a:0, w:'<code>very decorative</code>.', f:'Yes.'},
        {p:'Calligraphy has no link to the Qur’an.', ask:'Yes / No', o:['No','Yes'], a:0, w:'بل ارتبطت به.', f:'No.'}
      ]},
      { type:'gap', name:'أكمل من النصّ', hint:'اختر الكلمة الصحيحة', qs:[
        {p:'Calligraphy means beautiful ___.', o:['writing','reading','painting','singing'], a:0, w:'<code>beautiful writing</code>.', f:'beautiful <u>writing</u>.'},
        {p:'Kufic was used for the first copies of the ___.', o:['Qur’an','newspaper','map','letter'], a:0, w:'<code>first copies of the Holy Qur’an</code>.', f:'first copies of the <u>Qur’an</u>.'},
        {p:'Thuluth is on the Saudi Arabian ___.', o:['flag','car','coin','house'], a:0, w:'<code>the Saudi Arabian flag</code>.', f:'Saudi Arabian <u>flag</u>.'},
        {p:'Farsi (Ta’liq) means ___.', o:['hanging','running','flying','sitting'], a:0, w:'<code>“hanging”</code>.', f:'means <u>hanging</u>.'},
        {p:'Diwani is often seen on greeting ___.', o:['cards','walls','roads','shoes'], a:0, w:'<code>greeting cards</code>.', f:'greeting <u>cards</u>.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['Calligraphy','means','beautiful','writing','.'], w:'التعريف.', f:'Calligraphy means beautiful writing.'},
        {sol:['Kufic','is','a','very','old','style','.'], w:'أقدم الأنماط.', f:'Kufic is a very old style.'},
        {sol:['Thuluth','is','on','the','Saudi','flag','.'], w:'خطّ العَلَم.', f:'Thuluth is on the Saudi flag.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما فهمته — مختلطًا', final:true, qs:[
        {p:'“calligraphy” means:', ask:'حسب النصّ', o:['Beautiful writing','Fast reading'], a:0, w:'الكتابة الجميلة.', f:'Beautiful writing.'},
        {p:'Why did it start?', ask:'حسب النصّ', o:['To write the Qur’an','To draw maps'], a:0, w:'لكتابة القرآن.', f:'To write the Qur’an.'},
        {p:'How many main styles?', ask:'حسب النصّ', o:['Six','Two'], a:0, w:'ستّة.', f:'Six.'},
        {p:'Which is on the Saudi flag?', ask:'حسب النصّ', o:['Thuluth','Kufic'], a:0, w:'الثلث.', f:'Thuluth.'},
        {p:'Kufic letters are straight and geometric.', ask:'Yes / No', o:['Yes','No'], a:0, w:'نعم.', f:'Yes.'},
        {p:'Farsi (Ta’liq) means ___.', ask:'أكمل', o:['hanging','flying'], a:0, w:'معلّق.', f:'<u>hanging</u>.'},
        {sol:['Calligraphy','means','beautiful','writing','.'], w:'التعريف.', f:'Calligraphy means beautiful writing.'},
        {p:'Diwani is decorative.', ask:'Yes / No', o:['Yes','No'], a:0, w:'نعم.', f:'Yes.'},
        {p:'Kufic was used for the first copies of the ___.', ask:'أكمل', o:['Qur’an','map'], a:0, w:'القرآن.', f:'<u>Qur’an</u>.'}
      ]}
    ]
  };
})();
