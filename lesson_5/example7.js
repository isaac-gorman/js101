let result = [
  [8, 13, 27],
  ["apple", "banana", "cantaloupe"],
].map((arr) => {
  // Iteration 1:
  // - => arr = [8, 13, 27]
  // ---------------------
  // Iteration 2:
  // - => arr = ["apple", "banana", "cantaloupe"]
  return arr.filter((item) => {
    // Iteration 1:
    // - 1st loop => item = 8
    // - 2nd loop => item = 13
    // - 3rd loop => item = 27
    // ----------------------
    // Iteration 2:
    // - 1st loop => item = "apple"
    // - 2nd loop => item = 13
    // - 3rd loop => item = 27
    if (typeof item === "number") {
      // if it's a number
      return item > 13;
      // Iteration 1:
      // - 1st loop => false
      // - 2nd loop => false
      // - 3rd loop => true
    } else {
      return item.length < 6;
      // Iteration 1: n/a
      // ----------------
      // Iteration 2:
      // - 1st loop => true
      // - 2nd loop => false
      // - 3rd loop => false
    }
  });
  // Return of filter Callback Iteration 1:
  // - [27]
  // --------------------------------------
  // Return of filter Callback Iteration 1:
  // - ["apple"]
});
// Map:
// - Round 1 new values: => [ [27] ]
// - Round 1 new values: => [ ["apple"] ]
// --------------------------------------
// Final Return Array from map():
// => [ [27], ["apple"] ]

console.log(result);
