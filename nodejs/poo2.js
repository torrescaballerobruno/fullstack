function Persona(primerNombre){
	this.primerNombre = primerNombre;
}

Persona.prototype.caminar = function(){
	console.log("Estoy caminando :3");
};

Persona.prototype.saludar = function(){
	console.log("Hola! Me llamo "+ this.primerNombre);
};

function Estudiante(primerNombre, asignatura){
	Persona.call(this, primerNombre);
	this.asignatura = asignatura;
};

Estudiante.prototype = Object.create(Persona.prototype);

Estudiante.prototype.constructor = Estudiante;

Estudiante.prototype.saludo = function(){
	console.log("Hola! Me llamo "+this.primerNombre+". Estoy estudiando"+ this.asignatura+".");
};

Estudiante.prototype.despedida = function(){
	console.log("Adios!");
};

var estudiante1 = new Estudiante("Erick", "Matematicas");
estudiante1.saludo();
estudiante1.caminar();
estudiante1.despedida();

console.log(estudiante1 instanceof Persona);
console.log(estudiante1 instanceof Estudiante);