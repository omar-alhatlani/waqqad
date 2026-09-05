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
    'g1.s2.en':{ eyebrow:'English · Super Goal 1', units:[
      { t:'What Do You Do?', s:'المهن والأعمال', lessons:[
        { t:'Grammar — المضارع البسيط وأسئلة What', tag:'قواعد', ref:'EN_SG1_U9_PRESENT' },
        { t:'Grammar — الروابط so/because', tag:'قواعد', ref:'EN_SG1_U9_CONJ' },
        { t:'Vocabulary — المهن', tag:'مفردات', ref:'EN_SG1_U9_VOCAB' },
        { t:'Reading — Follow Your Dream', tag:'قراءة', ref:'EN_SG1_U9_READ' }
      ]},
      { t:"What's School Like?", s:'المدرسة والصفات', lessons:[
        { t:'Grammar — الصفات وموضعها والمكثّفات', tag:'قواعد', ref:'EN_SG1_U10_ADJ' },
        { t:'Grammar — صفات ‎-ed و‎-ing', tag:'قواعد', ref:'EN_SG1_U10_EDING' },
        { t:'Vocabulary — المواد والشخصية', tag:'مفردات', ref:'EN_SG1_U10_VOCAB' },
        { t:'Reading — School Clubs', tag:'قراءة', ref:'EN_SG1_U10_READ' }
      ]},
      { t:'What Time Do You Get Up?', s:'الروتين اليوميّ والوقت', lessons:[
        { t:'Grammar — ظروف التكرار وتعابير الوقت', tag:'قواعد', ref:'EN_SG1_U11_FREQ' },
        { t:'Grammar — حروف الزمن والبسيط مقابل المستمرّ', tag:'قواعد', ref:'EN_SG1_U11_PREP' },
        { t:'Vocabulary — الروتين وقول الوقت', tag:'مفردات', ref:'EN_SG1_U11_VOCAB' },
        { t:'Reading — A School Day', tag:'قراءة', ref:'EN_SG1_U11_READ' }
      ]},
      { t:'What Can You Do There?', s:'القدرة والأماكن', lessons:[
        { t:'Grammar — الفعل الناقص can', tag:'قواعد', ref:'EN_SG1_U12_CAN' },
        { t:'Grammar — like + مصدر / gerund', tag:'قواعد', ref:'EN_SG1_U12_LIKE' },
        { t:'Vocabulary — الأماكن والأنشطة', tag:'مفردات', ref:'EN_SG1_U12_VOCAB' },
        { t:'Reading — Places to Visit in Saudi Arabia', tag:'قراءة', ref:'EN_SG1_U12_READ' }
      ]},
      { t:'What Are You Going to Wear There?', s:'المستقبل والملابس', lessons:[
        { t:'Grammar — المستقبل be + going to', tag:'قواعد', ref:'EN_SG1_U13_GOINGTO' },
        { t:'Grammar — المضارع المستمرّ للمستقبل', tag:'قواعد', ref:'EN_SG1_U13_FUTURE' },
        { t:'Vocabulary — الملابس والألوان', tag:'مفردات', ref:'EN_SG1_U13_VOCAB' },
        { t:'Reading — The Iguassu Falls', tag:'قراءة', ref:'EN_SG1_U13_READ' }
      ]},
      { t:"Let's Celebrate", s:'الاحتفالات والأعياد', lessons:[
        { t:'Grammar — ضمائر المفعول', tag:'قواعد', ref:'EN_SG1_U14_PRON' },
        { t:"Grammar — Let's وmust/should", tag:'قواعد', ref:'EN_SG1_U14_MODALS' },
        { t:'Vocabulary — الاحتفالات', tag:'مفردات', ref:'EN_SG1_U14_VOCAB' },
        { t:'Reading — Eid Celebrations', tag:'قراءة', ref:'EN_SG1_U14_READ' }
      ]},
      { t:'Then and Now', s:'الماضي: كان وأخواتها', lessons:[
        { t:'Grammar — ماضي be: was/were وbe born', tag:'قواعد', ref:'EN_SG1_U15_WAS' },
        { t:'Grammar — There was / There were', tag:'قواعد', ref:'EN_SG1_U15_THERE' },
        { t:'Vocabulary — الماضي والحاضر', tag:'مفردات', ref:'EN_SG1_U15_VOCAB' },
        { t:'Reading — Yao Ming', tag:'قراءة', ref:'EN_SG1_U15_READ' }
      ]},
      { t:'What Did You Do Last Week?', s:'الماضي البسيط', lessons:[
        { t:'Grammar — الماضي المنتظم والشاذّ', tag:'قواعد', ref:'EN_SG1_U16_PAST' },
        { t:'Grammar — تعابير الماضي والبسيط مقابل الماضي', tag:'قواعد', ref:'EN_SG1_U16_TIME' },
        { t:'Vocabulary — أنشطة وقت الفراغ', tag:'مفردات', ref:'EN_SG1_U16_VOCAB' },
        { t:'Reading — What Did You Do Last Week?', tag:'قراءة', ref:'EN_SG1_U16_READ' }
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
    'g1.s2.ar':{ eyebrow:'لغتي الخالدة · الأول متوسط', units:[
      { t:'الحياة الاجتماعية', s:'الدروس اللغوية للوحدة الرابعة', lessons:[
        { t:'الصنف اللغوي — الضمائر', tag:'صنف لغوي', ref:'AR_LUGHATI_U4_DAMAIR' },
        { t:'الوظيفة النحوية — الجرّ بحرف الجرّ', tag:'نحو', ref:'AR_LUGHATI_U4_JARR' },
        { t:'الأسلوب اللغوي — النهي', tag:'أسلوب', ref:'AR_LUGHATI_U4_NAHI' },
        { t:'الرسم الإملائي — الأسماء المبدوءة بـ«ال»', tag:'إملاء', ref:'AR_LUGHATI_U4_AL' }
      ]},
      { t:'البيئة والصحة', s:'الدروس اللغوية للوحدة الخامسة', lessons:[
        { t:'الصنف اللغوي — أسماء الإشارة', tag:'صنف لغوي', ref:'AR_LUGHATI_U5_ISHARA' },
        { t:'الوظيفة النحوية — الجرّ بالإضافة', tag:'نحو', ref:'AR_LUGHATI_U5_IDAFA' },
        { t:'الأسلوب اللغوي — الجملة الاسمية المثبتة', tag:'أسلوب', ref:'AR_LUGHATI_U5_ISMIYYA' },
        { t:'الرسم الإملائي — الهمزة المتوسطة على الألف', tag:'إملاء', ref:'AR_LUGHATI_U5_HAMZAALIF' }
      ]},
      { t:'حِرَف وهوايات', s:'الدروس اللغوية للوحدة السادسة', lessons:[
        { t:'الصنف اللغوي — الأسماء الموصولة', tag:'صنف لغوي', ref:'AR_LUGHATI_U6_MAWSUL' },
        { t:'الوظيفة النحوية — رفع المضارع ونصبه وجزمه', tag:'نحو', ref:'AR_LUGHATI_U6_MUDARI' },
        { t:'الأسلوب اللغوي — الجملة الفعلية المثبتة', tag:'أسلوب', ref:'AR_LUGHATI_U6_FILIYYA' },
        { t:'الرسم الإملائي — الهمزة المتوسطة على واو', tag:'إملاء', ref:'AR_LUGHATI_U6_HAMZAWAW' }
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
    'g1.s2.math':{ eyebrow:'رياضيات · الأول متوسط', units:[
      { t:'تطبيقات النسبة المئوية', s:'الفصل الخامس', lessons:[
        { t:'النسبة المئوية من عدد', tag:'نسبة', ref:'MATH_G1_U5_NISBA' },
        { t:'تقدير النسبة المئوية', tag:'نسبة', ref:'MATH_G1_U5_ESTIMATE' },
        { t:'استراتيجية: تحديد معقولية الإجابة', tag:'مهارة', ref:'MATH_G1_U5_REASON' },
        { t:'التناسب المئوي', tag:'تناسب', ref:'MATH_G1_U5_PROPORTION' },
        { t:'تطبيقات على النسبة المئوية', tag:'نسبة', ref:'MATH_G1_U5_APPS' }
      ]},
      { t:'الإحصاء', s:'الفصل السادس', lessons:[
        { t:'التمثيل بالنقاط', tag:'إحصاء', ref:'MATH_G1_U6_DOTPLOT' },
        { t:'مقاييس النزعة المركزية والمدى', tag:'إحصاء', ref:'MATH_G1_U6_CENTER' },
        { t:'التمثيل بالأعمدة والمدرجات التكرارية', tag:'إحصاء', ref:'MATH_G1_U6_BARS' },
        { t:'استعمال التمثيلات البيانية للتنبؤ', tag:'إحصاء', ref:'MATH_G1_U6_PREDICT' },
        { t:'استراتيجية: استعمال التمثيل البياني', tag:'مهارة', ref:'MATH_G1_U6_USEGRAPH' }
      ]},
      { t:'الاحتمال', s:'الفصل السابع', lessons:[
        { t:'الحوادث والاحتمالات', tag:'احتمال', ref:'MATH_G1_U7_PROB' },
        { t:'استراتيجية: إنشاء قائمة منظمة', tag:'مهارة', ref:'MATH_G1_U7_LIST' },
        { t:'عدّ النواتج', tag:'احتمال', ref:'MATH_G1_U7_COUNT' },
        { t:'مبدأ العدّ الأساسي', tag:'احتمال', ref:'MATH_G1_U7_FCP' }
      ]},
      { t:'الهندسة: المضلّعات', s:'الفصل الثامن', lessons:[
        { t:'العلاقات بين الزوايا', tag:'هندسة', ref:'MATH_G1_U8_ANGLES' },
        { t:'الزوايا المتتامّة والمتكاملة', tag:'هندسة', ref:'MATH_G1_U8_COMPLEMENT' },
        { t:'التمثيل بالقطاعات الدائرية', tag:'إحصاء', ref:'MATH_G1_U8_PIE' },
        { t:'المثلثات', tag:'هندسة', ref:'MATH_G1_U8_TRIANGLES' },
        { t:'استراتيجية: التبرير المنطقي', tag:'مهارة', ref:'MATH_G1_U8_LOGIC' },
        { t:'الأشكال الرباعية', tag:'هندسة', ref:'MATH_G1_U8_QUAD' },
        { t:'الأشكال المتشابهة', tag:'هندسة', ref:'MATH_G1_U8_SIMILAR' },
        { t:'التبليط والمضلّعات', tag:'هندسة', ref:'MATH_G1_U8_TILING' }
      ]},
      { t:'القياس: المساحات والأحجام', s:'الفصل التاسع', lessons:[
        { t:'مساحة المثلث وشبه المنحرف', tag:'قياس', ref:'MATH_G1_U9_TRIAREA' },
        { t:'محيط الدائرة', tag:'قياس', ref:'MATH_G1_U9_CIRCUMF' },
        { t:'مساحة الدائرة', tag:'قياس', ref:'MATH_G1_U9_CIRCAREA' },
        { t:'استراتيجية: حل مسألة أبسط', tag:'مهارة', ref:'MATH_G1_U9_SIMPLER' },
        { t:'مساحة الأشكال المركّبة', tag:'قياس', ref:'MATH_G1_U9_COMPOSITE' },
        { t:'الأشكال الثلاثية الأبعاد', tag:'هندسة', ref:'MATH_G1_U9_SOLIDS' },
        { t:'رسم الأشكال الثلاثية الأبعاد', tag:'هندسة', ref:'MATH_G1_U9_DRAW3D' },
        { t:'حجم المنشور', tag:'قياس', ref:'MATH_G1_U9_PRISM' },
        { t:'حجم الأسطوانة', tag:'قياس', ref:'MATH_G1_U9_CYLINDER' }
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
    'g3.s1.ar':{ eyebrow:'لغتي الخالدة · الثالث متوسط', units:[
      { t:'حقوق وواجبات', s:'الدروس اللغوية للوحدة الأولى', lessons:[
        { t:'الصنف اللغوي — اسم الفاعل', tag:'صنف لغوي', ref:'AR_LUGHATI_G3_U1_FAIL' },
        { t:'الوظيفة النحوية — الحال', tag:'نحو', ref:'AR_LUGHATI_G3_U1_HAAL' },
        { t:'الأسلوب اللغوي — القَسَم', tag:'أسلوب', ref:'AR_LUGHATI_G3_U1_QASAM' },
        { t:'الرسم الإملائي — الألف اللينة في الأفعال الثلاثية', tag:'إملاء', ref:'AR_LUGHATI_G3_U1_ALIF' }
      ]},
      { t:'أعلام معاصرون', s:'الدروس اللغوية للوحدة الثانية', lessons:[
        { t:'الصنف اللغوي — اسم المفعول', tag:'صنف لغوي', ref:'AR_LUGHATI_G3_U2_MAFOOL' },
        { t:'الوظيفة النحوية — التمييز', tag:'نحو', ref:'AR_LUGHATI_G3_U2_TAMYIZ' },
        { t:'الأسلوب اللغوي — أسلوب الشرط', tag:'أسلوب', ref:'AR_LUGHATI_G3_U2_SHART' },
        { t:'الرسم الإملائي — الألف اللينة في الأفعال غير الثلاثية', tag:'إملاء', ref:'AR_LUGHATI_G3_U2_ALIF2' }
      ]},
      { t:'أمن وازدهار', s:'الدروس اللغوية للوحدة الثالثة', lessons:[
        { t:'الصنف اللغوي — صيغ المبالغة', tag:'صنف لغوي', ref:'AR_LUGHATI_G3_U3_MUBALAGHA' },
        { t:'الوظيفة النحوية — المستثنى', tag:'نحو', ref:'AR_LUGHATI_G3_U3_MUSTATHNA' },
        { t:'الأسلوب اللغوي — أسلوب التفضيل', tag:'أسلوب', ref:'AR_LUGHATI_G3_U3_TAFDIL' },
        { t:'الرسم الإملائي — رسم بعض الكلمات الموصولة', tag:'إملاء', ref:'AR_LUGHATI_G3_U3_MAWSULA' }
      ]}
    ]},
    'g3.s2.ar':{ eyebrow:'لغتي الخالدة · الثالث متوسط', units:[
      { t:'قضايا العمل', s:'الدروس اللغوية للوحدة الرابعة', lessons:[
        { t:'الصنف اللغوي — اسما الزمان والمكان', tag:'صنف لغوي', ref:'AR_LUGHATI_G3_U4_ZAMAN' },
        { t:'الوظيفة النحوية — النعت', tag:'نحو', ref:'AR_LUGHATI_G3_U4_NAAT' },
        { t:'الأسلوب اللغوي — الاستثناء', tag:'أسلوب', ref:'AR_LUGHATI_G3_U4_ISTITHNAA' },
        { t:'الرسم الإملائي — الوصل والفصل', tag:'إملاء', ref:'AR_LUGHATI_G3_U4_WASL' }
      ]},
      { t:'سُمومٌ قاتلة', s:'الدروس اللغوية للوحدة الخامسة', lessons:[
        { t:'الصنف اللغوي — اسم الآلة', tag:'صنف لغوي', ref:'AR_LUGHATI_G3_U5_AALA' },
        { t:'الوظيفة النحوية — العطف', tag:'نحو', ref:'AR_LUGHATI_G3_U5_ATF' },
        { t:'الأسلوب اللغوي — التعجّب', tag:'أسلوب', ref:'AR_LUGHATI_G3_U5_TAAJJUB' },
        { t:'الرسم الإملائي — الكلمات المزيد أحرفها', tag:'إملاء', ref:'AR_LUGHATI_G3_U5_ZAID' }
      ]},
      { t:'الثورة المعلوماتية', s:'الدروس اللغوية للوحدة السادسة', lessons:[
        { t:'الصنف اللغوي — المصادر', tag:'صنف لغوي', ref:'AR_LUGHATI_G3_U6_MASADIR' },
        { t:'الوظيفة النحوية — البدل', tag:'نحو', ref:'AR_LUGHATI_G3_U6_BADAL' },
        { t:'الأسلوب اللغوي — العدد', tag:'أسلوب', ref:'AR_LUGHATI_G3_U6_ADAD' },
        { t:'الرسم الإملائي — الكلمات المحذوف أحرفها', tag:'إملاء', ref:'AR_LUGHATI_G3_U6_HADHF' }
      ]}
    ]},
    'g3.s1.math':{ eyebrow:'رياضيات · الثالث متوسط', units:[
      { t:'المعادلات الخطية', s:'الفصل الأول', lessons:[
        { t:'المعادلات', tag:'جبر', ref:'MATH_G3_U1_EQ' },
        { t:'حل المعادلات ذات الخطوة الواحدة', tag:'جبر', ref:'MATH_G3_U1_ONESTEP' },
        { t:'حل المعادلات المتعددة الخطوات', tag:'جبر', ref:'MATH_G3_U1_MULTISTEP' },
        { t:'المعادلات التي تحتوي متغيّرًا في طرفيها', tag:'جبر', ref:'MATH_G3_U1_BOTHSIDES' },
        { t:'المعادلات التي تتضمن القيمة المطلقة', tag:'جبر', ref:'MATH_G3_U1_ABS' }
      ]},
      { t:'العلاقات والدوال الخطية', s:'الفصل الثاني', lessons:[
        { t:'العلاقات', tag:'جبر', ref:'MATH_G3_U2_RELATIONS' },
        { t:'الدوال', tag:'جبر', ref:'MATH_G3_U2_FUNCTIONS' },
        { t:'تمثيل المعادلات الخطية بيانيًّا', tag:'جبر', ref:'MATH_G3_U2_GRAPH' },
        { t:'حل المعادلات الخطية بيانيًّا', tag:'جبر', ref:'MATH_G3_U2_SOLVEGRAPH' },
        { t:'معدل التغير والميل', tag:'جبر', ref:'MATH_G3_U2_SLOPE' },
        { t:'المتتابعات الحسابية كدوال خطية', tag:'جبر', ref:'MATH_G3_U2_ARITHSEQ' }
      ]},
      { t:'الدوال الخطية', s:'الفصل الثالث', lessons:[
        { t:'تمثيل صيغة الميل والمقطع بيانيًّا', tag:'جبر', ref:'MATH_G3_U3_SLOPEINT' },
        { t:'كتابة المعادلات بصيغة الميل والمقطع', tag:'جبر', ref:'MATH_G3_U3_WRITESLOPE' },
        { t:'كتابة المعادلات بصيغة الميل ونقطة', tag:'جبر', ref:'MATH_G3_U3_POINTSLOPE' },
        { t:'المستقيمات المتوازية والمتعامدة', tag:'جبر', ref:'MATH_G3_U3_PARALLEL' }
      ]},
      { t:'المتباينات الخطية', s:'الفصل الرابع', lessons:[
        { t:'حل المتباينات بالجمع أو بالطرح', tag:'جبر', ref:'MATH_G3_U4_ADDSUB' },
        { t:'حل المتباينات بالضرب أو بالقسمة', tag:'جبر', ref:'MATH_G3_U4_MULDIV' },
        { t:'حل المتباينات المتعددة الخطوات', tag:'جبر', ref:'MATH_G3_U4_MULTI' },
        { t:'المتباينات المركبة', tag:'جبر', ref:'MATH_G3_U4_COMPOUND' },
        { t:'المتباينات التي تتضمن القيمة المطلقة', tag:'جبر', ref:'MATH_G3_U4_ABS' }
      ]},
      { t:'أنظمة المعادلات الخطية', s:'الفصل الخامس', lessons:[
        { t:'حل نظام معادلتين خطيتين بيانيًّا', tag:'جبر', ref:'MATH_G3_U5_GRAPH' },
        { t:'حل نظام معادلتين خطيتين بالتعويض', tag:'جبر', ref:'MATH_G3_U5_SUB' },
        { t:'الحل بالحذف باستعمال الجمع أو الطرح', tag:'جبر', ref:'MATH_G3_U5_ELIMADD' },
        { t:'الحل بالحذف باستعمال الضرب', tag:'جبر', ref:'MATH_G3_U5_ELIMMUL' },
        { t:'تطبيقات على النظام المكوَّن من معادلتين', tag:'جبر', ref:'MATH_G3_U5_APPLY' }
      ]}
    ]},
    'g3.s1.sci':{ eyebrow:'علوم · الثالث متوسط', units:[
      { t:'طبيعة العلم', s:'الوحدة الأولى · الفصل الأول', lessons:[
        { t:'أسلوب العلم', tag:'مفاهيم', ref:'SCI_G3S1_U1_METHOD' },
        { t:'عمل العلم', tag:'مفاهيم', ref:'SCI_G3S1_U1_WORK' },
        { t:'العلم والتقنية والمجتمع', tag:'مفاهيم', ref:'SCI_G3S1_U1_SOCIETY' }
      ]},
      { t:'تغيّرات الأرض', s:'الوحدة الأولى · الفصل الثاني', lessons:[
        { t:'الزلازل', tag:'مفاهيم', ref:'SCI_G3S1_U2_QUAKES' },
        { t:'البراكين', tag:'مفاهيم', ref:'SCI_G3S1_U2_VOLCANOES' },
        { t:'الصفائح الأرضية وعلاقتها بالزلازل والبراكين', tag:'مفاهيم', ref:'SCI_G3S1_U2_PLATES' }
      ]},
      { t:'أنشطة وعمليات في الخلية', s:'الوحدة الثانية · الفصل الثالث', lessons:[
        { t:'أنشطة في الخلية', tag:'مفاهيم', ref:'SCI_G3S1_U3_CELL' },
        { t:'انقسام الخلية وتكاثرها', tag:'مفاهيم', ref:'SCI_G3S1_U3_DIVISION' }
      ]},
      { t:'الوراثة', s:'الوحدة الثانية · الفصل الرابع', lessons:[
        { t:'مادة الوراثة DNA', tag:'مفاهيم', ref:'SCI_G3S1_U4_DNA' },
        { t:'علم الوراثة', tag:'مفاهيم', ref:'SCI_G3S1_U4_GENETICS' }
      ]},
      { t:'تركيب الذرة', s:'الوحدة الثالثة · الفصل الخامس', lessons:[
        { t:'نماذج الذرة', tag:'مفاهيم', ref:'SCI_G3S1_U5_MODELS' },
        { t:'النواة', tag:'مفاهيم', ref:'SCI_G3S1_U5_NUCLEUS' }
      ]},
      { t:'الجدول الدوري', s:'الوحدة الثالثة · الفصل السادس', lessons:[
        { t:'مقدمة في الجدول الدوري', tag:'مفاهيم', ref:'SCI_G3S1_U6_PERIODIC' },
        { t:'العناصر الممثلة', tag:'مفاهيم', ref:'SCI_G3S1_U6_REPRESENTATIVE' },
        { t:'العناصر الانتقالية', tag:'مفاهيم', ref:'SCI_G3S1_U6_TRANSITION' }
      ]}
    ]},
    'g3.s2.sci':{ eyebrow:'علوم · الثالث متوسط', units:[
      { t:'الكهرباء', s:'الوحدة الأولى · قانون أوم', lessons:[
        { t:'الدائرة الكهربائية وقانون أوم', tag:'مفاهيم', ref:'SCI_G3_U1_OHM' }
      ]}
    ]},
    'g3.s1.en':{ eyebrow:'English · Super Goal 3', units:[
      { t:'Lifestyles', s:'العادات والروتين والتكرار', lessons:[
        { t:'Grammar — المضارع البسيط (العادات)', tag:'قواعد', ref:'EN_SG3_U1_PRESENT' },
        { t:'Grammar — ظروف التكرار وأسئلة How often', tag:'قواعد', ref:'EN_SG3_U1_FREQ' },
        { t:'Vocabulary — أنماط الحياة والهوايات', tag:'مفردات', ref:'EN_SG3_U1_VOCAB' },
        { t:'Reading — A Healthy Lifestyle?', tag:'قراءة', ref:'EN_SG3_U1_READ' }
      ]},
      { t:'Life Stories', s:'الماضي والسِّيَر الذاتية', lessons:[
        { t:'Grammar — الماضي البسيط', tag:'قواعد', ref:'EN_SG3_U2_PAST' },
        { t:'Grammar — used to وbe born والمبني للمجهول', tag:'قواعد', ref:'EN_SG3_U2_USEDTO' },
        { t:'Vocabulary — أحداث الحياة والسِّيَر', tag:'مفردات', ref:'EN_SG3_U2_VOCAB' },
        { t:'Reading — The King of Saudi Arabia', tag:'قراءة', ref:'EN_SG3_U2_READ' }
      ]},
      { t:'When Are You Traveling?', s:'السفر والمستقبل', lessons:[
        { t:'Grammar — المستقبل: going to وwill', tag:'قواعد', ref:'EN_SG3_U3_FUTURE' },
        { t:'Grammar — مصدر الغرض وحروف الجرّ', tag:'قواعد', ref:'EN_SG3_U3_TIME' },
        { t:'Vocabulary — السفر الجوّيّ', tag:'مفردات', ref:'EN_SG3_U3_VOCAB' },
        { t:'Reading — Study Arabic in Saudi Arabia', tag:'قراءة', ref:'EN_SG3_U3_READ' }
      ]},
      { t:'What Do I Need to Buy?', s:'الطعام والكمّيات', lessons:[
        { t:'Grammar — عبارات الكمّية وsomething/anything', tag:'قواعد', ref:'EN_SG3_U4_QTY' },
        { t:'Grammar — كلمات التسلسل والانعكاسيّة وbecause/so', tag:'قواعد', ref:'EN_SG3_U4_SEQ' },
        { t:'Vocabulary — الأطعمة والطهي', tag:'مفردات', ref:'EN_SG3_U4_VOCAB' },
        { t:'Reading — Foods from the Americas', tag:'قراءة', ref:'EN_SG3_U4_READ' }
      ]},
      { t:'Since When?', s:'المضارع التامّ والاختراعات', lessons:[
        { t:'Grammar — المضارع التامّ مقابل الماضي (for/since)', tag:'قواعد', ref:'EN_SG3_U5_PERFECT' },
        { t:'Grammar — المبني للمجهول', tag:'قواعد', ref:'EN_SG3_U5_PASSIVE' },
        { t:'Vocabulary — الاختراعات والتقنية', tag:'مفردات', ref:'EN_SG3_U5_VOCAB' },
        { t:'Reading — A History of Special Effects', tag:'قراءة', ref:'EN_SG3_U5_READ' }
      ]},
      { t:'Do You Know Where It Is?', s:'المقارنة ووصف الأماكن', lessons:[
        { t:'Grammar — المقارنة والتفضيل وas...as', tag:'قواعد', ref:'EN_SG3_U6_COMPARE' },
        { t:'Grammar — الأسئلة غير المباشرة وأداة التعريف', tag:'قواعد', ref:'EN_SG3_U6_INDIRECT' },
        { t:'Vocabulary — جودة الحياة والأماكن', tag:'مفردات', ref:'EN_SG3_U6_VOCAB' },
        { t:'Reading — Do You Know Where This Place Is?', tag:'قراءة', ref:'EN_SG3_U6_READ' }
      ]}
    ]},
    'g3.s2.en':{ eyebrow:'English · Super Goal 3', units:[
      { t:"It's a Good Deal, Isn't It?", s:'الأسئلة الذيلية والصفقات', lessons:[
        { t:'Grammar — الأسئلة الذيلية والسلبية', tag:'قواعد', ref:'EN_SG3_U7_TAG' },
        { t:"Grammar — be able to والاقتراحات", tag:'قواعد', ref:'EN_SG3_U7_ABLE' },
        { t:'Vocabulary — الأغراض المستعملة', tag:'مفردات', ref:'EN_SG3_U7_VOCAB' },
        { t:'Reading — You Look Just Like Me!', tag:'قراءة', ref:'EN_SG3_U7_READ' }
      ]},
      { t:'Drive Slowly!', s:'القيادة والالتزام', lessons:[
        { t:"Grammar — must/mustn't وshould", tag:'قواعد', ref:'EN_SG3_U8_MODALS' },
        { t:'Grammar — الطلبات والأوامر ونقلُها', tag:'قواعد', ref:'EN_SG3_U8_REQCMD' },
        { t:'Vocabulary — القيادة والمرور', tag:'مفردات', ref:'EN_SG3_U8_VOCAB' },
        { t:'Reading — Is Right, Right?', tag:'قراءة', ref:'EN_SG3_U8_READ' }
      ]},
      { t:'All Kinds of People', s:'الشخصية والصفات', lessons:[
        { t:'Grammar — الضمائر الموصولة who/that/which', tag:'قواعد', ref:'EN_SG3_U9_RELATIVE' },
        { t:'Grammar — الماضي المستمرّ وwhen/while', tag:'قواعد', ref:'EN_SG3_U9_PASTPROG' },
        { t:'Vocabulary — صفات الشخصية', tag:'مفردات', ref:'EN_SG3_U9_VOCAB' },
        { t:'Reading — Simple Ideas, Big Results', tag:'قراءة', ref:'EN_SG3_U9_READ' }
      ]},
      { t:'Who Used My Toothpaste?', s:'الشكاوى والأعمال المنزلية', lessons:[
        { t:'Grammar — المضارع التامّ already/yet/just', tag:'قواعد', ref:'EN_SG3_U10_PERFECT' },
        { t:'Grammar — الأفعال + gerund وثنائية الكلمة', tag:'قواعد', ref:'EN_SG3_U10_GERUND' },
        { t:'Vocabulary — الشكاوى', tag:'مفردات', ref:'EN_SG3_U10_VOCAB' },
        { t:'Reading — Common Complaints', tag:'قراءة', ref:'EN_SG3_U10_READ' }
      ]},
      { t:'Making Choices', s:'القرارات والشرط التخيّليّ', lessons:[
        { t:"Grammar — الشرط التخيّليّ وI'd rather", tag:'قواعد', ref:'EN_SG3_U11_IMAGINE' },
        { t:'Grammar — wish والتمنّي', tag:'قواعد', ref:'EN_SG3_U11_WISH' },
        { t:'Vocabulary — القرارات والنصيحة', tag:'مفردات', ref:'EN_SG3_U11_VOCAB' },
        { t:'Reading — The Right Choice', tag:'قراءة', ref:'EN_SG3_U11_READ' }
      ]},
      { t:'Culture Shock', s:'الثقافة والتأقلم', lessons:[
        { t:"Grammar — الأفعال + المصدر وIt's + to", tag:'قواعد', ref:'EN_SG3_U12_INFINITIVE' },
        { t:'Grammar — الماضي التامّ والـgerund كفاعل', tag:'قواعد', ref:'EN_SG3_U12_PASTPERF' },
        { t:'Vocabulary — الثقافة والتأقلم', tag:'مفردات', ref:'EN_SG3_U12_VOCAB' },
        { t:'Reading — A Fish Out of Water', tag:'قراءة', ref:'EN_SG3_U12_READ' }
      ]}
    ]},
    'g2.s1.en':{ eyebrow:'English · Super Goal 2', units:[
      { t:'Are You Here on Vacation?', s:'التحية والتعارف والاتجاهات', lessons:[
        { t:'Grammar — الفعل be: الأسئلة والإجابات القصيرة', tag:'قواعد', ref:'EN_SG2_U1_BE' },
        { t:'Grammar — أسئلة الاستفهام (Wh-)', tag:'قواعد', ref:'EN_SG2_U1_WHQ' },
        { t:'Vocabulary — التحية والتعارف', tag:'مفردات', ref:'EN_SG2_U1_VOCAB' },
        { t:'Reading — The Place to Stay', tag:'قراءة', ref:'EN_SG2_U1_READ' }
      ]},
      { t:'What Are They Making?', s:'المضارع المستمر والأوامر', lessons:[
        { t:'Grammar — Present Progressive', tag:'قواعد', ref:'EN_SG2_U2_PROG' },
        { t:'Grammar — Imperatives', tag:'قواعد', ref:'EN_SG2_U2_IMP' },
        { t:'Vocabulary — Prepositions of Place', tag:'مفردات', ref:'EN_SG2_U2_PREP' },
        { t:'Reading — E-Learning Is Easy!', tag:'قراءة', ref:'EN_SG2_U2_READ' }
      ]},
      { t:'Who’s Who', s:'المهن والأهداف المهنية', lessons:[
        { t:'Grammar — Simple Present & Wh- Questions', tag:'قواعد', ref:'EN_SG2_U3_PRESENT' },
        { t:'Grammar — Relative Pronouns (who/that/which)', tag:'قواعد', ref:'EN_SG2_U3_REL' },
        { t:'Vocabulary — Jobs & Professions', tag:'مفردات', ref:'EN_SG2_U3_VOCAB' },
        { t:'Reading — Jobs and Employment in Saudi Arabia', tag:'قراءة', ref:'EN_SG2_U3_READ' }
      ]},
      { t:'Favorite Pastimes', s:'الهوايات وتكرار الأنشطة', lessons:[
        { t:'Grammar — How Often & Frequency', tag:'قواعد', ref:'EN_SG2_U4_FREQ' },
        { t:'Grammar — Know How To & Gerunds', tag:'قواعد', ref:'EN_SG2_U4_KNOW' },
        { t:'Vocabulary — Hobbies & Pastimes', tag:'مفردات', ref:'EN_SG2_U4_VOCAB' },
        { t:'Reading — Sky High!', tag:'قراءة', ref:'EN_SG2_U4_READ' }
      ]},
      { t:'Is There Any Ice Cream?', s:'الأطعمة والكميات', lessons:[
        { t:'Grammar — Count/Noncount & Some/Any', tag:'قواعد', ref:'EN_SG2_U5_QTY' },
        { t:'Grammar — Partitives & Too/Enough', tag:'قواعد', ref:'EN_SG2_U5_TOOENOUGH' },
        { t:'Vocabulary — Food & Ordering', tag:'مفردات', ref:'EN_SG2_U5_VOCAB' },
        { t:'Reading — Globalization of Foods', tag:'قراءة', ref:'EN_SG2_U5_READ' }
      ]},
      { t:'What Was It Like?', s:'الزمن الماضي', lessons:[
        { t:'Grammar — Simple Past of Be (was/were)', tag:'قواعد', ref:'EN_SG2_U6_WAS' },
        { t:'Grammar — Simple Past (Regular & Irregular)', tag:'قواعد', ref:'EN_SG2_U6_PAST' },
        { t:'Vocabulary — Museums & Describing', tag:'مفردات', ref:'EN_SG2_U6_VOCAB' },
        { t:'Reading — Art of the Pen: Arabic Calligraphy', tag:'قراءة', ref:'EN_SG2_U6_READ' }
      ]},
      { t:'What Happened?', s:'سرد الأحداث والروابط', lessons:[
        { t:'Grammar — There Was/Were + Ago', tag:'قواعد', ref:'EN_SG2_U7_THERE' },
        { t:'Grammar — Pronouns & Conjunctions', tag:'قواعد', ref:'EN_SG2_U7_PRON' },
        { t:'Vocabulary — Feelings & Events', tag:'مفردات', ref:'EN_SG2_U7_VOCAB' },
        { t:'Reading — So You Want to Be Cool', tag:'قراءة', ref:'EN_SG2_U7_READ' }
      ]},
      { t:'What’s Wrong?', s:'الصحة والنصائح', lessons:[
        { t:'Grammar — Should/Shouldn’t & When', tag:'قواعد', ref:'EN_SG2_U8_SHOULD' },
        { t:'Grammar — Pronouns & Possessives', tag:'قواعد', ref:'EN_SG2_U8_PRON' },
        { t:'Vocabulary — Health & Body', tag:'مفردات', ref:'EN_SG2_U8_VOCAB' },
        { t:'Reading — Cold or the Flu?', tag:'قراءة', ref:'EN_SG2_U8_READ' }
      ]}
    ]},
    'g2.s2.en':{ eyebrow:'English · Super Goal 2', units:[
      { t:"Let's Go Out", s:'الاقتراحات والواجبات', lessons:[
        { t:"Grammar — should / why don't / let's", tag:'قواعد', ref:'EN_SG2_U9_SUGGEST' },
        { t:'Grammar — have to / must (الواجب)', tag:'قواعد', ref:'EN_SG2_U9_HAVETO' },
        { t:'Vocabulary — الأعمال المنزلية والخروج', tag:'مفردات', ref:'EN_SG2_U9_VOCAB' },
        { t:'Reading — Someone Has to Do It!', tag:'قراءة', ref:'EN_SG2_U9_READ' }
      ]},
      { t:"It's a Bargain!", s:'التسوّق والملكية', lessons:[
        { t:'Grammar — ضمائر الملكية وwhose', tag:'قواعد', ref:'EN_SG2_U10_POSS' },
        { t:'Grammar — one/ones وtoo والأفعال الناقصة', tag:'قواعد', ref:'EN_SG2_U10_ONEONES' },
        { t:'Vocabulary — التسوّق', tag:'مفردات', ref:'EN_SG2_U10_VOCAB' },
        { t:'Reading — The Best Place to Shop', tag:'قراءة', ref:'EN_SG2_U10_READ' }
      ]},
      { t:"There's No Comparison", s:'المقارنة والتفضيل', lessons:[
        { t:'Grammar — المقارنة والتفضيل', tag:'قواعد', ref:'EN_SG2_U11_COMPARE' },
        { t:'Grammar — so…that / such…that', tag:'قواعد', ref:'EN_SG2_U11_SOTHAT' },
        { t:'Vocabulary — الصفات والتقنية', tag:'مفردات', ref:'EN_SG2_U11_VOCAB' },
        { t:'Reading — Vision 2030', tag:'قراءة', ref:'EN_SG2_U11_READ' }
      ]},
      { t:"It's Going to Be Fun!", s:'العطلات والمستقبل', lessons:[
        { t:'Grammar — المستقبل be going to', tag:'قواعد', ref:'EN_SG2_U12_GOINGTO' },
        { t:'Grammar — الصفات وظروف الحال', tag:'قواعد', ref:'EN_SG2_U12_ADVERBS' },
        { t:'Vocabulary — العطلات والسفر', tag:'مفردات', ref:'EN_SG2_U12_VOCAB' },
        { t:'Reading — The Stones of Al-Ula', tag:'قراءة', ref:'EN_SG2_U12_READ' }
      ]},
      { t:"What's the Weather Like?", s:'الطقس والتنبّؤ', lessons:[
        { t:'Grammar — المستقبل will والتنبّؤ', tag:'قواعد', ref:'EN_SG2_U13_WILL' },
        { t:'Grammar — الجمل الشرطية', tag:'قواعد', ref:'EN_SG2_U13_COND' },
        { t:'Vocabulary — الطقس والفصول', tag:'مفردات', ref:'EN_SG2_U13_VOCAB' },
        { t:"Reading — Can Weather Affect Moods?", tag:'قراءة', ref:'EN_SG2_U13_READ' }
      ]},
      { t:'Could You Do Me a Favor?', s:'الطلبات والعروض', lessons:[
        { t:'Grammar — الطلبات والعروض', tag:'قواعد', ref:'EN_SG2_U14_REQUESTS' },
        { t:'Grammar — want/tell/ask + مفعول + مصدر', tag:'قواعد', ref:'EN_SG2_U14_TELLASK' },
        { t:'Vocabulary — المعروف والمكالمات', tag:'مفردات', ref:'EN_SG2_U14_VOCAB' },
        { t:'Reading — Dear Daughter', tag:'قراءة', ref:'EN_SG2_U14_READ' }
      ]},
      { t:"Today's News", s:'الأخبار والماضي المستمرّ', lessons:[
        { t:'Grammar — الماضي المستمرّ وwhen', tag:'قواعد', ref:'EN_SG2_U15_PASTPROG' },
        { t:'Grammar — could / was able to', tag:'قواعد', ref:'EN_SG2_U15_ABLE' },
        { t:'Vocabulary — الأخبار والسرد', tag:'مفردات', ref:'EN_SG2_U15_VOCAB' },
        { t:'Reading — Age Means Nothing', tag:'قراءة', ref:'EN_SG2_U15_READ' }
      ]},
      { t:'Have You Ever…?', s:'المضارع التامّ والتجارب', lessons:[
        { t:'Grammar — المضارع التامّ (ever/never)', tag:'قواعد', ref:'EN_SG2_U16_PERFECT' },
        { t:'Grammar — التامّ مقابل الماضي البسيط', tag:'قواعد', ref:'EN_SG2_U16_VSPAST' },
        { t:'Vocabulary — التجارب', tag:'مفردات', ref:'EN_SG2_U16_VOCAB' },
        { t:'Reading — Ships of the Desert', tag:'قراءة', ref:'EN_SG2_U16_READ' }
      ]}
    ]},
    'g2.s1.sci':{ eyebrow:'علوم · الثاني متوسط', units:[
      { t:'طبيعة العلم', s:'الوحدة ١ · دراسة المادة', lessons:[
        { t:'أسلوب العلم', tag:'مفاهيم', ref:'SCI_G2_U1_METHOD' },
        { t:'حل المشكلات بطريقة علمية', tag:'مهارة', ref:'SCI_G2_U1_PROBLEM' }
      ]},
      { t:'المخاليط والمحاليل', s:'الوحدة ١ · دراسة المادة', lessons:[
        { t:'المحاليل والذائبية', tag:'مفاهيم', ref:'SCI_G2_U2_SOLUTIONS' },
        { t:'الأحماض والقواعد', tag:'مفاهيم', ref:'SCI_G2_U2_ACIDS' }
      ]},
      { t:'حالات المادة', s:'الوحدة ٢ · المادة والطاقة', lessons:[
        { t:'المادة', tag:'مفاهيم', ref:'SCI_G2_U3_MATTER' },
        { t:'الحرارة وتحولات المادة', tag:'مفاهيم', ref:'SCI_G2_U3_HEAT' },
        { t:'سلوك الموائع', tag:'مفاهيم', ref:'SCI_G2_U3_FLUIDS' }
      ]},
      { t:'الطاقة وتحولاتها', s:'الوحدة ٢ · المادة والطاقة', lessons:[
        { t:'ما الطاقة؟', tag:'مفاهيم', ref:'SCI_G2_U4_ENERGY' },
        { t:'تحولات الطاقة', tag:'مفاهيم', ref:'SCI_G2_U4_TRANSFORM' }
      ]},
      { t:'جهازا الدوران والمناعة', s:'الوحدة ٣ · أجهزة جسم الإنسان', lessons:[
        { t:'جهاز الدوران', tag:'أحياء', ref:'SCI_G2_U5_CIRCULATION' },
        { t:'المناعة والمرض', tag:'أحياء', ref:'SCI_G2_U5_IMMUNITY' }
      ]},
      { t:'الهضم والتنفس والإخراج', s:'الوحدة ٣ · أجهزة جسم الإنسان', lessons:[
        { t:'الجهاز الهضمي والمواد الغذائية', tag:'أحياء', ref:'SCI_G2_U6_DIGESTION' },
        { t:'جهازا التنفس والإخراج', tag:'أحياء', ref:'SCI_G2_U6_RESPIRATION' }
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
    'g2.s2.ar':{ eyebrow:'لغتي الخالدة · الثاني متوسط', units:[
      { t:'حُبُّ الوطن', s:'الدروس اللغوية للوحدة الرابعة', lessons:[
        { t:'الصنف اللغوي — الأفعال الخمسة', tag:'صنف لغوي', ref:'AR_LUGHATI_G2_U4_KHAMSA' },
        { t:'الوظيفة النحوية — المفعول المطلق', tag:'نحو', ref:'AR_LUGHATI_G2_U4_MUTLAQ' },
        { t:'الأسلوب اللغوي — التمنّي', tag:'أسلوب', ref:'AR_LUGHATI_G2_U4_TAMANNI' },
        { t:'الرسم الإملائي — الهمزة الممدودة (المدّة)', tag:'إملاء', ref:'AR_LUGHATI_G2_U4_MADDA' }
      ]},
      { t:'قضايا الشباب', s:'الدروس اللغوية للوحدة الخامسة', lessons:[
        { t:'الصنف اللغوي — المقصور والمنقوص', tag:'صنف لغوي', ref:'AR_LUGHATI_G2_U5_MAQSUR' },
        { t:'الوظيفة النحوية — المفعول لأجله', tag:'نحو', ref:'AR_LUGHATI_G2_U5_LIAJLIH' },
        { t:'الأسلوب اللغوي — الترجّي', tag:'أسلوب', ref:'AR_LUGHATI_G2_U5_TARAJI' },
        { t:'الرسم الإملائي — الألف اللينة في آخر الحروف', tag:'إملاء', ref:'AR_LUGHATI_G2_U5_ALIF' }
      ]},
      { t:'البيئة الصحّية', s:'الدروس اللغوية للوحدة السادسة', lessons:[
        { t:'الصنف اللغوي — الاسم الممدود', tag:'صنف لغوي', ref:'AR_LUGHATI_G2_U6_MAMDUD' },
        { t:'الوظيفة النحوية — المفعول فيه (الظرف)', tag:'نحو', ref:'AR_LUGHATI_G2_U6_FIH' },
        { t:'الأسلوب اللغوي — المدح والذمّ', tag:'أسلوب', ref:'AR_LUGHATI_G2_U6_MADH' },
        { t:'الرسم الإملائي — الألف اللينة في آخر الأسماء', tag:'إملاء', ref:'AR_LUGHATI_G2_U6_ALIF' }
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
      { t:'الهندسة والتحويلات', s:'الفصل الخامس', lessons:[
        { t:'الزوايا وعلاقاتها', tag:'هندسة', ref:'MATH_G2_U5_ANGLES' },
        { t:'الزوايا والمستقيمات المتوازية', tag:'هندسة', ref:'MATH_G2_U5_PARALLEL' },
        { t:'مجموع زوايا المضلّع', tag:'هندسة', ref:'MATH_G2_U5_POLYGON' },
        { t:'المضلّعات المتطابقة', tag:'هندسة', ref:'MATH_G2_U5_CONGRUENT' },
        { t:'الانعكاس', tag:'تحويلات', ref:'MATH_G2_U5_REFLECT' },
        { t:'الانسحاب', tag:'تحويلات', ref:'MATH_G2_U5_TRANSLATE' },
        { t:'الدوران', tag:'تحويلات', ref:'MATH_G2_U5_ROTATE' },
        { t:'التماثل', tag:'تحويلات', ref:'MATH_G2_U5_SYMMETRY' }
      ]}
    ]}
  }
};

/* أيقونة نوع الدرس حسب الوسم */
window.TAG_ICON = {
  'قواعد':'pen','نحو':'pen','مفردات':'book','إملاء':'pen','استماع':'ear',
  'قراءة':'read','مفاهيم':'book','عمليات':'math','أحياء':'sci',
  'أعداد':'math','مهارة':'target','هندسة':'target','تناسب':'math','تشابه':'target','نسبة':'math','تحويلات':'target','جبر':'math'
};
