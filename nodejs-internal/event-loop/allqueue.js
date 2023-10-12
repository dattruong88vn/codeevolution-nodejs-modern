const fs = require("node:fs");

fs.readFile(__dirname, () => {
  // 1.4. move from i/o polling to i/o queue
  console.log("2.1. readfile"); // 2.1. i/o queue
  setImmediate(() => {
    console.log("2.5. set immediate inside readfile"); // 2.5. check queue
    fs.readFile(__dirname, () => {
      // 3.1. move from i/o polling to i/o queue
      console.log("4.1. read file in nextick in readfile"); // 4.1. i/o queue
    });
    setImmediate(() => {
      console.log("3.2. immediate round 3"); // 3.2. check queue
    });
  });
  process.nextTick(() => {
    console.log("2.2. next tick inside readfile"); // 2.2. microtask next tick
  });
  Promise.resolve().then(() => {
    console.log("2.3. promise inside readfile"); // 2.3. micritask promise
  });
});

fs.readFile(__dirname, () => {
  // 1.5. move from i/o polling to i/o queue
  console.log("2.4. readfile 2"); // 2.4. i/o queue
});

process.nextTick(() => {
  console.log("1.1. next tick"); // 1.1. microtask next tick
});
Promise.resolve().then(() => {
  console.log("1.2. promise"); // 1.2. microtask promise
});

setTimeout(() => {
  console.log("1.3. set timeout"); // 1.3. timer queue
}, 0);

setImmediate(() => {
  console.log("1.6. immediate round 1"); // 1.6. check queue
});

for (let i = 0; i < 20000000; i++) {}

/**
 *  1.1. microtask next tick
 *  1.2. microtask promise
 *  1.3. timer queue
 *  1.4. move from i/o polling to i/o queue
 *  1.5. move from i/o polling to i/o queue
 *  1.6. check queue
 *
 *  2.1. i/o queue
 *  2.2. microtask next tick
 *  2.3. micritask promise
 *  2.4. i/o queue
 *  2.5. check queue
 *
 *  3.1. move from i/o polling to i/o queue
 *  3.2. check queue
 *
 *  4.1. i/o queue
 */
