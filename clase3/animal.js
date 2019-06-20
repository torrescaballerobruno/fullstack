//Defini Clases que se pueden mandar a llamar desde otro js
module.exports.perro = function(nombre,raza){
  this.nombre = nombre;
  this.raza = raza;
  this.ladrar = function(){
    return "Wouf  "+this.nombre;
  }
}

module.exports.gato = function(nombre,raza){
  this.nombre = nombre;
  this.raza = raza;
  this.maullar = function(){
    return "Miau   "+this.nombre;
  }
}
//Arreglo de dias que se puede exportar
module.exports.dias = ["Lunes","Martes","Miercoles"];
