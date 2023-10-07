// // 1st pattern
// const add = (a, b) => {
//   return a + b;
// }
// module.exports = add;

// -------------------------------------------

// // 2nd pattern
// module.exports = add = (a, b) => {
//   return a + b;
// };

// -------------------------------------------

// // 3rd
// const add = (a, b) => {
//   return a + b;
// };
// const subtract = (a, b) => {
//   return a - b;
// };
// module.exports = { add, subtract };

// -------------------------------------------

// // 4th
// module.exports.add = (a, b) => {
//   return a + b;
// };
// module.exports.subtract = (a, b) => {
//   return a - b;
// };

// -------------------------------------------

// 5th
exports.add = (a, b) => {
  return a + b;
};
exports.subtract = (a, b) => {
  return a - b;
};
