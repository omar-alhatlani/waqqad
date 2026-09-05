/* ============================================================
   Lesson: Vocabulary — Places & Activities
   English · Super Goal 1 · Unit 12 (What Can You Do There?) · صفحات ١٠٢–١٠٣
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U12_VOCAB'] = {
    id:'EN_SG1_U12_VOCAB',
    title:'Vocabulary — Places & Activities',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'Places & What You Can Do',
      intro:'أماكنُ وأنشطة: في الـ<code>mall</code> تتسوّق (<code>shop</code>)، في الـ<code>park</code> تتنزّه، في الـ<code>beach</code> تسبح (<code>swim</code>)، في الـ<code>resort</code> منتجع. وأفعالُ نشاط: <code>rollerblade</code> يتزلّج، <code>ice-skate</code> يتزحلق على الجليد، <code>hike</code> يمشي في الجبال، <code>shop</code> يتسوّق.',
      table:[['mall','مركز تسوّق — shop'],['park','حديقة — walk, play'],['beach','شاطئ — swim'],['resort','منتجع'],['hike','يمشي في الطبيعة']],
      trick:'اربطِ المكانَ بالنشاط: <code>You can shop at the mall</code> / <code>You can swim at the beach</code> / <code>You can hike in the mountains</code>.'
    },
    stages:[
      { type:'choice', name:'المكان والنشاط', hint:'أين تفعل ماذا؟', qs:[
        {p:'You can shop at the ___.', o:['mall','beach','mountain'], a:0, w:'مركز التسوّق.', f:'<u>mall</u>'},
        {p:'You can swim at the ___.', o:['beach','library','mall'], a:0, w:'الشاطئ.', f:'<u>beach</u>'},
        {p:'You can hike in the ___.', o:['mountains','store','pool'], a:0, w:'الجبال.', f:'<u>mountains</u>'},
        {p:'You can walk and play in the ___.', o:['park','bank','airport'], a:0, w:'الحديقة.', f:'<u>park</u>'},
        {p:'A place for holidays with activities is a ___.', o:['resort','clinic','office'], a:0, w:'منتجع.', f:'<u>resort</u>'}
      ]},
      { type:'choice', name:'أفعال النشاط', hint:'اختر الفعل الصحيح', qs:[
        {p:'To move on wheels on your feet is to ___.', o:['rollerblade','cook','read'], a:0, w:'يتزلّج.', f:'<u>rollerblade</u>'},
        {p:'To move on ice is to ___.', o:['ice-skate','swim','drive'], a:0, w:'يتزحلق على الجليد.', f:'<u>ice-skate</u>'},
        {p:'To buy things is to ___.', o:['shop','sleep','sing'], a:0, w:'يتسوّق.', f:'<u>shop</u>'},
        {p:'To walk a long way in nature is to ___.', o:['hike','fly','fry'], a:0, w:'يمشي في الطبيعة.', f:'<u>hike</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'Let’s go to the ___ and buy some clothes.', o:['mall','beach','park'], a:0, w:'المركز.', f:'<u>mall</u>'},
        {p:'It’s hot. Let’s ___ at the beach.', o:['swim','ski','shop'], a:0, w:'نسبح.', f:'<u>swim</u>'},
        {p:'We are going ___ in the Asir mountains.', o:['hiking','swimming','shopping'], a:0, w:'مشيًا.', f:'<u>hiking</u>'},
        {p:'You can play sports at the ___.', o:['park','library','bank'], a:0, w:'الحديقة.', f:'<u>park</u>'},
        {p:'I ___ ride a bike, but I can’t rollerblade.', o:['can','do','am'], a:0, w:'<code>can</code>.', f:'I <u>can</u> ride'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['You','can','swim','at','the','mall','.'], bad:5, fix:'beach', w:'نسبح في الشاطئ.', f:'…at the <u>beach</u>.'},
        {words:['You','can','shop','at','the','beach','.'], bad:5, fix:'mall', w:'نتسوّق في المركز.', f:'…at the <u>mall</u>.'},
        {words:['We','are','hiking','in','the','sea','.'], bad:5, fix:'mountains', w:'المشي في الجبال.', f:'…in the <u>mountains</u>.'},
        {words:['A','resort','is','a','place','for','work','.'], bad:6, fix:'holidays', w:'المنتجع للعطلات.', f:'…for <u>holidays</u>.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'shop →', ask:'المكان', o:['mall','beach'], a:0, w:'المركز.', f:'<u>mall</u>'},
        {p:'swim →', ask:'المكان', o:['beach','mountain'], a:0, w:'الشاطئ.', f:'<u>beach</u>'},
        {p:'hike →', ask:'المكان', o:['mountains','mall'], a:0, w:'الجبال.', f:'<u>mountains</u>'},
        {p:'walk & play →', ask:'المكان', o:['park','bank'], a:0, w:'الحديقة.', f:'<u>park</u>'},
        {p:'move on wheels =', ask:'الفعل', o:['rollerblade','swim'], a:0, w:'يتزلّج.', f:'<u>rollerblade</u>'},
        {p:'move on ice =', ask:'الفعل', o:['ice-skate','hike'], a:0, w:'الجليد.', f:'<u>ice-skate</u>'},
        {p:'buy things =', ask:'الفعل', o:['shop','sleep'], a:0, w:'يتسوّق.', f:'<u>shop</u>'},
        {p:'holidays place with activities =', ask:'اختر', o:['resort','clinic'], a:0, w:'منتجع.', f:'<u>resort</u>'},
        {p:'walk in nature =', ask:'الفعل', o:['hike','fly'], a:0, w:'يمشي.', f:'<u>hike</u>'}
      ]}
    ]
  };
})();
