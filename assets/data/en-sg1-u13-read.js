/* ============================================================
   Lesson: Reading — The Iguassu Falls
   English · Super Goal 1 · Unit 13 (What Are You Going to Wear There?) · صفحة ١٢٣
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U13_READ'] = {
    id:'EN_SG1_U13_READ',
    title:'Reading — The Iguassu Falls',
    lang:'en',
    rule:{
      tag:'Reading',
      title:'The Iguassu Falls',
      intro:'اقرأْ عن شلّالات إجواسو، ثمّ أجِب عن الأسئلة.',
      examples:[
        'The Iguassu Falls are on the border of Brazil and Argentina. They are very beautiful and very famous, and popular with tourists from all around the world.',
        'At some times of the year, you can see as many as 275 separate waterfalls. You can hear the roaring water several kilometers away.',
        'Visitors wear waterproof jackets or raincoats with hoods to keep their heads dry, and rubber boots or waterproof shoes.',
        'The town of Foz do Iguassu is near the falls. There are buses to the falls at the Iguassu Park.',
        'Other attractions: a boat ride on the river, a helicopter ride over the falls, and a walk on the Brazilian side for a great view.'
      ],
      trick:'شلّالات إجواسو على حدود البرازيل والأرجنتين، تصل إلى ٢٧٥ شلّالًا. الزوّار يلبسون سُتَرًا وأحذيةً مقاومةً للماء.'
    },
    stages:[
      { type:'choice', name:'الفهم العام', hint:'أين وما هي؟', qs:[
        {p:'Where are the Iguassu Falls?', o:['on the border of Brazil and Argentina','in Egypt','in Norway'], a:0, w:'على حدود البرازيل والأرجنتين.', f:'<u>Brazil and Argentina</u>'},
        {p:'How many separate waterfalls can you see?', o:['as many as 275','only 2','1,000'], a:0, w:'حتى ٢٧٥.', f:'<u>275</u>'},
        {p:'The falls are popular with:', o:['tourists','farmers only','no one'], a:0, w:'السيّاح.', f:'<u>tourists</u>'},
        {p:'You can hear the water from:', o:['several kilometers away','the next room','space'], a:0, w:'على بُعد كيلومترات.', f:'<u>several kilometers away</u>'}
      ]},
      { type:'choice', name:'الملابس والأنشطة', hint:'ماذا يلبسون؟ ماذا يفعلون؟', qs:[
        {p:'Visitors wear waterproof jackets to keep their heads:', o:['dry','warm','cold'], a:0, w:'جافّة.', f:'<u>dry</u>'},
        {p:'On their feet, visitors wear:', o:['rubber boots','sandals','socks only'], a:0, w:'أحذية مطّاطية.', f:'<u>rubber boots</u>'},
        {p:'How do visitors get to the falls?', o:['by bus','by plane','on foot only'], a:0, w:'بالحافلة.', f:'<u>by bus</u>'},
        {p:'One attraction is a ___ ride over the falls.', o:['helicopter','camel','train'], a:0, w:'مروحية.', f:'<u>helicopter</u>'}
      ]},
      { type:'choice', name:'صحّ أم خطأ', hint:'True / False', qs:[
        {p:'T/F: The Iguassu Falls are in Saudi Arabia.', o:['False','True'], a:0, w:'بل بين البرازيل والأرجنتين.', f:'<u>False</u>'},
        {p:'T/F: Visitors wear waterproof clothes.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'T/F: There are buses to the falls.', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'T/F: You can only see two waterfalls.', o:['False','True'], a:0, w:'بل حتى ٢٧٥.', f:'<u>False</u>'}
      ]},
      { type:'gap', name:'أكمل من النصّ', hint:'اختر الكلمة المناسبة', qs:[
        {p:'The falls are on the ___ of Brazil and Argentina.', o:['border','top','end'], a:0, w:'الحدود.', f:'<u>border</u>'},
        {p:'Visitors wear ___ jackets.', o:['waterproof','warm','silk'], a:0, w:'مقاومة للماء.', f:'<u>waterproof</u>'},
        {p:'The town of Foz do Iguassu is ___ the falls.', o:['near','far from','under'], a:0, w:'قريبٌ من.', f:'<u>near</u>'},
        {p:'You can take a ___ ride on the river.', o:['boat','car','bus'], a:0, w:'قارب.', f:'<u>boat</u>'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'The falls are on the border of Brazil and ___.', ask:'أكمل', o:['Argentina','Egypt'], a:0, w:'الأرجنتين.', f:'<u>Argentina</u>'},
        {p:'Up to ___ waterfalls.', ask:'اختر', o:['275','2'], a:0, w:'٢٧٥.', f:'<u>275</u>'},
        {p:'Popular with ___.', ask:'اختر', o:['tourists','farmers'], a:0, w:'السيّاح.', f:'<u>tourists</u>'},
        {p:'Visitors keep their heads ___.', ask:'اختر', o:['dry','cold'], a:0, w:'جافّة.', f:'<u>dry</u>'},
        {p:'On feet: ___ boots.', ask:'أكمل', o:['rubber','gold'], a:0, w:'مطّاطية.', f:'<u>rubber</u>'},
        {p:'They get there by ___.', ask:'اختر', o:['bus','plane'], a:0, w:'الحافلة.', f:'<u>bus</u>'},
        {p:'A ___ ride over the falls.', ask:'اختر', o:['helicopter','camel'], a:0, w:'مروحية.', f:'<u>helicopter</u>'},
        {p:'T/F: Visitors wear waterproof clothes.', ask:'صحّ/خطأ', o:['True','False'], a:0, w:'نعم.', f:'<u>True</u>'},
        {p:'The falls are on the ___ of two countries.', ask:'أكمل', o:['border','top'], a:0, w:'الحدود.', f:'<u>border</u>'}
      ]}
    ]
  };
})();
