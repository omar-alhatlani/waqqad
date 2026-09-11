/* ============================================================
   درس: Grammar — Reporting Questions (نقل الأسئلة)
   الإنجليزية · السادس الابتدائي · ف١ · Top Goal 3 · Unit 7 (Styles)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG3_U7_REPORTEDQ'] = {
    id:'EN_TG3_U7_REPORTEDQ',
    title:'Grammar — Reporting Questions',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'نقلُ الأسئلة',
      intro:'حين ننقلُ سؤالًا: في سؤال الـ Wh نُبقي أداةَ السؤال (<span class="tok-focus">where</span>/<span class="tok-focus">what</span>...) ثم <b>ترتيبَ الجملة الخبريّة</b> (فاعل + فعل)، ونحذفُ <code>do/does</code> وعلامةَ الاستفهام. وفي سؤال نعم/لا نستعملُ <span class="tok-focus">if</span> (أو whether): «Do you like it?» ← «He asked <span class="tok-focus">if</span> I liked it».',
      formula:'asked + <span class="tok-focus">if</span> / <span class="tok-focus">Wh-</span> + subject + verb (بلا do / ؟)',
      table:[['"Where do you live?"','He asked <span class="tok-focus">where</span> I lived.'],['"Do you like it?"','He asked <span class="tok-focus">if</span> I liked it.'],['نحذف','do/does + علامة الاستفهام'],['الترتيب','فاعل + فعل (خبريّ)']],
      examples:['"What do you want?" → She asked <span class="tok-focus">what</span> I wanted.','"Are you ready?" → He asked <span class="tok-focus">if</span> I was ready.'],
      trick:'انقلِ السؤالَ إلى ترتيبٍ خبريّ (فاعل + فعل)، واحذفْ <code>do/does</code> و«؟». لسؤال نعم/لا استعملْ <span class="tok-focus">if</span>.'
    },
    stages:[
      { type:'choice', name:'if أم Wh؟', hint:'نعم/لا ← if · معلومة ← Wh', qs:[
        {p:'"Do you like it?" → He asked ___ I liked it.', ask:'اختر', o:['if','what'], a:0, w:'سؤالُ نعم/لا ← <code>if</code>.', f:'... asked <u>if</u> ...'},
        {p:'"Where do you live?" → She asked ___ I lived.', ask:'اختر', o:['where','if'], a:0, w:'سؤالُ معلومة ← <code>where</code>.', f:'... asked <u>where</u> ...'},
        {p:'"Are you ready?" → He asked ___ I was ready.', ask:'اختر', o:['if','what'], a:0, w:'نعم/لا ← <code>if</code>.', f:'... asked <u>if</u> ...'}
      ]},
      { type:'gap', name:'رتّب واحذف do', hint:'ترتيبٌ خبريّ بلا do', qs:[
        {p:'"Where do you live?" → She asked where I ___ .', o:['lived','live','do live'], a:0, w:'ترتيبٌ خبريّ وماضٍ ← <code>lived</code> بلا do.', f:'... where I <u>lived</u>.'},
        {p:'"What do you want?" → He asked what I ___ .', o:['wanted','want','do want'], a:0, w:'بلا do، والفعلُ ماضٍ ← <code>wanted</code>.', f:'... what I <u>wanted</u>.'},
        {p:'"Do you like tea?" → She asked ___ I liked tea.', o:['if','do','what'], a:0, w:'نعم/لا ← <code>if</code>.', f:'... <u>if</u> I liked tea.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['He','asked','where','do','I','lived','.'], bad:3, fix:'تُحذف', w:'في نقل السؤال نحذفُ <code>do</code>.', f:'He asked where I <u>lived</u>.'},
        {words:['She','asked','what','I','want','.'], bad:4, fix:'wanted', w:'الفعلُ يُرجَع للماضي ← <code>wanted</code>.', f:'She asked what I <u>wanted</u>.'},
        {words:['He','asked','that','I','was','ready','.'], bad:2, fix:'if', w:'سؤالُ نعم/لا ← <code>if</code> لا that.', f:'He asked <u>if</u> I was ready.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['He','asked','where','I','lived','.'], w:'<code>Wh + فاعل + فعل</code> بلا do.', f:'He asked where I lived.'},
        {sol:['She','asked','if','I','was','ready','.'], w:'سؤالُ نعم/لا ← <code>if</code>.', f:'She asked if I was ready.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'"Do you like it?" → He asked ___ I liked it.', ask:'اختر', o:['if','what'], a:0, w:'نعم/لا ← if.', f:'... <u>if</u> ...'},
        {p:'"Where do you live?" → She asked ___ I lived.', ask:'اختر', o:['where','if'], a:0, w:'معلومة ← where.', f:'... <u>where</u> ...'},
        {p:'في نقل السؤال نحذف:', ask:'اختر', o:['do/does وعلامة الاستفهام','الفاعل'], a:0, w:'نحذفُ do/does و«؟».', f:'← <u>do/does وعلامة الاستفهام</u>'},
        {p:'ترتيبُ السؤال المنقول:', ask:'اختر', o:['فاعل + فعل (خبريّ)','فعل + فاعل'], a:0, w:'ترتيبٌ خبريّ.', f:'← <u>فاعل + فعل</u>'},
        {p:'"Are you ready?" → He asked ___ I was ready.', ask:'اختر', o:['if','what'], a:0, w:'نعم/لا ← if.', f:'... <u>if</u> ...'}
      ]}
    ]
  };
})();
