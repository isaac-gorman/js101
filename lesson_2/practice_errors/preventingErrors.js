/* eslint-disable max-len */
// Q: What is the best way to prevent errors?
// A: Consider where errors occur while writing code.

function lowerInitial(word) {
  let trimWord = word.trim();
  console.log("trim word: ", trimWord);
  return trimWord[0] === undefined ? "-" : trimWord[0].toLowerCase();
}

// console.log(lowerInitial("Isaac"));
// console.log(lowerInitial("Jasmine"));
// console.log(lowerInitial("  "));
// console.log(lowerInitial("     L"));
// console.log(lowerInitial("     G  "));

// Q: When do errors typically occur?
// A: Errors typically occur when our assumptions are made in code. For example I assume here that all strings passed to lowerInitial() will always have an element at the index of 0 or non-zero length.

// The Guard Clause
// Q: What is a guard clause?
// A: A guard clause is a way to filter inputs. Guard Clauses are used to assure that data meets certain pre-conditions before it gets used. In the case above for the lowerInitial() function we need to make sure that the word "string" being passed is not empty.

// Q: When do should we use guard clauses?
// A: It is useful to use a guard clause whenever a function can not guarantee what shape of data will be passed to it. In other words when an function can't guarantee valid arguments.

// Detecting Edge Cases
// Q: What is fundamental to error prevention?
// A: Really examining the assumptions in my code

// Q: When considering edge cases what is a good starting point?
// A: Consider the inputs into the program and what is expected from the input in order to make the program work. Then consider inputs which would break the program, you then may want to write a guard clause in order to assure that the right input is entering the program. Finally you may want to consider what particular combinations of inputs can cause error or pass the guard clause unintentionally.

// Planning Your Code
// Q: Although I can't consider all the possible edge cases before writing my code I can do what instead?
// A: I can plan my code ahead of time.

// Q: What is an effective way to plan ahead?
// A: Write out common use cases of a new function, and check how the function handles them.

// Example: I am writing a function that inserts a new element to an array in it's proper alphabetically sorted position
// input:
// - array of strings
// - string

// output:
// - array of strings sorted alphabetically
let arr = ["Australia", "Cuba", "Senegal"];

function alphaInsert(array, string) {
  // Guard Clause
  if (typeof string !== typeof "string") {
    console.log(
      `Invalid value you entered a ${typeof string} value only non-empty string values are allowed`
    );
    return "-Entered Number-";
  }
  let trimString = string.trimStart().trimEnd();
  if (trimString.length === 0) {
    console.log("Invalid empty string value");
    return "-Entered Empty String";
  }

  array.push(trimString);
  array.sort();
  return array;
}

alphaInsert(arr, "Brazil");
alphaInsert(arr, " ");
// alphaInsert(arr, 2);
// alphaInsert(arr, {});
// alphaInsert(arr, true);
// alphaInsert(arr, NaN);
// alphaInsert(arr, "Israel");
// alphaInsert(arr, "Iraq");
// alphaInsert(arr, "Romania");
// alphaInsert(arr, "Greece");
// alphaInsert(arr, "");
// alphaInsert(arr, "  ");

console.log(arr.join(", "));
