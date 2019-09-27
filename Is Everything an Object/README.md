# Is Everything an Object in Javascript?

It is believed by most Javascript developers that _Everything is an Object in Javascript_. Well that's not true in fact. Major part of Javascript is using `Objects` but not everything. Javascript has two types of data type:

1. Primitives
2. Non-primitives - that are objects

Meaning there are Objects(non-primitive data type) and non-objects(that are primitive data variables)

A common argument given by the developers who believe in this misconception is that: _`primitives have various methods associated with them`_. Thus they are also objects. For example, `string` data type has method `toUpperCase()` which gives the idea that `string` is an Object data type. But that's not how Javascript handles such method calls.

The solution looks a little bit awkward, but here it is:

- Primitives are still primitive.
- Javascript allows access to methods and properties of `strings`, `numbers`, `boolean` and `symbols`.
- For allowing the access a special `“object wrapper”`, that provides the extra functionality, is created and then is destroyed.

The `“object wrappers”` are different for each primitive type and are called: `String`, `Number`, `Boolean` and `Symbol`. Thus, they provide different sets of methods

Let consider an example:

```js
const temp = "this is a random string";
console.log(temp.toUpperCase()); // output: THIS IS A RANDOM STRING
```

Now let's see what actually happens:

1. The string `temp` is a primitive. So in the moment of accessing its property, a special object is created that knows the value of the string, that has useful methods like `toUpperCase()` in our case.
2. That method runs and returns a new string (logged by console statement).
3. The special object is destroyed, leaving the primitive str alone.

I hope this article makes you believe that not **_Everything_** is an object in Javascript
