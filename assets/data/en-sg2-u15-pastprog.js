/* ============================================================
   Lesson: Past Progressive + when
   English · Super Goal 2 · Unit 15 (Today's News) · صفحة ١٣٤
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U15_PASTPROG'] = {
    id:'EN_SG2_U15_PASTPROG',
    title:'Past Progressive',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'was/were + V-ing · when',
      intro:'نستعمل <b>الماضي المستمرّ</b> لفعلٍ كان مستمرًّا في وقتٍ ماضٍ: <code>was/were + V-ing</code> (<code>They were sitting in the car</code>). وكثيرًا ما يقاطعه فعلٌ في <b>الماضي البسيط</b> مع <code>when</code>: <code>I was reading when the phone rang</code> (الطويلُ مستمرّ، والقصيرُ الذي قاطعه بسيط).',
      table:[['+','She was reading.'],['plural','They were playing.'],['–',"He wasn't sleeping."],['when','I was cooking when he called.']],
      trick:'الحدثُ الطويلُ المستمرّ ← ماضٍ مستمرّ (<code>was/were + -ing</code>)، والحدثُ القصيرُ الذي قاطعه ← ماضٍ بسيط بعد <code>when</code>.'
    },
    stages:[
      { type:'choice', name:'was / were', hint:'مفرد أم جمع؟', qs:[
        {p:'She ___ reading a book.', o:['was','were','is','are'], a:0, w:'مفرد ← <code>was</code>.', f:'She <u>was</u> reading.'},
        {p:'They ___ sitting in the car.', o:['were','was','are','is'], a:0, w:'جمع ← <code>were</code>.', f:'They <u>were</u> sitting.'},
        {p:'I ___ watching TV at 8.', o:['was','were','am','is'], a:0, w:'<code>I</code> ← <code>was</code>.', f:'I <u>was</u> watching TV.'},
        {p:'The verb after was/were takes:', o:['-ing','-ed','-s'], a:0, w:'<code>-ing</code>.', f:'<u>-ing</u>'}
      ]},
      { type:'choice', name:'التكوين', hint:'was/were + V-ing', qs:[
        {p:'He was ___ football.', o:['playing','play','plays','played'], a:0, w:'<code>-ing</code>.', f:'was <u>playing</u>'},
        {p:'We were ___ dinner.', o:['having','have','has','had'], a:0, w:'<code>-ing</code>.', f:'were <u>having</u>'},
        {p:'She ___ sleeping. (نفي)', o:["wasn't","weren't",'didn’t','isn’t'], a:0, w:'مفرد ← <code>wasn’t</code>.', f:"She <u>wasn't</u> sleeping."},
        {p:'___ they studying?', o:['Were','Was','Did','Are'], a:0, w:'جمع ← <code>Were</code>.', f:'<u>Were</u> they studying?'}
      ]},
      { type:'choice', name:'when', hint:'الطويل مستمرّ، القاطع بسيط', qs:[
        {p:'I ___ when the phone rang.', o:['was reading','read','reads','am reading'], a:0, w:'الطويل ← مستمرّ.', f:'I <u>was reading</u> when…'},
        {p:'She was cooking when he ___.', o:['called','was calling','calls','call'], a:0, w:'القاطع ← ماضٍ بسيط.', f:'when he <u>called</u>'},
        {p:'They were playing when it ___ to rain.', o:['started','was starting','start','starts'], a:0, w:'القاطع ← بسيط.', f:'when it <u>started</u>'},
        {p:'In “when” sentences, the interrupted action is:', o:['past progressive','simple past','present'], a:0, w:'المستمرّ.', f:'<u>past progressive</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['They','was','sitting','.'], bad:1, fix:'were', w:'جمع ← <code>were</code>.', f:'They <u>were</u> sitting.'},
        {words:['She','was','read','a','book','.'], bad:2, fix:'reading', w:'<code>-ing</code>.', f:'She was <u>reading</u>.'},
        {words:['I','was','reading','when','the','phone','was','ringing','.'], bad:6, fix:'rang (بسيط)', w:'القاطع ← ماضٍ بسيط.', f:'…when the phone <u>rang</u>.'},
        {words:['Was','they','playing','?'], bad:0, fix:'Were', w:'جمع ← <code>Were</code>.', f:'<u>Were</u> they playing?'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['They','were','sitting','in','the','car','.'], w:'<code>were + V-ing</code>.', f:'They were sitting in the car.'},
        {sol:['I','was','reading','when','he','called','.'], w:'مستمرّ + <code>when</code> + بسيط.', f:'I was reading when he called.'},
        {sol:['She','wasn’t','sleeping','.'], w:'النفي.', f:"She wasn't sleeping."},
        {sol:['Were','they','studying','?'], w:'السؤال بتقديم <code>Were</code>.', f:'Were they studying?'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'She ___ reading.', ask:'be', o:['was','were'], a:0, w:'مفرد.', f:'<u>was</u>'},
        {p:'They ___ playing.', ask:'be', o:['were','was'], a:0, w:'جمع.', f:'<u>were</u>'},
        {p:'He was ___ football.', ask:'اختر', o:['playing','play'], a:0, w:'<code>-ing</code>.', f:'<u>playing</u>'},
        {p:'I ___ when the phone rang.', ask:'اختر', o:['was reading','read'], a:0, w:'مستمرّ.', f:'<u>was reading</u>'},
        {p:'She was cooking when he ___.', ask:'اختر', o:['called','was calling'], a:0, w:'بسيط.', f:'<u>called</u>'},
        {p:'She ___ sleeping. (نفي)', ask:'اختر', o:["wasn't","weren't"], a:0, w:'مفرد.', f:"<u>wasn't</u>"},
        {sol:['They','were','sitting','in','the','car','.'], w:'<code>were + V-ing</code>.', f:'They were sitting in the car.'},
        {p:'___ they studying?', ask:'اختر', o:['Were','Was'], a:0, w:'جمع.', f:'<u>Were</u>'},
        {p:'interrupted action =', ask:'اختر', o:['past progressive','simple past'], a:0, w:'المستمرّ.', f:'<u>past progressive</u>'}
      ]}
    ]
  };
})();
