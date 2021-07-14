## MVP TicTacToe

Step 2) Player and computer turn
Q: What have we done so far? - A: Thus far we have implemented the game board. The game board is represented
by an object data structure and is implemented by a function called displayBoard that displays the board on the console or terminal.

    Q: What do i need to do next?
    - A: We need to implement the next two steps in our flowchart:
         1) Ask the user to mark a square (make a move).
         2) Have the computer mark a square.

Players Turn
Q: What would be the ideal implementation of having the player take a turn, why? - A: Ideally we would want to use a function to request the player to take a turn.

1. write a function called `playerChoosesSquare`. Think about what arguments it needs to take as input. We need to pass as the input the board object, since we need to mutate it after the player has made a move (selected a square).

2) Next I need to prompt the user to make a square selection, and read that input.

3) Now I need to implement a guard clause to only allow valid inputs, and to enable the user to only select squares that have not been selected yet.

Step 3 Implementation Overview:
Q: What is the problem with the current implementation?

A: Well there are two major issues:

1. If the player enter something other than (1-9) the `playerChoseSquare()` will simply append another entry to the board object containing the key value pair of <entered input>: "X". Furthermore it also won't complain about the invalid input.

2. If the square has already been chosen, the `playerChoseSquare()` function doesn't prevent the player from selecting an already selected square. Nor does it complain about entering an already existing square.

Q: What is the thought process on implementing a solution to the above two problems?

A: Well I obviously want to limit the input choices for the user that make sense. And I want to signify to them what input choices make sense ( are available ). One avenue is to assure the input choice is available is that it contains a (" ") in the position that corresponds to the keys.

## Implementing Computer Defense AI

Q: What would be a good starting point for implementing a solution for defending the 3rd square?

- The most non-clever approach. To see whether a player is about to win I will iterate through the `winningLines` array within the `detectWinner()` function.

- Now we can use the `winningLines` array to check if any of the lines on the current board are at risk.

Implementation

INPUT OUTPUT
The `winningLines` array is an array of 3-element sub-arrays.

INPUT: 3 element sub-array
So we will pass as input to our `findAtRiskSquare()` the sub-arrays of 3 elements.

OUTPUT: the number of the square the human can use as a winning move if the human has the potential to make one.
Our output form the function is the `winningMove` if they human player has a potential winning move.

## Implementing Computer Offense AI

Currently the defensive ai is working. Although the ai isn't that great. The ai either uses a defensive tactic but if there is no impending threat it generates a move at random based on the number of squares left empty.

Q: How can we improve the computers chances of winning?
A: By giving it the ability to find a winning move.

Q: How will we give the computer the ability to find a winning move?
A: Again we will first implement the most non-clever logic successfully then try more clever implementations. I will accomplish this by piggy backing off of the `findAtRiskSquare` function and turn it into an offensive mechanism.

Logic

- Defensive Strategy: Finding an empty square where the two other squares belong to the human player.

- Offensive Strategy: Finding an empty square in a line where the two other squares belong to the computer.
