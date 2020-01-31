Inheritance
-------------------------------------------------------
Inheritance refers to an object’s ability to access methods and other properties from another object. Objects can inherit things from other objects. Inheritance in JavaScript works through something called prototypes and this form of inheritance is often called prototypal inheritance.


__proto__
-------------------------------------------------------
All JavaScript objects have a prototype. Browsers implement prototypes through the __proto__ property and this is how we’ll refer to it. This is often called the dunder proto, short for double underscore prototype. Don’t EVER reassign this property or use it directly.


prototype
-------------------------------------------------------
Functions also have a prototype property. This is distinct from their __proto__ property. This makes discussion rather confusing, so I’ll spell out the syntax I’ll be using. When I refer to a prototype and the word “prototype” isn’t highlighted grey, I’m referring to the __proto__ property. When I use prototype in grey, I’m talking about a function’s prototype property.


Prototypal Inheritance
-------------------------------------------------------
Inheritance in JavaScript works through prototype and this form of inheritance is often called prototypal inheritance.
