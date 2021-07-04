let animals = ["ant", "bear"];
let moreThanThreeCharacters = animals.map((element) => {
  if (element.length > 3) {
    return element;
  }
});

console.log(moreThanThreeCharacters); // ["bear"]

// Q: Why does the moreThanThreeCharacters variable return:
// => [ undefined, 'bear' ]

// A:
// - 1) map always returns an array
// - 2) "ant" doesn't have a length greater that 3 so the selection criterion evaluates as false thus the element isn't returned. And from earlier examples what happens within a map when something isn't explicity returned?
// ==> it gets implicitly returned as 'undefined'
