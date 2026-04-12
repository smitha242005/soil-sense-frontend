const CACHE_NAME = 'soilsense-v1';
const urlsToCache = [
  '/soil-sense-frontend/',
  '/soil-sense-frontend/index.html',
  '/soil-sense-frontend/css/style.css',
  '/soil-sense-frontend/css/auth.css',
  '/soil-sense-frontend/css/home.css',
  '/soil-sense-frontend/css/analysis.css',
  '/soil-sense-frontend/css/guide.css',
  '/soil-sense-frontend/css/media.css',
  '/soil-sense-frontend/js/storage.js',
  '/soil-sense-frontend/js/auth.js',
  '/soil-sense-frontend/js/router.js',
  '/soil-sense-frontend/js/soil-data.js',
  '/soil-sense-frontend/js/soil-guide.js',
  '/soil-sense-frontend/js/translations.js',
  '/soil-sense-frontend/js/analysis.js',
  '/soil-sense-frontend/js/main.js'
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