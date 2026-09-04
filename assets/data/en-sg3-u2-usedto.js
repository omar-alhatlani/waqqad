/* ============================================================
   Lesson: Used to + Be born + Passive Expressions + When clauses
   English · Super Goal 3 · Unit 2 (Life Stories) · صفحات ١٤ و٢١
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U2_USEDTO'] = {
    id:'EN_SG3_U2_USEDTO',
    title:'Used to & Past Expressions',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'Used to, Be born & When clauses',
      intro:'نستعمل <code>used to</code> لعادةٍ أو حالةٍ في الماضي لم تعُد موجودة: <code>I used to play with toys</code>. في السؤال والنفي: <code>Did you use to …? / I didn’t use to …</code> (بلا <code>d</code>). ونستعمل <code>be born</code> للولادة، والمبنيَّ للمجهول في الماضي (<code>was/were + p.p.</code>): <code>He was raised in Abha</code>. وتربط <code>when</code> حدثًا بزمنه: <code>When I was a child, I used to …</code>',
      table:[['Affirmative','I used to play football.'],['Negative','I didn’t use to play.'],['Question','Did you use to play?'],['Be born','I was born in 1935.']],
      trick:'في النفي والسؤال: <code>use to</code> بلا <code>d</code> (لأنّ <code>did</code> حمل الماضي). وتعبيرات مثل <code>was raised / was educated / were married</code> شائعةٌ في قصص الماضي.'
    },
    stages:[
      { type:'choice', name:'used to', hint:'عادةٌ ماضية', qs:[
        {p:'When I was little, I ___ play with toys.', o:['used to','use to','used','am used to'], a:0, w:'الإثبات ← <code>used to</code>.', f:'I <u>used to</u> play with toys.'},
        {p:'People ___ ride camels in the city.', o:['used to','use to','uses to','did use'], a:0, w:'الإثبات ← <code>used to</code>.', f:'People <u>used to</u> ride camels.'},
        {p:'Mona ___ teach English.', o:['used to','use to','using to','uses'], a:0, w:'<code>used to</code>.', f:'Mona <u>used to</u> teach English.'},
        {p:'He ___ live next door to me.', o:['used to','use to','was used','uses to'], a:0, w:'<code>used to</code>.', f:'He <u>used to</u> live next door.'}
      ]},
      { type:'choice', name:'السؤال والنفي', hint:'use to بلا d', qs:[
        {p:'___ you use to play with dolls?', o:['Did','Do','Were','Was'], a:0, w:'<code>Did</code> يحمل الماضي.', f:'<u>Did</u> you use to play …?'},
        {p:'Did you ___ play video games?', o:['use to','used to','using to','uses to'], a:0, w:'بعد <code>did</code> ← <code>use to</code> بلا <code>d</code>.', f:'Did you <u>use to</u> play …?'},
        {p:'I ___ play video games. (نفي)', o:['didn’t use to','didn’t used to','don’t use to','wasn’t use to'], a:0, w:'النفي ← <code>didn’t use to</code>.', f:'I <u>didn’t use to</u> play …'},
        {p:'What ___ you use to play with?', o:['did','do','were','was'], a:0, w:'<code>did</code>.', f:'What <u>did</u> you use to play with?'}
      ]},
      { type:'choice', name:'be born & المبني للمجهول', hint:'was/were + p.p.', qs:[
        {p:'King Salman ___ born in Riyadh in 1935.', o:['was','were','is','did'], a:0, w:'مفرد ← <code>was</code>.', f:'…<u>was</u> born…'},
        {p:'He was ___ at the Princes’ School.', o:['educated','educate','educating','educates'], a:0, w:'المبني للمجهول ← <code>was educated</code>.', f:'was <u>educated</u>'},
        {p:'Michael was ___ in Montreal.', o:['raised','raise','raising','raises'], a:0, w:'<code>was raised</code>.', f:'was <u>raised</u>'},
        {p:'His parents ___ married in Tabuk.', o:['were','was','are','did'], a:0, w:'الجمع ← <code>were</code>.', f:'…<u>were</u> married…'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['Did','you','used','to','play','?'], bad:2, fix:'use', w:'بعد <code>did</code> ← <code>use to</code> بلا <code>d</code>.', f:'Did you <u>use to</u> play?'},
        {words:['I','didn’t','used','to','smoke','.'], bad:2, fix:'use', w:'النفي ← <code>didn’t use to</code>.', f:'I didn’t <u>use to</u> smoke.'},
        {words:['He','was','born','on','1935','.'], bad:3, fix:'in', w:'مع السنة ← <code>in 1935</code>.', f:'…born <u>in</u> 1935.'},
        {words:['His','parents','was','married','in','Tabuk','.'], bad:2, fix:'were', w:'الجمع ← <code>were</code>.', f:'His parents <u>were</u> married…'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['I','used','to','play','with','toys','.'], w:'<code>used to + الفعل المجرّد</code>.', f:'I used to play with toys.'},
        {sol:['Did','you','use','to','live','here','?'], w:'<code>Did + use to</code> بلا <code>d</code>.', f:'Did you use to live here?'},
        {sol:['He','was','educated','in','Riyadh','.'], w:'المبني للمجهول <code>was educated</code>.', f:'He was educated in Riyadh.'},
        {sol:['When','I','was','a','child',',','I','played','outside','.'], w:'جملة <code>when</code> ثمّ الحدث.', f:'When I was a child, I played outside.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'I ___ play football. (عادة ماضية)', ask:'اختر', o:['used to','use to'], a:0, w:'الإثبات ← <code>used to</code>.', f:'<u>used to</u>'},
        {p:'Did you ___ play chess?', ask:'اختر', o:['use to','used to'], a:0, w:'بعد <code>did</code> ← بلا <code>d</code>.', f:'<u>use to</u>'},
        {p:'I ___ play games. (نفي)', ask:'النفي', o:['didn’t use to','didn’t used to'], a:0, w:'<code>didn’t use to</code>.', f:'<u>didn’t use to</u>'},
        {p:'He ___ born in 1935.', ask:'be', o:['was','were'], a:0, w:'مفرد ← <code>was</code>.', f:'<u>was</u> born'},
        {p:'He was ___ in private schools.', ask:'أكمل', o:['educated','educate'], a:0, w:'<code>was educated</code>.', f:'<u>educated</u>'},
        {p:'His parents ___ married in Makkah.', ask:'be', o:['were','was'], a:0, w:'جمع ← <code>were</code>.', f:'<u>were</u> married'},
        {sol:['Did','you','use','to','live','here','?'], w:'<code>use to</code> بلا <code>d</code>.', f:'Did you use to live here?'},
        {p:'People ___ ride donkeys long ago.', ask:'اختر', o:['used to','use to'], a:0, w:'إثبات.', f:'<u>used to</u>'},
        {p:'He was ___ in Abha.', ask:'أكمل', o:['raised','raise'], a:0, w:'<code>was raised</code>.', f:'<u>raised</u>'}
      ]}
    ]
  };
})();
