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
