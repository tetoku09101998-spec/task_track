const CACHE_NAME = 'task-manager-v2'; // v1からv2に変更して保存
const urlsToCache = ['./', 'index.html'];

self.addEventListener('install', (event) => {
    event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', (event) => {
    event.respondWith(caches.match(event.request).then((response) => response || fetch(event.request)));

});
