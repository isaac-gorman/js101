// ARRAY METHODS
// Q&A Assignment Annotations
/* - Intro / forEach()

    Q: Why is iterating over collections with for or while loop repetitive and unnecessary?
    A: Because JS provides easier ways to work with arrays using built in methods
       Specifically the following built in methods: 
       - .map()
       - .filter()
       - .forEach()

    Q: What is unfortunate about collection like types such as objects?
    A: We do do not have access to methods that enable us to easily iterate over them. 
        Thankfully, we do have methods than convert key, values, and key value pairs into array, or nested array pairs, that enable us to take advantage of built in array methods.
        - Object.keys()
        - Object.values()
        - Object.entries()
    
    Array.prototype.forEach

    Q: How does a forEach method work?
    A: It loops through each element of an array. It takes several arguments as callback such as the currentElement, index, and the currentArray. And for iteration the callback is executed. 

    Q: What is a callback function?
    A: A callback is function that is passed as an argument to another function.

    forEach with Strings

    Q: We can't use forEach on strings so how could I use forEach on a string? And what is significant about the method we use to interact with strings using forEach?
    A: We can leverage the ability of the String.prototype.split() method to split every character in the string as array then iterate over each character with a forEach. Furthermore, we can use this approach to other array methods.

    forEach with Objects

    Q: We are unable to use forEach directly with Objects so how can we interact with them?
    A: We can use return either keys, or values form an Object as an array using Object.keys, or Object.values. Or we can return the key value pair of an object as nested arrays one per each pair using Object.entries. Then we could use any array method there after.

    Q: When might I need to use Object.entries()?
    A: Maybe when creating a new array with just specific kay value pairs.

    Q: What is array destructuring assignment? 
    A: Array destructuring assignment is the process of assigning elements of an array to multiple variables by wrapping the multiple variable names in brackets

    Non-Intuitive Behaviors
    Q: What is odd about the forEach method?
    A: forEach() methods always return undefined 

    Q: Why does forEach always return undefined?
    A: Because forEach is just a method call. And all methods in JS return something even if it's undefined. For that matter the return value of forEach is not important because its sole purpose is for iteration. Furthermore forEach is immutable.

    **Scratch Code**
    // [1, 2, 3].forEach((currentNumber) => console.log(currentNumber));

    // "abcdefghijklmnopqrstuvwxyz".split("").forEach((char) => console.log(char));

    // let ogArray = [1, 2, 3];
    // ogArray.forEach((currentNumber) => console.log(  (currentNumber += 1)));
    // console.log(ogArray);

*/

/* - Array.prototype.filter()

    Q: What do we do if we want to select of filter certain elements from an array?
    A: We can either use a for or while loop, or we can use a much more succinct approach with the filter() method.

    Q: How does filter() work?
    A: To preform selections filter() it:
      Step 1) Examines each of the return value of the callback on each iteration. 

      Step 2) As it examines each of the return values it determines the truthiness of the return value. In fact that is the only thing that the filter() method is concerned with in regards to the callback's return value: wether it is truthy or falsy. And remember that truthy and falsy are not the same as true and false.

    Q: What are the 6 values that JS evaluates as falsy?
    A: List:
     1. 0
     2. null
     3. undefined
     4. ""
     5. NaN
     6. false

    Q: What is the preferred method of implementation for a simple "selection criterion"? 
    A: Using an implied return 
    [1, 2, 3].filter(num => num % 2 === 1) 

    Q: What is better to for filtering an object, filter() or forEach() and why?
    A: forEach is better suited for filtering an object as you don't have to deal with the limitations of a filter only returning the array in which meets a selection criterion an you can simply just add a selection criterion to a forEach instead.


let test = [1, 2, 3].filter((num) => num - 3);
console.log(test); // => [1, 2]

let produce = {
  apple: "Fruit",
  carrot: "Vegetable",
  pear: "Fruit",
  broccoli: "Vegetable",
};

let produceKeyValuePairs = Object.entries(produce);
let onlyVegetables = {};

produceKeyValuePairs.forEach((nestedKeyValuePair) => {
  let [key, value] = nestedKeyValuePair;
  if (value === "Vegetable") onlyVegetables[key] = value;
});

console.log(onlyVegetables);

*/

/* - Array.prototype.map()

   Q: What is similar and different about the  filter() and map() methods?
   A:

   Q: How does map() work?
   A:

   Q: What is happens if we write code like this: 
   Q: What did you just realize about filter and map?
   A: Operations are conducted based on the return values of the callback not something else occurring from within the callback



*/

// let newArray = [1, 2, 3].map((num) => num % 2 === 1);
// console.log(newArray);
