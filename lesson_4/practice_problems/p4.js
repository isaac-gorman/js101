let problem = ["ant", "bear", "caterpillar"].pop();
console.log(typeof problem); // => string

// Q: What did I just learn?
// A: I just realized that pop actually returns the last element of an array not the last element as an array. Therefor if I where to pop an array of integers pop() would return the last integer and remove it form the original array.

let lastNum = [1, 2, 3].pop();
console.log(typeof lastNum); // => number
