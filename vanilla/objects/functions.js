// anon function
const talk = function () {
    console.log('hi');
    // a function without or with empty `return` returns `undefined`.
};

const yell = () => console.log('hey'); // lambda syntax


/* functions can be added to objects */
const person = {}; // empty object
person.talk = talk;
person.talk();
person.yell = yell;
person.yell();


/* adding functions with `this` */
person.name = 'Paul';
person.identify = function () {
    console.log("I'm " + this.name);
}; // `this` refers to class that contains the function
person.indentifyLa = () => console.log("I'm La " + this.name); // prints `undefined` (JS is weird)
person.identify();
person.indentifyLa();


/* passing functions */
passedIdentify = person.identify;
passedIdentify(); // passedIdentify belongs to the global scope
passedIdentify.call(person)


/* Closures */
const addFun = function () {
    let counter = 0;
    return function () {
        counter++
        return counter;
    }
};
const add = addFun(); // `addFun` is the 'definition of the function', `add` is the 'execution of the function'
let result1 = add();
let result2 = add();
let result3 = add();
let result = add();



// Functions provide code reuse and eliminate repetitive code

// Define a function that checks if a value is in an array
function inArray(arrayToCheck, value) {
    for (i = 0; i < arrayToCheck.length; i++) {
        if (arrayToCheck[i] === value) {
            return true;
        }
    }
    return false;
}

var randArray = [1, 2, 3, 4, 5];
const test1 = inArray(randArray, 4)

// Local variables defined in functions can't be accessed outside of
// the function

function times2(num) {
    var var2 = 2;
    return num * var2;
}

// Causes Error : document.write("Val of var2 : ", var2, "<br />");

// Pass a function as a parameter
function times3(num) {
    return num * 3;
}

function multiply(func, num) {
    return func(num);
}

const test2 =  multiply(times3, 15);

// Define a function expression
// We can assign functions to variables, store them in arrays,
// pass them into other functions and return them from functions
var triple = function (num) {
    return num * 3;
};

const test3 = multiply(triple, 45);

// Receive variable number of arguments
function getSum(...args) {
    return args.reduce((e, acc) => acc + e);
}

const test5 = getSum(1, 2, 3, 4, 5);


const anonVarTimes = (...args) => args.map(x => x * x); // map creates new array




// Recursive Function
function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

document.write("Factorial of 4 : ", factorial(4), "<br />");

// 1st: num = 4 * factorial(3) = 4 * 6 = 24
// 2nd: num = 3 * factorial(2) = 3 * 2 = 6
// 3rd: num = 2 * factorial(1) = 2 * 1 = 2


// destructuring
const obj2 = {id: 1, name: 'foo'}

function doBar(obj) {
    const {id, name} = obj;
    console.log(`This is ${id} ${name}.`)

}

doBar(obj2);

// JS is call-by-sharing (a.k.a call-by-object)
const fun32 = (a,b,c) => {
    // in any case a param is a local var
    // containing a reference
    // we can either modify the obj behind the reference
    // or we can assign a new reference
    a = a * 10;
    b.item = 'BB'
    c = { item : 'CC'}
}

ax = 10; // -> 10
bx = { item : 'B'}; // -> BB
cx = { item :  'C'}; // -> C
fun32(ax, bx, cx)

