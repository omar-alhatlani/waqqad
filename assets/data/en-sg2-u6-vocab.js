/* ============================================================
   Lesson: Vocabulary — Museums, Events & Intensifiers
   English · Super Goal 2 · Unit 6 (What Was It Like?) · صفحة ٤٨
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 2).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG2_U6_VOCAB'] = {
    id:'EN_SG2_U6_VOCAB',
    title:'Vocabulary — Museums & Describing',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'Museums · Events · very / really',
      intro:'مفرداتٌ للوصف والأماكن: <code>museum</code> متحف، <code>exhibit</code> معرض، <code>event</code> فعالية، <code>amazing/interesting/boring</code> مذهل/مثير/ممِلّ. ونستعمل <b>المكثِّفات</b> <code>very</code> و<code>really</code> قبل الصفة لتقويتها: <code>It was really amazing!</code>',
      table:[['museum / exhibit','متحف / معرض'],['amazing / interesting','مذهل / مثير للاهتمام'],['boring','ممِلّ'],['very / really + adj','جدًّا / حقًّا (مكثِّفات)']],
      trick:'المكثِّفُ (<code>very / really</code>) يأتي <b>قبل</b> الصفة ليقوّي معناها: <code>very good, really amazing</code>. اسألْ عن التجربة بـ <code>What was it like?</code>'
    },
    stages:[
      { type:'choice', name:'المعنى بالعربية', hint:'اختر المعنى الصحيح', qs:[
        {p:'museum', ask:'المعنى', o:['متحف','مسرح','ملعب'], a:0, w:'<code>museum</code> = متحف.', f:'museum = متحف.'},
        {p:'amazing', ask:'المعنى', o:['مذهل','ممِلّ','صعب'], a:0, w:'<code>amazing</code> = مذهل.', f:'amazing = مذهل.'},
        {p:'boring', ask:'المعنى', o:['ممِلّ','مثير','جميل'], a:0, w:'<code>boring</code> = ممِلّ.', f:'boring = ممِلّ.'},
        {p:'exhibit', ask:'المعنى', o:['معرض','حديقة','مطعم'], a:0, w:'<code>exhibit</code> = معرض/جناح عرض.', f:'exhibit = معرض.'},
        {p:'event', ask:'المعنى', o:['فعالية / حدث','مبنى','رحلة'], a:0, w:'<code>event</code> = فعالية.', f:'event = فعالية.'}
      ]},
      { type:'gap', name:'المكثِّفات', hint:'very / really قبل الصفة', qs:[
        {p:'The museum was ___ interesting. (جدًّا)', o:['very','much','many'], a:0, w:'<code>very</code> قبل الصفة.', f:'<u>very</u> interesting.'},
        {p:'The tour was ___ amazing. (حقًّا)', o:['really','very much','a lot'], a:0, w:'<code>really</code> قبل الصفة.', f:'<u>really</u> amazing.'},
        {p:'What was it ___?', o:['like','as','how'], a:0, w:'السؤال عن التجربة ← <code>What was it like?</code>', f:'What was it <u>like</u>?'},
        {p:'The lines were ___ long. (جدًّا)', o:['very','much','many'], a:0, w:'<code>very</code> قبل الصفة.', f:'<u>very</u> long.'},
        {p:'The film was ___ boring. (حقًّا)', o:['really','very much','so much'], a:0, w:'<code>really</code>.', f:'<u>really</u> boring.'}
      ]},
      { type:'choice', name:'الوصف المناسب', hint:'اختر الصفة حسب المعنى', qs:[
        {p:'You loved the trip. It was:', ask:'اختر', o:['amazing','boring','terrible'], a:0, w:'أحببتَه ← <code>amazing</code>.', f:'amazing.'},
        {p:'You slept from boredom. It was:', ask:'اختر', o:['boring','exciting','great'], a:0, w:'ممِلّ ← <code>boring</code>.', f:'boring.'},
        {p:'The football exhibit caught your interest. It was:', ask:'اختر', o:['interesting','boring','bad'], a:0, w:'مثير للاهتمام ← <code>interesting</code>.', f:'interesting.'},
        {p:'To ask about an experience, you say:', ask:'اختر', o:['What was it like?','Where was it?','Who was it?'], a:0, w:'<code>What was it like?</code>', f:'What was it like?'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['It','was','much','interesting','.'], bad:2, fix:'very', w:'المكثِّفُ قبل الصفة ← <code>very</code>.', f:'It was <u>very</u> interesting.'},
        {words:['The','tour','was','really','.'], bad:3, fix:'really + صفة', w:'المكثِّفُ يحتاج صفةً بعده: <code>really amazing</code>.', f:'was <u>really amazing</u>.'},
        {words:['What','was','it','as','?'], bad:3, fix:'like', w:'السؤال ← <code>What was it like?</code>', f:'What was it <u>like</u>?'},
        {words:['The','museum','was','bored','.'], bad:3, fix:'boring', w:'الشيءُ المُمِلّ ← <code>boring</code> (لا bored).', f:'was <u>boring</u>.'}
      ]},
      { type:'order', name:'ابنِ الجملة', hint:'انقر الكلمات بالترتيب الصحيح', qs:[
        {sol:['The','museum','was','really','amazing','.'], w:'المكثِّف قبل الصفة.', f:'The museum was really amazing.'},
        {sol:['What','was','it','like','?'], w:'سؤالٌ عن التجربة.', f:'What was it like?'},
        {sol:['The','exhibit','was','very','interesting','.'], w:'very + الصفة.', f:'The exhibit was very interesting.'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'museum', ask:'المعنى', o:['متحف','ملعب'], a:0, w:'متحف.', f:'museum = متحف.'},
        {p:'The museum was ___ interesting.', ask:'اختر', o:['very','much'], a:0, w:'very قبل الصفة.', f:'<u>very</u>.'},
        {p:'amazing', ask:'المعنى', o:['مذهل','ممِلّ'], a:0, w:'مذهل.', f:'amazing = مذهل.'},
        {p:'What was it ___?', ask:'اختر', o:['like','as'], a:0, w:'What was it like?', f:'<u>like</u>.'},
        {p:'boring', ask:'المعنى', o:['ممِلّ','مثير'], a:0, w:'ممِلّ.', f:'boring = ممِلّ.'},
        {sol:['What','was','it','like','?'], w:'سؤالٌ عن التجربة.', f:'What was it like?'},
        {p:'The tour was ___ amazing.', ask:'اختر', o:['really','much'], a:0, w:'really.', f:'<u>really</u>.'},
        {p:'exhibit', ask:'المعنى', o:['معرض','مطعم'], a:0, w:'معرض.', f:'exhibit = معرض.'},
        {p:'You loved it. It was:', ask:'اختر', o:['amazing','boring'], a:0, w:'مذهل.', f:'amazing.'}
      ]}
    ]
  };
})();
