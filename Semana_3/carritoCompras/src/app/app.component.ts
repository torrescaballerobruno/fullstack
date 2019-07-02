import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  art={
    codigo: null,
    descripcion:null,
    precio:null
  }
  articulos=
  [{codigo:1, descripcion:'papas', precio:10.55},
  {codigo:2, descripcion:'manzanas', precio:15},
  {codigo:3, descripcion:'peras', precio:20},
  {codigo:4, descripcion:'sandia', precio:50},
  {codigo:5, descripcion:'guayaba', precio:13},
];
hayRegistros(){
  return this.articulos.length;
}
borrar(art){
  for(let x=0;x<this.articulos.length;x++){
    if (this.articulos[x].codigo==art.codigo){
      this.articulos.splice(x,1);
      return;
    }
  }
}
seleccionar(art){
  this.art.codigo=art.codigo;
  this.art.descripcion=art.descripcion;
  this.art.precio=art.precio;
}
agregar(){
  for(let x=0;x<this.articulos.length;x++)
  if(this.articulos[x].codigo==this.art.codigo){
    alert("Ya existe un articulo con ese codigo");
    return;
  }
  this.articulos.push(
    {codigo:this.art.codigo,
      descripcion:this.art.descripcion,
      precio:this.art.precio}
  );
  this.art.codigo=null;
  this.art.descripcion=null;
  this.art.precio=null;
}

}
