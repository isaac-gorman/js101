let numbers = [1, 2, 3, 4, 5];
let reverseNumbers = numbers.slice().reverse();
console.log("numbers: ", numbers); // [ 5, 4, 3, 2, 1 ]
console.log("reverseNumbers: ", reverseNumbers);

numbers = [1, 2, 3, 4, 5];
let sortNumbers = [...numbers].sort((num1, num2) => num2 - num1);
console.log("numbers: ", numbers); // [ 5, 4, 3, 2, 1 ]
console.log("sortNumbers: ", sortNumbers);

function withForEach(arr) {
  let newArray = [];

  arr.forEach((crrV) => {
    newArray.unshift(crrV);
  });

  console.log("withForEach: ", newArray);
}

withForEach(numbers);
console.log("numbers: ", numbers); // [ 5, 4, 3, 2, 1 ]
