/* ============================================================
   Lesson: Relative Pronouns — who, that, which
   English · Super Goal 3 · Unit 9 (All Kinds of People) · صفحة ٩٦
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U9_RELATIVE'] = {
    id:'EN_SG3_U9_RELATIVE',
    title:'Relative Pronouns',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'who / that / which',
      intro:'تضيف <b>الجملُ الموصولة</b> معلومةً عن اسمٍ في الجملة الرئيسة. نستعمل <code>who</code> أو <code>that</code> <b>للأشخاص</b> (<code>the man who/that lives here</code>)، و<code>which</code> أو <code>that</code> <b>للأشياء والحيوانات</b> (<code>the book which/that I read</code>).',
      table:[['people','who / that'],['things / animals','which / that'],['example (person)','a teacher who is kind'],['example (thing)','a car that is fast']],
      trick:'<code>who</code> للأشخاص فقط، و<code>which</code> للأشياء فقط، و<code>that</code> تصلح للاثنين. اربطِ الاسمَ مباشرةً بالضمير الموصول: <code>the person who…</code>'
    },
    stages:[
      { type:'choice', name:'who للأشخاص', hint:'الأشخاص', qs:[
        {p:'A person ___ helps others is generous.', o:['who','which','where','what'], a:0, w:'أشخاص ← <code>who</code>.', f:'a person <u>who</u> helps…'},
        {p:'The man ___ lives next door is a doctor.', o:['who','which','when','whose'], a:0, w:'<code>who</code>.', f:'the man <u>who</u> lives…'},
        {p:'She is the teacher ___ teaches us math.', o:['who','which','where','why'], a:0, w:'<code>who</code>.', f:'the teacher <u>who</u> teaches…'},
        {p:'For people, we use who or:', o:['that','which','where'], a:0, w:'<code>that</code> تصلح أيضًا.', f:'<u>that</u>'}
      ]},
      { type:'choice', name:'which للأشياء', hint:'الأشياء والحيوانات', qs:[
        {p:'The book ___ I bought is interesting.', o:['which','who','where','when'], a:0, w:'أشياء ← <code>which</code>.', f:'the book <u>which</u> I bought'},
        {p:'A car ___ is electric is quiet.', o:['which','who','whose','why'], a:0, w:'<code>which</code>.', f:'a car <u>which</u> is electric'},
        {p:'The dog ___ barks all night is loud.', o:['that','who','where','when'], a:0, w:'الحيوان ← <code>that/which</code>.', f:'the dog <u>that</u> barks…'},
        {p:'For things, we use which or:', o:['that','who','where'], a:0, w:'<code>that</code>.', f:'<u>that</u>'}
      ]},
      { type:'choice', name:'اختر الموصول', hint:'شخص أم شيء؟', qs:[
        {p:'The idea ___ he had was simple.', o:['which','who','where'], a:0, w:'فكرةٌ (شيء) ← <code>which</code>.', f:'the idea <u>which</u> he had'},
        {p:'Muhammad Yunus is a man ___ helped the poor.', o:['who','which','where'], a:0, w:'شخص ← <code>who</code>.', f:'a man <u>who</u> helped…'},
        {p:'The bank ___ he founded is famous.', o:['which','who','when'], a:0, w:'بنك (شيء) ← <code>which</code>.', f:'the bank <u>which</u> he founded'},
        {p:'A word that works for both people and things:', o:['that','who','which'], a:0, w:'<code>that</code>.', f:'<u>that</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['The','man','which','lives','here','is','kind','.'], bad:2, fix:'who', w:'الأشخاص ← <code>who</code>.', f:'The man <u>who</u> lives here…'},
        {words:['The','book','who','I','read','was','good','.'], bad:2, fix:'which', w:'الأشياء ← <code>which</code>.', f:'The book <u>which</u> I read…'},
        {words:['A','person','which','helps','others','.'], bad:2, fix:'who', w:'<code>who</code> للأشخاص.', f:'A person <u>who</u> helps others.'},
        {words:['A','car','who','is','fast','.'], bad:2, fix:'which/that', w:'الأشياء ← <code>which/that</code>.', f:'A car <u>which</u> is fast.'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['The','man','who','lives','here','is','kind','.'], w:'<code>who</code> للأشخاص.', f:'The man who lives here is kind.'},
        {sol:['The','book','which','I','read','was','good','.'], w:'<code>which</code> للأشياء.', f:'The book which I read was good.'},
        {sol:['She','is','a','teacher','who','helps','us','.'], w:'<code>who</code>.', f:'She is a teacher who helps us.'},
        {sol:['A','car','that','is','electric','is','quiet','.'], w:'<code>that</code> للأشياء.', f:'A car that is electric is quiet.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'A person ___ helps others.', ask:'اختر', o:['who','which'], a:0, w:'أشخاص.', f:'<u>who</u>'},
        {p:'The book ___ I bought.', ask:'اختر', o:['which','who'], a:0, w:'أشياء.', f:'<u>which</u>'},
        {p:'The man ___ lives here.', ask:'اختر', o:['who','which'], a:0, w:'أشخاص.', f:'<u>who</u>'},
        {p:'A car ___ is electric.', ask:'اختر', o:['which','who'], a:0, w:'أشياء.', f:'<u>which</u>'},
        {p:'For people:', ask:'اختر', o:['who','which'], a:0, w:'<code>who</code>.', f:'<u>who</u>'},
        {p:'For things:', ask:'اختر', o:['which','who'], a:0, w:'<code>which</code>.', f:'<u>which</u>'},
        {sol:['The','man','who','lives','here','.'], w:'<code>who</code>.', f:'The man who lives here.'},
        {p:'Works for both:', ask:'اختر', o:['that','who'], a:0, w:'<code>that</code>.', f:'<u>that</u>'},
        {p:'The bank ___ he founded.', ask:'اختر', o:['which','who'], a:0, w:'شيء.', f:'<u>which</u>'}
      ]}
    ]
  };
})();
