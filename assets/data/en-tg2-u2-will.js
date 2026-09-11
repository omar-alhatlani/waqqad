/* ============================================================
   درس: Grammar — Future with will (المستقبل بـ will)
   الإنجليزية · الخامس الابتدائي · ف١ · Top Goal 2 · Unit 2 (House Designs)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG2_U2_WILL'] = {
    id:'EN_TG2_U2_WILL',
    title:'Grammar — Future with will',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'المستقبل بـ will',
      intro:'نعبّرُ عن المستقبل بـ <span class="tok-focus">will</span> + الفعلَ <b>المجرَّد</b>، لِقرارٍ لحظيّ أو توقّعٍ أو وعد. والنفيُ <span class="tok-focus">won\'t</span> (= will not). والفعلُ بعد <span class="tok-focus">will</span> لا يتغيّرُ مع أيّ فاعل (بلا -s وبلا to).',
      formula:'<span class="tok-focus">will</span> + base &nbsp;·&nbsp; نفي: <span class="tok-focus">won\'t</span> + base',
      table:[['الإثبات','I <span class="tok-focus">will</span> help you.'],['النفي','I <span class="tok-focus">won\'t</span> forget.'],['بعد will','فعلٌ مجرَّد (بلا -s / to)'],['مع الجميع','he/they <span class="tok-focus">will</span> go (لا يتغيّر)']],
      examples:['I <span class="tok-focus">will</span> look for the key. (قرار)','We <span class="tok-focus">won\'t</span> come here again. (نفي)'],
      trick:'<span class="tok-focus">will</span> + فعلٌ مجرَّدٌ للجميع. والنفيُ <span class="tok-focus">won\'t</span>. لا تضِفْ -s ولا to بعد will.'
    },
    stages:[
      { type:'choice', name:'الشكلُ الصحيح', hint:'will + مجرَّد', qs:[
        {p:'I ___ help you tomorrow.', ask:'اختر', o:['will','am'], a:0, w:'مستقبلٌ ← <code>will help</code>.', f:'I <u>will</u> help ...'},
        {p:'She will ___ the door.', ask:'اختر', o:['open','opens'], a:0, w:'بعد will فعلٌ مجرَّد.', f:'... will <u>open</u> ...'},
        {p:'We ___ come here again. (نفي)', ask:'اختر', o:["won't","don't"], a:0, w:'نفيُ المستقبل ← <code>won\'t</code>.', f:'We <u>won\'t</u> come ...'},
        {p:'They will ___ a new house.', ask:'اختر', o:['build','builds'], a:0, w:'فعلٌ مجرَّد.', f:'... will <u>build</u> ...'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'will/won\'t + مجرَّد', qs:[
        {p:'It is hot; I ___ open the window.', o:['will','am'], a:0, w:'قرارٌ ← will.', f:'I <u>will</u> open ...'},
        {p:'He ___ forget his promise. (نفي)', o:["won't",'will'], a:0, w:'نفي ← won\'t.', f:'He <u>won\'t</u> forget ...'},
        {p:'We will ___ the design later.', o:['choose','chooses','to choose'], a:0, w:'مجرَّدٌ بلا to/-s.', f:'... will <u>choose</u> ...'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['She','will','opens','the','gate','.'], bad:2, fix:'open', w:'بعد will مجرَّدٌ بلا -s.', f:'She will <u>open</u> the gate.'},
        {words:['I','will','to','call','you','.'], bad:2, fix:'تُحذف', w:'بعد will بلا <code>to</code>.', f:'I will <u>call</u> you.'},
        {words:['We','not','will','come','.'], bad:1, fix:"won't (بعد الفاعل)", w:'النفيُ <code>won\'t</code>: We won\'t come.', f:'We <u>won\'t</u> come.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['I','will','help','you','.'], w:'<code>will + مجرَّد</code>.', f:'I will help you.'},
        {sol:['We','won\'t','be','late','.'], w:'النفيُ <code>won\'t</code>.', f:'We won\'t be late.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'I ___ help you.', ask:'اختر', o:['will','am'], a:0, w:'will.', f:'I <u>will</u> help ...'},
        {p:'She will ___ the door.', ask:'اختر', o:['open','opens'], a:0, w:'مجرَّد.', f:'... <u>open</u> ...'},
        {p:'نفيُ will:', ask:'اختر', o:["won't","doesn't"], a:0, w:'won\'t.', f:'← <u>won\'t</u>'},
        {p:'بعد will يأتي:', ask:'اختر', o:['فعلٌ مجرَّد','to + فعل'], a:0, w:'مجرَّد.', f:'← <u>فعلٌ مجرَّد</u>'},
        {p:'They will ___ a house.', ask:'اختر', o:['build','builds'], a:0, w:'مجرَّد.', f:'... <u>build</u> ...'}
      ]}
    ]
  };
})();
