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

// Sort an array (reverse() for reverse sort)
// Works for sorting strings
someArr.sort();

// Sort numbers
var numbers = [4, 3, 9, 1, 20, 43];

// Descending sort return y - x
numbers.sort(function (x, y) {
    return x - y
});
document.write("Num Array : ", numbers.toString(), "<br />");

// Combine arrays
var combinedArray = numbers.concat(someArr);

// Remove the last item
someArr.pop();

// Add items to the end
someArr.push("555-1212", "US");

// Deletes the first item
someArr.shift();

// Adds item to the first index
someArr.unshift("Tom Smith");

for (var i = 0; i < someArr.length; i++) {
    document.write(someArr[i], "<br />");
}
