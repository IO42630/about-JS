

/*


In JS classes are a special functions. +
Classes have a constructor() method,
that is called each time the class object is initialized (=called?).
 */


class SomeClass {
   constructor(someParam) {
      this.baz = someParam;
   }
}


foo = new SomeClass("foo");
bar = SomeClass;

console.log(foo.baz); // -> foo
console.log(bar.baz); // -> undefined

const br = 0;

// ==== `new` keyword
//
// 1. Creates a blank, plain JavaScript object;
// 2. Links (sets the constructor of) this object to another object;
// 3. Passes the newly created object from Step 1 as the this context;
// 4. Returns this if the function doesn't return an object.