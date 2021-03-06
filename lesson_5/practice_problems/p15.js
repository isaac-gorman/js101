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

let result = arr.filter((subObject) => {
  let subArrays = Object.values(subObject);

  let filterCriterion = subArrays.every((nestedArray) => {
    let allEvenNumbers = nestedArray.every((num) => num % 2 === 0);
    return allEvenNumbers;
  });

  return filterCriterion;
});

console.log(result);

// Possible Solution: with nested every()
{
  // console.log(
  //   arr.filter((obj) => {
  //     return Object.values(obj).every((subArr) => {
  //       return subArr.every((num) => num % 2 === 0);
  //     });
  //   })
  // );
  // return;
}
