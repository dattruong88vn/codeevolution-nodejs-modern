const https = require("node:https");
const start = Date.now();

// async
const MAX_CALLS = 4;
for (let i = 0; i < MAX_CALLS; i++) {
  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(i + 1, " : ", Date.now() - start);
      });
    })
    .end();
}
