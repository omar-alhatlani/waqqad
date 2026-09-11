/* ============================================================
   درس: Grammar — Present Perfect vs. Simple Past
   الإنجليزية · الخامس الابتدائي · ف١ · Top Goal 2 · Unit 8 (Outfits)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG2_U8_PPVSPAST'] = {
    id:'EN_TG2_U8_PPVSPAST',
    title:'Grammar — Present Perfect vs. Simple Past',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'التامّ أم الماضي البسيط؟',
      intro:'نستعملُ <b>المضارعَ التامّ</b> (<span class="tok-focus">have/has + V3</span>) لتجربةٍ أو حدثٍ <b>بلا زمنٍ محدَّد</b>: «I <span class="tok-focus">have worn</span> this before». ونستعملُ <b>الماضيَ البسيط</b> (<span class="tok-focus">V2</span>) لحدثٍ في <b>زمنٍ منتهٍ محدَّد</b> (yesterday، last week): «I <span class="tok-focus">wore</span> it yesterday».',
      formula:'present perfect (no time) &nbsp;·&nbsp; simple past + <span class="tok-focus">finished time</span>',
      table:[['تجربةٌ بلا زمن (تامّ)','I <span class="tok-focus">have visited</span> Makkah.'],['زمنٌ منتهٍ (ماضٍ)','I <span class="tok-focus">visited</span> it last year.'],['أدلّةُ الماضي','yesterday · last week · ago'],['أدلّةُ التامّ','ever · never · already · yet']],
      examples:['I <span class="tok-focus">have bought</span> a new tie. (بلا زمن)','I <span class="tok-focus">bought</span> it yesterday. (زمنٌ منتهٍ ← ماضٍ)'],
      trick:'زمنٌ منتهٍ محدَّد (yesterday) ← <b>ماضٍ بسيط</b>. لا زمنَ محدَّد أو تجربة ← <b>مضارعٌ تامّ</b>.'
    },
    stages:[
      { type:'choice', name:'تامٌّ أم ماضٍ؟', hint:'زمنٌ محدَّد ← ماضٍ', qs:[
        {p:'I ___ this shirt yesterday.', ask:'اختر', o:['wore','have worn'], a:0, w:'«yesterday» ← ماضٍ.', f:'I <u>wore</u> ... yesterday.'},
        {p:'I ___ this style before. (بلا زمن)', ask:'اختر', o:['have tried','tried'], a:0, w:'تجربةٌ بلا زمن ← تامّ.', f:'I <u>have tried</u> ... before.'},
        {p:'She ___ a necklace last week.', ask:'اختر', o:['bought','has bought'], a:0, w:'«last week» ← ماضٍ.', f:'She <u>bought</u> ... last week.'},
        {p:'We ___ never seen this uniform.', ask:'اختر', o:['have','did'], a:0, w:'«never» ← تامّ.', f:'We <u>have</u> never seen ...'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'yesterday ← ماضٍ · ever/never ← تامّ', qs:[
        {p:'They ___ the museum last year. (visit)', o:['visited','have visited'], a:0, w:'«last year» ← ماضٍ.', f:'They <u>visited</u> ... last year.'},
        {p:'Have you ___ worn a costume? (ever)', o:['ever','yesterday'], a:0, w:'مع التامّ ← ever.', f:'... you <u>ever</u> worn ...?'},
        {p:'I ___ my keys an hour ago. (lose)', o:['lost','have lost'], a:0, w:'«ago» ← ماضٍ.', f:'I <u>lost</u> ... an hour ago.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['I','have','worn','it','yesterday','.'], bad:1, fix:'ماضٍ: wore', w:'«yesterday» زمنٌ منتهٍ ← ماضٍ بسيط <code>wore</code>.', f:'I <u>wore</u> it yesterday.'},
        {words:['She','bought','a','ring','before','.'], bad:1, fix:'has bought', w:'«before» بلا زمنٍ محدَّد ← تامّ <code>has bought</code>.', f:'She <u>has bought</u> a ring before.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'I ___ it yesterday.', ask:'اختر', o:['wore','have worn'], a:0, w:'yesterday ← ماضٍ.', f:'← <u>wore</u>'},
        {p:'I ___ this before.', ask:'اختر', o:['have tried','tried'], a:0, w:'بلا زمن ← تامّ.', f:'← <u>have tried</u>'},
        {p:'«yesterday» تدلّ على:', ask:'اختر', o:['الماضي البسيط','المضارع التامّ'], a:0, w:'الماضي البسيط.', f:'← <u>الماضي البسيط</u>'},
        {p:'«never / ever» تصحبان:', ask:'اختر', o:['المضارع التامّ','الماضي البسيط'], a:0, w:'المضارع التامّ.', f:'← <u>المضارع التامّ</u>'}
      ]}
    ]
  };
})();
