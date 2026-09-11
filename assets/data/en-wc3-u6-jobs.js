/* ============================================================
   درس: Grammar — Jobs: He/She is a … & a/an
   الإنجليزية · الثالث الابتدائي · ف١ · We Can! 3 · Unit 6 (Jobs)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب المحفوظ).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_WC3_U6_JOBS'] = {
    id:'EN_WC3_U6_JOBS',
    title:'Grammar — Jobs & a/an',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'ما مِهنتُه؟',
      intro:'نصفُ مِهنةَ شخصٍ بـ <code>He/She <span class="tok-focus">is</span> a …</code>. ونستعملُ <span class="tok-focus">a</span> قبلَ الكلمةِ التي تبدأُ بصوتِ حرفٍ ساكن (a doctor)، و<span class="tok-focus">an</span> قبلَ الكلمةِ التي تبدأُ بصوتِ حرفٍ متحرّك (a, e, i, o, u): <code>an engineer</code>. وللسؤال: <code>What does he do?</code>',
      formula:'He/She <span class="tok-focus">is</span> + <span class="tok-focus">a/an</span> + job',
      table:[['a','a doctor · a nurse · a pilot'],['an','an engineer · an astronaut'],['السؤال','What does she do?'],['الجواب','She is a teacher.']],
      examples:['My father <span class="tok-focus">is</span> <span class="tok-focus">a</span> doctor.','My sister <span class="tok-focus">is</span> <span class="tok-focus">an</span> engineer.'],
      trick:'صوتٌ متحرّكٌ في أوّلِ الكلمة ← <span class="tok-focus">an</span> (an engineer)، وإلّا ← <span class="tok-focus">a</span> (a pilot).'
    },
    stages:[
      { type:'choice', name:'a أم an؟', hint:'صوتٌ متحرّك ← an', qs:[
        {p:'He is ___ doctor.', o:['a','an'], a:0, w:'يبدأُ بساكن ← a.', f:'He is <u>a</u> doctor.'},
        {p:'She is ___ engineer.', o:['an','a'], a:0, w:'يبدأُ بمتحرّك (e) ← an.', f:'She is <u>an</u> engineer.'},
        {p:'He is ___ pilot.', o:['a','an'], a:0, w:'يبدأُ بساكن ← a.', f:'He is <u>a</u> pilot.'},
        {p:'She is ___ astronaut.', o:['an','a'], a:0, w:'يبدأُ بمتحرّك (a) ← an.', f:'She is <u>an</u> astronaut.'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'is + a/an + مهنة', qs:[
        {p:'My mother ___ a teacher.', o:['is','are','am'], a:0, w:'مفردٌ ← is.', f:'My mother <u>is</u> a teacher.'},
        {p:'He is ___ nurse.', o:['a','an'], a:0, w:'يبدأُ بساكن ← a.', f:'He is <u>a</u> nurse.'},
        {p:'She is an ___ .', o:['architect','doctor','pilot'], a:0, w:'بعد an كلمةٌ بصوتٍ متحرّك ← architect.', f:'She is an <u>architect</u>.'}
      ]},
      { type:'choice', name:'اختر الصواب', hint:'انظرْ أوّلَ صوتٍ في المهنة', qs:[
        {p:'My uncle is ___ cook.', ask:'اختر', o:['a','an'], a:0, w:'يبدأُ بساكن ← a.', f:'... is <u>a</u> cook.'},
        {p:'What ___ he do? — He is a pilot.', ask:'اختر', o:['does','do'], a:0, w:'مع he ← does.', f:'What <u>does</u> he do?'},
        {p:'She is ___ astronaut.', ask:'اختر', o:['an','a'], a:0, w:'يبدأُ بمتحرّك ← an.', f:'She is <u>an</u> astronaut.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['He','is','an','doctor','.'], bad:2, fix:'a', w:'يبدأُ بساكن ← a.', f:'He is <u>a</u> doctor.'},
        {words:['She','is','a','engineer','.'], bad:2, fix:'an', w:'يبدأُ بمتحرّك ← an.', f:'She is <u>an</u> engineer.'},
        {words:['My','father','are','a','pilot','.'], bad:2, fix:'is', w:'مفردٌ ← is.', f:'My father <u>is</u> a pilot.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب', qs:[
        {sol:['He','is','a','doctor','.'], w:'is + a + مهنة.', f:'He is a doctor.'},
        {sol:['She','is','an','engineer','.'], w:'صوتٌ متحرّك ← an.', f:'She is an engineer.'},
        {sol:['What','does','he','do','?'], w:'سؤالُ المهنة.', f:'What does he do?'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'He is ___ teacher.', ask:'اختر', o:['a','an'], a:0, w:'يبدأُ بساكن ← a.', f:'He is <u>a</u> teacher.'},
        {p:'She is ___ astronaut.', ask:'اختر', o:['an','a'], a:0, w:'يبدأُ بمتحرّك ← an.', f:'She is <u>an</u> astronaut.'},
        {p:'My mother ___ a nurse.', ask:'اختر', o:['is','are'], a:0, w:'مفردٌ ← is.', f:'My mother <u>is</u> a nurse.'},
        {p:'قبلَ الكلمةِ ذاتِ الصوتِ المتحرّك نستعمل:', ask:'اختر', o:['an','a'], a:0, w:'an.', f:'← <u>an</u>'},
        {p:'What ___ she do?', ask:'اختر', o:['does','do'], a:0, w:'مع she ← does.', f:'What <u>does</u> she do?'}
      ]}
    ]
  };
})();
