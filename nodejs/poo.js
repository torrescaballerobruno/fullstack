var persona = {
	nombre : "Erick",
	apellido : "Lopez",
	edad : 22,
	sumar : function(){
		console.log(10+2);
	},
	arreglo : [1,2,3],
	transporte : {
		tipo : "automovil",
		marca : "ferrari",
		anio : 2020,
		descripcion : "Me lleva y me trae a la escuela",
		ruido : function(){
			console.log("kuchau");
		}
	},
	mascotas:[
		{tipo: "perro",
		nombre: "Beethoven"},
		{tipo: "canario",
		nombre: "Aurelio"},
		{tipo: "gato",
		nombre: "Sr. Gato"}]
}

console.log("Nombre "+persona.nombre+" "+persona.apellido+" Edad: "+persona.edad);

persona.sumar(10,15);

persona.saludo = function(data){
	console.log(data);
}

persona.saludo("Wenas noshes");

console.log(persona.transporte);
persona.transporte.ruido();

persona.arreglo.forEach(function(element){
	console.log("valor: "+element);
})

persona.mascotas.forEach(function(element){
	console.log(element.tipo+"  "+element.nombre);
})