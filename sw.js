/* عامل الخدمة — وقّاد
   يخزّن قشرة التطبيق ليعمل بلا إنترنت بعد أول زيارة.
   عند تعديل الملفّات: ارفع رقم النسخة CACHE لإجبار التحديث. */
var CACHE = 'waqqad-v1';
var ASSETS = [
  './',
  './index.html',
  './assets/styles.css',
  './assets/icons.js',
  './assets/engine.js',
  './assets/app.js',
  './assets/data/curriculum.js',
  './assets/data/en-sg1-u1.js',
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
