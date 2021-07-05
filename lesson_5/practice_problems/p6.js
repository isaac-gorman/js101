// Coding Challenge:
// - One of the most frequently used real-world string operations is that of "string substitution," where we take a hard-coded string and modify it with various parameters from our program.

// - Given this previously seen family object, print the name, age, and gender of each family member:

let munsters = {
  herman: { age: 32, gender: "male" },
  lily: { age: 30, gender: "female" },
  grandpa: { age: 402, gender: "male" },
  eddie: { age: 10, gender: "male" },
  marilyn: { age: 23, gender: "female" },
};

let munstersMembers = Object.keys(munsters);
let munstersFamilyIntro = () => {
  return munstersMembers.forEach((crrV) => {
    let upperCaseName = crrV.charAt(0).toUpperCase() + crrV.slice(1);
    let age = munsters[crrV]["age"];
    let gender = munsters[crrV]["gender"];
    console.log(`${upperCaseName} a is ${age}-year-old ${gender}`);
  });
};

// munstersFamilyIntro();
