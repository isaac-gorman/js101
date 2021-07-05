// Coding Challenge:
// - Using the forEach method, write some code to output all vowels from the strings in the arrays. Don't use a for or while loop.

let obj = {
  first: ["the", "quick"],
  second: ["brown", "fox"],
  third: ["jumped"],
  fourth: ["over", "the", "lazy", "dog"],
};

let objKeys = Object.keys(obj);
let vowels = "aeiou";

let vowelsInObj = objKeys.map((key) => {
  return obj[key].map((word) => {
    let characterArrays = word.split("");
    let vowelsInWord = characterArrays.filter((char) => {
      return vowels.includes(char);
    });
    return vowelsInWord;
    // console.log(vowelsInWord);
  });
});

console.log(vowelsInObj.flat(Infinity));
