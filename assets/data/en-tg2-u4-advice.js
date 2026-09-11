/* ============================================================
   درس: Grammar — should / had better (النصيحة والتحذير)
   الإنجليزية · الخامس الابتدائي · ف١ · Top Goal 2 · Unit 4 (Glorious Food)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG2_U4_ADVICE'] = {
    id:'EN_TG2_U4_ADVICE',
    title:'Grammar — should / had better',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'النصيحةُ والتحذير',
      intro:'نستعملُ <span class="tok-focus">should</span> للنصيحةِ العامّة (من الأفضل أن)، و<span class="tok-focus">had better</span> للنصيحةِ الأقوى أو التحذيرِ من نتيجةٍ سيّئة. ويتبعُهما الفعلُ <b>مجرَّدًا</b>. النفيُ: <span class="tok-focus">shouldn\'t</span> و<span class="tok-focus">had better not</span>.',
      formula:'<span class="tok-focus">should</span> / <span class="tok-focus">had better</span> + base',
      table:[['نصيحة','You <span class="tok-focus">should</span> rest.'],['نصيحةٌ أقوى/تحذير','You <span class="tok-focus">had better</span> hurry.'],['نفيُ should','You <span class="tok-focus">shouldn\'t</span> eat too much.'],['نفيُ had better','You <span class="tok-focus">had better not</span> be late.']],
      examples:['You <span class="tok-focus">should</span> get your ingredients ready first. (نصيحة)','You <span class="tok-focus">had better not</span> leave the cookies too long! (تحذير)'],
      trick:'<span class="tok-focus">should</span> نصيحةٌ عامّة، و<span class="tok-focus">had better</span> نصيحةٌ أقوى/تحذير — وكلاهما يتبعُه فعلٌ مجرَّد.'
    },
    stages:[
      { type:'choice', name:'الشكلُ الصحيح', hint:'should/had better + مجرَّد', qs:[
        {p:'You look tired. You ___ rest.', ask:'اختر', o:['should','are'], a:0, w:'نصيحةٌ ← should.', f:'You <u>should</u> rest.'},
        {p:'You should ___ vegetables.', ask:'اختر', o:['eat','eats'], a:0, w:'بعد should مجرَّد.', f:'... should <u>eat</u> ...'},
        {p:'It\'s late. You ___ hurry! (تحذير)', ask:'اختر', o:['had better','should not'], a:0, w:'تحذيرٌ ← had better.', f:'... <u>had better</u> hurry.'},
        {p:'You ___ eat too much sugar. (نفيُ نصيحة)', ask:'اختر', o:["shouldn't","don't should"], a:0, w:'نفيُ should ← shouldn\'t.', f:'... <u>shouldn\'t</u> eat ...'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'نصيحةٌ ← should · تحذير ← had better', qs:[
        {p:'You ___ drink water every day. (نصيحة)', o:['should','are'], a:0, w:'نصيحة ← should.', f:'You <u>should</u> drink ...'},
        {p:'You had better ___ the oven now. (تحذير)', o:['check','checks','to check'], a:0, w:'مجرَّد.', f:'... better <u>check</u> ...'},
        {p:'We ___ waste food. (نفيُ نصيحة)', o:["shouldn't",'should'], a:0, w:'نفي ← shouldn\'t.', f:'We <u>shouldn\'t</u> waste ...'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['You','should','to','rest','.'], bad:2, fix:'تُحذف', w:'بعد should بلا <code>to</code>.', f:'You should <u>rest</u>.'},
        {words:['You','should','eats','fruit','.'], bad:2, fix:'eat', w:'بعد should مجرَّدٌ بلا -s.', f:'You should <u>eat</u> fruit.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'You are tired. You ___ rest.', ask:'اختر', o:['should','are'], a:0, w:'نصيحة ← should.', f:'← <u>should</u>'},
        {p:'بعد should يأتي:', ask:'اختر', o:['فعلٌ مجرَّد','to + فعل'], a:0, w:'مجرَّد.', f:'← <u>فعلٌ مجرَّد</u>'},
        {p:'للتحذير الأقوى نستعمل:', ask:'اختر', o:['had better','should'], a:0, w:'had better.', f:'← <u>had better</u>'},
        {p:'نفيُ should:', ask:'اختر', o:["shouldn't","don't should"], a:0, w:'shouldn\'t.', f:'← <u>shouldn\'t</u>'},
        {p:'You should ___ well.', ask:'اختر', o:['sleep','sleeps'], a:0, w:'مجرَّد.', f:'← <u>sleep</u>'}
      ]}
    ]
  };
})();
