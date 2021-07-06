// Challenge:
// - Given the following data structure, write some code that returns an object where the key is the first item in each sub-array, and the value is the second.

// Input:
let arr = [
  ["a", 1],
  ["b", "two"],
  ["sea", { c: 3 }],
  ["D", ["a", "b", "c"]],
];

// Process:
// - deep copy the arr value
// - create a blank object named extractedData {}
// - iterate over each sub-array in the element
// - extract the sub-array values and assign them to the extractedData {} object
// - - extractedData[subArr[0]] = subArr[1]
// - repeat the above two steps for the entire length of the outer array
// - return extractedData {}

// Output:
/*
    new object = {
        a: 1,
        b: "two",
        sea: {c: 3},
        D: ["a", "b", "c"]  
    }
*/
