import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppNavbar } from '../navbar/navbar.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { ProgramasPosterGridComponent } from './programas-poster-grid/programas-poster-grid.component';
import { PipesModule } from '../pipes/pipes.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CastSlideShowComponent } from './cast-slide-show/cast-slide-show.component';



@NgModule({
  declarations: [
    AppNavbar,
    ProgramasPosterGridComponent
    // SlideShowComponent,
    // ProgramasPosterGridComponent,
    // CastSlideShowComponent
  ],
  exports: [
    AppNavbar,
    ProgramasPosterGridComponent
    
    // SlideShowComponent,
    // CastSlideShowComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
