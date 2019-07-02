//Comentar la forma 1 si se quiere observar el efecto de la forma 2 y viceversa

//forma 1 de leer archivos
//Bloquendo codigo
/*
var fs = require("fs");
var data = fs.readFileSync('lista.txt');   //si aqui hubiera error, truena la linea de ejecucion del codigo

console.log(data.toString());
console.log("Termina el programa");
*/

//forma 2 de leer archivos
//sin bloquear codigo

var fs = require("fs");
fs.readFile('lista211.txt', function (err, data) {     //aqui marcaria error y no hace que truene la linea de ejecucion
//fs.readFile('lista.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

//para demostrar la ventaja de hacerlo asincrono
//Primero Realiza esta parte antes que las demas
//o conforme vaya acabando las tareas.
console.log("Program Ended");

for(let j = 1; j<=10; j++){
  console.log("Hola x"+j+" xD");
}
