const CACHE_NAME = 'soilsense-v1';
const urlsToCache = [
  '/soilsense-frontend/',
  '/soilsense-frontend/index.html',
  '/soilsense-frontend/css/style.css',
  '/soilsense-frontend/css/auth.css',
  '/soilsense-frontend/css/home.css',
  '/soilsense-frontend/css/analysis.css',
  '/soilsense-frontend/css/guide.css',
  '/soilsense-frontend/css/media.css',
  '/soilsense-frontend/js/storage.js',
  '/soilsense-frontend/js/auth.js',
  '/soilsense-frontend/js/router.js',
  '/soilsense-frontend/js/soil-data.js',
  '/soilsense-frontend/js/soil-guide.js',
  '/soilsense-frontend/js/analysis.js',
  '/soilsense-frontend/js/main.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
    ))
  );
});