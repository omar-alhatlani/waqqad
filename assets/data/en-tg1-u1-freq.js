/* ============================================================
   درس: Grammar — How often + adverbs of frequency
   الإنجليزية · الرابع الابتدائي · ف١ · Top Goal 1 · Unit 1 (Family Events)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب المحفوظ).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG1_U1_FREQ'] = {
    id:'EN_TG1_U1_FREQ',
    title:'Grammar — How often & frequency',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'كم مرّة؟ ظروفُ التكرار',
      intro:'نسألُ عن التكرارِ بـ <span class="tok-focus">How often</span> ، ونُجيبُ بظرفِ تكرار: <span class="tok-focus">always</span> (دائمًا) ، <span class="tok-focus">usually</span> ، <span class="tok-focus">often</span> ، <span class="tok-focus">sometimes</span> ، <span class="tok-focus">rarely</span> ، <span class="tok-focus">never</span> (أبدًا). يأتي ظرفُ التكرارِ <b>قبلَ الفعلِ الرئيس</b> وبعدَ الفعلِ <code>be</code>.',
      formula:'<span class="tok-focus">How often</span> + do/does + subject + verb?',
      table:[['السؤال','<span class="tok-focus">How often</span> do you read?'],['الجواب','I <span class="tok-focus">always</span> read at night.'],['موقعُ الظرف','قبلَ الفعلِ الرئيس'],['مع be','She is <span class="tok-focus">never</span> late.']],
      examples:['How often do you help your parent<span class="tok-plural">s</span>? — I <span class="tok-focus">usually</span> help them.','My friend<span class="tok-plural">s</span> <span class="tok-focus">sometimes</span> play in the park.'],
      trick:'الظرفُ يقعُ <b>قبلَ الفعل</b> (I <span class="tok-focus">always</span> read) لكن <b>بعدَ</b> <code>am/is/are</code> (He is <span class="tok-focus">always</span> happy).'
    },
    stages:[
      { type:'choice', name:'معنى الظرف', hint:'اربطِ الظرفَ بمعناه', qs:[
        {p:'always', ask:'المعنى؟', o:['دائمًا','أبدًا'], a:0, w:'<code>always</code> = دائمًا.', f:'always ← <u>دائمًا</u>'},
        {p:'never', ask:'المعنى؟', o:['أبدًا','أحيانًا'], a:0, w:'<code>never</code> = أبدًا.', f:'never ← <u>أبدًا</u>'},
        {p:'sometimes', ask:'المعنى؟', o:['أحيانًا','عادةً'], a:0, w:'<code>sometimes</code> = أحيانًا.', f:'sometimes ← <u>أحيانًا</u>'},
        {p:'How often ...?', ask:'المعنى؟', o:['كم مرّة؟','أين؟'], a:0, w:'<code>How often</code> سؤالٌ عن التكرار.', f:'How often ← <u>كم مرّة؟</u>'}
      ]},
      { type:'gap', name:'موقعُ الظرف', hint:'قبلَ الفعل الرئيس، بعدَ be', qs:[
        {p:'I ___ drink milk in the morning.', o:['always','morning','milk'], a:0, w:'الظرفُ قبلَ الفعلِ <code>drink</code>.', f:'I <u>always</u> drink milk ...'},
        {p:'She is ___ late for school.', o:['never','go','do'], a:0, w:'بعدَ <code>is</code> يأتي الظرف.', f:'She is <u>never</u> late ...'},
        {p:'___ often do you read books?', o:['How','What','Where'], a:0, w:'نسألُ عن التكرار بـ <code>How often</code>.', f:'<u>How</u> often do you read books?'}
      ]},
      { type:'choice', name:'اختر التكرار', hint:'ما المعنى المنطقيّ؟', qs:[
        {p:'A good student ___ does his homework.', ask:'اختر', o:['always','never'], a:0, w:'الطالبُ المجتهدُ يفعلُها دائمًا.', f:'... <u>always</u> does his homework.'},
        {p:'We ___ eat unhealthy food. It is bad.', ask:'اختر', o:['rarely','always'], a:0, w:'الطعامُ الضارُّ نأكلُه نادرًا.', f:'We <u>rarely</u> eat unhealthy food.'},
        {p:'How ___ do you visit your grandparents?', ask:'اختر', o:['often','many'], a:0, w:'<code>How often</code> للتكرار.', f:'How <u>often</u> ...?'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['I','read','always','before','bed','.'], bad:2, fix:'always read', w:'الظرفُ قبلَ الفعل: <code>I always read</code>.', f:'I <u>always</u> read before bed.'},
        {words:['How','much','often','do','you','swim','?'], bad:1, fix:'—', w:'الصوابُ <code>How often</code> بلا <code>much</code>.', f:'<u>How often</u> do you swim?'},
        {words:['She','never','is','tired','.'], bad:1, fix:'is never', w:'الظرفُ بعدَ <code>is</code>: <code>She is never tired</code>.', f:'She <u>is never</u> tired.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب', qs:[
        {sol:['I','always','help','my','mother','.'], w:'الظرفُ قبلَ الفعل.', f:'I always help my mother.'},
        {sol:['How','often','do','you','read','?'], w:'سؤالُ التكرار.', f:'How often do you read?'},
        {sol:['He','is','never','late','.'], w:'الظرفُ بعدَ <code>is</code>.', f:'He is never late.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'never', ask:'المعنى؟', o:['أبدًا','دائمًا'], a:0, w:'<code>never</code> = أبدًا.', f:'never ← <u>أبدًا</u>'},
        {p:'I ___ brush my teeth twice a day.', ask:'اختر', o:['always','never'], a:0, w:'عادةٌ صحيّةٌ ← always.', f:'I <u>always</u> brush my teeth.'},
        {p:'___ do you play sports?', ask:'اختر', o:['How often','How much'], a:0, w:'التكرار ← How often.', f:'<u>How often</u> do you play sports?'},
        {p:'موقعُ ظرفِ التكرارِ مع الفعلِ العاديّ:', ask:'اختر', o:['قبلَ الفعل','بعدَ الفعل'], a:0, w:'قبلَ الفعلِ الرئيس.', f:'← <u>قبلَ الفعل</u>'},
        {p:'She is ___ friendly to everyone.', ask:'اختر', o:['always','do'], a:0, w:'بعدَ <code>is</code> يأتي الظرف.', f:'She is <u>always</u> friendly.'}
      ]}
    ]
  };
})();
