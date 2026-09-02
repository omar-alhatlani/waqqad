/* ============================================================
   درس: الفعل be (am/is/are) — Super Goal 1 · Unit 1
   ست مراحل متدرّجة + تحدٍّ نهائي بشهادة إتقان.
   البيانات منقولة من «سيّد الفعل be» ومعادة هيكلتها لمحرّك وقّاد.
   ============================================================ */
(function(){
  var WHY_AM  = 'الضمير <code>I</code> يأخذ <code>am</code> دائمًا — وحده لا يشاركه غيره.';
  var WHY_IS  = 'المفرد الغائب (<code>he</code> / <code>she</code> / <code>it</code> أو اسم مفرد) يأخذ <code>is</code>.';
  var WHY_ARE = 'الجمع و<code>you</code> يأخذان <code>are</code> — والقاعدة: ما ليس <code>I</code> ولا مفردًا غائبًا فهو <code>are</code>.';

  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U1_VERBBE'] = {
    id:'EN_SG1_U1_VERBBE',
    title:'الفعل be — am / is / are',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'الفعل be — am / is / are',
      table:[['I','am'],['He · She · It','is'],['You · We · They','are']],
      trick:'«أنا وحدي <span class="en">am</span> ، والمفرد الغائب <span class="en">is</span> ، وما تبقّى <span class="en">are</span>.»'
    },
    stages:[
      { type:'choice', name:'الضمير والشكل الصحيح', hint:'أيّ شكل من be يناسب هذا الضمير؟', qs:[
        {p:'I',    o:['am','is','are'], a:0, w:WHY_AM,  f:'I <u>am</u>'},
        {p:'He',   o:['am','is','are'], a:1, w:WHY_IS,  f:'He <u>is</u>'},
        {p:'They', o:['am','is','are'], a:2, w:WHY_ARE, f:'They <u>are</u>'},
        {p:'She',  o:['am','is','are'], a:1, w:WHY_IS,  f:'She <u>is</u>'},
        {p:'You',  o:['am','is','are'], a:2, w:WHY_ARE, f:'You <u>are</u>'},
        {p:'It',   o:['am','is','are'], a:1, w:WHY_IS,  f:'It <u>is</u>'},
        {p:'We',   o:['am','is','are'], a:2, w:WHY_ARE, f:'We <u>are</u>'},
        {p:'I',    o:['are','am','is'], a:1, w:WHY_AM,  f:'I <u>am</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'جمل من سياق وحدة التعارف', qs:[
        {p:'I ___ Ahmed.',                o:['am','is','are'], a:0, w:WHY_AM,  f:'I <u>am</u> Ahmed.'},
        {p:'She ___ my sister.',          o:['am','is','are'], a:1, w:WHY_IS,  f:'She <u>is</u> my sister.'},
        {p:'They ___ from Saudi Arabia.', o:['am','is','are'], a:2, w:WHY_ARE, f:'They <u>are</u> from Saudi Arabia.'},
        {p:'We ___ in grade seven.',      o:['am','is','are'], a:2, w:WHY_ARE, f:'We <u>are</u> in grade seven.'},
        {p:'My name ___ Faisal.',         o:['am','is','are'], a:1, w:'<code>My name</code> اسم مفرد يعادل <code>it</code> ← يأخذ <code>is</code>. لا تخدعك كلمة <code>my</code>.', f:'My name <u>is</u> Faisal.'},
        {p:'You ___ my new friend.',      o:['am','is','are'], a:2, w:WHY_ARE, f:'You <u>are</u> my new friend.'},
        {p:'It ___ a new English book.',  o:['am','is','are'], a:1, w:WHY_IS,  f:'It <u>is</u> a new English book.'},
        {p:'Ali and Omar ___ students.',  o:['am','is','are'], a:2, w:'<code>Ali and Omar</code> شخصان = جمع يعادل <code>they</code> ← <code>are</code>.', f:'Ali and Omar <u>are</u> students.'},
        {p:'I ___ twelve years old.',     o:['am','is','are'], a:0, w:WHY_AM + ' وانتبه: العمر بالإنجليزية بالفعل <code>be</code> لا <code>have</code>.', f:'I <u>am</u> twelve years old.'},
        {p:'Sara and I ___ classmates.',  o:['am','is','are'], a:2, w:'وجود <code>I</code> لا يعني <code>am</code> هنا — <code>Sara and I</code> اثنان = <code>we</code> ← <code>are</code>. هذا أخطر فخّ في القاعدة.', f:'Sara and I <u>are</u> classmates.'}
      ]},
      { type:'gap', name:'الاختصارات', hint:'كيف نختصر هذه في الكلام؟', qs:[
        {p:'I am  →  ?',       o:["I'm","Im","I're","I's"],              a:0, w:"نحذف <code>a</code> ونضع الفاصلة العليا مكانها: <code>I am → I'm</code>.", f:"I am → <u>I'm</u>"},
        {p:'He is  →  ?',      o:["He's","Hes","He're","He'is"],         a:0, w:"نحذف <code>i</code> من <code>is</code>: <code>He is → He's</code>.", f:"He is → <u>He's</u>"},
        {p:'They are  →  ?',   o:["They're","Theyre","They's","They'are"], a:0, w:"نحذف <code>a</code> من <code>are</code>: <code>They are → They're</code>.", f:"They are → <u>They're</u>"},
        {p:'It is  →  ?',      o:["It's","Its","It're","Itis"],          a:0, w:"انتبه للفرق: <code>It's</code> بفاصلة = <code>it is</code> ، أمّا <code>its</code> بلا فاصلة فتعني «الخاصّ به».", f:"It is → <u>It's</u>"},
        {p:'We are  →  ?',     o:["We're","Wer","We's","Weare"],         a:0, w:"كلّ <code>are</code> تُختصر إلى <code>'re</code>.", f:"We are → <u>We're</u>"},
        {p:'She is not  →  ?', o:["She isn't","She amn't","She aren't","She not's"], a:0, w:"مع <code>is</code> يكون النفي المختصر <code>isn't</code>.", f:"She is not → <u>She isn't</u>"},
        {p:'You are not  →  ?',o:["You aren't","You isn't","You amn't","You not're"], a:0, w:"مع <code>are</code> يكون النفي المختصر <code>aren't</code>.", f:"You are not → <u>You aren't</u>"},
        {p:'I am not  →  ?',   o:["I'm not","I amn't","I aren't","I isn't"], a:0, w:"⚠️ الاستثناء الوحيد: <b>لا وجود لـ</b> <code>amn't</code> في الإنجليزية. نختصر الضمير لا النفي: <code>I'm not</code>.", f:"I am not → <u>I'm not</u>"}
      ]},
      { type:'gap', name:'النفي والسؤال', hint:'رتّب الفعل في مكانه الصحيح', qs:[
        {p:'He is a teacher.  →  النفي؟', o:['He is not a teacher.','He not is a teacher.','He no is a teacher.','Not he is a teacher.'], a:0, w:'<code>not</code> تأتي <b>بعد</b> الفعل <code>be</code> مباشرة.', f:'He is <u>not</u> a teacher.'},
        {p:'You are ready.  →  السؤال؟',  o:['Are you ready?','You are ready?','Do you are ready?','Are ready you?'], a:0, w:'في السؤال يتقدّم الفعل <code>be</code> على الفاعل. ولا نستخدم <code>do</code> مع <code>be</code> أبدًا.', f:'<u>Are you</u> ready?'},
        {p:'I am late.  →  السؤال؟',      o:['Am I late?','Do I am late?','I am late?','Am late I?'], a:0, w:'نفس القاعدة: <code>Am</code> ثم الفاعل <code>I</code>.', f:'<u>Am I</u> late?'},
        {p:'___ she your sister?',        o:['Is','Are','Am','Do'], a:0, w:WHY_IS + ' والفعل يتقدّم في السؤال.', f:'<u>Is</u> she your sister?'},
        {p:'___ they in class?',          o:['Are','Is','Am','Does'], a:0, w:WHY_ARE, f:'<u>Are</u> they in class?'},
        {p:'They are students.  →  النفي؟', o:['They are not students.','They not are students.','They are no students.',"They don't are students."], a:0, w:"<code>not</code> بعد <code>are</code> — ولا نستخدم <code>don't</code> مع الفعل <code>be</code>.", f:'They are <u>not</u> students.'},
        {p:'Yes, ___ .  (Are you a student?)', o:['I am','I are','I is','am I'], a:0, w:"في الإجابة القصيرة نعيد الضمير ثم الفعل: <code>Yes, I am</code>. ولا نختصرها إلى <code>Yes, I'm</code>.", f:'Yes, <u>I am</u>.'},
        {p:'No, ___ .  (Is he your brother?)', o:["he isn't","he not is","isn't he","he aren't"], a:0, w:"في الإجابة القصيرة بالنفي: الضمير ثم الفعل المنفيّ المختصر <code>he isn't</code>.", f:"No, <u>he isn't</u>."}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة في الجملة', qs:[
        {words:['She','are','my','friend','.'],        bad:1, fix:'is',  w:'<code>she</code> مفرد غائب ← <code>is</code> لا <code>are</code>.', f:'She <u>is</u> my friend.'},
        {words:['I','is','from','Onaizah','.'],         bad:1, fix:'am',  w:'<code>I</code> لا تأخذ إلا <code>am</code>.', f:'I <u>am</u> from Onaizah.'},
        {words:['They','is','my','classmates','.'],     bad:1, fix:'are', w:'<code>they</code> جمع ← <code>are</code>.', f:'They <u>are</u> my classmates.'},
        {words:['He','am','a','new','student','.'],     bad:1, fix:'is',  w:'<code>am</code> حكرٌ على <code>I</code> وحدها.', f:'He <u>is</u> a new student.'},
        {words:['You','is','my','English','teacher','.'], bad:1, fix:'are', w:'<code>you</code> تأخذ <code>are</code> سواء للمفرد أو الجمع.', f:'You <u>are</u> my English teacher.'},
        {words:['My','friends','is','here','.'],        bad:2, fix:'are', w:'الفاعل <code>my friends</code> جمع (بدليل <code>s</code>) ← <code>are</code>.', f:'My friends <u>are</u> here.'},
        {words:['Do','you','are','a','student','?'],    bad:0, fix:'تُحذف نهائيًّا', w:'لا نستخدم <code>do</code> مع الفعل <code>be</code> إطلاقًا — الفعل نفسه هو الذي يتقدّم.', f:'<u>Are</u> you a student?'},
        {words:['I',"amn't",'ready','.'],               bad:1, fix:"'m not", w:"<code>amn't</code> غير موجودة في الإنجليزية. الصواب <code>I'm not</code>.", f:"<u>I'm not</u> ready."}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['I','am','Ahmed','.'],            w:'الترتيب الأساسي: فاعل + فعل be + بقيّة الجملة.', f:'I am Ahmed.'},
        {sol:['She','is','my','teacher','.'],   w:'فاعل مفرد غائب + <code>is</code>.', f:'She is my teacher.'},
        {sol:['We','are','good','friends','.'], w:'<code>we</code> جمع ← <code>are</code>.', f:'We are good friends.'},
        {sol:['Are','you','from','Riyadh','?'], w:'في السؤال يتقدّم الفعل <code>be</code> على الفاعل، وتنتهي بعلامة استفهام.', f:'Are you from Riyadh?'},
        {sol:['He','is','not','in','class','.'],w:'<code>not</code> تأتي مباشرة بعد <code>is</code>.', f:'He is not in class.'},
        {sol:['My','name','is','Omar','.'],     w:'<code>my name</code> فاعل مفرد ← <code>is</code>.', f:'My name is Omar.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'Sara and I ___ classmates.', ask:'اختر الشكل الصحيح من الفعل be', o:['am','is','are'], a:2, w:'<code>Sara and I</code> اثنان = <code>we</code> ← <code>are</code>.', f:'Sara and I <u>are</u> classmates.'},
        {p:'He',   ask:'اختر الشكل الصحيح من الفعل be', o:['am','is','are'], a:1, w:WHY_IS, f:'He <u>is</u>'},
        {p:'I am not  →  ?', ask:'اختر الاختصار الصحيح', o:["I'm not","I amn't","I aren't","I isn't"], a:0, w:"لا وجود لـ <code>amn't</code> — الصواب <code>I'm not</code>.", f:"I am not → <u>I'm not</u>"},
        {p:'You are ready.', ask:'حوّل الجملة إلى سؤال', o:['Are you ready?','You are ready?','Do you are ready?','Are ready you?'], a:0, w:'يتقدّم الفعل <code>be</code> في السؤال، ولا <code>do</code> مع <code>be</code>.', f:'<u>Are you</u> ready?'},
        {p:'My name ___ Faisal.', ask:'اختر الشكل الصحيح من الفعل be', o:['am','is','are'], a:1, w:'<code>My name</code> اسم مفرد ← <code>is</code>.', f:'My name <u>is</u> Faisal.'},
        {p:'___ she your sister?', ask:'اختر الشكل الصحيح من الفعل be', o:['Is','Are','Am','Do'], a:0, w:WHY_IS + ' والفعل يتقدّم في السؤال.', f:'<u>Is</u> she your sister?'},
        {p:'They are students.', ask:'حوّل الجملة إلى النفي', o:['They are not students.','They not are students.','They are no students.',"They don't are students."], a:0, w:"<code>not</code> بعد <code>are</code> — ولا <code>don't</code> مع <code>be</code>.", f:'They are <u>not</u> students.'},
        {p:'Ali and Omar ___ students.', ask:'اختر الشكل الصحيح من الفعل be', o:['am','is','are'], a:2, w:'جمع يعادل <code>they</code> ← <code>are</code>.', f:'Ali and Omar <u>are</u> students.'},
        {p:'You', ask:'اختر الشكل الصحيح من الفعل be', o:['am','is','are'], a:2, w:WHY_ARE, f:'You <u>are</u>'},
        {p:'Yes, ___ .  (Are you a student?)', ask:'أكمل الإجابة القصيرة', o:['I am','I are','I is','am I'], a:0, w:'الإجابة القصيرة: الضمير ثم الفعل — <code>Yes, I am</code>.', f:'Yes, <u>I am</u>.'}
      ]}
    ]
  };
})();
