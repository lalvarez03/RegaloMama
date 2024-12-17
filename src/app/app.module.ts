import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { NewBornComponent } from './NewBorn/NewBorn.component';
import { CarrousselComponent } from './carroussel/carroussel.component';
import { EmbarazadasComponent } from './Embarazadas/Embarazadas.component';
import { PrimerAñoComponent } from './PrimerAño/PrimerAño.component';
import { HomeComponent } from './Home/home.component';
import { CarrousselClientesComponent } from './carroussel-clientes/carroussel-clientes.component';

@NgModule({
  declarations: [
    NewBornComponent,
    EmbarazadasComponent,
    PrimerAñoComponent,
    HomeComponent,
    CarrousselComponent,
    CarrousselClientesComponent
  ],
  imports: [
    CommonModule // Importa CarrousselModule
  ],
  exports: [
    NewBornComponent,
    CarrousselComponent,
    CarrousselClientesComponent
  ]
})
export class AppModule { }