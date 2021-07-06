// Challenge:
// - Given the following data structure, write some code to return an array which contains only the objects where all the numbers are even.

// Input:
let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

// Process:
// - iterate over each object in the outer array
// - on each object access each of its sub-arrays
// - on each sub-array preform a test criterion to evaluate if every element is even
// - if every element is even return it
// - return the onlyEvensObjects

// Output:
// -> new array [{ e: [8], f: [6, 10] }]

let result = arr.map((subObject) => {
  return Object.keys(subObject).filter((key) => subObject[key] % 2 === 0);
});

console.log(result);
