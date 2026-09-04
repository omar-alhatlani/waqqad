/* ============================================================
   Lesson: Simple Past Tense (+ Yes/No & Information questions)
   English · Super Goal 3 · Unit 2 (Life Stories) · صفحة ١٤
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U2_PAST'] = {
    id:'EN_SG3_U2_PAST',
    title:'Simple Past Tense',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'Simple Past Tense',
      intro:'نستعمل <b>الماضي البسيط</b> لأفعالٍ انتهت في الماضي. الأفعالُ المنتظمة تأخذ <code>-ed</code> (<code>work → worked</code>)، والشاذّةُ تتغيّر (<code>wear → wore</code>). في السؤال والنفي نستعمل <code>did/didn’t</code> ويعود الفعل مجرّدًا: <code>Did you live …? / I didn’t work</code>.',
      table:[['Statement','I lived in Riyadh.'],['Yes/No','Did you live in Riyadh?'],['Wh- question','Where did you work?'],['Negative','I didn’t work in an office.']],
      trick:'بعد <code>did/didn’t</code> يعود الفعل إلى أصله المجرّد: <code>Did you go?</code> لا <code>Did you went?</code>'
    },
    stages:[
      { type:'choice', name:'ماضٍ منتظم أم شاذّ', hint:'-ed أم تغيّر؟', qs:[
        {p:'They ___ in Riyadh last year. (live)', o:['lived','live','lives','living'], a:0, w:'منتظم ← <code>lived</code>.', f:'They <u>lived</u> in Riyadh.'},
        {p:'He ___ formal clothing. (wear)', o:['wore','weared','wear','wears'], a:0, w:'شاذّ ← <code>wore</code>.', f:'He <u>wore</u> formal clothing.'},
        {p:'She ___ to work by bus. (go)', o:['went','goed','go','gone'], a:0, w:'شاذّ ← <code>went</code>.', f:'She <u>went</u> to work.'},
        {p:'We ___ a new team. (form)', o:['formed','form','forms','forming'], a:0, w:'منتظم ← <code>formed</code>.', f:'We <u>formed</u> a team.'},
        {p:'He ___ me to play in the park. (teach)', o:['taught','teached','teach','teaches'], a:0, w:'شاذّ ← <code>taught</code>.', f:'He <u>taught</u> me to play.'}
      ]},
      { type:'choice', name:'الأسئلة والنفي', hint:'did/didn’t + الفعل المجرّد', qs:[
        {p:'___ you live in Jeddah?', o:['Did','Do','Was','Were'], a:0, w:'الماضي ← <code>Did</code>.', f:'<u>Did</u> you live in Jeddah?'},
        {p:'Where ___ they work?', o:['did','was','were','do'], a:0, w:'سؤالٌ ماضٍ ← <code>did</code>.', f:'Where <u>did</u> they work?'},
        {p:'I ___ work in an office.', o:['didn’t','don’t','wasn’t','not'], a:0, w:'نفيُ الماضي ← <code>didn’t</code>.', f:'I <u>didn’t</u> work in an office.'},
        {p:'Did she ___ formal clothes?', o:['wear','wore','wears','worn'], a:0, w:'بعد <code>did</code> ← مجرّد <code>wear</code>.', f:'Did she <u>wear</u> …?'},
        {p:'Yes/No answer: Did you play? — Yes, I ___.', o:['did','was','do','played'], a:0, w:'الإجابة القصيرة ← <code>did</code>.', f:'Yes, I <u>did</u>.'}
      ]},
      { type:'choice', name:'be في الماضي', hint:'was / were', qs:[
        {p:'I ___ born in Madinah.', o:['was','were','am','did'], a:0, w:'<code>I</code> ← <code>was</code>.', f:'I <u>was</u> born in Madinah.'},
        {p:'The twins ___ born on June 21st.', o:['were','was','are','did'], a:0, w:'الجمع ← <code>were</code>.', f:'The twins <u>were</u> born …'},
        {p:'Ahmed ___ team captain last year.', o:['was','were','did','is'], a:0, w:'مفرد ← <code>was</code>.', f:'Ahmed <u>was</u> captain.'},
        {p:'They ___ at the beach on Tuesday.', o:['were','was','did','are'], a:0, w:'الجمع ← <code>were</code>.', f:'They <u>were</u> at the beach.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['Did','you','went','to','school','?'], bad:2, fix:'go', w:'بعد <code>did</code> ← الفعل مجرّد <code>go</code>.', f:'Did you <u>go</u> to school?'},
        {words:['He','weared','a','suit','.'], bad:1, fix:'wore', w:'الماضي الشاذّ ← <code>wore</code>.', f:'He <u>wore</u> a suit.'},
        {words:['They','didn’t','worked','here','.'], bad:2, fix:'work', w:'بعد <code>didn’t</code> ← مجرّد <code>work</code>.', f:'They didn’t <u>work</u> here.'},
        {words:['I','were','born','in','Riyadh','.'], bad:1, fix:'was', w:'<code>I</code> ← <code>was</code>.', f:'I <u>was</u> born in Riyadh.'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['Where','did','you','grow','up','?'], w:'<code>Where + did + فاعل + فعل مجرّد</code>.', f:'Where did you grow up?'},
        {sol:['I','didn’t','play','well','at','first','.'], w:'<code>didn’t</code> ثمّ الفعل المجرّد.', f:'I didn’t play well at first.'},
        {sol:['He','was','born','in','Syria','.'], w:'<code>was + born</code>.', f:'He was born in Syria.'},
        {sol:['Did','they','win','the','game','?'], w:'<code>Did</code> في المقدمة والفعل مجرّد.', f:'Did they win the game?'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'They ___ in Riyadh. (live)', ask:'الماضي', o:['lived','live','lives'], a:0, w:'منتظم.', f:'They <u>lived</u>.'},
        {p:'He ___ a suit. (wear)', ask:'الماضي', o:['wore','weared','wear'], a:0, w:'شاذّ.', f:'He <u>wore</u>.'},
        {p:'___ you live here?', ask:'المساعد', o:['Did','Do','Was'], a:0, w:'الماضي ← <code>Did</code>.', f:'<u>Did</u> you live here?'},
        {p:'I ___ work there. (نفي)', ask:'النفي', o:['didn’t','don’t','wasn’t'], a:0, w:'<code>didn’t</code>.', f:'I <u>didn’t</u> work there.'},
        {p:'Did she ___ formal clothes?', ask:'الفعل', o:['wear','wore','wears'], a:0, w:'مجرّد بعد did.', f:'…<u>wear</u>…'},
        {p:'The twins ___ born on Monday.', ask:'be', o:['were','was','are'], a:0, w:'جمع ← <code>were</code>.', f:'…<u>were</u> born…'},
        {sol:['Where','did','you','grow','up','?'], w:'ترتيب سؤال الماضي.', f:'Where did you grow up?'},
        {p:'He ___ me to play. (teach)', ask:'الماضي', o:['taught','teached','teach'], a:0, w:'شاذّ.', f:'He <u>taught</u> me.'},
        {p:'Yes, I ___. (Did you play?)', ask:'الإجابة', o:['did','was','played'], a:0, w:'<code>did</code>.', f:'Yes, I <u>did</u>.'}
      ]}
    ]
  };
})();
