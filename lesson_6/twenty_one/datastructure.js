// Q: What is the most important feature of this data structure for the player and the dealer?
// A: The ability to calculate the total in real time, form within there own data structure.

// Q: What is a good way to test that feature in as a test case?
// A: If I have set values in one data structure that I pass at random to the player data structure then calculate it.
const READ_LINE = require("readline-sync");

let prompt = (message) => console.log(message);

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
  let card = playerOrDealer[deckCards[randomCardType]].push(
    deck[deckCards[randomCardType]].pop()
  );

  return card;
}

function calculateTotalHand(playerOrDealer) {
  let cardTypes = Object.keys(deck);
  let total = 0;
  let totalAces = 0;
  cardTypes.forEach((key) => {
    if (key === "Ace" && playerOrDealer[key].length > 1) {
      totalAces += 2;
    }
    let totalPerCardType = playerOrDealer[key].reduce((acc, cv) => acc + cv, 0);
    total += totalPerCardType;
  });

  if (totalAces >= 2) {
    total -= 10;
  }

  return total;
}

function viewHand(playerOrDealer) {
  console.log("\n", playerOrDealer);
}

function hitPlayer() {
  hit(playerHand);
  viewHand(playerHand);
  calculateTotalHand(playerHand);
}

function hitDealer() {
  hit(dealerHand);
}

function dealInitialCards() {
  hitPlayer();
  hitPlayer();

  hitDealer();
  hitDealer();
}

function revealOneDealerCard() {
  let dealerCardTypes = Object.keys(dealerHand);

  let onlyCardsWithValues = dealerCardTypes.filter((key) => {
    return dealerHand[key].length !== 0;
  });

  let randomCardType =
    Math.floor(Math.random() * (onlyCardsWithValues.length - 1 - 0 + 1)) + 0;

  const DEALER_REVEALED_CARD =
    dealerHand[onlyCardsWithValues[randomCardType]][0];

  return DEALER_REVEALED_CARD;
}

function dealerAI() {
  if (calculateTotalHand(dealerHand) >= 17) {
    return false;
  } else {
    return true;
  }
}

function playTwentyOne() {
  dealInitialCards();
  let dealerCard = revealOneDealerCard();

  while (true) {
    console.log("\nDealer Card: ", dealerCard);

    console.log("My total hand: ", calculateTotalHand(playerHand));
    prompt("Hit or Stay (h or s)?");
    let hitOrStay = READ_LINE.question();

    if (hitOrStay === "h") {
      hitPlayer();
    }

    if (calculateTotalHand(playerHand) > 21) {
      prompt("Player bust. Dealer wins!");
      console.log("Player Total: ", calculateTotalHand(playerHand));
      break;
    }

    let dealerLogic = dealerAI();

    if (dealerLogic) {
      hitDealer();
    }

    if (calculateTotalHand(dealerHand) > 21) {
      prompt("Dealer bust. Player wins!");
      console.log("Dealer Total: ", calculateTotalHand(dealerHand));
      break;
    }

    if (hitOrStay === "s" && dealerLogic === false) {
      prompt("\nComparing Cards");

      let playerTotal = calculateTotalHand(playerHand);
      let dealerTotal = calculateTotalHand(dealerHand);

      if (playerTotal > dealerTotal) {
        console.log(
          "Player Won!: ",
          `Player Total ${playerTotal} > Dealer Total ${dealerTotal}`
        );
      } else if (playerTotal < dealerTotal) {
        console.log(
          "Dealer Won: ",
          `Dealer Total ${dealerTotal} > Player Total ${playerTotal} `
        );
      } else if (playerTotal === dealerTotal) {
        console.log(
          "Tie!: ",
          `Dealer Total ${dealerTotal} = Player Total ${playerTotal} `
        );
      }

      break;
    }
  }
}
playTwentyOne();
