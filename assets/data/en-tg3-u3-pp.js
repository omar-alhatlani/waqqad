/* ============================================================
   درس: Grammar — Present Perfect + since / for (المضارع التام)
   الإنجليزية · السادس الابتدائي · ف١ · Top Goal 3 · Unit 3 (Interests)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG3_U3_PP'] = {
    id:'EN_TG3_U3_PP',
    title:'Grammar — Present Perfect + since / for',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'المضارع التامّ + since / for',
      intro:'<b>المضارعُ التامّ</b> يربطُ الماضيَ بالحاضر (فعلٌ بدأ في الماضي ويستمرّ أثرُه الآن). تركيبُه: <span class="tok-focus">have</span> / <span class="tok-focus">has</span> + التصريفَ الثالث (V3). نستعملُ <span class="tok-focus">has</span> مع المفرد الغائب (he/she/it)، و<span class="tok-focus">have</span> مع البقيّة (I/you/we/they والجمع المنتهي بـ <span class="tok-plural">s</span>). ومعه: <span class="tok-focus">since</span> لنقطةِ بداية (since 2020)، و<span class="tok-focus">for</span> لمدّة (for two years).',
      formula:'<span class="tok-focus">have</span> / <span class="tok-focus">has</span> + V3&nbsp;&nbsp;( + <span class="tok-focus">since</span> / <span class="tok-focus">for</span> )',
      table:[['المفرد الغائب','She <span class="tok-focus">has</span> played for years.'],['البقيّة والجمع','They <span class="tok-focus">have</span> lived here.'],['<span class="tok-focus">since</span>','نقطةُ بداية: since 2020'],['<span class="tok-focus">for</span>','مدّة: for two year<span class="tok-plural">s</span>']],
      examples:['I <span class="tok-focus">have</span> played the oud <span class="tok-focus">for</span> three year<span class="tok-plural">s</span>.','She <span class="tok-focus">has</span> loved music <span class="tok-focus">since</span> she was a child.'],
      trick:'مفردٌ غائب ← <span class="tok-focus">has</span> ، والبقيّةُ ← <span class="tok-focus">have</span> ، ثم V3. و<span class="tok-focus">since</span> لبدايةٍ محدّدة، و<span class="tok-focus">for</span> لمدّةٍ زمنيّة.'
    },
    stages:[
      { type:'choice', name:'have أم has؟', hint:'مفردٌ غائب ← has', qs:[
        {p:'She ___ played the violin for years.', ask:'اختر', o:['has','have'], a:0, w:'مفردٌ غائب (She) ← <code>has</code>.', f:'She <u>has</u> played ...'},
        {p:'They ___ collected many stamps.', ask:'اختر', o:['have','has'], a:0, w:'جمعٌ (They) ← <code>have</code>.', f:'They <u>have</u> collected ...'},
        {p:'I ___ known him since 2020.', ask:'اختر', o:['have','has'], a:0, w:'<code>I</code> ← have.', f:'I <u>have</u> known ...'},
        {p:'He ___ lived here for a year.', ask:'اختر', o:['has','have'], a:0, w:'مفردٌ غائب (He) ← <code>has</code>.', f:'He <u>has</u> lived ...'}
      ]},
      { type:'gap', name:'since أم for؟', hint:'نقطةُ بداية ← since · مدّة ← for', qs:[
        {p:'I have played chess ___ 2019.', o:['since','for'], a:0, w:'نقطةُ بداية ← <code>since</code>.', f:'... <u>since</u> 2019.'},
        {p:'She has studied music ___ five years.', o:['for','since'], a:0, w:'مدّة ← <code>for</code>.', f:'... <u>for</u> five years.'},
        {p:'We have been friends ___ we were young.', o:['since','for'], a:0, w:'نقطةُ بداية ← <code>since</code>.', f:'... <u>since</u> we were young.'},
        {p:'He has had this drum ___ a long time.', o:['for','since'], a:0, w:'مدّة ← <code>for</code>.', f:'... <u>for</u> a long time.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['She','have','played','for','years','.'], bad:1, fix:'has', w:'مفردٌ غائب (She) ← <code>has</code>.', f:'She <u>has</u> played for years.'},
        {words:['I','have','known','him','for','2019','.'], bad:4, fix:'since', w:'2019 نقطةُ بداية ← <code>since</code>.', f:'... <u>since</u> 2019.'},
        {words:['They','has','collected','stamps','.'], bad:1, fix:'have', w:'جمعٌ (They) ← <code>have</code>.', f:'They <u>have</u> collected stamps.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['She','has','played','the','violin','for','years','.'], w:'<code>has + V3</code> ثم <code>for + مدّة</code>.', f:'She has played the violin for years.'},
        {sol:['I','have','known','him','since','2019','.'], w:'<code>have + V3</code> ثم <code>since + بداية</code>.', f:'I have known him since 2019.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'She ___ played for years.', ask:'اختر', o:['has','have'], a:0, w:'مفردٌ غائب ← has.', f:'She <u>has</u> ...'},
        {p:'They ___ collected stamps.', ask:'اختر', o:['have','has'], a:0, w:'جمعٌ ← have.', f:'They <u>have</u> ...'},
        {p:'I have played chess ___ 2019.', ask:'اختر', o:['since','for'], a:0, w:'بداية ← since.', f:'... <u>since</u> 2019.'},
        {p:'She has studied ___ five years.', ask:'اختر', o:['for','since'], a:0, w:'مدّة ← for.', f:'... <u>for</u> five years.'},
        {p:'المضارعُ التامّ تركيبُه:', ask:'اختر', o:['have/has + V3','will + V1'], a:0, w:'<code>have/has + التصريف الثالث</code>.', f:'← <u>have/has + V3</u>'}
      ]}
    ]
  };
})();
