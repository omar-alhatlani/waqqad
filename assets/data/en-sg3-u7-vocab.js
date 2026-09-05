/* ============================================================
   Lesson: Vocabulary — Garage Sales & Secondhand Items
   English · Super Goal 3 · Unit 7 (It's a Good Deal, Isn't It?) · صفحات ٧٤–٧٥
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U7_VOCAB'] = {
    id:'EN_SG3_U7_VOCAB',
    title:'Vocabulary — Garage Sales',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'Bargains & Household Items',
      intro:'مفرداتُ البيع والصفقات: <code>garage sale</code> بيعُ أغراضٍ مستعملة، <code>bargain</code> صفقة رابحة، <code>deal</code> صفقة، <code>condition</code> حالة، <code>secondhand</code> مستعمل، <code>coincidence</code> مصادفة. وأغراضُ المنزل: <code>vacuum cleaner</code> مكنسة كهربائية، <code>lawn mower</code> جزّازة عشب، <code>fan</code> مروحة، <code>tools</code> أدوات.',
      table:[['garage sale','بيع الأغراض المستعملة'],['bargain / deal','صفقة رابحة'],['in good condition','بحالةٍ جيّدة'],['vacuum cleaner','مكنسة كهربائية'],['lawn mower','جزّازة العشب']],
      trick:'<code>It’s a good deal!</code> و<code>It’s a bargain!</code> = صفقةٌ ممتازة. ونصف حالةَ الشيء بـ <code>in good/bad condition</code>.'
    },
    stages:[
      { type:'choice', name:'المعنى', hint:'اختر المعنى الصحيح', qs:[
        {p:'A “garage sale” sells ___ items from your home.', o:['used','new only','stolen'], a:0, w:'أغراض مستعملة.', f:'<u>used</u> items'},
        {p:'A “bargain” is something at a ___ price.', o:['low','high','fixed'], a:0, w:'سعرٌ منخفض.', f:'a <u>low</u> price'},
        {p:'“secondhand” means:', o:['used before','brand new','broken'], a:0, w:'مستعمل.', f:'<u>used before</u>'},
        {p:'A “vacuum cleaner” is used to clean the ___.', o:['floor','car engine','sky'], a:0, w:'الأرضية.', f:'the <u>floor</u>'},
        {p:'A “lawn mower” cuts the ___.', o:['grass','hair','paper'], a:0, w:'العشب.', f:'the <u>grass</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'These toys are in good ___.', o:['condition','coincidence','deal'], a:0, w:'حالة.', f:'good <u>condition</u>'},
        {p:'Only 10 riyals? That’s a great ___!', o:['deal','tool','fan'], a:0, w:'صفقة.', f:'a great <u>deal</u>'},
        {p:'We sold everything at the ___ sale.', o:['garage','airport','book'], a:0, w:'بيع الأغراض.', f:'<u>garage</u> sale'},
        {p:'It was an amazing ___ that we met there!', o:['coincidence','tool','fan'], a:0, w:'مصادفة.', f:'a <u>coincidence</u>'},
        {p:'He bought a used ___ to cut the grass.', o:['lawn mower','vacuum','fan'], a:0, w:'جزّازة.', f:'<u>lawn mower</u>'}
      ]},
      { type:'choice', name:'أغراض المنزل', hint:'اختر الأداة', qs:[
        {p:'To keep cool, turn on the ___.', o:['fan','lawn mower','tools'], a:0, w:'مروحة.', f:'<u>fan</u>'},
        {p:'A carpenter uses many ___.', o:['tools','fans','glasses'], a:0, w:'أدوات.', f:'<u>tools</u>'},
        {p:'A set of nice ___ glasses for guests.', o:['crystal','plastic broken','paper'], a:0, w:'كريستال.', f:'<u>crystal</u>'},
        {p:'“in bad condition” means it is:', o:['not good','brand new','cheap only'], a:0, w:'حالةٌ سيّئة.', f:'<u>not good</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['A','lawn','mower','cleans','the','floor','.'], bad:3, fix:'cuts grass', w:'الجزّازةُ تجزّ العشب.', f:'…<u>cuts the grass</u>.'},
        {words:['These','toys','are','in','good','coincidence','.'], bad:5, fix:'condition', w:'الحالة ← <code>condition</code>.', f:'in good <u>condition</u>.'},
        {words:['A','garage','sale','sells','new','items','.'], bad:4, fix:'used', w:'أغراضٌ مستعملة.', f:'sells <u>used</u> items'},
        {words:['Only','5','riyals','!','It’s','a','tool','!'], bad:6, fix:'bargain/deal', w:'صفقة.', f:"It's a <u>bargain</u>!"}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'garage sale sells ___ items.', ask:'اختر', o:['used','new'], a:0, w:'مستعملة.', f:'<u>used</u>'},
        {p:'low price =', ask:'اختر', o:['bargain','condition'], a:0, w:'صفقة.', f:'<u>bargain</u>'},
        {p:'“secondhand” =', ask:'المعنى', o:['used before','new'], a:0, w:'مستعمل.', f:'<u>used before</u>'},
        {p:'cleans the floor =', ask:'اختر', o:['vacuum cleaner','lawn mower'], a:0, w:'المكنسة.', f:'<u>vacuum cleaner</u>'},
        {p:'cuts grass =', ask:'اختر', o:['lawn mower','fan'], a:0, w:'الجزّازة.', f:'<u>lawn mower</u>'},
        {p:'in good ___', ask:'أكمل', o:['condition','coincidence'], a:0, w:'حالة.', f:'<u>condition</u>'},
        {p:'a chance meeting =', ask:'اختر', o:['coincidence','deal'], a:0, w:'مصادفة.', f:'<u>coincidence</u>'},
        {p:'keeps you cool =', ask:'اختر', o:['fan','tools'], a:0, w:'مروحة.', f:'<u>fan</u>'},
        {p:'a great ___! (سعرٌ ممتاز)', ask:'اختر', o:['deal','tool'], a:0, w:'صفقة.', f:'<u>deal</u>'}
      ]}
    ]
  };
})();
