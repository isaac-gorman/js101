let alphabet = "abcdefghijklmnopqrstuvwxyz";

let iterateOverString = (string) => {
  for (let counter = 0; counter < string.length; counter++) {
    console.log(string[counter]);
  }
};

// iterateOverString(alphabet);

let numberOfPets = {
  dog: 2,
  cats: 3,
  birds: 2,
  fish: 2,
};

let iterateOverObject = (object) => {
  let objectValues = Object.values(object);
  let objectKeys = Object.keys(object);
  for (let index = 0; index < objectKeys.length; index++) {
    console.log(`${objectKeys[index]}: ${objectValues[index]}`);
  }
};

// iterateOverObject(numberOfPets);
