


class SomeClass {
   constructor(someParam) {
      this.baz = someParam;
   }
}


foo = new SomeClass("foo");
bar = SomeClass;

console.log(foo.baz); // -> foo
console.log(bar.baz); // -> undefined
