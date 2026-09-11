/* ============================================================
   درس: Grammar — Simple Past vs. Past Progressive
   الإنجليزية · الخامس الابتدائي · ف١ · Top Goal 2 · Unit 6 (Outdoor Activities)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG2_U6_PASTCONTRAST'] = {
    id:'EN_TG2_U6_PASTCONTRAST',
    title:'Grammar — Simple Past vs. Past Progressive',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'حدثٌ طويلٌ يقطعُه قصير',
      intro:'حين يقعُ حدثٌ <b>قصيرٌ</b> أثناء حدثٍ <b>طويلٍ</b> مستمرٍّ في الماضي: نستعملُ <b>الماضيَ المستمرّ</b> (<span class="tok-focus">was/were + -ing</span>) للطويل، و<b>الماضيَ البسيط</b> (<span class="tok-focus">V2</span>) للقصير الذي قطعَه. مثال: «I <span class="tok-focus">was reading</span> when the phone <span class="tok-focus">rang</span>».',
      formula:'was/were + <span class="tok-focus">-ing</span> (long) &nbsp;+&nbsp; simple past <span class="tok-focus">V2</span> (short)',
      table:[['الطويل (خلفية)','I was reading …'],['القصير (قاطع)','… when the phone rang.'],['الطويل ←','was/were + -ing'],['القصير ←','الماضي البسيط (V2)']],
      examples:['We <span class="tok-focus">were hiking</span> when it <span class="tok-focus">started</span> to rain.','She <span class="tok-focus">was fishing</span> when she <span class="tok-focus">caught</span> a big fish.'],
      trick:'الحدثُ الطويلُ المستمرّ ← <span class="tok-focus">was/were + -ing</span>، والحدثُ القصيرُ القاطعُ ← <b>ماضٍ بسيط</b> (V2).'
    },
    stages:[
      { type:'choice', name:'أيُّ زمن؟', hint:'الطويل ← -ing · القصير ← V2', qs:[
        {p:'I ___ when the phone rang. (الطويل)', ask:'اختر', o:['was reading','read'], a:0, w:'الطويلُ ← was reading.', f:'I <u>was reading</u> ...'},
        {p:'We were hiking when it ___ to rain. (القصير)', ask:'اختر', o:['started','was starting'], a:0, w:'القصيرُ القاطعُ ← ماضٍ بسيط.', f:'... it <u>started</u> ...'},
        {p:'They ___ when I arrived. (الطويل)', ask:'اختر', o:['were camping','camped'], a:0, w:'الطويلُ ← were camping.', f:'They <u>were camping</u> ...'},
        {p:'She was fishing when she ___ a fish. (القصير)', ask:'اختر', o:['caught','was catching'], a:0, w:'القصيرُ ← caught.', f:'... she <u>caught</u> ...'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'طويلٌ -ing · قصيرٌ V2', qs:[
        {p:'I was walking when I ___ my friend. (see)', o:['saw','was seeing'], a:0, w:'القصيرُ ← saw.', f:'... I <u>saw</u> ...'},
        {p:'We ___ dinner when the lights went off. (eat, الطويل)', o:['were eating','ate'], a:0, w:'الطويلُ ← were eating.', f:'We <u>were eating</u> ...'},
        {p:'He was sleeping when the alarm ___ . (ring)', o:['rang','was ringing'], a:0, w:'القصيرُ ← rang.', f:'... the alarm <u>rang</u>.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['I','read','when','the','phone','rang','.'], bad:1, fix:'was reading', w:'الحدثُ الطويلُ ← <code>was reading</code>.', f:'I <u>was reading</u> when the phone rang.'},
        {words:['We','were','hiking','when','it','was','starting','to','rain','.'], bad:5, fix:'started (احذف was)', w:'القصيرُ القاطعُ ← ماضٍ بسيط <code>started</code>.', f:'... when it <u>started</u> to rain.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'I ___ when the phone rang.', ask:'اختر', o:['was reading','read'], a:0, w:'الطويل ← was reading.', f:'← <u>was reading</u>'},
        {p:'We were hiking when it ___ .', ask:'اختر', o:['started','was starting'], a:0, w:'القصير ← V2.', f:'← <u>started</u>'},
        {p:'الحدثُ الطويلُ نستعمل له:', ask:'اختر', o:['was/were + -ing','الماضي البسيط'], a:0, w:'الماضي المستمرّ.', f:'← <u>was/were + -ing</u>'},
        {p:'الحدثُ القصيرُ القاطعُ نستعمل له:', ask:'اختر', o:['الماضي البسيط','was + -ing'], a:0, w:'الماضي البسيط.', f:'← <u>الماضي البسيط</u>'}
      ]}
    ]
  };
})();
