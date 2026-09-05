/* ============================================================
   Lesson: Object Pronouns
   English · Super Goal 1 · Unit 14 (Let's Celebrate) · صفحة ١٢٨
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U14_PRON'] = {
    id:'EN_SG1_U14_PRON',
    title:'Object Pronouns',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'me, you, him, her, it, us, them',
      intro:'<b>ضمائرُ المفعول</b> تحلّ محلَّ الاسم <b>بعد الفعل أو حرف الجرّ</b>: <code>I → me</code>, <code>he → him</code>, <code>she → her</code>, <code>it → it</code>, <code>we → us</code>, <code>they → them</code>, <code>you → you</code>. مثال: <code>I like Ali → I like him</code> / <code>Send the cards to them</code>.',
      table:[['I / me','He knows me.'],['he / him','I called him.'],['she / her','We invited her.'],['they / them','Send it to them.']],
      trick:'ضميرُ الفاعل يأتي <b>قبل</b> الفعل، وضميرُ المفعول <b>بعده</b>: <code>She saw him</code> لا <code>She saw he</code>.'
    },
    stages:[
      { type:'choice', name:'اختر ضمير المفعول', hint:'بعد الفعل', qs:[
        {p:'I like Ali. I like ___.', o:['him','he','his','they'], a:0, w:'<code>Ali → him</code>.', f:'I like <u>him</u>.'},
        {p:'Do you know Sara? Yes, I know ___.', o:['her','she','hers','him'], a:0, w:'<code>Sara → her</code>.', f:'I know <u>her</u>.'},
        {p:'These are my friends. I invited ___.', o:['them','they','their','it'], a:0, w:'<code>friends → them</code>.', f:'I invited <u>them</u>.'},
        {p:'This is a nice book. I like ___.', o:['it','its','them','him'], a:0, w:'<code>book → it</code>.', f:'I like <u>it</u>.'}
      ]},
      { type:'choice', name:'بعد حرف الجرّ', hint:'to / with / for + ضمير المفعول', qs:[
        {p:'Send the cards to ___. (they)', o:['them','they','their'], a:0, w:'بعد <code>to</code> ← <code>them</code>.', f:'to <u>them</u>'},
        {p:'Come with ___. (I)', o:['me','I','my'], a:0, w:'بعد <code>with</code> ← <code>me</code>.', f:'with <u>me</u>'},
        {p:'This gift is for ___. (she)', o:['her','she','hers'], a:0, w:'بعد <code>for</code> ← <code>her</code>.', f:'for <u>her</u>'},
        {p:'He is talking to ___. (we)', o:['us','we','our'], a:0, w:'بعد <code>to</code> ← <code>us</code>.', f:'to <u>us</u>'}
      ]},
      { type:'choice', name:'فاعل أم مفعول', hint:'قبل الفعل أم بعده؟', qs:[
        {p:'___ knows the answer. (he)', o:['He','Him','His'], a:0, w:'فاعلٌ قبل الفعل ← <code>He</code>.', f:'<u>He</u> knows…'},
        {p:'The teacher helped ___. (they)', o:['them','they','their'], a:0, w:'مفعولٌ بعد الفعل ← <code>them</code>.', f:'helped <u>them</u>'},
        {p:'___ are my classmates. (they)', o:['They','Them','Their'], a:0, w:'فاعلٌ ← <code>They</code>.', f:'<u>They</u> are…'},
        {p:'Can you help ___? (I)', o:['me','I','my'], a:0, w:'مفعولٌ ← <code>me</code>.', f:'help <u>me</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['I','like','he','.'], bad:2, fix:'him', w:'مفعولٌ ← <code>him</code>.', f:'I like <u>him</u>.'},
        {words:['She','saw','they','.'], bad:2, fix:'them', w:'مفعولٌ ← <code>them</code>.', f:'She saw <u>them</u>.'},
        {words:['Come','with','I','.'], bad:2, fix:'me', w:'بعد حرف الجرّ ← <code>me</code>.', f:'Come with <u>me</u>.'},
        {words:['Send','it','to','she','.'], bad:3, fix:'her', w:'بعد <code>to</code> ← <code>her</code>.', f:'…to <u>her</u>.'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['I','invited','them','to','the','party','.'], w:'مفعولٌ بعد الفعل.', f:'I invited them to the party.'},
        {sol:['This','gift','is','for','her','.'], w:'بعد <code>for</code> ← <code>her</code>.', f:'This gift is for her.'},
        {sol:['Send','the','cards','to','them','.'], w:'بعد <code>to</code> ← <code>them</code>.', f:'Send the cards to them.'},
        {sol:['Can','you','help','me','?'], w:'مفعولٌ ← <code>me</code>.', f:'Can you help me?'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'I like Ali. I like ___.', ask:'اختر', o:['him','he'], a:0, w:'مفعول.', f:'<u>him</u>'},
        {p:'I know Sara. I know ___.', ask:'اختر', o:['her','she'], a:0, w:'مفعول.', f:'<u>her</u>'},
        {p:'I invited my friends. I invited ___.', ask:'اختر', o:['them','they'], a:0, w:'مفعول.', f:'<u>them</u>'},
        {p:'Come with ___. (I)', ask:'اختر', o:['me','I'], a:0, w:'بعد حرف الجرّ.', f:'<u>me</u>'},
        {p:'This gift is for ___. (she)', ask:'اختر', o:['her','she'], a:0, w:'بعد <code>for</code>.', f:'<u>her</u>'},
        {p:'___ knows the answer. (he)', ask:'اختر', o:['He','Him'], a:0, w:'فاعل.', f:'<u>He</u>'},
        {sol:['Send','it','to','them','.'], w:'بعد <code>to</code>.', f:'Send it to them.'},
        {p:'He is talking to ___. (we)', ask:'اختر', o:['us','we'], a:0, w:'مفعول.', f:'<u>us</u>'},
        {p:'I like this book. I like ___.', ask:'اختر', o:['it','its'], a:0, w:'<code>it</code>.', f:'<u>it</u>'}
      ]}
    ]
  };
})();
