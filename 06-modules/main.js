

// CommonJS Syntax:
const moduleCommonJS = require('./module-common.js');
let foo = moduleCommonJS.uppercase( moduleCommonJS.foo);
console.log(foo);



// ES6 Syntax
let moduleES6 = require('./module-es6');
console.log(moduleES6.foo);

