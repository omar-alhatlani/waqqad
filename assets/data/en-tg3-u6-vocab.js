/* ============================================================
   درس: Vocabulary — Environments (البيئات والطبيعة)
   الإنجليزية · السادس الابتدائي · ف١ · Top Goal 3 · Unit 6 (Environments)
   مفرداتُ الوحدة (حقائقُ معجميّة)، والجملُ التوضيحيّة مؤلَّفةٌ أصالةً.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG3_U6_VOCAB'] = {
    id:'EN_TG3_U6_VOCAB',
    title:'Vocabulary — Environments',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'كلماتُ البيئات والطبيعة',
      intro:'مفرداتٌ عن <b>الطبيعة</b> و<b>الاتجاهات</b> و<b>الطقس</b>، تحتاجُها لوصف الأماكن والرحلات.',
      table:[['ocean · hill · cave · bridge','محيط · تلّة · كهف · جسر'],['north · south · east · west','شمال · جنوب · شرق · غرب'],['fog · storm · stream','ضباب · عاصفة · جدول ماء'],['deep · high · foggy · dark','عميق · عالٍ · ضبابيّ · مظلم']],
      examples:['We crossed the <code>bridge</code> over the <code>stream</code>. (عبرنا الجسرَ فوق الجدول.)','It was <code>foggy</code>, so we could not see the <code>hill</code>. (كان ضبابيًّا فلم نرَ التلّة.)'],
      trick:'اربطِ الكلمةَ بالطبيعة: <span class="en">ocean · cave · hill</span> تضاريس، و<span class="en">north · south</span> اتجاهات، و<span class="en">fog · storm</span> طقس.'
    },
    stages:[
      { type:'choice', name:'الكلمة ← المعنى', hint:'اختر المعنى العربيّ', qs:[
        {p:'ocean', ask:'المعنى؟', o:['محيط','تلّة'], a:0, w:'<code>ocean</code> = محيط.', f:'ocean ← <u>محيط</u>'},
        {p:'cave', ask:'المعنى؟', o:['كهف','جسر'], a:0, w:'<code>cave</code> = كهف.', f:'cave ← <u>كهف</u>'},
        {p:'fog', ask:'المعنى؟', o:['ضباب','عاصفة'], a:0, w:'<code>fog</code> = ضباب.', f:'fog ← <u>ضباب</u>'},
        {p:'deep', ask:'المعنى؟', o:['عميق','عالٍ'], a:0, w:'<code>deep</code> = عميق.', f:'deep ← <u>عميق</u>'}
      ]},
      { type:'choice', name:'المعنى ← الكلمة', hint:'اختر الكلمة الإنجليزية', qs:[
        {p:'شمال', ask:'الكلمة؟', o:['north','south'], a:0, w:'شمال = <code>north</code>.', f:'شمال ← <u>north</u>'},
        {p:'جسر', ask:'الكلمة؟', o:['bridge','hill'], a:0, w:'جسر = <code>bridge</code>.', f:'جسر ← <u>bridge</u>'},
        {p:'عاصفة', ask:'الكلمة؟', o:['storm','stream'], a:0, w:'عاصفة = <code>storm</code>.', f:'عاصفة ← <u>storm</u>'},
        {p:'تلّة', ask:'الكلمة؟', o:['hill','cave'], a:0, w:'تلّة = <code>hill</code>.', f:'تلّة ← <u>hill</u>'}
      ]},
      { type:'choice', name:'مكانٌ أم اتجاهٌ أم طقس؟', hint:'صنّف الكلمة', qs:[
        {p:'cave', ask:'اختر', o:['مكان/تضاريس','اتجاه'], a:0, w:'<code>cave</code> كهفٌ (تضاريس).', f:'cave ← <u>تضاريس</u>'},
        {p:'west', ask:'اختر', o:['اتجاه','طقس'], a:0, w:'<code>west</code> اتجاه.', f:'west ← <u>اتجاه</u>'},
        {p:'storm', ask:'اختر', o:['طقس','اتجاه'], a:0, w:'<code>storm</code> طقس.', f:'storm ← <u>طقس</u>'},
        {p:'ocean', ask:'اختر', o:['مكان/تضاريس','طقس'], a:0, w:'<code>ocean</code> تضاريس.', f:'ocean ← <u>تضاريس</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'The sun rises in the ___ .', o:['east','north','ocean'], a:0, w:'الشمسُ تشرقُ من الشرق ← <code>east</code>.', f:'... the <u>east</u>.'},
        {p:'We could not see because of the ___ .', o:['fog','bridge','hill'], a:0, w:'الضباب ← <code>fog</code>.', f:'... the <u>fog</u>.'},
        {p:'The ___ was too deep to cross.', o:['stream','storm','north'], a:0, w:'الجدول ← <code>stream</code>.', f:'The <u>stream</u> ...'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'ocean', ask:'المعنى؟', o:['محيط','كهف'], a:0, w:'محيط.', f:'ocean ← <u>محيط</u>'},
        {p:'جسر', ask:'الكلمة؟', o:['bridge','hill'], a:0, w:'bridge.', f:'جسر ← <u>bridge</u>'},
        {p:'west', ask:'اختر', o:['اتجاه','طقس'], a:0, w:'اتجاه.', f:'west ← <u>اتجاه</u>'},
        {p:'The sun rises in the ___ .', ask:'اختر', o:['east','ocean'], a:0, w:'east.', f:'... the <u>east</u>.'},
        {p:'fog', ask:'المعنى؟', o:['ضباب','عاصفة'], a:0, w:'ضباب.', f:'fog ← <u>ضباب</u>'}
      ]}
    ]
  };
})();
