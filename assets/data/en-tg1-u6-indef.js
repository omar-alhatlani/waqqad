/* ============================================================
   درس: Grammar — Indefinite pronouns
   الإنجليزية · الرابع الابتدائي · ف١ · Top Goal 1 · Unit 6 (House Accidents)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب المحفوظ).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG1_U6_INDEF'] = {
    id:'EN_TG1_U6_INDEF',
    title:'Grammar — Indefinite pronouns',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'something · anything · nothing · everything',
      intro:'الضمائرُ المبهمةُ تشيرُ إلى أشياءَ غيرِ محدّدة: <span class="tok-focus">something</span> (شيءٌ ما، في الإثبات) ، <span class="tok-focus">anything</span> (أيُّ شيء، في السؤالِ والنفي) ، <span class="tok-focus">nothing</span> (لا شيء، معناها منفيٌّ مع فعلٍ مثبت) ، <span class="tok-focus">everything</span> (كلُّ شيء). وتُعامَلُ معاملةَ <b>المفرد</b>.',
      formula:'some/any/no/every + thing → <span class="tok-focus">something</span> …',
      table:[['something','في الإثبات — I see <span class="tok-focus">something</span>.'],['anything','سؤال/نفي — I can’t see <span class="tok-focus">anything</span>.'],['nothing','لا شيء — There is <span class="tok-focus">nothing</span> here.'],['everything','كلُّ شيء — <span class="tok-focus">Everything</span> hurts.']],
      examples:['I have <span class="tok-focus">something</span> in my eye.','There’s <span class="tok-focus">nothing</span> wrong. Don’t worry.'],
      trick:'إثبات ← <span class="tok-focus">something</span>. سؤال/نفي ← <span class="tok-focus">anything</span>. «لا شيء» بفعلٍ مثبت ← <span class="tok-focus">nothing</span>. وكلُّها مفرد.'
    },
    stages:[
      { type:'choice', name:'المعنى', hint:'اربطِ الضميرَ بمعناه', qs:[
        {p:'something →', ask:'اختر', o:['شيءٌ ما','لا شيء'], a:0, w:'<code>something</code> إثبات.', f:'← <u>شيءٌ ما</u>'},
        {p:'nothing →', ask:'اختر', o:['لا شيء','كلُّ شيء'], a:0, w:'<code>nothing</code> = لا شيء.', f:'← <u>لا شيء</u>'},
        {p:'everything →', ask:'اختر', o:['كلُّ شيء','أيُّ شيء'], a:0, w:'<code>everything</code>.', f:'← <u>كلُّ شيء</u>'},
        {p:'الضمائرُ المبهمةُ تُعامَلُ:', ask:'اختر', o:['معاملةَ المفرد','معاملةَ الجمع'], a:0, w:'مفردٌ دائمًا.', f:'← <u>المفرد</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'إثبات/سؤال/نفي', qs:[
        {p:'I have ___ to tell you. (إثبات)', o:['something','anything','nothing'], a:0, w:'إثباتٌ ← <code>something</code>.', f:'I have <u>something</u> to tell you.'},
        {p:'I can’t see ___ in the dark. (نفي)', o:['anything','something','everything'], a:0, w:'نفيٌ ← <code>anything</code>.', f:'I can’t see <u>anything</u>.'},
        {p:'Don’t worry. There is ___ wrong.', o:['nothing','something','anything'], a:0, w:'لا شيء ← <code>nothing</code>.', f:'There is <u>nothing</u> wrong.'}
      ]},
      { type:'choice', name:'اختر الصواب', hint:'انظرْ إثباتٌ أم نفي/سؤال', qs:[
        {p:'Is there ___ in the box?', ask:'اختر', o:['anything','something'], a:0, w:'سؤالٌ ← anything.', f:'Is there <u>anything</u> ...?'},
        {p:'___ hurts! I feel bad.', ask:'اختر', o:['Everything','Anything'], a:0, w:'كلُّ شيء ← Everything.', f:'<u>Everything</u> hurts!'},
        {p:'I bought ___ nice at the store.', ask:'اختر', o:['something','anything'], a:0, w:'إثباتٌ ← something.', f:'I bought <u>something</u> nice.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['I','can’t','find','something','.'], bad:3, fix:'anything', w:'في النفي نستعملُ <code>anything</code>.', f:'I can’t find <u>anything</u>.'},
        {words:['Everything','are','ready','now','.'], bad:1, fix:'is', w:'المبهمةُ مفردٌ ← <code>is</code>.', f:'Everything <u>is</u> ready now.'},
        {words:['There','is','nothing','wrong','anything','.'], bad:4, fix:'—', w:'<code>nothing</code> تكفي؛ لا نجمعُها مع anything.', f:'There is <u>nothing</u> wrong.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب', qs:[
        {sol:['I','have','something','in','my','eye','.'], w:'إثباتٌ ← something.', f:'I have something in my eye.'},
        {sol:['I','can’t','see','anything','.'], w:'نفيٌ ← anything.', f:'I can’t see anything.'},
        {sol:['Everything','is','fine','.'], w:'مفردٌ ← is.', f:'Everything is fine.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'nothing →', ask:'اختر', o:['لا شيء','شيءٌ ما'], a:0, w:'لا شيء.', f:'← <u>لا شيء</u>'},
        {p:'Is there ___ to eat?', ask:'اختر', o:['anything','something'], a:0, w:'سؤالٌ ← anything.', f:'Is there <u>anything</u> ...?'},
        {p:'I have ___ for you. (إثبات)', ask:'اختر', o:['something','anything'], a:0, w:'إثباتٌ.', f:'I have <u>something</u> ...'},
        {p:'الضميرُ المبهمُ يأخذُ فعلًا:', ask:'اختر', o:['مفردًا (is)','جمعًا (are)'], a:0, w:'مفرد.', f:'← <u>مفردًا (is)</u>'},
        {p:'___ is ready for the trip.', ask:'اختر', o:['Everything','Anything'], a:0, w:'كلُّ شيء.', f:'<u>Everything</u> is ready.'}
      ]}
    ]
  };
})();
