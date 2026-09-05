/* ============================================================
   Lesson: Requests & Commands + Reporting them
   English · Super Goal 3 · Unit 8 (Drive Slowly!) · صفحة ٨٦/٩٢
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U8_REQCMD'] = {
    id:'EN_SG3_U8_REQCMD',
    title:'Requests, Commands & Reporting',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'requests · commands · reported speech',
      intro:'نطلب بـ <code>Can/Could/Will/Would you + الفعل?</code> (<code>Could you slow down?</code>). والأمرُ يبدأ بالفعل المجرّد (<code>Stop! / Turn left</code>). و<b>نقلُ</b> الطلبات والأوامر يكون بـ <code>tell/ask + مفعول + to + الفعل</code>: <code>“Stop!” → He told me to stop</code> / <code>“Please wait.” → She asked me to wait</code>. والنفيُ المنقول: <code>not to</code> (<code>told him not to speed</code>).',
      table:[['request','Could you help me?'],['command','Turn left. / Slow down.'],['reported command','He told me to stop.'],['reported request','She asked me to wait.']],
      trick:'الأمرُ المنقول ← <code>told + مفعول + to + الفعل</code>، والطلبُ المنقول ← <code>asked + مفعول + to + الفعل</code>. والنفيُ ← <code>not to</code>.'
    },
    stages:[
      { type:'choice', name:'الطلبات والأوامر', hint:'مؤدَّب أم أمر مباشر؟', qs:[
        {p:'___ you slow down, please?', o:['Could','Do','Are','Have'], a:0, w:'طلبٌ مؤدَّب ← <code>Could</code>.', f:'<u>Could</u> you slow down?'},
        {p:'A command starts with the ___.', o:['base verb','subject','a modal'], a:0, w:'الفعل المجرّد.', f:'the <u>base verb</u>'},
        {p:'“Turn left” is a:', o:['command','question','request'], a:0, w:'أمر.', f:'a <u>command</u>'},
        {p:'Could you ___ me the way?', o:['show','shows','showing','to show'], a:0, w:'مجرّد.', f:'Could you <u>show</u> me…?'}
      ]},
      { type:'choice', name:'نقل الأوامر', hint:'told + object + to', qs:[
        {p:'“Stop!” → The officer told me ___ stop.', o:['to','—','that','for'], a:0, w:'<code>to stop</code>.', f:'told me <u>to</u> stop'},
        {p:'“Slow down.” → He told them ___ slow down.', o:['to','—','that','for'], a:0, w:'<code>to slow down</code>.', f:'told them <u>to</u> slow down'},
        {p:'The teacher told us to ___ quiet.', o:['be','are','being','been'], a:0, w:'مجرّد بعد <code>to</code>.', f:'told us <u>to be</u> quiet'},
        {p:'To report a command we use:', o:['tell + object + to','say that','ask if'], a:0, w:'<code>tell + object + to</code>.', f:'<u>tell + object + to</u>'}
      ]},
      { type:'choice', name:'نقل الطلبات والنفي', hint:'asked … / not to', qs:[
        {p:'“Please wait.” → She asked me ___ wait.', o:['to','—','that','for'], a:0, w:'<code>asked me to wait</code>.', f:'asked me <u>to</u> wait'},
        {p:'“Don’t speed.” → He told me ___ speed.', o:['not to','to not','to','don’t'], a:0, w:'النفي المنقول ← <code>not to</code>.', f:'told me <u>not to</u> speed'},
        {p:'“Please don’t be late.” → She asked us ___ be late.', o:['not to','to not','not','to'], a:0, w:'<code>not to be late</code>.', f:'asked us <u>not to</u> be late'},
        {p:'A reported request uses:', o:['ask + object + to','say that','tell if'], a:0, w:'<code>ask + object + to</code>.', f:'<u>ask + object + to</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['He','told','me','stop','.'], bad:3, fix:'to stop', w:'نحتاج <code>to</code>.', f:'He told me <u>to stop</u>.'},
        {words:['She','asked','me','to','not','wait','.'], bad:4, fix:'الترتيب: not to', w:'النفي ← <code>not to wait</code>.', f:'…me <u>not to</u> wait.'},
        {words:['Could','you','slowing','down','?'], bad:2, fix:'slow', w:'مجرّد بعد <code>Could you</code>.', f:'Could you <u>slow</u> down?'},
        {words:['He','said','me','to','stop','.'], bad:1, fix:'told', w:'نقلُ الأمر ← <code>told me to</code>.', f:'He <u>told</u> me to stop.'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['Could','you','slow','down',',','please','?'], w:'طلبٌ مؤدَّب.', f:'Could you slow down, please?'},
        {sol:['The','officer','told','me','to','stop','.'], w:'<code>told + object + to</code>.', f:'The officer told me to stop.'},
        {sol:['She','asked','me','to','wait','.'], w:'<code>asked + object + to</code>.', f:'She asked me to wait.'},
        {sol:['He','told','me','not','to','speed','.'], w:'النفي ← <code>not to</code>.', f:'He told me not to speed.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'___ you slow down?', ask:'اختر', o:['Could','Do'], a:0, w:'طلب.', f:'<u>Could</u>'},
        {p:'“Turn left” is a ___.', ask:'اختر', o:['command','question'], a:0, w:'أمر.', f:'<u>command</u>'},
        {p:'He told me ___ stop.', ask:'اختر', o:['to','—'], a:0, w:'<code>to stop</code>.', f:'<u>to</u>'},
        {p:'She asked me ___ wait.', ask:'اختر', o:['to','that'], a:0, w:'<code>to wait</code>.', f:'<u>to</u>'},
        {p:'“Don’t speed.” → told me ___ speed.', ask:'اختر', o:['not to','to not'], a:0, w:'النفي.', f:'<u>not to</u>'},
        {p:'report a command:', ask:'اختر', o:['tell + object + to','say that'], a:0, w:'<code>tell + object + to</code>.', f:'<u>tell + object + to</u>'},
        {sol:['He','told','me','to','stop','.'], w:'نقلُ الأمر.', f:'He told me to stop.'},
        {p:'Could you ___ me the way?', ask:'الفعل', o:['show','shows'], a:0, w:'مجرّد.', f:'<u>show</u>'},
        {p:'report a request:', ask:'اختر', o:['ask + object + to','tell if'], a:0, w:'<code>ask + object + to</code>.', f:'<u>ask + object + to</u>'}
      ]}
    ]
  };
})();
