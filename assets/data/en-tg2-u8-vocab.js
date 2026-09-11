/* ============================================================
   درس: Vocabulary — Outfits (الملابس والخامات)
   الإنجليزية · الخامس الابتدائي · ف١ · Top Goal 2 · Unit 8 (Outfits)
   مفرداتُ الوحدة (حقائقُ معجميّة)، والجملُ التوضيحيّة مؤلَّفةٌ أصالةً.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG2_U8_VOCAB'] = {
    id:'EN_TG2_U8_VOCAB',
    title:'Vocabulary — Outfits',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'الملابسُ وخاماتُها',
      intro:'مفرداتٌ عن <b>الملابس والإكسسوارات</b> و<b>الخامات</b>، تحتاجُها لوصف الأزياء.',
      table:[['belt · tie · uniform','حزام · ربطة عنق · زيّ موحّد'],['necklace · bracelet · ring','عقد · سِوار · خاتم'],['umbrella · purse','مظلّة · حقيبة يد'],['cotton · silk · leather · wool','قطن · حرير · جلد · صوف']],
      examples:['She wore a <code>silk</code> dress and a gold <code>necklace</code>. (فستانًا حريريًّا وعقدًا ذهبيًّا.)','This belt is made of <code>leather</code>. (هذا الحزامُ من الجلد.)'],
      trick:'اربطِ الخامةَ بمصدرها: <span class="en">cotton</span> قطن، و<span class="en">wool</span> صوف، و<span class="en">leather</span> جلد، و<span class="en">silk</span> حرير.'
    },
    stages:[
      { type:'choice', name:'الكلمة ← المعنى', hint:'اختر المعنى العربيّ', qs:[
        {p:'belt', ask:'المعنى؟', o:['حزام','خاتم'], a:0, w:'<code>belt</code> = حزام.', f:'belt ← <u>حزام</u>'},
        {p:'necklace', ask:'المعنى؟', o:['عقد','سِوار'], a:0, w:'<code>necklace</code> = عقد.', f:'necklace ← <u>عقد</u>'},
        {p:'leather', ask:'المعنى؟', o:['جلد','قطن'], a:0, w:'<code>leather</code> = جلد.', f:'leather ← <u>جلد</u>'},
        {p:'uniform', ask:'المعنى؟', o:['زيّ موحّد','مظلّة'], a:0, w:'<code>uniform</code> = زيّ موحّد.', f:'uniform ← <u>زيّ موحّد</u>'}
      ]},
      { type:'choice', name:'المعنى ← الكلمة', hint:'اختر الكلمة الإنجليزية', qs:[
        {p:'خاتم', ask:'الكلمة؟', o:['ring','belt'], a:0, w:'خاتم = <code>ring</code>.', f:'← <u>ring</u>'},
        {p:'حرير', ask:'الكلمة؟', o:['silk','wool'], a:0, w:'حرير = <code>silk</code>.', f:'← <u>silk</u>'},
        {p:'مظلّة', ask:'الكلمة؟', o:['umbrella','purse'], a:0, w:'مظلّة = <code>umbrella</code>.', f:'← <u>umbrella</u>'},
        {p:'صوف', ask:'الكلمة؟', o:['wool','cotton'], a:0, w:'صوف = <code>wool</code>.', f:'← <u>wool</u>'}
      ]},
      { type:'choice', name:'قطعةٌ أم خامة؟', hint:'صنّف الكلمة', qs:[
        {p:'cotton', ask:'اختر', o:['خامة','قطعة ملابس'], a:0, w:'<code>cotton</code> خامةٌ (قطن).', f:'cotton ← <u>خامة</u>'},
        {p:'necklace', ask:'اختر', o:['قطعة/إكسسوار','خامة'], a:0, w:'<code>necklace</code> عقدٌ (إكسسوار).', f:'necklace ← <u>قطعة/إكسسوار</u>'},
        {p:'wool', ask:'اختر', o:['خامة','قطعة ملابس'], a:0, w:'<code>wool</code> خامةٌ (صوف).', f:'wool ← <u>خامة</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'This shirt is made of ___ . (قطن)', o:['cotton','ring','belt'], a:0, w:'قطن ← <code>cotton</code>.', f:'... of <u>cotton</u>.'},
        {p:'She wore a gold ___ . (عقد)', o:['necklace','umbrella','uniform'], a:0, w:'عقد ← <code>necklace</code>.', f:'... a gold <u>necklace</u>.'},
        {p:'Take an ___ ; it is raining. (مظلّة)', o:['umbrella','belt','tie'], a:0, w:'مظلّة ← <code>umbrella</code>.', f:'Take an <u>umbrella</u> ...'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'belt', ask:'المعنى؟', o:['حزام','خاتم'], a:0, w:'حزام.', f:'← <u>حزام</u>'},
        {p:'حرير', ask:'الكلمة؟', o:['silk','wool'], a:0, w:'silk.', f:'← <u>silk</u>'},
        {p:'leather', ask:'المعنى؟', o:['جلد','قطن'], a:0, w:'جلد.', f:'← <u>جلد</u>'},
        {p:'This shirt is made of ___ .', ask:'اختر', o:['cotton','ring'], a:0, w:'cotton.', f:'← <u>cotton</u>'},
        {p:'cotton', ask:'اختر', o:['خامة','قطعة ملابس'], a:0, w:'خامة.', f:'← <u>خامة</u>'}
      ]}
    ]
  };
})();
