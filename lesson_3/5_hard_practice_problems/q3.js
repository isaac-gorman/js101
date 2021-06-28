{
  // Given the following similar sets of code, what will each code snippet print?
  // Q: Why doesn't the messWithVars() alter one, two, and three variables?
  // A: Because I did not mutate either variable instead I reassigned them within the scope of the messWithVars()
  // A: Not till I actually use methods that mutate the actual array will it affect the original array.
}

function messWithVars(one, two, three) {
  // non-mutating operation (reassigning)
  // one = two;
  // two = three;
  // three = one;

  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");

  console.log(`one is: ${one}`); // => one is: ["two"]
  console.log(`two is: ${two}`); // => two is: ["three"]
  console.log(`three is: ${three}`); // => three is: ["two"]

  return one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(typeof one);

console.log(`one is: ${one}`); // => one is: ["two"]
console.log(`two is: ${two}`); // => two is: ["three"]
console.log(`three is: ${three}`); // => three is: ["one"]
