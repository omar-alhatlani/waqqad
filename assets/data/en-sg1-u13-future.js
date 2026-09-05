/* ============================================================
   Lesson: Present Progressive for Future Arrangements
   English · Super Goal 1 · Unit 13 (What Are You Going to Wear There?) · صفحة ١٢٤
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U13_FUTURE'] = {
    id:'EN_SG1_U13_FUTURE',
    title:'Present Progressive for the Future',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'am/is/are + V-ing (future arrangements)',
      intro:'نستعمل <b>المضارع المستمرّ</b> (<code>am/is/are + V-ing</code>) للتعبير عن <b>ترتيباتٍ مستقبليةٍ مؤكّدة</b>: <code>We are going to the park tomorrow</code>. صحيحٌ أيضًا استعمالُ <code>be going to</code>، لكنّ المتحدّثين يفضّلون المستمرَّ حين تكون الترتيباتُ <b>أكيدة</b>. كلماتُ المستقبل (<code>tomorrow, next week</code>) تدلّ على الزمن.',
      table:[['now','I am studying now.'],['future plan','We are traveling next week.'],['question','What are you doing tonight?'],['clue','tomorrow, tonight, next week']],
      trick:'المضارع المستمرّ يخدم زمنين: الآن، والمستقبل المؤكّد. تُميّزُ بينهما كلماتُ الزمن: <code>now</code> (الآن) أو <code>tomorrow/next week</code> (المستقبل).'
    },
    stages:[
      { type:'choice', name:'ترتيبٌ مستقبليّ', hint:'am/is/are + V-ing', qs:[
        {p:'We ___ to the park tomorrow.', o:['are going','go','went','are go'], a:0, w:'ترتيبٌ مؤكّد ← <code>are going</code>.', f:'We <u>are going</u> tomorrow.'},
        {p:'I ___ my friends tonight.', o:['am meeting','meet','met','am meet'], a:0, w:'<code>am meeting</code>.', f:'I <u>am meeting</u> tonight.'},
        {p:'She ___ shopping next week.', o:['is going','goes','went','go'], a:0, w:'<code>is going</code>.', f:'She <u>is going</u> next week.'},
        {p:'They ___ hiking on Friday.', o:['are going','go','goes','went'], a:0, w:'<code>are going</code>.', f:'They <u>are going</u> on Friday.'}
      ]},
      { type:'choice', name:'الآن أم المستقبل', hint:'now أم tomorrow؟', qs:[
        {p:'Look! He ___ TV now.', o:['is watching','watches','watched'], a:0, w:'الآن ← مستمرّ.', f:'He <u>is watching</u> now.'},
        {p:'What ___ you doing tonight?', o:['are','do','did','is'], a:0, w:'<code>you</code> ← <code>are</code>.', f:'What <u>are</u> you doing tonight?'},
        {p:'The word “tomorrow” shows the:', o:['future','past','present habit'], a:0, w:'المستقبل.', f:'the <u>future</u>'},
        {p:'“right now” shows the action is:', o:['happening now','a plan','finished'], a:0, w:'يحدث الآن.', f:'<u>happening now</u>'}
      ]},
      { type:'choice', name:'التكوين', hint:'be + V-ing', qs:[
        {p:'They ___ traveling next week.', o:['are','is','am','do'], a:0, w:'<code>They</code> ← <code>are</code>.', f:'They <u>are</u> traveling.'},
        {p:'I am ___ my grandparents on Friday.', o:['visiting','visit','visits','visited'], a:0, w:'<code>-ing</code>.', f:'am <u>visiting</u>'},
        {p:'He is ___ to Riyadh tomorrow.', o:['flying','fly','flies','flew'], a:0, w:'<code>flying</code>.', f:'is <u>flying</u>'},
        {p:'We are ___ a party next week.', o:['having','have','has','had'], a:0, w:'<code>having</code>.', f:'are <u>having</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['We','go','to','the','park','tomorrow','.'], bad:1, fix:'are going', w:'ترتيبٌ مستقبليّ ← <code>are going</code>.', f:'We <u>are going</u> tomorrow.'},
        {words:['I','am','meet','my','friends','tonight','.'], bad:2, fix:'meeting', w:'<code>-ing</code> ← <code>meeting</code>.', f:'I am <u>meeting</u> tonight.'},
        {words:['She','is','go','shopping','next','week','.'], bad:2, fix:'going', w:'<code>going</code>.', f:'She is <u>going</u>…'},
        {words:['What','you','are','doing','tonight','?'], bad:1, fix:'ترتيب: are you', w:'<code>are you doing</code>.', f:'What <u>are you</u> doing tonight?'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['We','are','going','to','the','park','tomorrow','.'], w:'مستمرٌّ لترتيبٍ مستقبليّ.', f:'We are going to the park tomorrow.'},
        {sol:['I','am','meeting','my','friends','tonight','.'], w:'<code>am + V-ing</code>.', f:'I am meeting my friends tonight.'},
        {sol:['What','are','you','doing','next','week','?'], w:'ترتيب السؤال.', f:'What are you doing next week?'},
        {sol:['She','is','flying','to','Riyadh','tomorrow','.'], w:'<code>is + V-ing</code>.', f:'She is flying to Riyadh tomorrow.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'We ___ to the park tomorrow.', ask:'اختر', o:['are going','go'], a:0, w:'مستقبل مؤكّد.', f:'<u>are going</u>'},
        {p:'I ___ my friends tonight.', ask:'اختر', o:['am meeting','meet'], a:0, w:'ترتيب.', f:'<u>am meeting</u>'},
        {p:'Look! He ___ TV now.', ask:'اختر', o:['is watching','watches'], a:0, w:'الآن.', f:'<u>is watching</u>'},
        {p:'“tomorrow” shows the ___.', ask:'اختر', o:['future','past'], a:0, w:'المستقبل.', f:'<u>future</u>'},
        {p:'They ___ traveling next week.', ask:'be', o:['are','is'], a:0, w:'<code>They</code>.', f:'<u>are</u>'},
        {p:'I am ___ my grandparents Friday.', ask:'اختر', o:['visiting','visit'], a:0, w:'<code>-ing</code>.', f:'<u>visiting</u>'},
        {sol:['I','am','meeting','my','friends','tonight','.'], w:'<code>am + V-ing</code>.', f:'I am meeting my friends tonight.'},
        {p:'What ___ you doing tonight?', ask:'اختر', o:['are','do'], a:0, w:'<code>are</code>.', f:'<u>are</u>'},
        {p:'She is ___ to Riyadh tomorrow.', ask:'اختر', o:['flying','fly'], a:0, w:'<code>-ing</code>.', f:'<u>flying</u>'}
      ]}
    ]
  };
})();
