/* ============================================================
   درس: Grammar — Relative Clauses (who / which / that)
   الإنجليزية · السادس الابتدائي · ف١ · Top Goal 3 · Unit 4 (Professions)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG3_U4_RELATIVE'] = {
    id:'EN_TG3_U4_RELATIVE',
    title:'Grammar — Relative Clauses (who / which / that)',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'الأسماء الموصولة',
      intro:'الأسماءُ الموصولةُ تربطُ جملةً تصفُ اسمًا سبقها. نستعملُ <span class="tok-focus">who</span> للأشخاص، و<span class="tok-focus">which</span> للأشياء والحيوانات، و<span class="tok-focus">that</span> للاثنين معًا. مثال: «The firefighter <span class="tok-focus">who</span> saved the cat is brave» — <span class="tok-focus">who</span> تصفُ الشخص.',
      formula:'person + <span class="tok-focus">who</span> ... &nbsp;·&nbsp; thing + <span class="tok-focus">which</span> ... &nbsp;·&nbsp; <span class="tok-focus">that</span> = both',
      table:[['<span class="tok-focus">who</span>','للأشخاص: the doctor <span class="tok-focus">who</span> ...'],['<span class="tok-focus">which</span>','للأشياء: the rocket <span class="tok-focus">which</span> ...'],['<span class="tok-focus">that</span>','للأشخاص والأشياء معًا'],['وظيفتُها','تربطُ وصفًا بالاسم قبلها']],
      examples:['The astronaut <span class="tok-focus">who</span> flew to space is famous. (شخصٌ ← who)','The robot <span class="tok-focus">which</span> cleans the floor is new. (شيءٌ ← which)'],
      trick:'شخصٌ ← <span class="tok-focus">who</span> ، شيءٌ أو حيوانٌ ← <span class="tok-focus">which</span> ، و<span class="tok-focus">that</span> تصلحُ للاثنين.'
    },
    stages:[
      { type:'choice', name:'who أم which؟', hint:'شخص ← who · شيء ← which', qs:[
        {p:'The firefighter ___ saved the boy is brave.', ask:'اختر', o:['who','which'], a:0, w:'شخصٌ ← <code>who</code>.', f:'... firefighter <u>who</u> ...'},
        {p:'The rocket ___ launched today is huge.', ask:'اختر', o:['which','who'], a:0, w:'شيءٌ ← <code>which</code>.', f:'... rocket <u>which</u> ...'},
        {p:'The doctor ___ helped us is kind.', ask:'اختر', o:['who','which'], a:0, w:'شخصٌ ← <code>who</code>.', f:'... doctor <u>who</u> ...'},
        {p:'The satellite ___ orbits Earth is small.', ask:'اختر', o:['which','who'], a:0, w:'شيءٌ ← <code>which</code>.', f:'... satellite <u>which</u> ...'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'who للأشخاص · which للأشياء · that للاثنين', qs:[
        {p:'The police officer ___ caught the thief is here.', o:['who','which'], a:0, w:'شخصٌ ← who.', f:'... officer <u>who</u> ...'},
        {p:'The car ___ is red belongs to my dad.', o:['which','who'], a:0, w:'شيءٌ ← which.', f:'... car <u>which</u> ...'},
        {p:'A person ___ works with fire is a firefighter.', o:['who','which'], a:0, w:'شخصٌ ← who.', f:'A person <u>who</u> ...'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['The','doctor','which','helped','me','.'], bad:2, fix:'who', w:'شخصٌ ← <code>who</code> لا which.', f:'The doctor <u>who</u> helped me.'},
        {words:['The','rocket','who','is','fast','.'], bad:2, fix:'which', w:'شيءٌ ← <code>which</code> لا who.', f:'The rocket <u>which</u> is fast.'},
        {words:['The','pilot','which','flew','it','.'], bad:2, fix:'who', w:'الطيّارُ شخصٌ ← <code>who</code>.', f:'The pilot <u>who</u> flew it.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['The','astronaut','who','flew','is','famous','.'], w:'شخصٌ ← <code>who</code>.', f:'The astronaut who flew is famous.'},
        {sol:['The','robot','which','cleans','is','new','.'], w:'شيءٌ ← <code>which</code>.', f:'The robot which cleans is new.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'The doctor ___ helped us.', ask:'اختر', o:['who','which'], a:0, w:'شخص ← who.', f:'... <u>who</u> ...'},
        {p:'The rocket ___ launched today.', ask:'اختر', o:['which','who'], a:0, w:'شيء ← which.', f:'... <u>which</u> ...'},
        {p:'who تُستعمل مع:', ask:'اختر', o:['الأشخاص','الأشياء'], a:0, w:'الأشخاص.', f:'← <u>الأشخاص</u>'},
        {p:'which تُستعمل مع:', ask:'اختر', o:['الأشياء','الأشخاص'], a:0, w:'الأشياء والحيوانات.', f:'← <u>الأشياء</u>'},
        {p:'الكلمةُ التي تصلحُ للأشخاص والأشياء:', ask:'اختر', o:['that','who'], a:0, w:'<code>that</code>.', f:'← <u>that</u>'}
      ]}
    ]
  };
})();
