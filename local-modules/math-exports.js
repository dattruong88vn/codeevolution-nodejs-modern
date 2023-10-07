const add = (a, b) => {
  return a + b;
};
const subtract = (a, b) => {
  return a - b;
};

exports = {
  add,
  subtract,
};

/**
 * module.exports (ME) and exports (E)
 *
 * - E is reference to ME.
 * - Others module receive ME object from require fn
 * - So if assign an object to E, it's just change reference of E from ME to object, ME is still empty object
 * - Always use ME instead E
 */
