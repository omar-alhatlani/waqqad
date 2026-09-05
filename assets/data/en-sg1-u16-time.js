/* ============================================================
   Lesson: Past Time Expressions + Simple Present vs Simple Past
   English · Super Goal 1 · Unit 16 (What Did You Do Last Week?) · صفحة ١٤٤/١٤٩
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U16_TIME'] = {
    id:'EN_SG1_U16_TIME',
    title:'Past Time Expressions & Present vs Past',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'yesterday, last…, ago',
      intro:'تدلّ <b>تعابيرُ الماضي</b> على انتهاء الفعل: <code>yesterday</code>, <code>last night / last week</code>, <code>two days ago</code>. نستعمل <b>المضارع البسيط</b> للعادة (<code>I usually finish at 3</code>) و<b>الماضي البسيط</b> لحدثٍ منتهٍ (<code>I finished at 3 yesterday</code>).',
      table:[['yesterday','أمس'],['last night/week','الليلة الماضية/الأسبوع الماضي'],['… ago','two days ago'],['every day → usually','present habit']],
      trick:'كلماتٌ مثل <code>yesterday, last week, ago</code> تستلزم <b>الماضي</b>. وكلماتٌ مثل <code>usually, every day</code> تستلزم <b>المضارع البسيط</b>.'
    },
    stages:[
      { type:'choice', name:'تعابير الماضي', hint:'اختر الأنسب', qs:[
        {p:'I went to the zoo ___.', o:['yesterday','tomorrow','next week'], a:0, w:'الماضي ← <code>yesterday</code>.', f:'<u>yesterday</u>'},
        {p:'We watched a film ___ night.', o:['last','next','this coming'], a:0, w:'<code>last night</code>.', f:'<u>last</u> night'},
        {p:'He bought it two days ___.', o:['ago','then','later'], a:0, w:'<code>ago</code> = منذ.', f:'two days <u>ago</u>'},
        {p:'They traveled ___ week.', o:['last','next','every'], a:0, w:'<code>last week</code>.', f:'<u>last</u> week'}
      ]},
      { type:'choice', name:'مضارع أم ماضٍ', hint:'حسب كلمة الزمن', qs:[
        {p:'Sabah ___ her homework yesterday.', o:['finished','finishes','finish'], a:0, w:'<code>yesterday</code> ← ماضٍ.', f:'<u>finished</u>'},
        {p:'Sabah always ___ her homework early.', o:['finishes','finished','finish'], a:0, w:'<code>always</code> ← مضارع (مفرد).', f:'<u>finishes</u>'},
        {p:'We ___ on a trip last month.', o:['went','go','goes'], a:0, w:'<code>last month</code> ← ماضٍ.', f:'<u>went</u>'},
        {p:'My family and I ___ on a trip every year.', o:['go','went','goes'], a:0, w:'<code>every year</code> ← مضارع.', f:'<u>go</u>'}
      ]},
      { type:'choice', name:'السؤال في الزمنين', hint:'do/did', qs:[
        {p:'What ___ you do yesterday?', o:['did','do','are','were'], a:0, w:'الماضي ← <code>did</code>.', f:'What <u>did</u> you do yesterday?'},
        {p:'What ___ you usually do after school?', o:['do','did','are','were'], a:0, w:'العادة ← <code>do</code>.', f:'What <u>do</u> you usually do?'},
        {p:'___ you like the art exhibit? (last week)', o:['Did','Do','Are','Were'], a:0, w:'الماضي ← <code>Did</code>.', f:'<u>Did</u> you like it?'},
        {p:'“ago” goes with the ___ tense.', o:['past','present','future'], a:0, w:'الماضي.', f:'the <u>past</u>'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['I','go','to','the','zoo','yesterday','.'], bad:1, fix:'went', w:'<code>yesterday</code> ← ماضٍ.', f:'I <u>went</u> to the zoo yesterday.'},
        {words:['She','finished','her','homework','every','day','.'], bad:1, fix:'finishes', w:'<code>every day</code> ← مضارع.', f:'She <u>finishes</u> …every day.'},
        {words:['We','went','on','a','trip','next','week','.'], bad:5, fix:'last', w:'مع الماضي ← <code>last week</code>.', f:'…<u>last</u> week.'},
        {words:['What','do','you','do','yesterday','?'], bad:1, fix:'did', w:'<code>yesterday</code> ← <code>did</code>.', f:'What <u>did</u> you do yesterday?'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['I','went','to','the','zoo','yesterday','.'], w:'ماضٍ + <code>yesterday</code>.', f:'I went to the zoo yesterday.'},
        {sol:['We','watched','a','film','last','night','.'], w:'<code>last night</code>.', f:'We watched a film last night.'},
        {sol:['What','did','you','do','last','week','?'], w:'<code>did</code> للماضي.', f:'What did you do last week?'},
        {sol:['I','usually','get','up','early','.'], w:'المضارع للعادة.', f:'I usually get up early.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'I went to the zoo ___.', ask:'اختر', o:['yesterday','tomorrow'], a:0, w:'الماضي.', f:'<u>yesterday</u>'},
        {p:'We watched a film ___ night.', ask:'أكمل', o:['last','next'], a:0, w:'الماضية.', f:'<u>last</u>'},
        {p:'He bought it two days ___.', ask:'أكمل', o:['ago','later'], a:0, w:'منذ.', f:'<u>ago</u>'},
        {p:'Sabah ___ her homework yesterday.', ask:'اختر', o:['finished','finishes'], a:0, w:'ماضٍ.', f:'<u>finished</u>'},
        {p:'She always ___ early.', ask:'اختر', o:['finishes','finished'], a:0, w:'عادة.', f:'<u>finishes</u>'},
        {p:'What ___ you do yesterday?', ask:'اختر', o:['did','do'], a:0, w:'الماضي.', f:'<u>did</u>'},
        {sol:['We','went','on','a','trip','last','month','.'], w:'ماضٍ + <code>last month</code>.', f:'We went on a trip last month.'},
        {p:'“ago” goes with the ___ tense.', ask:'اختر', o:['past','present'], a:0, w:'الماضي.', f:'<u>past</u>'},
        {p:'We ___ on a trip every year.', ask:'اختر', o:['go','went'], a:0, w:'عادة.', f:'<u>go</u>'}
      ]}
    ]
  };
})();
