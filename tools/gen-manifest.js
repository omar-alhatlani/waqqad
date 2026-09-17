/* ============================================================
   مولّد الفهرس (lesson-manifest.js) — وقّاد
   يمسحُ ملفّاتِ الدروس (assets/data/ar-*.js, en-*.js) ويستخرج لكلّ درسٍ
   { f: مسار الملفّ، n: عددُ المراحل، id، sim? }، ويسردُ ملفّاتِ المحاكاة.
   يُشغَّل ضمن البناء قبل gen-pages.js كي يبقى الفهرسُ متطابقًا مع الدروس.
   التشغيل:  node tools/gen-manifest.js
   ============================================================ */
const fs = require('fs');
const path = require('path');
const DATA = path.join(__dirname, '..', 'assets', 'data');
const SIMS = path.join(__dirname, '..', 'assets', 'sims');

global.window = {}; window.SIMS = {};
var lessons = {};

// نمسحُ ملفّاتِ الدروس بترتيب القراءة نفسِه (كي يطابق الفهرسُ السابق)
fs.readdirSync(DATA).forEach(function(file){
  if(!/^(ar|en)-.*\.js$/.test(file)) return;           // ملفّاتُ الدروس فقط
  window.LESSONS = {};                                   // اعزلْ كلَّ ملفّ
  try { require(path.join(DATA, file)); } catch(e){ return; }
  for(var ref in window.LESSONS){
    if(!window.LESSONS.hasOwnProperty(ref)) continue;
    var L = window.LESSONS[ref];
    var e = { f: 'assets/data/' + file, n: (L.stages ? L.stages.length : 0), id: ref };
    if(L.explore && L.explore.sim) e.sim = L.explore.sim;
    lessons[ref] = e;
  }
});

// خريطةُ المحاكاة: اسمُ المحاكاة (اسمُ الملفّ) ← مساره
var sims = {};
fs.readdirSync(SIMS).forEach(function(file){
  if(/\.js$/.test(file)) sims[file.replace(/\.js$/, '')] = 'assets/sims/' + file;
});

var header = '/* فهرسٌ للتحميل حسب الطلب — يُولَّد من ملفّات الدروس بخطوة بناءٍ محلّية (لا يُحرَّر يدويًّا).\n' +
  '   كلّ مدخل: REF ← { f: مسار الملفّ، n: عددُ المراحل، id، sim? }. عناوينُ التنقّل من curriculum.js. */\n';
fs.writeFileSync(path.join(DATA, 'lesson-manifest.js'), header + 'window.LMAN=' + JSON.stringify({ lessons: lessons, sims: sims }) + ';\n');
console.log('الفهرس: ' + Object.keys(lessons).length + ' درسًا · ' + Object.keys(sims).length + ' محاكاة');
