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
    "revision": "5495a1544c9c7b28d64f01bbed4e1e07"
  },
  {
    "url": "about.html",
    "revision": "5ebfc823ad38493eb36a4aebdf7e9978"
  },
  {
    "url": "assets/css/0.styles.bfa7193d.css",
    "revision": "327f2b7dfc180928abebb25f6786ce65"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",
    "revision": "7f06b4e30317f784d61d26686aed0ab2"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",
    "revision": "aaf4eee9fba9907d61c3935e0b6a54ae"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",
    "revision": "e78e28b4834954df047e4925e9dbf354"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",
    "revision": "021dd4dc61ee5f5cdf315f43b48c094b"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",
    "revision": "1e802ca9dedc4ed4e3c6f645e4316128"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",
    "revision": "4ec58befa687e9752c3c91cd9bcf1bcb"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",
    "revision": "7edb53b6693d75b8a2232481eea1a52c"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",
    "revision": "d3b46c3a530116933081d9d74e3e9fe8"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",
    "revision": "d49f2d55ce4f40f982d8ba63d746fbf9"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",
    "revision": "a31e7cba7b7221ebf1a2ae545fb306b2"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",
    "revision": "c4c8cab7d5be97b2bb283e531c077355"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",
    "revision": "d5b59ec9764e10f4a82369ae29f3ac58"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",
    "revision": "32a5339eb809f381a7357ba56f82aab3"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",
    "revision": "a48dad4f58c82e38a10da0ceebb86370"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",
    "revision": "b7d9c46bff5d51da6209e355cc4a235d"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.22086eb5.woff",
    "revision": "22086eb5d97009c3e99bcc1d16ce6865"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",
    "revision": "8e1e01c4b1207c0a383d9a2b4f86e637"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",
    "revision": "9ceff51b3cb7ce6eb4e8efa8163a1472"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",
    "revision": "284a17fe5baf72ff8217d4c7e70c0f82"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",
    "revision": "4c57dbc44bfff1fdf08a59cf556fdab3"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",
    "revision": "e8b44b990516dab7937bf240fde8b46a"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.29c86397.ttf",
    "revision": "29c86397e75cdcb3135af8295f1c2e28"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.99be0e10.woff",
    "revision": "99be0e10c38cd42466e6fe1665ef9536"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",
    "revision": "e533d5a2506cf053cd671b335ec04dde"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",
    "revision": "5c734d78610fa35282f3379f866707f2"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",
    "revision": "5c94aef490324b0925dbe5f643e8fd04"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.b741441f.woff",
    "revision": "b741441f6d71014d0453ca3ebc884dd4"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",
    "revision": "9a2834a9ff8ab411153571e0e55ac693"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",
    "revision": "b13731ef4e2bfc3d8d859271e39550fc"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",
    "revision": "d747bd1e7a6a43864285edd73dcde253"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",
    "revision": "291e76b8871b84560701bd29f9d1dcc7"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",
    "revision": "4ad08b826b8065e1eab85324d726538c"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.f0303906.woff",
    "revision": "f0303906c2a67ac63bf1e8ccd638a89e"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",
    "revision": "3fb419559955e3ce75619f1a5e8c6c84"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",
    "revision": "6e0830bee40435e72165345e0682fbfc"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",
    "revision": "7dc027cba9f7b11ec92af4a311372a85"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",
    "revision": "4059868e460d2d2e6be18e180d20c43d"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",
    "revision": "727a9b0d97d72d2fc0228fe4e07fb4d8"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",
    "revision": "fba01c9c6fb2866a0f95bcacb2c187a5"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",
    "revision": "2555754a67062cac3a0913b715ab982f"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",
    "revision": "5c58d168c0b66d2c32234a6718e74dfb"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",
    "revision": "d929cd671b19f0cfea55b6200fb47461"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.755e2491.woff2",
    "revision": "755e2491f13b5269f0afd5a56f7aa692"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",
    "revision": "d12ea9efb375f9dc331f562e69892638"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",
    "revision": "d524c9a5b62a17f98f4a97af37fea735"
  },
  {
    "url": "assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",
    "revision": "7342d45b052c3a2abc21049959fbab7f"
  },
  {
    "url": "assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",
    "revision": "eb130dcc661de766c999c60ba1525a88"
  },
  {
    "url": "assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",
    "revision": "ad7672524b64b730dfd176140a8945cb"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",
    "revision": "257023560753aeb0b89b7e434d3da17f"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",
    "revision": "3fe216d2a5f736c560cde71984554b64"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",
    "revision": "6cc31ea5c223c88705a13727a71417fa"
  },
  {
    "url": "assets/img/claw.f886b8d5.svg",
    "revision": "f886b8d5021c8af029e2cd4dea609bcc"
  },
  {
    "url": "assets/js/1.195b9c91.js",
    "revision": "e96e1274f7f0b4b5a9e19efa8571b42d"
  },
  {
    "url": "assets/js/10.e8451f4f.js",
    "revision": "7b99460dd78e3d74bc2590d6eaf4f7a1"
  },
  {
    "url": "assets/js/11.847d9056.js",
    "revision": "6f3dd370fcd010437eb1301e21a39aec"
  },
  {
    "url": "assets/js/12.dc3051f5.js",
    "revision": "e234368d7136d835cdba0f6b47955444"
  },
  {
    "url": "assets/js/13.57e9bb68.js",
    "revision": "1c48110fe4dc70b1513e154c67b4dc0a"
  },
  {
    "url": "assets/js/14.9e3c9ec1.js",
    "revision": "af0d76da4481060716399257dcfa72d4"
  },
  {
    "url": "assets/js/15.faae6d5e.js",
    "revision": "985848063ea7a8c459e0e9e0b9ff41dc"
  },
  {
    "url": "assets/js/16.525a1c36.js",
    "revision": "357c67f0df652469c1495eb497a24f3a"
  },
  {
    "url": "assets/js/17.3501b1f7.js",
    "revision": "f31ab7dcb074023272a0b12722cb3bff"
  },
  {
    "url": "assets/js/18.133bef68.js",
    "revision": "facc8f3596b49a63387cc2bcec11d41f"
  },
  {
    "url": "assets/js/19.d888555e.js",
    "revision": "9cbbb1f7979b00f27bc9ddb3c26f8e19"
  },
  {
    "url": "assets/js/20.723ba7f2.js",
    "revision": "193b710e271b178c34ba8002cab0b8f4"
  },
  {
    "url": "assets/js/21.4c117a26.js",
    "revision": "cd8b7f8a53afcd1b863b23e989c2f0d3"
  },
  {
    "url": "assets/js/22.b00901ad.js",
    "revision": "b12f99b2750f4981005b0b6c195d96f2"
  },
  {
    "url": "assets/js/23.e720659f.js",
    "revision": "cc11b0df9ecbfc51982f9a6550f6325d"
  },
  {
    "url": "assets/js/24.1c6cec44.js",
    "revision": "d2d28802af61e1f924f34127ee39e2a6"
  },
  {
    "url": "assets/js/4.0be0d370.js",
    "revision": "d76cdf1437a5c03672e9c06c08a51897"
  },
  {
    "url": "assets/js/5.43477fb1.js",
    "revision": "85d4e4f7e256407bb8a4c4046e1dc368"
  },
  {
    "url": "assets/js/6.83ea4916.js",
    "revision": "d2316e1e3d09b76beeeb96a40b1d49fd"
  },
  {
    "url": "assets/js/7.0f945241.js",
    "revision": "33ca2e55447cc2deb9858f276b432f7f"
  },
  {
    "url": "assets/js/8.f779f8cb.js",
    "revision": "bb79caae9b56bf63e823cdb64fd1f347"
  },
  {
    "url": "assets/js/9.329b46d5.js",
    "revision": "3482c1a32f4c7ef4a0dc75f85310b809"
  },
  {
    "url": "assets/js/app.48e9adbc.js",
    "revision": "1d08ce17880362c2d9dde3f4d7bf7088"
  },
  {
    "url": "assets/js/vendors~flowchart.3e967298.js",
    "revision": "d86283e9f6572585b4c03789a7abde85"
  },
  {
    "url": "avatar.jpg",
    "revision": "5adb7f22ad899b101b21c49d350e5f94"
  },
  {
    "url": "bg.jpg",
    "revision": "da2832eefece5da60725442fd5ae1555"
  },
  {
    "url": "dynamic.html",
    "revision": "61505b9879661fb74a86dc3ae239979c"
  },
  {
    "url": "friends.html",
    "revision": "06e88125ad22698e3e8287a4d2bbfca9"
  },
  {
    "url": "icons/favicon144.png",
    "revision": "34351187312c1a80471c4c21e2047598"
  },
  {
    "url": "icons/favicon152.png",
    "revision": "90c5cedad4928d984deab2fb22bca560"
  },
  {
    "url": "icons/favicon168.png",
    "revision": "2bdfc32cf5a7eb36ee2f24874d2b94e7"
  },
  {
    "url": "icons/favicon192.png",
    "revision": "9255753a710234b3911f3e8d341c6fcf"
  },
  {
    "url": "icons/favicon256.png",
    "revision": "8ece81e372c66c9444863ee422e53d79"
  },
  {
    "url": "icons/favicon48.png",
    "revision": "0e418f58d529de871b7e539f42c93814"
  },
  {
    "url": "icons/favicon72.png",
    "revision": "3fef97ec24cf69afc5231f21f31b56e4"
  },
  {
    "url": "icons/favicon96.png",
    "revision": "0dd3942922f602d95535f5f3f201cf03"
  },
  {
    "url": "index.html",
    "revision": "ef9f2eecbac1ed34dadbc0dba3c125fb"
  },
  {
    "url": "info-bg.jpg",
    "revision": "7b0ebfc5a4c178c3d183a6e0bdcd6843"
  },
  {
    "url": "posts/2020/11/11/_2.html",
    "revision": "156a6c3857c1551edfcb4576c8e63c48"
  },
  {
    "url": "posts/categories/index.html",
    "revision": "5ab5a079f6308674be3f1de0bae0eb70"
  },
  {
    "url": "posts/categories/Java.html",
    "revision": "5b5e813ee53947662e55a4ed582b85ce"
  },
  {
    "url": "posts/index.html",
    "revision": "d41322bd5c1afd0787b7512fcbc39d12"
  },
  {
    "url": "posts/tags/index.html",
    "revision": "975df8f9aefcba2d3d77530a717c2e6e"
  },
  {
    "url": "posts/tags/world.html",
    "revision": "f6cab1ca73cb8c0cdab793bb75febe82"
  },
  {
    "url": "top.svg",
    "revision": "a27b674317927402634bee4de4c397b2"
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
