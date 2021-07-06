// Challenge:
// - Given the following data structure, sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain.
// - Since 1 + 3 < 1 + 7 < 1 + 5 + 3, the sorted array should look like this:

// Input:
// -> [[ 1, 6, 7 ], [ 1, 5, 3 ], [ 1, 8, 3 ]]

// Process:
// - access each sub-array
// - access each integer of the sub-array
// - sum all the odd numbers and assign it to a sum total
// - compare that sum total with the sum total of the preceding array

// Output:
// -> [[ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ]]

let testArrays = {
  arr1: [
    [1, 6, 7],
    [1, 5, 3],
    [1, 8, 3],
  ],
  arr2: [
    [4, 8, 2],
    [4, 5, 10],
    [2, 6, 7],
    [1, 3, 7],
  ],
};

let sortEvens = (array) => {
  return array.sort((arrayA, arrayB) => {
    let aSumEvens = arrayA
      .filter((num) => num % 2 === 0)
      .reduce((acc, crV) => (acc += crV), 0);

    let bSumEvens = arrayB
      .filter((num) => num % 2 === 0)
      .reduce((acc, crV) => (acc += crV), 0);

    let testCriterion = aSumEvens - bSumEvens;

    return testCriterion;
  });
};

let sortOdds = (array) => {
  return array.sort((arrayA, arrayB) => {
    let aSumOdds = arrayA
      .filter((num) => num % 2 !== 0)
      .reduce((acc, crV) => (acc += crV), 0);

    let bSumOdds = arrayB
      .filter((num) => num % 2 !== 0)
      .reduce((acc, crV) => (acc += crV), 0);

    let testCriterion = aSumOdds - bSumOdds;

    return testCriterion;
  });
};

let deepCopyObj = (array) => JSON.parse(JSON.stringify(array));

let sortArray = (array, evenOrOdd) => {
  let deepCopyArray = deepCopyObj(array);
  let sortedArray;

  evenOrOdd === "odd"
    ? (sortedArray = sortOdds(deepCopyArray))
    : (sortedArray = sortEvens(deepCopyArray));

  return sortedArray;
};

// console.log(sortArray(testArrays["arr1"], "even"));
// console.log(sortArray(testArrays["arr2"], "even"));
// console.log(sortArray(testArrays["arr2"], "odd"));
