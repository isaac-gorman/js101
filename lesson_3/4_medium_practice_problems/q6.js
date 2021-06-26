// What do you think the following code will output?
// How can you reliably test if a value is NaN?
let nanArray = [NaN];

console.log(isNaN(nanArray[0])); // => true
console.log(nanArray[0] === NaN); // => false
