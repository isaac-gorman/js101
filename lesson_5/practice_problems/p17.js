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

let generateRandomSection = (numOfCharacter) => {
  let sectionString = "";

  while (sectionString.length < numOfCharacter) {
    sectionString.trim();

    let randomChoice = Math.floor(Math.random() * (1 - 0 + 1) + 0);

    if (randomChoice === 0) {
      let randomChar = randomLetter();
      sectionString += randomChar;
    } else {
      let randomInt = randomNumber();
      sectionString += randomInt;
    }
  }

  return sectionString;
};

console.log(generateRandomSection(8));
