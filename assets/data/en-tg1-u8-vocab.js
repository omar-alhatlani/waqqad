/* ============================================================
   درس: Vocabulary — Weather
   الإنجليزية · الرابع الابتدائي · ف١ · Top Goal 1 · Unit 8 (Weather)
   مفرداتُ الوحدة (حقائقُ معجميّة)، والجملُ التوضيحيّة مؤلَّفةٌ أصالةً.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG1_U8_VOCAB'] = {
    id:'EN_TG1_U8_VOCAB',
    title:'Vocabulary — Weather',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'الطقسُ والفصول',
      intro:'مفرداتٌ عن <b>حالاتِ الطقسِ والفصول</b>. أتقِنْها لتصفَ الجوَّ في كلِّ فصل.',
      table:[['sunny · cloudy','مُشمِس · غائم'],['rainy · windy','ممطر · عاصف'],['hot · cold · warm · cool','حارّ · بارد · دافئ · معتدل'],['snow · ice · rainbow','ثلج · جليد · قوسُ قزح'],['summer · winter','صيف · شتاء'],['season · temperature','فصل · درجةُ الحرارة']],
      examples:['In <code>summer</code> the weather is <code>hot</code> and <code>sunny</code>. (في الصيفِ الجوُّ حارٌّ ومُشمِس.)','After the rain, we saw a <code>rainbow</code>. (بعدَ المطرِ رأينا قوسَ قزح.)'],
      trick:'أضِفْ <span class="en">-y</span> لتصنعَ صفةَ طقس: <span class="en">sun → sunny</span> ، <span class="en">cloud → cloudy</span> ، <span class="en">rain → rainy</span> ، <span class="en">wind → windy</span>.'
    },
    stages:[
      { type:'choice', name:'الكلمة ← المعنى', hint:'اختر المعنى العربيّ', qs:[
        {p:'sunny', ask:'المعنى؟', o:['مُشمِس','غائم'], a:0, w:'<code>sunny</code> = مُشمِس.', f:'← <u>مُشمِس</u>'},
        {p:'rainy', ask:'المعنى؟', o:['ممطر','عاصف'], a:0, w:'<code>rainy</code> = ممطر.', f:'← <u>ممطر</u>'},
        {p:'cold', ask:'المعنى؟', o:['بارد','حارّ'], a:0, w:'<code>cold</code> = بارد.', f:'← <u>بارد</u>'},
        {p:'snow', ask:'المعنى؟', o:['ثلج','جليد'], a:0, w:'<code>snow</code> = ثلج.', f:'← <u>ثلج</u>'},
        {p:'summer', ask:'المعنى؟', o:['صيف','شتاء'], a:0, w:'<code>summer</code> = صيف.', f:'← <u>صيف</u>'}
      ]},
      { type:'choice', name:'المعنى ← الكلمة', hint:'اختر الإنجليزية', qs:[
        {p:'غائم', ask:'الكلمة؟', o:['cloudy','sunny'], a:0, w:'<code>cloudy</code>.', f:'← <u>cloudy</u>'},
        {p:'عاصف', ask:'الكلمة؟', o:['windy','rainy'], a:0, w:'<code>windy</code>.', f:'← <u>windy</u>'},
        {p:'قوسُ قزح', ask:'الكلمة؟', o:['rainbow','ice'], a:0, w:'<code>rainbow</code>.', f:'← <u>rainbow</u>'},
        {p:'شتاء', ask:'الكلمة؟', o:['winter','summer'], a:0, w:'<code>winter</code>.', f:'← <u>winter</u>'},
        {p:'دافئ', ask:'الكلمة؟', o:['warm','cool'], a:0, w:'<code>warm</code>.', f:'← <u>warm</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'It is very ___ in summer; wear light clothes.', o:['hot','cold','snowy'], a:0, w:'الصيفُ حارّ ← <code>hot</code>.', f:'... very <u>hot</u> in summer.'},
        {p:'In winter it can ___ on the mountains.', o:['snow','sun','rainbow'], a:0, w:'الشتاءُ يُثلج ← <code>snow</code>.', f:'... it can <u>snow</u> ...'},
        {p:'It is ___ today; hold your hat!', o:['windy','sunny','warm'], a:0, w:'الرياحُ ← <code>windy</code>.', f:'It is <u>windy</u> today.'},
        {p:'After the rain, a beautiful ___ appeared.', o:['rainbow','ice','cloud'], a:0, w:'قوسُ قزح ← <code>rainbow</code>.', f:'... a <u>rainbow</u> appeared.'}
      ]},
      { type:'error', name:'الكلمة الغريبة', hint:'انقر ما لا ينتمي', qs:[
        {words:['sunny','cloudy','rainy','summer'], bad:3, fix:'مثال: windy', w:'<code>summer</code> فصلٌ، والبقيّةُ حالاتُ طقس.', f:'... · <u>summer</u> (فصل)'},
        {words:['hot','cold','warm','snow'], bad:3, fix:'مثال: cool', w:'<code>snow</code> اسمٌ، والبقيّةُ صفاتُ حرارة.', f:'... · <u>snow</u> (اسم)'},
        {words:['summer','winter','season','rainy'], bad:3, fix:'مثال: spring', w:'<code>rainy</code> صفةُ طقس، والبقيّةُ فصول/زمن.', f:'... · <u>rainy</u> (صفة طقس)'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'sunny', ask:'المعنى؟', o:['مُشمِس','ممطر'], a:0, w:'مُشمِس.', f:'← <u>مُشمِس</u>'},
        {p:'بارد', ask:'الكلمة؟', o:['cold','hot'], a:0, w:'cold.', f:'← <u>cold</u>'},
        {p:'In ___ the weather is cold and it snows.', ask:'اختر', o:['winter','summer'], a:0, w:'الشتاء.', f:'In <u>winter</u> ...'},
        {p:'rainbow', ask:'المعنى؟', o:['قوسُ قزح','ثلج'], a:0, w:'قوسُ قزح.', f:'← <u>قوسُ قزح</u>'},
        {p:'عاصف', ask:'الكلمة؟', o:['windy','cloudy'], a:0, w:'windy.', f:'← <u>windy</u>'}
      ]}
    ]
  };
})();
