// Write two one-line expressions to count the number of lower-case t characters in each of the following strings:

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

// input: "The Flintstones Rock!"
// convert string into strings
// output: 2

function getOccurrences(string, character) {
  let arr = string.split("");

  let count = 0;
  arr.map((crrV) => {
    if (crrV === character) {
      count++;
    }
  });

  console.log(count);
}

getOccurrences(statement1, "t"); // => 2
getOccurrences(statement2, "t"); // => 0

console.log(statement1.split("").filter((char) => char === "t").length);
