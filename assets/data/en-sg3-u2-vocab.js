/* ============================================================
   Lesson: Vocabulary — Life Events & Biographies
   English · Super Goal 3 · Unit 2 (Life Stories) · صفحات ١٢–١٩
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U2_VOCAB'] = {
    id:'EN_SG3_U2_VOCAB',
    title:'Vocabulary — Life Stories',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'Life Events & Biography Words',
      intro:'مفرداتٌ عن أحداث الحياة والسِّيَر: <code>donate</code> يتبرّع، <code>appointment</code> موعد، <code>outstanding</code> متميّز، <code>encourage</code> يشجّع، <code>gather</code> يجتمع، <code>infant</code> رضيع، <code>abroad</code> في الخارج، <code>humanitarian</code> إنسانيّ، <code>relief</code> إغاثة، <code>appoint</code> يُعيّن، <code>metropolis</code> مدينةٌ كبرى.',
      table:[['donate','يتبرّع (للخير)'],['outstanding','متميّز / ممتاز'],['encourage','يشجّع'],['abroad','في الخارج'],['appoint','يُعيّن في منصب']],
      trick:'<code>born</code> فعلٌ مبنيٌّ للمجهول دائمًا: <code>I was born</code> لا <code>I born</code>. و<code>abroad</code> ظرفٌ (بلا <code>in</code>): <code>study abroad</code>.'
    },
    stages:[
      { type:'choice', name:'المعنى', hint:'اختر المعنى الصحيح', qs:[
        {p:'“donate” means:', o:['give to charity','sell','buy'], a:0, w:'يتبرّع.', f:'donate = <u>give to charity</u>'},
        {p:'“outstanding” means:', o:['excellent','ordinary','weak'], a:0, w:'متميّز.', f:'outstanding = <u>excellent</u>'},
        {p:'“abroad” means:', o:['in other countries','at home','nearby'], a:0, w:'في الخارج.', f:'abroad = <u>in other countries</u>'},
        {p:'A “metropolis” is a:', o:['big city','small village','farm'], a:0, w:'مدينةٌ كبرى.', f:'metropolis = <u>big city</u>'},
        {p:'“humanitarian” work helps:', o:['people in need','machines','animals only'], a:0, w:'العمل الإنسانيّ يساعد المحتاجين.', f:'humanitarian → <u>people in need</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'Trent decided to ___ blood to help others.', o:['donate','sell','waste'], a:0, w:'يتبرّع بالدم.', f:'<u>donate</u> blood'},
        {p:'Ahmed received an award for his ___ leadership.', o:['outstanding','boring','poor'], a:0, w:'قيادةٌ متميّزة.', f:'<u>outstanding</u> leadership'},
        {p:'His family really ___ him to keep playing.', o:['encouraged','stopped','forgot'], a:0, w:'شجّعوه.', f:'<u>encouraged</u> him'},
        {p:'The King founded a center for global ___.', o:['relief','traffic','noise'], a:0, w:'الإغاثة.', f:'global <u>relief</u>'},
        {p:'He was ___ Crown Prince in 2012.', o:['appointed','donated','gathered'], a:0, w:'عُيّن.', f:'was <u>appointed</u>'}
      ]},
      { type:'choice', name:'الكلمة المناسبة', hint:'اختر الأنسب', qs:[
        {p:'Employees ___ at the beach to clean it.', o:['gathered','donated','appointed'], a:0, w:'اجتمعوا.', f:'<u>gathered</u>'},
        {p:'The twins are healthy ___.', o:['infants','adults','teachers'], a:0, w:'رُضّع.', f:'<u>infants</u>'},
        {p:'Every eight weeks, Trent makes an ___ to give blood.', o:['appointment','abroad','award'], a:0, w:'موعد.', f:'<u>appointment</u>'},
        {p:'She studied ___ in the U.S. for two years.', o:['abroad','appoint','relief'], a:0, w:'في الخارج.', f:'studied <u>abroad</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['I','born','in','Madinah','.'], bad:1, fix:'was born', w:'الولادة مبنيّةٌ للمجهول ← <code>was born</code>.', f:'I <u>was born</u> in Madinah.'},
        {words:['He','studied','in','abroad','.'], bad:2, fix:'تُحذف in', w:'<code>abroad</code> ظرفٌ بلا <code>in</code>.', f:'He studied <u>abroad</u>.'},
        {words:['She','donated','blood','for','the','hospital','.'], bad:3, fix:'to', w:'<code>donate to</code>.', f:'donated blood <u>to</u> the hospital'},
        {words:['A','metropolis','is','a','small','town','.'], bad:4, fix:'big city', w:'<code>metropolis</code> = مدينةٌ كبرى.', f:'a <u>big city</u>'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'“donate” =', ask:'المعنى', o:['give to charity','sell'], a:0, w:'يتبرّع.', f:'<u>give to charity</u>'},
        {p:'“outstanding” =', ask:'المعنى', o:['excellent','ordinary'], a:0, w:'متميّز.', f:'<u>excellent</u>'},
        {p:'“abroad” =', ask:'المعنى', o:['in other countries','at home'], a:0, w:'في الخارج.', f:'<u>in other countries</u>'},
        {p:'His family ___ him.', ask:'أكمل', o:['encouraged','stopped'], a:0, w:'شجّعوه.', f:'<u>encouraged</u>'},
        {p:'a big city =', ask:'الكلمة', o:['metropolis','village'], a:0, w:'مدينةٌ كبرى.', f:'<u>metropolis</u>'},
        {p:'He was ___ Crown Prince.', ask:'أكمل', o:['appointed','gathered'], a:0, w:'عُيّن.', f:'<u>appointed</u>'},
        {p:'The people ___ at the square.', ask:'اختر', o:['gathered','donated'], a:0, w:'اجتمعوا.', f:'<u>gathered</u>'},
        {p:'I ___ in Riyadh.', ask:'أكمل', o:['was born','born'], a:0, w:'<code>was born</code>.', f:'<u>was born</u>'},
        {p:'humanitarian aid helps ___.', ask:'اختر', o:['people in need','cars'], a:0, w:'المحتاجين.', f:'<u>people in need</u>'}
      ]}
    ]
  };
})();
