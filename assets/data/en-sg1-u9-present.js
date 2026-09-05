/* ============================================================
   Lesson: Simple Present Tense + Questions with What (jobs)
   English · Super Goal 1 · Unit 9 (What Do You Do?) · صفحة ٨٠
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1). lang:'en' → محتوى إنجليزيّ، شرح عربيّ.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U9_PRESENT'] = {
    id:'EN_SG1_U9_PRESENT',
    title:'Simple Present & Questions with What',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'Talking About Jobs',
      intro:'نستعمل <b>المضارع البسيط</b> للأعمال المعتادة. مع الغائب المفرد <code>he/she</code> يأخذ الفعل <code>-s</code>: <code>He works for an airline</code>. ونسأل عن المهنة بـ <code>What do you do?</code> (= ما مهنتك؟)، ومع الغائب <code>What does he do?</code>',
      table:[['I / You / We / They','work, play, cook'],['He / She','works, plays, cooks'],['What do you do?','ما مهنتك؟'],['What does he do?','He’s a bus driver.']],
      trick:'<code>What do you do?</code> سؤالٌ عن المهنة لا عن اللحظة. ومع <code>he/she</code> نستعمل <code>does</code> ويرجع الفعل مجرّدًا: <code>What does he do?</code>'
    },
    stages:[
      { type:'choice', name:'أضِف s أم لا؟', hint:'الغائب المفرد يأخذ -s', qs:[
        {p:'He ___ for an airline.', o:['works','work','working','do work'], a:0, w:'<code>He</code> ← <code>works</code>.', f:'He <u>works</u> for an airline.'},
        {p:'They ___ for a famous team.', o:['play','plays','playing','does play'], a:0, w:'<code>They</code> جمع ← بلا <code>-s</code>.', f:'They <u>play</u> for a team.'},
        {p:'My father ___ in a clinic.', o:['works','work','is work','working'], a:0, w:'<code>father</code> مفرد ← <code>works</code>.', f:'My father <u>works</u> in a clinic.'},
        {p:'She ___ for a newspaper.', o:['writes','write','writing','do write'], a:0, w:'<code>She</code> ← <code>writes</code>.', f:'She <u>writes</u> for a newspaper.'},
        {p:'I ___ shoes in a store.', o:['sell','sells','selling','sold'], a:0, w:'<code>I</code> بلا <code>-s</code>.', f:'I <u>sell</u> shoes.'}
      ]},
      { type:'choice', name:'Questions with What', hint:'do أم does؟', qs:[
        {p:'What ___ you do?', o:['do','does','are','is'], a:0, w:'<code>you</code> ← <code>do</code>.', f:'What <u>do</u> you do?'},
        {p:'What ___ he do?', o:['does','do','is','are'], a:0, w:'<code>he</code> ← <code>does</code>.', f:'What <u>does</u> he do?'},
        {p:'What does your uncle ___?', o:['do','does','doing','did'], a:0, w:'بعد <code>does</code> ← مجرّد <code>do</code>.', f:'…your uncle <u>do</u>?'},
        {p:'“What do you do?” asks about your:', o:['job','age','name'], a:0, w:'سؤالٌ عن المهنة.', f:'about your <u>job</u>'},
        {p:'What ___ your friends do?', o:['do','does','is','are'], a:0, w:'<code>friends</code> جمع ← <code>do</code>.', f:'What <u>do</u> your friends do?'}
      ]},
      { type:'choice', name:'الإجابة عن المهنة', hint:'He’s a … / She’s a …', qs:[
        {p:'What does he do? — He’s a bus ___.', o:['driver','drive','driving'], a:0, w:'المهنة اسمٌ ← <code>driver</code>.', f:'He’s a bus <u>driver</u>.'},
        {p:'What does she do? — She ___ shoes.', o:['sells','sell','selling'], a:0, w:'<code>She</code> ← <code>sells</code>.', f:'She <u>sells</u> shoes.'},
        {p:'What do you want to ___?', o:['be','being','are'], a:0, w:'<code>want to + be</code>.', f:'want to <u>be</u>'},
        {p:'I want to be a ___.', o:['teacher','teach','teaching'], a:0, w:'مهنةٌ اسم ← <code>teacher</code>.', f:'a <u>teacher</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['He','work','for','an','airline','.'], bad:1, fix:'works', w:'الغائب المفرد ← <code>works</code>.', f:'He <u>works</u> for an airline.'},
        {words:['What','does','he','does','?'], bad:3, fix:'do', w:'بعد <code>does</code> ← مجرّد <code>do</code>.', f:'What does he <u>do</u>?'},
        {words:['What','do','she','do','?'], bad:1, fix:'does', w:'<code>she</code> ← <code>does</code>.', f:'What <u>does</u> she do?'},
        {words:['They','plays','for','a','team','.'], bad:1, fix:'play', w:'<code>They</code> جمع ← <code>play</code>.', f:'They <u>play</u> for a team.'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['What','does','your','father','do','?'], w:'<code>What + does + الفاعل + do</code>.', f:'What does your father do?'},
        {sol:['He','works','for','a','newspaper','.'], w:'الغائب المفرد يأخذ <code>-s</code>.', f:'He works for a newspaper.'},
        {sol:['I','want','to','be','a','doctor','.'], w:'<code>want to be</code> + المهنة.', f:'I want to be a doctor.'},
        {sol:['What','do','you','do','?'], w:'سؤالٌ عن المهنة.', f:'What do you do?'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'He ___ for an airline.', ask:'الفعل', o:['works','work'], a:0, w:'مفرد ← <code>works</code>.', f:'<u>works</u>'},
        {p:'What ___ you do?', ask:'المساعد', o:['do','does'], a:0, w:'<code>do</code>.', f:'<u>do</u>'},
        {p:'What ___ she do?', ask:'المساعد', o:['does','do'], a:0, w:'<code>does</code>.', f:'<u>does</u>'},
        {p:'What does he ___?', ask:'الفعل', o:['do','does'], a:0, w:'مجرّد.', f:'<u>do</u>'},
        {p:'“What do you do?” = about your ___.', ask:'اختر', o:['job','age'], a:0, w:'المهنة.', f:'<u>job</u>'},
        {p:'They ___ for a team.', ask:'الفعل', o:['play','plays'], a:0, w:'جمع.', f:'<u>play</u>'},
        {sol:['What','does','your','uncle','do','?'], w:'ترتيب السؤال.', f:'What does your uncle do?'},
        {p:'He’s a bus ___.', ask:'اختر', o:['driver','drive'], a:0, w:'اسمٌ.', f:'<u>driver</u>'},
        {p:'I want to ___ a doctor.', ask:'أكمل', o:['be','being'], a:0, w:'<code>want to be</code>.', f:'<u>be</u>'}
      ]}
    ]
  };
})();
