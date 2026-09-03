/* عامل الخدمة — وقّاد
   يخزّن قشرة التطبيق ليعمل بلا إنترنت بعد أول زيارة.
   عند تعديل الملفّات: ارفع رقم النسخة CACHE لإجبار التحديث. */
var CACHE = 'waqqad-v25';
var ASSETS = [
  './',
  './index.html',
  './assets/styles.css',
  './assets/icons.js',
  './assets/engine.js',
  './assets/app.js',
  './assets/data/curriculum.js',
  './assets/data/en-sg1-u1.js',
  './assets/data/en-sg1-u1-poss.js',
  './assets/data/en-sg1-u1-greet.js',
  './assets/data/en-sg1-u1-read.js',
  './assets/data/en-sg1-u2-poss2.js',
  './assets/data/en-sg1-u2-qw.js',
  './assets/data/en-sg1-u2-vocab.js',
  './assets/data/en-sg1-u2-read.js',
  './assets/data/en-sg1-u3-demo.js',
  './assets/data/en-sg1-u3-imper.js',
  './assets/data/en-sg1-u3-vocab.js',
  './assets/data/en-sg1-u3-read.js',
  './assets/data/en-sg1-u4-be.js',
  './assets/data/en-sg1-u4-canwill.js',
  './assets/data/en-sg1-u4-vocab.js',
  './assets/data/en-sg1-u4-read.js',
  './assets/data/en-sg1-u5-have.js',
  './assets/data/en-sg1-u5-plural.js',
  './assets/data/en-sg1-u5-vocab.js',
  './assets/data/en-sg1-u5-read.js',
  './assets/data/en-sg1-u6-there.js',
  './assets/data/en-sg1-u6-prep.js',
  './assets/data/en-sg1-u6-vocab.js',
  './assets/data/en-sg1-u6-read.js',
  './assets/data/en-sg1-u7-place.js',
  './assets/data/en-sg1-u7-compare.js',
  './assets/data/en-sg1-u7-vocab.js',
  './assets/data/en-sg1-u7-read.js',
  './assets/data/en-sg1-u8-presprog.js',
  './assets/data/en-sg1-u8-wouldlike.js',
  './assets/data/en-sg1-u8-vocab.js',
  './assets/data/en-sg1-u8-read.js',
  './assets/data/ar-lughati-g1-u1.js',
  './assets/data/ar-lughati-u1-hamza.js',
  './assets/data/ar-lughati-u1-amr.js',
  './assets/data/ar-lughati-u1-mubtada.js',
  './assets/data/ar-math-u1-order.js',
  './assets/data/ar-math-u1-steps.js',
  './assets/data/ar-math-u1-powers.js',
  './assets/data/ar-math-u1-guess.js',
  './assets/data/ar-math-u1-vars.js',
  './assets/data/ar-math-u1-eq.js',
  './assets/data/ar-math-u1-props.js',
  './assets/data/ar-math-u1-func.js',
  './assets/data/ar-math-u2-intabs.js',
  './assets/data/ar-math-u2-compare.js',
  './assets/data/ar-math-u2-coord.js',
  './assets/data/ar-math-u2-add.js',
  './assets/data/ar-math-u2-sub.js',
  './assets/data/ar-math-u2-mul.js',
  './assets/data/ar-math-u2-pattern.js',
  './assets/data/ar-math-u2-div.js',
  './assets/data/ar-math-u3-write.js',
  './assets/data/ar-math-u3-addsub.js',
  './assets/data/ar-math-u3-mul.js',
  './assets/data/ar-math-u3-backward.js',
  './assets/data/ar-math-u3-twostep.js',
  './assets/data/ar-math-u3-perim.js',
  './assets/data/ar-math-u3-graph.js',
  './assets/data/ar-math-u4-ratio.js',
  './assets/data/ar-math-u4-rate.js',
  './assets/data/ar-math-u4-engunits.js',
  './assets/data/ar-math-u4-metric.js',
  './assets/data/ar-math-u4-prop.js',
  './assets/data/ar-math-u4-draw.js',
  './assets/data/ar-math-u4-scale.js',
  './assets/data/ar-sci-u1-nature.js',
  './assets/data/ar-sci-u1-models.js',
  './assets/data/ar-sci-u1-eval.js',
  './icons/icon.svg',
  './manifest.webmanifest'
];

self.addEventListener('install', function(e){
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(ASSETS); }).catch(function(){}));
});

self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.map(function(k){ if(k!==CACHE) return caches.delete(k); }));
    }).then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function(e){
  var req = e.request;
  if(req.method !== 'GET') return;
  var url = new URL(req.url);

  // ملفّات المنصّة نفسها: من المخزن أولًا ثم الشبكة
  if(url.origin === self.location.origin){
    e.respondWith(
      caches.match(req).then(function(hit){
        return hit || fetch(req).then(function(res){
          var copy = res.clone();
          caches.open(CACHE).then(function(c){ c.put(req, copy); }).catch(function(){});
          return res;
        }).catch(function(){ return caches.match('./index.html'); });
      })
    );
    return;
  }

  // موارد خارجية (الخطوط): من المخزن ثم الشبكة، مع تخزينها بهدوء
  e.respondWith(
    caches.match(req).then(function(hit){
      return hit || fetch(req).then(function(res){
        var copy = res.clone();
        caches.open(CACHE).then(function(c){ c.put(req, copy); }).catch(function(){});
        return res;
      }).catch(function(){ return hit; });
    })
  );
});
