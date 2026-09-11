/* ============================================================
   درس: Grammar — Verb to be: Simple Present & Simple Past
   الإنجليزية · الرابع الابتدائي · ف١ · Top Goal 1 · Unit 8 (Weather)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب المحفوظ).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG1_U8_BE'] = {
    id:'EN_TG1_U8_BE',
    title:'Grammar — to be: present & past',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'am/is/are و was/were',
      intro:'الفعلُ <code>be</code> في المضارع: <span class="tok-focus">am</span> (مع I) ، <span class="tok-focus">is</span> (مع المفرد) ، <span class="tok-focus">are</span> (مع الجمعِ و you). وفي الماضي: <span class="tok-focus">was</span> (مع المفرد و I) ، <span class="tok-focus">were</span> (مع الجمعِ و you). نستعملُه لوصفِ الطقسِ والحال.',
      formula:'حاضر: am/is/are   |   ماضٍ: was/were',
      table:[['I','am (حاضر) / <span class="tok-focus">was</span> (ماضٍ)'],['he/she/it','is / <span class="tok-focus">was</span>'],['you/we/they','are / <span class="tok-focus">were</span>'],['الطقس','It <span class="tok-focus">is</span> sunny. It <span class="tok-focus">was</span> cloudy.']],
      examples:['What is the weather like today? — It <span class="tok-focus">is</span> snowy.','Yesterday it <span class="tok-focus">was</span> cloudy, but it <span class="tok-focus">wasn’t</span> rainy.'],
      trick:'المفردُ في الماضي ← <span class="tok-focus">was</span> ، والجمعُ و you ← <span class="tok-focus">were</span>. اليومَ ← is/are، أمسِ ← was/were.'
    },
    stages:[
      { type:'choice', name:'حاضرٌ أم ماضٍ؟', hint:'is/are حاضر · was/were ماضٍ', qs:[
        {p:'It is sunny. →', ask:'اختر', o:['حاضر','ماضٍ'], a:0, w:'<code>is</code> حاضر.', f:'← <u>حاضر</u>'},
        {p:'It was cloudy yesterday. →', ask:'اختر', o:['ماضٍ','حاضر'], a:0, w:'<code>was</code> ماضٍ.', f:'← <u>ماضٍ</u>'},
        {p:'ماضي <code>is</code>:', ask:'اختر', o:['was','were'], a:0, w:'المفردُ ← was.', f:'is → <u>was</u>'},
        {p:'ماضي <code>are</code>:', ask:'اختر', o:['were','was'], a:0, w:'الجمعُ ← were.', f:'are → <u>were</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'صرّفْ be بدقّة', qs:[
        {p:'Today it ___ hot and sunny.', o:['is','are','was'], a:0, w:'<code>it</code> + حاضر ← is.', f:'... it <u>is</u> hot ...'},
        {p:'Yesterday the days ___ cold.', o:['were','was','are'], a:0, w:'جمعٌ + ماضٍ ← were.', f:'... days <u>were</u> cold.'},
        {p:'Last week it ___ very windy.', o:['was','were','is'], a:0, w:'<code>it</code> + ماضٍ ← was.', f:'... it <u>was</u> very windy.'}
      ]},
      { type:'choice', name:'اختر الصواب', hint:'مفردٌ was · جمعٌ were', qs:[
        {p:'The children ___ happy at the park yesterday.', ask:'اختر', o:['were','was'], a:0, w:'جمعٌ + ماضٍ ← were.', f:'... children <u>were</u> happy.'},
        {p:'She ___ sick last night.', ask:'اختر', o:['was','were'], a:0, w:'مفردٌ + ماضٍ ← was.', f:'She <u>was</u> sick ...'},
        {p:'They ___ at school now.', ask:'اختر', o:['are','is'], a:0, w:'جمعٌ + حاضر ← are.', f:'They <u>are</u> at school.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['It','were','cloudy','yesterday','.'], bad:1, fix:'was', w:'<code>it</code> مفردٌ ← was.', f:'It <u>was</u> cloudy yesterday.'},
        {words:['They','was','at','the','beach','.'], bad:1, fix:'were', w:'<code>they</code> جمعٌ ← were.', f:'They <u>were</u> at the beach.'},
        {words:['Today','it','was','sunny','.'], bad:2, fix:'is', w:'<code>today</code> حاضرٌ ← is.', f:'Today it <u>is</u> sunny.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب', qs:[
        {sol:['It','is','sunny','today','.'], w:'حاضرٌ ← is.', f:'It is sunny today.'},
        {sol:['It','was','cloudy','yesterday','.'], w:'ماضٍ ← was.', f:'It was cloudy yesterday.'},
        {sol:['They','were','happy','at','the','park','.'], w:'جمعٌ + ماضٍ.', f:'They were happy at the park.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'ماضي <code>is</code>:', ask:'اختر', o:['was','were'], a:0, w:'was.', f:'← <u>was</u>'},
        {p:'Today it ___ warm.', ask:'اختر', o:['is','was'], a:0, w:'حاضرٌ ← is.', f:'... it <u>is</u> warm.'},
        {p:'Yesterday they ___ at home.', ask:'اختر', o:['were','was'], a:0, w:'جمعٌ + ماضٍ ← were.', f:'... they <u>were</u> at home.'},
        {p:'ماضي <code>are</code>:', ask:'اختر', o:['were','was'], a:0, w:'were.', f:'← <u>were</u>'},
        {p:'She ___ tired last night.', ask:'اختر', o:['was','were'], a:0, w:'مفردٌ + ماضٍ ← was.', f:'She <u>was</u> tired ...'}
      ]}
    ]
  };
})();
