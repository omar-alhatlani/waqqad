/* ============================================================
   Lesson: Vocabulary — Family Members
   English · Super Goal 1 · Unit 5 (Families, Families) · صفحات ٤٠–٤١
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1).
   lang:'en' → المحتوى إنجليزيّ LTR، والشرح بالعربية.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U5_VOCAB'] = {
    id:'EN_SG1_U5_VOCAB',
    title:'Vocabulary — أفراد العائلة',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'Family Members',
      intro:'أفرادُ العائلة: الأب والأمّ، الأخ والأخت، الجدّ والجدّة، العمّ/الخال والعمّة/الخالة، الابن والابنة، وابن العمّ/الخال (<code>cousin</code>).',
      table:[['father · mother','الأب · الأمّ'],['brother · sister','الأخ · الأخت'],['grandfather · grandmother','الجدّ · الجدّة'],['uncle · aunt · cousin','العمّ/الخال · العمّة/الخالة · ابن العمّ']],
      examples:['parents = الوالدان','grandparents = الأجداد','only child = الابن الوحيد','husband · wife = الزوج · الزوجة'],
      trick:'الوالدان = <code>parents</code>، والأجداد = <code>grandparents</code>. و<code>cousin</code> تصلح للذكر والأنثى (ابن/بنت العمّ أو الخال).'
    },
    stages:[
      { type:'choice', name:'مَن هو؟', hint:'اختر الكلمة الإنجليزية', qs:[
        {p:"your father's father →",  ask:'اختر الكلمة', o:['grandfather','uncle','brother','cousin'], a:0, w:'أبو الأب ← <code>grandfather</code>.', f:'grandfather'},
        {p:"your father's mother →",  ask:'اختر الكلمة', o:['grandmother','aunt','sister','mother'], a:0, w:'أمّ الأب ← <code>grandmother</code>.', f:'grandmother'},
        {p:"your father's brother →", ask:'اختر الكلمة', o:['uncle','cousin','grandfather','son'], a:0, w:'أخو الأب ← <code>uncle</code>.', f:'uncle'},
        {p:"your mother's sister →",  ask:'اختر الكلمة', o:['aunt','uncle','grandmother','daughter'], a:0, w:'أخت الأمّ ← <code>aunt</code>.', f:'aunt'},
        {p:"your uncle's son →",      ask:'اختر الكلمة', o:['cousin','brother','nephew','son'], a:0, w:'ابن العمّ/الخال ← <code>cousin</code>.', f:'cousin'},
        {p:"your parents' daughter (not you) →", ask:'اختر الكلمة', o:['sister','aunt','cousin','mother'], a:0, w:'بنت الوالدين ← <code>sister</code>.', f:'sister'}
      ]},
      { type:'choice', name:'الذكر والأنثى', hint:'اختر المقابل', qs:[
        {p:'father →',      ask:'المقابل', o:['mother','sister','aunt','daughter'], a:0, w:'الأب ↔ <code>mother</code>.', f:'mother'},
        {p:'brother →',     ask:'المقابل', o:['sister','mother','aunt','wife'], a:0, w:'الأخ ↔ <code>sister</code>.', f:'sister'},
        {p:'grandfather →', ask:'المقابل', o:['grandmother','mother','aunt','wife'], a:0, w:'الجدّ ↔ <code>grandmother</code>.', f:'grandmother'},
        {p:'uncle →',       ask:'المقابل', o:['aunt','sister','mother','daughter'], a:0, w:'العمّ/الخال ↔ <code>aunt</code>.', f:'aunt'},
        {p:'son →',         ask:'المقابل', o:['daughter','sister','mother','aunt'], a:0, w:'الابن ↔ <code>daughter</code>.', f:'daughter'},
        {p:'husband →',     ask:'المقابل', o:['wife','sister','aunt','mother'], a:0, w:'الزوج ↔ <code>wife</code>.', f:'wife'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'My father and mother are my ___.',            ask:'أكمل', o:['parents','cousins','uncles','sons'], a:0, w:'الوالدان ← <code>parents</code>.', f:'... my <u>parents</u>.'},
        {p:'My grandfather and grandmother are my ___.',   ask:'أكمل', o:['grandparents','parents','uncles','cousins'], a:0, w:'الأجداد ← <code>grandparents</code>.', f:'... my <u>grandparents</u>.'},
        {p:'I have no brothers or sisters. I am an ___ child.', ask:'أكمل', o:['only','one','old','other'], a:0, w:'<code>only child</code> = الوحيد.', f:'an <u>only</u> child.'},
        {p:"My uncle's son is my ___.",                    ask:'أكمل', o:['cousin','brother','nephew','father'], a:0, w:'ابن العمّ/الخال ← <code>cousin</code>.', f:'my <u>cousin</u>.'},
        {p:"Adel is Asma's ___.",                          ask:'أكمل', o:['husband','wife','son','uncle'], a:0, w:'الزوج ← <code>husband</code>.', f:"Asma's <u>husband</u>."},
        {p:"Asma is Adel's ___.",                          ask:'أكمل', o:['wife','husband','sister','aunt'], a:0, w:'الزوجة ← <code>wife</code>.', f:"Adel's <u>wife</u>."}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['This','is','my','father','.'],          w:'تقديمٌ.', f:'This is my father.'},
        {sol:['I','have','two','sisters','.'],          w:'عددُ الأخوات.', f:'I have two sisters.'},
        {sol:['She','is','my','cousin','.'],            w:'صلةُ القرابة.', f:'She is my cousin.'},
        {sol:['They','are','my','grandparents','.'],    w:'الأجداد.', f:'They are my grandparents.'},
        {sol:['He','is','an','only','child','.'],        w:'الوحيد.', f:'He is an only child.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:"your father's father →", ask:'اختر الكلمة', o:['grandfather','uncle'], a:0, w:'أبو الأب ← <code>grandfather</code>.', f:'grandfather'},
        {p:'brother →', ask:'المقابل', o:['sister','mother','aunt','wife'], a:0, w:'الأخ ↔ <code>sister</code>.', f:'sister'},
        {p:'My father and mother are my ___.', ask:'أكمل', o:['parents','cousins','uncles','sons'], a:0, w:'الوالدان ← <code>parents</code>.', f:'my <u>parents</u>.'},
        {p:"your uncle's son →", ask:'اختر الكلمة', o:['cousin','brother'], a:0, w:'ابن العمّ ← <code>cousin</code>.', f:'cousin'},
        {p:'son →', ask:'المقابل', o:['daughter','sister','mother','aunt'], a:0, w:'الابن ↔ <code>daughter</code>.', f:'daughter'},
        {sol:['This','is','my','father','.'], w:'تقديمٌ.', f:'This is my father.'},
        {p:'I have no brothers or sisters. I am an ___ child.', ask:'أكمل', o:['only','one','old','other'], a:0, w:'<code>only child</code>.', f:'an <u>only</u> child.'},
        {p:'grandfather →', ask:'المقابل', o:['grandmother','mother','aunt','wife'], a:0, w:'الجدّ ↔ <code>grandmother</code>.', f:'grandmother'},
        {sol:['They','are','my','grandparents','.'], w:'الأجداد.', f:'They are my grandparents.'}
      ]}
    ]
  };
})();
