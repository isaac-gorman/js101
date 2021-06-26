let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" },
};
// munsters.Isaac = { age: 25, gender: "male" };
// console.log(munsters);

// Deep copy
let deepCopy = {};
// console.log(deepCopy);

for (let key in munsters) {
  deepCopy[key] = { ...munsters[key] };
}

deepCopy.Isaac = { age: 25, gender: "male" };
deepCopy.Eddie.age += 10; // => 20
console.log(deepCopy);
console.log(munsters);
