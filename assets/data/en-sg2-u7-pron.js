/* ============================================================
   Lesson: Pronouns & Conjunctions (because/so, so/neither)
   English · Super Goal 2 · Unit 7 (What Happened?) · صفحة ٥٨
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U7_PRON'] = {
    id:'EN_SG2_U7_PRON',
    title:'Pronouns & Conjunctions',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'someone/no one/anything · because/so · So/Neither',
      intro:'ضمائرُ غيرِ محدّدة: <code>someone</code> (شخصٌ ما، إثبات)، <code>no one</code> (لا أحد)، <code>anything</code> (أيُّ شيء، نفي/سؤال)، <code>nothing</code> (لا شيء). و<code>because</code> تُعطي السبب، و<code>so</code> تُعطي النتيجة. ولإظهار الموافقة: <code>So am I</code> (مع الإثبات) و<code>Neither am I</code> (مع النفي).',
      table:[['someone / no one','شخصٌ ما / لا أحد'],['anything / nothing','أيُّ شيء / لا شيء'],['because / so','السبب / النتيجة'],['So… / Neither…','موافقةٌ (إثبات / نفي)']],
      trick:'<code>because</code> + السبب، و<code>so</code> + النتيجة. مع النفي نستعمل <code>anything</code> (<code>I didn’t see anything</code>). الموافقة: إثباتٌ ← <code>So am I</code>، نفيٌ ← <code>Neither am I</code>.'
    },
    stages:[
      { type:'choice', name:'الضمير المناسب', hint:'إثبات someone · نفي anything', qs:[
        {p:'___ helped the driver. (شخصٌ ما)', o:['Someone','Anyone','Nothing'], a:0, w:'إثبات ← <code>Someone</code>.', f:'<u>Someone</u> helped…'},
        {p:'I didn’t see ___. (أيّ شيء)', o:['anything','something','no one'], a:0, w:'مع النفي ← <code>anything</code>.', f:'didn’t see <u>anything</u>.'},
        {p:'Fortunately, ___ was hurt. (لا أحد)', o:['no one','someone','anything'], a:0, w:'<code>no one</code> = لا أحد.', f:'<u>no one</u> was hurt.'},
        {p:'___ was wrong with the car. (لا شيء)', o:['Nothing','Anything','Someone'], a:0, w:'<code>Nothing</code> = لا شيء.', f:'<u>Nothing</u> was wrong.'},
        {p:'Did you hear ___? (سؤال)', o:['anything','something','no one'], a:0, w:'في السؤال ← <code>anything</code>.', f:'hear <u>anything</u>?'}
      ]},
      { type:'gap', name:'because أم so؟', hint:'because سبب · so نتيجة', qs:[
        {p:'I’m worried ___ I have a test. (سبب)', o:['because','so'], a:0, w:'السبب ← <code>because</code>.', f:'worried <u>because</u> I have a test.'},
        {p:'He was angry, ___ he shouted. (نتيجة)', o:['so','because'], a:0, w:'النتيجة ← <code>so</code>.', f:'angry, <u>so</u> he shouted.'},
        {p:'She’s happy ___ she passed. (سبب)', o:['because','so'], a:0, w:'السبب ← <code>because</code>.', f:'happy <u>because</u> she passed.'},
        {p:'It was raining, ___ we stayed home. (نتيجة)', o:['so','because'], a:0, w:'النتيجة ← <code>so</code>.', f:'raining, <u>so</u> we stayed home.'},
        {p:'Why are you tired?  ___ I worked a lot.', o:['Because','So'], a:0, w:'جوابُ <code>Why</code> ← <code>Because</code>.', f:'<u>Because</u> I worked a lot.'}
      ]},
      { type:'choice', name:'So… / Neither…', hint:'إثبات So · نفي Neither', qs:[
        {p:'A: I’m tired.  B: ___ I. (موافقة إثبات)', ask:'اختر', o:['So am','Neither am','So do'], a:0, w:'الإثبات ← <code>So am I</code>.', f:'<u>So am</u> I.'},
        {p:'A: I’m not hungry.  B: ___ I. (موافقة نفي)', ask:'اختر', o:['Neither am','So am','Neither do'], a:0, w:'النفي ← <code>Neither am I</code>.', f:'<u>Neither am</u> I.'},
        {p:'A: I’m a careful driver.  B: So ___ I.', ask:'اختر', o:['am','do','is'], a:0, w:'مع <code>be</code>: <code>So am I</code>.', f:'So <u>am</u> I.'},
        {p:'“So am I” shows agreement with:', ask:'اختر', o:['an affirmative statement','a negative statement'], a:0, w:'<code>So</code> مع الإثبات.', f:'affirmative.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['I','didn’t','see','something','.'], bad:3, fix:'anything', w:'مع النفي ← <code>anything</code>.', f:'didn’t see <u>anything</u>.'},
        {words:['I’m','worried','so','I','have','a','test','.'], bad:2, fix:'because', w:'السبب ← <code>because</code>.', f:'worried <u>because</u>…'},
        {words:['A',':','I’m','tired','.','B',':','Neither','am','I','.'], bad:7, fix:'So', w:'الموافقةُ مع الإثبات ← <code>So am I</code>.', f:'<u>So</u> am I.'},
        {words:['No','one','were','hurt','.'], bad:2, fix:'was', w:'<code>no one</code> مفرد ← <code>was</code>.', f:'No one <u>was</u> hurt.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['Someone','helped','the','driver','.'], w:'إثبات ← someone.', f:'Someone helped the driver.'},
        {sol:['I’m','worried','because','of','the','test','.'], w:'because = السبب.', f:'I’m worried because of the test.'},
        {sol:['No','one','was','hurt','.'], w:'لا أحد.', f:'No one was hurt.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'___ helped the driver.', ask:'اختر', o:['Someone','Anything'], a:0, w:'إثبات.', f:'<u>Someone</u>.'},
        {p:'I didn’t see ___.', ask:'اختر', o:['anything','something'], a:0, w:'نفي.', f:'<u>anything</u>.'},
        {p:'I’m worried ___ I have a test.', ask:'اختر', o:['because','so'], a:0, w:'سبب.', f:'<u>because</u>.'},
        {p:'He was angry, ___ he shouted.', ask:'اختر', o:['so','because'], a:0, w:'نتيجة.', f:'<u>so</u>.'},
        {p:'A: I’m tired.  B: ___ I.', ask:'اختر', o:['So am','Neither am'], a:0, w:'إثبات ← So am I.', f:'<u>So am</u> I.'},
        {sol:['No','one','was','hurt','.'], w:'لا أحد.', f:'No one was hurt.'},
        {p:'___ was wrong with the car.', ask:'اختر', o:['Nothing','Anything'], a:0, w:'لا شيء.', f:'<u>Nothing</u>.'},
        {p:'A: I’m not hungry.  B: ___ I.', ask:'اختر', o:['Neither am','So am'], a:0, w:'نفي ← Neither.', f:'<u>Neither am</u> I.'},
        {p:'Did you hear ___?', ask:'اختر', o:['anything','someone'], a:0, w:'سؤال.', f:'<u>anything</u>.'}
      ]}
    ]
  };
})();
