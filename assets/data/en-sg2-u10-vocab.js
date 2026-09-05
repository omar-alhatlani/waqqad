/* ============================================================
   Lesson: Vocabulary — Shopping & Possessions
   English · Super Goal 2 · Unit 10 (It's a Bargain!) · صفحات ٨٦–٨٧
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U10_VOCAB'] = {
    id:'EN_SG2_U10_VOCAB',
    title:'Vocabulary — Shopping',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'Shopping Words',
      intro:'مفرداتُ التسوّق: <code>bargain</code> صفقة رابحة، <code>price</code> سعر، <code>discount</code> خصم، <code>cash</code> نقد، <code>credit card</code> بطاقة ائتمان، <code>refund</code> استرداد المال، <code>exchange</code> يستبدل، <code>size</code> مقاس، <code>fit</code> يناسب المقاس. وأغراض: <code>backpack</code> حقيبة ظهر، <code>windbreaker</code> سترة، <code>sheets</code> ملاءات.',
      table:[['bargain','صفقة رابحة/رخيصة'],['discount','خصم'],['refund','استرداد المال'],['exchange','يستبدل'],['size','مقاس']],
      trick:'<code>It’s a bargain!</code> تعني «سعرٌ ممتاز/رخيص». وندفع بـ <code>cash</code> أو <code>credit card</code>، ونطلب <code>refund</code> أو <code>exchange</code> إن لم يناسبنا الشيء.'
    },
    stages:[
      { type:'choice', name:'المعنى', hint:'اختر المعنى الصحيح', qs:[
        {p:'A “bargain” is something with a ___ price.', o:['good/low','high','wrong'], a:0, w:'صفقة بسعرٍ جيّد.', f:'a <u>good/low</u> price'},
        {p:'A “discount” means the price is:', o:['reduced','raised','fixed'], a:0, w:'خصم.', f:'<u>reduced</u>'},
        {p:'A “refund” means you get your ___ back.', o:['money','clothes','time'], a:0, w:'استرداد المال.', f:'your <u>money</u> back'},
        {p:'To “exchange” an item is to:', o:['change it for another','pay more','keep it'], a:0, w:'يستبدل.', f:'<u>change it for another</u>'},
        {p:'Your “size” is how big your clothes:', o:['are','cost','look'], a:0, w:'المقاس.', f:'how big they <u>are</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'This shirt is only 20 riyals. It’s a real ___!', o:['bargain','size','refund'], a:0, w:'صفقة.', f:'a real <u>bargain</u>'},
        {p:'Can I pay by ___ card?', o:['credit','birthday','post'], a:0, w:'بطاقة ائتمان.', f:'<u>credit</u> card'},
        {p:'The store gave me a ___ because the item was broken.', o:['refund','discount only','price'], a:0, w:'استرداد.', f:'<u>refund</u>'},
        {p:'What ___ do you take? — Medium.', o:['size','price','cash'], a:0, w:'المقاس.', f:'<u>size</u>'},
        {p:'We only take ___ and credit cards.', o:['cash','sheets','sizes'], a:0, w:'نقد.', f:'<u>cash</u>'}
      ]},
      { type:'choice', name:'المقاس والملاءمة', hint:'fit / size', qs:[
        {p:'These jeans don’t ___ me; they’re too small.', o:['fit','cost','buy'], a:0, w:'لا تناسب المقاس.', f:"don't <u>fit</u>"},
        {p:'A “windbreaker” is a light ___.', o:['jacket','shoe','bag'], a:0, w:'سترة خفيفة.', f:'light <u>jacket</u>'},
        {p:'A “backpack” is a bag you carry on your ___.', o:['back','head','feet'], a:0, w:'على الظهر.', f:'on your <u>back</u>'},
        {p:'If the price is too high, you can ask for a ___.', o:['discount','size','sheet'], a:0, w:'خصم.', f:'a <u>discount</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['These','shoes','don’t','cost','me','.'], bad:3, fix:'fit', w:'لا تناسب المقاس ← <code>fit</code>.', f:"don't <u>fit</u> me"},
        {words:['Can','I','pay','by','discount','?'], bad:4, fix:'credit card', w:'ندفع ببطاقة ائتمان.', f:'…by <u>credit card</u>?'},
        {words:['It’s','only','10','riyals','.','It’s','a','size','!'], bad:7, fix:'bargain', w:'صفقة رابحة.', f:'It’s a <u>bargain</u>!'},
        {words:['The','store','gave','me','a','size','back','.'], bad:5, fix:'refund', w:'استرداد المال.', f:'a <u>refund</u>'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'good low price =', ask:'اختر', o:['bargain','size'], a:0, w:'صفقة.', f:'<u>bargain</u>'},
        {p:'price reduced =', ask:'اختر', o:['discount','refund'], a:0, w:'خصم.', f:'<u>discount</u>'},
        {p:'get your money back =', ask:'اختر', o:['refund','exchange'], a:0, w:'استرداد.', f:'<u>refund</u>'},
        {p:'change for another item =', ask:'اختر', o:['exchange','discount'], a:0, w:'يستبدل.', f:'<u>exchange</u>'},
        {p:'pay by ___ card', ask:'أكمل', o:['credit','post'], a:0, w:'ائتمان.', f:'<u>credit</u>'},
        {p:'What ___ do you take?', ask:'أكمل', o:['size','price'], a:0, w:'المقاس.', f:'<u>size</u>'},
        {p:'These jeans don’t ___ me.', ask:'أكمل', o:['fit','cost'], a:0, w:'تناسب.', f:'<u>fit</u>'},
        {p:'pay with notes =', ask:'اختر', o:['cash','sheets'], a:0, w:'نقد.', f:'<u>cash</u>'},
        {p:'bag on your back =', ask:'اختر', o:['backpack','windbreaker'], a:0, w:'حقيبة ظهر.', f:'<u>backpack</u>'}
      ]}
    ]
  };
})();
