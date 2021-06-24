let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 402,
  Eddie: 10,
  Spot: 22,
  Jasmine: 24,
};

// The manual way
let getEntry = (entry, object) => {
  let arrayOfKeys = Object.keys(object);
  let containsEntry = false;

  //   for (let index = 0; index < arrayOfKeys.length; index++) {
  //     if (arrayOfKeys[index] === entry) {
  //       containsEntry = true;
  //     }
  //   }

  arrayOfKeys.forEach((crrV) => {
    if (crrV === entry) {
      containsEntry = true;
    }
  });

  console.log(containsEntry);
};
getEntry("Ari", ages);

// The pre-built method way
let getEntryEasy = (entry, object) => {
  console.log(object.hasOwnProperty(entry));
};
// getEntryEasy("Isaac", ages);
