// Task - 1 -> Open a database
// Task - 2 -> Create objectStore (can be created only in upgraded event)
// Task - 3 ->

let db;
let openRequest = indexedDB.open("myDatabase");

// If open connection for database is success
openRequest.addEventListener("success", (e) => {
  // If database already exists
  db = openRequest.result;
});

// If any error during the connection
openRequest.addEventListener("error", (e) => {
  console.log("DB error", e);
});

// If any upgradation in the database
openRequest.addEventListener("upgradeneeded", (e) => {
  // DB upgraded and also for initial DB Creation
  db = openRequest.result;

  // Task - 2 -> Create objectStore (can be created only in upgraded event)
  // KeyPath is used to identify uniquely
  db.createObjectStore("video", { keyPath: "id" });
  db.createObjectStore("image", { keyPath: "id" });
});
