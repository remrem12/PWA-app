self.addEventListener("install", function(event) {
  console.log("[Service Worker] Installing Service Worker ...")
})

self.addEventListener("activate", function(event) {
  console.log("[Service Worker] Activating Service Worker ...")
  return self.clients.claim()
})

// fetch event will be emited when the html, css, js, img,... loaded or call api
self.addEventListener("fetch", function(event) {
  console.log("[Service Worker] Fetching something ...")
  // event.respondWith()
})