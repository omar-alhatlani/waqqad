/* ============================================================
   Lesson: Should/Shouldn’t & Clauses with When
   English · Super Goal 2 · Unit 8 (What’s Wrong?) · صفحة ٦٦
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U8_SHOULD'] = {
    id:'EN_SG2_U8_SHOULD',
    title:'Should / Shouldn’t & When',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'should / shouldn’t · clauses with when',
      intro:'نستعمل <code>should</code> لإعطاء وطلب <b>النصيحة</b>: <code>You should rest.</code> والنفيُ <code>shouldn’t</code> (لا ينبغي): <code>You shouldn’t go out.</code> بعدهما يأتي الفعلُ <b>أصليًّا</b> بلا <code>to</code>. و<code>when</code> تربطُ جملتين للتعبير عن وقتٍ أو حالة: <code>What do you do when you have a cold?</code>',
      table:[['should + verb','نصيحةٌ إيجابية'],['shouldn’t + verb','نصيحةٌ بالنهي'],['بعدهما','الفعلُ أصليّ (بلا to/‑s)'],['when','عندما (يربط جملتين)']],
      trick:'بعد <code>should/shouldn’t</code> الفعلُ أصليٌّ دائمًا (<code>should go</code> لا <code>should to go / should goes</code>). و<code>when</code> = عندما.'
    },
    stages:[
      { type:'choice', name:'should أم shouldn’t؟', hint:'ينبغي أم لا ينبغي؟', qs:[
        {p:'You’re sick. You ___ rest.', o:['should','shouldn’t'], a:0, w:'نصيحةٌ إيجابية ← <code>should</code>.', f:'You <u>should</u> rest.'},
        {p:'You have the flu. You ___ go out.', o:['shouldn’t','should'], a:0, w:'نهيٌ ← <code>shouldn’t</code>.', f:'You <u>shouldn’t</u> go out.'},
        {p:'You have a stomachache. You ___ eat so much.', o:['shouldn’t','should'], a:0, w:'نهيٌ ← <code>shouldn’t</code>.', f:'You <u>shouldn’t</u> eat so much.'},
        {p:'For good grades, you ___ study more.', o:['should','shouldn’t'], a:0, w:'نصيحةٌ إيجابية.', f:'You <u>should</u> study more.'},
        {p:'You have a fever. You ___ drink liquids.', o:['should','shouldn’t'], a:0, w:'نصيحةٌ إيجابية.', f:'You <u>should</u> drink liquids.'}
      ]},
      { type:'gap', name:'الفعل بعد should', hint:'أصليّ بلا to ولا ‑s', qs:[
        {p:'You should ___ some water. (drink)', o:['drink','to drink','drinks'], a:0, w:'أصليّ بعد <code>should</code>.', f:'should <u>drink</u>.'},
        {p:'He should ___ a doctor. (see)', o:['see','sees','to see'], a:0, w:'أصليّ (بلا ‑s).', f:'should <u>see</u>.'},
        {p:'You shouldn’t ___ so late. (sleep)', o:['sleep','to sleep','sleeps'], a:0, w:'أصليّ بعد <code>shouldn’t</code>.', f:'shouldn’t <u>sleep</u>.'},
        {p:'What ___ I do?', o:['should','shoulds','do should'], a:0, w:'<code>What should I do?</code>', f:'What <u>should</u> I do?'},
        {p:'She should ___ in bed. (stay)', o:['stay','stays','to stay'], a:0, w:'أصليّ.', f:'should <u>stay</u>.'}
      ]},
      { type:'choice', name:'clauses with when', hint:'when = عندما', qs:[
        {p:'What do you do ___ you have a cold?', ask:'اختر', o:['when','what','who'], a:0, w:'<code>when</code> = عندما.', f:'<u>when</u> you have a cold?'},
        {p:'I take aspirin when I ___ a headache.', ask:'اختر', o:['have','having','to have'], a:0, w:'بعد <code>when</code> جملةٌ عادية.', f:'when I <u>have</u> a headache.'},
        {p:'What did you do when you ___ the flu?', ask:'اختر', o:['had','have','has'], a:0, w:'الماضي ← <code>had</code>.', f:'when you <u>had</u> the flu?'},
        {p:'How do you feel ___ you lose something?', ask:'اختر', o:['when','why','where'], a:0, w:'<code>when</code>.', f:'<u>when</u> you lose something?'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['You','should','to','rest','.'], bad:2, fix:'تُحذف', w:'بعد <code>should</code> بلا <code>to</code>.', f:'You should <u>rest</u>.'},
        {words:['He','should','sees','a','doctor','.'], bad:2, fix:'see', w:'أصليّ بلا ‑s.', f:'should <u>see</u>.'},
        {words:['You','shouldn’t','goes','out','.'], bad:2, fix:'go', w:'أصليّ بعد <code>shouldn’t</code>.', f:'shouldn’t <u>go</u> out.'},
        {words:['What','you','should','do','?'], bad:1, fix:'ترتيب: should you', w:'<code>What should you do?</code>', f:'What <u>should you</u> do?'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['You','should','drink','water','.'], w:'نصيحة.', f:'You should drink water.'},
        {sol:['You','shouldn’t','go','out','.'], w:'نهيٌ.', f:'You shouldn’t go out.'},
        {sol:['What','do','you','do','when','you','have','a','cold','?'], w:'when = عندما.', f:'What do you do when you have a cold?'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'You’re sick. You ___ rest.', ask:'اختر', o:['should','shouldn’t'], a:0, w:'نصيحة.', f:'<u>should</u>.'},
        {p:'You have the flu. You ___ go out.', ask:'اختر', o:['shouldn’t','should'], a:0, w:'نهيٌ.', f:'<u>shouldn’t</u>.'},
        {p:'You should ___ water. (drink)', ask:'اختر', o:['drink','to drink'], a:0, w:'أصليّ.', f:'<u>drink</u>.'},
        {p:'What do you do ___ you have a cold?', ask:'اختر', o:['when','why'], a:0, w:'عندما.', f:'<u>when</u>.'},
        {p:'He should ___ a doctor. (see)', ask:'اختر', o:['see','sees'], a:0, w:'أصليّ.', f:'<u>see</u>.'},
        {sol:['You','should','drink','water','.'], w:'نصيحة.', f:'You should drink water.'},
        {p:'For good grades, you ___ study.', ask:'اختر', o:['should','shouldn’t'], a:0, w:'نصيحة.', f:'<u>should</u>.'},
        {p:'What did you do when you ___ the flu?', ask:'اختر', o:['had','have'], a:0, w:'ماضٍ.', f:'<u>had</u>.'},
        {p:'You ___ eat so much. (نهي)', ask:'اختر', o:['shouldn’t','should'], a:0, w:'نهيٌ.', f:'<u>shouldn’t</u>.'}
      ]}
    ]
  };
})();
