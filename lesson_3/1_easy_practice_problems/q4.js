// input string
// convert string to all lowercase
// convert the character at the string[0].toUpperCase
// output string with only the first character capitalized

// Slice syntax
// slice(beginIndex, endIndex)

let prompt = (message) => {
  console.log(message);
};

let upperCaseString = (str) => {
  let newString = str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
  prompt(newString);
};

let string = "the Munsters are CREEPY and Spooky.";

upperCaseString(string);

prompt(string.charAt(0).toUpperCase() + string.substring(1).toLowerCase());
