// Q: What is the most important feature of this data structure for the player and the dealer?
// A: The ability to calculate the total in real time, form within there own data structure.

// Q: What is a good way to test that feature in as a test case?
// A: If I have set values in one data structure that I pass at random to the player data structure then calculate it.

let deck = {
  2: [2, 2, 2, 2],
  3: [3, 3, 3, 3],
  4: [4, 4, 4, 4],
  5: [5, 5, 5, 5],
  6: [6, 6, 6, 6],
  7: [7, 7, 7, 7],
  8: [8, 8, 8, 8],
  9: [9, 9, 9, 9],
  10: [10, 10, 10, 10],
  Jack: [10, 10, 10, 10],
  Queen: [10, 10, 10, 10],
  King: [10, 10, 10, 10],
  Ace: [11, 11, 11, 11],
};

let dealerHand = {
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
  7: [],
  8: [],
  9: [],
  10: [],
  Jack: [],
  Queen: [],
  King: [],
  Ace: [],
};

let playerHand = {
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
  7: [],
  8: [],
  9: [],
  10: [],
  Jack: [],
  Queen: [],
  King: [],
  Ace: [],
};

function hit(playerOrDealer) {
  let deckCards = Object.keys(deck);
  let randomCardType =
    Math.floor(Math.random() * (deckCards.length - 1 - 0 + 1)) + 0;
  return playerOrDealer[deckCards[randomCardType]].push(
    deck[deckCards[randomCardType]].pop()
  );
}

function calculateTotalHand(playerOrDealer) {
  let cardTypes = Object.keys(playerHand);
  let total = 0;
  cardTypes.forEach((key) => {
    let totalPerCardType = playerOrDealer[key].reduce((acc, cv) => acc + cv, 0);
    total += totalPerCardType;
  });
  console.log("Total in hand: ", total);
}

function viewHand(playerOrDealer) {
  console.log("\n", playerOrDealer);
}

hit(playerHand);
viewHand(playerHand);
calculateTotalHand(playerHand);

hit(playerHand);
viewHand(playerHand);
calculateTotalHand(playerHand);

// console.log("deck: ", deck);
// console.log("playerHand: ", playerHand);
