/* ============================================================
   درس: Grammar — when and while
   الإنجليزية · الخامس الابتدائي · ف١ · Top Goal 2 · Unit 6 (Outdoor Activities)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG2_U6_WHENWHILE'] = {
    id:'EN_TG2_U6_WHENWHILE',
    title:'Grammar — when and while',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'when مع القصير · while مع الطويل',
      intro:'نربطُ الحدثين الماضيين بـ <span class="tok-focus">when</span> و<span class="tok-focus">while</span>. غالبًا: <span class="tok-focus">while</span> + الحدثُ الطويلُ المستمرّ (was/were + -ing)، و<span class="tok-focus">when</span> + الحدثُ القصيرُ (الماضي البسيط). مثال: «<span class="tok-focus">While</span> I was rafting, I saw a bird» و«I was rafting <span class="tok-focus">when</span> I saw a bird».',
      formula:'<span class="tok-focus">when</span> + simple past &nbsp;·&nbsp; <span class="tok-focus">while</span> + past progressive',
      table:[['<span class="tok-focus">while</span>','+ الطويل: while I was rafting'],['<span class="tok-focus">when</span>','+ القصير: when I saw a bird'],['الفاصلة','عند بدء الجملة بها نضعُ فاصلة'],['المعنى','ربطُ حدثين في الماضي']],
      examples:['<span class="tok-focus">While</span> we were camping, it rained.','I was cooking <span class="tok-focus">when</span> my friend called.'],
      trick:'<span class="tok-focus">while</span> يصحبُ الحدثَ <b>الطويلَ</b> المستمرّ، و<span class="tok-focus">when</span> يصحبُ الحدثَ <b>القصيرَ</b> (الماضي البسيط).'
    },
    stages:[
      { type:'choice', name:'when أم while؟', hint:'while للطويل · when للقصير', qs:[
        {p:'___ I was rafting, I saw a bird.', ask:'اختر', o:['While','When'], a:0, w:'الطويلُ المستمرّ ← While.', f:'<u>While</u> I was rafting ...'},
        {p:'I was hiking ___ it started to rain.', ask:'اختر', o:['when','while'], a:0, w:'القصيرُ ← when.', f:'... <u>when</u> it started ...'},
        {p:'___ they were fishing, a fish jumped.', ask:'اختر', o:['While','When'], a:0, w:'الطويلُ ← While.', f:'<u>While</u> they were fishing ...'},
        {p:'She was reading ___ the lights went off.', ask:'اختر', o:['when','while'], a:0, w:'القصيرُ ← when.', f:'... <u>when</u> the lights ...'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'while + مستمرّ · when + بسيط', qs:[
        {p:'While we ___ , it started to snow. (camp)', o:['were camping','camped'], a:0, w:'while + الطويل ← were camping.', f:'While we <u>were camping</u> ...'},
        {p:'I was sleeping when the phone ___ . (ring)', o:['rang','was ringing'], a:0, w:'when + القصير ← rang.', f:'... when the phone <u>rang</u>.'},
        {p:'___ he was cooking, he heard a noise.', o:['While','When'], a:0, w:'الطويل ← While.', f:'<u>While</u> he was cooking ...'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['When','I','was','rafting',',','I','saw','a','bear','.'], bad:0, fix:'While', w:'الحدثُ الطويلُ المستمرّ يصحبُه <code>While</code>.', f:'<u>While</u> I was rafting, I saw a bear.'},
        {words:['While','the','phone','rang',',','I','was','reading','.'], bad:0, fix:'When', w:'الحدثُ القصيرُ (rang) يصحبُه <code>When</code>.', f:'<u>When</u> the phone rang, I was reading.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'___ I was rafting, I saw a bird.', ask:'اختر', o:['While','When'], a:0, w:'الطويل ← While.', f:'← <u>While</u>'},
        {p:'I was hiking ___ it rained.', ask:'اختر', o:['when','while'], a:0, w:'القصير ← when.', f:'← <u>when</u>'},
        {p:'«while» يصحبُ الحدثَ:', ask:'اختر', o:['الطويل المستمرّ','القصير'], a:0, w:'الطويل.', f:'← <u>الطويل المستمرّ</u>'},
        {p:'«when» يصحبُ الحدثَ:', ask:'اختر', o:['القصير','الطويل'], a:0, w:'القصير.', f:'← <u>القصير</u>'}
      ]}
    ]
  };
})();
