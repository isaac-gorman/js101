let randomLetter = () => {
  let randomNumber = Math.floor(Math.random() * (122 - 96 + 1)) + 96;
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

let generateUUID = () => {
  let UUID_Array = [];
  // 8 - 4 - 4 - 4 - 12;
  let section8 = generateRandomSection(8);
  UUID_Array.push(section8);

  let sectionFirst4 = generateRandomSection(4);
  UUID_Array.push(sectionFirst4);

  let sectionSecond4 = generateRandomSection(4);
  UUID_Array.push(sectionSecond4);

  let sectionThird4 = generateRandomSection(4);
  UUID_Array.push(sectionThird4);

  let section12 = generateRandomSection(12);
  UUID_Array.push(section12);

  let UUID_Code = UUID_Array.join("-");

  return UUID_Code;
};

console.log(generateUUID());
