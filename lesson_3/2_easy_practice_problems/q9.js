// Back in the stone age (before CSS), we used spaces to align things on the screen. If we have a 40-character wide table of Flintstones family members, how can we center the following title above the table with spaces?

let title = "Flintstones Family Members";
let centerSpaces = (40 - title.length) / 2;

function whiteSpaces(amount) {
  let whiteSpace = "";
  for (let index = 0; index < amount; index++) {
    whiteSpace += "-";
  }
  return whiteSpace;
}

console.log(whiteSpaces(centerSpaces) + title + whiteSpaces(centerSpaces));
console.log(whiteSpaces(40));
