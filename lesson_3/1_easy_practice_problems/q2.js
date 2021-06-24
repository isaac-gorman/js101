let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

function checkLastIndex(character, string) {
  return string[string.length - 1] === character;
}

console.log(checkLastIndex("?", str2)); // => true
console.log(checkLastIndex("?", str1)); // => false
console.log(checkLastIndex("!", str1)); // => true
console.log(checkLastIndex("!", str2)); // => false
