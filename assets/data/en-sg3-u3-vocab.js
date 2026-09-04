/* ============================================================
   Lesson: Vocabulary — Air Travel
   English · Super Goal 3 · Unit 3 (When Are You Traveling?) · صفحات ٢٢–٢٣
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U3_VOCAB'] = {
    id:'EN_SG3_U3_VOCAB',
    title:'Vocabulary — Air Travel',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'At the Airport',
      intro:'مفرداتُ السفر الجوّيّ: <code>passport</code> جواز السفر، <code>boarding pass</code> بطاقة الصعود، <code>gate</code> بوّابة، <code>carry-on</code> حقيبةٌ يدوية، <code>check a bag</code> يسجّل حقيبة، <code>delayed</code> متأخّر، <code>departure</code> المغادرة، <code>boarding</code> الصعود، <code>flight</code> الرحلة.',
      table:[['passport','جواز السفر'],['boarding pass','بطاقة الصعود'],['gate','بوّابة الصعود'],['carry-on','حقيبةٌ يدوية'],['delayed','متأخّر (رحلة)']],
      trick:'قبل السفر الدوليّ تحتاج: <code>passport</code> و<code>ticket</code> و<code>boarding pass</code>. والسوائلُ تُوضَع في <code>checked baggage</code> لا في اليد.'
    },
    stages:[
      { type:'choice', name:'المعنى', hint:'اختر المعنى الصحيح', qs:[
        {p:'A “boarding pass” lets you:', o:['get on the plane','buy food','drive a car'], a:0, w:'بطاقةٌ للصعود إلى الطائرة.', f:'boarding pass → <u>get on the plane</u>'},
        {p:'A “carry-on” is a bag you:', o:['take on the plane','check in only','leave home'], a:0, w:'حقيبةٌ تحملها معك.', f:'carry-on → <u>take on the plane</u>'},
        {p:'“delayed” means the flight is:', o:['late','early','cancelled'], a:0, w:'متأخّرة.', f:'delayed = <u>late</u>'},
        {p:'You show your ___ for international travel.', o:['passport','pencil','ticket only'], a:0, w:'جواز السفر.', f:'<u>passport</u>'},
        {p:'The “gate” is where you:', o:['board the plane','eat','sleep'], a:0, w:'بوّابةُ الصعود.', f:'gate → <u>board the plane</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'May I see your ticket and ___, please?', o:['passport','pillow','pocket'], a:0, w:'جواز السفر.', f:'<u>passport</u>'},
        {p:'Flight 621 is now ___. Please proceed to gate C10.', o:['boarding','sleeping','cooking'], a:0, w:'الصعود.', f:'now <u>boarding</u>'},
        {p:'I have one suitcase and one ___.', o:['carry-on','carry-in','car'], a:0, w:'حقيبةٌ يدوية.', f:'one <u>carry-on</u>'},
        {p:'The flight is ___. It’s leaving at ten.', o:['delayed','landed','sold'], a:0, w:'متأخّرة.', f:'It’s <u>delayed</u>.'},
        {p:'Place liquids in your ___ baggage.', o:['checked','light','open'], a:0, w:'الأمتعة المسجّلة.', f:'<u>checked</u> baggage'}
      ]},
      { type:'choice', name:'في المطار', hint:'اختر الأنسب', qs:[
        {p:'How many bags are you ___?', o:['checking','cooking','cutting'], a:0, w:'تسجّل حقائب.', f:'…<u>checking</u>?'},
        {p:'Arrive at the airport two hours before ___.', o:['departure','dinner','summer'], a:0, w:'المغادرة.', f:'before <u>departure</u>'},
        {p:'Passengers, please proceed to ___ C10.', o:['gate','goal','game'], a:0, w:'بوّابة.', f:'<u>gate</u> C10'},
        {p:'Put a ___ tag on your suitcase to identify it.', o:['name','game','time'], a:0, w:'بطاقةُ الاسم.', f:'<u>name</u> tag'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['Show','your','boarding','ticket','at','the','gate','.'], bad:3, fix:'pass', w:'الصواب <code>boarding pass</code>.', f:'boarding <u>pass</u>'},
        {words:['Put','liquids','in','your','carry-on','bag','.'], bad:4, fix:'checked', w:'السوائل في الأمتعة المسجّلة.', f:'<u>checked</u> baggage'},
        {words:['The','flight','is','delay','.'], bad:3, fix:'delayed', w:'الصفة ← <code>delayed</code>.', f:'The flight is <u>delayed</u>.'},
        {words:['Arrive','before','the','departing','.'], bad:3, fix:'departure', w:'الاسم ← <code>departure</code>.', f:'before the <u>departure</u>'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'boarding pass →', ask:'المعنى', o:['get on the plane','buy food'], a:0, w:'للصعود.', f:'<u>get on the plane</u>'},
        {p:'carry-on →', ask:'المعنى', o:['bag you take on','checked bag'], a:0, w:'حقيبةٌ يدوية.', f:'<u>bag you take on</u>'},
        {p:'delayed =', ask:'المعنى', o:['late','early'], a:0, w:'متأخّر.', f:'<u>late</u>'},
        {p:'Show your ___ for travel.', ask:'أكمل', o:['passport','pocket'], a:0, w:'جواز السفر.', f:'<u>passport</u>'},
        {p:'Proceed to ___ C10.', ask:'أكمل', o:['gate','goal'], a:0, w:'بوّابة.', f:'<u>gate</u>'},
        {p:'Liquids go in ___ baggage.', ask:'اختر', o:['checked','carry-on'], a:0, w:'المسجّلة.', f:'<u>checked</u>'},
        {p:'How many bags are you ___?', ask:'أكمل', o:['checking','cooking'], a:0, w:'تسجّل.', f:'<u>checking</u>'},
        {p:'Arrive before ___.', ask:'أكمل', o:['departure','dinner'], a:0, w:'المغادرة.', f:'<u>departure</u>'},
        {p:'Flight 621 is now ___.', ask:'أكمل', o:['boarding','baking'], a:0, w:'الصعود.', f:'<u>boarding</u>'}
      ]}
    ]
  };
})();
