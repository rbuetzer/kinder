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
    "url": "ch-de-2018-f.40c954fa.js",
    "revision": "abd61777ae4bfec08449538c712b1194"
  },
  {
    "url": "ch-de-2018-m.553bede1.js",
    "revision": "ea08c1d007dbd8e40ed9cfb09e21ef9e"
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
    "revision": "4de85bd4ee15f2ab643038663d5c5451"
  },
  {
    "url": "logo.34c14486.svg",
    "revision": "23646e5a397cab89cbb82dc837a3a84f"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "470d46738b1ab5437a09901c26744200"
  },
  {
    "url": "menu.b5b331e7.svg",
    "revision": "aec21dfa9b554a95ab9bf4916d13a6a3"
  },
  {
    "url": "src.5de77134.css",
    "revision": "aff81ea718faf4c4e9673fd6489e7659"
  },
  {
    "url": "src.b107460e.js",
    "revision": "bd052ed59935bf8ab193832f3991a5ff"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
