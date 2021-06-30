function sumEvenNumberRow(rowNumber) {
  //
}

function createRow(startInteger, rowLength) {
  const row = [];

  while (row.length < rowLength) {
    row.push(startInteger);
    startInteger += 2;
  }

  return rows;
}

// Test Cases
console.log(createRow(2, 1)); // => [2]
console.log(createRow(4, 2)); // => [4, 6]
console.log(createRow(8, 3)); // => [8, 10, 12]

// Algorithm
// 1. Create an empty "row" array to contain the integers
// 2. Add the starting integer
// 3. Increment the starting integer by 2 to get to the next integer in the sequence
// 4. Repeat steps 2-3 until the integers in row are equal to the row length
// 5. Return the "row" array
