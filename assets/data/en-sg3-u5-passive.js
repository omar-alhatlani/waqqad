/* ============================================================
   Lesson: The Passive (Simple Present, Present Perfect, Simple Past)
   English · Super Goal 3 · Unit 5 (Since When?) · صفحة ٥٧
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U5_PASSIVE'] = {
    id:'EN_SG3_U5_PASSIVE',
    title:'The Passive Voice',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'be + Past Participle',
      intro:'نستعمل <b>المبنيَّ للمجهول</b> للتركيز على الفعل لا على فاعله. نكوّنه بـ <code>be + التصريف الثالث</code>: المضارع (<code>is/are + p.p.</code>)، والتامّ (<code>has/have been + p.p.</code>)، والماضي (<code>was/were + p.p.</code>). ونذكر الفاعلَ بـ <code>by</code> عند الحاجة: <code>The telephone was invented by Bell</code>.',
      table:[['Simple Present','The Internet is used by millions.'],['Present Perfect','Our lives have been changed.'],['Simple Past','The phone was invented by Bell.'],['Agent','by + الفاعل (عند الحاجة)']],
      trick:'إذا كان الفاعلُ مجهولًا أو غيرَ مهمّ نحذف <code>by</code>: <code>My bike was stolen</code>. نذكره فقط إذا كان مهمًّا: <code>… by the boys</code>.'
    },
    stages:[
      { type:'choice', name:'زمن المبني للمجهول', hint:'is/was/has been + p.p.', qs:[
        {p:'English ___ all over the world. (present)', o:['is spoken','speaks','spoke','has spoke'], a:0, w:'مضارعٌ مجهول ← <code>is spoken</code>.', f:'English <u>is spoken</u> …'},
        {p:'The telephone ___ by Bell. (past)', o:['was invented','invented','is invented','invents'], a:0, w:'ماضٍ مجهول ← <code>was invented</code>.', f:'…<u>was invented</u> by Bell.'},
        {p:'Our lives ___ by technology. (present perfect)', o:['have been changed','changed','change','are changing'], a:0, w:'تامٌّ مجهول ← <code>have been changed</code>.', f:'…<u>have been changed</u>…'},
        {p:'These cars ___ in Germany. (present)', o:['are made','make','made','is made'], a:0, w:'<code>cars</code> جمع ← <code>are made</code>.', f:'…<u>are made</u> in Germany.'}
      ]},
      { type:'choice', name:'be الصحيح', hint:'مفرد/جمع وزمن', qs:[
        {p:'The window ___ broken. (past, singular)', o:['was','were','is','have'], a:0, w:'مفرد ماضٍ ← <code>was</code>.', f:'…<u>was</u> broken'},
        {p:'Many changes ___ made. (present perfect)', o:['have been','has been','was','is'], a:0, w:'جمعٌ تامّ ← <code>have been</code>.', f:'…<u>have been</u> made'},
        {p:'Soap ___ used for 5,000 years. (present perfect)', o:['has been','have been','was','is'], a:0, w:'مفردٌ تامّ ← <code>has been</code>.', f:'…<u>has been</u> used'},
        {p:'The documentary ___ in a desert. (past)', o:['was filmed','filmed','is filmed','films'], a:0, w:'ماضٍ مجهول ← <code>was filmed</code>.', f:'…<u>was filmed</u>…'}
      ]},
      { type:'choice', name:'by أم بلا', hint:'اذكر الفاعل عند الحاجة', qs:[
        {p:'A thief stole my bike → My bike ___ (الفاعل غير مهمّ).', o:['was stolen','was stolen by a thief','stole'], a:0, w:'الفاعلُ غيرُ مهمّ فنحذف <code>by</code>.', f:'My bike <u>was stolen</u>.'},
        {p:'The boys broke the window → The window was broken ___ (الفاعل مهمّ).', o:['by the boys','stole','broke'], a:0, w:'الفاعلُ مهمّ ← نذكره بـ <code>by</code>.', f:'…<u>by the boys</u>'},
        {p:'Al-Zahrawi wrote it → An encyclopedia ___ by Al-Zahrawi.', o:['was written','wrote','writes'], a:0, w:'ماضٍ مجهول.', f:'<u>was written</u> by Al-Zahrawi'},
        {p:'The passive puts focus on:', o:['the action','the writer','the time only'], a:0, w:'على الفعل لا الفاعل.', f:'the <u>action</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['English','is','speak','all','over','the','world','.'], bad:2, fix:'spoken', w:'التصريف الثالث ← <code>spoken</code>.', f:'is <u>spoken</u>'},
        {words:['The','phone','was','invent','by','Bell','.'], bad:3, fix:'invented', w:'التصريف الثالث ← <code>invented</code>.', f:'was <u>invented</u>'},
        {words:['These','cars','is','made','in','Germany','.'], bad:2, fix:'are', w:'<code>cars</code> جمع ← <code>are</code>.', f:'…<u>are</u> made'},
        {words:['Our','lives','have','changed','by','technology','.'], bad:3, fix:'been changed', w:'المجهول التامّ ← <code>have been changed</code>.', f:'…have <u>been changed</u>'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['The','telephone','was','invented','by','Bell','.'], w:'<code>was + p.p. + by</code>.', f:'The telephone was invented by Bell.'},
        {sol:['English','is','spoken','all','over','the','world','.'], w:'مضارعٌ مجهول.', f:'English is spoken all over the world.'},
        {sol:['My','bike','was','stolen','.'], w:'الفاعلُ محذوف.', f:'My bike was stolen.'},
        {sol:['Our','lives','have','been','changed','.'], w:'تامٌّ مجهول.', f:'Our lives have been changed.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'English ___ worldwide. (present)', ask:'اختر', o:['is spoken','speaks'], a:0, w:'مضارعٌ مجهول.', f:'<u>is spoken</u>'},
        {p:'The phone ___ by Bell. (past)', ask:'اختر', o:['was invented','invented'], a:0, w:'ماضٍ مجهول.', f:'<u>was invented</u>'},
        {p:'These cars ___ in Germany.', ask:'be', o:['are made','is made'], a:0, w:'جمع.', f:'<u>are made</u>'},
        {p:'Our lives ___ by tech.', ask:'اختر', o:['have been changed','changed'], a:0, w:'تامٌّ مجهول.', f:'<u>have been changed</u>'},
        {p:'My bike ___ (فاعل مجهول).', ask:'اختر', o:['was stolen','stole'], a:0, w:'مجهول بلا <code>by</code>.', f:'<u>was stolen</u>'},
        {p:'Soap ___ for 5,000 years.', ask:'be', o:['has been','have been'], a:0, w:'مفردٌ تامّ.', f:'<u>has been</u> used'},
        {sol:['The','window','was','broken','.'], w:'ماضٍ مجهول مفرد.', f:'The window was broken.'},
        {p:'The passive focuses on the ___.', ask:'اختر', o:['action','writer'], a:0, w:'الفعل.', f:'<u>action</u>'},
        {p:'The book was written ___ Al-Zahrawi.', ask:'أكمل', o:['by','with'], a:0, w:'الفاعل ← <code>by</code>.', f:'<u>by</u>'}
      ]}
    ]
  };
})();
