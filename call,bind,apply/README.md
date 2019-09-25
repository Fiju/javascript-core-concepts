# Call, Bind and Apply method

Working with `this` operator in javascript can be a bit tricky. If we don’t fully grasp the working of `this`, we may end up with the famous _“it works, but I don’t know why”_ or worse: _“it doesn’t work and I don’t know why”_. This is where `Call, Bind and Apply` comes in handy for linking the value of `this`.

All three of the above mentioned methods belongs to `Function.prototype`, meaning they can be used by all functions. Before moving forward, there are few things worth mentioning about `this`:

- It always refers to an object.
- It refers to an object which calls the function it contains.
- In the global context `this` refers to either window object or is undefined if the `strict mode` is used.

Now let's discuss all three one by one and understand their working.

## Bind Method

The `bind()` method creates a new function that, when called, has its this keyword set to the provided value. This is extremely powerful as it let’s us explicitly define the value of this when calling a function.

```js
const user = {
  name: "Micheal",
  age: 30,
  getInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
};

const user2 = {
  name: "Clark",
  age: 45
};

const getInfoBounded = user.getInfo.bind(user2);
getInfoBounded(); //  Name: Clark, Age: 45
```

The `bind` creates a new method where `this` refers to the parameter in the parenthesis. This way the `bind()` method enables calling a function with a specified `this` value.

## Call Method

The `call()` method calls a function with a given `this` value and arguments provided individually. What that means, is that we can call any function, and _explicitly_ specify what `this` should reference within the calling function.

```js
const user = {
  name: "Micheal",
  age: 30,
  getInfo(...extraParams) {
    return `Name: ${this.name}, Age: ${this.age}, ${extraParams}`;
  }
};

const user2 = {
  name: "Clark",
  age: 45
};

user.getInfo.call(user2, "Gender: Male, ", "Marital Status: Single");
```

## Apply Method

The `apply()` method calls a function with a given `this` value and arguments provided as an array. `Apply` is same as call with the only difference how the extra parameters are passed to the function.

```js
const user = {
  name: "Micheal",
  age: 30,
  getInfo(...extraParams) {
    return `Name: ${this.name}, Age: ${this.age}, ${extraParams}`;
  }
};

const user2 = {
  name: "Clark",
  age: 45
};

user.getInfo.call(user2, ["Gender: Male, ", "Marital Status: Single"]);
```

### Comparison between call/bind/apply

|                        | **Time of execution** | **Time of binding** |
| ---------------------- | :-------------------: | ------------------: |
| **call() and apply()** |          now          |                 now |
| **bind()**             |        future         |                 now |

We use `bind()` when we want that function to later be called with a certain context, that is useful in events. Whereas `call()` or `apply()` are used when you want to invoke the function immediately, and modify the context.
