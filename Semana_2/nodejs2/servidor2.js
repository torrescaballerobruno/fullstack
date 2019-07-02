var express = require('express');
var app = express();

app.get('/',function(req,res){
  res.sendFile(__dirname+"/"+"index.html");
})

//Peticion de tipo get recibiendo parametros
app.get('/proc_get',function(req,res){
  var respuesta = {
    nombre : req.query.nombre,
    apellido : req.query.apellido
  }
  console.log(respuesta);

  //convertir en json y mandar al front
  res.end(JSON.stringify(respuesta))
})

//peticion de tipo post recibiendo parametros
//Para parsear la información que viene en el cuerpo de la peticion
var parser = require('body-parser');
var encodeparser = parser.urlencoded({extended: false});

app.post('/proc_post',encodeparser,function(req,res){
  var respuesta ={
    nombre : req.body.nombre,
    apellido : req.body.apellido
  }
  console.log(respuesta);
  res.end(JSON.stringify(respuesta));
})

var servidor = app.listen(8080,function(){
    console.log("Servidor on...");
})
