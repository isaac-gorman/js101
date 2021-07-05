// - Challenge:
// Given the following data structure, return a new array with the same structure, but with the values in each subarray ordered -- alphabetically or numerically as appropriate -- in ascending order.

let arr = [
  ["b", "c", "a"],
  [2, 11, -3],
  ["blue", "black", "green"],
];

// input: array = [
//   ["b", "c", "a"],
//   [2, 11, -3],
//   ["blue", "black", "green"],
// ]

// process:
// - loop over each sub-array maybe with .map()
let sortedArrays = arr.map((subArr) => {
  // - evaluate what type of elements are in the array
  // - - it can be either an array of numbers or string values:
  return typeof subArr[0] === "number"
    ? subArr.sort((a, b) => Number(a) - Number(b))
    : subArr.sort();
  // - - - if it is an array of numbers sort by numbers
  // - - - else sort it by letters
});

// output: new array = [
//   ["a", "b", "c"],
//   [-3, 2, 11],
//   ["black", "blue", "green"]
// ]

// console.log(sortedArrays);

{
  let sortedArrays = arr.map((subArr) => {
    let copyArr = subArr.slice();
    return typeof subArr[0] === "number"
      ? copyArr.sort((a, b) => Number(a) - Number(b))
      : copyArr.sort();
  });

  console.log(sortedArrays);
}
