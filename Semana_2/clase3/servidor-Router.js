var express = require('express');
var app = express();
var alt = require('./alterno.js');

app.get("/",function(req,res){
  res.send("Pagina principal");
})

//Todo tipo de peticiones
app.all('/test',function(req,res){
  console.log(req.method) //Para sabe que tipo de peticion fue
  res.send("Cualquier tipo de peticion HTTP");
})

//Mandamos los url a la app
app.use('/alterno',alt)

//app.use('/usuario/alta')

var servidor = app.listen(8081,function(){
  console.log("Servidor arriba");
})
