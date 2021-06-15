/* eslint-disable max-len */
// Q: What is the best way to prevent errors?
// A: Consider where errors occur while writing code.

function lowerInitial(word) {
  return word[0] === undefined ? "empty" : word[0].toLowerCase();
}

console.log(lowerInitial("Isaac"));
console.log(lowerInitial("Jasmine"));
console.log(lowerInitial(""));

// Q: When do errors typically occur?
// A: Errors typically occur when our assumptions are made in code. For example I assume here that all strings passed to lowerInitial() will always have an element at the index of 0 or non-zero length.
