// 설치 가능한 앱으로 인식되게 하는 최소 서비스 워커 (캐시 없음: 항상 최신 화면)
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
