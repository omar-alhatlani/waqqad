/* ============================================================
   Lesson: Vocabulary — Jobs
   English · Super Goal 1 · Unit 9 (What Do You Do?) · صفحات ٧٨–٨١
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U9_VOCAB'] = {
    id:'EN_SG1_U9_VOCAB',
    title:'Vocabulary — Jobs',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'Jobs & Workplaces',
      intro:'مفرداتُ المهن: <code>doctor</code> طبيب، <code>teacher</code> معلّم، <code>reporter</code> مراسِل، <code>bus driver</code> سائق حافلة، <code>salesperson</code> بائع، <code>carpenter</code> نجّار، <code>chef</code> طاهٍ، <code>cyclist</code> دراج، <code>cameraman</code> مصوّر. ونقول أين يعمل كلٌّ: <code>A doctor works in a hospital</code>.',
      table:[['doctor','طبيب — hospital/clinic'],['reporter','مراسِل — newspaper'],['carpenter','نجّار — makes furniture'],['chef','طاهٍ — restaurant'],['salesperson','بائع — store']],
      trick:'كثيرٌ من أسماء المهن تنتهي بـ <code>-er/-or</code>: <code>teacher, driver, doctor, reporter</code>. وبعضُها مركّب: <code>bus driver</code>, <code>salesperson</code>.'
    },
    stages:[
      { type:'choice', name:'المعنى', hint:'اختر المهنة الصحيحة', qs:[
        {p:'A person who treats sick people is a:', o:['doctor','driver','chef'], a:0, w:'الطبيب.', f:'<u>doctor</u>'},
        {p:'A person who cooks in a restaurant is a:', o:['chef','carpenter','reporter'], a:0, w:'الطاهي.', f:'<u>chef</u>'},
        {p:'A person who makes furniture is a:', o:['carpenter','cyclist','teacher'], a:0, w:'النجّار.', f:'<u>carpenter</u>'},
        {p:'A person who writes for a newspaper is a:', o:['reporter','doctor','driver'], a:0, w:'المراسِل.', f:'<u>reporter</u>'},
        {p:'A person who sells things in a store is a:', o:['salesperson','chef','pilot'], a:0, w:'البائع.', f:'<u>salesperson</u>'}
      ]},
      { type:'gap', name:'أين يعمل؟', hint:'اختر مكان العمل', qs:[
        {p:'A doctor works in a ___.', o:['hospital','store','field'], a:0, w:'المستشفى.', f:'a <u>hospital</u>'},
        {p:'A chef works in a ___.', o:['restaurant','bank','park'], a:0, w:'المطعم.', f:'a <u>restaurant</u>'},
        {p:'A reporter works for a ___.', o:['newspaper','farm','garage'], a:0, w:'الصحيفة.', f:'a <u>newspaper</u>'},
        {p:'A salesperson works in a ___.', o:['store','clinic','stadium'], a:0, w:'المتجر.', f:'a <u>store</u>'},
        {p:'A bus driver ___ a bus.', o:['drives','flies','cooks'], a:0, w:'يقود.', f:'<u>drives</u> a bus'}
      ]},
      { type:'choice', name:'الفعل المناسب', hint:'ماذا يفعل كلٌّ؟', qs:[
        {p:'A cyclist ___ for a team.', o:['cycles','cooks','writes'], a:0, w:'يركب الدراجة.', f:'<u>cycles</u>'},
        {p:'A carpenter ___ furniture.', o:['makes','sells','drives'], a:0, w:'يصنع.', f:'<u>makes</u>'},
        {p:'A cameraman ___ the news.', o:['films','eats','teaches'], a:0, w:'يصوّر.', f:'<u>films</u>'},
        {p:'A teacher works in a ___.', o:['school','hospital','restaurant'], a:0, w:'المدرسة.', f:'a <u>school</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['A','chef','works','in','a','hospital','.'], bad:5, fix:'restaurant', w:'الطاهي في المطعم.', f:'…in a <u>restaurant</u>.'},
        {words:['A','carpenter','sells','furniture','.'], bad:2, fix:'makes', w:'النجّار يصنع.', f:'A carpenter <u>makes</u> furniture.'},
        {words:['A','doctor','works','in','a','store','.'], bad:5, fix:'hospital', w:'الطبيب في المستشفى.', f:'…in a <u>hospital</u>.'},
        {words:['A','reporter','writes','for','a','farm','.'], bad:5, fix:'newspaper', w:'المراسِل للصحيفة.', f:'…for a <u>newspaper</u>.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'treats sick people =', ask:'اختر', o:['doctor','chef'], a:0, w:'طبيب.', f:'<u>doctor</u>'},
        {p:'cooks in a restaurant =', ask:'اختر', o:['chef','driver'], a:0, w:'طاهٍ.', f:'<u>chef</u>'},
        {p:'makes furniture =', ask:'اختر', o:['carpenter','reporter'], a:0, w:'نجّار.', f:'<u>carpenter</u>'},
        {p:'writes for a newspaper =', ask:'اختر', o:['reporter','pilot'], a:0, w:'مراسِل.', f:'<u>reporter</u>'},
        {p:'A doctor works in a ___.', ask:'أكمل', o:['hospital','store'], a:0, w:'مستشفى.', f:'<u>hospital</u>'},
        {p:'A chef works in a ___.', ask:'أكمل', o:['restaurant','bank'], a:0, w:'مطعم.', f:'<u>restaurant</u>'},
        {p:'A cyclist ___ for a team.', ask:'أكمل', o:['cycles','films'], a:0, w:'يركب الدراجة.', f:'<u>cycles</u>'},
        {p:'sells things in a store =', ask:'اختر', o:['salesperson','carpenter'], a:0, w:'بائع.', f:'<u>salesperson</u>'},
        {p:'A cameraman ___ the news.', ask:'أكمل', o:['films','sells'], a:0, w:'يصوّر.', f:'<u>films</u>'}
      ]}
    ]
  };
})();
