import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProgramaComponent } from '../pages/programa/programa.component';
import { BuscarComponent } from './buscar/buscar.component'
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    HomeComponent
    // ProgramaComponent,
    // BuscarComponent
  ],
  imports: [
    CommonModule,
    PipesModule
    // NgbRatingModule
  
  ]
})
export class PagesModule { }
