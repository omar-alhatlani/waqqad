/* ============================================================
   Lesson: Vocabulary — Health, Illnesses & Body
   English · Super Goal 2 · Unit 8 (What’s Wrong?) · صفحة ٦٤
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U8_VOCAB'] = {
    id:'EN_SG2_U8_VOCAB',
    title:'Vocabulary — Health & Body',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'Illnesses · Symptoms · Parts of the body',
      intro:'مفرداتُ الصحّة: <code>headache</code> صداع، <code>stomachache</code> ألمُ معدة، <code>toothache</code> ألمُ سِنّ، <code>sore throat</code> التهابُ حلق، <code>cough</code> سعال، <code>fever / temperature</code> حمّى، <code>flu</code> إنفلونزا، <code>cold</code> زُكام. نسأل: <code>What’s wrong? / What’s the matter?</code> ونصف بـ <code>I have a…</code>',
      table:[['headache / toothache','صداع / ألمُ سِنّ'],['sore throat / cough','التهابُ حلق / سعال'],['fever / flu / cold','حمّى / إنفلونزا / زُكام'],['symptom','عَرَض']],
      trick:'مع الأمراض نستعمل <code>have</code>: <code>I have a headache</code>. والسؤالُ عن الحال: <code>What’s wrong?</code> أو <code>What’s the matter?</code>'
    },
    stages:[
      { type:'choice', name:'المعنى بالعربية', hint:'اختر المعنى الصحيح', qs:[
        {p:'headache', ask:'المعنى', o:['صداع','سعال','حمّى'], a:0, w:'<code>headache</code> = صداع.', f:'headache = صداع.'},
        {p:'sore throat', ask:'المعنى', o:['التهاب حلق','ألم معدة','زكام'], a:0, w:'<code>sore throat</code> = التهاب حلق.', f:'sore throat = التهاب حلق.'},
        {p:'fever', ask:'المعنى', o:['حمّى','سعال','صداع'], a:0, w:'<code>fever</code> = حمّى.', f:'fever = حمّى.'},
        {p:'cough', ask:'المعنى', o:['سعال','عطاس','صداع'], a:0, w:'<code>cough</code> = سعال.', f:'cough = سعال.'},
        {p:'stomachache', ask:'المعنى', o:['ألم معدة','ألم سِنّ','حمّى'], a:0, w:'<code>stomachache</code> = ألمُ معدة.', f:'stomachache = ألمُ معدة.'}
      ]},
      { type:'choice', name:'العَرَض والمرض', hint:'طابِق العَرَض بالمرض', qs:[
        {p:'runny nose and fever →', ask:'المرض', o:['the flu','a toothache','a broken leg'], a:0, w:'الحمّى والرشح ← <code>flu</code>.', f:'the flu.'},
        {p:'your tooth aches →', ask:'المرض', o:['toothache','headache','cough'], a:0, w:'ألمُ سِنّ.', f:'toothache.'},
        {p:'pain in the throat →', ask:'المرض', o:['sore throat','stomachache','fever'], a:0, w:'التهابُ حلق.', f:'sore throat.'},
        {p:'your head hurts →', ask:'المرض', o:['headache','cough','flu'], a:0, w:'صداع.', f:'headache.'}
      ]},
      { type:'gap', name:'have + المرض', hint:'نستعمل have', qs:[
        {p:'I ___ a headache.', o:['have','am','do'], a:0, w:'مع المرض ← <code>have</code>.', f:'I <u>have</u> a headache.'},
        {p:'What’s ___ with you?', o:['wrong','bad','sick'], a:0, w:'<code>What’s wrong?</code>', f:'What’s <u>wrong</u>?'},
        {p:'She has a high ___. (حمّى)', o:['temperature','headache','cough'], a:0, w:'<code>high temperature</code> = حمّى.', f:'high <u>temperature</u>.'},
        {p:'He ___ a bad cough.', o:['has','have','is'], a:0, w:'مفرد ← <code>has</code>.', f:'He <u>has</u> a cough.'},
        {p:'What’s the ___?  I have a cold.', o:['matter','problem is','wrong is'], a:0, w:'<code>What’s the matter?</code>', f:'What’s the <u>matter</u>?'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['I','am','a','headache','.'], bad:1, fix:'have', w:'مع المرض ← <code>have</code>.', f:'I <u>have</u> a headache.'},
        {words:['He','have','a','fever','.'], bad:1, fix:'has', w:'مفرد ← <code>has</code>.', f:'He <u>has</u> a fever.'},
        {words:['What’s','wrong','you','?'], bad:2, fix:'with you', w:'<code>What’s wrong with you?</code>', f:'What’s wrong <u>with you</u>?'},
        {words:['She','has','a','high','headache','.'], bad:4, fix:'temperature', w:'الحمّى ← <code>high temperature</code>.', f:'high <u>temperature</u>.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['I','have','a','headache','.'], w:'have + المرض.', f:'I have a headache.'},
        {sol:['What’s','wrong','with','you','?'], w:'سؤالٌ عن الحال.', f:'What’s wrong with you?'},
        {sol:['He','has','a','sore','throat','.'], w:'مفرد ← has.', f:'He has a sore throat.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'headache', ask:'المعنى', o:['صداع','سعال'], a:0, w:'صداع.', f:'headache = صداع.'},
        {p:'I ___ a headache.', ask:'اختر', o:['have','am'], a:0, w:'have.', f:'<u>have</u>.'},
        {p:'fever', ask:'المعنى', o:['حمّى','زكام'], a:0, w:'حمّى.', f:'fever = حمّى.'},
        {p:'runny nose and fever →', ask:'المرض', o:['the flu','a toothache'], a:0, w:'إنفلونزا.', f:'the flu.'},
        {p:'What’s ___ with you?', ask:'اختر', o:['wrong','bad'], a:0, w:'What’s wrong?', f:'<u>wrong</u>.'},
        {sol:['I','have','a','headache','.'], w:'have + المرض.', f:'I have a headache.'},
        {p:'sore throat', ask:'المعنى', o:['التهاب حلق','ألم معدة'], a:0, w:'التهاب حلق.', f:'sore throat.'},
        {p:'He ___ a cough.', ask:'اختر', o:['has','have'], a:0, w:'مفرد.', f:'<u>has</u>.'},
        {p:'cough', ask:'المعنى', o:['سعال','صداع'], a:0, w:'سعال.', f:'cough = سعال.'}
      ]}
    ]
  };
})();
