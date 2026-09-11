/* ============================================================
   درس: Grammar — Future with "be going to"
   الإنجليزية · الرابع الابتدائي · ف١ · Top Goal 1 · Unit 8 (Weather)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب المحفوظ).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG1_U8_FUTURE'] = {
    id:'EN_TG1_U8_FUTURE',
    title:'Grammar — Future: be going to',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'التنبّؤُ بالمستقبل: be going to',
      intro:'نتنبّأُ بالمستقبلِ أو نتحدّثُ عن خطّةٍ بـ <span class="tok-focus">be going to</span> + فعلٍ مجرَّد. نُصرّفُ <code>be</code> حسبَ الفاعل: I <span class="tok-focus">am going to</span> ، he/she/it <span class="tok-focus">is going to</span> ، you/we/they <span class="tok-focus">are going to</span>. النفي: isn’t/aren’t going to.',
      formula:'subject + <span class="tok-focus">am/is/are going to</span> + verb',
      table:[['I','I <span class="tok-focus">am going to</span> read.'],['he/she/it','It <span class="tok-focus">is going to</span> rain.'],['you/we/they','They <span class="tok-focus">are going to</span> play.'],['السؤال','What <span class="tok-focus">is</span> the weather going to be like?']],
      examples:['It <span class="tok-focus">is going to</span> be cold, but it <span class="tok-focus">isn’t going to</span> rain.','The kid<span class="tok-plural">s</span> <span class="tok-focus">are going to</span> visit the zoo tomorrow.'],
      trick:'اختَرْ <code>am/is/are</code> حسبَ الفاعلِ، ثمّ <span class="tok-focus">going to</span> + فعلٌ مجرَّد. للطقسِ نقول: <code>It is going to rain</code>.'
    },
    stages:[
      { type:'choice', name:'am / is / are؟', hint:'حسبَ الفاعل', qs:[
        {p:'It ___ going to rain.', ask:'اختر', o:['is','are'], a:0, w:'<code>it</code> ← is.', f:'It <u>is</u> going to rain.'},
        {p:'They ___ going to play.', ask:'اختر', o:['are','is'], a:0, w:'<code>they</code> ← are.', f:'They <u>are</u> going to play.'},
        {p:'I ___ going to study.', ask:'اختر', o:['am','is'], a:0, w:'<code>I</code> ← am.', f:'I <u>am</u> going to study.'},
        {p:'بعد going to يأتي الفعلُ:', ask:'اختر', o:['مجرَّدًا','بـ -ing'], a:0, w:'<code>going to rain</code> مجرَّد.', f:'← <u>مجرَّدًا</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'be + going to + فعل', qs:[
        {p:'Look at the clouds! It ___ going to rain.', o:['is','are','am'], a:0, w:'<code>it</code> ← is.', f:'It <u>is</u> going to rain.'},
        {p:'We ___ going to visit our grandparents.', o:['are','is','am'], a:0, w:'<code>we</code> ← are.', f:'We <u>are</u> going to visit ...'},
        {p:'It is going to ___ hot tomorrow.', o:['be','is','being'], a:0, w:'مجرَّد بعد going to ← <code>be</code>.', f:'... going to <u>be</u> hot.'}
      ]},
      { type:'choice', name:'اختر الصواب', hint:'صرّفْ be بدقّة', qs:[
        {p:'She ___ going to travel next week.', ask:'اختر', o:['is','are'], a:0, w:'<code>she</code> ← is.', f:'She <u>is</u> going to travel.'},
        {p:'What ___ the weather going to be like?', ask:'اختر', o:['is','are'], a:0, w:'<code>the weather</code> مفرد ← is.', f:'What <u>is</u> the weather going to be like?'},
        {p:'It ___ going to be cold today.', ask:'اختر', o:['is','am'], a:0, w:'<code>it</code> ← is.', f:'It <u>is</u> going to be cold.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['It','are','going','to','rain','.'], bad:1, fix:'is', w:'<code>it</code> يأخذُ <code>is</code>.', f:'It <u>is</u> going to rain.'},
        {words:['They','is','going','to','play','.'], bad:1, fix:'are', w:'<code>they</code> يأخذُ <code>are</code>.', f:'They <u>are</u> going to play.'},
        {words:['It','is','going','to','rains','.'], bad:4, fix:'rain', w:'مجرَّد بعد going to ← <code>rain</code>.', f:'It is going to <u>rain</u>.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب', qs:[
        {sol:['It','is','going','to','rain','.'], w:'it ← is.', f:'It is going to rain.'},
        {sol:['We','are','going','to','travel','.'], w:'we ← are.', f:'We are going to travel.'},
        {sol:['I','am','going','to','study','.'], w:'I ← am.', f:'I am going to study.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'It ___ going to snow.', ask:'اختر', o:['is','are'], a:0, w:'it ← is.', f:'It <u>is</u> going to snow.'},
        {p:'They ___ going to watch a movie.', ask:'اختر', o:['are','is'], a:0, w:'they ← are.', f:'They <u>are</u> going to watch ...'},
        {p:'بعد going to الفعلُ:', ask:'اختر', o:['مجرَّد','بـ -ed'], a:0, w:'مجرَّد.', f:'← <u>مجرَّد</u>'},
        {p:'I ___ going to help my mother.', ask:'اختر', o:['am','is'], a:0, w:'I ← am.', f:'I <u>am</u> going to help ...'},
        {p:'What ___ the weather going to be like?', ask:'اختر', o:['is','are'], a:0, w:'the weather ← is.', f:'What <u>is</u> ...?'}
      ]}
    ]
  };
})();
