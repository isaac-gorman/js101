// Challenge:
{
  // - A UUID is a type of identifier often used to uniquely identify items, even when some of those items were created on a different server or by a different application. That is, without any synchronization, two or more computer systems can create new items and label them with a UUID with no significant risk of stepping on each other's toes. It accomplishes this feat through massive randomization. The number of possible UUID values is approximately 3.4 X 10E38, which is a huge number. The chance of a conflict is vanishingly small with such a large number of possible values.
  // - Each UUID consists of 32 hexadecimal characters (the digits 0-9 and the letters a-f) represented as a string. The value is typically broken into 5 sections in an 8-4-4-4-12 pattern, e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.
  // - Write a function that takes no arguments and returns a string that contains a UUID.
}

// PEDAC:
{
  // Input: n/a
  // Process:
  /*
    [x] declare and empty array called UUID_Array[]
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
}

// Figuring out how to generate random UTF - 16 code of "a - f"
{
  // Playing UTF-16 code system:
  // Intentional Process:
  // - Input:
  // -> random number within the range for UTF - 16 code of "a - f"
  // - Output:
  // -> lowercase letter "a - f" of the english alphabet
  // Steps
  // [x] UTF code range of lowercase english alphabet is 97 - 122
  // [x] Generate a random number between 96 and 123
  // [x] Pass the random number to the String.fromCharCode to generate random letter between "a - f"
}
