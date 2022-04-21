'use strict';

let msg;          // declaration
msg = 'hello';    // initialization
let a = 'hello';  // definition

//
let b = 3, c = 4, d = 5;

// var naming rules
// only letters, digits, $ , _
// first char not digit


// constants
const asdf = 'asdf';


// var vs let


var person = {}; // empty object

person.name = 'Bob';


var object1 = {
    hello: 'world',
    world: 'hello',
    nested_object: {
        nested_propery: 'asadf'
    }
}

console.log(object1.nested_object.nested_propery)

/* Scope */
// variables are scoped to code block



/* Declaration Keywords */



/* `var` vs `let` */
var i = 2
var i = 2 // `var` may be redeclared

let b2 = 2;
{ let b2 = 2 }  // `let` may not be redeclared.
const b3 = 3; // like `let`, except no reassignment.


