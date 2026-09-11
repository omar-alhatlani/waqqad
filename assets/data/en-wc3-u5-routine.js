/* ============================================================
   درس: Grammar — Present Simple (daily routines) & time
   الإنجليزية · الثالث الابتدائي · ف١ · We Can! 3 · Unit 5 (Yesterday and Today)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب المحفوظ).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_WC3_U5_ROUTINE'] = {
    id:'EN_WC3_U5_ROUTINE',
    title:'Grammar — Daily routines & time',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'ماذا نفعلُ كلَّ يوم؟',
      intro:'نتحدّثُ عن <b>عاداتِنا اليوميّة</b> بالمضارعِ البسيط. مع <b>I / you / we / they</b> نستعملُ الفعلَ <b>مجرَّدًا</b> (I <span class="tok-focus">get up</span>)، ومع <b>he / she / it</b> نُضيفُ <span class="tok-focus">s</span> إلى الفعل (he <span class="tok-focus">gets</span> up). ونذكرُ الوقتَ بـ <code>at</code>: <code>at seven o’clock</code>.',
      formula:'he/she + verb+<span class="tok-focus">s</span> · at + time',
      table:[['I / they','I <span class="tok-focus">get</span> up early.'],['he / she','She <span class="tok-focus">gets</span> up early.'],['الوقت','at seven o’clock'],['مثال','He <span class="tok-focus">eats</span> lunch at noon.']],
      examples:['I <span class="tok-focus">go</span> to school in the morning.','My father <span class="tok-focus">comes</span> home in the evening.'],
      trick:'مع he/she/it أضِفْ <span class="tok-focus">s</span> للفعل. واذكرِ الوقتَ بـ <code>at</code>. (هذه <span class="tok-focus">s</span> الفعلِ لا <span class="tok-plural">s</span> الجمع.)'
    },
    stages:[
      { type:'choice', name:'الفعلُ مع الفاعل', hint:'he/she ← الفعل + s', qs:[
        {p:'I ___ up at six.', o:['get','gets'], a:0, w:'مع I ← الفعل مجرَّد.', f:'I <u>get</u> up at six.'},
        {p:'She ___ up at six.', o:['gets','get'], a:0, w:'مع she ← get + s.', f:'She <u>gets</u> up at six.'},
        {p:'He ___ lunch at noon.', o:['eats','eat'], a:0, w:'مع he ← eat + s.', f:'He <u>eats</u> lunch at noon.'},
        {p:'They ___ home late.', o:['come','comes'], a:0, w:'مع they ← الفعل مجرَّد.', f:'They <u>come</u> home late.'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'الوقت بـ at', qs:[
        {p:'I go to bed ___ nine o’clock.', o:['at','in','on'], a:0, w:'الوقتُ بالساعة ← <code>at</code>.', f:'... <u>at</u> nine o’clock.'},
        {p:'My sister ___ her homework in the evening.', o:['does','do','doing'], a:0, w:'مع she ← does.', f:'... <u>does</u> her homework.'},
        {p:'We ___ up early every day.', o:['get','gets'], a:0, w:'مع we ← الفعل مجرَّد.', f:'We <u>get</u> up early.'}
      ]},
      { type:'choice', name:'اختر الصواب', hint:'he/she ← +s', qs:[
        {p:'He ___ a bath at night.', ask:'اختر', o:['takes','take'], a:0, w:'مع he ← take + s.', f:'He <u>takes</u> a bath.'},
        {p:'I eat lunch ___ noon.', ask:'اختر', o:['at','in'], a:0, w:'الوقتُ بـ at.', f:'... <u>at</u> noon.'},
        {p:'She ___ to school in the morning.', ask:'اختر', o:['goes','go'], a:0, w:'مع she ← go + es.', f:'She <u>goes</u> to school.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['She','get','up','early','.'], bad:1, fix:'gets', w:'مع she ← get + s.', f:'She <u>gets</u> up early.'},
        {words:['He','eat','lunch','at','noon','.'], bad:1, fix:'eats', w:'مع he ← eat + s.', f:'He <u>eats</u> lunch at noon.'},
        {words:['I','go','to','bed','in','nine','.'], bad:4, fix:'at', w:'الوقتُ بالساعة ← <code>at</code>.', f:'I go to bed <u>at</u> nine.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب', qs:[
        {sol:['I','get','up','at','six','.'], w:'مع I ← مجرَّد.', f:'I get up at six.'},
        {sol:['She','goes','to','school','.'], w:'مع she ← goes.', f:'She goes to school.'},
        {sol:['He','eats','lunch','at','noon','.'], w:'مع he ← eats.', f:'He eats lunch at noon.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'I ___ up early.', ask:'اختر', o:['get','gets'], a:0, w:'مع I ← مجرَّد.', f:'I <u>get</u> up early.'},
        {p:'He ___ home in the evening.', ask:'اختر', o:['comes','come'], a:0, w:'مع he ← come + s.', f:'He <u>comes</u> home ...'},
        {p:'We go to bed ___ ten.', ask:'اختر', o:['at','in'], a:0, w:'الوقتُ بـ at.', f:'... <u>at</u> ten.'},
        {p:'مع he/she نُضيفُ للفعل:', ask:'اختر', o:['s','ed'], a:0, w:'الفعل + s.', f:'← <u>s</u>'},
        {p:'She ___ her homework.', ask:'اختر', o:['does','do'], a:0, w:'مع she ← does.', f:'She <u>does</u> her homework.'}
      ]}
    ]
  };
})();
