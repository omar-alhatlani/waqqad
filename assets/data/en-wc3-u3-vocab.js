/* ============================================================
   درس: Vocabulary — Sports and Activities
   الإنجليزية · الثالث الابتدائي · ف١ · We Can! 3 · Unit 3 (Sports and Activities)
   مفرداتُ الوحدة (حقائقُ معجميّة)، والجملُ التوضيحيّة مؤلَّفةٌ أصالةً.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_WC3_U3_VOCAB'] = {
    id:'EN_WC3_U3_VOCAB',
    title:'Vocabulary — Sports & Activities',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'الرياضةُ والأنشطة',
      intro:'مفرداتٌ عن <b>الرياضةِ والأنشطة</b>. أتقِنْها لتتحدّثَ عمّا تحبُّ أن تفعلَه وتلعبَه.',
      table:[['football · basketball','كرة القدم · كرة السلة'],['swim · run','يسبح · يجري'],['jump · dance','يقفز · يرقص'],['ride a bike','يركب دراجة'],['play · win','يلعب · يفوز']],
      examples:['I <code>play football</code> with my friends. (ألعبُ كرةَ القدم.)','She can <code>swim</code> and <code>run</code> fast. (تستطيعُ السباحةَ والجري.)'],
      trick:'أفعالُ الحركة: <span class="en">swim</span> في الماء، <span class="en">run</span> على الأرض، <span class="en">jump</span> إلى الأعلى.'
    },
    stages:[
      { type:'choice', name:'الكلمة ← المعنى', hint:'اختر المعنى العربيّ', qs:[
        {p:'football', ask:'المعنى؟', o:['كرة القدم','كرة السلة'], a:0, w:'<code>football</code> = كرة القدم.', f:'← <u>كرة القدم</u>'},
        {p:'swim', ask:'المعنى؟', o:['يسبح','يجري'], a:0, w:'<code>swim</code> = يسبح.', f:'← <u>يسبح</u>'},
        {p:'jump', ask:'المعنى؟', o:['يقفز','يرقص'], a:0, w:'<code>jump</code> = يقفز.', f:'← <u>يقفز</u>'},
        {p:'run', ask:'المعنى؟', o:['يجري','يسبح'], a:0, w:'<code>run</code> = يجري.', f:'← <u>يجري</u>'},
        {p:'basketball', ask:'المعنى؟', o:['كرة السلة','كرة القدم'], a:0, w:'<code>basketball</code> = كرة السلة.', f:'← <u>كرة السلة</u>'}
      ]},
      { type:'choice', name:'المعنى ← الكلمة', hint:'اختر الإنجليزية', qs:[
        {p:'يرقص', ask:'الكلمة؟', o:['dance','jump'], a:0, w:'يرقص = <code>dance</code>.', f:'← <u>dance</u>'},
        {p:'يركب دراجة', ask:'الكلمة؟', o:['ride a bike','run'], a:0, w:'<code>ride a bike</code>.', f:'← <u>ride a bike</u>'},
        {p:'يفوز', ask:'الكلمة؟', o:['win','play'], a:0, w:'يفوز = <code>win</code>.', f:'← <u>win</u>'},
        {p:'يلعب', ask:'الكلمة؟', o:['play','swim'], a:0, w:'يلعب = <code>play</code>.', f:'← <u>play</u>'},
        {p:'يسبح', ask:'الكلمة؟', o:['swim','run'], a:0, w:'يسبح = <code>swim</code>.', f:'← <u>swim</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'A fish can ___ in the water.', o:['swim','jump','run'], a:0, w:'السمكةُ تسبح ← <code>swim</code>.', f:'... can <u>swim</u> ...'},
        {p:'We ___ football in the park.', o:['play','dance','win'], a:0, w:'نلعبُ الكرة ← <code>play</code>.', f:'We <u>play</u> football ...'},
        {p:'A rabbit can ___ very high.', o:['jump','swim','ride'], a:0, w:'الأرنبُ يقفز ← <code>jump</code>.', f:'... can <u>jump</u> high.'},
        {p:'I ___ to school every day.', o:['run','swim','win'], a:0, w:'أجري ← <code>run</code>.', f:'I <u>run</u> to school ...'}
      ]},
      { type:'error', name:'الكلمة الغريبة', hint:'انقر ما لا ينتمي', qs:[
        {words:['swim','run','jump','ball'], bad:3, fix:'مثال: dance', w:'<code>ball</code> اسمٌ، والبقيّةُ أفعالُ حركة.', f:'... · <u>ball</u> (اسم)'},
        {words:['football','basketball','tennis','swim'], bad:3, fix:'مثال: volleyball', w:'<code>swim</code> فعلٌ، والبقيّةُ رياضاتٌ بالكرة.', f:'... · <u>swim</u> (فعل)'},
        {words:['run','jump','dance','friend'], bad:3, fix:'مثال: play', w:'<code>friend</code> شخصٌ، والبقيّةُ أفعال.', f:'... · <u>friend</u> (اسم)'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'run', ask:'المعنى؟', o:['يجري','يقفز'], a:0, w:'يجري.', f:'← <u>يجري</u>'},
        {p:'كرة القدم', ask:'الكلمة؟', o:['football','basketball'], a:0, w:'football.', f:'← <u>football</u>'},
        {p:'A fish can ___ .', ask:'اختر', o:['swim','jump'], a:0, w:'يسبح.', f:'... can <u>swim</u>.'},
        {p:'dance', ask:'المعنى؟', o:['يرقص','يفوز'], a:0, w:'يرقص.', f:'← <u>يرقص</u>'},
        {p:'يلعب', ask:'الكلمة؟', o:['play','win'], a:0, w:'play.', f:'← <u>play</u>'}
      ]}
    ]
  };
})();
