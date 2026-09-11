/* ============================================================
   درس: Vocabulary — House Designs (المنزل وتصميمه)
   الإنجليزية · الخامس الابتدائي · ف١ · Top Goal 2 · Unit 2 (House Designs)
   مفرداتُ الوحدة (حقائقُ معجميّة)، والجملُ التوضيحيّة مؤلَّفةٌ أصالةً.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG2_U2_VOCAB'] = {
    id:'EN_TG2_U2_VOCAB',
    title:'Vocabulary — House Designs',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'كلماتُ المنزل والتصميم',
      intro:'مفرداتٌ عن أجزاء <b>المنزل</b> وأدواتِ <b>التصميم</b>، تحتاجُها للحديث عن البيوت وتخطيطها.',
      table:[['architect · design · layout','مهندس معماريّ · تصميم · مخطّط'],['basement · entrance · gate','قبو · مدخل · بوّابة'],['fridge · oven · shelf','ثلّاجة · فرن · رفّ'],['key · cushion · corner','مفتاح · وسادة · زاوية']],
      examples:['The <code>architect</code> drew the <code>layout</code> of the house. (رسمَ المعماريُّ مخطّطَ البيت.)','We put the food in the <code>fridge</code>. (وضعنا الطعامَ في الثلّاجة.)'],
      trick:'اربطِ الكلمةَ بمكانها: <span class="en">basement</span> تحت البيت، و<span class="en">entrance</span> مدخلُه، و<span class="en">shelf</span> لوضع الأشياء.'
    },
    stages:[
      { type:'choice', name:'الكلمة ← المعنى', hint:'اختر المعنى العربيّ', qs:[
        {p:'architect', ask:'المعنى؟', o:['مهندس معماريّ','سائق'], a:0, w:'<code>architect</code> = معماريّ.', f:'architect ← <u>مهندس معماريّ</u>'},
        {p:'basement', ask:'المعنى؟', o:['قبو','سطح'], a:0, w:'<code>basement</code> = قبو.', f:'basement ← <u>قبو</u>'},
        {p:'oven', ask:'المعنى؟', o:['فرن','ثلّاجة'], a:0, w:'<code>oven</code> = فرن.', f:'oven ← <u>فرن</u>'},
        {p:'layout', ask:'المعنى؟', o:['مخطّط/توزيع','مفتاح'], a:0, w:'<code>layout</code> = مخطّط.', f:'layout ← <u>مخطّط</u>'}
      ]},
      { type:'choice', name:'المعنى ← الكلمة', hint:'اختر الكلمة الإنجليزية', qs:[
        {p:'مدخل', ask:'الكلمة؟', o:['entrance','corner'], a:0, w:'مدخل = <code>entrance</code>.', f:'← <u>entrance</u>'},
        {p:'ثلّاجة', ask:'الكلمة؟', o:['fridge','oven'], a:0, w:'ثلّاجة = <code>fridge</code>.', f:'← <u>fridge</u>'},
        {p:'مفتاح', ask:'الكلمة؟', o:['key','gate'], a:0, w:'مفتاح = <code>key</code>.', f:'← <u>key</u>'},
        {p:'رفّ', ask:'الكلمة؟', o:['shelf','cushion'], a:0, w:'رفّ = <code>shelf</code>.', f:'← <u>shelf</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'We keep milk in the ___ .', o:['fridge','oven','gate'], a:0, w:'الثلّاجة ← <code>fridge</code>.', f:'... the <u>fridge</u>.'},
        {p:'The ___ designed a modern house.', o:['architect','key','shelf'], a:0, w:'المعماريّ ← <code>architect</code>.', f:'The <u>architect</u> ...'},
        {p:'I put the books on the ___ .', o:['shelf','oven','gate'], a:0, w:'الرفّ ← <code>shelf</code>.', f:'... the <u>shelf</u>.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'architect', ask:'المعنى؟', o:['مهندس معماريّ','فرن'], a:0, w:'معماريّ.', f:'← <u>مهندس معماريّ</u>'},
        {p:'مدخل', ask:'الكلمة؟', o:['entrance','corner'], a:0, w:'entrance.', f:'← <u>entrance</u>'},
        {p:'We keep milk in the ___ .', ask:'اختر', o:['fridge','oven'], a:0, w:'fridge.', f:'← <u>fridge</u>'},
        {p:'oven', ask:'المعنى؟', o:['فرن','قبو'], a:0, w:'فرن.', f:'← <u>فرن</u>'},
        {p:'رفّ', ask:'الكلمة؟', o:['shelf','key'], a:0, w:'shelf.', f:'← <u>shelf</u>'}
      ]}
    ]
  };
})();
