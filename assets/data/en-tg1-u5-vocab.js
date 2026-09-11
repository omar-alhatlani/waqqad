/* ============================================================
   درس: Vocabulary — Outdoor Fun (nature & land)
   الإنجليزية · الرابع الابتدائي · ف١ · Top Goal 1 · Unit 5 (Outdoor Fun)
   مفرداتُ الوحدة (حقائقُ معجميّة)، والجملُ التوضيحيّة مؤلَّفةٌ أصالةً.
   ============================================================ */
(function(){
  window.LESSONS = window.LESSONS || {};
  window.LESSONS['EN_TG1_U5_VOCAB'] = {
    id:'EN_TG1_U5_VOCAB',
    title:'Vocabulary — Nature & Land',
    lang:'en',
    rule:{
      tag:'المفردات',
      title:'معالمُ الطبيعة',
      intro:'مفرداتٌ عن <b>معالمِ الطبيعةِ والأرض</b> وبعضِ الصفات. أتقِنْها لتصفَ رحلاتِك في الهواءِ الطلق.',
      table:[['mountain · hill','جبل · تلّة'],['forest · desert','غابة · صحراء'],['lake · waterfall','بحيرة · شلّال'],['island · cave','جزيرة · كهف'],['field · countryside','حقل · الريف'],['deep · high · far','عميق · مرتفع · بعيد']],
      examples:['We walked around the <code>lake</code> in the <code>forest</code>. (مشينا حول البحيرةِ في الغابة.)','The <code>mountain</code> is very <code>high</code>. (الجبلُ مرتفعٌ جدًّا.)'],
      trick:'تخيّلِ المكان: <span class="en">waterfall</span> ماءٌ يسقطُ من عُلوّ، و<span class="en">cave</span> فجوةٌ في الجبل، و<span class="en">island</span> أرضٌ وسطَ الماء.'
    },
    stages:[
      { type:'choice', name:'الكلمة ← المعنى', hint:'اختر المعنى العربيّ', qs:[
        {p:'mountain', ask:'المعنى؟', o:['جبل','بحيرة'], a:0, w:'<code>mountain</code> = جبل.', f:'← <u>جبل</u>'},
        {p:'forest', ask:'المعنى؟', o:['غابة','صحراء'], a:0, w:'<code>forest</code> = غابة.', f:'← <u>غابة</u>'},
        {p:'lake', ask:'المعنى؟', o:['بحيرة','شلّال'], a:0, w:'<code>lake</code> = بحيرة.', f:'← <u>بحيرة</u>'},
        {p:'island', ask:'المعنى؟', o:['جزيرة','كهف'], a:0, w:'<code>island</code> = جزيرة.', f:'← <u>جزيرة</u>'},
        {p:'deep', ask:'المعنى؟', o:['عميق','مرتفع'], a:0, w:'<code>deep</code> = عميق.', f:'← <u>عميق</u>'}
      ]},
      { type:'choice', name:'المعنى ← الكلمة', hint:'اختر الإنجليزية', qs:[
        {p:'صحراء', ask:'الكلمة؟', o:['desert','forest'], a:0, w:'صحراء = <code>desert</code>.', f:'← <u>desert</u>'},
        {p:'شلّال', ask:'الكلمة؟', o:['waterfall','lake'], a:0, w:'شلّال = <code>waterfall</code>.', f:'← <u>waterfall</u>'},
        {p:'كهف', ask:'الكلمة؟', o:['cave','hill'], a:0, w:'كهف = <code>cave</code>.', f:'← <u>cave</u>'},
        {p:'تلّة', ask:'الكلمة؟', o:['hill','mountain'], a:0, w:'تلّة = <code>hill</code>.', f:'← <u>hill</u>'},
        {p:'مرتفع', ask:'الكلمة؟', o:['high','low'], a:0, w:'مرتفع = <code>high</code>.', f:'← <u>high</u>'}
      ]},
      { type:'gap', name:'أكمل الجملة', hint:'اختر الكلمة المناسبة', qs:[
        {p:'Fish swim in the ___ .', o:['lake','desert','cave'], a:0, w:'السمكُ في البحيرة ← <code>lake</code>.', f:'... in the <u>lake</u>.'},
        {p:'The camel lives in the ___ .', o:['desert','forest','island'], a:0, w:'الجملُ في الصحراء ← <code>desert</code>.', f:'... in the <u>desert</u>.'},
        {p:'Water falls from the ___ .', o:['waterfall','hill','field'], a:0, w:'الماءُ يسقطُ من الشلّال ← <code>waterfall</code>.', f:'... from the <u>waterfall</u>.'},
        {p:'The ocean is very ___ .', o:['deep','high','far'], a:0, w:'المحيطُ عميقٌ ← <code>deep</code>.', f:'... very <u>deep</u>.'}
      ]},
      { type:'error', name:'الكلمة الغريبة', hint:'انقر ما لا ينتمي', qs:[
        {words:['mountain','hill','forest','deep'], bad:3, fix:'مثال: lake', w:'<code>deep</code> صفةٌ، والبقيّةُ معالمُ طبيعة.', f:'... · <u>deep</u> (صفة)'},
        {words:['lake','waterfall','island','high'], bad:3, fix:'مثال: cave', w:'<code>high</code> صفةٌ، والبقيّةُ أماكن/معالم.', f:'... · <u>high</u> (صفة)'},
        {words:['desert','forest','field','carry'], bad:3, fix:'مثال: island', w:'<code>carry</code> فعلٌ، والبقيّةُ أماكن.', f:'... · <u>carry</u> (فعل)'}
      ]},
      { type:'mixed', name:'التحدي النهائي', hint:'كلّ ما تعلّمته — مختلطًا', final:true, qs:[
        {p:'forest', ask:'المعنى؟', o:['غابة','جبل'], a:0, w:'غابة.', f:'← <u>غابة</u>'},
        {p:'جزيرة', ask:'الكلمة؟', o:['island','lake'], a:0, w:'island.', f:'← <u>island</u>'},
        {p:'A camel crosses the ___ .', ask:'اختر', o:['desert','lake'], a:0, w:'الصحراء.', f:'... the <u>desert</u>.'},
        {p:'waterfall', ask:'المعنى؟', o:['شلّال','كهف'], a:0, w:'شلّال.', f:'← <u>شلّال</u>'},
        {p:'عميق', ask:'الكلمة؟', o:['deep','high'], a:0, w:'deep.', f:'← <u>deep</u>'}
      ]}
    ]
  };
})();
