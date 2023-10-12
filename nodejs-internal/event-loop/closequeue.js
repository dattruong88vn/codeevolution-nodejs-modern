const fs = require("node:fs");

const readableStream = fs.createReadStream(__dirname);

readableStream.on("close", () => {
  console.log("close event");
});

readableStream.close();

setImmediate(() => console.log("set immediate"));
setTimeout(() => {
  console.log("set timeout");
}, 0);
Promise.resolve().then(() => console.log("promise"));
process.nextTick(() => console.log("next tick"));
