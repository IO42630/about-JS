
const mainHTML = document.querySelector('html');
const body = document.querySelector("body");
const input = document.querySelector("input");
const p = document.querySelector("p");

mainHTML.onclick = function() {console.log('onclick')};

console.log(mainHTML, body, input, p)

input.onwheel = function() {console.log('onwheel')}

mainHTML.oncopy = function() {console.log('oncopy')}
mainHTML.onpaste = function() {console.log('onpaste')}

