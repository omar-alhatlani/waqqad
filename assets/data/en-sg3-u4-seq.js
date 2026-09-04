/* ============================================================
   Lesson: Sequence Words + Reflexive Pronouns + because/so
   English · Super Goal 3 · Unit 4 (What Do I Need to Buy?) · صفحات ٤٠ و٤٧
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U4_SEQ'] = {
    id:'EN_SG3_U4_SEQ',
    title:'Sequence Words, Reflexives & because/so',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'first/then, myself…, because vs so',
      intro:'<b>كلمات التسلسل</b> ترتّب الخطوات: <code>First … Then … After that … Finally …</code>. و<b>الضمائر الانعكاسية</b> (<code>myself, yourself, himself, herself, itself, ourselves, yourselves, themselves</code>) تُستعمل حين يكون الفاعل والمفعول الشخصَ نفسَه: <code>He cut himself</code>. و<code>because</code> تُعلّل (السبب)، و<code>so</code> تُبيّن النتيجة.',
      table:[['Sequence','First, Then, After that, Finally'],['Reflexive','I → myself, they → themselves'],['because','a reason (السبب)'],['so','a result (النتيجة)']],
      trick:'<code>because</code> يتبعها <b>السبب</b>، و<code>so</code> تتبعها <b>النتيجة</b>: <code>I was tired, so I slept</code> / <code>I slept because I was tired</code>.'
    },
    stages:[
      { type:'choice', name:'كلمات التسلسل', hint:'أول ثم بعد ذلك أخيرًا', qs:[
        {p:'___, you mix the flour and the eggs.', o:['First','Finally','After that','So'], a:0, w:'البداية ← <code>First</code>.', f:'<u>First</u>, …'},
        {p:'___ you add a little butter.', o:['Then','First','Finally','Because'], a:0, w:'بعد الأولى ← <code>Then</code>.', f:'<u>Then</u> …'},
        {p:'___, you let it rise.', o:['Finally','First','Then','So'], a:0, w:'الخطوة الأخيرة ← <code>Finally</code>.', f:'<u>Finally</u>, …'},
        {p:'The step after “then” is often:', o:['After that','First','Before'], a:0, w:'<code>After that</code>.', f:'<u>After that</u>'}
      ]},
      { type:'choice', name:'الضمائر الانعكاسية', hint:'الفاعل = المفعول', qs:[
        {p:'Nawal cut ___ while peeling potatoes.', o:['herself','himself','yourself','themselves'], a:0, w:'<code>Nawal</code> ← <code>herself</code>.', f:'cut <u>herself</u>'},
        {p:'My father made ___ a sandwich.', o:['himself','herself','myself','itself'], a:0, w:'<code>father</code> ← <code>himself</code>.', f:'made <u>himself</u>'},
        {p:'The oven turns ___ off.', o:['itself','himself','themselves','yourself'], a:0, w:'<code>oven</code> ← <code>itself</code>.', f:'turns <u>itself</u> off'},
        {p:'The children can look after ___.', o:['themselves','himself','herself','itself'], a:0, w:'<code>children</code> ← <code>themselves</code>.', f:'after <u>themselves</u>'}
      ]},
      { type:'choice', name:'because أم so', hint:'سبب أم نتيجة؟', qs:[
        {p:'She bought pizzas ___ they were on sale.', o:['because','so'], a:0, w:'السبب ← <code>because</code>.', f:'…<u>because</u> they were on sale'},
        {p:'The service was excellent, ___ they left a big tip.', o:['so','because'], a:0, w:'النتيجة ← <code>so</code>.', f:'…<u>so</u> they left a tip'},
        {p:'Avocados are good for you ___ they’re rich in vitamins.', o:['because','so'], a:0, w:'السبب ← <code>because</code>.', f:'…<u>because</u> …vitamins'},
        {p:'Ali didn’t feel well, ___ his mother made him soup.', o:['so','because'], a:0, w:'النتيجة ← <code>so</code>.', f:'…<u>so</u> his mother made soup'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['My','father','made','herself','a','sandwich','.'], bad:3, fix:'himself', w:'<code>father</code> ← <code>himself</code>.', f:'made <u>himself</u>'},
        {words:['She','stayed','home','so','she','was','sick','.'], bad:3, fix:'because', w:'السبب ← <code>because</code>.', f:'…<u>because</u> she was sick'},
        {words:['Finally',',','mix','the','eggs','first','.'], bad:0, fix:'First', w:'الخطوة الأولى ← <code>First</code>.', f:'<u>First</u>, mix the eggs'},
        {words:['The','children','look','after','themself','.'], bad:4, fix:'themselves', w:'الجمع ← <code>themselves</code>.', f:'after <u>themselves</u>'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['First',',','boil','the','water','.'], w:'<code>First</code> للبداية.', f:'First, boil the water.'},
        {sol:['He','made','himself','a','sandwich','.'], w:'الانعكاسيّ <code>himself</code>.', f:'He made himself a sandwich.'},
        {sol:['I','slept','because','I','was','tired','.'], w:'<code>because</code> + السبب.', f:'I slept because I was tired.'},
        {sol:['I','was','tired',',','so','I','slept','.'], w:'<code>so</code> + النتيجة.', f:'I was tired, so I slept.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'___, mix the flour.', ask:'التسلسل', o:['First','Finally'], a:0, w:'البداية.', f:'<u>First</u>'},
        {p:'___, let it rise.', ask:'التسلسل', o:['Finally','First'], a:0, w:'الأخيرة.', f:'<u>Finally</u>'},
        {p:'Nawal cut ___.', ask:'الانعكاسيّ', o:['herself','himself'], a:0, w:'<code>herself</code>.', f:'<u>herself</u>'},
        {p:'The oven turns ___ off.', ask:'الانعكاسيّ', o:['itself','himself'], a:0, w:'<code>itself</code>.', f:'<u>itself</u>'},
        {p:'She bought it ___ it was cheap.', ask:'اختر', o:['because','so'], a:0, w:'السبب.', f:'<u>because</u>'},
        {p:'It was cheap, ___ she bought it.', ask:'اختر', o:['so','because'], a:0, w:'النتيجة.', f:'<u>so</u>'},
        {sol:['He','cut','himself','.'], w:'الانعكاسيّ.', f:'He cut himself.'},
        {p:'The children look after ___.', ask:'الانعكاسيّ', o:['themselves','himself'], a:0, w:'الجمع.', f:'<u>themselves</u>'},
        {p:'The step after “First”:', ask:'التسلسل', o:['Then','Finally'], a:0, w:'<code>Then</code>.', f:'<u>Then</u>'}
      ]}
    ]
  };
})();
