/* ============================================================
   Lesson: Requests & Offers (can/could/will/would · I'll · Let me)
   English · Super Goal 2 · Unit 14 (Could You Do Me a Favor?) · صفحة ١٢٦
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U14_REQUESTS'] = {
    id:'EN_SG2_U14_REQUESTS',
    title:'Requests & Offers',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'Can/Could/Will/Would you… · I\'ll / Let me',
      intro:'نطلب من الآخرين بـ <code>Can/Could/Will/Would you + الفعل المجرّد?</code> (<code>Could you help me?</code>) — و<code>Could/Would</code> أكثرُ تأدّبًا. ونعرض المساعدة بـ <code>I’ll + verb</code> (<code>I’ll do it</code>) أو <code>Let me + verb</code> (<code>Let me help you</code>). والردُّ: <code>Sure / Certainly / Of course</code>.',
      table:[['request','Could you close the door?'],['polite','Would you help me, please?'],['offer',"I'll carry that for you."],['offer','Let me help you.']],
      trick:'بعد <code>Can/Could/Will/Would you</code> يأتي الفعل مجرّدًا. و<code>Could/Would</code> أكثرُ رسميّةً وتأدّبًا من <code>Can/Will</code>. الردُّ الإيجابيّ: <code>Sure / Certainly</code>.'
    },
    stages:[
      { type:'choice', name:'الطلبات', hint:'Can/Could/Will/Would you…?', qs:[
        {p:'___ you help me, please?', o:['Could','Do','Are','Have'], a:0, w:'طلبٌ مؤدَّب ← <code>Could</code>.', f:'<u>Could</u> you help me?'},
        {p:'Could you ___ the door?', o:['close','closes','closing','to close'], a:0, w:'مجرّد بعد <code>Could you</code>.', f:'Could you <u>close</u>…?'},
        {p:'___ you pass the salt?', o:['Will','Do','Is','Are'], a:0, w:'طلب ← <code>Will you</code>.', f:'<u>Will</u> you pass the salt?'},
        {p:'Which is more polite?', o:['Could you…?','Can you…? (كلاهما مقبول لكن Could أرسم)'], a:0, w:'<code>Could</code> أكثر تأدّبًا.', f:'<u>Could you…?</u>'}
      ]},
      { type:'choice', name:'العروض', hint:"I'll / Let me", qs:[
        {p:'The bag is heavy. ___ carry it for you.', o:["I'll","I","I am to","Let"], a:0, w:'عرض ← <code>I’ll</code>.', f:'<u>I’ll</u> carry it.'},
        {p:'___ me help you with that.', o:['Let','Make','Do','Will'], a:0, w:'<code>Let me + الفعل</code>.', f:'<u>Let</u> me help you.'},
        {p:'Let me ___ the dishes.', o:['do','does','doing','to do'], a:0, w:'مجرّد بعد <code>Let me</code>.', f:'Let me <u>do</u> the dishes.'},
        {p:"I'll ___ you later.", o:['call','calls','calling','to call'], a:0, w:'مجرّد بعد <code>I’ll</code>.', f:"I'll <u>call</u> you."}
      ]},
      { type:'choice', name:'الردود', hint:'الموافقة على الطلب', qs:[
        {p:'Could you help me? — ___, of course.', o:['Sure','No','Never','Not'], a:0, w:'موافقة ← <code>Sure</code>.', f:'<u>Sure</u>, of course.'},
        {p:'Would you close the window? — ___.', o:['Certainly','Maybe not','Sorry no'], a:0, w:'<code>Certainly</code>.', f:'<u>Certainly</u>.'},
        {p:'A request asks someone to ___ something.', o:['do','buy only','forget'], a:0, w:'أن يفعل شيئًا.', f:'<u>do</u> something'},
        {p:'An offer means you ___ to help.', o:['volunteer','refuse','forget'], a:0, w:'تتطوّع.', f:'<u>volunteer</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['Could','you','helps','me','?'], bad:2, fix:'help', w:'مجرّد بعد <code>Could you</code>.', f:'Could you <u>help</u> me?'},
        {words:['Let','me','to','carry','it','.'], bad:2, fix:'تُحذف to', w:'لا <code>to</code> بعد <code>Let me</code>.', f:'Let me <u>carry</u> it.'},
        {words:['I','will','carrying','the','bag','.'], bad:2, fix:'carry', w:'مجرّد بعد <code>will</code>.', f:'I will <u>carry</u> the bag.'},
        {words:['Do','you','close','the','door',',','please','?'], bad:0, fix:'Could/Would', w:'الطلب المؤدَّب ← <code>Could you…?</code>.', f:'<u>Could</u> you close the door?'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['Could','you','help','me',',','please','?'], w:'<code>Could you + مجرّد</code>.', f:'Could you help me, please?'},
        {sol:['I’ll','carry','that','for','you','.'], w:'عرض ← <code>I’ll</code>.', f:"I'll carry that for you."},
        {sol:['Let','me','help','you','.'], w:'<code>Let me + مجرّد</code>.', f:'Let me help you.'},
        {sol:['Would','you','pass','the','salt','?'], w:'طلبٌ مؤدَّب.', f:'Would you pass the salt?'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'___ you help me?', ask:'اختر', o:['Could','Do'], a:0, w:'طلب.', f:'<u>Could</u>'},
        {p:'Could you ___ the door?', ask:'الفعل', o:['close','closes'], a:0, w:'مجرّد.', f:'<u>close</u>'},
        {p:'___ carry it for you. (عرض)', ask:'اختر', o:["I'll",'I am to'], a:0, w:'عرض.', f:"<u>I'll</u>"},
        {p:'___ me help you.', ask:'اختر', o:['Let','Make'], a:0, w:'<code>Let me</code>.', f:'<u>Let</u>'},
        {p:'Let me ___ the dishes.', ask:'الفعل', o:['do','does'], a:0, w:'مجرّد.', f:'<u>do</u>'},
        {p:'Could you help me? — ___.', ask:'الردّ', o:['Sure','Never'], a:0, w:'موافقة.', f:'<u>Sure</u>'},
        {sol:['Let','me','help','you','.'], w:'<code>Let me + مجرّد</code>.', f:'Let me help you.'},
        {p:'More polite request:', ask:'اختر', o:['Could you…?','Do you…?'], a:0, w:'<code>Could</code>.', f:'<u>Could you…?</u>'},
        {p:"I'll ___ you later.", ask:'الفعل', o:['call','calls'], a:0, w:'مجرّد.', f:'<u>call</u>'}
      ]}
    ]
  };
})();
