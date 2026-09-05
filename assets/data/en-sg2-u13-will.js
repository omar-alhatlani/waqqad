/* ============================================================
   Lesson: Future with Will + Predictions
   English · Super Goal 2 · Unit 13 (What's the Weather Like?) · صفحة ١١٨
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U13_WILL'] = {
    id:'EN_SG2_U13_WILL',
    title:'Future with Will',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:"will + verb · won't · Will…?",
      intro:'نستعمل <code>will</code> للتنبّؤ والقرارات المستقبلية: <code>It will rain tomorrow</code>. التكوين: <code>will + الفعل المجرّد</code> لكلّ الفاعلين. النفي <code>won’t (will not)</code>، والسؤال بتقديم <code>Will</code>: <code>Will it be cold?</code> والإجابة <code>Yes, it will / No, it won’t</code>.',
      table:[['+','It will be sunny.'],['–',"It won't rain."],['?','Will it be cold?'],['answer',"Yes, it will. / No, it won't."]],
      trick:'بعد <code>will</code> يأتي الفعل مجرّدًا لكلّ الفاعلين (لا <code>-s</code>): <code>She will go</code>. ونستعمله كثيرًا مع التنبّؤ بالطقس وكلماتِ <code>probably, maybe, I think</code>.'
    },
    stages:[
      { type:'choice', name:'التكوين', hint:'will + مجرّد', qs:[
        {p:'It ___ rain tomorrow.', o:['will','wills','is','are'], a:0, w:'<code>will</code> لكلّ الفاعلين.', f:'It <u>will</u> rain.'},
        {p:'She will ___ to Riyadh next week.', o:['travel','travels','traveling','traveled'], a:0, w:'مجرّد بعد <code>will</code>.', f:'will <u>travel</u>'},
        {p:'They ___ be happy if their team wins.', o:['will','wills','are','is'], a:0, w:'<code>will</code>.', f:'They <u>will</u> be happy.'},
        {p:'I think it ___ be sunny.', o:['will','shall be','is','are'], a:0, w:'تنبّؤ ← <code>will</code>.', f:'it <u>will</u> be sunny'}
      ]},
      { type:'choice', name:'النفي والسؤال', hint:"won't / Will…?", qs:[
        {p:'It ___ rain today. (نفي)', o:["won't",'willn’t',"doesn't",'not will'], a:0, w:'<code>won’t = will not</code>.', f:"It <u>won't</u> rain."},
        {p:'___ it be cold tomorrow?', o:['Will','Does','Is','Are'], a:0, w:'تقديم <code>Will</code>.', f:'<u>Will</u> it be cold?'},
        {p:'Will they play? — Yes, they ___.', o:['will','are','do','shall'], a:0, w:'الإجابة ← <code>will</code>.', f:'Yes, they <u>will</u>.'},
        {p:'Will it snow? — No, it ___.', o:["won't",'will','doesn’t','isn’t'], a:0, w:'الإجابة السلبية ← <code>won’t</code>.', f:"No, it <u>won't</u>."}
      ]},
      { type:'choice', name:'التنبّؤ', hint:'predictions', qs:[
        {p:'“will” is often used to make:', o:['predictions','past stories','commands'], a:0, w:'تنبّؤات.', f:'<u>predictions</u>'},
        {p:'Maybe it ___ be windy later.', o:['will','was','is being','does'], a:0, w:'<code>will</code>.', f:'<u>will</u> be windy'},
        {p:'The fans ___ be happy if their team loses.', o:["won't",'will','are',"don't"], a:0, w:'الخسارة ← <code>won’t</code>.', f:"<u>won't</u> be happy"},
        {p:'She probably ___ come to the party.', o:['will','wills','is','does'], a:0, w:'<code>will</code>.', f:'probably <u>will</u> come'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['She','will','goes','tomorrow','.'], bad:2, fix:'go', w:'مجرّد بعد <code>will</code>.', f:'She will <u>go</u> tomorrow.'},
        {words:['It','wills','rain','.'], bad:1, fix:'will', w:'<code>will</code> لا تأخذ <code>-s</code>.', f:'It <u>will</u> rain.'},
        {words:['Does','it','will','be','cold','?'], bad:0, fix:'تُحذف Does', w:'السؤال بتقديم <code>Will</code> فقط.', f:'<u>Will</u> it be cold?'},
        {words:['It','will','not','to','rain','.'], bad:3, fix:'تُحذف to', w:'لا <code>to</code> بعد <code>will</code>.', f:'It will not <u>rain</u>.'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['It','will','be','sunny','tomorrow','.'], w:'<code>will + مجرّد</code>.', f:'It will be sunny tomorrow.'},
        {sol:['Will','it','rain','tomorrow','?'], w:'تقديم <code>Will</code>.', f:'Will it rain tomorrow?'},
        {sol:['It','won’t','be','cold','.'], w:'النفي ← <code>won’t</code>.', f:"It won't be cold."},
        {sol:['They','will','be','happy','.'], w:'<code>will + مجرّد</code>.', f:'They will be happy.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'It ___ rain tomorrow.', ask:'اختر', o:['will','wills'], a:0, w:'<code>will</code>.', f:'<u>will</u>'},
        {p:'She will ___ to Riyadh.', ask:'الفعل', o:['travel','travels'], a:0, w:'مجرّد.', f:'<u>travel</u>'},
        {p:'It ___ rain today. (نفي)', ask:'اختر', o:["won't",'willn’t'], a:0, w:'<code>won’t</code>.', f:"<u>won't</u>"},
        {p:'___ it be cold?', ask:'اختر', o:['Will','Does'], a:0, w:'تقديم <code>Will</code>.', f:'<u>Will</u>'},
        {p:'Yes, they ___.', ask:'اختر', o:['will','are'], a:0, w:'إجابة.', f:'<u>will</u>'},
        {p:'“will” makes ___.', ask:'اختر', o:['predictions','commands'], a:0, w:'تنبّؤات.', f:'<u>predictions</u>'},
        {sol:['Will','it','rain','tomorrow','?'], w:'تقديم <code>Will</code>.', f:'Will it rain tomorrow?'},
        {p:'Maybe it ___ be windy.', ask:'اختر', o:['will','was'], a:0, w:'<code>will</code>.', f:'<u>will</u>'},
        {p:'No, it ___. (Will it snow?)', ask:'اختر', o:["won't",'will'], a:0, w:'إجابة سلبية.', f:"<u>won't</u>"}
      ]}
    ]
  };
})();
