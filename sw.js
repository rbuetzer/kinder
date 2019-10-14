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
    "url": "all.00fee852.css",
    "revision": "921b3f915f2639a73aaef4670ed1bae2"
  },
  {
    "url": "ch-de-2018-f.40c954fa.js",
    "revision": "abd61777ae4bfec08449538c712b1194"
  },
  {
    "url": "ch-de-2018-m.553bede1.js",
    "revision": "ea08c1d007dbd8e40ed9cfb09e21ef9e"
  },
  {
    "url": "fa-brands-400.0c371f12.svg",
    "revision": "a9c4bb7348f42626454c988dbde1d0a0"
  },
  {
    "url": "fa-brands-400.48fc701a.woff2",
    "revision": "cccc9d29470e879e40eb70249d9a2705"
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
    "url": "fa-regular-400.0ec79e7c.eot",
    "revision": "c1a866ec0e04a5e1915b41fcf261457c"
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
    "url": "fa-regular-400.c980d10d.ttf",
    "revision": "65b286af947c0d982ca01b40e1fcab38"
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
    "url": "fa-solid-900.0c23dc7f.svg",
    "revision": "c2801fb415f03c7b170934769d7b5397"
  },
  {
    "url": "fa-solid-900.c074b2a6.ttf",
    "revision": "0bff33a5fd7ec390235476b4859747a0"
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
    "url": "icon-180.8603994c.png",
    "revision": "148c6d4bb866b91047959e7f29c390e4"
  },
  {
    "url": "icon-192.3a2d15f2.png",
    "revision": "60ca5c0eb10234bf1266417b2d492571"
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
    "url": "index.html",
    "revision": "3607fa6705c86d065c58bc4cccfe3b67"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "8a33f9f7eed6988be486fb87ade85ef4"
  },
  {
    "url": "src.b4d0979b.js",
    "revision": "e5ac83183205d462955910f4d7d9b278"
  },
  {
    "url": "src.fcf78d7f.css",
    "revision": "d45332e0c63a1b381af4351360179140"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
