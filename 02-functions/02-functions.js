
var superhero = {};

superhero.name = 'Superman';

var flyFunction = function() {
    console.log('Flying like a bird!');
};

superhero.fly = flyFunction;

superhero.fly();



hello1 = function () {
    console.log('hello1')
}


function hello2() {
    console.log('hello2')
    console.log('bar')
}


hello1()
hello2()


function  scopeTest() {
   var i = 2
  { let i2 = 3}


  {
    let i2 = 2
    //let i2 = 4 // let may not be redeclared
  }

  var i = 2 // var may be redeclared
}


scopeTest()
