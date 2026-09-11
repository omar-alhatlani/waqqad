/* ============================================================
   درس: Grammar — Present Perfect questions & short answers
   الإنجليزية · الخامس الابتدائي · ف١ · Top Goal 2 · Unit 8 (Outfits)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG2_U8_PPQUESTIONS'] = {
    id:'EN_TG2_U8_PPQUESTIONS',
    title:'Grammar — Present Perfect Questions',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'سؤالُ المضارع التامّ وإجابتُه',
      intro:'لتكوينِ سؤالٍ في المضارع التامّ نقدّمُ <span class="tok-focus">Have</span> / <span class="tok-focus">Has</span> على الفاعل ثم التصريفَ الثالث: «<span class="tok-focus">Have</span> you worn it?». والإجابةُ القصيرة: <span class="tok-focus">Yes, I have</span> / <span class="tok-focus">No, I haven\'t</span>، و<span class="tok-focus">Yes, she has</span> / <span class="tok-focus">No, she hasn\'t</span>.',
      formula:'<span class="tok-focus">Have</span> / <span class="tok-focus">Has</span> + subject + V3 ?',
      table:[['السؤال','<span class="tok-focus">Have</span> you tried it?'],['مع المفرد الغائب','<span class="tok-focus">Has</span> she bought it?'],['إجابةٌ مثبتة','Yes, I <span class="tok-focus">have</span>.'],['إجابةٌ منفية','No, she <span class="tok-focus">hasn\'t</span>.']],
      examples:['<span class="tok-focus">Have</span> you worn this uniform? — Yes, I <span class="tok-focus">have</span>.','<span class="tok-focus">Has</span> he found his tie? — No, he <span class="tok-focus">hasn\'t</span>.'],
      trick:'قدّمِ <span class="tok-focus">Have/Has</span> على الفاعل ثم V3. والإجابةُ القصيرةُ بالفاعل + have/has (بلا تكرار الفعل).'
    },
    stages:[
      { type:'choice', name:'Have أم Has؟', hint:'مفردٌ غائب ← Has', qs:[
        {p:'___ you seen my belt?', ask:'اختر', o:['Have','Has'], a:0, w:'you ← Have.', f:'<u>Have</u> you seen ...?'},
        {p:'___ she bought the dress?', ask:'اختر', o:['Has','Have'], a:0, w:'مفردٌ غائب ← Has.', f:'<u>Has</u> she bought ...?'},
        {p:'___ they arrived?', ask:'اختر', o:['Have','Has'], a:0, w:'جمعٌ ← Have.', f:'<u>Have</u> they arrived?'},
        {p:'___ he worn the uniform?', ask:'اختر', o:['Has','Have'], a:0, w:'مفردٌ غائب ← Has.', f:'<u>Has</u> he worn ...?'}
      ]},
      { type:'choice', name:'الإجابةُ القصيرة', hint:'الفاعل + have/has', qs:[
        {p:'Have you finished? →', ask:'الإجابة المثبتة', o:['Yes, I have.','Yes, I do.'], a:0, w:'المضارعُ التامّ ← have.', f:'← <u>Yes, I have.</u>'},
        {p:'Has she left? →', ask:'الإجابة المنفية', o:["No, she hasn't.","No, she doesn't."], a:0, w:'المنفيّ ← hasn\'t.', f:'← <u>No, she hasn\'t.</u>'},
        {p:'Have they eaten? →', ask:'الإجابة المثبتة', o:['Yes, they have.','Yes, they are.'], a:0, w:'have.', f:'← <u>Yes, they have.</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['Has','you','seen','it','?'], bad:0, fix:'Have', w:'مع you ← <code>Have</code>.', f:'<u>Have</u> you seen it?'},
        {words:['Have','she','bought','the','ring','?'], bad:0, fix:'Has', w:'مفردٌ غائب ← <code>Has</code>.', f:'<u>Has</u> she bought the ring?'},
        {words:['Yes',',','I','has','.'], bad:3, fix:'have', w:'مع I ← <code>have</code>.', f:'Yes, I <u>have</u>.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'___ you seen my belt?', ask:'اختر', o:['Have','Has'], a:0, w:'you ← Have.', f:'← <u>Have</u>'},
        {p:'___ she bought it?', ask:'اختر', o:['Has','Have'], a:0, w:'مفرد غائب ← Has.', f:'← <u>Has</u>'},
        {p:'Have you finished? →', ask:'اختر', o:['Yes, I have.','Yes, I do.'], a:0, w:'have.', f:'← <u>Yes, I have.</u>'},
        {p:'في السؤال نقدّم:', ask:'اختر', o:['Have/Has على الفاعل','الفاعل على Have'], a:0, w:'Have/Has ثم الفاعل.', f:'← <u>Have/Has على الفاعل</u>'},
        {p:'Has he gone? →', ask:'اختر', o:["No, he hasn't.","No, he doesn't."], a:0, w:'hasn\'t.', f:'← <u>No, he hasn\'t.</u>'}
      ]}
    ]
  };
})();
