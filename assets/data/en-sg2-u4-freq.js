/* ============================================================
   Lesson: How Often & Adverbs of Frequency
   English · Super Goal 2 · Unit 4 (Favorite Pastimes) · صفحة ٢٨
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U4_FREQ'] = {
    id:'EN_SG2_U4_FREQ',
    title:'How Often & Frequency',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'How often…? · always/usually/often/sometimes/never',
      intro:'نسأل عن تكرار الفعل بـ <code>How often…?</code>، ونجيب بعباراتِ التكرار: <code>every day / once a week / twice a week / three times a week</code>. و<b>ظروف التكرار</b> (always, usually, often, sometimes, seldom, never) تأتي <b>بعد الفعل be</b> و<b>قبل الأفعال الأخرى</b>: <code>She usually goes shopping.</code> / <code>He is always late.</code>',
      table:[['How often…?','سؤالٌ عن التكرار'],['every day / once a week','عباراتُ تكرار'],['always → never','ترتيبُ التكرار (١٠٠٪ ← ٠٪)'],['الموقع','بعد be · قبل الأفعال الأخرى']],
      trick:'ظرفُ التكرار يأتي <b>قبل</b> الفعل العاديّ (<code>I always play</code>) و<b>بعد</b> الفعل be (<code>I am always busy</code>). و<code>once = مرة</code>، <code>twice = مرّتين</code>.'
    },
    stages:[
      { type:'choice', name:'معنى التكرار', hint:'من الأكثر إلى الأقلّ', qs:[
        {p:'always', ask:'المعنى', o:['دائمًا','أحيانًا','أبدًا'], a:0, w:'<code>always</code> = دائمًا (١٠٠٪).', f:'always = دائمًا.'},
        {p:'never', ask:'المعنى', o:['أبدًا','دائمًا','عادةً'], a:0, w:'<code>never</code> = أبدًا (٠٪).', f:'never = أبدًا.'},
        {p:'usually', ask:'المعنى', o:['عادةً','نادرًا','أبدًا'], a:0, w:'<code>usually</code> = عادةً.', f:'usually = عادةً.'},
        {p:'sometimes', ask:'المعنى', o:['أحيانًا','دائمًا','عادةً'], a:0, w:'<code>sometimes</code> = أحيانًا.', f:'sometimes = أحيانًا.'},
        {p:'twice a week', ask:'المعنى', o:['مرّتين أسبوعيًّا','مرة أسبوعيًّا','كلّ يوم'], a:0, w:'<code>twice</code> = مرّتين.', f:'مرّتين أسبوعيًّا.'}
      ]},
      { type:'gap', name:'موقع ظرف التكرار', hint:'قبل الفعل العاديّ · بعد be', qs:[
        {p:'She ___ goes shopping on Thursdays. (usually)', o:['usually goes','goes usually','usually go'], a:0, w:'الظرفُ قبل الفعل العاديّ.', f:'She <u>usually goes</u>…'},
        {p:'He is ___ late. (always)', o:['always late','late always','always is late'], a:0, w:'بعد <code>be</code>: <code>is always</code>.', f:'He is <u>always</u> late.'},
        {p:'I ___ eat fast food. (never)', o:['never eat','eat never','never eats'], a:0, w:'قبل الفعل: <code>never eat</code>.', f:'I <u>never eat</u>…'},
        {p:'They ___ play football. (often)', o:['often play','play often','often plays'], a:0, w:'قبل الفعل: <code>often play</code>.', f:'They <u>often play</u>.'},
        {p:'We are ___ busy on weekends. (sometimes)', o:['sometimes busy','busy sometimes','sometimes are'], a:0, w:'بعد <code>are</code>.', f:'We are <u>sometimes</u> busy.'}
      ]},
      { type:'choice', name:'How often…?', hint:'اسأل وأجب عن التكرار', qs:[
        {p:'“I practice three times a week.” — السؤال المناسب:', ask:'اختر', o:['How often do you practice?','Where do you practice?','Who do you practice?'], a:0, w:'السؤال عن التكرار ← <code>How often</code>.', f:'How often do you practice?'},
        {p:'How often do you work out?  →  إجابةٌ صحيحة:', ask:'اختر', o:['Every day.','In the gym.','With my brother.'], a:0, w:'الجوابُ عبارةُ تكرار.', f:'Every day.'},
        {p:'once a week = ', ask:'اختر', o:['مرة في الأسبوع','مرّتين في الأسبوع','كلّ يوم'], a:0, w:'<code>once</code> = مرة.', f:'مرة في الأسبوع.'},
        {p:'How often do you eat out?  →', ask:'اختر', o:['I seldom eat out.','I eat out in a restaurant.','Because it is tasty.'], a:0, w:'جوابُ تكرار.', f:'I seldom eat out.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة في الترتيب', qs:[
        {words:['She','goes','always','shopping','.'], bad:2, fix:'always قبل الفعل', w:'الظرفُ قبل الفعل: <code>always goes</code>.', f:'She <u>always goes</u> shopping.'},
        {words:['He','always','is','late','.'], bad:1, fix:'بعد is', w:'بعد <code>be</code>: <code>is always late</code>.', f:'He is <u>always</u> late.'},
        {words:['I','play','never','games','.'], bad:2, fix:'never قبل الفعل', w:'<code>never play</code>.', f:'I <u>never play</u> games.'},
        {words:['Where','often','do','you','swim','?'], bad:1, fix:'How', w:'للتكرار نستعمل <code>How often</code>.', f:'<u>How</u> often do you swim?'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['How','often','do','you','play','?'], w:'سؤالُ التكرار.', f:'How often do you play?'},
        {sol:['She','usually','goes','shopping','.'], w:'الظرفُ قبل الفعل.', f:'She usually goes shopping.'},
        {sol:['I','work','out','twice','a','week','.'], w:'عبارةُ تكرار.', f:'I work out twice a week.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'always', ask:'المعنى', o:['دائمًا','أبدًا'], a:0, w:'دائمًا.', f:'always = دائمًا.'},
        {p:'She ___ goes shopping. (usually)', ask:'اختر', o:['usually goes','goes usually'], a:0, w:'قبل الفعل.', f:'<u>usually goes</u>.'},
        {p:'He is ___ late. (always)', ask:'اختر', o:['always late','late always'], a:0, w:'بعد be.', f:'is <u>always</u> late.'},
        {p:'“I practice three times a week.” السؤال:', ask:'اختر', o:['How often…?','Where…?'], a:0, w:'التكرار.', f:'How often…?'},
        {p:'twice a week =', ask:'اختر', o:['مرّتين أسبوعيًّا','كلّ يوم'], a:0, w:'مرّتين.', f:'مرّتين أسبوعيًّا.'},
        {sol:['How','often','do','you','play','?'], w:'سؤالُ التكرار.', f:'How often do you play?'},
        {p:'never', ask:'المعنى', o:['أبدًا','عادةً'], a:0, w:'أبدًا.', f:'never = أبدًا.'},
        {p:'I ___ eat fast food. (never)', ask:'اختر', o:['never eat','eat never'], a:0, w:'قبل الفعل.', f:'<u>never eat</u>.'},
        {p:'How often do you work out?', ask:'الجواب', o:['Every day.','In the gym.'], a:0, w:'عبارةُ تكرار.', f:'Every day.'}
      ]}
    ]
  };
})();
