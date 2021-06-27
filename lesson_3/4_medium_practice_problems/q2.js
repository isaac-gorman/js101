// Q: Starting with the string:

let munstersDescription = "The Munsters are creepy and spooky.";

// Return a new string that swaps the case of all of the letters:
// `tHE mUNSTERS ARE CREEPY AND SPOOKY.`;

function invertStringCase(string) {
  let newString = "";

  for (let index = 0; index < string.length; index++) {
    if (string[index] === string[index].toUpperCase()) {
      newString += string[index].toLowerCase();
    } else {
      newString += string[index].toUpperCase();
    }
  }

  console.log(newString);
}

invertStringCase(munstersDescription);

function methodOverloadingInversion(string) {
  let newString = string
    .split("")
    .map((char) => {
      if (char === char.toUpperCase()) {
        return char.toLowerCase();
      } else {
        return char.toUpperCase();
      }
    })
    .join("");

  console.log(newString);
}

methodOverloadingInversion(munstersDescription);
