import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProgramaComponent } from './pages/programa/programa.component';
import { BuscarComponent } from './pages/buscar/buscar.component';

export const routes:Routes=[

  {path: 'home', component: HomeComponent},
  {path: 'buscar/:texto', component: BuscarComponent},
  {path: 'programa/:id', component: ProgramaComponent},

  {path: '', pathMatch:'full', redirectTo: '/home'},
  {path: '**', pathMatch:'full', redirectTo: '/home'},

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
