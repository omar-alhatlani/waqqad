/* ============================================================
   درس: Vocabulary — Wildlife (animals)
   الإنجليزية · الرابع الابتدائي · ف١ · Top Goal 1 · Unit 7 (Wildlife)
   مفرداتُ الوحدة (حقائقُ معجميّة)، والجملُ التوضيحيّة مؤلَّفةٌ أصالةً.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG1_U7_VOCAB'] = {
    id:'EN_TG1_U7_VOCAB',
    title:'Vocabulary — Wildlife',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'الحيواناتُ البرّيّة',
      intro:'مفرداتٌ عن <b>الحيواناتِ البرّيّةِ وصفاتِها وأماكنِها</b>. أتقِنْها لتتحدّثَ عن الحياةِ الفطريّة.',
      table:[['lion · tiger · panda','أسد · نمر · باندا'],['elephant · giraffe','فيل · زرافة'],['kangaroo · parrot','كنغر · ببغاء'],['polar bear','دبٌّ قطبيّ'],['jungle · cage','أدغال · قفص'],['brave · friendly · fast','شجاع · ودود · سريع']],
      examples:['The <code>lion</code> is a <code>brave</code> animal. (الأسدُ حيوانٌ شجاع.)','A <code>parrot</code> can be very <code>friendly</code>. (الببغاءُ قد يكونُ ودودًا جدًّا.)'],
      trick:'اربطِ الحيوانَ بمكانِه: <span class="en">polar bear</span> في القطبِ البارد، و<span class="en">kangaroo</span> في أستراليا، و<span class="en">lion</span> في الأدغال.'
    },
    stages:[
      { type:'choice', name:'الكلمة ← المعنى', hint:'اختر المعنى العربيّ', qs:[
        {p:'lion', ask:'المعنى؟', o:['أسد','نمر'], a:0, w:'<code>lion</code> = أسد.', f:'← <u>أسد</u>'},
        {p:'elephant', ask:'المعنى؟', o:['فيل','زرافة'], a:0, w:'<code>elephant</code> = فيل.', f:'← <u>فيل</u>'},
        {p:'kangaroo', ask:'المعنى؟', o:['كنغر','ببغاء'], a:0, w:'<code>kangaroo</code>.', f:'← <u>كنغر</u>'},
        {p:'brave', ask:'المعنى؟', o:['شجاع','سريع'], a:0, w:'<code>brave</code> = شجاع.', f:'← <u>شجاع</u>'},
        {p:'jungle', ask:'المعنى؟', o:['أدغال','قفص'], a:0, w:'<code>jungle</code> = أدغال.', f:'← <u>أدغال</u>'}
      ]},
      { type:'choice', name:'المعنى ← الكلمة', hint:'اختر الإنجليزية', qs:[
        {p:'زرافة', ask:'الكلمة؟', o:['giraffe','elephant'], a:0, w:'<code>giraffe</code>.', f:'← <u>giraffe</u>'},
        {p:'ببغاء', ask:'الكلمة؟', o:['parrot','panda'], a:0, w:'<code>parrot</code>.', f:'← <u>parrot</u>'},
        {p:'دبٌّ قطبيّ', ask:'الكلمة؟', o:['polar bear','tiger'], a:0, w:'<code>polar bear</code>.', f:'← <u>polar bear</u>'},
        {p:'ودود', ask:'الكلمة؟', o:['friendly','fast'], a:0, w:'<code>friendly</code>.', f:'← <u>friendly</u>'},
        {p:'قفص', ask:'الكلمة؟', o:['cage','jungle'], a:0, w:'<code>cage</code>.', f:'← <u>cage</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'The ___ has a very long neck.', o:['giraffe','lion','parrot'], a:0, w:'الرقبةُ الطويلةُ للزرافة ← <code>giraffe</code>.', f:'The <u>giraffe</u> has a long neck.'},
        {p:'A ___ lives in cold, icy places.', o:['polar bear','kangaroo','tiger'], a:0, w:'الدبُّ القطبيُّ في البرد ← <code>polar bear</code>.', f:'A <u>polar bear</u> lives in cold places.'},
        {p:'The ___ is the king of the jungle.', o:['lion','panda','parrot'], a:0, w:'الأسدُ ملكُ الغابة ← <code>lion</code>.', f:'The <u>lion</u> is the king ...'},
        {p:'A ___ can copy words it hears.', o:['parrot','elephant','lion'], a:0, w:'الببغاءُ يقلّدُ الكلام ← <code>parrot</code>.', f:'A <u>parrot</u> can copy words.'}
      ]},
      { type:'error', name:'الكلمة الغريبة', hint:'انقر ما لا ينتمي', qs:[
        {words:['lion','tiger','panda','cage'], bad:3, fix:'مثال: parrot', w:'<code>cage</code> مكانٌ، والبقيّةُ حيوانات.', f:'... · <u>cage</u> (مكان)'},
        {words:['brave','friendly','fast','jungle'], bad:3, fix:'مثال: slow', w:'<code>jungle</code> مكانٌ، والبقيّةُ صفات.', f:'... · <u>jungle</u> (مكان)'},
        {words:['elephant','giraffe','kangaroo','brave'], bad:3, fix:'مثال: parrot', w:'<code>brave</code> صفةٌ، والبقيّةُ حيوانات.', f:'... · <u>brave</u> (صفة)'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'tiger', ask:'المعنى؟', o:['نمر','أسد'], a:0, w:'نمر.', f:'← <u>نمر</u>'},
        {p:'فيل', ask:'الكلمة؟', o:['elephant','giraffe'], a:0, w:'elephant.', f:'← <u>elephant</u>'},
        {p:'The ___ jumps and carries its baby in a pouch.', ask:'اختر', o:['kangaroo','lion'], a:0, w:'الكنغر.', f:'The <u>kangaroo</u> ...'},
        {p:'friendly', ask:'المعنى؟', o:['ودود','شجاع'], a:0, w:'ودود.', f:'← <u>ودود</u>'},
        {p:'أدغال', ask:'الكلمة؟', o:['jungle','cage'], a:0, w:'jungle.', f:'← <u>jungle</u>'}
      ]}
    ]
  };
})();
