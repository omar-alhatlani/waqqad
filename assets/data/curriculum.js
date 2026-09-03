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
    {id:'ar',   name:'اللغة العربية',   en:'لغتي الخالدة', icon:'ar',   c:'--s-ar',   cd:'--s-ar-deep',   cs:'--s-ar-soft',   units:8},
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
      { t:'Around the World', s:'الدول والجنسيات', lessons:[] },
      { t:'Families, Families', s:'العائلة وأفرادها', lessons:[] },
      { t:'Is There a View?', s:'البيت والغرف', lessons:[] },
      { t:'Where Do You Live?', s:'المدينة والاتجاهات', lessons:[] },
      { t:'What Are You Doing?', s:'المضارع المستمر', lessons:[] }
    ]},
    'g1.s1.ar':{ eyebrow:'لغتي الخالدة · الأول متوسط', units:[
      { t:'القيم الإسلامية', s:'الدروس اللغوية للوحدة', lessons:[
        { t:'الصنف اللغوي — المذكّر والمؤنّث', tag:'صنف لغوي', ref:'AR_LUGHATI_U1_MUDHAKKAR' },
        { t:'الأسلوب اللغوي — الأمر', tag:'أسلوب', ref:'AR_LUGHATI_U1_AMR' },
        { t:'الرسم الإملائي — رسم همزة الوصل', tag:'إملاء', ref:'AR_LUGHATI_U1_HAMZA' },
        { t:'الوظيفة النحوية — المبتدأ والخبر', tag:'نحو', ref:'AR_LUGHATI_U1_MUBTADA' }
      ]},
      { t:'الأعلام', s:'دروس الوحدة الثانية', lessons:[] },
      { t:'الوطن', s:'دروس الوحدة الثالثة', lessons:[] }
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
      { t:'الأعداد الصحيحة', s:'القيمة المطلقة والعمليات', lessons:[] },
      { t:'المعادلات الخطية والدوال', s:'الفصل الثالث', lessons:[] },
      { t:'النسبة والتناسب', s:'الفصل الرابع', lessons:[] }
    ]},
    'g1.s1.sci':{ eyebrow:'علوم · الأول متوسط', units:[
      { t:'طبيعة العلم', s:'الوحدة الأولى · الفصل الأول', lessons:[
        { t:'العلم وعملياته', tag:'مفاهيم', ref:'SCI_G1_U1_SCIENCE' },
        { t:'النماذج العلمية', tag:'مفاهيم', ref:'SCI_G1_U1_MODELS' },
        { t:'تقويم التفسيرات العلمية', tag:'مفاهيم', ref:'SCI_G1_U1_EVAL' }
      ]},
      { t:'الحركة والقوى والآلات البسيطة', s:'الوحدة الأولى · الفصل الثاني', lessons:[] },
      { t:'المادة وتغيّراتها', s:'الوحدة الثانية · الفصل الثالث', lessons:[] },
      { t:'الذرات والعناصر والجدول الدوري', s:'الوحدة الثانية · الفصل الرابع', lessons:[] },
      { t:'الصخور والمعادن', s:'الوحدة الثالثة · الفصل الخامس', lessons:[] },
      { t:'القوى المشكِّلة للأرض', s:'الوحدة الثالثة · الفصل السادس', lessons:[] }
    ]}
  }
};

/* أيقونة نوع الدرس حسب الوسم */
window.TAG_ICON = {
  'قواعد':'pen','نحو':'pen','مفردات':'book','إملاء':'pen','استماع':'ear',
  'قراءة':'read','مفاهيم':'book','عمليات':'math','أحياء':'sci'
};
