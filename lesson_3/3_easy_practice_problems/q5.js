// The following function unnecessarily uses two return statements to return boolean values. Can you rewrite this function so it only has one return statement and does not explicitly use either true or false?
// Try to come up with at least two different solutions.

// 1
function isColorValid(color) {
  return color === "blue" || color === "green";
}

console.log(isColorValid("yellow"));

// 2
function otherColorValid(color) {
  return ["blue", "green"].includes(color);
}
console.log(otherColorValid("yellow"));

// 3
let isItTheColor = (color) => color === "blue" || color === "green";
console.log(isItTheColor("blue"));
