// Given the following similar sets of code, what will each code snippet print?

function messWithVars(one, two, three) {
  one.push("🦖");
  two = ["three"];
  three = ["one"];

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
