let arr = ["foo", "bar", "qux"];
arr["boo"] = "hoo";
arr[-1] = 374;

// console.log(Object.values(arr).length); // => ["foo", "bar", "qux", "hoo", "374"]

// Q: How would I convert arr's elements and value pairs into an object
// console.log(Object.keys(arr).length);

let newObject = {};

for (let index = 0; index < Object.values(arr).length; index++) {
  newObject[Object.keys(arr)[index]] = Object.values(arr)[index];
}

// console.log(newObject);

let abcArr = ["a", "b", "c", "d", "e", "f"];
// console.log(abcArr.join("-⚡️-")); // => 'abcdef'

// Q: How would I convert and objects key: value pairs into an array of nested values pairs
// console.log(newObject);
// console.log(Object.entries(newObject));

// ARRAY ELEMENT ASSIGNMENT
let numbers = [1, 2, 3, 4];
// numbers[0] = numbers[0] + 1; // => 2
// numbers; // => [ 2, 2, 3, 4 ]

// numbers.forEach((crrV, index) => numbers[index]++);
// console.log(numbers);

// for (let index = 0; index < numbers.length; index++) {
//   numbers[index]++;
// }
// console.log(numbers);
