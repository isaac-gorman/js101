let arr = [1, 2];

// issue code
// arr.map((subArr) => arr.pop());// => [ 2, <1 empty item> ]

// solution code
let newArray = arr.filter((num, index, array) => {
  return index !== array.length - 1;
});

console.log("original array: ", arr);
console.log("new array: ", newArray);
