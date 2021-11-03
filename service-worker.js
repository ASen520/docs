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
    "url": "404.html",
    "revision": "6d4f3e208838926b12056b040c0c4b39"
  },
  {
    "url": "asen-logo.png",
    "revision": "c4765a5ab4f345ff247d30b44f181359"
  },
  {
    "url": "assets/css/0.styles.a05aacfc.css",
    "revision": "0634eca22a4d18ccd7dc2edb4778af52"
  },
  {
    "url": "assets/idea/1314186-20180413093018664-88251637.png",
    "revision": "e663dc3a8db4fed3d47e06a0c1aa811d"
  },
  {
    "url": "assets/idea/1314186-20180413093746177-931677889.png",
    "revision": "d1aac6709e41e56b0b323a72722286e7"
  },
  {
    "url": "assets/idea/1525750779463.png",
    "revision": "1aeaf108acfee62e34da644b45f513c4"
  },
  {
    "url": "assets/idea/1525750813679.png",
    "revision": "d09e6a3040f21bc94a02f8de19d62301"
  },
  {
    "url": "assets/idea/1525750912229.png",
    "revision": "9221b99ca3cbcd9accedbf00ab335f43"
  },
  {
    "url": "assets/idea/1525750951163.png",
    "revision": "1f7ce8015dc65333de2a369fdd01208c"
  },
  {
    "url": "assets/idea/1525750998299.png",
    "revision": "b7817772883ca9a05f4b9947acd06657"
  },
  {
    "url": "assets/idea/1525751087357.png",
    "revision": "7b28436e3627a7811b007f4850ea48f8"
  },
  {
    "url": "assets/idea/1525751118160.png",
    "revision": "993b463613033e2dd562fdbb3c1bfee6"
  },
  {
    "url": "assets/idea/1525751289292.png",
    "revision": "5a7aed5779076a0cd9d670ddf930fa7c"
  },
  {
    "url": "assets/idea/1525751380547.png",
    "revision": "9939cdce1266e75f25290410804f4e57"
  },
  {
    "url": "assets/idea/1525751420472.png",
    "revision": "e04b9c18f7867dbac2253644d0c46d0a"
  },
  {
    "url": "assets/idea/1525751450753.png",
    "revision": "324e5a19a0646ac1f86986c2f25e008f"
  },
  {
    "url": "assets/idea/1525751624121.png",
    "revision": "1c2eafbf5efb614844b5b56f6e5fead3"
  },
  {
    "url": "assets/idea/1525751864226.png",
    "revision": "e3ebdca40e07784c7b58a6e8bd7a20ef"
  },
  {
    "url": "assets/idea/1525751947796.png",
    "revision": "5f28558e0975779868b1365c9700af34"
  },
  {
    "url": "assets/idea/1525752058361.png",
    "revision": "3d2e1556059079cc4b25e1dabf9dbcfb"
  },
  {
    "url": "assets/idea/1525752736788.png",
    "revision": "85d3229546dcd35ceb03682e103c2b75"
  },
  {
    "url": "assets/idea/1525752858905.png",
    "revision": "8ecbe54bdc08fe1251f5e4282f50451e"
  },
  {
    "url": "assets/idea/1525753057335.png",
    "revision": "40c58d17a73640e06fa9cc5af8240edf"
  },
  {
    "url": "assets/idea/1525753256845.png",
    "revision": "6c5ed5934b2a77ef73208d367943a0d7"
  },
  {
    "url": "assets/idea/1525753383997.png",
    "revision": "45778d5d287a09ec0944560ce48f08cf"
  },
  {
    "url": "assets/idea/1525768925360.png",
    "revision": "f7f480b2e16670a946e0ae32f0e21548"
  },
  {
    "url": "assets/idea/1525769074210.png",
    "revision": "6df21d0fe6dddd18151b623d9536f89b"
  },
  {
    "url": "assets/idea/1525769944733.png",
    "revision": "27ba22f1f9301d6b6bb002a6812d8061"
  },
  {
    "url": "assets/idea/1525769992634.png",
    "revision": "3fa4e863b4dae796ce0e42388eba6440"
  },
  {
    "url": "assets/idea/1525771347970.png",
    "revision": "4bae4925bf4a5ae33f3050e744b445b2"
  },
  {
    "url": "assets/idea/1525771386518.png",
    "revision": "a10e9e1bc727b14c3f9c4f3db4a2e75b"
  },
  {
    "url": "assets/idea/1525772543703.png",
    "revision": "3453e3fd9ec9885060d22a072a94acbc"
  },
  {
    "url": "assets/idea/1525772590599.png",
    "revision": "ab4059035014f168e72c42430ee27342"
  },
  {
    "url": "assets/idea/1525773374863.png",
    "revision": "2d5908efab17671ea4049497d21d9c60"
  },
  {
    "url": "assets/idea/1525773425288.png",
    "revision": "b26ce1656d8c4de3f3046114bb5b83a8"
  },
  {
    "url": "assets/idea/1525773537608.png",
    "revision": "f297172a23bb069e07ca67b2eff81c72"
  },
  {
    "url": "assets/idea/1525773713424.png",
    "revision": "e25cbf79d66ad3a63ac7261600af6795"
  },
  {
    "url": "assets/idea/1525787088822.png",
    "revision": "c6b009507b1ec99e4fc957edba0b5065"
  },
  {
    "url": "assets/idea/1525787217607.png",
    "revision": "7658cf5b83358e1cebec10e054ab32a4"
  },
  {
    "url": "assets/idea/1525787282673.png",
    "revision": "330840fc22a89820a7b55a7c8c1ba628"
  },
  {
    "url": "assets/idea/1525787370657.png",
    "revision": "c34f6b9a6615ea5be1ebf5e32f4f7034"
  },
  {
    "url": "assets/idea/1525787636639.png",
    "revision": "33d711caa409c5e6e30412433608a106"
  },
  {
    "url": "assets/idea/1526786924641.png",
    "revision": "86628c0bd62343947bee4888abfa0409"
  },
  {
    "url": "assets/idea/1526786976776.png",
    "revision": "1389396acb640e3a3a62e0c626962fd6"
  },
  {
    "url": "assets/idea/idea演示.gif",
    "revision": "872807cdd8de62923b96ed6a65207fbf"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1da491ec.js",
    "revision": "643a07c1702ad17cca4c9c2999c85436"
  },
  {
    "url": "assets/js/11.3590fc72.js",
    "revision": "c4e5884fd8a2e5b873e7aa2c73681683"
  },
  {
    "url": "assets/js/12.4f1ad6d8.js",
    "revision": "1948ad1a91c982759fa4559716d04196"
  },
  {
    "url": "assets/js/13.90585300.js",
    "revision": "38261ab0d21979d0db4e5073dab4c518"
  },
  {
    "url": "assets/js/14.5bedb205.js",
    "revision": "68118f93e50d443ed49c503917f135f0"
  },
  {
    "url": "assets/js/15.7b17fbd5.js",
    "revision": "fa472308fd1009441099165cfc21ebd0"
  },
  {
    "url": "assets/js/16.2eb3573c.js",
    "revision": "25e41e67d201e30f528cc744c25eb4ab"
  },
  {
    "url": "assets/js/17.7d452e3d.js",
    "revision": "20ecb56974206dcc77b00d9c32a5823a"
  },
  {
    "url": "assets/js/2.151eb3a0.js",
    "revision": "64c081cc73fb064d40d82fc3c6a4a81e"
  },
  {
    "url": "assets/js/3.5d5c7c9f.js",
    "revision": "37022477bc548a60bbc72c367b36a587"
  },
  {
    "url": "assets/js/4.b01c4619.js",
    "revision": "948f8e49f1895850de881bf2157425e0"
  },
  {
    "url": "assets/js/5.f52b03e5.js",
    "revision": "93414655fccb6be3ce9ea5cf14956e33"
  },
  {
    "url": "assets/js/6.2bd8e766.js",
    "revision": "b72b75b389e00e8a2e061734f3e38254"
  },
  {
    "url": "assets/js/7.2cc54d89.js",
    "revision": "efdbace7abe7db77b0232f667306ff2b"
  },
  {
    "url": "assets/js/8.6e80797e.js",
    "revision": "eb2f4ce24164456599d2a7dfc5000650"
  },
  {
    "url": "assets/js/9.581fbbb8.js",
    "revision": "4f087c3bb1ee749fdf8edfeabda3c913"
  },
  {
    "url": "assets/js/app.26578add.js",
    "revision": "2f35d3ab458207647d58ef1a7ef13e53"
  },
  {
    "url": "assets/mybatis/1563256100301.png",
    "revision": "3de2bc985a63793b664fd6086d3fb47f"
  },
  {
    "url": "assets/mybatis/1563256606443.png",
    "revision": "7f1e25f650e6205ed745e08d60df095e"
  },
  {
    "url": "assets/mybatis/1563256638921.png",
    "revision": "de3a5c92855b506fd8683d427de0cf98"
  },
  {
    "url": "assets/mybatis/1563256958328.png",
    "revision": "a1e5d7ec2659efed281f0e2f41b4541a"
  },
  {
    "url": "assets/mybatis/1563263597018.png",
    "revision": "996a3857aea959f02b7c34d0e9e5e185"
  },
  {
    "url": "assets/mybatis/1563263684573.png",
    "revision": "cce9e314138533c6912a30f0941d760a"
  },
  {
    "url": "countUp.html",
    "revision": "f95894b3923a92f1edf9e85dd9ec420e"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "452bf5121ca738bd07abf65472d9b466"
  },
  {
    "url": "ssm/idea入门.html",
    "revision": "0eb91984d3a7c99d469c70496b655287"
  },
  {
    "url": "ssm/index.html",
    "revision": "56a3c0619ce015df62975f4e3eac1d0c"
  },
  {
    "url": "ssm/mybatis/mybatis开发环境搭建.html",
    "revision": "9a27fa156e52f805ff058bbae8cd30fe"
  },
  {
    "url": "ssm/mybatis/mybatis查询.html",
    "revision": "8c7b2e4e2a9f59f785bb3943b7289a10"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
