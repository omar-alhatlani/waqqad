/* ============================================================
   Lesson: Grammar — Imperatives (commands & instructions)
   English · Super Goal 1 · Unit 3 (What's That?) · صفحة ٢٠
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1).
   lang:'en' → المحتوى إنجليزيّ LTR، والشرح بالعربية.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U3_IMPER'] = {
    id:'EN_SG1_U3_IMPER',
    title:'Grammar — الأوامر والتعليمات (Imperatives)',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'Imperatives',
      intro:'الأمرُ يبدأ بالفعل مباشرةً بلا فاعل، للأمر والتعليمات. نضيف <code>please</code> للتأدّب، و<code>Don\'t</code> للنهي.',
      table:[['مُثبَت (+)','Sit down. / Please sit down.'],['منفيّ (−)','Don\'t sit down.'],['نصيحة (+)','Buy those posters.'],['نصيحة (−)','Don\'t buy that painting.']],
      examples:['Open your books.','Please sit down.',"Don't take photographs.","Don't touch."],
      trick:'الأمر = الفعل أوّلًا (<code>Open! Come! Sit!</code>). والنهي = <code>Don\'t</code> + الفعل. و<code>please</code> تزيده أدبًا.'
    },
    stages:[
      { type:'choice', name:'أيّ جملةٍ تناسب؟', hint:'اختر الأمر المناسب', qs:[
        {p:'A museum sign: no photos', ask:'اختر المناسب', o:["Don't take photographs.","Take photographs.","Please photographs."], a:0, w:'نهي ← <code>Don\'t</code> + الفعل.', f:"Don't take photographs."},
        {p:'Ask him politely to sit',   ask:'اختر المناسب', o:['Please sit down.',"Don't sit down.",'Sit you down.'], a:0, w:'تأدّب ← <code>Please</code>.', f:'Please sit down.'},
        {p:'A sign: no touching',        ask:'اختر المناسب', o:["Don't touch.",'Touch it.','Please touch.'], a:0, w:'نهي ← <code>Don\'t touch</code>.', f:"Don't touch."},
        {p:'Tell them to open the book', ask:'اختر المناسب', o:['Open your book.',"Don't open.",'You open book.'], a:0, w:'أمرٌ = الفعل أوّلًا.', f:'Open your book.'},
        {p:'A sign: no cell phones',     ask:'اختر المناسب', o:["Don't use cell phones.",'Use cell phones.','Please phones.'], a:0, w:'نهي ← <code>Don\'t use</code>.', f:"Don't use cell phones."},
        {p:'Invite them in politely',    ask:'اختر المناسب', o:['Please come in.',"Don't come in.",'You come in.'], a:0, w:'تأدّب ← <code>Please come in</code>.', f:'Please come in.'}
      ]},
      { type:'gap', name:'أكمل الأمر', hint:'اختر الكلمة الناقصة', qs:[
        {p:'___ your books, please.',        ask:'أكمل (افتح)', o:['Open','Don\'t','Please','Close'], a:0, w:'أمرٌ ← الفعل <code>Open</code>.', f:'<u>Open</u> your books.'},
        {p:'___ touch the paintings.',        ask:'أكمل (نهي)', o:["Don't",'Open','Please','Do'], a:0, w:'نهي ← <code>Don\'t</code>.', f:"<u>Don't</u> touch the paintings."},
        {p:'Please ___ down.',                ask:'أكمل (اجلس)', o:['sit','stand','open','don\'t'], a:0, w:'<code>sit down</code> = اجلس.', f:'Please <u>sit</u> down.'},
        {p:'___ take photographs here.',       ask:'أكمل (نهي)', o:["Don't",'Please','Take','Do'], a:0, w:'نهي ← <code>Don\'t</code>.', f:"<u>Don't</u> take photographs."},
        {p:'___ at page ten.',                ask:'أكمل (انظر)', o:['Look','Don\'t','Sit','Close'], a:0, w:'<code>Look at</code> = انظر إلى.', f:'<u>Look</u> at page ten.'},
        {p:'___ your bags away, please.',      ask:'أكمل (ضَع)', o:['Put','Don\'t','Look','Open'], a:0, w:'<code>Put ... away</code> = ضَع جانبًا.', f:'<u>Put</u> your bags away.'}
      ]},
      { type:'choice', name:'حوّل الجملة', hint:'إلى النفي أو التأدّب', qs:[
        {p:"Make it negative:  'Sit down.'",     ask:'اختر الصحيح', o:["Don't sit down.",'Sit down please.','No sit down.'], a:0, w:'النفي ← <code>Don\'t</code> + الفعل.', f:"Don't sit down."},
        {p:"Make it negative:  'Open the door.'", ask:'اختر الصحيح', o:["Don't open the door.",'Open not the door.','No open door.'], a:0, w:'<code>Don\'t open ...</code>.', f:"Don't open the door."},
        {p:"Make it polite:  'Come in.'",         ask:'اختر الصحيح', o:['Please come in.',"Don't come in.",'Come in you.'], a:0, w:'التأدّب ← <code>Please</code>.', f:'Please come in.'},
        {p:"Make it negative:  'Touch it.'",      ask:'اختر الصحيح', o:["Don't touch it.",'Touch not it.','No touch.'], a:0, w:'<code>Don\'t touch it</code>.', f:"Don't touch it."},
        {p:"Make it negative:  'Take photos.'",    ask:'اختر الصحيح', o:["Don't take photos.",'Take no photos please.','Photos don\'t.'], a:0, w:'<code>Don\'t take photos</code>.', f:"Don't take photos."},
        {p:"Make it polite:  'Sit down.'",        ask:'اختر الصحيح', o:['Please sit down.',"Don't sit down.",'Sit please down.'], a:0, w:'التأدّب ← <code>Please</code>.', f:'Please sit down.'}
      ]},
      { type:'order', name:'ابنِ الأمر', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['Please','sit','down','.'],              w:'أمرٌ مؤدَّب.', f:'Please sit down.'},
        {sol:["Don't",'touch','the','paintings','.'],  w:'نهي ← <code>Don\'t</code> أوّلًا.', f:"Don't touch the paintings."},
        {sol:['Open','your','books','.'],              w:'أمرٌ = الفعل أوّلًا.', f:'Open your books.'},
        {sol:['Look','at','page','ten','.'],           w:'أمرٌ بالنظر.', f:'Look at page ten.'},
        {sol:["Don't",'take','photographs','.'],       w:'نهي.', f:"Don't take photographs."}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'A museum sign: no photos', ask:'اختر المناسب', o:["Don't take photographs.","Take photographs."], a:0, w:'نهي ← <code>Don\'t</code>.', f:"Don't take photographs."},
        {p:'___ touch the paintings.', ask:'أكمل (نهي)', o:["Don't",'Open','Please','Do'], a:0, w:'نهي ← <code>Don\'t</code>.', f:"<u>Don't</u> touch."},
        {p:"Make it polite:  'Come in.'", ask:'اختر الصحيح', o:['Please come in.',"Don't come in."], a:0, w:'التأدّب ← <code>Please</code>.', f:'Please come in.'},
        {p:'___ at page ten.', ask:'أكمل (انظر)', o:['Look','Don\'t','Sit','Close'], a:0, w:'<code>Look at</code>.', f:'<u>Look</u> at page ten.'},
        {p:'Ask him politely to sit', ask:'اختر المناسب', o:['Please sit down.',"Don't sit down."], a:0, w:'تأدّب ← <code>Please</code>.', f:'Please sit down.'},
        {sol:['Open','your','books','.'], w:'أمرٌ = الفعل أوّلًا.', f:'Open your books.'},
        {p:"Make it negative:  'Touch it.'", ask:'اختر الصحيح', o:["Don't touch it.",'Touch not it.'], a:0, w:'<code>Don\'t touch it</code>.', f:"Don't touch it."},
        {p:'___ your bags away, please.', ask:'أكمل (ضَع)', o:['Put','Don\'t','Look','Open'], a:0, w:'<code>Put ... away</code>.', f:'<u>Put</u> your bags away.'},
        {sol:["Don't",'take','photographs','.'], w:'نهي.', f:"Don't take photographs."}
      ]}
    ]
  };
})();
