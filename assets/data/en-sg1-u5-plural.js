/* ============================================================
   Lesson: Grammar — Plural Nouns & Possessive 's
   English · Super Goal 1 · Unit 5 (Families, Families) · صفحات ٤٢، ٤٧
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1).
   lang:'en' → المحتوى إنجليزيّ LTR، والشرح بالعربية.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U5_PLURAL'] = {
    id:'EN_SG1_U5_PLURAL',
    title:"Grammar — الجمع والملكية 's",
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:"Plurals & Possessive 's",
      intro:"الجمع غالبًا بإضافة <code>-s</code>. وبعد s, ss, sh, ch, x نضيف <code>-es</code>. والساكن+y يصير <code>-ies</code>. وبعض الكلمات شاذّة. والملكية بإضافة <code>'s</code> للمفرد و<code>'</code> بعد جمعٍ ينتهي بـ s.",
      table:[['+ s','book → books'],['+ es','box → boxes'],['y → ies','family → families'],['شاذّ','child → children']],
      examples:['book → books · boy → boys','box → boxes · dish → dishes','baby → babies · city → cities','man → men · child → children · person → people'],
      trick:"شواذّ: <code>man→men</code>, <code>woman→women</code>, <code>child→children</code>, <code>tooth→teeth</code>, <code>foot→feet</code>, <code>person→people</code>. والملكية: <code>Ahmed's book</code> (مفرد)، <code>my brothers' names</code> (جمع)."
    },
    stages:[
      { type:'choice', name:'الجمع المنتظم', hint:'اختر صيغة الجمع الصحيحة', qs:[
        {p:'book →',   ask:'الجمع', o:['books','bookes','bookies','book'], a:0, w:'إضافة <code>-s</code>.', f:'books'},
        {p:'box →',    ask:'الجمع', o:['boxes','boxs','boxies','boxen'], a:0, w:'بعد x ← <code>-es</code>.', f:'boxes'},
        {p:'family →', ask:'الجمع', o:['families','familys','familyes','familie'], a:0, w:'ساكن+y ← <code>-ies</code>.', f:'families'},
        {p:'dish →',   ask:'الجمع', o:['dishes','dishs','dishies','dish'], a:0, w:'بعد sh ← <code>-es</code>.', f:'dishes'},
        {p:'key →',    ask:'الجمع', o:['keys','kies','keyes','key'], a:0, w:'علّة+y ← <code>-s</code>.', f:'keys'},
        {p:'city →',   ask:'الجمع', o:['cities','citys','cityes','citie'], a:0, w:'ساكن+y ← <code>-ies</code>.', f:'cities'}
      ]},
      { type:'choice', name:'الجمع الشاذّ', hint:'كلماتٌ لا تتبع القاعدة', qs:[
        {p:'man →',    ask:'الجمع الشاذّ', o:['men','mans','mens','man'], a:0, w:'شاذّ ← <code>men</code>.', f:'men'},
        {p:'woman →',  ask:'الجمع الشاذّ', o:['women','womans','womens','woming'], a:0, w:'شاذّ ← <code>women</code>.', f:'women'},
        {p:'child →',  ask:'الجمع الشاذّ', o:['children','childs','childes','childrens'], a:0, w:'شاذّ ← <code>children</code>.', f:'children'},
        {p:'tooth →',  ask:'الجمع الشاذّ', o:['teeth','tooths','toothes','tooth'], a:0, w:'شاذّ ← <code>teeth</code>.', f:'teeth'},
        {p:'foot →',   ask:'الجمع الشاذّ', o:['feet','foots','feets','footes'], a:0, w:'شاذّ ← <code>feet</code>.', f:'feet'},
        {p:'person →', ask:'الجمع الشاذّ', o:['people','persons','peoples','personen'], a:0, w:'شاذّ ← <code>people</code>.', f:'people'}
      ]},
      { type:'choice', name:'الملكية', hint:"'s للمفرد · ' بعد جمع بـ s", qs:[
        {p:'Michael has a sister. → that is ___ sister.',   ask:'اختر الصحيح', o:["Michael's","Michaels'","Michaels"], a:0, w:'مالكٌ مفرد ← <code>Michael\'s</code>.', f:"Michael's sister"},
        {p:'My cousins have a cat. → my ___ cat.',           ask:'اختر الصحيح', o:["cousins'","cousin's","cousins"], a:0, w:'جمعٌ بـ s ← <code>cousins\'</code>.', f:"my cousins' cat"},
        {p:'Ahmed has a book. → ___ book.',                  ask:'اختر الصحيح', o:["Ahmed's","Ahmeds'","Ahmeds"], a:0, w:'مالكٌ مفرد ← <code>Ahmed\'s</code>.', f:"Ahmed's book"},
        {p:'The girls have a brother. → the ___ brother.',   ask:'اختر الصحيح', o:["girls'","girl's","girls"], a:0, w:'جمعٌ بـ s ← <code>girls\'</code>.', f:"the girls' brother"},
        {p:'My brothers have names. → my ___ names.',         ask:'اختر الصحيح', o:["brothers'","brother's","brothers"], a:0, w:'جمعٌ بـ s ← <code>brothers\'</code>.', f:"my brothers' names"},
        {p:'Sara has a pen. → ___ pen.',                     ask:'اختر الصحيح', o:["Sara's","Saras'","Saras"], a:0, w:'مالكٌ مفرد ← <code>Sara\'s</code>.', f:"Sara's pen"}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['These','are','my','books','.'],            w:'جمعٌ منتظم.', f:'These are my books.'},
        {sol:['She','has','two','children','.'],           w:'جمعٌ شاذّ.', f:'She has two children.'},
        {sol:['They','are','my','cousins','.'],            w:'جمعٌ منتظم.', f:'They are my cousins.'},
        {sol:['How','many','brothers','do','you','have','?'], w:'سؤالٌ بـ <code>How many</code>.', f:'How many brothers do you have?'},
        {sol:['Who','are','these','children','?'],         w:'سؤالٌ بـ <code>Who</code>.', f:'Who are these children?'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'box →', ask:'الجمع', o:['boxes','boxs','boxies','boxen'], a:0, w:'بعد x ← <code>-es</code>.', f:'boxes'},
        {p:'child →', ask:'الجمع الشاذّ', o:['children','childs','childes','childrens'], a:0, w:'شاذّ ← <code>children</code>.', f:'children'},
        {p:'family →', ask:'الجمع', o:['families','familys','familyes','familie'], a:0, w:'ساكن+y ← <code>-ies</code>.', f:'families'},
        {p:'Ahmed has a book. → ___ book.', ask:'اختر الصحيح', o:["Ahmed's","Ahmeds'","Ahmeds"], a:0, w:'مالكٌ مفرد ← <code>Ahmed\'s</code>.', f:"Ahmed's book"},
        {p:'woman →', ask:'الجمع الشاذّ', o:['women','womans','womens','woming'], a:0, w:'شاذّ ← <code>women</code>.', f:'women'},
        {sol:['She','has','two','children','.'], w:'جمعٌ شاذّ.', f:'She has two children.'},
        {p:'My cousins have a cat. → my ___ cat.', ask:'اختر الصحيح', o:["cousins'","cousin's","cousins"], a:0, w:'جمعٌ بـ s ← <code>cousins\'</code>.', f:"my cousins' cat"},
        {p:'key →', ask:'الجمع', o:['keys','kies','keyes','key'], a:0, w:'علّة+y ← <code>-s</code>.', f:'keys'},
        {sol:['Who','are','these','children','?'], w:'سؤالٌ بـ <code>Who</code>.', f:'Who are these children?'}
      ]}
    ]
  };
})();
