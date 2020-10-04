



var talk = function() {
    console.log('hi');
    return 2;
};

person.talk = talk;
person.talk();
console.log(person.talk())






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

bat = x => 2*x;


