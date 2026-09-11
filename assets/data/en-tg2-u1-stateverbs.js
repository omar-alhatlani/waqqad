/* ============================================================
   درس: Grammar — State Verbs vs. Action Verbs (أفعال الحالة والحدث)
   الإنجليزية · الخامس الابتدائي · ف١ · Top Goal 2 · Unit 1 (Personal Interests)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG2_U1_STATEVERBS'] = {
    id:'EN_TG2_U1_STATEVERBS',
    title:'Grammar — State Verbs vs. Action Verbs',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'أفعالُ الحالة وأفعالُ الحدث',
      intro:'<b>أفعالُ الحدث</b> (Action) تصفُ فعلًا نقومُ به ويمكنُ أن تأتيَ بصيغة <span class="tok-focus">-ing</span> المستمرّة (play → playing، run → running). أمّا <b>أفعالُ الحالة</b> (State) فتصفُ مشاعرَ أو ملكيّةً أو تفكيرًا (<span class="tok-focus">like</span>، <span class="tok-focus">want</span>، <span class="tok-focus">know</span>، <span class="tok-focus">have</span>، <span class="tok-focus">believe</span>) وعادةً <b>لا تأتي</b> بصيغة -ing.',
      formula:'action → can be <span class="tok-focus">-ing</span>&nbsp;·&nbsp; state (<span class="tok-focus">like</span>/<span class="tok-focus">want</span>/<span class="tok-focus">know</span>) → not -ing',
      table:[['فعلُ حدث','play, run, eat → playing'],['فعلُ حالة','like, want, know, have'],['الحالة مع -ing','عادةً لا (نقول I like ✗ I am liking)'],['المعنى','حدثٌ نفعله ↔ حالةٌ نشعرُ بها']],
      examples:['She is <span class="tok-focus">playing</span> now. (فعلُ حدث ← -ing ✓)','I <span class="tok-focus">like</span> this game. (فعلُ حالة ← بلا -ing)'],
      trick:'أفعالُ الحدثِ (play, run) تقبلُ <span class="tok-focus">-ing</span>، وأفعالُ الحالةِ (like, want, know, have) عادةً <b>لا</b> تقبلها.'
    },
    stages:[
      { type:'choice', name:'حالةٌ أم حدث؟', hint:'هل يصفُ فعلًا أم شعورًا/تفكيرًا؟', qs:[
        {p:'«run» فعلُ:', ask:'اختر', o:['حدث','حالة'], a:0, w:'فعلٌ نقومُ به ← حدث.', f:'← <u>حدث</u>'},
        {p:'«want» فعلُ:', ask:'اختر', o:['حالة','حدث'], a:0, w:'رغبةٌ ← حالة.', f:'← <u>حالة</u>'},
        {p:'«know» فعلُ:', ask:'اختر', o:['حالة','حدث'], a:0, w:'تفكيرٌ/معرفة ← حالة.', f:'← <u>حالة</u>'},
        {p:'«eat» فعلُ:', ask:'اختر', o:['حدث','حالة'], a:0, w:'فعلٌ نقومُ به ← حدث.', f:'← <u>حدث</u>'}
      ]},
      { type:'choice', name:'مع -ing أم لا؟', hint:'الحالةُ عادةً بلا -ing', qs:[
        {p:'She is ___ now. (play — حدث)', ask:'اختر', o:['playing','play'], a:0, w:'فعلُ حدث ← playing.', f:'← <u>playing</u>'},
        {p:'I ___ this book. (like — حالة)', ask:'اختر', o:['like','am liking'], a:0, w:'فعلُ حالة ← بلا -ing.', f:'← <u>like</u>'},
        {p:'He ___ the answer. (know — حالة)', ask:'اختر', o:['knows','is knowing'], a:0, w:'حالة ← بلا -ing.', f:'← <u>knows</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['I','am','wanting','a','book','.'], bad:2, fix:'want', w:'«want» فعلُ حالةٍ ← بلا -ing: <code>I want</code>.', f:'I <u>want</u> a book.'},
        {words:['She','is','knowing','the','answer','.'], bad:2, fix:'knows', w:'«know» حالة ← <code>She knows</code>.', f:'She <u>knows</u> the answer.'},
        {words:['They','playing','football','now','.'], bad:1, fix:'are playing', w:'ينقصُ فعلُ be: <code>are playing</code>.', f:'They <u>are playing</u> football now.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'«like» فعلُ:', ask:'اختر', o:['حالة','حدث'], a:0, w:'حالة.', f:'← <u>حالة</u>'},
        {p:'«run» فعلُ:', ask:'اختر', o:['حدث','حالة'], a:0, w:'حدث.', f:'← <u>حدث</u>'},
        {p:'I ___ pizza. (want)', ask:'اختر', o:['want','am wanting'], a:0, w:'حالة ← بلا -ing.', f:'← <u>want</u>'},
        {p:'She is ___ . (run — حدث)', ask:'اختر', o:['running','run'], a:0, w:'حدث ← -ing.', f:'← <u>running</u>'},
        {p:'أفعالُ الحالة عادةً:', ask:'اختر', o:['لا تأتي بـ -ing','تأتي بـ -ing دائمًا'], a:0, w:'لا تأتي بـ -ing.', f:'← <u>لا تأتي بـ -ing</u>'}
      ]}
    ]
  };
})();
