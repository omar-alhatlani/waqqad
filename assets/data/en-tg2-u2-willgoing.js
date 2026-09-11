/* ============================================================
   درس: Grammar — Will vs. be going to (المستقبل: will و be going to)
   الإنجليزية · الخامس الابتدائي · ف١ · Top Goal 2 · Unit 2 (House Designs)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG2_U2_WILLGOING'] = {
    id:'EN_TG2_U2_WILLGOING',
    title:'Grammar — Will vs. be going to',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'will أم be going to؟',
      intro:'نستعملُ <span class="tok-focus">will</span> للقرار <b>اللحظيّ</b> أو التوقّع: «I <span class="tok-focus">will</span> help». ونستعملُ <span class="tok-focus">be going to</span> للخطّة <b>المقرَّرة سابقًا</b> أو التوقّع من دليلٍ حاضر: «I <span class="tok-focus">am going to</span> paint my room». وكلاهما يتبعُه الفعلُ مجرَّدًا، ومع <span class="tok-focus">going to</span> نصرّفُ be: am/is/<span class="tok-focus">are</span>.',
      formula:'<span class="tok-focus">will</span> + base (decision) &nbsp;·&nbsp; am/is/<span class="tok-focus">are</span> <span class="tok-focus">going to</span> + base (plan)',
      table:[['قرارٌ لحظيّ','I <span class="tok-focus">will</span> get it.'],['خطّةٌ مقرَّرة','We <span class="tok-focus">are going to</span> move.'],['بعد كليهما','فعلٌ مجرَّد'],['going to + جمع','They <span class="tok-focus">are going to</span> build.']],
      examples:['The phone is ringing — I <span class="tok-focus">will</span> answer it. (قرارٌ الآن)','I <span class="tok-focus">am going to</span> design my room this week. (خطّة)'],
      trick:'قرارٌ الآن أو توقّعٌ ← <span class="tok-focus">will</span>. خطّةٌ سبقَ ترتيبُها ← <span class="tok-focus">be going to</span>.'
    },
    stages:[
      { type:'choice', name:'will أم going to؟', hint:'لحظيّ ← will · مخطَّط ← going to', qs:[
        {p:'The bag is heavy. I ___ carry it.', ask:'اختر', o:['will','am going to'], a:0, w:'قرارٌ لحظيّ ← will.', f:'I <u>will</u> carry ...'},
        {p:'We booked movers; we ___ move next week.', ask:'اختر', o:['are going to','will'], a:0, w:'خطّةٌ مقرَّرة ← are going to.', f:'... <u>are going to</u> move ...'},
        {p:'I have a plan: I ___ paint my room.', ask:'اختر', o:['am going to','will'], a:0, w:'خطّة ← am going to.', f:'... <u>am going to</u> paint ...'}
      ]},
      { type:'gap', name:'صرّفْ be', hint:'am/is/are going to', qs:[
        {p:'They ___ going to build a house.', o:['are','is','will'], a:0, w:'جمعٌ ← are going to.', f:'They <u>are</u> going to ...'},
        {p:'She ___ going to design the kitchen.', o:['is','are','will'], a:0, w:'مفردٌ ← is going to.', f:'She <u>is</u> going to ...'},
        {p:'We are going to ___ the wall.', o:['paint','paints','painting'], a:0, w:'بعد going to مجرَّد.', f:'... going to <u>paint</u> ...'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['They','is','going','to','move','.'], bad:1, fix:'are', w:'جمعٌ ← <code>are going to</code>.', f:'They <u>are</u> going to move.'},
        {words:['I','am','going','to','paints','.'], bad:4, fix:'paint', w:'بعد going to فعلٌ مجرَّد.', f:'I am going to <u>paint</u>.'},
        {words:['She','will','to','call','later','.'], bad:2, fix:'تُحذف', w:'بعد will بلا <code>to</code>.', f:'She will <u>call</u> later.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'The bag is heavy. I ___ carry it.', ask:'اختر', o:['will','am going to'], a:0, w:'لحظيّ ← will.', f:'I <u>will</u> ...'},
        {p:'We planned it; we ___ move.', ask:'اختر', o:['are going to','will'], a:0, w:'خطّة ← are going to.', f:'... <u>are going to</u> ...'},
        {p:'They ___ going to build.', ask:'اختر', o:['are','is'], a:0, w:'جمع ← are.', f:'They <u>are</u> going to ...'},
        {p:'قرارٌ لحظيٌّ نستعمل:', ask:'اختر', o:['will','be going to'], a:0, w:'will.', f:'← <u>will</u>'},
        {p:'خطّةٌ مقرَّرة نستعمل:', ask:'اختر', o:['be going to','will'], a:0, w:'be going to.', f:'← <u>be going to</u>'}
      ]}
    ]
  };
})();
