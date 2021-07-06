let randomLetter = () => {
  let randomNumber = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
  let letter = String.fromCharCode(randomNumber);
  return letter;
};

let randomNumber = () => {
  let number = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
  return number;
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

let generateSections = (array) => {
  let UUID_Array = [];

  array.forEach((digitSequence) => {
    let sectionCharacters = generateRandomSection(digitSequence);
    UUID_Array.push(sectionCharacters);
  });

  return UUID_Array;
};

let generateUUID = () => {
  let UUID_Array = generateSections([8, 4, 4, 4, 12]);

  let UUID_Code = UUID_Array.join("-");

  console.log(UUID_Code);
  return UUID_Code;
};
generateUUID();
