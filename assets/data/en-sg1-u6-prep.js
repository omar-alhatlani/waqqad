/* ============================================================
   Lesson: Grammar — Prepositions of place & Conjunctions
   English · Super Goal 1 · Unit 6 (Is There a View?) · صفحات ٥٠، ٥٥
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1).
   lang:'en' → المحتوى إنجليزيّ LTR، والشرح بالعربية.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U6_PREP'] = {
    id:'EN_SG1_U6_PREP',
    title:'Grammar — حروف المكان و and/but/or',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'Prepositions & Conjunctions',
      intro:'حروف المكان تحدّد موضع الشيء: <code>in</code> داخل، <code>on</code> على، <code>under</code> تحت، <code>in front of</code> أمام، <code>behind</code> خلف. وحروف العطف: <code>and</code> للتشابه، <code>but</code> للتضادّ، <code>or</code> للاختيار.',
      table:[['in · on · under','داخل · على · تحت'],['in front of','أمام'],['behind','خلف'],['and · but · or','و · لكن · أو']],
      examples:['The cat is on the balcony.','The mouse is in the box.','The mouse is under the balcony.',"I can speak English, but I can't speak French."],
      trick:'<code>and</code> يجمع المتشابه، و<code>but</code> يربط المتضادّ، و<code>or</code> للاختيار.'
    },
    stages:[
      { type:'choice', name:'حرف المكان', hint:'أين يقع الشيء؟', qs:[
        {p:'The mouse is ___ the box.  (داخل)',        ask:'اختر الحرف', o:['in','on','under','behind'], a:0, w:'داخل ← <code>in</code>.', f:'in the box'},
        {p:'The cat is ___ the balcony.  (على)',        ask:'اختر الحرف', o:['on','in','under','behind'], a:0, w:'على ← <code>on</code>.', f:'on the balcony'},
        {p:'The mouse is ___ the balcony.  (تحت)',      ask:'اختر الحرف', o:['under','on','in','behind'], a:0, w:'تحت ← <code>under</code>.', f:'under the balcony'},
        {p:'The cat is ___ the mouse.  (خلف)',          ask:'اختر الحرف', o:['behind','on','in','under'], a:0, w:'خلف ← <code>behind</code>.', f:'behind the mouse'},
        {p:'The mouse is ___ the cat.  (أمام)',          ask:'اختر الحرف', o:['in front of','on','under','behind'], a:0, w:'أمام ← <code>in front of</code>.', f:'in front of the cat'},
        {p:'The book is ___ the table.  (على)',          ask:'اختر الحرف', o:['on','in','under','behind'], a:0, w:'على ← <code>on</code>.', f:'on the table'}
      ]},
      { type:'gap', name:'في البيت', hint:'اختر الحرف المناسب', qs:[
        {p:'There is a rug ___ the bedroom.',   ask:'أكمل (داخل)', o:['in','on','under','behind'], a:0, w:'داخل ← <code>in</code>.', f:'a rug <u>in</u> the bedroom.'},
        {p:'The lamp is ___ the desk.  (على)',    ask:'أكمل', o:['on','in','under','behind'], a:0, w:'على ← <code>on</code>.', f:'the lamp is <u>on</u> the desk.'},
        {p:'The shoes are ___ the bed.  (تحت)',   ask:'أكمل', o:['under','on','in','behind'], a:0, w:'تحت ← <code>under</code>.', f:'... <u>under</u> the bed.'},
        {p:"There's a garden ___ the house.  (أمام)", ask:'أكمل', o:['in front of','on','under','in'], a:0, w:'أمام ← <code>in front of</code>.', f:'a garden <u>in front of</u> the house.'},
        {p:'There are trees ___ the house.  (خلف)', ask:'أكمل', o:['behind','on','under','in'], a:0, w:'خلف ← <code>behind</code>.', f:'trees <u>behind</u> the house.'},
        {p:'The vase is ___ the table.',           ask:'أكمل (على)', o:['on','in','under','behind'], a:0, w:'على ← <code>on</code>.', f:'the vase is <u>on</u> the table.'}
      ]},
      { type:'choice', name:'and / but / or', hint:'تشابه · تضادّ · اختيار', qs:[
        {p:'The kitchen is big ___ modern.',            ask:'اختر الحرف', o:['and','but','or'], a:0, w:'تشابه ← <code>and</code>.', f:'big and modern'},
        {p:'My room is small ___ comfortable.',          ask:'اختر الحرف', o:['but','and','or'], a:0, w:'تضادّ ← <code>but</code>.', f:'small but comfortable'},
        {p:'You can sit on the sofa ___ the armchair.',   ask:'اختر الحرف', o:['or','and','but'], a:0, w:'اختيار ← <code>or</code>.', f:'the sofa or the armchair'},
        {p:'There is a bed ___ a desk in my room.',       ask:'اختر الحرف', o:['and','but','or'], a:0, w:'جمع/تشابه ← <code>and</code>.', f:'a bed and a desk'},
        {p:"I can speak English, ___ I can't speak French.", ask:'اختر الحرف', o:['but','and','or'], a:0, w:'تضادّ ← <code>but</code>.', f:'... but I can\'t speak French.'},
        {p:'Write the word ___ draw a picture.',          ask:'اختر الحرف', o:['or','and','but'], a:0, w:'اختيار ← <code>or</code>.', f:'the word or a picture'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['The','cat','is','on','the','sofa','.'],       w:'حرف المكان <code>on</code>.', f:'The cat is on the sofa.'},
        {sol:['The','book','is','under','the','bed','.'],     w:'حرف المكان <code>under</code>.', f:'The book is under the bed.'},
        {sol:['It','is','small','but','comfortable','.'],     w:'حرف العطف <code>but</code>.', f:'It is small but comfortable.'},
        {sol:['There','is','a','bed','and','a','desk','.'],   w:'حرف العطف <code>and</code>.', f:'There is a bed and a desk.'},
        {sol:['The','mouse','is','in','the','box','.'],       w:'حرف المكان <code>in</code>.', f:'The mouse is in the box.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'The mouse is ___ the box.  (داخل)', ask:'اختر الحرف', o:['in','on','under','behind'], a:0, w:'داخل ← <code>in</code>.', f:'in the box'},
        {p:'My room is small ___ comfortable.', ask:'اختر الحرف', o:['but','and','or'], a:0, w:'تضادّ ← <code>but</code>.', f:'small but comfortable'},
        {p:'The cat is ___ the balcony.  (على)', ask:'اختر الحرف', o:['on','in','under','behind'], a:0, w:'على ← <code>on</code>.', f:'on the balcony'},
        {p:'You can sit on the sofa ___ the armchair.', ask:'اختر الحرف', o:['or','and','but'], a:0, w:'اختيار ← <code>or</code>.', f:'sofa or armchair'},
        {p:'The shoes are ___ the bed.  (تحت)', ask:'أكمل', o:['under','on','in','behind'], a:0, w:'تحت ← <code>under</code>.', f:'<u>under</u> the bed.'},
        {sol:['The','cat','is','on','the','sofa','.'], w:'حرف المكان <code>on</code>.', f:'The cat is on the sofa.'},
        {p:'There is a bed ___ a desk in my room.', ask:'اختر الحرف', o:['and','but','or'], a:0, w:'تشابه ← <code>and</code>.', f:'a bed and a desk'},
        {p:"There's a garden ___ the house.  (أمام)", ask:'أكمل', o:['in front of','on','under','in'], a:0, w:'أمام ← <code>in front of</code>.', f:'<u>in front of</u> the house.'},
        {sol:['It','is','small','but','comfortable','.'], w:'حرف العطف <code>but</code>.', f:'It is small but comfortable.'}
      ]}
    ]
  };
})();
