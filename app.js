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

function showConnectionState() {
  const cardOnline = document.querySelector(".card.online");
  console.log(cardOnline);
  const cardOffline = document.querySelector(".card.offline");
  console.log(cardOffline);
  if (window.navigator.onLine) {
    cardOnline.classList.add("active");
    cardOffline.classList.remove("active");
  } else {
    cardOffline.classList.add("active");
    cardOnline.classList.remove("active");
  }
}
// Перевірка, що сторінка завантажена
window.addEventListener("load", function () {
  // showConnectionState();
});

// Функція для виміру швидкості
function measureDownloadSpeed(callback) {
  // URL файлу для завантаження (змініть на свою URL)
  const downloadUrl = "https://nedvlor.github.io/pwa/Happy.mp3";

  // Засікаємо початковий час
  const startTime = window.performance.now();

  // Запит для завантаження файлу
  fetch(downloadUrl)
    .then((response) => {
      return response.blob();
    })
    .then((blob) => {
      // Засікаємо кінцевий час
      const endTime = window.performance.now();

      clearInterval(timer);

      // Обчислюємо тривалість завантаження
      const duration = (endTime - startTime) / 1000; // переводимо в секунди

      // Обчислюємо швидкість
      const bitsLoaded = blob.size * 8;
      const speedBps = bitsLoaded / duration;
      const speedKbps = (speedBps / 1024).toFixed(2);
      const speedMbps = (speedKbps / 1024).toFixed(2);

      // Викликаємо callback з обчисленими значеннями
      callback(speedKbps, speedMbps);
    })
    .catch((error) => {
      console.error("Error during download:", error);
    });
}

const timer = setInterval(() => {
  console.log("downolading");
}, 1000);
function start() {
  console.log("Start");
  const button = document.querySelector(".container");
  const downolading = document.querySelector(".downolading");
  const result = document.querySelector(".result");

  // Використовуємо функцію
  measureDownloadSpeed((speedKbps, speedMbps) => {
    console.log(`Speed: ${speedKbps} kbps / ${speedMbps} Mbps`);
    downolading.style.display = "none";
    result.style.display = "block";
    result.innerHTML = `Speed: ${speedKbps} kbps / ${speedMbps} Mbps`;
  });
  button.style.display = "none";
  downolading.style.display = "block";
}
