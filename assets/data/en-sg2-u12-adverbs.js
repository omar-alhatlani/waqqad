/* ============================================================
   Lesson: Position of Adjectives + Adverbs of Manner
   English · Super Goal 2 · Unit 12 (It's Going to Be Fun!) · صفحة ١٠٩
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U12_ADVERBS'] = {
    id:'EN_SG2_U12_ADVERBS',
    title:'Adjectives & Adverbs of Manner',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'adjective + noun · verb + adverb (-ly)',
      intro:'تصف <b>الصفةُ الاسمَ</b> وتأتي قبله (<code>colorful fish</code>) أو بعد <code>be</code> (<code>The fish are colorful</code>). أمّا <b>ظرفُ الحال</b> فيصف <b>الفعل</b> ويُكوَّن غالبًا بإضافة <code>-ly</code> إلى الصفة (<code>slow → slowly</code>)، ويأتي بعد الفعل أو بعد المفعول: <code>She swims slowly</code>.',
      table:[['adjective','a careful driver'],['adverb','drives carefully'],['-ly','quick → quickly'],['irregular','good → well · fast → fast']],
      trick:'الصفةُ تصف الاسم، والظرفُ يصف الفعل. حوّلِ الصفةَ إلى ظرفٍ بإضافة <code>-ly</code>. لكنّ <code>good</code> ظرفُها <code>well</code>، و<code>fast</code> تبقى <code>fast</code>.'
    },
    stages:[
      { type:'choice', name:'صفة أم ظرف', hint:'يصف الاسم أم الفعل؟', qs:[
        {p:'He is a ___ driver.', o:['careful','carefully','care'], a:0, w:'يصف الاسم ← صفة.', f:'a <u>careful</u> driver'},
        {p:'He drives ___.', o:['carefully','careful','care'], a:0, w:'يصف الفعل ← ظرف.', f:'drives <u>carefully</u>'},
        {p:'The fish are very ___.', o:['colorful','colorfully','color'], a:0, w:'بعد <code>be</code> ← صفة.', f:'very <u>colorful</u>'},
        {p:'She sings ___.', o:['beautifully','beautiful','beauty'], a:0, w:'يصف الفعل ← ظرف.', f:'sings <u>beautifully</u>'}
      ]},
      { type:'choice', name:'تكوين الظرف', hint:'أضف -ly', qs:[
        {p:'slow → ___', o:['slowly','slowy','slow'], a:0, w:'<code>slow + ly</code>.', f:'<u>slowly</u>'},
        {p:'quick → ___', o:['quickly','quicky','quick'], a:0, w:'<code>quick + ly</code>.', f:'<u>quickly</u>'},
        {p:'good → ___ (ظرف شاذّ)', o:['well','goodly','good'], a:0, w:'<code>good → well</code>.', f:'<u>well</u>'},
        {p:'fast → ___ (بلا تغيير)', o:['fast','fastly','faster'], a:0, w:'<code>fast</code> تبقى.', f:'<u>fast</u>'}
      ]},
      { type:'choice', name:'الموضع', hint:'الصفة قبل الاسم، الظرف بعد الفعل', qs:[
        {p:'She is a ___ singer.', o:['good','well','goodly'], a:0, w:'صفةٌ قبل الاسم ← <code>good</code>.', f:'a <u>good</u> singer'},
        {p:'She sings ___.', o:['well','good','goodly'], a:0, w:'ظرفٌ يصف الفعل ← <code>well</code>.', f:'sings <u>well</u>'},
        {p:'Adverbs of manner usually go ___ the verb.', o:['after','before','instead of'], a:0, w:'بعد الفعل.', f:'<u>after</u> the verb'},
        {p:'Adjectives usually go ___ a noun.', o:['before','after','without'], a:0, w:'قبل الاسم.', f:'<u>before</u> a noun'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['He','drives','careful','.'], bad:2, fix:'carefully', w:'يصف الفعل ← ظرف <code>carefully</code>.', f:'He drives <u>carefully</u>.'},
        {words:['She','is','a','beautifully','singer','.'], bad:3, fix:'beautiful', w:'قبل الاسم ← صفة.', f:'a <u>beautiful</u> singer'},
        {words:['He','sings','good','.'], bad:2, fix:'well', w:'ظرف <code>good</code> هو <code>well</code>.', f:'He sings <u>well</u>.'},
        {words:['She','swims','slow','.'], bad:2, fix:'slowly', w:'ظرف ← <code>slowly</code>.', f:'She swims <u>slowly</u>.'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['He','is','a','careful','driver','.'], w:'الصفة قبل الاسم.', f:'He is a careful driver.'},
        {sol:['He','drives','carefully','.'], w:'الظرف بعد الفعل.', f:'He drives carefully.'},
        {sol:['She','sings','beautifully','.'], w:'الظرف بعد الفعل.', f:'She sings beautifully.'},
        {sol:['They','are','colorful','fish','.'], w:'الصفة قبل الاسم.', f:'They are colorful fish.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'a ___ driver', ask:'اختر', o:['careful','carefully'], a:0, w:'صفة.', f:'<u>careful</u>'},
        {p:'drives ___', ask:'اختر', o:['carefully','careful'], a:0, w:'ظرف.', f:'<u>carefully</u>'},
        {p:'slow → ___', ask:'اختر', o:['slowly','slowy'], a:0, w:'<code>+ly</code>.', f:'<u>slowly</u>'},
        {p:'good → ___ (ظرف)', ask:'اختر', o:['well','goodly'], a:0, w:'شاذّ.', f:'<u>well</u>'},
        {p:'a ___ singer', ask:'اختر', o:['good','well'], a:0, w:'صفة.', f:'<u>good</u>'},
        {p:'sings ___', ask:'اختر', o:['well','good'], a:0, w:'ظرف.', f:'<u>well</u>'},
        {sol:['He','drives','carefully','.'], w:'الظرف بعد الفعل.', f:'He drives carefully.'},
        {p:'fast → ___ (ظرف)', ask:'اختر', o:['fast','fastly'], a:0, w:'بلا تغيير.', f:'<u>fast</u>'},
        {p:'Adjectives go ___ a noun.', ask:'اختر', o:['before','after'], a:0, w:'قبل.', f:'<u>before</u>'}
      ]}
    ]
  };
})();
