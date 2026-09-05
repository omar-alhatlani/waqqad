/* ============================================================
   Lesson: like + Infinitive / Gerund
   English · Super Goal 1 · Unit 12 (What Can You Do There?) · صفحة ١٠٤
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 1). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG1_U12_LIKE'] = {
    id:'EN_SG1_U12_LIKE',
    title:'like + Infinitive / Gerund',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'like to do / like doing',
      intro:'بعد أفعال الميل مثل <code>like, love, enjoy</code> نستعمل <b>المصدر</b> (<code>to + verb</code>) أو <b>الاسم الفعليّ</b> (<code>verb + -ing</code>): <code>I like to read = I like reading</code>. مع الغائب المفرد يأخذ الفعلُ <code>-s</code>: <code>He likes to swim</code>. والنفي والسؤال بـ <code>do/does</code>: <code>Do you like…? / She doesn’t like…</code>',
      table:[['+','I like to read. / I like reading.'],['he/she','He likes to swim.'],['–','I don’t like to run.'],['?','Do you like to swim?']],
      trick:'بعد <code>like</code> إمّا <code>to + verb</code> أو <code>verb + -ing</code> — كلاهما صحيح. أمّا <code>enjoy</code> فيأتي بعده <code>-ing</code> فقط: <code>enjoy reading</code>.'
    },
    stages:[
      { type:'choice', name:'to + verb', hint:'المصدر بعد like', qs:[
        {p:'I like ___ books.', o:['to read','read','reads','readed'], a:0, w:'المصدر ← <code>to read</code>.', f:'like <u>to read</u>'},
        {p:'She likes ___ tennis.', o:['to play','play','plays','played'], a:0, w:'<code>to play</code>.', f:'likes <u>to play</u>'},
        {p:'We love ___ to the beach.', o:['to go','go','goes','going to'], a:0, w:'<code>to go</code>.', f:'love <u>to go</u>'},
        {p:'An infinitive is:', o:['to + verb','verb + s','verb + ed'], a:0, w:'<code>to + verb</code>.', f:'<u>to + verb</u>'}
      ]},
      { type:'choice', name:'verb + -ing', hint:'الاسم الفعليّ', qs:[
        {p:'I enjoy ___ football.', o:['playing','to play','play','plays'], a:0, w:'بعد <code>enjoy</code> ← <code>-ing</code>.', f:'enjoy <u>playing</u>'},
        {p:'She likes ___ (نفس معنى to read).', o:['reading','to reads','read','reads'], a:0, w:'<code>reading</code> = <code>to read</code>.', f:'likes <u>reading</u>'},
        {p:'They enjoy ___ TV.', o:['watching','to watch only','watch','watches'], a:0, w:'<code>enjoy + -ing</code>.', f:'enjoy <u>watching</u>'},
        {p:'We love ___ in the pool.', o:['swimming','to swims','swim','swims'], a:0, w:'<code>swimming</code>.', f:'love <u>swimming</u>'}
      ]},
      { type:'choice', name:'النفي والسؤال', hint:'do/does', qs:[
        {p:'___ you like to swim?', o:['Do','Does','Are','Can'], a:0, w:'<code>you</code> ← <code>Do</code>.', f:'<u>Do</u> you like to swim?'},
        {p:'___ he like to cook?', o:['Does','Do','Is','Can'], a:0, w:'<code>he</code> ← <code>Does</code>.', f:'<u>Does</u> he like to cook?'},
        {p:'She ___ like to run.', o:['doesn’t','don’t','isn’t','not'], a:0, w:'<code>doesn’t</code>.', f:'She <u>doesn’t</u> like to run.'},
        {p:'He ___ to swim. (مفرد مثبت)', o:['likes','like','liking','to like'], a:0, w:'الغائب المفرد ← <code>likes</code>.', f:'He <u>likes</u> to swim.'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['I','like','read','books','.'], bad:2, fix:'to read / reading', w:'بعد <code>like</code> ← <code>to read</code> أو <code>reading</code>.', f:'I like <u>to read</u> books.'},
        {words:['He','like','to','swim','.'], bad:1, fix:'likes', w:'الغائب المفرد ← <code>likes</code>.', f:'He <u>likes</u> to swim.'},
        {words:['She','doesn’t','likes','to','run','.'], bad:2, fix:'like', w:'بعد <code>doesn’t</code> ← مجرّد <code>like</code>.', f:'She doesn’t <u>like</u> to run.'},
        {words:['I','enjoy','to','play','football','.'], bad:2, fix:'playing', w:'بعد <code>enjoy</code> ← <code>-ing</code>.', f:'I enjoy <u>playing</u> football.'}
      ]},
      { type:'order', name:'رتّب الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['I','like','to','read','books','.'], w:'<code>like + to + verb</code>.', f:'I like to read books.'},
        {sol:['She','likes','to','play','tennis','.'], w:'الغائب المفرد ← <code>likes</code>.', f:'She likes to play tennis.'},
        {sol:['Do','you','like','to','swim','?'], w:'<code>Do</code> في المقدمة.', f:'Do you like to swim?'},
        {sol:['I','enjoy','playing','football','.'], w:'<code>enjoy + -ing</code>.', f:'I enjoy playing football.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'I like ___ books.', ask:'اختر', o:['to read','read'], a:0, w:'المصدر.', f:'<u>to read</u>'},
        {p:'He ___ to swim.', ask:'اختر', o:['likes','like'], a:0, w:'مفرد.', f:'<u>likes</u>'},
        {p:'I enjoy ___ football.', ask:'اختر', o:['playing','to play'], a:0, w:'<code>enjoy + -ing</code>.', f:'<u>playing</u>'},
        {p:'___ you like to swim?', ask:'اختر', o:['Do','Does'], a:0, w:'<code>Do</code>.', f:'<u>Do</u>'},
        {p:'___ he like to cook?', ask:'اختر', o:['Does','Do'], a:0, w:'<code>Does</code>.', f:'<u>Does</u>'},
        {p:'She ___ like to run.', ask:'اختر', o:['doesn’t','don’t'], a:0, w:'<code>doesn’t</code>.', f:'<u>doesn’t</u>'},
        {sol:['I','like','to','read','.'], w:'<code>like + to + verb</code>.', f:'I like to read.'},
        {p:'An infinitive is ___.', ask:'اختر', o:['to + verb','verb + s'], a:0, w:'<code>to + verb</code>.', f:'<u>to + verb</u>'},
        {p:'We love ___ to the beach.', ask:'اختر', o:['to go','goes'], a:0, w:'المصدر.', f:'<u>to go</u>'}
      ]}
    ]
  };
})();
