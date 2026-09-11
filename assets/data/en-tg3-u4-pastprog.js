/* ============================================================
   درس: Grammar — Past Progressive (الماضي المستمرّ)
   الإنجليزية · السادس الابتدائي · ف١ · Top Goal 3 · Unit 4 (Professions)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG3_U4_PASTPROG'] = {
    id:'EN_TG3_U4_PASTPROG',
    title:'Grammar — Past Progressive',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'الماضي المستمرّ',
      intro:'<b>الماضي المستمرّ</b> يصفُ فعلًا كان <b>مستمرًّا</b> في لحظةٍ من الماضي. تركيبُه: <span class="tok-focus">was</span> / <span class="tok-focus">were</span> + الفعلَ مع <code>-ing</code>. نستعملُ <span class="tok-focus">was</span> مع (I/he/she/it)، و<span class="tok-focus">were</span> مع (you/we/they والجمع المنتهي بـ <span class="tok-plural">s</span>). وكثيرًا ما يأتي مع <code>when</code> + ماضٍ بسيط.',
      formula:'<span class="tok-focus">was</span> / <span class="tok-focus">were</span> + verb-ing',
      table:[['المفرد (I/he/she/it)','He <span class="tok-focus">was</span> working.'],['الجمع (you/we/they)','They <span class="tok-focus">were</span> working.'],['الشكل','was/were + <code>-ing</code>'],['مع when','I <span class="tok-focus">was</span> reading when he called.']],
      examples:['The firefighter<span class="tok-plural">s</span> <span class="tok-focus">were</span> helping people. (جمعٌ ← were)','The astronaut <span class="tok-focus">was</span> training for the mission. (مفردٌ ← was)'],
      trick:'مفردٌ (I/he/she/it) ← <span class="tok-focus">was</span> ، وجمعٌ ينتهي بـ <span class="tok-plural">s</span> (they/we) ← <span class="tok-focus">were</span> ، ثم الفعلُ + <span class="en">-ing</span>.'
    },
    stages:[
      { type:'choice', name:'was أم were؟', hint:'مفرد ← was · جمع ← were', qs:[
        {p:'He ___ working at the fire station.', ask:'اختر', o:['was','were'], a:0, w:'مفردٌ (He) ← <code>was</code>.', f:'He <u>was</u> working ...'},
        {p:'They ___ training all morning.', ask:'اختر', o:['were','was'], a:0, w:'جمعٌ (They) ← <code>were</code>.', f:'They <u>were</u> training ...'},
        {p:'The police officers ___ helping.', ask:'اختر', o:['were','was'], a:0, w:'جمعٌ (officers) ← <code>were</code>.', f:'... officers <u>were</u> helping.'},
        {p:'I ___ reading about space.', ask:'اختر', o:['was','were'], a:0, w:'<code>I</code> ← was.', f:'I <u>was</u> reading ...'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'was/were + verb-ing', qs:[
        {p:'She ___ designing a robot.', o:['was','were','are'], a:0, w:'مفردٌ (She) ← was.', f:'She <u>was</u> designing ...'},
        {p:'We ___ watching the launch.', o:['were','was','are'], a:0, w:'جمعٌ (We) ← were.', f:'We <u>were</u> watching ...'},
        {p:'The astronaut was ___ for the mission.', o:['training','train','trained'], a:0, w:'الماضي المستمرّ ← <code>-ing</code>.', f:'... was <u>training</u> ...'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['They','was','helping','people','.'], bad:1, fix:'were', w:'جمعٌ (They) ← <code>were</code>.', f:'They <u>were</u> helping people.'},
        {words:['He','were','working','.'], bad:1, fix:'was', w:'مفردٌ (He) ← <code>was</code>.', f:'He <u>was</u> working.'},
        {words:['She','was','design','a','rocket','.'], bad:2, fix:'designing', w:'الماضي المستمرّ ← <code>designing</code>.', f:'She was <u>designing</u> a rocket.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['He','was','working','at','night','.'], w:'<code>was + working (-ing)</code>.', f:'He was working at night.'},
        {sol:['They','were','training','for','hours','.'], w:'جمعٌ ← <code>were training</code>.', f:'They were training for hours.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'He ___ working.', ask:'اختر', o:['was','were'], a:0, w:'مفرد ← was.', f:'He <u>was</u> working.'},
        {p:'They ___ training.', ask:'اختر', o:['were','was'], a:0, w:'جمع ← were.', f:'They <u>were</u> training.'},
        {p:'الماضي المستمرّ تركيبُه:', ask:'اختر', o:['was/were + verb-ing','will + verb'], a:0, w:'<code>was/were + الفعل مع -ing</code>.', f:'← <u>was/were + verb-ing</u>'},
        {p:'The officers ___ helping.', ask:'اختر', o:['were','was'], a:0, w:'جمع ← were.', f:'... <u>were</u> helping.'},
        {p:'She was ___ a robot.', ask:'اختر', o:['designing','design'], a:0, w:'-ing.', f:'... <u>designing</u> ...'}
      ]}
    ]
  };
})();
