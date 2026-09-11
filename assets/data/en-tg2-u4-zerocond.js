/* ============================================================
   درس: Grammar — Zero Conditional (الشرط الصفريّ)
   الإنجليزية · الخامس الابتدائي · ف١ · Top Goal 2 · Unit 4 (Glorious Food)
   القاعدةُ حقيقةٌ لغويةٌ عامّة، والأمثلةُ مؤلَّفةٌ أصالةً (لا تُنقل من الكتاب).
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG2_U4_ZEROCOND'] = {
    id:'EN_TG2_U4_ZEROCOND',
    title:'Grammar — Zero Conditional',
    lang:'en',
    rule:{
      tag:'القاعدة',
      title:'الشرطُ الصفريّ (الحقائق)',
      intro:'<b>الشرطُ الصفريّ</b> يعبّرُ عن حقيقةٍ ثابتةٍ أو نتيجةٍ مؤكّدةٍ تحدثُ دائمًا. التركيب: <span class="tok-focus">if</span> + الفعلُ المضارع، و<b>النتيجةُ مضارعٌ</b> أيضًا (كِلا الطرفين مضارع). مثال: «<span class="tok-focus">If</span> you heat ice, it melts». ويمكنُ تقديمُ النتيجة: «It melts <span class="tok-focus">if</span> you heat it».',
      formula:'<span class="tok-focus">If</span> + present , present',
      table:[['الشرط','<span class="tok-focus">If</span> you mix them,'],['النتيجة','you get orange.'],['كلاهما','مضارعٌ بسيط'],['المعنى','حقيقةٌ تحدثُ دائمًا']],
      examples:['<span class="tok-focus">If</span> you add sugar, the drink tastes sweet.','Ice melts <span class="tok-focus">if</span> the sun is hot.'],
      trick:'الشرطُ الصفريُّ: كِلا طرفيه <b>مضارعٌ</b> (If + present, present) — لأنّه حقيقةٌ ثابتة، لا مستقبل.'
    },
    stages:[
      { type:'choice', name:'الفعلُ الصحيح', hint:'كِلا الطرفين مضارع', qs:[
        {p:'If you heat ice, it ___ .', ask:'اختر', o:['melts','will melt'], a:0, w:'شرطٌ صفريّ ← النتيجةُ مضارع.', f:'... it <u>melts</u>.'},
        {p:'If you ___ sugar, tea tastes sweet.', ask:'اختر', o:['add','will add'], a:0, w:'بعد if مضارع.', f:'If you <u>add</u> sugar ...'},
        {p:'Plants grow if you ___ them.', ask:'اختر', o:['water','will water'], a:0, w:'مضارع.', f:'... if you <u>water</u> them.'}
      ]},
      { type:'gap', name:'أكمل الشرط', hint:'مضارعٌ في الطرفين', qs:[
        {p:'If you mix blue and yellow, you ___ green.', o:['get','will get','got'], a:0, w:'النتيجةُ مضارع ← get.', f:'... you <u>get</u> green.'},
        {p:'Water ___ if the temperature is 100°. (boil)', o:['boils','will boil'], a:0, w:'حقيقة ← boils.', f:'Water <u>boils</u> ...'},
        {p:'If ice ___ warm, it melts.', o:['gets','will get'], a:0, w:'بعد if مضارع.', f:'If ice <u>gets</u> warm ...'}
      ]},
      { type:'error', name:'اكتشف الخطأ', hint:'انقر الكلمة الخاطئة', qs:[
        {words:['If','you','heat','ice',',','it','will','melt','.'], bad:6, fix:'تُحذف (melts)', w:'الشرطُ الصفريُّ نتيجتُه مضارعٌ ← <code>it melts</code>.', f:'..., it <u>melts</u>.'},
        {words:['If','you','will','add','salt',',','it','tastes','salty','.'], bad:2, fix:'تُحذف', w:'بعد if مضارعٌ بلا will.', f:'<u>If you add</u> salt, ...'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'If you heat ice, it ___ .', ask:'اختر', o:['melts','will melt'], a:0, w:'مضارع.', f:'← <u>melts</u>'},
        {p:'الشرطُ الصفريُّ طرفاه:', ask:'اختر', o:['مضارعٌ ومضارع','مضارعٌ وwill'], a:0, w:'كلاهما مضارع.', f:'← <u>مضارعٌ ومضارع</u>'},
        {p:'If you ___ sugar, it is sweet.', ask:'اختر', o:['add','will add'], a:0, w:'مضارع.', f:'← <u>add</u>'},
        {p:'يعبّرُ الشرطُ الصفريُّ عن:', ask:'اختر', o:['حقيقةٍ ثابتة','خطّةٍ مستقبلية'], a:0, w:'حقيقةٌ دائمة.', f:'← <u>حقيقةٍ ثابتة</u>'}
      ]}
    ]
  };
})();
