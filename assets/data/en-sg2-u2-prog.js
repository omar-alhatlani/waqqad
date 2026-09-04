/* ============================================================
   Lesson: Present Progressive
   English · Super Goal 2 · Unit 2 (What Are They Making?) · صفحة ١٢
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U2_PROG'] = {
    id:'EN_SG2_U2_PROG',
    title:'Present Progressive',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'Present Progressive — am/is/are + verb-ing',
      intro:'نستعمل <b>المضارع المستمر</b> لحدثٍ يقعُ <b>الآن</b>: الفعل <code>be</code> (am/is/are) + الفعل + <code>-ing</code>. مثل: <code>They are making a TV series.</code> ويُستعمَل أحيانًا لخطةٍ مستقبلية: <code>I’m going to the park tomorrow.</code>',
      table:[['I','am + working'],['He / She / It','is + working'],['You / We / They','are + working']],
      trick:'اختر <code>be</code> حسب الفاعل ثم أضِف <code>-ing</code> للفعل. للسؤال قدّمِ <code>be</code>: <code>What are you doing?</code>'
    },
    stages:[
      { type:'choice', name:'اختر be الصحيح', hint:'أيّ am/is/are يناسب الفاعل؟', qs:[
        {p:'They ___ making a TV series.', o:['are','is','am'], a:0, w:'<code>they</code> ← <code>are</code>.', f:'They <u>are</u> making…'},
        {p:'He ___ talking to the actor.', o:['is','are','am'], a:0, w:'<code>he</code> ← <code>is</code>.', f:'He <u>is</u> talking…'},
        {p:'I ___ watching a video.', o:['am','is','are'], a:0, w:'<code>I</code> ← <code>am</code>.', f:'I <u>am</u> watching…'},
        {p:'The men ___ filming a scene.', o:['are','is','am'], a:0, w:'<code>the men</code> جمع ← <code>are</code>.', f:'The men <u>are</u> filming…'},
        {p:'She ___ wearing a raincoat.', o:['is','are','am'], a:0, w:'<code>she</code> ← <code>is</code>.', f:'She <u>is</u> wearing…'}
      ]},
      { type:'gap', name:'أكمل بالمضارع المستمر', hint:'be + الفعل + ing', qs:[
        {p:'What ___ they making?  (make)', o:['are … making','is … making','am … make'], a:0, w:'سؤال: <code>are</code> + الفاعل + <code>making</code>.', f:'What <u>are</u> they <u>making</u>?'},
        {p:'Look! It ___ (rain) now.', o:['is raining','are raining','is rain'], a:0, w:'<code>it is raining</code>.', f:'It <u>is raining</u> now.'},
        {p:'We ___ (study) English at the moment.', o:['are studying','is studying','am studying'], a:0, w:'<code>we are studying</code>.', f:'We <u>are studying</u>.'},
        {p:'The director ___ (talk) to the actor.', o:['is talking','are talking','am talking'], a:0, w:'مفرد ← <code>is talking</code>.', f:'is <u>talking</u>.'},
        {p:'I ___ (go) to the park tomorrow.', o:['am going','is going','are going'], a:0, w:'خطة مستقبلية بالمضارع المستمر ← <code>am going</code>.', f:'I <u>am going</u> tomorrow.'}
      ]},
      { type:'choice', name:'الآن أم عادةً؟', hint:'الآن ← مستمر · عادةً ← مضارع بسيط', qs:[
        {p:'“right now / at the moment / Look!” تدلّ على:', ask:'اختر', o:['المضارع المستمر','المضارع البسيط'], a:0, w:'إشاراتُ اللحظة ← المستمر.', f:'← المضارع المستمر'},
        {p:'“every day / usually / always” تدلّ على:', ask:'اختر', o:['المضارع البسيط','المضارع المستمر'], a:0, w:'العادة ← البسيط.', f:'← المضارع البسيط'},
        {p:'He usually ___ a detective.  (play)', ask:'اختر', o:['plays','is playing'], a:0, w:'<code>usually</code> ← بسيط: <code>plays</code>.', f:'He usually <u>plays</u>…'},
        {p:'Look! They ___ to film.  (start)', ask:'اختر', o:['are starting','start'], a:0, w:'<code>Look!</code> ← مستمر.', f:'They <u>are starting</u>…'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['They','making','a','film','.'], bad:1, fix:'are making', w:'لا بدّ من <code>be</code>: <code>are making</code>.', f:'They <u>are making</u> a film.'},
        {words:['He','are','talking','.'], bad:1, fix:'is', w:'<code>he</code> ← <code>is</code>.', f:'He <u>is</u> talking.'},
        {words:['I','am','watch','TV','.'], bad:2, fix:'watching', w:'المستمر يحتاج <code>-ing</code>.', f:'I am <u>watching</u> TV.'},
        {words:['What','they','are','doing','?'], bad:1, fix:'ترتيب: are they', w:'في السؤال يتقدّم <code>are</code>: <code>What are they doing?</code>', f:'What <u>are they</u> doing?'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['They','are','making','a','TV','series','.'], w:'be + ing.', f:'They are making a TV series.'},
        {sol:['What','are','you','doing','?'], w:'يتقدّم be في السؤال.', f:'What are you doing?'},
        {sol:['He','is','wearing','a','raincoat','.'], w:'مفرد ← is + ing.', f:'He is wearing a raincoat.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'They ___ making a film.', ask:'اختر', o:['are','is'], a:0, w:'جمع.', f:'They <u>are</u> making…'},
        {p:'Look! It ___ now.  (rain)', ask:'اختر', o:['is raining','rains'], a:0, w:'Look! ← مستمر.', f:'It <u>is raining</u>.'},
        {p:'He usually ___ a detective.', ask:'اختر', o:['plays','is playing'], a:0, w:'usually ← بسيط.', f:'He usually <u>plays</u>.'},
        {p:'What ___ you doing?', ask:'اختر', o:['are','is'], a:0, w:'you ← are.', f:'What <u>are</u> you doing?'},
        {p:'I ___ watching a video.', ask:'اختر', o:['am','is'], a:0, w:'I ← am.', f:'I <u>am</u> watching…'},
        {sol:['They','are','making','a','TV','series','.'], w:'be + ing.', f:'They are making a TV series.'},
        {p:'She ___ (wear) a coat now.', ask:'اختر', o:['is wearing','wears'], a:0, w:'now ← مستمر.', f:'She <u>is wearing</u>…'},
        {p:'“at the moment” تدلّ على:', ask:'اختر', o:['المستمر','البسيط'], a:0, w:'اللحظة ← المستمر.', f:'← المستمر'},
        {p:'We ___ studying English.', ask:'اختر', o:['are','is'], a:0, w:'we ← are.', f:'We <u>are</u> studying.'}
      ]}
    ]
  };
})();
