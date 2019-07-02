//  npm install --save express    #Instalar express en el proyecto
var express = require('express');
var app  = express();

app.use(express.static('public'));

//Creamos un API para '/' que solo regresa un hola mundo
app.get('/',function(req,res){
  res.send("<h1>Hola Mundo</h1>");
});

app.get('/hola',function(req,res){
  console.log(__dirname)
  res.sendFile(__dirname+"/"+"index.html")
})

//Expresion regular de todo lo que inicie con "ab" y termine con "cd"
app.get('/ab*cd',function(req,res){
  res.send("Expresion regular")
})

var servidor = app.listen(8081,function(){
    console.log("Servidor arriba...")
});
