/* ============================================================
   درس: Grammar — Making Suggestions (تقديم الاقتراحات)
   الإنجليزية · الخامس الابتدائي · ف١ · Top Goal 2 · Unit 5 (Storylines)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG2_U5_SUGGEST'] = {
    id:'EN_TG2_U5_SUGGEST',
    title:'Grammar — Making Suggestions',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'كيف نقترحُ فكرة؟',
      intro:'لتقديمِ اقتراحٍ نستعملُ ثلاثَ صيغ: <span class="tok-focus">Why don\'t we</span> + الفعلَ المجرَّد؟ و<span class="tok-focus">How about</span> + الفعلَ مع <code>-ing</code>؟ و<span class="tok-focus">What about</span> + الفعلَ مع <code>-ing</code>؟ فبعد <span class="tok-focus">Why don\'t we</span> فعلٌ مجرَّد، وبعد <span class="tok-focus">How/What about</span> فعلٌ بـ <code>-ing</code>.',
      formula:'<span class="tok-focus">Why don\'t we</span> + base? &nbsp;·&nbsp; <span class="tok-focus">How/What about</span> + verb-ing?',
      table:[['Why don\'t we','+ base: Why don\'t we <b>watch</b> it?'],['How about','+ -ing: How about <b>making</b> a comedy?'],['What about','+ -ing: What about <b>writing</b> a story?'],['كلُّها','اقتراحٌ ودعوة']],
      examples:['<span class="tok-focus">Why don\'t we</span> draw a storyboard?','<span class="tok-focus">How about</span> making a cartoon?'],
      trick:'بعد <span class="tok-focus">Why don\'t we</span> فعلٌ <b>مجرَّد</b>، وبعد <span class="tok-focus">How about</span>/<span class="tok-focus">What about</span> فعلٌ بـ <span class="en">-ing</span>.'
    },
    stages:[
      { type:'choice', name:'مجرَّدٌ أم -ing؟', hint:'Why don\'t we + مجرَّد · How about + -ing', qs:[
        {p:'Why don\'t we ___ a movie?', ask:'اختر', o:['watch','watching'], a:0, w:'بعد Why don\'t we مجرَّد.', f:'... <u>watch</u> a movie?'},
        {p:'How about ___ a comedy?', ask:'اختر', o:['making','make'], a:0, w:'بعد How about ← -ing.', f:'How about <u>making</u> ...?'},
        {p:'What about ___ a story?', ask:'اختر', o:['writing','write'], a:0, w:'بعد What about ← -ing.', f:'What about <u>writing</u> ...?'},
        {p:'Why don\'t we ___ a storyboard?', ask:'اختر', o:['draw','drawing'], a:0, w:'مجرَّد.', f:'... <u>draw</u> ...?'}
      ]},
      { type:'gap', name:'أكمل الاقتراح', hint:'انظُرِ الصيغة', qs:[
        {p:'How about ___ a documentary? (watch)', o:['watching','watch','to watch'], a:0, w:'How about + -ing.', f:'How about <u>watching</u> ...?'},
        {p:'Why don\'t we ___ together? (study)', o:['study','studying'], a:0, w:'Why don\'t we + مجرَّد.', f:'... <u>study</u> together?'},
        {p:'What about ___ a play? (act)', o:['acting','act'], a:0, w:'What about + -ing.', f:'What about <u>acting</u> ...?'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['Why','don\'t','we','watching','it','?'], bad:3, fix:'watch', w:'بعد Why don\'t we فعلٌ مجرَّد.', f:'Why don\'t we <u>watch</u> it?'},
        {words:['How','about','make','a','film','?'], bad:2, fix:'making', w:'بعد How about ← -ing.', f:'How about <u>making</u> a film?'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'Why don\'t we ___ a movie?', ask:'اختر', o:['watch','watching'], a:0, w:'مجرَّد.', f:'← <u>watch</u>'},
        {p:'How about ___ a comedy?', ask:'اختر', o:['making','make'], a:0, w:'-ing.', f:'← <u>making</u>'},
        {p:'بعد «How about» يأتي:', ask:'اختر', o:['فعلٌ بـ -ing','فعلٌ مجرَّد'], a:0, w:'-ing.', f:'← <u>فعلٌ بـ -ing</u>'},
        {p:'بعد «Why don\'t we» يأتي:', ask:'اختر', o:['فعلٌ مجرَّد','فعلٌ بـ -ing'], a:0, w:'مجرَّد.', f:'← <u>فعلٌ مجرَّد</u>'},
        {p:'كلُّ هذه الصيغ تُستعمل لـ:', ask:'اختر', o:['الاقتراح','النفي'], a:0, w:'تقديمُ اقتراح.', f:'← <u>الاقتراح</u>'}
      ]}
    ]
  };
})();
