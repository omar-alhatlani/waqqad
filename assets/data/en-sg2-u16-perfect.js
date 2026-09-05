/* ============================================================
   Lesson: Present Perfect (ever / never)
   English · Super Goal 2 · Unit 16 (Have You Ever…?) · صفحة ١٤٤
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U16_PERFECT'] = {
    id:'EN_SG2_U16_PERFECT',
    title:'Present Perfect',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'have/has + past participle · ever/never',
      intro:'نستعمل <b>المضارع التامّ</b> للحديث عن تجربةٍ في زمنٍ غير محدّد في الماضي، أو من الماضي حتى الآن. التكوين: <code>have/has + التصريف الثالث</code>. نسأل بـ <code>Have you ever…?</code> (<code>ever</code> = في أيّ وقت)، وننفي بـ <code>never</code> أو <code>haven’t/hasn’t</code>.',
      table:[['+','I have visited Al-Ula.'],['he/she','She has ridden a camel.'],['?','Have you ever eaten sushi?'],['–','I have never been to Paris.']],
      trick:'<code>ever</code> تُستعمل في السؤال (<code>Have you ever…?</code>)، و<code>never</code> في النفي. التصريفُ الثالث: منتظمٌ <code>-ed</code>، وشاذٌّ يُحفَظ (<code>go → gone</code>, <code>eat → eaten</code>).'
    },
    stages:[
      { type:'choice', name:'have / has', hint:'حسب الفاعل', qs:[
        {p:'I ___ visited Al-Ula.', o:['have','has','am','did'], a:0, w:'<code>I</code> ← <code>have</code>.', f:'I <u>have</u> visited…'},
        {p:'She ___ ridden a camel.', o:['has','have','is','did'], a:0, w:'<code>She</code> ← <code>has</code>.', f:'She <u>has</u> ridden…'},
        {p:'They ___ never been to France.', o:['have','has','are','did'], a:0, w:'<code>They</code> ← <code>have</code>.', f:'They <u>have</u> never…'},
        {p:'He ___ eaten sushi before.', o:['has','have','is','did'], a:0, w:'<code>He</code> ← <code>has</code>.', f:'He <u>has</u> eaten…'}
      ]},
      { type:'choice', name:'التصريف الثالث', hint:'past participle', qs:[
        {p:'I have ___ to Riyadh. (be)', o:['been','was','were','being'], a:0, w:'التصريف الثالث ← <code>been</code>.', f:'have <u>been</u>'},
        {p:'She has ___ a camel. (ride)', o:['ridden','rode','ride','riding'], a:0, w:'شاذّ ← <code>ridden</code>.', f:'has <u>ridden</u>'},
        {p:'We have ___ this film. (see)', o:['seen','saw','see','seeing'], a:0, w:'شاذّ ← <code>seen</code>.', f:'have <u>seen</u>'},
        {p:'He has ___ his homework. (finish)', o:['finished','finish','finishing','finishes'], a:0, w:'منتظم ← <code>finished</code>.', f:'has <u>finished</u>'}
      ]},
      { type:'choice', name:'ever / never', hint:'السؤال والنفي', qs:[
        {p:'Have you ___ ridden a camel?', o:['ever','never','always','yet'], a:0, w:'السؤال ← <code>ever</code>.', f:'Have you <u>ever</u>…?'},
        {p:'I have ___ been to Paris. (لم يحدث أبدًا)', o:['never','ever','always','once'], a:0, w:'النفي ← <code>never</code>.', f:'I have <u>never</u> been…'},
        {p:'Have you ever eaten sushi? — Yes, I ___.', o:['have','did','am','was'], a:0, w:'الإجابة ← <code>have</code>.', f:'Yes, I <u>have</u>.'},
        {p:'“ever” means:', o:['at any time','never','yesterday'], a:0, w:'في أيّ وقت.', f:'<u>at any time</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['She','have','ridden','a','camel','.'], bad:1, fix:'has', w:'<code>She</code> ← <code>has</code>.', f:'She <u>has</u> ridden…'},
        {words:['I','have','went','to','Riyadh','.'], bad:2, fix:'been/gone', w:'التصريف الثالث ← <code>been/gone</code>.', f:'I have <u>been</u> to Riyadh.'},
        {words:['Have','you','never','eaten','sushi','?'], bad:2, fix:'ever', w:'السؤال ← <code>ever</code>.', f:'Have you <u>ever</u> eaten sushi?'},
        {words:['He','has','eat','lunch','.'], bad:2, fix:'eaten', w:'التصريف الثالث ← <code>eaten</code>.', f:'He has <u>eaten</u> lunch.'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['I','have','visited','Al-Ula','.'], w:'<code>have + p.p.</code>.', f:'I have visited Al-Ula.'},
        {sol:['Have','you','ever','ridden','a','camel','?'], w:'<code>Have you ever + p.p.?</code>.', f:'Have you ever ridden a camel?'},
        {sol:['She','has','never','been','to','Paris','.'], w:'<code>never</code> للنفي.', f:'She has never been to Paris.'},
        {sol:['They','have','seen','this','film','.'], w:'<code>have + seen</code>.', f:'They have seen this film.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'I ___ visited Al-Ula.', ask:'اختر', o:['have','has'], a:0, w:'<code>I</code>.', f:'<u>have</u>'},
        {p:'She ___ ridden a camel.', ask:'اختر', o:['has','have'], a:0, w:'<code>She</code>.', f:'<u>has</u>'},
        {p:'I have ___ to Riyadh. (be)', ask:'اختر', o:['been','was'], a:0, w:'التصريف الثالث.', f:'<u>been</u>'},
        {p:'She has ___ a camel. (ride)', ask:'اختر', o:['ridden','rode'], a:0, w:'شاذّ.', f:'<u>ridden</u>'},
        {p:'Have you ___ ridden a camel?', ask:'اختر', o:['ever','never'], a:0, w:'السؤال.', f:'<u>ever</u>'},
        {p:'I have ___ been to Paris.', ask:'اختر', o:['never','ever'], a:0, w:'النفي.', f:'<u>never</u>'},
        {sol:['Have','you','ever','eaten','sushi','?'], w:'<code>Have you ever…?</code>.', f:'Have you ever eaten sushi?'},
        {p:'Yes, I ___. (Have you…?)', ask:'اختر', o:['have','did'], a:0, w:'إجابة.', f:'<u>have</u>'},
        {p:'“ever” =', ask:'المعنى', o:['at any time','never'], a:0, w:'في أيّ وقت.', f:'<u>at any time</u>'}
      ]}
    ]
  };
})();
