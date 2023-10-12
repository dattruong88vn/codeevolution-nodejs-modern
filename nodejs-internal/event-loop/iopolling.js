const fs = require("node:fs");

fs.readFile(__dirname, () => {
  console.log("readfile");
});

setTimeout(() => {
  console.log("set timeout");
  setTimeout(() => {
    console.log("set timeout inside set timeout");
  }, 0);
}, 0);

setImmediate(() => {
  console.log("Set immediate");
});

for (let i = 0; i < 20000000; i++) {}
