/* ============================================================
   Lesson: Want / Tell / Ask + object + infinitive
   English · Super Goal 2 · Unit 14 (Could You Do Me a Favor?) · صفحة ١٢٦/١٣٠
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U14_TELLASK'] = {
    id:'EN_SG2_U14_TELLASK',
    title:'want / tell / ask + object + infinitive',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'verb + object + to + verb',
      intro:'بعد أفعالٍ مثل <code>want, tell, ask</code> نضع <b>مفعولًا</b> (اسمًا أو ضميرَ مفعول) ثمّ <b>مصدرًا</b> (<code>to + verb</code>): <code>I want you to help. She told him to wait. Ask your father to help Imad</code>. ونستعمل ضمائرَ المفعول: <code>me, you, him, her, it, us, them</code>.',
      table:[['want','I want you to stay.'],['tell','She told him to wait.'],['ask','Ask her to call me.'],['pattern','verb + object + to + verb']],
      trick:'النمطُ الثابت: <b>الفعل + المفعول + to + الفعل</b>. المفعولُ ضميرُ مفعولٍ (<code>him</code>) لا فاعل (<code>he</code>): <code>I want him to go</code> لا <code>I want he to go</code>.'
    },
    stages:[
      { type:'choice', name:'want + object + to', hint:'أريد أن يفعل', qs:[
        {p:'I want ___ to help me.', o:['you','your','yours','yourself'], a:0, w:'مفعولٌ ← <code>you</code>.', f:'want <u>you</u> to help'},
        {p:'She wants him ___ wait.', o:['to','—','for','that'], a:0, w:'مصدر ← <code>to wait</code>.', f:'wants him <u>to</u> wait'},
        {p:'They want us ___ them.', o:['to help','help','helping','helped'], a:0, w:'<code>to + الفعل</code>.', f:'want us <u>to help</u>'},
        {p:'I want ___ to stay. (he)', o:['him','he','his','himself'], a:0, w:'ضميرُ مفعول ← <code>him</code>.', f:'want <u>him</u> to stay'}
      ]},
      { type:'choice', name:'tell + object + to', hint:'يخبر/يأمر أن يفعل', qs:[
        {p:'She told him ___ wait.', o:['to','—','for','that'], a:0, w:'<code>to wait</code>.', f:'told him <u>to</u> wait'},
        {p:'The teacher told the students ___ quiet.', o:['to be','be','being','are'], a:0, w:'<code>to be</code>.', f:'told them <u>to be</u> quiet'},
        {p:'Tell Mona and Imad ___ me.', o:['to help','help','helping','helped'], a:0, w:'<code>to help</code>.', f:'Tell them <u>to help</u> me'},
        {p:'My mother told ___ to clean my room. (I)', o:['me','I','my','mine'], a:0, w:'مفعولٌ ← <code>me</code>.', f:'told <u>me</u> to clean'}
      ]},
      { type:'choice', name:'ask + object + to', hint:'يطلب أن يفعل', qs:[
        {p:'Ask your father ___ help Imad.', o:['to','—','for','that'], a:0, w:'<code>to help</code>.', f:'Ask him <u>to</u> help'},
        {p:'I asked her ___ me back.', o:['to call','call','calling','called'], a:0, w:'<code>to call</code>.', f:'asked her <u>to call</u> me'},
        {p:'She asked ___ to close the window. (they)', o:['them','they','their','theirs'], a:0, w:'ضميرُ مفعول ← <code>them</code>.', f:'asked <u>them</u> to close'},
        {p:'The pattern is: verb + object + ___ + verb.', o:['to','that','for','—'], a:0, w:'<code>to</code>.', f:'+ <u>to</u> + verb'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['I','want','he','to','help','.'], bad:2, fix:'him', w:'ضميرُ مفعول ← <code>him</code>.', f:'I want <u>him</u> to help.'},
        {words:['She','told','him','wait','.'], bad:3, fix:'to wait', w:'نحتاج <code>to</code> قبل الفعل.', f:'told him <u>to wait</u>.'},
        {words:['Ask','your','father','helps','you','.'], bad:3, fix:'to help', w:'<code>ask + object + to + verb</code>.', f:'Ask him <u>to help</u> you.'},
        {words:['I','want','you','helping','me','.'], bad:3, fix:'to help', w:'مصدر ← <code>to help</code>.', f:'want you <u>to help</u> me'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['I','want','you','to','help','me','.'], w:'<code>want + مفعول + to + الفعل</code>.', f:'I want you to help me.'},
        {sol:['She','told','him','to','wait','.'], w:'<code>tell + object + to</code>.', f:'She told him to wait.'},
        {sol:['Ask','her','to','call','me','.'], w:'<code>ask + object + to</code>.', f:'Ask her to call me.'},
        {sol:['They','want','us','to','stay','.'], w:'<code>want + object + to</code>.', f:'They want us to stay.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'I want ___ to help. (he)', ask:'اختر', o:['him','he'], a:0, w:'مفعول.', f:'<u>him</u>'},
        {p:'She wants him ___ wait.', ask:'اختر', o:['to','—'], a:0, w:'مصدر.', f:'<u>to</u>'},
        {p:'told him ___ wait', ask:'اختر', o:['to','for'], a:0, w:'<code>to wait</code>.', f:'<u>to</u>'},
        {p:'Ask your father ___ help.', ask:'اختر', o:['to','—'], a:0, w:'<code>to help</code>.', f:'<u>to</u>'},
        {p:'My mother told ___ to clean. (I)', ask:'اختر', o:['me','I'], a:0, w:'مفعول.', f:'<u>me</u>'},
        {p:'I asked her ___ me. (call)', ask:'اختر', o:['to call','call'], a:0, w:'مصدر.', f:'<u>to call</u>'},
        {sol:['I','want','you','to','stay','.'], w:'<code>want + object + to</code>.', f:'I want you to stay.'},
        {p:'She asked ___ to close it. (they)', ask:'اختر', o:['them','they'], a:0, w:'مفعول.', f:'<u>them</u>'},
        {p:'pattern: verb + object + ___ + verb', ask:'اختر', o:['to','that'], a:0, w:'<code>to</code>.', f:'<u>to</u>'}
      ]}
    ]
  };
})();
