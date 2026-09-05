/* ============================================================
   Lesson: Simple Past Tense: be (was/were) + be born
   English · Super Goal 1 · Unit 15 (Then and Now) · صفحة ١٣٦
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U15_WAS'] = {
    id:'EN_SG1_U15_WAS',
    title:'Past of be: was / were',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'was / were + be born',
      intro:'ماضي الفعل <code>be</code>: <code>was</code> مع <code>I / he / she / it</code>، و<code>were</code> مع <code>you / we / they</code>. النفي <code>wasn’t / weren’t</code>، والسؤال بتقديم <code>was/were</code>. وللولادة نقول <code>be born</code>: <code>I was born in Riyadh</code>.',
      table:[['I / He / She / It','was'],['You / We / They','were'],['Negative','wasn’t / weren’t'],['born','I was born in Makkah.']],
      trick:'<code>was</code> للمفرد، و<code>were</code> للجمع و<code>you</code>. والولادةُ دائمًا مبنيّةٌ للمجهول: <code>I was born</code> لا <code>I born</code>.'
    },
    stages:[
      { type:'choice', name:'was أم were', hint:'مفرد أم جمع؟', qs:[
        {p:'I ___ at home yesterday.', o:['was','were','am','is'], a:0, w:'<code>I</code> ← <code>was</code>.', f:'I <u>was</u> at home.'},
        {p:'They ___ at the beach on Friday.', o:['were','was','are','is'], a:0, w:'<code>They</code> ← <code>were</code>.', f:'They <u>were</u> at the beach.'},
        {p:'She ___ a good student.', o:['was','were','is','are'], a:0, w:'<code>She</code> ← <code>was</code>.', f:'She <u>was</u> a good student.'},
        {p:'You ___ late this morning.', o:['were','was','are','is'], a:0, w:'<code>You</code> ← <code>were</code>.', f:'You <u>were</u> late.'}
      ]},
      { type:'choice', name:'النفي والسؤال', hint:'wasn’t / weren’t / Was…?', qs:[
        {p:'He ___ at school. (نفي)', o:['wasn’t','weren’t','didn’t','isn’t'], a:0, w:'مفرد ← <code>wasn’t</code>.', f:'He <u>wasn’t</u> at school.'},
        {p:'They ___ ready. (نفي)', o:['weren’t','wasn’t','didn’t','aren’t'], a:0, w:'جمع ← <code>weren’t</code>.', f:'They <u>weren’t</u> ready.'},
        {p:'___ you at the party?', o:['Were','Was','Did','Are'], a:0, w:'<code>you</code> ← <code>Were</code>.', f:'<u>Were</u> you at the party?'},
        {p:'___ she happy? — Yes, she was.', o:['Was','Were','Did','Is'], a:0, w:'<code>she</code> ← <code>Was</code>.', f:'<u>Was</u> she happy?'}
      ]},
      { type:'choice', name:'be born', hint:'الولادة', qs:[
        {p:'I ___ born in Jeddah.', o:['was','were','am','did'], a:0, w:'<code>I</code> ← <code>was born</code>.', f:'I <u>was</u> born in Jeddah.'},
        {p:'Where ___ you born?', o:['were','was','did','are'], a:0, w:'<code>you</code> ← <code>were</code>.', f:'Where <u>were</u> you born?'},
        {p:'He ___ born in 1980.', o:['was','were','is','did'], a:0, w:'مفرد ← <code>was born</code>.', f:'He <u>was</u> born in 1980.'},
        {p:'The correct form is:', o:['I was born','I born','I am born yesterday'], a:0, w:'<code>I was born</code>.', f:'<u>I was born</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['They','was','at','home','.'], bad:1, fix:'were', w:'<code>They</code> ← <code>were</code>.', f:'They <u>were</u> at home.'},
        {words:['I','were','late','.'], bad:1, fix:'was', w:'<code>I</code> ← <code>was</code>.', f:'I <u>was</u> late.'},
        {words:['I','born','in','Riyadh','.'], bad:1, fix:'was born', w:'الولادة ← <code>was born</code>.', f:'I <u>was born</u> in Riyadh.'},
        {words:['Was','they','happy','?'], bad:0, fix:'Were', w:'<code>they</code> ← <code>Were</code>.', f:'<u>Were</u> they happy?'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['I','was','born','in','Makkah','.'], w:'<code>was born</code>.', f:'I was born in Makkah.'},
        {sol:['They','were','at','the','beach','.'], w:'<code>They</code> ← <code>were</code>.', f:'They were at the beach.'},
        {sol:['Where','were','you','born','?'], w:'<code>Where + were</code>.', f:'Where were you born?'},
        {sol:['She','wasn’t','at','school','.'], w:'النفي ← <code>wasn’t</code>.', f:"She wasn't at school."}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'I ___ at home.', ask:'be', o:['was','were'], a:0, w:'<code>I</code>.', f:'<u>was</u>'},
        {p:'They ___ at the beach.', ask:'be', o:['were','was'], a:0, w:'<code>They</code>.', f:'<u>were</u>'},
        {p:'He ___ at school. (نفي)', ask:'اختر', o:['wasn’t','weren’t'], a:0, w:'مفرد.', f:'<u>wasn’t</u>'},
        {p:'___ you at the party?', ask:'اختر', o:['Were','Was'], a:0, w:'<code>you</code>.', f:'<u>Were</u>'},
        {p:'I ___ born in Jeddah.', ask:'اختر', o:['was','were'], a:0, w:'<code>was born</code>.', f:'<u>was</u>'},
        {p:'Where ___ you born?', ask:'اختر', o:['were','was'], a:0, w:'<code>you</code>.', f:'<u>were</u>'},
        {sol:['I','was','born','in','Makkah','.'], w:'<code>was born</code>.', f:'I was born in Makkah.'},
        {p:'She ___ a good student.', ask:'be', o:['was','were'], a:0, w:'مفرد.', f:'<u>was</u>'},
        {p:'They ___ ready. (نفي)', ask:'اختر', o:['weren’t','wasn’t'], a:0, w:'جمع.', f:'<u>weren’t</u>'}
      ]}
    ]
  };
})();
