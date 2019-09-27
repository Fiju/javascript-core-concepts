# Constructor Function

Constructor Functions are technically a regular function with two conventions:

- Their names start with a capital letter. (Not compulsory, just convention)
- They are to be executed with a “new” operator

We know we can create an Object either using `new Object({...})` syntax or by using figure brackets `{...}`. But what if we need to create multiple similar objects. In that case, we have to either iterate or something similar. But instead, we can achieve it by using constructor functions and the `new` operator.

### **What Javascript does with Constructor Function?**

When a function is executed with `new` operator it does the following things:

- A new empty object is created and assigned to _`this`_
- The function body executes. Usually it modifies _`this`_, adding new properties to it.
- The value of this is returned

Let's examine these steps with the help of following code:

```js
function User(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.isEmployed = true;
}

const user = new User("Anna", 27, "Female");
```

What happens is:

1. Javascript sees a `new` keyword and creates a new empty object

```js
user = {};
```

2. The constructor function `User` is called with the _`this`_ value reference the empty object created
3. The constructor body executes, modifying the empty object `{}` referenced by _`this`_. Adding properties to the object referenced by _`this`_
4. The value of _`this`_ is returned assigned the referenced object to the `user` variable

```js
user = { name: "Anna", age: 27, gender: "Female", isEmployed: true };
```

### **Return Value**

Usually, `constructors` do not have a `return` statement. Their task is to write all necessary stuff into _`this`_, and it automatically becomes the result.

But if there happens to be a `return` statement, then the rule is simple:

- If `return` is called with an object, then the object is returned instead of _`this`_.
- If `return` is called with a `primitive`, it’s ignored.

In other words, `return` with an object returns that object, in all other cases _`this`_ is returned.

### **`new.target` Keyword**

Inside a function, we can check whether it was called with `new` or without it, using a special `new.target` property. It is empty for regular calls and equals the function if called with `new`. We can modify the above function to create an object even if it is called without `new` operator as:

```js
function User(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.isEmployed = true;
}

const user = new User("Anna", 27, "Female");
```

We discussed that arrow functions does not have a `new.target` operator linked with them. Thus, they cannot be used to create constructor functions. You can view the detailed explaination of arrow functions [here](https://github.com/Fiju/javascript-core-concepts/tree/concept/arrow-function/Arrow%20Function)
