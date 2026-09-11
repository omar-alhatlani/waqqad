/* ============================================================
   درس: Vocabulary — House Accidents (health & body)
   الإنجليزية · الرابع الابتدائي · ف١ · Top Goal 1 · Unit 6 (House Accidents)
   مفرداتُ الوحدة (حقائقُ معجميّة)، والجملُ التوضيحيّة مؤلَّفةٌ أصالةً.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG1_U6_VOCAB'] = {
    id:'EN_TG1_U6_VOCAB',
    title:'Vocabulary — Health & Injuries',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'الصحّةُ والإصابات',
      intro:'مفرداتٌ عن <b>الأوجاعِ والإصاباتِ والعلاج</b> في البيت. أتقِنْها لتصفَ ما تشعرُ به وتطلبَ المساعدة.',
      table:[['headache · toothache','صُداع · ألمُ أسنان'],['stomachache · earache','ألمُ معدة · ألمُ أُذُن'],['cough · hurt','سُعال · يؤلم/يُصيب'],['sick / ill','مريض'],['medicine · band aid','دواء · لاصقُ جروح'],['X-ray','أشعّة سينيّة']],
      examples:['I have a <code>headache</code>. I need some <code>medicine</code>. (عندي صُداع، أحتاجُ دواءً.)','He fell and <code>hurt</code> his arm. (وقعَ وأصابَ ذراعَه.)'],
      trick:'كلمةُ <span class="en">-ache</span> تعني وجعًا: <span class="en">head-ache</span> صُداع، <span class="en">tooth-ache</span> ألمُ سنّ، <span class="en">stomach-ache</span> ألمُ معدة.'
    },
    stages:[
      { type:'choice', name:'الكلمة ← المعنى', hint:'اختر المعنى العربيّ', qs:[
        {p:'headache', ask:'المعنى؟', o:['صُداع','سُعال'], a:0, w:'<code>headache</code> = صُداع.', f:'← <u>صُداع</u>'},
        {p:'toothache', ask:'المعنى؟', o:['ألمُ أسنان','ألمُ معدة'], a:0, w:'<code>toothache</code>.', f:'← <u>ألمُ أسنان</u>'},
        {p:'medicine', ask:'المعنى؟', o:['دواء','أشعّة'], a:0, w:'<code>medicine</code> = دواء.', f:'← <u>دواء</u>'},
        {p:'cough', ask:'المعنى؟', o:['سُعال','صُداع'], a:0, w:'<code>cough</code> = سُعال.', f:'← <u>سُعال</u>'},
        {p:'sick', ask:'المعنى؟', o:['مريض','سليم'], a:0, w:'<code>sick</code> = مريض.', f:'← <u>مريض</u>'}
      ]},
      { type:'choice', name:'المعنى ← الكلمة', hint:'اختر الإنجليزية', qs:[
        {p:'ألمُ معدة', ask:'الكلمة؟', o:['stomachache','earache'], a:0, w:'<code>stomachache</code>.', f:'← <u>stomachache</u>'},
        {p:'لاصقُ جروح', ask:'الكلمة؟', o:['band aid','X-ray'], a:0, w:'<code>band aid</code>.', f:'← <u>band aid</u>'},
        {p:'أشعّة سينيّة', ask:'الكلمة؟', o:['X-ray','medicine'], a:0, w:'<code>X-ray</code>.', f:'← <u>X-ray</u>'},
        {p:'يؤلم / يُصيب', ask:'الكلمة؟', o:['hurt','cough'], a:0, w:'<code>hurt</code>.', f:'← <u>hurt</u>'},
        {p:'ألمُ أُذُن', ask:'الكلمة؟', o:['earache','toothache'], a:0, w:'<code>earache</code>.', f:'← <u>earache</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'I ate too much candy. Now I have a ___ .', o:['toothache','headache','cough'], a:0, w:'الحلوى تسبّبُ ألمَ الأسنان ← <code>toothache</code>.', f:'... a <u>toothache</u>.'},
        {p:'You are ___ . You should rest.', o:['sick','strong','happy'], a:0, w:'مريضٌ ← <code>sick</code>.', f:'You are <u>sick</u>.'},
        {p:'The doctor took an ___ of my arm.', o:['X-ray','earache','band aid'], a:0, w:'الأشعّة ← <code>X-ray</code>.', f:'... an <u>X-ray</u> ...'},
        {p:'Take this ___ twice a day.', o:['medicine','cough','headache'], a:0, w:'الدواء ← <code>medicine</code>.', f:'... this <u>medicine</u> ...'}
      ]},
      { type:'error', name:'الكلمة الغريبة', hint:'انقر ما لا ينتمي', qs:[
        {words:['headache','toothache','earache','medicine'], bad:3, fix:'مثال: stomachache', w:'<code>medicine</code> علاجٌ، والبقيّةُ أوجاع.', f:'... · <u>medicine</u> (علاج لا وجع)'},
        {words:['sick','ill','hurt','forest'], bad:3, fix:'مثال: cough', w:'<code>forest</code> مكانٌ، والبقيّةُ صحّةٌ/إصابة.', f:'... · <u>forest</u> (مكان)'},
        {words:['medicine','band aid','X-ray','desert'], bad:3, fix:'مثال: cough', w:'<code>desert</code> مكانٌ، والبقيّةُ علاجٌ/فحص.', f:'... · <u>desert</u> (مكان)'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'headache', ask:'المعنى؟', o:['صُداع','سُعال'], a:0, w:'صُداع.', f:'← <u>صُداع</u>'},
        {p:'دواء', ask:'الكلمة؟', o:['medicine','X-ray'], a:0, w:'medicine.', f:'← <u>medicine</u>'},
        {p:'He is ___ , so he stayed home.', ask:'اختر', o:['sick','strong'], a:0, w:'مريض.', f:'He is <u>sick</u> ...'},
        {p:'stomachache', ask:'المعنى؟', o:['ألمُ معدة','ألمُ أُذُن'], a:0, w:'ألمُ معدة.', f:'← <u>ألمُ معدة</u>'},
        {p:'لاصقُ جروح', ask:'الكلمة؟', o:['band aid','cough'], a:0, w:'band aid.', f:'← <u>band aid</u>'}
      ]}
    ]
  };
})();
