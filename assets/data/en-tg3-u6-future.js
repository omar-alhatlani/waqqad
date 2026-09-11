/* ============================================================
   درس: Grammar — Future: will / be going to (المستقبل)
   الإنجليزية · السادس الابتدائي · ف١ · Top Goal 3 · Unit 6 (Environments)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG3_U6_FUTURE'] = {
    id:'EN_TG3_U6_FUTURE',
    title:'Grammar — Future: will / be going to',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'المستقبل: will / be going to',
      intro:'للتعبير عن المستقبل طريقتان: <span class="tok-focus">will</span> + الفعلَ المجرَّد لِقرارٍ لحظيّ أو توقّعٍ أو وعد («I <span class="tok-focus">will</span> help you»)، و<span class="tok-focus">be going to</span> + الفعلَ المجرَّد لخطّةٍ مقرّرةٍ سابقًا («We <span class="tok-focus">are going to</span> visit the castle»). ومع <span class="tok-focus">going to</span> نصرّفُ be: am/is/are (والجمعُ المنتهي بـ <span class="tok-plural">s</span> يأخذ <span class="tok-focus">are</span>).',
      formula:'<span class="tok-focus">will</span> + base&nbsp;&nbsp;·&nbsp;&nbsp;am/is/<span class="tok-focus">are</span> <span class="tok-focus">going to</span> + base',
      table:[['قرارٌ/توقّع','I <span class="tok-focus">will</span> call you.'],['خطّةٌ مقرَّرة','We <span class="tok-focus">are going to</span> travel.'],['بعد will','الفعلُ مجرَّدٌ (بلا -s / to)'],['going to + جمع','They <span class="tok-focus">are going to</span> win.']],
      examples:['Look at the clouds — it <span class="tok-focus">is going to</span> rain. (دليلٌ حاضر)','Don\'t worry, I <span class="tok-focus">will</span> carry the bag<span class="tok-plural">s</span>. (قرارٌ لحظيّ)'],
      trick:'قرارٌ الآن أو توقّعٌ ← <span class="tok-focus">will</span> + مجرَّد. خطّةٌ سابقةٌ ← <span class="tok-focus">be going to</span> + مجرَّد.'
    },
    stages:[
      { type:'choice', name:'will أم going to؟', hint:'قرارٌ لحظيّ ← will · خطّةٌ سابقة ← going to', qs:[
        {p:'The bag is heavy. I ___ help you.', ask:'اختر', o:['will','am going to'], a:0, w:'قرارٌ لحظيّ ← <code>will</code>.', f:'I <u>will</u> help you.'},
        {p:'We booked tickets; we ___ visit the castle.', ask:'اختر', o:['are going to','will'], a:0, w:'خطّةٌ مقرَّرة ← <code>are going to</code>.', f:'... <u>are going to</u> visit ...'},
        {p:'Look at the sky — it ___ rain.', ask:'اختر', o:['is going to','will be'], a:0, w:'دليلٌ حاضر ← <code>is going to</code>.', f:'... <u>is going to</u> rain.'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'will + مجرّد · be going to + مجرّد', qs:[
        {p:'They ___ going to climb the hill.', o:['are','is','will'], a:0, w:'جمعٌ (They) ← <code>are going to</code>.', f:'They <u>are</u> going to climb ...'},
        {p:'I think it ___ be cold tomorrow.', o:['will','are','going'], a:0, w:'توقّعٌ ← <code>will be</code>.', f:'... it <u>will</u> be cold ...'},
        {p:'She is going to ___ the cave.', o:['explore','explores','explored'], a:0, w:'بعد going to الفعلُ مجرَّد.', f:'... going to <u>explore</u> ...'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['I','will','to','help','you','.'], bad:2, fix:'تُحذف', w:'بعد <code>will</code> الفعلُ مجرَّدٌ بلا <code>to</code>.', f:'I will <u>help</u> you.'},
        {words:['They','is','going','to','win','.'], bad:1, fix:'are', w:'جمعٌ (They) ← <code>are going to</code>.', f:'They <u>are</u> going to win.'},
        {words:['It','will','rains','tomorrow','.'], bad:2, fix:'rain', w:'بعد <code>will</code> فعلٌ مجرَّدٌ بلا -s.', f:'It will <u>rain</u> tomorrow.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['I','will','help','you','.'], w:'<code>will + مجرَّد</code>.', f:'I will help you.'},
        {sol:['We','are','going','to','travel','.'], w:'<code>are going to + مجرَّد</code>.', f:'We are going to travel.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'The bag is heavy. I ___ help you.', ask:'اختر', o:['will','am going to'], a:0, w:'قرارٌ لحظيّ ← will.', f:'I <u>will</u> help.'},
        {p:'We booked tickets; we ___ travel.', ask:'اختر', o:['are going to','will'], a:0, w:'خطّة ← are going to.', f:'... <u>are going to</u> ...'},
        {p:'بعد will يأتي:', ask:'اختر', o:['الفعل مجرَّدًا','to + الفعل'], a:0, w:'الفعلُ مجرَّدٌ بلا to/-s.', f:'← <u>الفعل مجرَّدًا</u>'},
        {p:'They ___ going to win.', ask:'اختر', o:['are','is'], a:0, w:'جمع ← are.', f:'They <u>are</u> going to win.'},
        {p:'Look at the sky — it ___ rain.', ask:'اختر', o:['is going to','will to'], a:0, w:'دليلٌ حاضر ← is going to.', f:'... <u>is going to</u> rain.'}
      ]}
    ]
  };
})();
