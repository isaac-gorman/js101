function car(newCar) {
  let make = getMake(newCar);
  console.log("2. car - make: ", make);
  let model = getModel(newCar);
  console.log("4. car - model: ", model);

  let edition = getEdition(newCar);
  console.log("6. car - edition: ", edition);
  //   return "";
  return [make, model, edition];
}

function getMake(newCar) {
  console.log("1. getMake: ", newCar.split(" ")[0]);
  return newCar.split(" ")[0];
}

function getModel(newCar) {
  console.log("3. getModel: ", newCar.split(" ")[1]);
  return newCar.split(" ")[1];
}

function getEdition(newCar) {
  console.log("5. getEdition: ", newCar.split(" ")[2]);
  return newCar.split(" ")[2];
}

let [make, model, edition] = car("Ford Mustang GT");

console.log(make === "Ford"); // => true
// console.log("make: ", make);
// console.log("model: ", model);
console.log(model[0] === "M"); // TypeError: Cannot read property of '0' of undefined
console.log(edition === "GT");
