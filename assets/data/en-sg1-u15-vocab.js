/* ============================================================
   Lesson: Vocabulary — Then and Now
   English · Super Goal 1 · Unit 15 (Then and Now) · صفحات ١٣٤–١٣٥
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U15_VOCAB'] = {
    id:'EN_SG1_U15_VOCAB',
    title:'Vocabulary — Then and Now',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'Describing the Past',
      intro:'مفرداتٌ للماضي والحاضر: <code>then / in the past</code> في الماضي، <code>now / today</code> الآن، <code>old / modern</code> قديم/حديث، <code>change</code> يتغيّر، <code>ago</code> منذ (<code>ten years ago</code>). وأماكنُ قديمة: <code>castle</code> قلعة، <code>village</code> قرية، <code>market</code> سوق.',
      table:[['then / in the past','في الماضي'],['now / today','الآن'],['ago','منذ (five years ago)'],['old ↔ modern','قديم ↔ حديث'],['change','يتغيّر']],
      trick:'<code>ago</code> تأتي <b>بعد</b> مدّة الزمن: <code>two years ago</code> لا <code>ago two years</code>. و<code>then</code> تعني «في ذلك الوقت الماضي».'
    },
    stages:[
      { type:'choice', name:'المعنى', hint:'اختر المعنى الصحيح', qs:[
        {p:'“in the past” means:', o:['then','now','tomorrow'], a:0, w:'في الماضي.', f:'<u>then</u>'},
        {p:'“modern” is the opposite of:', o:['old','new','fast'], a:0, w:'حديث ضدّ قديم.', f:'opposite of <u>old</u>'},
        {p:'“a castle” is:', o:['an old fort building','a small car','a market'], a:0, w:'قلعة.', f:'<u>an old fort</u>'},
        {p:'“to change” means to:', o:['become different','stay the same','stop'], a:0, w:'يتغيّر.', f:'<u>become different</u>'},
        {p:'“a village” is:', o:['a small town','a big city','a school'], a:0, w:'قرية.', f:'a <u>small town</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'Ten years ___, there was no mall here.', o:['ago','then','now'], a:0, w:'منذ.', f:'ten years <u>ago</u>'},
        {p:'In the ___, people used to ride camels.', o:['past','future','morning'], a:0, w:'الماضي.', f:'in the <u>past</u>'},
        {p:'Cities ___ a lot over time.', o:['change','changes only','changing'], a:0, w:'تتغيّر.', f:'<u>change</u>'},
        {p:'This building is very ___; it was built long ago.', o:['old','modern','fast'], a:0, w:'قديم.', f:'<u>old</u>'},
        {p:'Today we have ___ technology.', o:['modern','ancient','slow'], a:0, w:'حديثة.', f:'<u>modern</u>'}
      ]},
      { type:'choice', name:'ماضٍ أم حاضر', hint:'then / now', qs:[
        {p:'“now” refers to the:', o:['present','past','future'], a:0, w:'الحاضر.', f:'the <u>present</u>'},
        {p:'“then” refers to the:', o:['past','present','future'], a:0, w:'الماضي.', f:'the <u>past</u>'},
        {p:'A place where people bought goods long ago:', o:['market','airport','clinic'], a:0, w:'سوق.', f:'<u>market</u>'},
        {p:'“ago” comes ___ the time period.', o:['after','before','instead of'], a:0, w:'بعد المدّة.', f:'<u>after</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['Ago','ten','years',',','there','was','a','farm','.'], bad:0, fix:'ترتيب: Ten years ago', w:'<code>ago</code> بعد المدّة.', f:'<u>Ten years ago</u>, …'},
        {words:['This','castle','is','modern','.'], bad:3, fix:'old', w:'القلعة قديمة.', f:'This castle is <u>old</u>.'},
        {words:['“Now”','means','the','past','.'], bad:3, fix:'present', w:'<code>now</code> = الحاضر.', f:'“Now” means the <u>present</u>.'},
        {words:['A','village','is','a','big','city','.'], bad:4, fix:'small town', w:'القرية صغيرة.', f:'a <u>small town</u>'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'“in the past” =', ask:'اختر', o:['then','now'], a:0, w:'الماضي.', f:'<u>then</u>'},
        {p:'opposite of “old” =', ask:'اختر', o:['modern','fast'], a:0, w:'حديث.', f:'<u>modern</u>'},
        {p:'an old fort =', ask:'اختر', o:['castle','market'], a:0, w:'قلعة.', f:'<u>castle</u>'},
        {p:'become different =', ask:'الفعل', o:['change','stop'], a:0, w:'يتغيّر.', f:'<u>change</u>'},
        {p:'ten years ___', ask:'أكمل', o:['ago','then'], a:0, w:'منذ.', f:'<u>ago</u>'},
        {p:'“now” = the ___', ask:'اختر', o:['present','past'], a:0, w:'الحاضر.', f:'<u>present</u>'},
        {p:'a small town =', ask:'اختر', o:['village','city'], a:0, w:'قرية.', f:'<u>village</u>'},
        {p:'“ago” comes ___ the time.', ask:'اختر', o:['after','before'], a:0, w:'بعد.', f:'<u>after</u>'},
        {p:'This old building is not ___.', ask:'اختر', o:['modern','ancient'], a:0, w:'حديث.', f:'not <u>modern</u>'}
      ]}
    ]
  };
})();
