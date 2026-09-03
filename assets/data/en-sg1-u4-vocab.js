/* ============================================================
   Lesson: Vocabulary — Countries, Nationalities & Capitals
   English · Super Goal 1 · Unit 4 (Around the World) · صفحة ٢٦
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1).
   lang:'en' → المحتوى إنجليزيّ LTR، والشرح بالعربية.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U4_VOCAB'] = {
    id:'EN_SG1_U4_VOCAB',
    title:'Vocabulary — الدول والجنسيات والعواصم',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'Countries & Nationalities',
      intro:'لكلّ دولةٍ <b>جنسيّةٌ</b> وعاصمة. الجنسيّة صفةٌ تُشتقّ من اسم الدولة (Egypt → Egyptian).',
      table:[['Saudi Arabia','Saudi · Riyadh'],['Egypt','Egyptian · Cairo'],['England','English · London'],['China','Chinese · Beijing']],
      examples:['Egypt → Egyptian (Cairo)','Saudi Arabia → Saudi (Riyadh)','China → Chinese (Beijing)','France → French (Paris)'],
      trick:'الجنسيّات كثيرًا ما تنتهي بـ <code>-ian</code> (Egyptian, Canadian) أو <code>-ish</code> (Spanish, English) أو <code>-ese</code> (Chinese).'
    },
    stages:[
      { type:'choice', name:'الجنسية', hint:'ما جنسيّة أهل هذه الدولة؟', qs:[
        {p:'Egypt →',        ask:'الجنسيّة', o:['Egyptian','Egypto','Egypter','Egyptish'], a:0, w:'<code>Egypt → Egyptian</code>.', f:'Egyptian'},
        {p:'Saudi Arabia →', ask:'الجنسيّة', o:['Saudi','Saudian','Arabish','Saudese'], a:0, w:'<code>Saudi Arabia → Saudi</code>.', f:'Saudi'},
        {p:'China →',        ask:'الجنسيّة', o:['Chinese','Chinian','Chinish','Chinan'], a:0, w:'<code>China → Chinese</code>.', f:'Chinese'},
        {p:'France →',       ask:'الجنسيّة', o:['French','Francian','Franceese','Francish'], a:0, w:'<code>France → French</code>.', f:'French'},
        {p:'Spain →',        ask:'الجنسيّة', o:['Spanish','Spainian','Spainese','Spainer'], a:0, w:'<code>Spain → Spanish</code>.', f:'Spanish'},
        {p:'England →',      ask:'الجنسيّة', o:['English','Englandian','Englandish','Britese'], a:0, w:'<code>England → English</code>.', f:'English'}
      ]},
      { type:'choice', name:'العاصمة', hint:'ما عاصمة هذه الدولة؟', qs:[
        {p:'Saudi Arabia →', ask:'العاصمة', o:['Riyadh','Jeddah','Cairo','Muscat'], a:0, w:'عاصمة السعودية <code>Riyadh</code>.', f:'Riyadh'},
        {p:'Egypt →',        ask:'العاصمة', o:['Cairo','Riyadh','Amman','Beijing'], a:0, w:'عاصمة مصر <code>Cairo</code>.', f:'Cairo'},
        {p:'France →',       ask:'العاصمة', o:['Paris','London','Madrid','Rome'], a:0, w:'عاصمة فرنسا <code>Paris</code>.', f:'Paris'},
        {p:'China →',        ask:'العاصمة', o:['Beijing','Tokyo','Seoul','Moscow'], a:0, w:'عاصمة الصين <code>Beijing</code>.', f:'Beijing'},
        {p:'England →',      ask:'العاصمة', o:['London','Paris','Dublin','Madrid'], a:0, w:'عاصمة إنجلترا <code>London</code>.', f:'London'},
        {p:'Oman →',         ask:'العاصمة', o:['Muscat','Riyadh','Amman','Doha'], a:0, w:'عاصمة عُمان <code>Muscat</code>.', f:'Muscat'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'الجنسية أو العاصمة', qs:[
        {p:'He is from Egypt. He is ___.',            ask:'الجنسيّة', o:['Egyptian','Egypt','Cairo','Egyptish'], a:0, w:'<code>from Egypt → Egyptian</code>.', f:'He is <u>Egyptian</u>.'},
        {p:'She is from China. She is ___.',           ask:'الجنسيّة', o:['Chinese','China','Beijing','Chinian'], a:0, w:'<code>from China → Chinese</code>.', f:'She is <u>Chinese</u>.'},
        {p:'The capital of Saudi Arabia is ___.',      ask:'العاصمة', o:['Riyadh','Jeddah','Mecca','Cairo'], a:0, w:'<code>Riyadh</code>.', f:'... is <u>Riyadh</u>.'},
        {p:'They are from Spain. They are ___.',        ask:'الجنسيّة', o:['Spanish','Spain','Madrid','Spainish'], a:0, w:'<code>from Spain → Spanish</code>.', f:'They are <u>Spanish</u>.'},
        {p:'I am from Saudi Arabia. I am ___.',         ask:'الجنسيّة', o:['Saudi','Saudian','Riyadh','Arab'], a:0, w:'<code>Saudi Arabia → Saudi</code>.', f:'I am <u>Saudi</u>.'},
        {p:'The capital of France is ___.',             ask:'العاصمة', o:['Paris','London','Rome','Madrid'], a:0, w:'<code>Paris</code>.', f:'... is <u>Paris</u>.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['He','is','from','Egypt','.'],          w:'الأصل بـ <code>from</code>.', f:'He is from Egypt.'},
        {sol:['She','is','Chinese','.'],               w:'الجنسيّة.', f:'She is Chinese.'},
        {sol:['The','capital','is','Riyadh','.'],      w:'العاصمة.', f:'The capital is Riyadh.'},
        {sol:['Where','are','you','from','?'],         w:'سؤالٌ عن الأصل.', f:'Where are you from?'},
        {sol:["What's",'your','nationality','?'],      w:'سؤالٌ عن الجنسيّة.', f:"What's your nationality?"}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'Egypt →', ask:'الجنسيّة', o:['Egyptian','Egyptish'], a:0, w:'<code>Egypt → Egyptian</code>.', f:'Egyptian'},
        {p:'Saudi Arabia →', ask:'العاصمة', o:['Riyadh','Jeddah'], a:0, w:'<code>Riyadh</code>.', f:'Riyadh'},
        {p:'She is from China. She is ___.', ask:'الجنسيّة', o:['Chinese','China','Beijing','Chinian'], a:0, w:'<code>from China → Chinese</code>.', f:'She is <u>Chinese</u>.'},
        {p:'France →', ask:'العاصمة', o:['Paris','London'], a:0, w:'<code>Paris</code>.', f:'Paris'},
        {p:'England →', ask:'الجنسيّة', o:['English','Englandish'], a:0, w:'<code>England → English</code>.', f:'English'},
        {sol:['He','is','from','Egypt','.'], w:'الأصل بـ <code>from</code>.', f:'He is from Egypt.'},
        {p:'I am from Saudi Arabia. I am ___.', ask:'الجنسيّة', o:['Saudi','Saudian','Riyadh','Arab'], a:0, w:'<code>Saudi Arabia → Saudi</code>.', f:'I am <u>Saudi</u>.'},
        {p:'China →', ask:'العاصمة', o:['Beijing','Tokyo'], a:0, w:'<code>Beijing</code>.', f:'Beijing'},
        {sol:['She','is','Chinese','.'], w:'الجنسيّة.', f:'She is Chinese.'}
      ]}
    ]
  };
})();
