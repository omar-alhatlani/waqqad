/* ============================================================
   درس: Grammar — Comparisons of equality: (not) as ... as
   الإنجليزية · السادس الابتدائي · ف١ · Top Goal 3 · Unit 5 (World Sports)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG3_U5_ASAS'] = {
    id:'EN_TG3_U5_ASAS',
    title:'Grammar — (not) as ... as',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'المقارنة بالتساوي: as ... as',
      intro:'للدلالة على <b>التساوي</b> نضعُ الصفةَ بين <span class="tok-focus">as</span> ... <span class="tok-focus">as</span>: «Ali is <span class="tok-focus">as</span> tall <span class="tok-focus">as</span> Omar» (متساويان في الطول). وللنفي (عدم التساوي) نقول <span class="tok-focus">not as</span> ... <span class="tok-focus">as</span>: «My bike is <span class="tok-focus">not as</span> big <span class="tok-focus">as</span> yours» (أصغر). والصفةُ بينهما تبقى مجرَّدةً بلا -er.',
      formula:'<span class="tok-focus">as</span> + adjective + <span class="tok-focus">as</span>&nbsp;&nbsp;(نفي: <span class="tok-focus">not as</span> ... <span class="tok-focus">as</span>)',
      table:[['تساوٍ','<span class="tok-focus">as</span> strong <span class="tok-focus">as</span>'],['عدم تساوٍ','<span class="tok-focus">not as</span> strong <span class="tok-focus">as</span>'],['الصفة','مجرَّدةٌ بلا -er'],['المعنى','as...as = مِثل · not as...as = أقلّ']],
      examples:['A quiz is <span class="tok-focus">as</span> fun <span class="tok-focus">as</span> a match. (متساويان)','My old bike is <span class="tok-focus">not as</span> fast <span class="tok-focus">as</span> the new one. (أبطأ)'],
      trick:'الصفةُ تقعُ بين <span class="tok-focus">as ... as</span> ولا تأخذ <span class="en">-er</span>. و<span class="tok-focus">not as ... as</span> تعني «أقلّ من».'
    },
    stages:[
      { type:'choice', name:'as أم than؟', hint:'التساوي يستعمل as ... as', qs:[
        {p:'Ali is as tall ___ Omar.', ask:'اختر', o:['as','than'], a:0, w:'التساوي ← <code>as ... as</code>.', f:'... as tall <u>as</u> ...'},
        {p:'This team is ___ strong as that one.', ask:'اختر', o:['as','more'], a:0, w:'<code>as strong as</code>.', f:'... <u>as</u> strong as ...'},
        {p:'A quiz is not as ___ as a match.', ask:'اختر', o:['exciting','excitinger'], a:0, w:'الصفةُ مجرَّدةٌ بين as...as.', f:'... not as <u>exciting</u> as ...'}
      ]},
      { type:'gap', name:'أكمل المقارنة', hint:'as + صفة مجرّدة + as', qs:[
        {p:'My bag is ___ heavy as yours. (متساويان)', o:['as','than','more'], a:0, w:'<code>as heavy as</code>.', f:'... <u>as</u> heavy as ...'},
        {p:'A bike is not ___ fast as a car. (أبطأ)', o:['as','than','more'], a:0, w:'<code>not as fast as</code>.', f:'... not <u>as</u> fast as ...'},
        {p:'She runs as ___ as her sister.', o:['fast','faster','fastest'], a:0, w:'الصفة/الظرفُ مجرّد بين as...as.', f:'... as <u>fast</u> as ...'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['Ali','is','as','taller','as','Omar','.'], bad:3, fix:'tall', w:'الصفةُ بين as...as مجرَّدةٌ ← <code>tall</code>.', f:'Ali is as <u>tall</u> as Omar.'},
        {words:['This','is','as','big','than','that','.'], bad:4, fix:'as', w:'التساوي ← <code>as ... as</code> لا than.', f:'... as big <u>as</u> that.'},
        {words:['My','bike','is','not','as','fast','than','yours','.'], bad:6, fix:'as', w:'<code>not as fast as</code>.', f:'... not as fast <u>as</u> yours.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['Ali','is','as','tall','as','Omar','.'], w:'<code>as + tall + as</code>.', f:'Ali is as tall as Omar.'},
        {sol:['My','bike','is','not','as','fast','as','yours','.'], w:'<code>not as fast as</code>.', f:'My bike is not as fast as yours.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'Ali is as tall ___ Omar.', ask:'اختر', o:['as','than'], a:0, w:'as ... as.', f:'... tall <u>as</u> ...'},
        {p:'الصفةُ بين as...as تكون:', ask:'اختر', o:['مجرَّدة (بلا -er)','بـ -er'], a:0, w:'مجرَّدةٌ بلا -er.', f:'← <u>مجرَّدة</u>'},
        {p:'not as ... as تعني:', ask:'اختر', o:['أقلّ من','أكثر من'], a:0, w:'أقلّ من.', f:'← <u>أقلّ من</u>'},
        {p:'This team is ___ strong as that one.', ask:'اختر', o:['as','more'], a:0, w:'as strong as.', f:'... <u>as</u> strong as ...'},
        {p:'A bike is not ___ fast as a car.', ask:'اختر', o:['as','than'], a:0, w:'not as fast as.', f:'... not <u>as</u> fast as ...'}
      ]}
    ]
  };
})();
