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

var a = 5;
window.aa = 10;

const cardOnline = document.querySelector(".card.online");
console.log(cardOnline);
const cardOffline = document.querySelector(".card.offline");
console.log(cardOffline);
function showConnectionState() {
  if (window.navigator.onLine) {
    cardOnline.classList.add("active");
    cardOffline.classList.remove("active");
  } else {
    cardOffline.classList.add("active");
    cardOnline.classList.remove("active");
  }
}
showConnectionState();
