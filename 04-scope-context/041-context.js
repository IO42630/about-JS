
console.log(this) // -> {}

function logFunc1(){console.log(this)}
logFunc1() // -> Object [global]

class SomeObj{  logFunc2(){    console.log(this);  }}
(new SomeObj).logFunc2(); // -> SomeObj {}



var someVar = {
  logFunc3 : function(){
    console.log(this);
  }
}


// ?? open questions
//logFunc1().call(SomeObj); // -> SomeObj
//logFunc1().call(someVar)
