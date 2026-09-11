/* ============================================================
   درس: Vocabulary — Daily Routines & Times
   الإنجليزية · الثالث الابتدائي · ف١ · We Can! 3 · Unit 5 (Yesterday and Today)
   مفرداتُ الوحدة (حقائقُ معجميّة)، والجملُ التوضيحيّة مؤلَّفةٌ أصالةً.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_WC3_U5_VOCAB'] = {
    id:'EN_WC3_U5_VOCAB',
    title:'Vocabulary — Daily Routines',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'الروتينُ اليوميُّ وأوقاتُ اليوم',
      intro:'مفرداتٌ عن <b>الأعمالِ اليوميّةِ وأوقاتِ اليوم</b>. أتقِنْها لتصفَ يومَك من الصباحِ إلى الليل.',
      table:[['get up','يستيقظ'],['eat lunch','يتناول الغداء'],['do my homework','يحلّ الواجب'],['go to bed','يذهب للنوم'],['morning · evening','صباح · مساء'],['afternoon · night','بعد الظهر · ليل']],
      examples:['I <code>get up</code> in the <code>morning</code>. (أستيقظُ صباحًا.)','I <code>do my homework</code> in the <code>afternoon</code>. (أحلُّ الواجبَ بعدَ الظهر.)'],
      trick:'رتّبْ يومَك: <span class="en">get up</span> ← <span class="en">eat lunch</span> ← <span class="en">do homework</span> ← <span class="en">go to bed</span>.'
    },
    stages:[
      { type:'choice', name:'العبارة ← المعنى', hint:'اختر المعنى العربيّ', qs:[
        {p:'get up', ask:'المعنى؟', o:['يستيقظ','ينام'], a:0, w:'<code>get up</code> = يستيقظ.', f:'← <u>يستيقظ</u>'},
        {p:'eat lunch', ask:'المعنى؟', o:['يتناول الغداء','يحلّ الواجب'], a:0, w:'<code>eat lunch</code>.', f:'← <u>يتناول الغداء</u>'},
        {p:'go to bed', ask:'المعنى؟', o:['يذهب للنوم','يستيقظ'], a:0, w:'<code>go to bed</code>.', f:'← <u>يذهب للنوم</u>'},
        {p:'morning', ask:'المعنى؟', o:['صباح','مساء'], a:0, w:'<code>morning</code> = صباح.', f:'← <u>صباح</u>'},
        {p:'do my homework', ask:'المعنى؟', o:['يحلّ الواجب','يتناول الغداء'], a:0, w:'<code>do homework</code>.', f:'← <u>يحلّ الواجب</u>'}
      ]},
      { type:'choice', name:'المعنى ← الكلمة', hint:'اختر الإنجليزية', qs:[
        {p:'مساء', ask:'الكلمة؟', o:['evening','morning'], a:0, w:'مساء = <code>evening</code>.', f:'← <u>evening</u>'},
        {p:'ليل', ask:'الكلمة؟', o:['night','afternoon'], a:0, w:'ليل = <code>night</code>.', f:'← <u>night</u>'},
        {p:'بعد الظهر', ask:'الكلمة؟', o:['afternoon','morning'], a:0, w:'<code>afternoon</code>.', f:'← <u>afternoon</u>'},
        {p:'يستيقظ', ask:'الكلمة؟', o:['get up','go to bed'], a:0, w:'يستيقظ = <code>get up</code>.', f:'← <u>get up</u>'},
        {p:'يأخذ حمّامًا', ask:'الكلمة؟', o:['take a bath','eat lunch'], a:0, w:'<code>take a bath</code>.', f:'← <u>take a bath</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر المناسب', qs:[
        {p:'I ___ up at six in the morning.', o:['get','eat','go'], a:0, w:'أستيقظ ← <code>get up</code>.', f:'I <u>get</u> up ...'},
        {p:'At noon, I ___ lunch.', o:['eat','get','do'], a:0, w:'الغداء ← <code>eat lunch</code>.', f:'I <u>eat</u> lunch.'},
        {p:'I go to ___ at night.', o:['bed','up','lunch'], a:0, w:'النوم ← <code>go to bed</code>.', f:'... go to <u>bed</u> ...'},
        {p:'I do my ___ after school.', o:['homework','lunch','bath'], a:0, w:'الواجب ← <code>homework</code>.', f:'... my <u>homework</u> ...'}
      ]},
      { type:'error', name:'الكلمة الغريبة', hint:'انقر ما لا ينتمي', qs:[
        {words:['morning','afternoon','evening','get up'], bad:3, fix:'مثال: night', w:'<code>get up</code> فعلٌ، والبقيّةُ أوقاتُ يوم.', f:'... · <u>get up</u> (فعل)'},
        {words:['get up','eat lunch','go to bed','morning'], bad:3, fix:'مثال: take a bath', w:'<code>morning</code> وقتٌ، والبقيّةُ أعمالٌ يوميّة.', f:'... · <u>morning</u> (وقت)'},
        {words:['eat lunch','do homework','take a bath','dolphin'], bad:3, fix:'مثال: get up', w:'<code>dolphin</code> حيوانٌ، والبقيّةُ أعمالٌ يوميّة.', f:'... · <u>dolphin</u>'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'get up', ask:'المعنى؟', o:['يستيقظ','ينام'], a:0, w:'يستيقظ.', f:'← <u>يستيقظ</u>'},
        {p:'مساء', ask:'الكلمة؟', o:['evening','morning'], a:0, w:'evening.', f:'← <u>evening</u>'},
        {p:'At noon, I ___ lunch.', ask:'اختر', o:['eat','get'], a:0, w:'الغداء.', f:'I <u>eat</u> lunch.'},
        {p:'go to bed', ask:'المعنى؟', o:['يذهب للنوم','يستيقظ'], a:0, w:'يذهب للنوم.', f:'← <u>يذهب للنوم</u>'},
        {p:'بعد الظهر', ask:'الكلمة؟', o:['afternoon','night'], a:0, w:'afternoon.', f:'← <u>afternoon</u>'}
      ]}
    ]
  };
})();
