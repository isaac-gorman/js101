let prompt = (message) => console.log(message);

let words = ["scooby", "do", "on", "channel", "two"];

words.forEach((word) => {
  prompt(word); // --> "scooby", "on", "two"
  words.shift();
});

prompt(words); // --> [ "channel", "two" ]

// Lesson:
// - Never mutate a collection while iterating through it.
// - The behaviour may not be what you expect.
