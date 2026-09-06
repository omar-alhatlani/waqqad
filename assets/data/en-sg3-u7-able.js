/* ============================================================
   Lesson: Be Able To + Suggestions (should / why don’t / let’s)
   English · Super Goal 3 · Unit 7 (It’s a Good Deal, Isn’t It?) · صفحة ٧٦
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U7_ABLE'] = {
    id:'EN_SG3_U7_ABLE',
    title:'Be Able To & Suggestions',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:"be able to · should / why don’t / let’s",
      intro:'نستعمل <code>be able to</code> للتعبير عن <b>القدرة</b> في كلّ الأزمنة: <code>am/is/are able to</code> (الآن)، <code>was/were able to</code> (الماضي)، <code>will be able to</code> (المستقبل). وللاقتراح نستعمل <code>should</code> و<code>Why don’t…?</code> و<code>Let’s + الفعل المجرّد</code>.',
      table:[['present','I am able to help.'],['past','I wasn’t able to come.'],['future','Will you be able to go?'],['suggestion',"Let’s have a garage sale."]],
      trick:'<code>be able to</code> تُستعمل حيث لا تصلح <code>can</code> (كالمستقبل والتامّ): <code>will be able to</code>. وبعد <code>Let’s</code> و<code>Why don’t you</code> يأتي الفعل مجرّدًا.'
    },
    stages:[
      { type:'choice', name:'be able to', hint:'حسب الزمن', qs:[
        {p:'He won’t ___ play today; he hurt his hand.', o:['be able to','can','is able','able to'], a:0, w:'المستقبل ← <code>be able to</code>.', f:"won’t <u>be able to</u> play"},
        {p:'I ___ able to come because I was busy.', o:["wasn’t",'am not',"isn’t",'didn’t'], a:0, w:'الماضي ← <code>wasn’t able to</code>.', f:"I <u>wasn’t</u> able to come"},
        {p:'Will you ___ able to go out tomorrow?', o:['be','are','being','to be'], a:0, w:'<code>Will you be able to…?</code>.', f:'Will you <u>be</u> able to…?'},
        {p:'They are ___ to sell all the tools.', o:['able','can','ability','abled'], a:0, w:'<code>are able to</code>.', f:'are <u>able</u> to sell'}
      ]},
      { type:'choice', name:'الفعل بعد able to', hint:'to + الفعل المجرّد', qs:[
        {p:'She is able to ___ three languages.', o:['speak','speaks','speaking','spoke'], a:0, w:'مجرّد بعد <code>able to</code>.', f:'able to <u>speak</u>'},
        {p:'We were able to ___ the problem.', o:['solve','solved','solving','solves'], a:0, w:'مجرّد.', f:'were able to <u>solve</u>'},
        {p:'He will be able to ___ us next week.', o:['join','joins','joining','joined'], a:0, w:'مجرّد.', f:'be able to <u>join</u>'},
        {p:'“be able to” expresses:', o:['ability','the past only','a command'], a:0, w:'القدرة.', f:'<u>ability</u>'}
      ]},
      { type:'choice', name:'الاقتراحات', hint:"should / why don’t / let’s", qs:[
        {p:'What ___ we sell at the garage sale?', o:['should','do','are','must'], a:0, w:'اقتراح ← <code>should</code>.', f:'What <u>should</u> we sell?'},
        {p:'___ we have a garage sale on Friday?', o:["Why don’t","Why not to","Why aren’t"], a:0, w:'<code>Why don’t we…?</code>.', f:"<u>Why don’t</u> we…?"},
        {p:'___ sell these old toys.', o:["Let’s","Let us to","Lets to"], a:0, w:'<code>Let’s + الفعل</code>.', f:"<u>Let’s</u> sell…"},
        {p:'You ___ price the items clearly.', o:['should','shoulds','are','do'], a:0, w:'نصيحة ← <code>should</code>.', f:'You <u>should</u> price…'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['He','won’t','can','play','.'], bad:2, fix:'be able to', w:'مع المستقبل ← <code>be able to</code>.', f:"won’t <u>be able to</u> play"},
        {words:['I','was','able','come','.'], bad:3, fix:'to come', w:'<code>able to + الفعل</code>.', f:'was able <u>to come</u>'},
        {words:['Let’s','to','have','a','sale','.'], bad:1, fix:'تُحذف to', w:'بعد <code>Let’s</code> ← مجرّد.', f:"Let’s <u>have</u> a sale."},
        {words:['She','is','able','speaks','French','.'], bad:3, fix:'to speak', w:'<code>able to + مجرّد</code>.', f:'able <u>to speak</u>'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['I','was','able','to','solve','it','.'], w:'<code>was able to + الفعل</code>.', f:'I was able to solve it.'},
        {sol:['Will','you','be','able','to','come','?'], w:'المستقبل.', f:'Will you be able to come?'},
        {sol:['Let’s','have','a','garage','sale','.'], w:'<code>Let’s + مجرّد</code>.', f:"Let’s have a garage sale."},
        {sol:['Why','don’t','we','sell','these','?'], w:'اقتراح.', f:"Why don’t we sell these?"}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'He won’t ___ play. (future ability)', ask:'اختر', o:['be able to','can'], a:0, w:'المستقبل.', f:'<u>be able to</u>'},
        {p:'I ___ able to come. (past نفي)', ask:'اختر', o:["wasn’t","am not"], a:0, w:'الماضي.', f:"<u>wasn’t</u>"},
        {p:'She is able to ___ French.', ask:'الفعل', o:['speak','speaks'], a:0, w:'مجرّد.', f:'<u>speak</u>'},
        {p:'What ___ we sell?', ask:'اختر', o:['should','do'], a:0, w:'اقتراح.', f:'<u>should</u>'},
        {p:'___ we have a sale?', ask:'اختر', o:["Why don’t","Why not to"], a:0, w:'اقتراح.', f:"<u>Why don’t</u>"},
        {p:'___ sell these toys.', ask:'اختر', o:["Let’s","Lets to"], a:0, w:'<code>Let’s</code>.', f:"<u>Let’s</u>"},
        {sol:['Will','you','be','able','to','come','?'], w:'المستقبل.', f:'Will you be able to come?'},
        {p:'We were able ___ solve it.', ask:'أكمل', o:['to','—'], a:0, w:'<code>able to</code>.', f:'<u>to</u>'},
        {p:'“be able to” =', ask:'المعنى', o:['ability','command'], a:0, w:'القدرة.', f:'<u>ability</u>'}
      ]}
    ]
  };
})();
