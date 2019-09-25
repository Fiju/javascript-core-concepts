# Closures

```
A closure is the combination of a function and the lexical environment within which that function was declared.
```

In other words, a closure gives us access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time. To use a closure, we define a function inside another function and expose it by returning it or pass it to another function. The inner function will have access to the variables in the outer function scope, even after the outer function has returned. That's the general concept about closure.

### Example

Let's consider the following block of code

```js
function outerFunc() {
  let temp = "Sample";
  function innerFunc() {
    console.log(temp);
  }
  return innerFunc;
}

let refFunc = outerFunc();
refFunc();
```

At first glance, it may seem unintuitive that how does this code still works. In some programming languages, the local variables within a function exist only for the duration of that function's execution. Once `outerFunc()` has finished executing, you might expect that the name variable would no longer be accessible. But that is not the case with javascript as it forms `closures` against each function. As described earlier, closure creates a combination of a function and the lexical environment, which consits of any local variables that were in-scope, within which that function was declared. In this case, `refFunc` is a reference to the instance of the function displayName created when `outerFunc` is ran. The instance of `innerFunc` maintains a reference to its lexical environment, within which the variable name exists. For this reason, when `refFunc` is invoked, the variable name remains available for use and "Sample" is passed to console statement.

## Use Cases

Few of the use cases with closures are:

- Data privacy
- Event handlers
- Callback functions
- Partial applications
- Currying

## References

- [Closures - Jacascript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [Master the Javascript Interview: What is closure?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36)
