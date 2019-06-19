var express = require('express');
var app = express();
var fs = require("fs");

var usr = {
  "usuario4":{
    "nombre" : "erick",
    "contrasenia" : "pollo123",
    "profesion" : "nini",
    "id": 4
  }
}
app.get('/',function(req,res){
  res.sendFile(__dirname+"/"+"index2.html" );
})
app.get('/listUsers',function(req,res){
  fs.readFile(__dirname+"/"+"usuarios.json","utf8",function(err,data){
    console.log(data);
    res.end(data);
  });
})
var parser = require('body-parser');
var encodeparser = parser.urlencoded({extended: false});
app.post('/addUser',encodeparser,function(req,res){
  fs.readFile(__dirname+"/"+"usuarios.json",'utf8',function(err,data){
    data = JSON.parse(data);
    data["usuario4"] = usr["usuario4"];
    console.log(data);
    res.end(JSON.stringify(data));
  });
})


//Ejercicio 1 para agregar otro usuario al json, pero mandando los datos desde el front
//Ejercicio 2 mandar solo los nombres de los usuarios desde el back al front


var servidor = app.listen(8081,function(){
  console.log("Server on...")
})
