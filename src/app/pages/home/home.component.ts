import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/programas.interface';
import { ProgramasService } from '../../services/programas.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];
  constructor(private programasSvc: ProgramasService) {}

  ngOnInit(): void {
    this.programasSvc.getProgramas().subscribe((data) => {
      this.movies = data;
      console.log(data);
    });
  }

  verDetalle(id: string) {
    localStorage.setItem('movieId', id);
  }
}
