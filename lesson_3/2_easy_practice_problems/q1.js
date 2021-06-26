// Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":

function prompt(message) {
  console.log(message);
}

let advice =
  "Few things in life are as important as house training your pet dinosaur.";

function switchWord(string, targetWord, switchWord) {
  let stringArray = string.split(" ");
  //   prompt((stringArray[0] = "hello"));
  stringArray.forEach((crrV) => {
    if (crrV === targetWord) {
      stringArray[stringArray.indexOf(crrV)] = switchWord;
    }
  });
  prompt(stringArray.join(" "));
}

// switchWord(advice, "important", "urgent");

// or use an existing array method
// prompt(advice.replace("life", "vida"));
