/* ============================================================
   Lesson: Simple Past of Be (was / were)
   English · Super Goal 2 · Unit 6 (What Was It Like?) · صفحة ٥٠
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U6_WAS'] = {
    id:'EN_SG2_U6_WAS',
    title:'Simple Past of Be',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'was / were',
      intro:'الماضي من الفعل <code>be</code>: نستعمل <code>was</code> مع <code>I / he / she / it</code>، و<code>were</code> مع <code>you / we / they</code>. للنفي: <code>wasn’t / weren’t</code>. وفي السؤال يتقدّم الفعل: <code>Was the game exciting?</code> / <code>How was the museum?</code>',
      table:[['I / He / She / It','was'],['You / We / They','were'],['Negative','wasn’t / weren’t'],['Question','Was it…? / Were they…?']],
      trick:'<code>was</code> للمفرد (وI)، و<code>were</code> للجمع وyou. في السؤال قدّمِ <code>was/were</code>، وفي النفي أضِف <code>n’t</code>.'
    },
    stages:[
      { type:'choice', name:'was أم were؟', hint:'was للمفرد وI · were للجمع وyou', qs:[
        {p:'I ___ at home.', o:['was','were'], a:0, w:'<code>I</code> ← <code>was</code>.', f:'I <u>was</u> at home.'},
        {p:'They ___ at the museum.', o:['were','was'], a:0, w:'<code>they</code> ← <code>were</code>.', f:'They <u>were</u>…'},
        {p:'The game ___ exciting.', o:['was','were'], a:0, w:'مفرد ← <code>was</code>.', f:'The game <u>was</u>…'},
        {p:'You ___ late.', o:['were','was'], a:0, w:'<code>you</code> ← <code>were</code>.', f:'You <u>were</u> late.'},
        {p:'The players ___ good.', o:['were','was'], a:0, w:'جمع ← <code>were</code>.', f:'The players <u>were</u> good.'}
      ]},
      { type:'gap', name:'النفي', hint:'wasn’t / weren’t', qs:[
        {p:'The food ___ good. (نفي)', o:['wasn’t','weren’t'], a:0, w:'مفرد ← <code>wasn’t</code>.', f:'The food <u>wasn’t</u> good.'},
        {p:'The lines ___ long. (نفي)', o:['weren’t','wasn’t'], a:0, w:'جمع ← <code>weren’t</code>.', f:'The lines <u>weren’t</u> long.'},
        {p:'I ___ tired. (نفي)', o:['wasn’t','weren’t'], a:0, w:'<code>I</code> ← <code>wasn’t</code>.', f:'I <u>wasn’t</u> tired.'},
        {p:'We ___ at home. (نفي)', o:['weren’t','wasn’t'], a:0, w:'<code>we</code> ← <code>weren’t</code>.', f:'We <u>weren’t</u> at home.'},
        {p:'It ___ boring. (نفي)', o:['wasn’t','weren’t'], a:0, w:'<code>it</code> ← <code>wasn’t</code>.', f:'It <u>wasn’t</u> boring.'}
      ]},
      { type:'choice', name:'السؤال والإجابة', hint:'قدّمِ was/were في السؤال', qs:[
        {p:'___ the game exciting?', ask:'اختر', o:['Was','Were','Did'], a:0, w:'مفرد ← <code>Was</code>.', f:'<u>Was</u> the game exciting?'},
        {p:'___ the players good?', ask:'اختر', o:['Were','Was','Did'], a:0, w:'جمع ← <code>Were</code>.', f:'<u>Were</u> the players good?'},
        {p:'How ___ the museum?', ask:'اختر', o:['was','were','did'], a:0, w:'مفرد ← <code>was</code>.', f:'How <u>was</u> the museum?'},
        {p:'Was it interesting?  →  Yes, ___.', ask:'اختر', o:['it was','it were','it did'], a:0, w:'الإجابة القصيرة ← <code>it was</code>.', f:'Yes, <u>it was</u>.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['They','was','at','the','museum','.'], bad:1, fix:'were', w:'<code>they</code> ← <code>were</code>.', f:'They <u>were</u>…'},
        {words:['I','were','at','home','.'], bad:1, fix:'was', w:'<code>I</code> ← <code>was</code>.', f:'I <u>was</u> at home.'},
        {words:['Was','the','players','good','?'], bad:0, fix:'Were', w:'جمع ← <code>Were</code>.', f:'<u>Were</u> the players good?'},
        {words:['The','food','weren’t','good','.'], bad:2, fix:'wasn’t', w:'مفرد ← <code>wasn’t</code>.', f:'The food <u>wasn’t</u> good.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['The','museum','was','amazing','.'], w:'مفرد ← was.', f:'The museum was amazing.'},
        {sol:['How','was','the','tour','?'], w:'was يتقدّم في السؤال.', f:'How was the tour?'},
        {sol:['They','were','very','good','.'], w:'جمع ← were.', f:'They were very good.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'I ___ at home.', ask:'اختر', o:['was','were'], a:0, w:'I ← was.', f:'<u>was</u>.'},
        {p:'They ___ good.', ask:'اختر', o:['were','was'], a:0, w:'جمع ← were.', f:'<u>were</u>.'},
        {p:'The food ___ good. (نفي)', ask:'اختر', o:['wasn’t','weren’t'], a:0, w:'مفرد.', f:'<u>wasn’t</u>.'},
        {p:'___ the game exciting?', ask:'اختر', o:['Was','Were'], a:0, w:'مفرد.', f:'<u>Was</u>.'},
        {p:'You ___ late.', ask:'اختر', o:['were','was'], a:0, w:'you ← were.', f:'<u>were</u>.'},
        {sol:['The','museum','was','amazing','.'], w:'مفرد ← was.', f:'The museum was amazing.'},
        {p:'The lines ___ long. (نفي)', ask:'اختر', o:['weren’t','wasn’t'], a:0, w:'جمع.', f:'<u>weren’t</u>.'},
        {p:'How ___ the museum?', ask:'اختر', o:['was','were'], a:0, w:'مفرد.', f:'<u>was</u>.'},
        {p:'Was it good?  →  Yes, ___.', ask:'اختر', o:['it was','it were'], a:0, w:'إجابة قصيرة.', f:'<u>it was</u>.'}
      ]}
    ]
  };
})();
