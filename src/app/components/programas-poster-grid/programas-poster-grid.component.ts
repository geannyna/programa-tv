import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/programas.interface';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-programas-poster-grid',
  templateUrl: './programas-poster-grid.component.html',
  standalone: false,
  styleUrls: ['./programas-poster-grid.component.css'],
})
export class ProgramasPosterGridComponent implements OnInit {
  @Input() movies?: Movie[];

  constructor(private config: NgbRatingConfig, private router: Router) {
    // customize default values of ratings used by this component tree
    config.max = 10;
    config.readonly = true;
  }

  ngOnInit() {
    console.log(this.movies);
  }

  onMovieClick(movie: Movie) {
    this.router.navigate(['/programa', movie.id]);
  }
}
