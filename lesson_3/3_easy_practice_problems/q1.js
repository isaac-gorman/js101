// Q: Write three different ways to remove all of the elements from the following array:

let numbers = [1, 2, 3, 4];

// 1
// numbers = [];

// 2
function removeAllWhile() {
  // or while (numbers.length)
  while (numbers.length !== 0) {
    console.log(numbers);
    numbers.pop();
  }

  console.log(numbers);
}

// 3
function removeAllFor() {
  for (let index = 0; numbers.length !== 0; index++) {
    console.log(numbers);
    numbers.pop();
  }
  console.log(numbers);
}

removeAllFor();

// 4
numbers.length = 0;

// 5
numbers.splice(0, numbers.length);
