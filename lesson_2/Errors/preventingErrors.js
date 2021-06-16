/* eslint-disable max-len */
// Q: What is the best way to prevent errors?
// A: Consider where errors occur while writing code.

function lowerInitial(word) {
  let trimWord = word.trimStart();
  return trimWord[0] === undefined ? "-" : trimWord[0].toLowerCase();
}

console.log(lowerInitial("Isaac"));
console.log(lowerInitial("Jasmine"));
console.log(lowerInitial("  "));
console.log(lowerInitial("     L"));

// Q: When do errors typically occur?
// A: Errors typically occur when our assumptions are made in code. For example I assume here that all strings passed to lowerInitial() will always have an element at the index of 0 or non-zero length.

// The Guard Clause
// Q: What is a guard clause?
// A: A guard clause is a way to filter inputs. Guard Clauses are used to assure that data meets certain pre-conditions before it gets used. In the case above for the lowerInitial() function we need to make sure that the word "string" being passed is not empty.

// Detecting Edge Cases
// Q: What is fundamental to error prevention?
// A: Really examining the assumptions in my code
