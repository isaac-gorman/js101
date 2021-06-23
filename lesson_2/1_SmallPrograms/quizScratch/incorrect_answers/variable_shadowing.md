## Variable Shadowing

**Q: What is variable shadowing?**

_A: Variable shadowing refers to the practice of naming two variables for example, a global and a local variable and a callback function parameter with the same name and within scopes that over lap._

**Q: What does the variable scoping rule state?**

_A: Inner scope can access variables defined in the outer scope_

**Example:** Of global variable being accessible from inner scope function

```javascript
let points = 10;

function displayDouble() {
  let number = 2;
  number = points * number; // "points" is accessible from the inner scope
  console.log(number); // => 20
}

displayDouble();
```

**Example:** Variable shadowing - when two variables have the same name

```javascript
let number = 10;

function displayDouble() {
  // A new variable is declared with the same name of outer scoped variable
  let number = 3;
  number *= 2;
  console.log(number); // => 6
}

displayDouble();
console.log(number); // => 10
```
