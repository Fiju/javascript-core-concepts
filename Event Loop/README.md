# Event Loop

Javascript is single threaded language, i.e. it can handle one task at a time. It has a single `call stack`, which along with other parts like `heap`, `queue` constitute Javascript Concurrency Model, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks.

Let's learn about the above mentioned keywords first before moving forward:

### **Call Stack:**

Javascript has a single call stack. It keeps track of what function is currently being run and what functions are called from within that function forming a stack of frames.

### **Heap:**

Objects are allocated in a heap which is just a name to denote a large mostly unstructured region of memory.

### **Queue:**

A JavaScript runtime uses a message queue, which is a list of messages to be processed. Each message has an associated function which gets called in order to handle the message.

![](https://mdn.mozillademos.org/files/4617/default.svg)

## How Concurrency is performed by Javascript?

The processing of functions continues until the stack is once again empty; then the event loop will process the next message in the queue (if there is one).

Let's take an example where `setTimeout` is being used in code, to get the clear idea about how Javascript handle concurrent operations:

```js
const bar = () => console.log("bar");

const baz = () => console.log("baz");

const foo = () => {
  console.log("foo");
  setTimeout(bar, 0);
  baz();
};

foo();
```

Can you guess the output of this code?
Surprisingly it print:

```
foo
baz
bar
```

When this code runs, first `foo()` is called. Inside `foo()` we first call `setTimeout`, passing `bar` as an argument, and we instruct it to run immediately as fast as it can, passing `0` as the timer. Then we call `baz()`.

At this point the call stack looks like this:
![](https://flaviocopes.com/javascript-event-loop/call-stack-second-example.png)

and the execution order is as:
![](https://flaviocopes.com/javascript-event-loop/execution-order-second-example.png)

When any asynchronous operation is encounter by Javascript, in our case it is `setTimeout`, it direct those operation into `message queue`. When all synchronous operation are completed, Javascript engine looks at the message queue, and starts picking the messages one by one executing the function associated. This is an endless process, JavaScript engine waits for tasks, executes them and then sleeps waiting for more tasks to be available in queue.

To get the visualization of how `Event Loop` executes, you can visit [this](http://latentflip.com/loupe/?code=ZnVuY3Rpb24gYmFyKCkgewogICAgY29uc29sZS5sb2coImJhciIpOwp9CgpmdW5jdGlvbiBiYXooKSB7CiAgICBjb25zb2xlLmxvZygiYmF6Iik7Cn0KCmZ1bmN0aW9uIGZvbygpIHsKICBjb25zb2xlLmxvZygiZm9vIik7CiAgc2V0VGltZW91dChiYXIsIDApOwogIGJheigpOwp9Cgpmb28oKTs%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D) site
