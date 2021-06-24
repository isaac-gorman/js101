let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10, Spot: 22 };

// const descriptor1 = Object.getOwnPropertyDescriptor(ages, "Spot");

// console.log(descriptor1.configurable);

let getEntry = (entry, object) => {
  let arrayOfKeys = Object.keys(object);
  let containsEntry = false;

  for (let index = 0; index < arrayOfKeys.length; index++) {
    if (arrayOfKeys[index] === entry) {
      containsEntry = true;
    }
  }

  return containsEntry;
};
console.log(getEntry("Spot", ages));
