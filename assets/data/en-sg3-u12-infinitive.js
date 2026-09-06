/* ============================================================
   Lesson: Verb + Infinitive · Verb + Object + Infinitive · It’s + Infinitive
   English · Super Goal 3 · Unit 12 (Culture Shock) · صفحة ١٣٢
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U12_INFINITIVE'] = {
    id:'EN_SG3_U12_INFINITIVE',
    title:'Verbs + Infinitive',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'want/decide/need + to · It’s + adjective + to',
      intro:'بعد أفعالٍ مثل <code>want, decide, need, hope, learn, try</code> يأتي <b>المصدر</b> (<code>to + verb</code>): <code>I decided to travel</code>. وبعضُها يأخذ <b>مفعولًا ثمّ مصدرًا</b>: <code>want/tell/ask/advise + object + to + verb</code> (<code>I want you to come</code>). ونستعمل <code>It’s + صفة + to + verb</code>: <code>It’s important to be patient</code>.',
      table:[['verb + to','I need to rest.'],['verb + object + to','I want you to help.'],["It’s … + to","It’s hard to adjust."],['advice','It’s a good idea to plan.']],
      trick:'بعد <code>want/decide/need/hope</code> ← <code>to + verb</code> مباشرةً، أو مع مفعولٍ: <code>want + object + to</code>. وصيغةُ <code>It’s + صفة + to</code> شائعةٌ للنصيحة والتقييم.'
    },
    stages:[
      { type:'choice', name:'verb + to', hint:'المصدر بعد want/decide/need', qs:[
        {p:'I decided ___ abroad.', o:['to travel','travel','traveling','traveled'], a:0, w:'<code>decide + to</code>.', f:'decided <u>to travel</u>'},
        {p:'She needs ___ the language.', o:['to learn','learn','learning','learned'], a:0, w:'<code>need + to</code>.', f:'needs <u>to learn</u>'},
        {p:'We hope ___ you soon.', o:['to see','see','seeing','saw'], a:0, w:'<code>hope + to</code>.', f:'hope <u>to see</u>'},
        {p:'He is trying ___ to the new culture.', o:['to adjust','adjust','adjusting','adjusted'], a:0, w:'<code>try + to</code>.', f:'trying <u>to adjust</u>'}
      ]},
      { type:'choice', name:'verb + object + to', hint:'مفعول ثمّ مصدر', qs:[
        {p:'I want ___ to come with me.', o:['you','your','yours','yourself'], a:0, w:'مفعولٌ ← <code>you</code>.', f:'want <u>you</u> to come'},
        {p:'She advised him ___ study hard.', o:['to','—','that','for'], a:0, w:'<code>advise + object + to</code>.', f:'advised him <u>to</u> study'},
        {p:'They asked us ___ wait.', o:['to','—','that','for'], a:0, w:'<code>ask + object + to</code>.', f:'asked us <u>to</u> wait'},
        {p:'I want ___ to be happy. (he)', o:['him','he','his','himself'], a:0, w:'مفعول ← <code>him</code>.', f:'want <u>him</u> to be happy'}
      ]},
      { type:'choice', name:"It’s + adjective + to", hint:'التقييم والنصيحة', qs:[
        {p:'It’s important ___ patient.', o:['to be','being','be','are'], a:0, w:'<code>It’s + صفة + to be</code>.', f:'important <u>to be</u> patient'},
        {p:'It’s hard ___ to a new culture.', o:['to adjust','adjusting','adjust','adjusted'], a:0, w:'<code>to adjust</code>.', f:'hard <u>to adjust</u>'},
        {p:'It’s a good idea ___ your trip.', o:['to plan','planning','plan','planned'], a:0, w:'<code>to plan</code>.', f:'a good idea <u>to plan</u>'},
        {p:'The structure is: It’s + adjective + ___.', o:['to + verb','verb + -ing','that'], a:0, w:'<code>to + verb</code>.', f:'<u>to + verb</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['I','decided','travel','abroad','.'], bad:2, fix:'to travel', w:'<code>decide + to</code>.', f:'decided <u>to travel</u>'},
        {words:['I','want','you','come','.'], bad:3, fix:'to come', w:'<code>want + object + to</code>.', f:'want you <u>to come</u>'},
        {words:['It’s','important','being','patient','.'], bad:2, fix:'to be', w:'<code>It’s + صفة + to be</code>.', f:'important <u>to be</u> patient'},
        {words:['I','want','he','to','help','.'], bad:2, fix:'him', w:'مفعولٌ ← <code>him</code>.', f:'want <u>him</u> to help'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['I','decided','to','travel','abroad','.'], w:'<code>decide + to</code>.', f:'I decided to travel abroad.'},
        {sol:['I','want','you','to','come','.'], w:'<code>want + object + to</code>.', f:'I want you to come.'},
        {sol:['It’s','important','to','be','patient','.'], w:'<code>It’s + صفة + to</code>.', f:"It’s important to be patient."},
        {sol:['She','needs','to','learn','the','language','.'], w:'<code>need + to</code>.', f:'She needs to learn the language.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'I decided ___ abroad.', ask:'اختر', o:['to travel','travel'], a:0, w:'<code>decide + to</code>.', f:'<u>to travel</u>'},
        {p:'She needs ___ the language.', ask:'اختر', o:['to learn','learning'], a:0, w:'<code>need + to</code>.', f:'<u>to learn</u>'},
        {p:'I want ___ to come. (he)', ask:'اختر', o:['him','he'], a:0, w:'مفعول.', f:'<u>him</u>'},
        {p:'She advised him ___ study.', ask:'اختر', o:['to','—'], a:0, w:'<code>advise + object + to</code>.', f:'<u>to</u>'},
        {p:'It’s important ___ patient.', ask:'اختر', o:['to be','being'], a:0, w:'<code>to be</code>.', f:'<u>to be</u>'},
        {p:'It’s hard ___ to a new culture.', ask:'اختر', o:['to adjust','adjusting'], a:0, w:'<code>to adjust</code>.', f:'<u>to adjust</u>'},
        {sol:['I','want','you','to','help','.'], w:'<code>want + object + to</code>.', f:'I want you to help.'},
        {p:'We hope ___ you soon.', ask:'اختر', o:['to see','seeing'], a:0, w:'<code>hope + to</code>.', f:'<u>to see</u>'},
        {p:'It’s + adjective + ___', ask:'اختر', o:['to + verb','-ing'], a:0, w:'<code>to + verb</code>.', f:'<u>to + verb</u>'}
      ]}
    ]
  };
})();
