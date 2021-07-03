// input: "The Flintstones Rock"
// - create an empty object called letterOccurrences
// - turn the string into an array
// - filter that array for everything but empty values
// - count the occurrence of each letter in the array
// output:
/*

{ 
    T: 1, h: 1, e: 2, F: 1, l: 1,
    i: 0, n: 0, t: 0, s: 0, t: 0,
    o: 0, n: 0, e: 0, s R: 0, o: 0,
    c: 0, k: 0, 
}

*/

let statement = "The Flintstones Rock";
let lettersArray = statement.split("").filter((crrV) => {
  return crrV !== " ";
});

let letterOccurrences = {};
let getOccurrences = lettersArray.forEach((crrV, index, currentArray) => {
  let occurrence = currentArray.filter((innerCrrV) => innerCrrV === crrV);
  letterOccurrences[crrV] = occurrence.length;
});
// console.table(letterOccurrences);

let charInStatement = statement.split("").filter((char) => char !== " ");
let result = {};

charInStatement.forEach((char) => {
  result[char] = result[char] || 0;
});

// Where we are result[char] = result[char] || 0; we are taking advantage of 'short-circuiting'
// Q: What is short-circuiting?
// A: When you evaluate the left operand of the || (or operator)
