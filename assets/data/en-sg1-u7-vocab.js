/* ============================================================
   Lesson: Vocabulary — Places in the City & Directions
   English · Super Goal 1 · Unit 7 (Where Do You Live?) · صفحات ٥٦–٥٧
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1).
   lang:'en' → المحتوى إنجليزيّ LTR، والشرح بالعربية.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U7_VOCAB'] = {
    id:'EN_SG1_U7_VOCAB',
    title:'Vocabulary — أماكن المدينة والاتجاهات',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'Places & Directions',
      intro:'أماكن المدينة: مطعم (restaurant)، متنزّه (park)، مركز تسوّق (mall)، مكتبة (bookstore)، بنك (bank)، صيدليّة (pharmacy)، محطّة (station). ونعطي الاتجاهات: <code>Turn left/right</code>, <code>Go straight</code>.',
      table:[['restaurant · park','مطعم · متنزّه'],['mall · bookstore','مركز تسوّق · مكتبة'],['bank · pharmacy','بنك · صيدليّة'],['station · corner','محطّة · ناصية']],
      examples:['a place to eat = restaurant','a place to take a walk = park','a place to buy a book = bookstore','a place to buy medicine = pharmacy'],
      trick:'<code>convenience store</code> = بقالة، <code>mall</code> = مركز تسوّق كبير، <code>pharmacy</code> = صيدليّة، <code>corner</code> = زاوية/ناصية.'
    },
    stages:[
      { type:'choice', name:'أيّ مكان؟', hint:'اختر الكلمة الإنجليزية', qs:[
        {p:'a place to eat',              ask:'اختر الكلمة', o:['restaurant','park','bank','mall'], a:0, w:'مطعم ← <code>restaurant</code>.', f:'a restaurant'},
        {p:'a place to take a walk',       ask:'اختر الكلمة', o:['park','pharmacy','bookstore','station'], a:0, w:'متنزّه ← <code>park</code>.', f:'a park'},
        {p:'a place to buy a book',        ask:'اختر الكلمة', o:['bookstore','bank','restaurant','park'], a:0, w:'مكتبة ← <code>bookstore</code>.', f:'a bookstore'},
        {p:'a place to buy medicine',      ask:'اختر الكلمة', o:['pharmacy','mall','park','station'], a:0, w:'صيدليّة ← <code>pharmacy</code>.', f:'a pharmacy'},
        {p:'a place to keep your money',   ask:'اختر الكلمة', o:['bank','restaurant','park','bookstore'], a:0, w:'بنك ← <code>bank</code>.', f:'a bank'},
        {p:'a place with many stores',     ask:'اختر الكلمة', o:['mall','pharmacy','bank','park'], a:0, w:'مركز تسوّق ← <code>mall</code>.', f:'a mall'}
      ]},
      { type:'choice', name:'الاتجاهات والمفردات', hint:'اختر المعنى الصحيح', qs:[
        {p:"the opposite of 'turn right'",           ask:'اختر', o:['turn left','go straight','go up','turn back'], a:0, w:'عكس اليمين ← <code>turn left</code>.', f:'turn left'},
        {p:'to continue without turning',             ask:'اختر', o:['go straight','turn left','go down','turn right'], a:0, w:'مستقيمًا ← <code>go straight</code>.', f:'go straight'},
        {p:'the place where two streets meet',        ask:'اختر', o:['corner','floor','park','mall'], a:0, w:'ناصية ← <code>corner</code>.', f:'corner'},
        {p:"the opposite of 'go up'",                 ask:'اختر', o:['go down','go straight','turn left','turn right'], a:0, w:'عكس الصعود ← <code>go down</code>.', f:'go down'},
        {p:"the opposite of 'near'",                  ask:'اختر', o:['far','next to','on','between'], a:0, w:'عكس قريب ← <code>far</code>.', f:'far'},
        {p:'a small shop for everyday things',        ask:'اختر', o:['convenience store','mall','bank','park'], a:0, w:'بقالة ← <code>convenience store</code>.', f:'a convenience store'}
      ]},
      { type:'gap', name:'في المدينة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'There is a ___ near here to buy medicine.', ask:'أكمل', o:['pharmacy','park','bank','mall'], a:0, w:'<code>pharmacy</code>.', f:'a <u>pharmacy</u>.'},
        {p:'The park is a nice place to take a ___.',    ask:'أكمل', o:['walk','book','money','bus'], a:0, w:'<code>take a walk</code>.', f:'take a <u>walk</u>.'},
        {p:'I live ___ an apartment building.',           ask:'أكمل', o:['in','on','at','to'], a:0, w:'<code>in</code> a building.', f:'live <u>in</u> a building.'},
        {p:'The bank is next ___ the hotel.',             ask:'أكمل', o:['to','of','from','in'], a:0, w:'<code>next to</code>.', f:'next <u>to</u> the hotel.'},
        {p:'Go ___ ahead to reach the station.',          ask:'أكمل', o:['straight','left','up','down'], a:0, w:'<code>go straight ahead</code>.', f:'go <u>straight</u> ahead.'},
        {p:'The mall has many ___.',                      ask:'أكمل', o:['stores','parks','banks','buses'], a:0, w:'<code>stores</code>.', f:'many <u>stores</u>.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['Where','do','you','live','?'],              w:'السؤال عن السكن.', f:'Where do you live?'},
        {sol:['There','is','a','bank','near','here','.'],  w:'مكانٌ قريب.', f:'There is a bank near here.'},
        {sol:['Turn','left','at','the','corner','.'],      w:'اتجاه.', f:'Turn left at the corner.'},
        {sol:['The','park','is','a','nice','place','.'],   w:'وصفُ المكان.', f:'The park is a nice place.'},
        {sol:['Go','straight','to','the','station','.'],   w:'اتجاه.', f:'Go straight to the station.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'a place to eat', ask:'اختر الكلمة', o:['restaurant','park'], a:0, w:'<code>restaurant</code>.', f:'a restaurant'},
        {p:"the opposite of 'turn right'", ask:'اختر', o:['turn left','go straight','go up','turn back'], a:0, w:'← <code>turn left</code>.', f:'turn left'},
        {p:'There is a ___ near here to buy medicine.', ask:'أكمل', o:['pharmacy','park','bank','mall'], a:0, w:'<code>pharmacy</code>.', f:'a <u>pharmacy</u>.'},
        {p:'a place to buy a book', ask:'اختر الكلمة', o:['bookstore','bank'], a:0, w:'<code>bookstore</code>.', f:'a bookstore'},
        {p:'The bank is next ___ the hotel.', ask:'أكمل', o:['to','of','from','in'], a:0, w:'<code>next to</code>.', f:'next <u>to</u> the hotel.'},
        {sol:['Where','do','you','live','?'], w:'السؤال عن السكن.', f:'Where do you live?'},
        {p:'a place with many stores', ask:'اختر الكلمة', o:['mall','pharmacy'], a:0, w:'<code>mall</code>.', f:'a mall'},
        {p:'the place where two streets meet', ask:'اختر', o:['corner','floor','park','mall'], a:0, w:'ناصية ← <code>corner</code>.', f:'corner'},
        {sol:['Turn','left','at','the','corner','.'], w:'اتجاه.', f:'Turn left at the corner.'}
      ]}
    ]
  };
})();
