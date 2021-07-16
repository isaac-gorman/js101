## Overview

Q: What will I do in this assignment?
A: I will build a game called twenty-one. It is very similar to Blackjack but stripped down. For example, Twenty-One doesn't have splits, double-downs, and other complex plays.

### Rules of Twenty-One

Table of Contents

- Deck
- Goal
- Setup
- Card Values
- Player Turns
- Dealer Turn
- Comparing Cards

**Deck:**
Start with a standard 52 card deck consisting of the 4 suits and the 13 values.

4 suits:

1. Hearts
2. Diamonds
3. Clubs
4. Spades

13 values:

- 2
- 3
- 4
- 5
- 6
- 7
- 8
- 9
- 10
- Jack
- Queen
- King
- Ace

**Goal:**
The main objective of Twenty-One is to try to get as close to 21 as possible without going over. If you are over 21, it's a **bust**, and you lose.

**Setup:**
The game consist of a dealer and a player. Both participants are initially dealt a hand of two cards. The player can see their 2 cards, but only see one of the dealer's cards.

**Card Values:**
All of the card values are pretty straightforward, expect Ace. The cards with number 2 through 10 are worth their face value. The Jack, Queen, and King are each worth 10. The Ace can be worth 1 or 11 depending on the circumstances. The value of the Ace is determined by the each time a new card is drawn form the deck. For example if the hand contains a 2, an Ace, and a 5, then the total value of the hand is 18. In this case, the Ace is worth 11 because the sum of the hand (2 + 11 + 5) doesn't exceed 21. Now, say another card is drawn, and it happens to be an Ace. Now, say another cars is drawn, and it happens to be an Ace. Your program must determine the value of both Aces. If the sum of the hand (2 + 11 + 5 + 11) exceeds 21, then one of the Aces will be evaluated as 1 then, resulting in the hand total now being 19. What happens if another card is drawn and it also happens to be an Ace? It can be tricky if there are multiple Aces in a hand, so my program must account for that.

| Card              | Values     |
| ----------------- | ---------- |
| 2 - 10            | face value |
| Jack, Queen, King | centered   |
| Aces              | 1 or 11    |

**Player Turn:**
The player always goes first, and can decide to either **hit** or **stay**. A hit means that players wants to be dealt another card. Remember, if his total exceeds 21, he will bust and loose the game. The decision to hit or stay depends on the player's cards and what the player thinks his dealer has. For example
