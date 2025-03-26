// Service Worker for PWA
self.addEventListener("install", (event) => {
    console.log("Service Worker installing...");
    event.waitUntil(
      caches.open("todo-cache").then((cache) => {
        return cache.addAll([
            "/index.html",
            "/App.jsx",
            "/index.css",
            "/App.css",
            "/main.jsx",
            "/page/Home.jsx",
            "/page/TaskContext.jsx",
            "/page/TaskList.jsx",
            "/components/StatusBar.jsx",
            "/components/TaskCreate.jsx",
            ]);
      })
    );
  });
  
  self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });