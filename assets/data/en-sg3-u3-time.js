/* ============================================================
   Lesson: Infinitives of Purpose + Prepositions of Place & Time
   English · Super Goal 3 · Unit 3 (When Are You Traveling?) · صفحات ٢٤ و٢١
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U3_TIME'] = {
    id:'EN_SG3_U3_TIME',
    title:'Infinitives of Purpose & Prepositions',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'To + verb (purpose) & in/on/at',
      intro:'نستعمل <b>المصدر</b> (<code>to + الفعل</code>) لبيان <b>الغرض</b> (لماذا): <code>He got up early to catch the plane</code>. وحروف المكان: <code>in</code> للأماكن الكبيرة (<code>in Jeddah</code>)، <code>on</code> للأسطح (<code>on an island</code>)، <code>at</code> للنقاط (<code>at school</code>). وحروف الزمن: <code>on</code> للأيام والتواريخ، <code>at</code> للساعات، <code>in</code> للشهور والسنوات والفصول.',
      table:[['Purpose','I went to KSA to visit relatives.'],['in','in Jeddah, in May, in 2001'],['on','on Monday, on June 3rd'],['at','at school, at 8:00 a.m.']],
      trick:'الغرضُ يُصاغ بـ <code>to + الفعل</code>، لا بـ <code>for + الفعل</code>. وللزمن: <code>at</code> للساعة، <code>on</code> لليوم/التاريخ، <code>in</code> للشهر/السنة/الفصل.'
    },
    stages:[
      { type:'choice', name:'مصدر الغرض', hint:'to + الفعل = لماذا', qs:[
        {p:'He got up early ___ the plane.', o:['to catch','for catch','catching','catch'], a:0, w:'الغرض ← <code>to catch</code>.', f:'…<u>to catch</u> the plane.'},
        {p:'I’m going to KSA ___ relatives.', o:['to visit','for visit','visiting','visit'], a:0, w:'<code>to visit</code>.', f:'…<u>to visit</u> relatives.'},
        {p:'She’s going to Colorado ___.', o:['to ski','for ski','skiing to','ski'], a:0, w:'<code>to ski</code>.', f:'…<u>to ski</u>.'},
        {p:'Why did he go to the bank? — ___ money.', o:['To get','For get','Getting','Get'], a:0, w:'الغرض ← <code>To get</code>.', f:'<u>To get</u> money.'}
      ]},
      { type:'choice', name:'حروف المكان', hint:'in / on / at', qs:[
        {p:'I live ___ Jeddah.', o:['in','on','at','to'], a:0, w:'المدن ← <code>in</code>.', f:'<u>in</u> Jeddah'},
        {p:'We study ___ school.', o:['at','in','on','to'], a:0, w:'<code>at school</code>.', f:'<u>at</u> school'},
        {p:'They live ___ an island.', o:['on','in','at','to'], a:0, w:'الأسطح/الجزر ← <code>on</code>.', f:'<u>on</u> an island'},
        {p:'It’s the tallest building ___ the world.', o:['in','on','at','to'], a:0, w:'<code>in the world</code>.', f:'<u>in</u> the world'}
      ]},
      { type:'choice', name:'حروف الزمن', hint:'at ساعة، on يوم، in شهر/سنة', qs:[
        {p:'The flight leaves ___ 8:00 a.m.', o:['at','on','in','to'], a:0, w:'الساعات ← <code>at</code>.', f:'<u>at</u> 8:00 a.m.'},
        {p:'We arrived ___ Monday.', o:['on','at','in','to'], a:0, w:'الأيام ← <code>on</code>.', f:'<u>on</u> Monday'},
        {p:'He was born ___ 1956.', o:['in','on','at','to'], a:0, w:'السنوات ← <code>in</code>.', f:'<u>in</u> 1956'},
        {p:'The festival is ___ the winter.', o:['in','on','at','to'], a:0, w:'الفصول ← <code>in</code>.', f:'<u>in</u> the winter'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['He','went','for','catch','the','plane','.'], bad:2, fix:'to', w:'الغرض ← <code>to catch</code>.', f:'…<u>to</u> catch the plane.'},
        {words:['I','was','born','on','1956','.'], bad:3, fix:'in', w:'السنوات ← <code>in</code>.', f:'…born <u>in</u> 1956.'},
        {words:['We','study','on','school','.'], bad:2, fix:'at', w:'<code>at school</code>.', f:'…study <u>at</u> school.'},
        {words:['The','plane','leaves','on','ten','o’clock','.'], bad:3, fix:'at', w:'الساعات ← <code>at</code>.', f:'…leaves <u>at</u> ten o’clock.'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['I','went','there','to','study','Arabic','.'], w:'<code>to + الفعل</code> للغرض.', f:'I went there to study Arabic.'},
        {sol:['He','was','born','in','Riyadh','.'], w:'المدن ← <code>in</code>.', f:'He was born in Riyadh.'},
        {sol:['The','flight','leaves','at','ten','.'], w:'الساعات ← <code>at</code>.', f:'The flight leaves at ten.'},
        {sol:['We','arrived','on','Monday','.'], w:'الأيام ← <code>on</code>.', f:'We arrived on Monday.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'He got up early ___ the plane.', ask:'الغرض', o:['to catch','for catch'], a:0, w:'<code>to</code>.', f:'<u>to catch</u>'},
        {p:'I live ___ Jeddah.', ask:'المكان', o:['in','at'], a:0, w:'المدن ← <code>in</code>.', f:'<u>in</u>'},
        {p:'We study ___ school.', ask:'المكان', o:['at','on'], a:0, w:'<code>at school</code>.', f:'<u>at</u>'},
        {p:'The flight leaves ___ 8 a.m.', ask:'الزمن', o:['at','on'], a:0, w:'الساعات.', f:'<u>at</u>'},
        {p:'We arrived ___ Monday.', ask:'الزمن', o:['on','in'], a:0, w:'الأيام.', f:'<u>on</u>'},
        {p:'He was born ___ 1956.', ask:'الزمن', o:['in','on'], a:0, w:'السنوات.', f:'<u>in</u>'},
        {sol:['I','went','there','to','study','.'], w:'الغرض <code>to</code>.', f:'I went there to study.'},
        {p:'They live ___ an island.', ask:'المكان', o:['on','in'], a:0, w:'<code>on</code>.', f:'<u>on</u>'},
        {p:'The festival is ___ the winter.', ask:'الزمن', o:['in','at'], a:0, w:'الفصول ← <code>in</code>.', f:'<u>in</u>'}
      ]}
    ]
  };
})();
