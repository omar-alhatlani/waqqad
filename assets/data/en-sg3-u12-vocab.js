/* ============================================================
   Lesson: Vocabulary — Culture & Adjustment
   English · Super Goal 3 · Unit 12 (Culture Shock) · صفحات ١٣٠–١٣١
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U12_VOCAB'] = {
    id:'EN_SG3_U12_VOCAB',
    title:'Vocabulary — Culture Shock',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'Adjusting to a New Culture',
      intro:'مفرداتُ الثقافة والتأقلم: <code>culture</code> ثقافة، <code>custom</code> عادة، <code>adjust</code> يتأقلم، <code>flexible</code> مرن، <code>homesick</code> مشتاقٌ للوطن، <code>newcomer</code> قادمٌ جديد، <code>values</code> قِيَم، <code>novelty</code> شيءٌ جديدٌ مثير، <code>cherish</code> يعتزّ بـ، <code>frustrating</code> مُحبِط.',
      table:[['culture','ثقافة'],['custom','عادة'],['adjust','يتأقلم'],['homesick','مشتاقٌ للوطن'],['values','قِيَم']],
      trick:'<code>be used to + -ing</code> = مُعتادٌ على، و<code>get used to + -ing</code> = يعتاد على. أمّا <code>used to + مصدر</code> فتعني عادةً ماضية.'
    },
    stages:[
      { type:'choice', name:'المعنى', hint:'اختر المعنى الصحيح', qs:[
        {p:'A “custom” is a usual ___ of a culture.', o:['habit','price','building'], a:0, w:'عادة.', f:'a usual <u>habit</u>'},
        {p:'To “adjust” to a place means to ___ to it.', o:['get used','sell','forget'], a:0, w:'يتأقلم.', f:'<u>get used</u> to it'},
        {p:'“flexible” means able to ___.', o:['change easily','stay hard','break'], a:0, w:'مرن.', f:'<u>change easily</u>'},
        {p:'“homesick” means you miss your ___.', o:['home','money','job only'], a:0, w:'الوطن/البيت.', f:'your <u>home</u>'},
        {p:'A “newcomer” is a person who ___ recently.', o:['arrived','left','slept'], a:0, w:'قادمٌ جديد.', f:'<u>arrived</u> recently'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'It isn’t easy to ___ to a new culture.', o:['adjust','sell','drive'], a:0, w:'يتأقلم.', f:'<u>adjust</u>'},
        {p:'Every culture has its own ___.', o:['customs','prices','cars'], a:0, w:'عادات.', f:'<u>customs</u>'},
        {p:'When I first arrived, I felt ___ for my family.', o:['homesick','happy only','rich'], a:0, w:'مشتاقًا للوطن.', f:'<u>homesick</u>'},
        {p:'“Values” are beliefs about what is ___.', o:['right or wrong','cheap','fast'], a:0, w:'قِيَم.', f:'<u>right or wrong</u>'},
        {p:'I will ___ these happy memories forever.', o:['cherish','sell','forget'], a:0, w:'أعتزّ بها.', f:'<u>cherish</u>'}
      ]},
      { type:'choice', name:'be/get used to', hint:'مُعتاد / يعتاد', qs:[
        {p:'I am not used to ___ with chopsticks.', o:['eating','eat','to eat','eats'], a:0, w:'<code>be used to + -ing</code>.', f:'used to <u>eating</u>'},
        {p:'She is getting used to ___ on the left.', o:['driving','drive','to drive','drove'], a:0, w:'<code>get used to + -ing</code>.', f:'used to <u>driving</u>'},
        {p:'“a novelty” is something ___.', o:['new and interesting','old','boring'], a:0, w:'جديدٌ مثير.', f:'<u>new and interesting</u>'},
        {p:'“frustrating” means it is ___.', o:['annoying','fun','easy'], a:0, w:'مُحبِط.', f:'<u>annoying</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['A','custom','is','a','new','building','.'], bad:5, fix:'usual habit', w:'العادةُ سلوكٌ معتاد.', f:'…a <u>usual habit</u>.'},
        {words:['I','am','used','to','eat','with','chopsticks','.'], bad:4, fix:'eating', w:'<code>be used to + -ing</code>.', f:'used to <u>eating</u>'},
        {words:['“Homesick”','means','you','love','travel','.'], bad:3, fix:'miss home', w:'مشتاقٌ للوطن.', f:'means you <u>miss home</u>.'},
        {words:['“Values”','are','beliefs','about','food','.'], bad:4, fix:'right/wrong', w:'القِيَمُ عن الصواب والخطأ.', f:'…about <u>right/wrong</u>.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'a usual habit =', ask:'اختر', o:['custom','price'], a:0, w:'عادة.', f:'<u>custom</u>'},
        {p:'get used to a place =', ask:'اختر', o:['adjust','sell'], a:0, w:'يتأقلم.', f:'<u>adjust</u>'},
        {p:'able to change easily =', ask:'اختر', o:['flexible','hard'], a:0, w:'مرن.', f:'<u>flexible</u>'},
        {p:'miss your home =', ask:'اختر', o:['homesick','happy'], a:0, w:'مشتاقٌ للوطن.', f:'<u>homesick</u>'},
        {p:'a recent arrival =', ask:'اختر', o:['newcomer','leader'], a:0, w:'قادمٌ جديد.', f:'<u>newcomer</u>'},
        {p:'beliefs about right/wrong =', ask:'اختر', o:['values','prices'], a:0, w:'قِيَم.', f:'<u>values</u>'},
        {p:'I am used to ___ here.', ask:'اختر', o:['living','live'], a:0, w:'<code>+ -ing</code>.', f:'<u>living</u>'},
        {p:'remember with love =', ask:'اختر', o:['cherish','forget'], a:0, w:'يعتزّ.', f:'<u>cherish</u>'},
        {p:'“frustrating” =', ask:'المعنى', o:['annoying','fun'], a:0, w:'مُحبِط.', f:'<u>annoying</u>'}
      ]}
    ]
  };
})();
