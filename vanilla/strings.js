// ---------- STRINGS ----------
var randStr = "A long " + "string that " + "goes on and on";

// String length
document.write("String Length : ", randStr.length + "<br/>");

document.write("Index for \"goes\" : ", randStr.indexOf("goes"), "<br/>");

// Return the value using a start and end index
document.write(randStr.slice(19, 23) + "<br/>");

// Return everything after the start index
document.write(randStr.slice(19) + "<br/>");

// Return the value using the start index and length
document.write(randStr.substr(19, 4) + "<br/>");

// Replace a string
document.write(randStr.replace("and on", "forever") + "<br/>");

// Get character at an index
document.write("At Index 2 : ", randStr.charAt(2) + "<br/>");

// Split a string into an array
var randStrArray = randStr.split(" ");

// Trim white space
randStr = randStr.trim();

// Convert to uppercase
document.write(randStr.toUpperCase() + "<br/>");

// Convert to lowercase
document.write(randStr.toLowerCase() + "<br/>");

// Styling with JS
var strToStyle = "Random String";

document.write("Big : ", strToStyle.big(), "<br />");
document.write("Bold : ", strToStyle.bold(), "<br />");
document.write("Font Color : ", strToStyle.fontcolor("blue"), "<br />");
document.write("Font Size : ", strToStyle.fontsize("8em"), "<br />");
document.write("Italics : ", strToStyle.italics(), "<br />");
document.write("Google : ", strToStyle.link("http://google.com"), "<br />");
document.write("Small : ", strToStyle.small(), "<br />");
document.write("Strike : ", strToStyle.strike(), "<br />");
document.write("Sub : ", strToStyle.sub(), "<br />");
document.write("Sup : ", strToStyle.sup(), "<br />");


