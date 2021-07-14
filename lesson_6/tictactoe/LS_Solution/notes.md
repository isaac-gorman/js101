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
A: The most non-clever approach. To see whether a player is about to win I will iterate through the `winningLines` array within the `detectWinner()` function.
