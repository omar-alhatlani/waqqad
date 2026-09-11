/* ============================================================
   درس: Vocabulary — Personal Interests (الصفات وبادئة -un)
   الإنجليزية · الخامس الابتدائي · ف١ · Top Goal 2 · Unit 1 (Personal Interests)
   مفرداتُ الوحدة (حقائقُ معجميّة)، والجملُ التوضيحيّة مؤلَّفةٌ أصالةً.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG2_U1_VOCAB'] = {
    id:'EN_TG2_U1_VOCAB',
    title:'Vocabulary — Personal Interests',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'صفاتٌ وبادئةُ النفي -un',
      intro:'صفاتٌ نصفُ بها الأشياءَ والاهتمامات. وتذكّرْ بادئةَ <b>-un</b> التي تعكسُ معنى الصفة إلى النقيض: friendly (ودود) ← <b>un</b>friendly (غيرُ ودود).',
      table:[['amazing · wonderful','مذهل · رائع'],['friendly · lovely','ودود · جميل/محبوب'],['noisy · messy · tidy','صاخب · فوضويّ · مرتّب'],['بادئة -un','unfriendly · untidy · unlucky (النقيض)']],
      examples:['This is an <code>amazing</code> hobby. (هوايةٌ مذهلة.)','My room is <code>untidy</code> = not tidy. (غيرُ مرتّب.)'],
      trick:'البادئةُ <span class="en">-un</span> تعني «غير»: <span class="en">happy → unhappy</span>، <span class="en">lucky → unlucky</span>.'
    },
    stages:[
      { type:'choice', name:'الكلمة ← المعنى', hint:'اختر المعنى العربيّ', qs:[
        {p:'amazing', ask:'المعنى؟', o:['مذهل','ممل'], a:0, w:'<code>amazing</code> = مذهل.', f:'amazing ← <u>مذهل</u>'},
        {p:'friendly', ask:'المعنى؟', o:['ودود','صاخب'], a:0, w:'<code>friendly</code> = ودود.', f:'friendly ← <u>ودود</u>'},
        {p:'noisy', ask:'المعنى؟', o:['صاخب','هادئ'], a:0, w:'<code>noisy</code> = صاخب.', f:'noisy ← <u>صاخب</u>'},
        {p:'tidy', ask:'المعنى؟', o:['مرتّب','فوضويّ'], a:0, w:'<code>tidy</code> = مرتّب.', f:'tidy ← <u>مرتّب</u>'}
      ]},
      { type:'choice', name:'المعنى ← الكلمة', hint:'اختر الكلمة الإنجليزية', qs:[
        {p:'رائع', ask:'الكلمة؟', o:['wonderful','horrible'], a:0, w:'رائع = <code>wonderful</code>.', f:'رائع ← <u>wonderful</u>'},
        {p:'محظوظ', ask:'الكلمة؟', o:['lucky','messy'], a:0, w:'محظوظ = <code>lucky</code>.', f:'محظوظ ← <u>lucky</u>'},
        {p:'مثير للاهتمام', ask:'الكلمة؟', o:['interesting','boring'], a:0, w:'<code>interesting</code>.', f:'← <u>interesting</u>'},
        {p:'مرتّب', ask:'الكلمة؟', o:['tidy','noisy'], a:0, w:'مرتّب = <code>tidy</code>.', f:'← <u>tidy</u>'}
      ]},
      { type:'choice', name:'بادئة -un', hint:'un = النقيض (غير)', qs:[
        {p:'عكسُ friendly:', ask:'اختر', o:['unfriendly','friendlier'], a:0, w:'un + friendly.', f:'← <u>unfriendly</u>'},
        {p:'عكسُ lucky:', ask:'اختر', o:['unlucky','lucky'], a:0, w:'un + lucky.', f:'← <u>unlucky</u>'},
        {p:'«untidy» تعني:', ask:'اختر', o:['غير مرتّب','مرتّب جدًّا'], a:0, w:'un = غير ← غير مرتّب.', f:'← <u>غير مرتّب</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'Reading is an ___ hobby. (مثير)', o:['interesting','noisy','messy'], a:0, w:'مثير ← <code>interesting</code>.', f:'... an <u>interesting</u> hobby.'},
        {p:'My desk is ___ ; I must clean it. (فوضويّ)', o:['messy','tidy','lovely'], a:0, w:'فوضويّ ← <code>messy</code>.', f:'... is <u>messy</u> ...'},
        {p:'He is ___ ; he helps everyone. (ودود)', o:['friendly','unfriendly','horrible'], a:0, w:'ودود ← <code>friendly</code>.', f:'He is <u>friendly</u> ...'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'amazing', ask:'المعنى؟', o:['مذهل','ممل'], a:0, w:'مذهل.', f:'amazing ← <u>مذهل</u>'},
        {p:'محظوظ', ask:'الكلمة؟', o:['lucky','messy'], a:0, w:'lucky.', f:'← <u>lucky</u>'},
        {p:'عكسُ friendly:', ask:'اختر', o:['unfriendly','friendlier'], a:0, w:'unfriendly.', f:'← <u>unfriendly</u>'},
        {p:'My room is ___ . (فوضويّ)', ask:'اختر', o:['messy','tidy'], a:0, w:'messy.', f:'← <u>messy</u>'},
        {p:'بادئةُ -un تعني:', ask:'اختر', o:['غير (النقيض)','جدًّا'], a:0, w:'غير.', f:'← <u>غير (النقيض)</u>'}
      ]}
    ]
  };
})();
