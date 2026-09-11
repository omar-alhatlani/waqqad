/* ============================================================
   درس: Grammar — Simple Present vs. Simple Past (المضارع والماضي البسيط)
   الإنجليزية · الخامس الابتدائي · ف١ · Top Goal 2 · Unit 1 (Personal Interests)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG2_U1_TENSES'] = {
    id:'EN_TG2_U1_TENSES',
    title:'Grammar — Simple Present vs. Simple Past',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'المضارع البسيط والماضي البسيط',
      intro:'نستعملُ <b>المضارعَ البسيط</b> للعاداتِ والأمور المتكرّرة، ودليلُه كلماتٌ مثل <span class="tok-focus">every day</span> و<span class="tok-focus">usually</span>؛ والفعلُ مجرّدٌ ويأخذُ <b>s</b> مع المفرد الغائب (he play<b>s</b>). ونستعملُ <b>الماضيَ البسيط</b> لِما انتهى، ودليلُه <span class="tok-focus">yesterday</span> و<span class="tok-focus">last week</span> و<span class="tok-focus">ago</span>؛ والفعلُ في تصريفه الثاني (played، went).',
      formula:'<span class="tok-focus">every day</span> → present &nbsp;·&nbsp; <span class="tok-focus">yesterday</span> → past (V2)',
      table:[['مضارع (عادة)','I play <span class="tok-focus">every day</span>.'],['مفرد غائب','He play<b>s</b> every day.'],['ماضٍ (انتهى)','I played <span class="tok-focus">yesterday</span>.'],['أدلّةُ الماضي','yesterday · last week · ago']],
      examples:['I visit my uncle <span class="tok-focus">every week</span>. (مضارعٌ — عادة)','I visited him <span class="tok-focus">yesterday</span>. (ماضٍ — انتهى)'],
      trick:'كلمةُ <span class="tok-focus">every day</span> ← مضارع، وكلمةُ <span class="tok-focus">yesterday</span>/<span class="tok-focus">ago</span> ← ماضٍ (V2). ومع المفرد الغائب في المضارع أضِفْ <b>s</b>.'
    },
    stages:[
      { type:'choice', name:'مضارعٌ أم ماضٍ؟', hint:'انظُرْ إلى كلمة الزمن', qs:[
        {p:'I ___ football every day.', ask:'اختر', o:['play','played'], a:0, w:'«every day» ← مضارع.', f:'I <u>play</u> ... every day.'},
        {p:'She ___ the museum yesterday.', ask:'اختر', o:['visited','visits'], a:0, w:'«yesterday» ← ماضٍ.', f:'She <u>visited</u> ... yesterday.'},
        {p:'We ___ to school last week.', ask:'اختر', o:['walked','walk'], a:0, w:'«last week» ← ماضٍ.', f:'We <u>walked</u> ... last week.'},
        {p:'He ___ tea every morning.', ask:'اختر', o:['drinks','drank'], a:0, w:'«every morning» ← مضارع (مفرد ← drinks).', f:'He <u>drinks</u> ... every morning.'}
      ]},
      { type:'gap', name:'أضفِ s للمفرد', hint:'he/she/it + s في المضارع', qs:[
        {p:'He ___ books every night. (read)', o:['reads','read','reading'], a:0, w:'مفردٌ غائب ← reads.', f:'He <u>reads</u> ...'},
        {p:'They ___ games after school. (play)', o:['play','plays'], a:0, w:'جمعٌ ← بلا s.', f:'They <u>play</u> ...'},
        {p:'I ___ my room yesterday. (clean)', o:['cleaned','clean'], a:0, w:'«yesterday» ← ماضٍ.', f:'I <u>cleaned</u> ...'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['She','play','tennis','every','day','.'], bad:1, fix:'plays', w:'مفردٌ غائب في المضارع ← <code>plays</code>.', f:'She <u>plays</u> tennis every day.'},
        {words:['We','visit','them','yesterday','.'], bad:1, fix:'visited', w:'«yesterday» ← ماضٍ <code>visited</code>.', f:'We <u>visited</u> them yesterday.'},
        {words:['He','watched','TV','every','day','.'], bad:1, fix:'watches', w:'«every day» ← مضارع <code>watches</code>.', f:'He <u>watches</u> TV every day.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'I ___ football every day.', ask:'اختر', o:['play','played'], a:0, w:'every day ← مضارع.', f:'I <u>play</u> ...'},
        {p:'She ___ the zoo yesterday.', ask:'اختر', o:['visited','visits'], a:0, w:'yesterday ← ماضٍ.', f:'She <u>visited</u> ...'},
        {p:'He ___ every morning. (run)', ask:'اختر', o:['runs','run'], a:0, w:'مفرد ← runs.', f:'He <u>runs</u> ...'},
        {p:'«yesterday» تدلّ على:', ask:'اختر', o:['الماضي','المضارع'], a:0, w:'الماضي البسيط.', f:'← <u>الماضي</u>'},
        {p:'في المضارع مع he نضيف:', ask:'اختر', o:['s','ed'], a:0, w:'مفردٌ غائب ← s.', f:'← <u>s</u>'}
      ]}
    ]
  };
})();
