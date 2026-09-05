/* ============================================================
   Lesson: Vocabulary — Weather & Seasons
   English · Super Goal 2 · Unit 13 (What's the Weather Like?) · صفحات ١١٦–١١٧
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U13_VOCAB'] = {
    id:'EN_SG2_U13_VOCAB',
    title:'Vocabulary — Weather & Seasons',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'Weather & Seasons',
      intro:'الطقس: <code>sunny</code> مشمس، <code>cloudy</code> غائم، <code>rainy</code> ممطر، <code>windy</code> عاصف، <code>snowy</code> مثلج، <code>hot</code> حارّ، <code>cold</code> بارد، <code>warm</code> دافئ، <code>cool</code> معتدلٌ بارد. والفصول: <code>spring</code> ربيع، <code>summer</code> صيف، <code>fall/autumn</code> خريف، <code>winter</code> شتاء. ونسأل: <code>What’s the weather like?</code>',
      table:[['sunny','مشمس'],['rainy','ممطر'],['windy','عاصف'],['seasons','spring, summer, fall, winter'],["What's the weather like?",'كيف الطقس؟']],
      trick:'نسأل عن الطقس بـ <code>What’s the weather like?</code> ونجيب بـ <code>It’s + صفة</code>: <code>It’s sunny / It’s hot</code>. ونستعمل <code>temperature</code> (درجة الحرارة).'
    },
    stages:[
      { type:'choice', name:'الطقس', hint:'اختر الصفة الصحيحة', qs:[
        {p:'When the sun is out, it is ___.', o:['sunny','rainy','snowy'], a:0, w:'مشمس.', f:'<u>sunny</u>'},
        {p:'When rain falls, it is ___.', o:['rainy','windy','sunny'], a:0, w:'ممطر.', f:'<u>rainy</u>'},
        {p:'When there is a lot of wind, it is ___.', o:['windy','cloudy','hot'], a:0, w:'عاصف.', f:'<u>windy</u>'},
        {p:'When snow falls, it is ___.', o:['snowy','sunny','warm'], a:0, w:'مثلج.', f:'<u>snowy</u>'},
        {p:'When the sky is full of clouds, it is ___.', o:['cloudy','sunny','clear'], a:0, w:'غائم.', f:'<u>cloudy</u>'}
      ]},
      { type:'choice', name:'درجة الحرارة', hint:'hot / cold / warm / cool', qs:[
        {p:'In summer, the weather is usually ___.', o:['hot','cold','snowy'], a:0, w:'حارّ.', f:'<u>hot</u>'},
        {p:'In winter, it is often ___.', o:['cold','hot','sunny always'], a:0, w:'بارد.', f:'<u>cold</u>'},
        {p:'“warm” means a little ___.', o:['hot','cold','wet'], a:0, w:'دافئ.', f:'a little <u>hot</u>'},
        {p:'“cool” means a little ___.', o:['cold','hot','windy'], a:0, w:'معتدلٌ بارد.', f:'a little <u>cold</u>'}
      ]},
      { type:'gap', name:'الفصول والسؤال', hint:'اختر الكلمة المناسبة', qs:[
        {p:"What's the ___ like? — It's sunny.", o:['weather','season','wind'], a:0, w:'كيف الطقس؟', f:"the <u>weather</u> like?"},
        {p:'Flowers grow in the ___.', o:['spring','winter','summer'], a:0, w:'الربيع.', f:'<u>spring</u>'},
        {p:'It is very hot in the ___.', o:['summer','winter','fall'], a:0, w:'الصيف.', f:'<u>summer</u>'},
        {p:'Leaves fall in the ___.', o:['fall','spring','summer'], a:0, w:'الخريف.', f:'<u>fall</u>'},
        {p:'The ___ tells us how hot or cold it is.', o:['temperature','wind','cloud'], a:0, w:'درجة الحرارة.', f:'<u>temperature</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['In','summer',',','it','is','snowy','.'], bad:5, fix:'hot', w:'الصيف حارّ عادةً.', f:'…it is <u>hot</u>.'},
        {words:['When','it','rains',',','it','is','sunny','.'], bad:6, fix:'rainy', w:'حين تمطر ← ممطر.', f:'…it is <u>rainy</u>.'},
        {words:['What','is','the','season','like','?'], bad:3, fix:'weather', w:'نسأل عن الطقس.', f:"What is the <u>weather</u> like?"},
        {words:['Leaves','fall','in','the','spring','.'], bad:4, fix:'fall/autumn', w:'الأوراق تسقط في الخريف.', f:'…in the <u>fall</u>.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'sun is out =', ask:'اختر', o:['sunny','rainy'], a:0, w:'مشمس.', f:'<u>sunny</u>'},
        {p:'rain falls =', ask:'اختر', o:['rainy','windy'], a:0, w:'ممطر.', f:'<u>rainy</u>'},
        {p:'a lot of wind =', ask:'اختر', o:['windy','cloudy'], a:0, w:'عاصف.', f:'<u>windy</u>'},
        {p:'summer weather =', ask:'اختر', o:['hot','cold'], a:0, w:'حارّ.', f:'<u>hot</u>'},
        {p:'winter weather =', ask:'اختر', o:['cold','hot'], a:0, w:'بارد.', f:'<u>cold</u>'},
        {p:"What's the ___ like?", ask:'أكمل', o:['weather','season'], a:0, w:'الطقس.', f:'<u>weather</u>'},
        {p:'flowers grow in the ___', ask:'اختر', o:['spring','winter'], a:0, w:'الربيع.', f:'<u>spring</u>'},
        {p:'leaves fall in the ___', ask:'اختر', o:['fall','summer'], a:0, w:'الخريف.', f:'<u>fall</u>'},
        {p:'how hot/cold it is =', ask:'اختر', o:['temperature','cloud'], a:0, w:'درجة الحرارة.', f:'<u>temperature</u>'}
      ]}
    ]
  };
})();
