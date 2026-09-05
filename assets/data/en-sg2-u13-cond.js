/* ============================================================
   Lesson: Conditional Sentences (Present & Future) + may/might
   English · Super Goal 2 · Unit 13 (What's the Weather Like?) · صفحة ١٢٢
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U13_COND'] = {
    id:'EN_SG2_U13_COND',
    title:'Conditional with if',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'if + present … will/may/might',
      intro:'الجملُ الشرطية بـ <code>if</code> تربط السببَ بالنتيجة. <b>الحقائق</b>: <code>if + مضارع … مضارع</code> (<code>Water becomes ice if you freeze it</code>). <b>المستقبل</b>: <code>if + مضارع … will</code> (<code>If it rains, they won’t play</code>). و<code>may/might</code> في جملة النتيجة للاحتمال (<code>If she doesn’t study, she might fail</code>).',
      table:[['fact','If you heat ice, it melts.'],['future (will)','If it rains, we won’t go.'],['possibility','If I study, I might pass.'],['if-clause','دائمًا بالمضارع البسيط']],
      trick:'القاعدةُ الذهبية: بعد <code>if</code> نستعمل <b>المضارع البسيط</b> (لا <code>will</code>)، و<code>will/may/might</code> تكون في <b>جملة النتيجة</b> فقط.'
    },
    stages:[
      { type:'choice', name:'الحقائق', hint:'if + مضارع … مضارع', qs:[
        {p:'Water becomes ice if you ___ it in the freezer.', o:['put','will put','puts','putting'], a:0, w:'بعد <code>if</code> ← مضارع.', f:'if you <u>put</u> it…'},
        {p:'If it is sunny, I always ___ sunglasses.', o:['wear','will wear','wore','wearing'], a:0, w:'حقيقةٌ ← مضارع.', f:'I always <u>wear</u>…'},
        {p:'Ice melts if you ___ it.', o:['heat','will heat','heated','heating'], a:0, w:'مضارع.', f:'if you <u>heat</u> it'},
        {p:'In a fact, both clauses use the ___.', o:['simple present','future','past'], a:0, w:'المضارع البسيط.', f:'<u>simple present</u>'}
      ]},
      { type:'choice', name:'المستقبل (will)', hint:'if + مضارع … will', qs:[
        {p:'If their team wins, the fans ___ happy.', o:['will be','are being','were','be'], a:0, w:'النتيجة ← <code>will</code>.', f:'the fans <u>will be</u> happy'},
        {p:'They won’t play tennis if it ___.', o:['rains','will rain','rained','raining'], a:0, w:'بعد <code>if</code> ← مضارع.', f:'if it <u>rains</u>'},
        {p:'If it doesn’t rain, they ___ tennis.', o:["'ll play",'played','play will','are play'], a:0, w:'النتيجة ← <code>will play</code>.', f:'they <u>’ll play</u>'},
        {p:'Will they play if it ___?', o:['rains','will rain','rained','raining'], a:0, w:'بعد <code>if</code> ← مضارع.', f:'if it <u>rains</u>?'}
      ]},
      { type:'choice', name:'may / might', hint:'احتمال في النتيجة', qs:[
        {p:'If Noura doesn’t study, she ___ fail the test.', o:['might','will surely','is','does'], a:0, w:'احتمال ← <code>might</code>.', f:'she <u>might</u> fail'},
        {p:'We ___ go skiing if there is enough snow.', o:['might','are','were','do'], a:0, w:'احتمال ← <code>might</code>.', f:'We <u>might</u> go skiing'},
        {p:'“might/may” in the result clause shows:', o:['possibility','certainty','the past'], a:0, w:'الاحتمال.', f:'<u>possibility</u>'},
        {p:'After “might”, the verb is:', o:['base form','+ -s','+ -ing'], a:0, w:'مجرّد.', f:'<u>base form</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['If','it','will','rain',',','we','won’t','go','.'], bad:2, fix:'تُحذف will (rains)', w:'بعد <code>if</code> ← مضارع.', f:'If it <u>rains</u>, we won’t go.'},
        {words:['If','you','freeze','water',',','it','will','becomes','ice','.'], bad:7, fix:'become', w:'مجرّد بعد <code>will</code>.', f:'…it will <u>become</u> ice.'},
        {words:['She','might','fails','the','test','.'], bad:2, fix:'fail', w:'مجرّد بعد <code>might</code>.', f:'She might <u>fail</u>.'},
        {words:['If','it','rained',',','we','will','stay','.'], bad:2, fix:'rains', w:'بعد <code>if</code> ← مضارع بسيط.', f:'If it <u>rains</u>, we will stay.'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['If','it','rains',',','we','won’t','play','.'], w:'<code>if + مضارع … won’t</code>.', f:"If it rains, we won't play."},
        {sol:['If','you','heat','ice',',','it','melts','.'], w:'حقيقة ← مضارع/مضارع.', f:'If you heat ice, it melts.'},
        {sol:['If','she','studies',',','she','will','pass','.'], w:'<code>if + مضارع … will</code>.', f:'If she studies, she will pass.'},
        {sol:['We','might','go','if','there','is','snow','.'], w:'احتمال ← <code>might</code>.', f:'We might go if there is snow.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'Water becomes ice if you ___ it.', ask:'اختر', o:['freeze','will freeze'], a:0, w:'مضارع.', f:'<u>freeze</u>'},
        {p:'If their team wins, they ___ happy.', ask:'اختر', o:['will be','are being'], a:0, w:'النتيجة.', f:'<u>will be</u>'},
        {p:'They won’t play if it ___.', ask:'اختر', o:['rains','will rain'], a:0, w:'بعد <code>if</code>.', f:'<u>rains</u>'},
        {p:'If she doesn’t study, she ___ fail.', ask:'اختر', o:['might','will surely'], a:0, w:'احتمال.', f:'<u>might</u>'},
        {p:'After “if” we use the ___.', ask:'اختر', o:['present','future'], a:0, w:'المضارع.', f:'<u>present</u>'},
        {p:'She might ___ the test. (fail)', ask:'الفعل', o:['fail','fails'], a:0, w:'مجرّد.', f:'<u>fail</u>'},
        {sol:['If','it','rains',',','we','will','stay','.'], w:'<code>if + مضارع … will</code>.', f:'If it rains, we will stay.'},
        {p:'“might” shows ___.', ask:'اختر', o:['possibility','certainty'], a:0, w:'الاحتمال.', f:'<u>possibility</u>'},
        {p:'Ice melts if you ___ it.', ask:'اختر', o:['heat','will heat'], a:0, w:'مضارع.', f:'<u>heat</u>'}
      ]}
    ]
  };
})();
