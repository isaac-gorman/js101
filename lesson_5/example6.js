let result = [
  { a: "ant", b: "elephant" },
  { c: "cat", d: "dog" },
  { G: "Goat", l: "log" },
  { r: "lump", h: "hope" },
].filter((object) => {
  let objectKeys = Object.keys(object);
  // 1st Iteration:
  // - objectKeys = [a, b]
  // ---------------------
  // 2nd Iteration:
  // - objectKeys = [c, d]
  return objectKeys.every((key) => {
    let elementRef = object[key][0];
    // console.log("elementRef: ", elementRef);
    let comparisonResult = elementRef === key;
    // console.log(comparisonResult);
    return comparisonResult;
    // 1st Iteration:
    // - true
    // - false
    // - - false
    // ---------------------
    // 2nd Iteration:
    // - true
    // - true
    // - - true
  });
}); // => [ { c: 'cat', d: 'dog' }, { G: 'Goat', l: 'log' } ]

console.log(result);

// [
//   { a: "ant", b: "elephant" },
//   { c: "cat", d: "dog" },
// ].filter((object) => {
//   return Object.keys(object).every((key) => object[key][0] === key);
// });
