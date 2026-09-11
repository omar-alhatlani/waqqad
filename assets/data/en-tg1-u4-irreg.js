/* ============================================================
   درس: Grammar — Simple Past: regular & irregular verbs
   الإنجليزية · الرابع الابتدائي · ف١ · Top Goal 1 · Unit 4 (After-School Fun)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب المحفوظ).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG1_U4_IRREG'] = {
    id:'EN_TG1_U4_IRREG',
    title:'Grammar — Regular & irregular past',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'ماضٍ منتظمٌ وماضٍ شاذّ',
      intro:'في الماضي البسيط نوعان: <b>المنتظمُ</b> يأخذُ <span class="tok-focus">-ed</span> (watch → watch<span class="tok-focus">ed</span>) ، و<b>الشاذُّ</b> له صيغةٌ خاصّةٌ تُحفَظ: go → <span class="tok-focus">went</span> ، buy → <span class="tok-focus">bought</span> ، see → <span class="tok-focus">saw</span> ، eat → <span class="tok-focus">ate</span> ، have → <span class="tok-focus">had</span>.',
      formula:'regular: verb + <span class="tok-focus">-ed</span>   /   irregular: صيغةٌ محفوظة',
      table:[['watch → watched','منتظم (-ed)'],['play → played','منتظم (-ed)'],['go → went','شاذّ'],['buy → bought','شاذّ'],['see → saw','شاذّ']],
      examples:['Yesterday I <span class="tok-focus">went</span> shopping with my sister.','She <span class="tok-focus">watched</span> TV and <span class="tok-focus">ate</span> dinner.'],
      trick:'إن لم يكنِ الفعلُ منتظمًا (-ed) فاحفظْ صيغتَه: <code>go/went, see/saw, buy/bought, eat/ate, have/had</code>.'
    },
    stages:[
      { type:'choice', name:'منتظمٌ أم شاذّ؟', hint:'-ed منتظم', qs:[
        {p:'play → played', ask:'اختر', o:['منتظم','شاذّ'], a:0, w:'أخذَ <code>-ed</code>.', f:'played ← <u>منتظم</u>'},
        {p:'go → went', ask:'اختر', o:['شاذّ','منتظم'], a:0, w:'صيغةٌ خاصّة.', f:'went ← <u>شاذّ</u>'},
        {p:'watch → watched', ask:'اختر', o:['منتظم','شاذّ'], a:0, w:'<code>-ed</code>.', f:'watched ← <u>منتظم</u>'},
        {p:'see → saw', ask:'اختر', o:['شاذّ','منتظم'], a:0, w:'صيغةٌ محفوظة.', f:'saw ← <u>شاذّ</u>'}
      ]},
      { type:'gap', name:'اكتبِ الماضي', hint:'تذكّرِ الصيغة', qs:[
        {p:'Yesterday I ___ shopping. (go)', o:['went','goed','gone'], a:0, w:'ماضي <code>go</code> شاذّ ← <code>went</code>.', f:'I <u>went</u> shopping.'},
        {p:'She ___ TV last night. (watch)', o:['watched','watch','wached'], a:0, w:'منتظم ← <code>watched</code>.', f:'She <u>watched</u> TV.'},
        {p:'We ___ a new game. (buy)', o:['bought','buyed','buy'], a:0, w:'ماضي <code>buy</code> ← <code>bought</code>.', f:'We <u>bought</u> a new game.'}
      ]},
      { type:'choice', name:'اختر الصواب', hint:'الشاذُّ لا يأخذ -ed', qs:[
        {p:'He ___ his friends at the mall.', ask:'اختر', o:['saw','seed'], a:0, w:'ماضي see ← saw.', f:'He <u>saw</u> his friends.'},
        {p:'I ___ a sandwich after school.', ask:'اختر', o:['ate','eated'], a:0, w:'ماضي eat ← ate.', f:'I <u>ate</u> a sandwich.'},
        {p:'They ___ board games all afternoon.', ask:'اختر', o:['played','plaid'], a:0, w:'منتظم ← played.', f:'They <u>played</u> board games.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['I','goed','to','the','park','.'], bad:1, fix:'went', w:'ماضي go شاذّ ← <code>went</code>.', f:'I <u>went</u> to the park.'},
        {words:['She','buyed','a','new','bag','.'], bad:1, fix:'bought', w:'ماضي buy ← <code>bought</code>.', f:'She <u>bought</u> a new bag.'},
        {words:['We','watch','a','movie','yesterday','.'], bad:1, fix:'watched', w:'الماضي المنتظم ← <code>watched</code>.', f:'We <u>watched</u> a movie yesterday.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب', qs:[
        {sol:['I','went','shopping','yesterday','.'], w:'ماضٍ شاذّ.', f:'I went shopping yesterday.'},
        {sol:['She','watched','TV','and','ate','dinner','.'], w:'منتظمٌ وشاذّ.', f:'She watched TV and ate dinner.'},
        {sol:['We','bought','a','new','game','.'], w:'ماضي buy.', f:'We bought a new game.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'go → ?', ask:'اختر', o:['went','goed'], a:0, w:'شاذّ.', f:'← <u>went</u>'},
        {p:'She ___ TV. (watch)', ask:'اختر', o:['watched','watch'], a:0, w:'منتظم.', f:'She <u>watched</u> TV.'},
        {p:'I ___ my grandparents. (see)', ask:'اختر', o:['saw','seed'], a:0, w:'شاذّ.', f:'I <u>saw</u> my grandparents.'},
        {p:'الفعلُ المنتظمُ يأخذُ:', ask:'اختر', o:['-ed','صيغةً محفوظة'], a:0, w:'-ed.', f:'← <u>-ed</u>'},
        {p:'buy → ?', ask:'اختر', o:['bought','buyed'], a:0, w:'شاذّ.', f:'← <u>bought</u>'}
      ]}
    ]
  };
})();
