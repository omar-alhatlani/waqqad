/* ============================================================
   درس: Grammar — Present Perfect Simple (المضارع التامّ)
   الإنجليزية · الخامس الابتدائي · ف١ · Top Goal 2 · Unit 7 (Trips)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG2_U7_PRESENTPERFECT'] = {
    id:'EN_TG2_U7_PRESENTPERFECT',
    title:'Grammar — Present Perfect Simple',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'المضارع التامّ',
      intro:'<b>المضارعُ التامّ</b> يعبّرُ عن تجربةٍ أو فعلٍ حدثَ وأثرُه باقٍ الآن، بلا زمنٍ محدَّد. تركيبُه: <span class="tok-focus">have</span> / <span class="tok-focus">has</span> + التصريفَ الثالث (V3). نستعملُ <span class="tok-focus">has</span> مع المفرد الغائب (he/she/it)، و<span class="tok-focus">have</span> مع البقيّة (I/you/we/they والجمع المنتهي بـ <span class="tok-plural">s</span>).',
      formula:'<span class="tok-focus">have</span> / <span class="tok-focus">has</span> + V3',
      table:[['المفرد الغائب','She <span class="tok-focus">has</span> traveled.'],['البقيّة والجمع','They <span class="tok-focus">have</span> arrived.'],['النفي','He <span class="tok-focus">hasn\'t</span> packed.'],['المعنى','تجربةٌ/أثرٌ باقٍ الآن']],
      examples:['I <span class="tok-focus">have</span> visited many countries.','The passenger<span class="tok-plural">s</span> <span class="tok-focus">have</span> boarded the plane.'],
      trick:'مفردٌ غائب ← <span class="tok-focus">has</span> ، والبقيّةُ ← <span class="tok-focus">have</span> ، ثم <b>التصريف الثالث</b> (V3): gone, seen, taken.'
    },
    stages:[
      { type:'choice', name:'have أم has؟', hint:'مفردٌ غائب ← has', qs:[
        {p:'She ___ visited Makkah.', ask:'اختر', o:['has','have'], a:0, w:'مفردٌ غائب ← has.', f:'She <u>has</u> visited ...'},
        {p:'They ___ arrived at the station.', ask:'اختر', o:['have','has'], a:0, w:'جمعٌ ← have.', f:'They <u>have</u> arrived ...'},
        {p:'I ___ bought the tickets.', ask:'اختر', o:['have','has'], a:0, w:'I ← have.', f:'I <u>have</u> bought ...'},
        {p:'He ___ packed his suitcase.', ask:'اختر', o:['has','have'], a:0, w:'مفردٌ غائب ← has.', f:'He <u>has</u> packed ...'}
      ]},
      { type:'gap', name:'التصريف الثالث', hint:'have/has + V3', qs:[
        {p:'We have ___ to Riyadh. (go → V3)', o:['gone','went','go'], a:0, w:'V3 من go ← gone.', f:'... have <u>gone</u> ...'},
        {p:'She has ___ that movie. (see → V3)', o:['seen','saw','see'], a:0, w:'V3 من see ← seen.', f:'... has <u>seen</u> ...'},
        {p:'They have ___ the train. (take → V3)', o:['taken','took','take'], a:0, w:'V3 من take ← taken.', f:'... have <u>taken</u> ...'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['She','have','visited','Makkah','.'], bad:1, fix:'has', w:'مفردٌ غائب ← <code>has</code>.', f:'She <u>has</u> visited Makkah.'},
        {words:['We','have','went','home','.'], bad:2, fix:'gone', w:'المضارعُ التامّ ← التصريف الثالث <code>gone</code>.', f:'We have <u>gone</u> home.'},
        {words:['They','has','arrived','.'], bad:1, fix:'have', w:'جمعٌ ← <code>have</code>.', f:'They <u>have</u> arrived.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'She ___ traveled a lot.', ask:'اختر', o:['has','have'], a:0, w:'مفرد غائب ← has.', f:'← <u>has</u>'},
        {p:'They ___ arrived.', ask:'اختر', o:['have','has'], a:0, w:'جمع ← have.', f:'← <u>have</u>'},
        {p:'المضارعُ التامّ تركيبُه:', ask:'اختر', o:['have/has + V3','will + V1'], a:0, w:'have/has + التصريف الثالث.', f:'← <u>have/has + V3</u>'},
        {p:'We have ___ . (go → V3)', ask:'اختر', o:['gone','went'], a:0, w:'gone.', f:'← <u>gone</u>'},
        {p:'مع he نستعمل:', ask:'اختر', o:['has','have'], a:0, w:'has.', f:'← <u>has</u>'}
      ]}
    ]
  };
})();
