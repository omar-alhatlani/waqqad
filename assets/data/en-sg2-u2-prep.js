/* ============================================================
   Lesson: Prepositions of Place
   English · Super Goal 2 · Unit 2 (What Are They Making?) · صفحة ١٦
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U2_PREP'] = {
    id:'EN_SG2_U2_PREP',
    title:'Prepositions of Place',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'inside · outside · in front of · behind · over · under',
      intro:'<b>حروف المكان</b> تصف موقع الشيء: <code>inside</code> داخل، <code>outside</code> خارج، <code>in front of</code> أمام، <code>behind</code> خلف، <code>over</code> فوق، <code>under</code> تحت، <code>next to</code> بجانب.',
      table:[['inside / outside','داخل / خارج'],['in front of / behind','أمام / خلف'],['over / under','فوق / تحت'],['next to','بجانب']],
      trick:'تخيّل صندوقًا: الفأر <code>inside</code> داخله، والقطّ <code>outside</code> خارجه. و<code>over</code> فوق (دون لمس غالبًا)، و<code>on</code> ملامسٌ من فوق.'
    },
    stages:[
      { type:'choice', name:'المعنى بالعربية', hint:'اختر المعنى الصحيح', qs:[
        {p:'behind', ask:'المعنى', o:['خلف','أمام','فوق','تحت'], a:0, w:'<code>behind</code> = خلف.', f:'behind = خلف.'},
        {p:'in front of', ask:'المعنى', o:['أمام','خلف','بجانب','داخل'], a:0, w:'<code>in front of</code> = أمام.', f:'in front of = أمام.'},
        {p:'under', ask:'المعنى', o:['تحت','فوق','داخل','خارج'], a:0, w:'<code>under</code> = تحت.', f:'under = تحت.'},
        {p:'inside', ask:'المعنى', o:['داخل','خارج','فوق','خلف'], a:0, w:'<code>inside</code> = داخل.', f:'inside = داخل.'},
        {p:'over', ask:'المعنى', o:['فوق','تحت','بجانب','أمام'], a:0, w:'<code>over</code> = فوق.', f:'over = فوق.'}
      ]},
      { type:'gap', name:'اختر الحرف المناسب', hint:'صف الموقع بدقّة', qs:[
        {p:'The mouse is ___ the box. (داخل)', o:['inside','outside','over','behind'], a:0, w:'داخل ← <code>inside</code>.', f:'The mouse is <u>inside</u> the box.'},
        {p:'The cat is ___ the box. (خارج)', o:['outside','inside','under','in front of'], a:0, w:'خارج ← <code>outside</code>.', f:'The cat is <u>outside</u> the box.'},
        {p:'The cat is ___ the mouse. (خلف)', o:['behind','in front of','over','inside'], a:0, w:'خلف ← <code>behind</code>.', f:'The cat is <u>behind</u> the mouse.'},
        {p:'The cameraman stands ___ the camera. (خلف)', o:['behind','inside','under','over'], a:0, w:'المصوّر خلف الكاميرا.', f:'<u>behind</u> the camera.'},
        {p:'The ball is ___ the table. (تحت)', o:['under','over','inside','behind'], a:0, w:'تحت ← <code>under</code>.', f:'<u>under</u> the table.'},
        {p:'The lamp is ___ the table. (فوق)', o:['over','under','inside','outside'], a:0, w:'فوق ← <code>over</code>.', f:'<u>over</u> the table.'}
      ]},
      { type:'choice', name:'العكس', hint:'اختر ضدّ الكلمة', qs:[
        {p:'ضدّ inside هو:', ask:'اختر', o:['outside','behind','over'], a:0, w:'داخل ↔ خارج.', f:'outside.'},
        {p:'ضدّ over هو:', ask:'اختر', o:['under','inside','in front of'], a:0, w:'فوق ↔ تحت.', f:'under.'},
        {p:'ضدّ in front of هو:', ask:'اختر', o:['behind','outside','under'], a:0, w:'أمام ↔ خلف.', f:'behind.'},
        {p:'ضدّ behind هو:', ask:'اختر', o:['in front of','over','inside'], a:0, w:'خلف ↔ أمام.', f:'in front of.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الحرف الخاطئ', qs:[
        {words:['The','cat','is','inside','the','box',' (والصواب: خارج)','.'], bad:3, fix:'outside', w:'إن كان خارجًا ← <code>outside</code>.', f:'The cat is <u>outside</u> the box.'},
        {words:['The','ball','is','over','the','table',' (والصواب: تحت)','.'], bad:3, fix:'under', w:'تحت ← <code>under</code>.', f:'The ball is <u>under</u> the table.'},
        {words:['He','stands','in front of','the','camera',' (والصواب: خلف)','.'], bad:2, fix:'behind', w:'المصوّر خلف الكاميرا.', f:'He stands <u>behind</u> the camera.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['The','mouse','is','inside','the','box','.'], w:'وصفُ الموقع.', f:'The mouse is inside the box.'},
        {sol:['The','cat','is','behind','the','mouse','.'], w:'خلف.', f:'The cat is behind the mouse.'},
        {sol:['The','lamp','is','over','the','table','.'], w:'فوق.', f:'The lamp is over the table.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'behind', ask:'المعنى', o:['خلف','أمام'], a:0, w:'خلف.', f:'behind = خلف.'},
        {p:'The mouse is ___ the box. (داخل)', ask:'اختر', o:['inside','outside'], a:0, w:'داخل.', f:'<u>inside</u>.'},
        {p:'ضدّ over هو:', ask:'اختر', o:['under','inside'], a:0, w:'تحت.', f:'under.'},
        {p:'under', ask:'المعنى', o:['تحت','فوق'], a:0, w:'تحت.', f:'under = تحت.'},
        {p:'The cat is ___ the box. (خارج)', ask:'اختر', o:['outside','inside'], a:0, w:'خارج.', f:'<u>outside</u>.'},
        {p:'in front of', ask:'المعنى', o:['أمام','خلف'], a:0, w:'أمام.', f:'in front of = أمام.'},
        {sol:['The','cat','is','behind','the','mouse','.'], w:'خلف.', f:'The cat is behind the mouse.'},
        {p:'ضدّ inside هو:', ask:'اختر', o:['outside','over'], a:0, w:'خارج.', f:'outside.'},
        {p:'The ball is ___ the table. (تحت)', ask:'اختر', o:['under','over'], a:0, w:'تحت.', f:'<u>under</u>.'}
      ]}
    ]
  };
})();
