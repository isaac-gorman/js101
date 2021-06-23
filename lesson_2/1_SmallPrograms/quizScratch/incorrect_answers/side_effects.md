# Side Effects

**Q: What are side effects in JavaScript?**

_A: In JS side effects are the modification of state through the invocation of a function or expression. In order for a function or expression to have a side effect, the state it modifies should be out of its local scope. Examples include:_

- _parsing an object by reference through functions to be mutated_
- _performing I/O operations_

## Quiz Question

> **Q: Which of the following code snippets have functions that have side-effects?**

---

- [x] **Snippet A**

```javascript
function volume(height, width, depth) {
  let result = height * width * depth;
  console.log(result);
  return result;
}
```

Snippet A does have side effects. The `volume()` function performs an output operation which is a side-effect.

---

- [x] **Snippet B**

```javascript
let readline = require("readline-sync");

function askYesOrNo(prompt) {
    let answer = readline.question(prompt);
    return answer;
}

}
```

Snippet B does have side effects. Snippet B is performing an input request from the keyboard.

---

- [x] **Snippet C**

```javascript
let boo = "gar";

function setBoo() {
    boo = "xyz";
}

}
```

Snippet C does have side effects. Within the function `setBoo()` the global variable `boo` is re-assigned, which is a mutation (side-effect).

---
