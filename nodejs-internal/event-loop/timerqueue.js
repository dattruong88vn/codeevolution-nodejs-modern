// example 1: timer queue and microtask queue
// setTimeout(() => {
//   console.log("Set time out 1");
//   Promise.resolve().then(() => {
//     console.log("Promise inside set timeout 1");
//   });
// }, 0);
// setTimeout(() => {
//   console.log("Set time out 2");
//   process.nextTick(() => {
//     console.log("Next tick inside set timeout 2");
//   });
// }, 0);
// setTimeout(() => {
//   console.log("Set time out 3");
// }, 0);

// process.nextTick(() => {
//   console.log("Next tick 1");
// });
// process.nextTick(() => {
//   console.log("Next tick 2");
//   process.nextTick(() => {
//     console.log("Next tick inside next tick 2");
//   });
// });
// process.nextTick(() => {
//   console.log("Next tick 3");
// });

// Promise.resolve().then(() => {
//   console.log("Promise 1");
//   Promise.resolve().then(() => {
//     console.log("Promise inside promise 1");
//   });
// });
// Promise.resolve().then(() => {
//   console.log("Promise 2");
//   process.nextTick(() => {
//     console.log("Next tick inside promise 2");
//   });
// });
// Promise.resolve().then(() => {
//   console.log("Promise 3");
// });

// example 2: timer queue with diffent delay time
setTimeout(() => {
  console.log("Set timeout 1");
}, 1000);
setTimeout(() => {
  console.log("Set timeout 2");
}, 500);
setTimeout(() => {
  console.log("Set timeout 3");
}, 0);
