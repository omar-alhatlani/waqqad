/* ============================================================
   درس: Vocabulary — Styles (الملابس والأزياء)
   الإنجليزية · السادس الابتدائي · ف١ · Top Goal 3 · Unit 7 (Styles)
   مفرداتُ الوحدة (حقائقُ معجميّة)، والجملُ التوضيحيّة مؤلَّفةٌ أصالةً.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG3_U7_VOCAB'] = {
    id:'EN_TG3_U7_VOCAB',
    title:'Vocabulary — Styles',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'كلماتُ الملابس والأزياء',
      intro:'مفرداتٌ عن <b>الملابس</b> وصفاتها، تحتاجُها للحديث عن الأناقة والمقاسات.',
      table:[['gloves · sneakers · pajamas','قفّازات · حذاء رياضيّ · بيجاما'],['bracelet · sunglasses · pocket','سِوار · نظّارة شمسيّة · جيب'],['baggy · slim · oversized','فضفاض · ضيّق/رشيق · كبيرٌ زائد'],['cheap · expensive · fit','رخيص · غالٍ · يُناسب (المقاس)']],
      examples:['These sneakers are <code>cheap</code> but they <code>fit</code> well. (رخيصةٌ لكنّها تُناسب.)','He wore <code>sunglasses</code> and a <code>bracelet</code>. (نظّارةً شمسيّةً وسِوارًا.)'],
      trick:'اربطِ الكلمةَ بصفتها: <span class="en">baggy</span> فضفاض و<span class="en">slim</span> ضيّق، و<span class="en">cheap</span> رخيص و<span class="en">expensive</span> غالٍ.'
    },
    stages:[
      { type:'choice', name:'الكلمة ← المعنى', hint:'اختر المعنى العربيّ', qs:[
        {p:'gloves', ask:'المعنى؟', o:['قفّازات','حذاء'], a:0, w:'<code>gloves</code> = قفّازات.', f:'gloves ← <u>قفّازات</u>'},
        {p:'expensive', ask:'المعنى؟', o:['غالٍ','رخيص'], a:0, w:'<code>expensive</code> = غالٍ.', f:'expensive ← <u>غالٍ</u>'},
        {p:'pocket', ask:'المعنى؟', o:['جيب','سِوار'], a:0, w:'<code>pocket</code> = جيب.', f:'pocket ← <u>جيب</u>'},
        {p:'baggy', ask:'المعنى؟', o:['فضفاض','ضيّق'], a:0, w:'<code>baggy</code> = فضفاض.', f:'baggy ← <u>فضفاض</u>'}
      ]},
      { type:'choice', name:'المعنى ← الكلمة', hint:'اختر الكلمة الإنجليزية', qs:[
        {p:'حذاء رياضيّ', ask:'الكلمة؟', o:['sneakers','gloves'], a:0, w:'حذاء رياضيّ = <code>sneakers</code>.', f:'حذاء رياضيّ ← <u>sneakers</u>'},
        {p:'رخيص', ask:'الكلمة؟', o:['cheap','expensive'], a:0, w:'رخيص = <code>cheap</code>.', f:'رخيص ← <u>cheap</u>'},
        {p:'نظّارة شمسيّة', ask:'الكلمة؟', o:['sunglasses','bracelet'], a:0, w:'نظّارة شمسيّة = <code>sunglasses</code>.', f:'نظّارة شمسيّة ← <u>sunglasses</u>'},
        {p:'سِوار', ask:'الكلمة؟', o:['bracelet','pocket'], a:0, w:'سِوار = <code>bracelet</code>.', f:'سِوار ← <u>bracelet</u>'}
      ]},
      { type:'choice', name:'قطعةٌ أم صفة؟', hint:'صنّف الكلمة', qs:[
        {p:'gloves', ask:'اختر', o:['قطعة ملابس','صفة'], a:0, w:'<code>gloves</code> قطعةُ ملابس.', f:'gloves ← <u>قطعة ملابس</u>'},
        {p:'expensive', ask:'اختر', o:['صفة','قطعة ملابس'], a:0, w:'<code>expensive</code> صفةٌ (غالٍ).', f:'expensive ← <u>صفة</u>'},
        {p:'sneakers', ask:'اختر', o:['قطعة ملابس','صفة'], a:0, w:'<code>sneakers</code> حذاء.', f:'sneakers ← <u>قطعة ملابس</u>'},
        {p:'slim', ask:'اختر', o:['صفة','قطعة ملابس'], a:0, w:'<code>slim</code> صفةٌ (ضيّق/رشيق).', f:'slim ← <u>صفة</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'It is cold, so wear your ___ .', o:['gloves','sunglasses','pocket'], a:0, w:'للبرد ← <code>gloves</code>.', f:'... your <u>gloves</u>.'},
        {p:'These shoes ___ me perfectly.', o:['fit','cheap','baggy'], a:0, w:'يُناسب المقاس ← <code>fit</code>.', f:'... shoes <u>fit</u> me ...'},
        {p:'This shirt is too ___ ; it is very loose.', o:['baggy','slim','expensive'], a:0, w:'فضفاضٌ واسع ← <code>baggy</code>.', f:'... too <u>baggy</u> ...'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'expensive', ask:'المعنى؟', o:['غالٍ','رخيص'], a:0, w:'غالٍ.', f:'expensive ← <u>غالٍ</u>'},
        {p:'حذاء رياضيّ', ask:'الكلمة؟', o:['sneakers','gloves'], a:0, w:'sneakers.', f:'← <u>sneakers</u>'},
        {p:'baggy', ask:'اختر', o:['صفة','قطعة ملابس'], a:0, w:'صفةٌ (فضفاض).', f:'baggy ← <u>صفة</u>'},
        {p:'It is cold, so wear your ___ .', ask:'اختر', o:['gloves','sunglasses'], a:0, w:'gloves.', f:'... <u>gloves</u>.'},
        {p:'cheap', ask:'المعنى؟', o:['رخيص','غالٍ'], a:0, w:'رخيص.', f:'cheap ← <u>رخيص</u>'}
      ]}
    ]
  };
})();
