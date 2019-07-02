import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conocenos',
  templateUrl: './conocenos.component.html',
  styleUrls: ['./conocenos.component.scss']
})
export class ConocenosComponent implements OnInit {
  nombre='Cecilia silva';
  edad=22;
  email='cesos@gmail.com';
  sueldos=[17000000000,1600000000,190000000];
  activo=true;
  empresa='';
  dependencia='';
  titlepadre='Yo soy el titulo padre(conocenos) de mi hijo app-hijo'
  esActivo(){
    if(this.activo)
    return 'Trabajador activo';
    else
    return 'Trabajador inactivo';
  }
  pago(){
    let suma=0;
    for(let x=0; x<this.sueldos.length;x++){
      suma+=this.sueldos[x];
    }
    return suma;
  }
  constructor() { }

  ngOnInit() {
  }

}
