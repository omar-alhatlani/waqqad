/* ============================================================
   درس: Vocabulary — Outdoor Activities (الأنشطة الخارجية)
   الإنجليزية · الخامس الابتدائي · ف١ · Top Goal 2 · Unit 6 (Outdoor Activities)
   مفرداتُ الوحدة (حقائقُ معجميّة)، والجملُ التوضيحيّة مؤلَّفةٌ أصالةً.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG2_U6_VOCAB'] = {
    id:'EN_TG2_U6_VOCAB',
    title:'Vocabulary — Outdoor Activities',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'أنشطةٌ وأدواتٌ في الهواء الطلق',
      intro:'مفرداتٌ عن <b>الأنشطة الخارجية</b> وأدواتها، تحتاجُها للحديث عن التخييم والمغامرات.',
      table:[['camping · hiking · fishing','تخييم · مشي جبليّ · صيد سمك'],['tent · sleeping bag','خيمة · كيس نوم'],['helmet · flashlight','خوذة · مصباح يدويّ'],['backpack · campfire','حقيبة ظهر · نار مخيّم']],
      examples:['We slept in a <code>tent</code> and lit a <code>campfire</code>. (نمنا في خيمةٍ وأشعلنا نارَ المخيّم.)','Wear a <code>helmet</code> when you go climbing. (البسِ الخوذةَ عند التسلّق.)'],
      trick:'اربطِ الأداةَ بالنشاط: <span class="en">tent</span> للتخييم، و<span class="en">helmet</span> للتسلّق، و<span class="en">fishing rod</span> للصيد.'
    },
    stages:[
      { type:'choice', name:'الكلمة ← المعنى', hint:'اختر المعنى العربيّ', qs:[
        {p:'camping', ask:'المعنى؟', o:['تخييم','صيد'], a:0, w:'<code>camping</code> = تخييم.', f:'camping ← <u>تخييم</u>'},
        {p:'tent', ask:'المعنى؟', o:['خيمة','خوذة'], a:0, w:'<code>tent</code> = خيمة.', f:'tent ← <u>خيمة</u>'},
        {p:'helmet', ask:'المعنى؟', o:['خوذة','حقيبة'], a:0, w:'<code>helmet</code> = خوذة.', f:'helmet ← <u>خوذة</u>'},
        {p:'hiking', ask:'المعنى؟', o:['مشي جبليّ','سباحة'], a:0, w:'<code>hiking</code> = مشي جبليّ.', f:'hiking ← <u>مشي جبليّ</u>'}
      ]},
      { type:'choice', name:'المعنى ← الكلمة', hint:'اختر الكلمة الإنجليزية', qs:[
        {p:'كيس نوم', ask:'الكلمة؟', o:['sleeping bag','backpack'], a:0, w:'<code>sleeping bag</code>.', f:'← <u>sleeping bag</u>'},
        {p:'صيد السمك', ask:'الكلمة؟', o:['fishing','hiking'], a:0, w:'صيد = <code>fishing</code>.', f:'← <u>fishing</u>'},
        {p:'مصباح يدويّ', ask:'الكلمة؟', o:['flashlight','helmet'], a:0, w:'<code>flashlight</code>.', f:'← <u>flashlight</u>'},
        {p:'حقيبة ظهر', ask:'الكلمة؟', o:['backpack','tent'], a:0, w:'<code>backpack</code>.', f:'← <u>backpack</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'We slept in a ___ .', o:['tent','helmet','backpack'], a:0, w:'الخيمة ← <code>tent</code>.', f:'... a <u>tent</u>.'},
        {p:'Wear a ___ when climbing.', o:['helmet','tent','campfire'], a:0, w:'الخوذة ← <code>helmet</code>.', f:'Wear a <u>helmet</u> ...'},
        {p:'We cooked over the ___ .', o:['campfire','flashlight','tent'], a:0, w:'نار المخيّم ← <code>campfire</code>.', f:'... the <u>campfire</u>.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'tent', ask:'المعنى؟', o:['خيمة','خوذة'], a:0, w:'خيمة.', f:'← <u>خيمة</u>'},
        {p:'كيس نوم', ask:'الكلمة؟', o:['sleeping bag','backpack'], a:0, w:'sleeping bag.', f:'← <u>sleeping bag</u>'},
        {p:'Wear a ___ when climbing.', ask:'اختر', o:['helmet','tent'], a:0, w:'helmet.', f:'← <u>helmet</u>'},
        {p:'camping', ask:'المعنى؟', o:['تخييم','صيد'], a:0, w:'تخييم.', f:'← <u>تخييم</u>'},
        {p:'صيد السمك', ask:'الكلمة؟', o:['fishing','hiking'], a:0, w:'fishing.', f:'← <u>fishing</u>'}
      ]}
    ]
  };
})();
