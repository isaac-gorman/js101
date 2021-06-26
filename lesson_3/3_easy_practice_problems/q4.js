// What will the following code output?
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = [...arr1]; // returned a copy not a pointer to arr1. arr2 and arr1 do not share a reference

arr2[0].first = 42;
console.log("shallowCopy: ", arr2);
console.log("original: ", arr1); // => [{ first: 42 }, { second: "value2" }, 3, 4, 5];

let deepClone = [];

arr1.map((element) => {
  if (typeof element === typeof {}) {
    deepClone.push({ ...element });
  } else {
    deepClone.push(element);
  }
});

deepClone[0].first = "🦖";
console.log("deepClone: ", deepClone);
console.log("original: ", arr1);
