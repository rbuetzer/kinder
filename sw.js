/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "all.a5bf7943.css",
    "revision": "f0695516a1dd10409bd3527f9cf8ab50"
  },
  {
    "url": "all.a5bf7943.js",
    "revision": "6e549353454d688e43a22dfdaafd2ce9"
  },
  {
    "url": "all.d6ecf97f.css",
    "revision": "7747865a3e235acf5bcf4f44fd7a891e"
  },
  {
    "url": "ch-de-2018-f.31f8f6bb.js",
    "revision": "b8b3b9e0c8b891d22939321471e3f2f2"
  },
  {
    "url": "ch-de-2018-f.40c954fa.js",
    "revision": "8c76c4567cc4b29153d729d5c632a465"
  },
  {
    "url": "ch-de-2018-m.33a34914.js",
    "revision": "9d4a4c1a137f4f30aeeff80d6cd84ab6"
  },
  {
    "url": "ch-de-2018-m.553bede1.js",
    "revision": "a81e4ed73ebbb0eff7c5874058ebfb9a"
  },
  {
    "url": "fa-brands-400.0c371f12.svg",
    "revision": "a9c4bb7348f42626454c988dbde1d0a0"
  },
  {
    "url": "fa-brands-400.1f0eb095.svg",
    "revision": "a9c4bb7348f42626454c988dbde1d0a0"
  },
  {
    "url": "fa-brands-400.34cc846b.woff2",
    "revision": "cccc9d29470e879e40eb70249d9a2705"
  },
  {
    "url": "fa-brands-400.48fc701a.woff2",
    "revision": "cccc9d29470e879e40eb70249d9a2705"
  },
  {
    "url": "fa-brands-400.75159956.woff",
    "revision": "c5e0f14f88a828261ba01558ce2bf26f"
  },
  {
    "url": "fa-brands-400.7b5acd02.eot",
    "revision": "5063b105c7646c8043d58c5289f02cca"
  },
  {
    "url": "fa-brands-400.81bfb96b.ttf",
    "revision": "06147b6cd88c7346cecd1edd060cd5de"
  },
  {
    "url": "fa-brands-400.9046b690.eot",
    "revision": "5063b105c7646c8043d58c5289f02cca"
  },
  {
    "url": "fa-brands-400.c1985361.woff",
    "revision": "c5e0f14f88a828261ba01558ce2bf26f"
  },
  {
    "url": "fa-brands-400.f885063e.ttf",
    "revision": "06147b6cd88c7346cecd1edd060cd5de"
  },
  {
    "url": "fa-regular-400.0ec79e7c.eot",
    "revision": "c1a866ec0e04a5e1915b41fcf261457c"
  },
  {
    "url": "fa-regular-400.16d6ac71.svg",
    "revision": "7b9568e6389b1f8ae0902cd39665fc1e"
  },
  {
    "url": "fa-regular-400.44360617.woff2",
    "revision": "f5f2566b93e89391da4db79462b8078b"
  },
  {
    "url": "fa-regular-400.6050b190.svg",
    "revision": "7b9568e6389b1f8ae0902cd39665fc1e"
  },
  {
    "url": "fa-regular-400.82c42f2f.woff2",
    "revision": "f5f2566b93e89391da4db79462b8078b"
  },
  {
    "url": "fa-regular-400.adc5c7aa.woff",
    "revision": "c4f508e7c4f01a9eeba7f08155cde04e"
  },
  {
    "url": "fa-regular-400.b073eab5.ttf",
    "revision": "65b286af947c0d982ca01b40e1fcab38"
  },
  {
    "url": "fa-regular-400.c980d10d.ttf",
    "revision": "65b286af947c0d982ca01b40e1fcab38"
  },
  {
    "url": "fa-regular-400.d4b9b17f.eot",
    "revision": "c1a866ec0e04a5e1915b41fcf261457c"
  },
  {
    "url": "fa-regular-400.fbfcbca9.woff",
    "revision": "c4f508e7c4f01a9eeba7f08155cde04e"
  },
  {
    "url": "fa-solid-900.00b0a996.woff",
    "revision": "333bae208dc363746961b234ff6c2500"
  },
  {
    "url": "fa-solid-900.0b60ff24.eot",
    "revision": "8e4a6dcc692b3887f9f542cd6894d6d4"
  },
  {
    "url": "fa-solid-900.0c23dc7f.svg",
    "revision": "c2801fb415f03c7b170934769d7b5397"
  },
  {
    "url": "fa-solid-900.47a039f3.ttf",
    "revision": "0bff33a5fd7ec390235476b4859747a0"
  },
  {
    "url": "fa-solid-900.55d5ef42.woff2",
    "revision": "44d537ab79f921fde5a28b2c1636f397"
  },
  {
    "url": "fa-solid-900.c074b2a6.ttf",
    "revision": "0bff33a5fd7ec390235476b4859747a0"
  },
  {
    "url": "fa-solid-900.d08d5f59.svg",
    "revision": "c2801fb415f03c7b170934769d7b5397"
  },
  {
    "url": "fa-solid-900.d4f587c2.woff2",
    "revision": "44d537ab79f921fde5a28b2c1636f397"
  },
  {
    "url": "fa-solid-900.e8b00e2f.eot",
    "revision": "8e4a6dcc692b3887f9f542cd6894d6d4"
  },
  {
    "url": "fa-solid-900.f824330b.woff",
    "revision": "333bae208dc363746961b234ff6c2500"
  },
  {
    "url": "icon-180.8603994c.png",
    "revision": "148c6d4bb866b91047959e7f29c390e4"
  },
  {
    "url": "icon-180.c36793d6.png",
    "revision": "148c6d4bb866b91047959e7f29c390e4"
  },
  {
    "url": "icon-192.3a2d15f2.png",
    "revision": "60ca5c0eb10234bf1266417b2d492571"
  },
  {
    "url": "icon-192.9ec5965c.png",
    "revision": "60ca5c0eb10234bf1266417b2d492571"
  },
  {
    "url": "icon-512.0b84618d.png",
    "revision": "759c80bc0a0e709a971e624640e359c5"
  },
  {
    "url": "icon-512.fc3868fc.png",
    "revision": "759c80bc0a0e709a971e624640e359c5"
  },
  {
    "url": "icon.29bfe867.svg",
    "revision": "555d08f9a027f9869cf3e584c6c97e3c"
  },
  {
    "url": "icon.829cbb25.svg",
    "revision": "555d08f9a027f9869cf3e584c6c97e3c"
  },
  {
    "url": "index.html",
    "revision": "05644cd51d721267d483b4e9f5c9901b"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "8a33f9f7eed6988be486fb87ade85ef4"
  },
  {
    "url": "src.a6e27d8a.js",
    "revision": "35080ee0d4dabb0ff014ffa5a34d19f1"
  },
  {
    "url": "src.e676cc3c.css",
    "revision": "ad0bc8126ec00f2270885f9e2ea8d500"
  },
  {
    "url": "src.f69400ca.css",
    "revision": "7900091f15329b3875f6d380fb8991c5"
  },
  {
    "url": "src.f69400ca.js",
    "revision": "37dbc1cc7e76c64430f17f0bd0a7f51a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
