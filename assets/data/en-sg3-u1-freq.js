/* ============================================================
   Lesson: Adverbs/Expressions of Frequency + How often/much/long
   English · Super Goal 3 · Unit 1 (Lifestyles) · صفحة ٤
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U1_FREQ'] = {
    id:'EN_SG3_U1_FREQ',
    title:'Adverbs of Frequency & How often',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'Frequency Adverbs & Questions',
      intro:'تُبيّن <b>ظروف التكرار</b> كم مرّة يحدث الفعل: <code>always</code> (١٠٠٪) ← <code>usually/often</code> ← <code>sometimes</code> ← <code>seldom/rarely/hardly ever</code> ← <code>never</code> (٠٪). تأتي <b>قبل الفعل الرئيس</b>، لكن <b>بعد الفعل be</b>. ونسأل عن التكرار بـ <code>How often</code>، وعن الكمّية بـ <code>How much</code>، وعن المدّة بـ <code>How long</code>.',
      table:[['100% / 0%','always / never'],['often, usually','قبل الفعل الرئيس'],['after be','I am always late'],['How often …?','once a week, twice a day']],
      trick:'الظرف قبل الفعل الرئيس وبعد <code>be</code>: <code>She always drinks tea</code> لكن <code>She is always busy</code>. وعبارات مثل <code>twice a week</code> تأتي في آخر الجملة.'
    },
    stages:[
      { type:'choice', name:'المعنى', hint:'من الأكثر إلى الأقلّ تكرارًا', qs:[
        {p:'100% of the time =', o:['always','never','sometimes','seldom'], a:0, w:'<code>always</code> = دائمًا (١٠٠٪).', f:'100% = <u>always</u>'},
        {p:'0% of the time =', o:['never','always','usually','often'], a:0, w:'<code>never</code> = أبدًا (٠٪).', f:'0% = <u>never</u>'},
        {p:'“hardly ever” means:', o:['almost never','almost always','every day'], a:0, w:'<code>hardly ever</code> = نادرًا جدًّا.', f:'hardly ever = <u>almost never</u>'},
        {p:'“seldom” is close to:', o:['rarely','frequently','always'], a:0, w:'<code>seldom = rarely</code> = نادرًا.', f:'seldom = <u>rarely</u>'}
      ]},
      { type:'choice', name:'موضع الظرف', hint:'قبل الفعل الرئيس، بعد be', qs:[
        {p:'She ___ drinks coffee. (never)', o:['never drinks','drinks never','drinks is never'], a:0, w:'الظرف قبل الفعل الرئيس.', f:'She <u>never drinks</u> coffee.'},
        {p:'Arthur is ___ busy. (always)', o:['always busy','busy always','always is busy'], a:0, w:'بعد <code>be</code> يأتي الظرف.', f:'Arthur is <u>always</u> busy.'},
        {p:'I ___ eat junk food. (rarely)', o:['rarely eat','eat rarely','am rarely eat'], a:0, w:'قبل الفعل الرئيس.', f:'I <u>rarely eat</u> junk food.'},
        {p:'He plays tennis ___.', o:['twice a week','week a twice','a week twice'], a:0, w:'عبارة التكرار في آخر الجملة.', f:'He plays tennis <u>twice a week</u>.'}
      ]},
      { type:'choice', name:'How often / much / long', hint:'التكرار، الكمّية، المدّة', qs:[
        {p:'___ do you use your phone? — 20 times a day.', o:['How often','How much','How long'], a:0, w:'عن التكرار ← <code>How often</code>.', f:'<u>How often</u> …?'},
        {p:'___ time do you spend online? — About 2 hours.', o:['How much','How often','How many'], a:0, w:'مع <code>time</code> غير المعدود ← <code>How much</code>.', f:'<u>How much</u> time …?'},
        {p:'___ do you spend on homework? — Two hours.', o:['How long','How often','How many'], a:0, w:'عن المدّة ← <code>How long</code>.', f:'<u>How long</u> …?'},
        {p:'___ hours a day do you sleep?', o:['How many','How much','How long'], a:0, w:'مع اسمٍ معدود <code>hours</code> ← <code>How many</code>.', f:'<u>How many</u> hours …?'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['She','drinks','never','coffee','.'], bad:2, fix:'قبل الفعل: never drinks', w:'الظرف قبل الفعل الرئيس.', f:'She <u>never drinks</u> coffee.'},
        {words:['He','always','is','late','.'], bad:1, fix:'بعد be: is always', w:'بعد <code>be</code> يأتي الظرف.', f:'He <u>is always</u> late.'},
        {words:['How','much','do','you','exercise','?'], bad:1, fix:'often', w:'عن التكرار ← <code>How often</code>.', f:'How <u>often</u> do you exercise?'},
        {words:['How','many','time','do','you','sleep','?'], bad:1, fix:'much (مع time)', w:'<code>time</code> غير معدود ← <code>How much</code>.', f:'How <u>much</u> time …?'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['I','usually','eat','a','salad','.'], w:'الظرف قبل الفعل الرئيس.', f:'I usually eat a salad.'},
        {sol:['How','often','do','you','exercise','?'], w:'<code>How often</code> في المقدمة.', f:'How often do you exercise?'},
        {sol:['She','is','always','happy','.'], w:'بعد <code>be</code> يأتي الظرف.', f:'She is always happy.'},
        {sol:['He','goes','rock','climbing','twice','a','week','.'], w:'عبارة التكرار في آخر الجملة.', f:'He goes rock climbing twice a week.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'100% of the time =', ask:'اختر', o:['always','never','seldom'], a:0, w:'<code>always</code>.', f:'<u>always</u>'},
        {p:'She ___ coffee. (never)', ask:'الموضع', o:['never drinks','drinks never'], a:0, w:'قبل الفعل.', f:'She <u>never drinks</u> coffee.'},
        {p:'He is ___ busy. (always)', ask:'الموضع', o:['always','busy always'], a:0, w:'بعد <code>be</code>.', f:'He is <u>always</u> busy.'},
        {p:'___ do you exercise?', ask:'اختر', o:['How often','How much','How long'], a:0, w:'التكرار.', f:'<u>How often</u> …?'},
        {p:'___ time do you spend online?', ask:'اختر', o:['How much','How many','How often'], a:0, w:'<code>time</code> ← <code>How much</code>.', f:'<u>How much</u> time …?'},
        {p:'“hardly ever” =', ask:'المعنى', o:['almost never','always'], a:0, w:'نادرًا جدًّا.', f:'<u>almost never</u>'},
        {sol:['I','usually','get','up','early','.'], w:'الظرف قبل الفعل.', f:'I usually get up early.'},
        {p:'He plays tennis ___.', ask:'اختر', o:['twice a week','week twice a'], a:0, w:'في آخر الجملة.', f:'…<u>twice a week</u>.'},
        {p:'___ hours do you sleep?', ask:'اختر', o:['How many','How much'], a:0, w:'معدود ← <code>How many</code>.', f:'<u>How many</u> hours …?'}
      ]}
    ]
  };
})();
