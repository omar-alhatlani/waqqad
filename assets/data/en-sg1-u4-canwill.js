/* ============================================================
   Lesson: Grammar — Requests & Offers (Can / Will)
   English · Super Goal 1 · Unit 4 (Around the World) · صفحة ٣٣
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1).
   lang:'en' → المحتوى إنجليزيّ LTR، والشرح بالعربية.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U4_CANWILL'] = {
    id:'EN_SG1_U4_CANWILL',
    title:'Grammar — الطلبات والعروض (Can / Will)',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'Requests & Offers',
      intro:"نستعمل <code>Can</code> و<code>Will</code> للطلب المؤدَّب: <code>Can you...? / Will you...?</code>، وللعرض: <code>I can... / I will...</code>. ونتأدّب بـ please و thank you.",
      table:[['طلب','Can/Will you help me?'],['موافقة','Sure. · Of course. · OK.'],['اعتذار',"Sorry, I can't."],['عرض','I can help you.']],
      examples:['Can you open the window, please? → Sure.','Will you help me? → Of course.','I can help you. → Thank you.','Can you repeat that, please?'],
      trick:"الطلب: <code>Can/Will you...?</code> + <code>please</code>. العرض: <code>I can.../I will...</code>. والردّ: Sure · Of course · Sorry, I can't."
    },
    stages:[
      { type:'choice', name:'طلبٌ أم عرض؟', hint:'Request أم Offer؟', qs:[
        {p:'Can you help me?',        ask:'Request أم Offer؟', o:['Request','Offer'], a:0, w:'<code>Can you...?</code> = طلب.', f:'Request'},
        {p:'I can help you.',          ask:'Request أم Offer؟', o:['Offer','Request'], a:0, w:'<code>I can...</code> = عرض.', f:'Offer'},
        {p:'Will you open the window?', ask:'Request أم Offer؟', o:['Request','Offer'], a:0, w:'<code>Will you...?</code> = طلب.', f:'Request'},
        {p:'I will be your partner.',   ask:'Request أم Offer؟', o:['Offer','Request'], a:0, w:'<code>I will...</code> = عرض.', f:'Offer'},
        {p:'Can you give me a pencil?', ask:'Request أم Offer؟', o:['Request','Offer'], a:0, w:'<code>Can you...?</code> = طلب.', f:'Request'},
        {p:'I can give you a pencil.',  ask:'Request أم Offer؟', o:['Offer','Request'], a:0, w:'<code>I can...</code> = عرض.', f:'Offer'}
      ]},
      { type:'choice', name:'الردّ المناسب', hint:'اختر الردّ الصحيح', qs:[
        {p:'Can you help me?',                 ask:'اختر الردّ', o:['Sure.',"You're welcome.",'Nice to meet you.'], a:0, w:'موافقة ← <code>Sure.</code>', f:'Sure.'},
        {p:'Will you be my partner?',           ask:'اختر الردّ', o:['Of course.','I am from Egypt.','Good night.'], a:0, w:'موافقة ← <code>Of course.</code>', f:'Of course.'},
        {p:'Thank you.',                        ask:'اختر الردّ', o:["You're welcome.",'Sorry.','Yes, I am.'], a:0, w:'ردّ الشكر ← <code>You\'re welcome.</code>', f:"You're welcome."},
        {p:"Can you open the window?  (I'm busy)", ask:'اختر الردّ', o:["Sorry, I can't.",'Thank you.','Of course.'], a:0, w:'اعتذار ← <code>Sorry, I can\'t.</code>', f:"Sorry, I can't."},
        {p:'I can help you.',                   ask:'اختر الردّ', o:['Thank you.',"Sorry, I can't.",'Where are you from?'], a:0, w:'قبول ← <code>Thank you.</code>', f:'Thank you.'},
        {p:'Can you repeat that, please?',       ask:'اختر الردّ', o:['No problem.','Goodbye.','I am fine.'], a:0, w:'موافقة ← <code>No problem.</code>', f:'No problem.'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة الناقصة', qs:[
        {p:'___ you open the window, please?', ask:'أكمل (طلب)', o:['Can','Am','Is'], a:0, w:'الطلب ← <code>Can you...?</code>', f:'<u>Can</u> you open the window?'},
        {p:'I ___ help you.',                   ask:'أكمل (عرض)', o:['can','are','is'], a:0, w:'العرض ← <code>I can...</code>', f:'I <u>can</u> help you.'},
        {p:'Will you ___ my partner?',           ask:'أكمل', o:['be','are','is'], a:0, w:'بعد <code>Will you</code> يأتي المصدر <code>be</code>.', f:'Will you <u>be</u> my partner?'},
        {p:'Can you ___ that, please?',          ask:'أكمل (كرّر)', o:['repeat','open','give'], a:0, w:'<code>repeat</code> = كرّر.', f:'Can you <u>repeat</u> that?'},
        {p:'Be polite: say ___ and thank you.',  ask:'أكمل', o:['please','sorry','no'], a:0, w:'التأدّب ← <code>please</code>.', f:'say <u>please</u> and thank you.'},
        {p:"Thank you.  — You're ___.",          ask:'أكمل', o:['welcome','sorry','busy'], a:0, w:"<code>You're welcome</code> = عفوًا.", f:"You're <u>welcome</u>."}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['Can','you','help','me','?'],          w:'طلب.', f:'Can you help me?'},
        {sol:['Will','you','be','my','partner','?'],  w:'طلب.', f:'Will you be my partner?'},
        {sol:['I','can','help','you','.'],            w:'عرض.', f:'I can help you.'},
        {sol:['Can','you','open','the','window','?'], w:'طلب.', f:'Can you open the window?'},
        {sol:['I','will','open','the','window','.'],  w:'عرض.', f:'I will open the window.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'I can help you.', ask:'Request أم Offer؟', o:['Offer','Request'], a:0, w:'<code>I can...</code> = عرض.', f:'Offer'},
        {p:'Can you help me?', ask:'اختر الردّ', o:['Sure.',"You're welcome."], a:0, w:'موافقة ← <code>Sure.</code>', f:'Sure.'},
        {p:'___ you open the window, please?', ask:'أكمل (طلب)', o:['Can','Am','Is'], a:0, w:'الطلب ← <code>Can you...?</code>', f:'<u>Can</u> you open the window?'},
        {p:'Will you open the window?', ask:'Request أم Offer؟', o:['Request','Offer'], a:0, w:'<code>Will you...?</code> = طلب.', f:'Request'},
        {p:'Thank you.', ask:'اختر الردّ', o:["You're welcome.",'Sorry.'], a:0, w:'ردّ الشكر.', f:"You're welcome."},
        {sol:['Can','you','help','me','?'], w:'طلب.', f:'Can you help me?'},
        {p:'Will you ___ my partner?', ask:'أكمل', o:['be','are','is'], a:0, w:'المصدر <code>be</code>.', f:'Will you <u>be</u> my partner?'},
        {p:"Can you open the window?  (I'm busy)", ask:'اختر الردّ', o:["Sorry, I can't.",'Thank you.'], a:0, w:'اعتذار.', f:"Sorry, I can't."},
        {sol:['I','can','help','you','.'], w:'عرض.', f:'I can help you.'}
      ]}
    ]
  };
})();
