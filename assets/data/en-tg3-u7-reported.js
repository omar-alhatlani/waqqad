/* ============================================================
   درس: Grammar — Reported Speech: say / tell (الكلام المنقول)
   الإنجليزية · السادس الابتدائي · ف١ · Top Goal 3 · Unit 7 (Styles)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG3_U7_REPORTED'] = {
    id:'EN_TG3_U7_REPORTED',
    title:'Grammar — Reported Speech: say / tell',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'الكلام المنقول (say / tell)',
      intro:'حين ننقلُ كلامَ شخصٍ نستعملُ <span class="tok-focus">said</span> أو <span class="tok-focus">told</span> ونُرجِعُ الفعلَ خطوةً إلى الماضي (backshift): المضارعُ البسيط ← ماضٍ بسيط، و<code>am/is</code> ← <span class="tok-focus">was</span>، و<code>are</code> ← <span class="tok-focus">were</span>. والفرق: <span class="tok-focus">tell</span> يتبعُها مفعولٌ (told <b>me</b>)، أمّا <span class="tok-focus">say</span> فلا (said).',
      formula:'<span class="tok-focus">said</span> / <span class="tok-focus">told</span> (+ someone) + [present → past]',
      table:[['"I am tired." →','He <span class="tok-focus">said</span> he <span class="tok-focus">was</span> tired.'],['"We are ready." →','They <span class="tok-focus">said</span> they <span class="tok-focus">were</span> ready.'],['<span class="tok-focus">tell</span>','يتبعُها مفعول: told <b>me</b>'],['<span class="tok-focus">say</span>','بلا مفعول: said (that)...']],
      examples:['"I like art." → She <span class="tok-focus">said</span> she liked art.','"We are shopping." → He <span class="tok-focus">told</span> me they <span class="tok-focus">were</span> shopping.'],
      trick:'انقلِ الفعلَ خطوةً للماضي. و<span class="tok-focus">tell</span> تحتاجُ مفعولًا (told <b>him</b>)، و<span class="tok-focus">say</span> لا.'
    },
    stages:[
      { type:'choice', name:'say أم tell؟', hint:'tell + مفعول · say بلا مفعول', qs:[
        {p:'He ___ me he was busy.', ask:'اختر', o:['told','said'], a:0, w:'وُجِد مفعولٌ (me) ← <code>told</code>.', f:'He <u>told</u> me ...'},
        {p:'She ___ that she liked it.', ask:'اختر', o:['said','told'], a:0, w:'بلا مفعول ← <code>said</code>.', f:'She <u>said</u> that ...'},
        {p:'They ___ us the news.', ask:'اختر', o:['told','said'], a:0, w:'مفعولٌ (us) ← <code>told</code>.', f:'They <u>told</u> us ...'}
      ]},
      { type:'gap', name:'أرجِعِ الفعل', hint:'am/is ← was · are ← were', qs:[
        {p:'"I am tired." → He said he ___ tired.', o:['was','is','are'], a:0, w:'<code>am → was</code>.', f:'... he <u>was</u> tired.'},
        {p:'"We are ready." → They said they ___ ready.', o:['were','are','was'], a:0, w:'<code>are → were</code>.', f:'... they <u>were</u> ready.'},
        {p:'"She likes tea." → He said she ___ tea.', o:['liked','likes','like'], a:0, w:'مضارعٌ ← ماضٍ (liked).', f:'... she <u>liked</u> tea.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['He','said','me','he','was','busy','.'], bad:1, fix:'told', w:'وُجِد مفعولٌ (me) ← <code>told</code> لا said.', f:'He <u>told</u> me he was busy.'},
        {words:['She','said','she','is','happy','.'], bad:3, fix:'was', w:'الكلامُ المنقول ← <code>is → was</code>.', f:'She said she <u>was</u> happy.'},
        {words:['They','told','they','were','late','.'], bad:1, fix:'said', w:'لا مفعولَ هنا ← <code>said</code>.', f:'They <u>said</u> they were late.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['He','said','he','was','tired','.'], w:'<code>said + (present → past)</code>.', f:'He said he was tired.'},
        {sol:['She','told','me','she','was','busy','.'], w:'<code>told + me</code> ثم backshift.', f:'She told me she was busy.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'He ___ me he was busy.', ask:'اختر', o:['told','said'], a:0, w:'مفعول ← told.', f:'He <u>told</u> me ...'},
        {p:'"I am tired." → He said he ___ tired.', ask:'اختر', o:['was','is'], a:0, w:'am → was.', f:'... <u>was</u> tired.'},
        {p:'tell يتبعُها:', ask:'اختر', o:['مفعول (me/us)','بلا مفعول'], a:0, w:'مفعولٌ لازم.', f:'← <u>مفعول</u>'},
        {p:'"We are ready." → They said they ___ ready.', ask:'اختر', o:['were','are'], a:0, w:'are → were.', f:'... <u>were</u> ready.'},
        {p:'في الكلام المنقول نُرجِع الفعل:', ask:'اختر', o:['خطوةً إلى الماضي','إلى المستقبل'], a:0, w:'backshift للماضي.', f:'← <u>خطوةً إلى الماضي</u>'}
      ]}
    ]
  };
})();
