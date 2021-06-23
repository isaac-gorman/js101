# Pass-By-Reference

**Q: What is pass-by-reference?**

_A: Pass-by-reference is whenever you pass an object data type to a function_

**Q: What is the difference between pass-by-reference and pass-by-value?**

_A: Whenever you pass-by-value you are passing a function a copy of a value, and passing-by-reference does not make a copy of your value. Passing-by-reference actually passes a pointer to the original data_

**Passed by Reference**

- Arrays
- Objects

**Passed by Value**

- Everything else (primitive data types)

**Q: What is are the behaviors that JS exhibits whenever objects are passed-by-reference?**

_A: Whenever a function is passed by reference any changes made to the object within the function will affect the original object_

## Quiz Question

> **Q: Which of the following code snippets use pass-by-reference at least once?**

---

- [ ] **Snippet A**

```javascript
function foo(s) {
  return s + s;
}

foo("abc");
```

Snippet A does not use pass-by-reference at all. It passes `abc` to the `foo()` function and then the function returns a primitive value of `("abcabc")`

---
