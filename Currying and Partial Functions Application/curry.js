//  Following function can be used to achieve currying or get partial function application

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      console.log(args.length, func.length);
      return func.apply(null, args);
    } else {
      console.log(args.length, func.length);
      return function(...args2) {
        return curried.apply(null, args.concat(args2));
      };
    }
  };
}
