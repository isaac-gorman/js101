## Q: Which of the following behaviors does JavaScript exhibit when passing an object as an argument to a function?

_Re-assigning the parameter that corresponds to the object does not affect the original object_

### Discussion Q&A

**Q: What does it mean when objects are passed as references to functions?**

_A: Whenever an object is passed as reference to a function, the function sees a pointer (an address) to the original object_

**Q: How can a function mutate an object?**

_A: A function can mutate an object as long as it has access to the pointer of the original object_

**Q: Under what circumstances would a function lose the ability to mutate the original array?**

_A: A function would lose the ability to mutate any object if it doesn't have access to the pointer of the original object. This can occur if somehow the function received a copy of the value of the object._

**Q: What happens when we re-assign a variable that points to an object?**

_A: Whenever you reassign a variable that points to an existing object it changes what the variable points to not value of the original object_
