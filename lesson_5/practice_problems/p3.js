// For each of these collection objects, demonstrate how you would access the letter g.

let arr1 = ["a", "b", ["c", ["d", "e", "f", "g"]]];
let flatArray = arr1.flat(Infinity);
// console.log(flatArray[flatArray.indexOf("g")]);

let arr2 = [
  { first: ["a", "b", "c"], second: ["d", "e", "f"] },
  { third: ["g", "h", "i"] },
];
// console.log(arr2[1].third[0]);

let arr3 = [["abc"], ["def"], { third: ["ghi"] }];
// console.log(arr3[2].third[0][0]);

let obj1 = { a: ["d", "e"], b: ["f", "g"], c: ["h", "i"] };
console.log(obj1.b[1]);
