// Q: One day, Spot was playing with the Munster family's home computer, and he wrote a small program to mess with their demographic data:

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" },
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach((familyMember) => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

function doNotMessWithDemographics(demoObject) {
  let newObject = {};
  for (const key in demoObject) {
    newObject = {key}
  }
  console.log(newObject);

  //   Object.values(demoObject).forEach((familyMember) => {
  //     familyMember["age"] += 42;
  //     familyMember["gender"] = "other";
  //   });
}

// After writing this function, he typed the following code:
doNotMessWithDemographics(munsters);
// console.log(Object.values(munsters));
// console.log(munsters);

// Q: Before Grandpa could stop him, Spot hit the Enter key with his tail. Did the family's data get ransacked? Why or why not?

// Q: What happened?
// A; Well in js object are passed by reference. Thus, Spot's demoObject starts off pointing to the munsters object. His program replaces that with some other object, and the family's data would be safe. However, in this case the program doesn't reassign demoObject; its uses it, as-is. Thus the object that gets altered by the function is the munsters object.
