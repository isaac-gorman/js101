console.log(true);
console.log(false);

function makeLonger(string, longer) {
  if (longer) {
    return string + string;
  } else {
    return string;
  }
}

console.log(makeLonger("abc", true));
console.log(makeLonger("xyz", false));

let isDigit = (char) => {
  if (char >= "0" && char <= "9") {
    return true;
  } else {
    return false;
  }
};

console.log(isDigit("6"));
console.log(isDigit("a"));

function evaluate(boolean) {
  if (boolean === true) {
    console.log("It's true!");
  } else if (boolean === false) {
    console.log("It's false!");
  } else {
    console.log("It's not true or false");
  }
}

evaluate(true); // -> "It's true!"
evaluate(0); // -> "It's not true or false"
