self.addEventListener("install", function(event) {
  console.log("[Service Worker] install")
  event.waitUntil(
    caches.open("static")
      .then((cache) => {
        console.log("[Service Worker] precaching")
        cache.add("/")
        cache.add("/index.html")
        cache.add("/src/js/app.js")
      })
  )
})

self.addEventListener("activate", function(event) {
  return self.clients.claim()
})

// fetch event will be emited when the html, css, js, img,... loaded or call api
self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request)
      .then((res) => {
        if(res) {
          return res
        } else {
          return fetch(event.request)
        }
      })
  )
})