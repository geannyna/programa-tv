import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
@Component({
    selector: 'app-root',
    standalone: true,
  imports: [ CommonModule, RouterOutlet, NavbarComponent, HomeComponent],
    templateUrl: './app.component.html',
    //template:`<app-navbar></app-navbar>`,
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'programasTV';

}
