import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConocenosComponent } from './conocenos/conocenos.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  {path:'conocenos',
  component:ConocenosComponent},
  { path:'productos',
  component: ProductosComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
