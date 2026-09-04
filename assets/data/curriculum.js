/* ============================================================
   بيانات المنهج — وقّاد
   الصفوف ← الفصول ← المواد ← الوحدات ← الدروس
   لإضافة درسٍ حقيقيّ: أنشئ ملفًّا يسجّل الدرس في window.LESSONS['REF']،
   ثم أشِر إليه هنا عبر الحقل ref في الدرس. الدروس بلا ref تظهر «قريبًا».
   ============================================================ */
window.CURRICULUM = {
  grades:[
    {id:'g1', name:'الأول متوسط',  num:'١', desc:'الصف الأول من المرحلة المتوسطة'},
    {id:'g2', name:'الثاني متوسط', num:'٢', desc:'الصف الثاني من المرحلة المتوسطة'},
    {id:'g3', name:'الثالث متوسط', num:'٣', desc:'الصف الثالث من المرحلة المتوسطة'}
  ],
  semesters:[
    {id:'s1', name:'الفصل الدراسي الأول', desc:'الوحدات من بداية العام حتى منتصفه'},
    {id:'s2', name:'الفصل الدراسي الثاني', desc:'وحدات النصف الثاني من العام'}
  ],
  subjects:[
    {id:'ar',   name:'اللغة العربية',   en:'لغتي الخالدة', icon:'ar',   c:'--s-ar',   cd:'--s-ar-deep',   cs:'--s-ar-soft',   units:3},
    {id:'math', name:'الرياضيات',       en:'Mathematics',  icon:'math', c:'--s-math', cd:'--s-math-deep', cs:'--s-math-soft', units:4},
    {id:'sci',  name:'العلوم',          en:'Science',      icon:'sci',  c:'--s-sci',  cd:'--s-sci-deep',  cs:'--s-sci-soft',  units:6},
    {id:'en',   name:'اللغة الإنجليزية', en:'Super Goal 1', icon:'en',   c:'--s-en',   cd:'--s-en-deep',   cs:'--s-en-soft',   units:8}
  ],

  /* فهرس المحتوى: المفتاح = "grade.sem.subject" */
  content:{
    'g1.s1.en':{ eyebrow:'English · Super Goal 1', units:[
      { t:'Good Morning!', s:'التحية والتعارف', lessons:[
        { t:'Grammar — الفعل be (am/is/are)', tag:'قواعد', ref:'EN_SG1_U1_VERBBE' },
        { t:'Grammar — صفات الملكية (my/your/his/her)', tag:'قواعد', ref:'EN_SG1_U1_POSS' },
        { t:'Vocabulary — Greetings & Introductions', tag:'مفردات', ref:'EN_SG1_U1_GREET' },
        { t:'Reading — A New Student', tag:'قراءة', ref:'EN_SG1_U1_READ' }
      ]},
      { t:'What Day Is Today?', s:'الأيام والأعداد والوقت', lessons:[
        { t:'Grammar — صفات الملكية للجمع (our/your/their)', tag:'قواعد', ref:'EN_SG1_U2_POSS2' },
        { t:'Grammar — أدوات السؤال What/When/How old', tag:'قواعد', ref:'EN_SG1_U2_QW' },
        { t:'Vocabulary — الأيّام والأشهر والأعداد', tag:'مفردات', ref:'EN_SG1_U2_VOCAB' },
        { t:'Reading — How Old Are They?', tag:'قراءة', ref:'EN_SG1_U2_READ' }
      ]},
      { t:"What's That?", s:'الأشياء وأدوات المدرسة', lessons:[
        { t:'Grammar — أسماء الإشارة (this/that/these/those)', tag:'قواعد', ref:'EN_SG1_U3_DEMO' },
        { t:'Grammar — الأوامر (Imperatives)', tag:'قواعد', ref:'EN_SG1_U3_IMPER' },
        { t:'Vocabulary — أشياء المتحف و a/an', tag:'مفردات', ref:'EN_SG1_U3_VOCAB' },
        { t:'Reading — Museum of Science', tag:'قراءة', ref:'EN_SG1_U3_READ' }
      ]},
      { t:'Around the World', s:'الدول والجنسيات', lessons:[
        { t:'Grammar — be: النفي والسؤال + Where', tag:'قواعد', ref:'EN_SG1_U4_BE' },
        { t:'Grammar — الطلبات والعروض (Can/Will)', tag:'قواعد', ref:'EN_SG1_U4_CANWILL' },
        { t:'Vocabulary — الدول والجنسيات والعواصم', tag:'مفردات', ref:'EN_SG1_U4_VOCAB' },
        { t:'Reading — Lapland: The Midnight Sun', tag:'قراءة', ref:'EN_SG1_U4_READ' }
      ]},
      { t:'Families, Families', s:'العائلة وأفرادها', lessons:[
        { t:'Grammar — الفعل have والكمّية', tag:'قواعد', ref:'EN_SG1_U5_HAVE' },
        { t:"Grammar — الجمع والملكية 's", tag:'قواعد', ref:'EN_SG1_U5_PLURAL' },
        { t:'Vocabulary — أفراد العائلة', tag:'مفردات', ref:'EN_SG1_U5_VOCAB' },
        { t:'Reading — Family Values and Society', tag:'قراءة', ref:'EN_SG1_U5_READ' }
      ]},
      { t:'Is There a View?', s:'البيت والغرف', lessons:[
        { t:'Grammar — There is / There are', tag:'قواعد', ref:'EN_SG1_U6_THERE' },
        { t:'Grammar — حروف المكان و and/but/or', tag:'قواعد', ref:'EN_SG1_U6_PREP' },
        { t:'Vocabulary — غرف البيت والأثاث', tag:'مفردات', ref:'EN_SG1_U6_VOCAB' },
        { t:'Reading — Unusual Houses', tag:'قراءة', ref:'EN_SG1_U6_READ' }
      ]},
      { t:'Where Do You Live?', s:'المدينة والاتجاهات', lessons:[
        { t:'Grammar — حروف المكان و live', tag:'قواعد', ref:'EN_SG1_U7_PLACE' },
        { t:'Grammar — المقارنة والتفضيل', tag:'قواعد', ref:'EN_SG1_U7_COMPARE' },
        { t:'Vocabulary — أماكن المدينة والاتجاهات', tag:'مفردات', ref:'EN_SG1_U7_VOCAB' },
        { t:'Reading — Famous Neighborhoods', tag:'قراءة', ref:'EN_SG1_U7_READ' }
      ]},
      { t:'What Are You Doing?', s:'المضارع المستمر', lessons:[
        { t:'Grammar — المضارع المستمر (Present Progressive)', tag:'قواعد', ref:'EN_SG1_U8_PRESPROG' },
        { t:'Grammar — الرغبة المؤدَّبة (would like)', tag:'قواعد', ref:'EN_SG1_U8_WOULDLIKE' },
        { t:'Vocabulary — الأنشطة (verb + -ing)', tag:'مفردات', ref:'EN_SG1_U8_VOCAB' },
        { t:"Reading — Teenagers' Favorite Place", tag:'قراءة', ref:'EN_SG1_U8_READ' }
      ]}
    ]},
    'g1.s1.ar':{ eyebrow:'لغتي الخالدة · الأول متوسط', units:[
      { t:'القيم الإسلامية', s:'الدروس اللغوية للوحدة', lessons:[
        { t:'الصنف اللغوي — المذكّر والمؤنّث', tag:'صنف لغوي', ref:'AR_LUGHATI_U1_MUDHAKKAR' },
        { t:'الأسلوب اللغوي — الأمر', tag:'أسلوب', ref:'AR_LUGHATI_U1_AMR' },
        { t:'الرسم الإملائي — رسم همزة الوصل', tag:'إملاء', ref:'AR_LUGHATI_U1_HAMZA' },
        { t:'الوظيفة النحوية — المبتدأ والخبر', tag:'نحو', ref:'AR_LUGHATI_U1_MUBTADA' }
      ]},
      { t:'الأعلام', s:'الدروس اللغوية للوحدة الثانية', lessons:[
        { t:'الصنف اللغوي — المفرد والمثنى', tag:'صنف لغوي', ref:'AR_LUGHATI_U2_MUFRAD' },
        { t:'الوظيفة النحوية — الأفعال الناسخة (كان وأخواتها)', tag:'نحو', ref:'AR_LUGHATI_U2_NASIKHA' },
        { t:'الأسلوب اللغوي — الاستفهام', tag:'أسلوب', ref:'AR_LUGHATI_U2_ISTIFHAM' },
        { t:'الرسم الإملائي — همزة القطع', tag:'إملاء', ref:'AR_LUGHATI_U2_QAT' }
      ]},
      { t:'الوطن', s:'الدروس اللغوية للوحدة الثالثة', lessons:[
        { t:'الصنف اللغوي — الجمع', tag:'صنف لغوي', ref:'AR_LUGHATI_U3_JAM' },
        { t:'الوظيفة النحوية — الحروف الناسخة (إنّ وأخواتها)', tag:'نحو', ref:'AR_LUGHATI_U3_INNA' },
        { t:'الأسلوب اللغوي — النداء', tag:'أسلوب', ref:'AR_LUGHATI_U3_NIDA' },
        { t:'الرسم الإملائي — التاء المفتوحة والمربوطة', tag:'إملاء', ref:'AR_LUGHATI_U3_TAA' }
      ]}
    ]},
    'g1.s1.math':{ eyebrow:'رياضيات · الأول متوسط', units:[
      { t:'الجبر والدوال', s:'الفصل الأول · ٨ دروس', lessons:[
        { t:'الخطوات الأربع لحل المسألة', tag:'مهارة', ref:'MATH_G1_U1_STEPS' },
        { t:'القوى والأسس', tag:'أعداد', ref:'MATH_G1_U1_POWERS' },
        { t:'ترتيب العمليات', tag:'عمليات', ref:'MATH_G1_U1_ORDER' },
        { t:'استراتيجية: التخمين والتحقق', tag:'مهارة', ref:'MATH_G1_U1_GUESS' },
        { t:'المتغيرات والعبارات الجبرية', tag:'جبر', ref:'MATH_G1_U1_VARS' },
        { t:'المعادلات', tag:'جبر', ref:'MATH_G1_U1_EQ' },
        { t:'الخصائص', tag:'جبر', ref:'MATH_G1_U1_PROPS' },
        { t:'المعادلات والدوال', tag:'جبر', ref:'MATH_G1_U1_FUNC' }
      ]},
      { t:'الأعداد الصحيحة', s:'القيمة المطلقة والعمليات', lessons:[
        { t:'الأعداد الصحيحة والقيمة المطلقة', tag:'أعداد', ref:'MATH_G1_U2_INTABS' },
        { t:'مقارنة الأعداد الصحيحة وترتيبها', tag:'أعداد', ref:'MATH_G1_U2_COMPARE' },
        { t:'المستوى الإحداثي', tag:'هندسة', ref:'MATH_G1_U2_COORD' },
        { t:'جمع الأعداد الصحيحة', tag:'عمليات', ref:'MATH_G1_U2_ADD' },
        { t:'طرح الأعداد الصحيحة', tag:'عمليات', ref:'MATH_G1_U2_SUB' },
        { t:'ضرب الأعداد الصحيحة', tag:'عمليات', ref:'MATH_G1_U2_MUL' },
        { t:'استراتيجية: البحث عن نمط', tag:'مهارة', ref:'MATH_G1_U2_PATTERN' },
        { t:'قسمة الأعداد الصحيحة', tag:'عمليات', ref:'MATH_G1_U2_DIV' }
      ]},
      { t:'المعادلات الخطية والدوال', s:'الفصل الثالث', lessons:[
        { t:'كتابة العبارات الجبرية والمعادلات', tag:'جبر', ref:'MATH_G1_U3_WRITE' },
        { t:'معادلات الجمع والطرح', tag:'جبر', ref:'MATH_G1_U3_ADDSUB' },
        { t:'معادلات الضرب', tag:'جبر', ref:'MATH_G1_U3_MUL' },
        { t:'استراتيجية: الحلّ عكسيًّا', tag:'مهارة', ref:'MATH_G1_U3_BACKWARD' },
        { t:'المعادلات ذات الخطوتين', tag:'جبر', ref:'MATH_G1_U3_TWOSTEP' },
        { t:'القياس: المحيط والمساحة', tag:'هندسة', ref:'MATH_G1_U3_PERIM' },
        { t:'التمثيل البياني للدوال', tag:'دوال', ref:'MATH_G1_U3_GRAPH' }
      ]},
      { t:'النسبة والتناسب', s:'الفصل الرابع', lessons:[
        { t:'النسبة', tag:'نسبة', ref:'MATH_G1_U4_RATIO' },
        { t:'المعدَّل', tag:'نسبة', ref:'MATH_G1_U4_RATE' },
        { t:'التحويل بين الوحدات الإنجليزية', tag:'قياس', ref:'MATH_G1_U4_ENGUNITS' },
        { t:'التحويل بين الوحدات المترية', tag:'قياس', ref:'MATH_G1_U4_METRIC' },
        { t:'حل التناسبات', tag:'تناسب', ref:'MATH_G1_U4_PROP' },
        { t:'استراتيجية: الرسم', tag:'مهارة', ref:'MATH_G1_U4_DRAW' },
        { t:'مقياس الرسم', tag:'تناسب', ref:'MATH_G1_U4_SCALE' }
      ]}
    ]},
    'g1.s1.sci':{ eyebrow:'علوم · الأول متوسط', units:[
      { t:'طبيعة العلم', s:'الوحدة الأولى · الفصل الأول', lessons:[
        { t:'العلم وعملياته', tag:'مفاهيم', ref:'SCI_G1_U1_SCIENCE' },
        { t:'النماذج العلمية', tag:'مفاهيم', ref:'SCI_G1_U1_MODELS' },
        { t:'تقويم التفسيرات العلمية', tag:'مفاهيم', ref:'SCI_G1_U1_EVAL' }
      ]},
      { t:'الحركة والقوى والآلات البسيطة', s:'الوحدة الأولى · الفصل الثاني', lessons:[
        { t:'الحركة', tag:'مفاهيم', ref:'SCI_G1_U2_MOTION' },
        { t:'قوانين نيوتن للحركة', tag:'مفاهيم', ref:'SCI_G1_U2_NEWTON' },
        { t:'الشغل والآلات البسيطة', tag:'مفاهيم', ref:'SCI_G1_U2_MACHINES' }
      ]},
      { t:'المادة وتغيّراتها', s:'الوحدة الثانية · الفصل الثالث', lessons:[
        { t:'الخواص والتغيّرات الفيزيائية', tag:'مفاهيم', ref:'SCI_G1_U3_PHYSICAL' },
        { t:'الخواص والتغيّرات الكيميائية', tag:'مفاهيم', ref:'SCI_G1_U3_CHEMICAL' }
      ]},
      { t:'الذرات والعناصر والجدول الدوري', s:'الوحدة الثانية · الفصل الرابع', lessons:[
        { t:'تركيب المادة', tag:'مفاهيم', ref:'SCI_G1_U4_ATOM' },
        { t:'العناصر والمركبات والمخاليط', tag:'مفاهيم', ref:'SCI_G1_U4_ELEMENTS' }
      ]},
      { t:'الصخور والمعادن', s:'الوحدة الثالثة · الفصل الخامس', lessons:[
        { t:'المعادن: جواهر الأرض', tag:'مفاهيم', ref:'SCI_G1_U5_MINERALS' },
        { t:'أنواع الصخور', tag:'مفاهيم', ref:'SCI_G1_U5_ROCKS' }
      ]},
      { t:'القوى المشكِّلة للأرض', s:'الوحدة الثالثة · الفصل السادس', lessons:[
        { t:'صفائح الأرض المتحركة', tag:'مفاهيم', ref:'SCI_G1_U6_PLATES' },
        { t:'التجوية والتعرية وأثرهما', tag:'مفاهيم', ref:'SCI_G1_U6_EROSION' }
      ]}
    ]},
    'g2.s1.ar':{ eyebrow:'لغتي الخالدة · الثاني متوسط', units:[
      { t:'التقنيات', s:'الدروس اللغوية للوحدة الأولى', lessons:[
        { t:'الصنف اللغوي — الظرف', tag:'صنف لغوي', ref:'AR_LUGHATI_G2_U1_THARF' },
        { t:'الوظيفة النحوية — الفاعل', tag:'نحو', ref:'AR_LUGHATI_G2_U1_FAIL' },
        { t:'الأسلوب اللغوي — الجملة الخبرية المنفية (الاسمية)', tag:'أسلوب', ref:'AR_LUGHATI_G2_U1_NAFI' },
        { t:'الرسم الإملائي — الهمزة المتوسطة على الياء', tag:'إملاء', ref:'AR_LUGHATI_G2_U1_HAMZA' }
      ]},
      { t:'نوادر وقيم', s:'الدروس اللغوية للوحدة الثانية', lessons:[
        { t:'الصنف اللغوي — الأسماء الخمسة', tag:'صنف لغوي', ref:'AR_LUGHATI_G2_U2_ASMAA' },
        { t:'الوظيفة النحوية — نائب الفاعل', tag:'نحو', ref:'AR_LUGHATI_G2_U2_NAIB' },
        { t:'الأسلوب اللغوي — الجملة الخبرية المنفية (الفعلية)', tag:'أسلوب', ref:'AR_LUGHATI_G2_U2_NAFI' },
        { t:'الرسم الإملائي — تنوين النصب', tag:'إملاء', ref:'AR_LUGHATI_G2_U2_TANWIN' }
      ]},
      { t:'أعلام سابقون', s:'الدروس اللغوية للوحدة الثالثة', lessons:[
        { t:'الصنف اللغوي — الفعل الصحيح والمعتل', tag:'صنف لغوي', ref:'AR_LUGHATI_G2_U3_FIL' },
        { t:'الوظيفة النحوية — المفعول به', tag:'نحو', ref:'AR_LUGHATI_G2_U3_MAFOOL' },
        { t:'الأسلوب اللغوي — التوكيد', tag:'أسلوب', ref:'AR_LUGHATI_G2_U3_TAWKID' },
        { t:'الرسم الإملائي — الهمزة المتطرفة', tag:'إملاء', ref:'AR_LUGHATI_G2_U3_HAMZA' }
      ]}
    ]},
    'g2.s1.math':{ eyebrow:'رياضيات · الثاني متوسط', units:[
      { t:'الأعداد النسبية', s:'الفصل الأول', lessons:[
        { t:'الأعداد النسبية', tag:'أعداد', ref:'MATH_G2_U1_RATIONAL' },
        { t:'مقارنة الأعداد النسبية وترتيبها', tag:'أعداد', ref:'MATH_G2_U1_COMPARE' },
        { t:'ضرب الأعداد النسبية', tag:'عمليات', ref:'MATH_G2_U1_MULTIPLY' },
        { t:'قسمة الأعداد النسبية', tag:'عمليات', ref:'MATH_G2_U1_DIVIDE' },
        { t:'جمع وطرح المقامات المتشابهة', tag:'عمليات', ref:'MATH_G2_U1_ADDSAME' },
        { t:'جمع وطرح المقامات المختلفة', tag:'عمليات', ref:'MATH_G2_U1_ADDDIFF' },
        { t:'استراتيجية: البحث عن نمط', tag:'مهارة', ref:'MATH_G2_U1_PATTERN' },
        { t:'القوى والأسس', tag:'أعداد', ref:'MATH_G2_U1_POWERS' },
        { t:'الصيغة العلمية', tag:'أعداد', ref:'MATH_G2_U1_SCIENTIFIC' }
      ]},
      { t:'الأعداد الحقيقية ونظرية فيثاغورس', s:'الفصل الثاني', lessons:[
        { t:'الجذور التربيعية', tag:'أعداد', ref:'MATH_G2_U2_SQRT' },
        { t:'تقدير الجذور التربيعية', tag:'أعداد', ref:'MATH_G2_U2_ESTIMATE' },
        { t:'استعمال أشكال ڤن', tag:'مهارة', ref:'MATH_G2_U2_VENN' },
        { t:'الأعداد الحقيقية', tag:'أعداد', ref:'MATH_G2_U2_REAL' },
        { t:'نظرية فيثاغورس', tag:'هندسة', ref:'MATH_G2_U2_PYTHAGORAS' },
        { t:'تطبيقات على نظرية فيثاغورس', tag:'هندسة', ref:'MATH_G2_U2_PYTHAPP' },
        { t:'هندسة: الأبعاد في المستوى الإحداثي', tag:'هندسة', ref:'MATH_G2_U2_DISTANCE' }
      ]},
      { t:'التناسب والتشابه', s:'الفصل الثالث', lessons:[
        { t:'المعدلات', tag:'تناسب', ref:'MATH_G2_U3_RATE' },
        { t:'المعدل الثابت للتغيّر', tag:'تناسب', ref:'MATH_G2_U3_CHANGE' },
        { t:'العلاقات المتناسبة', tag:'تناسب', ref:'MATH_G2_U3_PROP' },
        { t:'حل التناسب', tag:'تناسب', ref:'MATH_G2_U3_SOLVE' },
        { t:'التمثيل البياني للعلاقات المتناسبة', tag:'تناسب', ref:'MATH_G2_U3_GRAPH' },
        { t:'المضلعات المتشابهة', tag:'تشابه', ref:'MATH_G2_U3_SIMILAR' },
        { t:'القياس غير المباشر', tag:'تشابه', ref:'MATH_G2_U3_INDIRECT' },
        { t:'مقياس الرسم والنماذج', tag:'تشابه', ref:'MATH_G2_U3_SCALE' }
      ]},
      { t:'النسبة المئوية', s:'الفصل الرابع', lessons:[
        { t:'النسبة المئوية والكسور والأعداد العشرية', tag:'نسبة', ref:'MATH_G2_U4_CONVERT' },
        { t:'تقدير النسبة المئوية', tag:'نسبة', ref:'MATH_G2_U4_ESTIMATE' },
        { t:'إيجاد النسبة المئوية من عدد', tag:'نسبة', ref:'MATH_G2_U4_FIND' },
        { t:'مسائل النسبة المئوية', tag:'نسبة', ref:'MATH_G2_U4_SOLVE' },
        { t:'التغيّر المئويّ', tag:'نسبة', ref:'MATH_G2_U4_CHANGE' }
      ]},
      { t:'الهندسة والتحويلات', s:'الفصل الخامس', lessons:[] }
    ]}
  }
};

/* أيقونة نوع الدرس حسب الوسم */
window.TAG_ICON = {
  'قواعد':'pen','نحو':'pen','مفردات':'book','إملاء':'pen','استماع':'ear',
  'قراءة':'read','مفاهيم':'book','عمليات':'math','أحياء':'sci',
  'أعداد':'math','مهارة':'target','هندسة':'target','تناسب':'math','تشابه':'target','نسبة':'math'
};
