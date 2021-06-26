function prompt(message) {
  console.log(message);
}

let advice =
  "Few things in life are as important as house training your pet dinosaur.";

let returnJustBefore = (word, string) => {
  let stringArray = string.split(" ");
  let indexOfWord = stringArray.indexOf(word);
  let justBeforeWord = stringArray.slice(0, indexOfWord).join(" ");
  prompt(justBeforeWord);
};

returnJustBefore("house", advice);
returnJustBefore("life", advice);
