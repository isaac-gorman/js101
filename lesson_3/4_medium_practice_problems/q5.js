// Q: What will the following two lines of code output?
// A: Not what you expect! Whenever js uses floating point numbers the computer lacks certain amount of precision and thus yielding unexpected results

console.log(0.3 + 0.6); // => 0.8999999999999999
console.log(0.3 + 0.6 === 0.9); // false
