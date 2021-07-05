let result = [
  [1, 2],
  [3, 4],
].map((arr) => {
  return arr.map((num) => num * 2);
  // CALLBACK EXECUTION
  // Iteration 1:
  // - Inner map returns:
  // - - return 1. => 2
  // - - return 1. => 4
  // ----------------
  // Iteration 2:
  // - Inner map returns:
  // - - return 1. => 6
  // - - return 1. => 8

  // Inner Map Returns
  // - Iteration 1:
  // - - [2, 4]
  // ---------------
  // - Iteration 2:
  // - - [6, 8]
});

// Outer map returns:
// => [[2, 4], [6, 8]]

console.log(result);
