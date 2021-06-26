// show two different ways to put the expected "Four score and " in front of it.

let famousWords = "seven years ago...";
let firstPart = "Four score and ";

// 1st Way
console.log(firstPart + famousWords);

// 2nd Way
console.log(firstPart.concat(famousWords));

// 3rd Way
console.log("Four score and ".concat("seven years ago..."));
