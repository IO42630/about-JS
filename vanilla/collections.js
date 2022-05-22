let someArr = ["A", 1];


let a1 = someArr[0]; // access item
someArr[3] = "B"; // set item (.length is now 4 despite element 3 missing). -> [ 'A', 1,  , 'B' ]
let foo = 'asfd' /*?*/
foo
// .splice(
//          position to add remove/items: number,
//          # of items to remove: number?,
//          elements to be added: Object...?
// )
someArr.splice(1, 1); // delete element -> [ 'A',  , 'B' ]
someArr.splice(1, 1, 'D', 2); // -> [ 'A', 'D', 2, 'B' ]

let s1 = someArr.toString(); // ~ toString() -> A,D,2,B
let s2 = someArr.join('-') // -> A-D-2-B

// Delete an index
delete someArr[3]; // -> [ 'A', 'D', 2 ]

// TODO continue here


someArr.sort(); // -> [ 2, 'A', 'D' ]
someArr.reverse(); // -> [ 'D', 'A', 2 ]

var numArr = [1, 3, 2];
numArr.sort((x, y) => x - y); // ascending -> [ 1, 2, 3 ]

var combinedArray = numArr.concat(someArr); // [ 1, 2, 3, 'D', 'A', 2 ]


someArr.pop(); // remove the last item
someArr.push("555-1212", "US"); // add items to the end
someArr.shift(); // delete the first item
someArr.unshift("Tom Smith"); // add item to the first index



someArr.filter( x => x > 2)
    .forEach( x => console.log(x))
