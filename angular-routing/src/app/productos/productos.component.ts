import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  nombre='Cecilia';
  edad=2;
  sueldos=[125,125,145,521];
  constructor() { }
  ngOnInit() {
  }
  miVar='D';
}
