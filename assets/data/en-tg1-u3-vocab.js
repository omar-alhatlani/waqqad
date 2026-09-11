/* ============================================================
   درس: Vocabulary — Stories (action verbs)
   الإنجليزية · الرابع الابتدائي · ف١ · Top Goal 1 · Unit 3 (Stories)
   مفرداتُ الوحدة (حقائقُ معجميّة)، والجملُ التوضيحيّة مؤلَّفةٌ أصالةً.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG1_U3_VOCAB'] = {
    id:'EN_TG1_U3_VOCAB',
    title:'Vocabulary — Story action verbs',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'أفعالُ الحركةِ في القصص',
      intro:'أفعالٌ نستعملُها كثيرًا في <b>سردِ القصص</b>. أتقِنْها لتحكيَ أحداثَ قصّةٍ بالماضي.',
      table:[['climb · jump · run','يتسلّق · يقفز · يجري'],['shout · cry · laugh','يصيح · يبكي · يضحك'],['drop · carry · catch','يُسقِط · يحمل · يمسك'],['dream · wait · call','يحلم · ينتظر · ينادي'],['score · plant · fix','يُسجّل هدفًا · يزرع · يُصلِح']],
      examples:['The boy <code>climbed</code> the tree and <code>shouted</code>. (تسلّقَ الشجرةَ وصاح.)','She <code>waited</code> for the bus and <code>called</code> her friend. (انتظرتْ ونادتْ.)'],
      trick:'تخيّلِ الحركةَ: <span class="en">climb</span> صعودٌ، و<span class="en">drop</span> إسقاطٌ، و<span class="en">catch</span> إمساكٌ بعدَ رمي.'
    },
    stages:[
      { type:'choice', name:'الفعل ← المعنى', hint:'اختر المعنى العربيّ', qs:[
        {p:'climb', ask:'المعنى؟', o:['يتسلّق','يجري'], a:0, w:'<code>climb</code> = يتسلّق.', f:'climb ← <u>يتسلّق</u>'},
        {p:'shout', ask:'المعنى؟', o:['يصيح','يضحك'], a:0, w:'<code>shout</code> = يصيح.', f:'shout ← <u>يصيح</u>'},
        {p:'carry', ask:'المعنى؟', o:['يحمل','يُسقِط'], a:0, w:'<code>carry</code> = يحمل.', f:'carry ← <u>يحمل</u>'},
        {p:'laugh', ask:'المعنى؟', o:['يضحك','يبكي'], a:0, w:'<code>laugh</code> = يضحك.', f:'laugh ← <u>يضحك</u>'},
        {p:'wait', ask:'المعنى؟', o:['ينتظر','يحلم'], a:0, w:'<code>wait</code> = ينتظر.', f:'wait ← <u>ينتظر</u>'}
      ]},
      { type:'choice', name:'المعنى ← الفعل', hint:'اختر الفعل الإنجليزيّ', qs:[
        {p:'يقفز', ask:'الفعل؟', o:['jump','climb'], a:0, w:'يقفز = <code>jump</code>.', f:'يقفز ← <u>jump</u>'},
        {p:'يبكي', ask:'الفعل؟', o:['cry','laugh'], a:0, w:'يبكي = <code>cry</code>.', f:'يبكي ← <u>cry</u>'},
        {p:'يمسك', ask:'الفعل؟', o:['catch','drop'], a:0, w:'يمسك = <code>catch</code>.', f:'يمسك ← <u>catch</u>'},
        {p:'يُصلِح', ask:'الفعل؟', o:['fix','plant'], a:0, w:'يُصلِح = <code>fix</code>.', f:'يُصلِح ← <u>fix</u>'},
        {p:'ينادي', ask:'الفعل؟', o:['call','wait'], a:0, w:'ينادي = <code>call</code>.', f:'ينادي ← <u>call</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الفعل المناسب', qs:[
        {p:'The cat can ___ the tall tree.', o:['climb','shout','cry'], a:0, w:'التسلّق ← <code>climb</code>.', f:'... <u>climb</u> the tree.'},
        {p:'Please ___ the box; it is heavy.', o:['carry','laugh','wait'], a:0, w:'الحملُ ← <code>carry</code>.', f:'Please <u>carry</u> the box.'},
        {p:'The player will ___ a goal.', o:['score','plant','dream'], a:0, w:'تسجيلُ الهدف ← <code>score</code>.', f:'... <u>score</u> a goal.'},
        {p:'Don’t ___ the glass! It will break.', o:['drop','call','fix'], a:0, w:'الإسقاط ← <code>drop</code>.', f:'Don’t <u>drop</u> the glass.'}
      ]},
      { type:'error', name:'الكلمة الغريبة', hint:'انقر ما لا ينتمي', qs:[
        {words:['jump','run','climb','desk'], bad:3, fix:'مثال: shout', w:'<code>desk</code> اسمٌ، والبقيّةُ أفعالُ حركة.', f:'jump · run · climb · <u>desk</u> (اسم)'},
        {words:['cry','laugh','shout','table'], bad:3, fix:'مثال: call', w:'<code>table</code> اسمٌ، والبقيّةُ أفعال.', f:'... · <u>table</u> (اسم)'},
        {words:['carry','catch','drop','strong'], bad:3, fix:'مثال: fix', w:'<code>strong</code> صفةٌ، والبقيّةُ أفعال.', f:'... · <u>strong</u> (صفة)'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'climb', ask:'المعنى؟', o:['يتسلّق','يقفز'], a:0, w:'يتسلّق.', f:'climb ← <u>يتسلّق</u>'},
        {p:'يضحك', ask:'الفعل؟', o:['laugh','cry'], a:0, w:'laugh.', f:'يضحك ← <u>laugh</u>'},
        {p:'The boy will ___ the ball to his friend.', ask:'اختر', o:['catch','dream'], a:0, w:'الإمساك ← catch.', f:'... <u>catch</u> the ball.'},
        {p:'shout', ask:'المعنى؟', o:['يصيح','يحمل'], a:0, w:'يصيح.', f:'shout ← <u>يصيح</u>'},
        {p:'ينتظر', ask:'الفعل؟', o:['wait','call'], a:0, w:'wait.', f:'ينتظر ← <u>wait</u>'}
      ]}
    ]
  };
})();
