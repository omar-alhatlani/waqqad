/* ============================================================
   درس: Grammar — Present Perfect vs Simple Past (just)
   الإنجليزية · السادس الابتدائي · ف١ · Top Goal 3 · Unit 3 (Interests)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG3_U3_JUST'] = {
    id:'EN_TG3_U3_JUST',
    title:'Grammar — Present Perfect vs Simple Past (just)',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'المضارع التامّ والماضي البسيط (just)',
      intro:'نستعملُ <b>المضارعَ التامّ</b> مع <span class="tok-focus">just</span> لحدثٍ وقعَ <b>قبل قليل</b> وأثرُه الآن: «I <span class="tok-focus">have just</span> finished». وتأتي <span class="tok-focus">just</span> بين <span class="tok-focus">have/has</span> والتصريف الثالث. أمّا <b>الماضي البسيط</b> فلحدثٍ في <b>زمنٍ منتهٍ محدَّد</b> (yesterday، last week، an hour ago): «I finished an hour ago».',
      formula:'<span class="tok-focus">have</span> / <span class="tok-focus">has</span> + <span class="tok-focus">just</span> + V3',
      table:[['قبل قليل (تامّ)','I <span class="tok-focus">have just</span> eaten.'],['موضع just','بين have/has و V3'],['زمنٌ منتهٍ (ماضٍ)','I ate an hour ago.'],['كلماتُ الماضي','yesterday · last week · ... ago']],
      examples:['She <span class="tok-focus">has just</span> arrived from the concert. (الآن تقريبًا)','We watched the match yesterday. (زمنٌ ماضٍ منتهٍ ← ماضٍ بسيط)'],
      trick:'إن كان الحدثُ «قبل قليل» بلا زمنٍ محدَّد ← <span class="tok-focus">have/has just + V3</span>. وإن ذُكِر زمنٌ ماضٍ منتهٍ (yesterday / ago) ← الماضي البسيط.'
    },
    stages:[
      { type:'choice', name:'تامٌّ أم ماضٍ؟', hint:'قبل قليل ← تامّ · زمنٌ منتهٍ ← ماضٍ', qs:[
        {p:'I ___ just finished my homework.', ask:'اختر', o:['have','—  (finished)'], a:0, w:'«قبل قليل» ← <code>have just finished</code>.', f:'I <u>have</u> just finished.'},
        {p:'We ___ the match yesterday.', ask:'اختر', o:['watched','have watched'], a:0, w:'«yesterday» زمنٌ منتهٍ ← ماضٍ بسيط.', f:'We <u>watched</u> ... yesterday.'},
        {p:'She has just ___ .', ask:'اختر', o:['arrived','arrive'], a:0, w:'المضارعُ التامّ ← <code>V3 (arrived)</code>.', f:'She has just <u>arrived</u>.'},
        {p:'They visited the museum ___ .', ask:'اختر', o:['last week','just now'], a:0, w:'الماضي البسيط ← زمنٌ منتهٍ (last week).', f:'... <u>last week</u>.'}
      ]},
      { type:'gap', name:'أين just؟', hint:'just بين have/has و V3', qs:[
        {p:'I have ___ seen this film. (قبل قليل)', o:['just','yesterday'], a:0, w:'<code>have just seen</code>.', f:'I have <u>just</u> seen ...'},
        {p:'He has just ___ his lunch.', o:['eaten','ate'], a:0, w:'التامّ ← <code>V3 (eaten)</code>.', f:'He has just <u>eaten</u>.'},
        {p:'We ___ the concert an hour ago.', o:['left','have left'], a:0, w:'«ago» ← ماضٍ بسيط.', f:'We <u>left</u> ... an hour ago.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['I','have','just','ate','.'], bad:3, fix:'eaten', w:'المضارعُ التامّ ← التصريف الثالث <code>eaten</code>.', f:'I have just <u>eaten</u>.'},
        {words:['She','has','arrived','yesterday','.'], bad:3, fix:'ماضٍ: arrived / أو just', w:'«yesterday» لا تأتي مع التامّ؛ استعمِلِ الماضي أو <code>just</code>.', f:'She arrived <u>yesterday</u>. (ماضٍ)'},
        {words:['We','have','watched','it','last','week','.'], bad:1, fix:'ماضٍ: watched', w:'«last week» زمنٌ منتهٍ ← ماضٍ بسيط.', f:'We <u>watched</u> it last week.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'I ___ just finished.', ask:'اختر', o:['have','—'], a:0, w:'قبل قليل ← have just.', f:'I <u>have</u> just finished.'},
        {p:'We ___ the match yesterday.', ask:'اختر', o:['watched','have watched'], a:0, w:'yesterday ← ماضٍ.', f:'We <u>watched</u> ...'},
        {p:'just تأتي:', ask:'اختر', o:['بين have/has و V3','في آخر الجملة'], a:0, w:'بين have/has والتصريف الثالث.', f:'← <u>بين have/has و V3</u>'},
        {p:'She has just ___ .', ask:'اختر', o:['arrived','arrive'], a:0, w:'V3.', f:'... just <u>arrived</u>.'},
        {p:'كلمةٌ تدلّ على الماضي البسيط:', ask:'اختر', o:['yesterday','just'], a:0, w:'yesterday ← ماضٍ منتهٍ.', f:'← <u>yesterday</u>'}
      ]}
    ]
  };
})();
