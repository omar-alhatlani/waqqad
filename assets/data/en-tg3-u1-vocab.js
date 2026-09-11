/* ============================================================
   درس: Vocabulary — Living Things (مفردات الكائنات الحية)
   الإنجليزية · السادس الابتدائي · ف١ · Top Goal 3 · Unit 1 (Living Things)
   مفرداتُ الوحدة (حقائقُ معجميّة)، والجملُ التوضيحيّة مؤلَّفةٌ أصالةً.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG3_U1_VOCAB'] = {
    id:'EN_TG3_U1_VOCAB',
    title:'Vocabulary — Living Things',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'كلماتُ وحدة الكائنات الحية',
      intro:'مفرداتٌ أساسيّةٌ عن <b>الكائنات الحية</b>: حشراتٌ وحيواناتٌ وأماكنُ عيشها. أتقِنْ معناها لتفهمَ نصوصَ الوحدة وتتحدّثَ عنها.',
      table:[['insect · beetle · butterfly','حشرة · خُنفساء · فراشة'],['creature · wild · extinct','مخلوق · برّيّ · مُنقرِض'],['camel · eagle · octopus · swan','جَمَل · نسر · أخطبوط · بَجَعة'],['desert · pond · nest','صحراء · بِركة · عُشّ']],
      examples:['A <code>butterfly</code> has beautiful <code>wings</code>. (فراشةٌ لها جناحان.)','The <code>camel</code> lives in the <code>desert</code>. (الجملُ يعيشُ في الصحراء.)'],
      trick:'اربطِ الكلمةَ بصورتها في ذهنك: <span class="en">nest</span> عُشُّ الطائر، و<span class="en">pond</span> بِركةُ الماء، و<span class="en">extinct</span> ما انقرضَ كالديناصور.'
    },
    stages:[
      { type:'choice', name:'الكلمة ← المعنى', hint:'اختر المعنى العربيّ الصحيح', qs:[
        {p:'insect', ask:'المعنى؟', o:['حشرة','طائر'], a:0, w:'<code>insect</code> = حشرة.', f:'insect ← <u>حشرة</u>'},
        {p:'butterfly', ask:'المعنى؟', o:['فراشة','خُنفساء'], a:0, w:'<code>butterfly</code> = فراشة.', f:'butterfly ← <u>فراشة</u>'},
        {p:'eagle', ask:'المعنى؟', o:['نسر','بَجَعة'], a:0, w:'<code>eagle</code> = نسر.', f:'eagle ← <u>نسر</u>'},
        {p:'desert', ask:'المعنى؟', o:['صحراء','بِركة'], a:0, w:'<code>desert</code> = صحراء.', f:'desert ← <u>صحراء</u>'},
        {p:'extinct', ask:'المعنى؟', o:['مُنقرِض','برّيّ'], a:0, w:'<code>extinct</code> = مُنقرِض.', f:'extinct ← <u>مُنقرِض</u>'}
      ]},
      { type:'choice', name:'المعنى ← الكلمة', hint:'اختر الكلمة الإنجليزية الصحيحة', qs:[
        {p:'جَمَل', ask:'الكلمة؟', o:['camel','octopus'], a:0, w:'جَمَل = <code>camel</code>.', f:'جَمَل ← <u>camel</u>'},
        {p:'عُشّ', ask:'الكلمة؟', o:['nest','pond'], a:0, w:'عُشّ = <code>nest</code>.', f:'عُشّ ← <u>nest</u>'},
        {p:'أخطبوط', ask:'الكلمة؟', o:['octopus','tortoise'], a:0, w:'أخطبوط = <code>octopus</code>.', f:'أخطبوط ← <u>octopus</u>'},
        {p:'جناح', ask:'الكلمة؟', o:['wing','fur'], a:0, w:'جناح = <code>wing</code>.', f:'جناح ← <u>wing</u>'},
        {p:'برّيّ', ask:'الكلمة؟', o:['wild','quiet'], a:0, w:'برّيّ = <code>wild</code>.', f:'برّيّ ← <u>wild</u>'}
      ]},
      { type:'choice', name:'حشرةٌ أم حيوان؟', hint:'صنّف الكائن', qs:[
        {p:'A beetle is ...', ask:'اختر', o:['an insect','an animal with fur'], a:0, w:'<code>beetle</code> (خُنفساء) حشرةٌ.', f:'beetle ← <u>an insect</u>'},
        {p:'A butterfly is ...', ask:'اختر', o:['an insect','a bird'], a:0, w:'<code>butterfly</code> حشرةٌ لها جناحان.', f:'butterfly ← <u>an insect</u>'},
        {p:'A camel is ...', ask:'اختر', o:['an animal','an insect'], a:0, w:'<code>camel</code> حيوانٌ لا حشرة.', f:'camel ← <u>an animal</u>'},
        {p:'A dinosaur today is ...', ask:'اختر', o:['extinct','wild'], a:0, w:'الديناصورُ <code>extinct</code> (منقرِض).', f:'dinosaur ← <u>extinct</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'The camel lives in the ___ .', o:['desert','ocean','nest'], a:0, w:'الجملُ في الصحراء ← <code>desert</code>.', f:'... in the <u>desert</u>.'},
        {p:'A bird builds a ___ for its eggs.', o:['nest','pond','wing'], a:0, w:'الطائرُ يبني عُشًّا ← <code>nest</code>.', f:'... builds a <u>nest</u> ...'},
        {p:'A butterfly has two beautiful ___ .', o:['wings','furs','ponds'], a:0, w:'الفراشةُ لها جناحان ← <code>wings</code>.', f:'... two beautiful <u>wings</u>.'},
        {p:'The dinosaur is ___ ; we only see it in books.', o:['extinct','wild','quiet'], a:0, w:'الديناصورُ منقرِض ← <code>extinct</code>.', f:'... is <u>extinct</u> ...'}
      ]},
      { type:'error', name:'الكلمة الغريبة', hint:'انقر الكلمة التي لا تنتمي للمجموعة', qs:[
        {words:['insect','beetle','butterfly','camel'], bad:3, fix:'مثال: fly', w:'<code>camel</code> حيوانٌ، والبقيّةُ حشرات.', f:'insect · beetle · butterfly · <u>camel</u> (ليست حشرة)'},
        {words:['desert','pond','ocean','eagle'], bad:3, fix:'مثال: forest', w:'<code>eagle</code> كائنٌ حيّ، والبقيّةُ أماكن.', f:'desert · pond · ocean · <u>eagle</u> (ليست مكانًا)'},
        {words:['wing','fur','tail','wild'], bad:3, fix:'مثال: leg', w:'<code>wild</code> صفةٌ، والبقيّةُ أجزاءٌ من الجسم.', f:'wing · fur · tail · <u>wild</u> (صفة لا عضو)'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'nest', ask:'المعنى؟', o:['عُشّ','بِركة'], a:0, w:'<code>nest</code> = عُشّ.', f:'nest ← <u>عُشّ</u>'},
        {p:'صحراء', ask:'الكلمة؟', o:['desert','pond'], a:0, w:'صحراء = <code>desert</code>.', f:'صحراء ← <u>desert</u>'},
        {p:'A beetle is ...', ask:'اختر', o:['an insect','an animal'], a:0, w:'<code>beetle</code> حشرة.', f:'beetle ← <u>an insect</u>'},
        {p:'The camel lives in the ___ .', ask:'اختر', o:['desert','ocean'], a:0, w:'الصحراء.', f:'... the <u>desert</u>.'},
        {p:'extinct', ask:'المعنى؟', o:['مُنقرِض','برّيّ'], a:0, w:'<code>extinct</code> = منقرِض.', f:'extinct ← <u>مُنقرِض</u>'},
        {p:'جناح', ask:'الكلمة؟', o:['wing','fur'], a:0, w:'جناح = <code>wing</code>.', f:'جناح ← <u>wing</u>'},
        {p:'A bird builds a ___ .', ask:'اختر', o:['nest','wing'], a:0, w:'عُشّ ← <code>nest</code>.', f:'... a <u>nest</u>.'}
      ]}
    ]
  };
})();
