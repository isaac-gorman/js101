// SORTING
/*
    Q: What are the various way to work with collections?
    - A: Examples: 
     - looping 
     - selecting
     - transforming 

    Q: What is new way to work with arrays?
    - A: sorting

    Q: What collections type does not have access to the sorting methods?
    - A: strings, and objects 

    Q: Why is there no point in sorting JS objects? 
    - A: Because they are not placed in any particular order

    - What is sorting?
    - A: sorting is the act of ordering numbers or letter in order

    Q: What is the mechanism we need in order to sort arrays in the way we want them?
    - A: a callback or selection criterion 

    - Sorting in JS
    Q: What is at the heart of how sorting works?
    - A: Comparisons are at the core of how sorting algorithms work. There must be a comparison between the items in the collections, and the results of the comparisons are used to rearrange the order of the collection, eventually leading to th sorted result.

    Q: What is the default behavior of the sort method?
    - A: to turn order everything based on th UTF-16 system. AKA turns everything to strings and places lower case letters after upper case letters, and numbers before letters. 

    Q: How does JS sort numbers?
    - A: Using the the sort method it first converts all the numbers to string values

    Q: What occurs when sort is called without any arguments? 
    - A: It automatically converts everything that isn't a string to strings

    Q: Why is undefined a special case when it comes to sorting?
    - A: It may have the lowest value?

    - Sorting Arrays of Strings Alphabetically
    Q: What happens when you call sort on an array of characters?
    - A: It uses the UTF-16 system to order them

    Q: What is important to remember when working with collections using sort?
    - A: It uses the UTF-16 system

    Q: What is a common way to use sort so we return a new array?
    - A: To use the .slice() method to make a shallow copy of the original array then use the sort method because it is a destructive method as it sorts the array it is chained on in its place.

    Q: Why it acceptable for Array.prototype.sort to be a function/method that has a side effect and returns a meaningful value at the same time?
    - A: Because it is much more useful that having to separate concerns on our own.

    - UTF-16
    Q: What is UTF-16?
    - A: The american english system used for programming in english? 

    Q: How do we deal with <,>, ===, and !== when using strings? What should we expect?
    - A: Well its going to be different, uppercase letter are actually listed as lower index values in the UTF-16 system than lower case letter and number are listed as even lower indexes in the the system that uppercase letters. 

    Q: What if I want to compare the UTF-16 character "+" with the UTF-16 character 3?
    - A: Operator symbols are even lower in index value in the UTF-16 system than numbers

    Q: Does JS use ASCII character or UTF-16?
    - A: It actually uses UTF-16

    Q: What is essential to remember when comparing or sorting strings?
    - A: The values are not as I would expect. Because I should remember how they are ordered and about what that order is [!, &, operation symbols, numbers 1-9, comparison symbols = < >, uppercase alphabet, lowercase alphabet]

    Q: What are the 5 most important concepts to remember about comparing or sorting strings?
    - A: 

    - Generic Sorting 
    Q: How would you sort the following array numerically? 
    [2, 11, 9, 4, 107, 21, 1] 
    - A: 
    [2, 11, 9, 4, 107, 21, 1].sort((a,b) =>(a - b))

    Q: What is the key feature of the sort method that enables to sort numbers by their value and not by the UTF-16 string values?
    - A: the callback? and how it compares values by conditional logic under the hood?

    Q: How does the sort method use its callback to sort the numbered array above in order? What is the process under the hood?
    - A: conditional logic and re-assignment?

    Q: Given the example of the first two numbers in the array 2, and 11 how does the callback go about sorting them?
    - A: 

    Q: How can the callback be simplified even further?
    - A: you can place the callback on one line leveraging implicit return

    Q: What is wrong with the trade off that was just taken to refactor the sorting algorithm? 
    - A: It may be to unclear and implicit 

    Q: How would you sort the numbered array in descending order? 
    - A: 
    [2, 11, 9, 4, 107, 21, 1].sort((a,b) =>(b-a))

    Q: Does the sort method compared every possible? Why or why not?
    - A: No. ... Im guessing for time space complexity reasons.

    Coding Challenge:
    How would I sort the following array or strings by length of each word?
    let words = ['go', 'ahead', 'and', 'jump'];
    input: 
    => ['go', 'ahead', 'and', 'jump'];
    process: 
    => 
    - access the length of every string
    - 
    output: 
    => ['go', 'and', jump', 'ahead']

    

    Coding Challenge:
    How would you sort the following array in ascending order by sum of each nested array?
    Input: 
    => [ [3, 6, 4], [6, 8, 9], [1, 4, 2] ];
    Output: 
    => [ [1, 4, 2], [3, 6, 4], [6, 8, 9] ];


    - Summary Q&A: 
    Q: In this assignment what did I learn?
    - A: 

    Q: Is sorting easy algorithmically?
    - A: 

    Q: 



*/

let prompt = (output) => console.log(output);
let tablefy = (output) => console.table(output);

let words = ["go", "ahead", "and", "jump"];
// tablefy(words.sort((a, b) => a.length - b.length));

let numbers = [2, 11, 9, 4, 107, 21, 1];
// let round = 1;
// tablefy(
//   numbers.sort((a, b) => {
//     prompt(`${a} - ${b} = ${a - b}\nround: ${round}`);
//     round++;
//     return a - b;
//   })
// );

let scores = [
  [3, 6, 4],
  [6, 8, 9],
  [1, 4, 2],
];

let reducer = (arr) => arr.reduce((acc, cv) => (acc += cv), 0);

tablefy(
  scores.sort((a, b) => {
    let aReduce = reducer(a);
    let bReduce = reducer(b);
    return aReduce - bReduce;
  })
);
