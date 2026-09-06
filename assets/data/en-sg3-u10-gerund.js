/* ============================================================
   Lesson: Verb + Gerund & Two-Word Verbs
   English · Super Goal 3 · Unit 10 (Who Used My Toothpaste?) · صفحة ١١٢
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U10_GERUND'] = {
    id:'EN_SG3_U10_GERUND',
    title:'Verb + Gerund & Two-Word Verbs',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'gerund (-ing) · phrasal verbs',
      intro:'بعد أفعالٍ مثل <code>enjoy, finish, stop, mind, keep, avoid</code> يأتي <b>الاسم الفعليّ</b> (<code>verb + -ing</code>): <code>Stop leaving your clothes around</code>. و<b>الأفعالُ ثنائية الكلمة</b> (phrasal verbs) = فعلٌ + حرف (<code>put away, take out, pick up</code>)، وضميرُ المفعول يأتي <b>بينهما</b>: <code>put it away</code> لا <code>put away it</code>.',
      table:[['verb + gerund','enjoy playing, finish eating'],['stop + -ing','Stop making a mess.'],['two-word verb','put away, take out, pick up'],['pronoun','put it away (بين الفعل والحرف)']],
      trick:'بعد <code>enjoy/finish/stop/mind/keep</code> ← <code>-ing</code>. وفي الأفعال ثنائية الكلمة يقع ضميرُ المفعول <b>بين</b> الفعل والحرف: <code>take it out</code>.'
    },
    stages:[
      { type:'choice', name:'verb + gerund', hint:'-ing بعد enjoy/finish/stop', qs:[
        {p:'Please stop ___ your clothes around.', o:['leaving','leave','to leave','left'], a:0, w:'بعد <code>stop</code> ← <code>-ing</code>.', f:'stop <u>leaving</u>'},
        {p:'I enjoy ___ video games.', o:['playing','play','to play','played'], a:0, w:'بعد <code>enjoy</code> ← <code>-ing</code>.', f:'enjoy <u>playing</u>'},
        {p:'He finished ___ the dishes.', o:['doing','do','to do','did'], a:0, w:'<code>-ing</code>.', f:'finished <u>doing</u>'},
        {p:'Would you mind ___ the TV down?', o:['turning','turn','to turn','turned'], a:0, w:'بعد <code>mind</code> ← <code>-ing</code>.', f:'mind <u>turning</u>'}
      ]},
      { type:'choice', name:'الأفعال ثنائية الكلمة', hint:'verb + particle', qs:[
        {p:'Please ___ your toys after playing.', o:['put away','put','away put','putting'], a:0, w:'<code>put away</code>.', f:'<u>put away</u> your toys'},
        {p:'Can you ___ the trash?', o:['take out','out take','take','taking'], a:0, w:'<code>take out</code>.', f:'<u>take out</u> the trash'},
        {p:'He didn’t ___ his things after using them.', o:['put back','back put','put','putting back'], a:0, w:'<code>put back</code>.', f:"didn’t <u>put back</u>…"},
        {p:'She needs to ___ her room.', o:['clean up','up clean','cleaning','clean'], a:0, w:'<code>clean up</code>.', f:'<u>clean up</u> her room'}
      ]},
      { type:'choice', name:'موضع الضمير', hint:'بين الفعل والحرف', qs:[
        {p:'Have you done the dishes? — Yes, I’ve done ___.', o:['them','it away','them away','away them'], a:0, w:'الضميرُ بعد الفعل.', f:"…I’ve done <u>them</u>."},
        {p:'The trash is full. Please take ___ out.', o:['it','out it','it away','away'], a:0, w:'الضميرُ بين الفعل والحرف.', f:'take <u>it</u> out'},
        {p:'Which is correct?', o:['put it away','put away it','away put it'], a:0, w:'<code>put it away</code>.', f:'<u>put it away</u>'},
        {p:'With a pronoun, the particle goes:', o:['after the pronoun','before the pronoun','is dropped'], a:0, w:'بعد الضمير.', f:'<u>after the pronoun</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['Please','stop','to','leave','a','mess','.'], bad:2, fix:'leaving', w:'بعد <code>stop</code> ← <code>-ing</code>.', f:'stop <u>leaving</u> a mess'},
        {words:['I','enjoy','to','play','games','.'], bad:2, fix:'playing', w:'بعد <code>enjoy</code> ← <code>-ing</code>.', f:'enjoy <u>playing</u> games'},
        {words:['Please','put','away','it','.'], bad:3, fix:'الترتيب: put it away', w:'الضميرُ بين الفعل والحرف.', f:'put <u>it</u> away'},
        {words:['Take','out','it',',','please','.'], bad:2, fix:'take it out', w:'<code>take it out</code>.', f:'take <u>it</u> out'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['Please','stop','making','a','mess','.'], w:'<code>stop + -ing</code>.', f:'Please stop making a mess.'},
        {sol:['I','enjoy','playing','video','games','.'], w:'<code>enjoy + -ing</code>.', f:'I enjoy playing video games.'},
        {sol:['Please','put','it','away','.'], w:'الضميرُ بين الفعل والحرف.', f:'Please put it away.'},
        {sol:['Can','you','take','out','the','trash','?'], w:'<code>take out</code>.', f:'Can you take out the trash?'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'stop ___ a mess', ask:'اختر', o:['making','to make'], a:0, w:'<code>-ing</code>.', f:'<u>making</u>'},
        {p:'enjoy ___ games', ask:'اختر', o:['playing','to play'], a:0, w:'<code>-ing</code>.', f:'<u>playing</u>'},
        {p:'finished ___ the dishes', ask:'اختر', o:['doing','to do'], a:0, w:'<code>-ing</code>.', f:'<u>doing</u>'},
        {p:'put ___ your toys', ask:'اختر', o:['away','away it'], a:0, w:'<code>put away</code>.', f:'<u>away</u>'},
        {p:'take ___ the trash', ask:'اختر', o:['out','out it'], a:0, w:'<code>take out</code>.', f:'<u>out</u>'},
        {p:'put ___ (it)', ask:'الترتيب', o:['it away','away it'], a:0, w:'الضميرُ بين الفعل والحرف.', f:'<u>it away</u>'},
        {sol:['Please','put','it','away','.'], w:'الضميرُ بين الفعل والحرف.', f:'Please put it away.'},
        {p:'mind ___ the TV down', ask:'اختر', o:['turning','to turn'], a:0, w:'<code>-ing</code>.', f:'<u>turning</u>'},
        {p:'with a pronoun, particle goes ___.', ask:'اختر', o:['after','before'], a:0, w:'بعد الضمير.', f:'<u>after</u>'}
      ]}
    ]
  };
})();
