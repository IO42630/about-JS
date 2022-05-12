// ---------- MATH ----------
// document.write outputs data to the browser
document.write("5 + 4 = ", 5 + 4, "<br/>");

// Using + instead of , will treat everything as a string unless you use ()
document.write("5 + 4 = " + (5 + 4) + "<br/>");

document.write("5 - 4 = ", 5 - 4, "<br/>");
document.write("5 * 4 = ", 5 * 4, "<br/>");
document.write("5 / 4 = ", 5 / 4, "<br/>");

// Modulus remainder of a division
document.write("5 % 4 = ", 5 % 4, "<br/>");

var maxNum = Number.MAX_VALUE;

document.write("Max Num = ", maxNum, "<br/>");
document.write("Min Num = ", Number.MIN_VALUE, "<br/>");

// Numbers have 16 digits of precision
precisionTest = 0.1000000000000001;
document.write(precisionTest + 0.1000000000000001, "<br/>");

// Round number to 2 decimal places
var balance = 1563.87;
document.write("Monthly payment : ", (balance / 12).toFixed(2), "<br />");

var randNum = 5;

// Shortcut for adding 1
document.write("randNum++ = ", randNum++, "<br/>");
document.write("++randNum = ", ++randNum, "<br/>");

// The same exists for -
document.write("randNum-- = ", randNum--, "<br/>");
document.write("--randNum = ", --randNum, "<br/>");

// Perform a calculation on a value and assign the result
document.write("randNum += 5 = ", randNum += 5, "<br/>");
document.write("randNum -= 5 = ", randNum -= 5, "<br/>");
document.write("randNum *= 5 = ", randNum *= 5, "<br/>");
document.write("randNum /= 5 = ", randNum /= 5, "<br/>");

// Order of operations
document.write("3 + 2 * 5 = ", 3 + 2 * 5, "<br/>");
document.write("(3 + 2) * 5 = ", (3 + 2) * 5, "<br/>");


// Convert strings to numbers
document.write("Converted String : ", Number("3.14"), "<br />");

document.write("Converted Int : ", parseInt("5"), "<br />");
document.write("Converted Float : ", parseFloat("5.555"), "<br />");


// Math properties and methods
document.write("Math.E = ", Math.E, "<br/>");
document.write("Math.PI = ", Math.PI, "<br/>");

document.write("Math.abs(-8) = ", Math.abs(-8), "<br/>");
document.write("Math.cbrt(1000) = ", Math.cbrt(1000), "<br/>");
document.write("Math.ceil(6.45) = ", Math.ceil(6.45), "<br/>");
document.write("Math.floor(6.45) = ", Math.floor(6.45), "<br/>");
document.write("Math.round(6.45) = ", Math.round(6.45), "<br/>");
document.write("Math.log(10) = ", Math.log(10), "<br/>"); // Natural log
document.write("Math.log10(10) = ", Math.log10(10), "<br/>"); // Base 10 log
document.write("Math.max(10,5) = ", Math.max(10, 5), "<br/>");
document.write("Math.min(10,5) = ", Math.min(10, 5), "<br/>");
document.write("Math.pow(4,2) = ", Math.pow(4, 2), "<br/>");
document.write("Math.sqrt(1000) = ", Math.sqrt(1000), "<br/>");

document.write("Random # (1-10) = ", Math.floor((Math.random() * 10) + 1), "<br/>");
