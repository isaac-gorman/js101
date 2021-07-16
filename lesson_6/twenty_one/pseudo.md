## Pseudo Code

1. Initialize deck
2. Deal cards to player an dealer
3. Player turn: hit or stay

- _repeat until bust or stay_

4. If the player bust, dealer wins
5. Dealer turn: hit or stay

- _repeat until total >= 17_

6. If the dealer busts, player wins
7. Compare cards and declare the winner

## Tips on Getting Started

### Data Structure

Q: What would be the best data structure to contain the deck?
A: The data structure would have to contain the 52 card deck, the player's cards, and the dealer's cards. Maybe an object? Maybe an array? Nested array?

Q: How would I use the deck or the data structure? What do I need from it?
A: Ideas:

- Initialize the deck
- Pick at random form the deck and deal cards to the player and the dealer
- Deal one card to the player at random till player bust or stays:
- - Player needs to keep track of their total.
- Deal one card to the dealer at random till they have at least 17 or greater in total.
- - Dealer needs to keep track of their total.

### Calculating Aces

### Player Turn

### Shuffle Cards

### Dealer Turn

### Displaying the Result
