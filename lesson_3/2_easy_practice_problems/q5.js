// Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number at index 2, so that the array becomes [1, 2, 4, 5].

// input:
// - [1, 2, 3, 4, 5]
// - index of 2

// process:
// - remove element at index of 2
// - return the array

// output:
// - [1, 2, 4, 5]

function prompt(message) {
  console.log(message);
}

let startArray = [1, 2, 3, 4, 5];
// console.log(startArray.filter((currentValue, index) => index !== 2));

// Using the splice()
// Q: What does the splice method do?
// A: The splice method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// Q: How do I used the splice method?
// A: the splice syntax is as follows
/*
 splice(startIndex)
 splice(startIndex, deleteCount)
 splice(start, deleteCount, replacementItem1)
 splice(start, deleteCount, replacementItem1, replacementItem2)
*/
startArray.splice(2, 1, "🦖");
prompt(startArray);
