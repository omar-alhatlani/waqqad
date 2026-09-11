/* ============================================================
   درس: Vocabulary — Family Events
   الإنجليزية · الرابع الابتدائي · ف١ · Top Goal 1 · Unit 1 (Family Events)
   مفرداتُ الوحدة (حقائقُ معجميّة)، والجملُ التوضيحيّة مؤلَّفةٌ أصالةً.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG1_U1_VOCAB'] = {
    id:'EN_TG1_U1_VOCAB',
    title:'Vocabulary — Family Events',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'كلماتُ العائلةِ والمناسبات',
      intro:'مفرداتٌ عن <b>أفرادِ العائلةِ وصفاتِهم والمناسبات</b>. أتقِنْ معناها لتصفَ عائلتَك وتتحدّثَ عن مناسباتِكم.',
      table:[['aunt · uncle · cousin','عمّة/خالة · عمّ/خال · ابن العمّ/الخال'],['parent · grandparent','أحد الوالدين · الجَدّ/الجَدّة'],['son · daughter','ابن · ابنة'],['kind · helpful · strong','لطيف · مُعِين · قويّ'],['celebrate · celebration','يحتفل · احتفال']],
      examples:['My <code>uncle</code> is very <code>kind</code>. (عمّي لطيفٌ جدًّا.)','We <code>celebrate</code> National Day every year. (نحتفلُ باليوم الوطنيّ كلَّ عام.)'],
      trick:'اربطِ الكلمةَ بعائلتك: <span class="en">aunt</span> أختُ أحدِ الوالدين، و<span class="en">cousin</span> ابنُ العمِّ أو الخال.'
    },
    stages:[
      { type:'choice', name:'الكلمة ← المعنى', hint:'اختر المعنى العربيّ', qs:[
        {p:'aunt', ask:'المعنى؟', o:['عمّة/خالة','ابنة'], a:0, w:'<code>aunt</code> = عمّة/خالة.', f:'aunt ← <u>عمّة/خالة</u>'},
        {p:'cousin', ask:'المعنى؟', o:['ابن العمّ/الخال','الجَدّ'], a:0, w:'<code>cousin</code> = ابنُ العمّ/الخال.', f:'cousin ← <u>ابن العمّ/الخال</u>'},
        {p:'daughter', ask:'المعنى؟', o:['ابنة','ابن'], a:0, w:'<code>daughter</code> = ابنة.', f:'daughter ← <u>ابنة</u>'},
        {p:'kind', ask:'المعنى؟', o:['لطيف','قويّ'], a:0, w:'<code>kind</code> = لطيف.', f:'kind ← <u>لطيف</u>'},
        {p:'celebrate', ask:'المعنى؟', o:['يحتفل','ينام'], a:0, w:'<code>celebrate</code> = يحتفل.', f:'celebrate ← <u>يحتفل</u>'}
      ]},
      { type:'choice', name:'المعنى ← الكلمة', hint:'اختر الكلمة الإنجليزية', qs:[
        {p:'عمّ / خال', ask:'الكلمة؟', o:['uncle','aunt'], a:0, w:'عمّ/خال = <code>uncle</code>.', f:'عمّ/خال ← <u>uncle</u>'},
        {p:'ابن', ask:'الكلمة؟', o:['son','daughter'], a:0, w:'ابن = <code>son</code>.', f:'ابن ← <u>son</u>'},
        {p:'قويّ', ask:'الكلمة؟', o:['strong','weak'], a:0, w:'قويّ = <code>strong</code>.', f:'قويّ ← <u>strong</u>'},
        {p:'مُعِين (يساعد)', ask:'الكلمة؟', o:['helpful','lazy'], a:0, w:'مُعِين = <code>helpful</code>.', f:'مُعِين ← <u>helpful</u>'},
        {p:'احتفال', ask:'الكلمة؟', o:['celebration','event'], a:0, w:'احتفال = <code>celebration</code>.', f:'احتفال ← <u>celebration</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'My father’s brother is my ___ .', o:['uncle','aunt','cousin'], a:0, w:'أخو الأبِ ← <code>uncle</code>.', f:'... my <u>uncle</u>.'},
        {p:'We ___ Eid with our family.', o:['celebrate','sleep','read'], a:0, w:'نحتفلُ بالعيد ← <code>celebrate</code>.', f:'We <u>celebrate</u> Eid ...'},
        {p:'My uncle’s son is my ___ .', o:['cousin','uncle','aunt'], a:0, w:'ابنُ العمّ/الخال ← <code>cousin</code>.', f:'... my <u>cousin</u>.'},
        {p:'A ___ person likes to help others.', o:['helpful','lazy','tired'], a:0, w:'المُعِينُ يحبُّ المساعدة ← <code>helpful</code>.', f:'A <u>helpful</u> person ...'}
      ]},
      { type:'error', name:'الكلمة الغريبة', hint:'انقر الكلمة التي لا تنتمي', qs:[
        {words:['aunt','uncle','cousin','celebrate'], bad:3, fix:'مثال: parent', w:'<code>celebrate</code> فعلٌ، والبقيّةُ أفرادُ عائلة.', f:'aunt · uncle · cousin · <u>celebrate</u> (فعل)'},
        {words:['kind','helpful','strong','son'], bad:3, fix:'مثال: chatty', w:'<code>son</code> فردُ عائلة، والبقيّةُ صفات.', f:'kind · helpful · strong · <u>son</u> (ليست صفة)'},
        {words:['son','daughter','grandparent','celebration'], bad:3, fix:'مثال: cousin', w:'<code>celebration</code> مناسبة، والبقيّةُ أفراد.', f:'... · <u>celebration</u> (مناسبة لا فرد)'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'uncle', ask:'المعنى؟', o:['عمّ/خال','عمّة/خالة'], a:0, w:'<code>uncle</code> = عمّ/خال.', f:'uncle ← <u>عمّ/خال</u>'},
        {p:'لطيف', ask:'الكلمة؟', o:['kind','strong'], a:0, w:'لطيف = <code>kind</code>.', f:'لطيف ← <u>kind</u>'},
        {p:'We ___ our grandmother’s birthday.', ask:'اختر', o:['celebrate','sleep'], a:0, w:'نحتفل ← celebrate.', f:'We <u>celebrate</u> ...'},
        {p:'daughter', ask:'المعنى؟', o:['ابنة','ابن'], a:0, w:'<code>daughter</code> = ابنة.', f:'daughter ← <u>ابنة</u>'},
        {p:'احتفال', ask:'الكلمة؟', o:['celebration','celebrate'], a:0, w:'احتفال (اسم) = <code>celebration</code>.', f:'احتفال ← <u>celebration</u>'}
      ]}
    ]
  };
})();
