//instalar express    #npm install --save express
//instalar mongoose   #npm install --save mongoose
//instalar pug        #npm install --save pug
//instalar multer     #npm install --save multer

/*
    ---comandos de mongo---
    use nombreBase
    help
    db.help()
    show collections
*/

//Importaciones
var express = require ('express');
var mongoose = require ('mongoose');
var bodyParser = require('body-parser');
var multer = require('multer');
var app = express();
var upload = multer();

//Configuraciones
mongoose.connect('mongodb://localhost/viernes');
app.set('view engine','pug');
app.set('views',"./views");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(upload.array());

//Definir un esquema del tipo de objetos que se van a guardar
var personaSchema = mongoose.Schema({
  nombre : String,
  edad: Number,
  nacionalidad: String
});
var Persona = mongoose.model("Persona",personaSchema);

//Pagina principal
app.get('/',function(req,res){
  res.render('persona');
})

app.post('/persona',function(req,res){
  var info = req.body;
  if(!info.nombre || !info.edad || !info.nacionalidad){
    res.render('mensaje',{mensaje: "Se ingreso mal la informacion",
        type : "error"});
  }else{
    var nuevaPersona = new Persona({
      nombre : info.nombre,
      edad : info.edad,
      nacionalidad : info.nacionalidad
    });
    console.log(nuevaPersona);

    //Guardando el objetito
    nuevaPersona.save(function(err,Persona){
      //nuevaPersona = Persona;
      if(err){
        res.render('mensaje',{mensaje : "Error en la base", type : "error"});
      }else {
        res.render('mensaje',
            { mensaje : "Persona registrada",
                type: "sucess",
                persona: info
            });
      }
    });
  }
});

//Buscar todos
app.get('/find',function(req,res){
  //Persona.find(function(err,response){
  //Persona.find({nombre: "Bruno",nacionalidad: "mexicana"}, function(err,response){
  Persona.find({nombre: "Bruno"}, 'nombre' , function(err,response){
    console.log(response);
    res.send(response);
  });
});

//Busca el primero
/*    Busqueda por rango
      $lt:   -> valores menores
      $lte:  -> valores menores o iguales
      $gt:   -> valores mayores
      $gte:  -> valores mayores o iguales
      edad : { $gte : 18 }      //mayores a 18
      edad : { $gte : 20, $lte : 25}      //entre 20 y 25
*/
app.get('/find2',function(req, res){
  Persona.findOne(function(err, response){
  //Persona.findOne({nombre:"Ceci"}, function(err, response){
  //Persona.findOne({nombre: "Juanin", edad: {$lt: 25 } },"nombre edad",function(err, response){
    console.log(response);
    res.send(response);
  })
})

//Buscar por _id
app.get('/find3',function(req,res){
  Persona.findById("5d0cf0475e7c524dd73b31ba",function(err,response){
    console.log(response);
    res.send(response);
  })
})

//update
app.get('/update',function(req,res){
  //Persona.findOneAndUpdate(filtros, datos a actualizar, callback);
  //Persona.findByIdAndUpdate(_id, datos a actualizar,callback)
  Persona.update({edad : 22},{nombre: "BRK",edad :23},
    function(err,response){
      console.log(response);
      res.send(response);
    })
})

//eliminar datos (delete)
app.get('/delete',function(req,res){
  //Persona.findOneAndRemove(filtros,callback);
  //Persona.findByIdAndRemove(_id,callback);
  Persona.remove({edad : 23},function(err,response){
    if(err) res.send("No se elimino de la base")
    else res.send("Registro eliminado")
  })
})



//Servidor
var servidor = app.listen(8081,function(){
  console.log("Servidor activo...");
})
