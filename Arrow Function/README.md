# Arrow Function

ES6(ES2015) brought a lot of new features with it and **Arrow Function** was one of those many great features. It helped making the code more concise and simplified functional scope.

According to the documentation:

_`An arrow function expression is a syntactically compact alternative to a regular function expression, although without its own bindings to this, arguments, super, or new.target keywords`_

Let's go through the statement step by step:

### **Alternative to a Regular Function Expression:**

In javascript there are two ways of defining functions:

- **Function Declarations**

```js
function fn() {
  //  some statements....
}
```

- **Function Expressions**

```js
const fn = function() {
  //  some statements....
};
```

You can go through the detailed difference of the two [here]().
Now coming back to the topic. Arrow gives us _`syntactically compact alternative to a regular function expression`_, that is we can write the above functional expression using arrow function as:

```js
const fn = () => {
  //  some statements....
};
```

We can use arrow functions wherever functional expressions are being used, for instancs in iterators, such as:

```js
[elements].map(element => {
  return element.length;
});
```

### **Bindings to the _`this`_:**

An **arrow function** does not have its own _`this`_, instead it is picked from the outer lexical scope. Arrow functions follow the normal variable lookup rules. So while searching for _`this`_ which is not present in current scope, an arrow function ends up finding the _`this`_ from its enclosing scope.

### **Arguments:**

Arrow functions do not have their own `arguments` object. For those who are not familiar with `arguments` object:

```
arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function
```

Now let's consider the following function declaration where variant number of parameter are provided:

```js
function fn() {
  console.log(...arguments);
}

fn(1, 2, 3, 4, 5); //  outputs: [1, 2, 3, 4, 5]
```

But with arrow functions, there is no `arguments` keyword available. Thus, if we run the following code:

```js
const fn = () => {
  console.log(...arguments);
};

fn(1, 2, 3, 4, 5);
```

It would give out error: _`ReferenceError: arguments is not defined`_

### **No `super`:**

Arrow functions do not have `super`. It’s taken from the outer function/lexical scope just like `this` keyword.

### **No `new.target` keyword:**

In the chapter, [Contructors](), we saw how a simple function can be modified to work as a `constructor` by using the `new` keyword. But arrow functions does not contain `new.target` keyword associated with them thus they cannot be used to make `constructors`

## Syntax

There are three variations for arrow function syntax:

- Syntax with Multiple Parameters

```js
const fn = (x, y) => {
  return x + y;
};
```

- Syntax with One Parameters

```js
const fn = x => {
  return x;
};
```

- Syntax with No Parameters

```js
const fn = () => {
  return x;
};
```

- Syntax with just return or single Statement

```js
const fn = (x, y) => x + y;
```
