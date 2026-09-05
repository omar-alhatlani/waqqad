/* ============================================================
   Lesson: Past Perfect + Gerunds as Subjects
   English · Super Goal 3 · Unit 12 (Culture Shock) · صفحة ١٣٩
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U12_PASTPERF'] = {
    id:'EN_SG3_U12_PASTPERF',
    title:'Past Perfect & Gerunds as Subjects',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'had + p.p. · gerund as subject',
      intro:'نستعمل <b>الماضي التامّ</b> (<code>had + التصريف الثالث</code>) لفعلٍ حدث <b>قبل</b> فعلٍ آخر في الماضي: <code>By the time we arrived, the flight had already left</code>. وتعابيرُه: <code>after, before, by the time, already, never, until</code>. و<b>الاسمُ الفعليّ (gerund)</b> قد يكون <b>فاعلًا</b>: <code>Traveling is fun. Learning a language takes time</code>.',
      table:[['past perfect','had + past participle'],['sequence','…before / by the time…'],['gerund subject','Reading is useful.'],['contraction',"had → 'd (I'd, she'd)"]],
      trick:'الماضي التامّ للحدث <b>الأسبق</b> بين ماضيين. والاسمُ الفعليُّ (<code>-ing</code>) في أوّل الجملة يكون فاعلًا ويأخذ فعلًا مفردًا: <code>Swimming is fun</code>.'
    },
    stages:[
      { type:'choice', name:'الماضي التامّ', hint:'had + p.p.', qs:[
        {p:'By the time we arrived, the flight had already ___.', o:['left','leave','leaving','leaves'], a:0, w:'التصريف الثالث.', f:'had already <u>left</u>'},
        {p:'She didn’t know how to use chopsticks because she ___ never eaten there.', o:['had','has','was','did'], a:0, w:'الأسبق ← <code>had</code>.', f:'she <u>had</u> never eaten'},
        {p:'I ___ never been abroad until I traveled to Paris.', o:['had','have','was','did'], a:0, w:'<code>had</code>.', f:'I <u>had</u> never been'},
        {p:'The past perfect describes the ___ of two past actions.', o:['earlier','later','present'], a:0, w:'الأسبق.', f:'the <u>earlier</u>'}
      ]},
      { type:'choice', name:'الترتيب الزمنيّ', hint:'الأسبق تامّ، اللاحق بسيط', qs:[
        {p:'After she ___ to the hotel, she exchanged money.', o:['had gone','goes','was going','go'], a:0, w:'الأسبق ← <code>had gone</code>.', f:'After she <u>had gone</u>…'},
        {p:'They had already started boarding when I ___ at the gate.', o:['arrived','had arrived','arrive','arriving'], a:0, w:'اللاحق ← بسيط.', f:'when I <u>arrived</u>'},
        {p:'By the time he finished, he ___ in London for five years.', o:['had lived','lived','lives','was living'], a:0, w:'الأسبق ← <code>had lived</code>.', f:'he <u>had lived</u>…'},
        {p:'The contraction of “had” is:', o:["'d",'’s','’ve'], a:0, w:'<code>’d</code>.', f:"<u>'d</u>"}
      ]},
      { type:'choice', name:'gerund كفاعل', hint:'V-ing في أوّل الجملة', qs:[
        {p:'___ a new language takes time.', o:['Learning','Learn','To learning','Learns'], a:0, w:'الفاعل ← <code>Learning</code>.', f:'<u>Learning</u> a language…'},
        {p:'___ is a good way to relax.', o:['Reading','Read','To reading','Reads'], a:0, w:'<code>Reading</code>.', f:'<u>Reading</u> is…'},
        {p:'Traveling ___ fun and educational.', o:['is','are','be','being'], a:0, w:'الفاعلُ الفعليّ مفرد ← <code>is</code>.', f:'Traveling <u>is</u>…'},
        {p:'A gerund used as a subject ends in:', o:['-ing','-ed','-s'], a:0, w:'<code>-ing</code>.', f:'<u>-ing</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['The','flight','had','already','leave','.'], bad:4, fix:'left', w:'التصريف الثالث.', f:'had already <u>left</u>.'},
        {words:['After','she','had','go',',','she','ate','.'], bad:3, fix:'gone', w:'<code>had gone</code>.', f:'After she had <u>gone</u>…'},
        {words:['Learn','a','language','takes','time','.'], bad:0, fix:'Learning', w:'الفاعل ← <code>Learning</code>.', f:'<u>Learning</u> a language takes time.'},
        {words:['Reading','are','useful','.'], bad:1, fix:'is', w:'الفاعلُ الفعليّ مفرد.', f:'Reading <u>is</u> useful.'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['The','flight','had','already','left','.'], w:'<code>had + p.p.</code>.', f:'The flight had already left.'},
        {sol:['Learning','a','language','takes','time','.'], w:'gerund فاعل.', f:'Learning a language takes time.'},
        {sol:['After','she','had','gone',',','he','arrived','.'], w:'الأسبق تامّ.', f:'After she had gone, he arrived.'},
        {sol:['Traveling','is','fun','.'], w:'gerund فاعل مفرد.', f:'Traveling is fun.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'The flight had already ___.', ask:'اختر', o:['left','leave'], a:0, w:'التصريف الثالث.', f:'<u>left</u>'},
        {p:'She ___ never eaten there.', ask:'اختر', o:['had','has'], a:0, w:'الأسبق.', f:'<u>had</u>'},
        {p:'They had started when I ___.', ask:'اختر', o:['arrived','had arrived'], a:0, w:'اللاحق بسيط.', f:'<u>arrived</u>'},
        {p:'___ a language takes time.', ask:'اختر', o:['Learning','Learn'], a:0, w:'الفاعل.', f:'<u>Learning</u>'},
        {p:'Traveling ___ fun.', ask:'اختر', o:['is','are'], a:0, w:'مفرد.', f:'<u>is</u>'},
        {p:'past perfect = the ___ action.', ask:'اختر', o:['earlier','later'], a:0, w:'الأسبق.', f:'<u>earlier</u>'},
        {sol:['The','flight','had','already','left','.'], w:'<code>had + p.p.</code>.', f:'The flight had already left.'},
        {p:'“had” contraction =', ask:'اختر', o:["'d","'ve"], a:0, w:'<code>’d</code>.', f:"<u>'d</u>"},
        {p:'gerund subject ends in ___.', ask:'اختر', o:['-ing','-ed'], a:0, w:'<code>-ing</code>.', f:'<u>-ing</u>'}
      ]}
    ]
  };
})();
