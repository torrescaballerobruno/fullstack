var eventos = require('events');

var persona = new eventos.EventEmitter();

var  saludarHandler = function(){
	let regreso = true;
	console.log("Hola amigo!!!");
	if(regreso){
		persona.emit('charlar');
	}else{
		persona.emit('adios');
	}
}

var charlarHandler = function(){
	console.log("que milanesas que te bisteces");
}
var adiosHandler = function(){
	console.log("Tu quien eres?!");
}

persona.on('charlar',charlarHandler);
persona.on('adios',adiosHandler);
persona.on('saludar',saludarHandler);

persona.emit('saludar');
