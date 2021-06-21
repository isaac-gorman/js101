// Informal Pseudo
{
  // Create a function that takes an array of integers
  // Set an empty array called everyOther
  // Create a for loop that iterates every 2
  // Push value of every iterator value to the everyOther array
  // returns a new array with every other integer
}

// Formal Pseudo
{
  // START
  // FUNCTION
  // getEveryOtherValue(arr) {
  // SET
  // everyOther = []
  // WHILE i < arr.length; i += 2;
  // everyOther.push(arr[i])
  // }
  // RETURN everyOther
}

function getEveryOtherValue(arr) {
  let everyOther = [];
  for (let i = 0; i < arr.length; i += 2) {
    everyOther.push(arr[i]);
  }
  return everyOther;
}

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getEveryOtherValue(arr1)); // --> [1, 3, 5, 7, 9]
