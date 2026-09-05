/* ============================================================
   Lesson: Adverbs of Frequency + Time Expressions
   English · Super Goal 1 · Unit 11 (What Time Do You Get Up?) · صفحة ٩٦
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U11_FREQ'] = {
    id:'EN_SG1_U11_FREQ',
    title:'Adverbs of Frequency',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'always, usually, sometimes, never',
      intro:'تُبيّن <b>ظروف التكرار</b> كم مرّة يحدث الفعل: <code>always</code> (دائمًا) ← <code>usually</code> ← <code>sometimes</code> ← <code>never</code> (أبدًا). تأتي <b>قبل الفعل الرئيس</b> وبعد الفعل <code>be</code>. وتعابيرُ التسلسل <code>before, after, then, every day</code> ترتّب الروتين اليوميّ.',
      table:[['always','دائمًا (100%)'],['usually','عادةً'],['sometimes','أحيانًا'],['never','أبدًا (0%)']],
      trick:'الظرفُ قبل الفعل الرئيس: <code>I always get up early</code>، لكن بعد <code>be</code>: <code>I am always early</code>. و<code>never</code> معناها نفيٌ فلا نضيف <code>not</code>.'
    },
    stages:[
      { type:'choice', name:'المعنى', hint:'من الأكثر إلى الأقلّ', qs:[
        {p:'100% of the time =', o:['always','never','sometimes'], a:0, w:'<code>always</code>.', f:'<u>always</u>'},
        {p:'0% of the time =', o:['never','always','usually'], a:0, w:'<code>never</code>.', f:'<u>never</u>'},
        {p:'“usually” means:', o:['most of the time','one time','not at all'], a:0, w:'عادةً.', f:'<u>most of the time</u>'},
        {p:'“sometimes” means:', o:['on some occasions','always','never'], a:0, w:'أحيانًا.', f:'<u>on some occasions</u>'}
      ]},
      { type:'choice', name:'موضع الظرف', hint:'قبل الفعل، بعد be', qs:[
        {p:'I ___ get up at six. (always)', o:['always get up','get up always','am always get up'], a:0, w:'قبل الفعل الرئيس.', f:'I <u>always get up</u>…'},
        {p:'She is ___ late. (never)', o:['never','never is','is not never'], a:0, w:'بعد <code>be</code>.', f:'She is <u>never</u> late.'},
        {p:'We ___ eat breakfast together. (usually)', o:['usually eat','eat usually','are usually eat'], a:0, w:'قبل الفعل.', f:'We <u>usually eat</u>…'},
        {p:'They ___ watch TV at night. (sometimes)', o:['sometimes watch','watch sometimes TV','are sometimes'], a:0, w:'قبل الفعل.', f:'They <u>sometimes watch</u>…'}
      ]},
      { type:'choice', name:'تعابير التسلسل', hint:'before / after / then', qs:[
        {p:'I brush my teeth ___ breakfast. (بعد)', o:['after','before','then'], a:0, w:'<code>after</code> = بعد.', f:'<u>after</u> breakfast'},
        {p:'I wash my hands ___ eating. (قبل)', o:['before','after','then'], a:0, w:'<code>before</code> = قبل.', f:'<u>before</u> eating'},
        {p:'I get up, ___ I have breakfast.', o:['then','before','after'], a:0, w:'<code>then</code> = بعدها/ثمّ.', f:'…<u>then</u> I have breakfast'},
        {p:'I go to school ___ .', o:['every day','day every','always day'], a:0, w:'<code>every day</code>.', f:'<u>every day</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['I','get','up','always','early','.'], bad:3, fix:'قبل الفعل: always get', w:'الظرف قبل الفعل الرئيس.', f:'I <u>always get</u> up early.'},
        {words:['She','always','is','late','.'], bad:1, fix:'بعد be: is always', w:'بعد <code>be</code> يأتي الظرف.', f:'She <u>is always</u> late.'},
        {words:['I','never','don’t','eat','meat','.'], bad:2, fix:'تُحذف don’t', w:'<code>never</code> نفيٌ بذاتها.', f:'I <u>never</u> eat meat.'},
        {words:['I','wash','my','hands','after','eating',',','before','lunch','.'], bad:4, fix:'before (قبل الأكل)', w:'نغسل اليدين قبل الأكل.', f:'…<u>before</u> eating…'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['I','always','get','up','at','six','.'], w:'الظرف قبل الفعل.', f:'I always get up at six.'},
        {sol:['She','is','never','late','.'], w:'بعد <code>be</code>.', f:'She is never late.'},
        {sol:['We','sometimes','watch','TV','.'], w:'قبل الفعل.', f:'We sometimes watch TV.'},
        {sol:['I','brush','my','teeth','after','breakfast','.'], w:'<code>after</code> = بعد.', f:'I brush my teeth after breakfast.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'100% =', ask:'اختر', o:['always','never'], a:0, w:'دائمًا.', f:'<u>always</u>'},
        {p:'0% =', ask:'اختر', o:['never','usually'], a:0, w:'أبدًا.', f:'<u>never</u>'},
        {p:'I ___ get up early. (always)', ask:'الموضع', o:['always get up','get up always'], a:0, w:'قبل الفعل.', f:'<u>always get up</u>'},
        {p:'She is ___ late. (never)', ask:'الموضع', o:['never','never is'], a:0, w:'بعد be.', f:'<u>never</u>'},
        {p:'brush teeth ___ breakfast (بعد)', ask:'اختر', o:['after','before'], a:0, w:'بعد.', f:'<u>after</u>'},
        {p:'wash hands ___ eating (قبل)', ask:'اختر', o:['before','after'], a:0, w:'قبل.', f:'<u>before</u>'},
        {sol:['I','usually','have','breakfast','.'], w:'قبل الفعل.', f:'I usually have breakfast.'},
        {p:'I get up, ___ I dress.', ask:'اختر', o:['then','before'], a:0, w:'ثمّ.', f:'<u>then</u>'},
        {p:'I go to school ___ .', ask:'اختر', o:['every day','day every'], a:0, w:'كلّ يوم.', f:'<u>every day</u>'}
      ]}
    ]
  };
})();
