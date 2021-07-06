let randomLetter = () => {
  let randomNumber = Math.floor(Math.random() * (122 - 96 + 1)) + 96;
  let letter = String.fromCharCode(randomNumber);
  return letter;
};

// Input: n/a

// Process:
/*
    - declare and empty array called UUID_Array[]
    - build and push 5 sections to the UUID_Array[]
        sub-step a. - - build and push section 1 to UUID_Array[]: 
        sub-step b. - - - generate random character either a number or string 8 times 
        sub-step c. - - - - if its a number its range must be between (0-9)
        sub-step d. - - - - if its a string its range must be between ("a-f")
        sub-step e. - - - concatenate the character to the each sectionString 
        sub-step f. - - push the sectionString to the UUID_Array[]
    * repeat 

    - flatten each sub-array in UUID_Array[] the join it by ("-") and convert it to a string and assign it to UUID_Code
    - return the UUID_Code
*/

// Output:
// -> 5 sections in an 8-4-4-4-12 pattern of random strings(a-f) and random numbers(0-9)
// example => 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'
