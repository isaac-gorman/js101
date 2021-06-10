// In-formal pseudo code
{
  // Given a collection of Numbers
  // Iterate over the collection one by one
  // - 1) save the first value as the starting value
  // - 2) for each iteration, compare the saved value with the current value
  // - 3) if the current number is greater
  // - - reassign the saved value as the current value
  // - otherwise, if the the current value is smaller or equal move to the next value in the collection
  // After iterating through the collection return the saved value
}

// Formal pseudo code
{
  // START
  // Given a collection of integers called "numbers"
  // SET iterator = 1
  // SET savedNumber = value within the numbers collection at space
  // WHILE iterator <= length of numbers
  // - SET currentNumber = value within numbers of collection at space "iterator"
  // - IF currentNumber is
}

let arr1 = [3, 4, 55, 66, 1, 100, -3];
let arr2 = [7, 1, 5, 6, 11, 200, 3];
let arr3 = [44, 111, 888, 888, 22, 1_000, 1];

function findGreatestValue(arr) {
  let greatestValue = -Infinity; // or arr[0]

  // using for loop
  {
    //   for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] > greatestValue) greatestValue = arr[i];
    //   }
  }
  // or

  // using forEach method
  {
    arr.forEach((crrV) => {
      if (crrV > greatestValue) greatestValue = crrV;
    });
  }
  return greatestValue;
}

console.log(findGreatestValue(arr1)); // --> 100
console.log(findGreatestValue(arr2)); // --> 200
console.log(findGreatestValue(arr3)); // --> 1_000
