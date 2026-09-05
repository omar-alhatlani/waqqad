/* ============================================================
   Lesson: Vocabulary — Cars, Driving & Traffic
   English · Super Goal 3 · Unit 8 (Drive Slowly!) · صفحات ٨٤–٨٥
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U8_VOCAB'] = {
    id:'EN_SG3_U8_VOCAB',
    title:'Vocabulary — Driving & Traffic',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'On the Road',
      intro:'مفرداتُ القيادة والمرور: <code>traffic</code> حركة السير، <code>traffic light</code> إشارة المرور، <code>speed limit</code> حدّ السرعة، <code>seatbelt</code> حزام الأمان، <code>sidewalk</code> رصيف، <code>highway</code> طريقٌ سريع، <code>pedestrian</code> مشاة، <code>traffic sign</code> لافتةُ مرور، <code>fine</code> غرامة، <code>accident</code> حادث.',
      table:[['speed limit','حدّ السرعة'],['seatbelt','حزام الأمان'],['traffic light','إشارة المرور'],['pedestrian','أحد المشاة'],['fine','غرامة']],
      trick:'قواعدُ السلامة: <code>You must wear a seatbelt</code>، <code>You mustn’t go over the speed limit</code>، و<code>You should watch for pedestrians</code>.'
    },
    stages:[
      { type:'choice', name:'المعنى', hint:'اختر المعنى الصحيح', qs:[
        {p:'The “speed limit” is the maximum ___ allowed.', o:['speed','weight','price'], a:0, w:'أقصى سرعة.', f:'the <u>speed</u>'},
        {p:'A “seatbelt” keeps you ___ in the car.', o:['safe','warm','clean'], a:0, w:'آمنًا.', f:'keeps you <u>safe</u>'},
        {p:'A “pedestrian” is a person who is ___.', o:['walking','driving','flying'], a:0, w:'من المشاة.', f:'<u>walking</u>'},
        {p:'A “fine” is money you pay for ___ a rule.', o:['breaking','following','reading'], a:0, w:'مخالفة.', f:'for <u>breaking</u> a rule'},
        {p:'A “highway” is a ___ road for fast travel.', o:['big','small','broken'], a:0, w:'طريقٌ سريع.', f:'a <u>big</u> road'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'Stop when the ___ light is red.', o:['traffic','desk','reading'], a:0, w:'إشارة المرور.', f:'the <u>traffic</u> light'},
        {p:'Always wear your ___ in the car.', o:['seatbelt','hat','watch'], a:0, w:'حزام الأمان.', f:'<u>seatbelt</u>'},
        {p:"Don't go over the ___ limit.", o:['speed','time','word'], a:0, w:'حدّ السرعة.', f:'<u>speed</u> limit'},
        {p:'Walk on the ___, not on the road.', o:['sidewalk','highway','sky'], a:0, w:'الرصيف.', f:'the <u>sidewalk</u>'},
        {p:'If you speed, you may pay a ___.', o:['fine','gift','discount'], a:0, w:'غرامة.', f:'a <u>fine</u>'}
      ]},
      { type:'choice', name:'السلامة على الطريق', hint:'اختر الأنسب', qs:[
        {p:'A ___ sign tells drivers the rules.', o:['traffic','birthday','sale'], a:0, w:'لافتة مرور.', f:'a <u>traffic</u> sign'},
        {p:'A crash between cars is an ___.', o:['accident','offer','iron'], a:0, w:'حادث.', f:'an <u>accident</u>'},
        {p:'Heavy ___ makes the trip slow.', o:['traffic','weather','music'], a:0, w:'حركة سير.', f:'heavy <u>traffic</u>'},
        {p:'Drivers must watch for ___ crossing the road.', o:['pedestrians','clouds','birds'], a:0, w:'المشاة.', f:'<u>pedestrians</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['Stop','at','the','red','sidewalk','.'], bad:4, fix:'light', w:'نتوقّف عند إشارة المرور الحمراء.', f:'Stop at the red <u>light</u>.'},
        {words:['Wear','your','seatbelt','on','the','sky','.'], bad:5, fix:'car/road', w:'حزام الأمان في السيّارة.', f:'…in the <u>car</u>.'},
        {words:['A','pedestrian','is','driving','a','car','.'], bad:3, fix:'walking', w:'المشاةُ يمشون.', f:'A pedestrian is <u>walking</u>.'},
        {words:['You','pay','a','discount','for','speeding','.'], bad:3, fix:'fine', w:'مخالفةُ السرعة ← غرامة.', f:'pay a <u>fine</u>'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'maximum speed allowed =', ask:'اختر', o:['speed limit','fine'], a:0, w:'حدّ السرعة.', f:'<u>speed limit</u>'},
        {p:'keeps you safe in the car =', ask:'اختر', o:['seatbelt','sidewalk'], a:0, w:'حزام الأمان.', f:'<u>seatbelt</u>'},
        {p:'a person walking =', ask:'اختر', o:['pedestrian','driver'], a:0, w:'مشاة.', f:'<u>pedestrian</u>'},
        {p:'money for breaking a rule =', ask:'اختر', o:['fine','discount'], a:0, w:'غرامة.', f:'<u>fine</u>'},
        {p:'red/green light =', ask:'اختر', o:['traffic light','desk light'], a:0, w:'إشارة المرور.', f:'<u>traffic light</u>'},
        {p:'walk on the ___', ask:'أكمل', o:['sidewalk','highway'], a:0, w:'الرصيف.', f:'<u>sidewalk</u>'},
        {p:'a fast, big road =', ask:'اختر', o:['highway','sidewalk'], a:0, w:'طريق سريع.', f:'<u>highway</u>'},
        {p:'a crash =', ask:'اختر', o:['accident','offer'], a:0, w:'حادث.', f:'<u>accident</u>'},
        {p:'rules for drivers on a sign =', ask:'اختر', o:['traffic sign','sale sign'], a:0, w:'لافتة مرور.', f:'<u>traffic sign</u>'}
      ]}
    ]
  };
})();
