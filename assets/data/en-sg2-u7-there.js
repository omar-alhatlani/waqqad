/* ============================================================
   Lesson: There Was / There Were + Ago
   English · Super Goal 2 · Unit 7 (What Happened?) · صفحة ٥٨
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U7_THERE'] = {
    id:'EN_SG2_U7_THERE',
    title:'There Was / There Were + Ago',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'There was / There were · ago',
      intro:'نستعمل <code>There was</code> مع <b>المفرد</b> و<code>There were</code> مع <b>الجمع</b> للحديث عن وجود شيءٍ في الماضي. النفي: <code>There wasn’t / There weren’t</code>. و<code>ago</code> تعني «مضى» وتأتي <b>بعد</b> المدّة: <code>10 minutes ago</code> (قبل ١٠ دقائق).',
      table:[['There was','مفرد: There was an accident.'],['There were','جمع: There were three cars.'],['Negative','wasn’t / weren’t'],['… ago','قبل (بعد المدّة): a week ago']],
      trick:'<code>was</code> للمفرد و<code>were</code> للجمع. و<code>ago</code> تأتي <b>بعد</b> الزمن: <code>two days ago</code> = قبل يومين.'
    },
    stages:[
      { type:'choice', name:'was أم were؟', hint:'مفرد was · جمع were', qs:[
        {p:'There ___ an accident.', o:['was','were'], a:0, w:'مفرد ← <code>was</code>.', f:'There <u>was</u> an accident.'},
        {p:'There ___ three cars.', o:['were','was'], a:0, w:'جمع ← <code>were</code>.', f:'There <u>were</u> three cars.'},
        {p:'There ___ a traffic light.', o:['was','were'], a:0, w:'مفرد ← <code>was</code>.', f:'There <u>was</u> a traffic light.'},
        {p:'There ___ many people.', o:['were','was'], a:0, w:'جمع ← <code>were</code>.', f:'There <u>were</u> many people.'},
        {p:'There ___ a witness at the corner.', o:['was','were'], a:0, w:'مفرد ← <code>was</code>.', f:'There <u>was</u> a witness.'}
      ]},
      { type:'gap', name:'النفي', hint:'wasn’t / weren’t', qs:[
        {p:'There ___ a traffic light. (نفي)', o:['wasn’t','weren’t'], a:0, w:'مفرد ← <code>wasn’t</code>.', f:'There <u>wasn’t</u>…'},
        {p:'There ___ many cars. (نفي)', o:['weren’t','wasn’t'], a:0, w:'جمع ← <code>weren’t</code>.', f:'There <u>weren’t</u>…'},
        {p:'There ___ any injuries. (نفي)', o:['weren’t','wasn’t'], a:0, w:'<code>injuries</code> جمع ← <code>weren’t</code>.', f:'There <u>weren’t</u>…'},
        {p:'There ___ enough time. (نفي)', o:['wasn’t','weren’t'], a:0, w:'<code>time</code> غير معدود/مفرد ← <code>wasn’t</code>.', f:'There <u>wasn’t</u>…'},
        {p:'There ___ a doctor there. (نفي)', o:['wasn’t','weren’t'], a:0, w:'مفرد ← <code>wasn’t</code>.', f:'There <u>wasn’t</u>…'}
      ]},
      { type:'choice', name:'ago', hint:'ago تأتي بعد المدّة', qs:[
        {p:'The accident happened 10 minutes ___.', ask:'اختر', o:['ago','before','since'], a:0, w:'<code>10 minutes ago</code>.', f:'10 minutes <u>ago</u>.'},
        {p:'I lost my phone a week ___.', ask:'اختر', o:['ago','later','next'], a:0, w:'<code>a week ago</code>.', f:'a week <u>ago</u>.'},
        {p:'“two days ago” means:', ask:'اختر', o:['قبل يومين','بعد يومين','كلّ يومين'], a:0, w:'<code>ago</code> = مضى/قبل.', f:'قبل يومين.'},
        {p:'They arrived an hour ___.', ask:'اختر', o:['ago','ahead','on'], a:0, w:'<code>an hour ago</code>.', f:'an hour <u>ago</u>.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['There','were','an','accident','.'], bad:1, fix:'was', w:'مفرد ← <code>was</code>.', f:'There <u>was</u> an accident.'},
        {words:['There','was','three','cars','.'], bad:1, fix:'were', w:'جمع ← <code>were</code>.', f:'There <u>were</u> three cars.'},
        {words:['It','happened','ago','ten','minutes','.'], bad:2, fix:'بعد المدّة', w:'<code>ago</code> تأتي بعد الزمن: <code>ten minutes ago</code>.', f:'ten minutes <u>ago</u>.'},
        {words:['There','weren’t','a','light','.'], bad:1, fix:'wasn’t', w:'مفرد ← <code>wasn’t</code>.', f:'There <u>wasn’t</u> a light.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['There','was','an','accident','.'], w:'مفرد ← was.', f:'There was an accident.'},
        {sol:['There','were','many','cars','.'], w:'جمع ← were.', f:'There were many cars.'},
        {sol:['It','happened','ten','minutes','ago','.'], w:'ago بعد المدّة.', f:'It happened ten minutes ago.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'There ___ an accident.', ask:'اختر', o:['was','were'], a:0, w:'مفرد.', f:'<u>was</u>.'},
        {p:'There ___ three cars.', ask:'اختر', o:['were','was'], a:0, w:'جمع.', f:'<u>were</u>.'},
        {p:'It happened 10 minutes ___.', ask:'اختر', o:['ago','before'], a:0, w:'ago.', f:'<u>ago</u>.'},
        {p:'There ___ a light. (نفي)', ask:'اختر', o:['wasn’t','weren’t'], a:0, w:'مفرد.', f:'<u>wasn’t</u>.'},
        {p:'“two days ago” =', ask:'اختر', o:['قبل يومين','بعد يومين'], a:0, w:'مضى.', f:'قبل يومين.'},
        {sol:['There','was','an','accident','.'], w:'مفرد ← was.', f:'There was an accident.'},
        {p:'There ___ many people. (نفي)', ask:'اختر', o:['weren’t','wasn’t'], a:0, w:'جمع.', f:'<u>weren’t</u>.'},
        {p:'There ___ a witness.', ask:'اختر', o:['was','were'], a:0, w:'مفرد.', f:'<u>was</u>.'},
        {p:'I lost it a week ___.', ask:'اختر', o:['ago','later'], a:0, w:'ago.', f:'<u>ago</u>.'}
      ]}
    ]
  };
})();
