// Q: What is the most important feature of this data structure for the player and the dealer?
// A: The ability to calculate the total in real time, form within there own data structure.

// Q: What is a good way to test that feature in as a test case?
// A: If I have set values in one data structure that I pass at random to the player data structure then calculate it.

let deck = {
  4: [4, 4, 4, 4],
  6: [6, 6, 6, 6],
  Jack: [10, 10, 10, 10],
  Queen: [10, 10, 10, 10],
};
console.log(deck);

let playerHand = {
  4: [],
  6: [],
  Jack: [],
  Queen: [],
};
deck.Queen.pop();
console.log(deck);
