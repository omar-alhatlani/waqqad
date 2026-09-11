/* ============================================================
   درس: Vocabulary — Sea Animals
   الإنجليزية · الثالث الابتدائي · ف١ · We Can! 3 · Unit 2 (Sea Animals)
   مفرداتُ الوحدة (حقائقُ معجميّة)، والجملُ التوضيحيّة مؤلَّفةٌ أصالةً.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_WC3_U2_VOCAB'] = {
    id:'EN_WC3_U2_VOCAB',
    title:'Vocabulary — Sea Animals',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'حيواناتُ البحر',
      intro:'مفرداتٌ عن <b>حيواناتِ البحر</b>. أتقِنْها لتصفَ ما تراه في البحرِ والحوضِ المائيّ.',
      table:[['dolphin · whale','دُلفين · حوت'],['seal · turtle','فقمة · سلحفاة'],['seahorse · crab','حصان البحر · سلطعون'],['shark · fish','قِرش · سمكة'],['big · small','كبير · صغير']],
      examples:['The <code>dolphin</code> is a <code>big</code> sea animal. (الدلفينُ حيوانٌ بحريٌّ كبير.)','A <code>turtle</code> swims slowly in the sea. (السلحفاةُ تسبحُ ببطء.)'],
      trick:'تخيّلِ البحر: <span class="en">whale</span> أكبرُها، و<span class="en">seahorse</span> صغيرٌ يشبهُ الحصان، و<span class="en">crab</span> له كمّاشتان.'
    },
    stages:[
      { type:'choice', name:'الكلمة ← المعنى', hint:'اختر المعنى العربيّ', qs:[
        {p:'dolphin', ask:'المعنى؟', o:['دُلفين','حوت'], a:0, w:'<code>dolphin</code> = دُلفين.', f:'← <u>دُلفين</u>'},
        {p:'turtle', ask:'المعنى؟', o:['سلحفاة','فقمة'], a:0, w:'<code>turtle</code> = سلحفاة.', f:'← <u>سلحفاة</u>'},
        {p:'shark', ask:'المعنى؟', o:['قِرش','سمكة'], a:0, w:'<code>shark</code> = قِرش.', f:'← <u>قِرش</u>'},
        {p:'whale', ask:'المعنى؟', o:['حوت','سلطعون'], a:0, w:'<code>whale</code> = حوت.', f:'← <u>حوت</u>'},
        {p:'seahorse', ask:'المعنى؟', o:['حصان البحر','فقمة'], a:0, w:'<code>seahorse</code> = حصان البحر.', f:'← <u>حصان البحر</u>'}
      ]},
      { type:'choice', name:'المعنى ← الكلمة', hint:'اختر الإنجليزية', qs:[
        {p:'فقمة', ask:'الكلمة؟', o:['seal','crab'], a:0, w:'فقمة = <code>seal</code>.', f:'← <u>seal</u>'},
        {p:'سلطعون', ask:'الكلمة؟', o:['crab','shark'], a:0, w:'سلطعون = <code>crab</code>.', f:'← <u>crab</u>'},
        {p:'سمكة', ask:'الكلمة؟', o:['fish','whale'], a:0, w:'سمكة = <code>fish</code>.', f:'← <u>fish</u>'},
        {p:'حوت', ask:'الكلمة؟', o:['whale','dolphin'], a:0, w:'حوت = <code>whale</code>.', f:'← <u>whale</u>'},
        {p:'سلحفاة', ask:'الكلمة؟', o:['turtle','seal'], a:0, w:'سلحفاة = <code>turtle</code>.', f:'← <u>turtle</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'The blue ___ is the biggest sea animal.', o:['whale','crab','fish'], a:0, w:'الحوتُ الأزرقُ الأكبر ← <code>whale</code>.', f:'The blue <u>whale</u> ...'},
        {p:'A ___ has a hard shell and swims slowly.', o:['turtle','dolphin','shark'], a:0, w:'السلحفاةُ لها صَدَفة ← <code>turtle</code>.', f:'A <u>turtle</u> ...'},
        {p:'The ___ has sharp teeth.', o:['shark','seahorse','seal'], a:0, w:'القِرشُ له أسنانٌ حادّة ← <code>shark</code>.', f:'The <u>shark</u> ...'},
        {p:'A ___ walks with big claws.', o:['crab','fish','whale'], a:0, w:'السلطعونُ له كمّاشتان ← <code>crab</code>.', f:'A <u>crab</u> ...'}
      ]},
      { type:'error', name:'الكلمة الغريبة', hint:'انقر ما لا ينتمي', qs:[
        {words:['dolphin','whale','shark','big'], bad:3, fix:'مثال: seal', w:'<code>big</code> صفةٌ، والبقيّةُ حيواناتٌ بحريّة.', f:'... · <u>big</u> (صفة)'},
        {words:['turtle','seal','crab','small'], bad:3, fix:'مثال: fish', w:'<code>small</code> صفةٌ، والبقيّةُ حيوانات.', f:'... · <u>small</u> (صفة)'},
        {words:['seahorse','dolphin','whale','teacher'], bad:3, fix:'مثال: shark', w:'<code>teacher</code> شخصٌ، والبقيّةُ حيواناتٌ بحريّة.', f:'... · <u>teacher</u> (ليست حيوانًا بحريًّا)'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'shark', ask:'المعنى؟', o:['قِرش','حوت'], a:0, w:'قِرش.', f:'← <u>قِرش</u>'},
        {p:'دُلفين', ask:'الكلمة؟', o:['dolphin','seal'], a:0, w:'dolphin.', f:'← <u>dolphin</u>'},
        {p:'The ___ is very big.', ask:'اختر', o:['whale','crab'], a:0, w:'الحوتُ كبير.', f:'The <u>whale</u> is very big.'},
        {p:'turtle', ask:'المعنى؟', o:['سلحفاة','سلطعون'], a:0, w:'سلحفاة.', f:'← <u>سلحفاة</u>'},
        {p:'سمكة', ask:'الكلمة؟', o:['fish','whale'], a:0, w:'fish.', f:'← <u>fish</u>'}
      ]}
    ]
  };
})();
