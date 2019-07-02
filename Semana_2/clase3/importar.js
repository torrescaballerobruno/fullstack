//Declaramos que clase se va a importar
var animal = require('./animal');

//Creamos los objetos
var perro = new animal.perro("Hunter","Poodle");
var gato = new animal.gato("Michi","egipcio");

//Imprimimos los objetos
console.log(perro);
console.log(gato);

//Mandamos a llamar su funcion definida
console.log(perro.ladrar());
console.log(gato.maullar());


console.log(animal.dias);

console.log(animal.dias[1]);
