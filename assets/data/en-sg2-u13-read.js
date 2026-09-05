/* ============================================================
   Lesson: Reading — Can Weather Affect People's Moods?
   English · Super Goal 2 · Unit 13 (What's the Weather Like?) · صفحة ١٢١
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U13_READ'] = {
    id:'EN_SG2_U13_READ',
    title:"Reading — Can Weather Affect Moods?",
    lang:'en',
    rule:{
      tag:'Reading',
      title:"Can Weather Affect People's Moods?",
      intro:'اقرأْ عن أثر الطقس في مزاج الناس، ثمّ أجِب.',
      examples:[
        'According to new research, warm, sunny weather can have a positive impact on mental health and mood.',
        'On the other hand, cold, dark winter weather can have a negative effect, even causing Seasonal Affective Disorder (SAD), a depression that comes back every winter.',
        'Ibrahim (Jeddah): It’s always hot here, with bright sunny skies, and people are usually very happy.',
        'Felipe (Brazil): The weather affects my mood a lot. I’m in a lively mood most of the year, but cold, windy days make me feel down.',
        'Keith (England): When it’s rainy and dreary, I feel tired and depressed. My body and brain work better when it’s sunny.'
      ],
      trick:'الفكرة: الطقسُ يؤثّر في المزاج — الشمسُ إيجابية، والبردُ والظلام سلبيّان (قد يسبّبان اضطرابَ SAD). ثلاثةُ أشخاص من بلدان مختلفة يصفون تأثيرَه.'
    },
    stages:[
      { type:'choice', name:'الفهم العام', hint:'أثر الطقس', qs:[
        {p:'Warm, sunny weather has a ___ impact on mood.', o:['positive','negative','no'], a:0, w:'إيجابيّ.', f:'<u>positive</u>'},
        {p:'Cold, dark weather can have a ___ effect.', o:['negative','positive','funny'], a:0, w:'سلبيّ.', f:'<u>negative</u>'},
        {p:'SAD is a kind of ___ that comes back every winter.', o:['depression','holiday','game'], a:0, w:'اكتئاب.', f:'<u>depression</u>'},
        {p:'The research is about weather and:', o:['mood','food','sports'], a:0, w:'المزاج.', f:'<u>mood</u>'}
      ]},
      { type:'choice', name:'الأشخاص', hint:'من قال ماذا؟', qs:[
        {p:'Who says people are happy even during thunderstorms? (Jeddah)', o:['Ibrahim','Felipe','Keith'], a:0, w:'إبراهيم.', f:'<u>Ibrahim</u>'},
        {p:'Who feels down on cold, windy days? (Brazil)', o:['Felipe','Ibrahim','Keith'], a:0, w:'فيليبي.', f:'<u>Felipe</u>'},
        {p:'Who feels tired and depressed when it rains? (England)', o:['Keith','Ibrahim','Felipe'], a:0, w:'كيث.', f:'<u>Keith</u>'},
        {p:'Keith feels more energetic when it is:', o:['sunny','rainy','cloudy'], a:0, w:'مشمس.', f:'<u>sunny</u>'}
      ]},
      { type:'choice', name:'صحّ أم خطأ', hint:'True / False', qs:[
        {p:'T/F: Sunny weather can improve mood.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'T/F: SAD happens in the summer.', o:['False','True'], a:0, w:'بل في الشتاء.', f:'<u>False</u>'},
        {p:'T/F: Keith works better when it rains.', o:['False','True'], a:0, w:'بل حين تشرق الشمس.', f:'<u>False</u>'},
        {p:'T/F: The weather can affect mental health.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'}
      ]},
      { type:'gap', name:'أكمل من النصّ', hint:'اختر الكلمة المناسبة', qs:[
        {p:'Sunny weather has a ___ impact on mood.', o:['positive','negative','strange'], a:0, w:'إيجابيّ.', f:'<u>positive</u>'},
        {p:'Cold, dark weather can cause ___.', o:['SAD','joy','energy'], a:0, w:'اضطراب SAD.', f:'<u>SAD</u>'},
        {p:'Keith feels ___ when it rains.', o:['depressed','happy','energetic'], a:0, w:'مكتئب.', f:'<u>depressed</u>'},
        {p:'Ibrahim lives where it is always ___.', o:['hot','cold','snowy'], a:0, w:'حارّ.', f:'<u>hot</u>'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'Sunny weather → ___ mood.', ask:'أكمل', o:['positive','negative'], a:0, w:'إيجابيّ.', f:'<u>positive</u>'},
        {p:'Cold, dark weather → ___ effect.', ask:'اختر', o:['negative','positive'], a:0, w:'سلبيّ.', f:'<u>negative</u>'},
        {p:'SAD is a kind of ___.', ask:'اختر', o:['depression','holiday'], a:0, w:'اكتئاب.', f:'<u>depression</u>'},
        {p:'Happy even in storms →', ask:'من؟', o:['Ibrahim','Keith'], a:0, w:'إبراهيم.', f:'<u>Ibrahim</u>'},
        {p:'Down on cold windy days →', ask:'من؟', o:['Felipe','Ibrahim'], a:0, w:'فيليبي.', f:'<u>Felipe</u>'},
        {p:'Depressed when it rains →', ask:'من؟', o:['Keith','Felipe'], a:0, w:'كيث.', f:'<u>Keith</u>'},
        {p:'Keith is energetic when it is ___.', ask:'اختر', o:['sunny','rainy'], a:0, w:'مشمس.', f:'<u>sunny</u>'},
        {p:'T/F: SAD happens in winter.', ask:'صحّ/خطأ', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'Weather can affect ___ health.', ask:'أكمل', o:['mental','car'], a:0, w:'النفسية.', f:'<u>mental</u>'}
      ]}
    ]
  };
})();
