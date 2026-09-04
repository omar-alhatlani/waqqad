/* ============================================================
   Lesson: Relative Pronouns — who, that, which
   English · Super Goal 2 · Unit 3 (Who’s Who) · صفحة ٢٢
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U3_REL'] = {
    id:'EN_SG2_U3_REL',
    title:'Relative Pronouns',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'who · that · which',
      intro:'<b>الضمائر الموصولة</b> تضيف معلومةً عن اسمٍ سابق. نستعمل <code>who</code> أو <code>that</code> <b>للأشخاص</b>، و<code>that</code> أو <code>which</code> <b>للأشياء والحيوانات</b>. مثال: <code>The waiter who is serving the customers is friendly.</code>',
      table:[['who / that','للأشخاص (people)'],['that / which','للأشياء والحيوانات (things)'],['مثال','The factory that makes cars.']],
      trick:'شخصٌ ← <code>who</code>، وشيءٌ ← <code>which</code>، و<code>that</code> تصلح للاثنين. ضعِ الضميرَ الموصولَ مباشرةً بعد الاسم الذي يصفه.'
    },
    stages:[
      { type:'choice', name:'who أم which؟', hint:'شخص ← who · شيء ← which', qs:[
        {p:'The man ___ is teaching us is kind.', o:['who','which'], a:0, w:'شخص ← <code>who</code>.', f:'The man <u>who</u> is teaching…'},
        {p:'The factory ___ makes cars is big.', o:['which','who'], a:0, w:'شيء ← <code>which</code>.', f:'The factory <u>which</u> makes cars…'},
        {p:'I have a friend ___ speaks five languages.', o:['who','which'], a:0, w:'شخص ← <code>who</code>.', f:'a friend <u>who</u> speaks…'},
        {p:'This is the book ___ helped me.', o:['which','who'], a:0, w:'شيء ← <code>which</code>.', f:'the book <u>which</u> helped me.'},
        {p:'The doctor ___ works here is famous.', o:['who','which'], a:0, w:'شخص ← <code>who</code>.', f:'The doctor <u>who</u> works here…'}
      ]},
      { type:'gap', name:'that تصلح للاثنين', hint:'that للأشخاص والأشياء', qs:[
        {p:'The waiter ___ is serving us is friendly. (اختر الأنسب لشخص)', o:['who','which'], a:0, w:'للشخص <code>who</code> (وتصح <code>that</code>).', f:'The waiter <u>who</u>…'},
        {p:'A dog ___ barks a lot. (حيوان)', o:['that','who'], a:0, w:'للحيوان <code>that/which</code> لا <code>who</code>.', f:'A dog <u>that</u> barks…'},
        {p:'The car ___ is red is mine. (شيء)', o:['that','who'], a:0, w:'للشيء <code>that/which</code>.', f:'The car <u>that</u> is red…'},
        {p:'The teacher ___ helps students. (شخص)', o:['who','which'], a:0, w:'للشخص <code>who</code>.', f:'The teacher <u>who</u>…'},
        {p:'A machine ___ prints books. (شيء)', o:['that','who'], a:0, w:'للشيء <code>that/which</code>.', f:'A machine <u>that</u>…'}
      ]},
      { type:'choice', name:'شخص أم شيء؟', hint:'حدّد نوع الاسم الموصوف', qs:[
        {p:'“the pilot ___ flies the plane”', ask:'اختر', o:['who','which'], a:0, w:'الطيّار شخص ← who.', f:'the pilot <u>who</u>…'},
        {p:'“the plane ___ flies fast”', ask:'اختر', o:['which','who'], a:0, w:'الطائرة شيء ← which.', f:'the plane <u>which</u>…'},
        {p:'“the writer ___ wrote the story”', ask:'اختر', o:['who','which'], a:0, w:'الكاتب شخص ← who.', f:'the writer <u>who</u>…'},
        {p:'“the story ___ won a prize”', ask:'اختر', o:['which','who'], a:0, w:'القصة شيء ← which.', f:'the story <u>which</u>…'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الضمير الخاطئ', qs:[
        {words:['The','man','which','helps','us','.'], bad:2, fix:'who', w:'الشخص ← <code>who</code>.', f:'The man <u>who</u> helps us.'},
        {words:['The','factory','who','makes','cars','.'], bad:2, fix:'which/that', w:'الشيء ← <code>which/that</code>.', f:'The factory <u>which</u> makes cars.'},
        {words:['A','book','who','is','useful','.'], bad:2, fix:'which/that', w:'الشيء ← <code>which/that</code>.', f:'A book <u>which</u> is useful.'},
        {words:['The','doctor','which','works','here','.'], bad:2, fix:'who', w:'الشخص ← <code>who</code>.', f:'The doctor <u>who</u> works here.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'الاسم ثم الضمير الموصول ثم بقيّة الجملة', qs:[
        {sol:['The','man','who','helps','us','is','kind','.'], w:'شخص ← who.', f:'The man who helps us is kind.'},
        {sol:['The','factory','which','makes','cars','is','big','.'], w:'شيء ← which.', f:'The factory which makes cars is big.'},
        {sol:['I','have','a','friend','who','speaks','French','.'], w:'شخص ← who.', f:'I have a friend who speaks French.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'The man ___ teaches us.', ask:'اختر', o:['who','which'], a:0, w:'شخص.', f:'<u>who</u>.'},
        {p:'The factory ___ makes cars.', ask:'اختر', o:['which','who'], a:0, w:'شيء.', f:'<u>which</u>.'},
        {p:'who تُستعمل لـ:', ask:'اختر', o:['الأشخاص','الأشياء'], a:0, w:'للأشخاص.', f:'الأشخاص.'},
        {p:'which تُستعمل لـ:', ask:'اختر', o:['الأشياء','الأشخاص'], a:0, w:'للأشياء.', f:'الأشياء.'},
        {p:'The car ___ is red.', ask:'اختر', o:['that','who'], a:0, w:'شيء ← that.', f:'<u>that</u>.'},
        {sol:['The','man','who','helps','us','is','kind','.'], w:'شخص ← who.', f:'The man who helps us is kind.'},
        {p:'The doctor ___ works here.', ask:'اختر', o:['who','which'], a:0, w:'شخص.', f:'<u>who</u>.'},
        {p:'A dog ___ barks. (حيوان)', ask:'اختر', o:['that','who'], a:0, w:'حيوان ← that.', f:'<u>that</u>.'},
        {p:'that تصلح لـ:', ask:'اختر', o:['الأشخاص والأشياء','الأشخاص فقط'], a:0, w:'للاثنين.', f:'للاثنين.'}
      ]}
    ]
  };
})();
