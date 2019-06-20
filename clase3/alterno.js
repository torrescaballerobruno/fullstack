var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
  res.send("GET de raiz");
})

router.get('/hola', function(req,res){
  res.send("Hola Mundo desde GET!!");
})

router.post('/hola',function(req,res){
  res.send("Hola Mundo desde POST con router");
})

router.get('/id/:id',function(req,res){
  res.send("Id ingresado es:   "+req.params.id)
})

//usando expresion regular para numeros de 4 digitos
router.get('/id/:id([0-9]{4})/:nombre',function(req, res){
  res.send("ID:   "+req.params.id+"   Nombre: "+req.params.nombre)
})

//exportar el modulo para usarlo en servidor-router.js
module.exports = router;
