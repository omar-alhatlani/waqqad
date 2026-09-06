/* ============================================================
   Lesson: Wish + Simple Past
   English · Super Goal 3 · Unit 11 (Making Choices) · صفحة ١٢٢
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U11_WISH'] = {
    id:'EN_SG3_U11_WISH',
    title:'Wish + Simple Past',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'wish + past (present wishes)',
      intro:'نستعمل <code>wish + الماضي البسيط</code> للتمنّي بأمرٍ في الحاضر <b>عكسِ الواقع</b> (وغالبًا لن يتحقّق): <code>I wish I had more time</code> (= ليس لديّ وقتٌ الآن). ومع <code>be</code> نستعمل <code>were</code> لكلّ الفاعلين: <code>I wish I were rich</code>. ونستعمل <code>could</code> للقدرة: <code>I wish I could swim</code>.',
      table:[['wish + past','I wish I had a car.'],['wish + were','I wish I were taller.'],['wish + could','I wish I could fly.'],['negative','I wish I didn’t have to study.']],
      trick:'<code>wish + past</code> يعبّر عن رغبةٍ في تغيير الواقع الحاليّ. الماضي هنا لا يعني الزمنَ الماضي، بل عكسَ الواقع الحاضر.'
    },
    stages:[
      { type:'choice', name:'wish + past', hint:'الفعل بالماضي البسيط', qs:[
        {p:'I wish I ___ more time. (= I don’t have time)', o:['had','have','will have','would have'], a:0, w:'بعد <code>wish</code> ← ماضٍ.', f:'I wish I <u>had</u> more time.'},
        {p:'They wish they ___ a bigger house.', o:['had','have','has','will have'], a:0, w:'<code>had</code>.', f:'wish they <u>had</u>…'},
        {p:'He wishes he ___ how to drive.', o:['knew','knows','know','will know'], a:0, w:'ماضٍ ← <code>knew</code>.', f:'wishes he <u>knew</u>…'},
        {p:'“wish + past” expresses a wish about the:', o:['present','far past','future certainty'], a:0, w:'الحاضر.', f:'the <u>present</u>'}
      ]},
      { type:'choice', name:'wish + were / could', hint:'be والقدرة', qs:[
        {p:'Faisal wishes he ___ rich.', o:['were','is','was going','will be'], a:0, w:'مع <code>be</code> في الأمنية ← <code>were</code>.', f:'wishes he <u>were</u> rich'},
        {p:'I wish I ___ speak French.', o:['could','can','will','would'], a:0, w:'القدرة ← <code>could</code>.', f:'I wish I <u>could</u> speak French'},
        {p:'She wishes she ___ taller.', o:['were','is','will be','would be'], a:0, w:'<code>were</code>.', f:'wishes she <u>were</u> taller'},
        {p:'After “wish … could”, the verb is:', o:['base form','+ -ing','+ -ed'], a:0, w:'مجرّد.', f:'<u>base form</u>'}
      ]},
      { type:'choice', name:'النفي', hint:'wish + didn’t', qs:[
        {p:'I wish I ___ have to study today.', o:["didn’t","don’t","won’t",'am not'], a:0, w:'النفي ← <code>didn’t</code>.', f:"I wish I <u>didn’t</u> have to study."},
        {p:'He wishes it ___ raining.', o:["wasn’t",'isn’t','won’t be','doesn’t'], a:0, w:'<code>wasn’t/weren’t</code>.', f:"wishes it <u>wasn’t</u> raining"},
        {p:'We wish we ___ live so far away.', o:["didn’t",'don’t','won’t','aren’t'], a:0, w:'<code>didn’t</code>.', f:"wish we <u>didn’t</u> live…"},
        {p:'“I wish I didn’t…” shows I ___ the situation.', o:["don’t like",'love','forgot'], a:0, w:'لا يعجبني.', f:"I <u>don’t like</u> it"}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['I','wish','I','have','more','time','.'], bad:3, fix:'had', w:'بعد <code>wish</code> ← ماضٍ.', f:'I wish I <u>had</u> more time.'},
        {words:['I','wish','I','can','swim','.'], bad:3, fix:'could', w:'<code>wish … could</code>.', f:'I wish I <u>could</u> swim.'},
        {words:['He','wishes','he','is','rich','.'], bad:3, fix:'were', w:'الأمنية ← <code>were</code>.', f:'He wishes he <u>were</u> rich.'},
        {words:['I','wish','I','don’t','have','to','study','.'], bad:3, fix:"didn’t", w:'النفي ← <code>didn’t</code>.', f:"I wish I <u>didn’t</u> have to study."}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['I','wish','I','had','more','time','.'], w:'<code>wish + past</code>.', f:'I wish I had more time.'},
        {sol:['I','wish','I','could','swim','.'], w:'<code>wish + could</code>.', f:'I wish I could swim.'},
        {sol:['He','wishes','he','were','rich','.'], w:'<code>wish + were</code>.', f:'He wishes he were rich.'},
        {sol:['I','wish','I','didn’t','have','to','study','.'], w:'النفي.', f:"I wish I didn’t have to study."}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'I wish I ___ more time.', ask:'اختر', o:['had','have'], a:0, w:'ماضٍ.', f:'<u>had</u>'},
        {p:'He wishes he ___ rich.', ask:'اختر', o:['were','is'], a:0, w:'<code>were</code>.', f:'<u>were</u>'},
        {p:'I wish I ___ swim.', ask:'اختر', o:['could','can'], a:0, w:'القدرة.', f:'<u>could</u>'},
        {p:'I wish I ___ have to study.', ask:'اختر', o:["didn’t","don’t"], a:0, w:'النفي.', f:"<u>didn’t</u>"},
        {p:'He wishes he ___ how to drive.', ask:'اختر', o:['knew','knows'], a:0, w:'ماضٍ.', f:'<u>knew</u>'},
        {p:'“wish + past” = wish about the ___.', ask:'اختر', o:['present','far past'], a:0, w:'الحاضر.', f:'<u>present</u>'},
        {sol:['I','wish','I','were','taller','.'], w:'<code>wish + were</code>.', f:'I wish I were taller.'},
        {p:'after “wish … could”, verb is ___.', ask:'اختر', o:['base','+ -ing'], a:0, w:'مجرّد.', f:'<u>base</u>'},
        {p:'They wish they ___ a house.', ask:'اختر', o:['had','have'], a:0, w:'ماضٍ.', f:'<u>had</u>'}
      ]}
    ]
  };
})();
