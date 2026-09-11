/* ============================================================
   درس: Grammar — verb "to be" & introductions
   الإنجليزية · الثالث الابتدائي · ف١ · We Can! 3 · Unit 1 (It's Nice to Meet You!)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب المحفوظ).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_WC3_U1_BE'] = {
    id:'EN_WC3_U1_BE',
    title:'Grammar — verb to be & greetings',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'التعريفُ بالنفسِ بفعلِ be',
      intro:'نُعرّفُ بأنفسِنا بفعلِ <code>be</code>: مع <b>I</b> نستعملُ <span class="tok-focus">am</span> ، ومع <b>you</b> نستعملُ <span class="tok-focus">are</span> ، ومع <b>he/she/it</b> نستعملُ <span class="tok-focus">is</span>. للتعريفِ بشخصٍ: <code>This <span class="tok-focus">is</span> …</code>. وللسؤالِ عن الاسم: <code>What <span class="tok-focus">is</span> your name?</code>',
      formula:'I <span class="tok-focus">am</span> · you <span class="tok-focus">are</span> · he/she/it <span class="tok-focus">is</span>',
      table:[['I','I <span class="tok-focus">am</span> Sara.'],['you','You <span class="tok-focus">are</span> my friend.'],['he/she','She <span class="tok-focus">is</span> a teacher.'],['التعريف','This <span class="tok-focus">is</span> my friend.']],
      examples:['Hello! I <span class="tok-focus">am</span> Ali. Nice to meet you.','What <span class="tok-focus">is</span> your name? — My name <span class="tok-focus">is</span> Nora.'],
      trick:'I ← <span class="tok-focus">am</span>، you ← <span class="tok-focus">are</span>، he/she/it ← <span class="tok-focus">is</span>.'
    },
    stages:[
      { type:'choice', name:'am / is / are؟', hint:'حسبَ الفاعل', qs:[
        {p:'I ___ a student.', o:['am','is'], a:0, w:'مع <code>I</code> ← am.', f:'I <u>am</u> a student.'},
        {p:'You ___ my friend.', o:['are','am'], a:0, w:'مع <code>you</code> ← are.', f:'You <u>are</u> my friend.'},
        {p:'She ___ a teacher.', o:['is','are'], a:0, w:'مع <code>she</code> ← is.', f:'She <u>is</u> a teacher.'},
        {p:'This ___ my father.', o:['is','am'], a:0, w:'للتعريف ← is.', f:'This <u>is</u> my father.'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الصواب', qs:[
        {p:'Hello! I ___ Sara.', o:['am','is','are'], a:0, w:'مع <code>I</code> ← am.', f:'I <u>am</u> Sara.'},
        {p:'What ___ your name?', o:['is','am','are'], a:0, w:'What <code>is</code> your name?', f:'What <u>is</u> your name?'},
        {p:'He ___ my brother.', o:['is','am','are'], a:0, w:'مع <code>he</code> ← is.', f:'He <u>is</u> my brother.'}
      ]},
      { type:'choice', name:'التعريفُ والتحيّة', hint:'اختر الأنسب', qs:[
        {p:'للتعريفِ بصديقك تقول:', ask:'اختر', o:['This is my friend.','What is this?'], a:0, w:'التعريفُ بـ <code>This is</code>.', f:'<u>This is my friend.</u>'},
        {p:'ردُّ «Nice to meet you»:', ask:'اختر', o:['Nice to meet you, too.','Goodbye.'], a:0, w:'نردُّ بالمثل.', f:'<u>Nice to meet you, too.</u>'},
        {p:'They ___ my classmates.', ask:'اختر', o:['are','is'], a:0, w:'مع <code>they</code> ← are.', f:'They <u>are</u> my classmates.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['I','is','a','student','.'], bad:1, fix:'am', w:'مع <code>I</code> ← am.', f:'I <u>am</u> a student.'},
        {words:['You','am','my','friend','.'], bad:1, fix:'are', w:'مع <code>you</code> ← are.', f:'You <u>are</u> my friend.'},
        {words:['She','are','a','teacher','.'], bad:1, fix:'is', w:'مع <code>she</code> ← is.', f:'She <u>is</u> a teacher.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب', qs:[
        {sol:['I','am','Ali','.'], w:'I ← am.', f:'I am Ali.'},
        {sol:['This','is','my','friend','.'], w:'التعريف بـ This is.', f:'This is my friend.'},
        {sol:['What','is','your','name','?'], w:'سؤالُ الاسم.', f:'What is your name?'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'I ___ Nora.', ask:'اختر', o:['am','is'], a:0, w:'I ← am.', f:'I <u>am</u> Nora.'},
        {p:'You ___ kind.', ask:'اختر', o:['are','am'], a:0, w:'you ← are.', f:'You <u>are</u> kind.'},
        {p:'This ___ my teacher.', ask:'اختر', o:['is','am'], a:0, w:'للتعريف ← is.', f:'This <u>is</u> my teacher.'},
        {p:'مع he/she/it نستعمل:', ask:'اختر', o:['is','am'], a:0, w:'is.', f:'← <u>is</u>'},
        {p:'What ___ your name?', ask:'اختر', o:['is','are'], a:0, w:'is.', f:'What <u>is</u> your name?'}
      ]}
    ]
  };
})();
