/* ============================================================
   Lesson: Conditional (Imaginary Situations) + I’d rather
   English · Super Goal 3 · Unit 11 (Making Choices) · صفحة ١٢٢
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U11_IMAGINE'] = {
    id:'EN_SG3_U11_IMAGINE',
    title:'Second Conditional & I’d rather',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'if + past … would · I’d rather',
      intro:'للحديث عن مواقفَ <b>خياليةٍ أو افتراضية</b> في الحاضر نستعمل: <code>if + الماضي البسيط … would + الفعل المجرّد</code> (<code>If I was/were rich, I wouldn’t have to work</code>). ونستعمل <code>I’d rather (= I would rather) + الفعل المجرّد</code> للتفضيل: <code>I’d rather drive along the scenic route</code>.',
      table:[['imaginary','If I were rich, I would travel.'],['result','…they would be affected.'],["I’d rather","I’d rather stay home."],['than','I’d rather walk than drive.']],
      trick:'الشرطُ الخياليّ: <code>if + ماضٍ … would</code>. ومع <code>be</code> نستعمل <code>were</code> لكلّ الفاعلين في الخيال (<code>If I were you…</code>). و<code>I’d rather</code> يتبعها الفعل مجرّدًا.'
    },
    stages:[
      { type:'choice', name:'الشرط الخياليّ', hint:'if + past … would', qs:[
        {p:'If they ___ a highway, the farmers would be affected.', o:['built','build','will build','would build'], a:0, w:'بعد <code>if</code> ← ماضٍ.', f:'If they <u>built</u>…'},
        {p:'If I were rich, I ___ have to work.', o:["wouldn’t","don’t",'am not','will not'], a:0, w:'النتيجة ← <code>would</code>.', f:"I <u>wouldn’t</u> have to work"},
        {p:'If I ___ you, I would study harder.', o:['were','am','will be','would be'], a:0, w:'الخيال ← <code>were</code>.', f:'If I <u>were</u> you…'},
        {p:'…she would travel if she ___ time.', o:['had','has','will have','would have'], a:0, w:'بعد <code>if</code> ← ماضٍ.', f:'if she <u>had</u> time'}
      ]},
      { type:'choice', name:'would في النتيجة', hint:'would + مجرّد', qs:[
        {p:'If I won, I ___ buy a car.', o:['would','will','am','did'], a:0, w:'النتيجة ← <code>would</code>.', f:'I <u>would</u> buy a car'},
        {p:'She would ___ if she could.', o:['come','comes','came','coming'], a:0, w:'مجرّد بعد <code>would</code>.', f:'would <u>come</u>'},
        {p:'What ___ you do if you had a million?', o:['would','will','are','did'], a:0, w:'<code>would</code>.', f:'What <u>would</u> you do…?'},
        {p:'The second conditional talks about:', o:['imaginary situations','real facts','the past'], a:0, w:'مواقفُ خيالية.', f:'<u>imaginary situations</u>'}
      ]},
      { type:'choice', name:"I’d rather", hint:'التفضيل', qs:[
        {p:'I’d rather ___ along the scenic route.', o:['drive','driving','to drive','drove'], a:0, w:'مجرّد بعد <code>I’d rather</code>.', f:"I’d rather <u>drive</u>…"},
        {p:'I’d rather live in the country ___ in the city.', o:['than','then','that','to'], a:0, w:'المقارنة ← <code>than</code>.', f:'…<u>than</u> in the city'},
        {p:'“I’d rather” means:', o:['I prefer','I must','I forgot'], a:0, w:'أفضّل.', f:'<u>I prefer</u>'},
        {p:'“I’d” is short for:', o:['I would','I had','I did'], a:0, w:'<code>I would</code>.', f:'<u>I would</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['If','I','will','be','rich',',','I','would','travel','.'], bad:2, fix:'were (بلا will)', w:'بعد <code>if</code> في الخيال ← ماضٍ.', f:'If I <u>were</u> rich…'},
        {words:['If','they','built','it',',','the','farmers','will','be','affected','.'], bad:7, fix:'would', w:'النتيجة الخيالية ← <code>would</code>.', f:'…the farmers <u>would</u> be affected.'},
        {words:['I’d','rather','to','walk','.'], bad:2, fix:'تُحذف to', w:'بعد <code>I’d rather</code> ← مجرّد.', f:"I’d rather <u>walk</u>."},
        {words:['I’d','rather','stay','then','go','.'], bad:3, fix:'than', w:'المقارنة ← <code>than</code>.', f:"I’d rather stay <u>than</u> go."}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['If','I','were','rich',',','I','would','travel','.'], w:'<code>if + were … would</code>.', f:'If I were rich, I would travel.'},
        {sol:['I’d','rather','walk','than','drive','.'], w:'<code>I’d rather … than</code>.', f:"I’d rather walk than drive."},
        {sol:['What','would','you','do','if','you','won','?'], w:'<code>would … if + past</code>.', f:'What would you do if you won?'},
        {sol:['I’d','rather','stay','home','.'], w:'<code>I’d rather + مجرّد</code>.', f:"I’d rather stay home."}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'If they ___ a road… (imaginary)', ask:'اختر', o:['built','will build'], a:0, w:'بعد <code>if</code> ← ماضٍ.', f:'<u>built</u>'},
        {p:'If I were rich, I ___ travel.', ask:'اختر', o:['would','will'], a:0, w:'النتيجة.', f:'<u>would</u>'},
        {p:'If I ___ you… (خيال)', ask:'اختر', o:['were','am'], a:0, w:'<code>were</code>.', f:'<u>were</u>'},
        {p:'She would ___ if she could.', ask:'الفعل', o:['come','comes'], a:0, w:'مجرّد.', f:'<u>come</u>'},
        {p:'I’d rather ___ the scenic route.', ask:'الفعل', o:['drive','to drive'], a:0, w:'مجرّد.', f:'<u>drive</u>'},
        {p:'I’d rather stay ___ go.', ask:'اختر', o:['than','then'], a:0, w:'المقارنة.', f:'<u>than</u>'},
        {sol:['If','I','were','rich',',','I','would','travel','.'], w:'الشرطُ الخياليّ.', f:'If I were rich, I would travel.'},
        {p:'“I’d rather” =', ask:'المعنى', o:['I prefer','I must'], a:0, w:'أفضّل.', f:'<u>I prefer</u>'},
        {p:'2nd conditional =', ask:'اختر', o:['imaginary','real fact'], a:0, w:'خياليّ.', f:'<u>imaginary</u>'}
      ]}
    ]
  };
})();
