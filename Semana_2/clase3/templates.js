//instalar multer  #npm install --save multer
//instalar pug     #npm install --save pug

var express = require('express');
var app = express();

app.set('view engine','pug');
app.set('views','./views')

//Recibimos la peticion de nuestra primera vista
app.get('/primertemplate',function(req,res){
  res.render('primera_vista');
})

app.get('/dinamica',function(req,res){
  res.render('dinamica',{
    nombre: "Bruno TC",
    url: "http://www.google.com",
    usr:{nombre:"BRK" ,edad: "22"}
  })
})


//Recibiendo parametros desde el template
var bodyParser = require('body-parser');
var multer = require('multer');
var up = multer();

//Se despliega el form
app.get('/',function(req,res){
  res.render('form');
})

//configuracion para obtener la informacion
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(up.array());
app.use(express.static('public'))

//recibe la peticion
app.post('/recibe',function(req,res){
  console.log(req.body);
  res.send("Peticion recibida");
})

//Creando el servidor
var servidor = app.listen(8081,function(){
  console.log("Servidor arriba...");
})
