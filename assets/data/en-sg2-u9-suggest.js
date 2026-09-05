/* ============================================================
   Lesson: Suggestions — should / why don't / let's
   English · Super Goal 2 · Unit 9 (Let's Go Out) · صفحة ٨٠
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U9_SUGGEST'] = {
    id:'EN_SG2_U9_SUGGEST',
    title:'Making Suggestions',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:"should / why don't…? / let's",
      intro:'للاقتراح نستعمل ثلاث صيغ، ويأتي بعدها الفعل <b>مجرّدًا</b>: <code>should + verb</code> (<code>You should rest</code>), <code>Why don’t you/we + verb</code> (<code>Why don’t we go out?</code>), و<code>Let’s + verb</code> (<code>Let’s play tennis</code>). ونسأل <code>What should we do?</code>',
      table:[['should','You should buy the green one.'],["Why don't…?",'Why don’t we hang out?'],["Let's",'Let’s go for a drive.'],['question','What should we do tonight?']],
      trick:'الصيغ الثلاث للاقتراح، والفعلُ بعدها مجرّد: <code>Why don’t you go?</code> لا <code>Why don’t you to go?</code>. والردُّ الشائع: <code>Good idea!</code>'
    },
    stages:[
      { type:'choice', name:'should', hint:'اقتراحٌ ونصيحة', qs:[
        {p:'What ___ we do tonight?', o:['should','do','are','must'], a:0, w:'الاقتراح ← <code>should</code>.', f:'What <u>should</u> we do?'},
        {p:'You ___ buy the green one.', o:['should','shoulds','are','do'], a:0, w:'<code>should</code> لا تتغيّر.', f:'You <u>should</u> buy…'},
        {p:'You should ___ the doctor.', o:['see','sees','to see','seeing'], a:0, w:'بعد <code>should</code> ← مجرّد.', f:'should <u>see</u>'},
        {p:'What color ___ I buy?', o:['should','do','am','must'], a:0, w:'<code>should</code>.', f:'What color <u>should</u> I buy?'}
      ]},
      { type:'choice', name:"Why don't…?", hint:'اقتراحٌ بصيغة السؤال', qs:[
        {p:'___ we hang out at the mall?', o:["Why don't","Why not to","Why isn't","How don't"], a:0, w:'<code>Why don’t we…?</code>.', f:"<u>Why don't</u> we hang out?"},
        {p:'Why don’t you ___ it later?', o:['do','does','to do','doing'], a:0, w:'مجرّد بعد <code>Why don’t you</code>.', f:'…<u>do</u> it later?'},
        {p:'Why ___ we stay home tonight?', o:["don't",'not','aren’t','isn’t'], a:0, w:'<code>don’t</code>.', f:"Why <u>don't</u> we stay home?"},
        {p:'“Why don’t we…?” is a way to:', o:['suggest','order','refuse'], a:0, w:'اقتراح.', f:'<u>suggest</u>'}
      ]},
      { type:'choice', name:"Let's", hint:'دعوةٌ للفعل معًا', qs:[
        {p:'___ go for a drive.', o:["Let's","Let us to","Lets to","Let"], a:0, w:'<code>Let’s + الفعل</code>.', f:"<u>Let's</u> go for a drive."},
        {p:'Let’s ___ tennis.', o:['play','plays','to play','playing'], a:0, w:'مجرّد.', f:"Let's <u>play</u> tennis."},
        {p:'A: Let’s go out. B: ___ idea!', o:['Good','Well','Nice to'], a:0, w:'موافقة ← <code>Good idea!</code>.', f:'<u>Good</u> idea!'},
        {p:"“Let's” = ", o:['Let us','Let is','Let has'], a:0, w:'<code>Let’s = Let us</code>.', f:'<u>Let us</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['You','should','to','rest','.'], bad:2, fix:'تُحذف to', w:'بعد <code>should</code> ← مجرّد بلا <code>to</code>.', f:'You should <u>rest</u>.'},
        {words:['Why','don’t','we','to','go','?'], bad:3, fix:'تُحذف to', w:'مجرّد بعد <code>Why don’t we</code>.', f:'Why don’t we <u>go</u>?'},
        {words:['Let’s','plays','tennis','.'], bad:1, fix:'play', w:'بعد <code>Let’s</code> ← مجرّد.', f:"Let's <u>play</u> tennis."},
        {words:['What','do','we','should','do','?'], bad:1, fix:'تُحذف do', w:'<code>What should we do?</code>.', f:'What <u>should</u> we do?'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['What','should','we','do','tonight','?'], w:'<code>What + should + we + do</code>.', f:'What should we do tonight?'},
        {sol:['Why','don’t','we','go','out','?'], w:'<code>Why don’t we + مجرّد</code>.', f:"Why don't we go out?"},
        {sol:['Let’s','play','tennis','.'], w:'<code>Let’s + مجرّد</code>.', f:"Let's play tennis."},
        {sol:['You','should','buy','the','green','one','.'], w:'<code>should + مجرّد</code>.', f:'You should buy the green one.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'What ___ we do?', ask:'اختر', o:['should','do'], a:0, w:'اقتراح.', f:'<u>should</u>'},
        {p:'You should ___ the doctor.', ask:'الفعل', o:['see','sees'], a:0, w:'مجرّد.', f:'<u>see</u>'},
        {p:'___ we hang out?', ask:'اختر', o:["Why don't","Why not to"], a:0, w:'اقتراح.', f:"<u>Why don't</u>"},
        {p:'Why don’t you ___ it later?', ask:'الفعل', o:['do','does'], a:0, w:'مجرّد.', f:'<u>do</u>'},
        {p:'___ go for a drive.', ask:'اختر', o:["Let's","Lets to"], a:0, w:'<code>Let’s</code>.', f:"<u>Let's</u>"},
        {p:'Let’s ___ tennis.', ask:'الفعل', o:['play','plays'], a:0, w:'مجرّد.', f:'<u>play</u>'},
        {sol:['Why','don’t','we','go','out','?'], w:'اقتراح.', f:"Why don't we go out?"},
        {p:'A: Let’s go out. B: ___ idea!', ask:'أكمل', o:['Good','Well'], a:0, w:'موافقة.', f:'<u>Good</u>'},
        {p:'“Let’s” = ', ask:'اختر', o:['Let us','Let is'], a:0, w:'<code>Let us</code>.', f:'<u>Let us</u>'}
      ]}
    ]
  };
})();
