if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then((registration) => {
      console.log("Service Worker зареєстровано:", registration);
    })
    .catch((error) => {
      console.log("Service Worker реєстрація не вдалася:", error);
    });
}
console.log("Initially " + (window.navigator.onLine ? "on" : "off") + "line");

window.addEventListener("online", () => console.log("Became online"));
window.addEventListener("offline", () => console.log("Became offline"));
