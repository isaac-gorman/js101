/*  What is an Element?

    Q: Do arrays have property names? 
    A: Yes. By default they are just the index number unless otherwise altered. But if the property names are altered to anything other than non-negative integer you will have to deal with unexpected behaviors when looping or conducting method chaining on them.

    Array Keys
    Q: Why doesn't the length of the array include the additional elements?q
    A: Because the new the keys of neither of the "elements" is a non-negative integer. 

    Q: Why would the map method ignore certain elements in an array?
    A: The map method ignores all properties that are not element values that is any element that has a non-integer index. 

    Q: So what is the key takeaway when evaluating wether an array is "really" empty
    A: Well you either want to know if the array contains any elements or if the array contains absolutely no keys. This is crucial when deciding how to write the array. 

    Sparse Arrays
    Q: What does sparse mean in the context of arrays?
    A: A sparse array is an array of data in which the majority of elements have a value of 0. This is in contrast to a "dense arrays" where the majority of the arrays elements have a non-zero value or are full of numbers. Sparse arrays are often handled differently than dense array in terms of digital data handling. 

    Q: What occurs when we increase the length of an array without increasing the number of elements in it?
    A: The elements have values that are not set at all. They are not even undefined.

    Q: What do we mean by an empty array?
    A: Well you have two options for determining what whether an array is empty.
     - Option A) Do you want to include gaps?
       => Use array.length()
     - Option B) Do you want ignore gaps?
       => Use Object.keys().
          * Although keep in mind that some of the array keys may not be non-negative integers.
    
    Conclusion with Sparse Arrays:
    - There is no right answer when defining what an empty array means. You must decide what empty means based on context of the problem you are solving.





*/

let array = ["Hi", "Hola", "Bye"];
// console.log(array);
// console.log(array.length);
// console.log(Object.keys(array));s
array["🚀"] = "not an element";
array[array.length] = "grateful song";
// console.log(Object.keys(array));
// console.log(array.length);

// console.log(array.map((crrV) => crrV + "🚀"));

let moreArrays = [];
moreArrays["test"] = 0;
moreArrays[-9] = 0;
moreArrays[2] = 0;

// Will the moreArrays array be empty?
// console.log(moreArrays.length);

let anotherArray = [];
anotherArray[3] = "three";
anotherArray[1] = "one";
// console.log(anotherArray);
// console.log(anotherArray.length);
// console.log(Object.keys(anotherArray));

// Sparse Arrays
let sparseArray = [2, 4, 6];
sparseArray.length = 5;
// console.log(sparseArray);
// console.log(sparseArray.length);
// console.log(Object.keys(sparseArray));
// console.log(sparseArray[3]);
sparseArray[3] = undefined;
// console.log(sparseArray);
