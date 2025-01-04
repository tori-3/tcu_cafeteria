'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7989c54aeb2c866138e3fce3b9091893",
"assets/AssetManifest.bin.json": "73261670e7056244f10e8cce4980c693",
"assets/AssetManifest.json": "8c03d0ef45801182ed4d5ee64171ad72",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e9213e90e011fb221d29436bd506c41",
"assets/images/%25E3%2580%2590%25E3%2582%25B9%25E3%2582%25A8%25E3%2583%2592%25E3%2583%25AD%25E3%2583%2590%25E3%2583%25BC%25E3%2582%25B0%25E3%2581%25AE%25E6%2597%25A5%25E3%2580%2591%25E3%2583%2588%25E3%2583%259E%25E3%2583%2588%25E3%2582%25BD%25E3%2583%25BC%25E3%2582%25B9.jpg": "d1406577a403849b6289ef55a92dc6ce",
"assets/images/%25E3%2581%258B%25E3%2581%2591%25E3%2581%2586%25E3%2581%25A9%25E3%2582%2593%25EF%25BC%258F%25E3%2581%259D%25E3%2581%25B0.jpg": "e303d0c1faaf54a54d58c7c649cf05bf",
"assets/images/%25E3%2581%2599%25E3%2581%258D%25E7%2584%25BC%25E3%2581%2586%25E3%2581%25A9%25E3%2582%2593.jpg": "cc40d2338851398f7ff9c6662559c8a8",
"assets/images/%25E3%2582%25AC%25E3%2583%25BC%25E3%2583%25AA%25E3%2583%2583%25E3%2582%25AF%25E3%2583%25A9%25E3%2582%25A4%25E3%2582%25B9%25E3%2583%25AD%25E3%2582%25B3%25E3%2583%25A2%25E3%2582%25B3.jpg": "d4f1fc910c711ffc47ef861cdb533e54",
"assets/images/%25E8%25A6%25AA%25E5%25AD%2590%25E4%25B8%25BC.jpg": "eda746c59cfec22d9e34170c5f6e6907",
"assets/images/%25E8%25B1%259A%25E8%2582%2589%25E3%2581%25AE%25E9%259F%2593%25E5%259B%25BD%25E5%2591%25B3%25E5%2599%258C%25E6%25BC%25AC%25E4%25B8%25BC.jpg": "84900b55304b48c06a2e4223c70368fb",
"assets/images/%25E9%25AD%259A%25E4%25BB%258B%25E3%2581%25A0%25E3%2581%2597%25E3%2581%25A4%25E3%2581%2591%25E9%25BA%25BA.jpg": "006eb1227ae6f8ef7dec240182c593ac",
"assets/images/%25E9%25AF%25B5%25E3%2581%25AE%25E5%2594%2590%25E6%258F%259A%25E7%2594%2598%25E9%2585%25A2%25E3%2581%2582%25E3%2582%2593.jpg": "b6134f05ea334c31097eec223e843ec8",
"assets/NOTICES": "2e7c28940532ca136c06c932aa74571b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "bfbeed9f5828784ed80060703201a0a8",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "d47ea81a1b22dd03fc7f8dadd2d5db9b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7cbed45893053d6c1ca39e7bb4f6458c",
"/": "7cbed45893053d6c1ca39e7bb4f6458c",
"main.dart.js": "1dc53aafcb804e8453e0e19464d92e2a",
"manifest.json": "2dc94b2f97f91c14e59442fe4a656c40",
"version.json": "b4e20945608f0225253700b58a850c5a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
