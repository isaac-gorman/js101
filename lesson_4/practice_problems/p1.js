// Q: What is the return value of "filter" method call below? Why?

let p1 = [1, 2, 3].filter((num) => "Hi");
console.log(p1); // => [1, 2, 3]

// A: "Hi" evaluates to truthy so filter will return every element in the array

// Solution Explanation:
// - filter returns a callback based on the the truthiness of the callback's return value. In this case 'Hi' is evaluated as truthy, therefore filter will return a new array containing all the elements of the original array

// Example of empty array return value
let p2 = [1, 2, 3].filter((num) => "");
console.log(p2); // => []

// Empty strings "" always evaluate to falsy
