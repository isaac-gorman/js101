// Coding Challenge:
// - Using the forEach method, write some code to output all vowels from the strings in the arrays. Don't use a for or while loop.

let obj = {
  first: ["the", "quick"],
  second: ["brown", "fox"],
  third: ["jumped"],
  fourth: ["over", "the", "lazy", "dog"],
};

let vowelArray;
obj["first"].forEach((crrV) => {
  let vowels = "aeiou";
  return (vowelArray = crrV.split("").filter((char) => {
    return vowels.includes(char);
  }));
});

console.log(vowelArray);
