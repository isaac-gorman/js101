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
// [x] deep copy the arr value
// [x] create a blank object named extractedData {}
// [x] iterate over each sub-array in the element
// [x] extract the sub-array values and assign them to the extractedData {} object
// [x] - extractedData[subArr[0]] = subArr[1]
// [x] repeat the above two steps for the entire length of the outer array
// [x] return extractedData {}

// Output:
/*
    new object = {
        a: 1,
        b: "two",
        sea: {c: 3},
        D: ["a", "b", "c"]  
    }
*/

let deepCopy = JSON.parse(JSON.stringify(arr));
let extractedData = {};

deepCopy.forEach((subArray) => {
  extractedData[subArray[0]] = subArray[1];
});

console.log(extractedData);
