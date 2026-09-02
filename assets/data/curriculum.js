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
    {id:'math', name:'الرياضيات',       en:'Mathematics',  icon:'math', c:'--s-math', cd:'--s-math-deep', cs:'--s-math-soft', units:7},
    {id:'sci',  name:'العلوم',          en:'Science',      icon:'sci',  c:'--s-sci',  cd:'--s-sci-deep',  cs:'--s-sci-soft',  units:6},
    {id:'en',   name:'اللغة الإنجليزية', en:'Super Goal 1', icon:'en',   c:'--s-en',   cd:'--s-en-deep',   cs:'--s-en-soft',   units:10}
  ],

  /* فهرس المحتوى: المفتاح = "grade.sem.subject" */
  content:{
    'g1.s1.en':{ eyebrow:'English · Super Goal 1', units:[
      { t:'Welcome!', s:'التعارف والتحية', lessons:[
        { t:'Grammar — الفعل be (am/is/are)', tag:'قواعد', ref:'EN_SG1_U1_VERBBE' },
        { t:'Vocabulary — Countries & Nationalities', tag:'مفردات', ref:null },
        { t:'Listening — Introductions', tag:'استماع', ref:null },
        { t:'Reading — New Friends', tag:'قراءة', ref:null }
      ]},
      { t:'My Things', s:'ممتلكاتي والألوان', lessons:[] },
      { t:'Around Town', s:'في المدينة والاتجاهات', lessons:[] },
      { t:'What Time Is It?', s:'الوقت والروتين اليومي', lessons:[] }
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
      { t:'الأعداد الصحيحة', s:'التمثيل والعمليات', lessons:[
        { t:'تمثيل الأعداد الصحيحة', tag:'مفاهيم', ref:null },
        { t:'جمع وطرح الأعداد الصحيحة', tag:'عمليات', ref:null },
        { t:'الضرب والقسمة', tag:'عمليات', ref:null }
      ]},
      { t:'الجبر والدوال', s:'العبارات والمعادلات', lessons:[] },
      { t:'النسبة والتناسب', s:'المعدّلات والنسب المئوية', lessons:[] }
    ]},
    'g1.s1.sci':{ eyebrow:'علوم · الأول متوسط', units:[
      { t:'الكائنات الحية', s:'الخصائص والخلية', lessons:[
        { t:'صفات الكائنات الحية', tag:'مفاهيم', ref:null },
        { t:'الخلية ووظائفها', tag:'أحياء', ref:null },
        { t:'العمليات الحيوية', tag:'أحياء', ref:null }
      ]},
      { t:'تصنيف الكائنات', s:'الممالك والفيروسات', lessons:[] },
      { t:'الطاقة الحرارية', s:'الحرارة وانتقالها', lessons:[] }
    ]}
  }
};

/* أيقونة نوع الدرس حسب الوسم */
window.TAG_ICON = {
  'قواعد':'pen','نحو':'pen','مفردات':'book','إملاء':'pen','استماع':'ear',
  'قراءة':'read','مفاهيم':'book','عمليات':'math','أحياء':'sci'
};
