/* ============================================================
   Lesson: Imperatives (Commands & Instructions)
   English · Super Goal 2 · Unit 2 (What Are They Making?) · صفحة ١٦
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U2_IMP'] = {
    id:'EN_SG2_U2_IMP',
    title:'Imperatives',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'Imperatives — Commands & Instructions',
      intro:'نستعمل <b>صيغة الأمر</b> للأوامر والتعليمات والنصائح. نبدأ بالفعل في صورته الأصلية دون فاعل: <code>Sit down.</code> وللتأدّب نضيف <code>please</code>: <code>Please sit down.</code> وللنفي نبدأ بـ <code>Don’t</code>: <code>Don’t run.</code>',
      table:[['Affirmative (+)','Sit down. / Please sit down.'],['Negative (–)','Don’t sit down.'],['Advice','Try the pizza. / Don’t have the soup.']],
      trick:'الأمرُ يبدأ بالفعل الأصلي بلا فاعل. للنفي ابدأْ بـ <code>Don’t</code> + الفعل. وأضِفْ <code>please</code> للتأدّب.'
    },
    stages:[
      { type:'choice', name:'أمرٌ مثبت أم منفي؟', hint:'المثبت بالفعل · المنفي بـ Don’t', qs:[
        {p:'“Open the door.”', ask:'اختر', o:['أمرٌ مثبت','أمرٌ منفي'], a:0, w:'يبدأ بالفعل ← مثبت.', f:'Affirmative.'},
        {p:'“Don’t touch the camera.”', ask:'اختر', o:['أمرٌ منفي','أمرٌ مثبت'], a:0, w:'يبدأ بـ <code>Don’t</code> ← منفي.', f:'Negative.'},
        {p:'“Please be quiet.”', ask:'اختر', o:['أمرٌ مثبت (مؤدّب)','أمرٌ منفي'], a:0, w:'<code>please</code> للتأدّب، والأمرُ مثبت.', f:'Affirmative (polite).'},
        {p:'“Don’t be late.”', ask:'اختر', o:['أمرٌ منفي','أمرٌ مثبت'], a:0, w:'<code>Don’t</code> ← منفي.', f:'Negative.'},
        {p:'“Try the pizza.”', ask:'اختر', o:['نصيحة (أمر مثبت)','أمرٌ منفي'], a:0, w:'نصيحةٌ بصيغة الأمر المثبت.', f:'Affirmative advice.'}
      ]},
      { type:'gap', name:'حوّل إلى النفي', hint:'ابدأ بـ Don’t + الفعل الأصلي', qs:[
        {p:'Run. → ___ run.', o:['Don’t','Not','No','Doesn’t'], a:0, w:'النفي بـ <code>Don’t</code>.', f:'<u>Don’t</u> run.'},
        {p:'Feed the fish. → ___ feed the fish.', o:['Don’t','Not','No','Isn’t'], a:0, w:'<code>Don’t feed…</code>', f:'<u>Don’t</u> feed the fish.'},
        {p:'Have the soup. → ___ have the soup.', o:['Don’t','No','Not','Doesn’t'], a:0, w:'نصيحةٌ منفية.', f:'<u>Don’t</u> have the soup.'},
        {p:'Be late. → ___ be late.', o:['Don’t','Not','Aren’t','No'], a:0, w:'<code>Don’t be late.</code>', f:'<u>Don’t</u> be late.'},
        {p:'Make noise. → ___ make noise.', o:['Don’t','Not','No','Doesn’t'], a:0, w:'<code>Don’t make…</code>', f:'<u>Don’t</u> make noise.'}
      ]},
      { type:'choice', name:'اختر الأمر المناسب', hint:'حسب الموقف', qs:[
        {p:'المعلّم يريد الهدوء:', ask:'اختر', o:['Please be quiet.','You are quiet.','Are you quiet?'], a:0, w:'أمرٌ مؤدّب.', f:'Please be quiet.'},
        {p:'الطعام لذيذ، تنصح صديقك:', ask:'اختر', o:['Try the pizza.','Do you try pizza?','You try pizza.'], a:0, w:'نصيحةٌ بالأمر.', f:'Try the pizza.'},
        {p:'الحساء سيّئ، تحذّر:', ask:'اختر', o:['Don’t have the soup.','You don’t soup.','Are you soup?'], a:0, w:'أمرٌ منفي.', f:'Don’t have the soup.'},
        {p:'المخرج يعطي تعليمات للممثل:', ask:'اختر', o:['Stand behind the camera.','You standing camera.','Are you behind?'], a:0, w:'تعليماتٌ بصيغة الأمر.', f:'Stand behind the camera.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['You','sit','down','.'], bad:0, fix:'تُحذف', w:'الأمرُ بلا فاعل: <code>Sit down.</code>', f:'<u>Sit</u> down.'},
        {words:['Not','run','here','.'], bad:0, fix:'Don’t', w:'النفي بـ <code>Don’t</code>.', f:'<u>Don’t</u> run here.'},
        {words:['Don’t','touches','the','camera','.'], bad:1, fix:'touch', w:'بعد <code>Don’t</code> الفعلُ أصليّ بلا <code>-s</code>.', f:'Don’t <u>touch</u> the camera.'},
        {words:['Please','you','be','quiet','.'], bad:1, fix:'تُحذف', w:'لا فاعل مع الأمر: <code>Please be quiet.</code>', f:'Please <u>be</u> quiet.'}
      ]},
      { type:'order', name:'ابنِ الأمر', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['Please','sit','down','.'], w:'أمرٌ مؤدّب.', f:'Please sit down.'},
        {sol:['Don’t','be','late','.'], w:'أمرٌ منفي.', f:'Don’t be late.'},
        {sol:['Try','the','pizza','.'], w:'نصيحة.', f:'Try the pizza.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'Run. → ___ run.', ask:'النفي', o:['Don’t','Not'], a:0, w:'Don’t.', f:'<u>Don’t</u> run.'},
        {p:'“Please be quiet.”', ask:'اختر', o:['أمرٌ مثبت','أمرٌ منفي'], a:0, w:'مثبت مؤدّب.', f:'Affirmative.'},
        {p:'الحساء سيّئ:', ask:'اختر', o:['Don’t have the soup.','You have soup.'], a:0, w:'أمرٌ منفي.', f:'Don’t have the soup.'},
        {p:'You sit down.', ask:'صحّح', o:['Sit down.','Sit you down.'], a:0, w:'بلا فاعل.', f:'<u>Sit down.</u>'},
        {p:'Be late. → ___ be late.', ask:'النفي', o:['Don’t','Not'], a:0, w:'Don’t.', f:'<u>Don’t</u> be late.'},
        {sol:['Please','sit','down','.'], w:'أمرٌ مؤدّب.', f:'Please sit down.'},
        {p:'Don’t ___ the camera.', ask:'اختر الفعل', o:['touch','touches'], a:0, w:'فعلٌ أصليّ بعد Don’t.', f:'Don’t <u>touch</u>…'},
        {p:'المعلّم يريد الهدوء:', ask:'اختر', o:['Please be quiet.','Are you quiet?'], a:0, w:'أمرٌ مؤدّب.', f:'Please be quiet.'},
        {p:'الأمرُ يبدأ بـ:', ask:'اختر', o:['الفعل الأصلي بلا فاعل','الفاعل ثم الفعل'], a:0, w:'الأمرُ بلا فاعل.', f:'← الفعل الأصلي'}
      ]}
    ]
  };
})();
