/* ============================================================
   Lesson: Vocabulary — Inventions & Technology
   English · Super Goal 3 · Unit 5 (Since When?) · صفحات ٤٨–٤٩
   من كتاب الوزارة طبعة ١٤٤٨ (Super Goal 3). lang:'en'.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_SG3_U5_VOCAB'] = {
    id:'EN_SG3_U5_VOCAB',
    title:'Vocabulary — Inventions',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'Inventions & Technology Words',
      intro:'مفرداتٌ عن الاختراعات والتقنية: <code>invention</code> اختراع، <code>invent</code> يخترع، <code>high-tech</code> عالي التقنية، <code>portable</code> محمول، <code>device</code> جهاز، <code>widespread</code> واسع الانتشار، <code>feature</code> ميزة، <code>consumer</code> مستهلك.',
      table:[['invention','اختراع'],['portable','محمول / سهل الحمل'],['device','جهاز'],['widespread','واسع الانتشار'],['feature','ميزة / خاصّية']],
      trick:'<code>invent</code> فعلٌ، و<code>invention</code> اسمٌ، و<code>inventor</code> المخترِع. و<code>portable</code> = يمكن حملُه (portable printer).'
    },
    stages:[
      { type:'choice', name:'المعنى', hint:'اختر المعنى الصحيح', qs:[
        {p:'“portable” means:', o:['easy to carry','very heavy','very old'], a:0, w:'يمكن حملُه.', f:'portable = <u>easy to carry</u>'},
        {p:'A “device” is a:', o:['machine or tool','person','place'], a:0, w:'جهاز.', f:'device = <u>machine/tool</u>'},
        {p:'“high-tech” means:', o:['using advanced technology','very cheap','hand-made'], a:0, w:'عالي التقنية.', f:'high-tech = <u>advanced technology</u>'},
        {p:'“widespread” means:', o:['common everywhere','rare','broken'], a:0, w:'واسع الانتشار.', f:'widespread = <u>common everywhere</u>'},
        {p:'An “inventor” is a person who:', o:['creates new things','sells old things','fixes cars'], a:0, w:'مخترِع.', f:'inventor → <u>creates new things</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'The printing press was a great ___.', o:['invention','instrument','instruction'], a:0, w:'اختراع.', f:'a great <u>invention</u>'},
        {p:'Small, ___ printers can be found everywhere.', o:['portable','poison','painful'], a:0, w:'محمولة.', f:'<u>portable</u> printers'},
        {p:'The TV became a common household ___.', o:['device','desert','decade'], a:0, w:'جهاز.', f:'household <u>device</u>'},
        {p:'Laptops now contain more ___.', o:['features','farmers','forests'], a:0, w:'ميزات.', f:'more <u>features</u>'},
        {p:'___ lined up to buy the first cell phones.', o:['Consumers','Cameras','Countries'], a:0, w:'المستهلكون.', f:'<u>Consumers</u> lined up'}
      ]},
      { type:'choice', name:'invent / invention', hint:'فعل أم اسم؟', qs:[
        {p:'Gutenberg ___ the printing press.', o:['invented','invention','inventor'], a:0, w:'فعلٌ ماضٍ ← <code>invented</code>.', f:'<u>invented</u>'},
        {p:'The microwave oven was a useful ___.', o:['invention','invent','invented'], a:0, w:'اسمٌ ← <code>invention</code>.', f:'a useful <u>invention</u>'},
        {p:'Percy Spencer was the ___ of the microwave.', o:['inventor','invention','invent'], a:0, w:'المخترِع ← <code>inventor</code>.', f:'the <u>inventor</u>'},
        {p:'Cell phones have become a necessary part of ___ life.', o:['everyday','everywhere','everyone'], a:0, w:'الحياة اليومية.', f:'<u>everyday</u> life'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['The','phone','is','a','portable','device','.'], bad:4, fix:'صحيحة — انقر «invention» إن وُجدت', w:'الجملةُ صحيحة؛ لكنِ انتبهْ: <code>portable</code> = محمول.', f:'a <u>portable</u> device ✓'},
        {words:['Gutenberg','invention','the','press','.'], bad:1, fix:'invented', w:'نحتاج فعلًا ← <code>invented</code>.', f:'Gutenberg <u>invented</u> the press.'},
        {words:['A','high-technology','printer','is','small','.'], bad:1, fix:'high-tech', w:'الصفة ← <code>high-tech</code>.', f:'A <u>high-tech</u> printer'},
        {words:['TVs','became','widespread','in','home','.'], bad:4, fix:'homes', w:'الجمع ← <code>homes</code>.', f:'in <u>homes</u>'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'“portable” =', ask:'المعنى', o:['easy to carry','heavy'], a:0, w:'محمول.', f:'<u>easy to carry</u>'},
        {p:'a machine or tool =', ask:'الكلمة', o:['device','feature'], a:0, w:'جهاز.', f:'<u>device</u>'},
        {p:'“high-tech” =', ask:'المعنى', o:['advanced technology','hand-made'], a:0, w:'عالي التقنية.', f:'<u>advanced technology</u>'},
        {p:'“widespread” =', ask:'المعنى', o:['common everywhere','rare'], a:0, w:'واسع الانتشار.', f:'<u>common everywhere</u>'},
        {p:'Gutenberg ___ the press.', ask:'اختر', o:['invented','invention'], a:0, w:'فعل.', f:'<u>invented</u>'},
        {p:'A useful ___.', ask:'اختر', o:['invention','invent'], a:0, w:'اسم.', f:'<u>invention</u>'},
        {p:'the ___ of the microwave', ask:'اختر', o:['inventor','invention'], a:0, w:'المخترِع.', f:'<u>inventor</u>'},
        {p:'laptops have many ___.', ask:'اختر', o:['features','farmers'], a:0, w:'ميزات.', f:'<u>features</u>'},
        {p:'___ bought the first phones.', ask:'اختر', o:['Consumers','Cameras'], a:0, w:'المستهلكون.', f:'<u>Consumers</u>'}
      ]}
    ]
  };
})();
