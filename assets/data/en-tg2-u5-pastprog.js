/* ============================================================
   درس: Grammar — Past Progressive (الماضي المستمرّ)
   الإنجليزية · الخامس الابتدائي · ف١ · Top Goal 2 · Unit 5 (Storylines)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG2_U5_PASTPROG'] = {
    id:'EN_TG2_U5_PASTPROG',
    title:'Grammar — Past Progressive',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'الماضي المستمرّ',
      intro:'<b>الماضي المستمرّ</b> يصفُ فعلًا كان <b>مستمرًّا</b> في لحظةٍ من الماضي. تركيبُه: <span class="tok-focus">was</span> / <span class="tok-focus">were</span> + الفعلَ مع <code>-ing</code>. نستعملُ <span class="tok-focus">was</span> مع (I/he/she/it)، و<span class="tok-focus">were</span> مع (you/we/they والجمع المنتهي بـ <span class="tok-plural">s</span>).',
      formula:'<span class="tok-focus">was</span> / <span class="tok-focus">were</span> + verb-ing',
      table:[['المفرد','He <span class="tok-focus">was</span> reading.'],['الجمع','They <span class="tok-focus">were</span> reading.'],['السؤال','<span class="tok-focus">Were</span> you studying?'],['النفي','He <span class="tok-focus">wasn\'t</span> watching.']],
      examples:['I <span class="tok-focus">was</span> writing a story last night.','The kid<span class="tok-plural">s</span> <span class="tok-focus">were</span> watching a cartoon.'],
      trick:'مفردٌ (I/he/she/it) ← <span class="tok-focus">was</span> ، وجمعٌ ينتهي بـ <span class="tok-plural">s</span> (they/we) ← <span class="tok-focus">were</span> ، ثم الفعلُ + <span class="en">-ing</span>.'
    },
    stages:[
      { type:'choice', name:'was أم were؟', hint:'مفرد ← was · جمع ← were', qs:[
        {p:'He ___ reading a book.', ask:'اختر', o:['was','were'], a:0, w:'مفردٌ ← was.', f:'He <u>was</u> reading ...'},
        {p:'They ___ watching a movie.', ask:'اختر', o:['were','was'], a:0, w:'جمعٌ ← were.', f:'They <u>were</u> watching ...'},
        {p:'The children ___ playing.', ask:'اختر', o:['were','was'], a:0, w:'جمعٌ ← were.', f:'... <u>were</u> playing.'},
        {p:'I ___ writing a story.', ask:'اختر', o:['was','were'], a:0, w:'I ← was.', f:'I <u>was</u> writing ...'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'was/were + verb-ing', qs:[
        {p:'She ___ drawing a storyboard.', o:['was','were','are'], a:0, w:'مفردٌ ← was.', f:'She <u>was</u> drawing ...'},
        {p:'We ___ watching a comedy.', o:['were','was','are'], a:0, w:'جمعٌ ← were.', f:'We <u>were</u> watching ...'},
        {p:'He was ___ a mystery. (write)', o:['writing','write','writes'], a:0, w:'الماضي المستمرّ ← -ing.', f:'... was <u>writing</u> ...'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['They','was','watching','a','film','.'], bad:1, fix:'were', w:'جمعٌ ← <code>were</code>.', f:'They <u>were</u> watching a film.'},
        {words:['He','was','write','a','story','.'], bad:2, fix:'writing', w:'الماضي المستمرّ ← <code>writing</code>.', f:'He was <u>writing</u> a story.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'He ___ reading.', ask:'اختر', o:['was','were'], a:0, w:'مفرد ← was.', f:'← <u>was</u>'},
        {p:'They ___ watching.', ask:'اختر', o:['were','was'], a:0, w:'جمع ← were.', f:'← <u>were</u>'},
        {p:'الماضي المستمرّ تركيبُه:', ask:'اختر', o:['was/were + verb-ing','will + verb'], a:0, w:'was/were + -ing.', f:'← <u>was/were + verb-ing</u>'},
        {p:'She was ___ . (draw)', ask:'اختر', o:['drawing','draw'], a:0, w:'-ing.', f:'← <u>drawing</u>'},
        {p:'The kids ___ playing.', ask:'اختر', o:['were','was'], a:0, w:'جمع ← were.', f:'← <u>were</u>'}
      ]}
    ]
  };
})();
