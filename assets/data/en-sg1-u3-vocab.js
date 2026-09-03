/* ============================================================
   Lesson: Vocabulary — Things & the Museum (+ a/an)
   English · Super Goal 1 · Unit 3 (What's That?) · صفحات ١٨–١٩
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1).
   lang:'en' → المحتوى إنجليزيّ LTR، والشرح بالعربية.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U3_VOCAB'] = {
    id:'EN_SG1_U3_VOCAB',
    title:'Vocabulary — أشياء المتحف و a/an',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'Things & Articles (a / an)',
      intro:'نسأل عن الأشياء: <code>What\'s this/that?</code> للمفرد و<code>What are these/those?</code> للجمع. ونستعمل <code>a</code> قبل الصوت الساكن، و<code>an</code> قبل صوت العلّة (a, e, i, o, u).',
      table:[['a + ساكن','a radio · a car · a camera'],['an + علّة','an airplane · an egg · an orange'],['مفرد','What\'s this? — It\'s a radio.'],['جمع','What are those? — They\'re watches.']],
      examples:['a radio, a calculator (ساكن)','an airplane, an English class (علّة)',"What's this? — It's a camera.","What are those? — They're watches."],
      trick:'<code>an</code> قبل صوت العلّة (a,e,i,o,u): <code>an</code> airplane, <code>an</code> egg. و<code>a</code> قبل بقيّة الأصوات: <code>a</code> radio, <code>a</code> car.'
    },
    stages:[
      { type:'choice', name:'a أم an؟', hint:'ساكن ← a · علّة ← an', qs:[
        {p:'___ airplane', ask:'a أم an؟', o:['an','a'], a:0, w:'يبدأ بعلّة (a) ← <code>an</code>.', f:'an airplane'},
        {p:'___ radio',    ask:'a أم an؟', o:['a','an'], a:0, w:'يبدأ بساكن (r) ← <code>a</code>.', f:'a radio'},
        {p:'___ egg',      ask:'a أم an؟', o:['an','a'], a:0, w:'يبدأ بعلّة (e) ← <code>an</code>.', f:'an egg'},
        {p:'___ car',      ask:'a أم an؟', o:['a','an'], a:0, w:'يبدأ بساكن (c) ← <code>a</code>.', f:'a car'},
        {p:'___ orange',   ask:'a أم an؟', o:['an','a'], a:0, w:'يبدأ بعلّة (o) ← <code>an</code>.', f:'an orange'},
        {p:'___ camera',   ask:'a أم an؟', o:['a','an'], a:0, w:'يبدأ بساكن (c) ← <code>a</code>.', f:'a camera'}
      ]},
      { type:'choice', name:'ما هذا الشيء؟', hint:'اختر الكلمة الإنجليزية', qs:[
        {p:'You take photos with it.',          ask:'اختر الكلمة', o:['camera','radio','bicycle','lamp'], a:0, w:'آلة التصوير ← <code>camera</code>.', f:'a camera'},
        {p:'It has two wheels; you ride it.',    ask:'اختر الكلمة', o:['bicycle','car','airplane','watch'], a:0, w:'الدرّاجة ← <code>bicycle</code>.', f:'a bicycle'},
        {p:'It flies in the sky.',               ask:'اختر الكلمة', o:['airplane','car','radio','toy'], a:0, w:'الطائرة ← <code>airplane</code>.', f:'an airplane'},
        {p:'A work of art; you see it in a museum.', ask:'اختر الكلمة', o:['sculpture','headphones','camera','key chain'], a:0, w:'المنحوتة ← <code>sculpture</code>.', f:'a sculpture'},
        {p:'You call people with it.',           ask:'اختر الكلمة', o:['telephone','television','washing machine','lamp'], a:0, w:'الهاتف ← <code>telephone</code>.', f:'a telephone'},
        {p:'You listen to music or news on it.', ask:'اختر الكلمة', o:['radio','camera','watch','toy'], a:0, w:'المذياع ← <code>radio</code>.', f:'a radio'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'إشارة أو أداة تعريف', qs:[
        {p:"What's ___?  It's a radio.",   ask:'أكمل (قريب · مفرد)', o:['this','these','that','those'], a:0, w:'قريبٌ مفرد ← <code>this</code>.', f:"What's <u>this</u>?"},
        {p:'It is ___ airplane.',           ask:'a أم an؟', o:['an','a','the','this'], a:0, w:'علّة ← <code>an</code>.', f:'It is <u>an</u> airplane.'},
        {p:'What are ___?  They are keys.', ask:'أكمل (بعيد · جمع)', o:['those','this','that','these'], a:0, w:'بعيدٌ جمع ← <code>those</code>.', f:'What are <u>those</u>?'},
        {p:'This is ___ camera.',            ask:'a أم an؟', o:['a','an','the','those'], a:0, w:'ساكن ← <code>a</code>.', f:'This is <u>a</u> camera.'},
        {p:'Look at ___ sculptures.',        ask:'أكمل (بعيد · جمع)', o:['those','this','that','a'], a:0, w:'بعيدٌ جمع ← <code>those</code>.', f:'Look at <u>those</u> sculptures.'},
        {p:'It is ___ egg.',                 ask:'a أم an؟', o:['an','a','the','this'], a:0, w:'علّة ← <code>an</code>.', f:'It is <u>an</u> egg.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['What','is','this','?'],          w:'سؤالٌ عن القريب.', f:'What is this?'},
        {sol:['It','is','a','camera','.'],       w:'<code>a</code> + ساكن.', f:'It is a camera.'},
        {sol:['It','is','an','airplane','.'],    w:'<code>an</code> + علّة.', f:'It is an airplane.'},
        {sol:['They','are','watches','.'],       w:'جمع.', f:'They are watches.'},
        {sol:['What','are','those','?'],         w:'سؤالٌ عن البعيد الجمع.', f:'What are those?'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'___ airplane', ask:'a أم an؟', o:['an','a'], a:0, w:'علّة ← <code>an</code>.', f:'an airplane'},
        {p:'You take photos with it.', ask:'اختر الكلمة', o:['camera','radio','bicycle','lamp'], a:0, w:'← <code>camera</code>.', f:'a camera'},
        {p:'What are ___?  They are keys.', ask:'أكمل (بعيد · جمع)', o:['those','this','that','these'], a:0, w:'بعيدٌ جمع ← <code>those</code>.', f:'<u>those</u>'},
        {p:'___ radio', ask:'a أم an؟', o:['a','an'], a:0, w:'ساكن ← <code>a</code>.', f:'a radio'},
        {p:'It flies in the sky.', ask:'اختر الكلمة', o:['airplane','car','radio','toy'], a:0, w:'← <code>airplane</code>.', f:'an airplane'},
        {sol:['It','is','an','airplane','.'], w:'<code>an</code> + علّة.', f:'It is an airplane.'},
        {p:"What's ___?  It's a radio.", ask:'أكمل (قريب · مفرد)', o:['this','these','that','those'], a:0, w:'قريبٌ مفرد ← <code>this</code>.', f:"What's <u>this</u>?"},
        {p:'You call people with it.', ask:'اختر الكلمة', o:['telephone','television','lamp','toy'], a:0, w:'← <code>telephone</code>.', f:'a telephone'},
        {sol:['What','are','those','?'], w:'سؤالٌ عن البعيد الجمع.', f:'What are those?'}
      ]}
    ]
  };
})();
