/*
var fs = require("fs");
var data = fs.readFileSync('lista.txt');

console.log(data.toString());
console.log("Termina el programa");
*/

var fs = require("fs");
fs.readFile('lista.txt',function(err, data){
	if (err) return console.error(err);
	console.log(data.toString());
});