/* ============================================================
   Lesson: Vocabulary — Activities (verb + -ing)
   English · Super Goal 1 · Unit 8 (What Are You Doing?) · صفحات ٦٤–٦٧
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1).
   lang:'en' → المحتوى إنجليزيّ LTR، والشرح بالعربية.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U8_VOCAB'] = {
    id:'EN_SG1_U8_VOCAB',
    title:'Vocabulary — الأنشطة (verb + -ing)',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'Activities & the -ing form',
      intro:'لتكوين المضارع المستمر نضيف <code>-ing</code> للفعل. أفعال الأنشطة: watch, read, eat, drink, play, chat, shop, write…',
      table:[['+ ing','watch → watching'],['حذف e','write → writing · have → having'],['مضاعفة','chat → chatting · shop → shopping'],['أنشطة','play · read · eat · drink'] ],
      examples:['watch → watching','write → writing (حذف e)','chat → chatting (مضاعفة t)','shop → shopping (مضاعفة p)'],
      trick:'أغلب الأفعال + <code>-ing</code>. وما ينتهي بـ e صامتة يُحذف (write→writing). وما ينتهي بحرف علّة+ساكن يُضاعف الساكن (chat→chatting, shop→shopping).'
    },
    stages:[
      { type:'choice', name:'صيغة -ing', hint:'اختر التكوين الصحيح', qs:[
        {p:'watch →', ask:'+ ing', o:['watching','watchs','watchen','wataching'], a:0, w:'إضافة <code>-ing</code>.', f:'watching'},
        {p:'write →', ask:'+ ing', o:['writing','writeing','writting','writes'], a:0, w:'حذف e ← <code>writing</code>.', f:'writing'},
        {p:'chat →',  ask:'+ ing', o:['chatting','chating','chating','chats'], a:0, w:'مضاعفة t ← <code>chatting</code>.', f:'chatting'},
        {p:'shop →',  ask:'+ ing', o:['shopping','shoping','shopeing','shops'], a:0, w:'مضاعفة p ← <code>shopping</code>.', f:'shopping'},
        {p:'play →',  ask:'+ ing', o:['playing','plaing','playying','plays'], a:0, w:'إضافة <code>-ing</code>.', f:'playing'},
        {p:'read →',  ask:'+ ing', o:['reading','readding','readeing','reads'], a:0, w:'إضافة <code>-ing</code>.', f:'reading'}
      ]},
      { type:'choice', name:'ماذا يفعل؟', hint:'اختر الفعل المناسب', qs:[
        {p:'You are looking at the TV.',          ask:'اختر', o:['watching','reading','drinking','shopping'], a:0, w:'مشاهدة ← <code>watching</code>.', f:'watching TV'},
        {p:'You are having a cup of coffee.',      ask:'اختر', o:['drinking','eating','writing','playing'], a:0, w:'شرب ← <code>drinking</code>.', f:'drinking coffee'},
        {p:'You are having a sandwich.',           ask:'اختر', o:['eating','drinking','reading','chatting'], a:0, w:'أكل ← <code>eating</code>.', f:'eating a sandwich'},
        {p:'You are buying clothes at the mall.',   ask:'اختر', o:['shopping','cooking','writing','sleeping'], a:0, w:'تسوّق ← <code>shopping</code>.', f:'shopping'},
        {p:'You are texting a friend online.',      ask:'اختر', o:['chatting','driving','running','eating'], a:0, w:'دردشة ← <code>chatting</code>.', f:'chatting'},
        {p:'You are looking at a book.',            ask:'اختر', o:['reading','watching','drinking','shopping'], a:0, w:'قراءة ← <code>reading</code>.', f:'reading a book'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'استعمل صيغة -ing', qs:[
        {p:'He is ___ TV.  (watch)',          ask:'أكمل', o:['watching','watchs','watched','watch'], a:0, w:'<code>watching</code>.', f:'He is <u>watching</u> TV.'},
        {p:'They are ___ soda.  (drink)',      ask:'أكمل', o:['drinking','drinks','drank','drink'], a:0, w:'<code>drinking</code>.', f:'... <u>drinking</u> soda.'},
        {p:'She is ___ an email.  (write)',     ask:'أكمل', o:['writing','writeing','writes','wrote'], a:0, w:'حذف e ← <code>writing</code>.', f:'... <u>writing</u> an email.'},
        {p:'We are ___ at the mall.  (shop)',   ask:'أكمل', o:['shopping','shoping','shops','shopped'], a:0, w:'مضاعفة p ← <code>shopping</code>.', f:'... <u>shopping</u> at the mall.'},
        {p:'I am ___ a magazine.  (read)',      ask:'أكمل', o:['reading','reads','readding','read'], a:0, w:'<code>reading</code>.', f:'I am <u>reading</u> a magazine.'},
        {p:'They are ___ online.  (chat)',      ask:'أكمل', o:['chatting','chating','chats','chatted'], a:0, w:'مضاعفة t ← <code>chatting</code>.', f:'... <u>chatting</u> online.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['He','is','watching','TV','.'],                 w:'مضارع مستمر.', f:'He is watching TV.'},
        {sol:['They','are','shopping','at','the','mall','.'],  w:'مضارع مستمر.', f:'They are shopping at the mall.'},
        {sol:['She','is','writing','an','email','.'],          w:'حذف e في الفعل.', f:'She is writing an email.'},
        {sol:['What','are','you','doing','?'],                 w:'سؤالٌ عن الفعل.', f:'What are you doing?'},
        {sol:['We','are','reading','magazines','.'],           w:'مضارع مستمر.', f:'We are reading magazines.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'write →', ask:'+ ing', o:['writing','writeing','writting','writes'], a:0, w:'حذف e ← <code>writing</code>.', f:'writing'},
        {p:'You are looking at the TV.', ask:'اختر', o:['watching','reading','drinking','shopping'], a:0, w:'<code>watching</code>.', f:'watching TV'},
        {p:'They are ___ soda.  (drink)', ask:'أكمل', o:['drinking','drinks','drank','drink'], a:0, w:'<code>drinking</code>.', f:'<u>drinking</u> soda.'},
        {p:'chat →', ask:'+ ing', o:['chatting','chating','chating','chats'], a:0, w:'مضاعفة t ← <code>chatting</code>.', f:'chatting'},
        {p:'You are buying clothes at the mall.', ask:'اختر', o:['shopping','cooking','writing','sleeping'], a:0, w:'<code>shopping</code>.', f:'shopping'},
        {sol:['He','is','watching','TV','.'], w:'مضارع مستمر.', f:'He is watching TV.'},
        {p:'We are ___ at the mall.  (shop)', ask:'أكمل', o:['shopping','shoping','shops','shopped'], a:0, w:'مضاعفة p ← <code>shopping</code>.', f:'<u>shopping</u> at the mall.'},
        {p:'play →', ask:'+ ing', o:['playing','plaing','playying','plays'], a:0, w:'إضافة <code>-ing</code>.', f:'playing'},
        {sol:['What','are','you','doing','?'], w:'سؤالٌ عن الفعل.', f:'What are you doing?'}
      ]}
    ]
  };
})();
