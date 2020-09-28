

function add(a,b) {
  this.result = a+b;
  return this.result;
}


add.prototype.addTwice = function (a,b) {
    this.result = a+b+b;
    return this.result;
}

add.prototype.printSome = function () {
   console.log("printed some.");
}

var try1 = add(1,2);
console.log(try1)


new add().printSome();

 // console.log(add.addTwice(1,2));
