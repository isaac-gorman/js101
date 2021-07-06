// Challenge:
// - Given the following data structure write some code to return an array containing the colors of the fruits and the sizes of the vegetables. The sizes should be uppercase, and the colors should be capitalized.

// Inputs:
let obj = {
  grape: { type: "fruit", colors: ["red", "green"], size: "small" },
  carrot: { type: "vegetable", colors: ["orange"], size: "medium" },
  apple: { type: "fruit", colors: ["red", "green"], size: "medium" },
  apricot: { type: "fruit", colors: ["orange"], size: "medium" },
  marrow: { type: "vegetable", colors: ["green"], size: "large" },
};

// Process:
// - create an empty array called extractedData
// - access each entry of the obj
// - access each key and extract the following:
// - - obj[key]["colors"] (uppercase the first character of each string)
// - - obj[key]["size"] (uppercase the word)
// - Return extractedData array of the colors and the size

let getData = () => {
  let extractedData = [];

  for (let key in obj) {
    let colors = obj[key]["colors"];
    let upperCased = colors.map((word) => {
      return (word = word.charAt(0).toUpperCase() + word.substring(1));
    });
    extractedData.push(upperCased);

    let size = obj[key]["size"];
    extractedData.push(size);
  }

  console.log(extractedData);
};

getData();

// Output:
// - [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]
