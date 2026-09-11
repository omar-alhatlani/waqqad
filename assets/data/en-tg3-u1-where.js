/* ============================================================
   درس: Grammar — "where" clauses (جُمَل المكان بـ where)
   الإنجليزية · السادس الابتدائي · ف١ · Top Goal 3 · Unit 1 (Living Things)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب).
   ============================================================ */
(function(){
  var WHY_WHERE = 'نصفُ المكانَ وما يحدثُ فيه بـ <code>where</code> ← «... is where ...».';

  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG3_U1_WHERE'] = {
    id:'EN_TG3_U1_WHERE',
    title:'Grammar — "where" clauses',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'وصفُ المكان بـ where',
      intro:'نستعملُ <span class="tok-focus">where</span> لنصفَ <b>المكانَ</b> ونقولَ ما يحدثُ فيه. فكلمةُ <span class="tok-focus">where</span> تربطُ المكانَ بالحدث الذي يقعُ فيه. وانتبِهْ لاتّفاق الفعل: مع الفاعل الجمع (المنتهي بـ <span class="tok-plural">s</span>) يأتي الفعلُ مجرَّدًا (live)، ومع المفرد يأخذ الفعلُ (lives / swims).',
      formula:'place + is <span class="tok-focus">where</span> + subject + verb',
      table:[['التركيب','place + is <span class="tok-focus">where</span> + subject + verb'],['مثال','A pond is <span class="tok-focus">where</span> frog<span class="tok-plural">s</span> live.'],['مثال','A nest is <span class="tok-focus">where</span> bird<span class="tok-plural">s</span> lay eggs.'],['السؤال','<span class="tok-focus">Where</span> do camel<span class="tok-plural">s</span> live? — In the desert.']],
      examples:['A cave is <span class="tok-focus">where</span> bat<span class="tok-plural">s</span> sleep during the day.','The ocean is <span class="tok-focus">where</span> whale<span class="tok-plural">s</span> and octopuses live.'],
      trick:'إن سألتَ «أين؟» فالجوابُ مكانٌ، ورابطُه <span class="tok-focus">where</span>. تذكّرْ: «المكان + is <span class="tok-focus">where</span> + ما يحدثُ فيه».'
    },
    stages:[
      { type:'choice', name:'أيّ رابطٍ نستعمل؟', hint:'للمكان نستعمل where', qs:[
        {p:'A pond is ___ frogs live.', o:['where','when'], a:0, w:'مكانٌ ← <code>where</code>.', f:'A pond is <u>where</u> frogs live.'},
        {p:'A nest is ___ birds lay eggs.', o:['where','who'], a:0, w:'مكانٌ ← <code>where</code>.', f:'A nest is <u>where</u> birds lay eggs.'},
        {p:'The desert is ___ camels live.', o:['where','which'], a:0, w:'مكانٌ ← <code>where</code>.', f:'The desert is <u>where</u> camels live.'},
        {p:'A cave is ___ bats sleep.', o:['where','what'], a:0, w:'مكانٌ ← <code>where</code>.', f:'A cave is <u>where</u> bats sleep.'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'المكان + is where + الحدث', qs:[
        {p:'The ocean ___ where whales live.', o:['is','are','do'], a:0, w:'مفردٌ (The ocean) ← <code>is where</code>.', f:'The ocean <u>is</u> where whales live.'},
        {p:'A forest is where wild animals ___ .', o:['live','lives','living'], a:0, w:'مع الجمع (animals) نستعمل <code>live</code>.', f:'A forest is where wild animals <u>live</u>.'},
        {p:'A pond is where the swan ___ .', o:['swims','swim','swimming'], a:0, w:'مفردٌ (the swan) ← <code>swims</code>.', f:'A pond is where the swan <u>swims</u>.'}
      ]},
      { type:'choice', name:'طابق المكان بالحدث', hint:'أين يحدثُ هذا؟', qs:[
        {p:'... is where frogs live.', ask:'اختر المكان المناسب', o:['A pond','A desert'], a:0, w:'الضفادعُ تعيشُ قربَ الماء ← <code>a pond</code>.', f:'<u>A pond</u> is where frogs live.'},
        {p:'... is where camels travel.', ask:'اختر المكان المناسب', o:['The desert','The ocean'], a:0, w:'الجِمالُ في الصحراء ← <code>the desert</code>.', f:'<u>The desert</u> is where camels travel.'},
        {p:'... is where an octopus lives.', ask:'اختر المكان المناسب', o:['The ocean','A cave'], a:0, w:'الأخطبوطُ في المحيط ← <code>the ocean</code>.', f:'<u>The ocean</u> is where an octopus lives.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['A','nest','is','when','birds','lay','eggs','.'], bad:3, fix:'where', w:'نصفُ مكانًا ← <code>where</code> لا <code>when</code>.', f:'A nest is <u>where</u> birds lay eggs.'},
        {words:['The','desert','is','where','camels','lives','.'], bad:5, fix:'live', w:'مع الجمع (camels) نستعمل <code>live</code>.', f:'The desert is where camels <u>live</u>.'},
        {words:['A','pond','are','where','frogs','live','.'], bad:2, fix:'is', w:'<code>A pond</code> مفرد ← <code>is</code>.', f:'A pond <u>is</u> where frogs live.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['A','pond','is','where','frogs','live','.'], w:'المكان + <code>is where</code> + الحدث.', f:'A pond is where frogs live.'},
        {sol:['A','nest','is','where','birds','lay','eggs','.'], w:'<code>where</code> يربطُ المكانَ بالحدث.', f:'A nest is where birds lay eggs.'},
        {sol:['The','ocean','is','where','whales','live','.'], w:'مفردٌ ← <code>is where</code>.', f:'The ocean is where whales live.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'A pond is ___ frogs live.', ask:'اختر الرابط', o:['where','when'], a:0, w:WHY_WHERE, f:'A pond is <u>where</u> frogs live.'},
        {p:'... is where camels live.', ask:'اختر المكان', o:['The desert','The ocean'], a:0, w:'الجِمالُ في الصحراء.', f:'<u>The desert</u> is where camels live.'},
        {p:'The ocean ___ where whales live.', ask:'اختر الصواب', o:['is','are'], a:0, w:'مفردٌ ← <code>is</code>.', f:'The ocean <u>is</u> where whales live.'},
        {p:'نستعمل where لوصف:', ask:'اختر', o:['المكان','الزمان'], a:0, w:'<code>where</code> للمكان.', f:'← <u>المكان</u>'},
        {p:'A forest is where wild animals ___ .', ask:'اختر الصواب', o:['live','lives'], a:0, w:'جمعٌ ← <code>live</code>.', f:'... animals <u>live</u>.'},
        {p:'A nest is ___ birds lay eggs.', ask:'اختر الرابط', o:['where','who'], a:0, w:WHY_WHERE, f:'A nest is <u>where</u> birds lay eggs.'}
      ]}
    ]
  };
})();
