// Challenge:
// - Given the following data structure, use a combination of methods, including filter, to return a new array identical in structure to the original, but containing only the numbers that are multiples of 3.

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

// Clarification:
// - How would I evaluate what numbers are multiples of three?
// console.log(18 % 3); // => 0

// I/O
// Input:
// -> [[2], [3, 5, 7], [9], [11, 15, 18]]

// Process:
// - access the sub-arrays of the arr
// - access each element of the sub-array
// - evaluate if the element is a multiple of 3.
// - if a element is a multiple of 3 push it to a new array
// - return the new array

// Output:
// new array -> [[3], [9], [15, 18]]

let onlyMultiplesOf = (integer, inArray) => {
  let newArray = inArray.map((subArray) => {
    let arrayOfMultiples = subArray.filter((number) => {
      let testCriterion = number % integer === 0;

      return testCriterion;
    });

    return arrayOfMultiples;
  });

  return newArray;
};

// console.log(onlyMultiplesOf(3, arr));
// console.log(onlyMultiplesOf(2, arr));
