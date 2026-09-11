/* ============================================================
   درس: Grammar — Zero & First Conditional (الجملة الشرطية)
   الإنجليزية · السادس الابتدائي · ف١ · Top Goal 3 · Unit 2 (Lifestyles)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG3_U2_COND'] = {
    id:'EN_TG3_U2_COND',
    title:'Grammar — Zero & First Conditional',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'الجملة الشرطية (Zero & First)',
      intro:'الجملةُ الشرطيّةُ جزآن: جملةُ <span class="tok-focus">if</span> + الفعلُ المضارع، ثم النتيجة. في <b>الشرط الصفريّ</b> (الحقائق) تكون النتيجةُ مضارعًا: «If you heat ice, it melts». وفي <b>الشرط الأول</b> (مستقبلٌ محتمَل) تكون النتيجةُ <span class="tok-focus">will</span> + الفعلَ المجرَّد: «If it rains, we <span class="tok-focus">will</span> stay home». وإذا بدأتِ الجملةُ بـ <span class="tok-focus">if</span> نضعُ فاصلةً بعد جملة الشرط.',
      formula:'<span class="tok-focus">If</span> + present , ... <span class="tok-focus">will</span> + base',
      table:[['الشرط الصفريّ (حقيقة)','<span class="tok-focus">If</span> you heat ice, it melts.'],['الشرط الأول (مستقبل)','<span class="tok-focus">If</span> it rains, we <span class="tok-focus">will</span> stay home.'],['بعد if','فعلٌ مضارع (لا will)'],['النتيجة (الأول)','<span class="tok-focus">will</span> + الفعل المجرَّد']],
      examples:['<span class="tok-focus">If</span> you study hard, you <span class="tok-focus">will</span> pass the exam.','<span class="tok-focus">If</span> you mix blue and yellow, you get green. (حقيقةٌ ثابتة)'],
      trick:'بعد <span class="tok-focus">if</span> لا نستعملُ <span class="en">will</span> أبدًا — الفعلُ مضارعٌ. و<span class="tok-focus">will</span> تأتي في <b>النتيجة</b> فقط، ويتبعُها الفعلُ مجرَّدًا.'
    },
    stages:[
      { type:'choice', name:'أين will؟', hint:'will في النتيجة لا بعد if', qs:[
        {p:'If it rains, we ___ stay home.', ask:'اختر', o:['will','are'], a:0, w:'النتيجةُ ← <code>will + base</code>.', f:'... we <u>will</u> stay home.'},
        {p:'If you ___ hard, you will pass.', ask:'اختر', o:['study','will study'], a:0, w:'بعد <code>if</code> فعلٌ مضارعٌ لا will.', f:'If you <u>study</u> hard ...'},
        {p:'If you heat ice, it ___ .', ask:'اختر (حقيقة)', o:['melts','will melts'], a:0, w:'شرطٌ صفريّ (حقيقة) ← النتيجةُ مضارع.', f:'... it <u>melts</u>.'}
      ]},
      { type:'gap', name:'أكمل الشرط', hint:'مضارعٌ بعد if، و will + مجرّد في النتيجة', qs:[
        {p:'If the weather is nice, we ___ play outside.', o:['will','are','do'], a:0, w:'النتيجةُ ← <code>will play</code>.', f:'... we <u>will</u> play outside.'},
        {p:'If you eat well, you ___ healthy. (نتيجة مستقبلية)', o:['will be','are being','will are'], a:0, w:'<code>will + be</code>.', f:'... you <u>will be</u> healthy.'},
        {p:'If I ___ time, I will help you.', o:['have','will have'], a:0, w:'بعد <code>if</code> مضارعٌ ← <code>have</code>.', f:'If I <u>have</u> time ...'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['If','it','will','rain',',','stay','home','.'], bad:2, fix:'تُحذف', w:'بعد <code>if</code> لا نستعمل <code>will</code>؛ الصواب <code>If it rains</code>.', f:'<u>If it rains</u>, stay home.'},
        {words:['If','you','study',',','you','pass','.'], bad:5, fix:'will pass', w:'النتيجةُ في الشرط الأول ← <code>will pass</code>.', f:'..., you <u>will pass</u>.'},
        {words:['If','you','will','help',',','I','thank','you','.'], bad:2, fix:'تُحذف', w:'بعد <code>if</code> مضارعٌ ← <code>If you help</code>.', f:'<u>If you help</u>, I thank you.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['If','it','rains',',','we','will','stay','home','.'], w:'مضارعٌ بعد if، وفاصلةٌ، ثم <code>will + base</code>.', f:'If it rains, we will stay home.'},
        {sol:['If','you','study',',','you','will','pass','.'], w:'النتيجةُ ← <code>will pass</code>.', f:'If you study, you will pass.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'If it rains, we ___ stay home.', ask:'اختر', o:['will','are'], a:0, w:'النتيجةُ ← will.', f:'... <u>will</u> stay home.'},
        {p:'If you ___ hard, you will pass.', ask:'اختر', o:['study','will study'], a:0, w:'بعد if مضارع.', f:'If you <u>study</u> ...'},
        {p:'بعد <code>if</code> نستعمل:', ask:'اختر', o:['فعلًا مضارعًا','will'], a:0, w:'مضارعٌ لا will.', f:'← <u>فعلًا مضارعًا</u>'},
        {p:'If you heat ice, it ___ .', ask:'اختر', o:['melts','will melts'], a:0, w:'حقيقة ← مضارع.', f:'... it <u>melts</u>.'},
        {p:'النتيجةُ في الشرط الأول:', ask:'اختر', o:['will + الفعل المجرَّد','will + to'], a:0, w:'<code>will + base</code>.', f:'← <u>will + الفعل المجرَّد</u>'}
      ]}
    ]
  };
})();
