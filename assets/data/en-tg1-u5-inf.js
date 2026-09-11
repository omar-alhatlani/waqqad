/* ============================================================
   درس: Grammar — verb + to-infinitive vs. verb + -ing
   الإنجليزية · الرابع الابتدائي · ف١ · Top Goal 1 · Unit 5 (Outdoor Fun)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب المحفوظ).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG1_U5_INF'] = {
    id:'EN_TG1_U5_INF',
    title:'Grammar — to-infinitive vs. -ing',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'to + فعل أم فعل + ing؟',
      intro:'بعضُ الأفعالِ يتبعُها <span class="tok-focus">to + فعل</span> مثل: want ، decide ، need ، would like. وبعضُها يتبعُها <span class="tok-focus">فعل + ing</span> مثل: enjoy ، go (للأنشطة) ، like. القاعدةُ تُحفَظُ مع الفعلِ الأوّل.',
      formula:'want/decide/need + <span class="tok-focus">to</span> + verb   |   enjoy/go + verb<span class="tok-focus">-ing</span>',
      table:[['want <span class="tok-focus">to</span> go','بعد want ← to + فعل'],['decide <span class="tok-focus">to</span> visit','بعد decide ← to + فعل'],['enjoy read<span class="tok-focus">ing</span>','بعد enjoy ← -ing'],['go walk<span class="tok-focus">ing</span>','go + نشاط ← -ing']],
      examples:['I decided <span class="tok-focus">to</span> go to the countryside.','We went walk<span class="tok-focus">ing</span> around the lake.'],
      trick:'want / decide / need ← يتبعُها <span class="tok-focus">to</span>. enjoy / go (نشاط) ← يتبعُها <span class="tok-focus">-ing</span>.'
    },
    stages:[
      { type:'choice', name:'to أم -ing؟', hint:'احفظِ الفعلَ الأوّل', qs:[
        {p:'بعد want يأتي:', ask:'اختر', o:['to + فعل','فعل + ing'], a:0, w:'<code>want to go</code>.', f:'← <u>to + فعل</u>'},
        {p:'بعد enjoy يأتي:', ask:'اختر', o:['فعل + ing','to + فعل'], a:0, w:'<code>enjoy reading</code>.', f:'← <u>فعل + ing</u>'},
        {p:'بعد decide يأتي:', ask:'اختر', o:['to + فعل','فعل + ing'], a:0, w:'<code>decide to visit</code>.', f:'← <u>to + فعل</u>'},
        {p:'go walking / go swimming ← النمط:', ask:'اختر', o:['go + -ing','go + to'], a:0, w:'<code>go</code> مع الأنشطةِ ← -ing.', f:'← <u>go + -ing</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'to أم -ing؟', qs:[
        {p:'I want ___ visit the forest.', o:['to','—','for'], a:0, w:'بعد want ← <code>to</code>.', f:'I want <u>to</u> visit the forest.'},
        {p:'We enjoy ___ around the lake.', o:['walking','to walk','walk'], a:0, w:'بعد enjoy ← <code>-ing</code>.', f:'We enjoy <u>walking</u> ...'},
        {p:'She decided ___ climb the mountain.', o:['to','—','ing'], a:0, w:'بعد decide ← <code>to</code>.', f:'She decided <u>to</u> climb ...'}
      ]},
      { type:'choice', name:'اختر الصواب', hint:'حسبَ الفعلِ الأوّل', qs:[
        {p:'They went ___ in the countryside.', ask:'اختر', o:['walking','to walk'], a:0, w:'<code>go</code> + نشاط ← -ing.', f:'They went <u>walking</u> ...'},
        {p:'I need ___ drink water.', ask:'اختر', o:['to','—'], a:0, w:'بعد need ← to.', f:'I need <u>to</u> drink water.'},
        {p:'He enjoys ___ photos of nature.', ask:'اختر', o:['taking','to take'], a:0, w:'بعد enjoy ← -ing.', f:'He enjoys <u>taking</u> photos.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['I','want','going','to','the','lake','.'], bad:2, fix:'to go', w:'بعد want ← <code>to go</code>.', f:'I want <u>to go</u> to the lake.'},
        {words:['We','enjoy','to','walk','outside','.'], bad:2, fix:'walking', w:'بعد enjoy ← <code>walking</code>.', f:'We enjoy <u>walking</u> outside.'},
        {words:['She','decided','visiting','the','island','.'], bad:2, fix:'to visit', w:'بعد decide ← <code>to visit</code>.', f:'She decided <u>to visit</u> the island.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب', qs:[
        {sol:['I','decided','to','go','outside','.'], w:'decide + to.', f:'I decided to go outside.'},
        {sol:['We','went','walking','by','the','lake','.'], w:'go + -ing.', f:'We went walking by the lake.'},
        {sol:['She','wants','to','climb','the','hill','.'], w:'want + to.', f:'She wants to climb the hill.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'بعد want:', ask:'اختر', o:['to + فعل','فعل + ing'], a:0, w:'to.', f:'← <u>to + فعل</u>'},
        {p:'We enjoy ___ in the field.', ask:'اختر', o:['playing','to play'], a:0, w:'بعد enjoy ← -ing.', f:'... <u>playing</u> ...'},
        {p:'He decided ___ explore the cave.', ask:'اختر', o:['to','—'], a:0, w:'بعد decide ← to.', f:'... <u>to</u> explore ...'},
        {p:'go swimming / go hiking ← النمط:', ask:'اختر', o:['go + -ing','go + to'], a:0, w:'go + -ing.', f:'← <u>go + -ing</u>'},
        {p:'I need ___ rest now.', ask:'اختر', o:['to','ing'], a:0, w:'بعد need ← to.', f:'I need <u>to</u> rest.'}
      ]}
    ]
  };
})();
