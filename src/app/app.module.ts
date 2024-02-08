import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProgramasPosterGridComponent } from './components/programas-poster-grid/programas-poster-grid.component';
import { SlideShowComponent } from './components/slide-show/slide-show.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';
import { ProgramaComponent } from './pages/programa/programa.component';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    BuscarComponent,
    NavbarComponent,
    HomeComponent,
    ProgramaComponent,
    SlideShowComponent,
    ProgramasPosterGridComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    NgbRatingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
