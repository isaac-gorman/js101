let randomLetter = () => {
  let randomNumber = Math.floor(Math.random() * (122 - 96 + 1)) + 96;
  let letter = String.fromCharCode(randomNumber);
  return letter;
};

let randomNumber = () => {
  let number = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
  return number;
};

let generateUUID = () => {
  let UUID_Array = [];

  let UUID_Code;

  return UUID_Code;
};

// let sectionString = "";
// sectionString += "a";
// sectionString += 7;

// console.log(sectionString);
// // generate a random choice for either a string or number
// let randomChoice = Math.floor(Math.random() * (1 - 0 + 1) + 0);

// if (randomChoice === 0) {
//   // generate a random letter
//   let randomChar = randomLetter();
//   // then push that letter to the section string
//   sectionString += randomChar;
// } else {
//   let randomInt = randomNumber();
//   sectionString += randomInt;
// }

// console.log("sectionString: ", sectionString);

// return;
// Build and push section 1 of 5

let sectionString = "";
console.log("sectionString: ", sectionString);

while (sectionString.length < 8) {
  sectionString.trim();
  // generate a random choice for either a string or number
  let randomChoice = Math.floor(Math.random() * (1 - 0 + 1) + 0);

  if (randomChoice === 0) {
    // generate a random letter
    let randomChar = randomLetter();
    // then push that letter to the section string
    sectionString += randomChar;
  } else {
    let randomInt = randomNumber();
    sectionString += randomInt;
  }
}

console.log("sectionString: ", sectionString);
