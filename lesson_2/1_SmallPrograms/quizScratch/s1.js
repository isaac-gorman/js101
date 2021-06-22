function prompt(message) {
  console.log(message);
}

let sentence = "The fox jumped over the log into the river.";
let arr = sentence.split(" ");
let savedWord = arr.shift();

// prompt(savedWord);

// prompt(firstWord.length);

function getLongestWord(sentence) {
  let arr = sentence.split(" ");
  let longestWord = arr.shift();

  arr.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  prompt(
    `The longest word is: ${longestWord} with ${longestWord.length} characters`
  );
}

getLongestWord(sentence);
