# Currying and Partial Functions

It is commonly misconcepted by most people (might not be you) that `currying` and `partial functions` are similar concepts. But, rather, that's not the case. They look a bit identical in practice but have different implementation and brings different usage with them.

Let's study both and deduce ourselves that whether they are similar concepts or not.

## Currying

`Currying is the process of taking a function with multiple arguments and returning a series of functions that take one argument and eventually resolve to a value.`

It transforms a single function of `_n_` arguments into `_n_` functions with a single argument each.
For example we have a functions `fn(a, b, c, d)`. By the process of currying we transforms it into four separate function calls as `fn(a)(b)(c)(d)`.

Currying does not call a function but just transforms it. Let's understand what currying is by the help of example:

```js
function currySum(f) {
  // curry(f) does the currying transform
  return function(a) {
    return function(b) {
      return function(c) {
        return f(a, b, c);
      };
    };
  };
}

function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = currySum(sum);
const temp = curriedSum(1)(2)(3);
console.log(temp); //  output: 6
```

The implementation is straightforward here:

- The result of `currySum` is a wrapper function `curriedSum(a)`
- When it is called like `curriedSum(1)`, the argument is saved in the Lexical Environment, and a new wrapper is returned `curriedSum(b)`
- Then this wrapper is called with `2` as an argument, and it passes until the third call is done. After that it passesthe call to the original `sum` function.

## Partial Functions

`Partialling is a technique of fixing a number of arguments to a function, producing another function of smaller arguments`

That is, partial application is the act of taking a function which takes multiple arguments, and locking in some of those arguments, producing a function that takes fewer arguments.

Javascript has a built-in method `bind()` (you can study about it [here](https://github.com/Fiju/javascript-core-concepts/tree/concept/call-bind-apply/call%2Cbind%2Capply)) that we can use to create a partial function. Let's look at a example to get better picture about it:

Consider the following piece of code

```js
const multiplier = (n1, n2) => {
  return Math.pow(n2, n1);
};
```

We want to use this function to make a function that gives squares and cube of given number:

```js
const square = multiplier.bind(null, 2);
const cube = multiplier.bind(null, 3);
square(6); // output: 36
cube(3):  // output: 27
```

The `bind` method turns function into a new function which implicitely set the parameters '2' and '3' against `square` and `cube` respectively, giving us new functions.

## Difference between the two

- Currying _always_ produces a unary functions. Whereas Partial application produces functions of arbitrary number of arguments fewer then the original one.
- Currying is not partial application. It can be implemented using partial application. You can’t curry a function that takes any number of arguments
