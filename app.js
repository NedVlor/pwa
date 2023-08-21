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
