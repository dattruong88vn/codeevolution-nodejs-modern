setImmediate(() => {
  console.log("immediate 1");
});
setImmediate(() => {
  console.log("immediate 2");
  process.nextTick(() => {
    console.log("next tick 1");
    Promise.resolve().then(() => {
      console.log("promise 1");
    });
  });
});
setImmediate(() => {
  console.log("immediate 3");
});
