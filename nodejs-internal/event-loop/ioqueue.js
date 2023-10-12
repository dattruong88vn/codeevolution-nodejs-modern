const fs = require("node:fs");

// example 1: set timeout delay 0 and I/O
// setTimeout(() => {
//   console.log("set timeout");
// }, 1000);

// fs.readFile(__dirname, () => {
//   console.log("readfile");
// });

// example 2: microtask, timer and i/o
fs.readFile(__dirname, () => {
  console.log("readfile");
});

process.nextTick(() => {
  console.log("next tick");
});
Promise.resolve().then(() => {
  console.log("promise");
});

setTimeout(() => {
  console.log("set timeout");
}, 0);

for (let i = 0; i < 20000000; i++) {}
