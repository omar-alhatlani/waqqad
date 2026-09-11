/* ============================================================
   درس: Grammar — Simple Present vs. Present Progressive
   الإنجليزية · الرابع الابتدائي · ف١ · Top Goal 1 · Unit 2 (Chores)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب المحفوظ).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG1_U2_PROG'] = {
    id:'EN_TG1_U2_PROG',
    title:'Grammar — Present Simple vs. Progressive',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'عادةٌ أم يحدثُ الآن؟',
      intro:'المضارعُ البسيطُ (Simple Present) للعاداتِ المتكرّرة: <code>I clean my room every day</code>. والمضارعُ المستمرُّ (Present Progressive) لِما يحدثُ <b>الآن</b>: <span class="tok-focus">am/is/are</span> + الفعلُ + <span class="tok-focus">-ing</span>. كلماتٌ دليلة: <code>every day, always</code> للبسيط، و<code>now, at the moment</code> للمستمرّ.',
      formula:'now: subject + <span class="tok-focus">is/are</span> + verb<span class="tok-focus">-ing</span>',
      table:[['بسيط (عادة)','I <b>wash</b> the dishes every day.'],['مستمرّ (الآن)','I <span class="tok-focus">am washing</span> the dishes now.'],['دليلُ البسيط','every day · always'],['دليلُ المستمرّ','now · at the moment']],
      examples:['Look! The kid<span class="tok-plural">s</span> <span class="tok-focus">are making</span> their beds now.','My brother<span class="tok-plural">s</span> usually <b>set</b> the table. (عادة)'],
      trick:'إن رأيتَ <code>now</code> فاستعملْ <span class="tok-focus">be + verb-ing</span>؛ وإن رأيتَ <code>every day</code> فاستعملِ المضارعَ البسيط.'
    },
    stages:[
      { type:'choice', name:'بسيطٌ أم مستمرّ؟', hint:'now ← مستمرّ · every day ← بسيط', qs:[
        {p:'now → أيُّ زمن؟', ask:'اختر', o:['المستمرّ (be + -ing)','البسيط'], a:0, w:'<code>now</code> دليلُ المستمرّ.', f:'now ← <u>المستمرّ</u>'},
        {p:'every day → أيُّ زمن؟', ask:'اختر', o:['البسيط','المستمرّ'], a:0, w:'العادةُ ← البسيط.', f:'every day ← <u>البسيط</u>'},
        {p:'تركيبُ المستمرّ:', ask:'اختر', o:['be + verb-ing','do + verb'], a:0, w:'<code>am/is/are + -ing</code>.', f:'← <u>be + verb-ing</u>'},
        {p:'at the moment → أيُّ زمن؟', ask:'اختر', o:['المستمرّ','البسيط'], a:0, w:'الآن ← المستمرّ.', f:'← <u>المستمرّ</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'انظرِ الكلمةَ الدليلة', qs:[
        {p:'Listen! The baby ___ crying now.', o:['is','does','do'], a:0, w:'الآن ← <code>is + crying</code>.', f:'The baby <u>is</u> crying now.'},
        {p:'I ___ the trash out every morning.', o:['take','am taking','taking'], a:0, w:'عادةٌ يوميّة ← البسيط <code>take</code>.', f:'I <u>take</u> the trash out every morning.'},
        {p:'Look! They ___ sweeping the floor.', o:['are','do','is'], a:0, w:'جمعٌ + الآن ← <code>are + -ing</code>.', f:'They <u>are</u> sweeping the floor.'}
      ]},
      { type:'choice', name:'اختر الصواب', hint:'الدليلُ يحسم', qs:[
        {p:'Right now, my mother ___ the dishes.', ask:'اختر', o:['is washing','washes'], a:0, w:'<code>right now</code> ← المستمرّ.', f:'... <u>is washing</u> the dishes.'},
        {p:'My father ___ the grass every weekend.', ask:'اختر', o:['cuts','is cutting'], a:0, w:'عادةٌ أسبوعيّة ← البسيط.', f:'... <u>cuts</u> the grass every weekend.'},
        {p:'We ___ the table now; dinner is ready.', ask:'اختر', o:['are setting','set'], a:0, w:'الآن ← المستمرّ.', f:'We <u>are setting</u> the table now.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['She','is','clean','her','room','now','.'], bad:2, fix:'cleaning', w:'المستمرُّ يحتاجُ <code>-ing</code>: <code>is cleaning</code>.', f:'She is <u>cleaning</u> her room now.'},
        {words:['I','am','feed','the','cat','every','day','.'], bad:1, fix:'—', w:'العادةُ بسيطةٌ: <code>I feed ... every day</code> بلا <code>am</code>.', f:'I <u>feed</u> the cat every day.'},
        {words:['They','is','making','the','beds','.'], bad:1, fix:'are', w:'الجمعُ يأخذُ <code>are</code>.', f:'They <u>are</u> making the beds.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب', qs:[
        {sol:['I','am','washing','the','dishes','now','.'], w:'الآن ← المستمرّ.', f:'I am washing the dishes now.'},
        {sol:['He','sets','the','table','every','day','.'], w:'عادةٌ ← البسيط.', f:'He sets the table every day.'},
        {sol:['They','are','sweeping','the','floor','.'], w:'جمعٌ + الآن.', f:'They are sweeping the floor.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'now → أيُّ زمن؟', ask:'اختر', o:['المستمرّ','البسيط'], a:0, w:'المستمرّ.', f:'← <u>المستمرّ</u>'},
        {p:'My sister ___ her homework now.', ask:'اختر', o:['is doing','does'], a:0, w:'الآن ← المستمرّ.', f:'... <u>is doing</u> ... now.'},
        {p:'I ___ my bed every morning.', ask:'اختر', o:['make','am making'], a:0, w:'عادةٌ ← البسيط.', f:'I <u>make</u> my bed every morning.'},
        {p:'تركيبُ المستمرّ:', ask:'اختر', o:['be + verb-ing','did + verb'], a:0, w:'be + -ing.', f:'← <u>be + verb-ing</u>'},
        {p:'Look! The dog ___ running in the yard.', ask:'اختر', o:['is','does'], a:0, w:'الآن ← <code>is</code>.', f:'The dog <u>is</u> running ...'}
      ]}
    ]
  };
})();
