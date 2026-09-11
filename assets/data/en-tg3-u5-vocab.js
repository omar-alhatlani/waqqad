/* ============================================================
   درس: Vocabulary — World Sports (الرياضات)
   الإنجليزية · السادس الابتدائي · ف١ · Top Goal 3 · Unit 5 (World Sports)
   مفرداتُ الوحدة (حقائقُ معجميّة)، والجملُ التوضيحيّة مؤلَّفةٌ أصالةً.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG3_U5_VOCAB'] = {
    id:'EN_TG3_U5_VOCAB',
    title:'Vocabulary — World Sports',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'كلماتُ الرياضات',
      intro:'مفرداتٌ عن <b>الرياضات</b> والمنافسات، تحتاجُها للحديث عن الألعاب والفِرق.',
      table:[['team · match · competition','فريق · مباراة · منافسة'],['stadium · winner · prize/quiz','ملعب · فائز · مسابقة'],['volleyball · golf · cycling','كرة طائرة · جولف · ركوب الدرّاجة'],['skiing · snowboard · whistle','تزلّج · لوح تزلّج · صافرة']],
      examples:['Our <code>team</code> won the <code>match</code> at the <code>stadium</code>. (فازَ فريقُنا بالمباراة في الملعب.)','The referee blew the <code>whistle</code> and the <code>winner</code> smiled.'],
      trick:'اربطِ الكلمةَ بالرياضة: <span class="en">stadium</span> مكانُ اللعب، و<span class="en">whistle</span> صافرةُ الحكَم، و<span class="en">team</span> مجموعةُ اللاعبين.'
    },
    stages:[
      { type:'choice', name:'الكلمة ← المعنى', hint:'اختر المعنى العربيّ', qs:[
        {p:'team', ask:'المعنى؟', o:['فريق','ملعب'], a:0, w:'<code>team</code> = فريق.', f:'team ← <u>فريق</u>'},
        {p:'stadium', ask:'المعنى؟', o:['ملعب','مباراة'], a:0, w:'<code>stadium</code> = ملعب.', f:'stadium ← <u>ملعب</u>'},
        {p:'winner', ask:'المعنى؟', o:['فائز','حَكَم'], a:0, w:'<code>winner</code> = فائز.', f:'winner ← <u>فائز</u>'},
        {p:'match', ask:'المعنى؟', o:['مباراة','منافسة عامّة'], a:0, w:'<code>match</code> = مباراة.', f:'match ← <u>مباراة</u>'}
      ]},
      { type:'choice', name:'المعنى ← الكلمة', hint:'اختر الكلمة الإنجليزية', qs:[
        {p:'كرة طائرة', ask:'الكلمة؟', o:['volleyball','golf'], a:0, w:'كرة طائرة = <code>volleyball</code>.', f:'كرة طائرة ← <u>volleyball</u>'},
        {p:'صافرة', ask:'الكلمة؟', o:['whistle','winner'], a:0, w:'صافرة = <code>whistle</code>.', f:'صافرة ← <u>whistle</u>'},
        {p:'منافسة', ask:'الكلمة؟', o:['competition','stadium'], a:0, w:'منافسة = <code>competition</code>.', f:'منافسة ← <u>competition</u>'},
        {p:'تزلّج', ask:'الكلمة؟', o:['skiing','cycling'], a:0, w:'تزلّج = <code>skiing</code>.', f:'تزلّج ← <u>skiing</u>'}
      ]},
      { type:'choice', name:'رياضةٌ أم غيرها؟', hint:'صنّف الكلمة', qs:[
        {p:'golf', ask:'اختر', o:['رياضة','مكان'], a:0, w:'<code>golf</code> رياضة.', f:'golf ← <u>رياضة</u>'},
        {p:'stadium', ask:'اختر', o:['مكان','رياضة'], a:0, w:'<code>stadium</code> مكانٌ للّعب.', f:'stadium ← <u>مكان</u>'},
        {p:'cycling', ask:'اختر', o:['رياضة','أداة'], a:0, w:'<code>cycling</code> رياضة.', f:'cycling ← <u>رياضة</u>'},
        {p:'whistle', ask:'اختر', o:['أداة','رياضة'], a:0, w:'<code>whistle</code> صافرةٌ (أداة).', f:'whistle ← <u>أداة</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'Our ___ won the game.', o:['team','stadium','whistle'], a:0, w:'الفريق ← <code>team</code>.', f:'Our <u>team</u> ...'},
        {p:'We watched the match at the ___ .', o:['stadium','whistle','winner'], a:0, w:'الملعب ← <code>stadium</code>.', f:'... the <u>stadium</u>.'},
        {p:'The ___ received a gold medal.', o:['winner','match','golf'], a:0, w:'الفائز ← <code>winner</code>.', f:'The <u>winner</u> ...'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'stadium', ask:'المعنى؟', o:['ملعب','فريق'], a:0, w:'ملعب.', f:'stadium ← <u>ملعب</u>'},
        {p:'صافرة', ask:'الكلمة؟', o:['whistle','winner'], a:0, w:'whistle.', f:'صافرة ← <u>whistle</u>'},
        {p:'golf', ask:'اختر', o:['رياضة','مكان'], a:0, w:'رياضة.', f:'golf ← <u>رياضة</u>'},
        {p:'Our ___ won the game.', ask:'اختر', o:['team','stadium'], a:0, w:'team.', f:'Our <u>team</u> ...'},
        {p:'competition', ask:'المعنى؟', o:['منافسة','ملعب'], a:0, w:'منافسة.', f:'competition ← <u>منافسة</u>'}
      ]}
    ]
  };
})();
