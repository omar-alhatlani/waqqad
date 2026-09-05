/* ============================================================
   Lesson: There was / There were
   English · Super Goal 1 · Unit 15 (Then and Now) · صفحة ١٤٠
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U15_THERE'] = {
    id:'EN_SG1_U15_THERE',
    title:'There was / There were',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'وصف الماضي: There was / There were',
      intro:'نستعمل <code>There was</code> مع <b>المفرد</b>، و<code>There were</code> مع <b>الجمع</b> لوصف ما كان موجودًا في الماضي: <code>There was an old castle. There were many trees</code>. النفي: <code>There wasn’t / There weren’t</code>. السؤال: <code>Was there…? / Were there…?</code>',
      table:[['singular','There was a castle.'],['plural','There were trees.'],['negative','There wasn’t a mall.'],['question','Were there any shops?']],
      trick:'<code>There was</code> لاسمٍ مفرد، و<code>There were</code> لاسمٍ جمع. وفي السؤال يتقدّم <code>Was/Were</code> على <code>there</code>.'
    },
    stages:[
      { type:'choice', name:'was أم were', hint:'مفرد أم جمع؟', qs:[
        {p:'There ___ an old castle here.', o:['was','were','is','are'], a:0, w:'مفرد ← <code>was</code>.', f:'There <u>was</u> a castle.'},
        {p:'There ___ many trees in the past.', o:['were','was','are','is'], a:0, w:'جمع ← <code>were</code>.', f:'There <u>were</u> trees.'},
        {p:'There ___ a small shop on this street.', o:['was','were','is','are'], a:0, w:'مفرد ← <code>was</code>.', f:'There <u>was</u> a shop.'},
        {p:'There ___ two schools in the village.', o:['were','was','are','is'], a:0, w:'جمع ← <code>were</code>.', f:'There <u>were</u> two schools.'}
      ]},
      { type:'choice', name:'النفي', hint:'wasn’t / weren’t', qs:[
        {p:'There ___ a shopping mall then. (نفي)', o:['wasn’t','weren’t','isn’t','didn’t'], a:0, w:'مفرد ← <code>wasn’t</code>.', f:'There <u>wasn’t</u> a mall.'},
        {p:'There ___ any cars long ago. (نفي)', o:['weren’t','wasn’t','aren’t','didn’t'], a:0, w:'جمع ← <code>weren’t</code>.', f:'There <u>weren’t</u> any cars.'},
        {p:'There ___ a hospital in the town. (نفي مفرد)', o:['wasn’t','weren’t','isn’t','don’t'], a:0, w:'<code>wasn’t</code>.', f:'There <u>wasn’t</u> a hospital.'},
        {p:'There ___ many people. (نفي جمع)', o:['weren’t','wasn’t','aren’t','didn’t'], a:0, w:'<code>weren’t</code>.', f:'There <u>weren’t</u> many people.'}
      ]},
      { type:'choice', name:'السؤال', hint:'تقديم Was/Were', qs:[
        {p:'___ there a castle here?', o:['Was','Were','Did','Is'], a:0, w:'مفرد ← <code>Was</code>.', f:'<u>Was</u> there a castle?'},
        {p:'___ there any shops?', o:['Were','Was','Did','Are'], a:0, w:'جمع ← <code>Were</code>.', f:'<u>Were</u> there any shops?'},
        {p:'Was there a river? — Yes, there ___.', o:['was','were','did','is'], a:0, w:'الإجابة ← <code>was</code>.', f:'Yes, there <u>was</u>.'},
        {p:'Were there trees? — No, there ___.', o:['weren’t','wasn’t','didn’t','aren’t'], a:0, w:'الإجابة ← <code>weren’t</code>.', f:'No, there <u>weren’t</u>.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['There','were','a','castle','.'], bad:1, fix:'was', w:'مفرد ← <code>was</code>.', f:'There <u>was</u> a castle.'},
        {words:['There','was','many','trees','.'], bad:1, fix:'were', w:'جمع ← <code>were</code>.', f:'There <u>were</u> many trees.'},
        {words:['Was','there','any','shops','?'], bad:0, fix:'Were', w:'جمع ← <code>Were</code>.', f:'<u>Were</u> there any shops?'},
        {words:['There','weren’t','a','mall','.'], bad:1, fix:'wasn’t', w:'مفرد ← <code>wasn’t</code>.', f:'There <u>wasn’t</u> a mall.'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['There','was','an','old','castle','.'], w:'مفرد ← <code>was</code>.', f:'There was an old castle.'},
        {sol:['There','were','many','trees','.'], w:'جمع ← <code>were</code>.', f:'There were many trees.'},
        {sol:['Were','there','any','shops','?'], w:'السؤال بتقديم <code>Were</code>.', f:'Were there any shops?'},
        {sol:['There','wasn’t','a','shopping','mall','.'], w:'النفي المفرد.', f:"There wasn't a shopping mall."}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'There ___ a castle.', ask:'اختر', o:['was','were'], a:0, w:'مفرد.', f:'<u>was</u>'},
        {p:'There ___ many trees.', ask:'اختر', o:['were','was'], a:0, w:'جمع.', f:'<u>were</u>'},
        {p:'There ___ a mall. (نفي)', ask:'اختر', o:['wasn’t','weren’t'], a:0, w:'مفرد.', f:'<u>wasn’t</u>'},
        {p:'There ___ any cars. (نفي)', ask:'اختر', o:['weren’t','wasn’t'], a:0, w:'جمع.', f:'<u>weren’t</u>'},
        {p:'___ there a castle?', ask:'اختر', o:['Was','Were'], a:0, w:'مفرد.', f:'<u>Was</u>'},
        {p:'___ there any shops?', ask:'اختر', o:['Were','Was'], a:0, w:'جمع.', f:'<u>Were</u>'},
        {sol:['There','were','two','schools','.'], w:'جمع ← <code>were</code>.', f:'There were two schools.'},
        {p:'Was there a river? — Yes, there ___.', ask:'اختر', o:['was','were'], a:0, w:'إجابة.', f:'<u>was</u>'},
        {p:'There ___ a shop on this street.', ask:'اختر', o:['was','were'], a:0, w:'مفرد.', f:'<u>was</u>'}
      ]}
    ]
  };
})();
