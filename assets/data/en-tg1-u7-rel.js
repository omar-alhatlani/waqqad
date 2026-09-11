/* ============================================================
   درس: Grammar — Relative clauses: who, which, that, where
   الإنجليزية · الرابع الابتدائي · ف١ · Top Goal 1 · Unit 7 (Wildlife)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب المحفوظ).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG1_U7_REL'] = {
    id:'EN_TG1_U7_REL',
    title:'Grammar — Relative clauses',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'who · which · that · where',
      intro:'نصفُ الاسمَ بجملةٍ موصولة: <span class="tok-focus">who</span> للعاقل (الناس) ، <span class="tok-focus">which</span> و<span class="tok-focus">that</span> لغيرِ العاقلِ (الأشياءِ والحيوانات) ، <span class="tok-focus">where</span> للمكان. تأتي الأداةُ <b>بعدَ الاسمِ</b> الذي تصفُه.',
      formula:'noun + <span class="tok-focus">who / which / that / where</span> + …',
      table:[['<span class="tok-focus">who</span>','للناس — the vet <span class="tok-focus">who</span> works here'],['<span class="tok-focus">which/that</span>','للأشياء/الحيوان — the lion <span class="tok-focus">that</span> roars'],['<span class="tok-focus">where</span>','للمكان — the zoo <span class="tok-focus">where</span> pandas live']],
      examples:['That’s the vet <span class="tok-focus">who</span> works in the zoo.','This is the tiger <span class="tok-focus">that</span> makes me feel frightened.'],
      trick:'ناسٌ؟ <span class="tok-focus">who</span>. أشياءُ/حيوانٌ؟ <span class="tok-focus">which/that</span>. مكانٌ؟ <span class="tok-focus">where</span>.'
    },
    stages:[
      { type:'choice', name:'أيُّ أداة؟', hint:'مَن؟ ما؟ أين؟', qs:[
        {p:'للناس نستعمل:', ask:'اختر', o:['who','where'], a:0, w:'<code>who</code> للعاقل.', f:'← <u>who</u>'},
        {p:'للحيوانات والأشياء نستعمل:', ask:'اختر', o:['which / that','who'], a:0, w:'<code>which/that</code> لغيرِ العاقل.', f:'← <u>which / that</u>'},
        {p:'للمكان نستعمل:', ask:'اختر', o:['where','who'], a:0, w:'<code>where</code> للمكان.', f:'← <u>where</u>'},
        {p:'تأتي الأداةُ الموصولةُ:', ask:'اختر', o:['بعد الاسم','قبل الجملة'], a:0, w:'بعدَ الاسمِ الموصوف.', f:'← <u>بعد الاسم</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'حسبَ نوعِ الاسم', qs:[
        {p:'That’s the vet ___ helps animals.', o:['who','which','where'], a:0, w:'شخصٌ ← <code>who</code>.', f:'... the vet <u>who</u> helps animals.'},
        {p:'This is the animal ___ lives in the desert.', o:['that','who','where'], a:0, w:'حيوانٌ ← <code>that</code>.', f:'... the animal <u>that</u> lives ...'},
        {p:'A zoo is a place ___ we see wild animals.', o:['where','who','which'], a:0, w:'مكانٌ ← <code>where</code>.', f:'... a place <u>where</u> we see animals.'}
      ]},
      { type:'choice', name:'اختر الصواب', hint:'ناس/شيء/مكان', qs:[
        {p:'The girl ___ feeds the cat is my sister.', ask:'اختر', o:['who','which'], a:0, w:'شخصٌ ← who.', f:'The girl <u>who</u> feeds the cat ...'},
        {p:'The bird ___ sings is a parrot.', ask:'اختر', o:['that','who'], a:0, w:'حيوانٌ ← that.', f:'The bird <u>that</u> sings ...'},
        {p:'This is the forest ___ lions live.', ask:'اختر', o:['where','which'], a:0, w:'مكانٌ ← where.', f:'... the forest <u>where</u> lions live.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الأداة الخاطئة', qs:[
        {words:['The','man','which','works','here','is','kind','.'], bad:2, fix:'who', w:'للناس ← <code>who</code>.', f:'The man <u>who</u> works here is kind.'},
        {words:['A','lion','who','lives','in','Africa','.'], bad:2, fix:'that', w:'للحيوان ← <code>that/which</code>.', f:'A lion <u>that</u> lives in Africa.'},
        {words:['This','is','the','zoo','which','pandas','live','.'], bad:4, fix:'where', w:'للمكان ← <code>where</code>.', f:'... the zoo <u>where</u> pandas live.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب', qs:[
        {sol:['That’s','the','vet','who','works','here','.'], w:'شخصٌ ← who.', f:'That’s the vet who works here.'},
        {sol:['This','is','the','tiger','that','roars','.'], w:'حيوانٌ ← that.', f:'This is the tiger that roars.'},
        {sol:['A','zoo','is','where','animals','live','.'], w:'مكانٌ ← where.', f:'A zoo is where animals live.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'للناس نستعمل:', ask:'اختر', o:['who','where'], a:0, w:'who.', f:'← <u>who</u>'},
        {p:'The dog ___ barks is friendly.', ask:'اختر', o:['that','who'], a:0, w:'حيوانٌ ← that.', f:'The dog <u>that</u> barks ...'},
        {p:'This is the park ___ we play.', ask:'اختر', o:['where','which'], a:0, w:'مكانٌ ← where.', f:'... the park <u>where</u> we play.'},
        {p:'للأشياء نستعمل:', ask:'اختر', o:['which / that','who'], a:0, w:'which/that.', f:'← <u>which / that</u>'},
        {p:'The teacher ___ helps us is patient.', ask:'اختر', o:['who','which'], a:0, w:'شخصٌ ← who.', f:'The teacher <u>who</u> helps us ...'}
      ]}
    ]
  };
})();
