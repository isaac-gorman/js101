// Challenge:
// - Given the following data structure, sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain.
// - Since 1 + 3 < 1 + 7 < 1 + 5 + 3, the sorted array should look like this:

let arr = [
  [1, 6, 7],
  [1, 5, 3],
  [1, 8, 3],
];

// Input:
// -> [[ 1, 6, 7 ], [ 1, 5, 3 ], [ 1, 8, 3 ]]

// Process:
// - access each sub-array
// - access each integer of the sub-array
// - sum all the odd numbers

// Output:
// -> [[ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ]]

let sortOdd = (array) => {
  let deepCopyArray = JSON.parse(JSON.stringify(array));
  deepCopyArray.push(["!"]);
  return deepCopyArray;
};

console.log(sortOdd(arr));
console.log(arr);
