// Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number at index 2, so that the array becomes [1, 2, 4, 5].

// input:
// - [1, 2, 3, 4, 5]
// - index of 2

// process:
// - remove element at index of 2
// - return the array

// output:
// - [1, 2, 4, 5]

let startArray = [1, 2, 3, 4, 5];
console.log(startArray.filter((currentValue, index) => index !== 2));
