/* ============================================================
   Lesson: So…that / Such…that
   English · Super Goal 2 · Unit 11 (There's No Comparison) · صفحة ١٠٠
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U11_SOTHAT'] = {
    id:'EN_SG2_U11_SOTHAT',
    title:'So…that / Such…that',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'so + adjective + that · such + (a) noun + that',
      intro:'نستعمل <code>so … that</code> و<code>such … that</code> لبيان النتيجة. القاعدة: <b>so + صفة</b> (<code>so expensive that…</code>)، و<b>such + (a/an) + (صفة) + اسم</b> (<code>such an expensive phone that…</code>). ثمّ <code>that + النتيجة</code>.',
      table:[['so + adjective','It was so cheap that I bought two.'],['such + a + noun','It’s such a good deal that…'],['so + much/many','so many people that…'],['result','that + النتيجة']],
      trick:'التذكّرُ سهل: <code>so</code> تسبق <b>الصفة وحدها</b>، و<code>such</code> تسبق <b>الاسم (مع a/an والصفة)</b>. <code>so expensive</code> ↔ <code>such an expensive one</code>.'
    },
    stages:[
      { type:'choice', name:'so + adjective', hint:'قبل الصفة وحدها', qs:[
        {p:'It was ___ cheap that I bought two.', o:['so','such','such a','very much'], a:0, w:'قبل الصفة ← <code>so</code>.', f:'<u>so</u> cheap that…'},
        {p:'The bag was ___ small that nothing fit.', o:['so','such','such a','too'], a:0, w:'<code>so + صفة</code>.', f:'<u>so</u> small that…'},
        {p:'The phone is ___ expensive that I can’t buy it.', o:['so','such','such an','very'], a:0, w:'<code>so + صفة</code>.', f:'<u>so</u> expensive that…'},
        {p:'“so” comes before an:', o:['adjective','noun','article'], a:0, w:'الصفة.', f:'an <u>adjective</u>'}
      ]},
      { type:'choice', name:'such + (a) + noun', hint:'قبل الاسم', qs:[
        {p:'It was ___ good deal that I bought it.', o:['such a','so','so a','such'], a:0, w:'<code>such a + اسم</code>.', f:'<u>such a</u> good deal…'},
        {p:'They are ___ nice shoes that everyone wants them.', o:['such','so','such a','so much'], a:0, w:'جمعٌ ← <code>such</code> بلا <code>a</code>.', f:'<u>such</u> nice shoes…'},
        {p:'It’s ___ expensive phone that few can buy it.', o:['such an','so','such a','so an'], a:0, w:'يبدأ بحرف علّة ← <code>such an</code>.', f:'<u>such an</u> expensive phone…'},
        {p:'“such” comes before a:', o:['noun','adjective alone','verb'], a:0, w:'الاسم.', f:'a <u>noun</u>'}
      ]},
      { type:'choice', name:'so much / so many', hint:'مع الكمّيات', qs:[
        {p:'There were ___ people that we couldn’t enter.', o:['so many','so much','such'], a:0, w:'معدود ← <code>so many</code>.', f:'<u>so many</u> people'},
        {p:'There was ___ noise that I left.', o:['so much','so many','such a'], a:0, w:'غير معدود ← <code>so much</code>.', f:'<u>so much</u> noise'},
        {p:'The result clause begins with:', o:['that','than','then'], a:0, w:'<code>that + النتيجة</code>.', f:'<u>that</u>'},
        {p:'so expensive = such ___ expensive one', o:['an','a','the'], a:0, w:'قبل حرف علّة ← <code>an</code>.', f:'such <u>an</u> expensive one'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['It','was','such','cheap','that','I','bought','two','.'], bad:2, fix:'so', w:'قبل الصفة وحدها ← <code>so</code>.', f:'It was <u>so</u> cheap that…'},
        {words:['It’s','so','a','good','deal','.'], bad:1, fix:'such', w:'قبل الاسم ← <code>such a</code>.', f:'It’s <u>such</u> a good deal.'},
        {words:['There','were','so','much','people','.'], bad:3, fix:'many', w:'معدود ← <code>so many</code>.', f:'<u>so many</u> people'},
        {words:['It’s','such','a','expensive','phone','.'], bad:2, fix:'an', w:'قبل حرف علّة ← <code>an</code>.', f:'such <u>an</u> expensive phone'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['It','was','so','cheap','that','I','bought','two','.'], w:'<code>so + صفة + that</code>.', f:'It was so cheap that I bought two.'},
        {sol:['It','was','such','a','good','deal','.'], w:'<code>such a + اسم</code>.', f:'It was such a good deal.'},
        {sol:['There','were','so','many','people','.'], w:'<code>so many + معدود</code>.', f:'There were so many people.'},
        {sol:['It’s','such','an','expensive','phone','.'], w:'<code>such an</code>.', f:'It’s such an expensive phone.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'It was ___ cheap that…', ask:'اختر', o:['so','such'], a:0, w:'قبل الصفة.', f:'<u>so</u>'},
        {p:'It was ___ good deal.', ask:'اختر', o:['such a','so'], a:0, w:'قبل الاسم.', f:'<u>such a</u>'},
        {p:'There were ___ people.', ask:'اختر', o:['so many','so much'], a:0, w:'معدود.', f:'<u>so many</u>'},
        {p:'There was ___ noise.', ask:'اختر', o:['so much','so many'], a:0, w:'غير معدود.', f:'<u>so much</u>'},
        {p:'“so” comes before an ___.', ask:'اختر', o:['adjective','noun'], a:0, w:'الصفة.', f:'<u>adjective</u>'},
        {p:'“such” comes before a ___.', ask:'اختر', o:['noun','adjective'], a:0, w:'الاسم.', f:'<u>noun</u>'},
        {sol:['It','was','so','cheap','that','I','bought','it','.'], w:'<code>so + صفة</code>.', f:'It was so cheap that I bought it.'},
        {p:'such ___ expensive phone', ask:'اختر', o:['an','a'], a:0, w:'حرف علّة.', f:'<u>an</u>'},
        {p:'The result clause starts with ___.', ask:'اختر', o:['that','than'], a:0, w:'<code>that</code>.', f:'<u>that</u>'}
      ]}
    ]
  };
})();
