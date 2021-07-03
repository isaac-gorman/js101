// Q: What is the return value of map in the following code?

let problem = [1, 2, 3].map((num) => {
  num * num;
});

// console.log(problem);
// My Answer(s)
{
  // A: Two possible solutions
  // - 1) Returns new array containing each element of the original array raised to the power of 2
  // - 2) Does not return anything because it was not explicity returned. Such an implementation only work on a one line callback implicit return
}

// Actual Answer & Explanation
{
  // A: Well the problem actually returns:
  // => [ undefined, undefined, undefined ]
  // Explanation:
  // - Remember that map is going to return an array based on what the callback decides to do with the elements in the original array.
  // - Each element in the original array is  replaced by what the callback returns for that element.
  // - But in the problem above there is not explicitly returned statement for the callback function which gets interpreted by callback as undefined each time.
}
