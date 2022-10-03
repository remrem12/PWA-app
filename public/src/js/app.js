var deferPrompt
if("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(() => console.log("service worker registered"))
}

window.addEventListener("beforeinstallprompt", function(event) {
  console.log("beforeinstallprompt fired")
  event.preventDefault()
  deferPrompt = event;
  return false
})