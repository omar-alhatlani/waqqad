/* ============================================================
   درس: Vocabulary — Greetings & People
   الإنجليزية · الثالث الابتدائي · ف١ · We Can! 3 · Unit 1 (It's Nice to Meet You!)
   مفرداتُ الوحدة (حقائقُ معجميّة)، والجملُ التوضيحيّة مؤلَّفةٌ أصالةً.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_WC3_U1_VOCAB'] = {
    id:'EN_WC3_U1_VOCAB',
    title:'Vocabulary — Greetings & People',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'كلماتُ التحيّةِ والتعارف',
      intro:'مفرداتٌ نستعملُها عند <b>التحيّةِ والتعارف</b>. أتقِنْها لتُحيّيَ وتُعرّفَ بنفسِك وبأصدقائك.',
      table:[['hello · hi','مرحبًا'],['name · friend','اسم · صديق'],['meet','يُقابِل / يتعرّف'],['teacher · student','معلّم · طالب'],['boy · girl','ولد · بنت']],
      examples:['<code>Hello</code>, my <code>name</code> is Omar. (مرحبًا، اسمي عمر.)','She is my <code>friend</code> and my <code>teacher</code>. (هي صديقتي ومعلّمتي.)'],
      trick:'ابدأِ التعارفَ بـ <span class="en">Hello</span>، ثمّ قُلِ اسمَك: <span class="en">My name is …</span>'
    },
    stages:[
      { type:'choice', name:'الكلمة ← المعنى', hint:'اختر المعنى العربيّ', qs:[
        {p:'hello', ask:'المعنى؟', o:['مرحبًا','وداعًا'], a:0, w:'<code>hello</code> = مرحبًا.', f:'← <u>مرحبًا</u>'},
        {p:'friend', ask:'المعنى؟', o:['صديق','معلّم'], a:0, w:'<code>friend</code> = صديق.', f:'← <u>صديق</u>'},
        {p:'name', ask:'المعنى؟', o:['اسم','ولد'], a:0, w:'<code>name</code> = اسم.', f:'← <u>اسم</u>'},
        {p:'teacher', ask:'المعنى؟', o:['معلّم','طالب'], a:0, w:'<code>teacher</code> = معلّم.', f:'← <u>معلّم</u>'},
        {p:'meet', ask:'المعنى؟', o:['يتعرّف','ينام'], a:0, w:'<code>meet</code> = يُقابِل/يتعرّف.', f:'← <u>يتعرّف</u>'}
      ]},
      { type:'choice', name:'المعنى ← الكلمة', hint:'اختر الكلمة الإنجليزية', qs:[
        {p:'طالب', ask:'الكلمة؟', o:['student','teacher'], a:0, w:'طالب = <code>student</code>.', f:'← <u>student</u>'},
        {p:'بنت', ask:'الكلمة؟', o:['girl','boy'], a:0, w:'بنت = <code>girl</code>.', f:'← <u>girl</u>'},
        {p:'ولد', ask:'الكلمة؟', o:['boy','girl'], a:0, w:'ولد = <code>boy</code>.', f:'← <u>boy</u>'},
        {p:'صديق', ask:'الكلمة؟', o:['friend','name'], a:0, w:'صديق = <code>friend</code>.', f:'← <u>friend</u>'},
        {p:'مرحبًا', ask:'الكلمة؟', o:['hello','goodbye'], a:0, w:'مرحبًا = <code>hello</code>.', f:'← <u>hello</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'___ , my name is Sara.', o:['Hello','Goodbye','Fork'], a:0, w:'نبدأُ بالتحيّة ← <code>Hello</code>.', f:'<u>Hello</u>, my name is Sara.'},
        {p:'My ___ is Ali.', o:['name','boy','meet'], a:0, w:'اسمي ← <code>name</code>.', f:'My <u>name</u> is Ali.'},
        {p:'She is my best ___ .', o:['friend','teacher','girl'], a:0, w:'أعزُّ صديق ← <code>friend</code>.', f:'... best <u>friend</u>.'},
        {p:'Nice to ___ you.', o:['meet','name','hello'], a:0, w:'سعيدٌ بلقائك ← <code>meet</code>.', f:'Nice to <u>meet</u> you.'}
      ]},
      { type:'error', name:'الكلمة الغريبة', hint:'انقر ما لا ينتمي', qs:[
        {words:['teacher','student','friend','hello'], bad:3, fix:'مثال: boy', w:'<code>hello</code> تحيّةٌ، والبقيّةُ أشخاص.', f:'... · <u>hello</u> (تحيّة)'},
        {words:['hello','hi','name','goodbye'], bad:2, fix:'مثال: welcome', w:'<code>name</code> اسمٌ، والبقيّةُ تحيّات/وداع.', f:'... · <u>name</u> (ليست تحيّة)'},
        {words:['boy','girl','student','meet'], bad:3, fix:'مثال: teacher', w:'<code>meet</code> فعلٌ، والبقيّةُ أشخاص.', f:'... · <u>meet</u> (فعل)'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'friend', ask:'المعنى؟', o:['صديق','معلّم'], a:0, w:'صديق.', f:'← <u>صديق</u>'},
        {p:'معلّم', ask:'الكلمة؟', o:['teacher','student'], a:0, w:'teacher.', f:'← <u>teacher</u>'},
        {p:'___ , I am Nora.', ask:'اختر', o:['Hello','Fork'], a:0, w:'تحيّة.', f:'<u>Hello</u>, I am Nora.'},
        {p:'name', ask:'المعنى؟', o:['اسم','بنت'], a:0, w:'اسم.', f:'← <u>اسم</u>'},
        {p:'Nice to ___ you.', ask:'اختر', o:['meet','name'], a:0, w:'meet.', f:'Nice to <u>meet</u> you.'}
      ]}
    ]
  };
})();
