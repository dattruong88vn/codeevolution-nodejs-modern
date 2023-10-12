// example 1 --> Sync and nextTick Queue
// console.log("console.log 1");
// process.nextTick(() => {
//   console.log("next tick 1");
// });
// console.log("console.log 2");

// example 2 --> nextTick Queue and Promise Queue
// Promise.resolve().then(() => {
//   console.log("Promise 1");
// });
// process.nextTick(() => {
//   console.log("Next tick 1");
// });

// example 3 --> multi nextTick and Promise
process.nextTick(() => {
  console.log("Next tick 1");
});
process.nextTick(() => {
  console.log("Next tick 2");
  process.nextTick(() => {
    console.log("Next tick inside next tick 2");
  });
});
process.nextTick(() => {
  console.log("Next tick 3");
});

Promise.resolve().then(() => {
  console.log("Promise 1");
});
Promise.resolve().then(() => {
  console.log("Promise 2");
  Promise.resolve().then(() => {
    console.log("Promise inside promise 2");
  });
});
Promise.resolve().then(() => {
  console.log("Promise 3");
});
