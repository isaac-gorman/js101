// Coding Challenge:
// - Compute and display the total age of the male members of the family.

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" },
};

let serializedMunstersData = JSON.stringify(munsters);
let deepCopyMunstersData = JSON.parse(serializedMunstersData);
// console.log(Object.keys(deepCopyMunstersData));
let maleTotal = 0;
let femaleTotal = 0;
Object.keys(deepCopyMunstersData).forEach((crrV) => {
  if (deepCopyMunstersData[crrV]["gender"] === "male") {
    return (maleTotal += deepCopyMunstersData[crrV]["age"]);
  } else {
    return (femaleTotal += deepCopyMunstersData[crrV]["age"]);
  }
});
console.log(maleTotal); // => 444
console.log(femaleTotal); // => 53
