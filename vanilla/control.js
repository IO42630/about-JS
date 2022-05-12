// ---------- CONDITIONALS ----------
// Relational Operators : == != > < >= <=
// === : Equal value and type
// Logical Operators : && \\ !

var age = 8;

if ((age >= 5) && (age <= 6)) {
    document.write("Go to Kindergarten<br />");
} else if (age > 18) {
    document.write("Go to College<br />");
} else {
    document.write("Go to Grade ", age - 5, "<br />");
}

document.write("true || false = ", true || false, "<br />");

document.write("!true = ", !true, "<br />");

document.write("\"5\" == 5 = ", ("5" == 5), "<br />");

document.write("\"5\" === 5 = ", ("5" === 5), "<br />");

// Switch is used to match a limited number of options
switch (age) {
    case 5 :
    case 6 :
        document.write("Go to Kindergarten<br />");
        break;

    case 7 :
        document.write("Go to 1st Grade<br />");
        break;

    default :
        document.write("Subtract 5 from your age<br />");
}

// Ternary Operator assigns a value based on a condition
// (condition) ? iftrue : ifFalse
var canIVote = (age >= 18) ? true : false;

document.write("Can I Vote : ", canIVote, "<br />");

// ---------- LOOPING ----------

// while loops as long as a condition is true
var i = 1;
while (i <= 10) {
    document.write(i, ", ");
    i++;
}
document.write("<br />");

// do while is used when you must go through the loop at least once
do {
    var guess = prompt("Guess a number between 1 and 20");
} while (guess != 15)

alert("You guessed it! 15 was the number");

// for is a self contained looping structure
for (j = 0; j <= 20; j++) {

    // If j is divisible by 2 then skip back to the top of the loop
    if ((j % 2) == 0) {
        continue;
    }

    // If j is equal to 15 break completely out of the loop
    if (j == 15) {
        break;
    }
    document.write(j, ", ");
}
document.write("<br />");

var customer = {name: "Bob Thomas", address: "123 Main", balance: 50.50};

// for in cycles through an enumerable properties of an object
for (k in customer) {
    document.write(customer[k], "<br />");
}
