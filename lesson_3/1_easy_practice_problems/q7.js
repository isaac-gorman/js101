//Determine whether the name Dino appears in the strings below -- check each string separately):

function prompt(message) {
  console.log(message);
}

let str1 =
  "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

// prompt(str1.split(" "));

let check = (word, string) => {
  let containsWord = false;
  string = string.split(" ");
  prompt(string);

  string.forEach((crrV) => {
    if (crrV === word) {
      containsWord = true;
    }
  });

  prompt(containsWord);
};

// check("Dino", str2);
prompt(str1.includes("Dino")); // => false
prompt(str2.includes("Dino")); // => true
