/* ============================================================
   Lesson: Prepositions of Time (at/in/on) + Present vs Progressive
   English · Super Goal 1 · Unit 11 (What Time Do You Get Up?) · صفحة ٩٦
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U11_PREP'] = {
    id:'EN_SG1_U11_PREP',
    title:'Time Prepositions & Present vs Progressive',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'at / in / on & now vs usually',
      intro:'حروفُ الزمن: <code>at</code> للساعات (<code>at 7 o’clock</code>)، <code>in</code> لأجزاء اليوم والشهور (<code>in the morning, in May</code>)، <code>on</code> للأيام (<code>on Sunday</code>). ونفرّق: <b>المضارع البسيط</b> للعادة (<code>I get up at 6 every day</code>)، و<b>المضارع المستمرّ</b> لِما يحدث الآن (<code>I am studying now</code>).',
      table:[['at','at 7:00, at noon, at night'],['in','in the morning, in May'],['on','on Sunday, on Friday'],['now → -ing','I am studying now.']],
      trick:'<code>at</code> للساعة، <code>on</code> لليوم، <code>in</code> لأجزاء اليوم والشهور. وكلماتٌ مثل <code>now, right now</code> تدلّ على المستمرّ، و<code>every day, usually</code> على البسيط.'
    },
    stages:[
      { type:'choice', name:'at / in / on', hint:'ساعة/يوم/جزء يوم', qs:[
        {p:'I get up ___ 6 o’clock.', o:['at','in','on'], a:0, w:'الساعات ← <code>at</code>.', f:'<u>at</u> 6 o’clock'},
        {p:'School starts ___ the morning.', o:['in','at','on'], a:0, w:'أجزاء اليوم ← <code>in</code>.', f:'<u>in</u> the morning'},
        {p:'We have a test ___ Sunday.', o:['on','at','in'], a:0, w:'الأيام ← <code>on</code>.', f:'<u>on</u> Sunday'},
        {p:'I go to bed ___ night.', o:['at','on','in'], a:0, w:'<code>at night</code>.', f:'<u>at</u> night'}
      ]},
      { type:'choice', name:'المزيد من الحروف', hint:'اختر الصحيح', qs:[
        {p:'My birthday is ___ May.', o:['in','on','at'], a:0, w:'الشهور ← <code>in</code>.', f:'<u>in</u> May'},
        {p:'The class finishes ___ 1 p.m.', o:['at','in','on'], a:0, w:'الساعات ← <code>at</code>.', f:'<u>at</u> 1 p.m.'},
        {p:'We rest ___ the afternoon.', o:['in','on','at'], a:0, w:'<code>in the afternoon</code>.', f:'<u>in</u> the afternoon'},
        {p:'I visit my grandparents ___ Friday.', o:['on','at','in'], a:0, w:'الأيام ← <code>on</code>.', f:'<u>on</u> Friday'}
      ]},
      { type:'choice', name:'بسيط أم مستمرّ', hint:'now أم every day؟', qs:[
        {p:'I ___ up at 6 every day.', o:['get','am getting','getting'], a:0, w:'عادة ← بسيط.', f:'I <u>get</u> up every day.'},
        {p:'I ___ my homework right now.', o:['am doing','do','does'], a:0, w:'الآن ← مستمرّ.', f:'I <u>am doing</u> …now.'},
        {p:'She usually ___ tea in the morning.', o:['drinks','is drinking','drink'], a:0, w:'عادة ← بسيط.', f:'She <u>drinks</u> tea.'},
        {p:'Look! They ___ football now.', o:['are playing','play','plays'], a:0, w:'الآن ← مستمرّ.', f:'They <u>are playing</u> now.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['I','get','up','in','6','o’clock','.'], bad:3, fix:'at', w:'الساعات ← <code>at</code>.', f:'…<u>at</u> 6 o’clock'},
        {words:['We','have','class','in','Sunday','.'], bad:3, fix:'on', w:'الأيام ← <code>on</code>.', f:'…<u>on</u> Sunday'},
        {words:['I','study','right','now','every','day','.'], bad:2, fix:'am studying (now)', w:'<code>now</code> ← مستمرّ.', f:'I <u>am studying</u> right now.'},
        {words:['She','is','drinking','tea','every','morning','.'], bad:2, fix:'drinks', w:'العادة ← بسيط.', f:'She <u>drinks</u> tea every morning.'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['I','get','up','at','six','.'], w:'الساعات ← <code>at</code>.', f:'I get up at six.'},
        {sol:['We','have','a','test','on','Sunday','.'], w:'الأيام ← <code>on</code>.', f:'We have a test on Sunday.'},
        {sol:['School','starts','in','the','morning','.'], w:'أجزاء اليوم ← <code>in</code>.', f:'School starts in the morning.'},
        {sol:['I','am','doing','my','homework','now','.'], w:'الآن ← مستمرّ.', f:'I am doing my homework now.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'I get up ___ 6 o’clock.', ask:'الحرف', o:['at','in'], a:0, w:'الساعات.', f:'<u>at</u>'},
        {p:'___ the morning', ask:'الحرف', o:['in','on'], a:0, w:'أجزاء اليوم.', f:'<u>in</u>'},
        {p:'___ Sunday', ask:'الحرف', o:['on','at'], a:0, w:'الأيام.', f:'<u>on</u>'},
        {p:'___ May', ask:'الحرف', o:['in','on'], a:0, w:'الشهور.', f:'<u>in</u>'},
        {p:'I ___ up at 6 every day.', ask:'اختر', o:['get','am getting'], a:0, w:'عادة.', f:'<u>get</u>'},
        {p:'I ___ homework now.', ask:'اختر', o:['am doing','do'], a:0, w:'الآن.', f:'<u>am doing</u>'},
        {sol:['We','have','class','on','Sunday','.'], w:'الأيام ← <code>on</code>.', f:'We have class on Sunday.'},
        {p:'I go to bed ___ night.', ask:'الحرف', o:['at','in'], a:0, w:'<code>at night</code>.', f:'<u>at</u>'},
        {p:'Look! They ___ now.', ask:'اختر', o:['are playing','play'], a:0, w:'الآن.', f:'<u>are playing</u>'}
      ]}
    ]
  };
})();
