# Hoisting

`Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their current scope`

### Scoping Overview

We know how scoping works in javascript. We have two types of scopes:

- Functional Scope
- Lexical(Block) Scope

To quickly get overview of them:

- Use of `var` gives us functional scoped variables
- Use of `let`/`const` gives us lexical scoped variable

You can get the detailed explaination of scoping in javascript [here](www.example.com)

## How Javascript performs `Hoisting`

When Javascript engine compiles our code, all variable declared with `var` and function declarations are hoisted/lifted to the top of the functional scope or at the top of their global scope. Consider the following piece of code written:

```js
function hoistingExample() {
  var x = 10;
  return x;
}
```

But before executing this piece of code Javascript changes the code as:

```js
function hoistingExample() {
  var x;
  var x = 10;
  return x;
}
```

Which means that if we try to access the variable `x` before initializing it we would get `undefined` as a value, because Javascript engine initializes all explicitly unintialized variables as `undefined`.

Now let's discuss when we declare the variable using `let`/`const` keyword:

```js
function hoistingExample() {
  let x = 10;
  return x;
}
```

We would comes accross an error something like this:

`ReferenceError: can't access lexical declaration 'x' before initialization`

It is commonly misunderstood by most people that by using `let`/`const`, we can avoid **Hoisting**. But that's not the case in fact. **Hoisting** process happens either we use `var` or `let`/`const`. The difference is, Javascript places the variables declared with `let`/`const` in something called **Temporal Dead Zone**. All variables in this zone stay uninitialized by Javascript engine until their statement is executed.

**So that's what Hoisting is and it happens in both cases, with `var` and `let`/`const`.**
