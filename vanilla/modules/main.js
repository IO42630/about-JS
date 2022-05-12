

// CommonJS Syntax:


const moduleCommonJS = require('./module-common.js');
let FOO = moduleCommonJS.uppercase( moduleCommonJS.foo);
console.log(FOO);


import {foo} from "./module-common";
console.log(foo);



// ES6 Syntax
let moduleES6 = require('./module-es6');
console.log(moduleES6.fooES6);

import {fooES6} from "./module-es6";

console.log(fooES6);
