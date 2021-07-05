let result = [
  [
    [1, 2],
    [3, 4],
  ],
  [5, 6],
].map((arr) => {
  // Iteration 1:
  // arr = [ [1, 2], [3, 4],]
  // --------------------------
  // Iteration 1:
  // arr =  [5, 6]
  return arr.map((elem) => {
    // Iteration 1:
    // round 1: elem => [1, 2]
    // --------------------------
    // Iteration 2:
    // round 1 = 5
    // round 2 = 6

    if (typeof elem === "number") {
      // it's a number
      return elem + 1;
    } else {
      // it's an array
      return elem.map((number) => number + 1);
      // number = 1 => 2
    }
  });
  // => [2, 3]
  // => [4, 5]
  // 2nd map return => [[2, 3], [4, 5]]
});
// 1st map append result after first iteration => [[2, 3], [4, 5]]

// final result => [[2, 3], [4, 5], [6, 7]]
console.log(result);
