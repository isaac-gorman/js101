// ARRAY ELEMENT REFERENCE

// Q: How are array elements collected?

// Q: How are arrays ordered?

// Q: What is the difference between Array.prototype.slice() & String.prototype.slice()?
/*

  Array.prototype.slice() returns a new shallow copy of an array, while String.prototype.slice() returns a shallow copy of a string

*/

// Q: How would you verify that the slice() returns a "shallow copy" of an array in the node console?

let originalArray = [1, 2, 3, ["a", "b", "c"]];
let newArray = originalArray.slice();
newArray[2] = "🦖";

// proofing a shallow copy
console.log(originalArray[4] === newArray[4]);
