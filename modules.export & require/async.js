const https = require("https");
const fs = require("fs");

https.get("https://api.fbi.com", (res) => {
  res.on("data", (data) => {
    console.log("Response Data:", data);
  });
});

fs.readFile("./gossip.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  console.log("File Data:", data);
});

setTimeout(() => {
  console.log("Here for 5 seconds");
}, 5000);
