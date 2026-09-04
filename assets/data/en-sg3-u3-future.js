/* ============================================================
   Lesson: Present Progressive & Future (going to / will)
   English · Super Goal 3 · Unit 3 (When Are You Traveling?) · صفحة ٢٤
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U3_FUTURE'] = {
    id:'EN_SG3_U3_FUTURE',
    title:'Present Progressive & Future',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'Present Progressive, going to & will',
      intro:'نستعمل <b>المضارع المستمرّ</b> (<code>am/is/are + V-ing</code>) لفعلٍ يحدث الآن أو لترتيبٍ مؤكّدٍ في المستقبل: <code>I’m flying to Japan tomorrow</code>. ونستعمل <code>be going to</code> للخُطط: <code>I’m going to travel to Europe</code>. ونستعمل <code>will</code> (مع <code>maybe/probably</code>) لأمرٍ غير مؤكّد: <code>Maybe I’ll stay with friends</code>.',
      table:[['now / arrangement','I am flying tomorrow.'],['plan','I’m going to travel.'],['uncertain','Maybe I’ll stay home.'],['future words','tonight, tomorrow, next week']],
      trick:'<code>going to</code> لخطّةٍ مقرّرة، و<code>will</code> لقرارٍ أو توقّعٍ غير مؤكّد (غالبًا مع <code>maybe/probably</code>). والمضارع المستمرّ يصلح للترتيبات المستقبلية المؤكّدة.'
    },
    stages:[
      { type:'choice', name:'المضارع المستمرّ', hint:'am/is/are + V-ing', qs:[
        {p:'My friends ___ for me at the airport now.', o:['are waiting','waits','wait','waited'], a:0, w:'حدثٌ الآن ← <code>are waiting</code>.', f:'…<u>are waiting</u>…'},
        {p:'What ___ you doing tonight?', o:['are','do','will','is'], a:0, w:'<code>you + are</code>.', f:'What <u>are</u> you doing tonight?'},
        {p:'I ___ to Japan tomorrow morning. (arrangement)', o:['am flying','fly','flew','will flying'], a:0, w:'ترتيبٌ مؤكّد ← مستمرّ.', f:'I <u>am flying</u> tomorrow.'},
        {p:'She ___ her friends this evening.', o:['is meeting','meet','meets','met'], a:0, w:'<code>is + meeting</code>.', f:'She <u>is meeting</u> …'}
      ]},
      { type:'choice', name:'going to (خطّة)', hint:'be going to + الفعل المجرّد', qs:[
        {p:'What are you ___ do on vacation?', o:['going to','go to','will','gonna to'], a:0, w:'<code>going to + الفعل</code>.', f:'…<u>going to</u> do…'},
        {p:'I’m going to ___ to Europe.', o:['travel','traveling','traveled','travels'], a:0, w:'بعد <code>going to</code> ← المجرّد.', f:'…going to <u>travel</u>.'},
        {p:'He’s going ___ visit relatives in KSA.', o:['to','for','at','with'], a:0, w:'<code>going to</code>.', f:'going <u>to</u> visit'},
        {p:'I’m not going to ___ this year.', o:['travel','travels','traveling','traveled'], a:0, w:'المجرّد.', f:'not going to <u>travel</u>'}
      ]},
      { type:'choice', name:'will (غير مؤكّد)', hint:'maybe / probably + will', qs:[
        {p:'Where will you stay? — Maybe I ___ with friends.', o:['will stay','stay','am staying','stayed'], a:0, w:'غير مؤكّد ← <code>will</code>.', f:'Maybe I <u>will stay</u>…'},
        {p:'I probably ___ stay in a hotel.', o:['won’t','don’t','am not','didn’t'], a:0, w:'نفيُ <code>will</code> ← <code>won’t</code>.', f:'I probably <u>won’t</u> stay…'},
        {p:'Don’t worry. I ___ be all right.', o:['will','am','do','going'], a:0, w:'توقّع ← <code>will</code>.', f:'I <u>will</u> be all right.'},
        {p:'We ___ miss you.', o:['will','are','do','going to'], a:0, w:'<code>will</code>.', f:'We <u>will</u> miss you.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['I','am','going','to','traveling','.'], bad:4, fix:'travel', w:'بعد <code>going to</code> ← الفعل مجرّد.', f:'I am going to <u>travel</u>.'},
        {words:['Maybe','I','stay','with','friends','.'], bad:2, fix:'will stay', w:'غير مؤكّد ← <code>will</code>.', f:'Maybe I <u>will stay</u>…'},
        {words:['What','you','are','doing','tonight','?'], bad:1, fix:'ترتيب: are you', w:'الترتيب <code>are you doing</code>.', f:'What <u>are you</u> doing tonight?'},
        {words:['My','friends','is','arriving','tomorrow','.'], bad:2, fix:'are', w:'<code>friends</code> جمع ← <code>are</code>.', f:'My friends <u>are</u> arriving…'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['I','am','flying','to','Japan','tomorrow','.'], w:'مستمرٌّ لترتيبٍ مستقبليّ.', f:'I am flying to Japan tomorrow.'},
        {sol:['What','are','you','going','to','do','?'], w:'<code>going to + الفعل</code>.', f:'What are you going to do?'},
        {sol:['Maybe','I','will','stay','with','friends','.'], w:'<code>will</code> لغير المؤكّد.', f:'Maybe I will stay with friends.'},
        {sol:['We','will','miss','you','.'], w:'<code>will + الفعل المجرّد</code>.', f:'We will miss you.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'My friends ___ for me now.', ask:'المستمرّ', o:['are waiting','wait'], a:0, w:'الآن ← مستمرّ.', f:'<u>are waiting</u>'},
        {p:'I’m going to ___ to Europe.', ask:'الفعل', o:['travel','traveling'], a:0, w:'المجرّد.', f:'<u>travel</u>'},
        {p:'Maybe I ___ stay home.', ask:'اختر', o:['will','am'], a:0, w:'غير مؤكّد.', f:'<u>will</u>'},
        {p:'I ___ to Japan tomorrow.', ask:'الترتيب المستقبليّ', o:['am flying','fly'], a:0, w:'ترتيب مؤكّد.', f:'<u>am flying</u>'},
        {p:'What ___ you going to do?', ask:'اختر', o:['are','do'], a:0, w:'<code>are</code>.', f:'<u>are</u>'},
        {p:'I probably ___ stay in a hotel.', ask:'النفي', o:['won’t','don’t'], a:0, w:'<code>won’t</code>.', f:'<u>won’t</u>'},
        {sol:['What','are','you','doing','tonight','?'], w:'ترتيب سؤال المستمرّ.', f:'What are you doing tonight?'},
        {p:'He’s going ___ visit relatives.', ask:'أكمل', o:['to','for'], a:0, w:'<code>going to</code>.', f:'<u>to</u>'},
        {p:'Don’t worry. I ___ be all right.', ask:'اختر', o:['will','am'], a:0, w:'توقّع.', f:'<u>will</u>'}
      ]}
    ]
  };
})();
