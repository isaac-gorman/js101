const NUMBER_OF_CARDS_IN_HAND = 5;

function dealHand() {
  let hand = [];
  for (
    let cardNumber = 0;
    cardNumber <= NUMBER_OF_CARDS_IN_HAND;
    ++cardNumber
  ) {
    hand.push(cardNumber);
  }
  return hand;
}

console.log(dealHand());
