/* ============================================================
   Lesson: Past Progressive with When and While
   English · Super Goal 3 · Unit 9 (All Kinds of People) · صفحة ٩٦
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U9_PASTPROG'] = {
    id:'EN_SG3_U9_PASTPROG',
    title:'Past Progressive: when & while',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'was/were + V-ing · when / while',
      intro:'نستعمل <b>الماضي المستمرّ</b> (<code>was/were + V-ing</code>) لحدثٍ كان جاريًا في الماضي. مع <code>when</code> يأتي الحدثُ <b>القصيرُ</b> القاطع في الماضي البسيط: <code>I was reading when the phone rang</code>. ومع <code>while</code> يأتي الحدثُ <b>الطويلُ</b> المستمرّ: <code>While I was reading, the phone rang</code>.',
      table:[['when + simple past','…when the phone rang.'],['while + past progressive','While I was reading…'],['+','They were working.'],['question','What were you doing?']],
      trick:'<code>while</code> يصحبها عادةً الحدثُ الطويل (المستمرّ)، و<code>when</code> يصحبها عادةً الحدثُ القصير (البسيط) الذي قاطعه.'
    },
    stages:[
      { type:'choice', name:'التكوين', hint:'was/were + V-ing', qs:[
        {p:'They ___ working when I called.', o:['were','was','are','did'], a:0, w:'جمع ← <code>were</code>.', f:'They <u>were</u> working.'},
        {p:'She was ___ around the campus.', o:['walking','walk','walks','walked'], a:0, w:'<code>-ing</code>.', f:'was <u>walking</u>'},
        {p:'What ___ you doing at 8?', o:['were','was','did','are'], a:0, w:'<code>you</code> ← <code>were</code>.', f:'What <u>were</u> you doing?'},
        {p:'He ___ sleeping when it happened.', o:['was','were','is','did'], a:0, w:'مفرد ← <code>was</code>.', f:'He <u>was</u> sleeping.'}
      ]},
      { type:'choice', name:'when', hint:'الحدث القصير القاطع', qs:[
        {p:'I was reading when the phone ___.', o:['rang','was ringing','rings','ring'], a:0, w:'القاطع ← ماضٍ بسيط.', f:'when the phone <u>rang</u>'},
        {p:'She was cooking when he ___.', o:['arrived','was arriving','arrives','arrive'], a:0, w:'بسيط.', f:'when he <u>arrived</u>'},
        {p:'They ___ TV when the lights went out.', o:['were watching','watched','watch','watches'], a:0, w:'الطويل ← مستمرّ.', f:'They <u>were watching</u>…'},
        {p:'With “when”, the interrupting action is:', o:['simple past','past progressive','present'], a:0, w:'الماضي البسيط.', f:'<u>simple past</u>'}
      ]},
      { type:'choice', name:'while', hint:'الحدث الطويل المستمرّ', qs:[
        {p:'While I ___, the phone rang.', o:['was reading','read','reads','am reading'], a:0, w:'مع <code>while</code> ← مستمرّ.', f:'While I <u>was reading</u>…'},
        {p:'While she was cooking, he ___.', o:['called','was calling','calls','call'], a:0, w:'القاطع ← بسيط.', f:'…he <u>called</u>'},
        {p:'While they ___, it started to rain.', o:['were playing','played','play','plays'], a:0, w:'مستمرّ.', f:'While they <u>were playing</u>…'},
        {p:'“while” usually goes with the:', o:['past progressive','simple past','future'], a:0, w:'المستمرّ.', f:'<u>past progressive</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['I','was','read','when','he','came','.'], bad:2, fix:'reading', w:'<code>-ing</code>.', f:'I was <u>reading</u> when he came.'},
        {words:['She','was','cooking','when','he','was','arriving','.'], bad:6, fix:'arrived', w:'القاطع ← بسيط.', f:'…when he <u>arrived</u>.'},
        {words:['They','was','playing','.'], bad:1, fix:'were', w:'جمع ← <code>were</code>.', f:'They <u>were</u> playing.'},
        {words:['While','I','read',',','the','phone','rang','.'], bad:2, fix:'was reading', w:'مع <code>while</code> ← مستمرّ.', f:'While I <u>was reading</u>…'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['I','was','reading','when','he','called','.'], w:'مستمرّ + <code>when</code> + بسيط.', f:'I was reading when he called.'},
        {sol:['While','she','was','cooking',',','he','arrived','.'], w:'<code>while</code> + مستمرّ.', f:'While she was cooking, he arrived.'},
        {sol:['They','were','working','all','day','.'], w:'<code>were + V-ing</code>.', f:'They were working all day.'},
        {sol:['What','were','you','doing','?'], w:'السؤال.', f:'What were you doing?'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'They ___ working.', ask:'be', o:['were','was'], a:0, w:'جمع.', f:'<u>were</u>'},
        {p:'She was ___ around.', ask:'اختر', o:['walking','walk'], a:0, w:'<code>-ing</code>.', f:'<u>walking</u>'},
        {p:'I was reading when the phone ___.', ask:'اختر', o:['rang','was ringing'], a:0, w:'بسيط.', f:'<u>rang</u>'},
        {p:'While I ___, the phone rang.', ask:'اختر', o:['was reading','read'], a:0, w:'مستمرّ.', f:'<u>was reading</u>'},
        {p:'While she was cooking, he ___.', ask:'اختر', o:['called','was calling'], a:0, w:'بسيط.', f:'<u>called</u>'},
        {p:'“when” interrupting action =', ask:'اختر', o:['simple past','past progressive'], a:0, w:'بسيط.', f:'<u>simple past</u>'},
        {sol:['I','was','reading','when','he','came','.'], w:'مستمرّ + <code>when</code>.', f:'I was reading when he came.'},
        {p:'“while” goes with =', ask:'اختر', o:['past progressive','simple past'], a:0, w:'المستمرّ.', f:'<u>past progressive</u>'},
        {p:'What ___ you doing?', ask:'اختر', o:['were','was'], a:0, w:'<code>you</code>.', f:'<u>were</u>'}
      ]}
    ]
  };
})();
