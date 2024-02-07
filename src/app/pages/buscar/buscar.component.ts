import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../interfaces/programas.interface';
import { ProgramasService } from '../../services/programas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  texto:string='';
  movies:Movie[]=[];

  constructor(private activatedRoute: ActivatedRoute, private programasSvc:ProgramasService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.texto = params['texto'];

      this.programasSvc.buscarProgramas(params['texto']).subscribe((movies: Movie[]) => {
        this.movies = movies;
      });
    });
  }
}
