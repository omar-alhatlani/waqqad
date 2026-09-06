/* ============================================================
   Lesson: Tag Questions + Negative Questions
   English · Super Goal 3 · Unit 7 (It’s a Good Deal, Isn’t It?) · صفحة ٧٦
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U7_TAG'] = {
    id:'EN_SG3_U7_TAG',
    title:'Tag Questions',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'الأسئلة الذيلية والسلبية',
      intro:'نستعمل <b>السؤال الذيليّ</b> للتأكّد من المعلومة. القاعدة: جملةٌ <b>مثبتة</b> ← ذيلٌ <b>منفيّ</b> (<code>You live here, don’t you?</code>)، وجملةٌ <b>منفية</b> ← ذيلٌ <b>مثبت</b> (<code>She isn’t here, is she?</code>). يستعمل الذيلُ الفعلَ المساعدَ نفسَه والضميرَ المناسب. و<b>السؤال المنفيّ</b> (<code>Isn’t he tired?</code>) للتأكّد أو التعجّب.',
      table:[['+  → –  tag','You live here, don’t you?'],['–  → +  tag','She isn’t here, is she?'],['past','You studied, didn’t you?'],['negative Q','Aren’t you coming?']],
      trick:'الذيلُ يعكسُ الجملة: مثبتٌ ← ذيلٌ منفيّ، ومنفيٌّ ← ذيلٌ مثبت. ويستعمل الفعلَ المساعدَ نفسَه (<code>is/do/did/have/will</code>) مع ضميرٍ.'
    },
    stages:[
      { type:'choice', name:'مثبت ← ذيل منفيّ', hint:'اعكسِ الجملة', qs:[
        {p:'Your name is Ali, ___?', o:["isn’t it","is it","doesn’t it","aren’t it"], a:0, w:'مثبت ← ذيلٌ منفيّ ومساعدُ <code>is</code>.', f:"…, <u>isn’t it</u>?"},
        {p:'You live in Dammam, ___?', o:["don’t you","aren’t you","doesn’t you","isn’t you"], a:0, w:'فعلٌ عاديّ مضارع ← <code>don’t you</code>.', f:"…, <u>don’t you</u>?"},
        {p:'You studied in Dhahran, ___?', o:["didn’t you","don’t you","weren’t you","haven’t you"], a:0, w:'ماضٍ ← <code>didn’t you</code>.', f:"…, <u>didn’t you</u>?"},
        {p:'You’ve graduated, ___?', o:["haven’t you","aren’t you","don’t you","didn’t you"], a:0, w:'مضارعٌ تامّ ← <code>haven’t you</code>.', f:"…, <u>haven’t you</u>?"}
      ]},
      { type:'choice', name:'منفيّ ← ذيل مثبت', hint:'اعكسِ الجملة', qs:[
        {p:'Mariam isn’t American, ___?', o:['is she','isn’t she','does she','was she'], a:0, w:'منفيّ ← ذيلٌ مثبت.', f:'…, <u>is she</u>?'},
        {p:'She doesn’t speak English, ___?', o:['does she','doesn’t she','is she','did she'], a:0, w:'<code>does she</code>.', f:'…, <u>does she</u>?'},
        {p:'She wasn’t born here, ___?', o:['was she','wasn’t she','is she','did she'], a:0, w:'ماضٍ ← <code>was she</code>.', f:'…, <u>was she</u>?'},
        {p:'They weren’t able to sell it, ___?', o:['were they','weren’t they','did they','are they'], a:0, w:'<code>were they</code>.', f:'…, <u>were they</u>?'}
      ]},
      { type:'choice', name:'الأسئلة السلبية', hint:'للتأكّد أو التعجّب', qs:[
        {p:'___ you coming with us?', o:["Aren’t","Don’t","Isn’t","Haven’t"], a:0, w:'<code>you + are → Aren’t</code>.', f:"<u>Aren’t</u> you coming?"},
        {p:'___ he tired of working there?', o:["Isn’t","Aren’t","Don’t","Doesn’t"], a:0, w:'<code>he + is → Isn’t</code>.', f:"<u>Isn’t</u> he tired?"},
        {p:'___ you finished your homework yet?!', o:["Haven’t","Aren’t","Don’t","Didn’t"], a:0, w:'التامّ ← <code>Haven’t</code>.', f:"<u>Haven’t</u> you finished…?"},
        {p:'Negative questions can express:', o:['surprise','the past only','a command'], a:0, w:'التعجّب أو التأكّد.', f:'<u>surprise</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['You','live','here',',','don’t','they','?'], bad:5, fix:'you', w:'الضميرُ يطابق الفاعل ← <code>you</code>.', f:"…, don’t <u>you</u>?"},
        {words:['She','is','here',',','is','she','?'], bad:4, fix:"isn’t", w:'مثبت ← ذيلٌ منفيّ.', f:"She is here, <u>isn’t</u> she?"},
        {words:['You','studied',',','don’t','you','?'], bad:3, fix:"didn’t", w:'ماضٍ ← <code>didn’t</code>.', f:"You studied, <u>didn’t</u> you?"},
        {words:['Mariam','isn’t','American',',','isn’t','she','?'], bad:4, fix:'is', w:'منفيّ ← ذيلٌ مثبت.', f:'…, <u>is</u> she?'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['You','live','here',',','don’t','you','?'], w:'مثبت ← ذيلٌ منفيّ.', f:"You live here, don’t you?"},
        {sol:['She','isn’t','here',',','is','she','?'], w:'منفيّ ← ذيلٌ مثبت.', f:"She isn’t here, is she?"},
        {sol:['You','studied',',','didn’t','you','?'], w:'ماضٍ ← <code>didn’t you</code>.', f:"You studied, didn’t you?"},
        {sol:['Aren’t','you','coming','?'], w:'سؤالٌ سلبيّ.', f:"Aren’t you coming?"}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'Your name is Ali, ___?', ask:'الذيل', o:["isn’t it","is it"], a:0, w:'مثبت ← منفيّ.', f:"<u>isn’t it</u>"},
        {p:'You live here, ___?', ask:'الذيل', o:["don’t you","aren’t you"], a:0, w:'مضارع.', f:"<u>don’t you</u>"},
        {p:'You studied, ___?', ask:'الذيل', o:["didn’t you","don’t you"], a:0, w:'ماضٍ.', f:"<u>didn’t you</u>"},
        {p:'She isn’t here, ___?', ask:'الذيل', o:['is she','isn’t she'], a:0, w:'منفيّ ← مثبت.', f:'<u>is she</u>'},
        {p:'She doesn’t speak English, ___?', ask:'الذيل', o:['does she','is she'], a:0, w:'<code>does she</code>.', f:'<u>does she</u>'},
        {p:'___ you coming?', ask:'اختر', o:["Aren’t","Don’t"], a:0, w:'سؤالٌ سلبيّ.', f:"<u>Aren’t</u>"},
        {sol:['You','live','here',',','don’t','you','?'], w:'مثبت ← ذيلٌ منفيّ.', f:"You live here, don’t you?"},
        {p:'You’ve graduated, ___?', ask:'الذيل', o:["haven’t you","didn’t you"], a:0, w:'التامّ.', f:"<u>haven’t you</u>"},
        {p:'Negative questions show ___.', ask:'اختر', o:['surprise','a command'], a:0, w:'التعجّب.', f:'<u>surprise</u>'}
      ]}
    ]
  };
})();
