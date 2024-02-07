import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Movie } from '../../interfaces/programas.interface';
import { ProgramasService } from '../../services/programas.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  
  movies:Movie[] = [];
  moviesSlideShow:Movie[] = [];
  @HostListener('window:scroll',['$event'])
  onScroll(){
    //console.log('hola')

    const pos = (document.documentElement.scrollTop || document.body.scrollTop)*1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);
    
    if (pos > max) {
      if (this.programasSvc.cargando) {return;}
      this.programasSvc.getProgramas().subscribe(movies=>{
        this.movies.push(...movies);
        //console.log(movies)
      })
    }
   
  }
  constructor(private programasSvc:ProgramasService ) {}

  ngOnInit(): void {
    
    this.programasSvc.getProgramas().subscribe(movies=>{
        
      this.movies = movies;
      this.moviesSlideShow = movies;
      console.log(movies);
    })
  }

  ngOnDestroy(){
    this.programasSvc.resetProgramaPage();
  }

}
