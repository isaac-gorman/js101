function createRow(startInteger, rowLength) {
  let row = [];
  let currentInteger = startInteger;

  while (row.length < rowLength) {
    row.push(currentInteger);
    currentInteger += 2;
  }

  return row;
}

function sumOfIntegers(lastArray) {
  return lastArray.reduce((acc, crrV) => (acc += crrV), 0);
}

function sumEvenNumberRow(rowNumber) {
  let rows = [];
  let startInteger = 2;
  for (let currentRowNum = 1; currentRowNum <= rowNumber; currentRowNum++) {
    let row = createRow(startInteger, currentRowNum);
    rows.push(row);
    startInteger = row[row.length - 1] + 2;
  }

  let finalRow = rows.pop();
  let sum = sumOfIntegers(finalRow);

  return sum;
}

// TEST CASES
// - sumEvenNumberRow
console.log(sumEvenNumberRow(1)); // => 2
console.log(sumEvenNumberRow(2)); // => 10
console.log(sumEvenNumberRow(3)); // => 30
console.log(sumEvenNumberRow(4)); // => 68

// - createRow
// console.log(createRow(2, 1)); // => [2]
// console.log(createRow(4, 2)); // => [4, 6]
// console.log(createRow(8, 3)); // => [8, 10, 12]

// Algorithm
// 1. Create an empty "row" array to contain the integers
// 2. Add the starting integer
// 3. Increment the starting integer by 2 to get to the next integer in the sequence
// 4. Repeat steps 2-3 until the integers in row are equal to the row length
// 5. Return the "row" array
