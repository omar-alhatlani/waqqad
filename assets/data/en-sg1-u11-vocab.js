/* ============================================================
   Lesson: Vocabulary — Daily Routines & Telling Time
   English · Super Goal 1 · Unit 11 (What Time Do You Get Up?) · صفحات ٩٤–٩٥
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U11_VOCAB'] = {
    id:'EN_SG1_U11_VOCAB',
    title:'Vocabulary — Daily Routines',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'Routines & Time',
      intro:'أفعالُ الروتين اليوميّ: <code>get up</code> يستيقظ، <code>get dressed</code> يرتدي ملابسه، <code>have breakfast</code> يتناول الفطور، <code>go to school</code> يذهب للمدرسة، <code>do homework</code> يحلّ الواجب، <code>go to bed</code> ينام. ونقول الوقت: <code>It’s seven o’clock</code>، <code>It’s half past seven</code> (السابعة والنصف).',
      table:[['get up','يستيقظ'],['get dressed','يرتدي ملابسه'],['have breakfast','يتناول الفطور'],['do homework','يحلّ الواجب'],['go to bed','ينام']],
      trick:'كثيرٌ من أفعال الروتين مركّبة: <code>get up, get dressed, have breakfast</code>. ولقول الوقت: <code>o’clock</code> للساعة التامّة، و<code>half past</code> للنصف.'
    },
    stages:[
      { type:'choice', name:'أفعال الروتين', hint:'اختر الفعل الصحيح', qs:[
        {p:'In the morning, I ___ at 6.', o:['get up','go to bed','have dinner'], a:0, w:'يستيقظ.', f:'<u>get up</u>'},
        {p:'After I get up, I ___.', o:['get dressed','sleep','swim'], a:0, w:'يرتدي ملابسه.', f:'<u>get dressed</u>'},
        {p:'I ___ before I go to school.', o:['have breakfast','go to bed','get up late'], a:0, w:'يتناول الفطور.', f:'<u>have breakfast</u>'},
        {p:'In the evening, I ___.', o:['do my homework','get up','get dressed'], a:0, w:'يحلّ الواجب.', f:'<u>do my homework</u>'},
        {p:'At night, I ___.', o:['go to bed','get up','go to school'], a:0, w:'ينام.', f:'<u>go to bed</u>'}
      ]},
      { type:'gap', name:'قول الوقت', hint:'اختر التعبير الصحيح', qs:[
        {p:'7:00 = It’s seven ___.', o:['o’clock','clock','a clock'], a:0, w:'الساعة التامّة.', f:'seven <u>o’clock</u>'},
        {p:'7:30 = It’s ___ past seven.', o:['half','quarter','ten'], a:0, w:'والنصف.', f:'<u>half</u> past seven'},
        {p:'What ___ is it? — It’s 8 a.m.', o:['time','clock','hour'], a:0, w:'<code>What time…?</code>.', f:'What <u>time</u> is it?'},
        {p:'I get up ___ six o’clock.', o:['at','in','on'], a:0, w:'الساعات ← <code>at</code>.', f:'<u>at</u> six o’clock'}
      ]},
      { type:'choice', name:'أجزاء اليوم', hint:'morning / afternoon / evening', qs:[
        {p:'Breakfast is in the ___.', o:['morning','night','afternoon'], a:0, w:'الصباح.', f:'<u>morning</u>'},
        {p:'We sleep at ___.', o:['night','noon','morning'], a:0, w:'الليل.', f:'<u>night</u>'},
        {p:'School finishes in the ___.', o:['afternoon','midnight','dawn'], a:0, w:'بعد الظهر.', f:'<u>afternoon</u>'},
        {p:'I ___ my teeth after breakfast.', o:['brush','drive','cook'], a:0, w:'أُنظّف أسناني.', f:'<u>brush</u> my teeth'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['I','get','up','in','the','night','.'], bad:5, fix:'morning', w:'نستيقظ في الصباح.', f:'…in the <u>morning</u>.'},
        {words:['It’s','seven','clock','.'], bad:2, fix:'o’clock', w:'الصواب <code>o’clock</code>.', f:'It’s seven <u>o’clock</u>.'},
        {words:['I','go','to','bed','in','the','morning','.'], bad:6, fix:'night', w:'ننام ليلًا.', f:'…at <u>night</u>.'},
        {words:['I','have','breakfast','at','night','.'], bad:4, fix:'in the morning', w:'الفطور صباحًا.', f:'…<u>in the morning</u>.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'wake from sleep =', ask:'اختر', o:['get up','go to bed'], a:0, w:'يستيقظ.', f:'<u>get up</u>'},
        {p:'put on clothes =', ask:'اختر', o:['get dressed','get up'], a:0, w:'يرتدي.', f:'<u>get dressed</u>'},
        {p:'morning meal =', ask:'اختر', o:['breakfast','dinner'], a:0, w:'فطور.', f:'<u>breakfast</u>'},
        {p:'sleep at night =', ask:'اختر', o:['go to bed','get up'], a:0, w:'ينام.', f:'<u>go to bed</u>'},
        {p:'7:00 = seven ___.', ask:'أكمل', o:['o’clock','clock'], a:0, w:'الساعة.', f:'<u>o’clock</u>'},
        {p:'7:30 = ___ past seven.', ask:'أكمل', o:['half','ten'], a:0, w:'والنصف.', f:'<u>half</u>'},
        {p:'Breakfast is in the ___.', ask:'اختر', o:['morning','night'], a:0, w:'الصباح.', f:'<u>morning</u>'},
        {p:'do my ___ in the evening', ask:'أكمل', o:['homework','breakfast'], a:0, w:'الواجب.', f:'<u>homework</u>'},
        {p:'I get up ___ six.', ask:'الحرف', o:['at','in'], a:0, w:'الساعات.', f:'<u>at</u>'}
      ]}
    ]
  };
})();
